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
  Building2,
  Banknote,
  FileCheck2,
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
        "হাসপাতালটি আগরতলা শহরের মূল কেন্দ্র বিজয়কুমার চৌমুহনীতে অবস্থিত। হাসপাতালের হাঁটা দূরত্বে এবং ১ থেকে ২ কিলোমিটারের মধ্যে বহু মানসম্পন্ন বাজেট হোটেল, গেস্ট হাউস এবং ভালো রেস্তোরাঁ রয়েছে। আমাদের আন্তর্জাতিক রোগী সহায়তা ডেস্ক রোগী ও পরিবারের জন্য নিরাপদ, পরিচ্ছন্ন হোটেল বুকিংয়ে সরাসরি সহায়তা ও বিশেষ করপোরেট ডিসকাউন্ট নিশ্চিত করে।",
    },
    {
      question: "টাকা ভাঙানো বা কারেন্সি এক্সচেঞ্জ (মানি এক্সচেঞ্জ) কীভাবে করব?",
      answer:
        "আখাউড়া আন্তর্জাতিক সীমান্ত এবং আগরতলা শহরে সরকারি রেজিস্টার্ড অনুমোদিত ফরেন এক্সচেঞ্জ (Authorized Money Changer) কাউন্টারে বাংলাদেশি টাকা (BDT) ভারতীয় রুপিতে (INR) রূপান্তর করার ক্ষেত্রে আমাদের আন্তর্জাতিক ডেস্ক সার্বক্ষণিক সঠিক গাইডেন্স প্রদান করে। কোনো দালাল ছাড়াই দৈনিক সরকারি ব্যাংক রেটে মুদ্রা বিনিময় করা যায়। এ ছাড়া হাসপাতালে আন্তর্জাতিক ডেবিট/ক্রেডিট কার্ডের মাধ্যমেও পেমেন্ট করা যায়।",
    },
    {
      question: "চিকিৎসা শেষে দেশে ফেরার সময় বর্ডারে কী কী ডকুমেন্টেশন লাগবে?",
      answer:
        "রোগী ও তার পরিবারের কোনো প্রকার হয়রানি যাতে না হয়, সেজন্য চিকিৎসা শেষে হাসপাতাল থেকে সকল প্রয়োজনীয় কাগজপত্র যেমন: চিকিৎসকের মূল প্রেসক্রিপশন, আইটেমাইজড রসিদ, হাসপাতালের মূল বিল, বিস্তারিত ডিসচার্জ সামারি এবং বর্ডার ইমিগ্রেশনের জন্য অনুমোদিত 'Fit to Travel' মেডিকেল সার্টিফিকেট প্রস্তুত করে রোগীর হাতে তুলে দেওয়া হয়। এর ফলে আখাউড়া-আগরতলা কাস্টমস ও ইমিগ্রেশন চেকপোস্টে কোনো সমস্যা ছাড়াই খুব সহজে বাংলাদেশে প্রবেশ করা যায়।",
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
      <div className="bg-[#051226] border-b border-sky-950 text-slate-200 py-3 px-4 text-xs sm:text-sm">
        <div className="max-w-[1240px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5 text-center sm:text-left">
          <div className="flex items-center gap-2.5 flex-wrap justify-center sm:justify-start">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-semibold text-xs border border-emerald-500/40">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>বাংলাদেশী রোগীদের বিশেষ সহায়তা হেল্পডেস্ক</span>
            </span>
            <span className="hidden md:inline text-slate-600">•</span>
            <span className="text-slate-200 text-xs sm:text-sm font-medium">
              আখাউড়া-আগরতলা সীমান্ত (ইন্টিগ্রেটেড চেকপোস্ট) থেকে মাত্র ১৫ মিনিট
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs sm:text-sm">
            <a
              href={whatsappPreFilledUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:text-[#3ce67b] font-semibold flex items-center gap-1.5 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
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
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sky-200 text-xs sm:text-sm font-semibold">
                  <ShieldCheck className="w-4 h-4 text-sky-300" />
                  <span>ত্রিপুরার ১ম ও একমাত্র NABH স্বীকৃত চক্ষু হাসপাতাল</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 text-xs sm:text-sm font-semibold border border-emerald-500/30">
                  <Award className="w-4 h-4" />
                  <span>১০,০০০+ সফল সার্জারির অভিজ্ঞতা</span>
                </span>
              </div>

              {/* Main Heading */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-400/15 border border-sky-400/30 text-sky-200 text-xs sm:text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-sky-400"></span>
                  <span>বাংলাদেশ ও ত্রিপুরার রোগীদের গভীর আস্থা</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-[46px] font-bold leading-[1.35] tracking-normal font-bengali-heading">
                  বাংলাদেশ থেকে মাত্র কয়েক ঘণ্টায় আগরতলায়{" "}
                  <span className="text-[#38bdf8] underline decoration-sky-400/50 underline-offset-8">
                    বিশ্বমানের চোখের চিকিৎসা
                  </span>
                </h1>
              </div>

              {/* Sub-description */}
              <p className="text-base sm:text-[19px] text-white/95 leading-[2.0] max-w-2xl font-normal sm:font-medium">
                ঢাকা, কুমিল্লা, ব্রাহ্মণবাড়িয়া ও সিলেট থেকে অতি সহজে সড়ক বা রেলপথে আখাউড়া সীমান্ত হয়ে আগরতলা পৌঁছান। হাসপাতালে পাবেন সরকারি অনুমোদিত মেডিকেল ভিসা ইনভাইটেশন লেটার, হোটেল ও আবাসন বুকিং সহায়তা, নিরাপদ মুদ্রা বিনিময় (মানি এক্সচেঞ্জ) গাইডেন্স এবং আন্তর্জাতিক মানের সেলাইবিহীন ফ্যাকো ছানি ও রেটিনা সার্জারি—মাতৃভাষা বাংলায় উষ্ণ ও আন্তরিক সেবায়।
              </p>

              {/* Travel Time Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-center">
                  <span className="block text-xs sm:text-sm text-sky-200 font-medium">ঢাকা থেকে</span>
                  <span className="text-base sm:text-lg font-bold text-white">৩ – ৪ ঘণ্টা</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-center">
                  <span className="block text-xs sm:text-sm text-sky-200 font-medium">কুমিল্লা থেকে</span>
                  <span className="text-base sm:text-lg font-bold text-white">১ – ১.৫ ঘণ্টা</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-center">
                  <span className="block text-xs sm:text-sm text-sky-200 font-medium">ব্রাহ্মণবাড়িয়া</span>
                  <span className="text-base sm:text-lg font-bold text-white">৪৫ – ৬০ মিনিট</span>
                </div>
                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-center">
                  <span className="block text-xs sm:text-sm text-sky-200 font-medium">সিলেট থেকে</span>
                  <span className="text-base sm:text-lg font-bold text-white">৩ ঘণ্টা</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <a
                  href={whatsappPreFilledUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base rounded-full shadow-lg shadow-emerald-950/40 transition-all transform active:scale-95"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>হোয়াটসঅ্যাপে রিপোর্ট পাঠান ও ভিসা সহায়তা নিন</span>
                </a>

                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="inline-flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 text-white border border-white/25 font-bold text-sm sm:text-base rounded-full backdrop-blur-md transition-colors"
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
                <div className="p-5 sm:p-6 space-y-4 bg-slate-900/95 backdrop-blur-md border-t border-white/10">
                  <div className="flex items-center justify-between pb-3.5 border-b border-slate-700/60">
                    <div>
                      <p className="font-bold text-lg text-white font-bengali-heading">অশ্বিনী নেত্রালয়</p>
                      <p className="text-sm text-sky-200 font-medium">বিজয়কুমার চৌমুহনী, আগরতলা</p>
                    </div>
                    <span className="px-3 py-1 rounded-md bg-sky-500/20 text-sky-200 text-xs sm:text-sm font-bold border border-sky-400/40">
                      NABH মানসম্মত
                    </span>
                  </div>

                  <ul className="space-y-3 text-sm sm:text-[15px] font-medium text-slate-100">
                    <li className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#20c997] shrink-0 mt-1" />
                      <span>মেডিকেল ভিসা ইনভাইটেশন লেটার প্রদান সুবিধা (২৪ ঘণ্টায়)</span>
                    </li>
                    <li className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#20c997] shrink-0 mt-1" />
                      <span>নিকটবর্তী হোটেল ও পারিবারিক গেস্ট হাউস বুকিং সহায়তা</span>
                    </li>
                    <li className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#20c997] shrink-0 mt-1" />
                      <span>বৈধ কারেন্সি এক্সচেঞ্জ (BDT থেকে INR) সঠিক গাইডেন্স</span>
                    </li>
                    <li className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#20c997] shrink-0 mt-1" />
                      <span>বর্ডারে সহজে প্রত্যাবর্তনের জন্য ফিটনেস ও ডিসচার্জ ফাইল</span>
                    </li>
                    <li className="flex items-start gap-2.5 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-[#20c997] shrink-0 mt-1" />
                      <span>সেলাইবিহীন ব্যথাহীন ফ্যাকো ছানি ও ডে-কেয়ার ডিসচার্জ</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Bangladeshi Patient Assistance */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-sky-50/70 via-white to-slate-50 border-b border-sky-100">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-sm sm:text-[15px] font-bold tracking-normal text-[#0c6ba1] bg-sky-100 px-4 py-2 rounded-full inline-block">
              ১০০% ঝামেলামুক্ত আন্তর্জাতিক সেবা
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-[38px] font-bold text-slate-900 tracking-normal leading-[1.35] font-bengali-heading">
              বাংলাদেশী রোগীদের জন্য আমাদের বিশেষ ৪টি সহায়তা সুবিধা
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-[1.95] font-normal sm:font-medium">
              ভিসা প্রসেসিং থেকে শুরু করে সীমান্ত পারাপার, নিরাপদ আবাসন ও মুদ্রা বিনিময়—আপনার চিকিৎসার প্রতিটি পদক্ষেপে পাশে থাকবে অশ্বিনী নেত্রালয়ের ডেডিকেটেড পেশেন্ট কেয়ার টিম:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Card 1: Visa Support */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-sky-200/80 shadow-md hover:shadow-xl transition-all duration-300 space-y-5 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-sky-50 text-[#1c88c6] flex items-center justify-center font-bold text-2xl group-hover:bg-[#1c88c6] group-hover:text-white transition-colors">
                  <FileCheck2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug tracking-normal font-bengali-heading">
                  ১. অফিসিয়াল মেডিকেল ভিসা ও ইনভাইটেশন লেটার সহায়তা
                </h3>
                <p className="text-base sm:text-[17px] text-slate-700 leading-[1.95] font-normal">
                  বাংলাদেশী রোগীদের ভিসা প্রাপ্তি নিশ্চিত করতে অশ্বিনী নেত্রালয় দ্রুততম সময়ে হাসপাতালের অফিসিয়াল প্যাডে স্বাক্ষরিত প্রাতিষ্ঠানিক আমন্ত্রণ পত্র (Medical Visa Invitation Letter) প্রদান করে।
                </p>
                <ul className="space-y-3 text-sm sm:text-[15px] text-slate-800 font-medium pt-3 border-t border-slate-100">
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                    <span>রোগী এবং মেডিকেল অ্যাটেনডেন্ট (সহযাত্রী) উভয়ের জন্য অনুমোদিত ভিসা লেটার</span>
                  </li>
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                    <span>ভারতীয় ভিসা আবেদন কেন্দ্রে (IVAC) দ্রুত অ্যাপয়েন্টমেন্ট ও ভিসা গ্রহণের পূর্ণাঙ্গ গাইডেন্স</span>
                  </li>
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                    <span>শুধুমাত্র পাসপোর্ট কপি ও প্রেসক্রিপশন হোয়াটসঅ্যাপে পাঠিয়ে ২৪ ঘণ্টার মধ্যে লেটার সংগ্রহ</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={whatsappPreFilledUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-[#0c6ba1] hover:text-sky-800 transition-colors"
                >
                  <span>হোয়াটসঅ্যাপে ভিসা লেটারের জন্য আবেদন করুন</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 2: Hotel & Accommodation */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-emerald-200/80 shadow-md hover:shadow-xl transition-all duration-300 space-y-5 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold text-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  <Building2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug tracking-normal font-bengali-heading">
                  ২. নিরাপদ হোটেল ও আবাসন ব্যবস্থা সহায়তা
                </h3>
                <p className="text-base sm:text-[17px] text-slate-700 leading-[1.95] font-normal">
                  আগরতলায় রোগী ও তার সাথে আসা পরিবারের সদস্যদের আরামদায়ক অবস্থানের জন্য হাসপাতালের হাঁটা দূরত্বে এবং ২ থেকে ৫ মিনিটের মধ্যে বিশ্বস্ত হোটেল ও গেস্ট হাউস বুকিংয়ে সরাসরি সহযোগিতা প্রদান করা হয়।
                </p>
                <ul className="space-y-3 text-sm sm:text-[15px] text-slate-800 font-medium pt-3 border-t border-slate-100">
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                    <span>এসি ও নন-এসি পরিষ্কার-পরিচ্ছন্ন কক্ষ এবং বাংলাদেশী রোগীদের জন্য বিশেষ সাশ্রয়ী করপোরেট রেট</span>
                  </li>
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                    <span>লিফট ও হুইলচেয়ার সুবিধা সম্পন্ন হোটেল যাতে বয়স্ক রোগীদের চলাচলে কোনো কষ্ট না হয়</span>
                  </li>
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                    <span>হোটেলের নিকটেই স্বাস্থ্যসম্মত পারিবারিক রেস্তোরাঁ ও বাংলা খাবারের সহজলভ্যতা</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={whatsappPreFilledUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-emerald-700 hover:text-emerald-800 transition-colors"
                >
                  <span>আবাসন ও হোটেল বুকিংয়ে সহায়তা নিন</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 3: Currency Exchange */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-amber-200/80 shadow-md hover:shadow-xl transition-all duration-300 space-y-5 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-2xl group-hover:bg-amber-600 group-hover:text-white transition-colors">
                  <Banknote className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug tracking-normal font-bengali-heading">
                  ৩. নিরাপদ মুদ্রা বিনিময় ও মানি এক্সচেঞ্জ গাইডেন্স
                </h3>
                <p className="text-base sm:text-[17px] text-slate-700 leading-[1.95] font-normal">
                  টাকা পয়সা লেনদেনের কোনো ঝামেলা যেন না হয় সেজন্য আখাউড়া স্থলবন্দর ও আগরতলা শহরে সরকারি রেজিস্টার্ড বৈধ ফরেন এক্সচেঞ্জ কাউন্টারে বাংলাদেশি টাকা (BDT) ভারতীয় রুপিতে (INR) রূপান্তরের সার্বক্ষণিক গাইডেন্স দেওয়া হয়।
                </p>
                <ul className="space-y-3 text-sm sm:text-[15px] text-slate-800 font-medium pt-3 border-t border-slate-100">
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                    <span>অননুমোদিত দালাল ছাড়াই দৈনিক সঠিক ও সর্বোচ্চ ব্যাংক এক্সচেঞ্জ রেট নিশ্চিতকরণ</span>
                  </li>
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                    <span>ভারতীয় নগদ রুপি (Cash INR)-র পাশাপাশি আন্তর্জাতিক ক্রেডিট/ডেবিট কার্ড গ্রহণ</span>
                  </li>
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                    <span>চিকিৎসার প্রতিটি খরচের জন্য সঠিক মানি রসিদ ও স্বচ্ছ আইটেমাইজড বিল প্রদান</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={whatsappPreFilledUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-amber-700 hover:text-amber-800 transition-colors"
                >
                  <span>মুদ্রা বিনিময় নিয়মাবলী জেনে নিন</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Card 4: Border Documentation */}
            <div className="bg-white rounded-3xl p-7 sm:p-9 border border-indigo-200/80 shadow-md hover:shadow-xl transition-all duration-300 space-y-5 flex flex-col justify-between group">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-2xl group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug tracking-normal font-bengali-heading">
                  ৪. সম্পূর্ণ মেডিকেল ডকুমেন্টেশন ও বর্ডার ইমিগ্রেশন সাপোর্ট
                </h3>
                <p className="text-base sm:text-[17px] text-slate-700 leading-[1.95] font-normal">
                  চিকিৎসা শেষে দেশে ফেরার সময় আখাউড়া-আগরতলা আন্তর্জাতিক চেকপোস্টে (ICP) কাস্টমস ও ইমিগ্রেশন চেকিংয়ে যাতে রোগীর কোনো প্রকার জবাবদিহি বা হয়রানি না হয়, সেজন্য প্রয়োজনীয় সকল নথিপত্র হাসপাতাল কর্তৃপক্ষ প্রস্তুত করে দেয়।
                </p>
                <ul className="space-y-3 text-sm sm:text-[15px] text-slate-800 font-medium pt-3 border-t border-slate-100">
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                    <span>চিকিৎসকের অফিসিয়াল সীল ও রেজিস্ট্রেশন নম্বর সহ বিস্তারিত ডিসচার্জ সামারি (Discharge Summary)</span>
                  </li>
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                    <span>সীমান্ত পারাপারের জন্য হাসপাতাল কর্তৃক স্বাক্ষরিত বৈধ &quot;Fit to Travel&quot; মেডিকেল সার্টিফিকেট</span>
                  </li>
                  <li className="flex items-start gap-2.5 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                    <span>পরবর্তী ফলো-আপ ও জরুরি প্রয়োজনে প্রেসক্রিপশন ও ওষুধ ব্যবহারের সম্পূর্ণ লিখিত নির্দেশিকা</span>
                  </li>
                </ul>
              </div>
              <div className="pt-4 border-t border-slate-100">
                <a
                  href={whatsappPreFilledUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-indigo-700 hover:text-indigo-800 transition-colors"
                >
                  <span>বর্ডার সহায়তা হেল্পডেস্কে কথা বলুন</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-sm sm:text-[15px] font-bold tracking-normal text-[#0c6ba1] bg-sky-100 px-4 py-1.5 rounded-full inline-block">
              সুবিধা ও সাশ্রয়
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-normal leading-snug font-bengali-heading">
              কলকাতা বা চেন্নাইয়ের বদলে আগরতলা কেন সেরা পছন্দ?
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-[1.95] font-normal sm:font-medium">
              বাংলাদেশী রোগীদের জন্য চোখের উন্নত চিকিৎসা গ্রহণের ক্ষেত্রে দূরবর্তী শহরের বদলে আগরতলা অশ্বিনী নেত্রালয় বেছে নেওয়ার বাস্তবসম্মত কারণসমূহ:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#1c88c6] flex items-center justify-center font-bold text-xl">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug tracking-normal font-bengali-heading">
                সময় ও দূরত্বের বিশাল সাশ্রয়
              </h3>
              <p className="text-base text-slate-700 leading-[1.9] font-normal">
                কলকাতায় যাওয়ার জন্য ব্যয়বহুল বিমান টিকিট বা দীর্ঘ ট্রেনের ক্লান্তিকর জার্নি করতে হয় না। ঢাকা বা কুমিল্লা থেকে মাত্র কয়েক ঘণ্টার ব্যবধানে আখাউড়া সীমান্ত পেরিয়ে সহজেই হাসপাতালে পৌঁছানো যায়।
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#20c997] flex items-center justify-center font-bold text-xl">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug tracking-normal font-bengali-heading">
                NABH স্বীকৃত নিরাপত্তা ও প্রযুক্তি
              </h3>
              <p className="text-base text-slate-700 leading-[1.9] font-normal">
                অশ্বিনী নেত্রালয় ত্রিপুরার প্রথম ও একমাত্র NABH স্বীকৃত সুপারস্পেশালিটি হাসপাতাল। এখানে রয়েছে সম্পূর্ণ ইনফেকশন-ফ্রি ল্যামিনার ফ্লো মডিউলার ওটি, কার্ল জাইস ও অ্যালকন সেন্টুরিয়ন সহ শীর্ষ প্রযুক্তি।
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold text-xl">
                <Heart className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug tracking-normal font-bengali-heading">
                মাতৃভাষা বাংলায় ১০০% আন্তরিক সেবা
              </h3>
              <p className="text-base text-slate-700 leading-[1.9] font-normal">
                কোনো ভাষাগত দূরত্ব নেই। আমাদের সকল শীর্ষ চক্ষু বিশেষজ্ঞ, মেডিকেল স্টাফ ও নার্সরা সাবলীলভাবে বাংলায় কথা বলেন। রোগী ও পরিবার নিজেদের মনের সব প্রশ্ন নিঃসংকোচে আলোচনা করতে পারেন।
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#1c88c6] flex items-center justify-center font-bold text-xl">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug tracking-normal font-bengali-heading">
                একই দিনে পরীক্ষা ও ডে-কেয়ার সার্জারি
              </h3>
              <p className="text-base text-slate-700 leading-[1.9] font-normal">
                দীর্ঘ সময় হাসপাতালে ভর্তি থাকার প্রয়োজন হয় না। ফ্যাকো ছানি অপারেশন মাত্র ১০-১৫ মিনিটে সম্পন্ন হয় এবং রোগীকে ২ ঘণ্টার মধ্যে হোটেল বা বাসায় ফিরে যাওয়ার অনুমতি দেওয়া হয়।
              </p>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold text-xl">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug tracking-normal font-bengali-heading">
                মেডিকেল ভিসা সহায়তা পত্র
              </h3>
              <p className="text-base text-slate-700 leading-[1.9] font-normal">
                রোগীদের দ্রুত ভিসা প্রসেসিংয়ের জন্য হাসপাতাল থেকে প্রাতিষ্ঠানিক মেডিকেল ইনভাইটেশন লেটার প্রদান করা হয়, যা দিয়ে নিকটস্থ ভারতীয় ভিসা অ্যাপ্লিকেশন সেন্টারে (IVAC) আবেদন করা সম্ভব।
              </p>
            </div>

            {/* Card 6 */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow space-y-4">
              <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center font-bold text-xl">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug tracking-normal font-bengali-heading">
                স্বচ্ছ ব্যয় ও সাশ্রয়ী প্যাকেজ
              </h3>
              <p className="text-base text-slate-700 leading-[1.9] font-normal">
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
            <span className="text-sm sm:text-[15px] font-bold tracking-normal text-[#0c6ba1] bg-sky-50 px-4 py-2 rounded-full border border-sky-100 inline-block">
              ধাপভিত্তিক নির্দেশিকা
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-normal leading-snug font-bengali-heading">
              বাংলাদেশ থেকে চিকিৎসার জন্য আসার ৫টি সহজ ধাপ
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-[1.95] font-normal sm:font-medium">
              কোনো প্রকার বিভ্রান্তি ছাড়াই আপনার চোখ চিকিৎসার সঠিক পরিকল্পনা সম্পন্ন করুন:
            </p>
          </div>

          <div className="relative border-l-2 border-sky-200 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-10 max-w-3xl mx-auto">
            {/* Step 1 */}
            <div className="relative space-y-2">
              <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-8 h-8 rounded-full bg-[#1c88c6] text-white font-bold flex items-center justify-center text-xs shadow-md">
                ১
              </div>
              <span className="text-sm sm:text-base font-bold text-[#0c6ba1] tracking-normal">
                ধাপ ১: প্রাথমিক মূল্যায়ন
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug tracking-normal font-bengali-heading">
                হোয়াটসঅ্যাপে আপনার বর্তমান চোখের প্রেসক্রিপশন ও রিপোর্ট পাঠান
              </h3>
              <p className="text-base text-slate-700 leading-[1.95] font-normal">
                আপনার বিদ্যমান চিকিৎসকের প্রেসক্রিপশন, চোখ পরীক্ষার রিপোর্ট বা চশমার পাওয়ার পরিষ্কার ছবি তুলে আমাদের ডেডিকেটেড হোয়াটসঅ্যাপ নম্বরে (+91 92336 17885) পাঠান।
              </p>
            </div>

            {/* Step 2 */}
            <div className="relative space-y-2">
              <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-8 h-8 rounded-full bg-[#1c88c6] text-white font-bold flex items-center justify-center text-xs shadow-md">
                ২
              </div>
              <span className="text-sm sm:text-base font-bold text-[#0c6ba1] tracking-normal">
                ধাপ ২: ডাক্তারের পর্যালোচনা
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug tracking-normal font-bengali-heading">
                সিনিয়র বিশেষজ্ঞের পরামর্শ ও আনুমানিক চিকিৎসা খরচের বিবরণ
              </h3>
              <p className="text-base text-slate-700 leading-[1.95] font-normal">
                আমাদের সিনিয়র চক্ষু সার্জন আপনার রিপোর্ট পর্যালোচনা করে প্রয়োজনীয় চিকিৎসা পদ্ধতি (যেমন: ফ্যাকো ছানি অপারেশন, রেটিনা ইনজেকশন বা ডায়াগনস্টিকস) এবং আনুমানিক খরচ জানিয়ে দেবেন।
              </p>
            </div>

            {/* Step 3 */}
            <div className="relative space-y-2">
              <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-8 h-8 rounded-full bg-[#1c88c6] text-white font-bold flex items-center justify-center text-xs shadow-md">
                ৩
              </div>
              <span className="text-sm sm:text-base font-bold text-[#0c6ba1] tracking-normal">
                ধাপ ৩: ভিসা সহায়তা
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug tracking-normal font-bengali-heading">
                হাসপাতালের অফিশিয়াল মেডিকেল ভিসা ইনভাইটেশন লেটার সংগ্রহ
              </h3>
              <p className="text-base text-slate-700 leading-[1.95] font-normal">
                রোগী ও তার সহযাত্রীর পাসপোর্টের ফটোকপি পাঠালে আমরা হাসপাতাল প্যাডে স্বাক্ষরিত মেডিকেল ভিসা আমন্ত্রণ পত্র (২৪ ঘণ্টার মধ্যে) প্রদান করব, যা দিয়ে সহজেই মেডিকেল ভিসার আবেদন সম্পন্ন করা যাবে।
              </p>
            </div>

            {/* Step 4 */}
            <div className="relative space-y-2">
              <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-8 h-8 rounded-full bg-[#1c88c6] text-white font-bold flex items-center justify-center text-xs shadow-md">
                ৪
              </div>
              <span className="text-sm sm:text-base font-bold text-[#0c6ba1] tracking-normal">
                ধাপ ৪: আগরতলায় আগমন ও সহায়তা
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug tracking-normal font-bengali-heading">
                বর্ডার অতিক্রম, কারেন্সি এক্সচেঞ্জ ও হোটেল চেক-ইন
              </h3>
              <p className="text-base text-slate-700 leading-[1.95] font-normal">
                আখাউড়া সীমান্ত পার হয়ে আগরতলা ইন্টিগ্রেটেড চেকপোস্ট থেকে মাত্র ১৫ মিনিটে হাসপাতালে পৌঁছানো যায়। আমাদের টিম বর্ডার পারাপার, রেজিস্টার্ড মানি এক্সচেঞ্জে টাকা রূপান্তর এবং নিরাপদ হোটেল চেক-ইনে সম্পূর্ণ সহযোগিতা করবে।
              </p>
            </div>

            {/* Step 5 */}
            <div className="relative space-y-2">
              <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-8 h-8 rounded-full bg-[#20c997] text-white font-bold flex items-center justify-center text-xs shadow-md">
                ৫
              </div>
              <span className="text-sm sm:text-base font-bold text-[#20c997] tracking-normal">
                ধাপ ৫: সফল চিকিৎসা ও বর্ডার ডকুমেন্টেশন
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug tracking-normal font-bengali-heading">
                উন্নত চিকিৎসা গ্রহণ, সম্পূর্ণ ডিসচার্জ ফাইল ও ফিটনেস সার্টিফিকেট নিয়ে প্রত্যাবর্তন
              </h3>
              <p className="text-base text-slate-700 leading-[1.95] font-normal">
                আধুনিক চিকিৎসা বা ডে-কেয়ার ছানি অপারেশনের পর সংক্ষিপ্ত বিশ্রাম ও ফলো-আপ সম্পন্ন হয়। বর্ডার ইমিগ্রেশনের জন্য সম্পূর্ণ আইটেমাইজড রসিদ, ডিসচার্জ সামারি ও &quot;Fit to Travel&quot; মেডিকেল সার্টিফিকেট বুঝিয়ে দেওয়া হয় যাতে নির্বিঘ্নে দেশে ফিরতে পারেন।
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Specialities */}
      <section className="py-16 sm:py-20 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-sm sm:text-[15px] font-bold tracking-normal text-[#0c6ba1] bg-sky-100 px-4 py-2 rounded-full inline-block">
              চিকিৎসা সেবাসমূহ
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-normal leading-snug font-bengali-heading">
              অশ্বিনী নেত্রালয়ের প্রধান বিশেষায়িত বিভাগসমূহ
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-[1.9] font-normal sm:font-medium">
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
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug tracking-normal font-bengali-heading">
                  সেলাইবিহীন ফ্যাকো ছানি অপারেশন (MICS Phaco)
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-[1.85] font-normal">
                  ইনজেকশন ও ব্যান্ডেজ মুক্ত ১.৮ মিমি মাইক্রো-ইনসিশন পদ্ধতিতে ছানি অপসারণ। মনোফোকাল, টরিক (অ্যাসটিগমেটিজম দূরীকরণ), মাল্টিফোকাল ও EDOF প্রিমিয়াম লেন্স প্রতিস্থাপন।
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-[#0c6ba1]">
                <Link href="/services/cataract-surgery-phaco" className="hover:underline inline-flex items-center gap-1">
                  <span>বিস্তারিত জানুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-xs text-slate-500 font-medium">সময়: ১০–১৫ মিনিট</span>
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
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug tracking-normal font-bengali-heading">
                  ভিট্রেও-রেটিনা সার্জারি ও ডায়াবেটিক রেটিনা কেয়ার
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-[1.85] font-normal">
                  রেটিনা বিচ্ছিন্নতা (Retinal Detachment), ডায়াবেটিক রক্তক্ষরণ, ম্যাকুলার হোল এবং ২৫জি/২৭জি আল্ট্রা-স্পিড ভিট্রোেক্টমি। ৫৩২এনএম গ্রিন লেজার ও অ্যান্টি-ভিইজিএফ ইনজেকশন।
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-[#0c6ba1]">
                <Link href="/services/retina-surgeries" className="hover:underline inline-flex items-center gap-1">
                  <span>বিস্তারিত জানুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-xs text-slate-500 font-medium">বিশেষায়িত ইউনিট</span>
              </div>
            </div>

            {/* Speciality 3: Glaucoma */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between p-6 space-y-4">
              <div className="space-y-3">
                <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/G1.jpg"
                    alt="গ্লুকোমা চিকিৎসা ও ট্র্যাবেকুলেক্টমি"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug tracking-normal font-bengali-heading">
                  গ্লুকোমা নির্ণয় ও ট্র্যাবেকুলেক্টমি সার্জারি
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-[1.85] font-normal">
                  দৃষ্টির নীরব ঘাতক গ্লুকোমার প্রাথমিক শনাক্তকরণ। হামফ্রে ভিজ্যুয়াল ফিল্ড টেস্ট (HFA3), জাইস OCT অপটিক নার্ভ স্ক্যান, YAG আইরিডোটমি ও প্রেসার নিয়ন্ত্রক সার্জারি।
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-[#0c6ba1]">
                <Link href="/services/glaucoma-surgeries" className="hover:underline inline-flex items-center gap-1">
                  <span>বিস্তারিত জানুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-xs text-slate-500 font-medium">ফিল্ড অ্যানালাইজার</span>
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
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug tracking-normal font-bengali-heading">
                  শিশুদের চোখের চিকিৎসা ও ট্যারা চোখ (Squint)
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-[1.85] font-normal">
                  শিশুদের অলস চোখ (Amblyopia) প্যাচিং থেরাপি, জন্মগত ছানি এবং আধুনিক স্কুইন্ট কারেকশন সার্জারি যার মাধ্যমে স্বাভাবিক 3D দৃষ্টি ও চোখের অবস্থান পুনরুদ্ধার হয়।
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-[#0c6ba1]">
                <Link href="/services/paediatric-eye-care" className="hover:underline inline-flex items-center gap-1">
                  <span>বিস্তারিত জানুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-xs text-slate-500 font-medium">শিশু-বান্ধব ওপিডি</span>
              </div>
            </div>

            {/* Speciality 5: Diagnostics */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between p-6 space-y-4">
              <div className="space-y-3">
                <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/WhatsApp-Image-2023-06-03-at-3.10.23-AM-1.jpeg"
                    alt="কার্ল জাইস HD-OCT ও উন্নত ডায়াগনস্টিকস"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug tracking-normal font-bengali-heading">
                  কার্ল জাইস HD-OCT ও USG B-Scan
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-[1.85] font-normal">
                  ৫-মাইক্রন নিখুঁত জাইস সাইরাস OCT স্ক্যান, অপথ্যালমিক আল্ট্রাসাউন্ড বি-স্ক্যান, ডিজিটাল ফান্ডাস ফটোগ্রাফি ও নন-কন্টাক্ট এয়ার-পাফ টোনোমেট্রি।
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-[#0c6ba1]">
                <Link href="/services/zeiss-oct-automated-perimetry" className="hover:underline inline-flex items-center gap-1">
                  <span>বিস্তারিত জানুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-xs text-slate-500 font-medium">তাৎক্ষণিক রিপোর্ট</span>
              </div>
            </div>

            {/* Speciality 6: YAG Laser */}
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between p-6 space-y-4">
              <div className="space-y-3">
                <div className="relative w-full h-44 rounded-xl overflow-hidden bg-slate-100">
                  <Image
                    src="/images/WhatsApp-Image-2023-06-03-at-3.00.16-AM.jpeg"
                    alt="YAG লেজার ক্যাপসুলোটমি"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 leading-snug tracking-normal font-bengali-heading">
                  ৩ মিনিটে YAG লেজার ক্যাপসুলোটমি
                </h3>
                <p className="text-sm sm:text-[15px] text-slate-700 leading-[1.85] font-normal">
                  ছানি অপারেশনের পর লেন্সের পেছনের পর্দা ঘোলাটে হলে (PCO) মাত্র ৩ মিনিটের ব্যথাহীন আউটপেশেন্ট YAG লেজারে তাৎক্ষণিক স্ফটিক স্বচ্ছ দৃষ্টি ফিরে পান।
                </p>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs sm:text-sm font-bold text-[#0c6ba1]">
                <Link href="/services/yag-laser" className="hover:underline inline-flex items-center gap-1">
                  <span>বিস্তারিত জানুন</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-xs text-slate-500 font-medium">আউটপেশেন্ট ৩ মিনিট</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Routes & Border Crossing */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-sm sm:text-[15px] font-bold tracking-normal text-[#0c6ba1] bg-sky-50 px-4 py-2 rounded-full border border-sky-100 inline-block">
              যাতায়াত ও রুট নির্দেশিকা
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-normal leading-snug font-bengali-heading">
              বাংলাদেশ থেকে কীভাবে আসবেন?
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-[1.95] font-normal sm:font-medium">
              আখাউড়া-আগরতলা সীমান্ত পথ অত্যন্ত সুগম ও দ্রুত যাতায়াতযোগ্য:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-3 flex flex-col justify-between">
              <div>
                <div className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-2 font-bengali-heading">
                  <span>🚆 ঢাকা থেকে</span>
                </div>
                <p className="text-[15px] sm:text-base text-slate-700 leading-[1.9] font-normal">
                  কমলাপুর রেল স্টেশন থেকে আন্তঃনগর ট্রেনে (মহানগর, তূর্ণা বা উপকূল এক্সপ্রেস) সরাসরি আখাউড়া জংশন। এরপর অটোরিকশায় আখাউড়া বর্ডার। সীমান্ত পার হলেই আগরতলা।
                </p>
              </div>
              <div className="pt-3 border-t border-sky-100/80 text-xs sm:text-sm font-bold text-[#0c6ba1]">মোট সময়: ৩ – ৪ ঘণ্টা</div>
            </div>

            <div className="p-6 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-3 flex flex-col justify-between">
              <div>
                <div className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-2 font-bengali-heading">
                  <span>🚗 কুমিল্লা থেকে</span>
                </div>
                <p className="text-[15px] sm:text-base text-slate-700 leading-[1.9] font-normal">
                  কুমিল্লা শহর বা কান্দিরপাড় থেকে সিএনজি বা বাসে সরাসরি আখাউড়া সীমান্ত চেকপোস্টে পৌঁছানো যায়। এটি সবচেয়ে নিকটবর্তী রুট।
                </p>
              </div>
              <div className="pt-3 border-t border-sky-100/80 text-xs sm:text-sm font-bold text-[#0c6ba1]">মোট সময়: ১ – ১.৫ ঘণ্টা</div>
            </div>

            <div className="p-6 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-3 flex flex-col justify-between">
              <div>
                <div className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-2 font-bengali-heading">
                  <span>🚌 ব্রাহ্মণবাড়িয়া থেকে</span>
                </div>
                <p className="text-[15px] sm:text-base text-slate-700 leading-[1.9] font-normal">
                  ব্রাহ্মণবাড়িয়া জেলা সদর থেকে লোকাল বাস বা সিএনজিতে মাত্র ২০-২৫ কিলোমিটার দূরত্বে অবস্থিত আখাউড়া আন্তর্জাতিক বর্ডার।
                </p>
              </div>
              <div className="pt-3 border-t border-sky-100/80 text-xs sm:text-sm font-bold text-[#0c6ba1]">মোট সময়: ৪৫ – ৬০ মিনিট</div>
            </div>

            <div className="p-6 rounded-2xl bg-sky-50/70 border border-sky-100 space-y-3 flex flex-col justify-between">
              <div>
                <div className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-2 font-bengali-heading">
                  <span>🚖 আগরতলা শহর থেকে</span>
                </div>
                <p className="text-[15px] sm:text-base text-slate-700 leading-[1.9] font-normal">
                  আখাউড়া ইন্টিগ্রেটেড চেকপোস্ট (বর্ডার) থেকে যেকোনো রিকশা বা অটোরিকশায় &quot;বিজয়কুমার চৌমুহনী, অশ্বিনী নেত্রালয়&quot; বললেই নামিয়ে দেবে।
                </p>
              </div>
              <div className="pt-3 border-t border-sky-100/80 text-xs sm:text-sm font-bold text-[#0c6ba1]">বর্ডার থেকে দূরত্ব: ৬ কিমি (১৫ মিনিট)</div>
            </div>
          </div>

          {/* Visa Disclaimer Alert Box */}
          <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200/90 text-amber-950 text-sm space-y-2.5">
            <div className="flex items-center gap-2 font-bold text-amber-900 text-base sm:text-lg font-bengali-heading">
              <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
              <span>জরুরি ভিসা ও প্রশাসনিক তথ্য</span>
            </div>
            <p className="leading-[1.9] text-[15px] sm:text-base text-slate-800 font-normal">
              ভারতীয় মেডিকেল ভিসা সংক্রান্ত নিয়মাবলী ও আবেদন প্রক্রিয়ার জন্য শুধুমাত্র ভারত সরকারের আনুষ্ঠানিক ভিসা পোর্টাল (Indian Visa Online:{" "}
              <a
                href="https://indianvisaonline.gov.in"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0c6ba1] underline font-semibold"
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
            <span className="text-sm sm:text-[15px] font-bold tracking-normal text-[#0c6ba1] bg-sky-100 px-4 py-2 rounded-full inline-block">
              অভিজ্ঞ চিকিৎসক দল
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-normal leading-snug font-bengali-heading">
              অশ্বিনী নেত্রালয়ের নেতৃত্বদানকারী চক্ষু বিশেষজ্ঞগণ
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-[1.95] font-normal sm:font-medium">
              ভারতের শীর্ষ চক্ষু গবেষণা কেন্দ্র ও মেডিকেল কলেজ থেকে উচ্চতর ডিগ্রি ও ফেলোশিপধারী সার্জনদের আন্তরিক পরিচর্যা:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Doctor 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center space-y-3.5">
              <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-sky-300 bg-slate-100 shadow-inner">
                <Image
                  src="/images/Dr-anurag.jpg"
                  alt="ডাঃ অনুরাগ মজুমদার"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg sm:text-xl text-slate-900 font-bengali-heading">ডাঃ অনুরাগ মজুমদার</h3>
                <p className="text-xs sm:text-sm text-[#0c6ba1] font-semibold">MBBS, MS (Ophthalmology)</p>
                <p className="text-sm text-slate-700 mt-1.5 leading-[1.75] font-medium">
                  মেডিকেল ডিরেক্টর ও সিনিয়র কনসালট্যান্ট (ফ্যাকো ও অ্যান্টেরিওর সেগমেন্ট সার্জারি)
                </p>
              </div>
            </div>

            {/* Doctor 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center space-y-3.5">
              <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-sky-300 bg-slate-100 shadow-inner">
                <Image
                  src="/images/Dr-Subrata.jpg"
                  alt="ডাঃ সুব্রত সাহা"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg sm:text-xl text-slate-900 font-bengali-heading">ডাঃ সুব্রত সাহা</h3>
                <p className="text-xs sm:text-sm text-[#0c6ba1] font-semibold">MBBS, MS (Ophthalmology)</p>
                <p className="text-sm text-slate-700 mt-1.5 leading-[1.75] font-medium">
                  চিফ অপারেটিং অফিসার ও সিনিয়র আই সার্জন (ফ্যাকো ও রিফ্র্যাক্টিভ সার্জারি)
                </p>
              </div>
            </div>

            {/* Doctor 3 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center space-y-3.5">
              <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-sky-300 bg-slate-100 shadow-inner">
                <Image
                  src="/images/Dr-Kaushick-1.jpg"
                  alt="ডাঃ কৌশিক বিশ্বাস"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg sm:text-xl text-slate-900 font-bengali-heading">ডাঃ কৌশিক বিশ্বাস</h3>
                <p className="text-xs sm:text-sm text-[#0c6ba1] font-semibold">MBBS, MS, DNB</p>
                <p className="text-sm text-slate-700 mt-1.5 leading-[1.75] font-medium">
                  সিনিয়র ভিট্রেও-রেটিনা সার্জন ও রেটিনোপ্যাথি বিশেষজ্ঞ (শঙ্কর নেত্রালয় ফেলো)
                </p>
              </div>
            </div>

            {/* Doctor 4 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm text-center space-y-3.5">
              <div className="relative w-28 h-28 mx-auto rounded-full overflow-hidden border-2 border-sky-300 bg-slate-100 shadow-inner">
                <Image
                  src="/images/Dr-paruldeep.jpg"
                  alt="ডাঃ পারুলদীপ চাকমা"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-bold text-lg sm:text-xl text-slate-900 font-bengali-heading">ডাঃ পারুলদীপ চাকমা</h3>
                <p className="text-xs sm:text-sm text-[#0c6ba1] font-semibold">MBBS, MS, FAEH</p>
                <p className="text-sm text-slate-700 mt-1.5 leading-[1.75] font-medium">
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

            <blockquote className="text-base sm:text-[19px] text-slate-800 leading-[2.0] font-normal">
              &ldquo;আমার বাবার রেটিনা হঠাৎ ছিঁড়ে যাওয়ার পর আমরা ভীষণ দুশ্চিন্তায় পড়েছিলাম। কলকাতায় যাওয়ার প্রস্তুতি নিতেই অনেক দিন লেগে যেত। পরে একজন আত্মীয়ের মাধ্যমে আগরতলা অশ্বিনী নেত্রালয়ের কথা জানতে পেরে কুমিল্লা থেকে মাত্র ২ ঘণ্টায় চলে আসি। ডাঃ কৌশিক বিশ্বাস পরের দিনই সফলভাবে রেটিনা সার্জারি করেন। ভাষা, আদর-যত্ন এবং চিকিৎসা খরচ—সবদিক থেকে এটি আমাদের সেরা অভিজ্ঞতা ছিল।&rdquo;
            </blockquote>

            <div className="pt-3 border-t border-sky-100 flex items-center justify-between flex-wrap gap-2 text-sm">
              <div>
                <p className="font-bold text-slate-900 text-base sm:text-lg font-bengali-heading">আনোয়ারুল ইসলাম (রোগীর পুত্র)</p>
                <p className="text-slate-600 text-sm sm:text-[15px]">কুমিল্লা, বাংলাদেশ</p>
              </div>
              <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold text-xs sm:text-sm">
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
            <span className="text-sm sm:text-[15px] font-bold tracking-normal text-[#0c6ba1] bg-sky-100 px-4 py-2 rounded-full inline-block">
              সচরাচর জিজ্ঞাসিত প্রশ্ন
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-normal leading-snug font-bengali-heading">
              বাংলাদেশী রোগীদের প্রচলিত প্রশ্নের উত্তর
            </h2>
          </div>

          <div className="space-y-4">
            {bangladeshFaqs.map((faq, idx) => (
              <details
                key={idx}
                className="group border border-slate-200/90 rounded-2xl bg-white overflow-hidden shadow-xs"
              >
                <summary className="flex items-center justify-between p-5 sm:p-6 font-bold text-base sm:text-lg text-slate-900 cursor-pointer list-none hover:bg-slate-50 transition-colors tracking-normal font-bengali-heading">
                  <span className="flex items-start gap-3 pr-4">
                    <HelpCircle className="w-5 h-5 text-[#0c6ba1] shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform shrink-0" />
                </summary>
                <div className="px-6 pb-6 pt-1 text-[15px] sm:text-base text-slate-700 leading-[1.95] border-t border-slate-100 pl-6 sm:pl-12 font-normal">
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-sky-200 text-xs sm:text-sm font-semibold backdrop-blur-md tracking-normal">
            <span>সরাসরি আন্তর্জাতিক রোগী সহায়তা ডেস্ক</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-normal leading-snug text-white font-bengali-heading">
            চোখের যেকোনো সমস্যার জন্য আজই আমাদের সাথে যোগাযোগ করুন
          </h2>

          <p className="text-base sm:text-[18px] text-white/95 max-w-2xl mx-auto leading-[1.95] font-normal sm:font-medium">
            আপনার পুরনো প্রেসক্রিপশন বা চোখের রিপোর্ট হোয়াটসঅ্যাপে পাঠিয়ে বিনামূল্যে চিকিৎসকের প্রাথমিক পরামর্শ ও চিকিৎসা খরচের ধারণা নিন।
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <a
              href={whatsappPreFilledUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-sm sm:text-base rounded-full shadow-xl shadow-emerald-950/40 transition-all transform active:scale-95"
            >
              <MessageCircle className="w-5 h-5" />
              <span>হোয়াটসঅ্যাপে চ্যাট করুন: +91 92336 17885</span>
            </a>

            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 hover:bg-slate-100 font-bold text-sm sm:text-base rounded-full transition-colors shadow-md"
            >
              <Phone className="w-4 h-4 text-[#1c88c6]" />
              <span>কল করুন: {siteConfig.phone}</span>
            </a>
          </div>

          <div className="pt-6 border-t border-white/10 text-xs sm:text-sm text-sky-200 space-y-1.5">
            <p className="font-semibold text-white text-sm sm:text-base font-bengali-heading">📍 অশ্বিনী নেত্রালয় (Ashvini Netralaya)</p>
            <p className="text-sky-100">বিজয়কুমার চৌমুহনী, আগরতলা, ত্রিপুরা – ৭৯৯০০১ (আখাউড়া সীমান্ত থেকে মাত্র ১৫ মিনিট)</p>
            <p className="text-sky-200 text-xs pt-1">ওপিডি সময়: সোম – শনি (সকাল ৯:০০ – সন্ধ্যা ৭:০০)</p>
          </div>
        </div>
      </section>
    </div>
  );
}
