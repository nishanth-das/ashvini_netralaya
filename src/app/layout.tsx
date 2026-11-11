import type { Metadata, Viewport } from "next";
import "./globals.css";
import { AppWrapper } from "@/components/AppWrapper";
import { siteConfig } from "@/data/siteConfig";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#1c88c6",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.metaTitle,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.metaDescription,
  keywords: [
    "Ashvini Netralaya",
    "Best Eye Hospital in Agartala",
    "Eye Hospital Tripura",
    "Cataract Surgery Agartala",
    "NABH Accredited Eye Hospital Tripura",
    "Retina Surgery Agartala",
    "Paediatric Eye Care Agartala",
    "Dr Anurag Majumdar",
    "Sarva Drishti Yojana",
    "Eye Specialist Agartala",
  ],
  authors: [{ name: "Ashvini Netralaya" }],
  creator: "Ashvini Eye Care Pvt. Ltd.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    title: siteConfig.metaTitle,
    description: siteConfig.metaDescription,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/Ashvini-Eye-Care-logo-01.png`,
        width: 1200,
        height: 630,
        alt: "Ashvini Netralaya - Superspeciality Eye Hospital Agartala",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.metaTitle,
    description: siteConfig.metaDescription,
    images: [`${siteConfig.url}/images/Ashvini-Eye-Care-logo-01.png`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/images/ASHVINI_EYE_CARE-removebg-preview-1-e1665819489873.png",
    apple: "/images/ASHVINI_EYE_CARE-removebg-preview-1-e1665819489873.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: siteConfig.name,
  legalName: siteConfig.companyName,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/Ashvini-Eye-Care-logo-01.png`,
  image: `${siteConfig.url}/images/Home-Banner-1.jpg`,
  description: siteConfig.metaDescription,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.address.street,
    addressLocality: siteConfig.address.city,
    addressRegion: siteConfig.address.state,
    postalCode: siteConfig.address.pincode,
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 23.8315,
    longitude: 91.2868,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Thursday", "Sunday"],
      opens: "10:00",
      closes: "14:00",
    },
  ],
  medicalSpecialty: [
    "Optometric",
    "Ophthalmologic",
    "Pediatric",
  ],
  availableService: [
    {
      "@type": "MedicalProcedure",
      name: "Cataract Surgery - Phaco",
    },
    {
      "@type": "MedicalProcedure",
      name: "Retina Surgeries",
    },
    {
      "@type": "MedicalProcedure",
      name: "Glaucoma Surgeries",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=Alegreya:wght@700;800&family=Hind+Siliguri:wght@400;500;600;700&family=Noto+Sans+Bengali:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-slate-800 bg-white">
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
