"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  Award,
  Users,
  Heart,
  Star,
  Activity,
  Microscope,
  Eye,
  CheckCircle2,
  Calendar,
  Clock,
  Phone,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Building2,
  Stethoscope,
  Sparkles,
  MapPin,
  MessageCircle,
  FileCheck2,
  Check,
  ChevronDown,
  ChevronUp,
  Zap,
  BadgeCheck,
  Layers,
  ArrowUpRight,
  HelpCircle,
  HeartPulse,
  Syringe,
} from "lucide-react";
import { useBooking } from "@/components/AppWrapper";
import { inHouseDoctors, visitingConsultants, Doctor } from "@/data/doctors";
import { siteConfig } from "@/data/siteConfig";
import { reviewsData } from "@/data/reviews";

// Subspeciality Suites data
const clinicalSuites = [
  {
    id: "cataract",
    title: "Cataract & Lens Replacement",
    badge: "Alcon Centurion® MICS",
    tagline: "Stitchless Micro-Incision Phacoemulsification",
    description:
      "Precision cataract removal through a self-sealing 1.8mm to 2.2mm micro-incision using active-fluidics technology. Implantation of premium foldable Monofocal, Toric, and Trifocal/EDOF intraocular lenses with same-day recovery.",
    highlights: [
      "15-Minute Stitchless Day-Care Procedure",
      "Topical Anesthetic (100% Needle-Free & Injection-Free)",
      "Zero Eye Patches & Rapid 24-48h Visual Recovery",
      "Carl Zeiss & Alcon Foldable Hydrophobic IOLs",
    ],
    duration: "10-15 Mins",
    recovery: "24-48 Hours",
    inCharge: "Dr. Anurag Majumdar",
    slug: "cataract-surgery-phaco",
    image: "/images/WhatsApp-Image-2023-06-03-at-2.27.43-AM-1.jpeg",
  },
  {
    id: "retina",
    title: "Vitreo-Retina & Macular Center",
    badge: "Zeiss Cirrus HD-OCT",
    tagline: "Advanced Medical & Surgical Retinal Care",
    description:
      "Comprehensive management of diabetic retinopathy, retinal detachments, macular holes, vein occlusions, and age-related macular degeneration (AMD) utilizing ultra-high resolution HD-OCT imaging and intravitreal anti-VEGF therapies.",
    highlights: [
      "Zeiss Cirrus HD-OCT Cross-Sectional Retinal Scans",
      "Green Laser Photocoagulation & Vitrectomy",
      "Anti-VEGF Therapies (Lucentis, Accentrix, Eylea)",
      "Minimally Invasive Sutureless Vitrectomy (MIVS)",
    ],
    duration: "30-60 Mins",
    recovery: "3-7 Days",
    inCharge: "Dr. Kaushick Biswas / Dr. Surendra Prakash",
    slug: "retina-surgeries",
    image: "/images/WhatsApp-Image-2023-06-03-at-2.13.30-AM.jpeg",
  },
  {
    id: "paediatric",
    title: "Paediatric Ophthalmology & Squint",
    badge: "Dedicated Child Suite",
    tagline: "Specialized Vision Care for Children & Adolescents",
    description:
      "Child-centric ophthalmic diagnostics and corrective microsurgeries addressing amblyopia (lazy eye), pediatric cataracts, congenital nasolacrimal duct obstructions, refractive errors, and eye muscle alignment (strabismus).",
    highlights: [
      "Child-Friendly Non-Invasive Vision Screening",
      "Amblyopia (Lazy Eye) Occlusion & Orthoptic Therapy",
      "Micro-Incision Squint (Strabismus) Alignment",
      "Congenital Cataract & Pediatric Eyewear Dispensing",
    ],
    duration: "Custom Triage",
    recovery: "Immediate - 48h",
    inCharge: "Dr. Paichainda Mog",
    slug: "paediatric-eye-care",
    image: "/images/little-girl-checking-up-her-sight-ophthalmology-center-1-1-scaled.jpg",
  },
  {
    id: "glaucoma",
    title: "Glaucoma & Neuro-Ophthalmology",
    badge: "Humphrey Field Analyzer HFA3",
    tagline: "Preserving the Optic Nerve & Halting Silent Vision Loss",
    description:
      "Comprehensive screening and surgical interventions for open-angle, narrow-angle, and congenital glaucoma. Early detection through retinal nerve fiber layer (RNFL) mapping, pachymetry, Goldmann tonometry, and laser iridotomy.",
    highlights: [
      "Gold Standard Humphrey Automated Perimetry (HFA3)",
      "Selective Laser Trabeculoplasty (SLT) & YAG Iridotomy",
      "Trabeculectomy with Mitomycin-C & Ologen Implants",
      "Continuous IOP Tracking & Neuroprotective Regimens",
    ],
    duration: "20-45 Mins",
    recovery: "24-72 Hours",
    inCharge: "Dr. Paruldeep Chakma",
    slug: "glaucoma-surgeries",
    image: "/images/WhatsApp-Image-2023-06-03-at-2.30.23-AM-1.jpeg",
  },
  {
    id: "cornea",
    title: "Cornea & Ocular Surface Clinic",
    badge: "Precision Corneal Topography",
    tagline: "Restoring Corneal Clarity & Comfort",
    description:
      "Dedicated subspeciality clinic managing corneal infections, dystrophies, keratoconus, chemical ocular trauma, severe dry eye disease, and pterygium removal with sutureless conjunctival autografts using medical fibrin glue.",
    highlights: [
      "Corneal Topography & Keratoconus Collagen Cross-Linking",
      "Sutureless Pterygium Excision with Fibrin Glue Autograft",
      "Amniotic Membrane Transplantation for Ocular Trauma",
      "Advanced Dry Eye Clinic & Punctal Occlusion",
    ],
    duration: "20-30 Mins",
    recovery: "48 Hours",
    inCharge: "Dr. John Sarkar",
    slug: "corneal-topography",
    image: "/images/female-doctor-working-her-ophthalmology-clinic-1-1-scaled.jpg",
  },
  {
    id: "oculoplasty",
    title: "Oculoplasty & Facial Aesthetics",
    badge: "Microsurgical Reconstruction",
    tagline: "Functional & Aesthetic Eyelid and Orbital Surgery",
    description:
      "Restorative and cosmetic surgery of the eyelids, lacrimal (tear) drainage system, and orbit. Specialized treatments for droopy eyelids (ptosis), entropion, ectropion, eyelid tumors, and endoscopic DCR for chronic watering.",
    highlights: [
      "Ptosis Correction for Drooping Upper Eyelids",
      "External & Endonasal Dacryocystorhinostomy (DCR)",
      "Eyelid Tumor Resection & Aesthetic Reconstruction",
      "Botulinum Injections for Blepharospasm & Hemifacial Spasm",
    ],
    duration: "30-60 Mins",
    recovery: "3-5 Days",
    inCharge: "Dr. Isha Agarwalla",
    slug: "our-services-2",
    image: "/images/New-Project-1.png",
  },
];

