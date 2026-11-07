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
  AlertCircle,
  Sparkles,
  Users,
  Navigation,
  Star,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "বাংলাদেশ থেকে আগরতলায় চোখের চিকিৎসা | অশ্বিনী নেত্রালয় (NABH স্বীকৃত)",
  description:
    "বাংলাদেশী রোগীদের জন্য আগরতলায় উন্নত ছানি অপারেশন (ফ্যাকো), রেটিনা সার্জারি, গ্লুকোমা ও শিশুদের চোখের চিকিৎসা। আখাউড়া সীমান্ত থেকে মাত্র ১৫ মিনিট। দ্রুত মেডিকেল ভিসা ইনভাইটেশন লেটার সহায়তা ও সাশ্রয়ী আন্তর্জাতিক মানের ডে-কেয়ার সেবা।",
  keywords: [
    "বাংলাদেশ থেকে আগরতলায় চোখের চিকিৎসা",
    "আগরতলায় চোখের ডাক্তার",
    "আগরতলা চক্ষু হাসপাতাল",
    "আগরতলায় ছানি অপারেশন",
    "ছানি অপারেশনের খরচ আগরতলা",
    "বাংলাদেশী রোগীদের চিকিৎসা আগরতলা",
    "Akhaura to Agartala eye hospital",
    "Eye treatment in Agartala for Bangladeshi patients",
    "অশ্বিনী নেত্রালয় আগরতলা",
    "আগরতলায় রেটিনা সার্জারি",
    "ত্রিপুরায় চোখের হাসপাতাল",
  ],
  alternates: {
    canonical: `${siteConfig.url}/bangladesh/eye-care`,
  },
  openGraph: {
    title: "বাংলাদেশ থেকে আগরতলায় চোখের চিকিৎসা | অশ্বিনী নেত্রালয়",
    description:
      "ঢাকা, কুমিল্লা ও ব্রাহ্মণবাড়িয়া থেকে মাত্র কয়েক ঘণ্টায় আগরতলায় বিশ্বমানের চোখের চিকিৎসা। ত্রিপুরার ১ম ও একমাত্র NABH স্বীকৃত সুপারস্পেশালিটি চক্ষু হাসপাতাল।",
    url: `${siteConfig.url}/bangladesh/eye-care`,
    siteName: siteConfig.name,
    locale: "bn_BD",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/Home-Banner-1.jpg`,
        width: 1200,
        height: 630,
        alt: "অশ্বিনী নেত্রালয় - আগরতলা চক্ষু হাসপাতাল",
      },
    ],
  },
};

export default function BangladeshEyeCarePage() {
  const whatsappPreFilledUrl = `https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}&text=${encodeURIComponent(
    "নমস্কার অশ্বিনী নেত্রালয়, আমি বাংলাদেশ থেকে চোখের চিকিৎসার বিষয়ে পরামর্শের জন্য যোগাযোগ করছি। অনুগ্রহ করে ডাক্তার দেখানোর সময় ও ভিসা ইনভাইটেশন লেটার সংক্রান্ত তথ্য জানাবেন।"
  )}`;

  const bangladeshFaqs = [
    {
      question: "বাংলাদেশ থেকে আগরতলায় চোখের চিকিৎসা করাতে আসার নিয়ম কী?",
      answer:
        "প্রথমে আপনার পূর্ববর্তী প্রেসক্রিপশন ও চোখের টেস্ট রিপোর্ট আমাদের অফিশিয়াল হোয়াটসঅ্যাপ নম্বরে (+91 92336 17885) পাঠান। আমাদের সিনিয়র চক্ষু সার্জনরা রিপোর্ট দেখে প্রাথমিক মূল্যায়ন ও চিকিৎসার সম্ভাব্য খরচ জানিয়ে দেবেন। এরপর চিকিৎসার সুবিধার্থে হাসপাতাল থেকে 'মেডিকেল ভিসা আমন্ত্রণ পত্র' (Medical Visa Invitation Letter) প্রদান করা হবে, যা দিয়ে আপনি নিকটস্থ ভারতীয় ভিসা আবেদন কেন্দ্রে (IVAC) ভিসার আবেদন করতে পারবেন।",
    },
    {
      question: "মেডিকেল ভিসার জন্য কি অশ্বিনী নেত্রালয় থেকে ইনভাইটেশন লেটার পাওয়া যাবে?",
      answer:
        "হ্যাঁ। নিশ্চিত রোগী এবং বৈধ পাসপোর্টধারী একজন বা দুজন অ্যাটেনডেন্টের জন্য অশ্বিনী নেত্রালয় অফিশিয়াল ইনভাইটেশন লেটার জারি করে। এর জন্য রোগীর নাম, পাসপোর্ট কপি, ঠিকানা ও সাম্প্রতিক চক্ষু চিকিৎসকের প্রেসক্রিপশন আমাদের কাছে হোয়াটসঅ্যাপে পাঠাতে হবে। সাধারণত ১-২ কার্যদিবসের মধ্যে ইনভাইটেশন লেটার প্রস্তুত করে পাঠানো হয়।",
    },
    {
      question: "ছানি (Cataract) বা রেটিনা অপারেশনের জন্য আগরতলায় কত দিন থাকতে হবে?",
      answer:
        "আধুনিক মাইক্রো-ইনসিশন ফ্যাকো (MICS Phaco) ছানি অপারেশন সম্পূর্ণ সেলাইবিহীন ও ব্যথাহীন এবং এটি একটি ডে-কেয়ার পদ্ধতি। অপারেশনের মাত্র ২ থেকে ৩ ঘণ্টার মধ্যে রোগীকে ছুটি দেওয়া হয়। সাধারণত অপারেশনের পরের দিন সকালে ওপিডিতে একবার ফলো-আপ চেকআপ করিয়ে ২ থেকে ৩ দিনের মধ্যেই রোগী স্বাচ্ছন্দ্যে বাংলাদেশে ফিরে যেতে পারেন।",
    },
    {
      question: "ঢাকা বা কুমিল্লা থেকে অশ্বিনী নেত্রালয় পৌঁছাতে কত সময় লাগে?",
      answer:
        "আখাউড়া-আগরতলা ইন্টিগ্রেটেড চেকপোস্ট (সীমান্ত) থেকে অশ্বিনী নেত্রালয় মাত্র ৬ কিলোমিটার (গাড়িতে ১৫-২০ মিনিট)। ঢাকা থেকে ট্রেনে বা বাসে আখাউড়া পৌঁছাতে প্রায় ৩ থেকে ৪ ঘণ্টা লাগে। কুমিল্লা বা ব্রাহ্মণবাড়িয়া থেকে সড়কপথে মাত্র ৪৫ মিনিট থেকে ১.৫ ঘণ্টার মধ্যে সীমান্তে পৌঁছানো যায়। ফলে কলকাতা বা চেন্নাই ভ্রমণের চেয়ে এটি অত্যন্ত দ্রুত ও ঝামেলামুক্ত।",
    },
    {
      question: "চিকিৎসার খরচ কোন মাধ্যমে বা কোন মুদ্রায় পরিশোধ করা যায়?",
      answer:
        "হাসপাতালে সমস্ত বিল ভারতীয় রুপি (INR)-তে করা হয়। আন্তর্জাতিক ডেবিট বা ক্রেডিট কার্ড (Visa / Mastercard) এবং অনুমোদিত ব্যাংকিং চ্যানেলের মাধ্যমে সহজে পেমেন্ট গ্রহণ করা হয়। সীমান্ত এলাকায় অনুমোদিত মানি এক্সচেঞ্জ বুথ থেকেও নির্ধারিত নিয়মে মুদ্রা বিনিময় করে নেওয়া যায়।",
    },
    {
      question: "কলকাতা বা চেন্নাইয়ের বদলে আগরতলা অশ্বিনী নেত্রালয় কেন বেছে নেবেন?",
      answer:
        "প্রথমত, বিশাল দূরত্ব ও বিমান ভাড়ার সাশ্রয়—মাত্র কয়েক ঘণ্টায় সরাসরি সড়কপথে পৌঁছানো যায়। দ্বিতীয়ত, অশ্বিনী নেত্রালয় ত্রিপুরার প্রথম ও একমাত্র NABH স্বীকৃত সুপারস্পেশালিটি হাসপাতাল, যার মান ভারতের শীর্ষ হাসপাতালের সমতুল্য। তৃতীয়ত, চিকিৎসক, নার্স ও কর্মকর্তা সবাই মাতৃভাষা বাংলায় কথা বলেন, ফলে কোনো দ্বিধা ছাড়াই রোগী মনের কথা বুঝিয়ে বলতে পারেন।",
    },
    {
      question: "আগরতলায় হাসপাতালের কাছাকাছি থাকার ও হোটেলের সুবিধা কেমন?",
      answer:
        "হাসপাতালটি আগরতলা শহরের মূল কেন্দ্র বিজয়কুমার চৌমুহনীতে অবস্থিত। হাসপাতালের ১ থেকে ২ কিলোমিটারের মধ্যে বহু মানসম্পন্ন বাজেট হোটেল, গেস্ট হাউস এবং হালাল ও বাংলা খাবারের ভালো রেস্তোরাঁ রয়েছে। আমাদের আন্তর্জাতিক রোগী ডেস্ক প্রয়োজনে নির্ভরযোগ্য হোটেল ও স্থানীয় যাতায়াতের তথ্য দিয়ে সহায়তা করে।",
    },
  ];

  const medicalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    name: "অশ্বিনী নেত্রালয় (Ashvini Netralaya)",
    legalName: "Ashvini Eye Care Pvt. Ltd.",
    url: `${siteConfig.url}/bangladesh/eye-care`,
    logo: `${siteConfig.url}/images/Ashvini-Eye-Care-logo-01.png`,
    image: `${siteConfig.url}/images/Home-Banner-1.jpg`,
    description:
      "ত্রিপুরার প্রথম ও একমাত্র NABH স্বীকৃত সুপারস্পেশালিটি চক্ষু হাসপাতাল। বাংলাদেশী রোগীদের জন্য আন্তর্জাতিক মানের ছানি অপারেশন, রেটিনা সার্জারি, গ্লুকোমা ও পেডিয়াট্রিক চোখের চিকিৎসা।",
    telephone: siteConfig.phone,
    priceRange: "₹₹",
    inLanguage: "bn",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: "Agartala",
      addressRegion: "Tripura",
      postalCode: "799001",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 23.8315,
      longitude: 91.2868,
    },
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
    <div className="flex flex-col min-h-screen bg-white font-bengali text-slate-800">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(medicalBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Border & Verification Alert */}
      <div className="bg-[#051226] border-b border-sky-950 text-slate-300 py-2.5 px-4 text-xs">
        <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold text-[11px] border border-emerald-500/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>বাংলাদেশী রোগীদের বিশেষ সহায়তা হেল্পডেস্ক</span>
            </span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="text-slate-300 text-[11px] sm:text-xs">
              আখাউড়া-আগরতলা সীমান্ত (ইন্টিগ্রেটেড চেকপোস্ট) থেকে মাত্র ১৫ মিনিট
            </span>
          </div>

          <div className="flex items-center gap-3 text-[11px] sm:text-xs">
            <a
              href={whatsappPreFilledUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:text-[#3ce67b] font-semibold flex items-center gap-1 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>হোয়াটসঅ্যাপ: {siteConfig.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-12 pb-16 lg:pt-16 lg:pb-24 bg-gradient-to-b from-[#082142] via-[#0c315e] to-[#12457e] text-white overflow-hidden">
        {/* Ambient subtle glow background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(28,136,198,0.25),transparent_50%)] pointer-events-none" />

        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Trust Badges Pill */}
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sky-200 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-sky-300" />
                  <span>ত্রিপুরার ১ম ও একমাত্র NABH স্বীকৃত চক্ষু হাসপাতাল</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-semibold border border-emerald-500/30">
                  <Award className="w-3.5 h-3.5" />
                  <span>১০,০০০+ সফল সার্জারির অভিজ্ঞতা</span>
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-2">
                <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-sky-300">
                  বাংলাদেশ ও ত্রিপুরার রোগীদের আস্থা
                </p>
                <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.25] tracking-tight">
                  বাংলাদেশ থেকে মাত্র কয়েক ঘণ্টায় আগরতলায়{" "}
                  <span className="text-[#38bdf8] underline decoration-sky-400/40 underline-offset-8">
                    বিশ্বমানের চোখের চিকিৎসা
                  </span>
                </h1>
              </div>

              {/* Sub-description */}
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed max-w-2xl font-normal">
                ঢাকা, কুমিল্লা, ব্রাহ্মণবাড়িয়া ও সিলেট থেকে অতি সহজে সড়ক বা রেলপথে আখাউড়া সীমান্ত হয়ে আগরতলা পৌঁছান। আন্তর্জাতিক মানের সেলাইবিহীন ফ্যাকো ছানি অপারেশন, আধুনিক রেটিনা সার্জারি, গ্লুকোমা ও শিশুদের চোখের সম্পূর্ণ চিকিৎসা—মাতৃভাষা বাংলায় উষ্ণ ও আন্তরিক সেবায়।
              </p>

              {/* Travel Time Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-center">
                  <span className="block text-[11px] text-sky-200 font-semibold">ঢাকা থেকে</span>
                  <span className="text-xs sm:text-sm font-bold text-white">৩ – ৪ ঘণ্টা</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-center">
                  <span className="block text-[11px] text-sky-200 font-semibold">কুমিল্লা থেকে</span>
                  <span className="text-xs sm:text-sm font-bold text-white">১ – ১.৫ ঘণ্টা</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-center">
                  <span className="block text-[11px] text-sky-200 font-semibold">ব্রাহ্মণবাড়িয়া</span>
                  <span className="text-xs sm:text-sm font-bold text-white">৪৫ – ৬০ মিনিট</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 text-center">
                  <span className="block text-[11px] text-sky-200 font-semibold">সিলেট থেকে</span>
                  <span className="text-xs sm:text-sm font-bold text-white">৩ ঘণ্টা</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href={whatsappPreFilledUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm rounded-full shadow-lg shadow-emerald-950/40 transition-all transform active:scale-95"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>হোয়াটসঅ্যাপে রিপোর্ট পাঠান ও পরামর্শ নিন</span>
                </a>

                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold text-xs sm:text-sm rounded-full backdrop-blur-md transition-colors"
                >
                  <Phone className="w-4 h-4 text-sky-300" />
                  <span>সরাসরি কল: {siteConfig.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Hospital Showcase Card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/15 bg-slate-900">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/images/WhatsApp-Image-2023-06-03-at-2.30.23-AM-1.jpeg"
                    alt="অশ্বিনী নেত্রালয় আগরতলা - আন্তর্জাতিক চোখের চিকিৎসা"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
                </div>

                {/* Overlaid Highlight Points */}
                <div className="p-5 sm:p-6 space-y-3 bg-slate-900/90 backdrop-blur-md border-t border-white/10">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-700/60">
                    <div>
                      <p className="font-bold text-sm text-white">অশ্বিনী নেত্রালয়</p>
                      <p className="text-xs text-sky-300">বিজয়কুমার চৌমুহনী, আগরতলা</p>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-sky-500/20 text-sky-300 text-[11px] font-bold border border-sky-400/30">
                      NABH মানসম্মত
                    </span>
                  </div>

                  <ul className="space-y-2 text-xs text-slate-300">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#20c997] shrink-0" />
                      <span>মেডিকেল ভিসা ইনভাইটেশন লেটার প্রদান সুবিধা</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#20c997] shrink-0" />
                      <span>সেলাইবিহীন ব্যথাহীন ফ্যাকো ছানি ও ডে-কেয়ার ডিসচার্জ</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#20c997] shrink-0" />
                      <span>২৫জি/২৭জি অত্যাধুনিক ভিট্রেও-রেটিনা সার্জারি ইউনিট</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#20c997] shrink-0" />
                      <span>কার্ল জাইস (Carl Zeiss) ও অ্যালকন (Alcon) আন্তর্জাতিক প্রযুক্তি</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1c88c6] bg-sky-100 px-3 py-1 rounded-full">
              সুবিধা ও সাশ্রয়
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              কলকাতা বা চেন্নাইয়ের বদলে আগরতলা কেন সেরা পছন্দ?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              বাংলাদেশী রোগীদের জন্য চোখের উন্নত চিকিৎসা গ্রহণের ক্ষেত্রে দূরবর্তী শহরের বদলে আগরতলা অশ্বিনী নেত্রালয় বেছে নেওয়ার বাস্তবসম্মত কারণসমূহ:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#1c88c6] flex items-center justify-center font-bold text-xl">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                সময় ও দূরত্বের বিশাল সাশ্রয়
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                কলকাতায় যাওয়ার জন্য ব্যয়বহুল বিমান টিকিট বা দীর্ঘ ট্রেনের ক্লান্তিকর জার্নি করতে হয় না। ঢাকা বা কুমিল্লা থেকে মাত্র কয়েক ঘণ্টার ব্যবধানে আখাউড়া সীমান্ত পেরিয়ে সহজেই হাসপাতালে পৌঁছানো যায়।
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#20c997] flex items-center justify-center font-bold text-xl">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                NABH স্বীকৃত নিরাপত্তা ও প্রযুক্তি
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                অশ্বিনী নেত্রালয় ত্রিপুরার প্রথম ও একমাত্র NABH স্বীকৃত সুপারস্পেশালিটি হাসপাতাল। এখানে রয়েছে সম্পূর্ণ ইনফেকশন-ফ্রি ল্যামিনার ফ্লো মডিউলার ওটি, কার্ল জাইস ও অ্যালকন সেন্টুরিয়ন সহ শীর্ষ প্রযুক্তি।
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xl">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                মাতৃভাষা বাংলায় ১০০% আন্তরিক সেবা
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                কোনো ভাষাগত দূরত্ব নেই। আমাদের সকল শীর্ষ চক্ষু বিশেষজ্ঞ, মেডিকেল স্টাফ ও নার্সরা সাবলীলভাবে বাংলায় কথা বলেন। রোগী ও পরিবার নিজেদের মনের সব প্রশ্ন নিঃসংকোচে আলোচনা করতে পারেন।
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#1c88c6] flex items-center justify-center font-bold text-xl">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                একই দিনে পরীক্ষা ও ডে-কেয়ার সার্জারি
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                দীর্ঘ সময় হাসপাতালে ভর্তি থাকার প্রয়োজন হয় না। ফ্যাকো ছানি অপারেশন মাত্র ১০-১৫ মিনিটে সম্পন্ন হয় এবং রোগীকে ২ ঘণ্টার মধ্যে হোটেল বা বাসায় ফিরে যাওয়ার অনুমতি দেওয়া হয়।
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xl">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                মেডিকেল ভিসা সহায়তা পত্র
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                রোগীদের দ্রুত ভিসা প্রসেসিংয়ের জন্য হাসপাতাল থেকে প্রাতিষ্ঠানিক মেডিকেল ইনভাইটেশন লেটার প্রদান করা হয়, যা দিয়ে নিকটস্থ ভারতীয় ভিসা অ্যাপ্লিকেশন সেন্টারে (IVAC) আবেদন করা সম্ভব।
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-xl">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">
                স্বচ্ছ ব্যয় ও সাশ্রয়ী প্যাকেজ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                মেট্রো শহরের তুলনায় আগরতলায় বাসস্থান, হোটেল, খাবার ও সামগ্রিক চিকিৎসার খরচ অনেক সাশ্রয়ী। কোনো প্রকার অনৈতিক মধ্যস্বত্বভোগী বা লুকানো চার্জ ছাড়াই সরাসরি স্বচ্ছ চিকিৎসা সেবা।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Travel Guide */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1c88c6] bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              ধাপভিত্তিক নির্দেশিকা
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              বাংলাদেশ থেকে চিকিৎসার জন্য আসার ৫টি সহজ ধাপ
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              কোনো প্রকার বিভ্রান্তি ছাড়াই আপনার চোখ চিকিৎসার সঠিক পরিকল্পনা সম্পন্ন করুন:
            </p>
          </div>

          <div className="relative border-l-2 border-sky-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10 max-w-3xl mx-auto">
            {/* Step 1 */}
            <div className="relative space-y-2">
              <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-8 h-8 rounded-full bg-[#1c88c6] text-white font-bold flex items-center justify-center text-xs shadow-md">
                ১
              </div>
              <span className="text-xs font-bold text-[#1c88c6] uppercase tracking-wider">
                ধাপ ১: প্রাথমিক মূল্যায়ন
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                হোয়াটসঅ্যাপে আপনার বর্তমান চোখের প্রেসক্রিপশন ও রিপোর্ট পাঠান
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                আপনার বিদ্যমান চিকিৎসকের প্রেসক্রিপশন, চোখ পরীক্ষার রিপোর্ট বা চশমার পাওয়ার পরিষ্কার ছবি তুলে আমাদের ডেডিকেটেড হোয়াটসঅ্যাপ নম্বরে (+91 92336 17885) পাঠান।
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative space-y-2">
              <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-8 h-8 rounded-full bg-[#1c88c6] text-white font-bold flex items-center justify-center text-xs shadow-md">
                ২
              </div>
              <span className="text-xs font-bold text-[#1c88c6] uppercase tracking-wider">
                ধাপ ২: ডাক্তারের পর্যালোচনা
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                সিনিয়র বিশেষজ্ঞের পরামর্শ ও আনুমানিক চিকিৎসা খরচের বিবরণ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                আমাদের সিনিয়র চক্ষু সার্জন আপনার রিপোর্ট পর্যালোচনা করে প্রয়োজনীয় চিকিৎসা পদ্ধতি (যেমন: ফ্যাকো ছানি অপারেশন, রেটিনা ইনজেকশন বা ডায়াগনস্টিকস) এবং আনুমানিক খরচ জানিয়ে দেবেন।
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative space-y-2">
              <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-8 h-8 rounded-full bg-[#1c88c6] text-white font-bold flex items-center justify-center text-xs shadow-md">
                ৩
              </div>
              <span className="text-xs font-bold text-[#1c88c6] uppercase tracking-wider">
                ধাপ ৩: ভিসা সহায়তা
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                হাসপাতালের অফিশিয়াল মেডিকেল ভিসা ইনভাইটেশন লেটার সংগ্রহ
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                রোগী ও তার সহযাত্রীর পাসপোর্টের ফটোকপি পাঠালে আমরা হাসপাতাল প্যাডে স্বাক্ষরিত মেডিকেল ভিসা আমন্ত্রণ পত্র প্রদান করব, যা দিয়ে সহজেই মেডিকেল ভিসার আবেদন সম্পন্ন করা যাবে।
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative space-y-2">
              <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-8 h-8 rounded-full bg-[#1c88c6] text-white font-bold flex items-center justify-center text-xs shadow-md">
                ৪
              </div>
              <span className="text-xs font-bold text-[#1c88c6] uppercase tracking-wider">
                ধাপ ৪: আগরতলায় আগমন
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                আখাউড়া-আগরতলা বর্ডার অতিক্রম করে সরাসরি হাসপাতালে পৌঁছানো
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                আখাউড়া সীমান্ত পার হয়ে আগরতলা ইন্টিগ্রেটেড চেকপোস্ট থেকে যেকোনো অটোরিকশা বা ট্যাক্সিতে মাত্র ১৫-২০ মিনিটে বিজয়কুমার চৌমুহনীতে অশ্বিনী নেত্রালয়ে পৌঁছাতে পারবেন।
              </p>
            </div>

            {/* Step 5 */}
            <div className="relative space-y-2">
              <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-8 h-8 rounded-full bg-[#20c997] text-white font-bold flex items-center justify-center text-xs shadow-md">
                ৫
              </div>
              <span className="text-xs font-bold text-[#20c997] uppercase tracking-wider">
                ধাপ ৫: সফল চিকিৎসা ও প্রত্যাবর্তন
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                উন্নত চিকিৎসা গ্রহণ, ফলো-আপ চেকআপ এবং সুস্থ হয়ে বাড়ি ফেরা
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                পেইনলেস আধুনিক চিকিৎসা বা ছানি অপারেশনের পর সংক্ষিপ্ত বিশ্রাম শেষে পরদিনই ফলো-আপ পরীক্ষা করিয়ে আপনি স্বাচ্ছন্দ্যে দেশে ফিরে যেতে পারেন।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Specialities */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1c88c6] bg-sky-100 px-3 py-1 rounded-full">
              চিকিৎসা সেবাসমূহ
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              অশ্বিনী নেত্রালয়ের প্রধান বিশেষায়িত বিভাগসমূহ
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              আন্তর্জাতিক মানের প্রযুক্তি ও দক্ষ সার্জনদের দ্বারা পরিচালিত আধুনিক চক্ষু বিভাগ:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Speciality 1: Cataract */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between p-6 space-y-4">
              <div className="space-y-3">
                <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/WhatsApp-Image-2023-06-03-at-2.27.43-AM-1.jpeg"
                    alt="ছানি অপারেশন - ফ্যাকো সার্জারি"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  সেলাইবিহীন ফ্যাকো ছানি অপারেশন (MICS Phaco)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  ইনজেকশন ও ব্যান্ডেজ মুক্ত ১.৮ মিমি মাইক্রো-ইনসিশন পদ্ধতিতে ছানি অপসারণ। মনোফোকাল, টরিক (অ্যাসটিগমেটিজম দূরীকরণ), মাল্টিফোকাল ও EDOF প্রিমিয়াম লেন্স প্রতিস্থাপন।
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1c88c6]">
                <Link href="/services/cataract-surgery-phaco" className="hover:underline inline-flex items-center gap-1">
                  <span>বিস্তারিত জানুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] text-slate-500">সময়: ১০–১৫ মিনিট</span>
              </div>
            </div>

            {/* Speciality 2: Retina */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between p-6 space-y-4">
              <div className="space-y-3">
                <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/WhatsApp-Image-2023-06-03-at-2.13.30-AM.jpeg"
                    alt="রেটিনা সার্জারি ও ডায়াবেটিক রেটিনোপ্যাথি"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  ভিট্রেও-রেটিনা সার্জারি ও ডায়াবেটিক রেটিনা কেয়ার
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  রেটিনা বিচ্ছিন্নতা (Retinal Detachment), ডায়াবেটিক রক্তক্ষরণ, ম্যাকুলার হোল এবং ২৫জি/২৭জি আল্ট্রা-স্পিড ভিট্রোেক্টমি। ৫৩২এনএম গ্রিন লেজার ও অ্যান্টি-ভিইজিএফ ইনজেকশন।
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1c88c6]">
                <Link href="/services/retina-surgeries" className="hover:underline inline-flex items-center gap-1">
                  <span>বিস্তারিত জানুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] text-slate-500">বিশেষায়িত ইউনিট</span>
              </div>
            </div>

            {/* Speciality 3: Glaucoma */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between p-6 space-y-4">
              <div className="space-y-3">
                <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/WhatsApp-Image-2023-06-03-at-2.30.23-AM-2.jpeg"
                    alt="গ্লুকোমা চিকিৎসা ও ট্র্যাবেকুলেক্টমি"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  গ্লুকোমা নির্ণয় ও ট্র্যাবেকুলেক্টমি সার্জারি
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  দৃষ্টির নীরব ঘাতক গ্লুকোমার প্রাথমিক শনাক্তকরণ। হামফ্রে ভিজ্যুয়াল ফিল্ড টেস্ট (HFA3), জাইস OCT অপটিক নার্ভ স্ক্যান, YAG আইরিডোটমি ও প্রেসার নিয়ন্ত্রক সার্জারি।
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1c88c6]">
                <Link href="/services/glaucoma-surgeries" className="hover:underline inline-flex items-center gap-1">
                  <span>বিস্তারিত জানুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] text-slate-500">ফিল্ড অ্যানালাইজার</span>
              </div>
            </div>

            {/* Speciality 4: Paediatric */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between p-6 space-y-4">
              <div className="space-y-3">
                <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/little-girl-checking-up-her-sight-ophthalmology-center-1-1-scaled.jpg"
                    alt="শিশুদের চোখের চিকিৎসা ও স্কুইন্ট সার্জারি"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  শিশুদের চোখের চিকিৎসা ও ট্যারা চোখ (Squint)
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  শিশুদের অলস চোখ (Amblyopia) প্যাচিং থেরাপি, জন্মগত ছানি এবং আধুনিক স্কুইন্ট কারেকশন সার্জারি যার মাধ্যমে স্বাভাবিক 3D দৃষ্টি ও চোখের অবস্থান পুনরুদ্ধার হয়।
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1c88c6]">
                <Link href="/services/paediatric-eye-care" className="hover:underline inline-flex items-center gap-1">
                  <span>বিস্তারিত জানুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] text-slate-500">শিশু-বান্ধব ওপিডি</span>
              </div>
            </div>

            {/* Speciality 5: Diagnostics */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between p-6 space-y-4">
              <div className="space-y-3">
                <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/WhatsApp-Image-2023-06-03-at-2.30.25-AM-1.jpeg"
                    alt="কার্ল জাইস HD-OCT ও উন্নত ডায়াগনস্টিকস"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  কার্ল জাইস HD-OCT ও USG B-Scan
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  ৫-মাইক্রন নিখুঁত জাইস সাইরাস OCT স্ক্যান, অপথ্যালমিক আল্ট্রাসাউন্ড বি-স্ক্যান, ডিজিটাল ফান্ডাস ফটোগ্রাফি ও নন-কন্টাক্ট এয়ার-পাফ টোনোমেট্রি।
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1c88c6]">
                <Link href="/services/zeiss-oct-automated-perimetry" className="hover:underline inline-flex items-center gap-1">
                  <span>বিস্তারিত জানুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] text-slate-500">তাৎক্ষণিক রিপোর্ট</span>
              </div>
            </div>

            {/* Speciality 6: YAG Laser */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between p-6 space-y-4">
              <div className="space-y-3">
                <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/WhatsApp-Image-2023-06-03-at-2.30.24-AM-1.jpeg"
                    alt="YAG লেজার ক্যাপসুলোটমি"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  ৩ মিনিটে YAG লেজার ক্যাপসুলোটমি
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  ছানি অপারেশনের পর লেন্সের পেছনের পর্দা ঘোলাটে হলে (PCO) মাত্র ৩ মিনিটের ব্যথাহীন আউটপেশেন্ট YAG লেজারে তাৎক্ষণিক স্ফটিক স্বচ্ছ দৃষ্টি ফিরে পান।
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#1c88c6]">
                <Link href="/services/yag-laser" className="hover:underline inline-flex items-center gap-1">
                  <span>বিস্তারিত জানুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-[11px] text-slate-500">আউটপেশেন্ট ৩ মিনিট</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Routes & Border Crossing */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1c88c6] bg-sky-50 px-3 py-1 rounded-full border border-sky-100">
              যাতায়াত ও রুট নির্দেশিকা
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              বাংলাদেশ থেকে কীভাবে আসবেন?
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              আখাউড়া-আগরতলা সীমান্ত পথ অত্যন্ত সুগম ও দ্রুত যাতায়াতযোগ্য:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-3">
              <div className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span>🚆 ঢাকা থেকে</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                কমলাপুর রেল স্টেশন থেকে আন্তঃনগর ট্রেনে (মহানগর, তূর্ণা বা উপকূল এক্সপ্রেস) সরাসরি আখাউড়া জংশন। এরপর অটোরিকশায় আখাউড়া বর্ডার। সীমান্ত পার হলেই আগরতলা।
              </p>
              <div className="pt-2 text-[11px] font-bold text-[#1c88c6]">মোট সময়: ৩ – ৪ ঘণ্টা</div>
            </div>

            <div className="p-6 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-3">
              <div className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span>🚗 কুমিল্লা থেকে</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                কুমিল্লা শহর বা কান্দিরপাড় থেকে সিএনজি বা বাসে সরাসরি আখাউড়া সীমান্ত চেকপোস্টে পৌঁছানো যায়। এটি সবচেয়ে নিকটবর্তী রুট।
              </p>
              <div className="pt-2 text-[11px] font-bold text-[#1c88c6]">মোট সময়: ১ – ১.৫ ঘণ্টা</div>
            </div>

            <div className="p-6 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-3">
              <div className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span>🚌 ব্রাহ্মণবাড়িয়া থেকে</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                ব্রাহ্মণবাড়িয়া জেলা সদর থেকে লোকাল বাস বা সিএনজিতে মাত্র ২০-২৫ কিলোমিটার দূরত্বে অবস্থিত আখাউড়া আন্তর্জাতিক বর্ডার।
              </p>
              <div className="pt-2 text-[11px] font-bold text-[#1c88c6]">মোট সময়: ৪৫ – ৬০ মিনিট</div>
            </div>

            <div className="p-6 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-3">
              <div className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span>🚖 আগরতলা শহর থেকে</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                আখাউড়া ইন্টিগ্রেটেড চেকপোস্ট (বর্ডার) থেকে যেকোনো রিকশা বা অটোরিকশায় &quot;বিজয়কুমার চৌমুহনী, অশ্বিনী নেত্রালয়&quot; বললেই নামিয়ে দেবে।
              </p>
              <div className="pt-2 text-[11px] font-bold text-[#1c88c6]">বর্ডার থেকে দূরত্ব: ৬ কিমি (১৫ মিনিট)</div>
            </div>
          </div>

          {/* Visa Disclaimer Alert Box */}
          <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200/90 text-amber-950 text-xs sm:text-sm space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-900 text-sm sm:text-base">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
              <span>জরুরি ভিসা ও প্রশাসনিক তথ্য</span>
            </div>
            <p className="leading-relaxed text-slate-700">
              ভারতীয় মেডিকেল ভিসা সংক্রান্ত নিয়মাবলী ও আবেদন প্রক্রিয়ার জন্য শুধুমাত্র ভারত সরকারের আনুষ্ঠানিক ভিসা পোর্টাল (Indian Visa Online:{" "}
              <a
                href="https://indianvisaonline.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1c88c6] underline font-semibold"
              >
                indianvisaonline.gov.in
              </a>
              ) অনুসরণ করুন। ভিসা মঞ্জুর বা প্রত্যাখ্যানের সম্পূর্ণ সিদ্ধান্ত ভারতীয় দূতাবাস ও ভিসা কর্তৃপক্ষের এখতিয়ারধীন। হাসপাতাল কোনো অনানুষ্ঠানিক চার্জ দাবি করে না।
            </p>
          </div>
        </div>
      </section>

      {/* Medical Specialists */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1c88c6] bg-sky-100 px-3 py-1 rounded-full">
              অভিজ্ঞ চিকিৎসক দল
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              অশ্বিনী নেত্রালয়ের নেতৃত্বদানকারী চক্ষু বিশেষজ্ঞগণ
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              ভারতের শীর্ষ চক্ষু গবেষণা কেন্দ্র ও মেডিকেল কলেজ থেকে উচ্চতর ডিগ্রি ও ফেলোশিপধারী সার্জনদের আন্তরিক পরিচর্যা:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Doctor 1 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center space-y-3">
              <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-sky-300 bg-slate-100 shadow-inner">
                <Image
                  src="/images/Dr-anurag.jpg"
                  alt="ডাঃ অনুরাগ মজুমদার"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900">ডাঃ অনুরাগ মজুমদার</h3>
                <p className="text-xs text-[#1c88c6] font-semibold">MBBS, MS (Ophthalmology)</p>
                <p className="text-[11px] text-slate-500 mt-1">
                  মেডিকেল ডিরেক্টর ও সিনিয়র কনসালট্যান্ট (ফ্যাকো ও অ্যান্টেরিওর সেগমেন্ট সার্জারি)
                </p>
              </div>
            </div>

            {/* Doctor 2 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center space-y-3">
              <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-sky-300 bg-slate-100 shadow-inner">
                <Image
                  src="/images/Dr-Subrata.jpg"
                  alt="ডাঃ সুব্রত সাহা"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900">ডাঃ সুব্রত সাহা</h3>
                <p className="text-xs text-[#1c88c6] font-semibold">MBBS, MS (Ophthalmology)</p>
                <p className="text-[11px] text-slate-500 mt-1">
                  চিফ অপারেটিং অফিসার ও সিনিয়র আই সার্জন (ফ্যাকো ও রিফ্র্যাক্টিভ সার্জারি)
                </p>
              </div>
            </div>

            {/* Doctor 3 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center space-y-3">
              <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-sky-300 bg-slate-100 shadow-inner">
                <Image
                  src="/images/Dr-Kaushick-1.jpg"
                  alt="ডাঃ কৌশিক বিশ্বাস"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900">ডাঃ কৌশিক বিশ্বাস</h3>
                <p className="text-xs text-[#1c88c6] font-semibold">MBBS, MS, DNB</p>
                <p className="text-[11px] text-slate-500 mt-1">
                  সিনিয়র ভিট্রেও-রেটিনা সার্জন ও রেটিনোপ্যাথি বিশেষজ্ঞ (শঙ্কর নেত্রালয় ফেলো)
                </p>
              </div>
            </div>

            {/* Doctor 4 */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm text-center space-y-3">
              <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-sky-300 bg-slate-100 shadow-inner">
                <Image
                  src="/images/Dr-paruldeep.jpg"
                  alt="ডাঃ পারুলদীপ চাকমা"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900">ডাঃ পারুলদীপ চাকমা</h3>
                <p className="text-xs text-[#1c88c6] font-semibold">MBBS, MS, FAEH</p>
                <p className="text-[11px] text-slate-500 mt-1">
                  গ্লুকোমা ও ক্যাটারাক্ট স্পেশালিস্ট (অরবিন্দ আই কেয়ার ফেলো)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Patient Experience */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-sky-50 via-slate-50 to-white border border-sky-200/80 shadow-md space-y-6">
            <div className="flex items-center gap-1 text-amber-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>

            <blockquote className="text-base sm:text-lg text-slate-700 italic leading-relaxed">
              &ldquo;আমার বাবার রেটিনা হঠাৎ ছিঁড়ে যাওয়ার পর আমরা ভীষণ দুশ্চিন্তায় পড়েছিলাম। কলকাতায় যাওয়ার প্রস্তুতি নিতেই অনেক দিন লেগে যেত। পরে একজন আত্মীয়ের মাধ্যমে আগরতলা অশ্বিনী নেত্রালয়ের কথা জানতে পেরে কুমিল্লা থেকে মাত্র ২ ঘণ্টায় চলে আসি। ডাঃ কৌশিক বিশ্বাস পরের দিনই সফলভাবে রেটিনা সার্জারি করেন। ভাষা, আদর-যত্ন এবং চিকিৎসা খরচ—সবদিক থেকে এটি আমাদের সেরা অভিজ্ঞতা ছিল।&rdquo;
            </blockquote>

            <div className="pt-2 border-t border-sky-100 flex items-center justify-between flex-wrap gap-2 text-xs sm:text-sm">
              <div>
                <p className="font-bold text-slate-900">আনোয়ারুল ইসলাম (রোগীর পুত্র)</p>
                <p className="text-slate-500">কুমিল্লা, বাংলাদেশ</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-xs">
                রেটিনা সার্জারি ও দৃষ্টি পুনরুদ্ধার
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-3">
            <span className="text-xs font-bold uppercase tracking-wider text-[#1c88c6] bg-sky-100 px-3 py-1 rounded-full">
              সচরাচর জিজ্ঞাসিত প্রশ্ন
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              বাংলাদেশী রোগীদের প্রচলিত প্রশ্নের উত্তর
            </h2>
          </div>

          <div className="space-y-3.5">
            {bangladeshFaqs.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-slate-200/90 rounded-2xl bg-white overflow-hidden shadow-xs"
              >
                <summary className="flex items-center justify-between p-5 sm:p-6 font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                  <span className="flex items-start gap-3 pr-4">
                    <HelpCircle className="w-5 h-5 text-[#1c88c6] shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform shrink-0" />
                </summary>
                <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pl-12">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Banner */}
      <section className="py-16 sm:py-20 bg-gradient-to-r from-[#0a274c] via-[#103d72] to-[#177db8] text-white">
        <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-sky-200 text-xs font-semibold backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5" />
            <span>সরাসরি যোগাযোগ ও সহায়তা ডেস্ক</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">
            চোখের যেকোনো সমস্যার জন্য আজই আমাদের সাথে যোগাযোগ করুন
          </h2>

          <p className="text-xs sm:text-sm text-slate-200 max-w-xl mx-auto leading-relaxed">
            আপনার পুরনো প্রেসক্রিপশন বা চোখের রিপোর্ট হোয়াটসঅ্যাপে পাঠিয়ে বিনামূল্যে চিকিৎসকের প্রাথমিক পরামর্শ ও চিকিৎসা খরচের ধারণা নিন।
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappPreFilledUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm rounded-full shadow-xl shadow-emerald-950/40 transition-all transform active:scale-95"
            >
              <MessageCircle className="w-4 h-4" />
              <span>হোয়াটসঅ্যাপে চ্যাট করুন: +91 92336 17885</span>
            </a>

            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 font-bold text-xs sm:text-sm rounded-full transition-colors shadow-md"
            >
              <Phone className="w-4 h-4 text-[#1c88c6]" />
              <span>কল করুন: {siteConfig.phone}</span>
            </a>
          </div>

          <div className="pt-6 border-t border-white/10 text-xs text-sky-200 space-y-1">
            <p className="font-semibold text-white">📍 অশ্বিনী নেত্রালয় (Ashvini Netralaya)</p>
            <p>বিজয়কুমার চৌমুহনী, আগরতলা, ত্রিপুরা – ৭৯৯০০১ (আখাউড়া সীমান্ত থেকে মাত্র ১৫ মিনিট)</p>
            <p className="text-slate-300 text-[11px] pt-1">ওপিডি সময়: সোম – শনি (সকাল ৯:০০ – সন্ধ্যা ৭:০০)</p>
          </div>
        </div>
      </section>
    </div>
  );
}
