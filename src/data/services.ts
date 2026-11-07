export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ProcedureStep {
  title: string;
  desc: string;
  duration?: string;
}

export interface ComparisonItem {
  name: string;
  type: string;
  visionRange: string;
  nightGlare: string;
  spectacleFreedom: string;
  bestFor: string;
  tag?: string;
}

export interface RecoveryMilestone {
  timeframe: string;
  title: string;
  description: string;
  activities: string[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  description: string;
  category: "Surgical" | "Laser & Retina" | "Diagnostics" | "Speciality Clinic";
  image: string;
  featured?: boolean;
  isCallOnly?: boolean;
  procedureTime?: string;
  recoveryTime?: string;
  anesthesia?: string;
  hospitalStay?: string;
  technology?: string;
  successRate?: string;
  painLevel?: string;
  symptoms?: string[];
  benefits?: string[];
  candidateCriteria?: string[];
  procedureSteps?: ProcedureStep[];
  comparisonTable?: {
    title: string;
    description: string;
    items: ComparisonItem[];
  };
  recoveryTimeline?: RecoveryMilestone[];
  preOpInstructions?: string[];
  postOpCare?: string[];
  insuranceCoverage?: string;
  technologyDetails?: {
    name: string;
    maker: string;
    advantage: string;
  }[];
  faqs?: ServiceFAQ[];
  doctorInCharge?: string;
  doctorCredentials?: string;
  patientReview?: {
    quote: string;
    patientName: string;
    location: string;
    outcome: string;
  };
}

export const servicesData: ServiceItem[] = [
  {
    "id": "cataract-surgery-phaco",
    "slug": "cataract-surgery-phaco",
    "title": "Cataract Surgery - Phacoemulsification",
    "shortDescription": "Stitchless, micro-incision phacoemulsification cataract surgery with premium monofocal, toric, and multifocal/EDOF IOL implantation in Agartala.",
    "description": "Ashvini Netralaya is Tripura’s highest-rated superspeciality center for Micro-Incision Cataract Surgery (MICS/Phacoemulsification). Utilizing the state-of-the-art Alcon Centurion® Vision System and Carl Zeiss Lumera® surgical stereomicroscopes, our fellowship-trained cataract surgeons remove clouded natural lenses through a self-sealing 1.8mm to 2.2mm micro-incision. The surgery is performed entirely under topical anesthetic eye drops—meaning zero needles, zero stitches, zero eye patches, and zero post-operative pain. Patients regain crystal-clear, vibrant vision and are comfortably discharged within two hours of surgery.\n\nWith over 10,000 successful cataract operations performed, our surgical team offers Tripura's widest selection of advanced intraocular lenses (IOLs), including wavefront-optimized aspheric monofocals, toric lenses for high corneal astigmatism, and multifocal/extended depth of focus (EDOF) implants that restore crisp reading and driving sight without glasses.",
    "category": "Surgical",
    "image": "/images/WhatsApp-Image-2023-06-03-at-2.27.43-AM-1.jpeg",
    "featured": true,
    "procedureTime": "10 - 15 Minutes",
    "recoveryTime": "Resume reading & light work in 24 - 48 hours",
    "anesthesia": "Topical Eye Drops (100% Needle-Free & Sutureless)",
    "hospitalStay": "Day-Care Outpatient (Discharge in 2 Hours)",
    "technology": "Alcon Centurion Vision System, Carl Zeiss Lumera Microscope, Optical Biometry",
    "successRate": "99.8% Clinical Success",
    "painLevel": "Completely Painless (No Injections)",
    "symptoms": [
      "Gradual blurring, haziness, or cloudy film over your field of vision",
      "Distorted vision with glare or halos around oncoming car headlights during night driving",
      "Colors appearing yellowish, dull, brownish, or faded in contrast",
      "Requiring brighter lighting for reading, writing, and fine manual work",
      "Frequent changes in eyeglass or contact lens prescription with no vision improvement",
      "Double vision or ghost shadows appearing in a single eye (monocular diplopia)"
    ],
    "benefits": [
      "100% needle-free, painless procedure under numbing topical eye drops",
      "Ultra-small 1.8mm to 2.2mm micro-incision that heals naturally without stitches",
      "Full spectrum of premium foldable IOLs: Monofocal, Toric (astigmatism), Multifocal, and Extended Depth of Focus (EDOF)",
      "Zero-infection modular OT suite with HEPA laminar airflow meeting NABH hospital standards",
      "Rapid visual rehabilitation allowing normal daily routine within 24 to 48 hours",
      "Cashless mediclaim empaneled with all major health insurance TPAs & Sarva Drishti Yojana"
    ],
    "candidateCriteria": [
      "Adults experiencing functional visual impairment interfering with daily activities (reading, driving, screen work)",
      "Patients diagnosed with nuclear, cortical, or posterior subcapsular cataract",
      "Patients with age-related cataracts, diabetic cataracts, or steroid-induced cataracts",
      "Individuals with co-existing astigmatism seeking spectacle freedom via Toric IOLs",
      "Presbyopic patients seeking distance, intermediate (computer), and near reading vision through Trifocal/EDOF lenses"
    ],
    "procedureSteps": [
      {
        "title": "Optical Biometry & Lens Power Calculation",
        "desc": "Advanced non-contact laser biometry calculates corneal curvature and axial length down to the micron to customize your exact intraocular lens power.",
        "duration": "15 mins (Pre-op)"
      },
      {
        "title": "Topical Drop Anesthesia",
        "desc": "Specialized anesthetic drops numb the ocular surface completely. No needles, retrobulbar blocks, or painful facial injections are required.",
        "duration": "5 mins"
      },
      {
        "title": "Micro-Incision & Continuous Curvilinear Capsulorhexis",
        "desc": "A microscopic 2.0mm self-sealing tunnel is fashioned in the clear cornea, and a circular opening is created in the anterior lens capsule.",
        "duration": "3 mins"
      },
      {
        "title": "Ultrasonic Phacoemulsification",
        "desc": "High-frequency ultrasonic waves gently liquefy and emulsify the cataractous lens into microscopic particles, which are aspirated through an irrigation-aspiration port.",
        "duration": "4 mins"
      },
      {
        "title": "Foldable Intraocular Lens (IOL) Implantation",
        "desc": "The customized foldable lens is injected through the micro-incision directly into the natural capsular bag, unfolding smoothly into permanent alignment.",
        "duration": "3 mins"
      }
    ],
    "comparisonTable": {
      "title": "Intraocular Lens (IOL) Options at Ashvini Netralaya",
      "description": "We offer all internationally approved premium intraocular lenses. Your surgeon will recommend the ideal match based on your lifestyle, visual demands, and ocular biometry.",
      "items": [
        {
          "name": "Standard Monofocal IOL",
          "type": "Aspheric Monofocal",
          "visionRange": "Clear Distance Vision",
          "nightGlare": "Minimal / None",
          "spectacleFreedom": "Requires glasses for reading & computer",
          "bestFor": "Patients comfortable wearing reading glasses for close work",
          "tag": "Standard Coverage"
        },
        {
          "name": "Toric Astigmatism IOL",
          "type": "Cylindrical Aspheric",
          "visionRange": "Distance Vision + Astigmatism Correction",
          "nightGlare": "Minimal / None",
          "spectacleFreedom": "Sharp distance vision without cylindrical glasses",
          "bestFor": "Patients with pre-existing corneal astigmatism (> 0.75 D)",
          "tag": "Astigmatism Specialist"
        },
        {
          "name": "Multifocal / Trifocal IOL",
          "type": "Diffractive Trifocal",
          "visionRange": "Distance, Intermediate (Computer), and Reading (Near)",
          "nightGlare": "Mild temporary halo rings around headlights",
          "spectacleFreedom": "85% - 95% complete spectacle independence",
          "bestFor": "Active adults who want to read, drive, and use laptops glasses-free",
          "tag": "Most Popular Premium"
        },
        {
          "name": "Extended Depth of Focus (EDOF)",
          "type": "Wavefront-Shaped EDOF",
          "visionRange": "Continuous Distance through Intermediate & Arm's Length",
          "nightGlare": "Virtually indistinguishable from monofocal (negligible halos)",
          "spectacleFreedom": "Spectacle-free for driving, computers, cooking & dashboard",
          "bestFor": "Frequent night drivers and professional computer users",
          "tag": "Cutting Edge"
        }
      ]
    },
    "recoveryTimeline": [
      {
        "timeframe": "Day of Surgery (Day 0)",
        "title": "Day-Care Discharge & Initial Rest",
        "description": "Rest comfortably at home. Vision will start clearing within 3-4 hours as pupil dilation wears off. Avoid touching the eye.",
        "activities": [
          "Rest in comfortable room",
          "Take prescribed antibiotics & anti-inflammatory eye drops",
          "Watch TV or listen to audio at moderate volume"
        ]
      },
      {
        "timeframe": "Day 1 Follow-Up",
        "title": "OPD Slit-Lamp Review",
        "description": "Surgeon confirms clear cornea, well-centered IOL, and normal intraocular pressure. Visual acuity typically reaches 6/6 to 6/9.",
        "activities": [
          "Normal walking and eating",
          "Light reading and mobile phone use",
          "Avoid washing eye with tap water directly"
        ]
      },
      {
        "timeframe": "Week 1 Milestone",
        "title": "Visual Stabilization & Routine Activity",
        "description": "Corneal micro-incision is completely sealed. Inflammation settles significantly. Patients resume desk jobs and driving.",
        "activities": [
          "Resume office work & computer tasks",
          "Outdoor walking with UV sunglasses",
          "Discontinue nighttime eye shield after doctor confirmation"
        ]
      },
      {
        "timeframe": "Month 1 Final Check",
        "title": "Complete Visual Rehabilitation",
        "description": "Full healing achieved. Final refraction test given for reading glasses if a monofocal IOL was implanted.",
        "activities": [
          "Resume swimming and gym workouts",
          "No restrictions on travel or daily living",
          "Lifelong crystal-clear vision secured"
        ]
      }
    ],
    "preOpInstructions": [
      "Instill the prescribed antibiotic eye drops starting 1 day before surgery as directed.",
      "Have a light meal 2 to 3 hours prior to scheduled surgery time.",
      "Take your routine blood pressure or thyroid medications on schedule with small sips of water.",
      "Arrange for an accompanying family member to escort you home after day-care discharge.",
      "Avoid wearing facial makeup, perfume, hair cream, or jewellery on the day of surgery."
    ],
    "postOpCare": [
      "Wash your hands thoroughly with soap before instilling any eye drops.",
      "Do NOT rub, squeeze, or apply direct pressure to the operated eye.",
      "Avoid splashing tap water directly into the operated eye for 10-14 days.",
      "Wear the transparent protective eye shield while sleeping during the first week.",
      "Avoid heavy weight-lifting (> 10 kg), bending deeply from the waist, or straining."
    ],
    "insuranceCoverage": "Cataract surgery at Ashvini Netralaya is fully covered under all major private health insurance policies, Mediclaim TPAs, Central/State Government Health Schemes (CGHS/ECHS), and Tripura State Health Schemes. Eligible underprivileged patients can also access subsidized/free surgery under Sarva Drishti Yojana.",
    "technologyDetails": [
      {
        "name": "Centurion® Vision System",
        "maker": "Alcon Laboratories (USA)",
        "advantage": "Active Sentry® fluidics monitors intraocular pressure continuously during surgery, maintaining a rock-steady anterior chamber for maximal corneal endothelial protection."
      },
      {
        "name": "OPMI Lumera® 700 Microscope",
        "maker": "Carl Zeiss Meditec (Germany)",
        "advantage": "Patented Stereo Coaxial Illumination (SCI) provides brilliant red reflex, enabling sub-millimeter precision during capsulorhexis and lens alignment."
      },
      {
        "name": "IOLMaster® 500 / 700",
        "maker": "Carl Zeiss Meditec (Germany)",
        "advantage": "Gold standard swept-source optical coherence biometry ensuring exact IOL power calculation, virtually eliminating refractive surprises."
      }
    ],
    "faqs": [
      {
        "question": "Is Phaco cataract surgery painful?",
        "answer": "No, not at all. At Ashvini Netralaya, 100% of standard cataract surgeries are performed under topical drop anesthesia. The eye is completely numbed with specialized drops. You will feel no pain, no needles, and no sharp sensations during the entire 10-15 minute procedure."
      },
      {
        "question": "What is the difference between Monofocal and Multifocal lenses?",
        "answer": "A monofocal lens is set for crisp distance vision (driving, TV, outdoor walks), but you will need light reading glasses for close-up tasks like reading small print or books. A multifocal or trifocal lens splits light into distance, computer, and near focal points, allowing approximately 90% of patients to live completely glasses-free."
      },
      {
        "question": "How soon after surgery can I resume my office work or household chores?",
        "answer": "Most patients resume desk work, computer use, cooking, and light walking within 48 to 72 hours. We advise avoiding vigorous exercise, dusty environments, and lifting heavy weights for about two weeks."
      },
      {
        "question": "Is cataract surgery covered under cashless health insurance?",
        "answer": "Yes. Ashvini Netralaya is a NABH-accredited superspeciality eye hospital empaneled with all leading health insurance TPAs (Star Health, HDFC ERGO, ICICI Lombard, Care Health, Medi Assist, Paramount, MD India, etc.). Our dedicated insurance desk handles pre-authorization and cashless claims seamlessly."
      },
      {
        "question": "Can both eyes be operated on the same day?",
        "answer": "Internationally, standard ophthalmic guidelines recommend operating on one eye first, followed by the second eye 3 to 7 days later once the first eye's healing and visual clarity are verified."
      },
      {
        "question": "Can a cataract return after surgery?",
        "answer": "No, a cataract can never re-grow once the natural cloudy lens is removed. Occasionally, the microscopic clear capsule supporting the artificial lens becomes hazy months or years later (called Posterior Capsule Opacification). This is easily treated permanently in 3 minutes with an outpatient YAG laser capsulotomy."
      }
    ],
    "doctorInCharge": "Dr. Anurag Majumdar",
    "doctorCredentials": "MBBS, MS (Ophthalmology) | Medical Director & Senior Phaco Surgeon",
    "patientReview": {
      "quote": "I was terrified of having surgery on my only seeing eye. Dr. Anurag and the surgical team at Ashvini Netralaya treated me with so much warmth. The surgery took only 12 minutes, no injection at all! The very next day my vision was completely bright and colorful. Truly a five-star hospital in Agartala.",
      "patientName": "Bimalendu Debnath, 68",
      "location": "Ramnagar, Agartala",
      "outcome": "Toric Multifocal IOL Implantation (6/6 Visual Acuity)"
    }
  },
  {
    "id": "retina-surgeries",
    "slug": "retina-surgeries",
    "title": "Vitreo-Retina Surgeries & Medical Retina",
    "shortDescription": "Advanced 25G/27G sutureless vitrectomy, retinal detachment repair, diabetic retinopathy laser & anti-VEGF injections in Agartala.",
    "description": "The Vitreo-Retinal Department at Ashvini Netralaya is Tripura’s premier tertiary referral unit for complex posterior segment ocular diseases. Led by experienced vitreo-retinal surgeons, our department is equipped with high-speed micro-incisional vitrectomy surgery (MIVS) platforms, wide-angle viewing systems, and 532nm pure green endolasers. We treat blinding conditions including rhegmatogenous retinal detachments, advanced proliferative diabetic retinopathy, non-clearing vitreous hemorrhage, macular holes, epiretinal membranes, and central retinal vein occlusions.\n\nOur medical retina unit provides cutting-edge diagnostics with high-definition Zeiss Cirrus OCT, fundus fluorescein angiography, and painless intravitreal anti-VEGF therapy (Lucentis, Accentrix, Eylea, Ozurdex, Razumab) administered inside our ultra-clean, HEPA-filtered modular OT suite to guarantee zero-endophthalmitis safety.",
    "category": "Laser & Retina",
    "image": "/images/WhatsApp-Image-2023-06-03-at-2.13.30-AM.jpeg",
    "featured": true,
    "procedureTime": "45 - 90 Minutes",
    "recoveryTime": "1 to 3 Weeks (Depending on gas/silicone oil tamponade)",
    "anesthesia": "Peribulbar Local Block / Monitored Anesthesia Care",
    "hospitalStay": "Day-Care or Overnight Observation",
    "technology": "High-Speed 25G/27G Vitrectomy, Spectralis / Zeiss Cirrus OCT, Green Laser",
    "successRate": "High anatomical re-attachment rate > 92%",
    "painLevel": "Painless under localized nerve block",
    "symptoms": [
      "Sudden shower of dark specks, cobwebs, or floating dots across vision",
      "Bright flashes of light (photopsia) in the corner of your eye",
      "A dark gray curtain, shadow, or veil pulling across your field of view",
      "Sudden, painless loss of vision in one eye",
      "Distortion of straight lines appearing wavy or curved (metamorphopsia)",
      "Dark blind spot (scotoma) in the center of your reading vision"
    ],
    "benefits": [
      "State-of-the-art sutureless 25-gauge and 27-gauge micro-incisional vitrectomy system",
      "Tripura’s leading center for complex retinal detachment surgeries without travelling to Kolkata/Chennai",
      "Painless in-office intravitreal injections (Anti-VEGF) for diabetic macular edema and wet AMD",
      "Targeted 532nm Green Laser photocoagulation sealing leaking blood vessels and retinal tears",
      "High-resolution Carl Zeiss Cirrus HD-OCT delivering cross-sectional retinal scans down to 5 microns",
      "Empaneled with cashless health insurance and emergency surgical admission"
    ],
    "candidateCriteria": [
      "Patients diagnosed with rhegmatogenous, tractional, or exudative retinal detachment",
      "Diabetic patients suffering from proliferative diabetic retinopathy or vitreous hemorrhage",
      "Individuals with full-thickness macular holes or macular pucker (epiretinal membrane)",
      "Patients with wet age-related macular degeneration (wet AMD) or retinal vein occlusions (CRVO/BRVO)"
    ],
    "procedureSteps": [
      {
        "title": "Retinal Mapping & Optical Coherence Tomography (OCT)",
        "desc": "High-resolution cross-sectional imaging reveals fluid accumulation, tractional bands, and exact tear coordinates.",
        "duration": "20 mins"
      },
      {
        "title": "Peribulbar Anesthesia",
        "desc": "Gentle localized block provides complete anesthesia and akinesia, ensuring the eye remains still and comfortable.",
        "duration": "10 mins"
      },
      {
        "title": "25G/27G Sutureless Trocar Insertion",
        "desc": "Three microscopic self-sealing valved ports are inserted into the pars plana for fiber-optic illumination, infusion, and vitrector probe.",
        "duration": "10 mins"
      },
      {
        "title": "Core Vitrectomy & Membrane Peeling",
        "desc": "Clouded vitreous gel is cleared, tractional fibrovascular membranes are peeled with ILM micro-forceps, and subretinal fluid is drained.",
        "duration": "30 - 45 mins"
      },
      {
        "title": "Endolaser & Tamponade (Gas / Silicone Oil)",
        "desc": "532nm green laser creates permanent chorioretinal adhesion around all tears, followed by an internal gas bubble or silicone oil tamponade.",
        "duration": "15 mins"
      }
    ],
    "comparisonTable": {
      "title": "Retina Treatment Modalities at Ashvini Netralaya",
      "description": "Our vitreo-retinal specialists tailor treatment to the exact pathology, stage, and location of the retinal lesion.",
      "items": [
        {
          "name": "25G / 27G Pars Plana Vitrectomy",
          "type": "Micro-Incisional Surgical Procedure",
          "visionRange": "Restores visual field & stops blinding progression",
          "nightGlare": "Depends on cataract status / post-op tamponade",
          "spectacleFreedom": "Refraction reassessed after gas absorption / oil removal",
          "bestFor": "Retinal detachment, vitreous hemorrhage, macular hole",
          "tag": "Surgical Standard"
        },
        {
          "name": "Intravitreal Anti-VEGF Injections",
          "type": "Targeted Medical Retina Injection",
          "visionRange": "Reverses central macular swelling & stops leaks",
          "nightGlare": "No night glare caused",
          "spectacleFreedom": "Preserves fine central reading vision",
          "bestFor": "Diabetic Macular Edema, Wet AMD, Retinal Vein Occlusion",
          "tag": "Minimally Invasive"
        },
        {
          "name": "532nm Green Laser Photocoagulation",
          "type": "Outpatient Laser Therapy",
          "visionRange": "Prevents progression of severe diabetic retinopathy",
          "nightGlare": "Temporary dazzle for a few hours post-laser",
          "spectacleFreedom": "Maintains current spectacle prescription",
          "bestFor": "Proliferative diabetic retinopathy, peripheral retinal tears",
          "tag": "Preventive Gold Standard"
        },
        {
          "name": "Scleral Buckling Surgery",
          "type": "External Retinal Surgery",
          "visionRange": "Reattaches peripheral retina from external sclera",
          "nightGlare": "Low",
          "spectacleFreedom": "May induce slight mild myopic shift",
          "bestFor": "Young phakic patients with dialysis or simple rhegmatogenous RD",
          "tag": "Alternative Surgical Option"
        }
      ]
    },
    "recoveryTimeline": [
      {
        "timeframe": "Days 1 to 7 Post-Op",
        "title": "Postural Positioning & Tamponade Support",
        "description": "Maintain specific head posture (e.g. face-down or side-tilt) as instructed by your surgeon to ensure the gas/oil bubble secures the retinal tear.",
        "activities": [
          "Strict face-down or designated positioning",
          "Take antibiotic and cycloplegic eye drops",
          "Avoid sleeping flat on your back"
        ]
      },
      {
        "timeframe": "Weeks 2 to 4",
        "title": "Gas Absorption & Vision Return",
        "description": "Expandable gas bubble slowly shrinks from the top down. A fluid meniscus line will be visible in your lower vision field as sight returns.",
        "activities": [
          "Light household mobility",
          "Avoid vigorous exercise and sudden jerks",
          "Strictly no air travel or mountain climbing until gas absorbs"
        ]
      },
      {
        "timeframe": "Months 2 to 3",
        "title": "Retinal Stabilization & Oil Removal",
        "description": "Retina is firmly adhered. If medical-grade silicone oil was used, a brief 15-minute day-care procedure is scheduled to wash out the oil.",
        "activities": [
          "Normal routine living restored",
          "Final spectacle refraction update",
          "Periodic dilated retinal monitoring"
        ]
      }
    ],
    "preOpInstructions": [
      "Fasting for 4 to 6 hours prior to surgery if monitored anesthesia care is planned.",
      "Bring all previous OCT scans, fundus photos, and systemic diabetic/hypertension records.",
      "Continue blood pressure tablets with sips of water; consult doctor regarding blood thinners (aspirin/clopidogrel).",
      "Arrange for a family member to accompany you and assist with transport home.",
      "Avoid eye rubbing if a retinal tear is suspected; rest quietly with head slightly elevated."
    ],
    "postOpCare": [
      "Strictly adhere to the prescribed head posture (prone/face-down or lateral) for 5-7 days.",
      "Never fly on an airplane or travel to hill stations until your doctor confirms the gas bubble has dissolved.",
      "Do not allow tap water or soap to touch the operated eye for 2 weeks.",
      "Wear the protective eye shield continuously during sleep to prevent accidental pressure.",
      "Contact the emergency retina helpline immediately if you experience severe sudden pain or sudden darkness."
    ],
    "insuranceCoverage": "Retinal surgeries, emergency vitrectomy, and intravitreal anti-VEGF therapy are fully covered under all major insurance TPAs and corporate health plans at Ashvini Netralaya. Subsidized surgical schemes are available under Sarva Drishti Yojana.",
    "technologyDetails": [
      {
        "name": "Constellation® / Stellaris® Vitrectomy System",
        "maker": "Alcon / Bausch & Lomb",
        "advantage": "High-speed dual-pneumatic cutting rates up to 7,500 - 10,000 cuts per minute with duty cycle control, minimizing retinal traction."
      },
      {
        "name": "Cirrus HD-OCT 5000",
        "maker": "Carl Zeiss Meditec (Germany)",
        "advantage": "Ultra-high resolution spectral domain optical coherence tomography resolving micro-structural changes in retinal nerve fiber and ganglion cell layers."
      },
      {
        "name": "Iridex 532nm Green Photocoagulator",
        "maker": "Iridex Corporation (USA)",
        "advantage": "Precise wavelength targeting oxygen-deficient retinal zones while sparing adjacent foveal tissue and minimizing thermal spread."
      }
    ],
    "faqs": [
      {
        "question": "How urgent is retinal detachment surgery?",
        "answer": "Retinal detachment is a true ophthalmic emergency. If the macula (central vision center) is still attached ('macula-on'), surgery should ideally be performed within 24 to 48 hours to preserve sharp central vision. Contact Ashvini Netralaya immediately if you see a dark curtain or sudden floaters."
      },
      {
        "question": "Why do I have to maintain a face-down position after surgery?",
        "answer": "The gas bubble or silicone oil floats upwards inside the fluid of the eye. By tilting your head face-down, the bubble presses firmly against the retinal tear located at the back of the eye, preventing fluid from leaking under the retina while the laser seal forms."
      },
      {
        "question": "Can diabetic eye disease be treated without surgery?",
        "answer": "Yes! In early to moderate stages, diabetic retinopathy is effectively managed with targeted 532nm Green Laser and painless intravitreal anti-VEGF injections. Surgery is only required if severe non-clearing bleeding or tractional detachment develops."
      },
      {
        "question": "Can I travel by airplane after retina surgery?",
        "answer": "If an expandable gas bubble was used, you CANNOT fly or travel to high-altitude hill stations until the gas is completely absorbed, because atmospheric pressure drops can cause the gas bubble to expand painfully inside the eye."
      },
      {
        "question": "How long does silicone oil stay in the eye?",
        "answer": "Silicone oil is typically removed after 2 to 6 months once the retina is proven to be completely flat and permanently healed. The oil removal procedure is a minor 15-minute day-care outpatient surgery."
      },
      {
        "question": "What is an anti-VEGF injection and does it hurt?",
        "answer": "Anti-VEGF is a medication injected into the vitreous cavity to dry up leaky abnormal blood vessels caused by diabetes or macular degeneration. The eye is thoroughly numbed with topical anesthetic drops and an antiseptic betadine solution; patients feel only a slight momentary pressure, not pain."
      }
    ],
    "doctorInCharge": "Dr. Kaushick Biswas & Dr. Surendra Prakash",
    "doctorCredentials": "MBBS, MS, DNB | Fellowship in Vitreo-Retinal Surgery (Sankara Nethralaya / LVPEI)",
    "patientReview": {
      "quote": "My retina suddenly detached and I lost almost all vision in my right eye. Doctors in other clinics asked me to travel to Chennai or Kolkata. Ashvini Netralaya performed the surgery right here in Agartala the very next day. Today my retina is completely reattached and vision is restored.",
      "patientName": "Pranab Kanti Saha, 54",
      "location": "Udaipur, Gomati District",
      "outcome": "25G Vitrectomy with Gas Tamponade & Endolaser"
    }
  },
  {
    "id": "paediatric-eye-care",
    "slug": "paediatric-eye-care",
    "title": "Paediatric Ophthalmology & Squint Care",
    "shortDescription": "Compassionate child vision screenings, amblyopia (lazy eye) therapy, squint surgery, and pediatric refraction in Agartala.",
    "description": "A child’s visual system undergoes critical development from birth up to 8–10 years of age. Undetected refractive errors, squint (strabismus), or congenital cataracts during this window can lead to permanent lazy eye (amblyopia). At Ashvini Netralaya, our dedicated Paediatric Ophthalmology and Strabismus Clinic is designed specifically to ensure a warm, engaging, and fear-free environment for children. We utilize specialized child-friendly diagnostic equipment (Lea symbols, streak retinoscopes, synoptophores) and perform micro-surgical muscle re-alignment for strabismus to restore binocular 3D vision.\n\nOur clinical team works closely with parents to identify early signs of developmental vision delay. Through personalized amblyopia patching protocols, specialized glasses, orthoptic vision therapy, and precision squint surgery, we ensure your child grows up with confident, balanced, and razor-sharp vision.",
    "category": "Speciality Clinic",
    "image": "/images/little-girl-checking-up-her-sight-ophthalmology-center-1-1-scaled.jpg",
    "featured": true,
    "procedureTime": "30 - 45 Minutes (Checkup) / 45 Mins (Surgery)",
    "recoveryTime": "Immediate for checkup; 3-5 days for squint surgery",
    "anesthesia": "Gentle Eye Drops / Safe Paediatric General Anesthesia",
    "hospitalStay": "Day-Care Outpatient (Discharge in 2-3 Hours)",
    "technology": "Streak Retinoscopy, Synoptophore, Prism Bars, Lea Symbol Charts, Pediatric Tonometer",
    "successRate": "98% Strabismus Alignment Success",
    "painLevel": "Child-friendly and completely gentle",
    "symptoms": [
      "Eyes appearing crossed, drifting inward (esotropia), or turning outward (exotropia)",
      "Squinting, tilting head sideways, or closing one eye while looking at distant objects",
      "Holding books, phones, or tablets unusually close to the face",
      "Frequent eye rubbing, excessive blinking, or complaints of headaches after school",
      "Difficulty with reading, catching balls, or clumsiness indicating poor depth perception",
      "An abnormal white reflex ('cat's eye' glow) seen in flash photographs of the child's pupil"
    ],
    "benefits": [
      "Dedicated child-friendly consulting suite with trained pediatric nurses",
      "Accurate cycloplegic refraction preventing over-minus or incorrect spectacle prescriptions",
      "Scientific amblyopia therapy: structured occlusion eye patching & visual exercises",
      "Precision strabismus surgery restoring cosmetic symmetry and 3D depth perception",
      "Myopia progression management program using specialized progressive & therapeutic lenses",
      "Screening for Retinopathy of Prematurity (ROP) in neonates and low-birth-weight infants"
    ],
    "candidateCriteria": [
      "Infants and children with suspected misaligned eyes (squint/strabismus)",
      "Children failing school vision screenings or showing poor concentration in class",
      "Children with a family history of high spectacles power, lazy eye, or childhood eye diseases",
      "Premature babies requiring screening for Retinopathy of Prematurity (ROP)",
      "Teens experiencing eye strain, double vision, or asthenopic symptoms during digital study"
    ],
    "procedureSteps": [
      {
        "title": "Engaging Visual Acuity Assessment",
        "desc": "Using picture charts (Lea symbols), matching cards, and Cardiff acuity tests tailored to the child's developmental age.",
        "duration": "10 mins"
      },
      {
        "title": "Cycloplegic Drop Refraction",
        "desc": "Safe pediatric eye drops gently relax the child's strong focusing muscles, allowing accurate determination of true refractive power.",
        "duration": "30 mins"
      },
      {
        "title": "Ocular Alignment & Muscle Balance Testing",
        "desc": "Prism bar cover tests and synoptophore examination measure the angle of squint and check for 3D stereoscopic depth perception.",
        "duration": "10 mins"
      },
      {
        "title": "Dilated Fundus & Retinal Check",
        "desc": "Thorough inspection of the optic nerve and retina to rule out congenital cataracts, retinoblastoma, or neurological conditions.",
        "duration": "10 mins"
      },
      {
        "title": "Parental Counseling & Treatment Plan",
        "desc": "Doctor explains the diagnosis, spectacle prescription, patching schedule, or surgical muscle realignment if indicated.",
        "duration": "15 mins"
      }
    ],
    "comparisonTable": {
      "title": "Paediatric Vision Correction Options at Ashvini Netralaya",
      "description": "Treatment depends on whether the condition is refractive, binocular alignment, or neuro-developmental.",
      "items": [
        {
          "name": "Optical Glasses & Prisms",
          "type": "Non-Invasive Spectacle Therapy",
          "visionRange": "Full distance and near correction",
          "nightGlare": "None",
          "spectacleFreedom": "Spectacles worn daily as prescribed",
          "bestFor": "Accommodative esotropia, high hypermetropia, myopia, astigmatism",
          "tag": "First-Line Treatment"
        },
        {
          "name": "Amblyopia Occlusion Patching",
          "type": "Neuro-Visual Rehabilitation",
          "visionRange": "Restores visual acuity in the lazy eye",
          "nightGlare": "None",
          "spectacleFreedom": "Used alongside glasses",
          "bestFor": "Children under 9 with unilateral lazy eye (amblyopia)",
          "tag": "Proven Clinical Standard"
        },
        {
          "name": "Strabismus Muscle Surgery",
          "type": "Micro-Surgical Realignment",
          "visionRange": "Restores straight alignment & binocular fusion",
          "nightGlare": "None",
          "spectacleFreedom": "Straightens eyes; glasses may still be worn for sharpness",
          "bestFor": "Non-accommodative squint, paralytic squint, large deviation",
          "tag": "Definitive Alignment"
        },
        {
          "name": "Synoptophore & Vision Therapy",
          "type": "Orthoptic Exercise Program",
          "visionRange": "Enhances binocular 3D depth perception",
          "nightGlare": "None",
          "spectacleFreedom": "Improves binocular coordination",
          "bestFor": "Convergence insufficiency, intermittent exotropia, poor stereopsis",
          "tag": "Therapeutic Training"
        }
      ]
    },
    "recoveryTimeline": [
      {
        "timeframe": "Days 1 to 3 Post-Surgery",
        "title": "Initial Eye Alignment & Comfort",
        "description": "Mild pinkness on the white of the eye is normal. Child rests comfortably at home with antibiotic and anti-inflammatory eye drops.",
        "activities": [
          "Rest quietly at home",
          "Instill eye drops as prescribed",
          "Avoid rubbing the eyes or vigorous games"
        ]
      },
      {
        "timeframe": "Week 1 Follow-Up",
        "title": "Healing & Suture Absorption",
        "description": "Pediatric ophthalmologist evaluates straight alignment and confirms clean, infection-free conjunctival healing.",
        "activities": [
          "Return to school and light classroom study",
          "Wear protective glasses outdoors",
          "Avoid swimming and contact sports"
        ]
      },
      {
        "timeframe": "Month 1 to 3 Checkup",
        "title": "Binocular Vision & 3D Stereopsis Check",
        "description": "Assessment of binocular fusion and depth perception. Child enjoys natural eye contact and stereoscopic vision.",
        "activities": [
          "Full sports and swimming permitted",
          "Continue periodic routine vision checks every 6 months"
        ]
      }
    ],
    "preOpInstructions": [
      "Explain the checkup playfully to your child so they feel excited rather than anxious.",
      "Bring along favorite toys, snacks, or an extra jacket to make them feel comfortable.",
      "For squint surgery: strictly fast (no food or water) for 6 hours prior to general anesthesia.",
      "Inform the doctor about any asthma, drug allergies, or recent cough/cold.",
      "Have all previous spectacle prescriptions or developmental records ready."
    ],
    "postOpCare": [
      "Wash your hands thoroughly before instilling prescribed drops.",
      "Do not let your child rub or press on their eyes; keep nails trimmed.",
      "Avoid splashing tap water into the eyes for 10 days.",
      "Administer oral pain syrups only as recommended by the pediatrician.",
      "Attend the scheduled follow-up visits to monitor long-term ocular alignment."
    ],
    "insuranceCoverage": "Paediatric strabismus surgery, congenital cataract extraction, and diagnostic evaluations are empaneled under private mediclaim TPAs and government welfare programs. Subsidized care is provided through Sarva Drishti Yojana.",
    "technologyDetails": [
      {
        "name": "Clement Clarke Synoptophore",
        "maker": "Haag-Streit UK",
        "advantage": "Gold standard diagnostic instrument for assessing simultaneous perception, fusion range, and stereoscopic depth perception in children."
      },
      {
        "name": "Heine Streak Retinoscope",
        "maker": "Heine Optotechnik (Germany)",
        "advantage": "High-precision optic beam allowing objective refraction in uncooperative toddlers without requiring subjective patient responses."
      }
    ],
    "faqs": [
      {
        "question": "Can children outgrow a squint on their own?",
        "answer": "No, a true squint is never outgrown. Ignoring an eye turn can lead to the brain ignoring signals from that eye, resulting in permanent irreversible lazy eye (amblyopia). Early evaluation by a pediatric ophthalmologist is critical."
      },
      {
        "question": "How does eye patching help amblyopia (lazy eye)?",
        "answer": "By gently covering the stronger eye with an adhesive patch for a few hours each day, the brain is encouraged to actively use and strengthen visual pathways from the weaker eye, permanently improving its sharpness."
      },
      {
        "question": "Is squint surgery safe for young children?",
        "answer": "Yes. Squint surgery involves gently adjusting the tiny muscles on the outside of the eyeball without entering the eye. Under safe pediatric anesthesia at Ashvini Netralaya, children recover quickly and return to school within 3 to 5 days."
      },
      {
        "question": "At what age should my child have their first eye exam?",
        "answer": "We recommend an initial screening at 6 months to 1 year, another at age 3, and a comprehensive checkup before entering primary school (age 5), even if no symptoms are apparent."
      },
      {
        "question": "Can excessive screen time cause permanent vision damage in children?",
        "answer": "Excessive mobile phone and tablet use causes digital eye strain, dry eyes, and significantly accelerates myopia (nearsightedness) progression. We recommend the 20-20-20 rule and at least 2 hours of outdoor daylight exposure daily."
      },
      {
        "question": "Will my child need glasses forever after squint surgery?",
        "answer": "Squint surgery aligns the eyes physically, but if your child also has refractive error (like astigmatism or farsightedness), glasses will still be needed to ensure sharp optical clarity."
      }
    ],
    "doctorInCharge": "Dr. Paichainda Mog",
    "doctorCredentials": "MBBS, MS (Ophthalmology) | Chief Paediatric Ophthalmology Consultant",
    "patientReview": {
      "quote": "My 6-year-old daughter was teased at school because of her crossed eye. Dr. Paichainda diagnosed her amblyopia, prescribed glasses, and later performed surgery. Her eyes are now perfectly straight and her confidence has soared. We are forever grateful to Ashvini Netralaya.",
      "patientName": "Debolina Sen (Mother of Ananya, 6)",
      "location": "Banamalipur, Agartala",
      "outcome": "Bilateral Strabismus Realignment (Normal 3D Vision Restored)"
    }
  },
  {
    "id": "comprehensive-eye-checkup",
    "slug": "comprehensive-eye-checkup",
    "title": "Comprehensive Eye Checkup & Vision Assessment",
    "shortDescription": "Complete 7-point ophthalmic examination including dilated fundus, computerised refraction, slit-lamp biomicroscopy & eye pressure test.",
    "description": "A comprehensive eye examination at Ashvini Netralaya is an essential preventive health check that protects your lifelong sight. Many blinding conditions—including open-angle glaucoma, diabetic retinopathy, hypertensive eye changes, and retinal degenerations—progress silently without pain or noticeable vision loss in their early stages. By the time noticeable symptoms occur, irreversible nerve damage may have already taken place.\n\nOur senior ophthalmic specialists conduct a systematic 7-point diagnostic evaluation utilizing high-precision computerized equipment. We thoroughly inspect your refractive error, corneal surface, crystalline lens clarity, intraocular pressure, anterior chamber angle, and dilated retina/optic nerve head to detect systemic and ocular issues years before they affect your daily life.",
    "category": "Diagnostics",
    "image": "/images/WhatsApp-Image-2023-06-03-at-2.30.23-AM-1.jpeg",
    "featured": true,
    "procedureTime": "30 - 45 Minutes",
    "recoveryTime": "Immediate (Pupils normalize in 2-3 hours)",
    "anesthesia": "Gentle Diagnostic Drops (If Tonometry/Dilation Needed)",
    "hospitalStay": "Outpatient OPD Consultation",
    "technology": "Auto-Refractometer, Haag-Streit Slit Lamp, Non-Contact Tonometer, Volk 90D/78D Lenses",
    "successRate": "100% Accurate Diagnostic Assessment",
    "painLevel": "Completely Non-Invasive & Comfortable",
    "symptoms": [
      "Frequent headaches, brow ache, or eye strain after computer or reading work",
      "Blurred distant vision or difficulty reading mobile screens and fine text",
      "Night driving difficulty, halos around streetlights, or light sensitivity",
      "Dry, burning, itchy, or gritty sensation in the eyes",
      "Having a family history of glaucoma, cataract, or high spectacle power",
      "Being diagnosed with Diabetes Mellitus, Hypertension, or Thyroid disorders"
    ],
    "benefits": [
      "Systematic 7-step screening detecting asymptomatic glaucoma and retinal disease early",
      "Computerized auto-refraction ensuring precision spectacle and contact lens prescriptions",
      "Slit-lamp biomicroscopy examining cornea, iris, anterior chamber, and lens health",
      "Dilated stereoscopic fundus examination of the optic nerve and retinal blood vessels",
      "Accurate non-contact eye pressure measurement preventing glaucoma blindness",
      "Detailed clinical report and lifestyle guidance for digital eye strain and dry eye"
    ],
    "candidateCriteria": [
      "All adults aged 40 and above (recommended once every year)",
      "Anyone experiencing blurred vision, eye strain, or sudden visual changes",
      "All individuals diagnosed with Type 1 or Type 2 Diabetes Mellitus (annual screening mandatory)",
      "Software engineers, students, and professionals with high daily screen exposure",
      "Individuals seeking renewal of driving licenses or employment vision certifications"
    ],
    "procedureSteps": [
      {
        "title": "Visual Acuity Assessment",
        "desc": "Measurement of uncorrected and corrected distance and near vision using computerized digital Snellen and LogMAR charts.",
        "duration": "5 mins"
      },
      {
        "title": "Computerized Auto-Refraction & Keratometry",
        "desc": "Automated measurement of the eye's refractive power and corneal curvature to identify myopia, hyperopia, or astigmatism.",
        "duration": "5 mins"
      },
      {
        "title": "Non-Contact Tonometry (IOP)",
        "desc": "Gentle air-puff tonometry measures intraocular fluid pressure to screen for potential glaucoma.",
        "duration": "3 mins"
      },
      {
        "title": "Slit-Lamp Biomicroscopy",
        "desc": "High-magnification binocular slit-lamp examination of eyelids, conjunctiva, cornea, anterior chamber, and crystalline lens.",
        "duration": "7 mins"
      },
      {
        "title": "Dilated Fundus Examination",
        "desc": "Pupil dilation using safe drops followed by stereoscopic 90D/78D biomicroscopic inspection of the optic nerve head, macula, and retina.",
        "duration": "20 mins"
      }
    ],
    "comparisonTable": {
      "title": "Eye Examination Packages at Ashvini Netralaya",
      "description": "Select the checkup level matching your health profile, age group, and medical history.",
      "items": [
        {
          "name": "Standard Refraction Check",
          "type": "Basic Spectacle Power Test",
          "visionRange": "Vision acuity & glass prescription",
          "nightGlare": "Not assessed",
          "spectacleFreedom": "Generates spectacle prescription",
          "bestFor": "Routine glass power update without medical symptoms",
          "tag": "Basic"
        },
        {
          "name": "Comprehensive 7-Point Exam",
          "type": "Full Ophthalmic Medical Evaluation",
          "visionRange": "Vision + Cornea + Lens + IOP + Retina",
          "nightGlare": "Screened for cataract & optical aberrations",
          "spectacleFreedom": "Refractive & health optimization",
          "bestFor": "All adults, age 40+, general preventive eye health",
          "tag": "Recommended Annual"
        },
        {
          "name": "Diabetic Retinopathy Workup",
          "type": "Advanced Posterior Segment Screening",
          "visionRange": "Detailed macular & microvascular check",
          "nightGlare": "Evaluation of retinal ischemia",
          "spectacleFreedom": "Preserves retinal health",
          "bestFor": "Diabetic and hypertensive patients",
          "tag": "Chronic Illness Care"
        },
        {
          "name": "Glaucoma Screening Battery",
          "type": "Specialized Glaucoma Diagnostic Protocol",
          "visionRange": "Optic nerve head, RNFL, Pachymetry, Fields",
          "nightGlare": "Monitors peripheral visual field loss",
          "spectacleFreedom": "Focuses on preserving nerve fibers",
          "bestFor": "High eye pressure, family history of glaucoma",
          "tag": "High Risk Protocol"
        }
      ]
    },
    "recoveryTimeline": [
      {
        "timeframe": "Immediate Post-Checkup",
        "title": "Pupil Dilation & Light Sensitivity",
        "description": "Your pupils will be temporarily enlarged from dilating drops. Vision may be slightly blurred for near reading, and outdoor light may feel bright.",
        "activities": [
          "Wear UV sunglasses outdoors",
          "Avoid driving a two-wheeler or car for 2-3 hours",
          "Have an escort drive you home"
        ]
      },
      {
        "timeframe": "2 to 3 Hours Later",
        "title": "Pupillary Normalization",
        "description": "Dilating eye drop effect wears off completely. Normal pupil response and sharp near focusing return.",
        "activities": [
          "Resume reading, driving, and computer work",
          "Collect your new glasses from our optical counter"
        ]
      },
      {
        "timeframe": "1 Year Routine Recall",
        "title": "Annual Preventive Care",
        "description": "Periodic annual screening guarantees that gradual pressure elevations or diabetic changes are caught at the reversible stage.",
        "activities": [
          "Schedule next routine annual checkup"
        ]
      }
    ],
    "preOpInstructions": [
      "Bring your current eyeglasses, reading glasses, or contact lens boxes.",
      "Bring all recent medical records (blood sugar reports, HbA1c, BP charts, prescriptions).",
      "Plan to spend approximately 45 to 60 minutes at the hospital to allow for pupil dilation.",
      "Bring sunglasses to wear after the checkup, as dilating drops make eyes sensitive to sunlight.",
      "Avoid driving yourself home if your pupils are scheduled to be dilated; bring an attendant."
    ],
    "postOpCare": [
      "Do not rub your eyes after diagnostic drop application.",
      "Allow 2-3 hours for your reading vision to clear before doing fine detailed work.",
      "If new glasses are prescribed, allow 3-5 days of consistent wear for your eyes to adapt.",
      "Follow any prescribed ocular lubricating drops if digital dry eye was diagnosed.",
      "Return immediately if you experience severe sudden eye pain or nausea after dilation."
    ],
    "insuranceCoverage": "Diagnostic checkups and OPD consultations are subsidized under our community initiatives. BPL/AAY card holders can access OPD consultations at just ₹50 under Sarva Drishti Yojana.",
    "technologyDetails": [
      {
        "name": "Topcon KR-800 Auto-Kerato-Refractometer",
        "maker": "Topcon Corporation (Japan)",
        "advantage": "Rotary prism technology provides unmatched accuracy in measuring objective refraction and corneal curvature."
      },
      {
        "name": "Haag-Streit BQ 900 Slit Lamp",
        "maker": "Haag-Streit Diagnostics (Switzerland)",
        "advantage": "World-renowned Swiss optics providing crystal-clear illumination and stereoscopic visualization of the finest ocular structures."
      }
    ],
    "faqs": [
      {
        "question": "Why do my eyes need to be dilated during a checkup?",
        "answer": "Dilation widens the pupil, allowing the ophthalmologist an unobstructed wide-angle view of the internal structures—including the retina, optic nerve, and peripheral retinal blood vessels—which cannot be thoroughly evaluated through an un-dilated pupil."
      },
      {
        "question": "Can I drive home after having my eyes dilated?",
        "answer": "We strongly advise against driving a car or motorbike immediately after dilation, as the drops cause temporary blurring of near vision and increased sensitivity to sunlight for 2 to 3 hours. Please bring an attendant or use public transit."
      },
      {
        "question": "How often should I have an eye examination?",
        "answer": "Healthy adults without symptoms should have an exam every 1 to 2 years. Adults aged 40+, individuals with diabetes or hypertension, or those with a family history of glaucoma should be examined at least once every year."
      },
      {
        "question": "What is the difference between an eye checkup by an optician vs an ophthalmologist?",
        "answer": "An optician or optometrist only tests your refractive spectacle power. An ophthalmologist is a medical eye doctor and surgeon who examines the internal and external health of your eyes, diagnosing diseases like glaucoma, cataracts, macular degeneration, and diabetic retinopathy."
      },
      {
        "question": "Does an eye checkup test for high blood pressure or diabetes?",
        "answer": "Yes! The eye is the only place in the entire human body where living blood vessels and nerve tissue can be viewed directly without cutting. Early signs of systemic diabetes, hypertension, and high cholesterol are frequently first detected during an eye exam."
      },
      {
        "question": "Is the eye pressure test painful?",
        "answer": "Not at all. We use non-contact tonometry, which utilizes a quick, gentle puff of air that touches the corneal surface for a fraction of a second. It is completely painless and needle-free."
      }
    ],
    "doctorInCharge": "Dr. Anurag Majumdar & Clinical Team",
    "doctorCredentials": "MBBS, MS (Ophthalmology) | Comprehensive Ophthalmology & Anterior Segment",
    "patientReview": {
      "quote": "I thought I just needed new reading glasses. During the comprehensive checkup at Ashvini Netralaya, Dr. Anurag detected early glaucoma pressure that had no symptoms. Thanks to timely treatment, my optic nerve was saved. Highly recommend their complete checkup!",
      "patientName": "Swapan Kumar Roy, 52",
      "location": "Dhaleswar, Agartala",
      "outcome": "Early Glaucoma Detection & Pressure Stabilization"
    }
  },
  {
    "id": "glaucoma-surgeries",
    "slug": "glaucoma-surgeries",
    "title": "Glaucoma Care & Trabeculectomy Surgeries",
    "shortDescription": "Tripura's premier glaucoma unit: Humphrey visual field testing, OCT RNFL scanning, laser iridotomy & microsurgical trabeculectomy.",
    "description": "Glaucoma is often termed the 'Silent Thief of Sight' because it causes gradual, irreversible destruction of the optic nerve fibers—usually driven by elevated intraocular pressure (IOP)—without causing pain, redness, or early symptoms. Peripheral side vision is lost first, and by the time patients notice tunnel vision, significant irreversible blindness has already occurred.\n\nAt Ashvini Netralaya, our specialized Glaucoma Care Unit is dedicated to early detection, long-term disease monitoring, and advanced pressure reduction. We utilize gold-standard Humphrey automated visual field perimetry, Zeiss Cirrus HD-OCT retinal nerve fiber layer (RNFL) mapping, central corneal pachymetry, and gonioscopy. When topical hypotensive eye drops fail to halt progression, our glaucoma surgeons perform micro-surgical Trabeculectomy with Mitomycin-C, Glaucoma Drainage Implants (Ahmed Valves), and non-invasive laser treatments (SLT / YAG PI) to permanently protect your sight.",
    "category": "Surgical",
    "image": "/images/WhatsApp-Image-2023-06-03-at-2.30.23-AM-2.jpeg",
    "featured": true,
    "procedureTime": "30 - 45 Minutes (Surgery) / 10 Mins (Laser)",
    "recoveryTime": "1 to 2 Weeks (Surgery) / Immediate (Laser)",
    "anesthesia": "Peribulbar Local Block / Topical Drop Anesthesia",
    "hospitalStay": "Day-Care Outpatient (Discharge in 2-3 Hours)",
    "technology": "Humphrey Field Analyzer (HFA3), Zeiss Cirrus OCT, Goldmann Applanation Tonometer",
    "successRate": "90% - 95% Long-Term IOP Control",
    "painLevel": "Completely Painless under local anesthesia",
    "symptoms": [
      "Gradual loss of peripheral (side) vision with 'tunnel vision' effect",
      "Severe eye pain, headache, nausea, and vomiting (in acute angle-closure glaucoma)",
      "Seeing rainbow-colored halos around bright lights and bulbs",
      "Frequent changes in spectacle prescription without satisfactory clarity",
      "Difficulty adjusting vision in dark rooms or cinema halls",
      "Having a first-degree relative (parent or sibling) diagnosed with glaucoma"
    ],
    "benefits": [
      "Tripura’s most advanced diagnostic armamentarium for early glaucoma diagnosis",
      "Humphrey Visual Field Analyzer (HFA3) detecting microscopic blind spots (scotomas)",
      "Zeiss Cirrus HD-OCT RNFL thickness analysis monitoring optic nerve changes over time",
      "Micro-incisional Trabeculectomy with anti-fibrotic agents ensuring long-term filtering bleb survival",
      "Glaucoma drainage devices (Ahmed Glaucoma Valve) for refractory or post-surgical cases",
      "Preventive YAG peripheral iridotomy protecting narrow-angle eyes from sudden blinding attacks"
    ],
    "candidateCriteria": [
      "Patients with chronically elevated intraocular pressure (> 21 mmHg) unresponsive to medications",
      "Individuals showing progressive optic nerve cupping or RNFL thinning on OCT scans",
      "Patients experiencing visual field loss despite using multiple anti-glaucoma eye drops",
      "Patients with primary open-angle glaucoma, closed-angle glaucoma, or pseudoexfoliation",
      "Patients with non-compliance or severe allergic reactions to chronic eye drop regimens"
    ],
    "procedureSteps": [
      {
        "title": "Pre-Operative Target IOP Determination",
        "desc": "Comprehensive review of 24-hour diurnal pressure curves, visual fields, and target pressure goals to prevent further nerve damage.",
        "duration": "20 mins"
      },
      {
        "title": "Peribulbar Anesthesia",
        "desc": "Localized numbing block ensures zero sensation and steady eye positioning throughout the microsurgery.",
        "duration": "10 mins"
      },
      {
        "title": "Conjunctival Flap & Scleral Tunnel Creation",
        "desc": "A partial-thickness protective scleral flap is dissected under high-magnification surgical stereomicroscopy.",
        "duration": "10 mins"
      },
      {
        "title": "Trabeculectomy & Peripheral Iridectomy",
        "desc": "A microscopic block of trabecular meshwork is removed, and a small peripheral opening in the iris is made to prevent blockage.",
        "duration": "15 mins"
      },
      {
        "title": "Anti-Fibrotic Application & Suture Closure",
        "desc": "Mitomycin-C is applied to prevent scar tissue formation, and the scleral flap is sutured with adjustable tension to create a permanent drainage bleb.",
        "duration": "10 mins"
      }
    ],
    "comparisonTable": {
      "title": "Glaucoma Management Approaches at Ashvini Netralaya",
      "description": "Treatment is customized according to whether glaucoma is open-angle or closed-angle, and the stage of optic nerve damage.",
      "items": [
        {
          "name": "Topical Hypotensive Drops",
          "type": "Medical Therapy",
          "visionRange": "Preserves existing vision; does not restore lost vision",
          "nightGlare": "None (some drops cause mild conjunctival redness)",
          "spectacleFreedom": "Must be instilled every day strictly on schedule",
          "bestFor": "Mild to moderate open-angle glaucoma, ocular hypertension",
          "tag": "First-Line Medical"
        },
        {
          "name": "YAG Laser Iridotomy (LPI)",
          "type": "Outpatient Laser Therapy",
          "visionRange": "Relieves narrow-angle pupil block immediately",
          "nightGlare": "Rare temporary stray light line",
          "spectacleFreedom": "One-time 5-minute laser; avoids emergency surgery",
          "bestFor": "Narrow angles, acute angle-closure glaucoma attack prevention",
          "tag": "Preventive Laser"
        },
        {
          "name": "Trabeculectomy Surgery",
          "type": "Microsurgical Filtering Operation",
          "visionRange": "Significantly lowers IOP to protect remaining nerve fibers",
          "nightGlare": "None caused by procedure",
          "spectacleFreedom": "Frequently eliminates need for multiple daily eye drops",
          "bestFor": "Advanced glaucoma, uncontrolled IOP despite maximum drops",
          "tag": "Gold Standard Surgery"
        },
        {
          "name": "Ahmed Glaucoma Valve (GDD)",
          "type": "Implantable Silicone Valve",
          "visionRange": "Self-regulating pressure relief mechanism",
          "nightGlare": "None",
          "spectacleFreedom": "Long-term pressure reduction",
          "bestFor": "Refractory glaucoma, neovascular glaucoma, failed previous surgery",
          "tag": "Complex Case Solution"
        }
      ]
    },
    "recoveryTimeline": [
      {
        "timeframe": "Days 1 to 5 Post-Surgery",
        "title": "Filtering Bleb Formation & Monitoring",
        "description": "Vision may be slightly blurry as the newly created drainage channel stabilizes. Intraocular pressure is closely monitored in the OPD.",
        "activities": [
          "Rest quietly at home",
          "Instill intensive steroid and antibiotic drops",
          "Wear protective shield at night"
        ]
      },
      {
        "timeframe": "Weeks 2 to 4",
        "title": "Bleb Stabilization & Suture Adjustment",
        "description": "Surgeon may perform gentle massage or suture lysis if needed to achieve the perfect target pressure (usually 10-14 mmHg).",
        "activities": [
          "Light desk work and walking permitted",
          "Avoid bending down, straining, or lifting heavy objects (> 5 kg)"
        ]
      },
      {
        "timeframe": "Month 2 Onwards",
        "title": "Long-Term Pressure Stabilization",
        "description": "Drainage bleb is mature and quietly functioning under the upper eyelid. Repeat visual field test is performed to establish baseline.",
        "activities": [
          "Normal daily living resumed",
          "Routine IOP check every 3 to 4 months",
          "Annual visual field test"
        ]
      }
    ],
    "preOpInstructions": [
      "Continue all prescribed anti-glaucoma eye drops right up to the morning of surgery unless specifically stopped by your surgeon.",
      "Inform the doctor if you are taking blood thinners (aspirin, clopidogrel, warfarin).",
      "Maintain 4-6 hours of fasting prior to scheduled surgery under local block.",
      "Do not rub your eyes or squeeze your eyelids forcefully.",
      "Bring all previous Humphrey visual field reports and OCT scans for comparison."
    ],
    "postOpCare": [
      "Do NOT press on your eyeball or rub your eye under any circumstances.",
      "Avoid coughing, sneezing forcefully, straining during bowel movements, or bending from the waist.",
      "Do not let unboiled tap water touch the operated eye for 2 weeks.",
      "Wear your eye shield every night during sleep for the first month.",
      "Report immediately if you notice severe throbbing pain, sudden vision drop, or heavy discharge."
    ],
    "insuranceCoverage": "Trabeculectomy, glaucoma drainage implants, and emergency glaucoma laser therapies are fully covered under cashless mediclaim, CGHS, and state health schemes at Ashvini Netralaya. Subsidized care is available under Sarva Drishti Yojana.",
    "technologyDetails": [
      {
        "name": "Humphrey Field Analyzer 3 (HFA3)",
        "maker": "Carl Zeiss Meditec (Germany)",
        "advantage": "Equipped with SITA Faster software and Guided Progression Analysis (GPA) to objectively track glaucoma progression with unmatched reproducibility."
      },
      {
        "name": "Cirrus HD-OCT RNFL & Ganglion Cell Complex",
        "maker": "Carl Zeiss Meditec (Germany)",
        "advantage": "Measures retinal nerve fiber layer thickness with micron-level precision, detecting structural damage years before functional vision loss occurs."
      }
    ],
    "faqs": [
      {
        "question": "Can glaucoma surgery restore lost vision?",
        "answer": "No. Vision lost to glaucoma nerve damage cannot be restored by surgery or medications. The primary purpose of trabeculectomy or laser therapy is to significantly lower eye pressure to protect and preserve your remaining vision for the rest of your life."
      },
      {
        "question": "How do I know if I have glaucoma if there is no pain?",
        "answer": "Because open-angle glaucoma causes no pain or early symptoms, the ONLY way to detect it is through routine annual eye checkups that include non-contact tonometry (eye pressure test) and dilated optic nerve examination."
      },
      {
        "question": "Will I still need eye drops after glaucoma surgery?",
        "answer": "In a majority of successful trabeculectomy surgeries, patients achieve excellent target pressure without needing any anti-glaucoma eye drops. However, some patients with advanced disease may still require a single mild drop long-term."
      },
      {
        "question": "What is normal intraocular pressure (IOP)?",
        "answer": "Normal intraocular pressure typically ranges between 10 mmHg and 21 mmHg. However, 'normal-tension glaucoma' can occur even within normal pressure ranges, making optic nerve imaging and visual field testing critical."
      },
      {
        "question": "Is glaucoma hereditary?",
        "answer": "Yes, family history is a major risk factor. If your parents or siblings have glaucoma, your risk is 4 to 9 times higher. All direct relatives of glaucoma patients should be screened annually."
      },
      {
        "question": "What is YAG Laser Iridotomy and is it painful?",
        "answer": "YAG Laser Iridotomy is a 5-minute, needle-free outpatient laser procedure that creates a microscopic bypass hole in the iris to prevent dangerous angle-closure attacks. The eye is numbed with drops, making the procedure virtually painless."
      }
    ],
    "doctorInCharge": "Dr. Paruldeep Chakma",
    "doctorCredentials": "MBBS, MS (Ophthalmology) | Glaucoma Fellow & Senior Consultant",
    "patientReview": {
      "quote": "My eye pressure was dangerously high at 34 mmHg and 3 different eye drops weren't helping. Dr. Paruldeep performed a trabeculectomy at Ashvini Netralaya. My pressure has remained steady at 12 mmHg for over a year now, with zero eye drops! I can live without fear of going blind.",
      "patientName": "Haradhan Bhowmik, 62",
      "location": "Melaghar, Sepahijala District",
      "outcome": "Trabeculectomy with Mitomycin-C (IOP stabilized at 12 mmHg)"
    }
  },
  {
    "id": "msics-surgery",
    "slug": "msics-surgery",
    "title": "MSICS - Manual Small Incision Cataract Surgery",
    "shortDescription": "High-volume, self-sealing sutureless cataract surgery engineered for dense, mature & hyper-mature cataracts in Tripura.",
    "description": "Manual Small Incision Cataract Surgery (MSICS) is a world-renowned, sutureless microsurgical technique designed to deliver outstanding visual outcomes for dense, advanced, and hyper-mature cataracts. In rural and semi-urban Tripura, cataracts are frequently neglected until they become rock-hard (brown-black nuclear cataracts) or hyper-mature, where ultrasonic phacoemulsification carries higher corneal endothelial risks.\n\nAt Ashvini Netralaya, our experienced cataract surgeons excel in MSICS. Through a self-sealing sclero-corneal tunnel fashioned without stitches, the cataractous nucleus is smoothly delivered in toto without relying on ultrasonic heat, followed by the secure implantation of a rigid or foldable intraocular lens (IOL). MSICS provides rapid visual recovery, structural safety, and high cost-effectiveness.",
    "category": "Surgical",
    "image": "/images/WhatsApp-Image-2023-06-03-at-2.30.24-AM.jpeg",
    "featured": false,
    "procedureTime": "15 - 20 Minutes",
    "recoveryTime": "Resume daily light routine in 48 - 72 hours",
    "anesthesia": "Peribulbar Local Anesthesia (Painless Block)",
    "hospitalStay": "Day-Care Outpatient (Discharge in 2 Hours)",
    "technology": "Sclero-Corneal Tunnel Construction, Viscoelastic Delivery, Rigid/Foldable IOL",
    "successRate": "99.5% Visual Restoration Success",
    "painLevel": "Completely Painless under localized block",
    "symptoms": [
      "Severe clouding of vision reducing sight to finger counting or light perception",
      "A visible yellowish, milky-white, or brownish discoloration in the center of the pupil",
      "Total inability to read, recognize faces, or walk independently",
      "Cataracts neglected for several years that have become rock-hard or hyper-mature",
      "Difficulty tolerating prolonged bright microscope light during phacoemulsification",
      "Advanced cataract co-existing with weak zonular support"
    ],
    "benefits": [
      "Proven safety and efficacy for dense, rock-hard, and hyper-mature brown-black cataracts",
      "Sutureless self-sealing scleral tunnel that heals naturally without corneal stitches",
      "Zero ultrasound heat energy, completely eliminating corneal endothelial burn risks",
      "Cost-effective cataract surgery supported under Sarva Drishti Yojana and PM-JAY",
      "Rapid visual rehabilitation allowing elderly patients to regain independent mobility quickly",
      "Rigid PMMA or foldable intraocular lens implantation ensuring permanent clear vision"
    ],
    "candidateCriteria": [
      "Patients with mature, hyper-mature, or rock-hard brunescent cataracts",
      "Elderly patients seeking cost-effective visual restoration under subsidy programs",
      "Cases where corneal endothelial cell density is compromised and ultrasound should be avoided",
      "Patients with pseudoexfoliation syndrome or zonular weakness"
    ],
    "procedureSteps": [
      {
        "title": "Peribulbar Local Block",
        "desc": "A localized anesthetic block provides complete ocular comfort and prevents involuntary eye movements.",
        "duration": "5 mins"
      },
      {
        "title": "Self-Sealing Scleral Tunnel Construction",
        "desc": "A 6.0mm to 6.5mm triplanar tunnel is dissected in the sclera and clear cornea, forming an architectural self-sealing internal valve.",
        "duration": "4 mins"
      },
      {
        "title": "Continuous Capsulotomy & Hydrodissection",
        "desc": "A large continuous curvilinear capsulorhexis or can-opener capsulotomy is fashioned, and the nucleus is mobilized.",
        "duration": "3 mins"
      },
      {
        "title": "Nucleus Delivery via Visco-Expression",
        "desc": "The dense cataractous nucleus is smoothly delivered out through the scleral tunnel using a surgical vectis and protective viscoelastic gel.",
        "duration": "3 mins"
      },
      {
        "title": "IOL Implantation & Tunnel Hydration",
        "desc": "A high-quality intraocular lens is centered inside the capsular bag. The tunnel self-seals via natural intraocular pressure without stitches.",
        "duration": "3 mins"
      }
    ],
    "comparisonTable": {
      "title": "MSICS vs Phacoemulsification at Ashvini Netralaya",
      "description": "Both are sutureless micro-incisional surgeries; your surgeon will recommend the best approach for your cataract density.",
      "items": [
        {
          "name": "MSICS (Manual Small Incision)",
          "type": "Sutureless Scleral Tunnel Surgery",
          "visionRange": "Sharp distance vision with reading glasses",
          "nightGlare": "Minimal",
          "spectacleFreedom": "Reading glasses usually needed for near vision",
          "bestFor": "Dense, hyper-mature, brown-black cataracts; subsidized surgery",
          "tag": "Ideal for Mature Cataract"
        },
        {
          "name": "Phacoemulsification (MICS)",
          "type": "Ultrasonic Micro-Incision (1.8-2.2mm)",
          "visionRange": "Full range with premium Multifocal/Toric/EDOF options",
          "nightGlare": "Depends on lens chosen (none with monofocal)",
          "spectacleFreedom": "Can achieve 90%+ glasses freedom with premium IOLs",
          "bestFor": "Mild to moderate cataracts, active lifestyle, toric correction",
          "tag": "Premium Technology"
        },
        {
          "name": "Conventional ECCE",
          "type": "Large-Incision Sutured Surgery",
          "visionRange": "Standard distance vision",
          "nightGlare": "Astigmatism from stitches",
          "spectacleFreedom": "High cylindrical glasses often required",
          "bestFor": "Largely obsolete; replaced by MSICS at Ashvini Netralaya",
          "tag": "Outdated Technique"
        }
      ]
    },
    "recoveryTimeline": [
      {
        "timeframe": "Day of Surgery (Day 0)",
        "title": "Discharge & Comfort",
        "description": "Patient discharged with protective eye pad after 2 hours. Rest quietly at home.",
        "activities": [
          "Rest in bed",
          "Take oral medications",
          "Do not disturb eye pad"
        ]
      },
      {
        "timeframe": "Day 1 Follow-Up",
        "title": "Eye Pad Removal & Visual Check",
        "description": "Eye pad is removed in the hospital. Vision improves significantly as the pupil normalizes.",
        "activities": [
          "Normal walking and eating",
          "Start prescribed eye drops",
          "Wear protective shield at night"
        ]
      },
      {
        "timeframe": "Week 2 Milestone",
        "title": "Tunnel Healing & Routine Life",
        "description": "Scleral tunnel is securely healed. Inflammation is completely controlled.",
        "activities": [
          "Resume household tasks and market visits",
          "Avoid rubbing eyes",
          "Do not splash unboiled water"
        ]
      },
      {
        "timeframe": "Month 1 Final Exam",
        "title": "Final Refraction & Spectacles",
        "description": "Refraction tested and glasses prescribed for reading and distance clarity.",
        "activities": [
          "Full normal activity permitted",
          "Lifelong sharp sight restored"
        ]
      }
    ],
    "preOpInstructions": [
      "Wash your face and hair with soap the evening before surgery.",
      "Take prescribed blood pressure medications on schedule in the morning.",
      "Have a light breakfast 3 hours before reporting to the hospital.",
      "Bring your voter ID, Aadhaar card, or BPL/PM-JAY card if availing subsidized schemes.",
      "Arrange for an accompanying family member to assist you during discharge."
    ],
    "postOpCare": [
      "Instill the antibiotic and anti-inflammatory eye drops strictly as prescribed.",
      "Always wash your hands thoroughly before applying eye drops.",
      "Do NOT rub, press, or touch the operated eye.",
      "Avoid getting tap water into the eye while bathing for 14 days; use a wet towel for the face.",
      "Wear sunglasses when outdoors to protect against dust and wind."
    ],
    "insuranceCoverage": "MSICS is fully covered under Ayushman Bharat PM-JAY, CM-JAY, all government health schemes, and private health insurance. Subsidized surgery packages starting at ₹3,000 are available through Sarva Drishti Yojana.",
    "technologyDetails": [
      {
        "name": "Carl Zeiss Surgical Stereomicroscope",
        "maker": "Carl Zeiss Meditec (Germany)",
        "advantage": "Crisp stereoscopic depth visualization and bright red reflex enabling precise tunnel construction and lens placement."
      },
      {
        "name": "Appasamy Biometry & Surgical Instrumentation",
        "maker": "Appasamy Associates",
        "advantage": "High-grade titanium surgical instruments designed specifically for atraumatic nucleus delivery and corneal endothelium protection."
      }
    ],
    "faqs": [
      {
        "question": "Does MSICS require stitches?",
        "answer": "No. MSICS uses a specially engineered self-sealing tunnel in the white part of the eye (sclera) that locks shut naturally by internal eye pressure without needing any stitches."
      },
      {
        "question": "Is MSICS inferior to Phaco surgery?",
        "answer": "Not at all. For very hard, advanced, or hyper-mature cataracts, MSICS is often clinically safer than phacoemulsification because it removes the hard lens mechanically without generating ultrasonic heat that could injure the delicate corneal cells."
      },
      {
        "question": "How much does MSICS cost under Sarva Drishti Yojana?",
        "answer": "Under our community initiative Sarva Drishti Yojana, eligible BPL, PHH, AAY, and underprivileged card holders in Tripura can receive MSICS surgery starting at just ₹3,000, including surgical consumables and post-op care."
      },
      {
        "question": "How long is the hospital stay for MSICS?",
        "answer": "MSICS is performed as a day-care outpatient procedure. Patients report in the morning and are comfortably discharged to go home within 2 to 3 hours after surgery."
      },
      {
        "question": "Will I need glasses after MSICS?",
        "answer": "Yes, most patients receive a monofocal intraocular lens, which gives clear distance vision. You will typically need reading glasses for near work (books, newspapers, mobile phones)."
      },
      {
        "question": "Can an elderly person with diabetes undergo MSICS safely?",
        "answer": "Yes, provided their blood sugar levels are controlled. Our medical team conducts routine pre-operative diabetic and cardiac fitness evaluations to ensure maximum surgical safety."
      }
    ],
    "doctorInCharge": "Dr. Subrata Saha",
    "doctorCredentials": "MBBS, MS (Ophthalmology) | Chief Operating Officer & Senior Eye Surgeon",
    "patientReview": {
      "quote": "My mother had completely lost her eyesight due to advanced white cataracts in both eyes. Dr. Subrata Saha operated on her under the Sarva Drishti Yojana at Ashvini Netralaya. She walked out of the hospital seeing clearly the very next day. It feels like a miracle for our family.",
      "patientName": "Gopal Chandra Das (Son of Minati Das, 72)",
      "location": "Khowai, Tripura",
      "outcome": "Bilateral MSICS with PMMA IOL (Vision Restored to 6/9)"
    }
  },
  {
    "id": "yag-laser",
    "slug": "yag-laser",
    "title": "YAG Laser Capsulotomy & Iridotomy",
    "shortDescription": "3-minute painless outpatient Nd:YAG laser clearing after-cataract haze and relieving narrow-angle glaucoma pressure in Agartala.",
    "description": "The Nd:YAG (Neodymium-doped Yttrium Aluminum Garnet) Laser is a revolutionary, non-invasive ophthalmic tool used for precision photo-disruption of intraocular tissue without making any surgical incisions. At Ashvini Netralaya, we utilize the world-renowned Ellex Super Q Nd:YAG laser platform for two critical outpatient applications: Posterior Capsulotomy and Peripheral Iridotomy.\n\nPosterior Capsulotomy permanently treats 'after-cataract' (Posterior Capsule Opacification or PCO), a common natural condition where the microscopic clear membrane supporting your artificial lens becomes hazy months or years after cataract surgery. Peripheral Iridotomy is an essential preventive and therapeutic laser for narrow-angle and acute angle-closure glaucoma, creating a microscopic bypass channel in the iris to equalize fluid pressure and prevent sudden blinding attacks.",
    "category": "Laser & Retina",
    "image": "/images/WhatsApp-Image-2023-06-03-at-2.30.24-AM-1.jpeg",
    "featured": false,
    "procedureTime": "3 - 5 Minutes",
    "recoveryTime": "Immediate (Pupils normalize in 2-3 hours)",
    "anesthesia": "Topical Numbing Eye Drops (100% Needle-Free)",
    "hospitalStay": "Outpatient In-Office Laser Suite",
    "technology": "Ellex Super Q Photodisruptor Nd:YAG Laser with 4-Point Aiming Beam",
    "successRate": "99.9% Procedure Success",
    "painLevel": "Completely Painless (No Injections)",
    "symptoms": [
      "Gradual return of misty, hazy, or blurred vision months or years after successful cataract surgery",
      "Increased glare or starbursts around lights at night after cataract surgery",
      "Colors appearing washed out or faded again despite having an artificial lens",
      "Narrow anterior chamber angles diagnosed during routine slit-lamp or gonioscopy exam",
      "Episodes of sudden eye ache, blurred vision, and colored halos around bulbs in dark environments",
      "Family history of acute angle-closure glaucoma"
    ],
    "benefits": [
      "100% non-invasive outpatient laser performed in an upright examination chair",
      "Takes only 3 to 5 minutes with zero needles, zero cuts, and zero surgical stitches",
      "Instantly clears after-cataract haze, permanently restoring the crisp 6/6 vision achieved after cataract surgery",
      "Permanent solution: posterior capsule opacification NEVER recurs once opened",
      "Prevents catastrophic acute angle-closure glaucoma attacks in patients with narrow angles",
      "No downtime: walk into the clinic, undergo laser, and return home immediately"
    ],
    "candidateCriteria": [
      "Post-cataract surgery patients experiencing visual haze due to posterior capsule opacification (PCO)",
      "Patients with narrow or occludable anterior chamber angles (Primary Angle Closure Suspects)",
      "Patients presenting with acute or subacute angle-closure glaucoma attacks",
      "Individuals seeking non-invasive, instant vision restoration after cataract surgery"
    ],
    "procedureSteps": [
      {
        "title": "Pupil Preparation & Pressure Drop",
        "desc": "Specialized drops are instilled to either dilate the pupil (for capsulotomy) or constrict it (for iridotomy), along with an anti-hypertensive drop.",
        "duration": "15 mins"
      },
      {
        "title": "Topical Drop Anesthesia",
        "desc": "A single drop of local anesthetic numbs the surface of the eye completely within 30 seconds.",
        "duration": "1 min"
      },
      {
        "title": "Magnifying Contact Lens Placement",
        "desc": "A specialized Abraham or capsulotomy laser contact lens is gently rested on the cornea to focus the laser beam with sub-micron accuracy.",
        "duration": "1 min"
      },
      {
        "title": "Precision Nd:YAG Laser Delivery",
        "desc": "The surgeon delivers brief micro-pulses of optical energy. A circular opening is cleared in the cloudy capsule, or a tiny bypass port is created in the iris.",
        "duration": "2 - 3 mins"
      },
      {
        "title": "Post-Laser Pressure Verification",
        "desc": "Intraocular pressure is measured after 45 minutes to confirm stability before you comfortably head home.",
        "duration": "45 mins (Observation)"
      }
    ],
    "comparisonTable": {
      "title": "YAG Laser Procedures at Ashvini Netralaya",
      "description": "Comparison between the two major clinical applications of the Nd:YAG laser platform.",
      "items": [
        {
          "name": "YAG Posterior Capsulotomy",
          "type": "After-Cataract Clearing",
          "visionRange": "Restores crystal-clear 6/6 distance & reading sight",
          "nightGlare": "Completely eliminates PCO haze and starbursts",
          "spectacleFreedom": "Returns vision to immediate post-cataract clarity",
          "bestFor": "Cloudy vision months/years after cataract surgery",
          "tag": "Most Common Laser"
        },
        {
          "name": "YAG Peripheral Iridotomy (LPI)",
          "type": "Glaucoma Prevention / Treatment",
          "visionRange": "Protects current visual field & opens fluid drainage",
          "nightGlare": "Negligible (hidden under upper eyelid)",
          "spectacleFreedom": "Prevents acute blinding pressure spikes",
          "bestFor": "Narrow angles, closed-angle glaucoma, shallow anterior chamber",
          "tag": "Sight-Saving Preventive"
        },
        {
          "name": "Surgical Incision Alternative",
          "type": "Invasive Operating Room Procedure",
          "visionRange": "Higher risk of infection and bleeding",
          "nightGlare": "Variable",
          "spectacleFreedom": "Requires hospital admission",
          "bestFor": "Obsolete for PCO; YAG laser is the 100% preferred method",
          "tag": "Outdated"
        }
      ]
    },
    "recoveryTimeline": [
      {
        "timeframe": "Immediate Post-Laser",
        "title": "Instant Clearing & Normalization",
        "description": "Vision may look slightly bright or floaty for an hour. Most patients immediately notice a dramatic clearing of haze.",
        "activities": [
          "Rest in waiting area for 30-45 minutes",
          "Wear sunglasses for the ride home",
          "Resume light activities"
        ]
      },
      {
        "timeframe": "Day 1 Post-Laser",
        "title": "Full Visual Restoration",
        "description": "Pupil dilation has completely resolved. Reading, driving, and computer vision are back to crystal clarity.",
        "activities": [
          "Normal daily living and office work",
          "Take anti-inflammatory eye drops for 5 days as prescribed"
        ]
      },
      {
        "timeframe": "Week 1 Checkup",
        "title": "Final Confirmation",
        "description": "Slit-lamp examination confirms a clear optical axis and normal eye pressure.",
        "activities": [
          "Full normal activity permitted; no further laser needed permanently"
        ]
      }
    ],
    "preOpInstructions": [
      "No fasting required; eat your normal meals and take routine medications as usual.",
      "Inform the doctor if you are taking blood thinners or have known glaucoma.",
      "Plan for approximately 1 hour at the hospital to allow for drop preparation and post-laser check.",
      "Bring sunglasses to wear after the procedure because dilating drops make eyes light-sensitive.",
      "Bring an accompanying family member to assist with travel home."
    ],
    "postOpCare": [
      "Instill the prescribed anti-inflammatory eye drops 3-4 times daily for 5 to 7 days.",
      "You can resume reading, TV watching, and desk work on the same day.",
      "You may notice a few tiny floating specks for a couple of days; these naturally settle down.",
      "Do not rub your eyes vigorously.",
      "Report immediately if you experience severe eye pain, headache, or sudden flashing lights."
    ],
    "insuranceCoverage": "YAG laser capsulotomy and iridotomy are covered under private health insurance and mediclaim policies as day-care procedures at Ashvini Netralaya. Subsidized rates are available under Sarva Drishti Yojana.",
    "technologyDetails": [
      {
        "name": "Ellex Super Q Nd:YAG Laser",
        "maker": "Ellex Medical Lasers (Australia)",
        "advantage": "World's best-selling ophthalmic photodisruptor with patented 4-point aiming beam and ultra-low energy breakdown threshold, preventing IOL pitting."
      }
    ],
    "faqs": [
      {
        "question": "Is YAG Laser capsulotomy the same as repeat cataract surgery?",
        "answer": "No, not at all! A cataract can never grow back. YAG capsulotomy is a quick, 3-minute, non-surgical outpatient laser that simply clears the microscopic cloudy membrane behind your artificial lens. There are no cuts, no stitches, and no needles."
      },
      {
        "question": "Does the YAG laser hurt?",
        "answer": "No, the procedure is completely painless. The eye is numbed with gentle anesthetic drops. You will hear a soft clicking sound as the laser pulses, but you will not feel any pain."
      },
      {
        "question": "Can after-cataract (PCO) come back after YAG laser?",
        "answer": "No. Once the central cloudy capsule is opened by the YAG laser, it never closes or clouds over again. The procedure is permanent and only needs to be done once in a lifetime."
      },
      {
        "question": "How soon will my vision clear up after YAG capsulotomy?",
        "answer": "Many patients notice an immediate dramatic improvement right after stepping away from the laser machine. Vision continues to sharpen over the next 24 to 48 hours as the pupil dilation drops wear off."
      },
      {
        "question": "Are there any risks with YAG laser?",
        "answer": "YAG capsulotomy is one of the safest procedures in all of medicine, with over 99.8% safety. Minor temporary side effects may include mild floating specks or a brief temporary elevation in eye pressure, which we prevent with routine pre-laser drops."
      },
      {
        "question": "Why do I need YAG laser for narrow angles if I have no symptoms?",
        "answer": "Narrow-angle eyes are at high risk of sudden, catastrophic acute glaucoma attacks, where eye pressure spikes dramatically within hours, causing severe pain and permanent blindness. A 5-minute preventive YAG iridotomy completely eliminates this risk for life."
      }
    ],
    "doctorInCharge": "Dr. Anurag Majumdar",
    "doctorCredentials": "MBBS, MS (Ophthalmology) | Medical Director & Senior Anterior Segment Surgeon",
    "patientReview": {
      "quote": "Three years after my cataract surgery, my vision started getting cloudy again. I thought my cataract had returned. Dr. Anurag explained it was after-cataract and performed a 3-minute YAG laser. I walked out with crystal-clear 6/6 vision again! No pain, no hassle. Wonderful experience.",
      "patientName": "Arati Deb, 65",
      "location": "Indranagar, Agartala",
      "outcome": "YAG Capsulotomy (Vision Instantly Restored to 6/6)"
    }
  },
  {
    "id": "green-laser-for-retina",
    "slug": "green-laser-for-retina",
    "title": "Green Laser 532nm Photocoagulation",
    "shortDescription": "Precision 532nm pure green frequency-doubled retinal laser photocoagulation for diabetic retinopathy, vein occlusions & retinal tears in Agartala.",
    "description": "Retinal photocoagulation using pure 532nm green wavelength laser is the international gold standard treatment for halting sight-threatening vascular retinal diseases and sealing dangerous peripheral retinal tears. At Ashvini Netralaya, our Vitreo-Retinal unit is equipped with advanced frequency-doubled Nd:YAG 532nm green laser systems integrated with precision slit-lamp biomicroscopic delivery.\n\nThe 532nm green wavelength is optimally absorbed by melanin and hemoglobin in the retinal pigment epithelium, delivering targeted thermal energy that coagulates oxygen-starved retinal tissue without damaging the delicate inner neurosensory retina or overlying fovea. We routinely perform Pan-Retinal Photocoagulation (PRP) for proliferative diabetic retinopathy, focal/grid laser for macular edema, and emergency barricade laser for peripheral retinal tears to prevent full retinal detachments.",
    "category": "Laser & Retina",
    "image": "/images/WhatsApp-Image-2023-06-03-at-2.30.25-AM.jpeg",
    "featured": false,
    "procedureTime": "15 - 25 Minutes per session",
    "recoveryTime": "Immediate (Pupils normalize in 3-4 hours)",
    "anesthesia": "Topical Drop Anesthesia (Needle-Free)",
    "hospitalStay": "Outpatient In-Office Laser Suite",
    "technology": "Iridex / Zeiss 532nm Frequency-Doubled Pure Green Laser System",
    "successRate": "95% Progression Arrest Rate",
    "painLevel": "Mild warm sensation; well tolerated under topical drops",
    "symptoms": [
      "Diabetic patients noticing floating specks, cobwebs, or reddish haze in vision",
      "Sudden flashes of light or new floaters caused by a peripheral retinal tear",
      "Sudden blurring of central sight following retinal vein occlusion (CRVO/BRVO)",
      "High myopia patients diagnosed with lattice degeneration or retinal thinning",
      "Diagnosis of moderate to severe non-proliferative or proliferative diabetic retinopathy",
      "Diabetic macular edema identified on routine OCT cross-sectional scans"
    ],
    "benefits": [
      "Stops the growth of abnormal, fragile new blood vessels that cause massive eye bleeding",
      "Prevents catastrophic tractional retinal detachment in diabetic patients",
      "Emergency barricade laser seals retinal tears, completely preventing retinal detachment surgery",
      "Selective 532nm green wavelength delivers maximal retinal absorption with minimal power requirement",
      "Non-invasive outpatient procedure: no cuts, no stitches, and zero hospitalization",
      "Proven international clinical trial evidence (ETDRS / DRS) for decades of sight preservation"
    ],
    "candidateCriteria": [
      "Diabetic patients with severe NPDR or Proliferative Diabetic Retinopathy (PDR)",
      "Patients with horseshoe retinal tears, round holes, or peripheral lattice degenerations",
      "Individuals suffering from Branch Retinal Vein Occlusion (BRVO) or Central Retinal Vein Occlusion",
      "Patients with localized retinal telangiectasia or Eales disease"
    ],
    "procedureSteps": [
      {
        "title": "Wide Pupil Dilation",
        "desc": "Specialized drops widen the pupil fully to provide clear visualization of the peripheral and posterior retina.",
        "duration": "25 mins"
      },
      {
        "title": "Topical Drop Anesthesia",
        "desc": "Surface-numbing drops ensure the eye is comfortable and insensitive to the contact lens.",
        "duration": "1 min"
      },
      {
        "title": "Specialized Wide-Field Fundus Laser Lens Placement",
        "desc": "A Mainster or Volk Quadraspheric laser lens is placed against the cornea with coupling gel to focus the green laser spot.",
        "duration": "2 mins"
      },
      {
        "title": "Precise 532nm Laser Spot Delivery",
        "desc": "The retinal surgeon delivers therapeutic laser burns (PRP or barricade pattern) to seal bleeding vessels or ring the retinal tear.",
        "duration": "15 - 20 mins"
      },
      {
        "title": "Post-Laser Fundus Inspection",
        "desc": "The surgeon checks the laser uptake and ensures optimal spot intensity before removing the lens and wiping the eye.",
        "duration": "3 mins"
      }
    ],
    "comparisonTable": {
      "title": "Green Laser Protocols at Ashvini Netralaya",
      "description": "Tailored laser applications depending on the specific retinal disease stage.",
      "items": [
        {
          "name": "Pan-Retinal Photocoagulation (PRP)",
          "type": "Full Peripheral Retinal Ablation",
          "visionRange": "Preserves central reading vision by arresting neovascularization",
          "nightGlare": "Mild reduction in dark adaptation / night vision",
          "spectacleFreedom": "Maintains current spectacle prescription",
          "bestFor": "Proliferative diabetic retinopathy (PDR), ischemic vein occlusion",
          "tag": "Diabetic Gold Standard"
        },
        {
          "name": "Barricade Retinal Tear Laser",
          "type": "Targeted 360-Degree Tear Encirclement",
          "visionRange": "No loss of vision; seals tear from leaking",
          "nightGlare": "None",
          "spectacleFreedom": "Prevents retinal detachment surgery",
          "bestFor": "Horseshoe tears, retinal breaks, symptomatic lattice",
          "tag": "Emergency Preventive"
        },
        {
          "name": "Focal / Grid Macular Laser",
          "type": "Micro-Pulse / Low-Intensity Macular Laser",
          "visionRange": "Dries up localized microaneurysm leakage",
          "nightGlare": "None",
          "spectacleFreedom": "Stabilizes fine central vision",
          "bestFor": "Clinically significant diabetic macular edema outside fovea",
          "tag": "Targeted Edema Control"
        }
      ]
    },
    "recoveryTimeline": [
      {
        "timeframe": "Immediate Post-Laser",
        "title": "Dazzle Effect & Pupil Dilation",
        "description": "Vision will look pinkish or tinted for 15-30 minutes due to the bright aiming beam. Wear sunglasses on the way home.",
        "activities": [
          "Rest in waiting area",
          "Wear sunglasses outdoors",
          "Have an escort assist you home"
        ]
      },
      {
        "timeframe": "Day 1 Post-Laser",
        "title": "Normal Routine Resumption",
        "description": "Pupil dilation resolves completely. Normal desk work and household chores can be resumed without restriction.",
        "activities": [
          "Normal daily work and reading",
          "Take lubricating drops if mild surface scratchiness occurs"
        ]
      },
      {
        "timeframe": "Week 3 to 4 Follow-Up",
        "title": "Laser Scar Pigmentation Review",
        "description": "Laser burns mature into firm chorioretinal scars, permanently sealing the tear or regressing abnormal diabetic vessels.",
        "activities": [
          "Complete fundus check",
          "Next session scheduled if PRP multi-session protocol is required"
        ]
      }
    ],
    "preOpInstructions": [
      "Eat your regular meals and take routine blood pressure and diabetic medications on schedule.",
      "Bring all previous OCT scans, fundus photographs, and diabetic reports.",
      "Plan to spend 1 to 2 hours at the hospital to allow for complete pupil dilation.",
      "Bring a pair of dark sunglasses to reduce light dazzle after the laser session.",
      "Arrange for an accompanying attendant to travel home with you."
    ],
    "postOpCare": [
      "Avoid vigorous gym workouts, heavy weightlifting (> 10 kg), or high-impact jumping for 7 days.",
      "Do NOT rub or squeeze the treated eye.",
      "You may resume reading, television, and computer work on the same evening.",
      "Attend all scheduled laser sessions (PRP typically requires 2 to 3 sessions per eye).",
      "Contact the retina helpline immediately if you experience a dark curtain or sudden heavy floaters."
    ],
    "insuranceCoverage": "Retinal photocoagulation laser therapy is fully covered under all major private health insurance TPAs and corporate mediclaim policies at Ashvini Netralaya. Subsidized packages available under Sarva Drishti Yojana.",
    "technologyDetails": [
      {
        "name": "Iridex OcuLight TX 532nm Green Laser",
        "maker": "Iridex Corporation (USA)",
        "advantage": "High-power green laser with uniform power density and true pulse duration control, ensuring precise burn delivery with minimal collateral tissue heating."
      }
    ],
    "faqs": [
      {
        "question": "Does green laser treatment hurt?",
        "answer": "Most patients describe the sensation as mild, brief warm pinpricks or a deep dull throb during laser delivery. It is very well tolerated under topical numbing drops. If needed, your doctor can adjust the power or deliver localized anesthesia."
      },
      {
        "question": "Will green laser cure my diabetic retinopathy permanently?",
        "answer": "Green laser photocoagulation is not a 'cure' for systemic diabetes, but it is the most effective clinical tool to stop leaking vessels and prevent severe bleeding and blindness. Strict blood sugar control is essential alongside laser treatment."
      },
      {
        "question": "Why do I need multiple sessions of Pan-Retinal Photocoagulation (PRP)?",
        "answer": "PRP requires treating a large area of the peripheral retina (typically 1,200 to 1,800 spots per eye). Dividing the treatment into 2 or 3 sessions ensures patient comfort and prevents temporary swelling of the macula."
      },
      {
        "question": "Will the laser improve my vision?",
        "answer": "The primary goal of retinal green laser is to PREVENT future vision loss and catastrophic bleeding rather than improving existing vision. However, for macular edema, laser helps stabilize and protect fine reading sight."
      },
      {
        "question": "Can I drive home after my retinal laser session?",
        "answer": "No. Your pupil will be dilated and your eye will experience temporary dazzle for an hour after the bright laser light. Please have a family member or taxi accompany you home."
      },
      {
        "question": "How does green laser prevent a retinal tear from detaching?",
        "answer": "The laser creates tiny therapeutic burns around the retinal tear. As these burns heal over 2 to 3 weeks, they form firm microscopic scars that act like 'spot welds,' locking the retina down to the eye wall and preventing fluid from seeping underneath."
      }
    ],
    "doctorInCharge": "Dr. Kaushick Biswas",
    "doctorCredentials": "MBBS, MS, DNB | Senior Vitreo-Retinal Surgeon & Laser Specialist",
    "patientReview": {
      "quote": "As a diabetic patient for 15 years, I suddenly noticed dark floaters. Dr. Kaushick diagnosed proliferative diabetic retinopathy and performed 532nm green laser over two sessions at Ashvini Netralaya. My vision was saved from bleeding. Truly excellent doctors right here in Tripura.",
      "patientName": "Dilip Kumar Debbarma, 58",
      "location": "Kunjaban, Agartala",
      "outcome": "Pan-Retinal Photocoagulation (Retinal Neovascularization Regressed)"
    }
  },
  {
    "id": "zeiss-oct-automated-perimetry",
    "slug": "zeiss-oct-automated-perimetry",
    "title": "Zeiss HD-OCT & Humphrey Automated Perimetry",
    "shortDescription": "Micron-level retinal cross-sectional OCT imaging and gold-standard Humphrey visual field testing for glaucoma and neuro-ophthalmic disease in Agartala.",
    "description": "Ashvini Netralaya houses Tripura’s most sophisticated ophthalmic diagnostic laboratory, featuring the Carl Zeiss Cirrus HD-OCT 5000 and the Humphrey Field Analyzer 3 (HFA3). These two world-renowned platforms form the backbone of modern clinical decision-making for glaucoma, macular degenerations, diabetic macular edema, and neuro-ophthalmic disorders.\n\nThe Zeiss Cirrus HD-OCT utilizes non-invasive spectral-domain optical coherence tomography to capture cross-sectional images of the retina, macula, and optic nerve head down to a resolution of 5 microns—providing an 'in-vivo optical biopsy' without touching the eye. Paired with Humphrey Automated Perimetry—the global gold standard for mapping the functional visual field—our diagnostic specialists correlate structural nerve fiber loss with functional vision defects years before symptoms appear.",
    "category": "Diagnostics",
    "image": "/images/WhatsApp-Image-2023-06-03-at-2.30.25-AM-1.jpeg",
    "featured": false,
    "procedureTime": "15 - 30 Minutes",
    "recoveryTime": "Immediate (Zero Recovery Time)",
    "anesthesia": "None Required (100% Non-Contact & Non-Invasive)",
    "hospitalStay": "Outpatient Diagnostic Suite",
    "technology": "Carl Zeiss Cirrus HD-OCT 5000 & Humphrey Field Analyzer 3 (HFA3)",
    "successRate": "100% Precision Diagnostic Accuracy",
    "painLevel": "Completely Painless (No Touch / No Injections)",
    "symptoms": [
      "Diabetic or hypertensive patients needing evaluation for macular swelling or ischemia",
      "Suspected glaucoma patients with elevated eye pressure or asymmetric optic nerve cups",
      "Experiencing unexplained blind spots, dark patches, or missing letters while reading",
      "Distorted, wavy vision when looking at tiled floors or door frames (metamorphopsia)",
      "Patients taking long-term Hydroxychloroquine (HCQ) or ethambutol requiring retinal toxicity screening",
      "Neurological conditions causing visual field loss (pituitary adenomas, stroke, optic neuritis)"
    ],
    "benefits": [
      "Micron-level 5-micron resolution cross-sectional imaging of all 10 retinal layers",
      "RNFL Ganglion Cell Analysis detecting microscopic glaucoma nerve damage years before visual field loss",
      "Gold standard Humphrey SITA-Faster visual field testing with Guided Progression Analysis (GPA)",
      "Completely non-invasive and non-contact: no needles, no drops touching the eye, and zero radiation",
      "Instant computerized printouts comparing your eye against age-matched normative international databases",
      "Essential for monitoring disease progression and surgical outcomes in retina and glaucoma patients"
    ],
    "candidateCriteria": [
      "All patients diagnosed with or suspected of having Glaucoma",
      "Diabetic patients undergoing monitoring for Diabetic Macular Edema (DME)",
      "Patients with Age-Related Macular Degeneration (AMD) or Central Serous Chorioretinopathy (CSCR)",
      "Patients on long-term medications requiring retinal safety monitoring (Plaquenil / HCQ)",
      "Individuals presenting with unexplained headaches, vision loss, or neurological symptoms"
    ],
    "procedureSteps": [
      {
        "title": "Patient Comfort & Chin-Rest Alignment",
        "desc": "You sit comfortably in front of the Zeiss instrument with your chin resting on an ergonomic padded support.",
        "duration": "2 mins"
      },
      {
        "title": "Zeiss HD-OCT Macular & Optic Disc Cube Scan",
        "desc": "You look at a green fixation target inside the machine while safe infrared laser light captures 68,000 A-scans per second.",
        "duration": "5 mins"
      },
      {
        "title": "Humphrey Visual Field Testing (HFA 3)",
        "desc": "One eye is gently patched. You hold a response button and click whenever you perceive a dim light flash inside the white testing dome.",
        "duration": "10 mins per eye"
      },
      {
        "title": "Computerized Guided Progression Analysis (GPA)",
        "desc": "Software analyzes nerve thickness maps, ganglion cell complexes, and visual field sensitivity against normal populations.",
        "duration": "3 mins"
      },
      {
        "title": "Specialist Consultation & Review",
        "desc": "Your ophthalmologist reviews the detailed color reports with you and explains the diagnosis and treatment recommendations.",
        "duration": "10 mins"
      }
    ],
    "comparisonTable": {
      "title": "Diagnostic Modalities: OCT vs Humphrey Perimetry",
      "description": "How structural imaging and functional testing work together at Ashvini Netralaya.",
      "items": [
        {
          "name": "Zeiss Cirrus HD-OCT",
          "type": "Structural Micron-Level Imaging",
          "visionRange": "Reveals physical tissue thickness & microscopic fluid pockets",
          "nightGlare": "None (uses invisible infrared light)",
          "spectacleFreedom": "Diagnostic test only",
          "bestFor": "Glaucoma RNFL loss, diabetic macular edema, AMD, macular hole",
          "tag": "Structural Gold Standard"
        },
        {
          "name": "Humphrey Field Analyzer (HFA3)",
          "type": "Functional Visual Field Mapping",
          "visionRange": "Maps full peripheral and central sensitivity of the visual field",
          "nightGlare": "None",
          "spectacleFreedom": "Monitors real-world functional vision preservation",
          "bestFor": "Glaucoma progression, neurological lesions, optic nerve stroke",
          "tag": "Functional Gold Standard"
        },
        {
          "name": "Manual Goldmann Perimetry",
          "type": "Kinetic Manual Testing",
          "visionRange": "Broad peripheral kinetic mapping",
          "nightGlare": "None",
          "spectacleFreedom": "Technician-dependent",
          "bestFor": "Largely replaced by automated Humphrey SITA testing",
          "tag": "Traditional"
        }
      ]
    },
    "recoveryTimeline": [
      {
        "timeframe": "Immediate Post-Test",
        "title": "Test Completion & Normal Routine",
        "description": "There are zero after-effects. You can immediately return to office work, driving, or screen use.",
        "activities": [
          "Collect printed diagnostic report",
          "Consult doctor with results",
          "Resume all normal activities"
        ]
      },
      {
        "timeframe": "6 Months to 1 Year Recall",
        "title": "Periodic Progression Monitoring",
        "description": "Repeat scans are overlaid on previous baselines via Guided Progression Analysis (GPA) to verify that treatment is working.",
        "activities": [
          "Attend routine follow-up scan"
        ]
      }
    ],
    "preOpInstructions": [
      "Bring your distance and reading glasses to the appointment (used during visual field testing).",
      "Get a good night's sleep before a visual field test so you feel alert and attentive during the test.",
      "Pupil dilation is generally not required for Cirrus OCT; wear your normal daily contact lenses or glasses.",
      "Bring all previous OCT scans or field reports from other clinics for chronological comparison.",
      "No fasting or medication restrictions apply."
    ],
    "postOpCare": [
      "There are no physical restrictions following OCT or perimetry testing.",
      "Store your printed color reports carefully in your medical file for future comparisons.",
      "Follow your ophthalmologist's clinical recommendations regarding medical or laser treatment.",
      "Schedule your periodic recall test as advised to ensure early detection of any disease progression."
    ],
    "insuranceCoverage": "Diagnostic OCT and perimetry investigations are covered under health insurance policies when performed as part of authorized pre-surgical evaluations or chronic disease monitoring at Ashvini Netralaya.",
    "technologyDetails": [
      {
        "name": "Cirrus HD-OCT 5000",
        "maker": "Carl Zeiss Meditec (Germany)",
        "advantage": "Captures 68,000 axial scans per second with FastTrac retinal tracking, compensating for involuntary eye movements to yield artifact-free scans."
      },
      {
        "name": "Humphrey Field Analyzer 3 (HFA3)",
        "maker": "Carl Zeiss Meditec (Germany)",
        "advantage": "Features patented SITA Faster testing strategies, cutting test times down to 2-3 minutes while maintaining gold-standard clinical accuracy."
      }
    ],
    "faqs": [
      {
        "question": "Does an OCT scan involve radiation or painful eye contact?",
        "answer": "No, absolutely not. An OCT scan uses safe, invisible near-infrared light waves similar to ultrasound, but using light instead of sound. Nothing touches your eye, and there is zero radiation involved."
      },
      {
        "question": "Why do I need both an OCT scan and a Humphrey visual field test?",
        "answer": "Glaucoma causes structural damage to nerve fibers (which the OCT measures down to the micron) as well as functional blind spots in your field of vision (which the Humphrey perimeter tests). Combining both gives your doctor a complete, 360-degree picture of your eye health."
      },
      {
        "question": "How long does a Humphrey visual field test take?",
        "answer": "With our advanced Humphrey HFA3 SITA Faster software, testing each eye typically takes only 2.5 to 4 minutes, compared to 10-15 minutes on older machines."
      },
      {
        "question": "What should I do if I feel tired during a visual field test?",
        "answer": "You can pause the test at any moment! Simply keep the response button pressed down continuously; the machine will pause immediately until you release the button when you feel rested."
      },
      {
        "question": "Can an OCT scan detect diabetic retinopathy before I have symptoms?",
        "answer": "Yes! High-definition OCT detects microscopic fluid accumulation (macular edema) and subclinical retinal swelling months before you notice any blurriness, allowing for early, vision-saving treatment."
      },
      {
        "question": "Do my pupils have to be dilated for an OCT scan?",
        "answer": "In most cases, the Zeiss Cirrus HD-OCT captures high-quality scans through natural, undilated pupils. If your pupils are exceptionally small or cataracts are dense, mild dilating drops may occasionally be used."
      }
    ],
    "doctorInCharge": "Dr. Paruldeep Chakma",
    "doctorCredentials": "MBBS, MS (Ophthalmology) | Consultant Glaucoma & Diagnostic Specialist",
    "patientReview": {
      "quote": "My doctor suspected glaucoma but wasn't sure. Ashvini Netralaya performed the Zeiss OCT and Humphrey field test. The doctor showed me the 3D colored nerve map on screen and clearly explained that my optic nerve was healthy. The testing was so fast and comfortable.",
      "patientName": "Kakali Majumder, 45",
      "location": "Bishalgarh, Tripura",
      "outcome": "Normal Glaucoma Screening with Confirmed Baseline RNFL"
    }
  },
  {
    "id": "usg-b-scan",
    "slug": "usg-b-scan",
    "title": "USG B-Scan (Ophthalmic Ultrasound)",
    "shortDescription": "High-resolution 10MHz/20MHz posterior segment ophthalmic ultrasound imaging through dense cataracts, vitreous hemorrhage & trauma in Agartala.",
    "description": "Ophthalmic Ultrasonography (B-Scan) is an indispensable high-frequency acoustic diagnostic tool that enables cross-sectional visualization of the internal structures of the eyeball and orbit. When normal optical visualization of the retina is blocked by dense cataracts, corneal opacities, hyphema (blood in the anterior chamber), or massive vitreous hemorrhage, the USG B-Scan acts as the ophthalmologist's 'acoustic eyes,' providing clear acoustic slices of the posterior segment.\n\nAt Ashvini Netralaya, our ultrasound laboratory is equipped with high-resolution 10MHz and 20MHz precision ophthalmic probes. Our skilled ultrasonologists evaluate retinal status (ruling out hidden retinal detachments), detect intraocular foreign bodies following industrial or road accidents, assess posterior vitreous detachment (PVD), diagnose choroidal tumors, and measure vitreous membrane density before planning cataract or vitrectomy surgeries.",
    "category": "Diagnostics",
    "image": "/images/WhatsApp-Image-2023-06-03-at-2.30.25-AM-2.jpeg",
    "featured": false,
    "procedureTime": "10 - 15 Minutes",
    "recoveryTime": "Immediate (Zero Downtime)",
    "anesthesia": "Gentle Topical Numbing Drops or Gel over Closed Eyelids",
    "hospitalStay": "Outpatient In-Clinic Diagnostic Test",
    "technology": "Tomey / Quantel Medical High-Resolution 10MHz/20MHz Ophthalmic Ultrasound",
    "successRate": "99.8% Diagnostic Accuracy",
    "painLevel": "Completely Painless (Gentle probe touch)",
    "symptoms": [
      "Total visual loss with dense white or black cataract where the retina cannot be seen with normal lights",
      "Sudden darkness or vision drop following ocular trauma, blunt injury, or road traffic accidents",
      "Massive diabetic bleeding (vitreous hemorrhage) obscuring the retina",
      "Suspected intraocular foreign body (metal or glass particle) following industrial work",
      "Pre-operative evaluation prior to complex cataract surgery to confirm retinal attachment",
      "Suspected intraocular tumor, mass, or optic disc drusen"
    ],
    "benefits": [
      "Penetrates through dense opacities (rock-hard cataracts, blood, corneal scars) where light cannot pass",
      "Provides crucial pre-surgical clearance confirming the retina is flat and healthy before cataract surgery",
      "Essential for emergency eye trauma management: immediately locates intraocular foreign bodies",
      "Kinetic dynamic evaluation distinguishes between flexible vitreous membranes and rigid retinal detachments",
      "Completely non-invasive, radiation-free, safe for pregnant women, infants, and elderly patients",
      "Rapid real-time imaging with instant printed report and high-resolution digital acoustic captures"
    ],
    "candidateCriteria": [
      "Patients with mature or hyper-mature cataracts undergoing pre-operative evaluation",
      "Diabetic patients with vitreous hemorrhage obscuring retinal visualization",
      "Victims of ocular trauma, perforating injuries, or suspected retained foreign bodies",
      "Patients with unexplained vision loss where ocular media is hazy or opaque",
      "Individuals requiring orbital evaluation for proptosis (bulging eyes) or posterior scleritis"
    ],
    "procedureSteps": [
      {
        "title": "Patient Comfort & Positioning",
        "desc": "You recline comfortably in an examination chair. Anesthetic drops are applied if scanning directly on the eye surface, or sterile coupling gel is placed over closed eyelids.",
        "duration": "2 mins"
      },
      {
        "title": "Acoustic Coupling Gel Application",
        "desc": "Hypoallergenic, water-soluble ultrasound gel is applied to the smooth probe tip to ensure seamless sound wave transmission without air bubbles.",
        "duration": "1 min"
      },
      {
        "title": "Multi-Vector Sectoral Acoustic Scanning",
        "desc": "The ultrasonologist gently places the probe and asks you to look in multiple directions (up, down, left, right) to image all 4 retinal quadrants.",
        "duration": "7 mins"
      },
      {
        "title": "Dynamic Kinetic Assessment",
        "desc": "You make small rapid eye movements while the probe records acoustic waveforms to differentiate between mobile vitreous strands and rigid retinal detachments.",
        "duration": "3 mins"
      },
      {
        "title": "Image Capture & Reporting",
        "desc": "High-resolution cross-sectional acoustic captures are labeled, measured, and printed alongside a comprehensive clinical report.",
        "duration": "3 mins"
      }
    ],
    "comparisonTable": {
      "title": "USG B-Scan vs Optical Diagnostics at Ashvini Netralaya",
      "description": "Understanding when ultrasound imaging is essential compared to optical imaging.",
      "items": [
        {
          "name": "USG B-Scan (Sound Waves)",
          "type": "Acoustic Ophthalmic Ultrasound",
          "visionRange": "Penetrates through opaque cataracts, dense blood & corneal scars",
          "nightGlare": "None (uses sound frequencies)",
          "spectacleFreedom": "Diagnostic evaluation only",
          "bestFor": "Dense cataracts, vitreous hemorrhage, trauma, foreign bodies",
          "tag": "Penetrates Dense Media"
        },
        {
          "name": "Optical Coherence Tomography (OCT)",
          "type": "Light Wave Micron-Level Imaging",
          "visionRange": "Ultra-high 5-micron cellular resolution, but requires CLEAR media",
          "nightGlare": "None",
          "spectacleFreedom": "Diagnostic evaluation only",
          "bestFor": "Macular holes, DME, glaucoma RNFL (when lens is clear)",
          "tag": "High Resolution Optical"
        },
        {
          "name": "Standard Fundus Photography",
          "type": "Digital Flash Photography",
          "visionRange": "Surface color view of retina, blocked by haze or blood",
          "nightGlare": "Temporary flash",
          "spectacleFreedom": "Diagnostic only",
          "bestFor": "Routine diabetic & hypertensive retinal documentation",
          "tag": "Surface Color Only"
        }
      ]
    },
    "recoveryTimeline": [
      {
        "timeframe": "Immediate Post-Scan",
        "title": "Gel Cleansing & Normal Routine",
        "description": "The ultrasound gel is gently wiped clean with a sterile tissue. You can immediately open your eyes and return to normal daily tasks.",
        "activities": [
          "Wipe eye with sterile wipe",
          "Receive printed ultrasound scan",
          "Resume all normal activities"
        ]
      },
      {
        "timeframe": "Same Day Consultation",
        "title": "Surgical Planning & Review",
        "description": "Your surgeon reviews the ultrasound scan to confirm whether cataract surgery or vitrectomy can safely proceed.",
        "activities": [
          "Discuss surgical date with surgeon",
          "Proceed with pre-op medication if cleared"
        ]
      }
    ],
    "preOpInstructions": [
      "No fasting required; eat and drink normally before your ultrasound appointment.",
      "Remove eye makeup, mascara, and contact lenses before the scan.",
      "Inform the technician if you have had recent eye trauma or an open wound on the eye.",
      "Bring all previous surgical records and referral notes.",
      "Take your routine blood pressure and diabetic medications as usual."
    ],
    "postOpCare": [
      "Gently wash any residual gel off your eyelids with clean warm water at home.",
      "Do not rub your eye if topical anesthetic drops were used during direct corneal contact.",
      "Keep your ultrasound printouts safe in your hospital file for the operating surgeon.",
      "No physical restrictions apply following an ophthalmic B-scan."
    ],
    "insuranceCoverage": "Ophthalmic ultrasound B-scans are covered under private mediclaim and health insurance policies as essential pre-operative diagnostics for cataract and retinal procedures at Ashvini Netralaya.",
    "technologyDetails": [
      {
        "name": "Tomey UD-800 High-Resolution Ultrasound",
        "maker": "Tomey Corporation (Japan)",
        "advantage": "Features multi-frequency annular array probes with wide dynamic range, delivering high-contrast acoustic slices distinguishing subtle membrane detachments."
      }
    ],
    "faqs": [
      {
        "question": "Is an ophthalmic ultrasound B-Scan painful?",
        "answer": "No, not at all. The procedure is completely painless. The probe either gently touches the closed eyelid over smooth sterile gel, or touches the eye surface after numbing drops are applied. You will feel only light, gentle pressure."
      },
      {
        "question": "Why do I need a B-scan before my cataract surgery?",
        "answer": "If your cataract is very mature or white, your eye doctor cannot see through it to inspect the retina at the back of the eye. The B-scan uses sound waves to 'see' through the cloudy cataract and verify that the retina is healthy and fully attached before surgery."
      },
      {
        "question": "Are there any side effects or radiation from an eye ultrasound?",
        "answer": "None whatsoever. Ophthalmic ultrasound uses harmless sound waves identical to routine pregnancy sonography. There is zero radiation, zero electrical shock, and it is 100% safe for all age groups."
      },
      {
        "question": "How long does a B-scan take?",
        "answer": "The entire ultrasound examination takes only about 10 to 15 minutes, and your printed results and diagnostic report are ready immediately."
      },
      {
        "question": "Can an ultrasound detect a detached retina?",
        "answer": "Yes, USG B-scan is the definitive diagnostic gold standard for detecting retinal detachments when bleeding or cataracts block normal optical view. It clearly shows the characteristic reflective membrane tethered to the optic disc."
      },
      {
        "question": "Can I wear contact lenses during a B-scan?",
        "answer": "No, you will be asked to remove your contact lenses prior to the examination so the gel can make smooth contact with the eye surface or eyelid."
      }
    ],
    "doctorInCharge": "Dr. Kaushick Biswas",
    "doctorCredentials": "MBBS, MS, DNB | Vitreo-Retinal Surgeon & Ophthalmic Ultrasonologist",
    "patientReview": {
      "quote": "I suffered an eye injury from a flying stone on a construction site. My eye was full of blood and I couldn't see anything. Dr. Kaushick performed a B-Scan at Ashvini Netralaya within 15 minutes, found my retina was safe, and guided my treatment. My vision is fully restored today.",
      "patientName": "Ratan Lal Debnath, 39",
      "location": "Teliamura, Khowai District",
      "outcome": "B-Scan Trauma Diagnosis & Successful Vitrectomy"
    }
  },
  {
    "id": "non-contact-tonometry",
    "slug": "non-contact-tonometry",
    "title": "Non-Contact Tonometry (Air-Puff Pressure Test)",
    "shortDescription": "Fast, hygienic, needle-free computerized air-puff tonometry for instant glaucoma eye pressure screening in Agartala.",
    "description": "Intraocular Pressure (IOP) is the fluid pressure maintained within the eyeball by aqueous humor. Elevated IOP is the single most critical and treatable risk factor for Glaucoma, the irreversible optic nerve disease known as the 'silent thief of sight.' Because high eye pressure develops without any sensation of pain, itching, or redness, regular objective pressure screening is critical for all individuals.\n\nAt Ashvini Netralaya, we employ advanced Non-Contact Tonometry (NCT) utilizing computerized air-puff technology. The instrument uses a gentle, micro-metered puff of ambient air to briefly flatten a microscopic area of the central cornea, optical sensors measure the applanation time, and an instant computerized reading is generated in millimeters of mercury (mmHg). Because no mechanical probe touches the cornea, the test requires zero anesthetic drops, eliminates any risk of corneal scratches or cross-infection, and takes only 3 seconds per eye.",
    "category": "Diagnostics",
    "image": "/images/WhatsApp-Image-2023-06-03-at-2.30.26-AM.jpeg",
    "featured": false,
    "procedureTime": "2 - 3 Minutes",
    "recoveryTime": "Immediate (Zero Recovery Time)",
    "anesthesia": "None Needed (100% Non-Contact)",
    "hospitalStay": "Outpatient Pre-Consultation Screening",
    "technology": "Reichert 7 Auto-Tonometer with Gentle-Pulse Alignment",
    "successRate": "100% Reliable Screening Standard",
    "painLevel": "Completely Painless (Just a gentle puff of air)",
    "symptoms": [
      "Frequent dull headaches or pressure sensation behind the brow bone",
      "Having a first-degree family member (parent, sibling) diagnosed with glaucoma",
      "Adults aged 40 and above undergoing routine preventive health examinations",
      "Patients taking long-term steroid medications (inhalers, skin creams, oral tablets)",
      "High myopia (high negative spectacle power) patients at greater risk of pressure elevation",
      "History of blunt eye injury in the past that may have injured drainage angles"
    ],
    "benefits": [
      "100% hygienic and infection-free: nothing touches your eyeball, eliminating cross-contamination",
      "Zero needles, zero numbing drops, and zero irritation",
      "Ultra-fast computerized measurement completed in under 5 seconds per eye",
      "Patented gentle-pulse technology delivers the softest, quietest puff of air possible",
      "Instant automated triple-averaging ensures maximum clinical accuracy",
      "Included as standard pre-check for every single patient visiting Ashvini Netralaya OPD"
    ],
    "candidateCriteria": [
      "Every patient visiting the OPD for an eye checkup (routine vital screening)",
      "All adults aged 40 and above (annual screening recommended)",
      "Individuals with a confirmed family history of glaucoma",
      "Patients undergoing routine monitoring of anti-glaucoma eye drop therapy",
      "Individuals on systemic corticosteroid treatments"
    ],
    "procedureSteps": [
      {
        "title": "Patient Comfort & Chin-Rest Alignment",
        "desc": "You sit comfortably in front of the computerized tonometer with your forehead resting on the soft headrest.",
        "duration": "30 secs"
      },
      {
        "title": "Visual Fixation Target",
        "desc": "You look at a tiny glowing red or green fixation light inside the viewing lens.",
        "duration": "15 secs"
      },
      {
        "title": "Automatic Eye Alignment & Air-Puff Delivery",
        "desc": "The smart sensor automatically centers on the corneal apex and releases a brief, gentle puff of air.",
        "duration": "2 secs per eye"
      },
      {
        "title": "Instant Computerized Calculation",
        "desc": "Microprocessors calculate the exact intraocular pressure (IOP) in mmHg, averaging multiple readings for precision.",
        "duration": "10 secs"
      },
      {
        "title": "Review by Ophthalmologist",
        "desc": "Your eye doctor reviews your pressure values alongside your optic nerve appearance; if pressure is elevated, pachymetry or Goldmann applanation is performed.",
        "duration": "5 mins"
      }
    ],
    "comparisonTable": {
      "title": "Eye Pressure Measurement Modalities at Ashvini Netralaya",
      "description": "How Non-Contact Tonometry compares with other clinical pressure measurement tools.",
      "items": [
        {
          "name": "Non-Contact Tonometry (Air-Puff)",
          "type": "Computerized Optical Air-Puff",
          "visionRange": "Instant screening of IOP (mmHg)",
          "nightGlare": "None",
          "spectacleFreedom": "Non-invasive screening test",
          "bestFor": "Fast, hygienic, drop-free screening for every OPD patient",
          "tag": "Fastest Screening"
        },
        {
          "name": "Goldmann Applanation Tonometry (GAT)",
          "type": "Direct Slit-Lamp Contact Prism",
          "visionRange": "International research gold standard",
          "nightGlare": "None (requires fluorescein & numbing drops)",
          "spectacleFreedom": "Confirmatory clinical tool",
          "bestFor": "Glaucoma suspects, confirming abnormal air-puff readings",
          "tag": "Clinical Gold Standard"
        },
        {
          "name": "iCare Rebound Tonometry",
          "type": "Micro-Probe Rebound Sensor",
          "visionRange": "Handheld contact measurement",
          "nightGlare": "None (no drops needed)",
          "spectacleFreedom": "Portable measurement",
          "bestFor": "Children, bedridden patients, wheelchair users",
          "tag": "Pediatric Friendly"
        }
      ]
    },
    "recoveryTimeline": [
      {
        "timeframe": "Immediate Post-Test",
        "title": "Immediate Resumption",
        "description": "There is zero lingering sensation. You can immediately blink, read, drive, or proceed to your doctor consultation.",
        "activities": [
          "Blink naturally",
          "Proceed to doctor consultation",
          "No restrictions"
        ]
      }
    ],
    "preOpInstructions": [
      "No special preparation or fasting is required.",
      "Loosen tight neckties or tight shirt collars before the test, as neck constriction can falsely raise eye pressure.",
      "Keep both eyes wide open and breathe normally; do not hold your breath or squeeze your eyelids.",
      "If you take anti-glaucoma eye drops, take them on your normal schedule before coming to the hospital.",
      "Remove eyeglasses before positioning your chin on the tonometer."
    ],
    "postOpCare": [
      "There are zero physical restrictions or precautions after an air-puff test.",
      "Discuss your numerical pressure reading with your ophthalmologist during your consultation.",
      "If your pressure is higher than 21 mmHg, your doctor will perform a detailed optic nerve check and pachymetry.",
      "Repeat the test at your next routine checkup."
    ],
    "insuranceCoverage": "Non-contact tonometry is routinely included as part of the standard OPD consultation at Ashvini Netralaya, accessible at nominal rates and subsidized at ₹50 under Sarva Drishti Yojana.",
    "technologyDetails": [
      {
        "name": "Reichert 7 Auto-Tonometer",
        "maker": "Reichert Technologies (AMETEK, USA)",
        "advantage": "Features multi-directional motorized alignment, comfortable quiet puff technology, and automatic calibration meeting strict hospital clinical standards."
      }
    ],
    "faqs": [
      {
        "question": "Does the air-puff test hurt?",
        "answer": "No, not at all! It feels like a quick, gentle breeze or puff of air against your eye. You might reflexively blink, but it causes no pain, stinging, or discomfort."
      },
      {
        "question": "What is a normal eye pressure reading?",
        "answer": "Normal intraocular pressure generally ranges between 10 mmHg and 21 mmHg. Readings above 21 mmHg warrant further testing to rule out ocular hypertension or glaucoma."
      },
      {
        "question": "Why does the technician measure my eye pressure at every single visit?",
        "answer": "Because glaucoma causes NO symptoms until advanced irreversible vision loss has occurred. Measuring eye pressure at every visit is the simplest, most effective way to catch pressure changes early."
      },
      {
        "question": "Can thick or thin corneas affect my air-puff pressure reading?",
        "answer": "Yes! Corneas that are thicker than average can cause falsely high pressure readings, while thin corneas can cause falsely low readings. When pressure is abnormal, our doctors perform Corneal Pachymetry to measure your exact corneal thickness and calculate your true corrected IOP."
      },
      {
        "question": "Do I need eye drops for the air-puff test?",
        "answer": "No. Because the Reichert instrument never touches your eye directly, no anesthetic numbing drops or yellow dye drops are needed."
      },
      {
        "question": "Can high eye pressure cause headaches?",
        "answer": "Chronic open-angle glaucoma rarely causes headaches. However, sudden acute pressure spikes (angle-closure glaucoma) can cause severe brow-aches, temple pain, nausea, and halos around lights."
      }
    ],
    "doctorInCharge": "Dr. Paruldeep Chakma",
    "doctorCredentials": "MBBS, MS (Ophthalmology) | Consultant Glaucoma Specialist",
    "patientReview": {
      "quote": "At other clinics I hated the eye pressure test because of cold drops and poking instruments. At Ashvini Netralaya, their computerized air-puff test was done in literally 5 seconds without touching my eye at all. Clean, modern, and completely painless.",
      "patientName": "Sujit Majumder, 50",
      "location": "Melarmath, Agartala",
      "outcome": "Routine Annual Screening (Normal IOP 14 mmHg)"
    }
  },
  {
    "id": "dry-eye-evaluation",
    "slug": "dry-eye-evaluation",
    "title": "Dry Eye Clinic & Meibomian Gland Evaluation",
    "shortDescription": "Advanced ocular surface diagnostic battery, Tear Film Break-Up Time (TBUT), Meibomian gland imaging & targeted dry eye therapy in Agartala.",
    "description": "Dry Eye Disease (DED) is one of the most common and under-diagnosed ophthalmic conditions affecting modern society, driven by prolonged computer and smartphone screen time, air-conditioned workspaces, contact lens overuse, aging, and systemic autoimmune conditions. Left untreated, chronic dry eye causes persistent ocular irritation, fluctuating blurred vision, corneal micro-erosions, and heightened vulnerability to infections.\n\nAt Ashvini Netralaya, our dedicated Ocular Surface & Dry Eye Clinic offers comprehensive, scientifically validated diagnostics to identify the root cause of your dry eye—distinguishing between Aqueous-Deficient Dry Eye and Evaporative Dry Eye caused by Meibomian Gland Dysfunction (MGD). Utilizing Tear Film Break-Up Time (TBUT), cobalt blue fluorescein corneal staining, Schirmer's quantitative tear production testing, and meibomian gland expressibility, our specialists customize multi-modal treatments ranging from preservative-free lubricating drops and warm thermal therapy to punctal occlusion plugs.",
    "category": "Speciality Clinic",
    "image": "/images/WhatsApp-Image-2023-06-03-at-2.30.26-AM-1.jpeg",
    "featured": false,
    "procedureTime": "15 - 20 Minutes (Diagnostic Assessment)",
    "recoveryTime": "Immediate (Zero Downtime)",
    "anesthesia": "Gentle Diagnostic Drops (If Schirmer's Test Needed)",
    "hospitalStay": "Outpatient Speciality Clinic",
    "technology": "Slit-Lamp Cobalt Blue Fluorescence, Diagnostic Fluorescein Strips, Schirmer Strips, Thermal Gland Expression",
    "successRate": "95% Symptom Relief Rate",
    "painLevel": "Completely Painless & Relaxing",
    "symptoms": [
      "Persistent gritty, burning, stinging, or scratchy sensation in the eyes",
      "Paradoxical excessive tearing or watery eyes when exposed to wind, AC, or screens",
      "Fluctuating vision that temporarily clears up after blinking repeatedly",
      "Redness, heavy eyelids, or eye fatigue especially towards the evening",
      "Stringy mucus discharge around the eyelids upon waking up",
      "Inability to comfortably wear contact lenses for more than a few hours"
    ],
    "benefits": [
      "Systematic clinical testing identifying the exact cause: evaporative vs aqueous-deficient dry eye",
      "High-precision Tear Film Break-Up Time (TBUT) measuring tear lipid stability",
      "Quantitative Schirmer testing measuring natural lacrimal tear production rate",
      "Evaluation of Meibomian Gland Dysfunction (MGD) to restore natural tear lipid barrier",
      "Preservative-free artificial tear regimens, anti-inflammatory drops (cyclosporine), and lid scrubs",
      "Collagen punctal plugs providing long-term moisture retention for severe dry eye patients"
    ],
    "candidateCriteria": [
      "Software engineers, corporate professionals, and students with high daily screen use (> 4 hrs/day)",
      "Post-menopausal women experiencing hormonal dry eye changes",
      "Contact lens wearers suffering from lens discomfort, dryness, or end-of-day irritation",
      "Patients planning or recovering from cataract or LASIK refractive surgeries",
      "Patients with systemic autoimmune conditions (Sjögren’s syndrome, Rheumatoid Arthritis, Thyroid disease)"
    ],
    "procedureSteps": [
      {
        "title": "Ocular Surface Disease Index (OSDI) Questionnaire",
        "desc": "A brief validated clinical questionnaire evaluates your specific environmental symptoms and visual impairment triggers.",
        "duration": "3 mins"
      },
      {
        "title": "Tear Film Break-Up Time (TBUT)",
        "desc": "A micro-drop of fluorescein dye is applied. Under cobalt blue slit-lamp illumination, the doctor times how many seconds your tear film remains intact before dry spots form.",
        "duration": "3 mins"
      },
      {
        "title": "Corneal & Conjunctival Staining",
        "desc": "Evaluation of surface epithelial micro-damage (superficial punctate keratitis) using fluorescein and lissamine green vital dyes.",
        "duration": "3 mins"
      },
      {
        "title": "Schirmer's Tear Production Test",
        "desc": "Calibrated sterile paper strips are gently placed in the lower eyelid for 5 minutes to measure basal and reflex aqueous tear output.",
        "duration": "5 mins"
      },
      {
        "title": "Meibomian Gland Expression & Customized Treatment Plan",
        "desc": "Gentle diagnostic evaluation of eyelid oil glands, followed by a personalized medical regimen (drops, warm compresses, lid hygiene).",
        "duration": "5 mins"
      }
    ],
    "comparisonTable": {
      "title": "Dry Eye Treatment Tiering at Ashvini Netralaya",
      "description": "Our stepped care protocol ensures personalized relief from mild digital strain to chronic severe ocular surface disease.",
      "items": [
        {
          "name": "Preservative-Free Lubricants",
          "type": "Aqueous Supplementation Drops",
          "visionRange": "Restores clear, stable vision between blinks",
          "nightGlare": "None",
          "spectacleFreedom": "Can be used alongside glasses & contact lenses",
          "bestFor": "Mild to moderate digital eye strain, computer vision syndrome",
          "tag": "Step 1 Foundation"
        },
        {
          "name": "Lid Hygiene & Thermal Compress",
          "type": "Meibomian Gland Rehabilitation",
          "visionRange": "Restores protective oily tear layer to stop evaporation",
          "nightGlare": "None",
          "spectacleFreedom": "Daily home self-care routine",
          "bestFor": "Evaporative dry eye, blepharitis, meibomian gland dysfunction",
          "tag": "Essential for MGD"
        },
        {
          "name": "Cyclosporine / Lifitegrast Drops",
          "type": "Targeted Anti-Inflammatory Therapy",
          "visionRange": "Reduces chronic ocular surface inflammation",
          "nightGlare": "None",
          "spectacleFreedom": "Reactivates natural tear production",
          "bestFor": "Moderate to severe chronic dry eye, autoimmune dry eye",
          "tag": "Medical Therapy"
        },
        {
          "name": "Punctal Occlusion Plugs",
          "type": "Minimally Invasive Outpatient Procedure",
          "visionRange": "Conserves natural and artificial tears on the eye surface",
          "nightGlare": "None",
          "spectacleFreedom": "Immediate relief without frequent drop instillation",
          "bestFor": "Severe aqueous deficiency, Sjögren’s syndrome, non-responders",
          "tag": "Advanced Relief"
        }
      ]
    },
    "recoveryTimeline": [
      {
        "timeframe": "Days 1 to 7",
        "title": "Initial Relief & Lubrication",
        "description": "Preservative-free eye drops and warm eyelid compresses provide immediate soothing relief from gritty irritation and burning.",
        "activities": [
          "Instill drops 4 times daily",
          "Apply warm compress for 5-10 mins morning & night",
          "Practice 20-20-20 rule during screen use"
        ]
      },
      {
        "timeframe": "Weeks 3 to 6",
        "title": "Tear Film Stabilization",
        "description": "Meibomian oil quality improves, significantly reducing tear evaporation. Fluctuating vision stabilizes.",
        "activities": [
          "Sustained screen comfort",
          "Continue lid hygiene routine",
          "Attend follow-up TBUT review"
        ]
      }
    ],
    "preOpInstructions": [
      "Do NOT wear contact lenses on the day of your dry eye evaluation.",
      "Avoid instilling any artificial tear eye drops for at least 2 hours before your appointment.",
      "Avoid wearing eye makeup, mascara, or eye creams on the day of the test.",
      "Make a list of medications you currently take (anti-histamines, BP tablets, anti-depressants can worsen dry eyes).",
      "Bring along any eye drops you have previously used."
    ],
    "postOpCare": [
      "Follow the prescribed drop schedule consistently; chronic dry eye requires sustained therapy.",
      "Position your computer monitor slightly below eye level to reduce exposed eye surface area.",
      "Follow the 20-20-20 rule: every 20 minutes, look at an object 20 feet away for 20 seconds.",
      "Use a room humidifier if you spend long hours in air-conditioned environments.",
      "Wash your eyelids gently with warm water and recommended lid cleansers."
    ],
    "insuranceCoverage": "Dry eye evaluations and minor procedures like punctal plug insertions are covered under relevant OPD and day-care healthcare benefits at Ashvini Netralaya. Subsidized consultations available under Sarva Drishti Yojana.",
    "technologyDetails": [
      {
        "name": "Haag-Streit Slit-Lamp Surface Diagnostics",
        "maker": "Haag-Streit (Switzerland)",
        "advantage": "High-contrast cobalt blue illumination and Wratten yellow barrier filter visualization enabling precise measurement of tear breakup down to the second."
      }
    ],
    "faqs": [
      {
        "question": "Why do my eyes water constantly if I have 'dry eyes'?",
        "answer": "This is a classic symptom called 'reflex tearing.' When your eye's surface becomes irritated and dry due to poor oil quality, your brain sends an emergency reflex signal to flood the eye with watery tears. However, these watery tears lack the protective oil layer and evaporate quickly, leaving the eye dry again."
      },
      {
        "question": "Can staring at computers and phones cause permanent dry eye?",
        "answer": "When looking at screens, our natural blink rate drops by over 60% (from 15-20 blinks per minute down to just 5-7 blinks). Incomplete blinking causes tear film evaporation and clogs the eyelid oil glands. Over time, this leads to chronic Meibomian Gland Dysfunction."
      },
      {
        "question": "Why should I avoid regular over-the-counter red-eye drops?",
        "answer": "Many commercial over-the-counter 'redness-reliever' drops contain vasoconstrictors (like tetrahydrozoline) that temporarily shrink blood vessels but cause severe rebound redness and worsen dryness. Always use preservative-free lubricating drops prescribed by an eye specialist."
      },
      {
        "question": "What are punctal plugs and how do they work?",
        "answer": "Punctal plugs are microscopic, biocompatible silicone or collagen plugs inserted painlessly into the tiny tear drainage holes (puncta) in the corners of your eyelids. They act like putting a stopper in a sink, keeping your natural tears on your eye surface longer."
      },
      {
        "question": "How long does it take for dry eye treatment to show results?",
        "answer": "Lubricating drops provide immediate temporary soothing within minutes. However, rehabilitating the Meibomian glands and reversing chronic ocular surface inflammation with targeted treatments typically takes 3 to 6 weeks of consistent therapy."
      },
      {
        "question": "Does diet impact dry eyes?",
        "answer": "Yes! Diets rich in Omega-3 fatty acids (flaxseeds, walnuts, fatty fish) significantly improve the chemical composition and fluidity of your eyelid meibomian oils, helping to prevent tear evaporation naturally."
      }
    ],
    "doctorInCharge": "Dr. Anurag Majumdar",
    "doctorCredentials": "MBBS, MS (Ophthalmology) | Cornea & Anterior Segment Specialist",
    "patientReview": {
      "quote": "Working 9 hours daily on computers as a bank manager, my eyes burned constantly and felt full of sand. Over-the-counter drops did nothing. Dr. Anurag diagnosed Meibomian Gland Dysfunction at Ashvini Netralaya and started targeted therapy. Within 3 weeks my burning was gone. Life-changing!",
      "patientName": "Sumita Chakraborty, 42",
      "location": "Akhaura Road, Agartala",
      "outcome": "Dry Eye Diagnostic Workup & MGD Therapy (Complete Symptom Relief)"
    }
  },
  {
    "id": "fundus-photography",
    "slug": "fundus-photography",
    "title": "Digital Fundus Photography & Retinal Imaging",
    "shortDescription": "High-resolution 45-degree digital color fundus photography for diabetic retinopathy, hypertensive changes & optic nerve documentation in Agartala.",
    "description": "Digital Fundus Photography is a sophisticated, non-invasive imaging modality that captures high-magnification, true-color digital photographs of the interior back wall of the eye—including the retina, macula, fovea, optic nerve head, and retinal blood vessels. It provides an objective, permanent photographic baseline that allows ophthalmologists to track microscopic disease changes over months and years with unmatched precision.\n\nAt Ashvini Netralaya, we utilize state-of-the-art Topcon digital fundus camera systems. Our high-resolution digital imaging is essential for staging diabetic retinopathy (detecting microaneurysms, dot hemorrhages, and hard exudates), documenting hypertensive retinopathy vascular changes, monitoring optic disc cupping in glaucoma, and archiving retinal lesions (nevi, choroidal scars, lattice degenerations). Patients receive high-resolution printed photographic records and digital archives.",
    "category": "Diagnostics",
    "image": "/images/WhatsApp-Image-2023-06-03-at-2.30.27-AM.jpeg",
    "featured": false,
    "procedureTime": "5 - 10 Minutes",
    "recoveryTime": "Immediate (Zero Downtime)",
    "anesthesia": "None Needed (100% Non-Contact)",
    "hospitalStay": "Outpatient Imaging Suite",
    "technology": "Topcon TRC Non-Mydriatic Digital Retinal Camera System",
    "successRate": "100% High-Definition Photographic Documentation",
    "painLevel": "Completely Painless (Just a quick flash of light)",
    "symptoms": [
      "Diabetic patients requiring baseline and annual diabetic retinopathy photo documentation",
      "Hypertensive patients with suspected vascular crossing changes or retinal hemorrhages",
      "Patients with suspected optic disc swelling (papilledema) or glaucoma disc cupping",
      "Discovery of an incidental retinal freckle, nevus, or lesion that requires size tracking over time",
      "History of sudden vision changes, floaters, or central blind spots",
      "Requirement of visual disability documentation or pre-employment fundus certification"
    ],
    "benefits": [
      "Creates an exact, permanent, color digital record of your retina for side-by-side annual comparison",
      "Detects subclinical microaneurysms and diabetic bleeding before you experience vision symptoms",
      "Non-contact and painless: captures high-definition retinal photos with a gentle flash of light",
      "Can frequently be captured without dilating eye drops using advanced non-mydriatic camera optics",
      "Provides patients with a clear, color photo of their own retina to understand their disease status",
      "Instant digital archiving allowing telemedicine second opinions and longitudinal tracking"
    ],
    "candidateCriteria": [
      "All patients diagnosed with Type 1 or Type 2 Diabetes Mellitus (annual photographic screening)",
      "Patients with systemic Hypertension, Cardiovascular Disease, or high cholesterol",
      "Glaucoma patients and glaucoma suspects requiring optic disc margin documentation",
      "Patients with pigmented choroidal nevi or suspicious retinal lesions requiring serial monitoring",
      "Individuals undergoing pre-employment medical examinations requiring retinal health proof"
    ],
    "procedureSteps": [
      {
        "title": "Patient Comfort & Positioning",
        "desc": "You sit comfortably in a dimly lit imaging room with your chin rested on the padded support and forehead against the bar.",
        "duration": "1 min"
      },
      {
        "title": "Fixation Alignment",
        "desc": "You look at a glowing internal green star fixation target inside the camera lens.",
        "duration": "30 secs"
      },
      {
        "title": "High-Definition Digital Capture",
        "desc": "The camera sensor automatically focuses on your retina. A brief, gentle camera flash captures a 45-degree high-definition color photograph.",
        "duration": "2 secs per eye"
      },
      {
        "title": "Image Quality Verification",
        "desc": "The imaging specialist reviews clarity, illumination, and optic nerve centering on a high-resolution medical monitor.",
        "duration": "1 min"
      },
      {
        "title": "Archiving & Color Printout",
        "desc": "The digital photographs are archived in your electronic medical record and a color diagnostic report is printed for your doctor's consultation.",
        "duration": "2 mins"
      }
    ],
    "comparisonTable": {
      "title": "Fundus Imaging Modalities at Ashvini Netralaya",
      "description": "Comparing photographic documentation with advanced optical diagnostics.",
      "items": [
        {
          "name": "Digital Color Fundus Photography",
          "type": "High-Resolution True-Color Photography",
          "visionRange": "Full 45-degree surface photographic color capture",
          "nightGlare": "Brief camera flash only",
          "spectacleFreedom": "Non-invasive diagnostic documentation",
          "bestFor": "Diabetic screening, optic nerve baseline, pigmented lesion tracking",
          "tag": "Visual Record Standard"
        },
        {
          "name": "Zeiss Cirrus HD-OCT",
          "type": "Cross-Sectional Infrared Laser Scanning",
          "visionRange": "Cross-sectional tissue depth down to 5 microns (cross-cut)",
          "nightGlare": "None (uses infrared light)",
          "spectacleFreedom": "Non-invasive diagnostic evaluation",
          "bestFor": "Macular edema, retinal fluid pockets, macular holes, glaucoma RNFL",
          "tag": "Cross-Sectional Depth"
        },
        {
          "name": "Fundus Fluorescein Angiography (FFA)",
          "type": "Intravenous Contrast Angiogram",
          "visionRange": "Dynamic vascular leakage & blood flow circulation",
          "nightGlare": "Mild flash dazzle",
          "spectacleFreedom": "Diagnostic vascular procedure",
          "bestFor": "Ischemic diabetic retinopathy, retinal vein occlusion, CNVM",
          "tag": "Vascular Leakage Mapping"
        }
      ]
    },
    "recoveryTimeline": [
      {
        "timeframe": "Immediate Post-Photo",
        "title": "Instant Normalization",
        "description": "You may see a brief after-image from the camera flash for 1-2 minutes. Your vision returns to normal immediately.",
        "activities": [
          "Blink normally",
          "Receive printed color fundus report",
          "Resume all normal activities"
        ]
      }
    ],
    "preOpInstructions": [
      "No fasting or dietary restrictions; take all routine medications as scheduled.",
      "Remove eyeglasses before resting your chin on the camera rest.",
      "If pupil dilation is requested by your doctor, plan for 45 minutes of total hospital time.",
      "Keep both eyes wide open and try not to blink when the technician counts down to the camera flash.",
      "Bring your previous retinal photographs or diabetic reports for comparison."
    ],
    "postOpCare": [
      "No physical restrictions apply after fundus photography.",
      "Store your printed color retinal photographs carefully in your health records folder.",
      "Review the photos with your retina specialist or general physician.",
      "Ensure an annual repeat photograph if you have diabetes or hypertension."
    ],
    "insuranceCoverage": "Digital fundus photography is covered under healthcare insurance and corporate mediclaim policies when performed as part of authorized diabetic or ophthalmic diagnostic evaluations at Ashvini Netralaya.",
    "technologyDetails": [
      {
        "name": "Topcon TRC Digital Retinal Camera",
        "maker": "Topcon Corporation (Japan)",
        "advantage": "Low-flash technology with high-sensitivity CCD sensor capturing brilliant, true-to-life 45-degree retinal color images even through small pupils."
      }
    ],
    "faqs": [
      {
        "question": "Does digital fundus photography hurt?",
        "answer": "No, not at all. Nothing touches your eye. It is exactly like having your picture taken with a regular digital camera, with a quick, painless flash of light."
      },
      {
        "question": "Do my eyes need to be dilated for fundus photography?",
        "answer": "In many patients with natural pupils of adequate size, our modern Topcon camera can capture crisp photographs without dilating drops. However, if your doctor needs an ultra-wide view or your pupils are very small, mild dilating drops may be used."
      },
      {
        "question": "Why does a diabetic patient need annual fundus photography?",
        "answer": "Diabetic retinopathy starts with tiny microscopic bleeding and leakage that causes zero pain and zero vision loss in early stages. Taking a photo every year allows doctors to compare images side-by-side and catch subtle changes years before they damage your sight."
      },
      {
        "question": "Can fundus photography detect high blood pressure?",
        "answer": "Yes! High blood pressure causes visible narrowing, silver-wiring, and pinching of the retinal arterioles (arteriovenous nicking). Your ophthalmologist can often tell if your blood pressure has been uncontrolled based on your retinal photos."
      },
      {
        "question": "Can I drive home after having a fundus photo taken?",
        "answer": "If your eyes were NOT dilated, you can drive home immediately. If dilating drops were used, we recommend having someone accompany you or taking public transport, as dilation temporarily blurs near vision for 2-3 hours."
      },
      {
        "question": "How long does the fundus photo appointment take?",
        "answer": "The actual photography takes only about 5 to 10 minutes. If dilation drops are required, the total visit time is approximately 30 to 45 minutes."
      }
    ],
    "doctorInCharge": "Dr. Kaushick Biswas",
    "doctorCredentials": "MBBS, MS, DNB | Senior Vitreo-Retinal Consultant",
    "patientReview": {
      "quote": "I have been diabetic for 10 years. Dr. Kaushick showed me my fundus photo on the screen and pointed out tiny leaking microaneurysms that I had no idea existed. Seeing the actual photo of my eye made me take my diabetes control seriously. Excellent diagnostic facility.",
      "patientName": "Manoranjan Paul, 56",
      "location": "Amtali, Agartala",
      "outcome": "Annual Diabetic Retinopathy Documentation & Glycemic Control"
    }
  },
  {
    "id": "anterior-segment-photography",
    "slug": "anterior-segment-photography",
    "title": "Anterior Segment Photography & Slit-Lamp Imaging",
    "shortDescription": "Ultra-high magnification digital slit-lamp biomicroscopic imaging of cornea, iris, lens, pterygium & corneal ulcers in Agartala.",
    "description": "Anterior Segment Photography is a specialized high-magnification digital imaging technique that documents the front structures of the eye—including the eyelids, eyelashes, conjunctiva, cornea, anterior chamber, iris, pupil, and crystalline lens. Utilizing high-resolution digital slit lamps equipped with optical beam splitters, multi-position background illumination, and digital SLR sensors, our specialists document micro-structural pathology with surgical clarity.\n\nAt Ashvini Netralaya, anterior segment imaging plays a vital clinical role in diagnosing and monitoring corneal ulcers, infectious keratitis, corneal dystrophies, pterygium progression, iris lesions, post-corneal transplant (keratoplasty) graft clarity, and surgical intraocular lens (IOL) centration. By creating high-magnification photographic records, our anterior segment team objectively evaluates healing rates and treatment efficacy at every follow-up visit.",
    "category": "Diagnostics",
    "image": "/images/WhatsApp-Image-2023-06-03-at-2.30.27-AM-1.jpeg",
    "featured": false,
    "procedureTime": "5 - 10 Minutes",
    "recoveryTime": "Immediate (Zero Downtime)",
    "anesthesia": "None Required (Non-Invasive Optical Imaging)",
    "hospitalStay": "Outpatient Slit-Lamp Photography Suite",
    "technology": "Digital Slit-Lamp Biomicroscopy Imaging System with HD Optical Beam Splitter",
    "successRate": "100% Photographic Diagnostic Documentation",
    "painLevel": "Completely Painless (Comfortable slit-lamp exam)",
    "symptoms": [
      "Painful red eye with corneal whitish spot or ulcer (microbial keratitis)",
      "Pterygium growth (fleshy pink tissue) advancing across the clear cornea toward the pupil",
      "Foreign body sensation, chemical burn, or corneal scratch/abrasion",
      "Corneal degenerations, dystrophies, or keratoconus requiring curvature and thickness monitoring",
      "Post-cataract or post-corneal transplant patient monitoring IOL position or graft clarity",
      "Iris freckle, pigmented lesion, or structural pupillary asymmetry"
    ],
    "benefits": [
      "Ultra-high magnification photographic documentation up to 40x optical zoom",
      "Measures exact epithelial defect size and corneal ulcer depth down to fractional millimeters",
      "Tracks pterygium growth over time to determine the precise timing for surgical excision",
      "Essential for corneal ulcer management: verifies whether antibiotic drops are shrinking the infection",
      "Non-contact and painless: performed in a standard comfortable slit-lamp exam chair",
      "Provides clear visual comparisons so patients can see their own corneal healing progress"
    ],
    "candidateCriteria": [
      "Patients diagnosed with bacterial, fungal, or viral corneal ulcers (keratitis)",
      "Individuals with pterygium or pinguecula being monitored for surgical excision",
      "Patients recovering from corneal transplant surgeries (PKP, DALK, DSAEK)",
      "Contact lens wearers experiencing corneal hypoxia, neovascularization, or infiltrates",
      "Patients with iris nodules, cysts, or anterior segment tumors requiring serial growth tracking"
    ],
    "procedureSteps": [
      {
        "title": "Patient Comfort & Chin-Rest Positioning",
        "desc": "You sit comfortably at the digital slit-lamp biomicroscope with your chin on the chin-rest and forehead against the headband.",
        "duration": "1 min"
      },
      {
        "title": "Illumination Beam & Magnification Adjustment",
        "desc": "The specialist adjusts the slit beam angle, width, and optical magnification (10x, 16x, 25x, or 40x) to highlight corneal pathology.",
        "duration": "2 mins"
      },
      {
        "title": "Fluorescein Staining (If Evaluating Corneal Epithelium)",
        "desc": "A sterile fluorescein strip touches tears gently to illuminate surface corneal epithelial defects under cobalt blue filter light.",
        "duration": "1 min"
      },
      {
        "title": "High-Definition Digital Capture",
        "desc": "The camera captures multiple high-resolution photos using diffuse, focal slit, and retro-illumination lighting techniques.",
        "duration": "2 mins"
      },
      {
        "title": "Image Measurement & Reporting",
        "desc": "Software measures exact ulcer dimensions (length × width in mm) and archives the image directly into your electronic medical file.",
        "duration": "2 mins"
      }
    ],
    "comparisonTable": {
      "title": "Anterior Segment Diagnostic Imaging at Ashvini Netralaya",
      "description": "Comparing digital slit-lamp photography with advanced corneal diagnostics.",
      "items": [
        {
          "name": "Digital Slit-Lamp Photography",
          "type": "High-Magnification Digital Biomicroscopy",
          "visionRange": "Ultra-high resolution surface true-color documentation",
          "nightGlare": "None (gentle slit lamp illumination)",
          "spectacleFreedom": "Non-invasive diagnostic documentation",
          "bestFor": "Corneal ulcers, pterygium, corneal graft tracking, iris lesions",
          "tag": "Surface Structural Gold Standard"
        },
        {
          "name": "Anterior Segment OCT (AS-OCT)",
          "type": "Cross-Sectional Infrared Laser Tomography",
          "visionRange": "Micron-level cross-sectional corneal thickness & angle depth",
          "nightGlare": "None",
          "spectacleFreedom": "Non-invasive diagnostic scan",
          "bestFor": "Corneal pachymetry mapping, keratoconus, narrow angle depth",
          "tag": "Cross-Sectional Depth"
        },
        {
          "name": "Specular Endothelial Microscopy",
          "type": "Endothelial Cell Density Imaging",
          "visionRange": "Cellular hexametric corneal endothelial cell count",
          "nightGlare": "None",
          "spectacleFreedom": "Non-invasive diagnostic scan",
          "bestFor": "Pre-cataract corneal safety, Fuchs' endothelial dystrophy",
          "tag": "Cellular Level"
        }
      ]
    },
    "recoveryTimeline": [
      {
        "timeframe": "Immediate Post-Photo",
        "title": "Immediate Resumption",
        "description": "Zero downtime. If fluorescein dye was used, tears may have a slight yellow tinge for 10-15 minutes, which clears naturally.",
        "activities": [
          "Blink normally",
          "Consult with cornea specialist",
          "Resume all normal activities"
        ]
      },
      {
        "timeframe": "Follow-Up Days 3 to 7",
        "title": "Healing Comparison",
        "description": "Repeat slit-lamp photos are taken to verify reduction in corneal ulcer dimensions and confirming effective antibiotic response.",
        "activities": [
          "Attend follow-up photography review"
        ]
      }
    ],
    "preOpInstructions": [
      "No fasting required; eat and drink normally before your appointment.",
      "Do NOT wear contact lenses if you have eye pain, redness, or a suspected corneal ulcer.",
      "Remove eyelid makeup and mascara before the examination.",
      "Bring all current eye drops and prescriptions you are using.",
      "Keep both eyes wide open and look steadily in the direction indicated by the specialist."
    ],
    "postOpCare": [
      "No physical restrictions apply after slit-lamp photography.",
      "Follow your cornea specialist's exact drop schedule if treating a corneal ulcer or infection.",
      "Never rub an infected or scratched eye.",
      "Attend scheduled follow-up visits so your healing progress can be re-photographed."
    ],
    "insuranceCoverage": "Anterior segment photography is covered under private health insurance and mediclaim policies when performed as part of authorized corneal ulcer or surgical diagnostic workups at Ashvini Netralaya.",
    "technologyDetails": [
      {
        "name": "Carl Zeiss / Topcon Digital Slit Lamp System",
        "maker": "Carl Zeiss Meditec / Topcon",
        "advantage": "Apochromatic optics with high-definition digital sensor capturing razor-sharp focal slit sections, diffuse broad beam, and retro-illumination captures down to the micron."
      }
    ],
    "faqs": [
      {
        "question": "Does anterior segment photography hurt?",
        "answer": "No, not at all! It is completely non-invasive and painless. You simply sit at the slit-lamp microscope just like a routine eye exam while the doctor takes photos with a digital camera attached to the optics."
      },
      {
        "question": "Why do I need a photograph of my corneal ulcer?",
        "answer": "Corneal ulcers can change rapidly within 24 to 48 hours. Having an exact, calibrated digital photograph with millimeter measurements allows your cornea specialist to verify objectively whether your ulcer is shrinking and healing in response to antibiotic drops."
      },
      {
        "question": "Can anterior segment photography detect pterygium growth?",
        "answer": "Yes! Serial anterior segment photographs taken 6 months apart show exactly whether a pterygium is advancing toward the center of your cornea, helping determine whether it needs surgical removal before it impairs your vision."
      },
      {
        "question": "Do my pupils need to be dilated for this test?",
        "answer": "No. In fact, most anterior segment photography of the cornea, conjunctiva, and iris is performed with natural, undilated pupils."
      },
      {
        "question": "What is the yellow dye placed in my eye during the test?",
        "answer": "It is sterile Fluorescein sodium dye. It is completely safe, does not sting, and glows bright green under blue light, highlighting any microscopic scratches, abrasions, or ulcers on your corneal surface."
      },
      {
        "question": "How long does the photography session take?",
        "answer": "The photography session takes only about 5 to 10 minutes, and the high-resolution images are immediately visible on screen for discussion with your doctor."
      }
    ],
    "doctorInCharge": "Dr. John Sarkar",
    "doctorCredentials": "MBBS, MS (Ophthalmology) | Cornea & Anterior Segment Specialist",
    "patientReview": {
      "quote": "I developed a painful corneal ulcer after getting dust in my eye while farming. Dr. John Sarkar photographed my ulcer on day one and again on day 4. Seeing the ulcer shrink from 4mm down to nothing on the digital screen gave me immense confidence. My cornea healed completely without a scar.",
      "patientName": "Babulal Tripura, 48",
      "location": "Santirbazar, South Tripura",
      "outcome": "Corneal Ulcer Resolution with Complete Visual Recovery (6/6)"
    }
  },
  {
    "id": "contact-lens-clinic",
    "slug": "contact-lens-clinic",
    "title": "Specialty Contact Lens & Cornea Clinic",
    "shortDescription": "Specialist medical contact lens fittings: Rose K2 for keratoconus, mini-sclerals, soft torics, multifocals & rigid gas permeable (RGP) lenses in Agartala.",
    "description": "The Specialty Contact Lens & Cornea Clinic at Ashvini Netralaya is Tripura’s dedicated center for complex medical contact lens fittings and custom refractive solutions. While standard soft lenses suffice for simple spherical spectacle errors, complex ocular surface disorders—such as Keratoconus, irregular corneal astigmatism, post-corneal trauma scars, post-refractive surgery ectasia, and severe dry eye disease—demand custom-engineered specialty contact lenses.\n\nOur certified contact lens specialists utilize corneal topography and auto-keratometry to customize high-precision lenses, including Rose K2 lenses for keratoconus, Large-Diameter Mini-Scleral lenses (which vault entirely over irregular corneas and bathe the ocular surface in a continuous fluid reservoir), Rigid Gas Permeable (RGP) lenses, and custom soft toric/multifocal lenses. We provide complete patient training on safe lens insertion, removal, disinfection, and hygiene to ensure crystal-clear vision with total corneal safety.",
    "category": "Speciality Clinic",
    "image": "/images/WhatsApp-Image-2023-06-03-at-2.30.28-AM.jpeg",
    "featured": false,
    "procedureTime": "30 - 45 Minutes (Trial Fitting & Assessment)",
    "recoveryTime": "Immediate (Adaptation takes 3-7 days)",
    "anesthesia": "Gentle Drops during Diagnostic Trial Fitting",
    "hospitalStay": "Outpatient Speciality Clinic",
    "technology": "Corneal Topographer, Auto-Keratometer, Rose K2 Fitting Sets, Scleral Trial Sets",
    "successRate": "98% Visual Rehabilitation in Keratoconus",
    "painLevel": "Completely Comfortable after brief adaptation",
    "symptoms": [
      "Blurry or distorted vision that cannot be corrected to 6/6 with regular eyeglasses",
      "Diagnosed with Keratoconus, Pellucid Marginal Degeneration, or irregular astigmatism",
      "Experiencing ghost images, multiple shadows around letters, or high astigmatism",
      "Corneal scarring following trauma or infections that causes irregular light scatter",
      "Severe dry eye or Stevens-Johnson syndrome requiring therapeutic corneal surface vaulting",
      "Active individuals and sports enthusiasts seeking comfortable spectacle-free vision"
    ],
    "benefits": [
      "Custom fitting by experienced contact lens specialists backed by senior cornea consultants",
      "Rose K2 and Scleral lenses restoring 6/6 vision in Keratoconus patients who cannot see clearly with glasses",
      "Scleral lenses vault over the cornea, eliminating friction and providing continuous hydration for dry eyes",
      "Extensive diagnostic trial fitting ensuring optimal comfort, oxygen permeability (high Dk), and tear exchange",
      "One-on-one training sessions on lens insertion, removal, cleaning, and storage protocols",
      "Full spectrum of lifestyle options: Daily disposables, Monthly toric soft lenses, and Multifocal contact lenses"
    ],
    "candidateCriteria": [
      "Patients diagnosed with Keratoconus or corneal ectasia",
      "Individuals with high astigmatism (> 2.0 D) seeking crisp optical clarity",
      "Patients with irregular corneas following corneal transplant surgery or trauma",
      "Patients with severe dry eye, neurotrophic keratitis, or ocular surface disease needing scleral lenses",
      "Teenagers and adults seeking cosmetic and lifestyle freedom from eyeglasses"
    ],
    "procedureSteps": [
      {
        "title": "Computerized Corneal Topography & Keratometry",
        "desc": "Advanced 3D surface mapping measures the exact curvature, steepness, and cone location of your cornea down to the micron.",
        "duration": "10 mins"
      },
      {
        "title": "Diagnostic Lens Trial Fitting",
        "desc": "The specialist selects a customized trial lens (Rose K, Scleral, or RGP) from calibrated diagnostic sets and places it on your eye.",
        "duration": "10 mins"
      },
      {
        "title": "Slit-Lamp Fluorescein Clearance Evaluation",
        "desc": "Under cobalt blue filter illumination, the specialist checks apical clearance, edge lift, and movement to ensure zero corneal rubbing.",
        "duration": "10 mins"
      },
      {
        "title": "Over-Refraction Test",
        "desc": "Precision spectacle lenses are placed over the contact lens to determine your exact optical power for razor-sharp 6/6 vision.",
        "duration": "10 mins"
      },
      {
        "title": "Insertion, Removal & Hygiene Training",
        "desc": "Our clinical trainer guides you through hands-on practice until you feel 100% confident inserting, removing, and cleaning your lenses.",
        "duration": "15 mins"
      }
    ],
    "comparisonTable": {
      "title": "Contact Lens Modalities at Ashvini Netralaya",
      "description": "We provide the full spectrum of contact lenses tailored to your ocular anatomy and clinical diagnosis.",
      "items": [
        {
          "name": "Rose K2 Keratoconus Lenses",
          "type": "Custom Aspheric Rigid Gas Permeable",
          "visionRange": "Restores sharp 6/6 vision by neutralizing corneal cone",
          "nightGlare": "Significantly reduces halos & optical aberrations",
          "spectacleFreedom": "Spectacle-free vision for keratoconus",
          "bestFor": "Mild to moderate Keratoconus, oval cones, nipple cones",
          "tag": "Keratoconus Specialist"
        },
        {
          "name": "Mini-Scleral Lenses",
          "type": "Large-Diameter Corneal-Vaulting Lenses",
          "visionRange": "Outstanding visual clarity with exceptional comfort",
          "nightGlare": "Virtually eliminates ghosting & halos",
          "spectacleFreedom": "Maximum comfort; lens does not touch the sensitive cornea",
          "bestFor": "Advanced Keratoconus, post-graft corneas, severe dry eye disease",
          "tag": "Premium Ultimate Comfort"
        },
        {
          "name": "Standard RGP Lenses",
          "type": "Rigid Gas Permeable Lenses",
          "visionRange": "Crisp optical clarity for regular corneas & astigmatism",
          "nightGlare": "Minimal",
          "spectacleFreedom": "Full daytime spectacle freedom",
          "bestFor": "High regular astigmatism, progressive myopia",
          "tag": "Durable & Sharp"
        },
        {
          "name": "Daily / Monthly Soft Torics",
          "type": "Hydrogel / Silicone Hydrogel Lenses",
          "visionRange": "Comfortable vision for standard refractive errors",
          "nightGlare": "Low",
          "spectacleFreedom": "Comfortable for sports, social wear, and routine daily life",
          "bestFor": "Regular myopia, hyperopia, mild astigmatism",
          "tag": "Daily Lifestyle Wear"
        }
      ]
    },
    "recoveryTimeline": [
      {
        "timeframe": "Days 1 to 3",
        "title": "Initial Adaptation Phase",
        "description": "Mild lens awareness and slight tearing are normal as your eyelids get accustomed to the lens edge. Start with 4 hours of wear daily.",
        "activities": [
          "Wear lenses for 4 hours on Day 1",
          "Increase by 2 hours each subsequent day",
          "Practice insertion and removal calmly"
        ]
      },
      {
        "timeframe": "Week 1 to 2",
        "title": "Full Daytime Wear",
        "description": "Full adaptation achieved. You comfortably wear your specialty lenses for 10-12 hours daily with crystal-clear vision.",
        "activities": [
          "Full workday wear",
          "Use re-wetting drops if in air conditioning",
          "Follow daily enzymatic cleaning routine"
        ]
      },
      {
        "timeframe": "Month 1 Review",
        "title": "Corneal Health & Fit Verification",
        "description": "Slit-lamp examination confirms clear, healthy cornea without staining, optimal lens fit, and 6/6 visual acuity.",
        "activities": [
          "Attend routine 1-month follow-up checkup"
        ]
      }
    ],
    "preOpInstructions": [
      "If you currently wear soft contact lenses, discontinue wearing them for 3 days prior to your fitting.",
      "If you wear RGP lenses, discontinue wearing them for 2 weeks prior to allow your cornea to assume its natural shape.",
      "Bring your current eyeglasses and all previous corneal topography maps or keratoconus reports.",
      "Trim your fingernails smoothly to make lens insertion and removal easy and safe.",
      "Plan for 45 to 60 minutes for your trial fitting and training session."
    ],
    "postOpCare": [
      "Always wash your hands thoroughly with oil-free soap and dry them with a lint-free towel before touching lenses.",
      "NEVER use tap water, bottled water, or saliva to rinse or store contact lenses; use only prescribed contact lens solutions.",
      "Never sleep with your contact lenses on unless specifically prescribed by your specialist.",
      "Remove your lenses immediately if your eye becomes red, painful, or sensitive to light, and contact the clinic.",
      "Replace your contact lens storage case every 3 months to prevent bacterial biofilm buildup."
    ],
    "insuranceCoverage": "Specialty medical contact lenses (such as Rose K2 and Scleral lenses for Keratoconus) may be reimbursable under certain corporate health policies and welfare programs as therapeutic medical devices at Ashvini Netralaya.",
    "technologyDetails": [
      {
        "name": "Rose K2 Diagnostic Fitting Systems",
        "maker": "Menicon / Rose K International",
        "advantage": "World's most prescribed keratoconus lens design with complex multi-curve geometry matching the asymmetric cone morphology with micron precision."
      },
      {
        "name": "Topcon Corneal Topography & Keratometry",
        "maker": "Topcon Corporation (Japan)",
        "advantage": "High-density Placido disc topography providing instant sagittal, tangential, and elevation curvature maps guiding first-fit success."
      }
    ],
    "faqs": [
      {
        "question": "Why can't I see clearly with regular glasses if I have Keratoconus?",
        "answer": "Keratoconus causes the cornea to thin and bulge into an irregular cone shape. Eyeglasses can only correct regular, symmetric focus errors. Specialty rigid or scleral lenses create a perfectly smooth, regular optical surface over your cornea, restoring crystal-clear 6/6 vision."
      },
      {
        "question": "Are scleral contact lenses painful to wear?",
        "answer": "Surprisingly, scleral lenses are extremely comfortable—often as comfortable as soft lenses! This is because they are large enough to vault completely over the highly sensitive corneal surface, resting gently on the relatively insensitive white sclera."
      },
      {
        "question": "How long do specialty RGP or Scleral lenses last?",
        "answer": "With proper daily cleaning, disinfection, and careful handling, high-quality RGP and scleral lenses typically last between 1 to 2 years before requiring replacement."
      },
      {
        "question": "Can contact lenses slip behind my eyeball?",
        "answer": "No, that is anatomically impossible. A thin, transparent membrane called the conjunctiva covers the white of the eye and loops around to line the inside of the eyelids, creating a sealed barrier that prevents anything from getting behind the eye."
      },
      {
        "question": "Can I shower or swim while wearing contact lenses?",
        "answer": "No! You should NEVER swim, shower, or use hot tubs while wearing contact lenses. Water contains dangerous micro-organisms (such as Acanthamoeba) that can cause severe, sight-threatening corneal infections."
      },
      {
        "question": "What should I do if my eye becomes red while wearing contact lenses?",
        "answer": "Remove the contact lens immediately! Do not attempt to re-insert it. If redness, pain, light sensitivity, or blurred vision persists for more than an hour after removing the lens, visit Ashvini Netralaya immediately for an emergency corneal checkup."
      }
    ],
    "doctorInCharge": "Cornea & Optometry Department",
    "doctorCredentials": "Led by Senior Cornea Consultants & Fellowship-Trained Specialty Contact Lens Practitioners",
    "patientReview": {
      "quote": "I was diagnosed with Keratoconus at age 22 and told in another state that I might need a corneal transplant because glasses couldn't give me more than 6/36 vision. The contact lens clinic at Ashvini Netralaya fitted me with Rose K2 lenses. The moment they put the lens on, I saw 6/6 clearly for the first time in years. They changed my life.",
      "patientName": "Anupam Bhattacharjee, 24",
      "location": "Kalyanpur, Khowai",
      "outcome": "Rose K2 Keratoconus Rehabilitation (Vision Restored from 6/36 to 6/6)"
    }
  },
  {
    "id": "pharmacy",
    "slug": "pharmacy",
    "title": "24/7 In-House Ophthalmic Pharmacy & Dispensary",
    "shortDescription": "100% genuine ophthalmic medicines, strict cold-chain maintained eye drops (2°C - 8°C), post-op surgical kits & expert pharmacist counseling in Agartala.",
    "description": "The In-House Ophthalmic Pharmacy at Ashvini Netralaya is a dedicated, NABH-compliant hospital dispensary specializing exclusively in ocular pharmacotherapy. Unlike general commercial retail chemists, an ophthalmic pharmacy requires rigorous specialized handling: many vital eye medications—such as anti-glaucoma prostaglandins, preservative-free lubricants, autologous serum tears, and post-operative antibiotic-steroid combinations—are sensitive biological molecules that degrade rapidly if temperature breaks occur.\n\nOur pharmacy maintains an unbroken 24/7 cold-chain infrastructure (2°C to 8°C) with continuous digital temperature loggers, medical-grade pharmaceutical refrigerators, and emergency generator backups. We stock 100% authentic, verified formulations sourced directly from premier multinational and national manufacturers (Alcon, Allergan/AbbVie, Carl Zeiss, Sun Pharma, Cipla, Micro Labs). Every patient receives personalized counseling on drop instillation techniques, suspension shaking, proper drop intervals, and storage guidelines to ensure maximum treatment efficacy.",
    "category": "Speciality Clinic",
    "image": "/images/WhatsApp-Image-2023-06-03-at-2.30.28-AM-1.jpeg",
    "featured": false,
    "procedureTime": "5 - 10 Minutes (Prescription Dispensation & Counseling)",
    "recoveryTime": "Immediate Service",
    "anesthesia": "None",
    "hospitalStay": "Ground Floor Hospital Premises (Open 24/7 for In-Patients & Emergency)",
    "technology": "Cold-Chain Medical Refrigeration, Digital Temperature Data Loggers, Hospital Pharmacy Management System",
    "successRate": "100% Genuine Ophthalmic Formulations",
    "painLevel": "N/A",
    "symptoms": [
      "Needing genuine, unadulterated post-operative eye drop kits following cataract or retina surgery",
      "Prescribed specialized anti-glaucoma eye drops that require strict cold-chain refrigeration (2°C - 8°C)",
      "Difficulty finding rare ophthalmic medications (corneal fortified antibiotics, natamycin, cyclosporine)",
      "Needing transparent post-operative protective eye shields, sterile eye wipes, or lubricating gels",
      "Elderly patients seeking clear, labeled dosage schedules and personalized drop instillation guidance",
      "Emergency eye trauma patients requiring immediate tetanus prophylaxis, antibiotic ointments, or cycloplegics"
    ],
    "benefits": [
      "100% genuine, uncompromised ophthalmic drugs sourced directly from certified pharmaceutical manufacturers",
      "Strict continuous 24/7 cold-chain temperature control (2°C - 8°C) with automated digital monitoring",
      "Specialized inventory carrying rare corneal antifungals, fortified drops, and anti-VEGF injections",
      "Convenient one-stop location on the ground floor: collect your prescribed medicines before leaving the hospital",
      "Professional pharmacist counseling on drop timing, spacing (5-minute rule), and punctal occlusion",
      "Subsidized and generic medicine options available under the Sarva Drishti Yojana initiative"
    ],
    "candidateCriteria": [
      "All patients undergoing cataract, retina, glaucoma, or squint surgery at Ashvini Netralaya",
      "Glaucoma patients on lifelong intraocular pressure lowering eye drop regimens",
      "Patients being treated for corneal ulcers, uveitis, endophthalmitis, or post-trauma infections",
      "Underprivileged and BPL/AAY card holders seeking subsidized essential eye medicines",
      "Walk-in patients seeking genuine, authentic ophthalmic formulations in Agartala"
    ],
    "procedureSteps": [
      {
        "title": "Digital Prescription Verification",
        "desc": "The registered pharmacist reviews your doctor's electronic or physical prescription, verifying exact drug names, concentrations, and dosing schedules.",
        "duration": "2 mins"
      },
      {
        "title": "Cold-Chain Retrieval",
        "desc": "Temperature-sensitive drops (prostaglandins, steroids, biologics) are retrieved directly from calibrated pharmaceutical refrigerators.",
        "duration": "1 min"
      },
      {
        "title": "Safety & Expiry Double-Check",
        "desc": "Batch numbers, manufacturing dates, and tamper-evident seals are double-checked before scanning into the pharmacy dispensing system.",
        "duration": "1 min"
      },
      {
        "title": "Clear Dosage Labeling",
        "desc": "Medicines are labeled with easy-to-read instructions (e.g., 'Morning / Afternoon / Night', 'Shake Well', 'Store in Fridge').",
        "duration": "2 mins"
      },
      {
        "title": "Pharmacist Patient Counseling",
        "desc": "The pharmacist demonstrates how to instill drops without touching the dropper tip to the eye and explains the 5-minute spacing rule.",
        "duration": "3 mins"
      }
    ],
    "comparisonTable": {
      "title": "Ashvini Netralaya Hospital Pharmacy vs General Retail Chemists",
      "description": "Why specialized hospital storage matters for delicate ophthalmic medications.",
      "items": [
        {
          "name": "Ashvini Netralaya Ophthalmic Pharmacy",
          "type": "Dedicated Hospital Dispensary",
          "visionRange": "Guarantees 100% active drug potency & sterility",
          "nightGlare": "N/A",
          "spectacleFreedom": "Prevents treatment failure from degraded drops",
          "bestFor": "All eye surgeries, glaucoma drops, corneal ulcers, delicate biologics",
          "tag": "100% Cold-Chain Verified"
        },
        {
          "name": "General Retail Chemist Shops",
          "type": "General Commercial Pharmacy",
          "visionRange": "Variable temperature storage during power outages",
          "nightGlare": "N/A",
          "spectacleFreedom": "Rarely carries specialized ophthalmic inventory",
          "bestFor": "General oral antibiotics, fever tablets, cough syrups",
          "tag": "General Retail"
        }
      ]
    },
    "recoveryTimeline": [
      {
        "timeframe": "Immediate Dispensation",
        "title": "Home Medicine Storage",
        "description": "Store drops in a cool, dry place away from direct sunlight. Store refrigerated drops inside the main fridge compartment (never in the freezer).",
        "activities": [
          "Read medicine dosage schedule",
          "Store drops at correct temperature",
          "Discard bottle 30 days after opening"
        ]
      }
    ],
    "preOpInstructions": [
      "Always present your original hospital prescription to the pharmacy counter.",
      "Inform the pharmacist if you have any known drug allergies (e.g., sulfa drugs, ciprofloxacin, preservatives).",
      "If traveling a long distance in summer, request an insulated ice pouch for refrigerated drops.",
      "Clarify any doubts regarding which drop is for which eye before leaving the counter.",
      "Keep payment receipts safe for insurance mediclaim reimbursement."
    ],
    "postOpCare": [
      "Always wash your hands thoroughly with soap before instilling eye drops.",
      "NEVER touch the tip of the dropper bottle with your fingers, eyelashes, or eyeball.",
      "If instilling more than one type of eye drop, ALWAYS wait at least 5 minutes between drops so the first drop isn't washed out.",
      "Shake suspension eye drops vigorously before use to ensure uniform drug concentration.",
      "Write the date of opening on the bottle; safely discard any open eye drop bottle after 30 days."
    ],
    "insuranceCoverage": "Post-operative medications and surgical pharmacy consumables are included in pre-authorized cashless packages for insured patients at Ashvini Netralaya. Subsidized medicines are dispensed under Sarva Drishti Yojana.",
    "technologyDetails": [
      {
        "name": "Medical Cold-Chain Pharmaceutical Refrigerators",
        "maker": "Vestfrost / Blue Star Bio-Medical",
        "advantage": "Microprocessor-controlled uniform temperature distribution (2°C - 8°C) with continuous digital data logging and audio-visual temperature excursion alarms."
      }
    ],
    "faqs": [
      {
        "question": "Why do some eye drops have to be kept in the refrigerator?",
        "answer": "Certain eye drops—including latanoprost and other glaucoma medications, fortified antibiotics, and autologous serum drops—are chemically unstable at room temperature. Storing them between 2°C and 8°C preserves their active chemical potency and prevents degradation."
      },
      {
        "question": "Can I put eye drops in the freezer to keep them cold?",
        "answer": "NO, NEVER freeze eye drops! Freezing destroys the active molecular structure and causes suspension particles to clump, making the drops ineffective and dangerous to the eye. Store them in the middle shelf of your refrigerator, never in the freezer compartment."
      },
      {
        "question": "Why do I need to wait 5 minutes between two different eye drops?",
        "answer": "The conjunctival sac of the eye can hold only about ONE drop (approximately 25-30 microliters) at a time. If you put a second drop immediately after the first, the second drop simply washes the first medication out of your eye. Waiting 5 minutes allows the first drop to be fully absorbed."
      },
      {
        "question": "How long can I use an eye drop bottle after opening it?",
        "answer": "Standard international safety guidelines mandate that open eye drop bottles should be discarded 30 days (1 month) after opening. After 30 days, preservatives lose efficacy and bacterial contamination of the bottle tip can occur."
      },
      {
        "question": "Does the pharmacy provide subsidized medicines for poor patients?",
        "answer": "Yes! Under our Sarva Drishti Yojana initiative, BPL, PHH, AAY, and PM-JAY card holders receive significant subsidies on diagnostic tests and surgical medicines, ensuring no one is deprived of eye care due to cost."
      },
      {
        "question": "Can I buy my post-operative cataract drops from an outside chemist?",
        "answer": "While you are legally free to purchase medicines anywhere, we strongly advise using our hospital pharmacy because our post-operative surgical packs are guaranteed 100% genuine, sterile, and cold-chain maintained directly from certified manufacturers."
      }
    ],
    "doctorInCharge": "Hospital Pharmacist Team",
    "doctorCredentials": "Led by Chief Pharmacist (B.Pharm, Registered Pharmacy Council) & Clinical Pharmacology Team",
    "patientReview": {
      "quote": "When my father had surgery, the pharmacist at Ashvini Netralaya didn't just hand over the medicines; he sat with us for 10 minutes, demonstrated how to put the drops without touching the eye, and gave us an insulated ice pouch for the bus ride back to Dharmanagar. Outstanding care.",
      "patientName": "Debashis Paul, 38",
      "location": "Dharmanagar, North Tripura",
      "outcome": "Post-Operative Cataract Recovery with Zero Infection"
    }
  }
];
