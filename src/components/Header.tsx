"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  Menu,
  X,
  Phone,
  Clock,
  MapPin,
  Calendar,
  ShieldCheck,
  MessageCircle,
  ChevronDown,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const navItems = [
  { name: "HOME", href: "/" },
  { name: "ABOUT", href: "/about" },
  { name: "SERVICES", href: "/our-services-2" },
  { name: "SARVA DRISHTI YOJANA", href: "/sarva-drishti-yojana" },
  { name: "BLOGS", href: "/blogs" },
  { name: "CONTACT", href: "/contact" },
];

interface HeaderProps {
  onOpenBooking?: () => void;
}

export function Header({ onOpenBooking }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full shadow-md">
      {/* 1. Top Institutional & Emergency Bar */}
      <div className="bg-[#051226] text-slate-300 text-xs py-2 px-4 border-b border-slate-800/80">
        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left">
          {/* Left: NABH Certification & Hospital Location */}
          <div className="flex items-center gap-3 flex-wrap justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 text-sky-400 font-semibold tracking-wide">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span>Tripura&apos;s 1st NABH-Accredited Superspeciality Eye Hospital</span>
            </span>
            <span className="hidden lg:inline text-slate-600">•</span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-400">
              <MapPin className="w-3 h-3 text-slate-500 shrink-0" />
              <span>Bijoykumar Chowmuhani, Agartala</span>
            </span>
          </div>

          {/* Right: Live OPD Hours & Emergency Hotline */}
          <div className="flex items-center gap-4 text-[11px] sm:text-xs">
            <div className="hidden sm:flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>OPD: 9:00 AM – 7:00 PM</span>
            </div>
            <span className="hidden sm:inline text-slate-700">|</span>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${siteConfig.phoneClean}`}
                className="inline-flex items-center gap-1.5 text-white font-semibold hover:text-sky-300 transition-colors"
              >
                <Phone className="w-3 h-3 text-sky-400" />
                <span>Helpline: {siteConfig.phone}</span>
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1 text-[#25D366] hover:text-[#2fe673] font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <div className="bg-gradient-to-r from-[#177db8] via-[#1c88c6] to-[#1579b2] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[72px] sm:h-[76px]">
            {/* Hospital Logo */}
            <Link href="/" className="flex items-center shrink-0 py-2 group">
              <Image
                src="/images/AN-Website-name-logo-e1773034551124-1024x206.png"
                alt="Ashvini Netralaya - Superspeciality Eye Hospital"
                width={270}
                height={54}
                className="h-[48px] sm:h-[54px] w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative text-[13px] font-semibold tracking-[0.2px] px-3.5 xl:px-4 py-2 rounded-full transition-all duration-200 ${
                      isActive
                        ? "text-white bg-white/15 shadow-inner"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.name}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#1bc1ff] rounded-full" />
                    )}
                  </Link>
                );
              })}

              {/* Bengali / Bangladesh Landing Pill */}
              <Link
                href="/bangladesh/eye-care"
                className={`text-[12px] font-bold tracking-[0.2px] px-3.5 py-1.5 rounded-full border border-white/20 transition-all flex items-center gap-1.5 ${
                  pathname?.startsWith("/bangladesh") || pathname?.startsWith("/bn")
                    ? "bg-white text-[#1c88c6] shadow-sm"
                    : "bg-white/10 text-white hover:bg-white/20"
                }`}
                title="বাংলাদেশী রোগীদের জন্য চোখের চিকিৎসা নির্দেশিকা"
              >
                <span>🇧🇩</span>
                <span>বাংলা</span>
              </Link>
            </nav>

            {/* Right Action: Book Appointment Button */}
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#1c88c6] hover:bg-sky-50 font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95"
              >
                <Calendar className="w-3.5 h-3.5 text-[#1c88c6]" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="md:hidden px-3 py-1.5 rounded-full bg-white text-[#1c88c6] font-bold text-xs shadow-sm"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-white hover:bg-white/10 focus:outline-none transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Mobile Slide-Down Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0d5985] border-t border-sky-400/30 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-2xl">
          <div className="space-y-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname?.startsWith(item.href);

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3.5 py-2.5 rounded-lg text-sm font-semibold tracking-wide transition-colors ${
                    isActive
                      ? "text-[#1bc1ff] bg-black/20"
                      : "text-white hover:text-[#1bc1ff] hover:bg-white/5"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            <Link
              href="/bangladesh/eye-care"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 transition-colors"
            >
              <span className="flex items-center gap-2">
                <span>🇧🇩</span>
                <span>বাংলাদেশী রোগীদের তথ্য (বাংলা)</span>
              </span>
              <ChevronDown className="w-4 h-4 -rotate-90" />
            </Link>
          </div>

          <div className="pt-3 border-t border-sky-400/30 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking?.();
              }}
              className="w-full py-3 bg-white text-[#1c88c6] font-bold text-sm rounded-xl shadow flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Now</span>
            </button>
            <div className="grid grid-cols-2 gap-2 pt-1">
              <a
                href={`tel:${siteConfig.phoneClean}`}
                className="py-2.5 px-3 bg-black/25 text-white rounded-lg text-xs font-semibold text-center flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5 text-sky-300" />
                <span>Call Hospital</span>
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 bg-[#25D366] text-white rounded-lg text-xs font-semibold text-center flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