// High-Tech Infrastructure Showcase
const infrastructureList = [
  {
    id: "laminar-ot",
    title: "Modular Laminar Flow Operation Theatre",
    maker: "International Cleanroom Standard",
    badge: "Class 10,000 Zero-Infection",
    description:
      "Surgical suites engineered with continuous ceiling-to-floor HEPA filtered air circulation, positive atmospheric pressure cascades, and anti-static seamless flooring to guarantee absolute surgical sterility.",
    statLabel: "Infection Rate",
    statValue: "0.00%",
    image: "/images/Why-us.jpg",
    specs: ["Class 10,000 HEPA Air Delivery", "Positive Atmospheric Pressure Cascade", "Continuous Sterile Laminar Air Flow", "Hermetically Sealed Touchless Doors"],
  },
  {
    id: "alcon-centurion",
    title: "Alcon Centurion® Vision System",
    maker: "Alcon Laboratories, USA",
    badge: "Phacoemulsification Gold Standard",
    description:
      "The pinnacle of active fluidics technology in cataract surgery. Dynamically responds to surgical vacuum fluctuations, maintaining physiological intraocular pressure and protecting delicate corneal endothelial cells.",
    statLabel: "Incision Size",
    statValue: "1.8 mm - 2.2 mm",
    image: "/images/WhatsApp-Image-2023-06-03-at-2.27.43-AM-1.jpeg",
    specs: ["Active Fluidics™ Real-time Chamber Stability", "Ozil® Torsional Ultrasound Efficiency", "Needle-Free Topical Anesthesia Safe", "Sub-2mm Micro-Incision Capability"],
  },
  {
    id: "zeiss-lumera",
    title: "Carl Zeiss Lumera® Surgical Microscope",
    maker: "Carl Zeiss Meditec, Germany",
    badge: "World Leader in Optics",
    description:
      "Equipped with patented Stereo Coaxial Illumination (SCI) providing unmatched red-reflex visualization even under dense, mature cataracts and complex retinal surgeries.",
    statLabel: "Optical Clarity",
    statValue: "Sub-Millimeter",
    image: "/images/IMG_5973-1-1-scaled.jpeg",
    specs: ["Stereo Coaxial Illumination (SCI) Technology", "Integrated High-Definition Surgical Video", "Deep Depth-of-Field Ergonomic Optics", "Apochromatic Multi-Coated Lens Array"],
  },
  {
    id: "zeiss-oct",
    title: "Zeiss Cirrus HD-OCT & Humphrey HFA3",
    maker: "Carl Zeiss Meditec, Germany",
    badge: "Cellular-Level Retinal Scans",
    description:
      "Ultra-high resolution spectral domain optical coherence tomography that captures micron-level cross-sections of the retina, macula, and optic nerve fiber layer for early detection of glaucoma and diabetes.",
    statLabel: "Scan Resolution",
    statValue: "5 Microns",
    image: "/images/IMG_5969-1-scaled.jpeg",
    specs: ["5-Micron Cross-Sectional Axial Resolution", "Macular Thickness & Glaucoma Guided Analysis", "Humphrey Automated Visual Field Perimetry", "Non-Contact Retinal Angiography Mapping"],
  },
];

// Patient Journey Steps
const patientJourney = [
  {
    step: "01",
    title: "Rapid Digital Triage & Diagnostics",
    desc: "Seamless digital registration followed by automated autorefraction, non-contact tonometry, and dilated retinal examination in our climate-controlled diagnostic suites.",
    time: "20 - 30 Mins",
  },
  {
    step: "02",
    title: "Specialist Clinical Consultation",
    desc: "Thorough biomicroscopic evaluation with your designated fellowship surgeon, reviewing high-definition scans and formulating your bespoke treatment roadmap.",
    time: "Detailed & Personal",
  },
  {
    step: "03",
    title: "Day-Care Stitchless Intervention",
    desc: "Comfortable, needle-free surgical intervention in our sterile Class 10,000 modular OT. Patients relax in private recovery suites and are discharged the same morning.",
    time: "15 - 45 Mins In OT",
  },
  {
    step: "04",
    title: "Concierge Post-Op Rehabilitation",
    desc: "Post-operative follow-up at 24 hours, direct surgeon helpline access, complimentary post-op eye kit, and lifelong digital ocular records.",
    time: "Ongoing Concierge Care",
  },
];

