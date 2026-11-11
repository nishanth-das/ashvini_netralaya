"use client";

import { useState, useEffect } from "react";
import { X, Calendar, Phone, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { servicesData } from "@/data/services";
import { inHouseDoctors, visitingConsultants } from "@/data/doctors";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  defaultDoctor?: string;
}

export function BookingModal({
  isOpen,
  onClose,
  defaultService,
  defaultDoctor,
}: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: defaultService || "Comprehensive Eye Checkup",
    doctor: defaultDoctor || "Any Available Specialist",
    date: "",
    notes: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        service: defaultService || prev.service || "Comprehensive Eye Checkup",
        doctor: defaultDoctor || prev.doctor || "Any Available Specialist",
      }));
      setSubmitted(false);
    }
  }, [isOpen, defaultService, defaultDoctor]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `Hello Ashvini Netralaya, I would like to book an appointment:
• Name: ${formData.name}
• Phone: ${formData.phone}
• Service: ${formData.service}
• Preferred Doctor: ${formData.doctor}
• Preferred Date: ${formData.date || "Earliest Available"}
• Notes: ${formData.notes || "N/A"}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}&text=${encodeURIComponent(
      message
    )}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg max-h-[92dvh] flex flex-col bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
        {/* Header */}
        <div className="shrink-0 bg-[#1c88c6] text-white px-5 sm:px-6 py-4 flex items-center justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-bold">Book an Appointment</h3>
            <p className="text-xs text-sky-100">Ashvini Netralaya • Agartala, Tripura</p>
          </div>
          <button
            onClick={onClose}
            className="min-w-[40px] min-h-[40px] flex items-center justify-center rounded-full hover:bg-white/20 transition-colors text-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 overscroll-contain">
          {submitted ? (
            <div className="text-center py-6 sm:py-8 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
              <h4 className="text-2xl font-bold text-slate-800">Booking Request Sent!</h4>
              <p className="text-sm text-slate-600 max-w-sm mx-auto">
                Opening WhatsApp to confirm your slot with our clinic coordinator. You can also call us directly.
              </p>
              <div className="pt-2 flex flex-wrap justify-center gap-3">
                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#1c88c6] text-white rounded-full text-sm font-semibold"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {siteConfig.phone}</span>
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-4 py-2.5 bg-slate-100 text-slate-700 rounded-full text-sm font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Patient Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Enter patient name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-base sm:text-sm focus:ring-2 focus:ring-[#1c88c6] focus:border-transparent outline-none transition"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-base sm:text-sm focus:ring-2 focus:ring-[#1c88c6] focus:border-transparent outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-base sm:text-sm focus:ring-2 focus:ring-[#1c88c6] focus:border-transparent outline-none transition bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Required Service *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-base sm:text-sm focus:ring-2 focus:ring-[#1c88c6] focus:border-transparent outline-none transition bg-white"
                >
                  {servicesData.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Preferred Doctor
                </label>
                <select
                  value={formData.doctor}
                  onChange={(e) => setFormData({ ...formData, doctor: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 text-base sm:text-sm focus:ring-2 focus:ring-[#1c88c6] focus:border-transparent outline-none transition bg-white"
                >
                  <option value="Any Available Specialist">Any Available Specialist</option>
                  <optgroup label="In-House Specialists">
                    {inHouseDoctors.map((doc) => (
                      <option key={doc.id} value={doc.name}>
                        {doc.name} ({doc.role})
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="Visiting Consultants">
                    {visitingConsultants.map((doc) => (
                      <option key={doc.id} value={doc.name}>
                        {doc.name} ({doc.department})
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                  Describe Symptoms or Remarks (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. blurred vision, cataract consultation, routine checkup..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg border border-slate-300 text-base sm:text-sm focus:ring-2 focus:ring-[#1c88c6] focus:border-transparent outline-none transition resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 bg-[#1c88c6] hover:bg-[#1677be] text-white font-bold text-sm rounded-lg shadow-md hover:shadow-lg transition flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Confirm & Send on WhatsApp</span>
                </button>
              </div>

              <p className="text-center text-xs text-slate-400">
                You can also call us directly at{" "}
                <a href={`tel:${siteConfig.phoneClean}`} className="text-[#1c88c6] font-semibold">
                  {siteConfig.phone}
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
