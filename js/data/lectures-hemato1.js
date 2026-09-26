/* hemato1: 12 lectures, merged for upload. Edit the source files, not this one. */
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["hemato1-intro"] = {
 "id": "hemato1-intro",
 "subject": "hemato1",
 "group": "Blood cells and haematopoiesis",
 "title": "Introduction to haematology",
 "sourceFile": "Introduction to hematology (2025-26) (Hematology, Pr. N. Khoubila)",
 "sourceUrl": "https://drive.google.com/file/d/1iQCM5Ab31jWAb1TK8ed3GwfmX_cEB8YN/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p><strong>Haematology</strong> (Greek <em>haima</em>, blood; <em>logos</em>, discourse) is the branch of medicine that studies <strong>blood cells</strong>, <strong>coagulation</strong>, the <strong>blood-forming organs</strong> and <strong>blood diseases</strong>. The 40-hour module (Pr. Khoubila, Pr. Madani) covers <strong>cellular haematology</strong> (haematopoietic organs, bone marrow, erythropoiesis and anaemias, granulocytes, mononuclear phagocytes, lymphopoiesis, megakaryopoiesis, the blood count), <strong>haemostasis</strong> (primary haemostasis, coagulation, fibrinolysis, bleeding and thrombosis), <strong>immuno-haematology</strong> (ABO and Rh, transfusion) and <strong>haematological semiology</strong>. It builds on molecular biology, genetics, histology, embryology and biochemistry.</p>"
  },
  {
   "id": "s1",
   "title": "History",
   "html": "<p>Early medicine linked heavy blood loss with death and blamed 'plethora' for illness, leading to <strong>bloodletting</strong>. <strong>Hippocrates</strong> described four humours (blood, phlegm, black bile, yellow bile), an idea unchallenged for about 1,400 years. Galen, Harvey, van Leeuwenhoek, Virchow and Ehrlich moved haematology toward science. The <strong>microscope</strong> (17th century, van Leeuwenhoek) made blood cells visible; the 19th century described anaemia, <strong>Addisonian pernicious anaemia</strong> and <strong>Hodgkin disease</strong>; in the early 20th century pernicious anaemia was treated with raw liver. Haemoglobin measurement and blood-film examination became routine, and molecular biology and automation now detect genetic mutations and shorten turnaround time.</p>"
  },
  {
   "id": "s2",
   "title": "Properties, composition and functions",
   "html": "<p>Blood is a fluid tissue in which cells float freely. <strong>Volume</strong>: about <strong>8% of body weight</strong> (about 5.6 L in a 70 kg man). <strong>Viscosity</strong> about <strong>5 times</strong> that of water (red cells and plasma proteins). <strong>pH 7.35-7.45</strong>, specific gravity 1.055-1.056, osmolarity about <strong>300 mOsm</strong>, salinity 0.9%. Arterial blood is bright scarlet (more oxygen); venous blood is darker. <strong>Composition</strong>: <strong>plasma</strong> (about 55%: water, proteins, electrolytes, nutrients, hormones) and <strong>formed elements</strong> (about 45%): <strong>red cells</strong> (O₂ and CO₂ transport), <strong>white cells</strong> (defence) and <strong>platelets</strong> (haemostasis). <strong>Functions</strong>: <strong>transport</strong> (gases, nutrients, hormones, waste), <strong>regulation</strong> (pH, temperature, fluid balance) and <strong>protection</strong> (immunity, clotting). Blood goes from the heart to the lungs to load O₂, back to the heart and out to the tissues, where O₂ is exchanged for CO₂, which is exhaled.</p>"
  }
 ],
 "exam": [
  "Haematology: blood cells, coagulation, blood-forming organs, blood diseases.",
  "Module: cellular haematology, haemostasis, immuno-haematology, semiology.",
  "History: humours, bloodletting, microscope (van Leeuwenhoek), pernicious anaemia treated with liver.",
  "Blood volume ~8% body weight (~5.6 L in 70 kg).",
  "Viscosity ~5× water; pH 7.35-7.45; osmolarity ~300 mOsm; salinity 0.9%.",
  "Plasma ~55%; formed elements ~45%.",
  "Red cells: gas transport; white cells: defence; platelets: haemostasis.",
  "Functions: transport, regulation, protection."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Composition of blood",
   "caption": "A centrifuged tube separates plasma and cells. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"80\" x2=\"380\" y2=\"110\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"165\" x2=\"380\" y2=\"190\"/>",
   "parts": {
    "pl": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"200\" y=\"20\" width=\"360\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Plasma ~55%: water, proteins",
      "(albumin, globulins, fibrinogen), salts"
     ],
     "lx": 380.0,
     "ly": 48.0
    },
    "buf": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"200\" y=\"110\" width=\"360\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Buffy coat < 1%:",
      "white cells and platelets"
     ],
     "lx": 380.0,
     "ly": 135.5
    },
    "rbc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"200\" y=\"190\" width=\"360\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Red cells ~45%",
      "(haematocrit)"
     ],
     "lx": 380.0,
     "ly": 215.5
    }
   },
   "arrows": {
    "pl": [
     {
      "t": [
       200.0,
       28.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "buf": [
     {
      "t": [
       200.0,
       118.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "rbc": [
     {
      "t": [
       200.0,
       198.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ]
   }
  }
 },
 "mcqs": [
  {
   "q": "'Haima' in Greek means:",
   "options": [
    "Blood",
    "Heart",
    "Cell",
    "Bone"
   ],
   "answer": 0,
   "why": "Haematology."
  },
  {
   "q": "Who described the four humours?",
   "options": [
    "Harvey",
    "Virchow",
    "Hippocrates",
    "Galen"
   ],
   "answer": 2,
   "why": "Blood, phlegm, black and yellow bile."
  },
  {
   "q": "Who is associated with the introduction of the microscope to study blood?",
   "options": [
    "Castle",
    "van Leeuwenhoek",
    "Ehrlich",
    "Hippocrates"
   ],
   "answer": 1,
   "why": "17th century."
  },
  {
   "q": "Pernicious anaemia was first treated with:",
   "options": [
    "Raw liver",
    "Vitamin C",
    "Bloodletting",
    "Iron"
   ],
   "answer": 0,
   "why": "Castle, early 20th century."
  },
  {
   "q": "Blood volume represents about what share of body weight?",
   "options": [
    "40%",
    "2%",
    "20%",
    "8%"
   ],
   "answer": 3,
   "why": "About 5.6 L in a 70 kg man."
  },
  {
   "q": "Normal blood pH is:",
   "options": [
    "7.35-7.45",
    "6.8-7.0",
    "8.0",
    "7.6-7.8"
   ],
   "answer": 0,
   "why": "Slightly alkaline."
  },
  {
   "q": "Blood viscosity compared with water is about:",
   "options": [
    "50 times higher",
    "Equal",
    "Lower",
    "5 times higher"
   ],
   "answer": 3,
   "why": "Due to red cells and proteins."
  },
  {
   "q": "Plasma makes up about what share of blood?",
   "options": [
    "25%",
    "55%",
    "10%",
    "90%"
   ],
   "answer": 1,
   "why": "Cells ~45%."
  },
  {
   "q": "Which formed element is mainly responsible for haemostasis?",
   "options": [
    "Neutrophils",
    "Lymphocytes",
    "Platelets",
    "Red cells"
   ],
   "answer": 2,
   "why": "With coagulation factors."
  },
  {
   "q": "Blood osmolarity is about:",
   "options": [
    "100 mOsm",
    "300 mOsm",
    "600 mOsm",
    "1000 mOsm"
   ],
   "answer": 1,
   "why": "Isotonic to cells."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pl",
   "options": [
    "Buffy coat",
    "Red cells",
    "Plasma"
   ],
   "answer": 2,
   "why": "The arrow points to: Plasma. Liquid part: water with proteins, electrolytes, nutrients, hormones and waste; serum is plasma without clotting factors."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "buf",
   "options": [
    "Red cells",
    "Plasma",
    "Buffy coat"
   ],
   "answer": 2,
   "why": "The arrow points to: Buffy coat. Thin layer of leukocytes and platelets between plasma and red cells."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "rbc",
   "options": [
    "Buffy coat",
    "Plasma",
    "Red cells"
   ],
   "answer": 2,
   "why": "The arrow points to: Red cells. The heaviest cells sink to the bottom; their share of blood volume is the haematocrit."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Define haematology.",
   "back": "Branch of medicine studying blood cells, coagulation, blood-forming organs and blood diseases."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Parts of the haematology module?",
   "back": "Cellular haematology, haemostasis, immuno-haematology, haematological semiology."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Key historical steps?",
   "back": "Humours and bloodletting; microscope (van Leeuwenhoek); 19th-century descriptions of pernicious anaemia and Hodgkin disease; liver treatment; automation and molecular biology."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Physical properties of blood?",
   "back": "~8% body weight, viscosity ~5× water, pH 7.35-7.45, specific gravity 1.055, osmolarity ~300 mOsm, salinity 0.9%."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Composition of blood?",
   "back": "Plasma ~55%; formed elements ~45%: red cells, white cells, platelets."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Functions of blood?",
   "back": "Transport (gases, nutrients, hormones, waste), regulation (pH, temperature, fluid), protection (immunity, clotting)."
  },
  {
   "id": "img-pl",
   "type": "image",
   "target": "pl",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Plasma. Liquid part: water with proteins, electrolytes, nutrients, hormones and waste; serum is plasma without clotting factors."
  },
  {
   "id": "img-buf",
   "type": "image",
   "target": "buf",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Buffy coat. Thin layer of leukocytes and platelets between plasma and red cells."
  },
  {
   "id": "img-rbc",
   "type": "image",
   "target": "rbc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Red cells. The heaviest cells sink to the bottom; their share of blood volume is the haematocrit."
  }
 ],
 "deeper": [
  {
   "title": "Why bloodletting persisted for centuries",
   "html": "<p>Watching blood separate into layers in a bowl suggested that disease came from an imbalance of the body's fluids, and removing 'excess' blood seemed logical. Without a way to see cells or measure haemoglobin, doctors could not see the harm: bloodletting made patients anaemic. Only the microscope and measurement replaced dogma with evidence.</p><p class='src'>Source: the lecture's historical background.</p>"
  }
 ],
 "resources": [
  {
   "title": "What is blood? (NHLBI)",
   "url": "https://www.nhlbi.nih.gov/health/blood",
   "kind": "Website",
   "why": "Blood components and functions.",
   "note": ""
  },
  {
   "title": "Blood (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/human-biology/circulatory-pulmonary/a/components-of-the-blood",
   "kind": "Article",
   "why": "Plasma and formed elements.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "What is blood? (NHLBI)",
   "url": "https://www.nhlbi.nih.gov/health/blood"
  },
  {
   "name": "Blood (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/human-biology/circulatory-pulmonary/a/components-of-the-blood"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["hemato1-haematopoiesis"] = {
 "id": "hemato1-haematopoiesis",
 "subject": "hemato1",
 "group": "Blood cells and haematopoiesis",
 "title": "Haematopoiesis",
 "sourceFile": "Hematopoiesis (Hematology, Pr. A. Madani)",
 "sourceUrl": "https://drive.google.com/file/d/1B_e8TvOCS5Ii7i8BslrI1qwQgN0pkHrC/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p><strong>Haematopoiesis</strong> is the process that produces all blood cells from the <strong>haematopoietic stem cell (HSC)</strong>. It is vital because mature cells live briefly (<strong>red cells 120 days</strong>, <strong>platelets 7-10 days</strong>, <strong>white cells</strong> a few days in blood), cannot divide (except monocytes and lymphocytes), and their numbers must stay constant. It is <strong>continuous</strong> from embryo to death, <strong>regulated and adaptive</strong> (more red cells at altitude, more white cells in infection, via cytokines and growth factors), and the <strong>most regenerative tissue</strong>: <strong>10¹¹-10¹² cells per day</strong> (red cells about 200 × 10⁹ a day, 2 million per second).</p>"
  },
  {
   "id": "s1",
   "title": "Sites",
   "html": "<p>Starts about <strong>3 weeks after conception</strong>. <strong>Embryo</strong>: yolk sac, then the aorta-gonad-mesonephros region. <strong>Early fetus</strong>: <strong>liver</strong> and placenta. <strong>Late fetus</strong>: liver, spleen, placenta, then bone marrow. <strong>After birth</strong>: <strong>bone marrow</strong>, progressively confined to the <strong>axial skeleton</strong>. In marrow failure (thalassaemia, myelofibrosis) haematopoiesis can return to the <strong>spleen and liver</strong> (extramedullary haematopoiesis), causing hepatosplenomegaly. Stem cells can be collected from placental (cord) blood.</p>"
  },
  {
   "id": "s2",
   "title": "Compartments",
   "html": "<p><strong>HSCs</strong>: <strong>multipotent</strong>, <strong>self-renewing</strong>, low mitotic activity, not morphologically identifiable (look like large lymphocytes). <strong>Progenitors</strong>: lineage-committed, highly mitotic, less self-renewal, not identifiable: the <strong>common myeloid progenitor (CMP)</strong> gives the megakaryocyte-erythroid progenitor (→ BFU-E/CFU-E → red cells; CFU-Mk → platelets), the granulocyte-macrophage progenitor (CFU-GM → neutrophils, monocytes) and CFU-Eo and CFU-Baso; the <strong>common lymphoid progenitor (CLP)</strong> gives B, T and NK precursors. <strong>Precursors (blasts)</strong>: morphologically identifiable, unilineage, highly mitotic, no self-renewal: proerythroblast, myeloblast, megakaryoblast, lymphoblast, monoblast. Then <strong>mature cells</strong>. Stem cells and progenitors are identified by <strong>CD surface antigens</strong> using <strong>flow cytometry</strong>.</p>"
  },
  {
   "id": "s3",
   "title": "Regulation and exploration",
   "html": "<p>Regulation combines the <strong>bone marrow niche</strong> and <strong>haematopoietic growth factors</strong> acting on surface receptors. Early, multilineage: <strong>SCF</strong> (stem cell factor), <strong>IL-3</strong>, <strong>GM-CSF</strong>, <strong>IL-7</strong> (lymphoid). Lineage-specific: <strong>EPO</strong> (erythropoietin: red cells), <strong>TPO</strong> (thrombopoietin: platelets), <strong>G-CSF</strong> (neutrophils), <strong>M-CSF</strong> (monocytes). Exploration: <strong>complete blood count</strong> (automated, simple), <strong>blood film</strong>, <strong>bone marrow smear</strong> (aspirate) and <strong>bone marrow biopsy</strong>.</p>"
  }
 ],
 "exam": [
  "Haematopoiesis: all blood cells from the HSC; 10¹¹-10¹² cells/day.",
  "Life spans: RBC 120 d, platelets 7-10 d, WBC days.",
  "Continuous, regulated, adaptive (altitude, infection).",
  "Sites: yolk sac → AGM → liver (+ spleen) → bone marrow (axial skeleton).",
  "Extramedullary haematopoiesis in thalassaemia, myelofibrosis → hepatosplenomegaly.",
  "HSC: multipotent, self-renewing, low mitosis, CD-identified.",
  "Progenitors: CMP, CLP; committed, mitotic, not recognisable.",
  "Precursors (blasts): recognisable, one lineage, no self-renewal.",
  "Early factors: SCF, IL-3, GM-CSF, IL-7; lineage: EPO, TPO, G-CSF, M-CSF.",
  "Exploration: CBC, blood film, marrow smear, marrow biopsy; flow cytometry."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Hierarchy of haematopoiesis",
   "caption": "From stem cell to mature cell. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"80\" x2=\"380\" y2=\"110\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"170\" x2=\"380\" y2=\"200\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"260\" x2=\"380\" y2=\"290\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"760\" y1=\"185\" x2=\"250\" y2=\"140\"/>",
   "parts": {
    "hsc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"250\" y=\"20\" width=\"260\" height=\"60\" rx=\"10\"/>",
     "label": [
      "HSC: multipotent, self-renewing,",
      "low mitosis, not identifiable"
     ],
     "lx": 380.0,
     "ly": 48.0
    },
    "prog": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"250\" y=\"110\" width=\"260\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Progenitors: CMP / CLP, committed,",
      "high mitosis, not identifiable"
     ],
     "lx": 380.0,
     "ly": 138.0
    },
    "prec": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"250\" y=\"200\" width=\"260\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Precursors (blasts): one lineage,",
      "identifiable, no self-renewal"
     ],
     "lx": 380.0,
     "ly": 228.0
    },
    "mat": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"250\" y=\"290\" width=\"260\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Mature cells: no division",
      "(except monocytes, lymphocytes)"
     ],
     "lx": 380.0,
     "ly": 315.5
    },
    "gf": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"540\" y=\"150\" width=\"220\" height=\"70\" rx=\"10\"/>",
     "label": [
      "Growth factors: SCF, IL-3, GM-CSF, IL-7",
      "(early); EPO, TPO, G-CSF, M-CSF (lineage)"
     ],
     "lx": 650.0,
     "ly": 183.0
    }
   },
   "arrows": {
    "hsc": [
     {
      "t": [
       250.0,
       28.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "prog": [
     {
      "t": [
       250.0,
       118.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "prec": [
     {
      "t": [
       250.0,
       208.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "mat": [
     {
      "t": [
       250.0,
       298.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "gf": [
     {
      "t": [
       540.0,
       158.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ]
   }
  }
 },
 "mcqs": [
  {
   "q": "How many blood cells are produced daily?",
   "options": [
    "10⁹",
    "10¹⁵",
    "10⁶",
    "10¹¹-10¹²"
   ],
   "answer": 3,
   "why": "Most regenerative tissue."
  },
  {
   "q": "The life span of a red blood cell is about:",
   "options": [
    "120 days",
    "30 days",
    "1 year",
    "7 days"
   ],
   "answer": 0,
   "why": "Platelets 7-10 days."
  },
  {
   "q": "When does haematopoiesis begin?",
   "options": [
    "At puberty",
    "At birth",
    "At 6 months of pregnancy",
    "About 3 weeks after conception"
   ],
   "answer": 3,
   "why": "In the yolk sac."
  },
  {
   "q": "The main site of haematopoiesis in the early fetus is the:",
   "options": [
    "Kidney",
    "Liver",
    "Thymus",
    "Bone marrow"
   ],
   "answer": 1,
   "why": "Plus placenta."
  },
  {
   "q": "In adults, haematopoiesis is mainly confined to the:",
   "options": [
    "Liver",
    "Axial skeleton marrow",
    "Long bone shafts",
    "Spleen"
   ],
   "answer": 1,
   "why": "Flat bones, vertebrae."
  },
  {
   "q": "Extramedullary haematopoiesis in thalassaemia causes:",
   "options": [
    "Bone marrow expansion only",
    "Nothing",
    "Hepatosplenomegaly",
    "Lymphopenia"
   ],
   "answer": 2,
   "why": "Return to fetal sites."
  },
  {
   "q": "Which property belongs to HSCs?",
   "options": [
    "High mitotic activity",
    "Self-renewal",
    "Single lineage",
    "Morphological identification"
   ],
   "answer": 1,
   "why": "Also multipotency."
  },
  {
   "q": "Progenitor cells are:",
   "options": [
    "Lineage-committed and highly mitotic",
    "Self-renewing HSCs",
    "Morphologically identifiable",
    "Mature"
   ],
   "answer": 0,
   "why": "CMP and CLP."
  },
  {
   "q": "Precursor (blast) cells are:",
   "options": [
    "Self-renewing",
    "Recognisable, one lineage",
    "Multipotent",
    "Not identifiable"
   ],
   "answer": 1,
   "why": "E.g. proerythroblast."
  },
  {
   "q": "Stem cells and progenitors are identified by:",
   "options": [
    "CD markers by flow cytometry",
    "Iron stain",
    "Blood film",
    "Haemoglobin level"
   ],
   "answer": 0,
   "why": "Surface antigens."
  },
  {
   "q": "Which growth factor acts specifically on red cell production?",
   "options": [
    "IL-7",
    "TPO",
    "G-CSF",
    "EPO"
   ],
   "answer": 3,
   "why": "Erythropoietin."
  },
  {
   "q": "Thrombopoietin (TPO) stimulates:",
   "options": [
    "Platelet production",
    "Lymphocytes",
    "Red cells",
    "Neutrophils"
   ],
   "answer": 0,
   "why": "Megakaryopoiesis."
  },
  {
   "q": "Which growth factor acts early on many lineages?",
   "options": [
    "G-CSF",
    "SCF",
    "M-CSF",
    "EPO"
   ],
   "answer": 1,
   "why": "Also IL-3, GM-CSF."
  },
  {
   "q": "Which test is the simplest exploration of haematopoiesis?",
   "options": [
    "Flow cytometry",
    "Bone marrow biopsy",
    "Genetic testing",
    "Complete blood count"
   ],
   "answer": 3,
   "why": "Automated."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "hsc",
   "options": [
    "Haematopoietic stem cell",
    "Progenitors",
    "Precursors (blasts)",
    "Mature cells"
   ],
   "answer": 0,
   "why": "The arrow points to: Haematopoietic stem cell. Multipotent, self-renewing, low mitotic activity; looks like a large lymphocyte; identified only by surface markers (CD)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "prog",
   "options": [
    "Haematopoietic stem cell",
    "Haematopoietic growth factors",
    "Progenitors",
    "Mature cells"
   ],
   "answer": 2,
   "why": "The arrow points to: Progenitors. Common myeloid (CMP) and common lymphoid (CLP) progenitors, then MEP, GMP and CFUs; committed, highly mitotic, less self-renewal."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "prec",
   "options": [
    "Haematopoietic stem cell",
    "Progenitors",
    "Precursors (blasts)",
    "Haematopoietic growth factors"
   ],
   "answer": 2,
   "why": "The arrow points to: Precursors (blasts). Proerythroblasts, myeloblasts, megakaryoblasts, lymphoblasts, monoblasts: recognisable on smears, one lineage each."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "mat",
   "options": [
    "Progenitors",
    "Precursors (blasts)",
    "Haematopoietic stem cell",
    "Mature cells"
   ],
   "answer": 3,
   "why": "The arrow points to: Mature cells. Red cells (120 days), platelets (7-10 days), white cells (days in blood)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "gf",
   "options": [
    "Precursors (blasts)",
    "Mature cells",
    "Haematopoietic growth factors",
    "Progenitors"
   ],
   "answer": 2,
   "why": "The arrow points to: Haematopoietic growth factors. Act through surface receptors: multilineage early factors and lineage-specific ones."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Define haematopoiesis and why it is vital.",
   "back": "Production of all blood cells from HSCs; mature cells live briefly and cannot divide, while numbers must stay constant."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Key numbers?",
   "back": "10¹¹-10¹² cells/day; RBC 120 d, platelets 7-10 d, WBC days."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Sites of haematopoiesis by age?",
   "back": "Embryo: yolk sac, AGM. Fetus: liver, placenta, then spleen and marrow. After birth: bone marrow (axial skeleton)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Extramedullary haematopoiesis?",
   "back": "Return to liver and spleen in marrow failure (thalassaemia, myelofibrosis) → hepatosplenomegaly."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "HSC properties?",
   "back": "Multipotency, self-renewal, low mitotic activity, not morphologically identifiable (CD markers)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Progenitors vs precursors?",
   "back": "Progenitors: committed (CMP, CLP), mitotic, not identifiable. Precursors: blasts, unilineage, identifiable, no self-renewal."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Haematopoietic growth factors?",
   "back": "Early: SCF, IL-3, GM-CSF, IL-7. Lineage-specific: EPO, TPO, G-CSF, M-CSF."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Methods of exploration?",
   "back": "Complete blood count, blood film, bone marrow smear, bone marrow biopsy, flow cytometry."
  },
  {
   "id": "img-hsc",
   "type": "image",
   "target": "hsc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Haematopoietic stem cell. Multipotent, self-renewing, low mitotic activity; looks like a large lymphocyte; identified only by surface markers (CD)."
  },
  {
   "id": "img-prog",
   "type": "image",
   "target": "prog",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Progenitors. Common myeloid (CMP) and common lymphoid (CLP) progenitors, then MEP, GMP and CFUs; committed, highly mitotic, less self-renewal."
  },
  {
   "id": "img-prec",
   "type": "image",
   "target": "prec",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Precursors (blasts). Proerythroblasts, myeloblasts, megakaryoblasts, lymphoblasts, monoblasts: recognisable on smears, one lineage each."
  },
  {
   "id": "img-mat",
   "type": "image",
   "target": "mat",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Mature cells. Red cells (120 days), platelets (7-10 days), white cells (days in blood)."
  },
  {
   "id": "img-gf",
   "type": "image",
   "target": "gf",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Haematopoietic growth factors. Act through surface receptors: multilineage early factors and lineage-specific ones."
  }
 ],
 "deeper": [
  {
   "title": "Why G-CSF is given after chemotherapy",
   "html": "<p>Chemotherapy kills dividing cells, including marrow progenitors, so neutrophils (which live only days) fall first, exposing patients to severe infections. Injecting G-CSF, the neutrophil-specific growth factor, pushes the surviving progenitors to proliferate and mature, shortening the period of neutropenia. It also mobilises stem cells into the blood for collection before transplantation.</p><p class='src'>Source: the lecture's growth factor slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "Hematopoiesis (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK534246/",
   "kind": "Book",
   "why": "Stem cells, lineages and regulation.",
   "note": ""
  },
  {
   "title": "Bone marrow tests (MedlinePlus)",
   "url": "https://medlineplus.gov/lab-tests/bone-marrow-tests/",
   "kind": "Website",
   "why": "Aspiration and biopsy.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Hematopoiesis (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK534246/"
  },
  {
   "name": "Bone marrow tests (MedlinePlus)",
   "url": "https://medlineplus.gov/lab-tests/bone-marrow-tests/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["hemato1-rbc"] = {
 "id": "hemato1-rbc",
 "subject": "hemato1",
 "group": "Blood cells and haematopoiesis",
 "title": "Red blood cells and erythropoiesis",
 "sourceFile": "Red blood cells (erythrocytes) (Hematology, Pr. A. Madani)",
 "sourceUrl": "https://drive.google.com/file/d/1HOBrLiNBem3_l4b9fiegap9-nqsmtqfS/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>Red blood cells are the most abundant blood cells (<strong>4.5-5.5 million/mm³</strong>, about 25,000 billion in total). They have <strong>no nucleus or organelles</strong>, so they cannot divide or synthesise proteins; they live about <strong>120 days</strong> (half-life 28 days). Their one job: <strong>transport O₂</strong> (and some CO₂).</p>"
  },
  {
   "id": "s1",
   "title": "Morphology and membrane",
   "html": "<p>A <strong>biconcave disc</strong>: diameter <strong>7-8 µm</strong>, thickness 2.5 µm at the rim and 1 µm in the centre, volume <strong>85-95 fL</strong> (MCV), surface about 140 µm², giving a large exchange surface. Contents: water 62.5%, <strong>haemoglobin 35%</strong>, other 2.5% (lipids, glucose, enzymes, ions). The <strong>membrane</strong> is a lipid bilayer (phospholipids 65%, cholesterol 25%, glycolipids 10%) on a cytoskeleton. <strong>Integral proteins</strong>: <strong>glycophorins</strong> (carry blood-group antigens) and <strong>band 3</strong> (anion transport). <strong>Peripheral cytoskeletal proteins</strong>: <strong>spectrin, ankyrin, actin, protein 4.1</strong>, which maintain shape and <strong>deformability</strong> (squeezing through capillaries under 3 µm). The membrane also carries ABO, Rh and Kell antigens and the Na⁺/K⁺ pump. Defects cause abnormal shapes: <strong>hereditary spherocytosis</strong> (the most common; treated by splenectomy when symptomatic), elliptocytosis, stomatocytosis.</p>"
  },
  {
   "id": "s2",
   "title": "Haemoglobin",
   "html": "<p>A tetramer of <strong>2 α-type and 2 non-α globin chains</strong>, each with a <strong>haem</strong> (protoporphyrin IX ring with ferrous <strong>Fe²⁺</strong>); each haem binds one O₂, so one Hb carries <strong>4 O₂</strong>. Hb fills 35% of cell volume and 90% of its dry weight (24-34 pg per cell, MCH). Types: <strong>HbA α₂β₂</strong>, <strong>HbF α₂γ₂</strong>, <strong>HbA2 α₂δ₂</strong>. α-type genes on <strong>chromosome 16</strong>, β-type on <strong>chromosome 11</strong>. In <strong>β-thalassaemia</strong> β chains are missing and HbF persists; it shows at about 6 months, when γ chains switch off. Oxidised Fe³⁺ (<strong>methaemoglobin</strong>) cannot bind O₂. Functions: O₂ transport (main), CO₂ transport (mostly as plasma bicarbonate; about 40% bound to Hb on globin), NO transport. Normal Hb: <strong>men 13-16 g/dL</strong>, <strong>women 12-15.5</strong>, <strong>newborns 16.5-21.5</strong>; <strong>anaemia</strong>: Hb &lt; 13 (men), &lt; 12 (women), &lt; 14.5 (newborns). About 750 g of Hb, 6.25 g renewed daily.</p>"
  },
  {
   "id": "s3",
   "title": "Metabolism, erythropoiesis and haemolysis",
   "html": "<p>With no organelles, red cells depend on <strong>glucose</strong>. <strong>Anaerobic glycolysis (Embden-Meyerhof, 90%)</strong>: 2 ATP per glucose (key enzyme <strong>pyruvate kinase</strong>) for shape, flexibility and the cation pump, plus NADH to keep iron reduced. <strong>Hexose monophosphate shunt (10%)</strong>: key enzyme <strong>G6PD</strong>, makes <strong>NADPH</strong>, which regenerates reduced <strong>glutathione</strong> protecting Hb and membrane from oxidation (G6PD deficiency → oxidative haemolysis). <strong>Erythropoiesis</strong> in the marrow: proerythroblast → basophilic, polychromatophilic and orthochromatic erythroblasts → <strong>reticulocyte</strong> → red cell, driven by <strong>erythropoietin (EPO)</strong> from the kidney in response to hypoxia, and needing <strong>iron, B12 and folate</strong>. <strong>Physiological haemolysis</strong>: aged cells are taken up mainly by <strong>splenic macrophages</strong>; haem → <strong>bilirubin</strong> (conjugated by the liver), iron recycled, globin → amino acids.</p>"
  }
 ],
 "exam": [
  "RBC: 4.5-5.5 million/mm³, no nucleus, 120 days.",
  "Biconcave disc: 7-8 µm, MCV 85-95 fL.",
  "Membrane: bilayer + cytoskeleton (spectrin, ankyrin, actin, 4.1).",
  "Glycophorins carry antigens; band 3 transports anions.",
  "Hereditary spherocytosis: cytoskeletal defect; splenectomy if symptomatic.",
  "Hb: 2α + 2 non-α chains + 4 haems (Fe²⁺) → 4 O₂.",
  "HbA α₂β₂, HbF α₂γ₂, HbA2 α₂δ₂; α genes chr 16, β genes chr 11.",
  "Methaemoglobin (Fe³⁺) cannot carry O₂.",
  "Anaemia: Hb < 13 men, < 12 women, < 14.5 newborns.",
  "Glycolysis 90% (pyruvate kinase, ATP); HMP shunt 10% (G6PD, NADPH, glutathione).",
  "EPO from the kidney drives erythropoiesis; splenic macrophages remove old cells."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Life cycle of a red blood cell",
   "caption": "Made in the marrow, destroyed in the spleen. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"220\" y1=\"70\" x2=\"270\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"470\" y1=\"70\" x2=\"520\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"620\" y1=\"100\" x2=\"620\" y2=\"170\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"720\" y1=\"200\" x2=\"180\" y2=\"200\"/>",
   "parts": {
    "pro": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Proerythroblast →",
      "erythroblasts (Hb synthesis)"
     ],
     "lx": 120.0,
     "ly": 68.0
    },
    "ret": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"270\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Reticulocyte",
      "(nucleus expelled)"
     ],
     "lx": 370.0,
     "ly": 68.0
    },
    "rbc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"520\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Red cell: biconcave,",
      "120 days, no nucleus"
     ],
     "lx": 620.0,
     "ly": 68.0
    },
    "mac": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"520\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Macrophages (spleen):",
      "haemolysis"
     ],
     "lx": 620.0,
     "ly": 198.0
    },
    "bil": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"180\" y=\"170\" width=\"300\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Haem → bilirubin → liver;",
      "iron recycled; globin → amino acids"
     ],
     "lx": 330.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "pro": [
     {
      "t": [
       20.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "ret": [
     {
      "t": [
       270.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "rbc": [
     {
      "t": [
       520.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "mac": [
     {
      "t": [
       520.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "bil": [
     {
      "t": [
       180.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ]
   }
  }
 },
 "mcqs": [
  {
   "q": "Normal red cell count is about:",
   "options": [
    "4.5-5.5 million/mm³",
    "1-2 million/mm³",
    "150,000-400,000/mm³",
    "10 million/mm³"
   ],
   "answer": 0,
   "why": "Most abundant cell."
  },
  {
   "q": "Why can red cells not divide?",
   "options": [
    "Too many enzymes",
    "No nucleus or organelles",
    "Too small",
    "Short life"
   ],
   "answer": 1,
   "why": "No synthesis either."
  },
  {
   "q": "The normal MCV is about:",
   "options": [
    "200 fL",
    "85-95 fL",
    "50-60 fL",
    "120-130 fL"
   ],
   "answer": 1,
   "why": "Mean corpuscular volume."
  },
  {
   "q": "Which protein belongs to the red cell cytoskeleton?",
   "options": [
    "Band 3",
    "Glycophorin",
    "Spectrin",
    "Albumin"
   ],
   "answer": 2,
   "why": "Also ankyrin, actin, 4.1."
  },
  {
   "q": "Blood-group antigens are carried mainly by:",
   "options": [
    "Ankyrin",
    "Spectrin",
    "Haemoglobin",
    "Glycophorins"
   ],
   "answer": 3,
   "why": "Integral proteins."
  },
  {
   "q": "One haemoglobin molecule can carry how many O₂?",
   "options": [
    "4",
    "8",
    "1",
    "2"
   ],
   "answer": 0,
   "why": "One per haem."
  },
  {
   "q": "Adult haemoglobin A is:",
   "options": [
    "α₂δ₂",
    "α₂γ₂",
    "β₄",
    "α₂β₂"
   ],
   "answer": 3,
   "why": "HbF is α₂γ₂."
  },
  {
   "q": "The β-globin gene cluster is on chromosome:",
   "options": [
    "X",
    "11",
    "16",
    "6"
   ],
   "answer": 1,
   "why": "α cluster on 16."
  },
  {
   "q": "β-thalassaemia usually becomes apparent at about:",
   "options": [
    "6 months",
    "Birth",
    "5 years",
    "Puberty"
   ],
   "answer": 0,
   "why": "When γ chains switch off."
  },
  {
   "q": "Methaemoglobin contains iron in the form:",
   "options": [
    "Fe⁰",
    "Fe³⁺",
    "No iron",
    "Fe²⁺"
   ],
   "answer": 1,
   "why": "Cannot bind O₂."
  },
  {
   "q": "Anaemia in an adult woman is defined as Hb below:",
   "options": [
    "10 g/dL",
    "12 g/dL",
    "14.5 g/dL",
    "13 g/dL"
   ],
   "answer": 1,
   "why": "Men: 13 g/dL."
  },
  {
   "q": "The key enzyme of red cell glycolysis is:",
   "options": [
    "Pyruvate kinase",
    "Hexokinase only",
    "G6PD",
    "Catalase"
   ],
   "answer": 0,
   "why": "Produces ATP."
  },
  {
   "q": "G6PD in red cells produces:",
   "options": [
    "Bilirubin",
    "Lactate",
    "ATP",
    "NADPH"
   ],
   "answer": 3,
   "why": "Regenerates glutathione."
  },
  {
   "q": "Erythropoietin is produced mainly by the:",
   "options": [
    "Kidney",
    "Bone marrow",
    "Spleen",
    "Liver"
   ],
   "answer": 0,
   "why": "In response to hypoxia."
  },
  {
   "q": "Aged red cells are removed mainly by:",
   "options": [
    "Lungs",
    "Neutrophils",
    "Splenic macrophages",
    "Kidney"
   ],
   "answer": 2,
   "why": "Physiological haemolysis."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pro",
   "options": [
    "Reticulocyte",
    "Mature red cell",
    "Physiological haemolysis",
    "Erythroid precursors"
   ],
   "answer": 3,
   "why": "The arrow points to: Erythroid precursors. Proerythroblasts mature through erythroblast stages while making haemoglobin; EPO from the kidney drives the process."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ret",
   "options": [
    "Erythroid precursors",
    "Recycling",
    "Reticulocyte",
    "Physiological haemolysis"
   ],
   "answer": 2,
   "why": "The arrow points to: Reticulocyte. Young anucleate red cell released into blood; its count reflects marrow output."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "rbc",
   "options": [
    "Erythroid precursors",
    "Recycling",
    "Reticulocyte",
    "Mature red cell"
   ],
   "answer": 3,
   "why": "The arrow points to: Mature red cell. Biconcave disc, 7-8 µm, carries O₂; no nucleus or organelles."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "mac",
   "options": [
    "Erythroid precursors",
    "Reticulocyte",
    "Physiological haemolysis",
    "Mature red cell"
   ],
   "answer": 2,
   "why": "The arrow points to: Physiological haemolysis. Aged red cells are removed mainly by splenic macrophages."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "bil",
   "options": [
    "Mature red cell",
    "Reticulocyte",
    "Recycling",
    "Physiological haemolysis"
   ],
   "answer": 2,
   "why": "The arrow points to: Recycling. Haem is converted to bilirubin (conjugated in the liver); iron returns to the marrow; globin is broken into amino acids."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Key features of red cells?",
   "back": "4.5-5.5 million/mm³; anucleate, no organelles; 120-day life; O₂ transport."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Red cell morphology?",
   "back": "Biconcave disc, 7-8 µm, 2.5 µm rim, 1 µm centre, MCV 85-95 fL, ~140 µm² surface."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Red cell membrane?",
   "back": "Lipid bilayer (phospholipids, cholesterol, glycolipids); integral glycophorins and band 3; cytoskeleton spectrin, ankyrin, actin, 4.1."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Haemoglobin structure?",
   "back": "Tetramer: 2 α-type + 2 non-α chains, each with haem (protoporphyrin IX + Fe²⁺); 4 O₂ per Hb."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Haemoglobin types and genes?",
   "back": "HbA α₂β₂, HbF α₂γ₂, HbA2 α₂δ₂; α genes chromosome 16, β genes chromosome 11."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Normal Hb and anaemia thresholds?",
   "back": "Men 13-16, women 12-15.5, newborns 16.5-21.5 g/dL; anaemia < 13, < 12, < 14.5."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Red cell metabolism?",
   "back": "Glycolysis 90% (pyruvate kinase → ATP, NADH); HMP shunt 10% (G6PD → NADPH → glutathione)."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Erythropoiesis and haemolysis?",
   "back": "Proerythroblast → erythroblasts → reticulocyte → RBC under EPO (kidney); old cells removed by splenic macrophages; haem → bilirubin, iron recycled."
  },
  {
   "id": "img-pro",
   "type": "image",
   "target": "pro",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Erythroid precursors. Proerythroblasts mature through erythroblast stages while making haemoglobin; EPO from the kidney drives the process."
  },
  {
   "id": "img-ret",
   "type": "image",
   "target": "ret",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Reticulocyte. Young anucleate red cell released into blood; its count reflects marrow output."
  },
  {
   "id": "img-rbc",
   "type": "image",
   "target": "rbc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Mature red cell. Biconcave disc, 7-8 µm, carries O₂; no nucleus or organelles."
  },
  {
   "id": "img-mac",
   "type": "image",
   "target": "mac",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Physiological haemolysis. Aged red cells are removed mainly by splenic macrophages."
  },
  {
   "id": "img-bil",
   "type": "image",
   "target": "bil",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Recycling. Haem is converted to bilirubin (conjugated in the liver); iron returns to the marrow; globin is broken into amino acids."
  }
 ],
 "deeper": [
  {
   "title": "Why G6PD deficiency causes haemolysis after fava beans",
   "html": "<p>Red cells cannot make new enzymes, so they depend on G6PD to produce NADPH and keep glutathione reduced. Oxidants from fava beans, some drugs or infection overwhelm cells lacking G6PD: haemoglobin oxidises and precipitates (Heinz bodies) and the membrane is damaged, so the spleen destroys the cells within days, causing anaemia and dark urine.</p><p class='src'>Source: the lecture's hexose monophosphate shunt slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "Red blood cells (NCBI StatPearls: erythrocytes)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK545198/",
   "kind": "Book",
   "why": "Structure and function.",
   "note": ""
  },
  {
   "title": "Hereditary spherocytosis (MedlinePlus Genetics)",
   "url": "https://medlineplus.gov/genetics/condition/hereditary-spherocytosis/",
   "kind": "Website",
   "why": "A red cell membrane disorder.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Red blood cells (NCBI StatPearls: erythrocytes)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK545198/"
  },
  {
   "name": "Hereditary spherocytosis (MedlinePlus Genetics)",
   "url": "https://medlineplus.gov/genetics/condition/hereditary-spherocytosis/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["hemato1-iron"] = {
 "id": "hemato1-iron",
 "subject": "hemato1",
 "group": "Blood cells and haematopoiesis",
 "title": "Iron metabolism",
 "sourceFile": "Iron metabolism (Hematology, Pr. A. Madani)",
 "sourceUrl": "https://drive.google.com/file/d/1pGrexKfV9eSU0MrzsxQcJjqErpT61uup/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>Iron is the most important metal in human physiology: <strong>O₂ transport</strong>, energy production, enzymatic reactions, cell growth and immunity. Total body iron is stable at <strong>4-5 g</strong> (about 50 mg/kg in men, 40 in women). The body <strong>cannot produce or actively excrete iron</strong>, so it is a <strong>nearly closed system</strong> regulated at the level of <strong>absorption</strong>: deficiency causes <strong>anaemia</strong>; excess causes <strong>iron overload (haemochromatosis)</strong>.</p>"
  },
  {
   "id": "s1",
   "title": "Compartments",
   "html": "<p><strong>Functional</strong>: <strong>haemoglobin 60-75%</strong>, myoglobin about 3.5%, enzymes 0.2%. <strong>Storage</strong>: <strong>ferritin</strong> 10-20% and <strong>haemosiderin</strong> 5-10% (liver, spleen, marrow). <strong>Transport</strong>: <strong>transferrin</strong> about 0.1%. Daily balance: a diet of <strong>15-20 mg</strong>, of which only about <strong>10% (1-2 mg)</strong> is absorbed, matching <strong>1-2 mg/day</strong> of physiological loss (skin and gut cells, menstruation).</p>"
  },
  {
   "id": "s2",
   "title": "Absorption, transport and storage",
   "html": "<p><strong>Haem iron</strong> (Fe²⁺, meat, liver, eggs) is well absorbed (about 20%): the whole haem enters the enterocyte and iron is freed from protoporphyrin. <strong>Non-haem iron</strong> (Fe³⁺, vegetables, pulses, cereals) is poorly absorbed (1-4%): it is reduced to Fe²⁺ by <strong>duodenal cytochrome b (DcytB)</strong> and taken up by <strong>DMT1</strong>; <strong>vitamin C increases</strong> and <strong>tannins (tea) decrease</strong> its absorption. Absorption occurs in the <strong>duodenum and proximal jejunum</strong>. Inside the enterocyte, iron is either released to blood (when needed) or stored as ferritin and lost when the cell is shed. Export across the basolateral membrane uses <strong>ferroportin</strong>, the main point of regulation; <strong>hephaestin</strong> oxidises Fe²⁺ to Fe³⁺, which binds <strong>transferrin</strong> (made by the liver; 2 Fe³⁺ per molecule). Cells take it up via <strong>transferrin receptor 1 (TfR1)</strong>, abundant on erythroid precursors; transferrin and receptor are recycled. <strong>Macrophages</strong> recycle iron from old red cells, supplying most plasma iron each day. <strong>Hepcidin</strong>, made by the liver, binds and degrades ferroportin: it rises with iron excess and inflammation (lowering absorption and release) and falls in deficiency and increased erythropoiesis.</p>"
  },
  {
   "id": "s3",
   "title": "Laboratory assessment and disorders",
   "html": "<p>Tests: <strong>serum iron</strong>, <strong>transferrin</strong> (total iron-binding capacity), <strong>transferrin saturation</strong>, and <strong>serum ferritin</strong>, the best marker of stores (low in deficiency; raised in overload but also in inflammation). <strong>Perls staining</strong> shows marrow iron. <strong>Iron deficiency</strong> (blood loss, poor intake, malabsorption, increased needs in growth and pregnancy) leads to microcytic, hypochromic anaemia; <strong>iron overload</strong> (hereditary haemochromatosis, repeated transfusions) damages the liver, heart and pancreas.</p>"
  }
 ],
 "exam": [
  "Total body iron 4-5 g; no active excretion; regulated at absorption.",
  "Hb 60-75%; ferritin 10-20%; haemosiderin 5-10%; transferrin 0.1%.",
  "Diet 15-20 mg/day; ~10% (1-2 mg) absorbed = daily loss.",
  "Haem iron (Fe²⁺, meat) ~20% absorbed; non-haem (Fe³⁺, plants) 1-4%.",
  "Vitamin C increases, tannins decrease non-haem absorption.",
  "Absorption: duodenum; DcytB reduces, DMT1 imports.",
  "Ferroportin exports; hephaestin oxidises; transferrin carries 2 Fe³⁺.",
  "TfR1 on erythroid precursors; macrophages recycle iron.",
  "Hepcidin (liver) degrades ferroportin; ↑ in overload and inflammation.",
  "Ferritin: best marker of stores; Perls stain for marrow iron."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "The iron cycle",
   "caption": "A nearly closed system: 1-2 mg in, 1-2 mg out each day. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"190\" y1=\"67\" x2=\"210\" y2=\"67\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"400\" y1=\"67\" x2=\"420\" y2=\"67\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"580\" y1=\"67\" x2=\"600\" y2=\"67\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"740\" y1=\"67\" x2=\"420\" y2=\"200\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"520\" y1=\"230\" x2=\"500\" y2=\"40\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"580\" y1=\"67\" x2=\"160\" y2=\"200\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"750\" y1=\"200\" x2=\"210\" y2=\"67\"/>",
   "parts": {
    "diet": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"170\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Diet 15-20 mg/day",
      "(10% absorbed)"
     ],
     "lx": 105.0,
     "ly": 65.5
    },
    "ent": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"210\" y=\"40\" width=\"190\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Duodenal enterocyte:",
      "DcytB, DMT1 → ferroportin"
     ],
     "lx": 305.0,
     "ly": 65.5
    },
    "tf": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"420\" y=\"40\" width=\"160\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Transferrin",
      "(2 Fe³⁺ each)"
     ],
     "lx": 500.0,
     "ly": 65.5
    },
    "bm": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"600\" y=\"40\" width=\"140\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Marrow: TfR1 →",
      "haemoglobin"
     ],
     "lx": 670.0,
     "ly": 65.5
    },
    "mac": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"420\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Macrophages recycle",
      "iron from old RBCs"
     ],
     "lx": 520.0,
     "ly": 198.0
    },
    "store": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"160\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Stores: ferritin,",
      "haemosiderin (liver, spleen)"
     ],
     "lx": 270.0,
     "ly": 198.0
    },
    "hep": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9ecec\" x=\"620\" y=\"170\" width=\"130\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Hepcidin (liver)",
      "blocks ferroportin"
     ],
     "lx": 685.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "diet": [
     {
      "t": [
       20.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "ent": [
     {
      "t": [
       210.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "tf": [
     {
      "t": [
       420.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "bm": [
     {
      "t": [
       600.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "mac": [
     {
      "t": [
       420.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "store": [
     {
      "t": [
       160.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "hep": [
     {
      "t": [
       620.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ]
   }
  }
 },
 "mcqs": [
  {
   "q": "Total body iron in an adult is about:",
   "options": [
    "100 mg",
    "400 mg",
    "40 g",
    "4-5 g"
   ],
   "answer": 3,
   "why": "Stable amount."
  },
  {
   "q": "Most body iron is found in:",
   "options": [
    "Haemoglobin",
    "Myoglobin",
    "Ferritin",
    "Transferrin"
   ],
   "answer": 0,
   "why": "60-75%."
  },
  {
   "q": "How much iron is absorbed per day from a normal diet?",
   "options": [
    "50 mg",
    "1-2 mg",
    "0.01 mg",
    "15-20 mg"
   ],
   "answer": 1,
   "why": "About 10% of intake."
  },
  {
   "q": "Which dietary iron is best absorbed?",
   "options": [
    "Haem iron (Fe²⁺)",
    "Iron in spinach",
    "Non-haem Fe³⁺",
    "Iron in breast milk only"
   ],
   "answer": 0,
   "why": "About 20%."
  },
  {
   "q": "Absorption of non-haem iron is increased by:",
   "options": [
    "Tea",
    "Tannins",
    "Vitamin C",
    "Calcium"
   ],
   "answer": 2,
   "why": "Tannins reduce it."
  },
  {
   "q": "Iron is absorbed mainly in the:",
   "options": [
    "Ileum",
    "Duodenum",
    "Stomach",
    "Colon"
   ],
   "answer": 1,
   "why": "And proximal jejunum."
  },
  {
   "q": "Which transporter imports iron into the enterocyte?",
   "options": [
    "Transferrin",
    "DMT1",
    "Ferroportin",
    "TfR1"
   ],
   "answer": 1,
   "why": "After reduction by DcytB."
  },
  {
   "q": "Iron leaves the enterocyte through:",
   "options": [
    "Ferritin",
    "Hepcidin",
    "Ferroportin",
    "DMT1"
   ],
   "answer": 2,
   "why": "Main regulation point."
  },
  {
   "q": "Transferrin binds iron in the form:",
   "options": [
    "Ferritin",
    "Fe³⁺",
    "Fe²⁺",
    "Haem"
   ],
   "answer": 1,
   "why": "Two per molecule."
  },
  {
   "q": "Hepcidin acts by:",
   "options": [
    "Binding transferrin",
    "Making haem",
    "Degrading ferroportin",
    "Increasing absorption"
   ],
   "answer": 2,
   "why": "Reduces iron entry to blood."
  },
  {
   "q": "Hepcidin levels rise in:",
   "options": [
    "Iron deficiency",
    "Blood loss",
    "Pregnancy",
    "Inflammation and iron excess"
   ],
   "answer": 3,
   "why": "Anaemia of inflammation."
  },
  {
   "q": "The best laboratory marker of iron stores is:",
   "options": [
    "MCV",
    "Serum iron",
    "Haemoglobin",
    "Serum ferritin"
   ],
   "answer": 3,
   "why": "But rises in inflammation."
  },
  {
   "q": "Which stain detects marrow iron?",
   "options": [
    "Perls",
    "Gram",
    "May-Grünwald-Giemsa",
    "Ziehl-Neelsen"
   ],
   "answer": 0,
   "why": "Prussian blue."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "diet",
   "options": [
    "Dietary iron",
    "Erythroid use",
    "Absorption",
    "Transferrin"
   ],
   "answer": 0,
   "why": "The arrow points to: Dietary iron. Haem iron (meat, Fe²⁺, ~20% absorbed) and non-haem iron (vegetables, Fe³⁺, 1-4% absorbed)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ent",
   "options": [
    "Dietary iron",
    "Erythroid use",
    "Recycling",
    "Absorption"
   ],
   "answer": 3,
   "why": "The arrow points to: Absorption. In the duodenum and proximal jejunum: Fe³⁺ reduced by DcytB, taken up by DMT1; exported by ferroportin and oxidised by hephaestin."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "tf",
   "options": [
    "Hepcidin",
    "Erythroid use",
    "Transferrin",
    "Absorption"
   ],
   "answer": 2,
   "why": "The arrow points to: Transferrin. Liver-made plasma carrier; each molecule binds two Fe³⁺."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "bm",
   "options": [
    "Recycling",
    "Erythroid use",
    "Transferrin",
    "Storage"
   ],
   "answer": 1,
   "why": "The arrow points to: Erythroid use. Transferrin receptor 1 on erythroid precursors takes up iron for haemoglobin."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "mac",
   "options": [
    "Recycling",
    "Dietary iron",
    "Erythroid use",
    "Transferrin"
   ],
   "answer": 0,
   "why": "The arrow points to: Recycling. Macrophages degrade old red cells and return iron to transferrin: the main daily source of plasma iron."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "store",
   "options": [
    "Dietary iron",
    "Recycling",
    "Storage",
    "Absorption"
   ],
   "answer": 2,
   "why": "The arrow points to: Storage. Ferritin (soluble, mobilisable) and haemosiderin (insoluble), mainly in liver, spleen and marrow."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "hep",
   "options": [
    "Hepcidin",
    "Erythroid use",
    "Absorption",
    "Storage"
   ],
   "answer": 0,
   "why": "The arrow points to: Hepcidin. Liver hormone that degrades ferroportin, reducing absorption and release; rises with iron excess and inflammation."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Why iron balance is regulated at absorption?",
   "back": "The body cannot produce or actively excrete iron: 4-5 g total in a nearly closed system."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Iron compartments?",
   "back": "Functional: Hb 60-75%, myoglobin, enzymes. Storage: ferritin, haemosiderin. Transport: transferrin 0.1%."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Daily iron balance?",
   "back": "Diet 15-20 mg; ~10% (1-2 mg) absorbed; 1-2 mg lost."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Haem vs non-haem iron?",
   "back": "Haem: Fe²⁺, meat, ~20% absorbed. Non-haem: Fe³⁺, plants, 1-4%; ↑ vitamin C, ↓ tannins."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Steps of iron absorption?",
   "back": "Duodenum: DcytB reduces Fe³⁺, DMT1 imports; ferroportin exports; hephaestin oxidises; transferrin binds."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Transferrin and TfR1?",
   "back": "Transferrin (liver) carries 2 Fe³⁺; TfR1 on cells (especially erythroid) takes it up; both recycled."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Role of hepcidin?",
   "back": "Liver hormone degrading ferroportin; ↑ in overload/inflammation, ↓ in deficiency and active erythropoiesis."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Laboratory iron tests?",
   "back": "Serum iron, transferrin/TIBC, transferrin saturation, ferritin (stores), Perls stain."
  },
  {
   "id": "img-diet",
   "type": "image",
   "target": "diet",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Dietary iron. Haem iron (meat, Fe²⁺, ~20% absorbed) and non-haem iron (vegetables, Fe³⁺, 1-4% absorbed)."
  },
  {
   "id": "img-ent",
   "type": "image",
   "target": "ent",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Absorption. In the duodenum and proximal jejunum: Fe³⁺ reduced by DcytB, taken up by DMT1; exported by ferroportin and oxidised by hephaestin."
  },
  {
   "id": "img-tf",
   "type": "image",
   "target": "tf",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Transferrin. Liver-made plasma carrier; each molecule binds two Fe³⁺."
  },
  {
   "id": "img-bm",
   "type": "image",
   "target": "bm",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Erythroid use. Transferrin receptor 1 on erythroid precursors takes up iron for haemoglobin."
  },
  {
   "id": "img-mac",
   "type": "image",
   "target": "mac",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Recycling. Macrophages degrade old red cells and return iron to transferrin: the main daily source of plasma iron."
  },
  {
   "id": "img-store",
   "type": "image",
   "target": "store",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Storage. Ferritin (soluble, mobilisable) and haemosiderin (insoluble), mainly in liver, spleen and marrow."
  },
  {
   "id": "img-hep",
   "type": "image",
   "target": "hep",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Hepcidin. Liver hormone that degrades ferroportin, reducing absorption and release; rises with iron excess and inflammation."
  }
 ],
 "deeper": [
  {
   "title": "Why chronic inflammation causes anaemia despite normal iron stores",
   "html": "<p>Inflammatory cytokines such as IL-6 make the liver produce more hepcidin. Hepcidin destroys ferroportin, so enterocytes stop releasing absorbed iron and macrophages keep the iron they recycle. Iron is locked in stores (ferritin normal or high) while the marrow is starved (low serum iron), producing the anaemia of chronic disease, a defence that deprives microbes of iron.</p><p class='src'>Source: the lecture's regulation of iron metabolism.</p>"
  }
 ],
 "resources": [
  {
   "title": "Iron (NIH Office of Dietary Supplements)",
   "url": "https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/",
   "kind": "Website",
   "why": "Absorption, requirements and sources.",
   "note": ""
  },
  {
   "title": "Hemochromatosis (NIDDK)",
   "url": "https://www.niddk.nih.gov/health-information/liver-disease/hemochromatosis",
   "kind": "Website",
   "why": "Iron overload.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Iron (NIH Office of Dietary Supplements)",
   "url": "https://ods.od.nih.gov/factsheets/Iron-HealthProfessional/"
  },
  {
   "name": "Hemochromatosis (NIDDK)",
   "url": "https://www.niddk.nih.gov/health-information/liver-disease/hemochromatosis"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["hemato1-b9-b12"] = {
 "id": "hemato1-b9-b12",
 "subject": "hemato1",
 "group": "Blood cells and haematopoiesis",
 "title": "Vitamin B9 and B12 metabolism",
 "sourceFile": "B9 and B12 metabolisms (Hematology, Pr. A. Madani)",
 "sourceUrl": "https://drive.google.com/file/d/1kfL62Pks9wJS9WMKximRdSL_vI-4k15X/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p><strong>Folic acid (vitamin B9)</strong> and <strong>cobalamin (vitamin B12)</strong> are essential for <strong>DNA synthesis</strong> (not RNA), so their deficiency hits rapidly dividing tissues first, especially the bone marrow. Nuclear maturation is delayed while cytoplasmic maturation continues: <strong>nucleo-cytoplasmic asynchrony</strong>, producing large <strong>megaloblasts</strong> in the marrow and <strong>macrocytic (megaloblastic) anaemia</strong>, often with giant metamyelocytes and hypersegmented neutrophils. Folate also takes part in methionine and glycine synthesis and supports haematopoiesis, nervous and immune function.</p>"
  },
  {
   "id": "s1",
   "title": "Vitamin B9 (folate)",
   "html": "<p>Structure: a <strong>pteridine ring</strong>, <strong>para-aminobenzoic acid</strong> and one or more <strong>glutamate</strong> residues; folate transfers one-carbon (methyl) groups. <strong>Sources</strong>: leafy vegetables (spinach, cauliflower) and liver; folates are <strong>destroyed by heat</strong>. <strong>Needs</strong>: about <strong>330 µg/day</strong> in adults, <strong>440 µg/day in pregnancy</strong> (supplementation prevents neural tube defects). <strong>Absorption</strong> in the <strong>duodenum and jejunum</strong>, impaired by coeliac disease and sprue. It circulates as <strong>5-methyl-THF</strong> (inactive) and is stored in the <strong>liver</strong> (a few milligrams, lasting only months). In cells, B12-dependent <strong>methionine synthase</strong> converts 5-methyl-THF to THF (turning homocysteine into methionine); THF becomes <strong>5,10-methylene-THF</strong>, used by <strong>thymidylate synthase</strong> to make dTMP from dUMP for DNA. <strong>Causes of deficiency</strong>: poor intake, increased needs (pregnancy, haemolysis), malabsorption, drugs (e.g. methotrexate, which blocks dihydrofolate reductase), dialysis losses.</p>"
  },
  {
   "id": "s2",
   "title": "Vitamin B12 (cobalamin)",
   "html": "<p>A <strong>tetrapyrrole (corrin) ring around a cobalt atom</strong>; forms include methylcobalamin, adenosylcobalamin, hydroxocobalamin and cyanocobalamin. Found only in <strong>animal foods</strong> (meat, liver, eggs, dairy). In the stomach it binds <strong>intrinsic factor</strong>, secreted by <strong>parietal cells</strong>, and the complex is absorbed in the <strong>terminal ileum</strong>; in blood it is carried by <strong>transcobalamin</strong>. The <strong>liver stores several milligrams</strong>, enough for years, so deficiency develops slowly. It is a cofactor of methionine synthase (DNA synthesis) and of myelin metabolism, so deficiency causes <strong>megaloblastic anaemia</strong> and <strong>neurological damage</strong> (subacute combined degeneration of the cord). <strong>Causes</strong>: <strong>pernicious anaemia</strong> (autoimmune loss of intrinsic factor), gastrectomy, ileal resection or disease, strict vegan diet. <strong>Exploration</strong>: blood count (macrocytosis), blood film, serum B12 and folate, and marrow when needed. Folate alone must not be given to a B12-deficient patient, since it can correct the anaemia while nerve damage worsens.</p>"
  }
 ],
 "exam": [
  "B9 and B12: needed for DNA (not RNA) synthesis.",
  "Deficiency: nucleo-cytoplasmic asynchrony → megaloblasts, macrocytic anaemia.",
  "Folate: pteridine + PABA + glutamate; one-carbon transfer.",
  "Folate sources: leafy vegetables, liver; heat-labile.",
  "Needs 330 µg/day; 440 µg/day in pregnancy (neural tube defects).",
  "Folate absorbed in duodenum/jejunum; circulates as 5-methyl-THF.",
  "Methionine synthase (B12) frees THF → 5,10-methylene-THF → thymidylate synthase.",
  "B12: cobalt corrin ring; only in animal foods.",
  "Intrinsic factor (parietal cells) → terminal ileum absorption; transcobalamin.",
  "B12 liver stores last years; deficiency → anaemia + neurological damage.",
  "Causes: pernicious anaemia, gastrectomy, ileal disease, vegan diet."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Folate and B12 in DNA synthesis",
   "caption": "Both are needed to make thymidine. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"200\" y1=\"67\" x2=\"230\" y2=\"67\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"410\" y1=\"67\" x2=\"440\" y2=\"67\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"320\" y1=\"95\" x2=\"320\" y2=\"150\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"580\" y1=\"95\" x2=\"580\" y2=\"150\"/>",
   "parts": {
    "mthf": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"180\" height=\"55\" rx=\"10\"/>",
     "label": [
      "5-methyl-THF",
      "(circulating folate)"
     ],
     "lx": 110.0,
     "ly": 65.5
    },
    "ms": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"230\" y=\"40\" width=\"180\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Methionine synthase",
      "(needs B12)"
     ],
     "lx": 320.0,
     "ly": 65.5
    },
    "thf": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"440\" y=\"40\" width=\"280\" height=\"55\" rx=\"10\"/>",
     "label": [
      "THF → 5,10-methylene-THF"
     ],
     "lx": 580.0,
     "ly": 73.5
    },
    "hcy": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"230\" y=\"150\" width=\"180\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Homocysteine → methionine"
     ],
     "lx": 320.0,
     "ly": 183.5
    },
    "ts": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"440\" y=\"150\" width=\"280\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Thymidylate synthase:",
      "dUMP → dTMP → DNA"
     ],
     "lx": 580.0,
     "ly": 175.5
    }
   },
   "arrows": {
    "mthf": [
     {
      "t": [
       20.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "ms": [
     {
      "t": [
       230.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "thf": [
     {
      "t": [
       440.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "hcy": [
     {
      "t": [
       230.0,
       158.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "ts": [
     {
      "t": [
       440.0,
       158.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ]
   }
  }
 },
 "mcqs": [
  {
   "q": "B9 and B12 are essential for the synthesis of:",
   "options": [
    "Lipids",
    "RNA",
    "Proteins",
    "DNA"
   ],
   "answer": 3,
   "why": "Not RNA."
  },
  {
   "q": "Deficiency causes which type of anaemia?",
   "options": [
    "Megaloblastic",
    "Aplastic",
    "Haemolytic",
    "Microcytic"
   ],
   "answer": 0,
   "why": "Nucleo-cytoplasmic asynchrony."
  },
  {
   "q": "The main dietary sources of folate are:",
   "options": [
    "Meat only",
    "Milk only",
    "Sugar",
    "Leafy greens, liver"
   ],
   "answer": 3,
   "why": "Heat-labile."
  },
  {
   "q": "Daily folate needs in pregnancy are about:",
   "options": [
    "100 µg",
    "440 µg",
    "1 g",
    "5 mg"
   ],
   "answer": 1,
   "why": "Adults 330 µg."
  },
  {
   "q": "Folate supplementation in pregnancy prevents:",
   "options": [
    "Preterm birth only",
    "Neural tube defects",
    "Diabetes",
    "Anaemia only"
   ],
   "answer": 1,
   "why": "Spina bifida."
  },
  {
   "q": "Folate is absorbed mainly in the:",
   "options": [
    "Stomach",
    "Colon",
    "Duodenum and jejunum",
    "Terminal ileum"
   ],
   "answer": 2,
   "why": "B12 in the terminal ileum."
  },
  {
   "q": "Folate circulates in plasma as:",
   "options": [
    "THF",
    "5-methyl-THF",
    "dTMP",
    "Folic acid"
   ],
   "answer": 1,
   "why": "Inactive form."
  },
  {
   "q": "Which enzyme needs vitamin B12?",
   "options": [
    "Methionine synthase",
    "G6PD",
    "Thymidylate synthase",
    "Dihydrofolate reductase"
   ],
   "answer": 0,
   "why": "Converts homocysteine to methionine."
  },
  {
   "q": "Vitamin B12 contains which metal?",
   "options": [
    "Zinc",
    "Cobalt",
    "Copper",
    "Iron"
   ],
   "answer": 1,
   "why": "Corrin ring."
  },
  {
   "q": "Intrinsic factor is secreted by:",
   "options": [
    "Parietal cells",
    "Goblet cells",
    "Hepatocytes",
    "Chief cells"
   ],
   "answer": 0,
   "why": "Needed for B12 absorption."
  },
  {
   "q": "B12 is absorbed in the:",
   "options": [
    "Colon",
    "Duodenum",
    "Jejunum",
    "Terminal ileum"
   ],
   "answer": 3,
   "why": "Bound to intrinsic factor."
  },
  {
   "q": "Why does B12 deficiency take years to develop?",
   "options": [
    "Small needs and large liver stores",
    "It is made by the body",
    "Kidney stores",
    "Fast absorption"
   ],
   "answer": 0,
   "why": "Stores last years."
  },
  {
   "q": "Pernicious anaemia is caused by:",
   "options": [
    "Iron loss",
    "Loss of intrinsic factor",
    "Vegan diet only",
    "Folate excess"
   ],
   "answer": 1,
   "why": "Anti-IF / anti-parietal cell."
  },
  {
   "q": "Which feature distinguishes B12 from folate deficiency?",
   "options": [
    "Macrocytosis",
    "Hypersegmented neutrophils",
    "Megaloblasts",
    "Neurological damage"
   ],
   "answer": 3,
   "why": "Subacute combined degeneration."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "mthf",
   "options": [
    "5-methyltetrahydrofolate",
    "Methionine synthase",
    "Tetrahydrofolate",
    "Homocysteine"
   ],
   "answer": 0,
   "why": "The arrow points to: 5-methyltetrahydrofolate. Inactive transport form of folate in plasma; must be demethylated to join DNA synthesis."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ms",
   "options": [
    "5-methyltetrahydrofolate",
    "Thymidylate synthase",
    "Methionine synthase",
    "Homocysteine"
   ],
   "answer": 2,
   "why": "The arrow points to: Methionine synthase. Uses vitamin B12 to transfer the methyl group from 5-methyl-THF to homocysteine."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "thf",
   "options": [
    "5-methyltetrahydrofolate",
    "Methionine synthase",
    "Tetrahydrofolate",
    "Thymidylate synthase"
   ],
   "answer": 2,
   "why": "The arrow points to: Tetrahydrofolate. Active folate, converted to 5,10-methylene-THF, the one-carbon donor for thymidine."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "hcy",
   "options": [
    "Methionine synthase",
    "Tetrahydrofolate",
    "5-methyltetrahydrofolate",
    "Homocysteine"
   ],
   "answer": 3,
   "why": "The arrow points to: Homocysteine. Accumulates when B12 or folate is lacking."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ts",
   "options": [
    "Tetrahydrofolate",
    "Homocysteine",
    "Thymidylate synthase",
    "Methionine synthase"
   ],
   "answer": 2,
   "why": "The arrow points to: Thymidylate synthase. Converts dUMP to dTMP for DNA; without it nuclei mature slowly while cytoplasm matures normally (megaloblastosis)."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Common role of B9 and B12?",
   "back": "DNA synthesis; deficiency causes nucleo-cytoplasmic asynchrony and megaloblastic anaemia."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Folate structure and sources?",
   "back": "Pteridine + PABA + glutamate; leafy vegetables and liver; destroyed by heat."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Folate needs, absorption and storage?",
   "back": "330 µg/day (440 in pregnancy); duodenum/jejunum; circulates as 5-methyl-THF; liver stores last months."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Link between B12 and folate?",
   "back": "Methionine synthase (B12) converts 5-methyl-THF to THF and homocysteine to methionine; THF → 5,10-methylene-THF for thymidylate synthase."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "B12 structure and sources?",
   "back": "Corrin ring with cobalt; animal foods only."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "B12 absorption and transport?",
   "back": "Binds intrinsic factor (parietal cells), absorbed in terminal ileum, carried by transcobalamin; liver stores last years."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Causes of B12 deficiency?",
   "back": "Pernicious anaemia, gastrectomy, ileal resection/disease, vegan diet."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Why not give folate alone in B12 deficiency?",
   "back": "It corrects the anaemia but not the neurological damage, which can progress."
  },
  {
   "id": "img-mthf",
   "type": "image",
   "target": "mthf",
   "front": "What is at the arrow, and why does it matter?",
   "back": "5-methyltetrahydrofolate. Inactive transport form of folate in plasma; must be demethylated to join DNA synthesis."
  },
  {
   "id": "img-ms",
   "type": "image",
   "target": "ms",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Methionine synthase. Uses vitamin B12 to transfer the methyl group from 5-methyl-THF to homocysteine."
  },
  {
   "id": "img-thf",
   "type": "image",
   "target": "thf",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Tetrahydrofolate. Active folate, converted to 5,10-methylene-THF, the one-carbon donor for thymidine."
  },
  {
   "id": "img-hcy",
   "type": "image",
   "target": "hcy",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Homocysteine. Accumulates when B12 or folate is lacking."
  },
  {
   "id": "img-ts",
   "type": "image",
   "target": "ts",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Thymidylate synthase. Converts dUMP to dTMP for DNA; without it nuclei mature slowly while cytoplasm matures normally (megaloblastosis)."
  }
 ],
 "deeper": [
  {
   "title": "Why a gastrectomy leads to B12 deficiency years later",
   "html": "<p>After removal of the stomach, parietal cells no longer secrete intrinsic factor, so dietary B12 cannot be absorbed in the ileum. Because the liver holds enough B12 for several years, blood counts stay normal for a long time before macrocytic anaemia and nerve damage appear. Patients therefore receive lifelong B12 injections, bypassing the gut.</p><p class='src'>Source: the lecture's B12 metabolism and causes of deficiency.</p>"
  }
 ],
 "resources": [
  {
   "title": "Vitamin B12 (NIH Office of Dietary Supplements)",
   "url": "https://ods.od.nih.gov/factsheets/VitaminB12-HealthProfessional/",
   "kind": "Website",
   "why": "Absorption, deficiency and sources.",
   "note": ""
  },
  {
   "title": "Folate (NIH Office of Dietary Supplements)",
   "url": "https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/",
   "kind": "Website",
   "why": "Requirements and neural tube defects.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Vitamin B12 (NIH Office of Dietary Supplements)",
   "url": "https://ods.od.nih.gov/factsheets/VitaminB12-HealthProfessional/"
  },
  {
   "name": "Folate (NIH Office of Dietary Supplements)",
   "url": "https://ods.od.nih.gov/factsheets/Folate-HealthProfessional/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["hemato1-cbc"] = {
 "id": "hemato1-cbc",
 "subject": "hemato1",
 "group": "Blood cells and haematopoiesis",
 "title": "The complete blood count",
 "sourceFile": "Complete blood count (2025-26) (Hematology, Pr. N. Khoubila)",
 "sourceUrl": "https://drive.google.com/file/d/1XIbL4YPV8-8zTuDAQX8P1VIP5Rt5qsPB/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>The <strong>complete blood count (CBC)</strong> quantifies red cells, white cells and platelets, with the haematocrit, red cell indices and white cell differential. It is the <strong>most prescribed laboratory test</strong>: simple, cheap, automated and standardised; its main goal is to assess <strong>haematopoiesis</strong>, and it is always interpreted in the clinical context against normal values. <strong>Indications</strong>: infectious, anaemic, haemorrhagic and tumoral syndromes, thrombosis, pregnancy, check-ups, before surgery, follow-up. <strong>Pre-analytical phase</strong>: venous blood in a <strong>lavender (EDTA) tube</strong>, well mixed, 3-10 mL; clotted samples or those older than 48 hours are rejected. Analysers count thousands of cells by electrical impedance or laser light scatter and raise alarms. A <strong>blood smear</strong> stained with <strong>May-Grünwald-Giemsa</strong> is mandatory when an abnormality is flagged (blasts, abnormal cells, platelet clumps).</p>"
  },
  {
   "id": "s1",
   "title": "Red cell parameters",
   "html": "<p><strong>RBC count</strong> (million/mm³): men 5-5.5, women 4-4.5, children 4-5.3, newborns 4.5-7. <strong>Haemoglobin</strong> (g/dL): men 13-16.5, women 12-16, children 11.5-15, newborns 14-20; <strong>anaemia</strong> Hb &lt; 13 in men; polycythaemia &gt; 16.5 in men. <strong>Haematocrit</strong>: men 40-50%, women 35-45%, newborns 50-60%. <strong>MCV</strong> = Hct/RBC: <strong>80-98 fL</strong> normal; &lt; 80 microcytic; &gt; 100 macrocytic; &gt; 120 suggests megaloblastic anaemia. <strong>MCH</strong> 27-32 pg and <strong>MCHC</strong> 32-36 g/dL: below these values = <strong>hypochromia</strong>. <strong>RDW</strong> 11.5-14.5%: &gt; 15% = <strong>anisocytosis</strong> (iron, B12, folate deficiency). <strong>Reticulocytes</strong> reflect marrow output. Smear: normal red cells are uniform biconcave discs about 7.2 µm with a pale centre; abnormalities are <strong>anisocytosis</strong> (size) and <strong>poikilocytosis</strong> (shape: spherocytes, target cells, sickle cells, schistocytes). Physiological variation: higher Hb and macrocytosis in newborns; Hb falls until about 5 years; sex differences from 12 years; Hb 0.8-1 g/dL lower in Black people; <strong>pregnancy</strong> (haemodilution; Hb down to 11 g/dL accepted); alcohol raises MCV.</p>"
  },
  {
   "id": "s2",
   "title": "White cells and platelets",
   "html": "<p><strong>WBC</strong>: <strong>4-10 G/L</strong>; &gt; 10 hyperleukocytosis, &lt; 4 leukopenia. The differential is given in % but must be interpreted in <strong>absolute values</strong> (% × total). <strong>Neutrophils</strong> 1.8-7 G/L: &lt; 1.5 neutropenia, <strong>&lt; 0.5 agranulocytosis</strong>, &gt; 7 neutrophilia. <strong>Eosinophils</strong> &lt; 0.4 G/L; <strong>basophils</strong> &lt; 0.1 G/L. <strong>Monocytes</strong> 0.2-0.8 G/L (&gt; 1 monocytosis). <strong>Lymphocytes</strong> 1.5-4 G/L. Physiological variation: higher counts in young children, lower neutrophils (about 1.2 G/L) in some African people and perimenopausal women, neutrophilia in pregnancy (9-15 G/L at 30-34 weeks), smoking and exercise. <strong>Platelets</strong>: <strong>150-400 G/L</strong>; &lt; 150 thrombocytopenia, &gt; 400 thrombocytosis; check the smear for clumps (false low counts); slight fall in pregnancy, rise at altitude.</p>"
  }
 ],
 "exam": [
  "CBC: most prescribed test; assesses haematopoiesis.",
  "EDTA (lavender) tube; reject clotted or > 48 h samples.",
  "Smear (MGG) mandatory if an abnormality is flagged.",
  "Hb: men 13-16.5, women 12-16 g/dL; Hct 40-50% / 35-45%.",
  "MCV 80-98 fL: < 80 micro, > 100 macro, > 120 megaloblastic.",
  "MCH 27-32 pg, MCHC 32-36 g/dL: lower = hypochromia.",
  "RDW > 15% = anisocytosis.",
  "WBC 4-10 G/L; interpret differential in absolute values.",
  "Neutrophils 1.8-7: < 1.5 neutropenia, < 0.5 agranulocytosis.",
  "Lymphocytes 1.5-4; monocytes 0.2-0.8; eosinophils < 0.4; basophils < 0.1 G/L.",
  "Platelets 150-400 G/L."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Reading a blood count",
   "caption": "Key adult reference values. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs>",
   "parts": {
    "rbc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"340\" height=\"60\" rx=\"10\"/>",
     "label": [
      "RBC: Hb men 13-16.5, women 12-16 g/dL;",
      "Hct 40-50% / 35-45%"
     ],
     "lx": 190.0,
     "ly": 68.0
    },
    "idx": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"400\" y=\"40\" width=\"340\" height=\"60\" rx=\"10\"/>",
     "label": [
      "MCV 80-98 fL; MCH 27-32 pg;",
      "MCHC 32-36 g/dL; RDW 11.5-14.5%"
     ],
     "lx": 570.0,
     "ly": 68.0
    },
    "wbc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"20\" y=\"170\" width=\"340\" height=\"60\" rx=\"10\"/>",
     "label": [
      "WBC 4-10 G/L; neutrophils 1.8-7;",
      "lymphocytes 1.5-4; monocytes 0.2-0.8"
     ],
     "lx": 190.0,
     "ly": 198.0
    },
    "plt": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"400\" y=\"170\" width=\"340\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Platelets 150-400 G/L; eosinophils",
      "< 0.4; basophils < 0.1 G/L"
     ],
     "lx": 570.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "rbc": [
     {
      "t": [
       20.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "idx": [
     {
      "t": [
       400.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "wbc": [
     {
      "t": [
       20.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "plt": [
     {
      "t": [
       400.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ]
   }
  }
 },
 "mcqs": [
  {
   "q": "A CBC sample is collected in a tube containing:",
   "options": [
    "No anticoagulant",
    "Citrate",
    "EDTA",
    "Heparin"
   ],
   "answer": 2,
   "why": "Lavender top."
  },
  {
   "q": "A CBC sample is rejected if it is:",
   "options": [
    "Clotted or > 48 h",
    "Well mixed",
    "3 mL",
    "In EDTA"
   ],
   "answer": 0,
   "why": "Pre-analytical rules."
  },
  {
   "q": "When is a blood smear mandatory?",
   "options": [
    "Only in children",
    "When flagged",
    "Never",
    "Only for platelets"
   ],
   "answer": 1,
   "why": "MGG stain."
  },
  {
   "q": "Anaemia in an adult man is Hb below:",
   "options": [
    "13 g/dL",
    "11 g/dL",
    "15 g/dL",
    "12 g/dL"
   ],
   "answer": 0,
   "why": "Women: 12 g/dL."
  },
  {
   "q": "The normal MCV is:",
   "options": [
    "100-120 fL",
    "150 fL",
    "80-98 fL",
    "60-70 fL"
   ],
   "answer": 2,
   "why": "Mean corpuscular volume."
  },
  {
   "q": "An MCV above 120 fL suggests:",
   "options": [
    "Thalassaemia",
    "Iron deficiency",
    "Normal",
    "Megaloblastic anaemia"
   ],
   "answer": 3,
   "why": "B12/folate."
  },
  {
   "q": "Hypochromia is defined by an MCHC below:",
   "options": [
    "32 g/dL",
    "40 g/dL",
    "36 g/dL",
    "27 g/dL"
   ],
   "answer": 0,
   "why": "MCH < 27 pg."
  },
  {
   "q": "An RDW above 15% indicates:",
   "options": [
    "Hypochromia",
    "Poikilocytosis",
    "Macrocytosis only",
    "Anisocytosis"
   ],
   "answer": 3,
   "why": "Variable size."
  },
  {
   "q": "Variation in red cell shape is called:",
   "options": [
    "Hypochromia",
    "Poikilocytosis",
    "Polycythaemia",
    "Anisocytosis"
   ],
   "answer": 1,
   "why": "E.g. sickle cells."
  },
  {
   "q": "The normal WBC count is:",
   "options": [
    "150-400 G/L",
    "1-3 G/L",
    "15-20 G/L",
    "4-10 G/L"
   ],
   "answer": 3,
   "why": "Leukopenia < 4."
  },
  {
   "q": "Agranulocytosis is a neutrophil count below:",
   "options": [
    "1.5 G/L",
    "4 G/L",
    "0.5 G/L",
    "1.8 G/L"
   ],
   "answer": 2,
   "why": "Neutropenia < 1.5."
  },
  {
   "q": "The white cell differential should be interpreted as:",
   "options": [
    "Percentages only",
    "Absolute values",
    "Hb-adjusted",
    "Ratios to platelets"
   ],
   "answer": 1,
   "why": "% × total count."
  },
  {
   "q": "Eosinophilia is defined as eosinophils above:",
   "options": [
    "1 G/L",
    "0.4 G/L",
    "0.1 G/L",
    "4 G/L"
   ],
   "answer": 1,
   "why": "Basophilia > 0.1."
  },
  {
   "q": "The normal platelet count is:",
   "options": [
    "400-800 G/L",
    "50-100 G/L",
    "4-10 G/L",
    "150-400 G/L"
   ],
   "answer": 3,
   "why": "Thrombocytopenia < 150."
  },
  {
   "q": "During pregnancy, the accepted lower Hb limit is about:",
   "options": [
    "9 g/dL",
    "15 g/dL",
    "11 g/dL",
    "13 g/dL"
   ],
   "answer": 2,
   "why": "Haemodilution."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "rbc",
   "options": [
    "White cells",
    "Red cell values",
    "Red cell indices",
    "Platelets and rare white cells"
   ],
   "answer": 1,
   "why": "The arrow points to: Red cell values. RBC count, haemoglobin and haematocrit quantify red cells; anaemia is Hb < 13 in men and < 12 in women."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "idx",
   "options": [
    "White cells",
    "Platelets and rare white cells",
    "Red cell indices",
    "Red cell values"
   ],
   "answer": 2,
   "why": "The arrow points to: Red cell indices. MCV classifies anaemia (micro, normo, macrocytic); MCH and MCHC assess colour; RDW measures size variation (anisocytosis)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "wbc",
   "options": [
    "White cells",
    "Platelets and rare white cells",
    "Red cell indices",
    "Red cell values"
   ],
   "answer": 0,
   "why": "The arrow points to: White cells. Total count and differential, always interpreted in absolute values."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "plt",
   "options": [
    "Platelets and rare white cells",
    "White cells",
    "Red cell values",
    "Red cell indices"
   ],
   "answer": 0,
   "why": "The arrow points to: Platelets and rare white cells. Thrombocytopenia < 150, thrombocytosis > 400 G/L; eosinophilia > 0.4 and basophilia > 0.1 G/L."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "What is a CBC and why is it done?",
   "back": "Quantitative and qualitative count of red cells, white cells and platelets; assesses haematopoiesis; indications: infection, anaemia, bleeding, tumour, thrombosis, pregnancy, surgery."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Pre-analytical rules?",
   "back": "Venous blood in EDTA (lavender) tube, mixed; reject clotted or > 48 h samples."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Red cell reference values?",
   "back": "Hb men 13-16.5, women 12-16 g/dL; Hct 40-50% / 35-45%; RBC men 5-5.5, women 4-4.5 million/mm³."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Red cell indices?",
   "back": "MCV 80-98 fL (< 80 micro, > 100 macro); MCH 27-32 pg; MCHC 32-36 g/dL; RDW 11.5-14.5% (> 15 anisocytosis)."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Smear red cell abnormalities?",
   "back": "Anisocytosis (size), poikilocytosis (shape: spherocytes, target cells, sickle cells, schistocytes), hypochromia."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "White cell reference values?",
   "back": "WBC 4-10; neutrophils 1.8-7; lymphocytes 1.5-4; monocytes 0.2-0.8; eosinophils < 0.4; basophils < 0.1 G/L."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Neutropenia thresholds?",
   "back": "< 1.5 G/L neutropenia; < 0.5 G/L agranulocytosis."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Platelets and physiological variations?",
   "back": "150-400 G/L; pregnancy lowers Hb (≥ 11 accepted) and raises neutrophils; newborns have high Hb and MCV; smoking raises neutrophils."
  },
  {
   "id": "img-rbc",
   "type": "image",
   "target": "rbc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Red cell values. RBC count, haemoglobin and haematocrit quantify red cells; anaemia is Hb < 13 in men and < 12 in women."
  },
  {
   "id": "img-idx",
   "type": "image",
   "target": "idx",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Red cell indices. MCV classifies anaemia (micro, normo, macrocytic); MCH and MCHC assess colour; RDW measures size variation (anisocytosis)."
  },
  {
   "id": "img-wbc",
   "type": "image",
   "target": "wbc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "White cells. Total count and differential, always interpreted in absolute values."
  },
  {
   "id": "img-plt",
   "type": "image",
   "target": "plt",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Platelets and rare white cells. Thrombocytopenia < 150, thrombocytosis > 400 G/L; eosinophilia > 0.4 and basophilia > 0.1 G/L."
  }
 ],
 "deeper": [
  {
   "title": "Why a low platelet count can be false",
   "html": "<p>EDTA occasionally makes platelets clump in the tube. The analyser then counts clumps as one large cell or misses them, reporting thrombocytopenia in a healthy person (pseudothrombocytopenia). The blood smear reveals the clumps, and a repeat count on a citrate tube gives the true value, which is why a smear is required before acting on an unexpected low count.</p><p class='src'>Source: the lecture's platelet smear slide.</p>"
  }
 ],
 "resources": [
  {
   "title": "Complete blood count (MedlinePlus)",
   "url": "https://medlineplus.gov/lab-tests/complete-blood-count-cbc/",
   "kind": "Website",
   "why": "What the CBC measures.",
   "note": ""
  },
  {
   "title": "Red blood cell indices (MedlinePlus)",
   "url": "https://medlineplus.gov/lab-tests/red-blood-cell-indices/",
   "kind": "Website",
   "why": "MCV, MCH, MCHC, RDW.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Complete blood count (MedlinePlus)",
   "url": "https://medlineplus.gov/lab-tests/complete-blood-count-cbc/"
  },
  {
   "name": "Red blood cell indices (MedlinePlus)",
   "url": "https://medlineplus.gov/lab-tests/red-blood-cell-indices/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["hemato1-anaemias"] = {
 "id": "hemato1-anaemias",
 "subject": "hemato1",
 "group": "Blood cells and haematopoiesis",
 "title": "Anaemias",
 "sourceFile": "Anemias (2025-26) (Hematology, Pr. N. Khoubila)",
 "sourceUrl": "https://drive.google.com/file/d/1bDZ3jWwZvUG-STBt7ZpD3LyvYdW0kaQu/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p><strong>Anaemia</strong> is a significant reduction of haemoglobin for age and sex, reducing oxygen delivery. <strong>WHO criteria</strong>: Hb &lt; <strong>13 g/dL in men</strong> and &lt; <strong>12 g/dL in women</strong>. It affects about <strong>one third</strong> of the world's population. At-risk groups: newborns, infants starting solid food (less absorbable iron than breast milk), growing children (delayed motor and learning development), <strong>pregnant women</strong> (prematurity, low birth weight), menstruating women or those with fibroids, the elderly, and people with chronic diseases (anaemia of chronic disease).</p>"
  },
  {
   "id": "s1",
   "title": "Clinical picture and work-up",
   "html": "<p>Symptoms reflect tissue hypoxia: <strong>fatigue</strong> (most noticeable), <strong>dyspnoea</strong>, dizziness, palpitations or arrhythmia, pulsatile tinnitus, headache, chest pain, <strong>pallor</strong> (or jaundice in haemolysis). Diagnosis: <strong>CBC</strong> (Hb, Hct, <strong>MCV</strong>, MCH, MCHC, <strong>RDW</strong>), <strong>reticulocyte count</strong> (marrow response) and <strong>blood smear</strong>; then targeted tests: iron profile and <strong>ferritin</strong>, B12, folate, <strong>LDH, bilirubin, haptoglobin</strong> (haemolysis), <strong>direct antiglobulin (Coombs) test</strong>, haemoglobin electrophoresis, creatinine, TSH, and bone marrow examination if needed. <strong>Morphological (Wintrobe) classification</strong>: <strong>microcytic hypochromic</strong> (MCV &lt; 80: iron deficiency, chronic disease, sideroblastic anaemia, thalassaemia); <strong>normocytic normochromic</strong> (80-100: acute blood loss, chronic disease, hypersplenism, marrow failure, haemolysis); <strong>macrocytic</strong> (&gt; 100: B12 or folate deficiency, haemolysis, chemotherapy, hypothyroidism, myelodysplasia).</p>"
  },
  {
   "id": "s2",
   "title": "Iron deficiency anaemia",
   "html": "<p>The <strong>most common nutritional deficiency</strong> worldwide (about 30% of people), more frequent in children and women. Hypoxia causes dyspnoea, fatigue, palpitations and angina, and reduced gut blood flow can cause GI symptoms; <strong>pica</strong> (compulsive eating of non-food items) is a classic sign. Laboratory: low RBC, Hb and Hct, <strong>low MCV, MCH and MCHC</strong> (microcytic, hypochromic), normal WBC and platelets; <strong>low ferritin</strong> confirms it. Iron deficiency <strong>without</strong> anaemia (absolute or functional) is a diagnosis in its own right. <strong>Treatment</strong>: always <strong>treat the cause</strong>. Oral iron: adults <strong>100-200 mg elemental iron/day</strong> (ferrous sulfate 325 mg ≈ 65 mg elemental iron), or 60-100 mg <strong>every other day</strong> (better absorption and tolerance); children <strong>3-6 mg/kg/day</strong>; on an empty stomach with vitamin C, not with milk, tea, coffee, antacids or PPIs. Continue <strong>2-3 months after Hb normalises</strong> (3-6 months total) to refill stores. Expected response: <strong>reticulocytosis in 5-10 days</strong>, Hb +1-2 g/dL in 2-4 weeks, correction after 6-8 weeks. <strong>IV iron</strong> for intolerance, non-adherence or severe or functional deficiency.</p>"
  },
  {
   "id": "s3",
   "title": "Megaloblastic anaemia",
   "html": "<p>Macrocytic anaemias with <strong>megaloblasts</strong> in the marrow, from impaired DNA synthesis with preserved cytoplasmic maturation (nucleo-cytoplasmic asynchrony), also affecting rapidly renewing tissues like the gut. Mechanism: <strong>ineffective erythropoiesis</strong> (intramedullary apoptosis). Causes: mainly <strong>B12 and folate deficiency</strong>; also copper deficiency and drugs (hydroxyurea, chemotherapy, anticonvulsants, antiretrovirals). <strong>Folate</strong> (green vegetables, fruit, meat, liver; RDA 400 µg, 600 µg in pregnancy; absorbed in the jejunum; liver stores about 5 mg, enough for <strong>3-4 months</strong>): deficiency from alcohol use or malnutrition, pregnancy, haemolysis, dialysis, malabsorption (coeliac disease, tropical sprue, Crohn's disease) or drugs. <strong>B12</strong> (meat, fish, eggs, dairy; binds intrinsic factor, absorbed in the terminal ileum; liver stores 2-3 mg, enough for <strong>2-4 years</strong>): most often <strong>pernicious anaemia</strong> (autoimmune gastric atrophy), also gastrectomy, ileal resection or ileitis, vegan diet.</p>"
  }
 ],
 "exam": [
  "Anaemia (WHO): Hb < 13 g/dL men, < 12 women; ~1/3 of the world.",
  "Symptoms: fatigue, dyspnoea, palpitations, pallor, headache.",
  "Work-up: CBC, reticulocytes, smear; then ferritin, B12, folate, LDH, bilirubin, haptoglobin, Coombs, electrophoresis.",
  "Microcytic < 80 fL: iron deficiency, chronic disease, thalassaemia, sideroblastic.",
  "Normocytic: bleeding, haemolysis, marrow failure, chronic disease.",
  "Macrocytic > 100: B12/folate, hypothyroidism, myelodysplasia, drugs.",
  "IDA: most common deficiency (~30%); low MCV/MCH/MCHC, low ferritin; pica.",
  "Oral iron 100-200 mg/day (or 60-100 mg alternate days); child 3-6 mg/kg.",
  "Continue 2-3 months after Hb normalises; reticulocytes rise in 5-10 days.",
  "Megaloblastic: ineffective erythropoiesis; folate stores 3-4 months, B12 stores 2-4 years.",
  "Pernicious anaemia: autoimmune gastric atrophy → no intrinsic factor."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Morphological classification of anaemia (Wintrobe)",
   "caption": "Start from the MCV. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"510\" y1=\"50\" x2=\"10\" y2=\"185\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"80\" x2=\"380\" y2=\"150\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"510\" y1=\"50\" x2=\"510\" y2=\"185\"/>",
   "parts": {
    "mcv": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"250\" y=\"20\" width=\"260\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Anaemia: Hb < 13 (men),",
      "< 12 (women) → check MCV"
     ],
     "lx": 380.0,
     "ly": 48.0
    },
    "mic": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"10\" y=\"150\" width=\"240\" height=\"70\" rx=\"10\"/>",
     "label": [
      "Microcytic < 80 fL: iron deficiency,",
      "chronic disease, thalassaemia, sideroblastic"
     ],
     "lx": 130.0,
     "ly": 183.0
    },
    "nor": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"260\" y=\"150\" width=\"240\" height=\"70\" rx=\"10\"/>",
     "label": [
      "Normocytic 80-100: acute bleeding,",
      "haemolysis, marrow failure, chronic disease"
     ],
     "lx": 380.0,
     "ly": 183.0
    },
    "mac": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"510\" y=\"150\" width=\"240\" height=\"70\" rx=\"10\"/>",
     "label": [
      "Macrocytic > 100: B12/folate,",
      "hypothyroidism, myelodysplasia, drugs"
     ],
     "lx": 630.0,
     "ly": 183.0
    }
   },
   "arrows": {
    "mcv": [
     {
      "t": [
       250.0,
       28.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "mic": [
     {
      "t": [
       10.0,
       158.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "nor": [
     {
      "t": [
       260.0,
       158.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "mac": [
     {
      "t": [
       510.0,
       158.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ]
   }
  }
 },
 "mcqs": [
  {
   "q": "According to WHO, anaemia in an adult woman is Hb below:",
   "options": [
    "14 g/dL",
    "11 g/dL",
    "12 g/dL",
    "13 g/dL"
   ],
   "answer": 2,
   "why": "Men: 13 g/dL."
  },
  {
   "q": "The most noticeable symptom of anaemia is:",
   "options": [
    "Fatigue",
    "Fever",
    "Cough",
    "Rash"
   ],
   "answer": 0,
   "why": "Tissue hypoxia."
  },
  {
   "q": "The reticulocyte count reflects:",
   "options": [
    "Haemolysis only",
    "Bone marrow response",
    "Iron stores",
    "B12 level"
   ],
   "answer": 1,
   "why": "Regenerative or not."
  },
  {
   "q": "Which tests suggest haemolysis?",
   "options": [
    "LDH, bilirubin, haptoglobin",
    "TSH, creatinine",
    "Ferritin, iron",
    "B12, folate"
   ],
   "answer": 0,
   "why": "Plus Coombs test."
  },
  {
   "q": "A microcytic anaemia has an MCV below:",
   "options": [
    "100 fL",
    "60 fL",
    "80 fL",
    "120 fL"
   ],
   "answer": 2,
   "why": "Hypochromic."
  },
  {
   "q": "Which is a cause of microcytic anaemia?",
   "options": [
    "B12 deficiency",
    "Hypothyroidism",
    "Acute haemorrhage",
    "Thalassaemia"
   ],
   "answer": 3,
   "why": "Also iron deficiency."
  },
  {
   "q": "Which is a cause of macrocytic anaemia?",
   "options": [
    "Folate deficiency",
    "Sideroblastic anaemia",
    "Iron deficiency",
    "Thalassaemia"
   ],
   "answer": 0,
   "why": "MCV > 100."
  },
  {
   "q": "The most common nutritional deficiency in the world is:",
   "options": [
    "Folate",
    "B12",
    "Vitamin D",
    "Iron"
   ],
   "answer": 3,
   "why": "About 30% affected."
  },
  {
   "q": "Which lab profile fits iron deficiency anaemia?",
   "options": [
    "Normal MCV, high LDH",
    "Low MCV, low ferritin",
    "High MCV, low B12",
    "High MCV, high ferritin"
   ],
   "answer": 1,
   "why": "Microcytic, hypochromic."
  },
  {
   "q": "Pica is:",
   "options": [
    "A skin rash",
    "Craving salt",
    "Hair loss",
    "Eating non-food items"
   ],
   "answer": 3,
   "why": "Classic in iron deficiency."
  },
  {
   "q": "The usual adult oral iron dose is:",
   "options": [
    "10-20 mg/day",
    "5 mg/kg/day",
    "100-200 mg/day",
    "1 g/day"
   ],
   "answer": 2,
   "why": "Or 60-100 mg on alternate days."
  },
  {
   "q": "Oral iron should be taken:",
   "options": [
    "With antacids",
    "Empty stomach, vitamin C",
    "With milk",
    "With tea"
   ],
   "answer": 1,
   "why": "Avoid coffee, PPIs."
  },
  {
   "q": "After Hb normalises, iron should be continued for:",
   "options": [
    "No time",
    "2-3 months",
    "1 week",
    "2 years"
   ],
   "answer": 1,
   "why": "To refill stores."
  },
  {
   "q": "Folate stores in the liver last about:",
   "options": [
    "10 years",
    "1 week",
    "2-4 years",
    "3-4 months"
   ],
   "answer": 3,
   "why": "B12 stores last 2-4 years."
  },
  {
   "q": "The most frequent cause of B12 deficiency is:",
   "options": [
    "Pregnancy",
    "Alcohol",
    "Pernicious anaemia",
    "Vegan diet"
   ],
   "answer": 2,
   "why": "Autoimmune gastric atrophy."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "mcv",
   "options": [
    "Microcytic, hypochromic",
    "Starting point",
    "Macrocytic",
    "Normocytic, normochromic"
   ],
   "answer": 1,
   "why": "The arrow points to: Starting point. Confirm anaemia by WHO criteria, then classify by MCV and reticulocyte count."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "mic",
   "options": [
    "Normocytic, normochromic",
    "Starting point",
    "Microcytic, hypochromic",
    "Macrocytic"
   ],
   "answer": 2,
   "why": "The arrow points to: Microcytic, hypochromic. Low MCV, MCH and MCHC; iron deficiency is by far the most common cause; ferritin distinguishes it."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "nor",
   "options": [
    "Normocytic, normochromic",
    "Microcytic, hypochromic",
    "Macrocytic",
    "Starting point"
   ],
   "answer": 0,
   "why": "The arrow points to: Normocytic, normochromic. Reticulocytes separate regenerative causes (bleeding, haemolysis) from central ones (marrow failure)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "mac",
   "options": [
    "Macrocytic",
    "Normocytic, normochromic",
    "Microcytic, hypochromic",
    "Starting point"
   ],
   "answer": 0,
   "why": "The arrow points to: Macrocytic. MCV > 100; > 120 suggests megaloblastic anaemia from B12 or folate deficiency."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Definition of anaemia?",
   "back": "Significant fall in Hb for age and sex; WHO: < 13 g/dL men, < 12 g/dL women."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Symptoms and signs?",
   "back": "Fatigue, dyspnoea, dizziness, palpitations, pulsatile tinnitus, headache, chest pain, pallor or jaundice."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Laboratory work-up?",
   "back": "CBC with indices, reticulocytes, smear; ferritin/iron, B12, folate, LDH, bilirubin, haptoglobin, Coombs, Hb electrophoresis, TSH, creatinine, marrow."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Wintrobe classification?",
   "back": "Microcytic (iron deficiency, chronic disease, thalassaemia, sideroblastic); normocytic (bleeding, haemolysis, marrow failure); macrocytic (B12/folate, hypothyroidism, myelodysplasia, drugs)."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Diagnosis of iron deficiency anaemia?",
   "back": "Microcytic hypochromic anaemia, normal WBC/platelets, low ferritin; pica; treat the cause."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Oral iron treatment?",
   "back": "Adults 100-200 mg/day (or 60-100 mg alternate days); child 3-6 mg/kg; empty stomach with vitamin C; continue 2-3 months after Hb normalises."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Expected response to iron?",
   "back": "Reticulocytosis in 5-10 days; Hb +1-2 g/dL in 2-4 weeks; correction by 6-8 weeks."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Megaloblastic anaemia causes?",
   "back": "B12 deficiency (pernicious anaemia, gastrectomy, ileal disease, vegan diet), folate deficiency (alcohol, pregnancy, malabsorption), drugs, copper deficiency."
  },
  {
   "id": "img-mcv",
   "type": "image",
   "target": "mcv",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Starting point. Confirm anaemia by WHO criteria, then classify by MCV and reticulocyte count."
  },
  {
   "id": "img-mic",
   "type": "image",
   "target": "mic",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Microcytic, hypochromic. Low MCV, MCH and MCHC; iron deficiency is by far the most common cause; ferritin distinguishes it."
  },
  {
   "id": "img-nor",
   "type": "image",
   "target": "nor",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Normocytic, normochromic. Reticulocytes separate regenerative causes (bleeding, haemolysis) from central ones (marrow failure)."
  },
  {
   "id": "img-mac",
   "type": "image",
   "target": "mac",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Macrocytic. MCV > 100; > 120 suggests megaloblastic anaemia from B12 or folate deficiency."
  }
 ],
 "deeper": [
  {
   "title": "Why iron is taken with orange juice, not tea",
   "html": "<p>Most dietary and supplemental iron is ferric or must stay ferrous to be absorbed through DMT1 in the duodenum. Vitamin C keeps iron in the reduced, absorbable form, while tannins in tea and coffee, calcium in milk, and reduced stomach acid from antacids or PPIs bind or oxidise it. Timing the tablet on an empty stomach with vitamin C can make the difference between treatment failure and success.</p><p class='src'>Source: the lecture's iron administration advice.</p>"
  }
 ],
 "resources": [
  {
   "title": "Iron-deficiency anemia (NHLBI)",
   "url": "https://www.nhlbi.nih.gov/health/anemia/iron-deficiency-anemia",
   "kind": "Website",
   "why": "Causes, diagnosis, treatment.",
   "note": ""
  },
  {
   "title": "Megaloblastic anemia (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK537254/",
   "kind": "Book",
   "why": "B12 and folate deficiency.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Iron-deficiency anemia (NHLBI)",
   "url": "https://www.nhlbi.nih.gov/health/anemia/iron-deficiency-anemia"
  },
  {
   "name": "Megaloblastic anemia (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK537254/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["hemato1-wbc-1"] = {
 "id": "hemato1-wbc-1",
 "subject": "hemato1",
 "group": "Blood cells and haematopoiesis",
 "title": "White blood cells, part I: granulocytes",
 "sourceFile": "White blood cells or leukocytes (Part I) (Hematology, Pr. A. Madani)",
 "sourceUrl": "https://drive.google.com/file/d/1by9CDCSFwVWV9I4O84_N2fvp4vwmq-Kz/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>White blood cells (<strong>leucocytes</strong>) are the nucleated blood cells that provide <strong>immunity and defence against infection</strong>. <strong>Granulocytes</strong> (polynuclear: neutrophils, eosinophils, basophils) and <strong>monocytes</strong> come from the myeloid lineage; <strong>lymphocytes</strong> (B, T, NK) from the lymphoid lineage. Adult normal count: <strong>4-10 G/L</strong> (4,000-10,000/mm³); higher in children (9-30 G/L at birth, 6-18 at 6 months). <strong>Leukocytosis</strong> &gt; 10,000/mm³; <strong>leukopenia</strong> &lt; 4,000/mm³. Exploration: the CBC (count and differential) and a well-made <strong>May-Grünwald-Giemsa</strong> blood film. The differential must be read in <strong>absolute values</strong>: 90% lymphocytes with 3,500 WBC is a normal 3,150 lymphocytes/mm³.</p>"
  },
  {
   "id": "s1",
   "title": "Neutrophils",
   "html": "<p>Normal <strong>1,800-7,000/mm³</strong>. Produced in the marrow from the <strong>GMP</strong> (shared with monocytes): myeloblast → promyelocyte → myelocyte → metamyelocyte → band → segmented neutrophil, controlled by <strong>IL-3, GM-CSF</strong> and especially <strong>G-CSF</strong> (survival, proliferation, release from marrow, activation; recombinant G-CSF treats neutropenia). Compartments: marrow (with a storage pool), blood (<strong>circulating and marginating pools</strong>) and tissues; infection, inflammation, stress, steroids and exercise mobilise them. Properties: <strong>adherence, migration, phagocytosis, bacterial killing</strong> (innate immunity). <strong>Neutropenia</strong>: mild (1,000-1,800), moderate (500-1,000), <strong>severe &lt; 500 = agranulocytosis</strong>: fever 39-40 °C, chills, <strong>necrotic tonsillitis without pus</strong>, lung and skin infections: <strong>fever + agranulocytosis = emergency</strong>. Work-up: smear, rest of the CBC, examination, usually a marrow smear. Causes: <strong>decreased production</strong> (aplastic anaemia, megaloblastic anaemia with hypersegmented neutrophils, drugs and chemotherapy, radiation, toxins, acute leukaemia, myelodysplasia, rare congenital forms), <strong>increased loss</strong> (infections such as tuberculosis, typhoid, brucellosis, HIV; immune neutropenia, e.g. lupus; hypersplenism) and <strong>pseudoneutropenia</strong> (excess marginating pool, e.g. in some Black people; normalises after exercise). <strong>Neutrophilia</strong> (&gt; 7,000/mm³): physiological (exercise, newborns, pregnancy, childbirth), tobacco, steroids, <strong>bacterial infections</strong> (typically 10,000-25,000/mm³, with raised CRP and procalcitonin), inflammation and tissue damage (burns, trauma, myocardial infarction), myeloproliferative disorders.</p>"
  },
  {
   "id": "s2",
   "title": "Eosinophils and basophils",
   "html": "<p><strong>Eosinophils</strong>: normal 0-400/mm³; 12-15 µm, usually <strong>bilobed</strong>, cytoplasm full of orange granules; about <strong>18 hours in blood</strong>, then weeks in tissues (airways, lung, skin, gut), never returning; production mainly driven by <strong>IL-5</strong> (plus IL-3, GM-CSF). Role: defence against <strong>parasites</strong>, allergy, chronic inflammation. <strong>Eosinophilia</strong> (persistent &gt; 400/mm³): <strong>reactive</strong> (usually &lt; 1,000: <strong>parasites</strong>, allergy such as asthma, eczema, drug reactions, inflammatory bowel disease, connective tissue disease) or <strong>clonal</strong> (usually &gt; 1,000: myeloproliferative neoplasms, chronic myeloid leukaemia); <strong>hypereosinophilic syndrome</strong> (&gt; 1,500 persistently) can damage the heart and lungs. <strong>Basophils</strong>: normal 0-200/mm³; 10-15 µm, lobulated nucleus hidden by large dark granules containing <strong>histamine</strong>, serotonin and peroxidase; a few hours in blood then tissues; basophilia &gt; 200/mm³ (e.g. myeloproliferative disorders).</p>"
  }
 ],
 "exam": [
  "WBC 4-10 G/L in adults; leukocytosis > 10, leukopenia < 4.",
  "Always interpret the differential in absolute values.",
  "Neutrophils 1,800-7,000/mm³; from GMP; driven by G-CSF.",
  "Pools: marrow storage, circulating, marginating, tissue.",
  "Severe neutropenia < 500 = agranulocytosis; fever = emergency; necrotic tonsillitis without pus.",
  "Neutropenia: ↓ production, ↑ loss, pseudoneutropenia.",
  "Neutrophilia: bacterial infection (10-25 G/L), inflammation, steroids, tobacco, pregnancy, MPN.",
  "Eosinophils 0-400/mm³; bilobed; IL-5; 18 h in blood.",
  "Eosinophilia: parasites, allergy (< 1,000) vs clonal (> 1,000); HES > 1,500.",
  "Basophils: histamine granules; normal < 200/mm³ in this lecture."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Neutropenia severity",
   "caption": "Absolute neutrophil count (ANC) and infection risk. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"190\" y1=\"67\" x2=\"210\" y2=\"67\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"370\" y1=\"67\" x2=\"390\" y2=\"67\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"550\" y1=\"67\" x2=\"570\" y2=\"67\"/>",
   "parts": {
    "n": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"170\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Normal ANC",
      "1,800-7,000/mm³"
     ],
     "lx": 105.0,
     "ly": 65.5
    },
    "mild": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"210\" y=\"40\" width=\"160\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Mild",
      "1,000-1,800"
     ],
     "lx": 290.0,
     "ly": 65.5
    },
    "mod": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"390\" y=\"40\" width=\"160\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Moderate",
      "500-1,000"
     ],
     "lx": 470.0,
     "ly": 65.5
    },
    "sev": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"570\" y=\"40\" width=\"160\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Severe < 500:",
      "agranulocytosis"
     ],
     "lx": 650.0,
     "ly": 65.5
    },
    "cause": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"60\" y=\"170\" width=\"640\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Causes: ↓ marrow production (aplasia, B12/folate, drugs, leukaemia),",
      "↑ loss (infection, immune, hypersplenism), pseudoneutropenia"
     ],
     "lx": 380.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "n": [
     {
      "t": [
       20.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "mild": [
     {
      "t": [
       210.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "mod": [
     {
      "t": [
       390.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "sev": [
     {
      "t": [
       570.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "cause": [
     {
      "t": [
       60.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ]
   }
  }
 },
 "mcqs": [
  {
   "q": "Which cells belong to the myeloid lineage?",
   "options": [
    "NK cells",
    "Plasma cells",
    "B and T lymphocytes",
    "Neutrophils and monocytes"
   ],
   "answer": 3,
   "why": "Lymphocytes are lymphoid."
  },
  {
   "q": "A total WBC of 3,500 with 90% lymphocytes means:",
   "options": [
    "Normal absolute count",
    "Leukaemia",
    "Neutrophilia",
    "Lymphocytosis"
   ],
   "answer": 0,
   "why": "Use absolute values."
  },
  {
   "q": "Leukopenia in adults is a WBC below:",
   "options": [
    "500/mm³",
    "1,500/mm³",
    "10,000/mm³",
    "4,000/mm³"
   ],
   "answer": 3,
   "why": "Leukocytosis > 10,000."
  },
  {
   "q": "The main growth factor for neutrophils is:",
   "options": [
    "TPO",
    "G-CSF",
    "EPO",
    "IL-5"
   ],
   "answer": 1,
   "why": "Also IL-3, GM-CSF."
  },
  {
   "q": "Neutrophils and monocytes share which progenitor?",
   "options": [
    "CFU-Eo",
    "GMP (CFU-GM)",
    "MEP",
    "CLP"
   ],
   "answer": 1,
   "why": "Granulocyte-macrophage."
  },
  {
   "q": "Agranulocytosis is an ANC below:",
   "options": [
    "1,000/mm³",
    "100/mm³",
    "500/mm³",
    "1,800/mm³"
   ],
   "answer": 2,
   "why": "High infection risk."
  },
  {
   "q": "Tonsillitis in severe neutropenia typically shows:",
   "options": [
    "Thick pus",
    "Necrosis, no pus",
    "White patches only",
    "No lesion"
   ],
   "answer": 1,
   "why": "No neutrophils to make pus."
  },
  {
   "q": "Pseudoneutropenia is due to:",
   "options": [
    "Excess marginating pool",
    "Chemotherapy",
    "Marrow failure",
    "Antibodies"
   ],
   "answer": 0,
   "why": "Normalises after exercise."
  },
  {
   "q": "Hypersegmented neutrophils suggest:",
   "options": [
    "Bacterial infection",
    "Megaloblastic anaemia",
    "Iron deficiency",
    "Allergy"
   ],
   "answer": 1,
   "why": "B12 or folate deficiency."
  },
  {
   "q": "Neutrophilia in bacterial infection is typically:",
   "options": [
    "10,000-25,000/mm³",
    "100,000/mm³",
    "Below 1,500",
    "2,000-4,000/mm³"
   ],
   "answer": 0,
   "why": "With raised CRP and PCT."
  },
  {
   "q": "The main cytokine for eosinophil production is:",
   "options": [
    "G-CSF",
    "IL-7",
    "EPO",
    "IL-5"
   ],
   "answer": 3,
   "why": "Plus IL-3, GM-CSF."
  },
  {
   "q": "The most common cause of reactive eosinophilia is:",
   "options": [
    "Parasitic infection",
    "Anaemia",
    "Bacterial infection",
    "Viral infection"
   ],
   "answer": 0,
   "why": "Also allergy."
  },
  {
   "q": "Hypereosinophilic syndrome is defined by eosinophils persistently above:",
   "options": [
    "10,000/mm³",
    "1,500/mm³",
    "400/mm³",
    "100/mm³"
   ],
   "answer": 1,
   "why": "Organ damage (heart, lung)."
  },
  {
   "q": "Basophil granules contain mainly:",
   "options": [
    "Iron",
    "Lysozyme only",
    "Haemoglobin",
    "Histamine"
   ],
   "answer": 3,
   "why": "Also serotonin, peroxidase."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "n",
   "options": [
    "Normal",
    "Moderate neutropenia",
    "Severe neutropenia",
    "Mild neutropenia"
   ],
   "answer": 0,
   "why": "The arrow points to: Normal. Neutrophils 1.8-7 G/L in adults."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "mild",
   "options": [
    "Severe neutropenia",
    "Mechanisms",
    "Mild neutropenia",
    "Normal"
   ],
   "answer": 2,
   "why": "The arrow points to: Mild neutropenia. Usually no symptoms."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "mod",
   "options": [
    "Mechanisms",
    "Mild neutropenia",
    "Moderate neutropenia",
    "Normal"
   ],
   "answer": 2,
   "why": "The arrow points to: Moderate neutropenia. Moderate risk of infection."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "sev",
   "options": [
    "Normal",
    "Moderate neutropenia",
    "Mild neutropenia",
    "Severe neutropenia"
   ],
   "answer": 3,
   "why": "The arrow points to: Severe neutropenia. High risk: fever above 39-40 °C, chills, necrotic tonsillitis without pus, lung and skin infections: an emergency."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "cause",
   "options": [
    "Severe neutropenia",
    "Moderate neutropenia",
    "Mechanisms",
    "Mild neutropenia"
   ],
   "answer": 2,
   "why": "The arrow points to: Mechanisms. Central (marrow), peripheral (loss or destruction), or redistribution to the marginating pool (pseudoneutropenia)."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Classification of WBCs?",
   "back": "Granulocytes (neutrophils, eosinophils, basophils) and monocytes (myeloid); lymphocytes B, T, NK (lymphoid)."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Normal WBC and terms?",
   "back": "Adults 4-10 G/L; leukocytosis > 10; leukopenia < 4; higher in children."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Why absolute values?",
   "back": "Percentages mislead when the total is abnormal; absolute count = % × total."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Neutrophil production and control?",
   "back": "From GMP: myeloblast → promyelocyte → myelocyte → metamyelocyte → band → segmented; IL-3, GM-CSF, G-CSF."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Neutropenia grades and clinical signs?",
   "back": "Mild 1,000-1,800, moderate 500-1,000, severe < 500 (agranulocytosis): high fever, chills, necrotic tonsillitis without pus, lung/skin infection."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Causes of neutropenia?",
   "back": "↓ production (aplasia, megaloblastic, drugs, leukaemia, MDS), ↑ loss (infection, immune, hypersplenism), pseudoneutropenia."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Causes of neutrophilia?",
   "back": "Physiological (exercise, pregnancy, newborns), tobacco, steroids, bacterial infection, inflammation/tissue damage, myeloproliferative disorders."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Eosinophil facts and eosinophilia?",
   "back": "0-400/mm³, bilobed, IL-5; parasites and allergy (reactive) vs clonal; HES > 1,500."
  },
  {
   "id": "x8",
   "type": "text",
   "front": "Basophils?",
   "back": "0-200/mm³; dark granules with histamine; basophilia in myeloproliferative disorders."
  },
  {
   "id": "img-n",
   "type": "image",
   "target": "n",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Normal. Neutrophils 1.8-7 G/L in adults."
  },
  {
   "id": "img-mild",
   "type": "image",
   "target": "mild",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Mild neutropenia. Usually no symptoms."
  },
  {
   "id": "img-mod",
   "type": "image",
   "target": "mod",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Moderate neutropenia. Moderate risk of infection."
  },
  {
   "id": "img-sev",
   "type": "image",
   "target": "sev",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Severe neutropenia. High risk: fever above 39-40 °C, chills, necrotic tonsillitis without pus, lung and skin infections: an emergency."
  },
  {
   "id": "img-cause",
   "type": "image",
   "target": "cause",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Mechanisms. Central (marrow), peripheral (loss or destruction), or redistribution to the marginating pool (pseudoneutropenia)."
  }
 ],
 "deeper": [
  {
   "title": "Why fever with agranulocytosis is an emergency",
   "html": "<p>Neutrophils are the first line against bacteria and fungi. With fewer than 500 per mm³, bacteria from the patient's own gut, mouth and skin can invade and spread within hours, often without the usual signs such as pus or a clear focus, because there are no neutrophils to create them. Any fever in such a patient needs immediate cultures and broad-spectrum antibiotics before results arrive.</p><p class='src'>Source: the lecture's neutropenia semiology slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "Neutropenia (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK507702/",
   "kind": "Book",
   "why": "Causes and management.",
   "note": ""
  },
  {
   "title": "Eosinophilia (MedlinePlus)",
   "url": "https://medlineplus.gov/ency/article/003649.htm",
   "kind": "Article",
   "why": "Eosinophil count and causes.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Neutropenia (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK507702/"
  },
  {
   "name": "Eosinophilia (MedlinePlus)",
   "url": "https://medlineplus.gov/ency/article/003649.htm"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["hemato1-wbc-2"] = {
 "id": "hemato1-wbc-2",
 "subject": "hemato1",
 "group": "Blood cells and haematopoiesis",
 "title": "White blood cells, part II: monocytes and lymphocytes",
 "sourceFile": "White blood cells or leukocytes (Part II, 2025-26) (Hematology, Pr. A. Madani)",
 "sourceUrl": "https://drive.google.com/file/d/11dxaCapbwnIaGFkLGVryxd4sdBgQPnN-/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "Monocytes and macrophages",
   "html": "<p><strong>Normal</strong>: 2-10% of WBC, <strong>0.1-0.8 G/L</strong> in adults. The <strong>largest mature blood cell</strong> (12-20 µm, average 18) with a <strong>horseshoe or kidney-shaped</strong> folded nucleus, loose chromatin and blue-grey cytoplasm with fine granules and vacuoles; markers CD13, CD14, CD15. <strong>No marrow storage pool</strong>; in blood the marginating pool is 3× the circulating pool, and transit lasts about <strong>8 hours</strong> before entering tissues. Origin: GMP → CFU-GM → CFU-M → <strong>monoblast → promonocyte → monocyte</strong>, driven mainly by <strong>M-CSF</strong> (also GM-CSF, IL-3). In tissues monocytes become <strong>macrophages</strong> (up to 80 µm, CD68, live months) named by site: <strong>Kupffer cells</strong> (liver), <strong>alveolar macrophages</strong>, <strong>Langerhans cells</strong> (skin), <strong>microglia</strong> (CNS), <strong>osteoclasts</strong> (bone); they can fuse into multinucleated giant cells in chronic inflammation. Together they form the <strong>mononuclear phagocyte system</strong>. Functions: <strong>innate immunity</strong> (phagocytosis stronger than neutrophils, via Fc-IgG and C3b receptors, and killing of tumour cells), <strong>adaptive immunity</strong> (antigen presentation to T cells, IL-1), <strong>housekeeping</strong> (removing debris and senescent red cells, storing iron) and <strong>secretion</strong> (lysozyme, complement, interferon, G-CSF, M-CSF, GM-CSF). In immune thrombocytopenia and immune haemolytic anaemia, macrophages destroy antibody-coated platelets or red cells. <strong>Monocytosis</strong> &gt; 800/mm³ (infection, inflammation, recovery from neutropenia, malignancies); <strong>monocytopenia</strong> &lt; 200/mm³ (rare: aplastic anaemia, hairy cell leukaemia). Qualitative disorders: <strong>lysosomal storage diseases</strong>, e.g. <strong>Gaucher</strong> (β-glucosidase deficiency, glucocerebroside) and <strong>Niemann-Pick</strong> (sphingomyelinase deficiency, sphingomyelin).</p>"
  },
  {
   "id": "s1",
   "title": "Lymphocytes",
   "html": "<p>Effectors of <strong>adaptive immunity</strong> (humoral and cell-mediated) and <strong>immunological memory</strong>. Three types, <strong>B, T and NK</strong>, look alike and are identified by <strong>CD markers</strong>. Unlike other leucocytes they are not end cells (they can divide), their life span ranges from hours to years, and they recirculate between blood and tissues. Adult normal <strong>1.5-4 G/L</strong> (higher in children). <strong>Small lymphocytes</strong>: 7-10 µm (red-cell size), nucleus 90% of the cell, condensed chromatin, thin cytoplasm. <strong>Large lymphocytes</strong>: 11-16 µm; if granules are prominent they are <strong>large granular lymphocytes</strong> (about 3%, NK and cytotoxic T cells). <strong>Lymphopoiesis</strong>: from the <strong>CLP</strong>; <strong>antigen-independent</strong> in primary organs (marrow for B and NK, thymus for T: lymphoblast → prolymphocyte → naive lymphocyte), then <strong>antigen-dependent</strong> in secondary organs, where antigen recognition via <strong>TCR/BCR</strong> triggers blast transformation into <strong>immunoblasts</strong>, then effector or long-lived memory cells (B cells → <strong>plasma cells</strong>).</p>"
  },
  {
   "id": "s2",
   "title": "Lymphocytosis and lymphopenia",
   "html": "<p>First exclude false lymphocytosis (young children, relative values, blasts that look like lymphocytes). <strong>Reactive (polyclonal)</strong>: mainly <strong>viral</strong> infections, with activated large, irregular, basophilic cells; moderate, self-limiting, no anaemia or thrombocytopenia. Model: <strong>infectious mononucleosis</strong> (EBV; young adults; fever, pharyngitis, lymphadenopathy, splenomegaly in 50-70%; WBC 10,000-25,000 with about 50% lymphocytes and 20% reactive cells; anti-VCA IgM then IgG, anti-EBNA). Others: CMV, measles, mumps, <strong>pertussis</strong>, brucellosis, tuberculosis, toxoplasmosis, drugs (anticonvulsants, sulfonamides). <strong>Clonal (malignant)</strong>: lymphoproliferative disorders, mostly B cell, progressive (sometimes &gt; 400,000/mm³), with organomegaly and often anaemia or thrombocytopenia; diagnosis by morphology and <strong>immunophenotyping</strong> (clonality: a single light chain on B cells, TCR rearrangement in T cells). Main example: <strong>chronic lymphocytic leukaemia</strong> (CD5+ B cells &gt; 5,000/mm³, median age 70). <strong>Lymphopenia</strong> can be acquired or congenital.</p>"
  }
 ],
 "exam": [
  "Monocytes: 0.1-0.8 G/L; largest blood cell; horseshoe nucleus; CD14.",
  "No marrow storage; ~8 h in blood; M-CSF main growth factor.",
  "Macrophages: Kupffer, alveolar, Langerhans, microglia, osteoclasts.",
  "Functions: phagocytosis, antigen presentation, scavenging old RBCs, secretion.",
  "Monocytosis > 800; monocytopenia < 200 (aplasia, hairy cell leukaemia).",
  "Storage diseases: Gaucher (glucocerebroside), Niemann-Pick (sphingomyelin).",
  "Lymphocytes: 1.5-4 G/L; B, T, NK identified by CD.",
  "Small (7-10 µm) vs large granular lymphocytes (NK, cytotoxic T).",
  "Lymphopoiesis: antigen-independent (primary organs) → antigen-dependent (secondary).",
  "Reactive lymphocytosis: viral (EBV), pertussis; self-limiting.",
  "Clonal: CLL (CD5+ B > 5,000/mm³), organomegaly, cytopenias; immunophenotyping."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Reactive vs clonal lymphocytosis",
   "caption": "Key distinctions on the blood count. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"190\" y1=\"100\" x2=\"190\" y2=\"170\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"570\" y1=\"100\" x2=\"570\" y2=\"170\"/>",
   "parts": {
    "rea": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"340\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Reactive (polyclonal): viral (EBV, CMV),",
      "pertussis, TB, toxoplasmosis, drugs"
     ],
     "lx": 190.0,
     "ly": 68.0
    },
    "clo": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"400\" y=\"40\" width=\"340\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Clonal (lymphoproliferative): CLL,",
      "often > 5,000 B cells, progressive"
     ],
     "lx": 570.0,
     "ly": 68.0
    },
    "rea2": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"20\" y=\"170\" width=\"340\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Moderate count, self-limiting, no anaemia",
      "or thrombocytopenia; reactive cells"
     ],
     "lx": 190.0,
     "ly": 198.0
    },
    "clo2": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"400\" y=\"170\" width=\"340\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Very high counts, organomegaly, anaemia",
      "or thrombocytopenia; immunophenotyping"
     ],
     "lx": 570.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "rea": [
     {
      "t": [
       20.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "clo": [
     {
      "t": [
       400.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "rea2": [
     {
      "t": [
       20.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "clo2": [
     {
      "t": [
       400.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ]
   }
  }
 },
 "mcqs": [
  {
   "q": "The largest mature cell in peripheral blood is the:",
   "options": [
    "Basophil",
    "Neutrophil",
    "Monocyte",
    "Lymphocyte"
   ],
   "answer": 2,
   "why": "12-20 µm."
  },
  {
   "q": "Monocytes have a nucleus that is typically:",
   "options": [
    "Horseshoe or kidney-shaped",
    "Multilobed",
    "Bilobed",
    "Round and dense"
   ],
   "answer": 0,
   "why": "With brain-like folds."
  },
  {
   "q": "How long do monocytes stay in the blood?",
   "options": [
    "8 months",
    "8 hours",
    "8 weeks",
    "8 days"
   ],
   "answer": 1,
   "why": "Then enter tissues."
  },
  {
   "q": "The main growth factor for monocytes is:",
   "options": [
    "M-CSF",
    "EPO",
    "IL-5",
    "G-CSF"
   ],
   "answer": 0,
   "why": "Also GM-CSF, IL-3."
  },
  {
   "q": "Kupffer cells are macrophages of the:",
   "options": [
    "Brain",
    "Bone",
    "Liver",
    "Lung"
   ],
   "answer": 2,
   "why": "Microglia in CNS; osteoclasts in bone."
  },
  {
   "q": "Which is a housekeeping function of macrophages?",
   "options": [
    "Antibody production",
    "Oxygen transport",
    "Clotting",
    "Destroying senescent red cells"
   ],
   "answer": 3,
   "why": "Scavengers."
  },
  {
   "q": "Monocytosis is defined as monocytes above:",
   "options": [
    "800/mm³",
    "1,500/mm³",
    "200/mm³",
    "5,000/mm³"
   ],
   "answer": 0,
   "why": "Monocytopenia < 200."
  },
  {
   "q": "Gaucher disease involves accumulation of:",
   "options": [
    "Glycogen",
    "Sphingomyelin",
    "Iron",
    "Glucocerebroside"
   ],
   "answer": 3,
   "why": "β-glucosidase deficiency."
  },
  {
   "q": "B, T and NK lymphocytes are distinguished by:",
   "options": [
    "Nuclear shape",
    "CD surface markers",
    "Colour",
    "Size"
   ],
   "answer": 1,
   "why": "They look alike."
  },
  {
   "q": "Large granular lymphocytes are mainly:",
   "options": [
    "Plasma cells",
    "Monocytes",
    "B cells",
    "NK and cytotoxic T cells"
   ],
   "answer": 3,
   "why": "About 3% of lymphocytes."
  },
  {
   "q": "Antigen-dependent lymphopoiesis takes place in the:",
   "options": [
    "Thymus",
    "Liver",
    "Secondary lymphoid organs",
    "Bone marrow"
   ],
   "answer": 2,
   "why": "After antigen recognition."
  },
  {
   "q": "The main causes of reactive lymphocytosis are:",
   "options": [
    "Iron deficiency",
    "Viral infections",
    "Bacterial infections",
    "Allergy"
   ],
   "answer": 1,
   "why": "E.g. EBV."
  },
  {
   "q": "Infectious mononucleosis is caused by:",
   "options": [
    "CMV",
    "Epstein-Barr virus",
    "Measles",
    "HIV"
   ],
   "answer": 1,
   "why": "Anti-VCA antibodies."
  },
  {
   "q": "Which bacterial infection classically causes lymphocytosis?",
   "options": [
    "Staphylococcus",
    "Streptococcus",
    "E. coli",
    "Pertussis"
   ],
   "answer": 3,
   "why": "Whooping cough."
  },
  {
   "q": "CLL is characterised by accumulation of:",
   "options": [
    "Neutrophils",
    "Plasma cells",
    "CD5+ B lymphocytes",
    "T lymphocytes"
   ],
   "answer": 2,
   "why": "Median age 70."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "rea",
   "options": [
    "Reactive features",
    "Reactive lymphocytosis",
    "Clonal features",
    "Clonal lymphocytosis"
   ],
   "answer": 1,
   "why": "The arrow points to: Reactive lymphocytosis. Mostly viral infections; infectious mononucleosis (EBV) is the model."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "clo",
   "options": [
    "Reactive features",
    "Reactive lymphocytosis",
    "Clonal lymphocytosis",
    "Clonal features"
   ],
   "answer": 2,
   "why": "The arrow points to: Clonal lymphocytosis. Monoclonal B (rarely T) proliferation such as chronic lymphocytic leukaemia (CD5+ B cells, median age 70)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "rea2",
   "options": [
    "Reactive features",
    "Reactive lymphocytosis",
    "Clonal lymphocytosis",
    "Clonal features"
   ],
   "answer": 0,
   "why": "The arrow points to: Reactive features. Large activated lymphocytes with basophilic cytoplasm; normal red cells and platelets; resolves in weeks."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "clo2",
   "options": [
    "Clonal features",
    "Clonal lymphocytosis",
    "Reactive lymphocytosis",
    "Reactive features"
   ],
   "answer": 0,
   "why": "The arrow points to: Clonal features. Progressive, sometimes above 400,000/mm³; clonality shown by a single light chain (B) or TCR rearrangement (T)."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Monocyte morphology and numbers?",
   "back": "Largest blood cell (12-20 µm), horseshoe nucleus, blue-grey cytoplasm; 0.1-0.8 G/L; CD13, CD14, CD15."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Monocyte kinetics and production?",
   "back": "No marrow storage; ~8 h in blood; GMP → CFU-M → monoblast → promonocyte → monocyte; M-CSF."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Tissue macrophages?",
   "back": "Kupffer (liver), alveolar (lung), Langerhans (skin), microglia (CNS), osteoclasts (bone); CD68; live months."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Functions of monocytes/macrophages?",
   "back": "Innate (phagocytosis, tumour killing), adaptive (antigen presentation, IL-1), housekeeping (debris, old RBCs, iron), secretion (lysozyme, complement, IFN, CSFs)."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Monocyte disorders?",
   "back": "Monocytosis > 800 (infection, inflammation, recovery, malignancy); monocytopenia < 200 (aplasia, hairy cell leukaemia); Gaucher, Niemann-Pick."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Lymphocyte features?",
   "back": "B, T, NK alike, identified by CD; divide; variable life span; recirculate; 1.5-4 G/L."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Two phases of lymphopoiesis?",
   "back": "Antigen-independent in primary organs (marrow, thymus); antigen-dependent in secondary organs (immunoblasts → effectors, memory)."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Reactive vs clonal lymphocytosis?",
   "back": "Reactive: viral (EBV), pertussis, moderate, self-limiting. Clonal: lymphoproliferative (CLL), high, progressive, organomegaly, cytopenias, immunophenotyping."
  },
  {
   "id": "x8",
   "type": "text",
   "front": "Infectious mononucleosis?",
   "back": "EBV; fever, pharyngitis, lymphadenopathy, splenomegaly; WBC 10-25 G/L with reactive lymphocytes; anti-VCA IgM, anti-EBNA."
  },
  {
   "id": "img-rea",
   "type": "image",
   "target": "rea",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Reactive lymphocytosis. Mostly viral infections; infectious mononucleosis (EBV) is the model."
  },
  {
   "id": "img-clo",
   "type": "image",
   "target": "clo",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Clonal lymphocytosis. Monoclonal B (rarely T) proliferation such as chronic lymphocytic leukaemia (CD5+ B cells, median age 70)."
  },
  {
   "id": "img-rea2",
   "type": "image",
   "target": "rea2",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Reactive features. Large activated lymphocytes with basophilic cytoplasm; normal red cells and platelets; resolves in weeks."
  },
  {
   "id": "img-clo2",
   "type": "image",
   "target": "clo2",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Clonal features. Progressive, sometimes above 400,000/mm³; clonality shown by a single light chain (B) or TCR rearrangement (T)."
  }
 ],
 "deeper": [
  {
   "title": "Why the spleen enlarges in immune haemolysis",
   "html": "<p>When antibodies or complement coat red cells, splenic macrophages recognise them through Fc and C3b receptors and engulf them. Constant destruction makes the spleen work harder and grow, while the released haemoglobin is turned into bilirubin, causing jaundice. Anaemia, jaundice and splenomegaly together point to this macrophage-driven destruction.</p><p class='src'>Source: the lecture's examples of macrophage pathology.</p>"
  }
 ],
 "resources": [
  {
   "title": "Monocytes (NCBI StatPearls: physiology)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK551496/",
   "kind": "Book",
   "why": "Monocyte and macrophage biology.",
   "note": ""
  },
  {
   "title": "Infectious mononucleosis (CDC)",
   "url": "https://www.cdc.gov/epstein-barr/about/",
   "kind": "Website",
   "why": "EBV and mononucleosis.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Monocytes (NCBI StatPearls: physiology)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK551496/"
  },
  {
   "name": "Infectious mononucleosis (CDC)",
   "url": "https://www.cdc.gov/epstein-barr/about/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["hemato1-haemostasis"] = {
 "id": "hemato1-haemostasis",
 "subject": "hemato1",
 "group": "Haemostasis",
 "title": "Introduction to haemostasis",
 "sourceFile": "Hemostasis overview (revision notes in the Hematology folder) (Hematology revision notes)",
 "sourceUrl": "https://drive.google.com/file/d/1Fe8D2rfHY3wqyTr3qtPhFDBjeDateZ4a/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p><strong>Haemostasis</strong> is the body's normal response to vessel injury: it forms a <strong>haemostatic plug</strong> at the site of damage and then keeps the blood <strong>fluid and clot-free</strong> elsewhere, dissolving the clot once healing starts. Four overlapping steps: <strong>1. vasoconstriction</strong>; <strong>2. platelet plug</strong> formation (<strong>primary haemostasis</strong>); <strong>3. fibrin clot</strong> formation by the coagulation cascade converting fibrinogen to fibrin (<strong>secondary haemostasis</strong>); <strong>4. fibrinolysis</strong>. Failure in one direction causes <strong>bleeding</strong> (haemophilia, von Willebrand disease, thrombocytopenia, leukaemia); in the other, <strong>thrombosis</strong> (inherited: factor V Leiden, prothrombin gene mutation, protein C deficiency; acquired: cancer, inflammatory bowel disease, sepsis), with stroke, DVT, pulmonary embolism or MI. This page is based on revision notes found in the Hematology folder; the detailed lectures follow.</p>"
  },
  {
   "id": "s1",
   "title": "Platelets",
   "html": "<p>Small <strong>anucleate discs</strong> formed from the cytoplasm of <strong>megakaryocytes</strong>; count <strong>150,000-400,000/mm³</strong>; life span about <strong>8-10 days</strong>; destroyed in the spleen; about <strong>two thirds circulate and one third is held in the spleen</strong>. <strong>Megakaryopoiesis</strong>: proliferation, then <strong>endomitosis</strong> (nuclear division without cell division, making a large polyploid cell), then cytoplasmic maturation; each megakaryocyte fragments into about <strong>2,000 platelets</strong>. Regulation: <strong>thrombopoietin (TPO)</strong>, made by the liver. Structure: a phospholipid membrane (platelet factor 3, thromboxane production) carrying <strong>glycoprotein receptors</strong> (GPIb-IX, GPIIb-IIIa, GPVI) and antigens (ABO, HLA, HPA); an open canalicular system; a cytoskeleton; <strong>α-granules</strong> (von Willebrand factor, fibrinogen, platelet factor 4, β-thromboglobulin) and <strong>dense granules</strong> (ADP, ATP, calcium, serotonin).</p>"
  },
  {
   "id": "s2",
   "title": "Vessel wall",
   "html": "<p>The <strong>endothelium</strong>, a single cell layer in contact with blood, is normally <strong>thromboresistant</strong> (heparan sulfate, clotting factor inhibitors, fibrinolytic activators). When injured it becomes <strong>prothrombotic</strong>, releasing von Willebrand factor, tissue factor and fibrinolysis inhibitors. The <strong>subendothelium</strong> is thrombogenic (collagen, von Willebrand factor, tissue factor that starts coagulation). <strong>Von Willebrand factor (VWF)</strong>: a large multimeric protein from endothelium and megakaryocytes that circulates bound to <strong>factor VIII</strong> and bridges platelets (GPIb) to collagen.</p>"
  }
 ],
 "exam": [
  "Haemostasis: plug at the injury, fluid blood elsewhere.",
  "Steps: vasoconstriction, platelet plug (primary), fibrin clot (secondary), fibrinolysis.",
  "Bleeding: haemophilia, von Willebrand disease, thrombocytopenia.",
  "Thrombosis: factor V Leiden, prothrombin mutation, protein C deficiency, cancer, sepsis.",
  "Platelets: anucleate, 150-400 G/L, ~8-10 days, destroyed in spleen.",
  "Megakaryocyte: endomitosis; ~2,000 platelets each; TPO from liver.",
  "Receptors GPIb, GPIIb-IIIa, GPVI; α-granules (VWF, fibrinogen); dense granules (ADP, Ca²⁺, serotonin).",
  "Endothelium thromboresistant; subendothelium thrombogenic (collagen, VWF, tissue factor).",
  "VWF carries factor VIII and bridges platelets to collagen."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "The four steps of haemostasis",
   "caption": "Overlapping in time after a vessel injury. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"190\" y1=\"67\" x2=\"200\" y2=\"67\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"370\" y1=\"67\" x2=\"380\" y2=\"67\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"550\" y1=\"67\" x2=\"560\" y2=\"67\"/>",
   "parts": {
    "v": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"170\" height=\"55\" rx=\"10\"/>",
     "label": [
      "1. Vasoconstriction"
     ],
     "lx": 105.0,
     "ly": 73.5
    },
    "p": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"200\" y=\"40\" width=\"170\" height=\"55\" rx=\"10\"/>",
     "label": [
      "2. Platelet plug",
      "(primary haemostasis)"
     ],
     "lx": 285.0,
     "ly": 65.5
    },
    "c": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"380\" y=\"40\" width=\"170\" height=\"55\" rx=\"10\"/>",
     "label": [
      "3. Fibrin clot",
      "(secondary: coagulation)"
     ],
     "lx": 465.0,
     "ly": 65.5
    },
    "f": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"560\" y=\"40\" width=\"170\" height=\"55\" rx=\"10\"/>",
     "label": [
      "4. Fibrinolysis",
      "(clot dissolution)"
     ],
     "lx": 645.0,
     "ly": 65.5
    },
    "low": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"60\" y=\"170\" width=\"300\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Too little: bleeding (haemophilia,",
      "von Willebrand, thrombocytopenia)"
     ],
     "lx": 210.0,
     "ly": 198.0
    },
    "high": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"400\" y=\"170\" width=\"300\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Too much: thrombosis (factor V Leiden,",
      "protein C deficiency, cancer, sepsis)"
     ],
     "lx": 550.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "v": [
     {
      "t": [
       20.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "p": [
     {
      "t": [
       200.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "c": [
     {
      "t": [
       380.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "f": [
     {
      "t": [
       560.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "low": [
     {
      "t": [
       60.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "high": [
     {
      "t": [
       400.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ]
   }
  }
 },
 "mcqs": [
  {
   "q": "The first step of haemostasis after injury is:",
   "options": [
    "Fibrinolysis",
    "Platelet aggregation",
    "Vasoconstriction",
    "Fibrin formation"
   ],
   "answer": 2,
   "why": "Then the platelet plug."
  },
  {
   "q": "Primary haemostasis refers to:",
   "options": [
    "Vasoconstriction only",
    "Platelet plug formation",
    "Fibrin formation",
    "Clot dissolution"
   ],
   "answer": 1,
   "why": "Secondary = coagulation."
  },
  {
   "q": "Secondary haemostasis converts:",
   "options": [
    "Fibrinogen to fibrin",
    "ADP to ATP",
    "Plasminogen to plasmin",
    "Prothrombin to fibrinogen"
   ],
   "answer": 0,
   "why": "Coagulation cascade."
  },
  {
   "q": "Which is an inherited thrombophilia?",
   "options": [
    "Thrombocytopenia",
    "Factor V Leiden",
    "Von Willebrand disease",
    "Haemophilia A"
   ],
   "answer": 1,
   "why": "Also prothrombin mutation, protein C deficiency."
  },
  {
   "q": "Platelets are fragments of:",
   "options": [
    "Neutrophils",
    "Erythroblasts",
    "Monocytes",
    "Megakaryocytes"
   ],
   "answer": 3,
   "why": "Anucleate."
  },
  {
   "q": "Endomitosis means:",
   "options": [
    "Apoptosis",
    "Cell division without nuclear division",
    "Nuclear division without cell division",
    "Fragmentation"
   ],
   "answer": 2,
   "why": "Makes large polyploid megakaryocytes."
  },
  {
   "q": "One megakaryocyte produces about:",
   "options": [
    "2,000 platelets",
    "2 million platelets",
    "200,000 platelets",
    "20 platelets"
   ],
   "answer": 0,
   "why": "By fragmentation."
  },
  {
   "q": "The main regulator of platelet production is:",
   "options": [
    "IL-5",
    "EPO",
    "TPO",
    "G-CSF"
   ],
   "answer": 2,
   "why": "Made by the liver."
  },
  {
   "q": "Which platelet granules contain ADP and serotonin?",
   "options": [
    "Specific granules",
    "Lysosomes",
    "α-granules",
    "Dense granules"
   ],
   "answer": 3,
   "why": "α-granules: VWF, fibrinogen."
  },
  {
   "q": "Von Willebrand factor circulates bound to:",
   "options": [
    "Factor IX",
    "Factor VIII",
    "Albumin",
    "Fibrinogen"
   ],
   "answer": 1,
   "why": "And bridges platelets to collagen."
  },
  {
   "q": "The normal, uninjured endothelium is:",
   "options": [
    "Thromboresistant",
    "Full of tissue factor",
    "Thrombogenic",
    "Absent in capillaries"
   ],
   "answer": 0,
   "why": "Heparan sulfate, inhibitors."
  },
  {
   "q": "About what share of platelets is held in the spleen?",
   "options": [
    "Two thirds",
    "None",
    "All",
    "One third"
   ],
   "answer": 3,
   "why": "Two thirds circulate."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "v",
   "options": [
    "Secondary haemostasis",
    "Vasoconstriction",
    "Primary haemostasis",
    "Fibrinolysis"
   ],
   "answer": 1,
   "why": "The arrow points to: Vasoconstriction. The injured vessel narrows immediately, reducing blood flow."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "p",
   "options": [
    "Hypocoagulability",
    "Fibrinolysis",
    "Vasoconstriction",
    "Primary haemostasis"
   ],
   "answer": 3,
   "why": "The arrow points to: Primary haemostasis. Platelets adhere to exposed subendothelium via von Willebrand factor, activate and aggregate into a plug."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "c",
   "options": [
    "Secondary haemostasis",
    "Fibrinolysis",
    "Primary haemostasis",
    "Hypocoagulability"
   ],
   "answer": 0,
   "why": "The arrow points to: Secondary haemostasis. A cascade of clotting factors converts fibrinogen to fibrin, stabilising the plug into a clot."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "f",
   "options": [
    "Secondary haemostasis",
    "Fibrinolysis",
    "Hypocoagulability",
    "Primary haemostasis"
   ],
   "answer": 1,
   "why": "The arrow points to: Fibrinolysis. Plasmin dissolves the clot as the vessel heals."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "low",
   "options": [
    "Hypocoagulability",
    "Secondary haemostasis",
    "Hypercoagulability",
    "Fibrinolysis"
   ],
   "answer": 0,
   "why": "The arrow points to: Hypocoagulability. Deficient platelets or factors lead to bleeding."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "high",
   "options": [
    "Secondary haemostasis",
    "Vasoconstriction",
    "Hypercoagulability",
    "Fibrinolysis"
   ],
   "answer": 2,
   "why": "The arrow points to: Hypercoagulability. Inherited or acquired thrombophilia raises the risk of stroke, DVT, pulmonary embolism, MI."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Define haemostasis and its steps.",
   "back": "Normal response to vessel injury: vasoconstriction, platelet plug (primary), fibrin clot (secondary), fibrinolysis; keeps blood fluid elsewhere."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Consequences of haemostasis failure?",
   "back": "Bleeding (haemophilia, von Willebrand disease, thrombocytopenia) or thrombosis (factor V Leiden, protein C deficiency, cancer, sepsis)."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Platelet facts?",
   "back": "Anucleate megakaryocyte fragments; 150-400 G/L; 8-10 days; 2/3 circulating, 1/3 splenic; destroyed in spleen."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Megakaryopoiesis?",
   "back": "Proliferation, endomitosis, cytoplasmic maturation; ~2,000 platelets per megakaryocyte; TPO from the liver."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Platelet structure?",
   "back": "Membrane with GPIb, GPIIb-IIIa, GPVI and antigens; canalicular system; cytoskeleton; α-granules (VWF, fibrinogen, PF4); dense granules (ADP, ATP, Ca²⁺, serotonin)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Role of the vessel wall?",
   "back": "Endothelium thromboresistant (heparan sulfate, inhibitors); injured endothelium and subendothelium prothrombotic (VWF, collagen, tissue factor)."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Von Willebrand factor?",
   "back": "Large multimer from endothelium and megakaryocytes; carries factor VIII; bridges platelet GPIb to collagen."
  },
  {
   "id": "img-v",
   "type": "image",
   "target": "v",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Vasoconstriction. The injured vessel narrows immediately, reducing blood flow."
  },
  {
   "id": "img-p",
   "type": "image",
   "target": "p",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Primary haemostasis. Platelets adhere to exposed subendothelium via von Willebrand factor, activate and aggregate into a plug."
  },
  {
   "id": "img-c",
   "type": "image",
   "target": "c",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Secondary haemostasis. A cascade of clotting factors converts fibrinogen to fibrin, stabilising the plug into a clot."
  },
  {
   "id": "img-f",
   "type": "image",
   "target": "f",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Fibrinolysis. Plasmin dissolves the clot as the vessel heals."
  },
  {
   "id": "img-low",
   "type": "image",
   "target": "low",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Hypocoagulability. Deficient platelets or factors lead to bleeding."
  },
  {
   "id": "img-high",
   "type": "image",
   "target": "high",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Hypercoagulability. Inherited or acquired thrombophilia raises the risk of stroke, DVT, pulmonary embolism, MI."
  }
 ],
 "deeper": [
  {
   "title": "Why aspirin prolongs bleeding for days",
   "html": "<p>Aspirin irreversibly blocks platelet cyclooxygenase, so platelets can no longer make thromboxane A2, a key signal for aggregation and vasoconstriction. Because platelets have no nucleus, they cannot make new enzyme; the effect lasts for the rest of their life, about 8-10 days, until new platelets replace them. That is why aspirin is stopped about a week before some surgeries.</p><p class='src'>Source: the notes' platelet activation section.</p>"
  }
 ],
 "resources": [
  {
   "title": "Hemostasis (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK448065/",
   "kind": "Book",
   "why": "Primary and secondary haemostasis.",
   "note": ""
  },
  {
   "title": "Von Willebrand disease (NHLBI)",
   "url": "https://www.nhlbi.nih.gov/health/von-willebrand-disease",
   "kind": "Website",
   "why": "The most common inherited bleeding disorder.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Hemostasis (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK448065/"
  },
  {
   "name": "Von Willebrand disease (NHLBI)",
   "url": "https://www.nhlbi.nih.gov/health/von-willebrand-disease"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["hemato1-primary"] = {
 "id": "hemato1-primary",
 "subject": "hemato1",
 "group": "Haemostasis",
 "title": "Primary haemostasis",
 "sourceFile": "Primary hemostasis (2025-26) (Hematology, Pr. N. Khoubila)",
 "sourceUrl": "https://drive.google.com/file/d/18m-lJlVCWyGbb86lMWFVsOvKMcS74rMl/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>Haemostasis ('blood standing still') has two functions: a <strong>rapid, localised plug</strong> at a vascular injury, and keeping blood <strong>fluid</strong> elsewhere and after healing. Its steps (vasoconstriction, platelet plug, fibrin clot, fibrinolysis) overlap in time. <strong>Primary haemostasis</strong> builds a <strong>temporary platelet plug</strong>, 'like a bottle stopper', which coagulation (secondary haemostasis) then reinforces: platelets are the bricks, fibrin the mortar. Too much clotting causes <strong>thrombosis/thrombophilia</strong> (stroke, DVT and pulmonary embolism, MI; inherited protein C deficiency, prothrombin mutation, factor V Leiden; acquired IBD, sepsis, cancer); too little causes <strong>bleeding</strong> (haemophilia, von Willebrand disease, thrombocytopenia).</p>"
  },
  {
   "id": "s1",
   "title": "Actors",
   "html": "<p><strong>Platelets</strong>: membrane phospholipids (arachidonic acid → <strong>thromboxane A2</strong>, PAF, platelet factor 3), surface glycoproteins <strong>GPIb</strong> (binds VWF) and <strong>GPIIb/IIIa</strong> (binds fibrinogen), antigens (ABO, HLA, HPA); an <strong>open canalicular system</strong> (secretion channel); a <strong>cytoskeleton</strong> (actin, myosin, tubulin: shape change and clot retraction); <strong>α-granules</strong> (8-10 per platelet: PF4, VWF, factor V, β-thromboglobulin, fibrinogen), <strong>dense granules</strong> (4-5: ADP, ATP, Ca²⁺, serotonin), lysosomes, glycogen, and the dense tubular system (cyclooxygenase, calcium). Quantitative abnormalities: <strong>thrombocytopenia &lt; 150,000/mm³</strong> (marrow failure: aplasia, leukaemia, toxins, drugs, viruses such as EBV and COVID-19; peripheral destruction: immune thrombocytopenia, quinine, pregnancy) and <strong>thrombocytosis &gt; 400,000/mm³</strong> (inflammation, splenectomy, essential thrombocythaemia); qualitative defects such as glycoprotein deficiencies. <strong>Vessel wall</strong>: intact endothelium actively <strong>prevents</strong> clotting (prostacyclin, heparan sulfate, inhibitors, fibrinolysis activators); injured, it secretes VWF, tissue factor and fibrinolysis inhibitors; the <strong>subendothelium</strong> (collagen, VWF, tissue factor) is thrombogenic. <strong>Plasma proteins</strong>: <strong>VWF</strong> (large multimer from endothelium and megakaryocytes; carries and protects <strong>factor VIII</strong>; bridges collagen to GPIb) and <strong>fibrinogen</strong> (liver; ligand of GPIIb/IIIa in aggregation; cleaved by thrombin into fibrin in coagulation).</p>"
  },
  {
   "id": "s2",
   "title": "Steps",
   "html": "<p><strong>Vasoconstriction</strong>: brief reflex contraction triggered by platelet serotonin, direct muscle injury and pain reflexes. <strong>1. Adhesion</strong>: VWF bridges collagen to <strong>GPIb</strong>; platelets change from discs to spheres with pseudopods, greatly increasing surface area. <strong>2. Activation</strong>: shape change; secretion of dense granules (serotonin: vasoconstriction; <strong>ADP</strong>: aggregating agent; Ca²⁺) and α-granules (VWF, fibrinogen, PF4, which neutralises heparin and attracts white cells); the <strong>prostaglandin pathway</strong>: phospholipase A2 releases arachidonic acid → <strong>COX-1</strong> → PGG2/PGH2 → thromboxane synthase → <strong>TXA2</strong> (vasoconstriction, activates neighbours); <strong>phosphatidylserine</strong> flips to the outer leaflet, providing a surface for coagulation complexes; ADP, TXA2 and thrombin recruit more platelets (amplification). <strong>Aspirin</strong> irreversibly acetylates COX-1; platelets cannot regenerate it, so the effect lasts about <strong>10 days</strong>; low dose (75-325 mg/day) prevents thrombosis. <strong>3. Aggregation</strong>: activation switches <strong>GPIIb/IIIa</strong> to high affinity; <strong>fibrinogen</strong> bridges adjacent platelets, forming the primary plug. Exploration includes the platelet count and smear, platelet function analyser or bleeding time, VWF activity, aggregometry and flow cytometry (GPIIb/IIIa deficiency = <strong>Glanzmann thrombasthenia</strong>; GPIb deficiency = <strong>Bernard-Soulier syndrome</strong>).</p>"
  }
 ],
 "exam": [
  "Two functions: rapid local plug; fluid blood elsewhere.",
  "Primary haemostasis: temporary platelet plug; coagulation reinforces it.",
  "GPIb binds VWF (adhesion); GPIIb/IIIa binds fibrinogen (aggregation).",
  "α-granules: VWF, fibrinogen, factor V, PF4; dense: ADP, ATP, Ca²⁺, serotonin.",
  "Thrombocytopenia < 150,000; thrombocytosis > 400,000/mm³.",
  "Intact endothelium prevents clotting; subendothelium is thrombogenic.",
  "VWF: carries factor VIII, bridges collagen to GPIb.",
  "Adhesion → activation (shape change, secretion, TXA2, PS flip, recruitment) → aggregation.",
  "TXA2: COX-1 pathway; aspirin blocks COX-1 irreversibly (~10 days).",
  "Glanzmann: GPIIb/IIIa; Bernard-Soulier: GPIb."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Formation of the platelet plug",
   "caption": "Adhesion, activation, aggregation. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"240\" y1=\"70\" x2=\"270\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"490\" y1=\"70\" x2=\"520\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"260\" y1=\"230\" x2=\"380\" y2=\"40\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"530\" y1=\"230\" x2=\"630\" y2=\"40\"/>",
   "parts": {
    "adh": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "1. Adhesion: GPIb ↔ VWF",
      "↔ subendothelial collagen"
     ],
     "lx": 130.0,
     "ly": 68.0
    },
    "act": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"270\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "2. Activation: shape change, granule",
      "release (ADP, Ca²⁺), TXA2, PS flip"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "agg": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"520\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "3. Aggregation: GPIIb/IIIa",
      "↔ fibrinogen ↔ GPIIb/IIIa"
     ],
     "lx": 630.0,
     "ly": 68.0
    },
    "asp": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"150\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Aspirin: irreversibly blocks COX-1",
      "→ no TXA2 for ~10 days"
     ],
     "lx": 260.0,
     "ly": 198.0
    },
    "def": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"420\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Defects: Bernard-Soulier (GPIb),",
      "Glanzmann (GPIIb/IIIa), VWD"
     ],
     "lx": 530.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "adh": [
     {
      "t": [
       20.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "act": [
     {
      "t": [
       270.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "agg": [
     {
      "t": [
       520.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "asp": [
     {
      "t": [
       150.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "def": [
     {
      "t": [
       420.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ]
   }
  }
 },
 "mcqs": [
  {
   "q": "The two main functions of haemostasis are:",
   "options": [
    "Clot formation only",
    "Fibrinolysis only",
    "Oxygen transport and immunity",
    "Clot formation and fluid blood maintenance"
   ],
   "answer": 3,
   "why": "Clot then dissolution."
  },
  {
   "q": "Primary haemostasis forms:",
   "options": [
    "A temporary platelet plug",
    "Plasmin",
    "Antibodies",
    "A fibrin clot"
   ],
   "answer": 0,
   "why": "Reinforced by coagulation."
  },
  {
   "q": "Platelet adhesion depends on:",
   "options": [
    "Plasmin",
    "GPIIb/IIIa and fibrinogen",
    "Factor X",
    "GPIb and von Willebrand factor"
   ],
   "answer": 3,
   "why": "VWF bridges to collagen."
  },
  {
   "q": "Aggregation depends on:",
   "options": [
    "Collagen only",
    "GPIIb/IIIa and fibrinogen",
    "Serotonin only",
    "GPIb and VWF"
   ],
   "answer": 1,
   "why": "Fibrinogen bridges platelets."
  },
  {
   "q": "Which granules contain ADP and serotonin?",
   "options": [
    "Lysosomes",
    "Dense granules",
    "Glycogen",
    "α-granules"
   ],
   "answer": 1,
   "why": "4-5 per platelet."
  },
  {
   "q": "Von Willebrand factor protects which clotting factor?",
   "options": [
    "Factor VII",
    "Factor II",
    "Factor VIII",
    "Factor IX"
   ],
   "answer": 2,
   "why": "Anti-haemophilic factor A."
  },
  {
   "q": "The intact endothelium:",
   "options": [
    "Secretes tissue factor",
    "Actively prevents clotting",
    "Promotes clotting",
    "Exposes collagen"
   ],
   "answer": 1,
   "why": "Prostacyclin, heparan sulfate."
  },
  {
   "q": "After adhesion, platelets change shape from:",
   "options": [
    "Discs to spheres with pseudopods",
    "Spheres to discs",
    "Discs to rods",
    "They do not change"
   ],
   "answer": 0,
   "why": "Increases surface area."
  },
  {
   "q": "Thromboxane A2 is produced via:",
   "options": [
    "Lipoxygenase",
    "Cyclooxygenase-1",
    "Plasmin",
    "Thrombin only"
   ],
   "answer": 1,
   "why": "From arachidonic acid."
  },
  {
   "q": "Aspirin inhibits platelets for about:",
   "options": [
    "10 days",
    "1 hour",
    "1 month",
    "1 day"
   ],
   "answer": 0,
   "why": "Irreversible COX-1 acetylation."
  },
  {
   "q": "Phosphatidylserine exposure on activated platelets serves to:",
   "options": [
    "Release ADP",
    "Bind VWF",
    "Destroy fibrin",
    "Surface for clotting"
   ],
   "answer": 3,
   "why": "Links to secondary haemostasis."
  },
  {
   "q": "Glanzmann thrombasthenia is a deficiency of:",
   "options": [
    "GPIIb/IIIa",
    "VWF",
    "Factor VIII",
    "GPIb"
   ],
   "answer": 0,
   "why": "Aggregation defect."
  },
  {
   "q": "Bernard-Soulier syndrome is a deficiency of:",
   "options": [
    "COX-1",
    "GPIb",
    "GPIIb/IIIa",
    "Fibrinogen"
   ],
   "answer": 1,
   "why": "Adhesion defect."
  },
  {
   "q": "PF4 released by platelets:",
   "options": [
    "Binds GPIb",
    "Activates plasmin",
    "Destroys fibrin",
    "Neutralises heparin"
   ],
   "answer": 3,
   "why": "Also attracts white cells."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "adh",
   "options": [
    "Adhesion",
    "Aspirin",
    "Activation",
    "Aggregation"
   ],
   "answer": 0,
   "why": "The arrow points to: Adhesion. After injury, von Willebrand factor bridges exposed collagen to the platelet receptor GPIb; platelets turn from discs into spiky spheres."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "act",
   "options": [
    "Aspirin",
    "Adhesion",
    "Activation",
    "Inherited defects"
   ],
   "answer": 2,
   "why": "The arrow points to: Activation. Dense granules release ADP, calcium and serotonin; α-granules release VWF, fibrinogen, PF4; thromboxane A2 is made; phosphatidylserine flips outward for coagulation factors."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "agg",
   "options": [
    "Adhesion",
    "Activation",
    "Aggregation",
    "Inherited defects"
   ],
   "answer": 2,
   "why": "The arrow points to: Aggregation. Activated GPIIb/IIIa receptors bind fibrinogen, which links neighbouring platelets into the primary plug."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "asp",
   "options": [
    "Aggregation",
    "Activation",
    "Adhesion",
    "Aspirin"
   ],
   "answer": 3,
   "why": "The arrow points to: Aspirin. Acetylates COX-1 permanently; anucleate platelets cannot replace it, so the effect lasts their lifespan."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "def",
   "options": [
    "Aspirin",
    "Activation",
    "Inherited defects",
    "Aggregation"
   ],
   "answer": 2,
   "why": "The arrow points to: Inherited defects. Bernard-Soulier syndrome lacks GPIb (adhesion); Glanzmann thrombasthenia lacks GPIIb/IIIa (aggregation); von Willebrand disease lacks functional VWF."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Functions of haemostasis?",
   "back": "Rapid localised plug at injury; maintain fluid, clot-free blood elsewhere and after healing."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "What is primary haemostasis?",
   "back": "Formation of a temporary platelet plug (bricks) later reinforced by fibrin (mortar)."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Platelet structure relevant to haemostasis?",
   "back": "Membrane (TXA2, PAF, PF3), GPIb (VWF), GPIIb/IIIa (fibrinogen), canalicular system, cytoskeleton, α-granules, dense granules."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Roles of VWF and fibrinogen?",
   "back": "VWF: carries factor VIII, bridges collagen to GPIb. Fibrinogen: bridges GPIIb/IIIa in aggregation; becomes fibrin in coagulation."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Three steps of the platelet plug?",
   "back": "Adhesion (GPIb-VWF-collagen), activation (shape change, granule release, TXA2, PS flip, recruitment), aggregation (GPIIb/IIIa-fibrinogen)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "TXA2 pathway and aspirin?",
   "back": "Phospholipase A2 → arachidonic acid → COX-1 → PGH2 → TXA2; aspirin irreversibly blocks COX-1 for the platelet lifespan (~10 days)."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Platelet count abnormalities?",
   "back": "Thrombocytopenia < 150,000 (marrow failure, peripheral destruction); thrombocytosis > 400,000 (inflammation, splenectomy, essential thrombocythaemia)."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Inherited platelet function defects?",
   "back": "Glanzmann thrombasthenia (GPIIb/IIIa), Bernard-Soulier syndrome (GPIb), von Willebrand disease (VWF)."
  },
  {
   "id": "img-adh",
   "type": "image",
   "target": "adh",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Adhesion. After injury, von Willebrand factor bridges exposed collagen to the platelet receptor GPIb; platelets turn from discs into spiky spheres."
  },
  {
   "id": "img-act",
   "type": "image",
   "target": "act",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Activation. Dense granules release ADP, calcium and serotonin; α-granules release VWF, fibrinogen, PF4; thromboxane A2 is made; phosphatidylserine flips outward for coagulation factors."
  },
  {
   "id": "img-agg",
   "type": "image",
   "target": "agg",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Aggregation. Activated GPIIb/IIIa receptors bind fibrinogen, which links neighbouring platelets into the primary plug."
  },
  {
   "id": "img-asp",
   "type": "image",
   "target": "asp",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Aspirin. Acetylates COX-1 permanently; anucleate platelets cannot replace it, so the effect lasts their lifespan."
  },
  {
   "id": "img-def",
   "type": "image",
   "target": "def",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Inherited defects. Bernard-Soulier syndrome lacks GPIb (adhesion); Glanzmann thrombasthenia lacks GPIIb/IIIa (aggregation); von Willebrand disease lacks functional VWF."
  }
 ],
 "deeper": [
  {
   "title": "Why primary haemostasis defects cause skin and mucosal bleeding",
   "html": "<p>Platelets and von Willebrand factor act first at small vessels, the capillaries of skin and mucosa. When they fail, bleeding appears as petechiae, easy bruising, nosebleeds, gum bleeding and heavy periods, and starts immediately after a cut. Coagulation factor defects such as haemophilia instead cause deep bleeding into joints and muscles, often delayed. This pattern helps guide the first tests.</p><p class='src'>Source: the lecture's primary haemostasis steps and actors.</p>"
  }
 ],
 "resources": [
  {
   "title": "Platelet function (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK557800/",
   "kind": "Book",
   "why": "Adhesion, activation, aggregation.",
   "note": ""
  },
  {
   "title": "Glanzmann thrombasthenia (MedlinePlus Genetics)",
   "url": "https://medlineplus.gov/genetics/condition/glanzmann-thrombasthenia/",
   "kind": "Website",
   "why": "An inherited platelet disorder.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Platelet function (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK557800/"
  },
  {
   "name": "Glanzmann thrombasthenia (MedlinePlus Genetics)",
   "url": "https://medlineplus.gov/genetics/condition/glanzmann-thrombasthenia/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["hemato1-coagulation"] = {
 "id": "hemato1-coagulation",
 "subject": "hemato1",
 "group": "Haemostasis",
 "title": "Coagulation (secondary haemostasis)",
 "sourceFile": "Coagulation / secondary hemostasis (Hematology, Pr. N. Khoubila)",
 "sourceUrl": "https://drive.google.com/file/d/1waiDCSfOhyWaFMePaBAAaK_FfmiGlwww/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>Normal haemostasis balances clot formation and dissolution; imbalance causes <strong>bleeding</strong> or <strong>vaso-occlusion</strong>. <strong>Coagulation (secondary haemostasis)</strong> is a <strong>cascade</strong> in which inactive enzymes are activated and in turn activate others: plasma proteins, <strong>tissue factor</strong> and <strong>calcium</strong> interact on the <strong>platelet surface</strong> to convert soluble <strong>fibrinogen</strong> into insoluble <strong>fibrin</strong>, the 'glue' that stabilises the platelet plug.</p>"
  },
  {
   "id": "s1",
   "title": "Clotting factors",
   "html": "<p>Most are <strong>zymogens</strong> (inactive precursors, many becoming serine proteases); activation is written with 'a' (prothrombin II → thrombin IIa). Most procoagulants and anticoagulants are made by the <strong>liver</strong> (except factors III and IV). <strong>Factors V and VIII</strong> are cofactors, called <strong>labile factors</strong> (lost in stored blood). <strong>Tissue factor (III)</strong>: membrane glycoprotein in the vessel media, adventitia and fibroblasts (and on monocytes), hidden from blood until injury; the <strong>main initiator in vivo</strong>; also expressed in sepsis, malignancy and inflammation (hypercoagulable states). <strong>Vitamin K-dependent</strong> factors: <strong>II, VII, IX, X</strong> and the inhibitors <strong>proteins C and S</strong>; vitamin K adds calcium-binding groups; without it (deficiency or <strong>warfarin</strong>) inactive proteins (PIVKA) are released. <strong>Contact factors</strong>: XII, XI, prekallikrein and high-molecular-weight kininogen. <strong>Calcium (IV)</strong> is mandatory (tubes use a calcium chelator). <strong>Phospholipids</strong> localise reactions and bind enzyme-cofactor complexes.</p>"
  },
  {
   "id": "s2",
   "title": "Pathways",
   "html": "<p><strong>Classic model</strong>: the <strong>extrinsic pathway</strong> starts when tissue factor meets blood and binds <strong>VIIa</strong>; the <strong>intrinsic pathway</strong> starts when XII binds a negatively charged surface (with prekallikrein and HMWK), activating XI, then IX, which with <strong>VIII</strong> forms the <strong>tenase</strong> complex (IXa, VIIIa, Ca²⁺, phospholipid) activating X; the <strong>common pathway</strong>: <strong>Xa + Va</strong>, Ca²⁺ and phospholipid form the <strong>prothrombinase</strong> complex converting prothrombin to <strong>thrombin</strong>, which cleaves fibrinogen to fibrin and activates <strong>XIII</strong>, cross-linking fibrin. This model explains laboratory tests but not bleeding: lacking XII, prekallikrein or HMWK causes <strong>no bleeding</strong>, and XI deficiency (haemophilia C) is mild, while VIII and IX deficiencies (<strong>haemophilia A and B</strong>) bleed badly. <strong>Cell-based model</strong> (in vivo): <strong>initiation</strong> (TF-VIIa activates IX and X; a little thrombin), <strong>amplification</strong> (thrombin activates V, VIII, XI and platelets), <strong>propagation</strong> (tenase and prothrombinase on platelet surfaces generate a burst of thrombin), <strong>stabilisation</strong> (XIIIa cross-links fibrin). TF-VIIa activation of IX bridges the two classic pathways.</p>"
  },
  {
   "id": "s3",
   "title": "Natural inhibitors and laboratory tests",
   "html": "<p><strong>Antithrombin</strong>: serine protease inhibitor of thrombin, IXa, Xa, XIa, XIIa; greatly enhanced by <strong>heparin</strong> (endothelial heparan sulfate in vivo; heparin is used as an anticoagulant drug). <strong>Protein C</strong> (vitamin K-dependent, activated by thrombin) with its cofactor <strong>protein S</strong> inactivates <strong>Va and VIIIa</strong>. <strong>TFPI</strong> (from endothelium) blocks TF-VIIa. <strong>Pre-analytical rules</strong>: <strong>3.2% citrate</strong> tube filled correctly (blood:anticoagulant <strong>9:1</strong>; underfilling gives falsely long times), no clot (consumes factors), no heparin contamination from central lines, direct venepuncture with minimal tourniquet, rapid transport; repeat abnormal screens before further tests. <strong>Screening</strong>: <strong>PT</strong> (thromboplastin + calcium; extrinsic and common pathway: I, II, V, VII, X; Quick, 1935), <strong>aPTT</strong> (intrinsic and common pathway), <strong>thrombin time</strong> and <strong>fibrinogen</strong>; then factor assays and mixing studies.</p>"
  }
 ],
 "exam": [
  "Coagulation: cascade on platelet surfaces converting fibrinogen to fibrin.",
  "Zymogens; 'a' = activated; most factors made by the liver.",
  "V and VIII: labile cofactors.",
  "Tissue factor (III): main initiator in vivo.",
  "Vitamin K-dependent: II, VII, IX, X, proteins C and S; warfarin blocks.",
  "Extrinsic: TF + VIIa; intrinsic: XII → XI → IX + VIII (tenase).",
  "Common: Xa + Va (prothrombinase) → thrombin → fibrin; XIIIa cross-links.",
  "XII deficiency: no bleeding; VIII/IX deficiency: haemophilia A/B.",
  "Cell-based: initiation, amplification, propagation, stabilisation.",
  "Antithrombin (+ heparin); protein C + S (Va, VIIIa); TFPI (TF-VIIa).",
  "Citrate 3.2%, 9:1; PT (extrinsic), aPTT (intrinsic), TT, fibrinogen."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Coagulation: classic cascade and tests",
   "caption": "Extrinsic (PT) and intrinsic (aPTT) meet in the common pathway. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"240\" y1=\"70\" x2=\"270\" y2=\"160\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"740\" y1=\"70\" x2=\"270\" y2=\"160\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"190\" x2=\"380\" y2=\"230\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"750\" y1=\"252\" x2=\"270\" y2=\"160\"/>",
   "parts": {
    "ext": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Extrinsic: tissue factor",
      "+ VIIa  → PT"
     ],
     "lx": 130.0,
     "ly": 68.0
    },
    "int": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"520\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Intrinsic: XII → XI → IX",
      "(+ VIII) → aPTT"
     ],
     "lx": 630.0,
     "ly": 68.0
    },
    "com": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"270\" y=\"130\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Common: Xa + Va (prothrombinase)",
      "→ thrombin (IIa)"
     ],
     "lx": 380.0,
     "ly": 158.0
    },
    "fib": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"270\" y=\"230\" width=\"220\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Fibrinogen → fibrin;",
      "XIIIa cross-links"
     ],
     "lx": 380.0,
     "ly": 255.5
    },
    "inh": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"520\" y=\"220\" width=\"230\" height=\"65\" rx=\"10\"/>",
     "label": [
      "Inhibitors: antithrombin (+ heparin),",
      "protein C/S (Va, VIIIa), TFPI"
     ],
     "lx": 635.0,
     "ly": 250.5
    }
   },
   "arrows": {
    "ext": [
     {
      "t": [
       20.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "int": [
     {
      "t": [
       520.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "com": [
     {
      "t": [
       270.0,
       138.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "fib": [
     {
      "t": [
       270.0,
       238.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "inh": [
     {
      "t": [
       520.0,
       228.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ]
   }
  }
 },
 "mcqs": [
  {
   "q": "Coagulation ends with the conversion of:",
   "options": [
    "Fibrinogen to fibrin",
    "Plasminogen to plasmin",
    "Prothrombin to fibrinogen",
    "Factor XII to XIIa only"
   ],
   "answer": 0,
   "why": "Fibrin stabilises the plug."
  },
  {
   "q": "Which factors are called labile?",
   "options": [
    "IX and X",
    "V and VIII",
    "XII and XI",
    "II and VII"
   ],
   "answer": 1,
   "why": "Lost in stored blood."
  },
  {
   "q": "The main initiator of coagulation in vivo is:",
   "options": [
    "Factor VIII",
    "Tissue factor",
    "Factor XII",
    "Calcium"
   ],
   "answer": 1,
   "why": "Extrinsic pathway."
  },
  {
   "q": "Which are vitamin K-dependent factors?",
   "options": [
    "I, V, XIII",
    "XII, XI",
    "II, VII, IX, X",
    "V, VIII, XI"
   ],
   "answer": 2,
   "why": "Plus proteins C and S."
  },
  {
   "q": "Warfarin works by:",
   "options": [
    "Dissolving fibrin",
    "Activating antithrombin",
    "Inhibiting platelets",
    "Blocking vitamin K"
   ],
   "answer": 3,
   "why": "PIVKA released."
  },
  {
   "q": "The tenase complex consists of:",
   "options": [
    "IXa + VIIIa",
    "IIa + fibrinogen",
    "TF + VIIa",
    "Xa + Va"
   ],
   "answer": 0,
   "why": "Activates factor X."
  },
  {
   "q": "The prothrombinase complex converts:",
   "options": [
    "Plasminogen to plasmin",
    "Fibrinogen to fibrin",
    "X to Xa",
    "Prothrombin to thrombin"
   ],
   "answer": 3,
   "why": "Xa + Va."
  },
  {
   "q": "Which factor cross-links fibrin?",
   "options": [
    "Factor VII",
    "Factor XIII",
    "Factor XII",
    "Factor V"
   ],
   "answer": 1,
   "why": "Fibrin-stabilising factor."
  },
  {
   "q": "Deficiency of factor XII causes:",
   "options": [
    "No abnormal bleeding",
    "Thrombocytopenia",
    "Severe bleeding",
    "Haemophilia A"
   ],
   "answer": 0,
   "why": "Contact factors are not needed in vivo."
  },
  {
   "q": "Haemophilia A is a deficiency of:",
   "options": [
    "Factor IX",
    "Factor VIII",
    "Factor VII",
    "Factor XI"
   ],
   "answer": 1,
   "why": "Haemophilia B: factor IX."
  },
  {
   "q": "Antithrombin activity is greatly enhanced by:",
   "options": [
    "Warfarin",
    "Heparin",
    "Vitamin K",
    "Calcium"
   ],
   "answer": 1,
   "why": "Inactivates thrombin and Xa."
  },
  {
   "q": "Activated protein C inactivates:",
   "options": [
    "Factors Va and VIIIa",
    "Factors II and VII",
    "Tissue factor",
    "Fibrinogen"
   ],
   "answer": 0,
   "why": "With protein S."
  },
  {
   "q": "The citrate tube ratio of blood to anticoagulant should be:",
   "options": [
    "1:1",
    "4:1",
    "20:1",
    "9:1"
   ],
   "answer": 3,
   "why": "Underfilling prolongs times."
  },
  {
   "q": "The prothrombin time (PT) explores the:",
   "options": [
    "Extrinsic and common pathways",
    "Platelets",
    "Intrinsic pathway",
    "Fibrinolysis"
   ],
   "answer": 0,
   "why": "Factors I, II, V, VII, X."
  },
  {
   "q": "Heparin contamination from a central line typically prolongs the:",
   "options": [
    "Platelet count",
    "Fibrinogen",
    "aPTT",
    "PT only"
   ],
   "answer": 2,
   "why": "Pre-analytical error."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ext",
   "options": [
    "Intrinsic pathway",
    "Fibrin",
    "Common pathway",
    "Extrinsic pathway"
   ],
   "answer": 3,
   "why": "The arrow points to: Extrinsic pathway. Tissue factor exposed by injury binds factor VIIa; the main initiator in vivo; explored by the prothrombin time (factors VII, X, V, II, I)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "int",
   "options": [
    "Natural anticoagulants",
    "Extrinsic pathway",
    "Intrinsic pathway",
    "Fibrin"
   ],
   "answer": 2,
   "why": "The arrow points to: Intrinsic pathway. Contact activation of XII, then XI, IX with cofactor VIII (tenase); explored by the aPTT."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "com",
   "options": [
    "Natural anticoagulants",
    "Intrinsic pathway",
    "Extrinsic pathway",
    "Common pathway"
   ],
   "answer": 3,
   "why": "The arrow points to: Common pathway. Factor Xa with cofactor Va, calcium and phospholipids (prothrombinase) converts prothrombin to thrombin."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "fib",
   "options": [
    "Intrinsic pathway",
    "Common pathway",
    "Fibrin",
    "Extrinsic pathway"
   ],
   "answer": 2,
   "why": "The arrow points to: Fibrin. Thrombin cleaves fibrinogen to fibrin and activates factor XIII, which cross-links it into a stable clot."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "inh",
   "options": [
    "Intrinsic pathway",
    "Fibrin",
    "Natural anticoagulants",
    "Common pathway"
   ],
   "answer": 2,
   "why": "The arrow points to: Natural anticoagulants. Antithrombin inactivates thrombin, IXa, Xa, XIa, XIIa (boosted by heparin); activated protein C with protein S inactivates Va and VIIIa; TFPI blocks TF-VIIa."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Define coagulation.",
   "back": "Cascade of enzyme activations where plasma proteins, tissue factor and calcium interact on platelets to form fibrin."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Clotting factor facts?",
   "back": "Zymogens (serine proteases), 'a' = active; mostly liver-made; V and VIII labile cofactors; TF main in vivo initiator."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Vitamin K-dependent proteins?",
   "back": "II, VII, IX, X, proteins C and S; warfarin or deficiency → inactive PIVKA."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Classic pathways?",
   "back": "Extrinsic: TF + VIIa. Intrinsic: XII, XI, IX + VIII (tenase). Common: Xa + Va (prothrombinase) → thrombin → fibrin; XIII cross-links."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Limits of the classic model?",
   "back": "XII/PK/HMWK deficiency → no bleeding; XI deficiency mild; haemophilia A/B cannot bypass via the other pathway."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Cell-based model?",
   "back": "Initiation (TF-VIIa → IX, X, little thrombin), amplification (V, VIII, XI, platelets), propagation (thrombin burst), stabilisation (XIIIa)."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Natural anticoagulants?",
   "back": "Antithrombin (+ heparin): thrombin, IXa, Xa, XIa, XIIa. Protein C + S: Va, VIIIa. TFPI: TF-VIIa."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Coagulation tests and pre-analytics?",
   "back": "Citrate 3.2%, 9:1, no clot or heparin; PT (extrinsic + common), aPTT (intrinsic + common), TT, fibrinogen; then factor assays, mixing studies."
  },
  {
   "id": "img-ext",
   "type": "image",
   "target": "ext",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Extrinsic pathway. Tissue factor exposed by injury binds factor VIIa; the main initiator in vivo; explored by the prothrombin time (factors VII, X, V, II, I)."
  },
  {
   "id": "img-int",
   "type": "image",
   "target": "int",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Intrinsic pathway. Contact activation of XII, then XI, IX with cofactor VIII (tenase); explored by the aPTT."
  },
  {
   "id": "img-com",
   "type": "image",
   "target": "com",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Common pathway. Factor Xa with cofactor Va, calcium and phospholipids (prothrombinase) converts prothrombin to thrombin."
  },
  {
   "id": "img-fib",
   "type": "image",
   "target": "fib",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Fibrin. Thrombin cleaves fibrinogen to fibrin and activates factor XIII, which cross-links it into a stable clot."
  },
  {
   "id": "img-inh",
   "type": "image",
   "target": "inh",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Natural anticoagulants. Antithrombin inactivates thrombin, IXa, Xa, XIa, XIIa (boosted by heparin); activated protein C with protein S inactivates Va and VIIIa; TFPI blocks TF-VIIa."
  }
 ],
 "deeper": [
  {
   "title": "Why haemophilia patients cannot use the 'other pathway'",
   "html": "<p>In the old two-pathway picture, a patient lacking factor VIII should clot through the extrinsic route. In reality, TF-VIIa makes only a small amount of thrombin; a large, sustained burst requires the tenase complex (IXa + VIIIa) on activated platelets during propagation. Without VIII or IX there is no burst, so clots are weak and bleeding into joints and muscles follows, while XII deficiency, which is not needed in vivo, causes no bleeding at all.</p><p class='src'>Source: the lecture's cell-based model of coagulation.</p>"
  }
 ],
 "resources": [
  {
   "title": "Coagulation cascade (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK482253/",
   "kind": "Book",
   "why": "Factors, pathways and tests.",
   "note": ""
  },
  {
   "title": "Hemophilia (NHLBI)",
   "url": "https://www.nhlbi.nih.gov/health/hemophilia",
   "kind": "Website",
   "why": "Factor VIII and IX deficiencies.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Coagulation cascade (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK482253/"
  },
  {
   "name": "Hemophilia (NHLBI)",
   "url": "https://www.nhlbi.nih.gov/health/hemophilia"
  }
 ],
 "verified": "22 Sep 2026"
};
