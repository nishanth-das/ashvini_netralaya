import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Clock,
  Activity,
  CheckCircle2,
  Calendar,
  Phone,
  ArrowRight,
  ChevronRight,
  HelpCircle,
  UserCheck,
  Stethoscope,
  Microscope,
  FileCheck2,
  Sparkles,
  AlertCircle,
  Eye,
  Star,
  Layers,
} from "lucide-react";
import { servicesData, ServiceItem } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return servicesData.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const title = `${service.title} in Agartala, Tripura | Ashvini Netralaya`;
  const description = `${service.shortDescription} Performed at Ashvini Netralaya, Tripura’s 1st NABH-accredited eye hospital. Advanced technology, cashless insurance & experienced surgeons.`;

  return {
    title,
    description,
    keywords: [
      service.title,
      `${service.title} in Agartala`,
      `${service.title} cost in Tripura`,
      "Best Eye Hospital in Agartala",
      "Ashvini Netralaya",
      "Ophthalmologist Agartala",
      "Eye specialist Tripura",
    ],
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/services/${service.slug}`,
      images: [
        {
          url: `${siteConfig.url}${service.image}`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    alternates: {
      canonical: `${siteConfig.url}/services/${service.slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const relatedServices = servicesData
    .filter((s) => s.slug !== service.slug)
    .slice(0, 3);

  const whatsappServiceUrl = `https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}&text=${encodeURIComponent(
    `Hello Ashvini Netralaya, I would like to book a consultation / inquiry regarding ${service.title}. Please provide available OPD slots.`
  )}`;

  const procedureSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: service.title,
    procedureType: "SurgicalProcedure",
    description: service.shortDescription,
    bodyLocation: "Eye",
    preparation: service.preOpInstructions?.join("; ") || service.anesthesia,
    howPerformed: service.procedureSteps?.map((step) => `${step.title}: ${step.desc}`).join(" "),
    followup: service.recoveryTime,
    provider: {
      "@type": "Hospital",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.pincode,
        addressCountry: "IN",
      },
    },
  };

  const faqSchema = service.faqs?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      }
    : null;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(procedureSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* 1. Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-200/70 py-3">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-xs font-medium text-slate-500 flex items-center gap-1.5 flex-wrap">
          <Link href="/" className="hover:text-[#1c88c6] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/our-services-2" className="hover:text-[#1c88c6] transition-colors">
            Services
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="text-slate-800 font-semibold">{service.title}</span>
        </div>
      </div>

      {/* 2. Hero Section */}
      <section className="relative pt-10 pb-14 lg:pt-14 lg:pb-16 bg-gradient-to-b from-sky-50/60 via-white to-white border-b border-slate-100 overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-100 text-[#1c88c6] text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{service.category} Speciality</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-[#20c997] border border-emerald-200/80 text-xs font-bold uppercase tracking-wider">
                  <Award className="w-3.5 h-3.5" />
                  <span>Tripura&apos;s 1st NABH Hospital</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-serif font-bold text-[#1e293b] tracking-tight leading-tight">
                {service.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                {service.shortDescription}
              </p>

              {/* Quick Spec Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {service.procedureTime && (
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Duration
                    </p>
                    <p className="text-xs sm:text-[13px] font-bold text-slate-800 mt-0.5">
                      {service.procedureTime}
                    </p>
                  </div>
                )}
                {service.anesthesia && (
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Anesthesia
                    </p>
                    <p className="text-xs sm:text-[13px] font-bold text-slate-800 mt-0.5 truncate">
                      {service.anesthesia}
                    </p>
                  </div>
                )}
                {service.hospitalStay && (
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Hospital Stay
                    </p>
                    <p className="text-xs sm:text-[13px] font-bold text-slate-800 mt-0.5 truncate">
                      {service.hospitalStay}
                    </p>
                  </div>
                )}
                {service.recoveryTime && (
                  <div className="p-3.5 rounded-xl bg-white border border-slate-200/80 shadow-sm">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                      Recovery
                    </p>
                    <p className="text-xs sm:text-[13px] font-bold text-slate-800 mt-0.5 truncate">
                      {service.recoveryTime}
                    </p>
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-3 flex flex-wrap items-center gap-3">
                <a
                  href={whatsappServiceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 bg-[#1c88c6] hover:bg-[#1578b0] text-white font-semibold text-xs sm:text-sm rounded-full shadow-md shadow-sky-700/20 transition-all active:scale-95"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Consultation via WhatsApp</span>
                </a>
                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 font-semibold text-xs sm:text-sm rounded-full transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#1c88c6]" />
                  <span>Call: {siteConfig.phone}</span>
                </a>
              </div>
            </div>

            {/* Right Clinical Image */}
            <div className="lg:col-span-5">
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.08)] border-4 border-white bg-slate-100">
                <Image
                  src={service.image}
                  alt={`${service.title} at Ashvini Netralaya Agartala`}
                  fill
                  className="object-cover object-center"
                  priority
                  sizes="(max-width: 1024px) 100vw, 42vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2b. In-Page Sticky Navigation Bar */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-1 sm:gap-2 overflow-x-auto py-2.5 scrollbar-none text-xs font-semibold text-slate-600">
            <a
              href="#overview"
              className="px-3 py-1.5 rounded-full hover:bg-sky-50 hover:text-[#1c88c6] whitespace-nowrap transition-colors"
            >
              Overview
            </a>
            <a
              href="#benefits"
              className="px-3 py-1.5 rounded-full hover:bg-sky-50 hover:text-[#1c88c6] whitespace-nowrap transition-colors"
            >
              Advantages
            </a>
            <a
              href="#symptoms"
              className="px-3 py-1.5 rounded-full hover:bg-sky-50 hover:text-[#1c88c6] whitespace-nowrap transition-colors"
            >
              Symptoms &amp; Warning Signs
            </a>
            {service.comparisonTable && (
              <a
                href="#options"
                className="px-3 py-1.5 rounded-full hover:bg-sky-50 hover:text-[#1c88c6] whitespace-nowrap transition-colors"
              >
                Comparison Matrix
              </a>
            )}
            {service.procedureSteps && service.procedureSteps.length > 0 && (
              <a
                href="#protocol"
                className="px-3 py-1.5 rounded-full hover:bg-sky-50 hover:text-[#1c88c6] whitespace-nowrap transition-colors"
              >
                Procedure Protocol
              </a>
            )}
            {service.recoveryTimeline && (
              <a
                href="#recovery"
                className="px-3 py-1.5 rounded-full hover:bg-sky-50 hover:text-[#1c88c6] whitespace-nowrap transition-colors"
              >
                Recovery &amp; Care
              </a>
            )}
            {service.technologyDetails && (
              <a
                href="#technology"
                className="px-3 py-1.5 rounded-full hover:bg-sky-50 hover:text-[#1c88c6] whitespace-nowrap transition-colors"
              >
                Technology
              </a>
            )}
            {service.faqs && (
              <a
                href="#faqs"
                className="px-3 py-1.5 rounded-full hover:bg-sky-50 hover:text-[#1c88c6] whitespace-nowrap transition-colors"
              >
                FAQs
              </a>
            )}
            <a
              href="#booking"
              className="ml-auto px-4 py-1.5 rounded-full bg-[#1c88c6] text-white hover:bg-[#1578b0] whitespace-nowrap shadow-xs transition-all flex items-center gap-1.5 font-bold"
            >
              <span>Consult Now</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </a>
          </nav>
        </div>
      </div>

      {/* 3. Main Clinical Layout: Content + Sticky Sidebar */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Main Content Area */}
            <div className="lg:col-span-8 space-y-12">
              {/* Clinical Overview */}
              <div id="overview" className="scroll-mt-20 space-y-4">
                <span className="text-xs font-bold text-[#1c88c6] uppercase tracking-wider block">
                  Detailed Medical Guide
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-sans">
                  Clinical Overview &amp; Treatment Method
                </h2>
                <div className="space-y-3.5 text-sm sm:text-base text-slate-700 leading-relaxed pt-1">
                  {service.description.split("\n\n").map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              {service.benefits && service.benefits.length > 0 && (
                <div id="benefits" className="scroll-mt-20 space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 font-sans">
                    Key Clinical Advantages at Ashvini Netralaya
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.benefits.map((b, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-xs sm:text-sm text-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#20c997] shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Symptoms / Warning Signs */}
              {service.symptoms && service.symptoms.length > 0 && (
                <div id="symptoms" className="scroll-mt-20 p-6 sm:p-8 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-4">
                  <div className="flex items-center gap-2.5 text-amber-900">
                    <AlertCircle className="w-5 h-5 text-amber-600 shrink-0" />
                    <h3 className="text-lg sm:text-xl font-bold font-sans">
                      Symptoms &amp; When to Consult an Eye Specialist
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    If you or your family members in Agartala or Tripura experience any of the following indications, we strongly advise scheduling an evaluation:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                    {service.symptoms.map((sym, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0"></span>
                        <span>{sym}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Candidate Criteria */}
              {service.candidateCriteria && service.candidateCriteria.length > 0 && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-slate-900 font-sans">
                    Who is an Ideal Candidate for this Procedure?
                  </h3>
                  <div className="space-y-2.5">
                    {service.candidateCriteria.map((c, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#1c88c6] shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Comparison Table (If Available) */}
              {service.comparisonTable && (
                <div id="options" className="scroll-mt-20 space-y-4 pt-2">
                  <div className="space-y-1">
                    <span className="text-xs font-bold text-[#1c88c6] uppercase tracking-wider block">
                      Options &amp; Technology
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 font-sans">
                      {service.comparisonTable.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      {service.comparisonTable.description}
                    </p>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                          <th className="p-3.5">Option / Type</th>
                          <th className="p-3.5">Vision Range</th>
                          <th className="p-3.5">Night Glare</th>
                          <th className="p-3.5">Spectacle Freedom</th>
                          <th className="p-3.5">Ideal Candidate</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700">
                        {service.comparisonTable.items.map((item, idx) => (
                          <tr key={idx} className="hover:bg-sky-50/40 transition-colors">
                            <td className="p-3.5 font-bold text-slate-900">
                              <div>{item.name}</div>
                              {item.tag && (
                                <span className="inline-block px-2 py-0.5 text-[10px] rounded-full bg-sky-100 text-[#1c88c6] mt-1 font-semibold">
                                  {item.tag}
                                </span>
                              )}
                            </td>
                            <td className="p-3.5">{item.visionRange}</td>
                            <td className="p-3.5">{item.nightGlare}</td>
                            <td className="p-3.5">{item.spectacleFreedom}</td>
                            <td className="p-3.5 text-slate-600">{item.bestFor}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Step-by-Step Surgical & Diagnostic Protocol */}
              {service.procedureSteps && service.procedureSteps.length > 0 && (
                <div id="protocol" className="scroll-mt-20 space-y-6 pt-2">
                  <div>
                    <span className="text-xs font-bold text-[#1c88c6] uppercase tracking-wider block mb-1">
                      Clinical Walkthrough
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 font-sans">
                      Step-by-Step Procedure at Ashvini Netralaya
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1">
                      Conducted in our modular NABH-accredited operating theatres or diagnostic laboratories with zero-infection sterilization protocols.
                    </p>
                  </div>

                  <div className="space-y-4">
                    {service.procedureSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-4 p-5 rounded-2xl border border-slate-200 bg-white hover:border-sky-300 transition-colors shadow-sm"
                      >
                        <div className="w-9 h-9 rounded-full bg-[#1c88c6] text-white flex items-center justify-center font-bold text-sm shrink-0">
                          {idx + 1}
                        </div>
                        <div className="space-y-1 flex-1">
                          <div className="flex items-center justify-between gap-2 flex-wrap">
                            <h4 className="font-bold text-base text-slate-900">
                              {step.title}
                            </h4>
                            {step.duration && (
                              <span className="text-[11px] font-semibold text-slate-400 bg-slate-100 px-2.5 py-0.5 rounded-full">
                                {step.duration}
                              </span>
                            )}
                          </div>
                          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Recovery Timeline (If Available) */}
              {service.recoveryTimeline && (
                <div id="recovery" className="scroll-mt-20 space-y-6 pt-2">
                  <div>
                    <span className="text-xs font-bold text-[#20c997] uppercase tracking-wider block mb-1">
                      Post-Op Healing
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 font-sans">
                      Recovery Timeline &amp; Visual Milestones
                    </h3>
                  </div>

                  <div className="space-y-4 border-l-2 border-sky-200 pl-4 sm:pl-6 ml-3 sm:ml-4">
                    {service.recoveryTimeline.map((milestone, idx) => (
                      <div key={idx} className="relative space-y-2 pb-6 last:pb-0">
                        <div className="absolute -left-[23px] sm:-left-[31px] top-1 w-4 h-4 rounded-full bg-[#1c88c6] border-2 border-white shadow-sm" />
                        <span className="text-xs font-bold text-[#1c88c6] uppercase tracking-wider">
                          {milestone.timeframe}
                        </span>
                        <h4 className="font-bold text-base text-slate-900">
                          {milestone.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                          {milestone.description}
                        </p>
                        <ul className="space-y-1.5 pt-1 text-xs text-slate-700">
                          {milestone.activities.map((act, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#20c997]"></span>
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pre & Post Operative Guidelines Cards */}
              {(service.preOpInstructions || service.postOpCare) && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                  {service.preOpInstructions && (
                    <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                      <h4 className="font-bold text-base text-slate-900 flex items-center gap-2">
                        <FileCheck2 className="w-4 h-4 text-[#1c88c6]" />
                        <span>Pre-Procedure Preparation</span>
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-600">
                        {service.preOpInstructions.map((inst, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#1c88c6] font-bold mt-0.5">•</span>
                            <span>{inst}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {service.postOpCare && (
                    <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200/70 space-y-3">
                      <h4 className="font-bold text-base text-emerald-950 flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-[#20c997]" />
                        <span>Post-Procedure Guidelines</span>
                      </h4>
                      <ul className="space-y-2 text-xs text-slate-700">
                        {service.postOpCare.map((care, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-[#20c997] font-bold mt-0.5">•</span>
                            <span>{care}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Technology & Infrastructure Details */}
              {service.technologyDetails && service.technologyDetails.length > 0 && (
                <div id="technology" className="scroll-mt-20 space-y-4 pt-2">
                  <h3 className="text-xl font-bold text-slate-900 font-sans">
                    Precision Equipment &amp; Technological Advantage
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.technologyDetails.map((tech, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-xl border border-slate-200/80 bg-slate-50/60 space-y-2"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="font-bold text-sm sm:text-base text-slate-900">
                            {tech.name}
                          </h4>
                          <span className="text-[10px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                            {tech.maker}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {tech.advantage}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Patient Testimonial Quote */}
              {service.patientReview && (
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-sky-50 via-slate-50 to-white border border-sky-100 space-y-3">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="italic text-slate-700 text-sm sm:text-[15px] leading-relaxed">
                    &ldquo;{service.patientReview.quote}&rdquo;
                  </p>
                  <div className="pt-2 text-xs">
                    <span className="font-bold text-slate-900 block">
                      {service.patientReview.patientName}
                    </span>
                    <span className="text-slate-500">
                      {service.patientReview.location} •{" "}
                      <span className="text-[#1c88c6] font-semibold">
                        {service.patientReview.outcome}
                      </span>
                    </span>
                  </div>
                </div>
              )}

              {/* In-Depth FAQ Interactive Disclosure */}
              {service.faqs && service.faqs.length > 0 && (
                <div id="faqs" className="scroll-mt-20 space-y-4 pt-2">
                  <h3 className="text-2xl font-bold text-slate-900 font-sans">
                    Frequently Asked Questions About {service.title}
                  </h3>

                  <div className="space-y-3">
                    {service.faqs.map((faq, i) => (
                      <details
                        key={i}
                        className="group border border-slate-200 rounded-xl bg-white overflow-hidden shadow-xs"
                      >
                        <summary className="flex items-center justify-between p-4 sm:p-5 font-bold text-sm sm:text-base text-slate-900 cursor-pointer list-none hover:bg-slate-50 transition-colors">
                          <span className="flex items-start gap-2.5 pr-4">
                            <HelpCircle className="w-4 h-4 text-[#1c88c6] shrink-0 mt-1" />
                            <span>{faq.question}</span>
                          </span>
                          <ChevronRight className="w-4 h-4 text-slate-400 group-open:rotate-90 transition-transform shrink-0" />
                        </summary>
                        <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pl-11">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sticky Right Consultation Sidebar */}
            <div id="booking" className="lg:col-span-4 space-y-6 scroll-mt-20">
              <div className="sticky top-20 bg-white rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xl space-y-6">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-[#1c88c6] uppercase tracking-wider">
                    Quick Booking
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    Schedule Your Consultation
                  </h3>
                  <p className="text-xs text-slate-500">
                    Direct access to Ashvini Netralaya’s specialist ophthalmology team in Agartala.
                  </p>
                </div>

                {/* Surgeon In Charge Box */}
                {service.doctorInCharge && (
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 space-y-1.5">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                      Lead Operating Surgeon
                    </span>
                    <p className="text-sm font-bold text-slate-900">
                      {service.doctorInCharge}
                    </p>
                    {service.doctorCredentials && (
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {service.doctorCredentials}
                      </p>
                    )}
                  </div>
                )}

                {/* Direct Action Buttons */}
                <div className="space-y-3">
                  <a
                    href={whatsappServiceUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all active:scale-95"
                  >
                    <span>Instant WhatsApp Consultation</span>
                  </a>

                  <a
                    href={`tel:${siteConfig.phoneClean}`}
                    className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#1c88c6] hover:bg-[#1578b0] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all active:scale-95"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Care Desk: {siteConfig.phone}</span>
                  </a>
                </div>

                {/* Insurance & Quality Assurance */}
                <div className="pt-4 border-t border-slate-100 space-y-2.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2.5">
                    <ShieldCheck className="w-4 h-4 text-[#1c88c6]" />
                    <span className="font-semibold">NABH-Accredited Quality Standard</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Award className="w-4 h-4 text-[#20c997]" />
                    <span className="font-semibold">Cashless Mediclaim &amp; TPAs Accepted</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#20c997]" />
                    <span>Sarva Drishti Yojana Financial Aid</span>
                  </div>
                </div>

                {/* Hospital Hours Box */}
                <div className="p-4 rounded-xl bg-sky-50/70 border border-sky-100 text-xs text-slate-700 space-y-1">
                  <p className="font-bold text-[#1c88c6]">OPD Consultation Hours</p>
                  <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
                  <p className="text-[11px] text-slate-500">Emergency Eye Trauma: 24/7</p>
                  <p className="pt-1.5 font-semibold text-slate-800 text-[11px]">
                    📍 {siteConfig.address.full}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Related Clinical Services Grid */}
      <section className="py-14 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-xs font-bold text-[#1c88c6] uppercase tracking-wider block">
                Related Care
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-sans">
                Other Specialities at Ashvini Netralaya
              </h3>
            </div>
            <Link
              href="/our-services-2"
              className="text-xs font-semibold text-[#1c88c6] hover:underline inline-flex items-center gap-1"
            >
              <span>View All 16 Services</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedServices.map((rel) => (
              <Link
                key={rel.id}
                href={`/services/${rel.slug}`}
                className="bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-lg transition-all p-5 flex flex-col justify-between group"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-[#1c88c6] uppercase tracking-wider">
                    {rel.category}
                  </span>
                  <h4 className="font-bold text-base text-slate-900 group-hover:text-[#1c88c6] transition-colors leading-snug">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {rel.shortDescription}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#1c88c6]">
                  <span>Explore Procedure</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
