import { Star, CheckCircle2, Quote, ExternalLink } from "lucide-react";
import { reviewsData } from "@/data/reviews";
import { siteConfig } from "@/data/siteConfig";

export function ReviewsSection() {
  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-slate-50 via-sky-50/30 to-white border-t border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-100 text-[#1c88c6] text-xs font-bold uppercase tracking-wider">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Verified Patient Outcomes</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            Stories of Restored Vision &amp; Hope
          </h2>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Read what patients and their families across Tripura say about their experience at Ashvini Netralaya.
          </p>

          {/* Google Rating Pillar */}
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 bg-white px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl shadow-sm border border-slate-200/80 mt-2">
            <div className="flex text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-sm font-extrabold text-slate-900">4.9 / 5.0</span>
            <span className="text-xs text-slate-500 font-medium">
              Based on 500+ Google Reviews
            </span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {reviewsData.slice(0, 3).map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-5 sm:p-7 shadow-sm hover:shadow-xl border border-slate-200/80 flex flex-col justify-between space-y-5 transition-all duration-300 hover:-translate-y-1 relative"
            >
              {/* Subtle quote accent mark */}
              <div className="absolute top-5 right-5 text-sky-100">
                <Quote className="w-8 h-8 opacity-60" />
              </div>

              <div className="space-y-3.5 relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200/60">
                    <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                    Verified Patient
                  </span>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed italic">
                  &ldquo;{review.comment}&rdquo;
                </p>

                {review.bengaliComment && (
                  <p className="text-xs text-slate-500 leading-relaxed pt-3 border-t border-slate-100 font-normal">
                    &ldquo;{review.bengaliComment}&rdquo;
                  </p>
                )}
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#1c88c6] to-[#0284c7] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                    {review.author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-slate-900">{review.author}</h4>
                    <p className="text-[11px] text-slate-400">Agartala, Tripura</p>
                  </div>
                </div>
                <div className="w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500 border border-slate-200">
                  G
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View on Google Link */}
        <div className="mt-12 text-center">
          <a
            href={siteConfig.googleMapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#1c88c6] hover:text-[#1579b2] hover:underline"
          >
            <span>Read More Reviews on Google Maps</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
