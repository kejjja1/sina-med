window.SINA = window.SINA || { subjects: [], lectures: {} };

SINA.subjects = [
  { id: "anat3", name: "Anatomy 3", semester: "S3", status: "live",
    blurb: "Head and neck, then neuroanatomy.",
    groups: [
      { name: "Face and orbit", items: [
        { id: "anat3-face-osteology", title: "Osteology of the face" },
        { id: "anat3-facial-muscles", title: "Muscles of the facio-maxillary region" },
        { id: "anat3-blood-supply", title: "Blood supply of the region" },
        { id: "anat3-orbit", title: "The orbit: osteology and myology" },
        { id: "anat3-orbital-appendages", title: "Anatomy of the orbital appendages" },
        { id: "anat3-eyeball-1", title: "Anatomy of the eyeball I" },
        { id: "anat3-ocular-muscles", title: "Extraocular muscles and eye movement" },
        { id: "anat3-eye-innervation", title: "Motor and sensory innervation of the eye and its appendages" },
        { id: "anat3-ocular-clinical", title: "Vascular supply and applied anatomy of the eye" }
      ]},
      { name: "Nose, mouth, throat and neck", items: [
        { id: "anat3-nasal-cavity", title: "Anatomy of the nasal cavity" },
        { id: "anat3-sinuses", title: "Paranasal sinuses" },
        { id: "anat3-oral-cavity", title: "Oral cavity proper" },
        { id: "anat3-larynx", title: "Anatomy of the larynx" },
        { id: "anat3-pharynx", title: "Anatomy of the pharynx" },
        { id: "anat3-thyroid", title: "Anatomy of the thyroid gland" },
        { id: "anat3-neck-triangles", title: "The forgotten triangles of the neck" }
      ]},
      { name: "Ear", items: [
        { id: "anat3-ear-1", title: "Ear anatomy, part 1" },
        { id: "anat3-ear-2", title: "Ear anatomy, part 2" }
      ]},
      { name: "Neuroanatomy", items: [
        { id: "anat3-spinal-cord", title: "Anatomy of the spinal cord" },
        { id: "anat3-brainstem", title: "Anatomy of the brainstem" },
        { id: "anat3-cerebrum", title: "Anatomy of the cerebrum" },
        { id: "anat3-diencephalon", title: "Anatomy of the diencephalon" },
        { id: "anat3-descending-tracts", title: "Anatomy of the descending tracts" },
        { id: "anat3-pns", title: "The peripheral nervous system" }
      ]}
    ]},
  { id: "physio", name: "Physiology", semester: "S3", status: "live",
    blurb: "Neurophysiology, muscle, senses, renal filtration.",
    groups: [
      { name: "Neurophysiology", items: [
        { id: "physio-intro-neuro", title: "Introduction to neurophysiology" },
        { id: "physio-neurons", title: "Neurons and electrical communication" },
        { id: "physio-myotatic", title: "The myotatic reflexes" },
        { id: "physio-pain", title: "Physiology of pain" },
        { id: "physio-stress", title: "Physiology of stress" }
      ]},
      { name: "Muscle", items: [
        { id: "physio-muscle-2", title: "Muscle physiology, part II" }
      ]},
      { name: "Special senses", items: [
        { id: "physio-vision", title: "Physiology of vision" },
        { id: "physio-vestibular", title: "The vestibular system" },
        { id: "physio-taste-smell", title: "Taste and olfaction" }
      ]},
      { name: "Renal", items: [
        { id: "physio-renal-gfr", title: "Renal physiology 3: glomerular filtration" }
      ]}
    ] },
  { id: "semio", name: "Semiology", semester: "S3", status: "live",
    blurb: "Respiratory, cardiovascular, digestive and endocrine examination.",
    groups: [
      { name: "Respiratory", items: [
        { id: "semio-resp-symptoms", title: "Respiratory clinical symptoms" },
        { id: "semio-resp-exam", title: "Respiratory clinical examination" },
        { id: "semio-resp-syndromes", title: "Thoracic syndromes" }
      ]},
      { name: "Cardiovascular", items: [
        { id: "semio-cv-intro", title: "Cardiovascular semiology: introduction" },
        { id: "semio-cv-lhf", title: "Left heart failure" },
        { id: "semio-cv-rhf", title: "Right heart failure" },
        { id: "semio-cv-angina", title: "Angina pectoris" },
        { id: "semio-cv-arrhythmia", title: "Arrhythmias" },
        { id: "semio-cv-revision", title: "Cardiovascular revision" }
      ]},
      { name: "Digestive", items: [
        { id: "semio-gi-exam", title: "Digestive physical examination" },
        { id: "semio-gi-jaundice", title: "Jaundice" },
        { id: "semio-gi-hepatomegaly", title: "Hepatomegaly" },
        { id: "semio-gi-constipation", title: "Constipation" },
        { id: "semio-gi-dysentery", title: "Dysentery" },
        { id: "semio-gi-diarrhoea", title: "Diarrhoea" },
        { id: "semio-gi-dysphagia", title: "Dysphagia" },
        { id: "semio-gi-gerd", title: "Gastro-oesophageal reflux disease" },
        { id: "semio-gi-bleeding", title: "Gastrointestinal bleeding" }
      ]},
      { name: "Endocrine", items: [
        { id: "semio-endo-thyroid", title: "Thyroid semiology" },
        { id: "semio-endo-adrenal", title: "Adrenal semiology" }
      ]}
    ] },
  { id: "biochem", name: "Clinical Biochemistry", semester: "S3", status: "live",
    blurb: "Biochemical exploration of organs, hormones and balances.",
    groups: [
      { name: "Basics and hormones", items: [
        { id: "biochem-preanalytical", title: "Preanalytical phase of biochemical analyses" },
        { id: "biochem-adrenal-medulla", title: "Adrenal medulla hormones" },
        { id: "biochem-insulin", title: "Insulin" },
        { id: "biochem-steroids", title: "Steroid hormones" }
      ]},
      { name: "Organ exploration", items: [
        { id: "biochem-hepatic", title: "Hepatic biochemical exploration" },
        { id: "biochem-cardiac", title: "Cardiac biochemical exploration" },
        { id: "biochem-renal", title: "Renal biochemical exploration" },
        { id: "biochem-spe", title: "Serum protein electrophoresis" },
        { id: "biochem-lipids", title: "Exploration of a lipid anomaly" }
      ]},
      { name: "Balances", items: [
        { id: "biochem-calcium", title: "Calcium-phosphate balance" },
        { id: "biochem-iron", title: "Iron balance" },
        { id: "biochem-water", title: "Hydro-electrolytic balance" },
        { id: "biochem-acid-base", title: "Acid-base balance" }
      ]}
    ] },
  { id: "firstaid", name: "First Aid", semester: "S3", status: "live",
    blurb: "Emergency care and vital functions.",
    groups: [
      { name: "Emergency care", items: [
        { id: "fa-protection", title: "Protection and alert" },
        { id: "fa-cardiac-arrest", title: "Cardiac arrest" },
        { id: "fa-bleeding", title: "Bleeding" },
        { id: "fa-trauma-burns", title: "Trauma injuries and burns" }
      ]},
      { name: "Vital functions", items: [
        { id: "fa-neural", title: "Neural function: intracranial pressure" },
        { id: "fa-cardiovascular", title: "Cardiovascular function: shock" },
        { id: "fa-renal", title: "Renal function: acute kidney injury" },
        { id: "fa-endocrine", title: "Endocrine function: endocrine crises" },
        { id: "fa-immune", title: "Immune function" },
        { id: "fa-digestive", title: "Digestive and nutrition function" }
      ]}
    ] },
  { id: "pathanat", name: "Pathological Anatomy", semester: "S3", status: "planned", count: 9, blurb: "Cell injury, inflammation, vasculopathy, oncology." },
  { id: "history", name: "History and Art of Medicine", semester: "S3", status: "planned", count: 7, blurb: "" },
  { id: "parasito", name: "Parasitology and Mycology", semester: "S4", status: "planned", count: 18, blurb: "" },
  { id: "infectious", name: "Infectious Diseases", semester: "S4", status: "planned", count: 11, blurb: "" },
  { id: "pharma", name: "Pharmacology", semester: "S4", status: "planned", count: 8, blurb: "" },
  { id: "toxico", name: "Toxicology", semester: "S4", status: "planned", count: 4, blurb: "" },
  { id: "radio", name: "Radiology", semester: "S4", status: "planned", count: 0, blurb: "Past papers only for now." }
];
