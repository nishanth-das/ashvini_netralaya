export interface BlogSection {
  heading: string;
  subheading?: string;
  paragraphs: string[];
  keyPoints?: string[];
  callout?: {
    type: "tip" | "warning" | "note";
    title: string;
    text: string;
  };
  table?: {
    headers: string[];
    rows: string[][];
  };
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  category: "Cataract Care" | "Retina & Diabetes" | "Glaucoma" | "Pediatric Vision" | "Surgical Innovations" | "Eye Emergencies";
  readTime: string;
  publishedAt: string;
  updatedAt: string;
  author: {
    name: string;
    role: string;
    qualifications: string;
    image: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
  keyTakeaways: string[];
  sections: BlogSection[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServices: {
    title: string;
    slug: string;
    description: string;
  }[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "choosing-right-cataract-lens-monofocal-toric-multifocal",
    title: "Choosing the Right Lens for Cataract Surgery: Monofocal, Toric, or Multifocal? A Surgeon's Guide",
    excerpt: "Confused between Monofocal, Toric, Multifocal, and EDOF intraocular lenses (IOLs)? Here is an honest, clinical breakdown to help you pick the perfect lens for your lifestyle, budget, and vision goals.",
    coverImage: "/images/WhatsApp-Image-2023-06-03-at-2.27.43-AM-1.webp",
    category: "Cataract Care",
    readTime: "7 min read",
    publishedAt: "November 12, 2026",
    updatedAt: "November 16, 2026",
    author: {
      name: "Dr. Anurag Majumdar",
      role: "Chairman and CEO | Phaco & Anterior Segment Surgery",
      qualifications: "MBBS, MS (Ophthalmology)",
      image: "/images/Dr-anurag.webp",
    },
    seo: {
      metaTitle: "Cataract Lens Selection Guide: Monofocal vs Toric vs Multifocal | Ashvini Netralaya",
      metaDescription: "Learn how to choose the best intraocular lens (IOL) for your cataract surgery. Honest comparison of Monofocal, Toric, Multifocal, and EDOF lenses by Dr. Anurag Majumdar.",
      keywords: [
        "cataract lens types india",
        "monofocal vs multifocal lens cataract",
        "toric lens for astigmatism agartala",
        "phaco cataract surgery tripura",
        "best lens for cataract surgery",
        "cataract surgery cost agartala",
      ],
    },
    keyTakeaways: [
      "A cataract cannot be dissolved with eye drops, diet, or eye exercises; surgical replacement of the cloudy natural lens with an artificial IOL is the only definitive cure.",
      "Monofocal lenses offer crystal-clear distance vision at a very economical cost, though you will still need reading glasses for near tasks.",
      "If you have corneal astigmatism (cylindrical power over 0.75D), a Toric IOL will dramatically sharpen your vision without requiring post-op cylindrical glasses.",
      "Multifocal and Extended Depth of Focus (EDOF) lenses provide maximum independence from glasses for distance, computer screens, and reading.",
      "The 'most expensive' lens is not necessarily the best for everyone; your daily hobbies, night driving frequency, and retinal health dictate the ideal choice.",
    ],
    sections: [
      {
        heading: "1. The Big Decision: Why Lens Choice Matters So Much",
        paragraphs: [
          "When patients walk into our OPD at Ashvini Netralaya for a cataract evaluation, one question consistently creates anxiety: 'Doctor, which lens should I choose? There are so many options, and prices vary widely.'",
          "During modern stitchless cataract surgery (Phacoemulsification), we remove your eye's natural cloudy lens using microscopic ultrasound vibrations through a tiny 1.8mm to 2.2mm opening. In its place, we insert a permanent, biocompatible artificial lens known as an Intraocular Lens (IOL). Unlike contact lenses, an IOL never needs cleaning, will never dislodge, and lasts a lifetime.",
          "Because this lens stays with you permanently, choosing the right optic design is one of the most critical healthcare decisions you will make. Let us look past the marketing jargon and examine how each lens performs in the real world.",
        ],
      },
      {
        heading: "2. The Lens Types: Real Differences in Daily Vision",
        subheading: "Monofocal, Toric, Multifocal, and EDOF Explained",
        paragraphs: [
          "To make an informed decision, you need to understand that lenses differ primarily in their focal points—the specific distances at which they bend light into sharp focus on your retina.",
        ],
        table: {
          headers: ["Lens Type", "Distance Vision (Driving, TV)", "Intermediate (Computer, Mobile)", "Near Vision (Reading, Sewing)", "Ideal Candidate"],
          rows: [
            ["Standard Monofocal", "Sharp & High Contrast", "Requires Reading Glasses", "Requires Reading Glasses", "Budget-conscious, patients happy wearing reading glasses"],
            ["Toric Monofocal", "Sharp & Corrects Astigmatism", "Requires Reading Glasses", "Requires Reading Glasses", "Patients with cylindrical eye power (astigmatism > 0.75D)"],
            ["Multifocal / Trifocal", "Clear", "Clear", "Clear (90%+ glasses-free)", "Active seniors who want minimal dependence on glasses"],
            ["EDOF (Extended Depth)", "Exceptional Clarity", "Very Sharp & Seamless", "May need light glasses for fine print", "Night drivers, computer professionals, golf & sports players"],
          ],
        },
        callout: {
          type: "tip",
          title: "Surgeon's Rule of Thumb",
          text: "If you spend 6 hours a day working on a laptop or driving at night, an EDOF or Monofocal lens often produces better optical satisfaction with fewer night-time halos than traditional multifocals.",
        },
      },
      {
        heading: "3. What About Astigmatism? Why Toric Lenses Are Essential",
        paragraphs: [
          "Many people have an irregularly shaped cornea—shaped more like an oval rugby ball than a round basketball. This condition is called corneal astigmatism, and it causes blurry or shadowed vision regardless of distance.",
          "If your pre-operative optical biometry (which we measure using high-precision non-contact laser biometers at Ashvini Netralaya) shows astigmatism above 0.75 to 1.0 diopter, a standard spherical lens will leave residual blurriness. You will still have to wear thick cylindrical glasses even for watching television.",
          "A Toric IOL has customized astigmatic correction built right into the lens optic. During surgery, your surgeon precisely aligns the lens along the steep corneal axis. The result? Unprecedented high-definition distance vision without relying on glasses.",
        ],
      },
      {
        heading: "4. Who Should Avoid Multifocal Lenses?",
        paragraphs: [
          "Multifocal lenses split incoming light into multiple focal rings so you can see far and near. While this provides extraordinary freedom from spectacles, it requires a healthy retina and optic nerve.",
          "If you have established diabetic retinopathy, age-related macular degeneration (AMD), or advanced glaucoma, light-splitting optics can diminish contrast sensitivity. In such cases, our surgeons strongly recommend a premium monofocal or aspheric monofocal lens, which delivers maximum light intensity to the retina.",
          "Furthermore, if you drive commercial vehicles frequently at night, multifocal rings can occasionally produce faint halos around oncoming headlights. Being honest about your daily lifestyle ensures you love your new eyesight.",
        ],
        callout: {
          type: "warning",
          title: "Beware of Unrealistic Guarantees",
          text: "No ethical surgeon will promise '100% guarantee that you will never touch glasses again.' What premium multifocal and EDOF lenses deliver is 90% to 95% spectacle independence for your daily activities.",
        },
      },
      {
        heading: "5. What to Expect on Surgery Day at Ashvini Netralaya",
        paragraphs: [
          "Gone are the days when cataract surgery meant a 3-day hospital admission and painful needle injections around the eyeball. At Ashvini Netralaya, modern Phaco surgery is a calm, outpatient experience:",
          "1. **Topical Anesthetic Eye Drops**: No injections into the facial nerves. Numbing drops ensure you feel no pain during the procedure.",
          "2. **Microscopic 1.8mm Incision**: The cataract is liquefied using gentle ultrasound waves, and the foldable lens is injected through an incision so small it seals naturally without a single suture.",
          "3. **Procedure Duration**: The entire operation takes roughly 10 to 15 minutes in our laminar-flow modular operating theaters.",
          "4. **Return Home the Same Day**: You can walk out within 2 hours wearing protective clear goggles and relax comfortably at home.",
        ],
      },
    ],
    faqs: [
      {
        question: "Can an intraocular lens (IOL) expire or slip out of place years later?",
        answer: "No. Modern IOLs are crafted from medical-grade hydrophobic or hydrophilic acrylic materials that remain clear, inert, and stable inside your eye's natural capsule for life. They never degrade or expire.",
      },
      {
        question: "Does health insurance or Ayushman Bharat cover premium Toric and Multifocal lenses?",
        answer: "Most government schemes and basic insurance policies cover standard monofocal cataract surgery entirely. For premium Toric or Multifocal lenses, many insurance policies allow you to pay the marginal difference for the upgraded optic while covering the base hospital and surgical charges.",
      },
      {
        question: "How long after surgery can I resume reading, cooking, or watching TV?",
        answer: "Most patients watch television comfortably the very next day. You can resume light household activities and office work within 48 to 72 hours, provided you avoid splashing tap water directly into the eye and follow your prescribed antibiotic-steroid eye drop schedule.",
      },
    ],
    relatedServices: [
      {
        title: "Cataract Surgery (Phaco)",
        slug: "cataract-surgery-phaco",
        description: "Stitchless, injection-free micro-incision cataract surgery with premium IOL options.",
      },
      {
        title: "Lasers & High-Precision Diagnostics",
        slug: "lasers-and-diagnostics",
        description: "Carl Zeiss Optical Biometry and OCT scans for micron-accurate IOL power calculations.",
      },
    ],
  },
  {
    slug: "diabetic-retinopathy-early-warning-signs-and-treatment",
    title: "How Diabetes Secretly Damages Your Eyes: Early Warning Signs of Diabetic Retinopathy You Shouldn't Ignore",
    excerpt: "Diabetic retinopathy is the leading cause of preventable blindness in adults. Learn how diabetes silently affects retinal micro-vessels, why 20/20 vision can hide dangerous bleeding, and how early laser or anti-VEGF therapy saves sight.",
    coverImage: "/images/WhatsApp-Image-2023-06-03-at-2.13.30-AM.webp",
    category: "Retina & Diabetes",
    readTime: "8 min read",
    publishedAt: "November 10, 2026",
    updatedAt: "November 15, 2026",
    author: {
      name: "Dr. Kaushick Biswas",
      role: "Senior Vitreo-Retinal Surgeon | Sankara Nethralaya Fellow",
      qualifications: "MBBS, MS, DNB (Vitreo-Retina)",
      image: "/images/Dr-Kaushick-1.webp",
    },
    seo: {
      metaTitle: "Diabetic Retinopathy Symptoms, Stages & Treatment in Agartala | Ashvini Netralaya",
      metaDescription: "Understand the early stages of diabetic retinopathy, macular edema, anti-VEGF injections, and retinal laser treatments. Expert insights by Dr. Kaushick Biswas.",
      keywords: [
        "diabetic retinopathy symptoms agartala",
        "diabetic eye screening tripura",
        "retina laser treatment northeast india",
        "anti vegf injection cost tripura",
        "diabetic macular edema treatment",
        "best retina surgeon agartala",
      ],
    },
    keyTakeaways: [
      "You can have severe diabetic retinal capillary damage even while your vision remains completely sharp and 20/20.",
      "High blood sugar weakens tiny retinal blood vessels, causing microaneurysms that leak protein, fluid, and blood into the macula.",
      "Diabetic Macular Edema (DME) is the most common cause of vision loss in working-age diabetics and can be reversed if treated promptly with Anti-VEGF injections.",
      "Every person diagnosed with Type 2 diabetes must undergo a dilated retina examination and OCT scan at least once every 12 months.",
      "Strict control of HbA1c (below 7%), blood pressure (<130/80 mmHg), and serum lipids drastically reduces your risk of retinal hemorrhage.",
    ],
    sections: [
      {
        heading: "1. The Silent Menace Behind 'Normal' Vision",
        paragraphs: [
          "In our retina clinic at Ashvini Netralaya, we frequently meet patients who say: 'Doctor, I have had diabetes for 12 years, but my eyesight was perfect until last week when sudden black spots appeared. How could my eyes deteriorate so fast?'",
          "The sobering truth is that diabetic retinopathy does not develop overnight. It progresses silently over years. The retina—the light-sensitive neurosensory wallpaper lining the back of your eye—is packed with microscopic capillaries.",
          "Chronic exposure to elevated blood glucose damages the delicate walls of these capillaries (pericyte loss). They balloon out into microaneurysms, leak plasma and lipids, and eventually starve parts of the retina of oxygen.",
          "Because your peripheral retina often suffers damage first while the central macula remains untouched in early stages, you may notice zero blurriness while dangerous changes are underway.",
        ],
      },
      {
        heading: "2. The Stages of Diabetic Retinopathy",
        paragraphs: [
          "Ophthalmologists classify diabetic eye disease into two broad progressive stages:",
          "**1. Non-Proliferative Diabetic Retinopathy (NPDR)**: In this initial stage, retinal blood vessels leak fluid and tiny dots of blood (dot-and-blot hemorrhages). It ranges from mild to moderate and severe.",
          "**2. Proliferative Diabetic Retinopathy (PDR)**: When capillary blockages starve large areas of the retina of oxygen (ischemia), the eye panics and releases abnormal growth factors (VEGF). This stimulates the growth of fragile, abnormal new blood vessels (neovascularization). These abnormal vessels bleed easily into the vitreous cavity (vitreous hemorrhage) and can tug on the retina, causing a tractional retinal detachment.",
        ],
        table: {
          headers: ["Stage", "Symptoms", "Clinical Findings", "Standard Management"],
          rows: [
            ["Mild NPDR", "None", "Isolated microaneurysms", "HbA1c optimization, annual dilated checkup"],
            ["Moderate/Severe NPDR", "Mild fluctuations in focus", "Widespread hemorrhages, cotton wool spots", "Dilated exam every 4-6 months, OCT scan"],
            ["Diabetic Macular Edema (DME)", "Central blur, wavy straight lines", "Fluid swelling in central retina", "Intravitreal Anti-VEGF injections (Lucentis/Eylea/Avastin)"],
            ["Proliferative Retinopathy (PDR)", "Sudden floaters, cobwebs, red haze", "Fragile new vessels, vitreous bleed", "Pan-Retinal Green Laser (PRP) + Anti-VEGF or Vitrectomy"],
          ],
        },
      },
      {
        heading: "3. Diabetic Macular Edema (DME): Why Things Look Wavy",
        paragraphs: [
          "The macula is the center of your retina responsible for sharp, reading vision. When leaky diabetic vessels cause fluid swelling within the macula, your vision becomes blurred, colors look washed out, and straight lines (such as door frames or graph paper) appear wavy or distorted.",
          "At Ashvini Netralaya, we diagnose DME using the gold-standard Carl Zeiss Cirrus HD-OCT (Optical Coherence Tomography). In less than 3 seconds, this non-invasive laser scan generates microscopic cross-sectional images of your retinal layers, measuring fluid accumulation down to the single micron level.",
        ],
        callout: {
          type: "tip",
          title: "The Home Amsler Grid Test",
          text: "Diabetic patients should check each eye separately once a week using an Amsler grid (or a bathroom tile pattern). If straight grid lines appear bent, wavy, or missing, contact your retina specialist immediately.",
        },
      },
      {
        heading: "4. Modern Treatments: Injections, Lasers, and Vitrectomy",
        paragraphs: [
          "A diagnosis of diabetic retinopathy no longer means inevitable blindness. Over the past decade, vitreoretinal medicine has undergone a revolutionary transformation:",
          "**1. Anti-VEGF Injections**: Painless, microscopic injections given inside the vitreous cavity using numbing eye drops. Medications such as Ranibizumab, Aflibercept, and Bevacizumab block abnormal leakage, rapidly drying up macular swelling and restoring clarity.",
          "**2. 532nm Green Laser (Pan-Retinal Photocoagulation)**: We use targeted laser energy to seal off ischemic peripheral retinal zones. This stops the release of VEGF and permanently shrinks dangerous new vessels, preventing catastrophic hemorrhages.",
          "**3. 25-Gauge/27-Gauge Micro-Incision Vitrectomy (MIVS)**: For patients with non-clearing vitreous bleeding or retinal detachment, our surgical team performs sutureless vitrectomy, delicately clearing blood and relieving retinal traction under high-magnification surgical operating microscopes.",
        ],
      },
      {
        heading: "5. The Golden Rule of Diabetic Eye Protection",
        paragraphs: [
          "Treating the eye without managing your systemic health is like baling water out of a boat while the leak remains open. Clinical trials prove that maintaining an HbA1c below 7.0%, controlling systolic blood pressure below 130 mmHg, and keeping kidney parameters healthy reduces retinopathy progression by over 70%.",
          "Do not wait for your vision to fail. If you have diabetes, schedule your comprehensive dilated retina examination today.",
        ],
      },
    ],
    faqs: [
      {
        question: "Does an eye injection for diabetes hurt?",
        answer: "Almost not at all. Before the injection, topical numbing drops and betadine antiseptic are applied thoroughly. Patients feel a mild momentary pressure lasting 2 seconds, but no sharp needle pain. You can walk out and return home immediately.",
      },
      {
        question: "How often does a diabetic need an eye checkup?",
        answer: "If your retina shows no retinopathy, once every 12 months is standard. If you have mild or moderate retinopathy, your specialist will monitor you every 4 to 6 months. Patients with macular edema undergoing active treatment may visit monthly during the initial loading dose phase.",
      },
      {
        question: "Can laser treatment restore lost vision?",
        answer: "Retinal laser photocoagulation is designed primarily to stabilize vision and prevent severe future blindness, rather than reversing existing damage. However, when combined with Anti-VEGF injections, many patients experience significant visual improvement.",
      },
    ],
    relatedServices: [
      {
        title: "Retina Surgeries & Diabetic Eye Care",
        slug: "retina-surgeries",
        description: "Advanced 25G/27G sutureless vitrectomy, Anti-VEGF pharmacotherapy, and green laser photocoagulation.",
      },
      {
        title: "Lasers & High-Precision Diagnostics",
        slug: "lasers-and-diagnostics",
        description: "Zeiss Cirrus HD-OCT and digital fundus photography for early microvascular leakage detection.",
      },
    ],
  },
  {
    slug: "glaucoma-silent-thief-of-sight-symptoms-prevention",
    title: "Glaucoma: The Silent Thief of Sight — Why Normal Vision Doesn't Always Mean Healthy Eyes",
    excerpt: "Glaucoma damages your optic nerve without causing pain, red eyes, or noticeable blurriness until 80% of fibers are permanently destroyed. Learn the risk factors, the importance of eye pressure screening, and modern pressure-lowering therapies.",
    coverImage: "/images/G1.webp",
    category: "Glaucoma",
    readTime: "7 min read",
    publishedAt: "November 08, 2026",
    updatedAt: "November 14, 2026",
    author: {
      name: "Dr. Dipanjali Majumder",
      role: "Glaucoma and Phaco Surgeon",
      qualifications: "MBBS, MS (Ophthalmology), Fellowship in Glaucoma",
      image: "/images/Dipanjali.webp",
    },
    seo: {
      metaTitle: "Glaucoma Symptoms, Eye Pressure & Laser Surgery in Agartala | Ashvini Netralaya",
      metaDescription: "Learn why glaucoma is called the silent thief of sight. Understand intraocular pressure (IOP), visual field tests, YAG iridotomy, and trabeculectomy with Dr. Dipanjali Majumder.",
      keywords: [
        "glaucoma treatment agartala tripura",
        "eye pressure test cost agartala",
        "glaucoma specialist doctor tripura",
        "yag iridotomy agartala",
        "trabeculectomy surgery tripura",
        "silent thief of sight symptoms",
      ],
    },
    keyTakeaways: [
      "Glaucoma causes irreversible optic nerve damage; vision lost to glaucoma can never be brought back, but further loss can be 100% prevented.",
      "Most glaucoma cases (Primary Open-Angle Glaucoma) are completely painless with no red eye, headaches, or early blurring.",
      "Normal eye pressure (IOP) ranges between 10 and 21 mmHg; however, up to 30% of Asian patients develop Normal Tension Glaucoma at normal pressure.",
      "A comprehensive glaucoma workup must include Goldmann applanation tonometry, gonioscopy, Humphrey Visual Field (HFA3) testing, and Zeiss OCT nerve fiber analysis.",
      "Daily compliance with prescribed pressure-lowering eye drops is life-saving for your vision; never stop drops without your doctor's explicit approval.",
    ],
    sections: [
      {
        heading: "1. Why Glaucoma Is Feared Around the World",
        paragraphs: [
          "Imagine looking through a clean window where the outer edges slowly frost over, millimeter by millimeter, over several years. Because your central vision remains clear, your brain compensates and you don't notice anything wrong—until one day you bump into doorframes or trip over steps.",
          "This is how Glaucoma behaves, earning its title as 'The Silent Thief of Sight.'",
          "Your eye constantly produces a clear, nourishing fluid called aqueous humor. In a healthy eye, this fluid drains out through a microscopic meshwork at the angle between the iris and cornea. When this drainage becomes clogged or blocked, intraocular pressure (IOP) rises.",
          "Over time, high pressure compresses and destroys the more than one million fragile nerve fibers forming your optic nerve—the cable that transmits visual data from your retina to your brain.",
        ],
      },
      {
        heading: "2. Open-Angle vs Closed-Angle Glaucoma: Key Differences",
        paragraphs: [
          "In India and Southeast Asia, both types of glaucoma are prevalent:",
          "**Primary Open-Angle Glaucoma (POAG)**: The drainage canal appears open, but microscopic resistance causes pressure to rise slowly over months. It is 100% painless.",
          "**Angle-Closure Glaucoma (PACG)**: More common in Asian eyes with anatomically shallow anterior chambers. The iris bunches up against the drainage meshwork, suddenly blocking fluid outflow. An acute angle-closure attack causes severe eye ache, violent one-sided headaches, nausea, vomiting, and colored rainbow halos around street lights. This is a medical emergency requiring urgent hospital intervention within hours.",
        ],
        callout: {
          type: "warning",
          title: "Acute Attack Warning",
          text: "If you experience sudden severe eye pain accompanied by a pounding headache, nausea, and hazy vision with rainbow halos, rush to the emergency room immediately. Delayed care can cause permanent blindness within 24 to 48 hours.",
        },
      },
      {
        heading: "3. Who Is Most at Risk?",
        paragraphs: [
          "While anyone can develop glaucoma, you need immediate screening if you possess any of the following risk factors:",
          "- **Age Over 40**: The risk of glaucoma climbs substantially with each decade of life.",
          "- **Family History**: Having a first-degree relative (parent or sibling) with glaucoma increases your personal risk 4 to 9 times.",
          "- **Steroid Use**: Using over-the-counter steroid eye drops (often sold illegally for red eyes) or taking systemic steroid inhalers/tablets.",
          "- **High Myopia (Short-sightedness) or High Hyperopia**: Anatomically predisposes eyes to open or narrow angles.",
          "- **Diabetes & Hypertension**: Compromises microvascular perfusion to the optic nerve head.",
        ],
      },
      {
        heading: "4. The Modern 4-Pillar Glaucoma Diagnostic Battery",
        paragraphs: [
          "At Ashvini Netralaya, we never diagnose or rule out glaucoma on eye pressure alone. A complete assessment requires four precision tests:",
          "1. **Goldmann Applanation Tonometry**: The international gold standard for measuring true intraocular pressure.",
          "2. **Gonioscopy**: Examining the microscopic drainage angle using a specialized multi-mirror contact lens to differentiate open versus narrow angles.",
          "3. **Humphrey Visual Field Analysis (HFA3)**: Computerized perimetry mapping your peripheral visual sensitivity to detect early functional blind spots before you notice them.",
          "4. **Carl Zeiss Cirrus OCT (RNFL & Ganglion Cell Complex)**: Optical coherence tomography measuring the structural thickness of your retinal nerve fiber layer with sub-micron precision.",
        ],
      },
      {
        heading: "5. Treatment Options: Eye Drops, Lasers, and Surgery",
        paragraphs: [
          "Although lost optic nerve fibers cannot be regenerated, we can reliably halt further damage by lowering intraocular pressure to your individualized 'Target Pressure':",
          "- **Prescription Eye Drops**: Prostaglandin analogs, Beta-blockers, and Carbonic Anhydrase inhibitors either reduce fluid production or boost drainage. Must be taken consistently every single day.",
          "- **Nd:YAG Laser Peripheral Iridotomy (LPI)**: A 2-minute outpatient laser procedure that creates a microscopic safety bypass in the iris, permanently preventing acute angle-closure attacks.",
          "- **Trabeculectomy & Valve Implants**: Precision microsurgery creating a new drainage channel (bleb) under the eyelid when medications and lasers cannot control eye pressure.",
        ],
      },
    ],
    faqs: [
      {
        question: "If I don't feel any pain or blurriness, why do I have to take eye drops every day?",
        answer: "Glaucoma is like high blood pressure: you cannot feel elevated eye pressure. If you skip your daily drops, the pressure climbs silently, killing off thousands of optic nerve fibers each month. Once those fibers die, that peripheral vision is gone permanently.",
      },
      {
        question: "Can lifestyle changes or eye yoga cure glaucoma?",
        answer: "No. While regular aerobic exercise and avoiding inverted yoga postures (like headstands) are beneficial, no exercise, diet, or herbal remedy can replace medical pressure-lowering therapies. Only proven medical and surgical treatments can protect your optic nerve.",
      },
      {
        question: "Is laser treatment for narrow-angle glaucoma painful?",
        answer: "Not at all. YAG Laser Iridotomy is performed as an outpatient procedure using numbing eye drops. You sit comfortably at a specialized slit-lamp microscope, and the laser takes less than two minutes. You can go home immediately afterwards.",
      },
    ],
    relatedServices: [
      {
        title: "Glaucoma Diagnostics & Surgery",
        slug: "glaucoma-surgeries",
        description: "Comprehensive Goldmann tonometry, HFA3 visual field perimetry, YAG iridotomy, and trabeculectomy.",
      },
      {
        title: "Lasers & High-Precision Diagnostics",
        slug: "lasers-and-diagnostics",
        description: "Zeiss OCT RNFL analysis and anterior segment imaging for angle evaluation.",
      },
    ],
  },
  {
    slug: "children-screen-time-myopia-and-squint-care",
    title: "Children, Smartphones & Glasses: How to Protect Your Child's Vision in the Digital Age",
    excerpt: "Childhood myopia (short-sightedness) is rising rapidly across Tripura. Discover how screen time triggers eyeball elongation, why outdoor sunlight protects vision, and how to spot silent squint and lazy eye (amblyopia) before age 8.",
    coverImage: "/images/little-girl-checking-up-her-sight-ophthalmology-center-1-1-scaled.webp",
    category: "Pediatric Vision",
    readTime: "6 min read",
    publishedAt: "November 05, 2026",
    updatedAt: "November 12, 2026",
    author: {
      name: "Dr. Paichainda Mog",
      role: "Chief Paediatric Ophthalmology Consultant",
      qualifications: "MBBS, MS (Ophthalmology)",
      image: "/images/Paichanda-Mog.webp",
    },
    seo: {
      metaTitle: "Children Screen Time, Myopia & Squint Treatment in Agartala | Ashvini Netralaya",
      metaDescription: "Practical guide by paediatric eye specialist Dr. Paichainda Mog on childhood myopia control, digital eye strain, lazy eye (amblyopia), and squint correction in Agartala.",
      keywords: [
        "pediatric eye doctor agartala tripura",
        "child myopia control glasses agartala",
        "squint surgery children tripura",
        "amblyopia lazy eye treatment agartala",
        "screen time eye damage kids",
        "children eye specialist near me",
      ],
    },
    keyTakeaways: [
      "School-age children who spend more than 2 hours daily on smartphones and tablets have a 3x higher risk of developing progressive myopia.",
      "Natural outdoor sunlight triggers dopamine release in the retina, which slows the abnormal elongation of the growing eyeball.",
      "Amblyopia (Lazy Eye) must be detected and treated with occlusion patching before age 7 to 8; after age 9, brain visual neural plasticity drops significantly.",
      "Squint (strabismus) is never a 'cosmetic flaw that a child will outgrow'; untreated squint causes permanent suppression of 3D depth perception.",
      "Every child should have their first professional dilated eye exam before entering primary school, even if they never complain of blurry vision.",
    ],
    sections: [
      {
        heading: "1. The Modern Myopia Boom: What Is Happening to Our Children?",
        paragraphs: [
          "In school vision screening camps conducted across Agartala and rural Tripura by the Ashvini Netralaya team, we are observing an unprecedented trend: nearly 30% of school-age children now require corrective glasses, compared to fewer than 12% a generation ago.",
          "What has changed? Our children's visual environment.",
          "When a child looks at a smartphone or tablet held 20 centimeters from their face, their eyes are locked into continuous accommodation and convergence. The ciliary muscles spasm, and physiological signals cause the growing eyeball to elongate from front to back (axial elongation).",
          "Because an elongated eyeball focuses distant light in front of the retina rather than directly upon it, distance vision becomes blurred—a condition known as Myopia or short-sightedness.",
        ],
      },
      {
        heading: "2. The Biological Magic of Outdoor Sunlight",
        paragraphs: [
          "Parents often ask: 'Doctor, should we ban screens completely?' While reducing recreational screen time is vital, clinical research from worldwide ophthalmic trials highlights an even more powerful protective factor: **Outdoor Sunlight**.",
          "When children play outdoors in natural daylight (even on cloudy days), light levels of 10,000 lux or higher stimulate specialized amacrine cells in the retina to produce dopamine. Dopamine acts as a natural brake, halting abnormal elongation of the sclera and eyeball.",
          "Clinical trials demonstrate that just **90 to 120 minutes of daily outdoor play** reduces the risk of developing myopia by up to 50%.",
        ],
        callout: {
          type: "tip",
          title: "The 20-20-20 Rule for Study Sessions",
          text: "Teach your child the 20-20-20 rule: Every 20 minutes of reading or screen work, look up at an object at least 20 feet away for 20 seconds. This relaxes the intraocular focusing muscles instantly.",
        },
      },
      {
        heading: "3. Warning Signs Parents Frequently Miss",
        paragraphs: [
          "Young children rarely say, 'Mummy, my left eye is blurry.' To a child, however they see is what they assume everyone sees. Watch closely for these telltale behavioral signs:",
          "- Squinting or narrowing eyes when looking at the classroom blackboard or television.",
          "- Sitting abnormally close to the television or holding books inches from the nose.",
          "- Tilting the head or turning one ear forward to look at faces.",
          "- Frequent eye rubbing, excessive blinking, or red, watery eyes after school.",
          "- Avoiding reading or sports, or declining school grades despite good intellect.",
        ],
      },
      {
        heading: "4. Amblyopia (Lazy Eye): The Critical Age-8 Window",
        paragraphs: [
          "If one eye has a high refractive power while the other eye is normal, or if one eye has a slight squint, the developing brain receives a blurred image from the weaker eye. To avoid confusion, the brain simply ignores (suppresses) the signal from that eye.",
          "This is **Amblyopia** (Lazy Eye). The eye appears physically normal, but the brain never develops the neural wiring to see 20/20.",
          "The critical window for treating amblyopia is before the age of 7 or 8. By prescribing corrective glasses and patching the stronger eye for a few hours daily, we force the brain to activate the weaker eye. If left undetected until teenage years, the visual impairment becomes permanent and cannot be corrected by glasses or surgery.",
        ],
      },
      {
        heading: "5. Squint (Strabismus): Never Wait for a Child to 'Outgrow' It",
        paragraphs: [
          "A persistent myth in our society is that a baby's crossed eyes will 'straighten out as they grow up.' This is biologically false and medically dangerous.",
          "While mild transient uncoordinated eye movements are common in infants under 4 months, any misalignment persisting beyond 4 months requires immediate evaluation by a paediatric ophthalmologist.",
          "At Ashvini Netralaya, paediatric strabismus management includes refractive correction with specialized glasses, vision therapy, and precision extraocular muscle realignment surgery. Realigning the visual axes restores stereopsis—the precious 3D depth perception essential for driving, sports, and fine motor professions.",
        ],
      },
    ],
    faqs: [
      {
        question: "At what age should my child have their first eye test?",
        answer: "Every child should undergo a baseline eye exam by an eye specialist between 3 and 4 years of age before starting formal school, and sooner if you notice misaligned eyes, a white reflex in pupil photos, or squinting.",
      },
      {
        question: "Can special blue-light filter glasses stop myopia from getting worse?",
        answer: "No. While blue-cut lenses may reduce glare and digital eye fatigue, clinical evidence shows they do not slow down eyeball elongation or prevent myopia progression. Proven myopia control methods include low-dose atropine eye drops, specialized defocus myopia control lenses, and 2 hours of daily outdoor play.",
      },
      {
        question: "Is squint surgery for children safe?",
        answer: "Yes, extremely safe. Squint correction is performed on the tiny external muscles on the surface of the eyeball; the surgeon does not cut into the eyeball or affect the optic nerve. Children recover quickly and usually return to school within 5 to 7 days.",
      },
    ],
    relatedServices: [
      {
        title: "Paediatric Ophthalmology & Squint",
        slug: "paediatric-eye-care",
        description: "Specialized child vision clinic, amblyopia patching therapy, and micro-precision squint correction.",
      },
      {
        title: "Cornea & Ocular Surface Clinic",
        slug: "cornea-services",
        description: "Management of allergic conjunctivitis, dry eyes, and corneal scratches in children.",
      },
    ],
  },
  {
    slug: "modern-stitchless-phaco-cataract-surgery-what-to-expect",
    title: "No Injections, No Stitches, No Bandages: What to Expect During Modern Day-Care Phaco Surgery",
    excerpt: "Afraid of cataract surgery? Learn step-by-step how modern MICS Phacoemulsification works at Ashvini Netralaya. From painless topical numbing drops to same-day discharge in 2 hours, here is everything you need to know.",
    coverImage: "/images/About-Us.webp",
    category: "Surgical Innovations",
    readTime: "7 min read",
    publishedAt: "November 03, 2026",
    updatedAt: "November 11, 2026",
    author: {
      name: "Dr. Subrata Saha",
      role: "Chief Operating Officer | Phaco & Anterior Segment Surgery",
      qualifications: "MBBS, MS (Ophthalmology)",
      image: "/images/Dr-Subrata.webp",
    },
    seo: {
      metaTitle: "Modern Stitchless Phaco Cataract Surgery in Agartala | Ashvini Netralaya",
      metaDescription: "Step-by-step guide to day-care stitchless phaco cataract surgery at Ashvini Netralaya. No needles, no pain, 15-minute procedure, and quick recovery by Dr. Subrata Saha.",
      keywords: [
        "stitchless cataract surgery agartala",
        "phaco cataract surgery recovery time",
        "cataract operation without injection tripura",
        "day care eye surgery agartala",
        "ashvini netralaya cataract surgery reviews",
        "phacoemulsification agartala cost",
      ],
    },
    keyTakeaways: [
      "Traditional cataract surgery requiring large incisions, sutures, and bulky eye patches has been superseded by 1.8mm Micro-Incision Cataract Surgery (MICS).",
      "No painful injections around the eye: surgery is performed comfortably under topical anesthetic eye drops.",
      "The entire procedure takes only 10 to 15 minutes inside state-of-the-art modular laminar airflow operating rooms.",
      "Patients walk in, undergo surgery, and return home within 2 to 3 hours with clear protective goggles instead of a heavy bandage.",
      "Clear, high-contrast vision begins returning within 24 hours, with full recovery within a few days.",
    ],
    sections: [
      {
        heading: "1. Dispelling Old Fears of Cataract Operations",
        paragraphs: [
          "For decades, the words 'eye operation' evoked frightening images: huge needles pushed under the eyeball, stitches that scratched with every blink, sandbags placed beside the head to keep the patient still, and a week-long stay in hospital beds.",
          "At Ashvini Netralaya, we are proud to say those days are long gone.",
          "Thanks to remarkable advancements in ophthalmic micro-engineering, cataract surgery today is an elegant, outpatient procedure that takes less than 15 minutes. In fact, many of our patients remark on the operating table: 'Doctor, are you really done? I didn't feel anything!'",
          "Here is an unvarnished, step-by-step walkthrough of what actually happens from the moment you arrive at our Agartala hospital on surgery morning.",
        ],
      },
      {
        heading: "2. The Surgery Day Timeline: Step by Step",
        paragraphs: [
          "**9:30 AM — Arrival & Pre-Operative Preparation**",
          "You arrive at Ashvini Netralaya accompanied by a family member. Our clinical nurses confirm your pre-operative vital signs (blood pressure and blood sugar) and administer gentle dilating and antibiotic eye drops. You do not need to fast for 12 hours; a light breakfast is completely fine.",
          "**10:15 AM — The Anesthetic: Topical Drops Only**",
          "Instead of a painful needle block into your eye socket, we use advanced 'Topical Anesthesia.' Specially formulated numbing eye drops are placed in your eye over several minutes. The surface of your eye becomes completely insensitive to pain, while your heart and breathing remain totally relaxed.",
          "**10:30 AM — Inside the Modular Operating Theater**",
          "You are escorted into our ultra-clean, laminar airflow modular OT. You lie down on a soft, contoured surgical bed. A sterile, breathable drape is placed over your face with an opening around the eye. A gentle eyelid holder keeps you from blinking.",
          "You will look up at three soft lights from the Carl Zeiss surgical microscope. You will hear gentle humming sounds from the Alcon phacoemulsification console and soothing music playing in the theater.",
          "**The Microscopic Procedure (10 to 15 minutes)**",
          "Through a self-sealing 1.8mm micro-incision at the edge of the cornea, the surgeon creates a circular opening in the thin lens capsule (capsulorhexis). A high-frequency titanium needle vibrates at 40,000 Hz, dissolving the hard cataract into microscopic particles that are gently vacuumed away. Then, a foldable intraocular lens (IOL) is injected smoothly into your natural capsule, unfolding into perfect position.",
          "No stitches are placed; internal intraocular water pressure seals the microscopic valve-like incision automatically.",
        ],
      },
      {
        heading: "3. Post-Operative Care: What Happens Next?",
        paragraphs: [
          "Immediately after surgery, you sit comfortably in our post-operative recovery lounge for 30 minutes with a cup of warm tea. Because there is no grogginess from general anesthesia, you can chat with your family immediately.",
          "We do not place bulky cotton pads or bandages over your eye. Instead, you are given lightweight, transparent protective goggles that protect your eye from dust while allowing you to see through the clear lens.",
          "Before 12:30 PM, you receive your eye drop kit, an easy-to-follow medicine timetable, and your discharge summary. You are free to return home or to your coordinated hotel.",
        ],
      },
      {
        heading: "4. Golden Recovery Rules for the First Week",
        paragraphs: [
          "Recovery from modern phaco surgery is remarkably rapid, but protecting the healing incision requires following a few common-sense precautions during the first 7 to 10 days:",
          "- **Keep Water Away**: Wash your face with a clean damp cloth; do not splash unboiled tap water directly into your open eye for 7 days.",
          "- **No Eye Rubbing**: Never press, rub, or squeeze the operated eye, especially during sleep. Wear your protective eye shield at night.",
          "- **Avoid Heavy Lifting**: Avoid lifting heavy weights (above 10 kg) or straining intensely during bowel movements for one week.",
          "- **Instill Drops Reliably**: Always wash your hands with soap before instilling prescribed antibiotic and anti-inflammatory eye drops.",
        ],
        callout: {
          type: "tip",
          title: "Cooking and Reading",
          text: "You can watch television, read on your mobile phone, and walk around comfortably the very next morning. Light cooking can be resumed after 4 to 5 days once steam and oil exposure are minimized.",
        },
      },
    ],
    faqs: [
      {
        question: "What if I cough, sneeze, or move during cataract surgery?",
        answer: "Your surgeon and theater team monitor you continuously. The eyelid speculum prevents blinking, and if you feel the urge to cough or sneeze, simply let your surgeon know verbally, and they will pause the procedure instantly for your comfort.",
      },
      {
        question: "Can I have both eyes operated on the same day?",
        answer: "Under standard international ophthalmic protocols, cataract surgery is performed on one eye at a time. The second eye is typically operated 3 to 7 days later once the first eye has demonstrated excellent initial healing and pressure stability.",
      },
      {
        question: "Why does my vision look slightly bright or blue immediately after surgery?",
        answer: "For years, your mature cataract acted like a dirty yellow-brown sunglass filter. When the cloudy lens is replaced by a crystal-clear artificial IOL, your retina receives full light spectrum and colors suddenly appear vivid, bright, and slightly bluish. Your brain adapts naturally within a few days.",
      },
    ],
    relatedServices: [
      {
        title: "Micro-Incision Cataract Surgery (Phaco)",
        slug: "cataract-surgery-phaco",
        description: "Painless, stitchless day-care cataract surgery with premium toric and multifocal lens implants.",
      },
      {
        title: "Cashless Mediclaim & TPA Desk",
        slug: "sarva-drishti-yojana",
        description: "Hassle-free approvals with top TPAs and government welfare healthcare schemes.",
      },
    ],
  },
  {
    slug: "red-eyes-flashes-of-light-eye-emergency-guide",
    title: "Red Eyes, Flashes of Light & Sudden Blurred Vision: When to Rush to an Eye Emergency",
    excerpt: "Not all red eyes are harmless 'pink eye'. Learn how to distinguish mild conjunctivitis from vision-threatening corneal ulcers, acute glaucoma, or retinal detachment. Essential first-aid for chemical splashes and sudden flashes of light.",
    coverImage: "/images/Eye-1.webp",
    category: "Eye Emergencies",
    readTime: "7 min read",
    publishedAt: "November 01, 2026",
    updatedAt: "November 09, 2026",
    author: {
      name: "Dr. Paruldeep Chakma",
      role: "Consultant Ophthalmologist | Aravind Eye Hospital Fellow",
      qualifications: "MBBS, MS, FAEH (Glaucoma & Refractive Surgery)",
      image: "/images/Dr-paruldeep.webp",
    },
    seo: {
      metaTitle: "Eye Emergency Symptoms: Red Eye, Flashes, Chemical Splash | Ashvini Netralaya",
      metaDescription: "Recognize sight-threatening eye emergencies: sudden vision loss, flashes of light, chemical splashes, and acute red eye. Practical triage guide by Dr. Paruldeep Chakma.",
      keywords: [
        "eye emergency hospital agartala",
        "flashes and floaters retina emergency",
        "red eye causes treatment tripura",
        "chemical burn in eye first aid",
        "sudden vision loss causes",
        "corneal ulcer symptoms agartala",
      ],
    },
    keyTakeaways: [
      "A red eye accompanied by deep aching pain, decreased vision, or light sensitivity is NEVER simple conjunctivitis and requires same-day specialist care.",
      "Sudden flashes of light or thousands of new black floaters appearing like a shower of soot indicate an impending retinal tear or detachment.",
      "If chemicals, lime (chun), battery acid, or detergent splash into the eye, flush immediately with clean running tap water for 15 straight minutes BEFORE traveling to the hospital.",
      "NEVER purchase over-the-counter 'combination' eye drops from local pharmacies without a prescription; steroid drops can cause blinding fungal ulcers and high eye pressure.",
      "A sudden, painless loss of vision in one eye ('like a curtain coming down') is an urgent vascular or retinal emergency requiring hospital evaluation within hours.",
    ],
    sections: [
      {
        heading: "1. The Dangerous Habit of Ignoring Eye Symptoms",
        paragraphs: [
          "Every week in our emergency OPD at Ashvini Netralaya, we encounter patients who delayed seeking care for three or four days, assuming their red, painful eye was just seasonal 'eye flu' (conjunctivitis). By the time they arrive, a fungal corneal ulcer has perforated or acute glaucoma has irreversibly damaged optic nerve fibers.",
          "The human eye is an irreplaceable, finely calibrated optical instrument. When emergencies occur, the window to save sight is measured in hours, not weeks.",
          "Here is an emergency triage guide every family in Tripura and neighboring regions should know.",
        ],
      },
      {
        heading: "2. The Red Eye Triage: Harmless Pink Eye vs Emergency",
        paragraphs: [
          "How do you tell whether your red eye is simple viral conjunctivitis or a vision-threatening emergency? Ask yourself these three critical questions:",
          "**1. Is there deep, throbbing pain?** Viral conjunctivitis causes gritty, sandy irritation and itching, but rarely severe, deep aching. Deep pain pointing to the temple indicates corneal infection, uveitis, or high pressure.",
          "**2. Has your vision dropped?** In simple conjunctivitis, vision remains crisp after you blink away mucus discharge. If your vision remains persistently blurred or misty, it is an emergency.",
          "**3. Does light hurt your eyes (Photophobia)?** Extreme sensitivity to room light indicates inflammation of the cornea or iris (anterior uveitis).",
        ],
        table: {
          headers: ["Symptom", "Viral Conjunctivitis ('Pink Eye')", "Corneal Ulcer (Keratitis)", "Acute Glaucoma"],
          rows: [
            ["Pain Level", "Gritty, mild burning", "Severe, foreign body sensation", "Excruciating, pounding head ache"],
            ["Vision", "Normal (clears with blinking)", "Blurred, hazy central spot", "Steamy, rapidly dimming vision"],
            ["Discharge", "Watery with morning crusting", "Pus-like, yellowish discharge", "Watery with nausea/vomiting"],
            ["Pupil Reaction", "Normal round, responsive", "Normal or sluggish", "Mid-dilated, oval, fixed to light"],
            ["Urgency", "OPD within 24-48 hours", "Same-day emergency within 6 hours", "Immediate emergency within 2 hours"],
          ],
        },
      },
      {
        heading: "3. Flashes & Floaters: When the Retina Tears",
        paragraphs: [
          "Inside your eye sits the vitreous humor—a clear gel that gradually liquefies as we age. As the gel separates from the back of the eye (Posterior Vitreous Detachment), it can tug on the fragile retina.",
          "**Flashes of Light (Photopsia)**: When the vitreous pulls on retinal photoreceptors, the brain interprets mechanical tugging as bright arcs, sparks, or camera flashes—often noticeable in the dark or when moving the eyes.",
          "**Shower of Floaters**: If the tugging tears a retinal blood vessel, tiny blood cells spill into the vitreous, appearing like a sudden swarm of black gnats, cobwebs, or a shower of pepper.",
          "If caught early, a retinal tear can be sealed in 5 minutes in our outpatient laser suite using a gentle 532nm Green Laser, completely preventing a full-blown retinal detachment.",
        ],
        callout: {
          type: "warning",
          title: "The 'Curtain' Symptom",
          text: "If you notice a dark grey shadow or curtain spreading across your field of view from the top, bottom, or side, your retina is detaching. This requires urgent vitreoretinal surgical intervention to prevent total blindness.",
        },
      },
      {
        heading: "4. Chemical Splashes: The 15-Minute Rule That Saves Eyes",
        paragraphs: [
          "Whether it is agricultural pesticide, lime (chuna) from building work, toilet cleaner, or car battery acid, chemical burns are among the most catastrophic ophthalmic emergencies.",
          "Alkali chemicals (such as construction lime or drain cleaners) are particularly dangerous because they saponify fatty cell membranes, penetrating deep into the cornea and internal anterior chamber within minutes.",
          "**Immediate First-Aid Protocol**:",
          "1. **DO NOT WAIT TO REACH THE HOSPITAL**: The first 5 minutes determine whether the cornea survives.",
          "2. **Flush with Clean Water Continuously for 15 Minutes**: Hold the eyelids wide open under a gentle stream of clean tap water, saline, or bottled water. Move the eyeball in all directions.",
          "3. **Do Not Rub the Eye or Apply Home Remedies**: No milk, ghee, rose water, or neutralizing acids.",
          "4. **Rush to the Emergency Room**: After 15 minutes of continuous flushing, head straight to Ashvini Netralaya.",
        ],
      },
      {
        heading: "5. The Danger of Over-the-Counter Eye Drops",
        paragraphs: [
          "We must issue a stark public health warning: never walk into a local medicine shop and buy eye drops recommended by the counter clerk for a red eye.",
          "Many commercial drops contain potent corticosteroids (Dexamethasone, Betamethasone). While steroids temporarily reduce redness by constricting blood vessels, if your red eye is caused by a fungal infection or Herpes virus, steroids suppress local immunity, allowing the infection to devour the cornea.",
          "Every month, our surgeons treat patients whose simple corneal scratches turned into perforated fungal ulcers due to unsupervised steroid eye drops. Always insist on a formal slit-lamp examination before instilling any medication into your eyes.",
        ],
      },
    ],
    faqs: [
      {
        question: "What should I do if a speck of metal or wood gets stuck in my eye?",
        answer: "Do not rub the eye, as rubbing grinds the foreign particle deeper into the cornea. Blink repeatedly in clean water or instill sterile lubricating eye drops to flush it out. If the particle remains embedded, cover the eye with a clean paper cup or shield and visit an eye hospital immediately for painless removal under topical anesthesia.",
      },
      {
        question: "Can high blood pressure cause sudden bleeding in the eye?",
        answer: "Yes. Severe spikes in systemic blood pressure can cause a Retinal Vein Occlusion (CRVO/BRVO) or subconjunctival hemorrhage. While bleeding on the white of the eye (subconjunctival) is usually harmless, bleeding inside the retina causes sudden, profound vision loss requiring prompt OCT imaging and Anti-VEGF treatment.",
      },
      {
        question: "Are emergency eye services available at Ashvini Netralaya?",
        answer: "Yes. Ashvini Netralaya operates dedicated trauma and acute ophthalmic emergency services in central Agartala at Bijoykumar Chowmuhani. You can reach our emergency reception desk at +91 92336 17885 or +91 69090 45910.",
      },
    ],
    relatedServices: [
      {
        title: "Retina Surgeries & Trauma Care",
        slug: "retina-surgeries",
        description: "Emergency green laser photocoagulation for retinal tears, vitrectomy for vitreous hemorrhage and retinal detachment.",
      },
      {
        title: "Cornea & Ocular Surface Clinic",
        slug: "cornea-services",
        description: "Emergency corneal foreign body removal, chemical injury management, and therapeutic bandage contact lenses.",
      },
    ],
  },
];
