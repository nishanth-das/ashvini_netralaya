"use client";

import { Phone, MessageCircle, MapPin, Calendar } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

interface MobileQuickBarProps {
  onOpenBooking?: () => void;
}

export function MobileQuickBar({ onOpenBooking }: MobileQuickBarProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] md:hidden pt-1.5 px-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))]">
      <div className="grid grid-cols-4 gap-1 text-center">
        {/* Call */}
        <a
          href={`tel:${siteConfig.phoneClean}`}
          className="flex flex-col items-center justify-center min-h-[48px] py-1 text-slate-700 active:text-[#1c88c6] rounded-lg"
        >
          <div className="w-8 h-8 rounded-full bg-sky-50 flex items-center justify-center text-[#1c88c6]">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold mt-1 whitespace-nowrap">Call</span>
        </a>

        {/* WhatsApp */}
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center min-h-[48px] py-1 text-slate-700 active:text-[#25D366] rounded-lg"
        >
          <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center text-[#25D366]">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold mt-1 whitespace-nowrap">WhatsApp</span>
        </a>

        {/* Map / Directions */}
        <a
          href={siteConfig.googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center min-h-[48px] py-1 text-slate-700 active:text-[#1c88c6] rounded-lg"
        >
          <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-700">
            <MapPin className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold mt-1 whitespace-nowrap">Directions</span>
        </a>

        {/* Book */}
        <button
          onClick={onOpenBooking}
          className="flex flex-col items-center justify-center min-h-[48px] py-1 text-slate-700 active:text-[#1c88c6] rounded-lg"
        >
          <div className="w-8 h-8 rounded-full bg-[#1c88c6] flex items-center justify-center text-white shadow-sm">
            <Calendar className="w-4 h-4" />
          </div>
          <span className="text-[10px] font-bold mt-1 text-[#1c88c6] whitespace-nowrap">Book</span>
        </button>
      </div>
    </div>
  );
}
