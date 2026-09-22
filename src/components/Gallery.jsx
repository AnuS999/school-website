import React, { useEffect, useState } from 'react';
import { sanityClient, urlFor } from '../sanityClient';
import { Image as ImageIcon } from 'lucide-react';

export const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = `*[_type == "gallery"] | order(_createdAt desc)`;

    sanityClient
      .fetch(query)
      .then((data) => {
        setPhotos(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gallery fetch error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="text-center py-12 text-gray-500 font-medium">
        Loading Gallery...
      </div>
    );
  }

  return (
    <section className="py-12 bg-white" id="gallery">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <ImageIcon className="w-8 h-8 text-blue-800" />
          <h2 className="text-3xl font-bold text-gray-900">Photo Gallery</h2>
        </div>

        {photos.length === 0 ? (
          <p className="text-gray-500">No images added yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {photos.map((item) => (
              <div
                key={item._id}
                className="overflow-hidden rounded-xl shadow-md border border-gray-100 bg-white group hover:shadow-xl transition duration-300"
              >
                {item.image && (
                  <div className="overflow-hidden h-52">
                    <img
                      src={urlFor(item.image).width(600).height(400).url()}
                      alt={item.title || 'School Gallery'}
                      className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="p-4">
                  <h3 className="font-bold text-gray-800 text-base">{item.title}</h3>
                  {item.category && (
                    <span className="inline-block mt-1 text-xs text-blue-600 bg-blue-50 px-2 py-0.5 rounded font-medium">
                      {item.category}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};