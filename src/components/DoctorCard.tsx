"use client";

import Image from "next/image";
import { Calendar, Award, ShieldCheck, Stethoscope } from "lucide-react";
import { Doctor } from "@/data/doctors";
import { siteConfig } from "@/data/siteConfig";

interface DoctorCardProps {
  doctor: Doctor;
  onBookDoctor?: (doctorName: string) => void;
}

export function DoctorCard({ doctor, onBookDoctor }: DoctorCardProps) {
  const handleBooking = () => {
    if (onBookDoctor) {
      onBookDoctor(doctor.name);
    } else {
      const whatsappUrl = `https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}&text=${encodeURIComponent(
        `Hello Ashvini Netralaya, I would like to schedule an appointment with ${doctor.name} (${doctor.role}).`
      )}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 flex flex-col justify-between text-center transition-all duration-300 hover:shadow-xl border border-slate-200/80 group hover:-translate-y-1 relative overflow-hidden">
      {/* Top Accent Gradient Bar */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#1c88c6] via-[#20c997] to-[#1c88c6] opacity-0 group-hover:opacity-100 transition-opacity" />

      <div>
        {/* Doctor Photo Frame */}
        <div className="relative w-40 h-40 sm:w-44 sm:h-44 mx-auto rounded-2xl overflow-hidden mb-4 bg-gradient-to-b from-sky-50 to-slate-100 p-1 border-2 border-slate-100 group-hover:border-sky-300 transition-colors shadow-sm">
          <div className="relative w-full h-full rounded-xl overflow-hidden">
            <Image
              src={doctor.image}
              alt={`${doctor.name} - ${doctor.role} at Ashvini Netralaya`}
              fill
              className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 640px) 160px, 176px"
            />
          </div>
          {doctor.isVisiting && (
            <span className="absolute top-2 right-2 bg-[#051226]/85 backdrop-blur-sm text-sky-300 text-[10px] font-bold px-2 py-0.5 rounded-full border border-sky-400/30">
              Visiting
            </span>
          )}
        </div>

        {/* Doctor Information */}
        <div className="space-y-1.5">
          <h3 className="font-bold text-lg text-slate-900 group-hover:text-[#1c88c6] transition-colors leading-snug font-sans">
            {doctor.name}
          </h3>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
            <Award className="w-3 h-3 text-[#1c88c6]" />
            <span>{doctor.qualifications}</span>
          </div>

          {doctor.role && (
            <div className="pt-1">
              <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-sky-50 text-[#1c88c6] border border-sky-200/80">
                {doctor.role}
              </span>
            </div>
          )}

          {doctor.department && (
            <p className="text-xs text-slate-600 leading-relaxed pt-2 line-clamp-2">
              {doctor.department}
            </p>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-5 mt-4 border-t border-slate-100">
        <button
          onClick={handleBooking}
          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-[#1c88c6] text-slate-700 hover:text-white font-bold text-xs transition-all duration-200 border border-slate-200 hover:border-[#1c88c6] shadow-xs group-hover:shadow"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Book Consultation</span>
        </button>
      </div>
    </div>
  );
}
