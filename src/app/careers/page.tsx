"use client";

import { useState } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Briefcase,
  GraduationCap,
  Users,
  ShieldCheck,
  Award,
  Clock,
  MapPin,
  CheckCircle2,
  Send,
  Mail,
  Phone,
  MessageCircle,
  FileText,
  Sparkles,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

const jobOpenings = [
  {
    id: "consultant-ophthalmologist",
    title: "Consultant Ophthalmologist (Phaco & Anterior Segment / Retina)",
    department: "Clinical & Surgical",
    location: "Agartala, Tripura",
    type: "Full-Time",
    experience: "1 - 5 Years Post-MS/DNB",
    qualifications: "MS / DNB in Ophthalmology (Fellowship in Phaco or Vitreo-Retina preferred)",
    description:
      "We are seeking a skilled and compassionate Consultant Ophthalmologist to join our surgical team in Agartala. Responsibilities include OPD consultations, diagnostic evaluation, and independent microsurgical procedures utilizing our Alcon Centurion and Zeiss surgical systems.",
    highlights: [
      "Modular Laminar Flow OT with Alcon Centurion & Zeiss Lumera microscope",
      "High clinical volume and diverse pathology across Northeast India",
      "Competitive compensation package with performance incentives",
      "Full academic support for research, CME, and conference presentations",
    ],
  },
  {
    id: "senior-optometrist",
    title: "Senior Optometrist / Clinical Refractionist",
    department: "Diagnostics & Optometry",
    location: "Agartala, Tripura",
    type: "Full-Time",
    experience: "1 - 4 Years Experience",
    qualifications: "B.Optom / M.Optom or Diploma in Ophthalmic Technique",
    description:
      "Responsible for comprehensive refraction, non-contact tonometry, optical biometry (IOLMaster), visual field analysis (Humphrey HFA3), and specialty contact lens fittings (RGP & Rose K2).",
    highlights: [
      "Work with cutting-edge Zeiss HD-OCT, Humphrey Perimetry, and Topcon systems",
      "Comprehensive training in specialty contact lenses and pediatric refraction",
      "Attractive salary package and structured shift timings",
    ],
  },
  {
    id: "ot-staff-nurse",
    title: "Ophthalmic Operation Theatre (OT) Staff Nurse",
    department: "Nursing & Patient Care",
    location: "Agartala, Tripura",
    type: "Full-Time",
    experience: "1 - 3 Years in Hospital OT",
    qualifications: "GNM / B.Sc Nursing (Tripura Nursing Council Registered or equivalent)",
    description:
      "Join our NABH-accredited operating theatre team. Responsibilities include pre-operative patient preparation, surgical scrub assisting in microsurgeries, sterilization protocols, and post-operative recovery monitoring.",
    highlights: [
      "Strict NABH infection control and patient safety protocols",
      "Continuous on-the-job nursing education and career advancement",
      "Friendly, supportive, and respectful clinical work environment",
    ],
  },
  {
    id: "patient-care-coordinator",
    title: "Patient Care Coordinator & Front Desk Executive",
    department: "Hospital Administration",
    location: "Agartala, Tripura",
    type: "Full-Time",
    experience: "0 - 3 Years in Healthcare or Hospitality",
    qualifications: "Graduate / BBA / Hospital Administration (Fluent in Bengali & English)",
    description:
      "The primary welcoming face for patients and families. Responsibilities include patient registration, OPD appointment scheduling, counseling for surgery packages, and assisting international patients from Bangladesh.",
    highlights: [
      "Professional front-office environment with modern Hospital Management Software",
      "Interaction with diverse patients from Tripura, Assam, and Bangladesh",
      "Performance incentives and annual appraisal structure",
    ],
  },
  {
    id: "tpa-insurance-coordinator",
    title: "TPA Billing & Cashless Mediclaim Executive",
    department: "Insurance & Accounts",
    location: "Agartala, Tripura",
    type: "Full-Time",
    experience: "1 - 4 Years in Hospital TPA Desk",
    qualifications: "B.Com / BBA / Any Graduate with TPA billing experience",
    description:
      "Handling pre-authorization requests, query resolution, and cashless claims settlement with private health insurance TPAs (Star Health, HDFC ERGO, ICICI Lombard, Care Health) and government schemes (PM-JAY, CM-JAY).",
    highlights: [
      "Empaneled with all major national TPAs and state government health schemes",
      "Systematic digital documentation and automated portal processing",
      "Stable corporate healthcare administrative career path",
    ],
  },
  {
    id: "hospital-pharmacist",
    title: "Registered Ophthalmic Pharmacist",
    department: "Pharmacy & Dispensary",
    location: "Agartala, Tripura",
    type: "Full-Time",
    experience: "0 - 2 Years",
    qualifications: "D.Pharm / B.Pharm (Registered with State Pharmacy Council)",
    description:
      "Managing our 24/7 in-house ophthalmic dispensary, maintaining 2°C - 8°C cold-chain storage for sensitive eye drops, dispensing surgical kits, and providing patient medication counseling.",
    highlights: [
      "Exclusively ophthalmic pharmacotherapy with 100% genuine inventory",
      "Regulated indoor hospital premises with digital inventory software",
      "Fixed rotational shifts and professional growth",
    ],
  },
];

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    position: "Consultant Ophthalmologist (Phaco & Anterior Segment / Retina)",
    experience: "1 - 3 Years",
    qualification: "",
    resumeLink: "",
    coverNote: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const message = `Job Application for Ashvini Netralaya:
• Name: ${formData.fullName}
• Phone: ${formData.phone}
• Email: ${formData.email}
• City/State: ${formData.city}
• Position Applied: ${formData.position}
• Experience: ${formData.experience}
• Qualification: ${formData.qualification}
• Resume / Profile: ${formData.resumeLink || "Will provide via email/WhatsApp"}
• Note: ${formData.coverNote}`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=${siteConfig.whatsapp}&text=${encodeURIComponent(
      message
    )}`;

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 600);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header Banner */}
      <section className="bg-gradient-to-r from-[#0a274c] via-[#0d3b70] to-[#1c88c6] text-white py-10 sm:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 space-y-4 relative z-10">
          <h1 className="text-2xl sm:text-5xl font-extrabold tracking-tight font-sans">
            Build Your Healthcare Career at Ashvini Netralaya
          </h1>

          <p className="text-sm sm:text-base text-sky-100 max-w-2xl mx-auto leading-relaxed">
            Work alongside experienced eye surgeons in an NABH-accredited environment with modern diagnostic and surgical infrastructure in Agartala.
          </p>
        </div>
      </section>

      {/* Culture & Highlights */}
      <section className="py-10 sm:py-16 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-[#1c88c6] uppercase tracking-wider">
              Workplace Culture &amp; Growth
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-sans">
              Why Join the Ashvini Netralaya Team?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-[#1c88c6] flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900">
                NABH-Accredited Excellence
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Experience world-class operating theatre standards, rigorous patient safety protocols, and zero-compromise clinical ethics every single day.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#20c997] flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900">
                World-Class Technology
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Work directly with Carl Zeiss Lumera microscopes, Alcon Centurion Phaco, Zeiss Cirrus HD-OCT, Humphrey HFA3 perimetry, and Tomey B-Scan systems.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-sm space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900">
                Collaborative, Respectful Culture
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                A warm, patient-first environment where every doctor, nurse, optometrist, and administrative staff member is valued, mentored, and supported.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions & Form */}
      <section className="py-12 sm:py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Job Openings List (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-1">
                <span className="text-xs font-bold text-[#1c88c6] uppercase tracking-wider">
                  Open Opportunities
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 font-sans">
                  Current Job Openings in Agartala
                </h2>
                <p className="text-xs sm:text-sm text-slate-500">
                  Select a role below or submit an open application using the form.
                </p>
              </div>

              <div className="space-y-4">
                {jobOpenings.map((job) => (
                  <div
                    key={job.id}
                    className="p-5 sm:p-6 rounded-2xl border border-slate-200 bg-white hover:border-sky-300 transition-all shadow-sm space-y-3"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-slate-100">
                      <div>
                        <span className="text-[10px] font-bold text-[#1c88c6] uppercase tracking-wider bg-sky-50 px-2 py-0.5 rounded">
                          {job.department}
                        </span>
                        <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-1">
                          {job.title}
                        </h3>
                      </div>
                      <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full shrink-0 self-start sm:self-center">
                        {job.type}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {job.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700 pt-1">
                      <div className="flex items-start gap-1.5 min-w-0">
                        <GraduationCap className="w-3.5 h-3.5 text-sky-600 shrink-0 mt-0.5" />
                        <span className="leading-snug"><strong>Req:</strong> {job.qualifications}</span>
                      </div>
                      <div className="flex items-center gap-1.5 min-w-0">
                        <Clock className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span><strong>Exp:</strong> {job.experience}</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:col-span-2 min-w-0">
                        <MapPin className="w-3.5 h-3.5 text-sky-600 shrink-0" />
                        <span><strong>Location:</strong> {job.location}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <a
                        href="#apply-form"
                        onClick={() =>
                          setFormData((prev) => ({
                            ...prev,
                            position: job.title,
                          }))
                        }
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#1c88c6] hover:text-[#1578b0] hover:underline py-1"
                      >
                        <span>Apply for this position</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Application Form (5 cols) */}
            <div id="apply-form" className="lg:col-span-5 scroll-mt-24">
              <div className="bg-slate-50 rounded-2xl p-5 sm:p-8 border border-slate-200/90 shadow-lg space-y-6">
                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-[#1c88c6] uppercase tracking-wider">
                    Quick Application
                  </span>
                  <h3 className="text-xl font-bold text-slate-900">
                    Apply Online for a Role
                  </h3>
                  <p className="text-xs text-slate-500">
                    Submit your details directly to our HR &amp; Medical Administration team.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-6 rounded-xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                    <h4 className="font-bold text-slate-900 text-base">
                      Application Initiated!
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Thank you for applying to Ashvini Netralaya. WhatsApp has opened with your application summary to connect directly with our HR coordinator.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs font-semibold text-[#1c88c6] hover:underline pt-2 block mx-auto"
                    >
                      Submit another application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="Dr. / Mr. / Ms. Your Name"
                        className="w-full text-base sm:text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#1c88c6] bg-white"
                      />
                    </div>

                    {/* Phone & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          placeholder="+91 98765 43210"
                          className="w-full text-base sm:text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#1c88c6] bg-white"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="your.email@example.com"
                          className="w-full text-base sm:text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#1c88c6] bg-white"
                        />
                      </div>
                    </div>

                    {/* Position Applied For */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Position Applied For *
                      </label>
                      <select
                        value={formData.position}
                        onChange={(e) =>
                          setFormData({ ...formData, position: e.target.value })
                        }
                        className="w-full text-base sm:text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#1c88c6] bg-white"
                      >
                        {jobOpenings.map((job) => (
                          <option key={job.id} value={job.title}>
                            {job.title}
                          </option>
                        ))}
                        <option value="Other Clinical / Administrative Role">
                          Other Clinical / Administrative Role
                        </option>
                      </select>
                    </div>

                    {/* Experience & Current City */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Total Experience
                        </label>
                        <select
                          value={formData.experience}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              experience: e.target.value,
                            })
                          }
                          className="w-full text-base sm:text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#1c88c6] bg-white"
                        >
                          <option value="Fresher / < 1 Year">Fresher / &lt; 1 Year</option>
                          <option value="1 - 3 Years">1 - 3 Years</option>
                          <option value="3 - 5 Years">3 - 5 Years</option>
                          <option value="5+ Years">5+ Years</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Current City &amp; State
                        </label>
                        <input
                          type="text"
                          value={formData.city}
                          onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })
                          }
                          placeholder="Agartala / Tripura / Other"
                          className="w-full text-base sm:text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#1c88c6] bg-white"
                        />
                      </div>
                    </div>

                    {/* Highest Qualification */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Highest Qualification *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.qualification}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            qualification: e.target.value,
                          })
                        }
                        placeholder="e.g. MS (Ophthal) / B.Optom / GNM / B.Sc"
                        className="w-full text-base sm:text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#1c88c6] bg-white"
                      />
                    </div>

                    {/* Resume / Portfolio Link */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Resume / CV Link (Google Drive / LinkedIn)
                      </label>
                      <input
                        type="url"
                        value={formData.resumeLink}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            resumeLink: e.target.value,
                          })
                        }
                        placeholder="https://drive.google.com/... or LinkedIn profile"
                        className="w-full text-base sm:text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#1c88c6] bg-white"
                      />
                      <p className="text-[10px] text-slate-400 mt-0.5">
                        You can also share your PDF resume directly on WhatsApp or Email.
                      </p>
                    </div>

                    {/* Brief Note */}
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Brief Cover Note / Message
                      </label>
                      <textarea
                        rows={3}
                        value={formData.coverNote}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            coverNote: e.target.value,
                          })
                        }
                        placeholder="Briefly describe your clinical experience, current notice period, and career goals..."
                        className="w-full text-base sm:text-xs px-3.5 py-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#1c88c6] bg-white resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full py-3.5 px-4 rounded-full bg-[#1c88c6] hover:bg-[#1578b0] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all active:scale-95 flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Application via WhatsApp</span>
                    </button>
                  </form>
                )}

                {/* Direct HR Email Notice */}
                <div className="pt-4 border-t border-slate-200/80 text-xs text-slate-600 space-y-2">
                  <p className="font-semibold text-slate-800">
                    Prefer Email Submission?
                  </p>
                  <p className="text-[11px] leading-relaxed">
                    Send your updated CV and cover letter to our recruitment desk:
                  </p>
                  <a
                    href="mailto:info@ashvinieyecare.in?subject=Job%20Application%20-%20Ashvini%20Netralaya"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#1c88c6] hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>info@ashvinieyecare.in</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <section className="py-12 bg-slate-900 text-white border-t border-slate-800">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold font-sans">
            Questions Regarding Openings or Clinical Attachments?
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 max-w-xl mx-auto">
            Contact our Human Resources and Medical Directorate team directly:
          </p>
          <div className="flex items-center justify-center gap-3 flex-wrap pt-2">
            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-5 py-3 sm:py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs border border-white/20 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Call HR Desk: {siteConfig.phone}</span>
            </a>
            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto justify-center inline-flex items-center gap-2 px-5 py-3 sm:py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-xs transition-colors shadow-md"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp Careers Helpline</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
