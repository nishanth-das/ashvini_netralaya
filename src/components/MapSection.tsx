import { MapPin, Navigation, Clock, Phone } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export function MapSection() {
  return (
    <section className="py-12 sm:py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10 space-y-2">
          <span className="text-xs font-bold text-[#1c88c6] uppercase tracking-widest">
            Visit Our Clinic
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-sans">
            Located Right at the Heart of Agartala
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Easy to reach from any corner of Agartala and all nearby districts of Tripura.
          </p>
        </div>

        {/* Map and Info Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {/* Info Card */}
          <div className="bg-slate-50 rounded-2xl p-5 sm:p-8 border border-slate-200/80 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 text-[#1c88c6]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 mb-1">Our Address</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {siteConfig.address.full}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-1">
                    (Near Sanghati Club / Sukanto Sarani)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 text-[#1c88c6]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 mb-1">Hospital Timings</h4>
                  <p className="text-xs text-slate-600">
                    OPD: {siteConfig.workingHours.opd}
                  </p>
                  <p className="text-xs text-slate-600">
                    Clinic: {siteConfig.workingHours.general}
                  </p>
                  <p className="text-[11px] text-[#1c88c6] font-semibold mt-0.5">
                    Thursday & Sunday: Closed for Routine OPD
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0 text-[#1c88c6]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-slate-900 mb-1">Emergency & Reception</h4>
                  <p className="text-xs text-slate-600">
                    Primary: {siteConfig.phone}
                  </p>
                  <p className="text-xs text-slate-600">
                    Enquiry: {siteConfig.altPhone}
                  </p>
                </div>
              </div>
            </div>

            <a
              href={siteConfig.googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#1c88c6] hover:bg-[#1677be] text-white text-xs font-bold rounded-xl transition shadow"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions on Google Maps</span>
            </a>
          </div>

          {/* Embedded Map */}
          <div className="lg:col-span-2 rounded-2xl overflow-hidden border border-slate-200 shadow-sm h-[260px] sm:h-[340px] lg:h-auto lg:min-h-[340px] relative">
            <iframe
              src={siteConfig.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ashvini Netralaya Agartala Location"
              className="w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
