export interface Doctor {
  id: string;
  name: string;
  qualifications: string;
  degreesLine1?: string;
  degreesLine2?: string;
  role: string;
  department: string;
  departmentLine1?: string;
  departmentLine2?: string;
  image: string;
  isVisiting?: boolean;
}

export const inHouseDoctors: Doctor[] = [
  {
    id: "dr-anurag-majumdar",
    name: "Dr. Anurag Majumdar",
    qualifications: "MBBS, MS (Ophthalmology)",
    degreesLine1: "MBBS",
    degreesLine2: "MS (Ophthalmology)",
    role: "Chairman and CEO",
    department: "Ophthalmologist, Phaco & Anterior Segment Surgery",
    departmentLine1: "Ophthalmologist,",
    departmentLine2: "Phaco & Anterior Segment Surgery",
    image: "/images/Dr-anurag.webp",
  },
  {
    id: "dr-subrata-saha",
    name: "Dr. Subrata Saha",
    qualifications: "MBBS, MS (Ophthalmology)",
    degreesLine1: "MBBS",
    degreesLine2: "MS (Ophthalmology)",
    role: "Chief Operating Officer",
    department: "Ophthalmologist, Phaco & Anterior Segment Surgery",
    departmentLine1: "Ophthalmologist,",
    departmentLine2: "Phaco & Anterior Segment Surgery",
    image: "/images/Dr-Subrata.webp",
  },
  {
    id: "dr-subhankar-debnath",
    name: "Dr. Subhankar Debnath",
    qualifications: "MBBS, MS (Ophthalmology)",
    degreesLine1: "MBBS",
    degreesLine2: "MS (Ophthalmology)",
    role: "Head of Community Partnerships",
    department: "Consultant Phaco and Anterior Segment Surgery",
    departmentLine1: "Consultant Phaco and",
    departmentLine2: "Anterior Segment Surgery",
    image: "/images/AN-New-Creative-Format-29.webp",
  },
  {
    id: "dr-dipanjali-majumder",
    name: "Dr. Dipanjali Majumder",
    qualifications: "MBBS, MS (Ophthalmology), Fellowship in Glaucoma",
    degreesLine1: "MBBS, MS (Ophthalmology)",
    degreesLine2: "Fellowship in Glaucoma",
    role: "Glaucoma and Phaco Surgeon",
    department: "Glaucoma and Phaco Surgeon",
    image: "/images/Dipanjali.webp",
  },
  {
    id: "dr-paruldeep-chakma",
    name: "Dr. Paruldeep Chakma",
    qualifications: "MBBS, MS, FAEH",
    degreesLine1: "MBBS, MS",
    degreesLine2: "FAEH (Glaucoma)",
    role: "Consultant Ophthalmologist",
    department: "Glaucoma and Phaco Refractive surgery",
    image: "/images/Dr-paruldeep.webp",
  },
  {
    id: "dr-paichainda-mog",
    name: "Dr. Paichainda Mog",
    qualifications: "MBBS, MS (Ophthalmology)",
    degreesLine1: "MBBS",
    degreesLine2: "MS (Ophthalmology)",
    role: "Chief Paediatric Ophthalmology Consultant",
    department: "Paediatric Ophthalmology & Strabismus",
    image: "/images/Paichanda-Mog.webp",
  },
];

export const visitingConsultants: Doctor[] = [
  {
    id: "dr-isha-agarwalla",
    name: "Dr. Isha Agarwalla",
    qualifications: "MBBS, DNB (Ophthalmology)",
    degreesLine1: "MBBS",
    degreesLine2: "DNB (Ophthalmology)",
    role: "Consultant Ophthalmologist",
    department: "Phaco & Oculoplasty Surgery",
    image: "/images/WhatsApp-Image-2023-02-08-at-3.27.13-PM.webp",
    isVisiting: true,
  },
  {
    id: "dr-kaushick-biswas",
    name: "Dr. Kaushick Biswas",
    qualifications: "MBBS, MS, DNB",
    degreesLine1: "MBBS, MS",
    degreesLine2: "DNB (Vitreo-Retina)",
    role: "Vitreo-retinal Surgeon",
    department: "Retina & Vitreous Surgery",
    image: "/images/Dr-Kaushick-1.webp",
    isVisiting: true,
  },
  {
    id: "dr-surendra-prakash",
    name: "Dr. Surendra Prakash",
    qualifications: "MBBS, MS (Ophthalmology)",
    degreesLine1: "MBBS",
    degreesLine2: "MS (Ophthalmology)",
    role: "Vitreo-retina Specialist",
    department: "Fellowship in Vitreo-retina",
    image: "/images/Surendra-Prakash.webp",
    isVisiting: true,
  },
  {
    id: "dr-john-sarkar",
    name: "Dr. John Sarkar",
    qualifications: "MBBS, DO, MS (Ophthal) FAIMPR (Cornea)",
    degreesLine1: "MBBS, DO, MS (Ophthal)",
    degreesLine2: "FAIMPR (Cornea)",
    role: "Cornea Surgeon",
    department: "Cornea & External Eye Diseases",
    image: "/images/AN-New-Format-25-32.webp",
    isVisiting: true,
  },
  {
    id: "dr-asmita-saha",
    name: "Dr. Asmita Saha",
    qualifications: "MBBS, DNB (Ophthalmology), FVRS",
    degreesLine1: "MBBS, DNB (Ophthalmology)",
    degreesLine2: "FVRS (Vitreo-Retina)",
    role: "Senior Vitreoretinal Surgeon",
    department: "Senior Vitreoretinal Surgeon",
    image: "/images/ASMITA.webp",
    isVisiting: true,
  },
];
