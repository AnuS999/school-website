import React, { useState } from 'react';
import { Send, Phone, Mail, MapPin, Clock, CheckCircle2, MessageCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export const AdmissionAndContact = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    studentName: '',
    phone: '',
    email: '',
    grade: 'Nursery',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        parentName: '',
        studentName: '',
        phone: '',
        email: '',
        grade: 'Nursery',
        message: ''
      });
    }, 4000);
  };

  return (
    <section id="admissions" className="py-20 bg-white relative w-full">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-8 xl:px-16">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-brandPrimary font-bold text-xs uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full">
            Enroll Today
          </span>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-extrabold text-gray-900 mt-3 tracking-tight">
            Admission Inquiry & Contact Us
          </h2>
          <p className="text-gray-600 text-sm sm:text-base xl:text-lg mt-2">
            Fill out the form below to register your child or schedule a campus visit.
          </p>
          <div className="w-16 h-1 bg-brandSecondary mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact">
          
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-gray-50 p-6 xl:p-8 rounded-2xl border border-gray-100 space-y-6">
              <h3 className="text-xl xl:text-2xl font-bold text-gray-900">Get In Touch</h3>
              
              <div className="space-y-5 text-sm xl:text-base text-gray-600">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 text-brandPrimary rounded-xl shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Campus Address</h4>
                    <p className="mt-0.5">{siteConfig.contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 text-brandPrimary rounded-xl shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone / Helpline</h4>
                    <p className="mt-0.5">{siteConfig.contact.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 text-brandPrimary rounded-xl shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email Address</h4>
                    <p className="mt-0.5">{siteConfig.contact.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 text-brandPrimary rounded-xl shrink-0">
                    <Clock className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Visiting Hours</h4>
                    <p className="mt-0.5">{siteConfig.contact.timing}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-brandPrimary text-white p-6 xl:p-8 rounded-2xl flex items-center justify-between shadow-md">
              <div>
                <p className="text-xs xl:text-sm text-blue-200">Have urgent questions?</p>
                <p className="text-base xl:text-lg font-bold text-amber-300 mt-0.5">Talk to Admission Counselor</p>
              </div>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="bg-brandSecondary text-blue-950 font-bold text-xs xl:text-sm px-5 py-3 rounded-xl hover:bg-amber-400 transition"
              >
                Call Now
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 bg-gray-50 p-6 sm:p-8 xl:p-10 rounded-2xl border border-gray-100 shadow-sm">
            <h3 className="text-xl xl:text-2xl font-bold text-gray-900 mb-1">Online Admission Form</h3>
            <p className="text-xs xl:text-sm text-gray-500 mb-8">Enter details to get callback from admission team.</p>

            {submitted ? (
              <div className="bg-green-50 border border-green-200 p-8 rounded-xl text-center space-y-3">
                <CheckCircle2 className="w-14 h-14 text-green-600 mx-auto" />
                <h4 className="font-bold text-green-900 text-xl">Inquiry Submitted Successfully!</h4>
                <p className="text-xs sm:text-sm text-green-700">Our team will call you back shortly with prospectus and fee details.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs xl:text-sm font-semibold text-gray-700 mb-1.5">Parent / Guardian Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.parentName}
                      onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                      placeholder="e.g. Rajesh Kumar"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm xl:text-base focus:ring-2 focus:ring-brandPrimary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs xl:text-sm font-semibold text-gray-700 mb-1.5">Student Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.studentName}
                      onChange={(e) => setFormData({...formData, studentName: e.target.value})}
                      placeholder="e.g. Aarav Kumar"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm xl:text-base focus:ring-2 focus:ring-brandPrimary focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs xl:text-sm font-semibold text-gray-700 mb-1.5">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      placeholder="e.g. 9876543210"
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm xl:text-base focus:ring-2 focus:ring-brandPrimary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs xl:text-sm font-semibold text-gray-700 mb-1.5">Grade / Class Seeking *</label>
                    <select
                      value={formData.grade}
                      onChange={(e) => setFormData({...formData, grade: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm xl:text-base focus:ring-2 focus:ring-brandPrimary focus:outline-none"
                    >
                      <option>Nursery / LKG / UKG</option>
                      <option>Class 1st to 5th</option>
                      <option>Class 6th to 8th</option>
                      <option>Class 9th & 10th</option>
                      <option>Class 11th & 12th</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs xl:text-sm font-semibold text-gray-700 mb-1.5">Any Specific Query (Optional)</label>
                  <textarea
                    rows="4"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="Ask about bus route, hostel, fees, etc..."
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm xl:text-base focus:ring-2 focus:ring-brandPrimary focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brandPrimary hover:bg-blue-900 text-white font-bold py-4 rounded-xl transition flex items-center justify-center gap-2 shadow-md text-sm xl:text-base"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Admission Request</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>

      <a
        href={`https://wa.me/${siteConfig.socialLinks.whatsapp}?text=Hi,%20I%20want%20information%20regarding%20school%20admission.`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl z-50 flex items-center gap-2 transition-transform hover:scale-110"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="hidden sm:inline text-xs xl:text-sm font-bold pr-1">Admission Help</span>
      </a>
    </section>
  );
};