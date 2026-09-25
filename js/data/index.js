window.SINA = window.SINA || { subjects: [], lectures: {} };
SINA.lectures = SINA.lectures || {};

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
  { id: "parasito", name: "Parasitology and Mycology", semester: "S4", status: "live",
    blurb: "Protozoa, helminths and medical mycology.",
    groups: [
      { name: "General parasitology", items: [
        { id: "parasito-intro", title: "Introduction to parasitology" },
        { id: "parasito-diagnosis", title: "Diagnosis in parasitology" }
      ]},
      { name: "Protozoa", items: [
        { id: "parasito-amoebiasis", title: "Amoebiasis" },
        { id: "parasito-flagellates", title: "Intestinal and urogenital flagellates" },
        { id: "parasito-coccidiosis", title: "Intestinal coccidioses and blastocystosis" },
        { id: "parasito-malaria", title: "Malaria" },
        { id: "parasito-toxoplasmosis", title: "Toxoplasmosis" },
        { id: "parasito-leishmaniasis", title: "Leishmaniasis" }
      ]},
      { name: "Helminths", items: [
        { id: "parasito-nematodes", title: "Intestinal nematodes: pinworm, Ascaris, whipworm" },
        { id: "parasito-hookworm-strongyloides", title: "Hookworms and strongyloidiasis" },
        { id: "parasito-distomatosis", title: "Distomatoses (flukes)" },
        { id: "parasito-bilharzia", title: "Schistosomiasis (bilharzia)" },
        { id: "parasito-hydatidosis", title: "Hydatidosis (hydatid cyst)" }
      ]},
      { name: "Mycology", items: [
        { id: "parasito-candidiasis", title: "Candidiasis" },
        { id: "parasito-malassezioses", title: "Malassezioses (pityriasis versicolor)" },
        { id: "parasito-cryptococcosis", title: "Cryptococcosis" },
        { id: "parasito-aspergillosis", title: "Aspergillosis" },
        { id: "parasito-pneumocystosis", title: "Pneumocystosis" }
      ]}
    ]},
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

