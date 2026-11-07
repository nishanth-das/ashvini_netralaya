"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Building2,
  Stethoscope,
  ShieldCheck,
  Award,
  Sparkles,
  Activity,
  CheckCircle2,
  Calendar,
  Clock,
  Phone,
  ArrowRight,
  ExternalLink,
  Eye,
  Microscope,
  FileCheck2,
  Heart,
  Star,
} from "lucide-react";
import { HeroBanner } from "@/components/HeroBanner";
import { DoctorCard } from "@/components/DoctorCard";
import { ReviewsSection } from "@/components/ReviewsSection";
import { MapSection } from "@/components/MapSection";
import { useBooking } from "@/components/AppWrapper";
import { inHouseDoctors, visitingConsultants } from "@/data/doctors";
import { servicesData } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";

export default function HomePage() {
  const { openBooking } = useBooking();
  const [activeDoctorTab, setActiveDoctorTab] = useState<"inhouse" | "visiting">("inhouse");

  const handleBookDoctor = (doctorName: string) => {
    openBooking({ doctor: doctorName });
  };

  const handleBookService = (serviceTitle: string) => {
    openBooking({ service: serviceTitle });
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Trust Stats Bar */}
      <section className="relative z-20 -mt-6 sm:-mt-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-5 sm:p-7">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4 first:pt-0 first:pl-0">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#1c88c6] flex items-center justify-center shrink-0">
                <Users className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
                  1.4 Lakhs+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-0.5">
                  Patients Treated
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#0d9488] flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
                  25,000+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-0.5">
                  Eye Surgeries Performed
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
                  2,500+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-0.5">
                  Free Eye Surgeries Performed
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-4 sm:pt-0 sm:px-4 last:pr-0">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-500 flex items-center justify-center shrink-0">
                <Star className="w-6 h-6 fill-amber-400 text-amber-500" />
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
                  4,100+
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-0.5">
                  Positive Reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="bg-white py-16 sm:py-20">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Highlight 1 */}
            <div className="bg-gradient-to-b from-white to-slate-50/70 rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center group hover:-translate-y-1">
              <div className="w-20 h-20 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Image
                  src="/images/General-Medical.png"
                  alt="Experienced Surgeons"
                  width={48}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-sans group-hover:text-[#1c88c6] transition-colors">
                Experienced Surgeons
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
                We have an excellent team of experienced and dynamic Surgeons trained in all subspecialities of ophthalmology.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100 w-full text-xs font-bold text-[#1c88c6] flex items-center justify-center gap-1">
                <span>Fellowship Trained Specialists</span>
              </div>
            </div>

            {/* Highlight 2 */}
            <div className="bg-gradient-to-b from-white to-slate-50/70 rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center group hover:-translate-y-1">
              <div className="w-20 h-20 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Image
                  src="/images/Medical-Surgical.png"
                  alt="Medical & Surgical Facilities"
                  width={48}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-sans group-hover:text-[#20c997] transition-colors">
                Medical &amp; Surgical Facilities
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
                We have the best medical and surgical team on board to provide our patients a world class experience of treatment.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100 w-full text-xs font-bold text-[#20c997] flex items-center justify-center gap-1">
                <span>Modular Laminar Flow OT</span>
              </div>
            </div>

            {/* Highlight 3 */}
            <div className="bg-gradient-to-b from-white to-slate-50/70 rounded-2xl p-8 border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center group hover:-translate-y-1">
              <div className="w-20 h-20 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Image
                  src="/images/doctor-medical.png"
                  alt="Community Outreach"
                  width={48}
                  height={48}
                  className="h-12 w-auto object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-sans group-hover:text-[#1c88c6] transition-colors">
                Community Outreach
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm">
                Regular outreach screening camps and free surgeries are carried out on a regular basis for underprivileged patients.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100 w-full text-xs font-bold text-[#1c88c6] flex items-center justify-center gap-1">
                <span>Sarva Drishti Yojana</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-sky-50/30 to-white border-t border-slate-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Collage Image with Floating NABH Seal */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-[500px] aspect-square rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <Image
                  src="/images/About-Us.jpg"
                  alt="About Ashvini Netralaya - Best Eye Hospital in Agartala"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating Quality Badge */}
              <div className="absolute -bottom-5 sm:-bottom-6 right-2 sm:right-6 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-2xl border border-sky-100 flex items-center gap-3.5 max-w-xs animate-float-slow">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#1c88c6] to-[#0284c7] text-white flex items-center justify-center font-bold shadow-md shrink-0">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <p className="font-extrabold text-sm sm:text-base text-slate-900 leading-tight">
                    NABH Accredited
                  </p>
                  <p className="text-xs text-[#1c88c6] font-semibold mt-0.5">
                    1st &amp; Only in Tripura
                  </p>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-3 text-[#20c997] font-bold text-xs uppercase tracking-widest">
                <span className="w-8 h-[2px] bg-[#20c997]"></span>
                <span>Best Eye Care Hospital in Tripura</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-sans font-bold text-slate-900 tracking-tight leading-tight">
                Where Advanced Vision Science Meets Compassionate Care
              </h2>

              <div className="space-y-4 text-sm sm:text-[15px] text-slate-600 leading-relaxed pt-1">
                <p>
                  Established in 2022, <strong className="text-slate-900">Ashvini Netralaya</strong> (A unit of Ashvini Eye Care Pvt. Ltd.) is the first Superspeciality Eye Hospital in the State of Tripura, offering all major subspecialities of Ophthalmology under one roof, including Cataract and Refractive, Retina, Glaucoma, Oculoplasty, and Paediatric Ophthalmology.
                </p>
                <p>
                  We are proud to be <strong className="text-slate-900 font-bold">Tripura’s first and only NABH-accredited Superspeciality Eye Hospital</strong>, setting an unprecedented benchmark for quality, surgical precision, and patient safety in eye care.
                </p>
              </div>

              {/* Four Trust Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#20c997] shrink-0" />
                  <span>Zero Infection Modular OT</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#20c997] shrink-0" />
                  <span>Carl Zeiss &amp; Alcon Systems</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#20c997] shrink-0" />
                  <span>Cashless TPAs &amp; PM-JAY</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#20c997] shrink-0" />
                  <span>24/7 Eye Trauma Support</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => openBooking()}
                  className="px-7 py-3 rounded-full bg-[#1c88c6] hover:bg-[#1579b2] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation</span>
                </button>
                <Link
                  href="/about"
                  className="px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition-colors flex items-center gap-1.5"
                >
                  <span>About Our Hospital</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 sm:py-24 bg-white border-t border-slate-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold text-[#1c88c6] uppercase tracking-widest block">
              Superspeciality Care
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight font-sans">
              Our Clinical Services
            </h2>
            <p className="text-sm text-slate-500">
              State-of-the-art diagnostic evaluations, laser therapies, and stitchless microsurgical procedures performed by fellowship-trained specialists.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1: Comprehensive Eye Checkup */}
            <div className="bg-white shadow-[0_4px_25px_rgba(0,0,0,0.06)] rounded-2xl p-7 border-r-[4px] border-[#0ebadc] border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div>
                <div className="h-14 flex items-center mb-5">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                    <Image
                      src="/images/tool-bok-medical.png"
                      alt="Comprehensive Eye Checkup"
                      width={45}
                      height={42}
                      className="h-9 w-auto object-contain"
                    />
                  </div>
                </div>
                <span className="inline-block text-[11px] font-bold text-[#0ebadc] uppercase tracking-wider mb-1">
                  Routine &amp; Advanced
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3 min-h-[56px] leading-snug group-hover:text-[#0ebadc] transition-colors">
                  <Link href="/services/comprehensive-eye-checkup">
                    Comprehensive Eye Checkup
                  </Link>
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-6">
                  Autorefractometer vision check, intraocular pressure measurement, slit-lamp biomicroscopy, and dilated retinal examination.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => handleBookService("Comprehensive Eye Checkup")}
                  className="text-[#0ebadc] font-bold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 hover:text-[#0b9cb9] transition-colors"
                >
                  <span>BOOK NOW</span>
                  <span className="text-base font-bold">→</span>
                </button>
                <Link
                  href="/services/comprehensive-eye-checkup"
                  className="text-xs text-slate-400 hover:text-slate-700"
                >
                  Details
                </Link>
              </div>
            </div>

            {/* Service 2: Cataract Surgery - Phaco */}
            <div className="bg-white shadow-[0_4px_25px_rgba(0,0,0,0.06)] rounded-2xl p-7 border-r-[4px] border-[#0ebadc] border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div>
                <div className="h-14 flex items-center mb-5">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                    <Image
                      src="/images/bed-medical.png"
                      alt="Cataract Surgery - Phaco"
                      width={45}
                      height={29}
                      className="h-7 w-auto object-contain"
                    />
                  </div>
                </div>
                <span className="inline-block text-[11px] font-bold text-[#0ebadc] uppercase tracking-wider mb-1">
                  Stitchless MICS
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3 min-h-[56px] leading-snug group-hover:text-[#0ebadc] transition-colors">
                  <Link href="/services/cataract-surgery-phaco">
                    Cataract Surgery - Phaco
                  </Link>
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-6">
                  15-minute stitchless, injection-free phacoemulsification with imported foldable hydrophobic Monofocal, Toric &amp; Multifocal IOLs.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => handleBookService("Cataract Surgery - Phaco")}
                  className="text-[#0ebadc] font-bold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 hover:text-[#0b9cb9] transition-colors"
                >
                  <span>BOOK NOW</span>
                  <span className="text-base font-bold">→</span>
                </button>
                <Link
                  href="/services/cataract-surgery-phaco"
                  className="text-xs text-slate-400 hover:text-slate-700"
                >
                  Details
                </Link>
              </div>
            </div>

            {/* Service 3: Retina Surgeries */}
            <div className="bg-white shadow-[0_4px_25px_rgba(0,0,0,0.06)] rounded-2xl p-7 border-r-[4px] border-[#0ebadc] border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div>
                <div className="h-14 flex items-center mb-5">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                    <Image
                  src="/images/generel-medical.png"
                  alt="Retina Surgeries"
                  width={45}
                  height={46}
                  className="h-9 w-auto object-contain"
                />
                  </div>
                </div>
                <span className="inline-block text-[11px] font-bold text-[#0ebadc] uppercase tracking-wider mb-1">
                  Vitreo-Retina &amp; Laser
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3 min-h-[56px] leading-snug group-hover:text-[#0ebadc] transition-colors">
                  <Link href="/services/retina-surgeries">
                    Retina Surgeries
                  </Link>
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-6">
                  Diabetic retinopathy management, retinal detachment repair, Zeiss Cirrus HD-OCT scans, anti-VEGF injections &amp; green photocoagulation.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => handleBookService("Retina Surgeries")}
                  className="text-[#0ebadc] font-bold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 hover:text-[#0b9cb9] transition-colors"
                >
                  <span>BOOK NOW</span>
                  <span className="text-base font-bold">→</span>
                </button>
                <Link
                  href="/services/retina-surgeries"
                  className="text-xs text-slate-400 hover:text-slate-700"
                >
                  Details
                </Link>
              </div>
            </div>

            {/* Service 4: Paediatric Eye Care */}
            <div className="bg-white shadow-[0_4px_25px_rgba(0,0,0,0.06)] rounded-2xl p-7 border-r-[4px] border-[#0ebadc] border border-slate-100 flex flex-col justify-between hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group">
              <div>
                <div className="h-14 flex items-center mb-5">
                  <div className="w-12 h-12 rounded-xl bg-sky-50 flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
                    <Image
                  src="/images/doctor-medical.png"
                  alt="Paediatric Eye Care"
                  width={39}
                  height={50}
                  className="h-9 w-auto object-contain"
                />
                  </div>
                </div>
                <span className="inline-block text-[11px] font-bold text-[#0ebadc] uppercase tracking-wider mb-1">
                  Child Vision &amp; Squint
                </span>
                <h3 className="text-xl font-bold text-slate-900 mb-3 min-h-[56px] leading-snug group-hover:text-[#0ebadc] transition-colors">
                  <Link href="/services/paediatric-eye-care">
                    Paediatric Eye Care
                  </Link>
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed line-clamp-3 mb-6">
                  Childhood vision assessment, lazy eye (amblyopia) therapy, squint surgery, congenital cataract &amp; pediatric spectacle management.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => handleBookService("Paediatric Eye Care")}
                  className="text-[#0ebadc] font-bold text-xs tracking-wider uppercase inline-flex items-center gap-1.5 hover:text-[#0b9cb9] transition-colors"
                >
                  <span>BOOK NOW</span>
                  <span className="text-base font-bold">→</span>
                </button>
                <Link
                  href="/services/paediatric-eye-care"
                  className="text-xs text-slate-400 hover:text-slate-700"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Speciality Navigator Chips */}
          <div className="mt-12 pt-8 border-t border-slate-100 text-center">
            <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4">
              Explore All 16 Specialities Available at Ashvini Netralaya
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
              {[
                { title: "Glaucoma Surgeries", slug: "glaucoma-surgeries" },
                { title: "Dry Eye Evaluation", slug: "dry-eye-evaluation" },
                { title: "YAG Laser", slug: "yag-laser" },
                { title: "Green Laser for Retina", slug: "green-laser-for-retina" },
                { title: "Visual Field Analysis (Humphrey)", slug: "visual-field-analysis-humphrey" },
                { title: "Optical Coherence Tomography (OCT)", slug: "optical-coherence-tomography-oct" },
                { title: "Corneal Topography", slug: "corneal-topography" },
                { title: "In-House Optical & Pharmacy", slug: "in-house-optical-and-pharmacy" },
              ].map((svc) => (
                <Link
                  key={svc.slug}
                  href={`/services/${svc.slug}`}
                  className="px-3.5 py-1.5 rounded-full bg-slate-50 hover:bg-[#1c88c6] text-slate-700 hover:text-white border border-slate-200 hover:border-[#1c88c6] text-xs font-medium transition-all shadow-xs"
                >
                  {svc.title} →
                </Link>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link
                href="/our-services-2"
                className="inline-flex items-center gap-2 bg-[#279dd3] hover:bg-[#1f87b8] text-white font-bold px-9 py-3.5 rounded-full text-sm transition-all shadow-md hover:shadow-lg active:scale-95"
              >
                <span>View Complete Directory of 16 Services</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="relative overflow-hidden">
        {/* Background Graphic */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/doctor-section-background.png"
            alt="Hospital background"
            fill
            className="object-cover object-center opacity-60"
          />
        </div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
          {/* Column 1: Left Cyan Title */}
          <div className="lg:col-span-3 bg-gradient-to-br from-[#2cb5e8] to-[#1da4d8] flex flex-col items-center justify-center p-8 sm:p-12 text-center text-white">
            <span className="text-xs uppercase tracking-widest font-bold text-sky-100 mb-2">
              The Ashvini Difference
            </span>
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold font-sans tracking-tight">
              Why Us?
            </h2>
            <p className="text-xs sm:text-sm text-sky-100 max-w-xs mt-3 leading-relaxed">
              Setting Tripura&apos;s highest benchmark in patient safety, advanced technology &amp; ethical ophthalmic practice.
            </p>
          </div>

          {/* Column 2: Center Operation Theater Photo */}
          <div className="lg:col-span-5 relative min-h-[340px] lg:min-h-[500px] overflow-hidden">
            <Image
              src="/images/Why-us.jpg"
              alt="State-of-the-art Operation Theater at Ashvini Netralaya"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white text-xs bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/20">
              <p className="font-bold">Modular Laminar Flow Operation Theatre</p>
              <p className="text-slate-200 text-[11px]">Equipped with HEPA filters ensuring zero-infection surgical environment.</p>
            </div>
          </div>

          {/* Column 3: Right Feature List with elegant circle badges */}
          <div className="lg:col-span-4 bg-gradient-to-r from-[#17b9b7] to-[#129c9a] p-8 sm:p-10 lg:p-12 flex flex-col justify-center space-y-7 text-white">
            {/* Item 1: Our Team */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center shrink-0 border border-slate-100">
                <Users className="w-7 h-7 text-[#184479]" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1 font-sans">
                  Our Team
                </h4>
                <p className="text-slate-100 text-xs sm:text-[13px] leading-relaxed">
                  A dedicated team of experienced eye surgeons trained across leading Indian ophthalmic institutes to take care of all kinds of eye diseases or disorders.
                </p>
              </div>
            </div>

            {/* Item 2: Unbeatable patient experience */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center shrink-0 border border-slate-100">
                <Building2 className="w-7 h-7 text-[#184479]" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1 font-sans">
                  Unbeatable Patient Experience
                </h4>
                <p className="text-slate-100 text-xs sm:text-[13px] leading-relaxed">
                  Friendly staff, a welcoming environment, safe and smooth workflow inside our hospital ensures an unbeatable level of patient comfort and wellbeing. Come and experience the difference.
                </p>
              </div>
            </div>

            {/* Item 3: World Class Technology */}
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-white shadow-lg flex items-center justify-center shrink-0 border border-slate-100">
                <Stethoscope className="w-7 h-7 text-[#184479]" />
              </div>
              <div>
                <h4 className="text-white font-bold text-lg mb-1 font-sans">
                  World Class Technology
                </h4>
                <p className="text-slate-100 text-xs sm:text-[13px] leading-relaxed">
                  We have made sure to equip the hospital with the best in class diagnostic and surgical equipments in the entire State. So you never have to worry about accuracy and results anymore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Surgical Technology */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold text-[#1c88c6] uppercase tracking-widest block">
              Clinical Technology
            </span>
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight font-sans">
              Precision Surgical Infrastructure
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Tripura’s benchmark ophthalmic facility powered by world-renowned German &amp; American surgical instrumentation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tech 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-sky-100 text-[#1c88c6] flex items-center justify-center font-bold">
                <Microscope className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-slate-900">
                Alcon Centurion Vision System
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Active fluidics phacoemulsification technology for ultra-safe, stitchless, sub-2mm incision cataract surgery with rapid visual recovery.
              </p>
              <span className="inline-block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Alcon USA • Phaco Gold Standard
              </span>
            </div>

            {/* Tech 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#20c997] flex items-center justify-center font-bold">
                <Eye className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-slate-900">
                Carl Zeiss Surgical Microscope
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                High-definition German optics offering crystal-clear stereoscopic red reflex and sub-millimeter precision for anterior &amp; retinal microsurgeries.
              </p>
              <span className="inline-block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                Carl Zeiss Germany
              </span>
            </div>

            {/* Tech 3 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                <Activity className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-slate-900">
                Zeiss Cirrus HD-OCT Scans
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                High-resolution cross-sectional retinal and optic nerve imaging capable of detecting micro-damage from diabetes and glaucoma before vision loss.
              </p>
              <span className="inline-block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                High-Definition OCT
              </span>
            </div>

            {/* Tech 4 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-base text-slate-900">
                Modular Laminar Flow OTs
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                HEPA filtered sterile air delivery with positive pressure protocols, achieving international sterility and zero-infection compliance targets.
              </p>
              <span className="inline-block text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                NABH Infection Protocol
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Community Care Scheme */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#0d5985] to-[#1c88c6] text-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/20 text-sky-100 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-300" />
                <span>Tripura Community Healthcare Initiative</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-sans">
                Sarva Drishti Yojana — Vision for All
              </h2>

              <p className="text-sm sm:text-base text-sky-100 leading-relaxed max-w-2xl">
                Ashvini Eye Foundation and Ashvini Netralaya provide subsidized and accessible eye care for BPL, PHH, AAY, PM-JAY and CM-JAY card holders across Tripura.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <p className="text-2xl font-extrabold text-white">₹50/-</p>
                  <p className="text-xs font-semibold text-sky-200 mt-0.5">OPD Consultation</p>
                  <p className="text-[11px] text-slate-200 mt-1">10:30 AM to 2:00 PM</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <p className="text-2xl font-extrabold text-white">Up to 70%</p>
                  <p className="text-xs font-semibold text-sky-200 mt-0.5">Diagnostic Discount</p>
                  <p className="text-[11px] text-slate-200 mt-1">On all eye scans &amp; OCT</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                  <p className="text-2xl font-extrabold text-white">From ₹3,000</p>
                  <p className="text-xs font-semibold text-sky-200 mt-0.5">Subsidized Surgery</p>
                  <p className="text-[11px] text-slate-200 mt-1">Stitchless cataract packages</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center text-center p-6 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20 space-y-4">
              <div className="relative w-24 h-24 rounded-2xl overflow-hidden bg-white p-2 shadow-lg">
                <Image
                  src="/images/AN-1080-by-1080-SDY-logo.png"
                  alt="Sarva Drishti Yojana Logo"
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <h4 className="text-lg font-bold text-white">Need Free / Subsidized Eye Care?</h4>
                <p className="text-xs text-sky-100 mt-1">
                  Visit us with your BPL / Ration / Ayushman card or inquire directly.
                </p>
              </div>

              <div className="w-full space-y-2 pt-2">
                <Link
                  href="/sarva-drishti-yojana"
                  className="w-full block py-3 px-4 bg-white text-[#1c88c6] font-bold text-xs uppercase tracking-wider rounded-xl shadow transition hover:bg-sky-50"
                >
                  Scheme Details &amp; Eligibility
                </Link>
                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-sky-900/60 hover:bg-sky-900 text-white font-semibold text-xs rounded-xl border border-white/25 transition"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Desk: {siteConfig.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Team */}
      <section id="doctors" className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-[#1c88c6] uppercase tracking-widest block">
              Medical Faculty
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-2 font-sans">
              Meet Our Specialist Surgeons
            </h2>
            <p className="text-sm text-slate-500">
              A dedicated team of experienced eye surgeons trained across leading institutes to take care of all ophthalmic disorders.
            </p>

            {/* Doctor Tab Selector */}
            <div className="inline-flex items-center p-1 bg-slate-100 rounded-full border border-slate-200 mt-4">
              <button
                onClick={() => setActiveDoctorTab("inhouse")}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  activeDoctorTab === "inhouse"
                    ? "bg-[#1c88c6] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                In-House Specialists ({inHouseDoctors.length})
              </button>
              <button
                onClick={() => setActiveDoctorTab("visiting")}
                className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                  activeDoctorTab === "visiting"
                    ? "bg-[#1c88c6] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Visiting Super-Consultants ({visitingConsultants.length})
              </button>
            </div>
          </div>

          {activeDoctorTab === "inhouse" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {inHouseDoctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  doctor={doctor}
                  onBookDoctor={handleBookDoctor}
                />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {visitingConsultants.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  doctor={doctor}
                  onBookDoctor={handleBookDoctor}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Insurance & Empanelment */}
      <section className="py-12 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#1c88c6] uppercase tracking-wider">
              Empanelled Insurances &amp; Schemes
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              Cashless Mediclaim &amp; Government Healthcare Cards Accepted
            </h3>
            <p className="text-xs text-slate-500 max-w-xl mx-auto">
              Our dedicated cashless desk coordinates directly with your insurance TPA or government scheme for hassle-free approvals.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-bold text-slate-700">
            {[
              "PM-JAY (Ayushman Bharat)",
              "CM-JAY (Tripura Health Scheme)",
              "Star Health Insurance",
              "Care Health Insurance",
              "HDFC ERGO Health",
              "ICICI Lombard",
              "MediBuddy",
              "Vidal Health TPA",
              "Paramount Health",
              "Heritage Health TPA",
            ].map((scheme, i) => (
              <div
                key={i}
                className="bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-2 hover:border-[#1c88c6] transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#20c997]" />
                <span>{scheme}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Location */}
      <MapSection />

      {/* Patient Reviews */}
      <ReviewsSection />

      {/* Call to Action */}
      <section className="relative py-16 sm:py-24 text-white text-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/New-Project-1.png"
            alt="Ashvini Netralaya Consultation"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-slate-950/75 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#20c997] text-white text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Tripura’s 1st NABH Eye Hospital</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight font-sans">
            Looking for the Best Eye Care Hospital in Tripura?
          </h2>

          <p className="text-base sm:text-lg text-slate-200 max-w-xl mx-auto">
            You’re at the right place. Consult with experienced eye surgeons and experience unmatched clinical comfort.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openBooking()}
              className="px-8 py-3.5 bg-[#1c88c6] hover:bg-[#1579b2] text-white font-bold text-sm sm:text-base rounded-full shadow-xl transition-all active:scale-95 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Appointment Now</span>
            </button>
            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="px-7 py-3.5 bg-white/15 hover:bg-white/25 text-white font-semibold text-sm sm:text-base rounded-full border border-white/30 transition-all backdrop-blur-sm flex items-center gap-2"
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
