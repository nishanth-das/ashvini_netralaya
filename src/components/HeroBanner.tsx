"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

const slides = [
  {
    image: "/images/Home-Banner-1.jpg",
    alt: "Welcome to Ashvini Netralaya - Superspeciality Eye Hospital Agartala",
  },
  {
    image: "/images/Home-Banner-2.jpg",
    alt: "Get Your Eyes Checked Now - Advanced Diagnostics & Treatments",
  },
  {
    image: "/images/Home-Banner-03-1.jpg",
    alt: "Tripura's First NABH-Accredited Eye Hospital - Advanced Eye Care",
  },
];

export function HeroBanner() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [nextSlide, isPaused]);

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) nextSlide();
    if (diff < -50) prevSlide();
    touchStartX.current = null;
  };

  return (
    <div
      className="relative w-full overflow-hidden bg-slate-950 aspect-[1200/650] md:aspect-[21/9] lg:aspect-[1920/750] max-h-[750px] select-none group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Ashvini Netralaya Featured Announcements"
    >
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-all duration-1000 ease-out ${
            idx === current
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-[1.03] z-0 pointer-events-none"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={idx === 0}
            className="object-cover object-center w-full h-full"
            sizes="100vw"
          />
        </div>
      ))}

      {/* Subtle bottom gradient to blend seamlessly into page */}
      <div className="absolute inset-x-0 bottom-0 h-12 sm:h-16 bg-gradient-to-t from-black/40 via-black/10 to-transparent z-10 pointer-events-none" />

      {/* Luxury Navigation Controls: Left Arrow (Tablet/Desktop) */}
      <button
        onClick={prevSlide}
        className="hidden sm:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md border border-white/25 items-center justify-center transition-all duration-200 shadow-xl opacity-80 group-hover:opacity-100 hover:scale-105 focus:outline-none"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Luxury Navigation Controls: Right Arrow (Tablet/Desktop) */}
      <button
        onClick={nextSlide}
        className="hidden sm:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/30 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md border border-white/25 items-center justify-center transition-all duration-200 shadow-xl opacity-80 group-hover:opacity-100 hover:scale-105 focus:outline-none"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Counter & Indicators */}
      <div className="absolute bottom-2 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3 bg-black/45 backdrop-blur-md px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full border border-white/20">
        <button
          onClick={prevSlide}
          className="sm:hidden p-0.5 text-white/85 hover:text-white focus:outline-none"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-3.5 h-3.5" />
        </button>
        <span className="text-[10px] sm:text-[11px] font-bold text-white/90 tracking-wider whitespace-nowrap">
          0{current + 1} / 0{slides.length}
        </span>
        <span className="w-[1px] h-2.5 sm:h-3 bg-white/30" />
        <div className="flex items-center gap-1.5">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              className={`transition-all duration-300 rounded-full focus:outline-none ${
                idx === current
                  ? "w-5 sm:w-6 h-1.5 sm:h-2 bg-[#1bc1ff] shadow-sm"
                  : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 hover:bg-white"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="sm:hidden p-0.5 text-white/85 hover:text-white focus:outline-none"
          aria-label="Next slide"
        >
          <ChevronRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
