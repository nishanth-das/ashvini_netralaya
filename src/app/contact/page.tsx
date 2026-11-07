"use client";

import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  MessageCircle,
  Navigation,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "Appointment Inquiry",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const text = `Contact Inquiry from Website:
• Name: ${formData.name}
• Phone: ${formData.phone}
• Email: ${formData.email || "N/A"}
• Subject: ${formData.subject}
• Message: ${formData.message}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}&text=${encodeURIComponent(
      text
    )}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 500);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#1c88c6] to-[#0284c7] py-14 sm:py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-sky-200">
            Get In Touch
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans">
            Contact Ashvini Netralaya
          </h1>
          <p className="text-sm sm:text-base text-sky-100 max-w-xl mx-auto">
            Have questions about an eye checkup, surgery packages, or Sarva Drishti Yojana? Reach our team today.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Contact Details & Info (5 Cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-3">
                <span className="text-xs font-bold text-[#1c88c6] uppercase tracking-widest">
                  Hospital Information
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans tracking-tight">
                  We’re Here to Help Your Vision
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Ashvini Netralaya is located in the central medical corridor of Agartala. Drop in during our OPD hours or connect with us over phone or WhatsApp.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-11 h-11 rounded-xl bg-sky-100 text-[#1c88c6] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 mb-1">Hospital Address</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {siteConfig.address.full}
                    </p>
                    <a
                      href={siteConfig.googleMapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs text-[#1c88c6] font-semibold hover:underline mt-2"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Open in Google Maps</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 mb-1">Phone Numbers</h3>
                    <p className="text-xs text-slate-600">
                      Primary Contact:{" "}
                      <a href={`tel:${siteConfig.phoneClean}`} className="font-semibold text-slate-900 hover:text-[#1c88c6]">
                        {siteConfig.phone}
                      </a>
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Enquiry Line:{" "}
                      <a href={`tel:${siteConfig.altPhone.replace(/\s+/g, '')}`} className="font-semibold text-slate-900 hover:text-[#1c88c6]">
                        {siteConfig.altPhone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-11 h-11 rounded-xl bg-sky-100 text-[#1c88c6] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 mb-1">Email Addresses</h3>
                    <p className="text-xs text-slate-600">
                      General:{" "}
                      <a href={`mailto:${siteConfig.email}`} className="text-slate-900 hover:text-[#1c88c6]">
                        {siteConfig.email}
                      </a>
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Manager:{" "}
                      <a href={`mailto:${siteConfig.managerEmail}`} className="text-slate-900 hover:text-[#1c88c6]">
                        {siteConfig.managerEmail}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <div className="w-11 h-11 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900 mb-1">OPD &amp; Working Hours</h3>
                    <p className="text-xs text-slate-600">
                      <strong>General Clinic:</strong> {siteConfig.workingHours.general}
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5">
                      <strong>Sarva Drishti OPD:</strong> {siteConfig.workingHours.opd}
                    </p>
                    <p className="text-[11px] text-amber-700 font-medium mt-1">
                      Note: Thursday &amp; Sunday closed for routine outpatient checkups.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="p-6 rounded-2xl bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-between gap-4">
                <div className="space-y-1">
                  <h4 className="font-bold text-sm text-slate-900">Need Immediate Assistance?</h4>
                  <p className="text-xs text-slate-600">Chat with our hospital desk directly on WhatsApp.</p>
                </div>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs rounded-full shadow transition flex items-center gap-1.5 flex-shrink-0"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat Now</span>
                </a>
              </div>
            </div>

            {/* Interactive Inquiry Form (7 Cols) */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 shadow-lg border border-slate-200/80">
              <div className="space-y-2 mb-8">
                <span className="text-xs font-bold text-[#1c88c6] uppercase tracking-widest">
                  Quick Inquiry
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans tracking-tight">
                  Send Us a Message
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Fill in your details and our team will get in touch with you shortly.
                </p>
              </div>

              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                  <h3 className="text-2xl font-bold text-slate-800">Message Received!</h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Opening WhatsApp to connect your message directly with our care coordinator. We look forward to assisting you.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold rounded-full transition"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#1c88c6] focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#1c88c6] focus:border-transparent outline-none transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="yourname@gmail.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#1c88c6] focus:border-transparent outline-none transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                        Subject / Department
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#1c88c6] focus:border-transparent outline-none transition bg-white"
                      >
                        <option value="Appointment Inquiry">Appointment Inquiry</option>
                        <option value="Cataract Phaco Surgery">Cataract Phaco Surgery</option>
                        <option value="Retina & Glaucoma Consultation">Retina &amp; Glaucoma Consultation</option>
                        <option value="Sarva Drishti Yojana">Sarva Drishti Yojana</option>
                        <option value="Paediatric Eye Care">Paediatric Eye Care</option>
                        <option value="General Question">General Question</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Your Message or Symptoms *
                    </label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Please write your questions or the symptoms you are experiencing..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#1c88c6] focus:border-transparent outline-none transition resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#1c88c6] hover:bg-[#1677be] text-white font-bold text-sm rounded-xl shadow-md hover:shadow-lg transition flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message on WhatsApp</span>
                  </button>

                  <p className="text-center text-xs text-slate-400">
                    We value your privacy. Your information is strictly used for clinic consultation.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Location Map */}
      <section className="pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-md h-[400px]">
            <iframe
              src={siteConfig.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ashvini Netralaya Agartala Location"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
