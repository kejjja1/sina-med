/* cellbio1: 4 lectures, merged for upload. Edit the source files, not this one. */
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["cellbio1-methods"] = {
 "id": "cellbio1-methods",
 "subject": "cellbio1",
 "group": "Cell biology",
 "title": "Cell study methods: microscopy, histology and cell culture",
 "sourceFile": "Chap1 Cell Studying Methods (2025) (Cell Biology, Pr. Aboussaouira)",
 "sourceUrl": "https://drive.google.com/file/d/1Saw5PTa_i1gPTQudhY2gqCzGGSfpniV2/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>Cells are studied at three levels: <strong>morphological</strong> (microscopy), <strong>biochemical</strong> (electrophoresis, chromatography, ELISA: see biochemistry) and <strong>physiological</strong> (<strong>cell culture</strong>). In medicine these methods <strong>confirm diagnoses</strong> (biopsy in cancer) and <strong>identify germs</strong> (e.g. tuberculosis in sputum).</p>"
  },
  {
   "id": "s1",
   "title": "Microscopes",
   "html": "<p><strong>Light microscope (LM)</strong>: base, arm and optical tube; light source below; three lenses: <strong>condenser</strong> (focuses light on the specimen), <strong>objective</strong> (4×, 10×, 100×) and <strong>eyepiece</strong> (10×). Observes cell structure (membrane, cytoplasm, nucleus) and confirms diagnosis (skin sections, tumours). Limits: cannot show labelling or living unstained cells, so special light microscopes exist: <strong>fluorescence microscope</strong> (UV lamp detects fluorescent labels; helps type cancers), <strong>confocal microscope</strong> (improved fluorescence with higher resolution and better localisation) and <strong>inverted microscope</strong> (lamp on top, objective under the stage; observes <strong>living, unstained cultured cells</strong>, e.g. embryos in assisted reproduction; uses phase-contrast optics). LM magnification reaches about <strong>1,000×</strong> (structure) and cannot show organelles.</p><p><strong>Transmission electron microscope (TEM)</strong>: same layout but an <strong>electron beam</strong> instead of a lamp, three <strong>magnetic lenses</strong>, and a <strong>vacuum pump</strong> so electrons are not deflected; about <strong>100,000×</strong>, showing <strong>ultrastructure</strong> (organelles; e.g. demyelinated axons with macrophages in mad cow disease). <strong>Scanning electron microscope (SEM)</strong>: electron beam, detector, image converter and monitor give <strong>3D surface</strong> images of whole cells, bacteria and viruses (red cells, lymphocytes).</p>"
  },
  {
   "id": "s2",
   "title": "Preparing samples",
   "html": "<p><strong>Cytology (smears)</strong> for free cells: blood, bone marrow, ascitic fluid, CSF, vaginal or oral cells. Blood smear: place a drop at the edge of a slide, spread with another slide, <strong>air-dry</strong>, stain with <strong>MGG (May-Grünwald-Giemsa)</strong>. <strong>Histology</strong> for solid tissues (liver, skin, heart, muscle, bone): <strong>sampling → fixation → inclusion (embedding) → sectioning → staining</strong>. <strong>Fixation</strong> preserves tissue in a life-like state (Bouin's fluid in medicine). <strong>Inclusion</strong> replaces water with <strong>paraffin</strong> to harden the tissue for thin sections. <strong>Microtomy</strong>: 3-4 µm sections with a microtome (cryostat for frozen tissue), placed on slides. <strong>Staining</strong> creates contrast between transparent structures: basic dye <strong>haematoxylin</strong> stains <strong>nuclei blue</strong>, acidic <strong>eosin</strong> stains <strong>cytoplasm pink</strong>; standard <strong>HE</strong>; <strong>HES</strong> adds saffron to show <strong>fibres in yellow</strong> (fibrosis).</p>"
  },
  {
   "id": "s3",
   "title": "Cell culture",
   "html": "<p>Medical uses: <strong>karyotype</strong> (chromosomes for genetic diseases), drug development for <strong>marketing authorisation</strong> (in vitro → animal → human trials) and <strong>assisted reproduction</strong> (in vitro fertilisation). Conditions: <strong>37 °C</strong>, <strong>pH 7-7.4</strong> in a <strong>CO₂ (5%) incubator</strong>, <strong>sterility</strong> (laminar flow hood, germicidal UV), sterile single-use plastic vessels, media such as <strong>MEM</strong> or <strong>RPMI 1640</strong> (water, salts, vitamins, amino acids, glucose, antibiotics, fetal calf serum, growth factors). Steps (under the hood): take living tissue, <strong>mechanical dissociation</strong>, <strong>enzymatic dissociation</strong> (trypsin, collagenase), <strong>count cells</strong>, add medium (~10⁶ cells per 10 mL), incubate, count daily with the inverted microscope, and subculture into new flasks when cells exceed ~10⁶ per 10 mL.</p>"
  }
 ],
 "exam": [
  "Three levels: morphological, biochemical, physiological (culture).",
  "LM: condenser, objective (4-100×), eyepiece (10×); ~1,000×.",
  "Fluorescence: UV lamp, labelled cells; confocal: higher resolution.",
  "Inverted: living unstained cultured cells (IVF embryos).",
  "TEM: electron beam, magnetic lenses, vacuum; ~100,000×, ultrastructure.",
  "SEM: 3D surface images.",
  "Smear: spread, air-dry, MGG stain.",
  "Histology: sampling, fixation (Bouin), paraffin inclusion, 3-4 µm sections, staining.",
  "HE: haematoxylin nuclei blue, eosin cytoplasm pink; HES fibres yellow.",
  "Culture: 37 °C, pH 7-7.4, 5% CO₂, sterile hood, RPMI/MEM; trypsin dissociation."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "The six microscopes of medicine",
   "caption": "Light-based vs electron-based. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"240\" y1=\"70\" x2=\"280\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"70\" x2=\"520\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"200\" x2=\"520\" y2=\"200\"/>",
   "parts": {
    "lm": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"40\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Light (LM): stained",
      "sections, ~1,000×"
     ],
     "lx": 140.0,
     "ly": 68.0
    },
    "fm": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"280\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Fluorescent (FM): UV lamp,",
      "labelled cells"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "cm": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"520\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Confocal (CM): sharper",
      "fluorescence, laser"
     ],
     "lx": 620.0,
     "ly": 68.0
    },
    "rm": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"40\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Inverted: living unstained",
      "cultured cells, IVF"
     ],
     "lx": 140.0,
     "ly": 198.0
    },
    "tem": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"280\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "TEM: electron beam, vacuum,",
      "ultrastructure ~100,000×"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "sem": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"520\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "SEM: 3D surface",
      "(cells, bacteria, viruses)"
     ],
     "lx": 620.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "lm": [
     {
      "t": [
       40.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "fm": [
     {
      "t": [
       280.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "cm": [
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
    "rm": [
     {
      "t": [
       40.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "tem": [
     {
      "t": [
       280.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "sem": [
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
    ]
   }
  },
  "mindmap": {
   "root": "Cell study methods",
   "branches": [
    [
     "Microscopy",
     [
      "Light: ~1,000×",
      "Fluorescence, confocal",
      "Inverted (culture)",
      "TEM: ultrastructure",
      "SEM: 3D surface"
     ]
    ],
    [
     "Cytology",
     [
      "Smears (blood, marrow, CSF)",
      "MGG stain"
     ]
    ],
    [
     "Histology",
     [
      "Fixation (Bouin)",
      "Paraffin inclusion",
      "3-4 µm sections",
      "HE, HES"
     ]
    ],
    [
     "Cell culture",
     [
      "37 °C, pH 7-7.4, 5% CO₂",
      "Sterile hood",
      "Trypsin",
      "Karyotype, IVF, drugs"
     ]
    ]
   ]
  }
 },
 "mcqs": [
  {
   "q": "Which is NOT a component of a light microscope?",
   "options": [
    "Objective",
    "Condenser",
    "Eyepiece",
    "UV lamp"
   ],
   "answer": 3,
   "why": "The UV lamp is used in fluorescence microscopy."
  },
  {
   "q": "The condenser of a light microscope:",
   "options": [
    "Stains the cells",
    "Magnifies the image",
    "Focuses light on the specimen",
    "Records the image"
   ],
   "answer": 2,
   "why": "The objective magnifies."
  },
  {
   "q": "Which microscope detects fluorescent labels using a UV lamp?",
   "options": [
    "Inverted",
    "Fluorescence",
    "SEM",
    "TEM"
   ],
   "answer": 1,
   "why": "Used to type cancers."
  },
  {
   "q": "Living, unstained cells in culture are observed with the:",
   "options": [
    "TEM",
    "Confocal only",
    "Inverted microscope",
    "SEM"
   ],
   "answer": 2,
   "why": "Lamp above, objective below."
  },
  {
   "q": "Why does a TEM need a vacuum pump?",
   "options": [
    "Avoid electron deflection",
    "To cool the sample",
    "To stain the tissue",
    "To increase light"
   ],
   "answer": 0,
   "why": "Electrons collide with air molecules."
  },
  {
   "q": "Organelle ultrastructure requires:",
   "options": [
    "Inverted microscope",
    "Electron microscope",
    "Magnifying glass",
    "Light microscope"
   ],
   "answer": 1,
   "why": "About 100,000× vs 1,000×."
  },
  {
   "q": "3D surface images of red blood cells are obtained with:",
   "options": [
    "LM",
    "TEM",
    "SEM",
    "Fluorescence microscope"
   ],
   "answer": 2,
   "why": "Scanning electron microscope."
  },
  {
   "q": "A blood smear is stained with:",
   "options": [
    "Ziehl",
    "Gram",
    "HE",
    "MGG"
   ],
   "answer": 3,
   "why": "After air-drying."
  },
  {
   "q": "The correct order of histological processing is:",
   "options": [
    "Section, fixation, staining",
    "Sample, fix, embed, cut, stain",
    "Staining, fixation, section",
    "Inclusion, sampling, staining"
   ],
   "answer": 1,
   "why": "Then microscopy."
  },
  {
   "q": "Which fixative is used in medicine?",
   "options": [
    "Bouin's fluid",
    "Paraffin",
    "Eosin",
    "Trypsin"
   ],
   "answer": 0,
   "why": "Preserves tissue in a life-like state."
  },
  {
   "q": "The purpose of paraffin inclusion is to:",
   "options": [
    "Harden for sectioning",
    "Fix proteins",
    "Kill bacteria",
    "Stain nuclei"
   ],
   "answer": 0,
   "why": "Replaces intracellular water."
  },
  {
   "q": "In HE staining, nuclei appear:",
   "options": [
    "Yellow",
    "Green",
    "Pink",
    "Blue"
   ],
   "answer": 3,
   "why": "Haematoxylin is basic; eosin stains cytoplasm pink."
  },
  {
   "q": "HES staining shows fibres in:",
   "options": [
    "Blue",
    "Pink",
    "Black",
    "Yellow"
   ],
   "answer": 3,
   "why": "Used to assess fibrosis."
  },
  {
   "q": "Cell culture is performed at:",
   "options": [
    "37 °C, pH 7-7.4 with 5% CO₂",
    "25 °C, pH 5",
    "4 °C",
    "34 °C, neutral pH"
   ],
   "answer": 0,
   "why": "In a CO₂ incubator."
  },
  {
   "q": "Which enzyme is used to dissociate tissue for culture?",
   "options": [
    "Lipase",
    "Trypsin",
    "Amylase",
    "DNase"
   ],
   "answer": 1,
   "why": "Or collagenase."
  },
  {
   "q": "Which is a medical application of cell culture?",
   "options": [
    "HE staining",
    "Blood smear",
    "Bouin fixation",
    "Karyotype"
   ],
   "answer": 3,
   "why": "Also IVF and drug testing."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "lm",
   "options": [
    "Confocal microscope",
    "Inverted microscope",
    "Light microscope",
    "Fluorescence microscope"
   ],
   "answer": 2,
   "why": "The arrow points to: Light microscope. Lamp, condenser, objective (4×, 10×, 100×), eyepiece (10×); observes cell structure, confirms diagnosis on biopsies."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "fm",
   "options": [
    "Transmission EM",
    "Fluorescence microscope",
    "Inverted microscope",
    "Light microscope"
   ],
   "answer": 1,
   "why": "The arrow points to: Fluorescence microscope. LM with a UV lamp to detect fluorescent labels; helps specify the type of cancer."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "cm",
   "options": [
    "Transmission EM",
    "Confocal microscope",
    "Inverted microscope",
    "Fluorescence microscope"
   ],
   "answer": 1,
   "why": "The arrow points to: Confocal microscope. Improved fluorescence microscope with higher resolution and better localisation of the signal."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "rm",
   "options": [
    "Inverted microscope",
    "Transmission EM",
    "Confocal microscope",
    "Fluorescence microscope"
   ],
   "answer": 0,
   "why": "The arrow points to: Inverted microscope. Lamp above, objective below the stage; observes living, unstained cells in culture (e.g. embryos in assisted reproduction)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "tem",
   "options": [
    "Transmission EM",
    "Scanning EM",
    "Confocal microscope",
    "Inverted microscope"
   ],
   "answer": 0,
   "why": "The arrow points to: Transmission EM. Electron source, magnetic lenses, vacuum pump; sees organelles (e.g. demyelinated axons in prion disease)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "sem",
   "options": [
    "Inverted microscope",
    "Confocal microscope",
    "Scanning EM",
    "Light microscope"
   ],
   "answer": 2,
   "why": "The arrow points to: Scanning EM. Electron beam scans the surface, detector and converter give 3D images of cells, bacteria, viruses."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Three levels of cell study?",
   "back": "Morphological (microscopy), biochemical (electrophoresis, chromatography, ELISA), physiological (cell culture)."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Light microscope components?",
   "back": "Light source, condenser (focuses light), objective (4×, 10×, 100×), eyepiece (10×); base, arm, optical tube."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Special light microscopes?",
   "back": "Fluorescence (UV, labelled cells), confocal (higher-resolution fluorescence), inverted (living unstained cultured cells)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "TEM vs SEM?",
   "back": "TEM: electron beam, magnetic lenses, vacuum, internal ultrastructure (~100,000×). SEM: scans surface, 3D images of cells, bacteria, viruses."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Steps of a blood smear?",
   "back": "Drop at slide edge, spread with a second slide, air-dry, stain with MGG."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Steps of histological processing?",
   "back": "Sampling, fixation (Bouin), inclusion (paraffin), sectioning (3-4 µm microtome), staining (HE, HES)."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "HE and HES?",
   "back": "HE: haematoxylin nuclei blue, eosin cytoplasm pink. HES: plus saffron, fibres yellow."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Cell culture conditions?",
   "back": "37 °C, pH 7-7.4, 5% CO₂ incubator, sterility (hood, UV), sterile vessels, MEM/RPMI 1640 medium with serum and antibiotics."
  },
  {
   "id": "x8",
   "type": "text",
   "front": "Cell culture steps?",
   "back": "Tissue sample, mechanical then enzymatic (trypsin) dissociation, count, add medium (~10⁶/10 mL), incubate, daily counts, subculture."
  },
  {
   "id": "img-lm",
   "type": "image",
   "target": "lm",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Light microscope. Lamp, condenser, objective (4×, 10×, 100×), eyepiece (10×); observes cell structure, confirms diagnosis on biopsies."
  },
  {
   "id": "img-fm",
   "type": "image",
   "target": "fm",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Fluorescence microscope. LM with a UV lamp to detect fluorescent labels; helps specify the type of cancer."
  },
  {
   "id": "img-cm",
   "type": "image",
   "target": "cm",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Confocal microscope. Improved fluorescence microscope with higher resolution and better localisation of the signal."
  },
  {
   "id": "img-rm",
   "type": "image",
   "target": "rm",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Inverted microscope. Lamp above, objective below the stage; observes living, unstained cells in culture (e.g. embryos in assisted reproduction)."
  },
  {
   "id": "img-tem",
   "type": "image",
   "target": "tem",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Transmission EM. Electron source, magnetic lenses, vacuum pump; sees organelles (e.g. demyelinated axons in prion disease)."
  },
  {
   "id": "img-sem",
   "type": "image",
   "target": "sem",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Scanning EM. Electron beam scans the surface, detector and converter give 3D images of cells, bacteria, viruses."
  }
 ],
 "deeper": [
  {
   "title": "Why electron microscopes see more",
   "html": "<p>What limits a microscope is the wavelength of what it uses to 'see'. Visible light cannot separate structures closer than about 0.2 µm, so organelles blur together. Electrons have a far shorter wavelength, so an electron microscope can separate much finer detail, revealing membranes and organelles; the price is a vacuum and dead, specially prepared samples.</p><p class='src'>Source: the lecture's light and special microscope limits slide.</p>"
  },
  {
   "title": "Why tissues are stained",
   "html": "<p>Most cell structures are colourless and have similar refractive indices, so an unstained section looks almost blank. Haematoxylin, a basic dye, binds acidic structures such as DNA in the nucleus, and eosin, an acidic dye, binds basic proteins in the cytoplasm. The blue-pink contrast lets pathologists read tissue architecture and spot tumours.</p><p class='src'>Source: the lecture's staining slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "Microscopy basics (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/structure-of-a-cell",
   "kind": "Website",
   "why": "Cell structure and microscopy.",
   "note": ""
  },
  {
   "title": "Histology techniques (video linked in the lecture)",
   "url": "https://www.youtube.com/watch?v=P0cZKCfyUwE",
   "kind": "Video",
   "why": "Tissue processing from biopsy to slide.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Microscopy basics (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/structure-of-a-cell"
  },
  {
   "name": "Histology techniques (video linked in the lecture)",
   "url": "https://www.youtube.com/watch?v=P0cZKCfyUwE"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["cellbio1-membrane"] = {
 "id": "cellbio1-membrane",
 "subject": "cellbio1",
 "group": "Cell biology",
 "title": "The plasma membrane: structure, exchanges and signalling",
 "sourceFile": "Chap2 Plasma Membrane (2024) (Cell Biology, Pr. Aboussaouira)",
 "sourceUrl": "https://drive.google.com/file/d/1pBRhaIYB3_c_boRD6cTRCBM8RZeSJ1t3/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>The plasma membrane is an <strong>asymmetric fluid mosaic</strong>: lipids, proteins and carbohydrates (the mosaic) that move in all directions (fluid), with sugars only on the outer face (asymmetric). It controls <strong>exchanges</strong>, receives <strong>signals</strong> and mediates <strong>cell adhesion</strong>. The red cell membrane is about <strong>40% lipids, 50% proteins, 10% carbohydrates</strong>.</p>"
  },
  {
   "id": "s1",
   "title": "Components",
   "html": "<p><strong>Phospholipids</strong> (~75% of lipids): glycerol + 2 hydrophobic fatty acid tails + phosphate + one small hydrophilic molecule (choline, inositol, serine or ethanolamine), forming the <strong>bilayer</strong> with heads outward. <strong>Cholesterol</strong> (~25%): an alcohol group (hydrophilic), 4 rings and a hydrocarbon chain; inserted between phospholipids, it <strong>limits permeability</strong>. <strong>Proteins</strong>: <strong>peripheral</strong> (hydrophilic, on either face; e.g. clathrin, G proteins) and <strong>integral</strong> (amphipathic, partly buried; <strong>transmembrane</strong> proteins such as pumps, carriers and ion channels). <strong>Carbohydrates</strong>: oligo- and polysaccharides attached to lipids (<strong>glycolipids</strong>) or proteins (<strong>glycoproteins</strong>), only on the <strong>extracellular side</strong>, forming the <strong>cell coat (glycocalyx)</strong> with antigenic and protective roles.</p>"
  },
  {
   "id": "s2",
   "title": "Exchanges",
   "html": "<p>The membrane is <strong>semi-permeable</strong>. <strong>Small molecules</strong> (amino acids, fatty acids, ions, glucose) cross without deforming it: <strong>passive transport</strong> (no ATP, down the concentration gradient) by <strong>simple diffusion</strong> (gases O₂, CO₂, NO; water; some ions; small uncharged molecules like urea, glycerol) or <strong>facilitated diffusion</strong> through <strong>aquaporins</strong> (water), <strong>ion channels</strong> and <strong>carrier proteins</strong> (e.g. <strong>GLUT4</strong> for glucose: binding, conformational change, release inside, return). Water also moves by <strong>osmosis</strong> and <strong>filtration</strong> (capillaries, kidney tubules). <strong>Active transport</strong> uses <strong>ATP</strong> to move ions <strong>against</strong> their gradient: the <strong>Na⁺/K⁺-ATPase</strong> binds intracellular Na⁺, is phosphorylated by ATP, changes shape and releases Na⁺ outside, binds extracellular K⁺, is dephosphorylated and releases K⁺ inside (1 ATP per cycle; it moves 3 Na⁺ out and 2 K⁺ in). <strong>MDR/ABC pumps</strong> expel many drugs (ATP-dependent, non-specific), explaining resistance of tumours to chemotherapy and of Plasmodium-infected cells to antimalarials.</p><p><strong>Large molecules</strong>, bacteria and viruses use <strong>vesicular exchange</strong> (deforms the membrane, uses ATP). <strong>Endocytosis</strong> on <strong>clathrin</strong> (triskelion-shaped peripheral protein): adsorption, invagination, vesicle formation and detachment, fusion with a <strong>lysosome</strong> to form a digestive vacuole; <strong>phagocytosis</strong> of solids (macrophages, Kupffer cells, osteoclasts) and <strong>pinocytosis</strong> of liquids. <strong>Exocytosis</strong> is the reverse: vesicles fuse with the membrane via <strong>SNARE</strong> proteins and release their content (saliva, most hormones, pancreatic <strong>zymogens</strong>).</p>"
  },
  {
   "id": "s3",
   "title": "Cell signalling",
   "html": "<p>Cells act on signals (mitosis, metabolism, secretion, differentiation, contraction, neurotransmission, migration); a cell deprived of survival signals undergoes <strong>apoptosis</strong>. Signals: <strong>hormones</strong>, <strong>growth factors</strong> (EGF, NGF, FGF, PDGF), lipids, photons, <strong>death factors</strong> (xenobiotics, UV, H₂O₂, ROS). General scheme: <strong>signal → membrane receptor → kinase cascade → cellular response</strong>. Receptors studied: <strong>G protein-coupled receptors (GPCR)</strong> for many hormones, <strong>receptor tyrosine kinases (RTK)</strong> for growth factors, and <strong>death receptors</strong>. <strong>PKA pathway</strong>: hormone binds a GPCR → the trimeric G protein (activated by GTP) stimulates <strong>adenylyl cyclase</strong> → <strong>cAMP</strong> → <strong>protein kinase A</strong> → phosphorylation of targets (channels, enzymes, transcription factors). <strong>PKC pathway</strong>: G protein activates <strong>phospholipase C</strong> → splits phosphatidylinositol into <strong>DAG</strong> and <strong>IP3</strong> → IP3 opens Ca²⁺ channels of the smooth ER → <strong>DAG + Ca²⁺</strong> activate <strong>PKC</strong> → e.g. contraction, secretion. <strong>MAP kinase pathway</strong>: growth factor → RTK → cytosolic kinase cascade → mitosis. Second messengers: <strong>cAMP</strong> (PKA) and <strong>Ca²⁺</strong> (PKC).</p>"
  }
 ],
 "exam": [
  "Asymmetric fluid mosaic; red cell membrane 40% lipid, 50% protein, 10% carbohydrate.",
  "Phospholipids (~75%): glycerol, 2 fatty acids, phosphate, choline/inositol/serine/ethanolamine.",
  "Cholesterol (~25%) limits permeability.",
  "Proteins: peripheral (clathrin, G proteins) vs integral/transmembrane (pumps, channels).",
  "Carbohydrates only outside: glycocalyx.",
  "Passive: simple (gases, water) or facilitated (channels, aquaporins, GLUT4).",
  "Active: Na⁺/K⁺-ATPase (3 Na⁺ out, 2 K⁺ in per ATP); MDR pumps → drug resistance.",
  "Endocytosis (clathrin): phagocytosis, pinocytosis → lysosome. Exocytosis (SNARE).",
  "Signal → receptor → kinase cascade → response; no survival signal → apoptosis.",
  "GPCR → adenylyl cyclase → cAMP → PKA; GPCR → PLC → IP3 + DAG → Ca²⁺ + PKC; RTK → MAP kinase."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Transport across the plasma membrane",
   "caption": "By molecule size and energy use. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs>",
   "parts": {
    "simple": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Simple diffusion: O₂, CO₂,",
      "water, small uncharged"
     ],
     "lx": 130.0,
     "ly": 68.0
    },
    "fac": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"260\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Facilitated: channels,",
      "aquaporins, carriers (GLUT)"
     ],
     "lx": 370.0,
     "ly": 68.0
    },
    "act": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"500\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Active: Na⁺/K⁺-ATPase,",
      "MDR pumps (ATP)"
     ],
     "lx": 610.0,
     "ly": 68.0
    },
    "endo": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"120\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Endocytosis (clathrin):",
      "phago-, pinocytosis"
     ],
     "lx": 230.0,
     "ly": 198.0
    },
    "exo": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"420\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Exocytosis (SNARE):",
      "hormones, zymogens"
     ],
     "lx": 530.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "simple": [
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
    "fac": [
     {
      "t": [
       260.0,
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
       500.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "endo": [
     {
      "t": [
       120.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "exo": [
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
  },
  "mindmap": {
   "root": "Plasma membrane",
   "branches": [
    [
     "Structure",
     [
      "Phospholipids ~75%",
      "Cholesterol ~25%",
      "Peripheral / integral proteins",
      "Glycocalyx (outside)"
     ]
    ],
    [
     "Passive",
     [
      "Simple diffusion",
      "Facilitated: channels, aquaporins, GLUT4",
      "Osmosis"
     ]
    ],
    [
     "Active",
     [
      "Na⁺/K⁺-ATPase",
      "MDR pumps"
     ]
    ],
    [
     "Vesicular",
     [
      "Endocytosis (clathrin)",
      "Phago- / pinocytosis",
      "Exocytosis (SNARE)"
     ]
    ],
    [
     "Signalling",
     [
      "GPCR → cAMP → PKA",
      "PLC → IP3, DAG → PKC",
      "RTK → MAP kinase",
      "Apoptosis"
     ]
    ]
   ]
  }
 },
 "mcqs": [
  {
   "q": "The plasma membrane is described as:",
   "options": [
    "A carbohydrate wall",
    "An asymmetric fluid mosaic",
    "A single protein layer",
    "Rigid and symmetric"
   ],
   "answer": 1,
   "why": "Molecules move; sugars only outside."
  },
  {
   "q": "The red blood cell membrane is about:",
   "options": [
    "90% lipid",
    "40/50/10% lipid/protein/sugar",
    "50% carbohydrate",
    "100% protein"
   ],
   "answer": 1,
   "why": "Composition by mass."
  },
  {
   "q": "Which small molecule is NOT part of phospholipid heads?",
   "options": [
    "Choline",
    "Inositol",
    "Glucose",
    "Serine"
   ],
   "answer": 2,
   "why": "Also ethanolamine."
  },
  {
   "q": "The role of cholesterol in the membrane is to:",
   "options": [
    "Bind hormones",
    "Form channels",
    "Limit permeability",
    "Carry glucose"
   ],
   "answer": 2,
   "why": "Inserted between phospholipids."
  },
  {
   "q": "Membrane carbohydrates are found:",
   "options": [
    "Only inside",
    "In the bilayer core",
    "On both faces",
    "Only on the extracellular face"
   ],
   "answer": 3,
   "why": "Forming the glycocalyx."
  },
  {
   "q": "Which crosses by simple diffusion?",
   "options": [
    "O₂",
    "Glucose via GLUT4",
    "Proteins",
    "Na⁺ via the pump"
   ],
   "answer": 0,
   "why": "Gases diffuse freely."
  },
  {
   "q": "Facilitated diffusion:",
   "options": [
    "Needs vesicles",
    "Uses ATP",
    "Goes against the gradient",
    "Goes down the gradient using a protein"
   ],
   "answer": 3,
   "why": "Channels, aquaporins, carriers."
  },
  {
   "q": "Water crosses the membrane mainly through:",
   "options": [
    "Clathrin",
    "Aquaporins",
    "SNARE",
    "Na⁺/K⁺-ATPase"
   ],
   "answer": 1,
   "why": "Also by osmosis."
  },
  {
   "q": "The Na⁺/K⁺-ATPase moves:",
   "options": [
    "Na⁺ out and K⁺ in, using ATP",
    "Both down their gradients",
    "Glucose",
    "Na⁺ in and K⁺ out"
   ],
   "answer": 0,
   "why": "3 Na⁺ out, 2 K⁺ in per ATP."
  },
  {
   "q": "MDR (ABC) pumps explain:",
   "options": [
    "Phagocytosis",
    "Chemotherapy resistance",
    "Glucose uptake",
    "Water transport"
   ],
   "answer": 1,
   "why": "They expel drugs using ATP."
  },
  {
   "q": "Endocytosis vesicles form on:",
   "options": [
    "Cholesterol",
    "SNARE",
    "Clathrin",
    "Aquaporins"
   ],
   "answer": 2,
   "why": "A triskelion peripheral protein."
  },
  {
   "q": "Phagocytosis concerns:",
   "options": [
    "Solid particles",
    "Ions",
    "Gases",
    "Liquids"
   ],
   "answer": 0,
   "why": "Macrophages, Kupffer cells, osteoclasts."
  },
  {
   "q": "Exocytosis requires membrane fusion via:",
   "options": [
    "GLUT4",
    "Clathrin",
    "Spectrin",
    "SNARE proteins"
   ],
   "answer": 3,
   "why": "Saliva, hormones, zymogens."
  },
  {
   "q": "In the PKA pathway, the second messenger is:",
   "options": [
    "cAMP",
    "DAG",
    "IP3",
    "Ca²⁺"
   ],
   "answer": 0,
   "why": "Made by adenylyl cyclase."
  },
  {
   "q": "IP3 acts by:",
   "options": [
    "Blocking GPCR",
    "Activating adenylyl cyclase",
    "Phosphorylating DNA",
    "Releasing Ca²⁺ from the smooth ER"
   ],
   "answer": 3,
   "why": "Then DAG + Ca²⁺ activate PKC."
  },
  {
   "q": "Growth factors typically signal through:",
   "options": [
    "Death receptors only",
    "GPCR",
    "Aquaporins",
    "RTK → MAP kinase"
   ],
   "answer": 3,
   "why": "Leading to mitosis."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "simple",
   "options": [
    "Simple diffusion",
    "Facilitated diffusion",
    "Endocytosis",
    "Active transport"
   ],
   "answer": 0,
   "why": "The arrow points to: Simple diffusion. Down the gradient, no carrier, no ATP: gases, water, some ions, small uncharged molecules (urea)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "fac",
   "options": [
    "Simple diffusion",
    "Endocytosis",
    "Facilitated diffusion",
    "Exocytosis"
   ],
   "answer": 2,
   "why": "The arrow points to: Facilitated diffusion. Down the gradient with a protein: ion channels, aquaporins (water), carriers such as GLUT4 (glucose), which change shape."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "act",
   "options": [
    "Active transport",
    "Simple diffusion",
    "Exocytosis",
    "Facilitated diffusion"
   ],
   "answer": 0,
   "why": "The arrow points to: Active transport. Against the gradient using ATP: the Na⁺/K⁺-ATPase; MDR/ABC pumps expel drugs (chemotherapy, antimalarial resistance)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "endo",
   "options": [
    "Facilitated diffusion",
    "Active transport",
    "Endocytosis",
    "Simple diffusion"
   ],
   "answer": 2,
   "why": "The arrow points to: Endocytosis. Membrane invaginates on clathrin to form a vesicle that fuses with a lysosome; phagocytosis (solids: macrophages, Kupffer cells, osteoclasts) or pinocytosis (liquids)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "exo",
   "options": [
    "Endocytosis",
    "Active transport",
    "Exocytosis",
    "Facilitated diffusion"
   ],
   "answer": 2,
   "why": "The arrow points to: Exocytosis. Vesicle migrates to the membrane, SNARE proteins fuse the two membranes, and the content is released (saliva, hormones, pancreatic zymogens)."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Membrane model and composition?",
   "back": "Asymmetric fluid mosaic; red cell: 40% lipids, 50% proteins, 10% carbohydrates."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Phospholipid and cholesterol structure?",
   "back": "Phospholipid: glycerol + 2 fatty acids + phosphate + choline/inositol/serine/ethanolamine. Cholesterol: OH group, 4 rings, hydrocarbon chain; limits permeability."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Membrane proteins?",
   "back": "Peripheral (hydrophilic, e.g. clathrin, G proteins) and integral/transmembrane (pumps, carriers, channels)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Glycocalyx?",
   "back": "Glycolipids and glycoproteins on the extracellular face only; protective, antigenic cell coat."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Passive transport types?",
   "back": "Simple diffusion (gases, water, small uncharged molecules) and facilitated diffusion (channels, aquaporins, carriers like GLUT4)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Na⁺/K⁺-ATPase mechanism?",
   "back": "Binds Na⁺ inside, phosphorylated by ATP, releases Na⁺ outside, binds K⁺, dephosphorylated, releases K⁺ inside; 1 ATP per cycle (3 Na⁺ out, 2 K⁺ in)."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Endocytosis vs exocytosis?",
   "back": "Endocytosis: clathrin-coated invagination → vesicle → lysosome (phagocytosis, pinocytosis). Exocytosis: vesicle fuses via SNARE and releases content."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Main signalling pathways?",
   "back": "GPCR → adenylyl cyclase → cAMP → PKA; GPCR → PLC → IP3 (Ca²⁺) + DAG → PKC; RTK → MAP kinase (mitosis); death receptors → apoptosis."
  },
  {
   "id": "img-simple",
   "type": "image",
   "target": "simple",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Simple diffusion. Down the gradient, no carrier, no ATP: gases, water, some ions, small uncharged molecules (urea)."
  },
  {
   "id": "img-fac",
   "type": "image",
   "target": "fac",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Facilitated diffusion. Down the gradient with a protein: ion channels, aquaporins (water), carriers such as GLUT4 (glucose), which change shape."
  },
  {
   "id": "img-act",
   "type": "image",
   "target": "act",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Active transport. Against the gradient using ATP: the Na⁺/K⁺-ATPase; MDR/ABC pumps expel drugs (chemotherapy, antimalarial resistance)."
  },
  {
   "id": "img-endo",
   "type": "image",
   "target": "endo",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Endocytosis. Membrane invaginates on clathrin to form a vesicle that fuses with a lysosome; phagocytosis (solids: macrophages, Kupffer cells, osteoclasts) or pinocytosis (liquids)."
  },
  {
   "id": "img-exo",
   "type": "image",
   "target": "exo",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Exocytosis. Vesicle migrates to the membrane, SNARE proteins fuse the two membranes, and the content is released (saliva, hormones, pancreatic zymogens)."
  }
 ],
 "deeper": [
  {
   "title": "Why cells need a pump that costs energy",
   "html": "<p>Diffusion always moves ions toward equal concentrations, which would erase the high K⁺ inside and high Na⁺ outside that cells depend on for nerve impulses, muscle contraction and volume control. The Na⁺/K⁺-ATPase keeps spending ATP to push them back, maintaining gradients that other transporters then use to move glucose and amino acids.</p><p class='src'>Source: the lecture's active transport slides.</p>"
  },
  {
   "title": "Why second messengers amplify signals",
   "html": "<p>One hormone molecule binding one receptor can activate several G proteins, each enzyme then makes many cAMP molecules, and each kinase phosphorylates many targets. This cascade turns a tiny outside signal into a large response inside the cell, which is why hormones work at very low concentrations.</p><p class='src'>Source: the lecture's PKA and PKC pathway slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "Cell membranes (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/membranes-and-transport",
   "kind": "Website",
   "why": "Membrane structure, diffusion, active transport and bulk transport.",
   "note": ""
  },
  {
   "title": "Cell signaling (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/cell-signaling",
   "kind": "Website",
   "why": "Receptors, second messengers and kinase cascades.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Cell membranes (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/membranes-and-transport"
  },
  {
   "name": "Cell signaling (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/cell-signaling"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["cellbio1-cytoskeleton"] = {
 "id": "cellbio1-cytoskeleton",
 "subject": "cellbio1",
 "group": "Cell biology",
 "title": "The cytosol and the cytoskeleton",
 "sourceFile": "Chap3-1 Cytoskeleton (2025) (Cell Biology, Pr. Aboussaouira)",
 "sourceUrl": "https://drive.google.com/file/d/1fYT02Ieygq_EXBM7Z8-YwRFld9Z27zdC/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>The <strong>cytosol</strong> (hyaloplasm) is ~<strong>70% water</strong> with small molecules (ions, gases, glucose, amino acids, fatty acids, urea, glycerol), macromolecules (proteins, lipids, carbohydrates, RNA) and inert inclusions (proteasomes, lipid droplets, glycogen rosettes). The <strong>cytoskeleton</strong> is a network of filamentous proteins that gives <strong>mechanical support and 3D shape</strong> and drives <strong>motility</strong>, chromosome movement in mitosis and organelle transport. Three types: <strong>actin microfilaments (5-8 nm)</strong>, <strong>intermediate filaments (8-10 nm)</strong>, <strong>microtubules (20-30 nm)</strong>.</p>"
  },
  {
   "id": "s1",
   "title": "Actin microfilaments",
   "html": "<p><strong>G-actin</strong> (globular monomer with an ATP groove) assembles into <strong>F-actin</strong>, two twisted chains, nucleated by <strong>ARP2/3</strong>. Polymerisation rises with the concentration of G-actin-ATP and reverses when it falls. <strong>Roles</strong>: <strong>cell cortex</strong> under the membrane (3D shape), cytoplasmic currents, <strong>microvilli</strong> (intestine, kidney), endo/exocytosis vesicle traffic, the <strong>contractile ring</strong> of cytokinesis, <strong>diapedesis</strong> of white cells and <strong>cell migration</strong> (macrophages). Associated proteins: ARP2/3 (assembly), <strong>CapZ</strong> (stops polymerisation), <strong>tropomyosin</strong> (protects), troponin, <strong>myosin II</strong> (muscle contraction), severin (cuts), <strong>myosin I</strong> (links cortex to membrane: spectrin in red cells, dystrophin in muscle), crosslinkers (fimbrin, filamin, actinin). <strong>Small G proteins</strong> (GTP active, GDP inactive): <strong>Ras</strong> (signalling), <strong>Rac</strong> (migration), <strong>Rho</strong> (tension), <strong>Cdc42</strong> (migration, polarity, cycle), <strong>Rab</strong> (vesicle traffic), <strong>Ran</strong> (nuclear transport).</p>"
  },
  {
   "id": "s2",
   "title": "Microtubules",
   "html": "<p><strong>α- and β-tubulin</strong> form dimers (with GTP), dimers form protofilaments, and <strong>13 protofilaments</strong> assemble on the <strong>γ-TuRC</strong> (γ-tubulin ring complex) into a tube, stabilised by <strong>MAP2</strong>. Polymerisation depends on free GTP-tubulin; normally balanced; imbalance causes collapse ('<strong>catastrophe</strong>': fewer GTP-tubulins, loss of MAP2, tension). Associated proteins: γ-TuRC, MAP2, <strong>kinetochore</strong> (attaches chromosomes to the spindle), and <strong>motor proteins</strong> converting ATP into movement: <strong>kinesin</strong> and <strong>dynein</strong> carrying cargo along microtubules. <strong>Roles</strong>: shape, organelle transport, <strong>cilia and flagella</strong>, axons, <strong>centrioles</strong>, the <strong>mitotic spindle</strong>, diapedesis and migration. Defective ciliary or flagellar microtubules cause impaired airway clearance and <strong>male infertility</strong>. <strong>Drugs</strong>: <strong>colchicine</strong> binds free tubulin and blocks polymerisation (antimitotic); vinca alkaloids (<strong>vinblastine, vincristine</strong>) and podophyllin are antimitotics in chemotherapy; <strong>taxol</strong> (paclitaxel, from yew; breast cancer) instead <strong>prevents depolymerisation</strong> of the spindle, blocking division.</p>"
  },
  {
   "id": "s3",
   "title": "Intermediate filaments",
   "html": "<p><strong>Stable</strong> (no cycles of polymerisation), the true skeleton maintaining cell shape; <strong>lamins A, B, C</strong> form the <strong>nuclear lamina</strong> reinforcing the nuclear envelope. Built from two-headed filamentous monomers → dimers → tetramers → rope. Families used in <strong>immunohistochemistry</strong> to identify tumour origin: <strong>cytokeratins</strong> (epithelia → carcinomas), <strong>desmin</strong> (muscle), <strong>vimentin</strong> (connective tissue → sarcomas), <strong>neurofilaments</strong> (neurons → neuroblastoma), <strong>GFAP</strong> (glial fibrillary acidic protein; glial cells → gliomas).</p>"
  }
 ],
 "exam": [
  "Cytosol ~70% water; inclusions: proteasomes, lipid droplets, glycogen.",
  "Actin 5-8 nm; intermediate filaments 8-10 nm; microtubules 20-30 nm.",
  "G-actin (ATP) → F-actin, nucleated by ARP2/3.",
  "Actin: cortex, microvilli, contractile ring, migration, diapedesis; myosin II contraction.",
  "Small G proteins: Ras, Rac, Rho, Cdc42, Rab, Ran.",
  "Microtubules: α/β-tubulin + GTP, 13 protofilaments on γ-TuRC, MAP2 stabilises.",
  "Kinesin and dynein carry cargo on microtubules.",
  "MT roles: spindle, cilia, flagella, centrioles, axons.",
  "Colchicine and vinca alkaloids block polymerisation; taxol blocks depolymerisation.",
  "IF: stable; lamins; cytokeratin (carcinoma), vimentin (sarcoma), desmin (muscle), GFAP (glioma)."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "The three cytoskeleton filaments",
   "caption": "Diameter, building block and main roles. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"140\" y1=\"100\" x2=\"140\" y2=\"170\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"100\" x2=\"380\" y2=\"170\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"620\" y1=\"100\" x2=\"620\" y2=\"170\"/>",
   "parts": {
    "af": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"40\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Actin microfilaments",
      "5-8 nm; G-actin + ATP"
     ],
     "lx": 140.0,
     "ly": 68.0
    },
    "if": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"280\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Intermediate filaments",
      "8-10 nm; stable ropes"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "mt": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"520\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Microtubules 20-30 nm",
      "α/β-tubulin + GTP"
     ],
     "lx": 620.0,
     "ly": 68.0
    },
    "afr": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"40\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Cortex, microvilli, migration,",
      "contractile ring"
     ],
     "lx": 140.0,
     "ly": 198.0
    },
    "ifr": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"280\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Cell shape, nuclear lamina;",
      "tumour typing (IHC)"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "mtr": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"520\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Spindle, cilia, flagella,",
      "kinesin/dynein transport"
     ],
     "lx": 620.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "af": [
     {
      "t": [
       40.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "if": [
     {
      "t": [
       280.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "mt": [
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
    "afr": [
     {
      "t": [
       40.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "ifr": [
     {
      "t": [
       280.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "mtr": [
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
    ]
   }
  },
  "mindmap": {
   "root": "Cytoskeleton",
   "branches": [
    [
     "Actin (5-8 nm)",
     [
      "G-actin + ATP",
      "ARP2/3",
      "Cortex, microvilli",
      "Contractile ring, migration"
     ]
    ],
    [
     "Microtubules (20-30 nm)",
     [
      "α/β-tubulin + GTP",
      "13 protofilaments, γ-TuRC",
      "Spindle, cilia, flagella",
      "Kinesin, dynein"
     ]
    ],
    [
     "Intermediate (8-10 nm)",
     [
      "Stable",
      "Lamins",
      "Keratin, vimentin, desmin, GFAP"
     ]
    ],
    [
     "Drugs",
     [
      "Colchicine, vinca: block assembly",
      "Taxol: blocks disassembly"
     ]
    ],
    [
     "Small G proteins",
     [
      "Ras, Rac, Rho",
      "Cdc42, Rab, Ran"
     ]
    ]
   ]
  }
 },
 "mcqs": [
  {
   "q": "The cytosol is about:",
   "options": [
    "95% protein",
    "30% water",
    "50% lipid",
    "70% water"
   ],
   "answer": 3,
   "why": "Plus small and large molecules."
  },
  {
   "q": "Which filament is thinnest?",
   "options": [
    "Intermediate filaments",
    "All equal",
    "Actin microfilaments",
    "Microtubules"
   ],
   "answer": 2,
   "why": "5-8 nm."
  },
  {
   "q": "Microtubules have a diameter of about:",
   "options": [
    "8-10 nm",
    "20-30 nm",
    "100 nm",
    "5-8 nm"
   ],
   "answer": 1,
   "why": "Hollow tubes."
  },
  {
   "q": "G-actin carries which nucleotide?",
   "options": [
    "NADH",
    "cAMP",
    "ATP",
    "GTP"
   ],
   "answer": 2,
   "why": "Tubulin carries GTP."
  },
  {
   "q": "Actin nucleation into two chains involves:",
   "options": [
    "ARP2/3",
    "Kinesin",
    "MAP2",
    "γ-TuRC"
   ],
   "answer": 0,
   "why": "γ-TuRC nucleates microtubules."
  },
  {
   "q": "The contractile ring of cytokinesis is made of:",
   "options": [
    "Microtubules",
    "Actin microfilaments",
    "Lamins",
    "Keratin"
   ],
   "answer": 1,
   "why": "With myosin II."
  },
  {
   "q": "Which small G protein regulates vesicle traffic?",
   "options": [
    "Rho",
    "Ras",
    "Rab",
    "Ran"
   ],
   "answer": 2,
   "why": "Ran: nuclear transport."
  },
  {
   "q": "How many protofilaments form a microtubule?",
   "options": [
    "2",
    "9",
    "20",
    "13"
   ],
   "answer": 3,
   "why": "On the γ-TuRC."
  },
  {
   "q": "Which proteins carry cargo along microtubules?",
   "options": [
    "Lamins",
    "Kinesin and dynein",
    "Tropomyosin",
    "Myosin II and actin"
   ],
   "answer": 1,
   "why": "Motor proteins using ATP."
  },
  {
   "q": "Colchicine acts by:",
   "options": [
    "Blocking tubulin assembly",
    "Stabilising microtubules",
    "Blocking ATP synthase",
    "Cutting actin"
   ],
   "answer": 0,
   "why": "An antimitotic."
  },
  {
   "q": "Taxol blocks cell division by:",
   "options": [
    "Preventing spindle microtubule depolymerisation",
    "Blocking DNA replication",
    "Preventing tubulin polymerisation",
    "Destroying actin"
   ],
   "answer": 0,
   "why": "Used in breast cancer."
  },
  {
   "q": "Intermediate filaments are:",
   "options": [
    "Highly dynamic",
    "Made of tubulin",
    "Motor proteins",
    "Stable, not cycling"
   ],
   "answer": 3,
   "why": "The true skeleton."
  },
  {
   "q": "The nuclear lamina is made of:",
   "options": [
    "Myosin",
    "Actin",
    "Tubulin",
    "Lamins"
   ],
   "answer": 3,
   "why": "Lamins A, B, C."
  },
  {
   "q": "A tumour positive for cytokeratin is most likely a:",
   "options": [
    "Carcinoma",
    "Sarcoma",
    "Myoma",
    "Glioma"
   ],
   "answer": 0,
   "why": "Epithelial origin."
  },
  {
   "q": "GFAP identifies tumours of:",
   "options": [
    "Connective tissue",
    "Glial cells",
    "Muscle",
    "Epithelium"
   ],
   "answer": 1,
   "why": "Gliomas."
  },
  {
   "q": "Defective flagellar microtubules in sperm cause:",
   "options": [
    "Diabetes",
    "Cancer",
    "Anaemia",
    "Male infertility"
   ],
   "answer": 3,
   "why": "Flagella cannot beat."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "af",
   "options": [
    "Intermediate filaments",
    "Actin roles",
    "Actin microfilaments",
    "Microtubules"
   ],
   "answer": 2,
   "why": "The arrow points to: Actin microfilaments. G-actin monomers carrying ATP polymerise into two twisted F-actin chains, nucleated by ARP2/3."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "if",
   "options": [
    "IF roles",
    "Intermediate filaments",
    "Actin microfilaments",
    "Actin roles"
   ],
   "answer": 1,
   "why": "The arrow points to: Intermediate filaments. Two-headed monomers form dimers, then tetramers, then rope-like filaments; they do not cycle."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "mt",
   "options": [
    "Actin roles",
    "Microtubules",
    "Intermediate filaments",
    "IF roles"
   ],
   "answer": 1,
   "why": "The arrow points to: Microtubules. α/β-tubulin dimers (GTP) form protofilaments; 13 protofilaments on γ-TuRC make a tube; stabilised by MAP2."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "afr",
   "options": [
    "Actin roles",
    "IF roles",
    "Intermediate filaments",
    "Microtubules"
   ],
   "answer": 0,
   "why": "The arrow points to: Actin roles. Cell cortex, microvilli, vesicle traffic, cytokinesis contractile ring, diapedesis, migration; myosin II contraction."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ifr",
   "options": [
    "IF roles",
    "MT roles",
    "Actin roles",
    "Microtubules"
   ],
   "answer": 0,
   "why": "The arrow points to: IF roles. Mechanical strength and shape; nuclear lamina (lamins); cytokeratin, desmin, vimentin, neurofilaments, GFAP identify tumour origin."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "mtr",
   "options": [
    "Actin roles",
    "Actin microfilaments",
    "MT roles",
    "Microtubules"
   ],
   "answer": 2,
   "why": "The arrow points to: MT roles. Mitotic spindle, cilia and flagella, centrioles, axons, organelle transport by kinesin and dynein."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Composition of the cytosol?",
   "back": "~70% water, small molecules (ions, gases, glucose, amino acids), macromolecules (proteins, lipids, carbohydrates, RNA), inclusions (proteasomes, lipid droplets, glycogen)."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Three cytoskeleton filaments?",
   "back": "Actin microfilaments 5-8 nm, intermediate filaments 8-10 nm, microtubules 20-30 nm."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Actin assembly and roles?",
   "back": "G-actin (ATP) → F-actin via ARP2/3; cortex, microvilli, vesicle traffic, contractile ring, diapedesis, migration."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Actin-associated proteins?",
   "back": "ARP2/3, CapZ, tropomyosin, troponin, myosin II (contraction), myosin I (cortex-membrane), severin, fimbrin/filamin/actinin."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Microtubule assembly?",
   "back": "α/β-tubulin dimers (GTP) → protofilaments → 13 on γ-TuRC → microtubule; MAP2 stabilises; catastrophe when unbalanced."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Microtubule roles and motors?",
   "back": "Spindle, cilia, flagella, centrioles, axons, transport by kinesin and dynein."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Drugs acting on microtubules?",
   "back": "Colchicine, vinblastine, vincristine: block polymerisation. Taxol: blocks depolymerisation."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Intermediate filament families and tumours?",
   "back": "Cytokeratin (carcinoma), desmin (muscle), vimentin (sarcoma), neurofilaments (neuroblastoma), GFAP (glioma); lamins form the nuclear lamina."
  },
  {
   "id": "img-af",
   "type": "image",
   "target": "af",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Actin microfilaments. G-actin monomers carrying ATP polymerise into two twisted F-actin chains, nucleated by ARP2/3."
  },
  {
   "id": "img-if",
   "type": "image",
   "target": "if",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Intermediate filaments. Two-headed monomers form dimers, then tetramers, then rope-like filaments; they do not cycle."
  },
  {
   "id": "img-mt",
   "type": "image",
   "target": "mt",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Microtubules. α/β-tubulin dimers (GTP) form protofilaments; 13 protofilaments on γ-TuRC make a tube; stabilised by MAP2."
  },
  {
   "id": "img-afr",
   "type": "image",
   "target": "afr",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Actin roles. Cell cortex, microvilli, vesicle traffic, cytokinesis contractile ring, diapedesis, migration; myosin II contraction."
  },
  {
   "id": "img-ifr",
   "type": "image",
   "target": "ifr",
   "front": "What is at the arrow, and why does it matter?",
   "back": "IF roles. Mechanical strength and shape; nuclear lamina (lamins); cytokeratin, desmin, vimentin, neurofilaments, GFAP identify tumour origin."
  },
  {
   "id": "img-mtr",
   "type": "image",
   "target": "mtr",
   "front": "What is at the arrow, and why does it matter?",
   "back": "MT roles. Mitotic spindle, cilia and flagella, centrioles, axons, organelle transport by kinesin and dynein."
  }
 ],
 "deeper": [
  {
   "title": "Why two opposite drugs both stop cancer cells",
   "html": "<p>The mitotic spindle works only if microtubules keep growing and shrinking to pull chromosomes apart. Colchicine and vinca alkaloids stop them growing; taxol freezes them so they cannot shrink. Either way the spindle cannot do its job, the cell is stuck in mitosis, and fast-dividing cancer cells are hit hardest.</p><p class='src'>Source: the lecture's pharmacological effects on microtubules.</p>"
  },
  {
   "title": "Why intermediate filaments help pathologists",
   "html": "<p>Each tissue makes its own type of intermediate filament, and tumour cells usually keep that type even when they look nothing like the original tissue. Staining a tumour for cytokeratin, vimentin or GFAP therefore reveals whether it arose from epithelium, connective tissue or glia, which guides treatment.</p><p class='src'>Source: the lecture's intermediate filament families slide.</p>"
  }
 ],
 "resources": [
  {
   "title": "The cytoskeleton (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/structure-of-a-cell/tour-of-organelles/a/the-cytoskeleton",
   "kind": "Article",
   "why": "Actin, intermediate filaments and microtubules.",
   "note": ""
  },
  {
   "title": "Intermediate filaments (NCBI Bookshelf, Molecular Biology of the Cell)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK26862/",
   "kind": "Book",
   "why": "Structure and tissue specificity of intermediate filaments.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "The cytoskeleton (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/structure-of-a-cell/tour-of-organelles/a/the-cytoskeleton"
  },
  {
   "name": "Intermediate filaments (NCBI Bookshelf, Molecular Biology of the Cell)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK26862/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["cellbio1-cycle-nucleus"] = {
 "id": "cellbio1-cycle-nucleus",
 "subject": "cellbio1",
 "group": "Cell biology",
 "title": "The cell cycle and the nucleus",
 "sourceFile": "Chap4 Cell cycle and Nucleus (2024) (Cell Biology, Pr. Aboussaouira)",
 "sourceUrl": "https://drive.google.com/file/d/1HXHnfGQYNCvqKKT8mxTf-FpnEJvPVfHf/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>The <strong>cell cycle</strong> alternates interphase (<strong>G1, S, G2</strong>) and <strong>mitosis</strong> (prophase, prometaphase, metaphase, anaphase, telophase) with <strong>cytokinesis</strong>. Some cells stop dividing and stay in <strong>G0</strong> (neurons, lens cells). The <strong>nucleus</strong> directs division (mitosis in somatic cells, meiosis in germ cells) and <strong>gene expression</strong>.</p>"
  },
  {
   "id": "s1",
   "title": "Checkpoints and regulators",
   "html": "<p>Three major <strong>checkpoints</strong>: (1) <strong>G1/S</strong> (start, restriction point, point of no return): is the environment favourable and the cell large enough (nucleo-cytoplasmic ratio)? (2) <strong>G2/M</strong>: has all DNA been replicated, in the right quantity and quality? (3) <strong>metaphase</strong>: are all chromosomes aligned on the equatorial plate and attached to the spindle? If anything is wrong, the cycle stops and <strong>apoptosis</strong> begins; if it cannot stop, <strong>cancer</strong> may result. <strong>p53</strong> and <strong>pRb</strong> control checkpoints 1 and 2: they are <strong>tumour suppressors</strong> (anti-oncogenes). Factors <strong>E2F</strong>, <strong>SPF</strong> (start-promoting) and <strong>MPF</strong> (mitosis-promoting) are driven by <strong>cyclin/CDK kinases</strong>, whose levels oscillate through the cycle; activators <strong>CDC25 (A, B, C)</strong>, Polo kinase, CAK; inhibitors <strong>p16, p21, p27, Wee1</strong>.</p>"
  },
  {
   "id": "s2",
   "title": "The interphase nucleus",
   "html": "<p><strong>Nuclear envelope</strong>: two membranes separated by a ~<strong>30 nm perinuclear space</strong>; the outer membrane bears ribosomes and is continuous with the <strong>rough ER</strong>; the inner membrane is lined by the <strong>nuclear lamina</strong> (lamins A, B, C, intermediate filaments) attached by lamina-associated proteins. <strong>Progeria</strong> is due to <strong>lamin A</strong> mutation: chromosomes attach poorly to the lamina, deforming the nucleus. <strong>Chromatin</strong>: one DNA molecule wrapped on <strong>nucleosomes</strong> (histone octamer of 2 × H2A, H2B, H3, H4) like a pearl necklace; <strong>euchromatin</strong> (decondensed, transcribed) vs <strong>heterochromatin</strong> (condensed, silent). <strong>Nucleolus</strong>: ribosome factory built on ~10 rDNA loops from chromosomes <strong>13, 14, 15, 21, 22</strong>; central <strong>fibrillar</strong> region (rDNA, rRNA) and peripheral <strong>granular</strong> region (pre-ribosomes). Also granules for mRNA maturation and splicing, <strong>Cajal bodies</strong> (telomerase repairing <strong>TTAGGG telomeres</strong>), and the <strong>Barr body</strong>: the condensed inactive X in females (XX: 1 Barr body; XXX: 2).</p>"
  },
  {
   "id": "s3",
   "title": "Nuclear pores and transport",
   "html": "<p><strong>2,000-4,000 pores</strong> per nucleus (fewer in S phase, more in G1/G2). The <strong>nuclear pore complex</strong>: two rings, 8 cytoplasmic filaments and a nuclear <strong>basket</strong>, made of <strong>nucleoporins (Nup)</strong>; passage for molecules up to ~<strong>40 nm</strong>. <strong>Import</strong> needs a <strong>nuclear localisation signal (NLS)</strong>: <strong>importin α</strong> binds the NLS, <strong>importin β</strong> binds importin α, the complex docks on Nup358, crosses via elastic <strong>FxFG</strong> repeats, reaches Nup153, and <strong>RanGTP</strong> dissociates it inside (e.g. import of pRb); importins are recycled. <strong>Export</strong> needs a <strong>nuclear export signal (NES)</strong> and <strong>exportin-1 (CRM1)</strong> bound to RanGTP; in the cytoplasm <strong>RanGAP</strong> hydrolyses GTP, releasing the cargo (e.g. STAT1). RNAs are exported through the pores.</p>"
  }
 ],
 "exam": [
  "Cycle: G1, S, G2, M (+ cytokinesis); G0 for non-dividing cells (neurons, lens).",
  "Checkpoints: G1/S (restriction point), G2/M (DNA complete), metaphase (spindle).",
  "Failure → apoptosis; if the cycle cannot stop → cancer.",
  "p53 and pRb: tumour suppressors at checkpoints 1-2.",
  "Cyclin/CDK drive E2F, SPF, MPF; activators CDC25, CAK; inhibitors p16, p21, p27, Wee1.",
  "Envelope: two membranes, 30 nm space, outer continuous with RER, inner with lamina.",
  "Progeria: lamin A mutation.",
  "Nucleolus: rDNA loops on chromosomes 13, 14, 15, 21, 22.",
  "Barr body = inactive X (XX: 1; XXX: 2).",
  "Pores: 2,000-4,000; import via NLS + importin α/β + RanGTP; export via NES + exportin-1."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Cell cycle and its checkpoints",
   "caption": "Interphase, mitosis and the three controls. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"200\" y1=\"70\" x2=\"215\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"375\" y1=\"70\" x2=\"390\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"550\" y1=\"70\" x2=\"565\" y2=\"70\"/>",
   "parts": {
    "g1": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"40\" y=\"40\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "G1: growth",
      "(G0 exit)"
     ],
     "lx": 120.0,
     "ly": 68.0
    },
    "s": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"215\" y=\"40\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "S: DNA",
      "replication"
     ],
     "lx": 295.0,
     "ly": 68.0
    },
    "g2": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"390\" y=\"40\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "G2: prepare",
      "mitosis"
     ],
     "lx": 470.0,
     "ly": 68.0
    },
    "m": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"565\" y=\"40\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "M: mitosis +",
      "cytokinesis"
     ],
     "lx": 645.0,
     "ly": 68.0
    },
    "c1": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"40\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Checkpoint 1: G1/S",
      "(restriction point)"
     ],
     "lx": 140.0,
     "ly": 198.0
    },
    "c2": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"280\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Checkpoint 2: G2/M",
      "(DNA complete, intact)"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "c3": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9ecec\" x=\"520\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Checkpoint 3: metaphase",
      "(spindle attachment)"
     ],
     "lx": 620.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "g1": [
     {
      "t": [
       40.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "s": [
     {
      "t": [
       215.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "g2": [
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
    "m": [
     {
      "t": [
       565.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "c1": [
     {
      "t": [
       40.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "c2": [
     {
      "t": [
       280.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "c3": [
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
    ]
   }
  },
  "mindmap": {
   "root": "Cell cycle and nucleus",
   "branches": [
    [
     "Cycle",
     [
      "G1, S, G2, M",
      "G0 (neurons)",
      "Cytokinesis"
     ]
    ],
    [
     "Checkpoints",
     [
      "G1/S restriction point",
      "G2/M",
      "Metaphase",
      "p53, pRb"
     ]
    ],
    [
     "Regulators",
     [
      "Cyclin/CDK",
      "CDC25, CAK",
      "p16, p21, p27, Wee1"
     ]
    ],
    [
     "Nucleus",
     [
      "Envelope + lamina (progeria)",
      "Chromatin: eu/hetero",
      "Nucleolus (13-15, 21, 22)",
      "Barr body, Cajal body"
     ]
    ],
    [
     "Pores",
     [
      "NLS + importins",
      "NES + exportin-1",
      "RanGTP"
     ]
    ]
   ]
  }
 },
 "mcqs": [
  {
   "q": "DNA is replicated during:",
   "options": [
    "S phase",
    "G2",
    "Mitosis",
    "G1"
   ],
   "answer": 0,
   "why": "Interphase has G1, S, G2."
  },
  {
   "q": "Neurons that no longer divide are in:",
   "options": [
    "G2",
    "M",
    "G0",
    "S"
   ],
   "answer": 2,
   "why": "Also lens cells."
  },
  {
   "q": "The G1/S checkpoint is also called the:",
   "options": [
    "Spindle checkpoint",
    "Restriction point",
    "Telophase point",
    "DNA damage point only"
   ],
   "answer": 1,
   "why": "Checks environment and cell size."
  },
  {
   "q": "The G2/M checkpoint verifies that:",
   "options": [
    "The cell is large enough",
    "Chromosomes are on the spindle",
    "Cytokinesis is done",
    "DNA replication is complete and correct"
   ],
   "answer": 3,
   "why": "Quantity and quality of DNA."
  },
  {
   "q": "The metaphase checkpoint checks:",
   "options": [
    "DNA replication",
    "Spindle attachment",
    "Nutrients",
    "Cell size"
   ],
   "answer": 1,
   "why": "Before anaphase."
  },
  {
   "q": "p53 and pRb are:",
   "options": [
    "Nucleoporins",
    "Cyclins",
    "Oncogenes",
    "Tumour suppressors"
   ],
   "answer": 3,
   "why": "They guard checkpoints 1 and 2."
  },
  {
   "q": "Which is a CDK inhibitor?",
   "options": [
    "CAK",
    "p21",
    "CDC25",
    "Polo kinase"
   ],
   "answer": 1,
   "why": "Also p16, p27, Wee1."
  },
  {
   "q": "The perinuclear space is about:",
   "options": [
    "30 nm",
    "300 nm",
    "3 nm",
    "3 µm"
   ],
   "answer": 0,
   "why": "Between the two nuclear membranes."
  },
  {
   "q": "The outer nuclear membrane is continuous with:",
   "options": [
    "Plasma membrane",
    "Golgi",
    "Mitochondria",
    "Rough endoplasmic reticulum"
   ],
   "answer": 3,
   "why": "It carries ribosomes."
  },
  {
   "q": "Progeria is caused by a mutation in:",
   "options": [
    "Histone H1",
    "Lamin A",
    "Actin",
    "Tubulin"
   ],
   "answer": 1,
   "why": "Nuclear lamina defect."
  },
  {
   "q": "rDNA loops of the nucleolus come from chromosomes:",
   "options": [
    "13, 14, 15, 21, 22",
    "X and Y",
    "1, 2, 3",
    "17 and 18"
   ],
   "answer": 0,
   "why": "The acrocentric chromosomes."
  },
  {
   "q": "How many Barr bodies does a 47,XXX woman have?",
   "options": [
    "1",
    "3",
    "2",
    "0"
   ],
   "answer": 2,
   "why": "One fewer than the number of X chromosomes."
  },
  {
   "q": "Cajal bodies contain:",
   "options": [
    "Histone H1",
    "Lamins",
    "Telomerase",
    "Ribosomes"
   ],
   "answer": 2,
   "why": "Repairing telomeres."
  },
  {
   "q": "Nuclear import requires:",
   "options": [
    "SNARE",
    "Clathrin",
    "NES and exportin",
    "NLS and importins"
   ],
   "answer": 3,
   "why": "RanGTP dissociates the complex inside."
  },
  {
   "q": "Nuclear export uses:",
   "options": [
    "Importin β",
    "Exportin-1 + NES",
    "Aquaporins",
    "Clathrin"
   ],
   "answer": 1,
   "why": "RanGAP releases the cargo in the cytoplasm."
  },
  {
   "q": "Euchromatin is:",
   "options": [
    "Condensed and silent",
    "Only in mitosis",
    "The Barr body",
    "Decondensed and transcribed"
   ],
   "answer": 3,
   "why": "Heterochromatin is condensed."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "g1",
   "options": [
    "G2 phase",
    "G1 phase",
    "M phase",
    "S phase"
   ],
   "answer": 1,
   "why": "The arrow points to: G1 phase. Cell growth; non-dividing cells (neurons, lens cells) leave into G0."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "s",
   "options": [
    "M phase",
    "G1 phase",
    "S phase",
    "Restriction point"
   ],
   "answer": 2,
   "why": "The arrow points to: S phase. DNA replication; nuclear pores fewer (~2,000)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "g2",
   "options": [
    "S phase",
    "M phase",
    "G2 phase",
    "Metaphase checkpoint"
   ],
   "answer": 2,
   "why": "The arrow points to: G2 phase. Preparation for division."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "m",
   "options": [
    "M phase",
    "G2 phase",
    "G2/M checkpoint",
    "Restriction point"
   ],
   "answer": 0,
   "why": "The arrow points to: M phase. Prophase, prometaphase, metaphase, anaphase, telophase, then cytokinesis."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "c1",
   "options": [
    "Restriction point",
    "G1 phase",
    "G2 phase",
    "M phase"
   ],
   "answer": 0,
   "why": "The arrow points to: Restriction point. Checks a favourable environment and sufficient cell size (N/C ratio); past it, no return. p53 and pRb act here."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "c2",
   "options": [
    "G1 phase",
    "Restriction point",
    "G2/M checkpoint",
    "S phase"
   ],
   "answer": 2,
   "why": "The arrow points to: G2/M checkpoint. Checks that all DNA is replicated, in amount and quality."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "c3",
   "options": [
    "Metaphase checkpoint",
    "M phase",
    "S phase",
    "G2/M checkpoint"
   ],
   "answer": 0,
   "why": "The arrow points to: Metaphase checkpoint. Checks chromosomes are aligned and attached to the spindle; failure triggers apoptosis."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Phases of the cell cycle?",
   "back": "Interphase G1, S (DNA replication), G2; M phase (prophase, prometaphase, metaphase, anaphase, telophase) + cytokinesis; G0 for non-dividing cells."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Three cell cycle checkpoints?",
   "back": "G1/S restriction point (environment, size), G2/M (DNA replicated correctly), metaphase (chromosomes aligned and attached)."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Molecular control of the cycle?",
   "back": "Cyclin/CDK activate E2F, SPF, MPF; activators CDC25, Polo kinase, CAK; inhibitors p16, p21, p27, Wee1; p53 and pRb tumour suppressors."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Structure of the nuclear envelope?",
   "back": "Two membranes, 30 nm perinuclear space, outer continuous with RER, inner lined by the lamina (lamins A, B, C); pores."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "What is progeria?",
   "back": "Premature ageing due to lamin A mutation: defective chromosome attachment to the lamina deforms the nucleus."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Nucleolus?",
   "back": "Ribosome factory on rDNA loops from chromosomes 13, 14, 15, 21, 22; fibrillar centre (rDNA, rRNA), granular periphery (pre-ribosomes)."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Barr body?",
   "back": "Condensed inactive X chromosome in females: number = X chromosomes − 1."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Nuclear import vs export?",
   "back": "Import: NLS, importin α/β, Nup358, FxFG, Nup153, RanGTP dissociation. Export: NES, exportin-1 + RanGTP, RanGAP hydrolysis releases cargo."
  },
  {
   "id": "img-g1",
   "type": "image",
   "target": "g1",
   "front": "What is at the arrow, and why does it matter?",
   "back": "G1 phase. Cell growth; non-dividing cells (neurons, lens cells) leave into G0."
  },
  {
   "id": "img-s",
   "type": "image",
   "target": "s",
   "front": "What is at the arrow, and why does it matter?",
   "back": "S phase. DNA replication; nuclear pores fewer (~2,000)."
  },
  {
   "id": "img-g2",
   "type": "image",
   "target": "g2",
   "front": "What is at the arrow, and why does it matter?",
   "back": "G2 phase. Preparation for division."
  },
  {
   "id": "img-m",
   "type": "image",
   "target": "m",
   "front": "What is at the arrow, and why does it matter?",
   "back": "M phase. Prophase, prometaphase, metaphase, anaphase, telophase, then cytokinesis."
  },
  {
   "id": "img-c1",
   "type": "image",
   "target": "c1",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Restriction point. Checks a favourable environment and sufficient cell size (N/C ratio); past it, no return. p53 and pRb act here."
  },
  {
   "id": "img-c2",
   "type": "image",
   "target": "c2",
   "front": "What is at the arrow, and why does it matter?",
   "back": "G2/M checkpoint. Checks that all DNA is replicated, in amount and quality."
  },
  {
   "id": "img-c3",
   "type": "image",
   "target": "c3",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Metaphase checkpoint. Checks chromosomes are aligned and attached to the spindle; failure triggers apoptosis."
  }
 ],
 "deeper": [
  {
   "title": "Why checkpoint failure leads to cancer",
   "html": "<p>Checkpoints stop a cell that has damaged DNA or misattached chromosomes, giving it time to repair or pushing it into apoptosis. When p53 or pRb is lost, damaged cells keep dividing, passing on and accumulating mutations. That is why these genes are called tumour suppressors and are mutated in many cancers.</p><p class='src'>Source: the lecture's checkpoint slides.</p>"
  },
  {
   "title": "Why the nucleolus sits on five chromosomes",
   "html": "<p>Cells need huge numbers of ribosomes, so the genes for ribosomal RNA are repeated many times on the short arms of the acrocentric chromosomes 13, 14, 15, 21 and 22. These loops cluster together in interphase to form the nucleolus, which is why these same chromosomes are involved in Robertsonian translocations.</p><p class='src'>Source: the lecture's nucleolus slide and the genetics course.</p>"
  }
 ],
 "resources": [
  {
   "title": "The cell cycle (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/cellular-molecular-biology/stem-cells-and-cancer/a/cell-cycle-checkpoints-article",
   "kind": "Article",
   "why": "Checkpoints and cyclin/CDK regulation.",
   "note": ""
  },
  {
   "title": "Nuclear pore complex (NHGRI glossary)",
   "url": "https://www.genome.gov/genetics-glossary/Nucleus",
   "kind": "Website",
   "why": "The nucleus and its envelope.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "The cell cycle (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/cellular-molecular-biology/stem-cells-and-cancer/a/cell-cycle-checkpoints-article"
  },
  {
   "name": "Nuclear pore complex (NHGRI glossary)",
   "url": "https://www.genome.gov/genetics-glossary/Nucleus"
  }
 ],
 "verified": "22 Sep 2026"
};
