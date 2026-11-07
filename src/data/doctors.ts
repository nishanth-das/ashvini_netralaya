export interface Doctor {
  id: string;
  name: string;
  qualifications: string;
  role: string;
  department: string;
  image: string;
  isVisiting?: boolean;
}

export const inHouseDoctors: Doctor[] = [
  {
    id: "dr-anurag-majumdar",
    name: "Dr. Anurag Majumdar",
    qualifications: "MBBS, MS",
    role: "Medical Director",
    department: "Consultant Ophthalmologist Phaco and Anterior Segment Surgery",
    image: "/images/Dr-anurag.jpg",
  },
  {
    id: "dr-subrata-saha",
    name: "Dr. Subrata Saha",
    qualifications: "MBBS, MS",
    role: "Chief Operating Officer",
    department: "Consultant Ophthalmologist Phaco and Anterior Segment Surgery",
    image: "/images/Dr-Subrata.jpg",
  },
  {
    id: "dr-subhankar-debnath",
    name: "Dr. Subhankar Debnath",
    qualifications: "MBBS, MS (Ophthalmology)",
    role: "Head of Community Partnerships",
    department: "Consultant Phaco and Anterior Segment Surgery",
    image: "/images/AN-New-Creative-Format-29.png",
  },
  {
    id: "dr-debasish-sarkar",
    name: "Dr. Debasish Sarkar",
    qualifications: "MBBS, MS",
    role: "Senior Consultant",
    department: "Senior Consultant Ophthalmologist Phaco & Refractive Surgery",
    image: "/images/Ashvini-Social-Media-Posts-4.png",
  },
  {
    id: "dr-paruldeep-chakma",
    name: "Dr. Paruldeep Chakma",
    qualifications: "MBBS, MS, FAEH",
    role: "Consultant Ophthalmologist",
    department: "Glaucoma and Phaco Refractive surgery",
    image: "/images/Dr-paruldeep.jpg",
  },
  {
    id: "dr-paichainda-mog",
    name: "Dr. Paichainda Mog",
    qualifications: "MBBS, MS",
    role: "Chief Paediatric Ophthalmology Consultant",
    department: "Paediatric Ophthalmology & Strabismus",
    image: "/images/Paichanda-Mog.png",
  },
];

export const visitingConsultants: Doctor[] = [
  {
    id: "dr-isha-agarwalla",
    name: "Dr. Isha Agarwalla",
    qualifications: "MBBS, DNB",
    role: "Consultant Ophthalmologist",
    department: "Phaco & Oculoplasty Surgery",
    image: "/images/WhatsApp-Image-2023-02-08-at-3.27.13-PM.jpeg",
    isVisiting: true,
  },
  {
    id: "dr-kaushick-biswas",
    name: "Dr. Kaushick Biswas",
    qualifications: "MBBS, MS",
    role: "Vitreo-retinal Surgeon",
    department: "Retina & Vitreous Surgery",
    image: "/images/Dr-Kaushick-1.jpg",
    isVisiting: true,
  },
  {
    id: "dr-surendra-prakash",
    name: "Dr. Surendra Prakash",
    qualifications: "MBBS, MS (Ophthalmology)",
    role: "Vitreo-retina Specialist",
    department: "Fellowship in Vitreo-retina",
    image: "/images/Surendra-Prakash.jpg",
    isVisiting: true,
  },
  {
    id: "dr-john-sarkar",
    name: "Dr. John Sarkar",
    qualifications: "MBBS, DO, MS (Ophthal) FAIMPR (Cornea)",
    role: "Cornea Surgeon",
    department: "Cornea & External Eye Diseases",
    image: "/images/AN-New-Format-25-32.png",
    isVisiting: true,
  },
];
