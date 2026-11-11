"use client";

import { useState } from "react";
import { Plus, X, Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function WhatsAppPill() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="hidden md:flex fixed bottom-6 right-6 z-50 flex-col items-end">
      {/* Expanded quick options */}
      {isOpen && (
        <div className="mb-3 flex flex-col items-end gap-2.5 animate-fadeIn">
          {/* Call option */}
          <a
            href={`tel:${siteConfig.phoneClean}`}
            className="flex items-center gap-3 bg-white text-slate-800 px-4 py-2.5 rounded-full shadow-lg border border-slate-100 hover:bg-slate-50 transition-all text-xs font-semibold"
          >
            <span>Call: {siteConfig.phone}</span>
            <div className="w-8 h-8 rounded-full bg-[#1c88c6] text-white flex items-center justify-center">
              <Phone className="w-4 h-4" />
            </div>
          </a>

          {/* WhatsApp option */}
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white text-slate-800 px-4 py-2.5 rounded-full shadow-lg border border-slate-100 hover:bg-slate-50 transition-all text-xs font-semibold"
          >
            <span>Chat on WhatsApp</span>
            <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center">
              <MessageCircle className="w-4 h-4" />
            </div>
          </a>
        </div>
      )}

      {/* Main floating pill */}
      <div className="flex items-center gap-2">
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white px-4 py-2.5 rounded-full text-xs sm:text-[13px] font-semibold shadow-lg transition-all hover:scale-105 active:scale-95"
        >
          <MessageCircle className="w-4 h-4" />
          <span>How can we help you?</span>
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-13 h-13 p-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white flex items-center justify-center shadow-xl transition-all hover:scale-105 active:scale-95 focus:outline-none"
          aria-label="How can we help you?"
        >
          {isOpen ? (
            <X className="w-6 h-6 transition-transform" />
          ) : (
            <MessageCircle className="w-6 h-6 transition-transform" />
          )}
        </button>
      </div>
    </div>
  );
}
