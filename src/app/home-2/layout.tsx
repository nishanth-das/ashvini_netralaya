import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ashvini Netralaya | Premier Superspeciality Eye Hospital Agartala",
  description:
    "Tripura's premier NABH-accredited superspeciality eye hospital. Micro-incision cataract phaco, vitreo-retina, glaucoma, paediatric ophthalmology, and advanced surgical care in Agartala.",
  alternates: {
    canonical: "https://ashvinieyecare.in/home-2",
  },
};

export default function Home2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