// Frequently Asked Questions
const corporateFaqs = [
  {
    q: "What does NABH accreditation mean for patients at Ashvini Netralaya?",
    a: "NABH (National Accreditation Board for Hospitals & Healthcare Providers) is India's highest clinical authority benchmark. Ashvini Netralaya is Tripura's first and only superspeciality eye hospital to attain this distinction, certifying that our surgical infection protocols, clinical safety measures, diagnostic accuracy, and patient rights meet rigorous national standards on par with premier medical institutions in Delhi, Mumbai, and Bangalore.",
  },
  {
    q: "Is cataract surgery performed stitchless and without painful injections?",
    a: "Yes. We perform Micro-Incision Cataract Surgery (MICS) via phacoemulsification through a microscopic 1.8mm–2.2mm self-sealing incision. The eye is anesthetized exclusively with topical numbing drops—meaning zero needle injections around the eye, zero stitches, zero bleeding, zero eye patches, and no overnight hospital stay. Most patients return to their routine desk work and reading within 24 to 48 hours.",
  },
  {
    q: "How does cashless treatment work under PM-JAY, CM-JAY, and private Mediclaim?",
    a: "Ashvini Netralaya has an in-house dedicated Cashless Insurance & Government Schemes Desk. For Ayushman Bharat PM-JAY and Tripura CM-JAY cardholders, eligible procedures (including cataract surgery) are completely cashless. For private health insurance (Star Health, ICICI Lombard, Care, MediBuddy, Vidal, etc.), our TPA coordinators handle pre-authorization approvals so you experience zero out-of-pocket hassle.",
  },
  {
    q: "What makes Ashvini Netralaya's Modular OT superior to standard operating rooms?",
    a: "Our modular operation theatres are engineered to international cleanroom Class 10,000 specifications. Air passes through medical-grade HEPA filters that eliminate 99.97% of airborne microbes and particulates. Constant positive pressure prevents outside air from entering, while anti-microbial wall cladding ensures absolute sterility and virtually eliminates the risk of endophthalmitis (post-surgical ocular infection).",
  },
  {
    q: "Can patients from Bangladesh or distant Tripura subdivisions easily consult here?",
    a: "Absolutely. Ashvini Netralaya is conveniently located in central Agartala at Bijoykumar Chowmuhani, Krishna Nagar—just 15 minutes from the Akhaura Integrated Checkpost (Bangladesh border) and 25 minutes from Maharaja Bir Bikram Airport (IXA). We offer same-day comprehensive evaluation and surgical scheduling for outstation patients to avoid unnecessary return travel.",
  },
  {
    q: "How can I book an appointment with a specific super-specialist surgeon?",
    a: "You can book directly via our online booking concierge, call our dedicated hospital desk at +91 92336 17885, or connect with our WhatsApp patient coordinators. Walk-in consultations are also accepted during regular OPD hours (Mon–Sat: 9:00 AM – 7:00 PM), while ocular trauma and retinal emergencies are triaged 24/7.",
  },
];

