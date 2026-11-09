import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, Award, Heart, CheckCircle2, ArrowRight, UserCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { inHouseDoctors } from "@/data/doctors";

export const metadata: Metadata = {
  title: "About Us | Tripura's First NABH-Accredited Eye Hospital",
  description:
    "Learn about Ashvini Netralaya, established in 2022 in Agartala. First NABH-accredited Superspeciality Eye Hospital in Tripura, led by Dr. Anurag Majumdar and Dr. Subrata Saha.",
};

export default function AboutPage() {
  const leadership = inHouseDoctors.filter(
    (d) => d.role === "Medical Director" || d.role === "Chief Operating Officer"
  );

  return (
    <div className="bg-white">
      {/* Page Header Banner */}
      <section className="bg-gradient-to-r from-[#1c88c6] to-[#0284c7] py-14 sm:py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans">
            About Ashvini Netralaya
          </h1>
          <p className="text-sm sm:text-base text-sky-100 max-w-2xl mx-auto">
            Setting a benchmark for ophthalmic surgical excellence, patient safety, and compassionate vision care in Tripura.
          </p>
        </div>
      </section>

      {/* Main Welcome & Story Section */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Collage Image */}
            <div className="lg:col-span-6 relative">
              <div className="relative w-full aspect-square max-w-lg mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <Image
                  src="/images/About-Us.jpg"
                  alt="About Ashvini Netralaya"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-2 sm:right-6 bg-white p-4 rounded-2xl shadow-xl border border-sky-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1c88c6] text-white flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-extrabold text-sm text-slate-900 leading-tight">
                    NABH Accredited
                  </p>
                  <p className="text-xs text-[#1c88c6] font-semibold">
                    First & Only in Tripura
                  </p>
                </div>
              </div>
            </div>

            {/* Right Text */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-extrabold text-[#1c88c6] uppercase tracking-widest">
                  WELCOME TO
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
                  Ashvini Netralaya
                </h2>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
                <p>
                  Established in 2022, <strong>Ashvini Netralaya</strong> (A unit of Ashvini Eye Care Pvt. Ltd.) is the first Superspeciality Eye Hospital in the State of Tripura, offering all major subspecialities of Ophthalmology under one roof, including Cataract and Refractive, Retina, Glaucoma, Oculoplasty, and Paediatric Ophthalmology. We are also proud to be{" "}
                  <strong className="text-[#1c88c6]">Tripura’s first and only NABH-accredited Superspeciality Eye Hospital</strong>, setting a new benchmark for quality and patient safety in eye care.
                </p>
                <p>
                  What sets us apart is our team of experienced and dedicated eye surgeons across different subspecialities, world-class diagnostic and surgical equipment, and most importantly, an unmatched patient experience focused on comfort, safety, and overall well-being of patients and their families. Our highly professional and friendly hospital staff go the extra mile to ensure a smooth, reassuring, and comfortable experience within the hospital premises.
                </p>
                <p>
                  Conveniently located in the heart of the capital city, Agartala, the hospital is easy to reach from all corners of the city or from other towns/districts in the State. So drop in, get your eyes checked with superior comfort and safety, and actually SEE the difference.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#1c88c6] hover:bg-[#1677be] text-white text-sm font-bold rounded-full shadow-md transition-all"
                >
                  <span>Visit Our Hospital</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold rounded-full border border-slate-200 transition-all"
                >
                  <span>Call: {siteConfig.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hospital Leadership */}
      <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold text-[#1c88c6] uppercase tracking-widest">
              Executive Leadership
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
              Hospital Leadership
            </h2>
            <p className="text-sm text-slate-600">
              Guiding Ashvini Netralaya with visionary clinical standards and relentless commitment to patient well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {leadership.map((leader) => (
              <div
                key={leader.id}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md border border-slate-100 flex flex-col items-center text-center space-y-4"
              >
                <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-sky-100 shadow-inner">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">{leader.name}</h3>
                  <p className="text-xs font-bold text-[#1c88c6] uppercase tracking-wider mt-0.5">
                    {leader.qualifications}
                  </p>
                  <span className="inline-block mt-2 px-3 py-1 rounded-full bg-sky-50 text-sky-900 text-xs font-bold border border-sky-200">
                    {leader.role}
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed max-w-sm">
                  {leader.department}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values / Why Patients Trust Us */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold text-[#1c88c6] uppercase tracking-widest">
              Our Principles
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans tracking-tight">
              Why Patients Choose Ashvini Netralaya
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-100 text-[#1c88c6] flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">NABH Quality Standards</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Strict adherence to national healthcare protocols, surgical sterilization, zero-infection targets, and high-precision patient safety frameworks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Compassionate Care</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Warm, reassuring hospital environment with patient-first assistance for elderly and paediatric patients from first OPD checkup to post-op recovery.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100 space-y-3">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg text-slate-900">Affordable & Accessible</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Transparent treatment packages, PM-JAY and CM-JAY cashless card acceptance, and subsidized eye care through our &ldquo;Sarva Drishti Yojana&rdquo; scheme.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
