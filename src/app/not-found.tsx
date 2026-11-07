import Link from "next/link";
import { Phone, ArrowLeft, Home, Calendar } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-b from-sky-50/50 via-white to-white px-4 py-16">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-[#1c88c6] text-xs font-bold uppercase tracking-wider">
          <span>Page Not Found</span>
        </div>

        <h1 className="text-6xl sm:text-7xl font-extrabold text-[#1c88c6] tracking-tight font-sans">
          404
        </h1>

        <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
          Looking for Eye Care or a Specialist?
        </h2>

        <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-md mx-auto">
          The page you are looking for may have moved or no longer exists. Let us guide you back to our clinical services or help you schedule a consultation.
        </p>

        <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1c88c6] hover:bg-[#1579b2] text-white font-bold text-xs sm:text-sm uppercase tracking-wider shadow-md transition-all active:scale-95"
          >
            <Home className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/our-services-2"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs sm:text-sm transition-colors"
          >
            <span>View All Services</span>
          </Link>
        </div>

        <div className="pt-8 border-t border-slate-100 text-xs text-slate-500">
          Need immediate medical assistance? Call our reception at{" "}
          <a
            href={`tel:${siteConfig.phoneClean}`}
            className="font-bold text-[#1c88c6] hover:underline"
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>
    </div>
  );
}

