import React, { useEffect, useState } from 'react';
import { sanityClient } from '../sanityClient';
import { Download, FileText, Bell } from 'lucide-react';

export const NoticeBoard = () => {
  const [notices, setNotices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // GROQ Query: Notices sorted by latest date + fetching PDF direct URL
    const query = `*[_type == "notice"] | order(date desc) {
      _id,
      title,
      category,
      date,
      isNew,
      "pdfUrl": pdfFile.asset->url
    }`;

    sanityClient
      .fetch(query)
      .then((data) => {
        setNotices(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Sanity fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12 text-gray-500 font-medium">
        Loading Notices...
      </div>
    );
  }

  return (
    <section className="py-12 bg-gray-50" id="notices">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Bell className="w-8 h-8 text-blue-800" />
          <h2 className="text-3xl font-bold text-gray-900">Notice Board & Circulars</h2>
        </div>

        {notices.length === 0 ? (
          <p className="text-gray-500">No notices posted yet.</p>
        ) : (
          <div className="space-y-4">
            {notices.map((notice) => (
              <div
                key={notice._id}
                className="p-5 border border-gray-200 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white shadow-sm hover:shadow-md transition gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full font-semibold">
                      {notice.category || 'General'}
                    </span>
                    {notice.isNew && (
                      <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded-full font-bold animate-pulse">
                        NEW
                      </span>
                    )}
                  </div>
                  <h3 className="font-semibold text-lg text-gray-800 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-gray-400 shrink-0" />
                    {notice.title}
                  </h3>
                  {notice.date && (
                    <p className="text-xs text-gray-500">Posted on: {notice.date}</p>
                  )}
                </div>

                {notice.pdfUrl && (
                  <a
                    href={`${notice.pdfUrl}?dl=${encodeURIComponent(notice.title)}.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start sm:self-auto px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition flex items-center gap-2 text-sm font-medium shadow-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};