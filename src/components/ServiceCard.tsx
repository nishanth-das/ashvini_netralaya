import Image from "next/image";
import { ArrowRight, Phone, Calendar } from "lucide-react";
import { ServiceItem } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";

interface ServiceCardProps {
  service: ServiceItem;
  onBook?: (service: ServiceItem) => void;
}

export function ServiceCard({ service, onBook }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg border border-slate-100 overflow-hidden flex flex-col justify-between transition-all duration-300 group hover:-translate-y-1">
      {/* Service Image Banner */}
      <div className="relative w-full h-48 sm:h-52 bg-slate-100 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="text-white font-bold text-base sm:text-lg leading-tight drop-shadow-md">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Description & Action */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {service.description}
        </p>

        <div className="pt-2 border-t border-slate-100">
          {service.isCallOnly ? (
            <a
              href={`tel:${siteConfig.phoneClean}`}
              className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Pharmacy</span>
            </a>
          ) : (
            <button
              onClick={() => onBook?.(service)}
              className="w-full inline-flex items-center justify-center gap-2 py-2 px-4 rounded-lg bg-[#1c88c6] hover:bg-[#1677be] text-white text-xs font-bold transition shadow-sm group-hover:shadow"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Now</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
