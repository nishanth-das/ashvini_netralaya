import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Clock,
  Percent,
  Banknote,
  ShieldCheck,
  Phone,
  Calendar,
  Sparkles,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Sarva Drishti Yojana | Affordable Eye Care in Tripura",
  description:
    "Ashvini Eye Foundation & Ashvini Netralaya launch 'Sarva Drishti Yojana': OPD at ₹50, up to 70% discount on diagnostic tests, and cataract surgeries starting at ₹3,000 for BPL, PHH, AAY, PM-JAY & CM-JAY card holders.",
};

export default function SarvaDrishtiYojanaPage() {
  return (
    <div className="bg-white">
      {/* Banner */}
      <section className="bg-gradient-to-r from-[#1c88c6] to-[#0284c7] py-14 sm:py-20 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest text-sky-100 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Community Healthcare Initiative</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans">
            Sarva Drishti Yojana
          </h1>
          <p className="text-sm sm:text-base text-sky-100 max-w-2xl mx-auto">
            Affordable Eye Care for the Underprivileged in Tripura by Ashvini Eye Foundation &amp; Ashvini Netralaya.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Announcement Card */}
          <div className="bg-sky-50/60 rounded-3xl p-6 sm:p-10 border border-sky-100 space-y-6">
            <div className="flex flex-col md:flex-row items-center gap-6 pb-6 border-b border-sky-200/60">
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shadow-md flex-shrink-0 bg-white p-2">
                <Image
                  src="/images/AN-1080-by-1080-SDY-logo.png"
                  alt="Sarva Drishti Yojana Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="space-y-2 text-center md:text-left">
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 leading-snug">
                  Ashvini Eye Foundation, in Collaboration with Ashvini Netralaya, Launches “Sarva Drishti Yojana” – Affordable Eye Care for the Underprivileged
                </h2>
                <p className="text-xs sm:text-sm text-[#1c88c6] font-semibold">
                  A revolutionary vision scheme eliminating financial barriers for timely eye treatment in Tripura.
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
              <p>
                In a significant step toward ensuring accessible healthcare for all, <strong>Ashvini Eye Foundation</strong>, in partnership with <strong>Ashvini Netralaya</strong>, is proud to announce the launch of <strong>“Sarva Drishti Yojana”</strong>, an ambitious initiative dedicated to providing affordable and quality eye care services to individuals from <strong>Below Poverty Line (BPL) / PHH (Priority Household) / AAY (Antyodaya Anna Yojana) / Ad-Hoc BPL</strong> backgrounds.
              </p>
              <p>
                The initiative is designed to eliminate financial barriers that often prevent underprivileged individuals from seeking timely and essential eye treatment. By offering subsidized services, Sarva Drishti Yojana aims to promote eye health and prevent avoidable blindness among economically disadvantaged communities.
              </p>
            </div>
          </div>

          {/* Key Features Cards */}
          <div className="space-y-6">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 text-center font-sans">
              Key Features of the “Sarva Drishti Yojana”
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Feature 1 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md border border-slate-200/80 space-y-4 transition">
                <div className="w-14 h-14 rounded-2xl bg-sky-100 text-[#1c88c6] flex items-center justify-center font-bold">
                  <Clock className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xl text-slate-900">
                    OPD Services at Just ₹50/-
                  </h4>
                  <p className="text-xs font-semibold text-[#1c88c6] mt-0.5">
                    Nominal Consultation Fee
                  </p>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Timings:</strong> 10:30 AM to 2:00 PM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>Thursday &amp; Sunday Closed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>Includes comprehensive eye check-ups at a nominal fee.</span>
                  </li>
                </ul>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md border border-slate-200/80 space-y-4 transition">
                <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 flex items-center justify-center font-bold">
                  <Percent className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xl text-slate-900">
                    Upto 70% Discount
                  </h4>
                  <p className="text-xs font-semibold text-amber-600 mt-0.5">
                    On All Eye-Related Diagnostic Tests
                  </p>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>Cataract Screening &amp; Biometry</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>Retina Scans &amp; OCT Imaging</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>Glaucoma Visual Field Testing &amp; Tonometry</span>
                  </li>
                </ul>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md border border-slate-200/80 space-y-4 transition">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                  <Banknote className="w-7 h-7" />
                </div>
                <div>
                  <h4 className="font-extrabold text-xl text-slate-900">
                    Affordable Surgeries
                  </h4>
                  <p className="text-xs font-semibold text-emerald-600 mt-0.5">
                    Starting at Just ₹3,000/-
                  </p>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>Subsidized surgical packages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>Safe stitchless procedures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span>Pre-op testing &amp; post-op medication advice included</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Government Health Cards Acceptance */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl p-6 sm:p-8 shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center sm:text-left">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Government Beneficiaries</span>
              </div>
              <h4 className="text-xl sm:text-2xl font-bold">
                PM-JAY &amp; CM-JAY Health Cards Covered
              </h4>
              <p className="text-xs sm:text-sm text-emerald-100 max-w-xl">
                This Yojana will cover all eligible beneficiaries including PM-JAY and CM-JAY card holders, ensuring zero financial stress for families.
              </p>
            </div>
            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="px-6 py-3 bg-white text-emerald-800 font-bold text-xs sm:text-sm rounded-full shadow hover:bg-emerald-50 transition flex-shrink-0"
            >
              Verify Eligibility
            </a>
          </div>

          {/* Scheme Images Gallery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/ion-fet-QRawWgV6gmo-unsplash-1-scaled.jpg"
                alt="Community Vision Outreach Camp"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[16/10] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/alexander-grey-VDTVPBP22HU-unsplash-1-scaled.jpg"
                alt="Doctor examining patient with precision"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Mission Quote */}
          <div className="border-l-4 border-[#1c88c6] pl-6 py-2 space-y-3 bg-slate-50 p-6 rounded-r-2xl">
            <p className="text-base sm:text-lg font-medium text-slate-800 italic leading-relaxed">
              &ldquo;We believe that quality eye care should not be a privilege, but a basic right. With Sarva Drishti Yojana, our goal is to reach those who need it the most and ensure that no one is denied the gift of vision due to financial hardship.&rdquo;
            </p>
            <p className="text-xs sm:text-sm text-slate-600">
              Ashvini Netralaya, known for its excellence in ophthalmic services, is committed to extending its expertise to benefit marginalized sections of society through this initiative.
            </p>
          </div>

          {/* Action Box */}
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 text-center space-y-4">
            <h3 className="text-2xl sm:text-3xl font-extrabold font-sans">
              Avail Services Under Sarva Drishti Yojana
            </h3>
            <p className="text-sm text-slate-300 max-w-xl mx-auto">
              For further details, required documentation, or to avail of the services under the Sarva Drishti Yojana, individuals can visit Ashvini Netralaya at Bijoykumar Chowmuhani, Agartala.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm rounded-full shadow transition"
              >
                Inquire on WhatsApp
              </a>
              <Link
                href="/contact"
                className="px-6 py-3 bg-[#1c88c6] hover:bg-[#1677be] text-white font-bold text-xs sm:text-sm rounded-full shadow transition"
              >
                Hospital Location &amp; Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
