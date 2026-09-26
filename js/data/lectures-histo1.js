/* histo1: 10 lectures, merged for upload. Edit the source files, not this one. */
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["histo1-intro"] = {
 "id": "histo1-intro",
 "subject": "histo1",
 "group": "Basic tissues",
 "title": "Introduction to histology",
 "sourceFile": "Introduction to histology (Histology, Dr Z. Jamil)",
 "sourceUrl": "https://drive.google.com/file/d/1bu2XcxgDFtsSg0M5I5cdgST8FtKqQoyh/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "Anatomy and histology",
   "html": "<p><strong>Anatomy</strong> studies body structure, revealed by dissection. It has three branches: <strong>gross</strong>, <strong>microscopic</strong> and <strong>developmental</strong> anatomy. Microscopic anatomy = <strong>cytology + histology + organology</strong>. <strong>Histology</strong> is the microscopic study of tissues and organs by sectioning, staining and examining them under a microscope, showing normal structure and the changes a tissue may have undergone.</p><p>There are <strong>four basic tissues</strong>: epithelial, connective, muscle and nervous. Tissues are cells plus <strong>extracellular matrix</strong> (collagen fibrils, basement membranes) that supports the cells, carries nutrients to them and removes wastes and secretions; cells and matrix act as one continuum.</p>"
  },
  {
   "id": "s1",
   "title": "Preparing tissue for the microscope",
   "html": "<p><strong>1. Fixation</strong> prevents digestion (autolysis) and preserves structure and composition: <strong>chemical</strong> (formaldehyde, glutaraldehyde) or <strong>physical</strong> (rapid freezing); for electron microscopy glutaraldehyde plus buffered <strong>osmium tetroxide</strong>, which also stains lipids and proteins. <strong>2. Embedding</strong> in paraffin or plastic resin gives a rigid block, after <strong>dehydration</strong> (ethanol) and <strong>clearing</strong> (tissue becomes transparent). <strong>3. Sectioning</strong> with a <strong>microtome</strong> at <strong>1-10 µm</strong>; sections are floated on water and mounted on slides. <strong>4. Staining</strong>.</p><p>A section is two-dimensional: to understand a 3D structure you study sections in different planes, sometimes serial sections.</p>"
  },
  {
   "id": "s2",
   "title": "Stains and H&E",
   "html": "<p>Unstained tissue is almost transparent. <strong>Basic dyes</strong> (toluidine blue, methylene blue, haematoxylin) bind acidic, <strong>basophilic</strong> components; <strong>acid dyes</strong> (orange G, eosin, acid fuchsin) bind basic, <strong>acidophilic</strong> components. <strong>Haematoxylin and eosin (H&amp;E)</strong> is the most used: haematoxylin (with aluminium, positively charged) stains nucleic acids, so <strong>nuclei are blue-purple</strong>; eosin stains most cytoplasmic proteins and collagen <strong>pink</strong>.</p>"
  },
  {
   "id": "s3",
   "title": "Microscopes",
   "html": "<p>The <strong>light microscope</strong> magnifies with an objective and an eyepiece: <strong>total magnification = objective × eyepiece</strong>. <strong>Resolution</strong> is the smallest distance at which two points are still seen as separate; it limits detail more than magnification does (about 0.2 µm for light microscopy). <strong>Electron microscopy</strong> gives far higher resolution (transmission for internal structure, scanning for surfaces) but not of living cells.</p><p>Other types: <strong>phase contrast</strong> (visible images of transparent, living cells), <strong>differential interference</strong> (apparently 3D image), <strong>polarising</strong> (highly ordered molecules such as collagen or crystals), <strong>confocal</strong> and <strong>fluorescence</strong> (fluorescent labels, e.g. antibodies).</p>"
  }
 ],
 "exam": [
  "Microscopic anatomy = cytology + histology + organology.",
  "Four tissues: epithelial, connective, muscle, nervous.",
  "Preparation: fixation → embedding → sectioning → staining.",
  "Fixatives: formaldehyde; glutaraldehyde + osmium tetroxide for EM.",
  "Before embedding: dehydration (ethanol) and clearing.",
  "Sections 1-10 µm with a microtome.",
  "Haematoxylin = basic dye → basophilic nuclei blue-purple.",
  "Eosin = acid dye → cytoplasm and collagen pink.",
  "Total magnification = objective × eyepiece; resolution ≠ magnification.",
  "Phase contrast: living unstained cells; polarising: ordered molecules; EM: ultrastructure."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "From tissue to slide",
   "caption": "The four steps of tissue preparation, then H&E. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"250\" y1=\"70\" x2=\"270\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"490\" y1=\"70\" x2=\"510\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"627.5\" y1=\"100\" x2=\"627.5\" y2=\"170\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"510\" y1=\"200\" x2=\"490\" y2=\"200\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"270\" y1=\"200\" x2=\"250\" y2=\"200\"/>",
   "parts": {
    "fix": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"15\" y=\"40\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "1. Fixation: formaldehyde",
      "(LM), glutaraldehyde (EM)"
     ],
     "lx": 132.5,
     "ly": 68.0
    },
    "emb": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"270\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "2. Embedding: dehydrate,",
      "clear, paraffin or resin"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "sec": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"510\" y=\"40\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "3. Sectioning: microtome,",
      "1-10 µm"
     ],
     "lx": 627.5,
     "ly": 68.0
    },
    "st": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"510\" y=\"170\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "4. Staining: H&E",
      "most common"
     ],
     "lx": 627.5,
     "ly": 198.0
    },
    "h": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"270\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Haematoxylin (basic dye):",
      "nuclei blue-purple"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "e": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"15\" y=\"170\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Eosin (acid dye):",
      "cytoplasm, collagen pink"
     ],
     "lx": 132.5,
     "ly": 198.0
    }
   },
   "arrows": {
    "fix": [
     {
      "t": [
       15.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "emb": [
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
    "sec": [
     {
      "t": [
       510.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "st": [
     {
      "t": [
       510.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "h": [
     {
      "t": [
       270.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "e": [
     {
      "t": [
       15.0,
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
   "q": "Microscopic anatomy includes:",
   "options": [
    "Gross anatomy and cytology",
    "Cytology, histology and organology",
    "Embryology only",
    "Radiology and histology"
   ],
   "answer": 1,
   "why": "Three microscopic levels."
  },
  {
   "q": "The correct order of tissue preparation is:",
   "options": [
    "Staining, fixation, embedding, sectioning",
    "Fixation, embedding, sectioning, staining",
    "Embedding, fixation, staining, sectioning",
    "Sectioning, fixation, staining, embedding"
   ],
   "answer": 1,
   "why": "Fix first to stop autolysis."
  },
  {
   "q": "The main purpose of fixation is to:",
   "options": [
    "Colour the tissue",
    "Preserve structure and prevent digestion",
    "Make the tissue hard to cut",
    "Remove water"
   ],
   "answer": 1,
   "why": "Stops autolysis."
  },
  {
   "q": "A fixative used for electron microscopy is:",
   "options": [
    "Eosin",
    "Glutaraldehyde",
    "Paraffin",
    "Haematoxylin"
   ],
   "answer": 1,
   "why": "With osmium tetroxide."
  },
  {
   "q": "Sections for light microscopy are usually cut at:",
   "options": [
    "0.1 mm",
    "1-10 µm",
    "100 µm",
    "1 mm"
   ],
   "answer": 1,
   "why": "With a microtome."
  },
  {
   "q": "Before paraffin embedding, the tissue is:",
   "options": [
    "Stained",
    "Dehydrated and cleared",
    "Frozen",
    "Sectioned"
   ],
   "answer": 1,
   "why": "Ethanol then a clearing agent."
  },
  {
   "q": "Haematoxylin stains nuclei because it:",
   "options": [
    "Is an acid dye binding proteins",
    "Is a basic dye binding nucleic acids",
    "Dissolves in the lipid membranes",
    "Binds collagen fibres specifically"
   ],
   "answer": 1,
   "why": "Basophilia."
  },
  {
   "q": "Eosin stains:",
   "options": [
    "Nuclei blue-purple",
    "Cytoplasm and collagen pink",
    "DNA and RNA purple",
    "Fat droplets black"
   ],
   "answer": 1,
   "why": "Acid dye."
  },
  {
   "q": "A structure that stains with haematoxylin is described as:",
   "options": [
    "Acidophilic",
    "Basophilic",
    "Eosinophilic",
    "Argyrophilic"
   ],
   "answer": 1,
   "why": "Binds the basic dye."
  },
  {
   "q": "Total magnification of a light microscope equals:",
   "options": [
    "Objective + eyepiece",
    "Objective × eyepiece",
    "Resolution × objective",
    "Eyepiece alone"
   ],
   "answer": 1,
   "why": "E.g. 40 × 10 = 400."
  },
  {
   "q": "Resolution is:",
   "options": [
    "Enlargement of the image",
    "Smallest distance between two distinct points",
    "Brightness of the illuminated field",
    "Colour contrast between two stains"
   ],
   "answer": 1,
   "why": "Not the same as magnification."
  },
  {
   "q": "The best microscope for living unstained cells is:",
   "options": [
    "Electron",
    "Phase contrast",
    "Polarising",
    "Confocal only"
   ],
   "answer": 1,
   "why": "Converts phase differences to contrast."
  },
  {
   "q": "Highly ordered molecules such as collagen are best seen with:",
   "options": [
    "Phase contrast",
    "Polarising microscopy",
    "Fluorescence",
    "Light microscope without stain"
   ],
   "answer": 1,
   "why": "Birefringence."
  },
  {
   "q": "Electron microscopy cannot be used to:",
   "options": [
    "See ultrastructure",
    "Observe living cells",
    "See membranes",
    "Study organelles"
   ],
   "answer": 1,
   "why": "Vacuum and fixation."
  },
  {
   "q": "Which is a basic dye?",
   "options": [
    "Eosin",
    "Orange G",
    "Toluidine blue",
    "Acid fuchsin"
   ],
   "answer": 2,
   "why": "Also methylene blue."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "fix",
   "options": [
    "Haematoxylin",
    "Staining",
    "Fixation",
    "Embedding"
   ],
   "answer": 2,
   "why": "The arrow points to: Fixation. Stops autolysis and preserves structure: chemical (formaldehyde; glutaraldehyde and osmium tetroxide for electron microscopy) or physical (rapid freezing)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "emb",
   "options": [
    "Eosin",
    "Staining",
    "Embedding",
    "Haematoxylin"
   ],
   "answer": 2,
   "why": "The arrow points to: Embedding. Tissue is dehydrated in graded ethanol, cleared, then infiltrated with paraffin or plastic resin to make a rigid block."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "sec",
   "options": [
    "Haematoxylin",
    "Fixation",
    "Sectioning",
    "Staining"
   ],
   "answer": 2,
   "why": "The arrow points to: Sectioning. A microtome's steel or glass blade cuts sections 1-10 µm thick, floated on water and picked up on glass slides."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "st",
   "options": [
    "Eosin",
    "Staining",
    "Sectioning",
    "Haematoxylin"
   ],
   "answer": 1,
   "why": "The arrow points to: Staining. Makes transparent sections visible; H&E is the routine stain, with special stains for fibres or carbohydrates."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "h",
   "options": [
    "Staining",
    "Eosin",
    "Embedding",
    "Haematoxylin"
   ],
   "answer": 3,
   "why": "The arrow points to: Haematoxylin. With aluminium it acts as a positively charged basic dye binding negatively charged, basophilic structures such as nucleic acids: nuclei stain blue or purple."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "e",
   "options": [
    "Eosin",
    "Haematoxylin",
    "Fixation",
    "Staining"
   ],
   "answer": 0,
   "why": "The arrow points to: Eosin. An acid dye binding basic proteins of the cytoplasm and collagen, which stain pink (acidophilic, eosinophilic)."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Define histology.",
   "back": "Microscopic study of tissues and organs by sectioning, staining and examining them under a microscope."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Four basic tissues?",
   "back": "Epithelial, connective, muscle, nervous."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Four steps of preparation?",
   "back": "Fixation, embedding (after dehydration and clearing), sectioning (1-10 µm), staining."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Chemical vs physical fixation?",
   "back": "Chemical: formaldehyde, glutaraldehyde (+ osmium for EM). Physical: rapid freezing."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "How does H&E work?",
   "back": "Haematoxylin (basic) binds nucleic acids: nuclei blue-purple. Eosin (acid) binds basic proteins: cytoplasm and collagen pink."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Magnification vs resolution?",
   "back": "Magnification enlarges (objective × eyepiece); resolution is the ability to separate two close points."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Special microscopes?",
   "back": "Phase contrast (living cells), differential interference (3D look), polarising (ordered molecules), confocal, fluorescence, electron."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Why study sections in several planes?",
   "back": "A thin section is 2D; several planes or serial sections are needed to rebuild 3D structure."
  },
  {
   "id": "img-fix",
   "type": "image",
   "target": "fix",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Fixation. Stops autolysis and preserves structure: chemical (formaldehyde; glutaraldehyde and osmium tetroxide for electron microscopy) or physical (rapid freezing)."
  },
  {
   "id": "img-emb",
   "type": "image",
   "target": "emb",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Embedding. Tissue is dehydrated in graded ethanol, cleared, then infiltrated with paraffin or plastic resin to make a rigid block."
  },
  {
   "id": "img-sec",
   "type": "image",
   "target": "sec",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Sectioning. A microtome's steel or glass blade cuts sections 1-10 µm thick, floated on water and picked up on glass slides."
  },
  {
   "id": "img-st",
   "type": "image",
   "target": "st",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Staining. Makes transparent sections visible; H&E is the routine stain, with special stains for fibres or carbohydrates."
  },
  {
   "id": "img-h",
   "type": "image",
   "target": "h",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Haematoxylin. With aluminium it acts as a positively charged basic dye binding negatively charged, basophilic structures such as nucleic acids: nuclei stain blue or purple."
  },
  {
   "id": "img-e",
   "type": "image",
   "target": "e",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Eosin. An acid dye binding basic proteins of the cytoplasm and collagen, which stain pink (acidophilic, eosinophilic)."
  }
 ],
 "deeper": [
  {
   "title": "Frozen sections in the operating theatre",
   "html": "<p>Paraffin processing takes a day or more because the tissue must be dehydrated, cleared and infiltrated with wax. When a surgeon needs an answer during an operation, for example whether a margin is clear of cancer, the pathologist uses <strong>physical fixation</strong> instead: the tissue is snap-frozen, cut in a cryostat and stained with H&amp;E within about 20 minutes. The trade-off is poorer morphology (ice crystals, no wax support), so the final diagnosis still comes from the paraffin sections.</p><p class='src'>Source: the lecture's fixation methods; routine pathology practice.</p>"
  }
 ],
 "resources": [
  {
   "title": "The haematoxylin and eosin stain in anatomic pathology (PubMed)",
   "url": "https://pubmed.ncbi.nlm.nih.gov/31230963/",
   "kind": "Article",
   "why": "History and chemistry of H&E.",
   "note": ""
  },
  {
   "title": "Histology Guide (University of Leeds)",
   "url": "https://www.histology.leeds.ac.uk/",
   "kind": "Website",
   "why": "Virtual slides of every basic tissue.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "The haematoxylin and eosin stain in anatomic pathology (PubMed)",
   "url": "https://pubmed.ncbi.nlm.nih.gov/31230963/"
  },
  {
   "name": "Histology Guide (University of Leeds)",
   "url": "https://www.histology.leeds.ac.uk/"
  }
 ],
 "verified": "26 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["histo1-epithelium"] = {
 "id": "histo1-epithelium",
 "subject": "histo1",
 "group": "Basic tissues",
 "title": "Epithelial tissue",
 "sourceFile": "Epithelial tissue (Histology, Dr Z. Jamil)",
 "sourceUrl": "https://drive.google.com/file/d/184J1XAE_JgwVLApPLks_3IliQ795KB1k/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "Tissues and the epithelium",
   "html": "<p>A <strong>tissue</strong> is a group of cells with a common function. <strong>Epithelium</strong> covers body surfaces, lines cavities and forms glands; <strong>connective tissue</strong> supports the other three; <strong>muscle</strong> contracts; <strong>nervous tissue</strong> receives, transmits and integrates information.</p><p>Epithelium comes from <strong>all three germ layers</strong> (ectoderm: epidermis; endoderm: gut, respiratory and urinary linings, liver; mesoderm: endothelium, mesothelium). Features: cells packed close with <strong>little intercellular material</strong>, <strong>polarity</strong>, <strong>junctions</strong>, a <strong>basement membrane</strong>, <strong>no blood vessels</strong> (fed by diffusion) and <strong>mitotic activity</strong>: most epithelial cells live shorter than the body and are replaced from adult stem cells.</p>"
  },
  {
   "id": "s1",
   "title": "Polarity: apical, lateral and basal domains",
   "html": "<p><strong>Apical domain</strong> (facing the lumen): <strong>microvilli</strong>, finger-like projections with an <strong>actin core</strong> that increase absorptive surface (small intestine); <strong>stereocilia</strong>, long immotile microvilli, absorptive in the <strong>epididymis</strong> and mechanoreceptors in inner-ear hair cells; <strong>cilia</strong>, motile, moving fluid and particles (bronchi, uterine tubes), and the sperm flagellum.</p><p><strong>Lateral domain</strong>: junctions that bind cells, form permeability barriers and allow communication. <strong>Tight junctions</strong> (occluding) seal, e.g. keeping gut bacteria and toxins out of the blood; <strong>desmosomes</strong> (anchoring, linked to keratin filaments) let skin stretch while holding cells together; <strong>gap junctions</strong> (communicating, connexons) spread action potentials in cardiac muscle.</p><p><strong>Basal domain</strong>: the <strong>basement membrane</strong> separates epithelium from connective tissue. <strong>Basal lamina</strong> (lamina lucida and lamina densa): <strong>type IV collagen</strong>, heparan sulphate, laminin, fibronectin; <strong>reticular lamina</strong>: <strong>type III</strong> (reticular) collagen and proteoglycans. It anchors the cells (via <strong>hemidesmosomes</strong> and integrins), is a mechanical barrier and lets nutrients and wastes diffuse.</p>"
  },
  {
   "id": "s2",
   "title": "Classification",
   "html": "<p>Named by (1) <strong>number of layers</strong>, simple (one), stratified (several) or pseudostratified (one layer, nuclei at different levels), and (2) <strong>shape of the surface cells</strong>, squamous, cuboidal or columnar.</p><p>Simple squamous: vessel lining, lung alveoli (diffusion). Simple cuboidal: kidney tubules, gland ducts (absorption, secretion). Simple columnar: digestive tract, often with microvilli or goblet cells. Pseudostratified columnar: respiratory passages, many gland ducts (mucus movement). <strong>Stratified squamous</strong>: mouth and vagina (non-keratinised), epidermis (keratinised: dead surface cells full of waterproof keratin); protection. Stratified cuboidal: ducts of sweat, salivary and mammary glands. Stratified columnar: male urethra, large salivary ducts. <strong>Transitional (urothelium)</strong>: ureters, bladder, part of the urethra; dome-shaped surface cells when empty, flattened when full; a barrier with tight junctions.</p><p>Functions: secretion (stomach), absorption (intestine, proximal tubule), transport (cilia), protection (epidermis, urothelium) and <strong>sensory reception</strong> (taste buds, olfactory epithelium, retina).</p>"
  },
  {
   "id": "s3",
   "title": "Glands",
   "html": "<p><strong>Exocrine</strong> glands keep a duct. <strong>Unicellular</strong>: the <strong>goblet cell</strong>, a mucus-secreting cell among columnar cells. <strong>Multicellular</strong>: by the duct, <strong>simple</strong> (unbranched) or <strong>compound</strong> (branched); by the secretory unit, <strong>tubular</strong>, <strong>acinar/alveolar</strong> (flask) or <strong>tubuloalveolar</strong>. Types include simple tubular, simple coiled tubular (sweat glands), simple branched acinar, compound tubuloacinar. <strong>Endocrine</strong> glands lose the duct and secrete into the blood.</p><p>Secretions: <strong>serous</strong> (thin, watery, protein-rich: parotid), <strong>mucous</strong> (thick, glycoprotein-rich: sublingual) and <strong>seromucous</strong> (mixed: submandibular). Mechanisms: <strong>merocrine</strong> (exocytosis, most glands), <strong>apocrine</strong> (apical cytoplasm lost: lipid of milk) and <strong>holocrine</strong> (whole cell released: <strong>sebaceous gland</strong>).</p><p class='src'>Note: one slide gives the sebaceous gland as an example of seromucous secretion. The sebaceous gland is the classic <em>holocrine</em> gland producing sebum; the submandibular gland is the usual seromucous example.</p>"
  }
 ],
 "exam": [
  "Epithelium: from all three germ layers; polarity, junctions, basement membrane, avascular.",
  "Microvilli: actin core, absorption; stereocilia: immotile (epididymis, ear); cilia: motile.",
  "Tight = seal; desmosome = anchor (skin); gap = communication (heart); hemidesmosome = to basement membrane.",
  "Basal lamina: type IV collagen, laminin; reticular lamina: type III collagen.",
  "Name = layers (simple, stratified, pseudostratified) + surface shape.",
  "Simple squamous: endothelium, alveoli; simple cuboidal: kidney tubules.",
  "Pseudostratified ciliated: airways; stratified squamous: skin, mouth, vagina.",
  "Transitional epithelium: urinary passages; domes when empty.",
  "Goblet cell = unicellular exocrine gland.",
  "Simple vs compound duct; tubular, acinar, tubuloalveolar units.",
  "Serous (parotid), mucous (sublingual), mixed (submandibular); merocrine, apocrine, holocrine (sebaceous)."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Naming epithelia",
   "caption": "Layers + shape of the surface cells. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs>",
   "parts": {
    "ss": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"15\" y=\"40\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Simple squamous: vessels,",
      "alveoli (diffusion)"
     ],
     "lx": 132.5,
     "ly": 68.0
    },
    "sc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"270\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Simple cuboidal: kidney",
      "tubules, gland ducts"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "scol": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"510\" y=\"40\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Simple columnar: gut",
      "(absorption, mucus)"
     ],
     "lx": 627.5,
     "ly": 68.0
    },
    "ps": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"15\" y=\"170\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Pseudostratified ciliated:",
      "airways (mucus transport)"
     ],
     "lx": 132.5,
     "ly": 198.0
    },
    "strs": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"270\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Stratified squamous: skin,",
      "mouth, vagina (protection)"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "tr": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"510\" y=\"170\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Transitional: ureter,",
      "bladder (stretch)"
     ],
     "lx": 627.5,
     "ly": 198.0
    }
   },
   "arrows": {
    "ss": [
     {
      "t": [
       15.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "sc": [
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
    "scol": [
     {
      "t": [
       510.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "ps": [
     {
      "t": [
       15.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "strs": [
     {
      "t": [
       270.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "tr": [
     {
      "t": [
       510.0,
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
   "q": "Epithelium is characteristically:",
   "options": [
    "Vascular with much matrix",
    "Avascular, on a basement membrane",
    "Derived only from ectoderm",
    "Without junctions"
   ],
   "answer": 1,
   "why": "Fed by diffusion."
  },
  {
   "q": "Microvilli contain a core of:",
   "options": [
    "Microtubules",
    "Actin filaments",
    "Keratin",
    "Collagen"
   ],
   "answer": 1,
   "why": "Cilia contain microtubules."
  },
  {
   "q": "Stereocilia are found in the:",
   "options": [
    "Trachea",
    "Epididymis",
    "Small intestine",
    "Uterine tube"
   ],
   "answer": 1,
   "why": "Also inner-ear hair cells."
  },
  {
   "q": "Motile cilia are typical of the:",
   "options": [
    "Bronchial tree",
    "Proximal tubule",
    "Epidermis",
    "Bladder"
   ],
   "answer": 0,
   "why": "And uterine tubes."
  },
  {
   "q": "Which junction allows action potentials to spread in the heart?",
   "options": [
    "Tight junction",
    "Desmosome",
    "Gap junction",
    "Hemidesmosome"
   ],
   "answer": 2,
   "why": "Connexon channels."
  },
  {
   "q": "The junction that keeps gut bacteria out of the blood is the:",
   "options": [
    "Gap junction",
    "Tight junction",
    "Desmosome",
    "Hemidesmosome"
   ],
   "answer": 1,
   "why": "Occluding junction."
  },
  {
   "q": "The basal lamina is rich in collagen type:",
   "options": [
    "I",
    "II",
    "III",
    "IV"
   ],
   "answer": 3,
   "why": "The reticular lamina has type III."
  },
  {
   "q": "Hemidesmosomes attach epithelial cells to:",
   "options": [
    "Each other",
    "The basement membrane",
    "Cilia",
    "The lumen"
   ],
   "answer": 1,
   "why": "Via integrins."
  },
  {
   "q": "Lung alveoli are lined by:",
   "options": [
    "Simple cuboidal",
    "Simple squamous",
    "Stratified squamous",
    "Pseudostratified"
   ],
   "answer": 1,
   "why": "Thin for diffusion."
  },
  {
   "q": "The respiratory passages are lined by:",
   "options": [
    "Transitional epithelium",
    "Pseudostratified ciliated",
    "Simple squamous epithelium",
    "Stratified cuboidal epithelium"
   ],
   "answer": 1,
   "why": "With goblet cells."
  },
  {
   "q": "The urinary bladder is lined by:",
   "options": [
    "Stratified squamous",
    "Transitional epithelium",
    "Simple columnar",
    "Pseudostratified"
   ],
   "answer": 1,
   "why": "Urothelium."
  },
  {
   "q": "The epidermis is:",
   "options": [
    "Simple columnar with cilia",
    "Keratinised stratified squamous",
    "Transitional with domes",
    "Pseudostratified columnar"
   ],
   "answer": 1,
   "why": "Waterproof protection."
  },
  {
   "q": "A unicellular exocrine gland is the:",
   "options": [
    "Parietal cell",
    "Goblet cell",
    "Chief cell",
    "Podocyte"
   ],
   "answer": 1,
   "why": "Secretes mucus."
  },
  {
   "q": "A gland with a branched duct is called:",
   "options": [
    "Simple",
    "Compound",
    "Endocrine",
    "Holocrine"
   ],
   "answer": 1,
   "why": "Unbranched = simple."
  },
  {
   "q": "In holocrine secretion:",
   "options": [
    "Only vesicles are released",
    "The whole cell is released",
    "Apical cytoplasm is pinched off",
    "No secretion occurs"
   ],
   "answer": 1,
   "why": "Sebaceous glands."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ss",
   "options": [
    "Pseudostratified columnar epithelium",
    "Simple squamous epithelium",
    "Simple cuboidal epithelium",
    "Transitional epithelium (urothelium)"
   ],
   "answer": 1,
   "why": "The arrow points to: Simple squamous epithelium. One layer of flat cells with irregular borders; lines vessels (endothelium), lung alveoli and serous cavities (mesothelium); diffusion and filtration."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "sc",
   "options": [
    "Simple columnar epithelium",
    "Simple cuboidal epithelium",
    "Simple squamous epithelium",
    "Stratified squamous epithelium"
   ],
   "answer": 1,
   "why": "The arrow points to: Simple cuboidal epithelium. One layer of cube-shaped cells; kidney tubules (with microvilli in the proximal tubule) and gland ducts; absorption and secretion."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "scol",
   "options": [
    "Pseudostratified columnar epithelium",
    "Simple squamous epithelium",
    "Simple cuboidal epithelium",
    "Simple columnar epithelium"
   ],
   "answer": 3,
   "why": "The arrow points to: Simple columnar epithelium. One layer of tall cells, often with microvilli or goblet cells; lines the digestive tract; absorption and mucus secretion."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ps",
   "options": [
    "Simple squamous epithelium",
    "Transitional epithelium (urothelium)",
    "Stratified squamous epithelium",
    "Pseudostratified columnar epithelium"
   ],
   "answer": 3,
   "why": "The arrow points to: Pseudostratified columnar epithelium. One layer whose nuclei sit at different heights so it looks layered; ciliated with goblet cells in the respiratory passages."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "strs",
   "options": [
    "Stratified squamous epithelium",
    "Pseudostratified columnar epithelium",
    "Simple cuboidal epithelium",
    "Simple squamous epithelium"
   ],
   "answer": 0,
   "why": "The arrow points to: Stratified squamous epithelium. Many layers; basal cells active, surface cells flat and shed; keratinised in the epidermis, non-keratinised in the mouth, oesophagus and vagina; protection."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "tr",
   "options": [
    "Transitional epithelium (urothelium)",
    "Pseudostratified columnar epithelium",
    "Simple cuboidal epithelium",
    "Simple squamous epithelium"
   ],
   "answer": 0,
   "why": "The arrow points to: Transitional epithelium (urothelium). Stratified epithelium of the urinary passages: dome-shaped surface cells when empty, flattened when stretched; a barrier to urine."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "General features of epithelium?",
   "back": "From all germ layers; polarity; little matrix; close cells; junctions; basement membrane; avascular; mitotically active."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Microvilli vs stereocilia vs cilia?",
   "back": "Microvilli: actin, absorption. Stereocilia: long immotile microvilli (epididymis, ear). Cilia: motile, microtubules (airways, tubes)."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Three lateral junctions and roles?",
   "back": "Tight: seal (gut barrier). Desmosome: anchor (skin). Gap: communication (heart)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Basement membrane structure?",
   "back": "Basal lamina (lucida + densa: type IV collagen, laminin, heparan sulphate) + reticular lamina (type III collagen)."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "How are epithelia named?",
   "back": "Number of layers (simple, stratified, pseudostratified) + shape of surface cells (squamous, cuboidal, columnar)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Transitional epithelium?",
   "back": "Urinary passages; dome-shaped surface cells when empty, flat when stretched; impermeable barrier."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Classify exocrine glands.",
   "back": "Unicellular (goblet) or multicellular; simple or compound duct; tubular, acinar or tubuloalveolar units."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Types and mechanisms of secretion?",
   "back": "Serous, mucous, seromucous; merocrine (exocytosis), apocrine (apical loss), holocrine (whole cell, sebaceous)."
  },
  {
   "id": "img-ss",
   "type": "image",
   "target": "ss",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Simple squamous epithelium. One layer of flat cells with irregular borders; lines vessels (endothelium), lung alveoli and serous cavities (mesothelium); diffusion and filtration."
  },
  {
   "id": "img-sc",
   "type": "image",
   "target": "sc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Simple cuboidal epithelium. One layer of cube-shaped cells; kidney tubules (with microvilli in the proximal tubule) and gland ducts; absorption and secretion."
  },
  {
   "id": "img-scol",
   "type": "image",
   "target": "scol",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Simple columnar epithelium. One layer of tall cells, often with microvilli or goblet cells; lines the digestive tract; absorption and mucus secretion."
  },
  {
   "id": "img-ps",
   "type": "image",
   "target": "ps",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Pseudostratified columnar epithelium. One layer whose nuclei sit at different heights so it looks layered; ciliated with goblet cells in the respiratory passages."
  },
  {
   "id": "img-strs",
   "type": "image",
   "target": "strs",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Stratified squamous epithelium. Many layers; basal cells active, surface cells flat and shed; keratinised in the epidermis, non-keratinised in the mouth, oesophagus and vagina; protection."
  },
  {
   "id": "img-tr",
   "type": "image",
   "target": "tr",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Transitional epithelium (urothelium). Stratified epithelium of the urinary passages: dome-shaped surface cells when empty, flattened when stretched; a barrier to urine."
  }
 ],
 "deeper": [
  {
   "title": "Metaplasia: when epithelium changes to survive",
   "html": "<p>Epithelia can swap one mature type for another better able to cope with stress. In a smoker's bronchus, the ciliated pseudostratified lining is replaced by tougher <strong>stratified squamous</strong> epithelium; in chronic acid reflux the oesophagus's squamous lining becomes <strong>intestinal-type columnar</strong> epithelium with goblet cells (Barrett's oesophagus). The new tissue resists the insult but loses the old function (no cilia, so mucus is not cleared), and metaplasia can progress to dysplasia and cancer. Knowing the normal epithelium of each organ is what lets a pathologist spot the change.</p><p class='src'>Source: the lecture's classification by location; standard pathology link.</p>"
  }
 ],
 "resources": [
  {
   "title": "Histology, Epithelial Cell (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK559063/",
   "kind": "Book",
   "why": "Types, locations and functions.",
   "note": ""
  },
  {
   "title": "The Histology Guide (University of Leeds)",
   "url": "https://histology.leeds.ac.uk/",
   "kind": "Website",
   "why": "Virtual slides of each epithelium.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Histology, Epithelial Cell (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK559063/"
  },
  {
   "name": "The Histology Guide (University of Leeds)",
   "url": "https://histology.leeds.ac.uk/"
  }
 ],
 "verified": "26 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["histo1-connective"] = {
 "id": "histo1-connective",
 "subject": "histo1",
 "group": "Basic tissues",
 "title": "Connective tissue",
 "sourceFile": "Connective tissue (Histology, Dr Z. Jamil)",
 "sourceUrl": "https://drive.google.com/file/d/1QnW0j3xXUe-nrLvMYLg72iX7Hbgom-XH/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "Overview and classification",
   "html": "<p>Connective tissue (CT) is found everywhere, about <strong>50% of body weight</strong>. It supports, protects, connects, divides and shapes organs. It consists of <strong>cells</strong> embedded in an <strong>extracellular matrix (ECM)</strong> of <strong>fibres</strong> (collagen, reticular, elastic), ground substance and tissue fluid; the ECM's composition sets strength, elasticity and resilience. Cells are varied but few; the matrix predominates; CT is <strong>vascularised except cartilage</strong>. Functions: framework, transport of fluid and solutes, protection, energy storage and defence against microbes.</p><p>All CT arises from <strong>mesenchyme</strong>, the embryonic CT derived mainly from mesoderm; mesenchymal stem cells persist in the bone marrow. Classification: <strong>CT proper</strong> (loose/areolar; dense regular or irregular), <strong>CT with special properties</strong> (adipose, elastic, haematopoietic, mucous), and <strong>supporting CT</strong> (cartilage, bone).</p>"
  },
  {
   "id": "s1",
   "title": "Cells of connective tissue",
   "html": "<p><strong>Fibroblasts</strong>, the main cells, synthesise fibres and ground substance and the enzymes that break them down (collagenase, elastase); <strong>fibrocytes</strong> are the inactive form and can be reactivated. <strong>Reticular cells</strong> (stellate) make reticular fibres in haematopoietic and lymphoid tissue, can phagocytose and present antigen. <strong>Adipocytes</strong> store lipid. <strong>Mast cells</strong> come from the bone marrow, carry basophilic granules of <strong>histamine and heparin</strong> and surface <strong>IgE receptors</strong>; degranulation in allergy increases vascular permeability (oedema, itch), mucus and bronchoconstriction. <strong>Macrophages</strong> derive from blood <strong>monocytes</strong>, phagocytose debris and present antigen. <strong>Plasma cells</strong> come from antigen-stimulated B lymphocytes, secrete antibodies and have a <strong>clock-face nucleus</strong>. Leucocytes migrate in during inflammation.</p>"
  },
  {
   "id": "s2",
   "title": "Fibres",
   "html": "<p><strong>Collagen</strong>: about 28 types; <strong>type I</strong> is the most abundant and strongest. Synthesis inside the fibroblast: translation of the α chains, <strong>hydroxylation</strong> of proline and lysine (needs vitamin C), glycosylation, assembly of three chains into <strong>procollagen</strong>, exocytosis. Outside: procollagen peptidase removes the end peptides to give <strong>tropocollagen</strong>, which assembles into fibrils, then fibres.</p><p><strong>Reticular fibres</strong>: <strong>type III collagen</strong>, thin, forming delicate networks in liver, lymph nodes, spleen and haematopoietic organs and supporting capillaries, nerves and muscle fibres; they are <strong>stained by silver</strong> (argyrophilic). <strong>Elastic fibres</strong>: <strong>elastin</strong> with microfibrils (fibrillin); less tensile than collagen but stretch and recoil; aorta, lungs, yellow ligaments (ligamenta flava).</p><p><strong>Ground substance</strong>: glycosaminoglycans (hyaluronan etc.), proteoglycans and adhesive glycoproteins holding tissue fluid, in equilibrium with plasma.</p>"
  },
  {
   "id": "s3",
   "title": "Types of connective tissue",
   "html": "<p><strong>Loose (areolar)</strong>: many cells and ground substance, few fibres; under epithelia and around vessels. <strong>Dense irregular</strong>: interwoven collagen bundles resisting pull in all directions (dermis, organ capsules). <strong>Dense regular</strong>: parallel collagen bundles resisting pull in one direction (tendons, ligaments).</p><p><strong>Reticular CT</strong>: reticular cells and fibres; haematopoietic and lymphoid organs. <strong>Elastic CT</strong>: like dense regular but with abundant elastic fibres; yellow ligaments. <strong>Mucous CT</strong>: few cells and fibres, abundant <strong>hyaluronan</strong>, jelly-like, cushioning: <strong>umbilical cord (Wharton's jelly)</strong> and the nucleus pulposus. <strong>Adipose tissue</strong>: <strong>white fat</strong> (one large droplet, signet-ring nucleus; energy store, insulation) and <strong>brown fat</strong> (many small droplets, many mitochondria; heat production, prominent in newborns).</p>"
  }
 ],
 "exam": [
  "CT ≈ 50% of body weight; cells + ECM (fibres, ground substance, fluid).",
  "All CT from mesenchyme; vascular except cartilage.",
  "Classes: CT proper, CT with special properties, supporting CT.",
  "Fibroblast: makes fibres and ground substance; fibrocyte = inactive.",
  "Mast cell: histamine + heparin, IgE receptors, allergy.",
  "Macrophage from monocyte; plasma cell from B cell, clock-face nucleus.",
  "Collagen I strongest; hydroxylation needs vitamin C; procollagen → tropocollagen outside the cell.",
  "Reticular fibres = type III, silver-stained; elastic fibres = elastin + fibrillin.",
  "Dense regular: tendons; dense irregular: dermis.",
  "Mucous CT: Wharton's jelly; white vs brown fat."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Classification of connective tissue",
   "caption": "Three families, all from mesenchyme. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"265\" y1=\"90\" x2=\"235\" y2=\"160\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"90\" x2=\"380\" y2=\"160\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"495\" y1=\"90\" x2=\"525\" y2=\"160\"/>",
   "parts": {
    "ct": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"250\" y=\"30\" width=\"260\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Connective tissue: few cells,",
      "abundant matrix; mesenchyme"
     ],
     "lx": 380.0,
     "ly": 58.0
    },
    "prop": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"15\" y=\"160\" width=\"235\" height=\"70\" rx=\"10\"/>",
     "label": [
      "CT proper: loose,",
      "dense regular and irregular"
     ],
     "lx": 132.5,
     "ly": 193.0
    },
    "spec": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"265\" y=\"160\" width=\"230\" height=\"70\" rx=\"10\"/>",
     "label": [
      "Special properties: adipose,",
      "elastic, reticular, mucous"
     ],
     "lx": 380.0,
     "ly": 193.0
    },
    "supp": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"510\" y=\"160\" width=\"235\" height=\"70\" rx=\"10\"/>",
     "label": [
      "Supporting: cartilage,",
      "bone (blood: fluid CT)"
     ],
     "lx": 627.5,
     "ly": 193.0
    }
   },
   "arrows": {
    "ct": [
     {
      "t": [
       250.0,
       38.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "prop": [
     {
      "t": [
       15.0,
       168.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "spec": [
     {
      "t": [
       265.0,
       168.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "supp": [
     {
      "t": [
       510.0,
       168.0
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
   "q": "All connective tissues arise from:",
   "options": [
    "Ectoderm",
    "Mesenchyme",
    "Endoderm",
    "Neural crest only"
   ],
   "answer": 1,
   "why": "Mostly mesodermal."
  },
  {
   "q": "Which connective tissue is avascular?",
   "options": [
    "Bone",
    "Cartilage",
    "Adipose",
    "Dermis"
   ],
   "answer": 1,
   "why": "Nourished by diffusion."
  },
  {
   "q": "The main cell of connective tissue proper is the:",
   "options": [
    "Mast cell",
    "Fibroblast",
    "Plasma cell",
    "Macrophage"
   ],
   "answer": 1,
   "why": "Makes fibres and ground substance."
  },
  {
   "q": "Mast cell granules contain:",
   "options": [
    "Hydrolases only",
    "Histamine and heparin",
    "Antibodies",
    "Collagen"
   ],
   "answer": 1,
   "why": "Released via IgE."
  },
  {
   "q": "A clock-face nucleus is typical of the:",
   "options": [
    "Fibroblast",
    "Plasma cell",
    "Mast cell",
    "Adipocyte"
   ],
   "answer": 1,
   "why": "Antibody-secreting cell."
  },
  {
   "q": "Tissue macrophages derive from:",
   "options": [
    "Fibroblasts",
    "Blood monocytes",
    "Mast cells",
    "Plasma cells"
   ],
   "answer": 1,
   "why": "Phagocytosis, antigen presentation."
  },
  {
   "q": "The most abundant and strongest collagen is type:",
   "options": [
    "I",
    "II",
    "III",
    "IV"
   ],
   "answer": 0,
   "why": "Bone, tendon, dermis."
  },
  {
   "q": "Reticular fibres consist of collagen type:",
   "options": [
    "I",
    "II",
    "III",
    "IV"
   ],
   "answer": 2,
   "why": "Stained by silver."
  },
  {
   "q": "Hydroxylation of proline during collagen synthesis requires:",
   "options": [
    "Vitamin A",
    "Vitamin C",
    "Vitamin D",
    "Vitamin K"
   ],
   "answer": 1,
   "why": "Deficiency: scurvy."
  },
  {
   "q": "Tropocollagen is formed:",
   "options": [
    "In the nucleus of the fibroblast",
    "Outside the cell after cleavage",
    "Inside mitochondria",
    "In the Golgi before secretion"
   ],
   "answer": 1,
   "why": "Procollagen peptidase."
  },
  {
   "q": "Elastic fibres are abundant in the:",
   "options": [
    "Tendons",
    "Aorta",
    "Cornea",
    "Bone"
   ],
   "answer": 1,
   "why": "Also lungs, yellow ligaments."
  },
  {
   "q": "Tendons are made of:",
   "options": [
    "Loose connective tissue",
    "Dense regular connective tissue",
    "Dense irregular connective tissue",
    "Mucous tissue"
   ],
   "answer": 1,
   "why": "Parallel collagen."
  },
  {
   "q": "The dermis is an example of:",
   "options": [
    "Dense regular CT",
    "Dense irregular CT",
    "Reticular CT",
    "Mucous CT"
   ],
   "answer": 1,
   "why": "Resists pull in all directions."
  },
  {
   "q": "Wharton's jelly is:",
   "options": [
    "Elastic CT",
    "Mucous connective tissue",
    "Adipose tissue",
    "Reticular tissue"
   ],
   "answer": 1,
   "why": "Rich in hyaluronan."
  },
  {
   "q": "Brown adipose tissue is specialised for:",
   "options": [
    "Long-term energy storage",
    "Heat production",
    "Mechanical support",
    "Blood formation"
   ],
   "answer": 1,
   "why": "Many mitochondria."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ct",
   "options": [
    "Connective tissue",
    "Connective tissue proper",
    "Connective tissue with special properties",
    "Supporting connective tissue"
   ],
   "answer": 0,
   "why": "The arrow points to: Connective tissue. About half of body weight; cells scattered in an extracellular matrix of fibres and ground substance; vascular except cartilage; all from mesenchyme."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "prop",
   "options": [
    "Connective tissue with special properties",
    "Connective tissue proper",
    "Connective tissue",
    "Supporting connective tissue"
   ],
   "answer": 1,
   "why": "The arrow points to: Connective tissue proper. Loose (areolar) under epithelia; dense irregular with interwoven collagen (dermis, capsules); dense regular with parallel collagen (tendons, ligaments)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "spec",
   "options": [
    "Supporting connective tissue",
    "Connective tissue proper",
    "Connective tissue",
    "Connective tissue with special properties"
   ],
   "answer": 3,
   "why": "The arrow points to: Connective tissue with special properties. Adipose (white and brown fat), elastic (yellow ligaments), reticular (stroma of haematopoietic and lymphoid organs) and mucous (Wharton's jelly)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "supp",
   "options": [
    "Supporting connective tissue",
    "Connective tissue with special properties",
    "Connective tissue proper",
    "Connective tissue"
   ],
   "answer": 0,
   "why": "The arrow points to: Supporting connective tissue. Cartilage and bone, which bear load; blood is a connective tissue with a fluid matrix."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Components of connective tissue?",
   "back": "Cells + extracellular matrix (fibres, ground substance, tissue fluid)."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Classify connective tissue.",
   "back": "Proper (loose, dense regular, dense irregular); special (adipose, elastic, reticular/haematopoietic, mucous); supporting (cartilage, bone)."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Fibroblast vs fibrocyte?",
   "back": "Fibroblast: active, makes fibres, ground substance and degrading enzymes. Fibrocyte: resting form that can reactivate."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Mast cell?",
   "back": "From bone marrow; basophilic granules of histamine and heparin; IgE receptors; allergic reactions."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Steps of collagen synthesis?",
   "back": "α chains → hydroxylation (vit C) → glycosylation → procollagen → exocytosis → tropocollagen → fibrils → fibres."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Reticular vs elastic fibres?",
   "back": "Reticular: type III collagen networks in lymphoid organs, silver stain. Elastic: elastin + microfibrils, stretch and recoil."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Dense regular vs irregular?",
   "back": "Regular: parallel bundles (tendons, ligaments). Irregular: interwoven bundles (dermis, capsules)."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "White vs brown fat?",
   "back": "White: one droplet, energy store. Brown: many droplets and mitochondria, heat production."
  },
  {
   "id": "img-ct",
   "type": "image",
   "target": "ct",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Connective tissue. About half of body weight; cells scattered in an extracellular matrix of fibres and ground substance; vascular except cartilage; all from mesenchyme."
  },
  {
   "id": "img-prop",
   "type": "image",
   "target": "prop",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Connective tissue proper. Loose (areolar) under epithelia; dense irregular with interwoven collagen (dermis, capsules); dense regular with parallel collagen (tendons, ligaments)."
  },
  {
   "id": "img-spec",
   "type": "image",
   "target": "spec",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Connective tissue with special properties. Adipose (white and brown fat), elastic (yellow ligaments), reticular (stroma of haematopoietic and lymphoid organs) and mucous (Wharton's jelly)."
  },
  {
   "id": "img-supp",
   "type": "image",
   "target": "supp",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Supporting connective tissue. Cartilage and bone, which bear load; blood is a connective tissue with a fluid matrix."
  }
 ],
 "deeper": [
  {
   "title": "Scurvy: when collagen cannot be finished",
   "html": "<p>Hydroxylation of proline and lysine is what lets collagen chains form a stable triple helix and cross-link. The enzymes need <strong>vitamin C</strong>. Without it, fibroblasts secrete weak collagen, so the tissues with the fastest collagen turnover fail first: gums swell and bleed, teeth loosen, small vessels rupture (bleeding around hair follicles, bruising) and wounds reopen. It is a direct clinical lesson in the collagen synthesis steps of this lecture, and it resolves within days of giving vitamin C.</p><p class='src'>Source: the lecture's collagen synthesis; the Study Summary's deficiency hooks.</p>"
  }
 ],
 "resources": [
  {
   "title": "Anatomy, Connective Tissue (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK538534/",
   "kind": "Book",
   "why": "Classification, cells and fibres.",
   "note": ""
  },
  {
   "title": "Histology, Fibroblast (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK541065/",
   "kind": "Book",
   "why": "The main cell of connective tissue.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Anatomy, Connective Tissue (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK538534/"
  },
  {
   "name": "Histology, Fibroblast (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK541065/"
  }
 ],
 "verified": "26 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["histo1-cartilage"] = {
 "id": "histo1-cartilage",
 "subject": "histo1",
 "group": "Basic tissues",
 "title": "Cartilage",
 "sourceFile": "Connective tissue: the cartilage (Histology, Dr Z. Jamil)",
 "sourceUrl": "https://drive.google.com/file/d/1_ZU5BFBCH2kUJF9wiccmmQbc6_41OydQ/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "Cartilage: characteristics",
   "html": "<p>Cartilage is a firm, resilient, specialised connective tissue that bears stress without permanent distortion. It covers the ends of long bones in joints and forms part of the rib cage, ear, nose, bronchi and intervertebral discs. Functions: attachments, protection of tissues and a <strong>model for developing bone</strong>. It consists of cells and matrix, is usually covered by <strong>perichondrium</strong> and is <strong>avascular</strong>: nutrients diffuse through the matrix.</p>"
  },
  {
   "id": "s1",
   "title": "Cells and matrix",
   "html": "<p><strong>Chondroblasts</strong>, from undifferentiated mesenchymal cells, are young cells in the inner perichondrium and just beneath it; they synthesise matrix. <strong>Chondrocytes</strong> are mature cells in the centre, housed in spaces called <strong>lacunae</strong>; they form <strong>isogenous groups</strong> (cell nests of 2-4 cells from one parent cell), make matrix and the enzymes that break it down. The <strong>matrix</strong> (95% of the volume) contains <strong>type II collagen</strong> and ground substance: <strong>hyaluronan</strong> and <strong>proteoglycans</strong> (a core protein with chondroitin and keratan sulphate), very hydrated so it resists compression. Around each lacuna, the <strong>territorial matrix</strong> stains darker; the paler <strong>interterritorial matrix</strong> lies between groups.</p>"
  },
  {
   "id": "s2",
   "title": "Perichondrium and growth",
   "html": "<p>The <strong>perichondrium</strong> has two layers: an <strong>outer fibrous</strong> layer (dense CT) and an <strong>inner chondrogenic</strong> layer (loose CT, chondroblasts, blood vessels). It provides <strong>nutrition</strong>, <strong>appositional growth</strong> and <strong>repair</strong>.</p><p><strong>Appositional growth</strong>: new cartilage is added on the surface by chondrogenic cells of the perichondrium differentiating into chondroblasts: growth in girth. <strong>Interstitial growth</strong>: existing chondrocytes divide inside their lacunae, forming isogenous groups that secrete more matrix: growth from within, as in epiphyseal plates.</p>"
  },
  {
   "id": "s3",
   "title": "Hyaline, elastic and fibrocartilage",
   "html": "<p><strong>Hyaline cartilage</strong>, the most abundant: translucent, glassy, highly basophilic homogeneous matrix (collagen fibres invisible because they share the ground substance's refractive index), isogenous groups, perichondrium (except articular cartilage). Sites: fetal skeleton, trachea, most laryngeal cartilages, <strong>articular cartilage</strong>, ends of ribs, external nose, <strong>epiphyseal plates</strong>.</p><p><strong>Elastic cartilage</strong>: dense elastic fibre network (Weigert stain), larger chondrocytes usually single, perichondrium; flexible support. Sites: <strong>external ear, epiglottis</strong>, corniculate and cuneiform cartilages.</p><p><strong>Fibrocartilage</strong>: a combination of dense regular CT and hyaline cartilage; thick collagen bundles with chondrocytes singly or in rows; <strong>no perichondrium</strong>; support, rigidity and shock absorption. Sites: <strong>pubic symphysis, annulus fibrosus</strong> of the intervertebral disc, <strong>menisci</strong> of the knee, some tendon insertions.</p>"
  }
 ],
 "exam": [
  "Cartilage: firm, resilient, avascular; model for bone.",
  "Chondroblasts (young, perichondrium) → chondrocytes (in lacunae, isogenous groups).",
  "Matrix 95% of volume: type II collagen, hyaluronan, proteoglycans (chondroitin, keratan sulphate).",
  "Territorial matrix darker around lacunae; interterritorial paler.",
  "Perichondrium: outer fibrous + inner chondrogenic; nutrition, growth, repair.",
  "Appositional growth = surface (girth); interstitial = from within.",
  "Hyaline: glassy; joints, trachea, ribs, nose, growth plates.",
  "Elastic: elastic fibres; ear, epiglottis.",
  "Fibrocartilage: collagen bundles, no perichondrium; discs, menisci, pubic symphysis.",
  "Articular cartilage has no perichondrium either."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Three types of cartilage",
   "caption": "Matrix, perichondrium and locations. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"132.5\" y1=\"110\" x2=\"132.5\" y2=\"180\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"110\" x2=\"380\" y2=\"180\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"627.5\" y1=\"110\" x2=\"627.5\" y2=\"180\"/>",
   "parts": {
    "hy": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"15\" y=\"40\" width=\"235\" height=\"70\" rx=\"10\"/>",
     "label": [
      "Hyaline: glassy matrix,",
      "type II collagen"
     ],
     "lx": 132.5,
     "ly": 73.0
    },
    "el": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"270\" y=\"40\" width=\"220\" height=\"70\" rx=\"10\"/>",
     "label": [
      "Elastic: + dense elastic",
      "fibre network"
     ],
     "lx": 380.0,
     "ly": 73.0
    },
    "fi": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"510\" y=\"40\" width=\"235\" height=\"70\" rx=\"10\"/>",
     "label": [
      "Fibrocartilage: thick",
      "collagen bundles"
     ],
     "lx": 627.5,
     "ly": 73.0
    },
    "hyl": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"15\" y=\"180\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Joints, trachea, ribs,",
      "nose, growth plates"
     ],
     "lx": 132.5,
     "ly": 208.0
    },
    "ell": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"270\" y=\"180\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "External ear,",
      "epiglottis"
     ],
     "lx": 380.0,
     "ly": 208.0
    },
    "fil": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"510\" y=\"180\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Discs, menisci, pubic",
      "symphysis; NO perichondrium"
     ],
     "lx": 627.5,
     "ly": 208.0
    }
   },
   "arrows": {
    "hy": [
     {
      "t": [
       15.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "el": [
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
    "fi": [
     {
      "t": [
       510.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "hyl": [
     {
      "t": [
       15.0,
       188.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "ell": [
     {
      "t": [
       270.0,
       188.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "fil": [
     {
      "t": [
       510.0,
       188.0
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
   "q": "Cartilage is nourished by:",
   "options": [
    "Its own dense capillaries",
    "Diffusion through the matrix",
    "Haversian canals and osteons",
    "Lymphatic vessels in lacunae"
   ],
   "answer": 1,
   "why": "It is avascular."
  },
  {
   "q": "The main collagen of cartilage matrix is type:",
   "options": [
    "I",
    "II",
    "III",
    "IV"
   ],
   "answer": 1,
   "why": "Fibrocartilage adds type I."
  },
  {
   "q": "Chondrocytes lie in spaces called:",
   "options": [
    "Canaliculi",
    "Lacunae",
    "Howship's lacunae",
    "Haversian canals"
   ],
   "answer": 1,
   "why": "Often in isogenous groups."
  },
  {
   "q": "An isogenous group is:",
   "options": [
    "Cells from different parents",
    "Cells derived from one parent cell",
    "Perichondrial fibroblasts",
    "Osteoblasts"
   ],
   "answer": 1,
   "why": "Sign of interstitial growth."
  },
  {
   "q": "Growth by chondrocytes dividing inside the cartilage is:",
   "options": [
    "Appositional",
    "Interstitial",
    "Intramembranous",
    "Endochondral"
   ],
   "answer": 1,
   "why": "Growth from within."
  },
  {
   "q": "Appositional growth occurs from the:",
   "options": [
    "Centre of the cartilage",
    "Inner layer of the perichondrium",
    "Bone marrow",
    "Synovium"
   ],
   "answer": 1,
   "why": "Growth in girth."
  },
  {
   "q": "The most abundant type of cartilage is:",
   "options": [
    "Elastic",
    "Hyaline",
    "Fibrocartilage",
    "Mucous"
   ],
   "answer": 1,
   "why": "Glassy matrix."
  },
  {
   "q": "The external ear contains:",
   "options": [
    "Hyaline cartilage",
    "Elastic cartilage",
    "Fibrocartilage",
    "Bone"
   ],
   "answer": 1,
   "why": "Also the epiglottis."
  },
  {
   "q": "Which cartilage lacks a perichondrium?",
   "options": [
    "Hyaline of the trachea",
    "Elastic of the ear",
    "Fibrocartilage",
    "Costal cartilage"
   ],
   "answer": 2,
   "why": "And articular cartilage."
  },
  {
   "q": "The intervertebral disc's annulus fibrosus is:",
   "options": [
    "Hyaline cartilage",
    "Elastic cartilage",
    "Fibrocartilage",
    "Mucous tissue"
   ],
   "answer": 2,
   "why": "Also menisci, pubic symphysis."
  },
  {
   "q": "Epiphyseal growth plates are made of:",
   "options": [
    "Fibrocartilage",
    "Hyaline cartilage",
    "Elastic cartilage",
    "Dense CT"
   ],
   "answer": 1,
   "why": "Model for bone."
  },
  {
   "q": "Hyaline matrix looks homogeneous because collagen fibres:",
   "options": [
    "Are completely absent",
    "Share its refractive index",
    "Are type IV sheets only",
    "Are heavily calcified"
   ],
   "answer": 1,
   "why": "Glassy appearance."
  },
  {
   "q": "The inner layer of the perichondrium is:",
   "options": [
    "Fibrous",
    "Chondrogenic",
    "Calcified",
    "Elastic"
   ],
   "answer": 1,
   "why": "Contains chondroblasts."
  },
  {
   "q": "Proteoglycans of cartilage contain:",
   "options": [
    "Heparin and histamine",
    "Chondroitin, keratan sulphate",
    "Elastin and fibrillin",
    "Hydroxyapatite crystals"
   ],
   "answer": 1,
   "why": "On a core protein."
  },
  {
   "q": "The epiglottis is made of:",
   "options": [
    "Hyaline cartilage",
    "Elastic cartilage",
    "Fibrocartilage",
    "Bone"
   ],
   "answer": 1,
   "why": "Flexible support."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "hy",
   "options": [
    "Sites of elastic cartilage",
    "Sites of fibrocartilage",
    "Fibrocartilage",
    "Hyaline cartilage"
   ],
   "answer": 3,
   "why": "The arrow points to: Hyaline cartilage. The most abundant type: homogeneous, glassy, basophilic matrix whose fine type II collagen has the same refractive index as the ground substance; isogenous groups; perichondrium except on joint surfaces."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "el",
   "options": [
    "Fibrocartilage",
    "Sites of elastic cartilage",
    "Elastic cartilage",
    "Sites of fibrocartilage"
   ],
   "answer": 2,
   "why": "The arrow points to: Elastic cartilage. Like hyaline cartilage plus a dense network of elastic fibres (seen with Weigert or orcein stains); larger single chondrocytes; flexible support."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "fi",
   "options": [
    "Sites of hyaline cartilage",
    "Fibrocartilage",
    "Sites of elastic cartilage",
    "Hyaline cartilage"
   ],
   "answer": 1,
   "why": "The arrow points to: Fibrocartilage. Hyaline cartilage combined with dense regular connective tissue: thick collagen bundles with chondrocytes singly or in rows; resists compression and shear."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "hyl",
   "options": [
    "Fibrocartilage",
    "Elastic cartilage",
    "Sites of hyaline cartilage",
    "Sites of elastic cartilage"
   ],
   "answer": 2,
   "why": "The arrow points to: Sites of hyaline cartilage. Fetal skeleton, articular surfaces, costal cartilages, trachea and most laryngeal cartilages, external nose, epiphyseal growth plates."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ell",
   "options": [
    "Fibrocartilage",
    "Elastic cartilage",
    "Sites of fibrocartilage",
    "Sites of elastic cartilage"
   ],
   "answer": 3,
   "why": "The arrow points to: Sites of elastic cartilage. External ear (auricle), epiglottis, corniculate and cuneiform cartilages of the larynx."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "fil",
   "options": [
    "Hyaline cartilage",
    "Fibrocartilage",
    "Sites of fibrocartilage",
    "Sites of elastic cartilage"
   ],
   "answer": 2,
   "why": "The arrow points to: Sites of fibrocartilage. Intervertebral disc (annulus fibrosus), menisci of the knee, pubic symphysis, some tendon insertions; it has no perichondrium."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Characteristics of cartilage?",
   "back": "Firm, resilient CT; cells + matrix; perichondrium (mostly); avascular."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Chondroblast vs chondrocyte?",
   "back": "Chondroblast: young, near perichondrium, secretes matrix. Chondrocyte: mature, in lacunae, isogenous groups."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Components of cartilage matrix?",
   "back": "Type II collagen, hyaluronan, proteoglycans (chondroitin and keratan sulphate); 95% of volume."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Layers and roles of the perichondrium?",
   "back": "Outer fibrous, inner chondrogenic; nutrition, appositional growth, repair."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Appositional vs interstitial growth?",
   "back": "Appositional: new layers at the surface from perichondrium. Interstitial: chondrocytes divide inside."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Where is hyaline cartilage?",
   "back": "Fetal skeleton, articular surfaces, costal cartilages, trachea, larynx, nose, growth plates."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Where is elastic cartilage?",
   "back": "External ear, epiglottis, corniculate and cuneiform cartilages."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Where is fibrocartilage and what is special?",
   "back": "Discs, menisci, pubic symphysis, tendon insertions; no perichondrium; collagen bundles in rows."
  },
  {
   "id": "img-hy",
   "type": "image",
   "target": "hy",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Hyaline cartilage. The most abundant type: homogeneous, glassy, basophilic matrix whose fine type II collagen has the same refractive index as the ground substance; isogenous groups; perichondrium except on joint surfaces."
  },
  {
   "id": "img-el",
   "type": "image",
   "target": "el",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Elastic cartilage. Like hyaline cartilage plus a dense network of elastic fibres (seen with Weigert or orcein stains); larger single chondrocytes; flexible support."
  },
  {
   "id": "img-fi",
   "type": "image",
   "target": "fi",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Fibrocartilage. Hyaline cartilage combined with dense regular connective tissue: thick collagen bundles with chondrocytes singly or in rows; resists compression and shear."
  },
  {
   "id": "img-hyl",
   "type": "image",
   "target": "hyl",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Sites of hyaline cartilage. Fetal skeleton, articular surfaces, costal cartilages, trachea and most laryngeal cartilages, external nose, epiphyseal growth plates."
  },
  {
   "id": "img-ell",
   "type": "image",
   "target": "ell",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Sites of elastic cartilage. External ear (auricle), epiglottis, corniculate and cuneiform cartilages of the larynx."
  },
  {
   "id": "img-fil",
   "type": "image",
   "target": "fil",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Sites of fibrocartilage. Intervertebral disc (annulus fibrosus), menisci of the knee, pubic symphysis, some tendon insertions; it has no perichondrium."
  }
 ],
 "deeper": [
  {
   "title": "Why joint cartilage heals so poorly",
   "html": "<p>Articular cartilage has no blood vessels, no nerves and, unlike most hyaline cartilage, <strong>no perichondrium</strong>. The perichondrium is the source of new chondroblasts for repair, and blood brings the inflammatory cells that start healing elsewhere. So a defect in joint cartilage is filled, if at all, by weaker fibrocartilage from the underlying bone marrow, and damage tends to accumulate over the years as osteoarthritis. The same avascularity makes cartilage a good graft: with no vessels, it is less exposed to the immune system.</p><p class='src'>Source: the lecture's avascularity and perichondrium functions.</p>"
  }
 ],
 "resources": [
  {
   "title": "Anatomy, Cartilage (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK532964/",
   "kind": "Book",
   "why": "Types, structure and function.",
   "note": ""
  },
  {
   "title": "Histology, Chondrocytes (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK557576/",
   "kind": "Book",
   "why": "Cartilage cells and matrix.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Anatomy, Cartilage (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK532964/"
  },
  {
   "name": "Histology, Chondrocytes (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK557576/"
  }
 ],
 "verified": "26 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["histo1-bone"] = {
 "id": "histo1-bone",
 "subject": "histo1",
 "group": "Basic tissues",
 "title": "Bone",
 "sourceFile": "Histology of the bones (Histology, Dr Z. Jamil)",
 "sourceUrl": "https://drive.google.com/file/d/1Bv7SxVhfRJrlJHHy0bOdHZrptCaLiykC/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "Bone tissue and its matrix",
   "html": "<p>Bone is second only to cartilage in resisting compression and second only to enamel in hardness. It is covered by <strong>periosteum</strong> outside and <strong>endosteum</strong> inside. Functions: support, protection of organs, attachment of muscles (levers), housing the <strong>red marrow</strong> and <strong>storing calcium</strong> and other minerals.</p><p>The matrix is like <strong>reinforced concrete</strong>: collagen fibres are the steel bars and <strong>hydroxyapatite</strong> the cement. Remove the mineral and bone becomes too flexible; remove the collagen and it becomes brittle. <strong>Organic part</strong> (made by osteoblasts): <strong>type I collagen</strong> (85-95% of bone protein), proteoglycans, glycoproteins such as osteocalcin, osteopontin and fibronectin. <strong>Inorganic part</strong>: mainly calcium and phosphate as hydroxyapatite crystals bound to collagen, with some bicarbonate, potassium, magnesium and citrate. The lecture gives roughly half the volume to each part, with mineral dominating by weight.</p>"
  },
  {
   "id": "s1",
   "title": "Bone cells, periosteum and endosteum",
   "html": "<p><strong>Osteoprogenitor cells</strong>: stem cells from mesenchyme in the inner periosteum and endosteum. <strong>Osteoblasts</strong>: on bone surfaces and around vessels; they <strong>synthesise the organic matrix (osteoid)</strong> and start mineralisation; once surrounded by matrix they become <strong>osteocytes</strong>, which sit in <strong>lacunae</strong>, extend processes through <strong>canaliculi</strong> to exchange nutrients, and <strong>maintain the matrix</strong>. <strong>Osteoclasts</strong>: large <strong>multinucleated</strong> cells from blood <strong>monocytes</strong>, lying in <strong>Howship's lacunae</strong>; their <strong>ruffled border</strong> releases acid and enzymes to <strong>resorb</strong> bone.</p><p><strong>Periosteum</strong>: outer dense CT and inner loose CT with osteogenic cells and osteoblasts; anchored by <strong>Sharpey's fibres</strong>; functions: nutrition, growth in girth, repair. <strong>Endosteum</strong> lines the marrow cavities and extends into Haversian canals; it resembles the inner periosteum and holds bone and blood-cell precursors.</p>"
  },
  {
   "id": "s2",
   "title": "Types of bone",
   "html": "<p>By maturity: <strong>primary (woven) bone</strong>, the first bone in development and fracture repair, with irregular collagen, many cells and less mineral, later replaced except at cranial sutures and tooth sockets; and <strong>secondary (lamellar) bone</strong>, mature bone with collagen in organised lamellae. By structure: <strong>compact</strong> and <strong>spongy (cancellous)</strong>. By shape: long bones (compact diaphysis, spongy epiphyses, medullary cavity), flat bones (two compact plates with spongy <strong>diploë</strong> between), short bones (spongy core in a compact shell).</p><p><strong>Compact bone</strong> is built of <strong>osteons</strong>: concentric lamellae around a <strong>Haversian canal</strong> (vessels, nerves), with osteocytes whose canaliculi radiate to the canal and a <strong>cement line</strong> around each osteon. <strong>Volkmann's canals</strong> run transversely, linking canals to each other and to the marrow. <strong>Interstitial lamellae</strong> are remnants of old osteons; <strong>outer and inner circumferential lamellae</strong> lie under the periosteum and around the marrow cavity. <strong>Spongy bone</strong> has trabeculae lined by osteoblasts, with marrow between them and no osteons.</p>"
  },
  {
   "id": "s3",
   "title": "Ossification and growth",
   "html": "<p><strong>Intramembranous ossification</strong>: mesenchymal cells become osteoblasts that lay down osteoid and calcify it (alkaline phosphatase), trapping themselves as osteocytes; flat bones of the skull vault (the occipital, temporal and sphenoid are partly endochondral). <strong>Endochondral ossification</strong>: a hyaline cartilage model is laid down; the perichondrium becomes periosteum as a <strong>vascular bud</strong> invades; growth in <strong>length</strong> at the epiphyseal plates; growth in <strong>diameter</strong> by periosteal deposition with osteoclastic enlargement of the marrow cavity.</p><p>Zones of the growth plate, from the epiphysis: <strong>reserve</strong> (quiet), <strong>proliferative</strong> (chondrocytes in columns: the main source of lengthening), <strong>maturation / hypertrophy</strong> (large cells, alkaline phosphatase), <strong>calcification</strong> (matrix calcifies, chondrocytes die) and <strong>ossification</strong> (osteoblasts from the vascular bud lay bone on the calcified spicules).</p><p>Factors affecting bone: protein deficiency; calcium deficiency and <strong>vitamin D</strong> deficiency (poor mineralisation: <strong>rickets</strong> in children, <strong>osteomalacia</strong> in adults); vitamin A deficiency (poor growth) or excess (early closure of growth plates); <strong>vitamin C</strong> deficiency (defective collagen).</p>"
  }
 ],
 "exam": [
  "Bone: periosteum outside, endosteum inside; stores calcium, houses marrow.",
  "Matrix = collagen I (steel) + hydroxyapatite (cement).",
  "Osteoblast makes osteoid → becomes osteocyte in a lacuna, processes in canaliculi.",
  "Osteoclast: multinucleated, from monocytes, Howship's lacuna, ruffled border.",
  "Periosteum: outer fibrous + inner osteogenic; Sharpey's fibres.",
  "Primary (woven) bone first, replaced by secondary (lamellar) bone.",
  "Osteon: Haversian canal + concentric lamellae + cement line; Volkmann's canals transverse.",
  "Intramembranous: flat skull bones; endochondral: cartilage model (long bones).",
  "Growth plate zones: reserve, proliferative, hypertrophic, calcification, ossification.",
  "Vit D/Ca: rickets, osteomalacia; vit C: collagen; vit A excess: early plate closure."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "The osteon (Haversian system)",
   "caption": "Unit of compact bone. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"250\" y1=\"70\" x2=\"270\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"510\" y1=\"70\" x2=\"490\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"525\" y1=\"170\" x2=\"475\" y2=\"100\"/>",
   "parts": {
    "hc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"270\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Haversian canal: vessels",
      "and nerves, endosteum"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "lam": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"15\" y=\"40\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Concentric lamellae",
      "(helical collagen)"
     ],
     "lx": 132.5,
     "ly": 68.0
    },
    "ocy": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"510\" y=\"40\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Osteocytes in lacunae,",
      "processes in canaliculi"
     ],
     "lx": 627.5,
     "ly": 68.0
    },
    "vk": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"510\" y=\"170\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Volkmann's canals:",
      "transverse links"
     ],
     "lx": 627.5,
     "ly": 198.0
    },
    "cem": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"270\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Cement line around",
      "each osteon"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "int": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"15\" y=\"170\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Interstitial and",
      "circumferential lamellae"
     ],
     "lx": 132.5,
     "ly": 198.0
    }
   },
   "arrows": {
    "hc": [
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
    "lam": [
     {
      "t": [
       15.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "ocy": [
     {
      "t": [
       510.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "vk": [
     {
      "t": [
       510.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "cem": [
     {
      "t": [
       270.0,
       178.0
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
       15.0,
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
   "q": "The main collagen of bone is type:",
   "options": [
    "I",
    "II",
    "III",
    "IV"
   ],
   "answer": 0,
   "why": "85-95% of bone protein."
  },
  {
   "q": "Removing the mineral from bone makes it:",
   "options": [
    "Brittle",
    "Too flexible",
    "Harder",
    "Unchanged"
   ],
   "answer": 1,
   "why": "Collagen alone bends."
  },
  {
   "q": "The cell that synthesises osteoid is the:",
   "options": [
    "Osteocyte",
    "Osteoblast",
    "Osteoclast",
    "Chondrocyte"
   ],
   "answer": 1,
   "why": "Then becomes an osteocyte."
  },
  {
   "q": "Osteocytes communicate through:",
   "options": [
    "Volkmann's canals",
    "Canaliculi",
    "Howship's lacunae",
    "Sharpey's fibres"
   ],
   "answer": 1,
   "why": "Processes link cells."
  },
  {
   "q": "Osteoclasts derive from:",
   "options": [
    "Osteoprogenitor cells",
    "Blood monocytes",
    "Fibroblasts",
    "Chondroblasts"
   ],
   "answer": 1,
   "why": "Fused, multinucleated."
  },
  {
   "q": "Osteoclasts lie in:",
   "options": [
    "Haversian canals",
    "Howship's lacunae",
    "Canaliculi",
    "The cement line"
   ],
   "answer": 1,
   "why": "Resorption bays."
  },
  {
   "q": "Sharpey's fibres anchor the:",
   "options": [
    "Endosteum to marrow",
    "Periosteum to bone",
    "Cartilage to bone",
    "Osteon to cement line"
   ],
   "answer": 1,
   "why": "Collagen fibres."
  },
  {
   "q": "Haversian canals are connected transversely by:",
   "options": [
    "Canaliculi",
    "Volkmann's canals",
    "Lacunae",
    "Cement lines"
   ],
   "answer": 1,
   "why": "Perforating canals."
  },
  {
   "q": "Remnants of old osteons are the:",
   "options": [
    "Concentric lamellae",
    "Interstitial lamellae",
    "Circumferential lamellae",
    "Trabeculae"
   ],
   "answer": 1,
   "why": "Between newer osteons."
  },
  {
   "q": "Woven bone is characterised by:",
   "options": [
    "Organised lamellae",
    "Irregular collagen, many cells",
    "No cells",
    "Osteons"
   ],
   "answer": 1,
   "why": "First bone formed."
  },
  {
   "q": "Flat bones of the skull vault form by:",
   "options": [
    "Endochondral ossification",
    "Intramembranous ossification",
    "Appositional cartilage growth",
    "Metaplasia"
   ],
   "answer": 1,
   "why": "Directly from mesenchyme."
  },
  {
   "q": "Lengthening of long bones depends mainly on the:",
   "options": [
    "Reserve zone",
    "Proliferative zone",
    "Periosteum",
    "Diploë"
   ],
   "answer": 1,
   "why": "Columns of dividing chondrocytes."
  },
  {
   "q": "In the zone of calcification of the growth plate:",
   "options": [
    "Chondrocytes proliferate",
    "Matrix calcifies and chondrocytes die",
    "Osteoclasts form cartilage",
    "Bone marrow is absent"
   ],
   "answer": 1,
   "why": "Then bone is laid."
  },
  {
   "q": "Vitamin D deficiency in children causes:",
   "options": [
    "Scurvy",
    "Rickets",
    "Osteopetrosis",
    "Gigantism"
   ],
   "answer": 1,
   "why": "Poor mineralisation."
  },
  {
   "q": "Excess vitamin A can cause:",
   "options": [
    "Rickets in children",
    "Early growth plate closure",
    "Scurvy with bleeding gums",
    "Absence of osteoclasts"
   ],
   "answer": 1,
   "why": "Short stature."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "hc",
   "options": [
    "Haversian (central) canal",
    "Other lamellae",
    "Volkmann's canals",
    "Osteocytes"
   ],
   "answer": 0,
   "why": "The arrow points to: Haversian (central) canal. Central channel of each osteon carrying blood vessels and nerves, lined by endosteum."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "lam",
   "options": [
    "Cement line",
    "Other lamellae",
    "Volkmann's canals",
    "Concentric lamellae"
   ],
   "answer": 3,
   "why": "The arrow points to: Concentric lamellae. Rings of bone matrix around the central canal; the collagen fibres run helically, changing direction from one lamella to the next."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ocy",
   "options": [
    "Haversian (central) canal",
    "Concentric lamellae",
    "Osteocytes",
    "Cement line"
   ],
   "answer": 2,
   "why": "The arrow points to: Osteocytes. Mature bone cells trapped in lacunae between lamellae; their processes in canaliculi link them to each other and to the central canal."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "vk",
   "options": [
    "Haversian (central) canal",
    "Other lamellae",
    "Volkmann's canals",
    "Cement line"
   ],
   "answer": 2,
   "why": "The arrow points to: Volkmann's canals. Perforating canals running across the bone, joining Haversian canals to each other, to the periosteum and to the marrow cavity."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "cem",
   "options": [
    "Cement line",
    "Osteocytes",
    "Volkmann's canals",
    "Haversian (central) canal"
   ],
   "answer": 0,
   "why": "The arrow points to: Cement line. A layer of mineralised matrix, poor in collagen, marking the outer limit of each osteon."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "int",
   "options": [
    "Volkmann's canals",
    "Other lamellae",
    "Haversian (central) canal",
    "Concentric lamellae"
   ],
   "answer": 1,
   "why": "The arrow points to: Other lamellae. Interstitial lamellae are remnants of older osteons between the new ones; outer and inner circumferential lamellae line the periosteal and endosteal surfaces."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Bone matrix analogy?",
   "back": "Reinforced concrete: type I collagen = steel bars, hydroxyapatite = cement; no mineral → flexible, no collagen → brittle."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Four bone cells?",
   "back": "Osteoprogenitor (stem), osteoblast (makes osteoid), osteocyte (maintains matrix), osteoclast (resorbs; from monocytes)."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Osteoclast features?",
   "back": "Large, multinucleated, Howship's lacunae, ruffled border releasing acid and enzymes."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Periosteum?",
   "back": "Outer dense CT + inner osteogenic layer; Sharpey's fibres; nutrition, growth in girth, repair."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Parts of compact bone?",
   "back": "Osteons (Haversian canal, concentric lamellae, cement line), Volkmann's canals, interstitial and circumferential lamellae."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Primary vs secondary bone?",
   "back": "Primary (woven): first, irregular, many cells. Secondary (lamellar): mature, organised lamellae."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Two types of ossification?",
   "back": "Intramembranous (directly from mesenchyme: flat skull bones) and endochondral (cartilage model: long bones)."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Zones of the growth plate?",
   "back": "Reserve, proliferative, maturation/hypertrophy, calcification, ossification."
  },
  {
   "id": "img-hc",
   "type": "image",
   "target": "hc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Haversian (central) canal. Central channel of each osteon carrying blood vessels and nerves, lined by endosteum."
  },
  {
   "id": "img-lam",
   "type": "image",
   "target": "lam",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Concentric lamellae. Rings of bone matrix around the central canal; the collagen fibres run helically, changing direction from one lamella to the next."
  },
  {
   "id": "img-ocy",
   "type": "image",
   "target": "ocy",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Osteocytes. Mature bone cells trapped in lacunae between lamellae; their processes in canaliculi link them to each other and to the central canal."
  },
  {
   "id": "img-vk",
   "type": "image",
   "target": "vk",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Volkmann's canals. Perforating canals running across the bone, joining Haversian canals to each other, to the periosteum and to the marrow cavity."
  },
  {
   "id": "img-cem",
   "type": "image",
   "target": "cem",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Cement line. A layer of mineralised matrix, poor in collagen, marking the outer limit of each osteon."
  },
  {
   "id": "img-int",
   "type": "image",
   "target": "int",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Other lamellae. Interstitial lamellae are remnants of older osteons between the new ones; outer and inner circumferential lamellae line the periosteal and endosteal surfaces."
  }
 ],
 "deeper": [
  {
   "title": "Why a fracture passes through woven bone",
   "html": "<p>After a fracture, a haematoma forms, then a soft callus of fibrocartilage and a hard callus of <strong>woven (primary) bone</strong>, laid down quickly by osteoblasts with collagen in irregular arrays. It bridges the gap within weeks but is mechanically weak. Over the following months osteoclasts and osteoblasts remodel it into <strong>lamellar bone</strong> organised into osteons along the lines of stress. That is why a healed bone looks thickened on an X-ray at first and why loading, not rest alone, guides the final shape.</p><p class='src'>Source: the lecture's primary vs secondary bone and the fracture slide.</p>"
  }
 ],
 "resources": [
  {
   "title": "Histology, Bone (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK541132/",
   "kind": "Book",
   "why": "Cells, matrix and osteons.",
   "note": ""
  },
  {
   "title": "Histology, Periosteum and Endosteum (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK557584/",
   "kind": "Book",
   "why": "Bone coverings and repair.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Histology, Bone (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK541132/"
  },
  {
   "name": "Histology, Periosteum and Endosteum (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK557584/"
  }
 ],
 "verified": "26 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["histo1-blood"] = {
 "id": "histo1-blood",
 "subject": "histo1",
 "group": "Basic tissues",
 "title": "Blood",
 "sourceFile": "The blood (Histology, Dr Z. Jamil)",
 "sourceUrl": "https://drive.google.com/file/d/17jMibRI3e9uM8ec_diRNocbqcJNMaXJl/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "Blood as a connective tissue",
   "html": "<p>Blood is a specialised connective tissue with a fluid matrix, the <strong>plasma</strong>. It is more viscous than water and makes up about <strong>8% of body weight</strong>: <strong>5-6 L in men, 4-5 L in women</strong>. Functions: <strong>transport</strong> (O₂, CO₂, nutrients, wastes, hormones), <strong>regulation</strong> (temperature, pH, fluid volume), <strong>protection against blood loss</strong> (platelets) and <strong>against infection</strong> (antibodies, leucocytes). Components: plasma, red cells, white cells and platelets, all formed from one bone-marrow stem cell (<strong>haematopoiesis</strong>, mainly in red marrow).</p>"
  },
  {
   "id": "s1",
   "title": "Plasma and haematocrit",
   "html": "<p><strong>Plasma</strong> is about <strong>90% water</strong> and 10% solutes: electrolytes, nutrients, organic wastes and proteins. <strong>Albumin</strong>, the largest fraction, maintains <strong>osmotic (oncotic) pressure</strong>; <strong>globulins</strong> transport lipids and fat-soluble vitamins and include antibodies; <strong>fibrinogen</strong> becomes insoluble fibrin in a clot.</p><p>When blood is centrifuged, the heavy <strong>red cells</strong> pack at the bottom (their percentage is the <strong>haematocrit</strong>), <strong>plasma</strong> rises to the top and the leucocytes and platelets form a thin <strong>buffy coat</strong> between them.</p><p class='src'>Note: the slide gives albumin 80%, globulins 16%, fibrinogen 4%. Standard references put albumin nearer 55-60% of plasma proteins and globulins around 35-38%; the order (albumin > globulins > fibrinogen) is the key point.</p>"
  },
  {
   "id": "s2",
   "title": "Erythrocytes and platelets",
   "html": "<p><strong>Erythrocytes</strong>: <strong>biconcave discs without a nucleus</strong>; the inner membrane protein <strong>spectrin</strong> holds the shape, which increases the surface-to-volume ratio and lets them squeeze through capillaries. Full of <strong>haemoglobin</strong> carrying O₂ and CO₂; outer membrane antigens determine the <strong>ABO</strong> group; <strong>4-6 million/µL</strong>; life span about <strong>120 days</strong>.</p><p><strong>Platelets</strong> (thrombocytes): anucleate fragments with a pale blue outer <strong>hyalomere</strong> and a purple granular centre, the <strong>granulomere</strong>; blood clotting and wound healing; <strong>200,000-400,000/µL</strong> in the lecture (150,000-400,000 in many labs); life span about <strong>10 days</strong>.</p>"
  },
  {
   "id": "s3",
   "title": "Leucocytes",
   "html": "<p>White cells have a nucleus, are larger than red cells, work mainly <strong>outside</strong> the bloodstream in connective tissue, and live hours in blood to days in tissue. <strong>Specific granules</strong> (only granulocytes) take neutral, acid or basic dyes; <strong>azurophilic granules</strong> (all leucocytes) are lysosomes stained purple.</p><p><strong>Granulocytes</strong>: <strong>neutrophils</strong>, the most numerous, 2-6 nuclear lobes, phagocytose bacteria; <strong>eosinophils</strong>, 1-4%, bilobed nucleus, eosin-stained granules, allergy, parasites, immune complexes; <strong>basophils</strong>, &lt; 1%, granules of histamine that hide the nucleus, immediate hypersensitivity like mast cells. <strong>Agranulocytes</strong>: <strong>lymphocytes</strong>, 20-45%, dark round nucleus, <strong>T cells</strong> attack foreign cells, <strong>B cells</strong> become plasma cells secreting antibodies; <strong>monocytes</strong>, 4-8%, the largest, kidney-shaped nucleus, become <strong>macrophages</strong> in tissues. Order of abundance: Neutrophils &gt; Lymphocytes &gt; Monocytes &gt; Eosinophils &gt; Basophils (Never Let Monkeys Eat Bananas).</p>"
  }
 ],
 "exam": [
  "Blood ≈ 8% of body weight; 5-6 L (men), 4-5 L (women).",
  "Plasma 90% water; albumin (oncotic pressure) > globulins > fibrinogen.",
  "Centrifuged: plasma top, buffy coat middle, red cells bottom (haematocrit).",
  "RBC: biconcave, anucleate, spectrin; 4-6 million/µL; 120 days.",
  "Platelets: hyalomere + granulomere; clotting; ~10 days.",
  "Specific granules: granulocytes only; azurophilic = lysosomes in all.",
  "Neutrophil: 2-6 lobes, most numerous; eosinophil: bilobed, red granules, parasites.",
  "Basophil: < 1%, granules hide nucleus, histamine.",
  "Lymphocyte: T and B cells; monocyte: largest, kidney nucleus → macrophage.",
  "Abundance: N > L > M > E > B."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Centrifuged blood and white cells",
   "caption": "Layers of a spun tube and the five leucocytes. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"132.5\" y1=\"90\" x2=\"132.5\" y2=\"120\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"132.5\" y1=\"180\" x2=\"132.5\" y2=\"210\"/>",
   "parts": {
    "pl": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"15\" y=\"30\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Plasma (~55%): 90% water,",
      "proteins, solutes"
     ],
     "lx": 132.5,
     "ly": 58.0
    },
    "bc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"15\" y=\"120\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Buffy coat: leucocytes",
      "and platelets (< 1%)"
     ],
     "lx": 132.5,
     "ly": 148.0
    },
    "rbc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"15\" y=\"210\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Red cells (~45%)",
      "= haematocrit"
     ],
     "lx": 132.5,
     "ly": 238.0
    },
    "neu": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"300\" y=\"30\" width=\"210\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Neutrophil: 2-6 lobes,",
      "most numerous"
     ],
     "lx": 405.0,
     "ly": 58.0
    },
    "lym": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"530\" y=\"30\" width=\"215\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Lymphocyte: round dark",
      "nucleus, thin rim"
     ],
     "lx": 637.5,
     "ly": 58.0
    },
    "mon": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"300\" y=\"140\" width=\"210\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Monocyte: largest,",
      "kidney-shaped nucleus"
     ],
     "lx": 405.0,
     "ly": 168.0
    },
    "eo": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9ecec\" x=\"530\" y=\"140\" width=\"215\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Eosinophil: bilobed,",
      "red granules"
     ],
     "lx": 637.5,
     "ly": 168.0
    },
    "ba": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"415\" y=\"250\" width=\"215\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Basophil: dark granules",
      "hide the nucleus"
     ],
     "lx": 522.5,
     "ly": 278.0
    }
   },
   "arrows": {
    "pl": [
     {
      "t": [
       15.0,
       38.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "bc": [
     {
      "t": [
       15.0,
       128.0
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
       15.0,
       218.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "neu": [
     {
      "t": [
       300.0,
       38.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "lym": [
     {
      "t": [
       530.0,
       38.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "mon": [
     {
      "t": [
       300.0,
       148.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "eo": [
     {
      "t": [
       530.0,
       148.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "ba": [
     {
      "t": [
       415.0,
       258.0
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
   "q": "Blood makes up about what percentage of body weight?",
   "options": [
    "2%",
    "8%",
    "20%",
    "50%"
   ],
   "answer": 1,
   "why": "5-6 L in men."
  },
  {
   "q": "Plasma is about what percentage water?",
   "options": [
    "50%",
    "70%",
    "90%",
    "99%"
   ],
   "answer": 2,
   "why": "10% solutes."
  },
  {
   "q": "The plasma protein chiefly responsible for oncotic pressure is:",
   "options": [
    "Fibrinogen",
    "Albumin",
    "Globulin",
    "Haemoglobin"
   ],
   "answer": 1,
   "why": "Largest fraction."
  },
  {
   "q": "After centrifugation, the buffy coat contains:",
   "options": [
    "Red cells",
    "Leucocytes and platelets",
    "Plasma proteins",
    "Fibrin"
   ],
   "answer": 1,
   "why": "Between plasma and red cells."
  },
  {
   "q": "The haematocrit is the percentage of:",
   "options": [
    "Plasma",
    "Red cells",
    "White cells",
    "Platelets"
   ],
   "answer": 1,
   "why": "Packed cell volume."
  },
  {
   "q": "The biconcave shape of red cells is maintained by:",
   "options": [
    "Actin only",
    "Spectrin",
    "Keratin",
    "Collagen"
   ],
   "answer": 1,
   "why": "Membrane skeleton."
  },
  {
   "q": "Red cell life span is about:",
   "options": [
    "10 days",
    "30 days",
    "120 days",
    "1 year"
   ],
   "answer": 2,
   "why": "Removed by the spleen."
  },
  {
   "q": "The most numerous leucocyte is the:",
   "options": [
    "Lymphocyte",
    "Neutrophil",
    "Monocyte",
    "Eosinophil"
   ],
   "answer": 1,
   "why": "2-6 lobes."
  },
  {
   "q": "A leucocyte with a bilobed nucleus and red granules is the:",
   "options": [
    "Basophil",
    "Eosinophil",
    "Neutrophil",
    "Monocyte"
   ],
   "answer": 1,
   "why": "Parasites and allergy."
  },
  {
   "q": "The rarest leucocyte is the:",
   "options": [
    "Eosinophil",
    "Basophil",
    "Monocyte",
    "Lymphocyte"
   ],
   "answer": 1,
   "why": "< 1%."
  },
  {
   "q": "The largest leucocyte, with a kidney-shaped nucleus, is the:",
   "options": [
    "Lymphocyte",
    "Monocyte",
    "Neutrophil",
    "Basophil"
   ],
   "answer": 1,
   "why": "Becomes a macrophage."
  },
  {
   "q": "B lymphocytes differentiate into:",
   "options": [
    "Macrophages",
    "Plasma cells",
    "Mast cells",
    "Neutrophils"
   ],
   "answer": 1,
   "why": "Antibody secretion."
  },
  {
   "q": "Azurophilic granules are:",
   "options": [
    "Specific to basophils",
    "Lysosomes found in all leucocytes",
    "Histamine granules",
    "Glycogen"
   ],
   "answer": 1,
   "why": "Stain purple."
  },
  {
   "q": "The granular central part of a platelet is the:",
   "options": [
    "Hyalomere",
    "Granulomere",
    "Nucleus",
    "Canaliculus"
   ],
   "answer": 1,
   "why": "Pale periphery = hyalomere."
  },
  {
   "q": "Platelet life span is about:",
   "options": [
    "2 days",
    "10 days",
    "120 days",
    "1 year"
   ],
   "answer": 1,
   "why": "Removed by the spleen."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pl",
   "options": [
    "Neutrophil",
    "Plasma",
    "Lymphocyte",
    "Monocyte"
   ],
   "answer": 1,
   "why": "The arrow points to: Plasma. About 55% of blood: 90% water with electrolytes, nutrients, wastes and proteins (albumin for osmotic pressure, globulins for transport and immunity, fibrinogen for clotting)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "bc",
   "options": [
    "Monocyte",
    "Plasma",
    "Lymphocyte",
    "Buffy coat"
   ],
   "answer": 3,
   "why": "The arrow points to: Buffy coat. Thin whitish layer of leucocytes and platelets between plasma and packed red cells."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "rbc",
   "options": [
    "Buffy coat",
    "Packed red cells",
    "Monocyte",
    "Neutrophil"
   ],
   "answer": 1,
   "why": "The arrow points to: Packed red cells. The heaviest layer at the bottom; its percentage of the column is the haematocrit."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "neu",
   "options": [
    "Eosinophil",
    "Basophil",
    "Neutrophil",
    "Packed red cells"
   ],
   "answer": 2,
   "why": "The arrow points to: Neutrophil. Most numerous leucocyte; nucleus with two to six lobes; fine granules; phagocytoses and kills bacteria."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "lym",
   "options": [
    "Basophil",
    "Plasma",
    "Packed red cells",
    "Lymphocyte"
   ],
   "answer": 3,
   "why": "The arrow points to: Lymphocyte. 20-45% of leucocytes; large round dark nucleus with a thin rim of pale blue cytoplasm; T cells and B cells of adaptive immunity."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "mon",
   "options": [
    "Lymphocyte",
    "Plasma",
    "Eosinophil",
    "Monocyte"
   ],
   "answer": 3,
   "why": "The arrow points to: Monocyte. The largest leucocyte (4-8%); kidney-shaped nucleus, no visible granules; becomes a macrophage in tissues."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "eo",
   "options": [
    "Eosinophil",
    "Monocyte",
    "Basophil",
    "Buffy coat"
   ],
   "answer": 0,
   "why": "The arrow points to: Eosinophil. 1-4% of leucocytes; bilobed nucleus and large red-orange granules; allergy and parasites; phagocytoses immune complexes."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ba",
   "options": [
    "Eosinophil",
    "Basophil",
    "Packed red cells",
    "Monocyte"
   ],
   "answer": 1,
   "why": "The arrow points to: Basophil. Under 1%; dark basophilic granules of histamine and heparin mask the bilobed nucleus; immediate hypersensitivity."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Functions of blood?",
   "back": "Transport, regulation (temperature, pH, volume), protection against bleeding and infection."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Plasma composition?",
   "back": "~90% water; electrolytes, nutrients, wastes; proteins: albumin (oncotic), globulins (transport, antibodies), fibrinogen (clot)."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Layers of centrifuged blood?",
   "back": "Plasma (top), buffy coat of leucocytes and platelets (middle), red cells (bottom, haematocrit)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Erythrocyte features?",
   "back": "Biconcave, anucleate, spectrin skeleton, haemoglobin, ABO antigens, 4-6 million/µL, 120 days."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Specific vs azurophilic granules?",
   "back": "Specific: only granulocytes, type-specific contents. Azurophilic: lysosomes, all leucocytes, purple."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Three granulocytes?",
   "back": "Neutrophil (2-6 lobes, bacteria), eosinophil (bilobed, red granules, parasites), basophil (dark granules, histamine)."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Two agranulocytes?",
   "back": "Lymphocyte (T and B cells, dark round nucleus); monocyte (largest, kidney nucleus → macrophage)."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Order of leucocyte abundance?",
   "back": "Neutrophils > Lymphocytes > Monocytes > Eosinophils > Basophils."
  },
  {
   "id": "img-pl",
   "type": "image",
   "target": "pl",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Plasma. About 55% of blood: 90% water with electrolytes, nutrients, wastes and proteins (albumin for osmotic pressure, globulins for transport and immunity, fibrinogen for clotting)."
  },
  {
   "id": "img-bc",
   "type": "image",
   "target": "bc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Buffy coat. Thin whitish layer of leucocytes and platelets between plasma and packed red cells."
  },
  {
   "id": "img-rbc",
   "type": "image",
   "target": "rbc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Packed red cells. The heaviest layer at the bottom; its percentage of the column is the haematocrit."
  },
  {
   "id": "img-neu",
   "type": "image",
   "target": "neu",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Neutrophil. Most numerous leucocyte; nucleus with two to six lobes; fine granules; phagocytoses and kills bacteria."
  },
  {
   "id": "img-lym",
   "type": "image",
   "target": "lym",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Lymphocyte. 20-45% of leucocytes; large round dark nucleus with a thin rim of pale blue cytoplasm; T cells and B cells of adaptive immunity."
  },
  {
   "id": "img-mon",
   "type": "image",
   "target": "mon",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Monocyte. The largest leucocyte (4-8%); kidney-shaped nucleus, no visible granules; becomes a macrophage in tissues."
  },
  {
   "id": "img-eo",
   "type": "image",
   "target": "eo",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Eosinophil. 1-4% of leucocytes; bilobed nucleus and large red-orange granules; allergy and parasites; phagocytoses immune complexes."
  },
  {
   "id": "img-ba",
   "type": "image",
   "target": "ba",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Basophil. Under 1%; dark basophilic granules of histamine and heparin mask the bilobed nucleus; immediate hypersensitivity."
  }
 ],
 "deeper": [
  {
   "title": "Reading a blood film with only three questions",
   "html": "<p>On a stained smear most leucocytes can be named by asking: <strong>Are there visible granules?</strong> (granulocyte or agranulocyte), <strong>what colour are they?</strong> (fine and pale: neutrophil; large red-orange: eosinophil; dark purple masking the nucleus: basophil) and <strong>what shape is the nucleus?</strong> (many lobes: neutrophil; two lobes: eosinophil or basophil; round and filling the cell: lymphocyte; large and kidney-shaped with grey-blue cytoplasm: monocyte). This is exactly how a differential count is done, and a shift in the proportions (neutrophilia in bacterial infection, eosinophilia with parasites) is often the first clue to a diagnosis.</p><p class='src'>Source: the lecture's leucocyte descriptions and slide key.</p>"
  }
 ],
 "resources": [
  {
   "title": "Physiology, Blood Plasma (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK531504/",
   "kind": "Book",
   "why": "Plasma proteins and functions.",
   "note": ""
  },
  {
   "title": "The Histology Guide (University of Leeds)",
   "url": "https://histology.leeds.ac.uk/",
   "kind": "Website",
   "why": "Blood cell images for practice.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Physiology, Blood Plasma (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK531504/"
  },
  {
   "name": "The Histology Guide (University of Leeds)",
   "url": "https://histology.leeds.ac.uk/"
  }
 ],
 "verified": "26 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["histo1-muscle"] = {
 "id": "histo1-muscle",
 "subject": "histo1",
 "group": "Basic tissues",
 "title": "Muscle tissue",
 "sourceFile": "Histology of muscles (Histology, Dr Z. Jamil)",
 "sourceUrl": "https://drive.google.com/file/d/1Ij3P59T975Xcg-ke5ClMPJxSdNho-VsW/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "Muscle tissue",
   "html": "<p>Muscle tissue is made of elongated <strong>contractile cells</strong> (muscle fibres) rich in <strong>actin</strong> (thin) and <strong>myosin</strong> (thick) filaments; it derives from <strong>mesoderm</strong>. The cell membrane is the <strong>sarcolemma</strong>, the cytoplasm the <strong>sarcoplasm</strong> and the smooth endoplasmic reticulum, which stores calcium, the <strong>sarcoplasmic reticulum</strong>. There are three types, told apart by <strong>striations</strong>, <strong>nuclei</strong>, <strong>branching</strong> and <strong>control</strong>.</p><p class='src'>Note: the muscle PowerPoint is very large and its text could not be extracted, so this page follows the module's study summary and standard histology. Check figures against your slides.</p>"
  },
  {
   "id": "s1",
   "title": "Skeletal muscle",
   "html": "<p>Long <strong>cylindrical</strong>, <strong>multinucleated</strong> fibres with nuclei at the <strong>periphery</strong> under the sarcolemma; clear <strong>cross-striations</strong>; <strong>voluntary</strong>. Connective tissue wrappings: <strong>endomysium</strong> around each fibre, <strong>perimysium</strong> around each fascicle, <strong>epimysium</strong> around the whole muscle. Fibres are packed with <strong>myofibrils</strong> made of repeating <strong>sarcomeres</strong>. Invaginations of the sarcolemma (<strong>T tubules</strong>) meet two terminal cisternae of sarcoplasmic reticulum to form <strong>triads</strong>, which carry excitation inside and release calcium. Mature fibres cannot divide; limited repair comes from <strong>satellite cells</strong>.</p>"
  },
  {
   "id": "s2",
   "title": "The sarcomere",
   "html": "<p>The sarcomere runs from one <strong>Z line</strong> to the next. The <strong>I band</strong> (light) contains only thin actin filaments and is bisected by the Z line; the <strong>A band</strong> (dark) is the length of the thick myosin filaments; the <strong>H zone</strong> in the middle of the A band has myosin only, with the <strong>M line</strong> at its centre. In contraction the filaments <strong>slide</strong>: the sarcomere, I band and H zone shorten while the A band keeps its length.</p>"
  },
  {
   "id": "s3",
   "title": "Cardiac and smooth muscle",
   "html": "<p><strong>Cardiac muscle</strong>: striated, <strong>branched</strong> cells with <strong>one (sometimes two) central nucleus</strong>; <strong>involuntary</strong>. Cells join end to end at <strong>intercalated discs</strong>, step-like junctions with <strong>gap junctions</strong> (electrical coupling so the heart contracts as a unit) and <strong>desmosomes / fascia adherens</strong> (mechanical anchorage). It essentially <strong>cannot regenerate</strong>: an infarct heals with a fibrous scar.</p><p><strong>Smooth muscle</strong>: <strong>spindle-shaped (fusiform)</strong> cells with <strong>one central nucleus</strong>, <strong>no striations</strong> because actin and myosin are not arranged in sarcomeres but anchored to <strong>dense bodies</strong>; <strong>involuntary</strong>; linked by gap junctions; can divide and regenerate well. Found in the walls of the gut, vessels, bladder, uterus and airways.</p>"
  }
 ],
 "exam": [
  "Muscle: contractile cells with actin and myosin; from mesoderm.",
  "Skeletal: cylindrical, multinucleated, peripheral nuclei, striated, voluntary.",
  "Wrappings: endomysium (fibre), perimysium (fascicle), epimysium (muscle).",
  "Sarcomere = Z to Z; I band actin only, A band myosin length, H zone myosin only.",
  "Contraction: I band and H zone shorten; A band unchanged.",
  "Triad = T tubule + two terminal cisternae (skeletal).",
  "Cardiac: branched, 1-2 central nuclei, intercalated discs (gap junctions + desmosomes).",
  "Smooth: fusiform, one central nucleus, no striations, dense bodies.",
  "Regeneration: skeletal via satellite cells; cardiac very poor (scar); smooth good."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "The sarcomere",
   "caption": "Contractile unit of striated muscle, Z line to Z line. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"185\" y1=\"70\" x2=\"195\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"370\" y1=\"70\" x2=\"380\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"555\" y1=\"70\" x2=\"565\" y2=\"70\"/>",
   "parts": {
    "z": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"10\" y=\"40\" width=\"175\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Z line: anchors",
      "thin filaments"
     ],
     "lx": 97.5,
     "ly": 68.0
    },
    "i": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"195\" y=\"40\" width=\"175\" height=\"60\" rx=\"10\"/>",
     "label": [
      "I band: actin",
      "only; light"
     ],
     "lx": 282.5,
     "ly": 68.0
    },
    "a": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"380\" y=\"40\" width=\"175\" height=\"60\" rx=\"10\"/>",
     "label": [
      "A band: myosin",
      "length; dark"
     ],
     "lx": 467.5,
     "ly": 68.0
    },
    "h": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"565\" y=\"40\" width=\"180\" height=\"60\" rx=\"10\"/>",
     "label": [
      "H zone: myosin",
      "only; M line"
     ],
     "lx": 655.0,
     "ly": 68.0
    },
    "sar": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"110\" y=\"180\" width=\"540\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Sarcomere = Z to Z; contraction: filaments slide,",
      "I band and H zone shorten, A band stays the same"
     ],
     "lx": 380.0,
     "ly": 208.0
    }
   },
   "arrows": {
    "z": [
     {
      "t": [
       10.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "i": [
     {
      "t": [
       195.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "a": [
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
    "h": [
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
    "sar": [
     {
      "t": [
       110.0,
       188.0
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
   "q": "Skeletal muscle fibres have nuclei that are:",
   "options": [
    "Single and central",
    "Multiple and peripheral",
    "Absent",
    "Single and peripheral"
   ],
   "answer": 1,
   "why": "Cardiac and smooth: central."
  },
  {
   "q": "Intercalated discs are characteristic of:",
   "options": [
    "Skeletal muscle",
    "Cardiac muscle",
    "Smooth muscle",
    "All muscle"
   ],
   "answer": 1,
   "why": "Gap junctions and desmosomes."
  },
  {
   "q": "Smooth muscle lacks striations because:",
   "options": [
    "It contains no actin",
    "Filaments are not in sarcomeres",
    "It contains no myosin",
    "Its cells have no nucleus"
   ],
   "answer": 1,
   "why": "Anchored to dense bodies."
  },
  {
   "q": "The light band containing only thin filaments is the:",
   "options": [
    "A band",
    "I band",
    "H zone",
    "M line"
   ],
   "answer": 1,
   "why": "Bisected by the Z line."
  },
  {
   "q": "During contraction, which does NOT change in length?",
   "options": [
    "I band",
    "H zone",
    "A band",
    "Sarcomere"
   ],
   "answer": 2,
   "why": "Equals myosin length."
  },
  {
   "q": "A sarcomere extends between two:",
   "options": [
    "M lines",
    "Z lines",
    "H zones",
    "A bands"
   ],
   "answer": 1,
   "why": "Repeating unit."
  },
  {
   "q": "The connective tissue around a fascicle is the:",
   "options": [
    "Endomysium",
    "Perimysium",
    "Epimysium",
    "Periosteum"
   ],
   "answer": 1,
   "why": "Endomysium surrounds one fibre."
  },
  {
   "q": "Gap junctions in intercalated discs allow:",
   "options": [
    "Mechanical anchorage",
    "Electrical coupling",
    "Hormone secretion",
    "Glycogen storage"
   ],
   "answer": 1,
   "why": "The heart beats as a unit."
  },
  {
   "q": "Skeletal muscle repair relies on:",
   "options": [
    "Fibroblasts",
    "Satellite cells",
    "Intercalated discs",
    "Pericytes only"
   ],
   "answer": 1,
   "why": "Muscle stem cells."
  },
  {
   "q": "After a myocardial infarction, the dead muscle is replaced by:",
   "options": [
    "New cardiomyocytes",
    "A fibrous scar",
    "Smooth muscle",
    "Skeletal muscle"
   ],
   "answer": 1,
   "why": "Poor regeneration."
  },
  {
   "q": "Smooth muscle cells are:",
   "options": [
    "Cylindrical and multinucleated",
    "Fusiform with one central nucleus",
    "Branched with discs",
    "Anucleate"
   ],
   "answer": 1,
   "why": "Gut, vessels."
  },
  {
   "q": "The triad of skeletal muscle is made of a T tubule and:",
   "options": [
    "Two mitochondria",
    "Two terminal cisternae",
    "Two Z lines",
    "Two nuclei"
   ],
   "answer": 1,
   "why": "Calcium release."
  },
  {
   "q": "Voluntary muscle is:",
   "options": [
    "Cardiac",
    "Skeletal",
    "Smooth",
    "Myoepithelial"
   ],
   "answer": 1,
   "why": "Somatic motor nerves."
  },
  {
   "q": "The sarcoplasmic reticulum stores:",
   "options": [
    "Glycogen",
    "Calcium",
    "Myoglobin",
    "ATP only"
   ],
   "answer": 1,
   "why": "Released to trigger contraction."
  },
  {
   "q": "Branched striated cells with one central nucleus are:",
   "options": [
    "Skeletal",
    "Cardiac",
    "Smooth",
    "Myoepithelial"
   ],
   "answer": 1,
   "why": "Myocardium."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "z",
   "options": [
    "Z line (disc)",
    "A band",
    "I band",
    "Sarcomere"
   ],
   "answer": 0,
   "why": "The arrow points to: Z line (disc). Anchors the thin filaments and marks each end of a sarcomere."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "i",
   "options": [
    "I band",
    "Z line (disc)",
    "A band",
    "Sarcomere"
   ],
   "answer": 0,
   "why": "The arrow points to: I band. Light band containing only thin (actin) filaments, bisected by the Z line; it shortens during contraction."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "a",
   "options": [
    "Z line (disc)",
    "Sarcomere",
    "A band",
    "H zone and M line"
   ],
   "answer": 2,
   "why": "The arrow points to: A band. Dark band equal to the length of the thick (myosin) filaments, overlapping thin filaments at its ends; its length does not change."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "h",
   "options": [
    "I band",
    "Sarcomere",
    "A band",
    "H zone and M line"
   ],
   "answer": 3,
   "why": "The arrow points to: H zone and M line. Central part of the A band with myosin only; the M line in its middle links the thick filaments. The H zone narrows in contraction."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "sar",
   "options": [
    "I band",
    "H zone and M line",
    "Sarcomere",
    "Z line (disc)"
   ],
   "answer": 2,
   "why": "The arrow points to: Sarcomere. The repeating unit from one Z line to the next; the sliding of actin over myosin shortens it and produces the cross-striations of skeletal and cardiac muscle."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Three muscle types compared?",
   "back": "Skeletal: striated, multinucleated peripheral nuclei, voluntary. Cardiac: striated, branched, central nucleus, intercalated discs. Smooth: no striations, fusiform, central nucleus."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Muscle wrappings?",
   "back": "Endomysium (fibre), perimysium (fascicle), epimysium (whole muscle)."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Bands of the sarcomere?",
   "back": "Z line; I band (actin only); A band (myosin length); H zone (myosin only) with M line."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "What shortens in contraction?",
   "back": "Sarcomere, I band and H zone; the A band stays the same."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Intercalated disc?",
   "back": "End-to-end junction of cardiomyocytes: gap junctions (electrical) + desmosomes/fascia adherens (mechanical)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Why is smooth muscle unstriated?",
   "back": "Actin and myosin are not in sarcomeres; they attach to dense bodies."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Triad?",
   "back": "T tubule flanked by two terminal cisternae of sarcoplasmic reticulum; couples excitation to calcium release."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Regeneration of muscle?",
   "back": "Skeletal: limited, satellite cells. Cardiac: almost none, scar. Smooth: good, cells divide."
  },
  {
   "id": "img-z",
   "type": "image",
   "target": "z",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Z line (disc). Anchors the thin filaments and marks each end of a sarcomere."
  },
  {
   "id": "img-i",
   "type": "image",
   "target": "i",
   "front": "What is at the arrow, and why does it matter?",
   "back": "I band. Light band containing only thin (actin) filaments, bisected by the Z line; it shortens during contraction."
  },
  {
   "id": "img-a",
   "type": "image",
   "target": "a",
   "front": "What is at the arrow, and why does it matter?",
   "back": "A band. Dark band equal to the length of the thick (myosin) filaments, overlapping thin filaments at its ends; its length does not change."
  },
  {
   "id": "img-h",
   "type": "image",
   "target": "h",
   "front": "What is at the arrow, and why does it matter?",
   "back": "H zone and M line. Central part of the A band with myosin only; the M line in its middle links the thick filaments. The H zone narrows in contraction."
  },
  {
   "id": "img-sar",
   "type": "image",
   "target": "sar",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Sarcomere. The repeating unit from one Z line to the next; the sliding of actin over myosin shortens it and produces the cross-striations of skeletal and cardiac muscle."
  }
 ],
 "deeper": [
  {
   "title": "Why the heart cannot afford a scar in the wrong place",
   "html": "<p>Cardiomyocytes stop dividing soon after birth, so dead muscle is replaced by collagen. A scar does not contract, and it has no gap junctions, so the electrical wave that normally spreads cell to cell through intercalated discs must travel around it. Slow, detouring conduction at the border of a scar sets up <strong>re-entry circuits</strong>, the mechanism behind many ventricular arrhythmias after a heart attack. The same gap junctions that make the heart a coordinated pump explain why a scar is dangerous.</p><p class='src'>Source: the course summary on cardiac muscle and intercalated discs.</p>"
  }
 ],
 "resources": [
  {
   "title": "Histology, Muscle (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK537195/",
   "kind": "Book",
   "why": "Skeletal, cardiac and smooth muscle.",
   "note": ""
  },
  {
   "title": "The Histology Guide (University of Leeds)",
   "url": "https://histology.leeds.ac.uk/",
   "kind": "Website",
   "why": "Muscle slides and quizzes.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Histology, Muscle (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK537195/"
  },
  {
   "name": "The Histology Guide (University of Leeds)",
   "url": "https://histology.leeds.ac.uk/"
  }
 ],
 "verified": "26 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["histo1-nervous"] = {
 "id": "histo1-nervous",
 "subject": "histo1",
 "group": "Basic tissues",
 "title": "Nervous tissue",
 "sourceFile": "Histology of nervous tissue (Histology, Dr Z. Jamil)",
 "sourceUrl": "https://drive.google.com/file/d/1XkRuswc162XS72h6uDdlEnDuRHi27HVB/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "Nervous tissue and the neuron",
   "html": "<p>Nervous tissue makes up the brain, spinal cord, cranial and peripheral nerves. It receives stimuli, processes information and transmits electrical and chemical signals. It has two cell families, <strong>neurons</strong> and <strong>neuroglia</strong>, both from embryonic <strong>neuroectoderm</strong> (microglia excepted). Special stains with heavy metals (Golgi, Ramón y Cajal) show neurons best.</p><p>The <strong>neuron</strong> is the structural and functional unit: a <strong>cell body</strong> (soma, perikaryon) with processes: <strong>dendrites</strong> (usually many, thick, branching, carrying impulses <strong>to</strong> the soma) and a single <strong>axon</strong> (thinner, fewer branches, carrying impulses <strong>away</strong>). Properties: <strong>excitability</strong>, <strong>conductivity</strong> and <strong>secretion</strong> of neurotransmitter at synapses. <strong>Nissl bodies</strong> are basophilic clumps of rough ER and free ribosomes in the soma and dendrite bases, <strong>absent in the axon hillock</strong> and axon. A neuron can receive thousands of synapses, which form between neurons or with muscle and gland cells.</p>"
  },
  {
   "id": "s1",
   "title": "Types of neurons",
   "html": "<p>By the number of processes: <strong>multipolar</strong> (many dendrites and one axon: most neurons, about 99%, e.g. motor neurons), <strong>bipolar</strong> (one dendrite and one axon: retina, olfactory epithelium, inner ear) and <strong>pseudounipolar</strong> (one process that splits in two: sensory neurons of the dorsal root ganglia).</p>"
  },
  {
   "id": "s2",
   "title": "Myelin and nerve fibres",
   "html": "<p>Myelin is a lipid-rich (phospholipids, glycolipids, cholesterol) insulating sheath made by <strong>oligodendrocytes in the CNS</strong> and <strong>Schwann cells in the PNS</strong>. A <strong>Schwann cell myelinates a single internode</strong> of one axon (internodes up to 1.5 mm), whereas one <strong>oligodendrocyte can myelinate up to about 50 axons</strong>. Gaps between segments are the <strong>nodes of Ranvier</strong>, where the impulse jumps: <strong>saltatory conduction</strong>, up to about 150 times faster than in unmyelinated fibres. Small fibres (autonomic, pain) are unmyelinated, several embedded in one Schwann cell. <strong>Guillain-Barré syndrome</strong> is an immune demyelination of peripheral nerves, often after a respiratory or gut infection, with tingling and ascending weakness.</p><p>A <strong>peripheral nerve</strong> contains hundreds to hundreds of thousands of fibres in fascicles: <strong>endoneurium</strong> around each axon, <strong>perineurium</strong> around each fascicle (fibroblast-derived cells with tight junctions forming a barrier), <strong>epineurium</strong> around the whole nerve.</p>"
  },
  {
   "id": "s3",
   "title": "Neuroglia and grey vs white matter",
   "html": "<p>Glial cells are smaller and about <strong>10 times more numerous</strong> than neurons; six types. <strong>Astrocytes</strong>: many processes; support, nutrition, repair; their foot processes, with endothelium and basement membrane, form the <strong>blood-brain barrier</strong>. <strong>Oligodendrocytes</strong>: CNS myelin. <strong>Microglia</strong>: phagocytes of the CNS (from monocytes). <strong>Ependymal cells</strong>: line the ventricles and central canal. <strong>Schwann cells</strong>: PNS myelin. <strong>Satellite cells</strong>: surround neuron cell bodies in ganglia.</p><p>In the CNS, <strong>grey matter</strong> contains neuron cell bodies, neuroglia and unmyelinated dendrites; <strong>white matter</strong> contains no cell bodies, mainly <strong>myelinated fibres</strong>.</p>"
  }
 ],
 "exam": [
  "Neurons + neuroglia, from neuroectoderm (microglia from monocytes).",
  "Dendrites to the soma; single axon away from it.",
  "Nissl bodies = RER + ribosomes; absent from axon hillock and axon.",
  "Multipolar (most, motor), bipolar (retina, olfaction), pseudounipolar (dorsal root ganglion).",
  "Myelin: Schwann cell = 1 internode (PNS); oligodendrocyte = many axons (CNS).",
  "Nodes of Ranvier → saltatory conduction.",
  "Endoneurium (axon), perineurium (fascicle, barrier), epineurium (nerve).",
  "Blood-brain barrier: endothelium + basement membrane + astrocyte foot processes.",
  "Microglia phagocytose; ependymal cells line ventricles; satellite cells in ganglia.",
  "Grey matter: cell bodies; white matter: myelinated fibres."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Neuron and peripheral nerve",
   "caption": "Parts of a neuron and the wrappings of a nerve. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"250\" y1=\"70\" x2=\"270\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"490\" y1=\"70\" x2=\"510\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"565\" y1=\"100\" x2=\"627.5\" y2=\"170\"/>",
   "parts": {
    "den": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"15\" y=\"40\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Dendrites: many, thick,",
      "carry impulse TO soma"
     ],
     "lx": 132.5,
     "ly": 68.0
    },
    "soma": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"270\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Soma: nucleus +",
      "Nissl bodies (RER)"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "ax": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"510\" y=\"40\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Axon: single, from hillock",
      "(no Nissl); impulse AWAY"
     ],
     "lx": 627.5,
     "ly": 68.0
    },
    "my": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"385\" y=\"170\" width=\"360\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Myelin: Schwann (PNS, 1 internode)",
      "or oligodendrocyte (CNS, many)"
     ],
     "lx": 565.0,
     "ly": 198.0
    },
    "wrap": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"15\" y=\"170\" width=\"350\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Endoneurium (axon) → perineurium",
      "(fascicle) → epineurium (nerve)"
     ],
     "lx": 190.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "den": [
     {
      "t": [
       15.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "soma": [
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
    "ax": [
     {
      "t": [
       510.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "my": [
     {
      "t": [
       385.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "wrap": [
     {
      "t": [
       15.0,
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
   "q": "Nissl bodies are:",
   "options": [
    "Mitochondria",
    "Rough ER and ribosomes",
    "Lysosomes",
    "Neurofilaments"
   ],
   "answer": 1,
   "why": "Basophilic."
  },
  {
   "q": "Nissl bodies are absent from the:",
   "options": [
    "Soma",
    "Dendrite bases",
    "Axon hillock",
    "Perikaryon"
   ],
   "answer": 2,
   "why": "And the axon."
  },
  {
   "q": "Impulses are carried towards the cell body by:",
   "options": [
    "Axons",
    "Dendrites",
    "Myelin",
    "Nodes of Ranvier"
   ],
   "answer": 1,
   "why": "Axons carry away."
  },
  {
   "q": "Most neurons in the body are:",
   "options": [
    "Unipolar",
    "Bipolar",
    "Multipolar",
    "Pseudounipolar"
   ],
   "answer": 2,
   "why": "About 99%."
  },
  {
   "q": "Sensory neurons of the dorsal root ganglia are:",
   "options": [
    "Multipolar",
    "Bipolar",
    "Pseudounipolar",
    "Anaxonic"
   ],
   "answer": 2,
   "why": "One process splits in two."
  },
  {
   "q": "Bipolar neurons are found in the:",
   "options": [
    "Motor cortex",
    "Retina",
    "Dorsal root ganglia",
    "Spinal cord ventral horn"
   ],
   "answer": 1,
   "why": "Also olfactory epithelium."
  },
  {
   "q": "Myelin in the CNS is made by:",
   "options": [
    "Schwann cells",
    "Oligodendrocytes",
    "Astrocytes",
    "Microglia"
   ],
   "answer": 1,
   "why": "Up to ~50 axons each."
  },
  {
   "q": "A single Schwann cell myelinates:",
   "options": [
    "Up to 50 axons",
    "One internode of one axon",
    "A whole nerve",
    "Only unmyelinated axons"
   ],
   "answer": 1,
   "why": "PNS."
  },
  {
   "q": "Saltatory conduction occurs because the impulse jumps between:",
   "options": [
    "Synapses",
    "Nodes of Ranvier",
    "Dendrites",
    "Nissl bodies"
   ],
   "answer": 1,
   "why": "Much faster."
  },
  {
   "q": "The connective tissue around a fascicle is the:",
   "options": [
    "Endoneurium",
    "Perineurium",
    "Epineurium",
    "Pia mater"
   ],
   "answer": 1,
   "why": "Forms a barrier."
  },
  {
   "q": "The blood-brain barrier involves the foot processes of:",
   "options": [
    "Microglia",
    "Astrocytes",
    "Ependymal cells",
    "Oligodendrocytes"
   ],
   "answer": 1,
   "why": "With endothelium and basement membrane."
  },
  {
   "q": "The phagocytes of the CNS are:",
   "options": [
    "Astrocytes",
    "Microglia",
    "Ependymal cells",
    "Satellite cells"
   ],
   "answer": 1,
   "why": "From monocytes."
  },
  {
   "q": "Ependymal cells line the:",
   "options": [
    "Blood vessels",
    "Ventricles and central canal",
    "Nerve fascicles",
    "Ganglia"
   ],
   "answer": 1,
   "why": "CSF."
  },
  {
   "q": "White matter consists mainly of:",
   "options": [
    "Neuron cell bodies",
    "Myelinated fibres",
    "Unmyelinated dendrites",
    "Ependyma"
   ],
   "answer": 1,
   "why": "Grey matter has cell bodies."
  },
  {
   "q": "Guillain-Barré syndrome is a:",
   "options": [
    "CNS tumour",
    "Peripheral demyelinating disease",
    "Muscle dystrophy",
    "Astrocyte disorder"
   ],
   "answer": 1,
   "why": "Often post-infectious."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "den",
   "options": [
    "Dendrites",
    "Nerve wrappings",
    "Cell body (perikaryon)",
    "Axon"
   ],
   "answer": 0,
   "why": "The arrow points to: Dendrites. Usually many, thick and branching processes that carry impulses towards the cell body; they contain Nissl substance at their bases."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "soma",
   "options": [
    "Dendrites",
    "Cell body (perikaryon)",
    "Nerve wrappings",
    "Axon"
   ],
   "answer": 1,
   "why": "The arrow points to: Cell body (perikaryon). Contains the nucleus with a prominent nucleolus and basophilic Nissl bodies, clumps of rough ER and free ribosomes."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ax",
   "options": [
    "Dendrites",
    "Nerve wrappings",
    "Axon",
    "Cell body (perikaryon)"
   ],
   "answer": 2,
   "why": "The arrow points to: Axon. A single, thinner process leaving from the axon hillock, which lacks Nissl bodies; carries impulses away to synapses."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "my",
   "options": [
    "Nerve wrappings",
    "Dendrites",
    "Cell body (perikaryon)",
    "Myelin sheath"
   ],
   "answer": 3,
   "why": "The arrow points to: Myelin sheath. Lipid-rich insulating wrap: one Schwann cell per internode in the PNS, one oligodendrocyte for up to about 50 axons in the CNS; nodes of Ranvier between segments."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "wrap",
   "options": [
    "Cell body (perikaryon)",
    "Dendrites",
    "Nerve wrappings",
    "Myelin sheath"
   ],
   "answer": 2,
   "why": "The arrow points to: Nerve wrappings. Endoneurium around each axon, perineurium (with tight junctions forming a barrier) around each fascicle, epineurium around the whole nerve."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Parts of a neuron?",
   "back": "Soma (nucleus, Nissl bodies), dendrites (to soma), axon (from hillock, away from soma), synaptic terminals."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "What are Nissl bodies?",
   "back": "Clumps of rough ER and free ribosomes; basophilic; in soma and dendrites, absent from axon hillock and axon."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Structural types of neurons?",
   "back": "Multipolar (most, motor), bipolar (retina, olfaction, inner ear), pseudounipolar (dorsal root ganglia)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Schwann cell vs oligodendrocyte?",
   "back": "Schwann: PNS, one internode of one axon. Oligodendrocyte: CNS, up to ~50 axons."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Nerve wrappings?",
   "back": "Endoneurium (each axon), perineurium (fascicle; barrier), epineurium (whole nerve)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Six glial cells?",
   "back": "Astrocytes, oligodendrocytes, microglia, ependymal cells (CNS); Schwann cells, satellite cells (PNS)."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Blood-brain barrier?",
   "back": "Endothelium (tight junctions) + basement membrane + astrocyte foot processes."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Grey vs white matter?",
   "back": "Grey: cell bodies, glia, unmyelinated dendrites. White: myelinated fibres, no cell bodies."
  },
  {
   "id": "img-den",
   "type": "image",
   "target": "den",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Dendrites. Usually many, thick and branching processes that carry impulses towards the cell body; they contain Nissl substance at their bases."
  },
  {
   "id": "img-soma",
   "type": "image",
   "target": "soma",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Cell body (perikaryon). Contains the nucleus with a prominent nucleolus and basophilic Nissl bodies, clumps of rough ER and free ribosomes."
  },
  {
   "id": "img-ax",
   "type": "image",
   "target": "ax",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Axon. A single, thinner process leaving from the axon hillock, which lacks Nissl bodies; carries impulses away to synapses."
  },
  {
   "id": "img-my",
   "type": "image",
   "target": "my",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Myelin sheath. Lipid-rich insulating wrap: one Schwann cell per internode in the PNS, one oligodendrocyte for up to about 50 axons in the CNS; nodes of Ranvier between segments."
  },
  {
   "id": "img-wrap",
   "type": "image",
   "target": "wrap",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Nerve wrappings. Endoneurium around each axon, perineurium (with tight junctions forming a barrier) around each fascicle, epineurium around the whole nerve."
  }
 ],
 "deeper": [
  {
   "title": "Why peripheral nerves can regrow and central tracts cannot",
   "html": "<p>When a peripheral axon is cut, the distal part degenerates, but the Schwann cells survive, clear the debris and line up inside the endoneurial tube as a guiding column, secreting growth factors. The axon can regrow along it at about 1 mm a day. In the CNS, oligodendrocytes each serve many axons and do not form such tubes; their myelin debris and the glial scar made by astrocytes actively inhibit growth. That difference in glial behaviour is why a cut nerve in the arm can recover while a spinal cord injury usually does not.</p><p class='src'>Source: the lecture's Schwann cells, oligodendrocytes and nerve wrappings.</p>"
  }
 ],
 "resources": [
  {
   "title": "Neuroanatomy, Neurons (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK441977/",
   "kind": "Book",
   "why": "Neuron structure and types.",
   "note": ""
  },
  {
   "title": "The Histology Guide (University of Leeds)",
   "url": "https://histology.leeds.ac.uk/",
   "kind": "Website",
   "why": "Nervous tissue slides.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Neuroanatomy, Neurons (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK441977/"
  },
  {
   "name": "The Histology Guide (University of Leeds)",
   "url": "https://histology.leeds.ac.uk/"
  }
 ],
 "verified": "26 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["histo1-git"] = {
 "id": "histo1-git",
 "subject": "histo1",
 "group": "Organ histology",
 "title": "Histology of the digestive system",
 "sourceFile": "Histology of the digestive system (Histology, Dr Z. Jamil)",
 "sourceUrl": "https://drive.google.com/file/d/1PqEj87DIkp6YazhB_Z6HspaNozutytfG/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The general plan",
   "html": "<p>From the oesophagus to the anal canal the wall has the same <strong>four layers</strong>. <strong>Mucosa</strong>: lining epithelium (absorbs nutrients, secretes mucus, continuous with intrinsic glands), <strong>lamina propria</strong> (loose CT with capillaries and most of the mucosa-associated lymphoid tissue, MALT) and <strong>muscularis mucosae</strong> (thin muscle for local movements). <strong>Submucosa</strong>: CT with the major vessels, lymphatics and nerves, and elastic fibres. <strong>Muscularis externa</strong>: <strong>inner circular</strong> (squeezes, forms sphincters) and <strong>outer longitudinal</strong> (shortens) smooth muscle for peristalsis and segmentation. <strong>Serosa</strong> (mesothelium on loose CT) where the gut is in the peritoneal cavity, <strong>adventitia</strong> where it is not.</p><p>The <strong>enteric nervous system</strong>, with about 100 million neurons, has a <strong>submucosal (Meissner) plexus</strong> and a <strong>myenteric (Auerbach) plexus</strong>; parasympathetic input stimulates digestion, sympathetic input inhibits it.</p>"
  },
  {
   "id": "s1",
   "title": "Tongue, oesophagus and stomach",
   "html": "<p><strong>Tongue</strong>: a mass of striated muscle in three planes covered by stratified squamous mucosa, with papillae on the dorsum and <strong>taste buds</strong> opening at taste pores. <strong>Oesophagus</strong>: <strong>non-keratinised stratified squamous</strong> epithelium, submucosal mucous glands, muscularis externa and an <strong>adventitia</strong>.</p><p><strong>Stomach</strong>: the undistended mucosa and submucosa form longitudinal folds, <strong>rugae</strong>. Regions: cardia, fundus, body, antrum, pylorus. Surface <strong>simple columnar</strong> mucous epithelium dips into <strong>gastric pits</strong>, into which glands open: short tubular <strong>cardiac glands</strong>; in the fundus and body, long glands with <strong>parietal cells</strong> (HCl, intrinsic factor), <strong>chief cells</strong> (pepsinogen) and mucous neck cells; deep pits and coiled mucous glands in the pylorus.</p>"
  },
  {
   "id": "s2",
   "title": "Small intestine",
   "html": "<p>Three parts: duodenum, jejunum, ileum. Surface amplification: length, <strong>plicae circulares</strong> (permanent submucosal folds, prominent in duodenum and jejunum, slowing food and increasing area), <strong>villi</strong> (tall columnar epithelium with a <strong>striated (brush) border</strong>, goblet cells, a core of capillaries and a central <strong>lacteal</strong>) and <strong>microvilli</strong>. Between villi, <strong>crypts of Lieberkühn</strong> contain columnar cells, goblet cells, <strong>stem cells</strong>, <strong>Paneth cells</strong> (antimicrobial) and enteroendocrine (argentaffin) cells. <strong>Brunner's glands</strong> in the <strong>duodenal submucosa</strong> secrete alkaline mucus that protects against gastric acid. <strong>Peyer's patches</strong> are clusters of lymphoid follicles, typical of the <strong>ileum</strong>.</p>"
  },
  {
   "id": "s3",
   "title": "Large intestine, appendix and glands",
   "html": "<p><strong>Large intestine</strong>: simple columnar epithelium with a thin brush border and <strong>many goblet cells</strong>; <strong>no plicae or villi</strong>; straight crypts lined largely by goblet cells; Paneth cells usually absent; more prominent muscularis mucosae. The outer longitudinal muscle forms three bands, the <strong>teniae coli</strong>; the wall puckers into <strong>haustra</strong>, with fatty <strong>epiploic appendages</strong>. The <strong>appendix</strong> has a similar wall with abundant lymphoid follicles.</p><p><strong>Liver</strong>: plates of hepatocytes separated by sinusoids, organised around portal triads (portal vein, hepatic artery, bile duct). <strong>Pancreas</strong>: <strong>exocrine acini</strong> (grape-like clusters of serous cells) in lobules separated by septa, and <strong>endocrine islets of Langerhans</strong> (insulin, glucagon). Salivary glands contain serous and mucous units.</p>"
  }
 ],
 "exam": [
  "Four layers: mucosa, submucosa, muscularis externa, serosa/adventitia.",
  "Mucosa = epithelium + lamina propria (MALT) + muscularis mucosae.",
  "Submucosal (Meissner) and myenteric (Auerbach) plexuses.",
  "Oesophagus: non-keratinised stratified squamous; adventitia.",
  "Stomach: rugae, gastric pits; parietal (HCl, IF), chief (pepsinogen) cells.",
  "Small intestine: plicae, villi with lacteal, microvilli, crypts with Paneth cells.",
  "Brunner's glands: duodenal submucosa; Peyer's patches: ileum.",
  "Large intestine: no villi, many goblet cells, teniae coli, haustra.",
  "Pancreas: exocrine acini + endocrine islets of Langerhans."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "The four layers of the gut wall",
   "caption": "Same plan from oesophagus to anal canal. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"365\" y1=\"70\" x2=\"395\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"410\" y1=\"100\" x2=\"350\" y2=\"170\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"365\" y1=\"200\" x2=\"395\" y2=\"200\"/>",
   "parts": {
    "muc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"15\" y=\"40\" width=\"350\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Mucosa: epithelium, lamina",
      "propria, muscularis mucosae"
     ],
     "lx": 190.0,
     "ly": 68.0
    },
    "sub": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"395\" y=\"40\" width=\"350\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Submucosa: vessels, elastic fibres,",
      "submucosal plexus"
     ],
     "lx": 570.0,
     "ly": 68.0
    },
    "me": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"15\" y=\"170\" width=\"350\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Muscularis externa: inner circular +",
      "outer longitudinal; myenteric plexus"
     ],
     "lx": 190.0,
     "ly": 198.0
    },
    "ser": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"395\" y=\"170\" width=\"350\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Serosa (mesothelium) or",
      "adventitia (retroperitoneal)"
     ],
     "lx": 570.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "muc": [
     {
      "t": [
       15.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "sub": [
     {
      "t": [
       395.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "me": [
     {
      "t": [
       15.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "ser": [
     {
      "t": [
       395.0,
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
   "q": "The layer containing most MALT is the:",
   "options": [
    "Submucosa",
    "Lamina propria",
    "Muscularis externa",
    "Serosa"
   ],
   "answer": 1,
   "why": "Loose CT of the mucosa."
  },
  {
   "q": "The myenteric plexus lies:",
   "options": [
    "In the lamina propria",
    "Between the muscle layers",
    "Under the serosa",
    "In the submucosa"
   ],
   "answer": 1,
   "why": "Controls peristalsis."
  },
  {
   "q": "The inner layer of the muscularis externa is:",
   "options": [
    "Longitudinal",
    "Circular",
    "Oblique only",
    "Absent"
   ],
   "answer": 1,
   "why": "Forms sphincters."
  },
  {
   "q": "Parts of the gut outside the peritoneal cavity are covered by:",
   "options": [
    "Serosa",
    "Adventitia",
    "Mucosa",
    "Mesothelium only"
   ],
   "answer": 1,
   "why": "E.g. oesophagus."
  },
  {
   "q": "The oesophagus is lined by:",
   "options": [
    "Simple columnar epithelium",
    "Non-keratinised stratified squamous",
    "Transitional epithelium",
    "Pseudostratified ciliated epithelium"
   ],
   "answer": 1,
   "why": "Protection against abrasion."
  },
  {
   "q": "Longitudinal folds of the empty stomach are called:",
   "options": [
    "Plicae circulares",
    "Rugae",
    "Haustra",
    "Villi"
   ],
   "answer": 1,
   "why": "Flatten on filling."
  },
  {
   "q": "Gastric glands open into:",
   "options": [
    "Crypts of Lieberkühn",
    "Gastric pits",
    "Lacteals",
    "Brunner's glands"
   ],
   "answer": 1,
   "why": "Surface foveolae."
  },
  {
   "q": "Plicae circulares are folds of:",
   "options": [
    "Mucosa only",
    "Mucosa and submucosa",
    "Muscularis externa",
    "Serosa"
   ],
   "answer": 1,
   "why": "Permanent folds."
  },
  {
   "q": "The central lymphatic of a villus is the:",
   "options": [
    "Crypt",
    "Lacteal",
    "Sinusoid",
    "Paneth cell"
   ],
   "answer": 1,
   "why": "Absorbs fat."
  },
  {
   "q": "Paneth cells are found in the:",
   "options": [
    "Stomach pits",
    "Crypts of Lieberkühn",
    "Oesophageal glands",
    "Colonic surface"
   ],
   "answer": 1,
   "why": "Antimicrobial secretion."
  },
  {
   "q": "Brunner's glands are located in the:",
   "options": [
    "Ileal mucosa",
    "Duodenal submucosa",
    "Colonic submucosa",
    "Gastric mucosa"
   ],
   "answer": 1,
   "why": "Alkaline mucus."
  },
  {
   "q": "Peyer's patches are characteristic of the:",
   "options": [
    "Duodenum",
    "Ileum",
    "Oesophagus",
    "Stomach"
   ],
   "answer": 1,
   "why": "Lymphoid follicles."
  },
  {
   "q": "Teniae coli are:",
   "options": [
    "Mucosal folds",
    "Bands of longitudinal muscle",
    "Lymphoid nodules",
    "Fat pouches"
   ],
   "answer": 1,
   "why": "Three bands in the colon."
  },
  {
   "q": "Which feature is absent in the large intestine?",
   "options": [
    "Goblet cells",
    "Villi",
    "Crypts",
    "Muscularis mucosae"
   ],
   "answer": 1,
   "why": "No villi or plicae."
  },
  {
   "q": "The endocrine part of the pancreas is the:",
   "options": [
    "Acinus",
    "Islet of Langerhans",
    "Intercalated duct",
    "Lobular septum"
   ],
   "answer": 1,
   "why": "Insulin, glucagon."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "muc",
   "options": [
    "Submucosa",
    "Muscularis externa",
    "Serosa or adventitia",
    "Mucosa"
   ],
   "answer": 3,
   "why": "The arrow points to: Mucosa. Lining epithelium (absorbs, secretes), lamina propria (loose CT with capillaries and most MALT) and muscularis mucosae (thin muscle for local movements)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "sub",
   "options": [
    "Mucosa",
    "Serosa or adventitia",
    "Submucosa",
    "Muscularis externa"
   ],
   "answer": 2,
   "why": "The arrow points to: Submucosa. Connective tissue with the larger vessels, lymphatics and nerves (submucosal plexus); elastic fibres restore shape; Brunner's glands in the duodenum."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "me",
   "options": [
    "Submucosa",
    "Serosa or adventitia",
    "Mucosa",
    "Muscularis externa"
   ],
   "answer": 3,
   "why": "The arrow points to: Muscularis externa. Inner circular layer (squeezes, forms sphincters) and outer longitudinal layer (shortens), with the myenteric plexus between them: peristalsis."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ser",
   "options": [
    "Mucosa",
    "Serosa or adventitia",
    "Submucosa",
    "Muscularis externa"
   ],
   "answer": 1,
   "why": "The arrow points to: Serosa or adventitia. Serosa = mesothelium on loose CT for intraperitoneal parts; adventitia = connective tissue blending with surroundings where there is no peritoneum."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Four layers of the gut wall?",
   "back": "Mucosa, submucosa, muscularis externa, serosa or adventitia."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Three parts of the mucosa?",
   "back": "Epithelium, lamina propria (loose CT, MALT), muscularis mucosae."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Enteric plexuses?",
   "back": "Submucosal (Meissner) in the submucosa; myenteric (Auerbach) between circular and longitudinal muscle."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Stomach histology?",
   "back": "Rugae; simple columnar mucous surface; gastric pits; glands with parietal (HCl, IF) and chief (pepsinogen) cells."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Four ways the small intestine increases surface?",
   "back": "Length, plicae circulares, villi, microvilli."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Cells of the crypts of Lieberkühn?",
   "back": "Columnar, goblet, stem, Paneth and enteroendocrine (argentaffin) cells."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Duodenum vs ileum features?",
   "back": "Duodenum: Brunner's glands in submucosa. Ileum: Peyer's patches."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Large intestine features?",
   "back": "No villi, many goblet cells, straight crypts, teniae coli, haustra, epiploic appendages."
  },
  {
   "id": "img-muc",
   "type": "image",
   "target": "muc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Mucosa. Lining epithelium (absorbs, secretes), lamina propria (loose CT with capillaries and most MALT) and muscularis mucosae (thin muscle for local movements)."
  },
  {
   "id": "img-sub",
   "type": "image",
   "target": "sub",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Submucosa. Connective tissue with the larger vessels, lymphatics and nerves (submucosal plexus); elastic fibres restore shape; Brunner's glands in the duodenum."
  },
  {
   "id": "img-me",
   "type": "image",
   "target": "me",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Muscularis externa. Inner circular layer (squeezes, forms sphincters) and outer longitudinal layer (shortens), with the myenteric plexus between them: peristalsis."
  },
  {
   "id": "img-ser",
   "type": "image",
   "target": "ser",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Serosa or adventitia. Serosa = mesothelium on loose CT for intraperitoneal parts; adventitia = connective tissue blending with surroundings where there is no peritoneum."
  }
 ],
 "deeper": [
  {
   "title": "Coeliac disease: flattening the villi",
   "html": "<p>In coeliac disease an immune reaction to gluten damages the small intestinal mucosa. On biopsy the <strong>villi become short or flat</strong>, the <strong>crypts lengthen</strong> as stem cells try to compensate, and lymphocytes crowd the epithelium and lamina propria. Losing villi and microvilli removes most of the absorptive surface built by the four amplifications of this lecture, which is why patients develop diarrhoea, weight loss, iron and folate deficiency. With a gluten-free diet the villi grow back, because the crypt stem cells are spared.</p><p class='src'>Source: the lecture's surface amplifications and crypt cells.</p>"
  }
 ],
 "resources": [
  {
   "title": "Anatomy, Abdomen and Pelvis, Small Intestine (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK459366/",
   "kind": "Book",
   "why": "Layers, villi and regional features.",
   "note": ""
  },
  {
   "title": "Histology, Parietal Cells (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK547758/",
   "kind": "Book",
   "why": "Gastric gland cells.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Anatomy, Abdomen and Pelvis, Small Intestine (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK459366/"
  },
  {
   "name": "Histology, Parietal Cells (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK547758/"
  }
 ],
 "verified": "26 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["histo1-urinary"] = {
 "id": "histo1-urinary",
 "subject": "histo1",
 "group": "Organ histology",
 "title": "Histology of the urinary system",
 "sourceFile": "Histology of the urinary system (Histology, Dr Z. Jamil)",
 "sourceUrl": "https://drive.google.com/file/d/14EO-EfJxOqMRNY8YawI8h7-Pk2MbfEsE/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "Functions and organisation",
   "html": "<p>The urinary system (1) filters and excretes, (2) balances body fluid, regulates blood pressure through <strong>renin</strong> and acts as an endocrine gland making <strong>erythropoietin</strong>, and (3) maintains homeostasis by reabsorbing small molecules (amino acids, glucose), ions (Na⁺, Ca²⁺, Cl⁻) and water.</p><p>The kidney has a <strong>cortex</strong> and a <strong>medulla</strong> of pyramids ending in papillae that drain into calyces and the pelvis. The <strong>uriniferous tubule</strong> = nephron + collecting duct; the <strong>nephron</strong> = renal corpuscle + renal tubule (PCT, loop of Henle, DCT). <strong>Cortical nephrons</strong> (80-85%) have corpuscles in the outer cortex and short loops; <strong>juxtamedullary nephrons</strong> (15-20%) sit near the medulla with <strong>long loops</strong> reaching deep into it, allowing concentrated or dilute urine.</p>"
  },
  {
   "id": "s1",
   "title": "The renal corpuscle and filtration barrier",
   "html": "<p>The corpuscle is the <strong>glomerulus</strong> inside <strong>Bowman's capsule</strong>. The <strong>parietal layer</strong> is simple squamous epithelium, becoming cuboidal at the <strong>urinary pole</strong> where it continues into the PCT; the <strong>visceral layer</strong> is made of <strong>podocytes</strong>. The urinary space lies between them. Blood enters and leaves at the <strong>vascular pole</strong>.</p><p>The <strong>filtration barrier</strong> has three parts: <strong>fenestrated endothelium</strong>; the <strong>glomerular basement membrane</strong>, a lamina densa (type IV collagen, laminin: size filter) between two laminae rarae (heparan sulphate, fibronectin: <strong>charge barrier</strong> restricting anionic molecules); and the <strong>podocytes</strong>, whose primary processes give secondary processes (<strong>pedicels</strong>) that interdigitate on the basement membrane, leaving <strong>filtration slits</strong> bridged by a diaphragm. Podocytes contain actin and can contract.</p><p><strong>Mesangial cells</strong> support the capillaries, are contractile with angiotensin II receptors (reducing flow) and natriuretic factor receptors, make matrix, clear immune complexes trapped by the basement membrane and produce cytokines and prostaglandins; at the vascular pole they are <strong>extraglomerular mesangial cells</strong>.</p>"
  },
  {
   "id": "s2",
   "title": "Tubules and the juxtaglomerular apparatus",
   "html": "<p><strong>PCT</strong>: cuboidal cells, <strong>acidophilic</strong> cytoplasm (many mitochondria), lysosomes and vesicles, a <strong>brush border</strong> of microvilli; surrounded by peritubular capillaries. <strong>Loop of Henle</strong>: thick segments lined by low cuboidal cells, thin segments by squamous epithelium; the <strong>thin descending limb is permeable to water</strong>, the ascending limb is not. <strong>DCT</strong>: shorter cuboidal cells, <strong>no brush border</strong>; with <strong>aldosterone</strong> it reabsorbs Na⁺ and secretes K⁺. <strong>Collecting duct</strong>: widens towards the papilla (area cribrosa); <strong>principal cells</strong> (basal infoldings, a primary cilium as mechanosensor; absorb Na⁺ and water, secrete K⁺) and <strong>intercalated cells</strong> (microvilli; secrete H⁺ or HCO₃⁻).</p><p>The <strong>juxtaglomerular apparatus</strong>: the <strong>macula densa</strong>, tall, closely packed DCT cells with apical nuclei next to the arterioles, senses the ionic content and volume of the tubular fluid and signals the <strong>juxtaglomerular cells</strong>, modified smooth muscle of the <strong>afferent</strong> (sometimes efferent) arteriole with <strong>renin</strong> granules; with the extraglomerular mesangial cells.</p>"
  },
  {
   "id": "s3",
   "title": "Excretory passages",
   "html": "<p>Urine passes from collecting ducts to minor and major calyces, pelvis, ureter, bladder and urethra. All passages have a mucosa, a muscularis and an adventitia or serosa. <strong>Transitional epithelium (urothelium)</strong> lines them up to the first part of the male urethra: impermeable to water and salts, 2 layers in the calyces, 4-5 in the ureter, more in the bladder; <strong>dome-shaped</strong> surface cells whose apical membrane has rigid <strong>plaques</strong> that fold and unfold with volume.</p><p><strong>Ureter</strong>: mucosa, muscular coat of <strong>inner longitudinal</strong> and <strong>middle circular</strong> layers, with an outer longitudinal layer only at the distal end, and fibrous adventitia; the oblique entry into the bladder compresses the ureter when the bladder fills, limiting reflux. <strong>Bladder</strong>: many urothelial layers when empty, about three when distended; less regular muscle layers (detrusor); adventitia.</p><p><strong>Male urethra</strong>: prostatic (transitional epithelium, prostatic ducts open here), membranous (stratified or pseudostratified columnar), penile (pseudostratified columnar, surrounded by corpus spongiosum, becoming stratified squamous near the meatus). <strong>Female urethra</strong>: 3-5 cm, mainly stratified squamous epithelium, keratinised near the meatus, very vascular lamina propria, inner smooth and outer striated muscle.</p>"
  }
 ],
 "exam": [
  "Kidney: filtration, fluid and BP (renin), erythropoietin, reabsorption.",
  "Uriniferous tubule = nephron + collecting duct; nephron = corpuscle + tubule.",
  "Cortical nephrons 80-85%; juxtamedullary 15-20% with long loops.",
  "Bowman's capsule: parietal simple squamous, visceral podocytes.",
  "Filtration barrier: fenestrated endothelium + GBM (type IV collagen; charge barrier) + podocyte slits.",
  "Mesangial cells: support, contract (angiotensin II), clear immune complexes.",
  "PCT: acidophilic, brush border; DCT: no brush border, aldosterone.",
  "Thin descending limb permeable to water; ascending not.",
  "Collecting duct: principal (Na⁺, water) and intercalated (H⁺, HCO₃⁻) cells.",
  "JGA: macula densa + renin-secreting JG cells + extraglomerular mesangium.",
  "Urothelium: dome cells, plaques; ureter inner longitudinal + middle circular muscle."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "The nephron and its epithelia",
   "caption": "Path of the filtrate and the lining of each segment. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"250\" y1=\"70\" x2=\"270\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"490\" y1=\"70\" x2=\"510\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"627.5\" y1=\"100\" x2=\"627.5\" y2=\"170\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"510\" y1=\"200\" x2=\"490\" y2=\"200\"/>",
   "parts": {
    "rc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"15\" y=\"40\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Renal corpuscle: glomerulus",
      "+ Bowman's capsule"
     ],
     "lx": 132.5,
     "ly": 68.0
    },
    "pct": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"270\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "PCT: cuboidal, brush",
      "border, acidophilic"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "loop": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"510\" y=\"40\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Loop of Henle: thin limbs",
      "squamous, thick cuboidal"
     ],
     "lx": 627.5,
     "ly": 68.0
    },
    "dct": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"510\" y=\"170\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "DCT: cuboidal, no brush",
      "border; macula densa"
     ],
     "lx": 627.5,
     "ly": 198.0
    },
    "cd": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"270\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Collecting duct: principal",
      "+ intercalated cells"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "jga": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"15\" y=\"170\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "JGA: macula densa + JG",
      "cells (renin) + mesangium"
     ],
     "lx": 132.5,
     "ly": 198.0
    }
   },
   "arrows": {
    "rc": [
     {
      "t": [
       15.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "pct": [
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
    "loop": [
     {
      "t": [
       510.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "dct": [
     {
      "t": [
       510.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "cd": [
     {
      "t": [
       270.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "jga": [
     {
      "t": [
       15.0,
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
   "q": "The proportion of juxtamedullary nephrons is about:",
   "options": [
    "5%",
    "15-20%",
    "50%",
    "80-85%"
   ],
   "answer": 1,
   "why": "They concentrate urine."
  },
  {
   "q": "The visceral layer of Bowman's capsule is formed by:",
   "options": [
    "Mesangial cells",
    "Podocytes",
    "Macula densa cells",
    "Endothelium"
   ],
   "answer": 1,
   "why": "Pedicels on the GBM."
  },
  {
   "q": "The parietal layer of Bowman's capsule is:",
   "options": [
    "Simple squamous",
    "Transitional",
    "Stratified squamous",
    "Pseudostratified"
   ],
   "answer": 0,
   "why": "Becomes cuboidal at the urinary pole."
  },
  {
   "q": "The charge barrier of the glomerular basement membrane is due to:",
   "options": [
    "Type I collagen bundles",
    "Heparan sulphate",
    "Elastin fibres",
    "Podocyte actin"
   ],
   "answer": 1,
   "why": "Restricts anions."
  },
  {
   "q": "Filtration slits lie between:",
   "options": [
    "Endothelial cells",
    "Podocyte pedicels",
    "Mesangial cells",
    "Tubular cells"
   ],
   "answer": 1,
   "why": "Bridged by a diaphragm."
  },
  {
   "q": "Mesangial cells contract in response to:",
   "options": [
    "Aldosterone",
    "Angiotensin II",
    "ADH",
    "Insulin"
   ],
   "answer": 1,
   "why": "Reducing glomerular flow."
  },
  {
   "q": "A tubule with acidophilic cells and a brush border is the:",
   "options": [
    "DCT",
    "PCT",
    "Collecting duct",
    "Thin limb"
   ],
   "answer": 1,
   "why": "Many mitochondria."
  },
  {
   "q": "The thin descending limb of the loop of Henle is:",
   "options": [
    "Impermeable to water",
    "Permeable to water",
    "Lined by columnar cells",
    "Covered by microvilli"
   ],
   "answer": 1,
   "why": "Ascending limb impermeable."
  },
  {
   "q": "Aldosterone acts on the DCT to:",
   "options": [
    "Secrete Na⁺",
    "Reabsorb Na⁺ and secrete K⁺",
    "Secrete glucose",
    "Reabsorb protein"
   ],
   "answer": 1,
   "why": "Also the collecting duct."
  },
  {
   "q": "Renin is secreted by:",
   "options": [
    "Macula densa cells",
    "Juxtaglomerular cells",
    "Podocytes",
    "Principal cells"
   ],
   "answer": 1,
   "why": "Modified smooth muscle of the afferent arteriole."
  },
  {
   "q": "The macula densa belongs to the:",
   "options": [
    "PCT",
    "DCT",
    "Collecting duct",
    "Loop of Henle thin limb"
   ],
   "answer": 1,
   "why": "Senses tubular fluid."
  },
  {
   "q": "Intercalated cells of the collecting duct secrete:",
   "options": [
    "Renin",
    "H⁺ or HCO₃⁻",
    "Erythropoietin",
    "Aldosterone"
   ],
   "answer": 1,
   "why": "Acid-base balance."
  },
  {
   "q": "Urothelium surface cells are:",
   "options": [
    "Ciliated",
    "Dome-shaped with plaques",
    "Keratinised",
    "Columnar with brush border"
   ],
   "answer": 1,
   "why": "Adjust to volume."
  },
  {
   "q": "The ureter's muscle coat is:",
   "options": [
    "Outer circular, inner longitudinal",
    "Inner longitudinal, middle circular",
    "Skeletal muscle",
    "A single oblique layer"
   ],
   "answer": 1,
   "why": "Outer longitudinal only distally."
  },
  {
   "q": "The prostatic urethra is lined by:",
   "options": [
    "Stratified squamous",
    "Transitional epithelium",
    "Simple columnar",
    "Pseudostratified"
   ],
   "answer": 1,
   "why": "Prostatic ducts open into it."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "rc",
   "options": [
    "Collecting duct",
    "Renal corpuscle",
    "Distal convoluted tubule",
    "Juxtaglomerular apparatus"
   ],
   "answer": 1,
   "why": "The arrow points to: Renal corpuscle. Glomerular capillary tuft inside Bowman's capsule: parietal layer of simple squamous epithelium, visceral layer of podocytes; the site of filtration."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pct",
   "options": [
    "Juxtaglomerular apparatus",
    "Loop of Henle",
    "Proximal convoluted tubule",
    "Renal corpuscle"
   ],
   "answer": 2,
   "why": "The arrow points to: Proximal convoluted tubule. Cuboidal cells with acidophilic cytoplasm (many mitochondria), lysosomes and a microvillous brush border; bulk reabsorption."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "loop",
   "options": [
    "Proximal convoluted tubule",
    "Distal convoluted tubule",
    "Loop of Henle",
    "Juxtaglomerular apparatus"
   ],
   "answer": 2,
   "why": "The arrow points to: Loop of Henle. U-shaped: thin segments lined by squamous epithelium, thick segments by low cuboidal cells; the thin descending limb is permeable to water, the ascending limb is not."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "dct",
   "options": [
    "Renal corpuscle",
    "Juxtaglomerular apparatus",
    "Collecting duct",
    "Distal convoluted tubule"
   ],
   "answer": 3,
   "why": "The arrow points to: Distal convoluted tubule. Shorter cuboidal cells without a brush border; aldosterone-driven Na⁺ reabsorption and K⁺ secretion; where it meets the vascular pole it forms the macula densa."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "cd",
   "options": [
    "Collecting duct",
    "Juxtaglomerular apparatus",
    "Renal corpuscle",
    "Loop of Henle"
   ],
   "answer": 0,
   "why": "The arrow points to: Collecting duct. Cuboidal to columnar lining: principal cells (Na⁺ and water reabsorption, K⁺ secretion, primary cilium) and intercalated cells (H⁺ and HCO₃⁻ secretion)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "jga",
   "options": [
    "Collecting duct",
    "Distal convoluted tubule",
    "Proximal convoluted tubule",
    "Juxtaglomerular apparatus"
   ],
   "answer": 3,
   "why": "The arrow points to: Juxtaglomerular apparatus. Macula densa (senses tubular fluid), juxtaglomerular cells of the afferent arteriole (renin granules) and extraglomerular mesangial cells."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Three functions of the kidney?",
   "back": "Filtration and excretion; fluid and blood pressure balance (renin), erythropoietin; reabsorption of molecules, ions and water."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Nephron vs uriniferous tubule?",
   "back": "Nephron = renal corpuscle + renal tubule. Uriniferous tubule = nephron + collecting duct."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Cortical vs juxtamedullary nephrons?",
   "back": "Cortical 80-85%, short loops. Juxtamedullary 15-20%, long loops deep in the medulla."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Three layers of the filtration barrier?",
   "back": "Fenestrated endothelium, GBM (type IV collagen + heparan sulphate), podocyte filtration slits."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Roles of mesangial cells?",
   "back": "Support, contraction (angiotensin II), matrix synthesis, clearing immune complexes, cytokines and prostaglandins."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "PCT vs DCT on a slide?",
   "back": "PCT: taller acidophilic cells, brush border. DCT: shorter cells, no brush border, clearer lumen."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Juxtaglomerular apparatus?",
   "back": "Macula densa (DCT), juxtaglomerular cells with renin (afferent arteriole), extraglomerular mesangial cells."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Urothelium?",
   "back": "Stratified, impermeable; dome cells with plaques; 2 layers in calyces, 4-5 in ureter, more in bladder."
  },
  {
   "id": "img-rc",
   "type": "image",
   "target": "rc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Renal corpuscle. Glomerular capillary tuft inside Bowman's capsule: parietal layer of simple squamous epithelium, visceral layer of podocytes; the site of filtration."
  },
  {
   "id": "img-pct",
   "type": "image",
   "target": "pct",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Proximal convoluted tubule. Cuboidal cells with acidophilic cytoplasm (many mitochondria), lysosomes and a microvillous brush border; bulk reabsorption."
  },
  {
   "id": "img-loop",
   "type": "image",
   "target": "loop",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Loop of Henle. U-shaped: thin segments lined by squamous epithelium, thick segments by low cuboidal cells; the thin descending limb is permeable to water, the ascending limb is not."
  },
  {
   "id": "img-dct",
   "type": "image",
   "target": "dct",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Distal convoluted tubule. Shorter cuboidal cells without a brush border; aldosterone-driven Na⁺ reabsorption and K⁺ secretion; where it meets the vascular pole it forms the macula densa."
  },
  {
   "id": "img-cd",
   "type": "image",
   "target": "cd",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Collecting duct. Cuboidal to columnar lining: principal cells (Na⁺ and water reabsorption, K⁺ secretion, primary cilium) and intercalated cells (H⁺ and HCO₃⁻ secretion)."
  },
  {
   "id": "img-jga",
   "type": "image",
   "target": "jga",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Juxtaglomerular apparatus. Macula densa (senses tubular fluid), juxtaglomerular cells of the afferent arteriole (renin granules) and extraglomerular mesangial cells."
  }
 ],
 "deeper": [
  {
   "title": "Protein in the urine: which layer failed?",
   "html": "<p>Albumin is small enough to pass the pores of the endothelium but is kept out by the negative charge of the basement membrane and by the slit diaphragms between podocyte pedicels. In <strong>nephrotic syndrome</strong> the podocytes' foot processes flatten and fuse (effacement) and the slit diaphragms are lost, so large amounts of protein leak into the urine, the plasma albumin falls and oedema follows. In minimal change disease the light microscope looks normal: only electron microscopy shows the effaced pedicels, a direct use of the ultrastructure in this lecture.</p><p class='src'>Source: the lecture's filtration barrier; standard renal pathology.</p>"
  }
 ],
 "resources": [
  {
   "title": "Histology, Nephron (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK554411/",
   "kind": "Book",
   "why": "Segments and their epithelia.",
   "note": ""
  },
  {
   "title": "Histology, Kidney and Glomerulus (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK554544/",
   "kind": "Book",
   "why": "Filtration barrier and JGA.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Histology, Nephron (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK554411/"
  },
  {
   "name": "Histology, Kidney and Glomerulus (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK554544/"
  }
 ],
 "verified": "26 Sep 2026"
};