/* ---------- 1st Year Anglo (Semester 1) ---------- */
SINA.subjects.push(
  { id: "term1", name: "Medical Terminology", semester: "S1", program: "y1-anglo", status: "live",
    blurb: "Word parts, then the vocabulary of each body system.",
    groups: [
      { name: "Medical terminology", items: [
        { id: "term1-intro", title: "Introduction to medical terminology" },
        { id: "term1-cardio", title: "Cardiovascular system" },
        { id: "term1-resp", title: "Respiratory system" },
        { id: "term1-gi", title: "Digestive system" },
        { id: "term1-endocrine", title: "Endocrine system" },
        { id: "term1-nervous", title: "Nervous system" },
        { id: "term1-immune", title: "Immune system" },
        { id: "term1-repro", title: "Reproductive system" },
        { id: "term1-msk", title: "Musculoskeletal system" },
        { id: "term1-skin", title: "Integumentary system" }
      ]}
    ]},
  { id: "pubhealth1", name: "Public Health", semester: "S1", program: "y1-anglo", status: "live",
    blurb: "Health, determinants, prevention and promotion, indicators, epidemiology, biostatistics.",
    groups: [
      { name: "Public health", items: [
        { id: "pubhealth1-intro", title: "Introduction to public health" },
        { id: "pubhealth1-determinants", title: "Determinants of health" },
        { id: "pubhealth1-approaches", title: "Public health approaches: prevention and health promotion" }
      ]},
      { name: "Epidemiology and biostatistics", items: [
        { id: "pubhealth1-indicators", title: "Health indicators and measures of disease frequency" },
        { id: "pubhealth1-epidemiology", title: "Introduction to epidemiology" },
        { id: "pubhealth1-biostat", title: "Introduction to biostatistics" }
      ]}
    ]},
  { id: "genetics1", name: "Genetics", semester: "S1", program: "y1-anglo", status: "live",
    blurb: "From DNA structure to mutations and hereditary transmission.",
    groups: [
      { name: "Molecular genetics", items: [
        { id: "genetics1-intro", title: "Introduction to molecular genetics: nucleic acids" },
        { id: "genetics1-genome", title: "The human genome: DNA structure and organisation" },
        { id: "genetics1-replication", title: "DNA replication" },
        { id: "genetics1-transcription", title: "DNA transcription" },
        { id: "genetics1-rna-processing", title: "Post-transcriptional RNA processing" },
        { id: "genetics1-translation", title: "Gene expression: translation" },
        { id: "genetics1-mutation", title: "Gene mutation" },
        { id: "genetics1-chromosomal", title: "Chromosomal anomalies: detection and characterisation" },
        { id: "genetics1-heredity", title: "Hereditary disease transmission" }
      ]}
    ]},
  { id: "cellbio1", name: "Cell Biology", semester: "S1", program: "y1-anglo", status: "live",
    blurb: "Study methods, plasma membrane, cytoskeleton, cell cycle and nucleus.",
    groups: [
      { name: "Cell biology", items: [
        { id: "cellbio1-methods", title: "Cell study methods: microscopy, histology and cell culture" },
        { id: "cellbio1-membrane", title: "The plasma membrane: structure, exchanges and signalling" },
        { id: "cellbio1-cytoskeleton", title: "The cytosol and the cytoskeleton" },
        { id: "cellbio1-cycle-nucleus", title: "The cell cycle and the nucleus" }
      ]}
    ]},
  { id: "physics1", name: "Physics", semester: "S1", program: "y1-anglo", status: "live",
    blurb: "Biophysics of the internal environment and major functions.",
    groups: [
      { name: "General", items: [
        { id: "physics1-units", title: "Quantities, units and measurement uncertainties" }
      ]},
      { name: "States of matter and energetics", items: [
        { id: "physics1-states", title: "Physical states of matter" },
        { id: "physics1-water", title: "Biophysics of water and solutions" },
        { id: "physics1-gases", title: "Biophysics of the gaseous state" },
        { id: "physics1-energetics", title: "Energetics: work, potentials and chemical potential" }
      ]},
      { name: "Free displacements of matter", items: [
        { id: "physics1-viscosity", title: "Viscosity applied to biological fluids" },
        { id: "physics1-migration", title: "Migration movements" },
        { id: "physics1-diffusion", title: "Membranes and simple elementary phenomena" }
      ]},
      { name: "Membranes and major functions", items: [
        { id: "physics1-osmosis", title: "Osmotic phenomena" },
        { id: "physics1-fluid-transfers", title: "Fluid transfers in the organism" },
        { id: "physics1-circulation", title: "Biophysics of the blood circulation" },
        { id: "physics1-respiration", title: "Biophysics of respiration" },
        { id: "physics1-acid-base", title: "Acid-base balance" }
      ]}
    ]},
  { id: "biophys1", name: "Biophysics", semester: "S1", program: "y1-anglo", status: "live",
    blurb: "Radioactivity, radiation and protection, optics of vision, hearing.",
    groups: [
      { name: "Ionising radiation", items: [
        { id: "biophys1-radioactivity", title: "Radioactivity: general concepts" },
        { id: "biophys1-interactions", title: "Radiation-matter interactions, detection and dosimetry" },
        { id: "biophys1-radiobiology", title: "Radiobiology: biological effects of ionising radiation" },
        { id: "biophys1-radioprotection", title: "Radiation protection and safety in the medical sector" }
      ]},
      { name: "Senses", items: [
        { id: "biophys1-optics", title: "Geometrical optics applied to vision" },
        { id: "biophys1-hearing", title: "Biophysics of hearing" }
      ]}
    ]},
  { id: "chem1", name: "Chemistry", semester: "S1", program: "y1-anglo", status: "live",
    blurb: "General chemistry: atoms, periodic table, bonds, solutions.",
    groups: [
      { name: "General chemistry", items: [
        { id: "chem1-matter", title: "Structure of matter: the atom and its nucleus" },
        { id: "chem1-bohr", title: "Models of the atom: Rutherford, quantum theory and Bohr" },
        { id: "chem1-quantum", title: "Quantum mechanics, quantum numbers and atomic orbitals" },
        { id: "chem1-configuration", title: "Atomic orbitals and electron configuration" },
        { id: "chem1-periodic", title: "The periodic table" },
        { id: "chem1-bonds", title: "Chemical bonds" },
        { id: "chem1-solutions", title: "Chemistry in solutions" }
      ]}
    ]},
  { id: "anat1", name: "Anatomy 1", semester: "S1", program: "y1-anglo", status: "planned", count: 10, blurb: "" },
  { id: "biochem1", name: "Biochemistry", semester: "S1", program: "y1-anglo", status: "planned", count: 4, blurb: "" }
);

/* Years and programs shown in the selector (top left). Subjects without a "program"
   field belong to DEFAULT_PROGRAM. To add 1st-year subjects, give them program: "y1-anglo" etc. */
SINA.programs = [
  { id: "y1-anglo" }, { id: "y1-franco" },
  { id: "y2-anglo" }, { id: "y2-franco" },
  { id: "y3-anglo" }
];
SINA.DEFAULT_PROGRAM = "y2-anglo";
SINA.subjects.forEach(function (s) { if (!s.program) s.program = SINA.DEFAULT_PROGRAM; });
