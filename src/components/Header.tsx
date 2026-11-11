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
    <>
      {/* 1. Top Institutional & Emergency Bar */}
      <div className="bg-slate-50 text-slate-600 text-[10.5px] sm:text-xs py-1.5 sm:py-2 px-3 sm:px-4 border-b border-slate-200/90">
        <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-1 sm:gap-2 text-center sm:text-left">
          {/* Left: NABH Certification & Hospital Location */}
          <div className="flex items-center gap-2 sm:gap-3 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-start sm:items-center gap-1 text-sky-800 font-semibold tracking-tight sm:tracking-wide leading-snug">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5 sm:mt-0" />
              <span>Tripura&apos;s 1st NABH-Accredited Superspeciality Eye Hospital</span>
            </span>
            <span className="hidden lg:inline text-slate-300">•</span>
            <span className="hidden lg:inline-flex items-center gap-1 text-slate-500">
              <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
              <span>Bijoykumar Chowmuhani, Agartala</span>
            </span>
          </div>

          {/* Right: Live OPD Hours & Emergency Hotline */}
          <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs shrink-0">
            <div className="hidden sm:flex items-center gap-1.5 text-slate-600">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>OPD: 9:00 AM – 7:00 PM</span>
            </div>
            <span className="hidden sm:inline text-slate-300">|</span>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${siteConfig.phoneClean}`}
                className="inline-flex items-center gap-1 text-slate-800 font-semibold hover:text-sky-600 transition-colors"
              >
                <Phone className="w-3 h-3 text-sky-600 shrink-0" />
                <span>Helpline: {siteConfig.phone}</span>
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1 text-emerald-600 hover:text-emerald-700 font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Sticky Main Navigation Bar */}
      <header className="sticky top-0 z-50 w-full shadow-md bg-gradient-to-r from-[#177db8] via-[#1c88c6] to-[#1579b2] text-white">
        <div className="max-w-[1240px] mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 h-[60px] sm:h-[74px]">
            {/* Hospital Logo */}
            <Link href="/" className="flex items-center min-w-0 shrink py-1.5 group">
              <Image
                src="/images/AN-Website-name-logo-e1773034551124-1024x206.png"
                alt="Ashvini Netralaya - Superspeciality Eye Hospital"
                width={270}
                height={54}
                className="h-[34px] sm:h-[48px] md:h-[52px] w-auto max-w-[175px] sm:max-w-none object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                priority
              />
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2 shrink-0">
              {navItems.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname?.startsWith(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative text-[13px] font-semibold tracking-[0.2px] px-3.5 xl:px-4 py-2 rounded-full transition-all duration-200 whitespace-nowrap ${
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
            </nav>

            {/* Right Action: Book Appointment Button */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#1c88c6] hover:bg-sky-50 font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5 text-[#1c88c6]" />
                <span>Book Appointment</span>
              </button>
            </div>

            {/* Mobile Menu Toggle Button */}
            <div className="flex lg:hidden items-center gap-1.5 sm:gap-2 shrink-0">
              <button
                onClick={onOpenBooking}
                className="md:hidden px-3.5 py-2 rounded-full bg-white text-[#1c88c6] font-bold text-[11px] uppercase tracking-wide shadow-sm active:scale-95 transition-transform"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg text-white hover:bg-white/10 focus:outline-none transition-colors"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* 3. Mobile Slide-Down Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#0d5985] border-t border-sky-400/30 px-4 pt-3 pb-6 space-y-2 max-h-[calc(100dvh-60px)] overflow-y-auto overscroll-contain shadow-2xl">
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
                    className={`block px-3.5 py-3 rounded-xl text-sm font-semibold tracking-wide transition-colors ${
                      isActive
                        ? "text-[#1bc1ff] bg-black/20"
                        : "text-white hover:text-[#1bc1ff] hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>

            <div className="pt-3 border-t border-sky-400/30 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking?.();
                }}
                className="w-full py-3.5 bg-white text-[#1c88c6] font-bold text-sm rounded-xl shadow flex items-center justify-center gap-2 active:scale-[0.99] transition-transform"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Appointment Now</span>
              </button>
              <div className="grid grid-cols-2 gap-2 pt-0.5">
                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="py-3 px-3 bg-black/25 text-white rounded-xl text-xs font-semibold text-center flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-300" />
                  <span>Call Hospital</span>
                </a>
                <a
                  href={siteConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 bg-[#25D366] text-white rounded-xl text-xs font-semibold text-center flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>WhatsApp</span>
                </a>
              </div>
              <div className="pt-2 text-center text-[11px] text-sky-200/80 flex items-center justify-center gap-1.5">
                <Clock className="w-3 h-3 shrink-0" />
                <span>OPD: Mon – Sat 9:00 AM – 7:00 PM • Agartala</span>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
