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
        { id: "anat3-ocular-muscles", title: "Anatomy of the eyeball II: extraocular muscles and eye movement" },
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
  { id: "pathanat", name: "Pathological Anatomy", semester: "S4", status: "live",
    blurb: "Cell injury, inflammation, vasculopathy, oncology.",
    groups: [
      { name: "General pathology", items: [
        { id: "pathanat-intro", title: "Introduction to pathology" },
        { id: "pathanat-techniques", title: "Techniques in pathology" }
      ]},
      { name: "Cell injury and death", items: [
        { id: "pathanat-adaptation", title: "Cellular adaptation" },
        { id: "pathanat-cell-injury", title: "Cell injury: causes and pathogenesis" },
        { id: "pathanat-cell-death", title: "Cell death: necrosis and apoptosis" }
      ]},
      { name: "Inflammation", items: [
        { id: "pathanat-inflammation-acute", title: "Acute inflammation and repair" }
      ]},
      { name: "Vascular pathology", items: [
        { id: "pathanat-vascular", title: "Vascular pathology: haemodynamics and oedema" }
      ]},
      { name: "Oncology", items: [
        { id: "pathanat-onco-intro", title: "Neoplasia: introduction to tumours" },
        { id: "pathanat-carcinogenesis", title: "Carcinogenesis and the hallmarks of cancer" }
      ]}
    ]},
  { id: "history", name: "History and Art of Medicine", semester: "S3", status: "live",
    blurb: "How medicine became what it is, and the human side of care.",
    groups: [
      { name: "History of medicine", items: [
        { id: "history-physiology", title: "History of physiology" },
        { id: "history-pathology", title: "History of pathology" },
        { id: "history-pharmacology", title: "History of pharmacology" },
        { id: "history-epidemics", title: "Epidemics in history" },
        { id: "history-technology", title: "History of medical technology" },
        { id: "history-surgery", title: "History of surgery" }
      ]},
      { name: "Medical art", items: [
        { id: "history-medical-art", title: "The art of medicine: emotions, self-care and understanding others" }
      ]}
    ]},
  { id: "parasito", name: "Parasitology and Mycology", semester: "S4", status: "planned", count: 18, blurb: "" },
  { id: "infectious", name: "Infectious Diseases", semester: "S4", status: "live",
    blurb: "Anti-infectives, HIV, meningitis, zoonoses, prolonged fever.",
    groups: [
      { name: "Anti-infective therapy", items: [
        { id: "infect-atb-principles", title: "Principles of antibiotic therapy" },
        { id: "infect-antivirals", title: "Antiviral drugs for systemic use" },
        { id: "infect-antifungals", title: "Antifungal drugs for invasive fungal infections" }
      ]},
      { name: "HIV infection", items: [
        { id: "infect-hiv", title: "HIV/AIDS infection" },
        { id: "infect-hiv-manifestations", title: "Other clinical manifestations of AIDS" }
      ]},
      { name: "Bacterial and viral infections", items: [
        { id: "infect-meningitis", title: "Community-acquired bacterial meningitis" },
        { id: "infect-cholera", title: "Cholera" },
        { id: "infect-tiac", title: "Collective foodborne toxi-infections (TIAC)" },
        { id: "infect-leptospirosis", title: "Leptospirosis" },
        { id: "infect-rickettsiosis", title: "Rickettsioses: Mediterranean spotted fever" },
        { id: "infect-rabies", title: "Rabies" }
      ]},
      { name: "Syndromes", items: [
        { id: "infect-prolonged-fever", title: "Prolonged fever (fever of unknown origin)" }
      ]}
    ]},
  { id: "pharma", name: "Pharmacology", semester: "S4", status: "live",
    blurb: "Pharmacodynamics, metabolism, interactions, trials, safety, asthma drugs.",
    groups: [
      { name: "General pharmacology", items: [
        { id: "pharma-dynamics", title: "Pharmacodynamics" },
        { id: "pharma-biotransformation", title: "Biotransformation (drug metabolism)" },
        { id: "pharma-trials", title: "Clinical trials and new drug development" },
        { id: "pharma-vigilance", title: "Pharmacovigilance" },
        { id: "pharma-interactions", title: "Drug interactions" }
      ]},
      { name: "Systemic pharmacology", items: [
        { id: "pharma-asthma", title: "Drugs for asthma and COPD" }
      ]}
    ]},
  { id: "toxico", name: "Toxicology", semester: "S4", status: "live",
    blurb: "Toxicants, toxicokinetics, preclinical testing, systemic toxicity.",
    groups: [
      { name: "Toxicology", items: [
        { id: "toxico-intro", title: "Introduction to toxicology" },
        { id: "toxico-kinetics", title: "Toxicokinetics" },
        { id: "toxico-experimental", title: "Experimental (preclinical) toxicology" },
        { id: "toxico-systemic", title: "Systemic toxicology" }
      ]}
    ]},
  { id: "radio", name: "Radiology", semester: "S4", status: "planned", count: 0, blurb: "Past papers only for now." }
];