export default function Home2Page() {
  const { openBooking } = useBooking();
  const [activeSuite, setActiveSuite] = useState(clinicalSuites[0].id);
  const [activeInfra, setActiveInfra] = useState(infrastructureList[0].id);
  const [activeDoctorTab, setActiveDoctorTab] = useState<"inhouse" | "visiting">("inhouse");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Quick Triage Form state
  const [triageService, setTriageService] = useState("Cataract Surgery - Phaco");
  const [triageDoctor, setTriageDoctor] = useState("Any Available Specialist");

  const currentSuite = clinicalSuites.find((s) => s.id === activeSuite) || clinicalSuites[0];
  const currentInfra = infrastructureList.find((i) => i.id === activeInfra) || infrastructureList[0];

  const handleLaunchTriageBooking = (e: React.FormEvent) => {
    e.preventDefault();
    openBooking({
      service: triageService,
      doctor: triageDoctor !== "Any Available Specialist" ? triageDoctor : undefined,
    });
  };

  const handleDirectDoctorBook = (docName: string) => {
    openBooking({ doctor: docName });
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 selection:bg-[#1c88c6] selection:text-white">
      {/* ─────────────────────────────────────────────────────────────
          1. TOP INSTITUTIONAL PRESTIGE TICKER
      ───────────────────────────────────────────────────────────── */}
      <section className="bg-gradient-to-r from-[#030d1d] via-[#051833] to-[#030d1d] text-slate-200 border-b border-sky-900/40 py-2.5 px-4 text-xs">
        <div className="max-w-[1280px] mx-auto flex flex-wrap items-center justify-between gap-3 text-[11px] sm:text-xs">
          <div className="flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="font-semibold text-sky-300 tracking-wider uppercase text-[10px] sm:text-[11px]">
              Tripura’s 1st &amp; Only NABH-Accredited Superspeciality Eye Hospital
            </span>
          </div>

          <div className="flex items-center gap-5 text-slate-300">
            <div className="hidden md:flex items-center gap-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-sky-400" />
              <span>OPD Consultation: Mon - Sat 9:00 AM – 7:00 PM</span>
            </div>
            <span className="hidden md:inline text-slate-700">|</span>
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded-full bg-rose-950/80 text-rose-300 border border-rose-800/60 font-bold text-[10px] tracking-wide">
                24/7 TRAUMA READY
              </span>
              <a
                href={`tel:${siteConfig.phoneClean}`}
                className="font-bold text-white hover:text-sky-300 transition-colors flex items-center gap-1"
              >
                <Phone className="w-3 h-3 text-sky-400" />
                <span>{siteConfig.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. THE $100K EXECUTIVE HERO STAGE
      ───────────────────────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-b from-[#051226] via-[#091b35] to-[#0c2242] text-white pt-10 sm:pt-16 pb-20 sm:pb-28 overflow-hidden">
        {/* Subtle Architectural Glow & Grid Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#1c88c6_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.07] pointer-events-none" />
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#1c88c6] rounded-full blur-[140px] opacity-25 pointer-events-none" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-teal-500 rounded-full blur-[140px] opacity-15 pointer-events-none" />

        <div className="relative z-10 max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left: Editorial Authority */}
            <div className="lg:col-span-7 space-y-6">
              {/* Prestige Pill Badge */}
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-sky-950/80 border border-sky-500/30 text-sky-200 text-xs font-medium backdrop-blur-md shadow-inner">
                <span className="w-2 h-2 rounded-full bg-[#1c88c6] animate-pulse"></span>
                <span className="tracking-wide uppercase font-semibold text-[11px] text-sky-300">
                  NABH Accredited Center of Clinical Excellence
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-slate-300 text-[11px]">Agartala, Tripura</span>
              </div>

              {/* Master Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-sans font-extrabold text-white tracking-tight leading-[1.12]">
                Where Vision Science{" "}
                <span className="font-heading italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-300 block sm:inline">
                  Reaches Perfection.
                </span>
              </h1>

              {/* Lead Editorial Copy */}
              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                Tripura’s benchmark ophthalmic institute. Combining world-renowned{" "}
                <strong className="text-white font-semibold">Carl Zeiss German stereomicroscopy</strong> and{" "}
                <strong className="text-white font-semibold">Alcon USA active-fluidics</strong> with fellowship-trained
                surgeons to deliver stitchless, painless, precision eye surgery.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3.5">
                <button
                  onClick={() => openBooking()}
                  className="px-7 sm:px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#1c88c6] to-[#0284c7] hover:from-[#1677ae] hover:to-[#0275b0] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg shadow-sky-900/40 hover:shadow-sky-800/60 transition-all duration-200 active:scale-95 flex items-center gap-2 group border border-sky-400/30"
                >
                  <Calendar className="w-4 h-4 text-sky-200" />
                  <span>Schedule Consultation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <a
                  href="#suites"
                  className="px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm border border-white/20 transition-all duration-200 backdrop-blur-md flex items-center gap-2 hover:border-white/40"
                >
                  <span>Explore Subspeciality Suites</span>
                  <ChevronDown className="w-3.5 h-3.5 text-slate-300" />
                </a>
              </div>

              {/* Live Metric Ribbon */}
              <div className="pt-6 border-t border-slate-700/60 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 text-white">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-sans">
                    1.4 Lakhs+
                  </div>
                  <p className="text-xs text-sky-300 font-medium mt-0.5">Patients Treated</p>
                  <p className="text-[10px] text-slate-400">Tripura &amp; Bangladesh</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-teal-400 font-sans">
                    25,000+
                  </div>
                  <p className="text-xs text-sky-300 font-medium mt-0.5">Eye Surgeries</p>
                  <p className="text-[10px] text-slate-400">Stitchless &amp; Phaco</p>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-cyan-300 font-sans">
                    99.8%
                  </div>
                  <p className="text-xs text-sky-300 font-medium mt-0.5">Clinical Success</p>
                  <p className="text-[10px] text-slate-400">Zero-Infection Modular OT</p>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-amber-400">
                    <Star className="w-4 h-4 fill-amber-400" />
                    <span className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-sans">
                      4.8
                    </span>
                  </div>
                  <p className="text-xs text-sky-300 font-medium mt-0.5">Google Rating</p>
                  <p className="text-[10px] text-slate-400">4,100+ Reviews</p>
                </div>
              </div>
            </div>

            {/* Right: The High-Definition Facility Stage */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-[480px] lg:max-w-none">
                {/* Grand Frame */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-sky-400/30 shadow-2xl shadow-sky-950/70 bg-slate-900 aspect-[4/4.2]">
                  <Image
                    src="/images/Why-us.jpg"
                    alt="Ashvini Netralaya Modular Laminar Flow OT"
                    fill
                    className="object-cover object-center scale-[1.02] hover:scale-105 transition-transform duration-700"
                    priority
                    sizes="(max-width: 1024px) 100vw, 45vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                  {/* OT Info Bar inside image */}
                  <div className="absolute bottom-5 inset-x-5 text-white bg-slate-950/80 backdrop-blur-md p-4 rounded-2xl border border-white/15">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                        <span className="font-bold text-white text-xs uppercase tracking-wider">
                          Modular Laminar Flow OT
                        </span>
                      </div>
                      <span className="text-[10px] font-semibold text-teal-300 bg-teal-950/80 px-2 py-0.5 rounded-full border border-teal-800">
                        Class 10,000 HEPA
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-300 mt-1 leading-snug">
                      Ultra-sterile operating environment equipped with Carl Zeiss &amp; Alcon systems.
                    </p>
                  </div>
                </div>

                {/* Floating Seal 1: NABH Accreditation Stamp */}
                <div className="absolute -top-4 -left-4 sm:-top-5 sm:-left-5 bg-slate-950/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-2xl border border-sky-400/40 flex items-center gap-3 animate-float-slow">
                  <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-white flex items-center justify-center font-bold shadow-md shrink-0">
                    <ShieldCheck className="w-6 h-6 text-amber-100" />
                  </div>
                  <div>
                    <p className="font-extrabold text-xs sm:text-sm text-white leading-tight">
                      NABH Accredited
                    </p>
                    <p className="text-[10px] text-amber-400 font-semibold mt-0.5">
                      1st &amp; Only in Tripura
                    </p>
                  </div>
                </div>

                {/* Floating Seal 2: Fast-Track OPD Desk */}
                <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-slate-950/95 backdrop-blur-md py-3 px-4 rounded-2xl shadow-2xl border border-teal-500/40 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 text-white flex items-center justify-center font-bold shadow-md shrink-0">
                    <Award className="w-5 h-5 text-teal-100" />
                  </div>
                  <div>
                    <p className="font-bold text-xs text-white leading-tight">
                      Ayushman PM-JAY &amp; CM-JAY
                    </p>
                    <p className="text-[10px] text-teal-300 font-semibold mt-0.5">
                      100% Cashless Empanelled
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. FAST-TRACK APPOINTMENT CONCIERGE BAR
      ───────────────────────────────────────────────────────────── */}
      <section className="relative z-30 -mt-8 sm:-mt-12 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-2xl shadow-slate-900/10 border border-slate-200">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 mb-4 border-b border-slate-100">
            <div>
              <span className="text-[10px] font-extrabold tracking-wider uppercase text-[#1c88c6] block">
                Instant Appointment Concierge
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight font-sans">
                Book Your Priority Consultation in Agartala
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Zero Waiting Time With Online Booking • Dedicated Patient Coordinator</span>
            </div>
          </div>

          <form onSubmit={handleLaunchTriageBooking} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 sm:gap-4 items-end">
            {/* Field 1: Subspeciality */}
            <div className="lg:col-span-4 space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-[#1c88c6]" />
                <span>Select Clinical Service</span>
              </label>
              <select
                value={triageService}
                onChange={(e) => setTriageService(e.target.value)}
                className="w-full text-xs sm:text-sm font-medium bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1c88c6] focus:border-transparent transition"
              >
                <option value="Cataract Surgery - Phaco">Cataract Surgery - Phaco (Stitchless)</option>
                <option value="Retina Surgeries">Retina Surgeries &amp; Diabetic Care</option>
                <option value="Comprehensive Eye Checkup">Comprehensive Eye Checkup</option>
                <option value="Paediatric Eye Care">Paediatric Eye Care &amp; Squint</option>
                <option value="Glaucoma Surgeries">Glaucoma Evaluation &amp; Surgery</option>
                <option value="Optical Coherence Tomography (OCT)">Zeiss HD-OCT Retinal Imaging</option>
                <option value="Dry Eye Evaluation">Dry Eye Evaluation Clinic</option>
              </select>
            </div>

            {/* Field 2: Doctor Selection */}
            <div className="lg:col-span-4 space-y-1.5">
              <label className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                <Stethoscope className="w-3.5 h-3.5 text-[#1c88c6]" />
                <span>Select Specialist (Optional)</span>
              </label>
              <select
                value={triageDoctor}
                onChange={(e) => setTriageDoctor(e.target.value)}
                className="w-full text-xs sm:text-sm font-medium bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-[#1c88c6] focus:border-transparent transition"
              >
                <option value="Any Available Specialist">Next Available Specialist Surgeon</option>
                <option value="Dr. Anurag Majumdar">Dr. Anurag Majumdar (Cataract &amp; Phaco)</option>
                <option value="Dr. Subrata Saha">Dr. Subrata Saha (Anterior Segment)</option>
                <option value="Dr. Subhankar Debnath">Dr. Subhankar Debnath (Phaco)</option>
                <option value="Dr. Paruldeep Chakma">Dr. Paruldeep Chakma (Glaucoma)</option>
                <option value="Dr. Paichainda Mog">Dr. Paichainda Mog (Paediatric)</option>
                <option value="Dr. Kaushick Biswas">Dr. Kaushick Biswas (Retina Specialist)</option>
              </select>
            </div>

            {/* Field 3: Submit Action */}
            <div className="lg:col-span-4 flex gap-2">
              <button
                type="submit"
                className="w-full py-3 px-5 rounded-xl bg-[#1c88c6] hover:bg-[#1579b2] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Confirm Appointment</span>
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. INSTITUTIONAL ACCREDITATION & TRUST MATRIX
      ───────────────────────────────────────────────────────────── */}
      <section className="py-12 sm:py-16 bg-white border-b border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="text-[11px] font-bold text-[#1c88c6] uppercase tracking-widest block">
              Institutional Rigor &amp; Global Standards
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight font-sans mt-1">
              Tripura’s Most Rigorously Certified Ophthalmic Institution
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col items-center justify-center space-y-1.5 hover:border-sky-300 transition-colors">
              <ShieldCheck className="w-6 h-6 text-[#1c88c6]" />
              <p className="font-bold text-xs text-slate-900">NABH Accredited</p>
              <p className="text-[10px] text-slate-500">National Healthcare Board</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col items-center justify-center space-y-1.5 hover:border-emerald-300 transition-colors">
              <Award className="w-6 h-6 text-emerald-600" />
              <p className="font-bold text-xs text-slate-900">Ayushman PM-JAY</p>
              <p className="text-[10px] text-slate-500">Government Cashless</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col items-center justify-center space-y-1.5 hover:border-emerald-300 transition-colors">
              <FileCheck2 className="w-6 h-6 text-emerald-600" />
              <p className="font-bold text-xs text-slate-900">Tripura CM-JAY</p>
              <p className="text-[10px] text-slate-500">State Health Scheme</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col items-center justify-center space-y-1.5 hover:border-sky-300 transition-colors">
              <Microscope className="w-6 h-6 text-[#1c88c6]" />
              <p className="font-bold text-xs text-slate-900">Carl Zeiss Optics</p>
              <p className="text-[10px] text-slate-500">Oberkochen, Germany</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col items-center justify-center space-y-1.5 hover:border-cyan-300 transition-colors">
              <Activity className="w-6 h-6 text-cyan-600" />
              <p className="font-bold text-xs text-slate-900">Alcon Centurion</p>
              <p className="text-[10px] text-slate-500">Active Fluidics USA</p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/90 flex flex-col items-center justify-center space-y-1.5 hover:border-amber-300 transition-colors">
              <Star className="w-6 h-6 text-amber-500 fill-amber-400" />
              <p className="font-bold text-xs text-slate-900">4.8 / 5.0 Rating</p>
              <p className="text-[10px] text-slate-500">4,100+ Verified Reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. THE CLINICAL SUITES (INTERACTIVE CENTER OF EXCELLENCE)
      ───────────────────────────────────────────────────────────── */}
      <section id="suites" className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-2 text-[#1c88c6] text-xs font-bold uppercase tracking-widest mb-1.5">
                <span className="w-6 h-0.5 bg-[#1c88c6]"></span>
                <span>Centres of Clinical Excellence</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
                Six Specialized Ophthalmic Departments
              </h2>
              <p className="text-sm text-slate-500 mt-2 max-w-xl">
                Every subspeciality operates under dedicated fellowship surgeons utilizing FDA-approved micro-instrumentation and digital diagnostic mapping.
              </p>
            </div>

            <Link
              href="/our-services-2"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1c88c6] hover:text-[#1579b2] transition-colors"
            >
              <span>View Directory of All 16 Specialities</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Interactive Department Tab Ribbon */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none mb-8 border-b border-slate-200">
            {clinicalSuites.map((suite) => (
              <button
                key={suite.id}
                onClick={() => setActiveSuite(suite.id)}
                className={`px-4 sm:px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all duration-200 flex items-center gap-2 shrink-0 ${
                  activeSuite === suite.id
                    ? "bg-[#1c88c6] text-white shadow-md shadow-sky-600/30"
                    : "bg-white text-slate-600 hover:text-slate-900 border border-slate-200 hover:border-slate-300"
                }`}
              >
                <span>{suite.title}</span>
                <span
                  className={`text-[9px] uppercase px-1.5 py-0.5 rounded-full font-extrabold ${
                    activeSuite === suite.id
                      ? "bg-white/20 text-white"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {suite.badge.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>

          {/* Active Suite Editorial Showcase Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-xl shadow-slate-900/5">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Column: Clinical Narrative */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-sky-50 text-[#1c88c6] text-xs font-bold border border-sky-100">
                    {currentSuite.badge}
                  </span>
                  <span className="text-xs text-slate-400">•</span>
                  <span className="text-xs font-semibold text-slate-500">
                    Lead: {currentSuite.inCharge}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans tracking-tight">
                  {currentSuite.tagline}
                </h3>

                <p className="text-sm sm:text-[15px] text-slate-600 leading-relaxed">
                  {currentSuite.description}
                </p>

                {/* Clinical Highlights Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {currentSuite.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-semibold text-slate-800">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Procedure Metadata Strip */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-6 text-xs text-slate-600">
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Procedure Time</span>
                    <span className="font-bold text-slate-900">{currentSuite.duration}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Visual Recovery</span>
                    <span className="font-bold text-slate-900">{currentSuite.recovery}</span>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px] uppercase font-bold">Hospital Stay</span>
                    <span className="font-bold text-slate-900">Day-Care (Discharge in 2h)</span>
                  </div>
                </div>

                {/* Action CTAs */}
                <div className="pt-4 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => openBooking({ service: currentSuite.title })}
                    className="px-6 py-3 rounded-xl bg-[#1c88c6] hover:bg-[#1579b2] text-white font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-lg transition-all active:scale-95 flex items-center gap-2"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book For {currentSuite.title}</span>
                  </button>

                  <Link
                    href={`/services/${currentSuite.slug}`}
                    className="px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs transition-colors flex items-center gap-1.5"
                  >
                    <span>Full Medical Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Right Column: High-Res Clinical Image */}
              <div className="lg:col-span-5 relative">
                <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg border border-slate-200 bg-slate-100">
                  <Image
                    src={currentSuite.image}
                    alt={currentSuite.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                    <p className="font-bold">{currentSuite.title}</p>
                    <p className="text-[11px] text-slate-200">Superspeciality Care Unit • Ashvini Netralaya</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. THE SURGICAL COMMAND CENTER & HIGH-TECH INFRASTRUCTURE
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-[#051226] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1c88c6_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="relative z-10 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold text-sky-400 uppercase tracking-widest block">
              Advanced Surgical Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              The Surgical Command Center
            </h2>
            <p className="text-sm text-slate-300">
              Tripura’s standard-bearer in precision ophthalmic instrumentation, powered by world-leading American and German technologies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Interactive Infrastructure List */}
            <div className="lg:col-span-5 space-y-3">
              {infrastructureList.map((item) => (
                <div
                  key={item.id}
                  onClick={() => setActiveInfra(item.id)}
                  className={`p-5 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    activeInfra === item.id
                      ? "bg-slate-800/90 border-sky-400 shadow-lg shadow-sky-950/40"
                      : "bg-slate-900/40 border-slate-800 hover:bg-slate-800/50 hover:border-slate-700"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300">
                      {item.maker}
                    </span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-teal-950 text-teal-300 border border-teal-800 font-semibold">
                      {item.badge}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white font-sans">{item.title}</h4>
                  <p className="text-xs text-slate-400 line-clamp-2 mt-1">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Right: Active Deep-Dive Showcase */}
            <div className="lg:col-span-7 bg-slate-900/80 rounded-3xl p-6 sm:p-8 border border-sky-500/20 backdrop-blur-md">
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-6 border border-slate-700/60 bg-slate-950">
                <Image
                  src={currentInfra.image}
                  alt={currentInfra.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20 text-right">
                  <span className="text-[10px] uppercase font-bold text-sky-300 block">{currentInfra.statLabel}</span>
                  <span className="text-lg font-extrabold text-white">{currentInfra.statValue}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-sans">
                    {currentInfra.title}
                  </h3>
                  <span className="text-xs text-sky-300 font-medium">{currentInfra.maker}</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentInfra.description}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 border-t border-slate-800">
                  {currentInfra.specs.map((spec, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-200">
                      <Check className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. SURGICAL LEADERSHIP & MEDICAL DIRECTORATE
      ───────────────────────────────────────────────────────────── */}
      <section id="surgeons" className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-xs font-bold text-[#1c88c6] uppercase tracking-widest block">
              Directorate of Surgery &amp; Ophthalmology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
              Meet Our Specialist Surgeons
            </h2>
            <p className="text-sm text-slate-600">
              Fellowship-trained ophthalmic surgeons with decades of collective microsurgical mastery, trained across premier institutions in India.
            </p>

            {/* Doctor Tab Switcher */}
            <div className="inline-flex items-center p-1 bg-slate-100 rounded-full border border-slate-200 mt-2">
              <button
                onClick={() => setActiveDoctorTab("inhouse")}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                  activeDoctorTab === "inhouse"
                    ? "bg-[#1c88c6] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                In-House Faculty ({inHouseDoctors.length})
              </button>
              <button
                onClick={() => setActiveDoctorTab("visiting")}
                className={`px-6 py-2 rounded-full text-xs font-bold transition-all ${
                  activeDoctorTab === "visiting"
                    ? "bg-[#1c88c6] text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Visiting Super-Consultants ({visitingConsultants.length})
              </button>
            </div>
          </div>

          {/* Doctor Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {(activeDoctorTab === "inhouse" ? inHouseDoctors : visitingConsultants).map((doctor) => (
              <div
                key={doctor.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  {/* Doctor Portrait Container */}
                  <div className="relative aspect-[4/3.5] bg-gradient-to-t from-slate-900 to-slate-800 overflow-hidden">
                    <Image
                      src={doctor.image}
                      alt={doctor.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                    <div className="absolute bottom-3 left-4 right-4 text-white">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-sky-300 px-2 py-0.5 rounded-full bg-sky-950/80 border border-sky-800 inline-block mb-1">
                        {doctor.role}
                      </span>
                      <h4 className="text-xl font-bold font-sans text-white leading-tight">
                        {doctor.name}
                      </h4>
                      <p className="text-xs text-slate-300 font-medium">{doctor.qualifications}</p>
                    </div>
                  </div>

                  {/* Doctor Subspeciality Details */}
                  <div className="p-5 space-y-3">
                    <div className="space-y-1">
                      <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                        Clinical Speciality
                      </span>
                      <p className="text-xs sm:text-[13px] font-semibold text-slate-800 leading-snug">
                        {doctor.department}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                      <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                        <span>NABH Certified Clinician</span>
                      </div>
                      <span className="text-[11px] font-bold text-[#1c88c6]">Agartala Campus</span>
                    </div>
                  </div>
                </div>

                {/* Direct Booking Button */}
                <div className="p-5 pt-0">
                  <button
                    onClick={() => handleDirectDoctorBook(doctor.name)}
                    className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-[#1c88c6] text-slate-800 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors border border-slate-200 hover:border-[#1c88c6] flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book With {doctor.name.split(" ")[1]}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. THE CONCIERGE PATIENT JOURNEY
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-sky-50/20 to-white border-y border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold text-[#1c88c6] uppercase tracking-widest block">
              Seamless Patient Protocol
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
              The Concierge Patient Pathway
            </h2>
            <p className="text-sm text-slate-600">
              Designed from the ground up for zero-friction comfort, clinical clarity, and rapid post-operative recovery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {patientJourney.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-extrabold text-[#1c88c6]/30 font-sans">
                      {step.step}
                    </span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-50 text-[#1c88c6] border border-sky-100">
                      {step.time}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-slate-900 font-sans">
                    {step.title}
                  </h4>

                  <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Standard of Care Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. SARVA DRISHTI YOJANA (PHILANTHROPIC MISSION)
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-gradient-to-r from-[#0a466c] via-[#1579b2] to-[#1c88c6] text-white relative overflow-hidden">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Mission & Details */}
            <div className="lg:col-span-8 space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/15 text-sky-100 text-xs font-semibold backdrop-blur-md border border-white/20">
                <Heart className="w-3.5 h-3.5 text-rose-300 fill-rose-300" />
                <span>Tripura Community Healthcare Initiative • Ashvini Eye Foundation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-sans tracking-tight text-white">
                Sarva Drishti Yojana — Vision for Every Citizen.
              </h2>

              <p className="text-sm sm:text-base text-sky-100 leading-relaxed max-w-2xl font-normal">
                No citizen of Tripura should lose their sight simply because they cannot afford care. Under the aegis of the Ashvini Eye Foundation, we provide heavily subsidized and completely free micro-incision cataract surgeries for BPL, PHH, AAY, and Ayushman Bharat cardholders.
              </p>

              {/* Subsidies Matrix */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-3">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20">
                  <p className="text-2xl sm:text-3xl font-extrabold text-white font-sans">₹50/-</p>
                  <p className="text-xs font-bold text-sky-200 mt-1">OPD Consultation</p>
                  <p className="text-[11px] text-slate-200 mt-0.5">Everyday 10:30 AM to 2:00 PM</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20">
                  <p className="text-2xl sm:text-3xl font-extrabold text-white font-sans">Up to 70%</p>
                  <p className="text-xs font-bold text-sky-200 mt-1">Diagnostic Subsidies</p>
                  <p className="text-[11px] text-slate-200 mt-0.5">Zeiss OCT, Perimetry &amp; Biometry</p>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-white/20">
                  <p className="text-2xl sm:text-3xl font-extrabold text-white font-sans">2,500+</p>
                  <p className="text-xs font-bold text-sky-200 mt-1">Free Eye Surgeries</p>
                  <p className="text-[11px] text-slate-200 mt-0.5">Restored vision for needy families</p>
                </div>
              </div>
            </div>

            {/* Right: Institutional Badge & Direct Application */}
            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md rounded-3xl p-6 sm:p-8 border border-white/25 flex flex-col items-center text-center space-y-4">
              <div className="relative w-28 h-28 rounded-2xl overflow-hidden bg-white p-2.5 shadow-xl">
                <Image
                  src="/images/AN-1080-by-1080-SDY-logo.png"
                  alt="Sarva Drishti Yojana Logo"
                  fill
                  className="object-contain"
                />
              </div>

              <div>
                <h4 className="text-lg font-bold text-white font-sans">
                  Apply for Subsidized Care
                </h4>
                <p className="text-xs text-sky-100 mt-1 leading-relaxed">
                  Bring your Ration card, BPL certificate, or Ayushman Bharat PM-JAY card directly to our hospital desk.
                </p>
              </div>

              <div className="w-full space-y-2.5 pt-2">
                <Link
                  href="/sarva-drishti-yojana"
                  className="w-full block py-3 px-4 bg-white text-[#1c88c6] hover:bg-sky-50 font-bold text-xs uppercase tracking-wider rounded-xl shadow-md transition-colors"
                >
                  Scheme Guidelines &amp; Criteria
                </Link>
                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 bg-sky-950/60 hover:bg-sky-950 text-white font-semibold text-xs rounded-xl border border-white/30 transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-sky-300" />
                  <span>Call Desk: {siteConfig.phone}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          10. VERIFIED PATIENT CLINICAL OUTCOMES & REVIEWS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-50 text-[#1c88c6] text-xs font-bold uppercase tracking-wider border border-sky-100">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Verified Clinical Outcomes</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
              Stories of Restored Vision &amp; Hope
            </h2>

            <p className="text-sm text-slate-600">
              Read real patient transformations from citizens across Agartala, rural Tripura subdivisions, and Bangladesh.
            </p>

            <div className="inline-flex items-center gap-3 bg-slate-50 px-5 py-2 rounded-2xl border border-slate-200 mt-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-extrabold text-slate-900">4.8 / 5.0</span>
              <span className="text-xs text-slate-500 font-medium">Over 4,100+ Verified Patient Reviews</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {reviewsData.slice(0, 3).map((review) => (
              <div
                key={review.id}
                className="bg-white rounded-3xl p-7 border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5"
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Verified Patient
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    &ldquo;{review.comment}&rdquo;
                  </p>

                  {review.bengaliComment && (
                    <p className="text-xs text-slate-500 leading-relaxed pt-3 border-t border-slate-100 font-bengali">
                      &ldquo;{review.bengaliComment}&rdquo;
                    </p>
                  )}
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#1c88c6] text-white flex items-center justify-center font-bold text-xs">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm text-slate-900">{review.author}</h4>
                      <p className="text-[11px] text-slate-400">Agartala, Tripura</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-bold text-slate-400">Google Verified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          11. CASHLESS MEDICLAIM & INSURANCE EMPANELMENT
      ───────────────────────────────────────────────────────────── */}
      <section className="py-14 bg-slate-50 border-y border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="space-y-1">
            <span className="text-xs font-bold text-[#1c88c6] uppercase tracking-wider">
              Cashless Health Insurance &amp; TPA Empanelment Desk
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-sans">
              100% Cashless Approvals Across Major Health Insurers &amp; TPAs
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-xl mx-auto">
              Our full-time dedicated hospital cashless desk coordinates directly with your insurance provider for hassle-free pre-authorizations and seamless claims.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-bold text-slate-700">
            {[
              "Ayushman Bharat (PM-JAY)",
              "Tripura CM-JAY",
              "Star Health Insurance",
              "Care Health Insurance",
              "ICICI Lombard Health",
              "HDFC ERGO Health",
              "MediBuddy Cashless Desk",
              "Vidal Health TPA",
              "Paramount Health TPA",
              "Heritage Health TPA",
            ].map((scheme, i) => (
              <div
                key={i}
                className="bg-white px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm flex items-center gap-2 hover:border-[#1c88c6] transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>{scheme}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          12. EXECUTIVE CLINICAL FAQS
      ───────────────────────────────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-2">
            <span className="text-xs font-bold text-[#1c88c6] uppercase tracking-widest block">
              Patient Guidance &amp; Clear Answers
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
              Frequently Asked Clinical Questions
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              Clear clinical facts regarding surgery safety, recovery timelines, insurance processing, and appointment protocols.
            </p>
          </div>

          <div className="space-y-3.5">
            {corporateFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-50/50 transition-colors"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 hover:text-[#1c88c6] transition-colors"
                >
                  <span className="font-sans leading-snug">{faq.q}</span>
                  {openFaqIndex === idx ? (
                    <ChevronUp className="w-5 h-5 text-[#1c88c6] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                  )}
                </button>
                {openFaqIndex === idx && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          13. GRAND EXECUTIVE CONSULTATION CTA
      ───────────────────────────────────────────────────────────── */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-br from-[#051226] via-[#0b2447] to-[#051226] text-white text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1c88c6_1px,transparent_1px)] [background-size:24px_24px] opacity-15 pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto px-4 space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-bold uppercase tracking-wider backdrop-blur-md">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>NABH-Accredited Superspeciality Hospital</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans text-white">
            Give Your Eyes the Care They Truly Deserve.
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Consult with Tripura’s top fellowship ophthalmologists. Enjoy world-class surgical precision, painless stitchless procedures, and compassionate care.
          </p>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openBooking()}
              className="px-8 py-3.5 bg-[#1c88c6] hover:bg-[#1579b2] text-white font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-xl hover:shadow-sky-500/20 transition-all active:scale-95 flex items-center gap-2 border border-sky-400/30"
            >
              <Calendar className="w-4 h-4" />
              <span>Schedule Priority Appointment</span>
            </button>
            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="px-7 py-3.5 bg-white/10 hover:bg-white/15 text-white font-semibold text-xs sm:text-sm rounded-xl border border-white/20 transition-all backdrop-blur-md flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>Helpline: {siteConfig.phone}</span>
            </a>
          </div>

          <p className="text-[11px] text-slate-400 pt-2">
            Bijoykumar Chowmuhani, Krishna Nagar, Agartala, Tripura — 799001
          </p>
        </div>
      </section>
    </div>
  );
}

