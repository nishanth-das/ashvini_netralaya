"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Sparkles,
  ArrowRight,
  Clock,
  Activity,
  CheckCircle2,
  ChevronDown,
  Calendar,
  Phone,
  HelpCircle,
  Eye,
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";

const categories = [
  "All Specialities",
  "Surgical",
  "Laser & Retina",
  "Diagnostics",
  "Speciality Clinic",
] as const;

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Specialities");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const filteredServices =
    selectedCategory === "All Specialities"
      ? servicesData
      : servicesData.filter((s) => s.category === selectedCategory);

  // Flagship featured services for the primary showcase
  const flagshipServices = servicesData.filter((s) => s.featured);

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Header */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-20 bg-gradient-to-b from-sky-50/70 via-white to-white overflow-hidden border-b border-slate-100">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#222222] tracking-tight mb-4">
            Our Services
          </h1>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-600 leading-relaxed">
            Tripura’s First & Only NABH-Accredited Superspeciality Eye Hospital.
            From routine vision exams to microsurgical retinal procedures and paediatric eye care—all under one roof in Agartala.
          </p>

          {/* Trust Highlights Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-[13px] font-semibold text-slate-700">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200/80">
              <ShieldCheck className="w-4 h-4 text-[#1c88c6]" />
              <span>NABH Accredited Safety</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200/80">
              <Award className="w-4 h-4 text-[#20c997]" />
              <span>10,000+ Surgeries</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200/80">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <span>Modular Laminar Flow OT</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-200/80">
              <Activity className="w-4 h-4 text-rose-500" />
              <span>Cashless & Ayushman Bharat</span>
            </div>
          </div>

          {/* Interactive Symptom Quick Navigator */}
          <div className="mt-12 pt-8 border-t border-slate-200/70 max-w-4xl mx-auto">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Find By Symptoms — What Are You Experiencing?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {[
                { label: "Cloudy / Hazy Vision", href: "/services/cataract-surgery-phaco" },
                { label: "Dark Floaters or Flashes", href: "/services/retina-surgeries" },
                { label: "Child Crossed Eye / Squint", href: "/services/paediatric-eye-care" },
                { label: "Gritty, Burning Dry Eyes", href: "/services/dry-eye-evaluation" },
                { label: "High Eye Pressure", href: "/services/glaucoma-surgeries" },
                { label: "Blur Returning After Cataract", href: "/services/yag-laser" },
                { label: "Annual Full Vision Checkup", href: "/services/comprehensive-eye-checkup" },
                { label: "Diabetic Eye Screening", href: "/services/green-laser-for-retina" },
              ].map((sym, i) => (
                <Link
                  key={i}
                  href={sym.href}
                  className="px-3.5 py-1.5 rounded-full bg-white hover:bg-[#1c88c6] text-slate-700 hover:text-white border border-slate-200 hover:border-[#1c88c6] text-xs font-medium transition-all shadow-sm active:scale-95"
                >
                  {sym.label} →
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Clinical Programs */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20 lg:space-y-28">
          <div className="text-center max-w-xl mx-auto">
            <span className="text-xs font-bold text-[#1c88c6] uppercase tracking-widest block mb-1">
              Core Specialities
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-sans">
              Advanced Clinical Programs
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Explore our primary surgical and diagnostic procedures delivered with state-of-the-art German & American ophthalmic technology.
            </p>
          </div>

          {flagshipServices.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {/* Photo Column */}
                <div
                  className={`lg:col-span-6 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.08)] border-4 border-white group">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs">
                      <span className="bg-[#1c88c6]/90 backdrop-blur-sm px-3 py-1 rounded-full font-medium">
                        {service.category}
                      </span>
                      {service.procedureTime && (
                        <span className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5" />
                          <span>{service.procedureTime}</span>
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div
                  className={`lg:col-span-6 space-y-5 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-2">
                    <span className="inline-block text-xs font-bold text-[#20c997] uppercase tracking-wider">
                      {service.category} Program
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight font-sans">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                    {service.shortDescription}
                  </p>

                  {/* Key Benefits List */}
                  {service.benefits && (
                    <div className="space-y-2 pt-1">
                      {service.benefits.slice(0, 3).map((b, i) => (
                        <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-[#20c997] shrink-0 mt-0.5" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="pt-3 flex flex-wrap items-center gap-3">
                    <a
                      href={siteConfig.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-7 py-2.5 rounded-full border-2 border-[#1c88c6] text-[#1c88c6] hover:bg-[#1c88c6] hover:text-white font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-sm active:scale-95"
                    >
                      Book Now
                    </a>

                    <Link
                      href={`/services/${service.slug}`}
                      className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded-full bg-slate-100 hover:bg-sky-50 text-slate-800 hover:text-[#1c88c6] font-semibold text-xs sm:text-sm transition-colors"
                    >
                      <span>Procedure Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* All Services Catalog */}
      <section className="py-16 sm:py-24 bg-slate-50/70 border-t border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold text-[#1c88c6] uppercase tracking-widest block mb-1">
              Full Spectrum Ophthalmology
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-sans">
              All 16 Specialized Clinical Services
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Browse our complete catalog of diagnostic, laser, and surgical procedures with dedicated treatment pages.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  selectedCategory === cat
                    ? "bg-[#1c88c6] text-white shadow-md shadow-sky-600/20"
                    : "bg-white text-slate-600 hover:bg-slate-100 border border-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* 16-Service Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Service Image */}
                  <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/95 backdrop-blur-sm text-[11px] font-bold text-[#1c88c6] px-2.5 py-1 rounded-full shadow-sm">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 space-y-2.5">
                    <h3 className="font-bold text-base sm:text-[17px] text-slate-900 leading-snug group-hover:text-[#1c88c6] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>
                </div>

                {/* Footer Links */}
                <div className="p-5 pt-0 border-t border-slate-100 mt-3 flex items-center justify-between text-xs font-semibold">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-[#1c88c6] hover:text-[#1474ab] inline-flex items-center gap-1 group/link"
                  >
                    <span>View Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-link:translate-x-0.5" />
                  </Link>

                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-500 hover:text-[#20c997] inline-flex items-center gap-1"
                  >
                    <span>Book Now</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety & Equipment */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-sky-50/60 border border-sky-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#1c88c6] text-white flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-slate-900">
                NABH Accredited OTs
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Modular operation theatres equipped with HEPA filtration, zero-infection protocols, and sterile laminar airflow.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-50/60 border border-emerald-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-[#20c997] text-white flex items-center justify-center font-bold">
                <Eye className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-slate-900">
                Carl Zeiss & Alcon Systems
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Featuring the Alcon Centurion Phaco system and Carl Zeiss surgical microscopes for sub-millimeter surgical accuracy.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-amber-50/60 border border-amber-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-slate-900">
                Subspeciality Trained Surgeons
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Fellowship-trained eye surgeons specialized in Phaco, Vitreo-Retina, Glaucoma, Cornea, and Paediatric Ophthalmology.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-indigo-50/60 border border-indigo-100 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center font-bold">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-slate-900">
                Ayushman Bharat & Insurance
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Cashless mediclaim facility with leading health insurers and subsidized surgical care under Sarva Drishti Yojana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold text-[#1c88c6] uppercase tracking-widest block mb-1">
              Patient Guidance
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-sans">
              Frequently Asked Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Common questions regarding our surgical procedures, appointments, and insurance policies.
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Do I need a prior appointment for an eye checkup?",
                a: "While walk-ins are welcomed, booking an appointment in advance helps minimize waiting time and ensures priority consultation with the appropriate subspecialist.",
              },
              {
                q: "Is cataract surgery done as a day-care procedure?",
                a: "Yes. Modern phacoemulsification takes only 10 to 15 minutes under topical anesthetic eye drops without injections. Patients are comfortably discharged within 2 hours.",
              },
              {
                q: "Does Ashvini Netralaya accept health insurance and Sarva Drishti Yojana?",
                a: "Yes. We offer cashless mediclaim with leading TPAs and health insurance companies. We also perform subsidized and free surgeries under the Sarva Drishti Yojana for eligible underprivileged patients.",
              },
              {
                q: "What diagnostic tests should I expect during a comprehensive eye exam?",
                a: "A standard checkup includes computerized autorefractometry for vision, non-contact tonometry for eye pressure, slit-lamp biomicroscopy, and dilated retinal examination.",
              },
            ].map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-slate-800 hover:text-[#1c88c6] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180 text-[#1c88c6]" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Banner */}
      <section className="relative py-16 sm:py-20 text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/New-Project-1.png"
            alt="Consult Ashvini Netralaya Specialists"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-900/75" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 space-y-4">
          <span className="inline-block px-3 py-1 bg-[#20c997] text-white text-xs font-bold rounded-full uppercase tracking-wider">
            Patient Support & Booking
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            Schedule Your Expert Eye Consultation Today
          </h2>
          <p className="text-sm sm:text-base text-slate-200 max-w-xl mx-auto">
            Get examined by Tripura’s leading eye specialists. Contact our care desk for inquiries, surgery scheduling, or insurance assistance.
          </p>
          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1c88c6] hover:bg-[#1578b0] text-white font-medium text-sm rounded-full shadow-lg transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment via WhatsApp</span>
            </a>
            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/20 hover:bg-white/30 text-white border border-white/40 font-medium text-sm rounded-full transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Call: {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
