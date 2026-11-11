"use client";

import { useState, createContext, useContext } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookingModal } from "@/components/BookingModal";
import { WhatsAppPill } from "@/components/WhatsAppPill";
import { MobileQuickBar } from "@/components/MobileQuickBar";

interface BookingOptions {
  service?: string;
  doctor?: string;
}

interface BookingContextType {
  openBooking: (options?: BookingOptions) => void;
  closeBooking: () => void;
}

const BookingContext = createContext<BookingContextType>({
  openBooking: () => {},
  closeBooking: () => {},
});

export const useBooking = () => useContext(BookingContext);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>();
  const [selectedDoctor, setSelectedDoctor] = useState<string | undefined>();

  const openBooking = (options?: BookingOptions) => {
    setSelectedService(options?.service);
    setSelectedDoctor(options?.doctor);
    setBookingOpen(true);
  };

  const closeBooking = () => {
    setBookingOpen(false);
  };

  return (
    <BookingContext.Provider value={{ openBooking, closeBooking }}>
      <div className="flex flex-col min-h-screen overflow-x-clip">
        <Header onOpenBooking={() => openBooking()} />
        <main className="flex-1 pb-[76px] md:pb-0">{children}</main>
        <Footer />
        <WhatsAppPill />
        <MobileQuickBar onOpenBooking={() => openBooking()} />
        <BookingModal
          isOpen={bookingOpen}
          onClose={closeBooking}
          defaultService={selectedService}
          defaultDoctor={selectedDoctor}
        />
      </div>
    </BookingContext.Provider>
  );
}
