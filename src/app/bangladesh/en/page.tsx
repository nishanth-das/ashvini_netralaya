import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Clock,
  Phone,
  MessageCircle,
  MapPin,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  HelpCircle,
  Heart,
  Stethoscope,
  Microscope,
  FileText,
  Compass,
  Sparkles,
  Users,
  Navigation,
  Star,
  Building2,
  Banknote,
  FileCheck2,
  Globe,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "World-Class Eye Care in Agartala for Bangladeshi Patients | Ashvini Netralaya (NABH-Accredited)",
  description:
    "Advanced stitchless Phaco cataract surgery, vitreo-retina care, glaucoma, and paediatric eye care in Agartala, India. Just 15 minutes from Akhaura Border. 24-hour Medical Visa Invitation Letter, verified guest house bookings, safe currency exchange (BDT to INR), and day-care discharge.",
  keywords: [
    "Eye treatment in Agartala for Bangladeshi patients",
    "Cataract surgery in Agartala India",
    "Akhaura to Agartala eye hospital",
    "Medical visa invitation letter Agartala",
    "Retina surgery for Bangladesh patients",
    "Best eye hospital near Bangladesh border",
    "Ashvini Netralaya Agartala",
    "Eye care Bangladesh Agartala",
    "NABH eye hospital Agartala",
    "Phaco cataract cost Agartala",
    "Bangladesh to Agartala medical travel",
  ],
  alternates: {
    canonical: `${siteConfig.url}/bangladesh/en`,
  },
  openGraph: {
    title: "World-Class Eye Care in Agartala for Bangladeshi Patients | Ashvini Netralaya",
    description:
      "Just hours from Dhaka, Comilla, and Brahmanbaria. Tripura's 1st & Only NABH-Accredited Superspeciality Eye Hospital. Official Medical Visa letters, guest house assistance, and day-care surgery.",
    url: `${siteConfig.url}/bangladesh/en`,
    siteName: siteConfig.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/Hero_Banner01.webp`,
        width: 1200,
        height: 650,
        alt: "Ashvini Netralaya - Agartala Eye Hospital",
      },
    ],
  },
};

export default function BangladeshEnglishPage() {
  const whatsappPreFilledUrl = `https://api.whatsapp.com/send?phone=${siteConfig.bangladeshDesk.whatsapp}&text=${encodeURIComponent(
    "Hello Ashvini Netralaya, I am contacting you from Bangladesh regarding eye treatment consultation. Please guide me on doctor appointments and medical visa invitation letter assistance."
  )}`;

  const bangladeshFaqs = [
    {
      question: "What is the procedure to travel from Bangladesh to Agartala for eye treatment?",
      answer:
        "First, send your previous prescription and eye test reports to our official WhatsApp helpline (+91 69090 45693). Our senior ophthalmologists will review your reports, perform a preliminary evaluation, and provide an estimated treatment cost. Next, Ashvini Netralaya issues an official Medical Visa Invitation Letter on hospital letterhead with doctor credentials, which you can submit at your nearest Indian Visa Application Centre (IVAC) across Bangladesh.",
    },
    {
      question: "Can Ashvini Netralaya issue a Medical Visa Invitation Letter?",
      answer:
        "Yes, absolutely. For confirmed patients and up to two accompanying family attendants with valid passports, Ashvini Netralaya issues an official Medical Visa Invitation Letter. Simply share passport copies, address, and recent eye prescriptions via WhatsApp. Our international desk typically processes and issues the invitation letter within 24 hours.",
    },
    {
      question: "How long do I need to stay in Agartala for Cataract or Retina surgery?",
      answer:
        "Modern Micro-Incision Phaco (MICS Phaco) cataract surgery is completely stitchless, painless, and performed as an outpatient day-care procedure taking just 10 to 15 minutes. Patients can comfortably return to their hotel within 2 to 3 hours after surgery. Following a brief checkup the next morning, patients can safely return to Bangladesh. For advanced retina or glaucoma surgeries, a stay of 2 to 3 days is generally recommended.",
    },
    {
      question: "Why choose Ashvini Netralaya in Agartala instead of traveling to Kolkata or Chennai?",
      answer:
        "First, massive savings on travel time, airfare, and lodging—Agartala is reachable directly by road or rail from Dhaka or Comilla in just a few hours without expensive flights. Second, Ashvini Netralaya is Tripura's first and only NABH-accredited superspeciality eye hospital, offering the same clinical quality, laminar flow modular OTs, and Carl Zeiss & Alcon technologies found in premier metro hospitals. Third, complete ease of communication: our doctors and staff are fluent in both Bengali and English.",
    },
    {
      question: "What accommodation and hotel facilities are available near the hospital?",
      answer:
        "Ashvini Netralaya is located at Bijoykumar Chowmuhani in central Agartala. Within a 2- to 5-minute walk from the hospital, there are multiple verified budget hotels, family guest houses, and quality restaurants. Our dedicated international patient desk assists families with pre-booking clean, secure AC/non-AC rooms with lift and wheelchair accessibility at special corporate rates.",
    },
    {
      question: "How do I exchange currency (BDT to INR) safely?",
      answer:
        "Our international patient desk provides clear guidance on exchanging Bangladeshi Taka (BDT) to Indian Rupees (INR) at government-registered, authorized money changers located at the Akhaura border checkpost and in central Agartala. You receive official daily bank exchange rates without unauthorized middlemen. In addition, the hospital accepts international credit and debit cards (Visa/Mastercard) and provides itemized bills for all expenses.",
    },
    {
      question: "What documentation will I receive for border immigration when returning to Bangladesh?",
      answer:
        "To ensure a seamless return journey, the hospital provides complete discharge documentation: doctor's original prescription, itemized treatment receipts, full hospital bill, surgical discharge summary, and an authorized 'Fit to Travel' medical certificate. This ensures prompt clearance at the Akhaura-Agartala immigration and customs checkpost.",
    },
    {
      question: "Can an attendant or family member accompany the patient throughout the visit?",
      answer:
        "Yes. Up to two family attendants are permitted and encouraged to accompany the patient. We also include attendant details in the official Medical Visa Invitation Letter so that attendants receive their Indian Medical Attendant Visas simultaneously.",
    },
  ];

  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Ashvini Netralaya - International Eye Care Center",
    image: `${siteConfig.url}/images/Hero_Banner01.webp`,
    "@id": `${siteConfig.url}/#hospital`,
    url: `${siteConfig.url}/bangladesh/en`,
    telephone: siteConfig.bangladeshDesk.phone,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bijoykumar Chowmuhani, Krishna Nagar",
      addressLocality: "Agartala",
      addressRegion: "Tripura",
      postalCode: "799001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.8358,
      longitude: 91.2796,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "10:00",
        closes: "17:00",
      },
    ],
    areaServed: [
      {
        "@type": "Country",
        name: "Bangladesh",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: bangladeshFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-slate-800">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Border & Verification Top Alert Bar */}
      <div className="bg-[#051226] border-b border-sky-950 text-slate-300 py-2.5 px-4 text-xs">
        <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold text-[11px] border border-emerald-500/40">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>International Patient Support Desk</span>
            </span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="text-slate-300 text-[11px] sm:text-xs">
              Just 15 minutes from Akhaura-Agartala Integrated Checkpost (Border)
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] sm:text-xs">
            {/* Language Switcher to Bengali */}
            <Link
              href="/bangladesh/eye-care"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-sky-200 hover:text-white transition-colors border border-white/15 font-medium"
              title="বাংলা সংস্করণে পরিবর্তন করুন"
            >
              <Globe className="w-3.5 h-3.5 text-sky-300" />
              <span>বাংলা সংস্করণ</span>
            </Link>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <a
              href={whatsappPreFilledUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:text-[#3ce67b] font-semibold flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp: {siteConfig.bangladeshDesk.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-10 pb-14 lg:pt-14 lg:pb-20 bg-gradient-to-b from-[#082142] via-[#0c315e] to-[#12457e] text-white overflow-hidden">
        {/* Subtle radial glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(28,136,198,0.22),transparent_50%)] pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              {/* Trust Badges & Language Toggle */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-sky-200 text-xs font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-300" />
                  <span>Tripura&apos;s 1st &amp; Only NABH-Accredited Eye Hospital</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-500/30">
                  <Award className="w-3.5 h-3.5" />
                  <span>10,000+ Successful Surgeries</span>
                </span>

                {/* Inline Language Selector */}
                <div className="inline-flex items-center p-0.5 rounded-full bg-white/10 border border-white/20 text-xs ml-auto sm:ml-0">
                  <Link
                    href="/bangladesh/eye-care"
                    className="px-2.5 py-0.5 rounded-full text-sky-200 hover:text-white font-medium transition-colors"
                  >
                    বাংলা
                  </Link>
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-500 text-white font-semibold shadow-xs">
                    English
                  </span>
                </div>
              </div>

              {/* Main Heading */}
              <div className="space-y-2.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-sky-500/15 border border-sky-400/25 text-sky-200 text-xs font-medium">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400"></span>
                  <span>Trusted by Patients Across Bangladesh &amp; Northeast India</span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-[34px] font-bold leading-[1.3] text-white">
                  World-Class Eye Care in Agartala — Just Hours Away from{" "}
                  <span className="text-[#38bdf8] underline decoration-sky-400/50 underline-offset-8">
                    Bangladesh
                  </span>
                </h1>
              </div>

              {/* Sub-description */}
              <p className="text-sm sm:text-[15px] text-slate-100/90 leading-[1.75] max-w-xl font-normal">
                Easily reach Ashvini Netralaya by road or rail from Dhaka, Comilla, Brahmanbaria, and Sylhet via the Akhaura border. We provide end-to-end support: official Medical Visa Invitation Letters (issued in 24 hrs), hotel &amp; guest house coordination, safe currency exchange guidance (BDT to INR), and international-standard stitchless Phaco cataract and advanced retina surgeries in a warm, welcoming environment.
              </p>

              {/* Travel Time Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 max-w-xl">
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-center">
                  <span className="block text-[11px] text-sky-200 font-medium">From Dhaka</span>
                  <span className="text-xs sm:text-sm font-bold text-white">3 – 4 Hours</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-center">
                  <span className="block text-[11px] text-sky-200 font-medium">From Comilla</span>
                  <span className="text-xs sm:text-sm font-bold text-white">1 – 1.5 Hours</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-center">
                  <span className="block text-[11px] text-sky-200 font-medium">Brahmanbaria</span>
                  <span className="text-xs sm:text-sm font-bold text-white">45 – 60 Mins</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-center">
                  <span className="block text-[11px] text-sky-200 font-medium">From Sylhet</span>
                  <span className="text-xs sm:text-sm font-bold text-white">3 Hours</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <a
                  href={whatsappPreFilledUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto justify-center text-center inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs sm:text-sm rounded-full shadow-md shadow-emerald-950/30 transition-all transform active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>Send Reports on WhatsApp &amp; Get Visa Help</span>
                </a>

                <div className="flex flex-wrap items-center gap-2">
                  <a
                    href={`tel:${siteConfig.bangladeshDesk.phoneClean}`}
                    className="inline-flex items-center gap-2 px-4 py-3 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-semibold text-xs sm:text-sm rounded-full backdrop-blur-md transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5 text-sky-300 shrink-0" />
                    <span>Call: {siteConfig.bangladeshDesk.phone}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Hospital Showcase Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-white/15 bg-slate-900">
                <div className="relative w-full aspect-[16/11]">
                  <Image
                    src="/images/WhatsApp-Image-2023-06-03-at-2.30.23-AM-1.webp"
                    alt="Ashvini Netralaya Agartala - International Eye Care"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                </div>

                {/* Overlaid Highlight Points */}
                <div className="p-4 sm:p-5 space-y-3 bg-slate-900/95 backdrop-blur-md border-t border-white/10">
                  <div className="flex items-center justify-between pb-2.5 border-b border-slate-700/60">
                    <div>
                      <p className="font-bold text-base text-white">Ashvini Netralaya</p>
                      <p className="text-xs text-sky-300">Bijoykumar Chowmuhani, Agartala</p>
                    </div>
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-sky-500/20 text-sky-300 border border-sky-400/30">
                      NABH Accredited
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs sm:text-[13px] text-slate-200">
                    <li className="flex items-start gap-2 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#20c997] shrink-0 mt-0.5" />
                      <span>Official Medical Visa Invitation Letter provided within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-2 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#20c997] shrink-0 mt-0.5" />
                      <span>Assistance with nearby verified hotel &amp; family guest house bookings</span>
                    </li>
                    <li className="flex items-start gap-2 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#20c997] shrink-0 mt-0.5" />
                      <span>Safe Currency Exchange guidance (BDT to INR at official bank rates)</span>
                    </li>
                    <li className="flex items-start gap-2 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#20c997] shrink-0 mt-0.5" />
                      <span>Authorized Fit-to-Travel certificates &amp; discharge file for smooth border return</span>
                    </li>
                    <li className="flex items-start gap-2 leading-relaxed">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#20c997] shrink-0 mt-0.5" />
                      <span>Stitchless, painless Phaco cataract surgery with quick day-care discharge</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Bangladeshi Patient Assistance */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-sky-50/70 via-white to-slate-50 border-b border-sky-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-3xl mx-auto space-y-2.5">
            <span className="text-xs sm:text-[13px] font-bold text-[#0c6ba1] bg-sky-100/90 px-3.5 py-1 rounded-full border border-sky-200 inline-block">
              International Patient Support Services
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-slate-900 leading-snug">
              Specialized Care &amp; Assistance for Bangladeshi Patients
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              From visa documentation to comfortable border return, our dedicated International Patient Desk coordinates every detail to ensure a smooth, worry-free medical experience:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Medical Visa Letter */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-sky-200/80 shadow-xs hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-sky-50 text-[#0c6ba1] flex items-center justify-center font-bold text-xl group-hover:bg-[#0c6ba1] group-hover:text-white transition-colors">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  1. Official Medical Visa &amp; 24-Hour Invitation Letter
                </h3>
                <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                  To ensure hassle-free visa processing, Ashvini Netralaya issues an authorized Medical Visa Invitation Letter signed on hospital letterhead with doctor credentials.
                </p>
                <ul className="space-y-2 text-xs sm:text-[13px] text-slate-700 font-normal pt-2.5 border-t border-slate-100">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Authorized invitation letters issued for both patient and accompanying attendants</span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Fully accepted at Indian Visa Application Centres (IVAC) in Dhaka, Chittagong, Sylhet, etc.</span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Simply share passport copies &amp; previous prescription via WhatsApp to receive the letter within 24 hours</span>
                  </li>
                </ul>
              </div>
              <div className="pt-3 border-t border-slate-100">
                <a
                  href={whatsappPreFilledUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0c6ba1] hover:text-sky-800 transition-colors"
                >
                  <span>Request Visa Invitation Letter on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 2: Hotel & Accommodation */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-emerald-200/80 shadow-xs hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  2. Comfortable Hotel &amp; Guest House Coordination
                </h3>
                <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                  To ensure a relaxing stay for patients and visiting family members, we assist directly with booking verified hotels and guest houses within 2 to 5 minutes walk from the hospital.
                </p>
                <ul className="space-y-2 text-xs sm:text-[13px] text-slate-700 font-normal pt-2.5 border-t border-slate-100">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Spotless AC &amp; non-AC rooms with special subsidized corporate rates for Bangladeshi patients</span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Elevator and wheelchair accessibility ensuring effortless mobility for senior patients</span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Surrounded by hygienic family restaurants offering familiar Bengali meals</span>
                  </li>
                </ul>
              </div>
              <div className="pt-3 border-t border-slate-100">
                <a
                  href={whatsappPreFilledUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                >
                  <span>Inquire About Accommodation Assistance</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 3: Currency Exchange */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-amber-200/80 shadow-xs hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xl group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <Banknote className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  3. Safe Currency Exchange &amp; Payment Guidance
                </h3>
                <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                  To eliminate financial confusion, we provide step-by-step guidance to government-registered authorized money changers at the Akhaura border and in central Agartala.
                </p>
                <ul className="space-y-2 text-xs sm:text-[13px] text-slate-700 font-normal pt-2.5 border-t border-slate-100">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Direct conversion of BDT to INR at daily official bank rates with zero unauthorized cuts</span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Support for Indian Cash Rupees as well as international debit &amp; credit cards</span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Transparent itemized billing and official receipts for every procedure with no hidden costs</span>
                  </li>
                </ul>
              </div>
              <div className="pt-3 border-t border-slate-100">
                <a
                  href={whatsappPreFilledUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-amber-700 hover:text-amber-800 transition-colors"
                >
                  <span>Ask About Payment &amp; Currency Options</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Card 4: Same-day Discharge & Border Return */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-indigo-200/80 shadow-xs hover:shadow-md transition-all duration-300 space-y-4 flex flex-col justify-between group">
              <div className="space-y-3">
                <div className="w-11 h-11 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                  4. Day-Care Surgery &amp; Smooth Border Return
                </h3>
                <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                  Our minimally invasive surgical protocols allow fast day-care discharge. We provide all required travel certificates for swift border customs &amp; immigration clearance.
                </p>
                <ul className="space-y-2 text-xs sm:text-[13px] text-slate-700 font-normal pt-2.5 border-t border-slate-100">
                  <li className="flex items-start gap-2 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Phaco cataract surgery completed in 10–15 mins; patients return to hotel within 2–3 hours</span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Official &apos;Fit to Travel&apos; medical certificate provided on hospital letterhead</span>
                  </li>
                  <li className="flex items-start gap-2 leading-relaxed">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>Full medical file, operative summary, and post-op medication schedule handed over</span>
                  </li>
                </ul>
              </div>
              <div className="pt-3 border-t border-slate-100">
                <a
                  href={whatsappPreFilledUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-indigo-700 hover:text-indigo-800 transition-colors"
                >
                  <span>Consult Doctor on WhatsApp</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Ashvini Netralaya */}
      <section className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <span className="text-xs sm:text-[13px] font-bold text-[#0c6ba1] bg-sky-100 px-3.5 py-1 rounded-full inline-block">
              Clinical Advantages
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-slate-900 leading-snug">
              Why Choose Ashvini Netralaya in Agartala?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Compare the advantages of choosing Agartala over distant metro cities like Kolkata, Chennai, or Hyderabad:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Card 1 */}
            <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-3">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#0c6ba1] flex items-center justify-center font-bold text-lg">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                Massive Savings on Travel Time &amp; Airfare
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                Avoid exhausting train journeys and expensive domestic or international flights to Kolkata or Chennai. Reach Ashvini Netralaya directly from Dhaka or Comilla via the Akhaura border in just a few hours.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-50 text-[#20c997] flex items-center justify-center font-bold text-lg">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                NABH-Accredited Safety &amp; Technology
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                Ashvini Netralaya is Tripura&apos;s first and only NABH-accredited superspeciality eye hospital. Equipped with 100% infection-free laminar airflow modular OTs, Carl Zeiss operating microscopes, and Alcon surgical systems.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-3">
              <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-lg">
                <Heart className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                Zero Language Barrier — Bengali &amp; English Care
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                Complete clarity without language barriers. Our doctors, surgeons, nurses, and care coordinators speak fluent Bengali and English, ensuring you and your family can discuss every question with total comfort.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-3">
              <div className="w-10 h-10 rounded-lg bg-sky-50 text-[#1c88c6] flex items-center justify-center font-bold text-lg">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                Same-Day Evaluation &amp; Day-Care Surgery
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                No lengthy hospital admissions required. Micro-incision Phaco cataract surgery is completed in 10–15 minutes, allowing patients to relax in their hotel or return home the next day after a brief post-op checkup.
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-3">
              <div className="w-10 h-10 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-lg">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                Official Medical Visa Support Letter
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                We issue institutional Medical Visa Invitation Letters on hospital letterhead to facilitate rapid visa approvals through Indian Visa Application Centres (IVAC) across all administrative divisions of Bangladesh.
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-xl p-5 sm:p-6 border border-slate-200/80 shadow-xs hover:shadow-md transition-shadow space-y-3">
              <div className="w-10 h-10 rounded-lg bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-lg">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                Transparent Pricing &amp; High Affordability
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                Treatment, hotel accommodation, and living expenses in Agartala are substantially lower than in Tier-1 Indian metros. Transparent package pricing with zero unauthorized middlemen or hidden charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Travel Guide: 5 Steps */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <span className="text-xs sm:text-[13px] font-bold text-[#0c6ba1] bg-sky-50 px-3.5 py-1 rounded-full border border-sky-100 inline-block">
              Step-by-Step Guide
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-slate-900 leading-snug">
              5 Simple Steps to Plan Your Eye Treatment
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              A hassle-free roadmap for patients travelling from Bangladesh to Ashvini Netralaya:
            </p>
          </div>

          <div className="relative border-l-2 border-sky-200 ml-4 sm:ml-8 pl-6 sm:pl-9 space-y-8 max-w-2xl mx-auto">
            {/* Step 1 */}
            <div className="relative space-y-1.5">
              <div className="absolute -left-[39px] sm:-left-[51px] top-0 w-7 h-7 rounded-full bg-[#1c88c6] text-white font-bold flex items-center justify-center text-xs shadow-xs">
                1
              </div>
              <span className="text-xs font-bold text-[#0c6ba1]">
                Step 1: Preliminary Review
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                Send Previous Prescriptions &amp; Eye Reports on WhatsApp
              </h3>
              <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                Take a clear photo of your latest doctor&apos;s prescription, eye test reports, or spectacle power, and message it to our dedicated WhatsApp helpline (+91 69090 45693).
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative space-y-1.5">
              <div className="absolute -left-[39px] sm:-left-[51px] top-0 w-7 h-7 rounded-full bg-[#1c88c6] text-white font-bold flex items-center justify-center text-xs shadow-xs">
                2
              </div>
              <span className="text-xs font-bold text-[#0c6ba1]">
                Step 2: Surgeon Evaluation &amp; Cost Estimate
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                Consult with Specialists &amp; Receive Transparent Estimates
              </h3>
              <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                Our surgical team reviews your clinical findings, explains the surgical options (such as Monofocal, Toric, or Multifocal lens implants), and shares an upfront, transparent cost estimate.
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative space-y-1.5">
              <div className="absolute -left-[39px] sm:-left-[51px] top-0 w-7 h-7 rounded-full bg-[#1c88c6] text-white font-bold flex items-center justify-center text-xs shadow-xs">
                3
              </div>
              <span className="text-xs font-bold text-[#0c6ba1]">
                Step 3: Visa Assistance
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                Receive Institutional Medical Visa Invitation Letter
              </h3>
              <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                Upon submitting passport details, the hospital issues an official Medical Visa Invitation Letter on hospital letterhead within 24 hours for submission at your local IVAC centre.
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative space-y-1.5">
              <div className="absolute -left-[39px] sm:-left-[51px] top-0 w-7 h-7 rounded-full bg-[#1c88c6] text-white font-bold flex items-center justify-center text-xs shadow-xs">
                4
              </div>
              <span className="text-xs font-bold text-[#0c6ba1]">
                Step 4: Arrival &amp; Check-in
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                Cross Akhaura Border &amp; Check into Coordinated Hotel
              </h3>
              <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                Cross the Akhaura Integrated Checkpost (just 15 minutes by auto to hospital). Our desk assists you with check-in at verified guest houses within walking distance of the hospital.
              </p>
            </div>

            {/* Step 5 */}
            <div className="relative space-y-1.5">
              <div className="absolute -left-[39px] sm:-left-[51px] top-0 w-7 h-7 rounded-full bg-[#1c88c6] text-white font-bold flex items-center justify-center text-xs shadow-xs">
                5
              </div>
              <span className="text-xs font-bold text-[#0c6ba1]">
                Step 5: Treatment &amp; Border Return
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                Same-Day Procedure, Documentation &amp; Safe Journey Home
              </h3>
              <p className="text-xs sm:text-[13.5px] text-slate-600 leading-relaxed font-normal">
                Following high-precision diagnostics and stitchless surgery, patients undergo a brief post-op evaluation. All itemized bills, discharge notes, and authorized &quot;Fit to Travel&quot; certificates are handed over for a seamless border crossing back home.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Specialities */}
      <section className="py-12 sm:py-16 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <span className="text-xs sm:text-[13px] font-bold text-[#0c6ba1] bg-sky-100 px-3.5 py-1 rounded-full inline-block">
              Clinical Specialities
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-slate-900 leading-snug">
              Key Superspeciality Eye Care Departments
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              State-of-the-art diagnostic and surgical technologies managed by premier ophthalmologists:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {/* Speciality 1: Cataract */}
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between p-5 space-y-3.5">
              <div className="space-y-2.5">
                <div className="relative w-full h-40 rounded-lg overflow-hidden bg-slate-100">
                  <Image
                    src="/images/WhatsApp-Image-2023-06-03-at-2.27.43-AM-1.webp"
                    alt="Cataract Surgery - Phacoemulsification"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  Stitchless Phaco Cataract Surgery (MICS Phaco)
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  Injection-free, bandage-free 1.8mm micro-incision cataract extraction. Premium Monofocal, Toric (astigmatism correction), Multifocal, and EDOF intraocular lens implants.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0c6ba1]">
                <Link href="/services/cataract-surgery-phaco" className="hover:underline inline-flex items-center gap-1">
                  <span>Learn Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <span className="text-[11px] text-slate-500 font-medium">Duration: 10–15 Mins</span>
              </div>
            </div>

            {/* Speciality 2: Retina */}
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between p-5 space-y-3.5">
              <div className="space-y-2.5">
                <div className="relative w-full h-40 rounded-lg overflow-hidden bg-slate-100">
                  <Image
                    src="/images/WhatsApp-Image-2023-06-03-at-2.13.30-AM.webp"
                    alt="Vitreo-Retina Surgery and Diabetic Retinopathy"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  Vitreo-Retina Surgery &amp; Diabetic Eye Care
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  Management of Retinal Detachment, Diabetic Vitreous Hemorrhage, and Macular Holes via sutureless 25G/27G vitrectomy, 532nm Green Laser, and Anti-VEGF injections.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0c6ba1]">
                <Link href="/services/retina-surgeries" className="hover:underline inline-flex items-center gap-1">
                  <span>Learn Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <span className="text-[11px] text-slate-500 font-medium">Specialized Unit</span>
              </div>
            </div>

            {/* Speciality 3: Glaucoma */}
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between p-5 space-y-3.5">
              <div className="space-y-2.5">
                <div className="relative w-full h-40 rounded-lg overflow-hidden bg-slate-100">
                  <Image
                    src="/images/G1.webp"
                    alt="Glaucoma Evaluation &amp; Trabeculectomy"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  Glaucoma Diagnostics &amp; Laser Surgeries
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  Early detection of the silent thief of sight. Humphrey Field Analyzer (HFA3), Zeiss OCT optic nerve scan, Nd:YAG Laser Peripheral Iridotomy, and Trabeculectomy surgeries.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0c6ba1]">
                <Link href="/services/glaucoma-surgeries" className="hover:underline inline-flex items-center gap-1">
                  <span>Learn Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <span className="text-[11px] text-slate-500 font-medium">HFA3 Visual Field</span>
              </div>
            </div>

            {/* Speciality 4: Paediatric */}
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between p-5 space-y-3.5">
              <div className="space-y-2.5">
                <div className="relative w-full h-40 rounded-lg overflow-hidden bg-slate-100">
                  <Image
                    src="/images/little-girl-checking-up-her-sight-ophthalmology-center-1-1-scaled.webp"
                    alt="Paediatric Eye Care and Squint Surgery"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  Paediatric Ophthalmology &amp; Squint (Strabismus)
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  Treatment for lazy eye (Amblyopia) with occlusion therapy, congenital cataracts, and precision squint correction surgery to restore binocular 3D vision and alignment.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0c6ba1]">
                <Link href="/services/paediatric-eye-care" className="hover:underline inline-flex items-center gap-1">
                  <span>Learn Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <span className="text-[11px] text-slate-500 font-medium">Child Eye Clinic</span>
              </div>
            </div>

            {/* Speciality 5: Cornea */}
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between p-5 space-y-3.5">
              <div className="space-y-2.5">
                <div className="relative w-full h-40 rounded-lg overflow-hidden bg-slate-100">
                  <Image
                    src="/images/WhatsApp-Image-2023-06-03-at-3.10.23-AM-1.webp"
                    alt="Cornea and External Eye Diseases"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  Cornea, Dry Eye &amp; Ocular Surface Clinic
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  Treatment of infectious corneal ulcers, Keratoconus corneal cross-linking (C3R), dry eye management, and autologous conjunctival graft Pterygium excision.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0c6ba1]">
                <Link href="/services/cornea-services" className="hover:underline inline-flex items-center gap-1">
                  <span>Learn Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <span className="text-[11px] text-slate-500 font-medium">Cornea Specialist</span>
              </div>
            </div>

            {/* Speciality 6: Diagnostics & YAG */}
            <div className="bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all flex flex-col justify-between p-5 space-y-3.5">
              <div className="space-y-2.5">
                <div className="relative w-full h-40 rounded-lg overflow-hidden bg-slate-100">
                  <Image
                    src="/images/WhatsApp-Image-2023-06-03-at-3.00.16-AM.webp"
                    alt="YAG Laser and Advanced Eye Diagnostics"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 leading-snug">
                  High-Precision Diagnostics &amp; YAG Laser
                </h3>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  Comprehensive in-house diagnostics including Carl Zeiss Cirrus OCT, Optical Biometry, B-Scan Ultrasound, and Nd:YAG laser capsulotomy for secondary cataracts in 3 minutes.
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#0c6ba1]">
                <Link href="/services/lasers-and-diagnostics" className="hover:underline inline-flex items-center gap-1">
                  <span>Learn Details</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
                <span className="text-[11px] text-slate-500 font-medium">Outpatient 3 Mins</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Routes & Border Crossing */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <span className="text-xs sm:text-[13px] font-bold text-[#0c6ba1] bg-sky-50 px-3.5 py-1 rounded-full border border-sky-100 inline-block">
              Transit &amp; Route Guide
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-slate-900 leading-snug">
              How to Reach Ashvini Netralaya from Bangladesh
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              The Akhaura-Agartala border is one of the most accessible international entry points:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="p-5 sm:p-6 rounded-xl bg-sky-50/70 border border-sky-100 space-y-3 flex flex-col justify-between">
              <div>
                <div className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2 mb-2">
                  <span>🚆 From Dhaka</span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  Intercity express train from Kamalapur railway station (Mahanagar, Turna, or Upakul Express) directly to Akhaura Junction, followed by a short auto-rickshaw ride to Akhaura border.
                </p>
              </div>
              <div className="pt-2.5 border-t border-sky-100/80 text-xs font-bold text-[#0c6ba1]">Total Time: 3 – 4 Hours</div>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-sky-50/70 border border-sky-100 space-y-3 flex flex-col justify-between">
              <div>
                <div className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2 mb-2">
                  <span>🚗 From Comilla</span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  Direct CNG or bus from Comilla city / Kandirpar straight to Akhaura border checkpost. This is the closest and quickest travel route.
                </p>
              </div>
              <div className="pt-2.5 border-t border-sky-100/80 text-xs font-bold text-[#0c6ba1]">Total Time: 1 – 1.5 Hours</div>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-sky-50/70 border border-sky-100 space-y-3 flex flex-col justify-between">
              <div>
                <div className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2 mb-2">
                  <span>🚌 From Brahmanbaria</span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  Local bus or CNG from Brahmanbaria district sadar to Akhaura international border (distance is just 20 to 25 km).
                </p>
              </div>
              <div className="pt-2.5 border-t border-sky-100/80 text-xs font-bold text-[#0c6ba1]">Total Time: 45 – 60 Mins</div>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-sky-50/70 border border-sky-100 space-y-3 flex flex-col justify-between">
              <div>
                <div className="text-sm sm:text-base font-bold text-slate-900 flex items-center gap-2 mb-2">
                  <span>🚖 From Agartala Border</span>
                </div>
                <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-normal">
                  From Akhaura Integrated Checkpost (Border), simply hire an auto-rickshaw or taxi to &quot;Bijoykumar Chowmuhani, Ashvini Netralaya&quot; (approx. 6 km).
                </p>
              </div>
              <div className="pt-2.5 border-t border-sky-100/80 text-xs font-bold text-[#0c6ba1]">Distance from Border: 6 km (15 Mins)</div>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Specialists Team */}
      <section className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <span className="text-xs sm:text-[13px] font-bold text-[#0c6ba1] bg-sky-100 px-3.5 py-1 rounded-full inline-block">
              Specialist Surgical Team
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-slate-900 leading-snug">
              Leading Eye Surgeons at Ashvini Netralaya
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Surgeons trained across India&apos;s apex ophthalmology institutes providing dedicated clinical care:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Doctor 1 */}
            <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-xs text-center space-y-3">
              <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-sky-300 bg-slate-100 shadow-inner">
                <Image
                  src="/images/Dr-anurag.webp"
                  alt="Dr. Anurag Majumdar"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-base text-slate-900">Dr. Anurag Majumdar</h3>
                <p className="text-xs text-[#0c6ba1] font-semibold">MBBS, MS (Ophthalmology)</p>
                <p className="text-xs sm:text-[13px] text-slate-600 mt-1 leading-relaxed font-normal">
                  Chairman and CEO (Phaco &amp; Anterior Segment Surgery)
                </p>
              </div>
            </div>

            {/* Doctor 2 */}
            <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-xs text-center space-y-3">
              <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-sky-300 bg-slate-100 shadow-inner">
                <Image
                  src="/images/Dr-Subrata.webp"
                  alt="Dr. Subrata Saha"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-base text-slate-900">Dr. Subrata Saha</h3>
                <p className="text-xs text-[#0c6ba1] font-semibold">MBBS, MS (Ophthalmology)</p>
                <p className="text-xs sm:text-[13px] text-slate-600 mt-1 leading-relaxed font-normal">
                  Chief Operating Officer (Phaco &amp; Anterior Segment Surgery)
                </p>
              </div>
            </div>

            {/* Doctor 3 */}
            <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-xs text-center space-y-3">
              <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-sky-300 bg-slate-100 shadow-inner">
                <Image
                  src="/images/Dipanjali.webp"
                  alt="Dr. Dipanjali Majumder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-base text-slate-900">Dr. Dipanjali Majumder</h3>
                <p className="text-xs text-[#0c6ba1] font-semibold">MBBS, MS (Ophthalmology)</p>
                <p className="text-xs sm:text-[13px] text-slate-600 mt-1 leading-relaxed font-normal">
                  Glaucoma &amp; Phaco Surgeon (Fellowship in Glaucoma)
                </p>
              </div>
            </div>

            {/* Doctor 4 */}
            <div className="bg-white rounded-xl p-5 border border-slate-200/90 shadow-xs text-center space-y-3">
              <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-sky-300 bg-slate-100 shadow-inner">
                <Image
                  src="/images/Dr-Kaushick-1.webp"
                  alt="Dr. Kaushick Biswas"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-base text-slate-900">Dr. Kaushick Biswas</h3>
                <p className="text-xs text-[#0c6ba1] font-semibold">MBBS, MS, DNB</p>
                <p className="text-xs sm:text-[13px] text-slate-600 mt-1 leading-relaxed font-normal">
                  Senior Vitreo-Retina Surgeon (Sankara Nethralaya Fellow)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Experience from Bangladesh */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-sky-50 via-white to-blue-50 border border-sky-100 rounded-2xl p-6 sm:p-8 space-y-4 shadow-xs">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
              <span className="text-xs font-bold text-slate-700 ml-2">Patient Feedback from Bangladesh</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed font-normal">
              &quot;We travelled from Comilla to Agartala via the Akhaura border for my mother&apos;s advanced cataract surgery. The hospital provided an official medical visa letter on WhatsApp within 24 hours. The surgery was completely stitchless and painless—completed in barely 15 minutes. Within 2 hours she was comfortably resting in our nearby hotel. Total transparency, zero middleman hassle, and genuine care.&quot;
            </p>
            <div className="flex items-center justify-between pt-2 border-t border-sky-100 text-xs">
              <span className="font-bold text-slate-900">Patient Attendant from Comilla, Bangladesh</span>
              <span className="text-[#0c6ba1] font-semibold">Phaco Cataract with Premium Toric IOL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQs) */}
      <section className="py-12 sm:py-16 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-[840px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs sm:text-[13px] font-bold text-[#0c6ba1] bg-sky-100 px-3.5 py-1 rounded-full inline-block">
              Frequently Asked Questions
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-slate-900 leading-snug">
              Frequently Asked Questions by Bangladeshi Patients
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Find answers to the most common queries regarding visas, travel, and surgical care:
            </p>
          </div>

          <div className="space-y-3">
            {bangladeshFaqs.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-slate-200/90 rounded-xl bg-white overflow-hidden shadow-xs"
              >
                <summary className="flex items-center justify-between p-4 sm:p-5 font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                  <span className="flex items-start gap-3 pr-4">
                    <HelpCircle className="w-4 h-4 text-[#0c6ba1] shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform shrink-0" />
                </summary>
                <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-2 text-xs sm:text-[13.5px] text-slate-600 leading-relaxed border-t border-slate-100 pl-4 sm:pl-11 font-normal">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Booking Banner */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-[#0a274c] via-[#103d72] to-[#177db8] text-white">
        <div className="max-w-[960px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-medium backdrop-blur-md">
            <span>Direct International Patient Helpdesk</span>
          </div>

          <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold leading-snug text-white">
            Connect with Our Dedicated Eye Care Team Today
          </h2>

          <p className="text-xs sm:text-sm text-white/90 max-w-xl mx-auto leading-relaxed font-normal">
            Send your previous eye prescription or clinical reports on WhatsApp for a complimentary preliminary evaluation, treatment estimate, and visa guidance.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href={whatsappPreFilledUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center text-center inline-flex items-center gap-2 px-6 sm:px-7 py-3 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs sm:text-sm rounded-full shadow-lg shadow-emerald-950/30 transition-all transform active:scale-95"
            >
              <MessageCircle className="w-4 h-4 shrink-0" />
              <span>Chat on WhatsApp: {siteConfig.bangladeshDesk.phone}</span>
            </a>

            <a
              href={`tel:${siteConfig.bangladeshDesk.phoneClean}`}
              className="w-full sm:w-auto justify-center text-center inline-flex items-center gap-2 px-5 sm:px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 font-semibold text-xs sm:text-sm rounded-full transition-colors shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#1c88c6] shrink-0" />
              <span>Call: {siteConfig.bangladeshDesk.phone}</span>
            </a>
          </div>

          <div className="pt-5 border-t border-white/10 text-xs sm:text-sm text-sky-200 space-y-1">
            <p className="font-semibold text-white text-sm">📍 Ashvini Netralaya</p>
            <p className="text-sky-100 text-xs">Bijoykumar Chowmuhani, Agartala, Tripura – 799001 (Just 15 minutes from Akhaura Border)</p>
            <p className="text-sky-200 text-xs pt-0.5">OPD Timings: 10:00 AM – 5:00 PM (Thursday Closed)</p>
          </div>
        </div>
      </section>
    </div>
  );
}
