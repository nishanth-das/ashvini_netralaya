"use client";

import { useState } from "react";
import Link from "next/link";
import {
  BookOpen,
  Search,
  Sparkles,
  Calendar,
  Bell,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Phone,
  Eye,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const categories = [
  "All Articles (0)",
  "Cataract & Lens Guide",
  "Diabetic Retina Care",
  "Paediatric Eye Health",
  "Glaucoma Prevention",
  "Digital Screen Wellness",
];

export default function BlogsPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All Articles (0)");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. Hero Header */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 bg-gradient-to-b from-sky-50/70 via-white to-white overflow-hidden border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center justify-center gap-3 text-slate-500 font-serif tracking-widest text-sm uppercase mb-3">
            <span className="w-10 h-[1px] bg-slate-300"></span>
            <span>Eye Health Knowledge Hub</span>
            <span className="w-10 h-[1px] bg-slate-300"></span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#222222] tracking-tight mb-4">
            Educational Articles & Insights
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed">
            Evidence-based medical advice, surgical explanations, and preventive eye health tips curated by the consultant surgeons at Ashvini Netralaya.
          </p>

          {/* Search bar preview */}
          <div className="mt-8 max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search eye conditions, symptoms, or surgeries..."
              className="w-full pl-11 pr-4 py-3 rounded-full border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1c88c6]/30 shadow-sm"
              disabled
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </section>

      {/* 2. Category Filter Pills */}
      <section className="py-6 border-b border-slate-100 bg-slate-50/50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeCategory === cat
                    ? "bg-[#1c88c6] text-white shadow-sm"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. High-End $10,000 Empty State */}
      <section className="py-16 sm:py-24 bg-white flex-1 flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-4 text-center space-y-8">
          {/* Graphic Icon */}
          <div className="relative mx-auto w-24 h-24 rounded-3xl bg-sky-50 border border-sky-100 flex items-center justify-center shadow-inner">
            <BookOpen className="w-10 h-10 text-[#1c88c6]" />
            <div className="absolute -top-1.5 -right-1.5 w-7 h-7 rounded-full bg-[#20c997] text-white flex items-center justify-center shadow-md">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-sans">
              Clinical Articles Under Preparation
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg mx-auto">
              Our ophthalmic surgical team is currently curating in-depth medical guides on modern Phaco cataract surgery, diabetic retinopathy management, pediatric myopia control, and glaucoma detection.
            </p>
          </div>

          {/* Planned Topics Preview */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left max-w-lg mx-auto pt-2">
            {[
              "Choosing the Right IOL: Monofocal vs Multifocal vs Toric",
              "Diabetic Retinopathy: Why Annual Screenings Save Sight",
              "Screen Time & Children: Preventing Digital Eye Strain",
              "Glaucoma The Silent Thief: Understanding Eye Pressure",
            ].map((topic, i) => (
              <div
                key={i}
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs text-slate-700 font-medium flex items-start gap-2.5"
              >
                <CheckCircle2 className="w-4 h-4 text-[#20c997] shrink-0 mt-0.5" />
                <span>{topic}</span>
              </div>
            ))}
          </div>

          {/* Newsletter Notification Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-50 to-sky-50/50 border border-slate-200/80 shadow-sm max-w-lg mx-auto space-y-4">
            <div className="flex items-center justify-center gap-2 text-xs font-bold text-[#1c88c6] uppercase tracking-wider">
              <Bell className="w-4 h-4" />
              <span>Get Notified on Publish</span>
            </div>

            <h3 className="text-lg font-bold text-slate-900">
              Subscribe for Free Eye Health Bulletins & Camp Dates
            </h3>

            {subscribed ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl font-medium">
                ✓ Thank you! You will receive our latest health articles and free camp alerts.
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-2.5 rounded-full border border-slate-300 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#1c88c6]/30 bg-white"
                />
                <button
                  type="submit"
                  className="px-6 py-2.5 rounded-full bg-[#1c88c6] hover:bg-[#1578b0] text-white text-xs sm:text-sm font-semibold transition-colors shadow-sm whitespace-nowrap"
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>

          {/* Quick link to explore services */}
          <div className="pt-2">
            <Link
              href="/our-services-2"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#1c88c6] hover:underline"
            >
              <span>Explore Our 16 Clinical Specialities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. Support & Direct Consultation Banner */}
      <section className="bg-slate-900 text-white py-12 border-t border-slate-800">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <h3 className="text-xl sm:text-2xl font-bold">
            Need Immediate Guidance on an Eye Condition?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
            Do not wait for eye symptoms to escalate. Consult Tripura’s first NABH-accredited eye hospital directly.
          </p>
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold rounded-full transition-colors shadow"
            >
              <span>Chat with Care Desk on WhatsApp</span>
            </a>
            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-bold rounded-full border border-white/20 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
