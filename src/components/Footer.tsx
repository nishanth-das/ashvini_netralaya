import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Phone,
  MapPin,
  Mail,
  Heart,
  ShieldCheck,
  Clock,
  Sparkles,
  Briefcase,
  ArrowRight,
} from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { servicesData } from "@/data/services";

export function Footer() {
  return (
    <footer className="bg-[#051226] text-slate-300 border-t border-slate-800">
      {/* Footer Content */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Hospital Identity & Credentials (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <div className="relative w-52 h-14">
                <Image
                  src="/images/AN-Website-name-logo-e1773034551124-1024x206.png"
                  alt="Ashvini Netralaya Logo"
                  fill
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed">
              Established in 2022, Ashvini Netralaya (A unit of Ashvini Eye Care Pvt. Ltd.) is <strong className="text-white font-semibold">Tripura’s first and only NABH-accredited Superspeciality Eye Hospital</strong>, delivering advanced ophthalmic microsurgery, vitreo-retina care, and pediatric ophthalmology.
            </p>

            {/* NABH Seal Callout */}
            <div className="p-3.5 rounded-xl bg-sky-950/70 border border-sky-800/60 text-xs flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#1c88c6] text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="font-bold text-white">NABH Accredited Hospital</p>
                <p className="text-sky-300 text-[11px]">National Standard for Patient Safety</p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-2.5 text-xs text-slate-300 pt-2">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{siteConfig.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href={`tel:${siteConfig.phoneClean}`}
                  className="text-white hover:text-sky-300 font-semibold transition-colors"
                >
                  {siteConfig.phone} (Reception &amp; OPD)
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0" />
                <span>OPD: Mon – Sat 9:00 AM – 7:00 PM</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white pb-2 border-b border-sky-500/40 inline-block font-sans">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Clinical Services", href: "/our-services-2" },
                { name: "Sarva Drishti Yojana", href: "/sarva-drishti-yojana" },
                { name: "Careers & Openings", href: "/careers" },
                { name: "Bangladesh Patients (বাংলা)", href: "/bangladesh/eye-care" },
                { name: "Doctor Profiles", href: "/#doctors" },
                { name: "Health Articles", href: "/blogs" },
                { name: "Contact & Directions", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-1.5 text-slate-300 hover:text-sky-400 transition-colors group"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-sky-500 transition-transform group-hover:translate-x-1" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Specialized Eye Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white pb-2 border-b border-sky-500/40 inline-block font-sans">
              Clinical Specialities
            </h3>
            <ul className="space-y-2 text-xs text-slate-300 max-h-80 overflow-y-auto pr-1">
              {servicesData.slice(0, 10).map((svc) => (
                <li key={svc.id}>
                  <Link
                    href={`/services/${svc.slug}`}
                    className="flex items-center gap-1.5 hover:text-sky-400 transition-colors group py-0.5"
                  >
                    <ChevronRight className="w-3 h-3 text-sky-500 shrink-0 transition-transform group-hover:translate-x-0.5" />
                    <span className="truncate">{svc.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-1">
                <Link
                  href="/our-services-2"
                  className="text-sky-400 hover:text-sky-300 font-semibold inline-flex items-center gap-1"
                >
                  <span>+ View All 16 Specialities</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Careers & Community (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white pb-2 border-b border-sky-500/40 inline-block font-sans">
              Careers &amp; Outreach
            </h3>

            {/* Careers Card */}
            <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 via-sky-950/40 to-slate-900 border border-sky-800/50 space-y-2.5">
              <div className="flex items-center gap-2 text-sky-400 font-bold text-xs">
                <Briefcase className="w-4 h-4 text-sky-400" />
                <span>Join Our Medical Team</span>
              </div>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                Explore rewarding careers for Ophthalmologists, Optometrists, OT Nurses, and Healthcare Executives at Tripura’s premier eye hospital.
              </p>
              <Link
                href="/careers"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-500 px-3 py-1.5 rounded-lg transition-colors shadow-sm"
              >
                <span>View Job Openings</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Sarva Drishti Mini Card */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-sky-400 font-bold text-xs">
                <Sparkles className="w-4 h-4" />
                <span>Sarva Drishti Yojana</span>
              </div>
              <p className="text-[11px] text-slate-400 leading-relaxed">
                Subsidized eye care for BPL / PHH / AAY card holders in Tripura: OPD at ₹50, tests at up to 70% discount.
              </p>
              <Link
                href="/sarva-drishti-yojana"
                className="inline-block text-[11px] font-bold text-sky-400 hover:underline pt-0.5"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Sub-footer */}
      <div className="bg-[#030c1a] text-slate-400 text-xs py-4 px-4 border-t border-slate-800/80">
        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
          <p className="text-[11px]">
            © {new Date().getFullYear()} {siteConfig.companyName}. All Rights Reserved. NABH Accredited Eye Hospital.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3.5 text-[11px]">
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <span>•</span>
            <Link href="/careers" className="hover:text-white transition-colors">
              Careers
            </Link>
            <span>•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <span>•</span>
            <span className="text-slate-400">
              Website made by{" "}
              <a
                href="https://localrankindia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:text-sky-300 font-semibold underline decoration-sky-500/40 underline-offset-2 transition-colors"
              >
                Local Rank India
              </a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
