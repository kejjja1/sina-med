/* immuno1: 6 lectures, merged for upload. Edit the source files, not this one. */
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["immuno1-lymphoid"] = {
 "id": "immuno1-lymphoid",
 "subject": "immuno1",
 "group": "Immunology",
 "title": "Lymphoid organs and lymphocyte selection",
 "sourceFile": "ML2 Lymphoid organs (March 2026) (Immunology, Pr. F. Guessous)",
 "sourceUrl": "https://drive.google.com/file/d/1ExUx8N0BkuR_ZaVpYpQHtfJg_4ZJOPFj/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>The immune system is an integrated network of molecules, cells, tissues and organs, protecting against invaders from viruses to parasites and interacting with the endocrine, nervous and metabolic systems. Lymphoid organs are <strong>primary (central)</strong>, where lymphocytes mature (<strong>bone marrow</strong> for B cells, <strong>thymus</strong> for T cells), and <strong>secondary (peripheral)</strong>, where mature lymphocytes meet antigens and responses develop (<strong>lymph nodes, spleen, MALT</strong>). Blood and lymphatic vessels link them into one circulating system.</p>"
  },
  {
   "id": "s1",
   "title": "Bone marrow and B cells",
   "html": "<p>The bone marrow is a hematopoietic and primary lymphoid organ in flat bones (sternum, ribs, clavicle, pelvis): a vascular fibrillar network with adipocytes, macrophages and hematopoietic stem cells. Functions: stem-cell <strong>reservoir</strong>; <strong>maturation of pro-B cells</strong> (stromal cells needed) into mature B cells; housing of antigen-activated B cells returning as <strong>plasma cells</strong>. <strong>Gene rearrangement</strong> of the BCR (combinatorial joining of split segments) creates huge diversity from few genes; each rearrangement is unique to a cell (specificity) and <strong>irreversible</strong> (inherited by daughter cells). <strong>Negative selection</strong>: a BCR binding self-antigen triggers <strong>receptor editing</strong>, then <strong>apoptosis</strong> if still self-reactive; <strong>95%</strong> of B cells die in the marrow. B-cell deletion is less strict than thymic selection, so natural autoantibodies exist.</p>"
  },
  {
   "id": "s2",
   "title": "Thymus and T cells",
   "html": "<p>Two pyramidal lobes in the <strong>anterior mediastinum</strong> (about 20 g at age 20), base on the pericardium, capsule and lobules. Thymic hormones (thymulin, thymosin, thymopoietin) peak at puberty then decline; the thymus <strong>involutes</strong> into fibro-fatty tissue, contributing to weaker immunity in the elderly. Thymocytes from the marrow rearrange their <strong>TCR</strong> genes; in the <strong>cortex</strong>, <strong>positive selection</strong> keeps cells whose TCR recognises <strong>self-MHC</strong> with sufficient affinity (<strong>MHC restriction</strong>); in the <strong>medulla</strong>, <strong>negative selection</strong> eliminates cells recognising self-peptides with high affinity (<strong>self-tolerance</strong>). After involution, memory T cells keep dividing, so thymectomy in adults does not cause lymphopenia. In blood, T cells are ~75% and B cells 5-15% of lymphocytes.</p>"
  },
  {
   "id": "s3",
   "title": "Secondary lymphoid organs",
   "html": "<p>They contain mature T and B cells, <strong>antigen-presenting cells</strong> (dendritic cells) and stromal cells. <strong>Systemic compartment</strong> (spleen, most lymph nodes; mainly IgG and IgM) vs <strong>mucosal compartment</strong> (MALT and draining nodes; mainly <strong>secretory IgA</strong>). <strong>Lymph nodes</strong>: reniform, 10-15 mm, about 1,000 along lymphatic routes; they filter lymph and start immune responses. <strong>Cortex</strong>: B-cell follicles, <strong>primary</strong> before antigen and <strong>secondary</strong> (with germinal centres) 3-5 days after; <strong>paracortex</strong>: thymus-dependent T-cell zone; medulla. <strong>Spleen</strong>: filters blood. <strong>MALT</strong>: GALT (Peyer patches, tonsils, appendix) and BALT.</p>"
  }
 ],
 "exam": [
  "Primary organs: bone marrow (B cells), thymus (T cells). Secondary: lymph nodes, spleen, MALT.",
  "BCR/TCR gene rearrangement: diversity, specificity, irreversible.",
  "B-cell negative selection: receptor editing then apoptosis; 95% die.",
  "Thymus: anterior mediastinum; hormones peak at puberty; involutes with age.",
  "Positive selection (cortex): recognise self-MHC → MHC restriction.",
  "Negative selection (medulla): eliminate self-reactive cells → tolerance.",
  "Blood lymphocytes: T ~75%, B 5-15%.",
  "Systemic compartment: IgG, IgM; mucosal (MALT): secretory IgA.",
  "Lymph node: cortex (B follicles), paracortex (T cells), medulla.",
  "Secondary follicle forms 3-5 days after antigen."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Primary and secondary lymphoid organs",
   "caption": "Where lymphocytes mature, and where they meet antigens. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"240\" y1=\"70\" x2=\"280\" y2=\"135\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"240\" y1=\"200\" x2=\"280\" y2=\"135\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"135\" x2=\"520\" y2=\"47\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"135\" x2=\"520\" y2=\"132\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"135\" x2=\"520\" y2=\"220\"/>",
   "parts": {
    "bm": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"40\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Bone marrow:",
      "B cells mature"
     ],
     "lx": 140.0,
     "ly": 68.0
    },
    "thy": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"40\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Thymus:",
      "T cells mature"
     ],
     "lx": 140.0,
     "ly": 198.0
    },
    "blood": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"280\" y=\"105\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Blood and lymph",
      "circulation"
     ],
     "lx": 380.0,
     "ly": 133.0
    },
    "ln": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"520\" y=\"20\" width=\"200\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Lymph nodes",
      "(lymph)"
     ],
     "lx": 620.0,
     "ly": 45.5
    },
    "sp": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"520\" y=\"105\" width=\"200\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Spleen",
      "(blood)"
     ],
     "lx": 620.0,
     "ly": 130.5
    },
    "malt": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"520\" y=\"190\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "MALT: GALT (Peyer patches,",
      "tonsils, appendix), BALT"
     ],
     "lx": 620.0,
     "ly": 218.0
    }
   },
   "arrows": {
    "bm": [
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
    "thy": [
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
    "blood": [
     {
      "t": [
       280.0,
       113.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "ln": [
     {
      "t": [
       520.0,
       28.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "sp": [
     {
      "t": [
       520.0,
       113.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "malt": [
     {
      "t": [
       520.0,
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
   "q": "Where do B lymphocytes mature?",
   "options": [
    "Spleen",
    "Thymus",
    "Lymph nodes",
    "Bone marrow"
   ],
   "answer": 3,
   "why": "T cells mature in the thymus."
  },
  {
   "q": "Which is a secondary lymphoid organ?",
   "options": [
    "Bone marrow",
    "Liver",
    "Spleen",
    "Thymus"
   ],
   "answer": 2,
   "why": "Also lymph nodes and MALT."
  },
  {
   "q": "Which is NOT a consequence of gene rearrangement?",
   "options": [
    "Cell-specific receptor",
    "Irreversibility",
    "Great diversity",
    "Reversal in daughter cells"
   ],
   "answer": 3,
   "why": "Daughter cells inherit it."
  },
  {
   "q": "A developing B cell whose BCR binds self-antigen first undergoes:",
   "options": [
    "Class switch",
    "Migration to the spleen",
    "Receptor editing",
    "Immediate proliferation"
   ],
   "answer": 2,
   "why": "Then apoptosis if still self-reactive."
  },
  {
   "q": "About what proportion of B cells die in the bone marrow?",
   "options": [
    "95%",
    "0%",
    "50%",
    "5%"
   ],
   "answer": 0,
   "why": "Negative selection."
  },
  {
   "q": "The thymus is located in the:",
   "options": [
    "Neck only",
    "Anterior mediastinum",
    "Posterior mediastinum",
    "Abdomen"
   ],
   "answer": 1,
   "why": "Base on the pericardium."
  },
  {
   "q": "Positive selection in the thymus ensures:",
   "options": [
    "Antibody production",
    "MHC restriction",
    "Class switching",
    "Self-tolerance"
   ],
   "answer": 1,
   "why": "Occurs in the cortex."
  },
  {
   "q": "Negative selection in the thymus ensures:",
   "options": [
    "Memory",
    "Diversity",
    "MHC restriction",
    "Self-tolerance"
   ],
   "answer": 3,
   "why": "Occurs in the medulla."
  },
  {
   "q": "Thymic hormones peak at:",
   "options": [
    "Old age",
    "Puberty",
    "Birth",
    "Age 50"
   ],
   "answer": 1,
   "why": "Then decline with involution."
  },
  {
   "q": "T cells represent about what share of blood lymphocytes?",
   "options": [
    "75%",
    "5-15%",
    "25%",
    "100%"
   ],
   "answer": 0,
   "why": "B cells 5-15%."
  },
  {
   "q": "The main antibody of mucosal immunity is:",
   "options": [
    "Secretory IgA",
    "IgE",
    "IgG",
    "IgD"
   ],
   "answer": 0,
   "why": "MALT."
  },
  {
   "q": "The paracortex of a lymph node is rich in:",
   "options": [
    "B cells",
    "Red cells",
    "Plasma cells only",
    "T cells"
   ],
   "answer": 3,
   "why": "Thymus-dependent zone."
  },
  {
   "q": "Secondary follicles appear:",
   "options": [
    "Before any antigen",
    "After 1 year",
    "Only in the thymus",
    "3-5 days after antigen encounter"
   ],
   "answer": 3,
   "why": "With germinal centres."
  },
  {
   "q": "Peyer patches belong to:",
   "options": [
    "GALT",
    "The spleen",
    "BALT",
    "The thymus"
   ],
   "answer": 0,
   "why": "Gut-associated lymphoid tissue."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "bm",
   "options": [
    "Thymus",
    "Bone marrow",
    "Lymph nodes",
    "Circulation"
   ],
   "answer": 1,
   "why": "The arrow points to: Bone marrow. Primary organ: stem-cell reservoir, B-cell maturation with BCR gene rearrangement and negative selection; houses plasma cells."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "thy",
   "options": [
    "Spleen",
    "Lymph nodes",
    "Thymus",
    "Bone marrow"
   ],
   "answer": 2,
   "why": "The arrow points to: Thymus. Primary organ in the anterior mediastinum: T-cell maturation, positive (cortex) and negative (medulla) selection."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "blood",
   "options": [
    "Lymph nodes",
    "Thymus",
    "Circulation",
    "Spleen"
   ],
   "answer": 2,
   "why": "The arrow points to: Circulation. Blood and lymphatic vessels connect all lymphoid organs into one network."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ln",
   "options": [
    "Circulation",
    "Lymph nodes",
    "Thymus",
    "Spleen"
   ],
   "answer": 1,
   "why": "The arrow points to: Lymph nodes. ~1,000 reniform nodes filtering lymph; cortex (B follicles), paracortex (T cells), medulla."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "sp",
   "options": [
    "Spleen",
    "Circulation",
    "MALT",
    "Lymph nodes"
   ],
   "answer": 0,
   "why": "The arrow points to: Spleen. Filters blood; protects the vascular compartment; IgG and IgM responses."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "malt",
   "options": [
    "Circulation",
    "Lymph nodes",
    "MALT",
    "Bone marrow"
   ],
   "answer": 2,
   "why": "The arrow points to: MALT. Mucosal defence (digestive GALT, bronchial BALT); mainly secretory IgA."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Primary vs secondary lymphoid organs?",
   "back": "Primary: bone marrow (B), thymus (T): maturation and selection. Secondary: lymph nodes, spleen, MALT: antigen encounter and immune responses."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Functions of bone marrow?",
   "back": "Stem-cell reservoir, B-cell maturation, home of plasma cells."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Consequences of gene rearrangement?",
   "back": "Diversity from few genes, cell-specific receptor, irreversible and inherited."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "B-cell negative selection?",
   "back": "Self-reactive BCR → receptor editing → apoptosis; ~95% die; less strict than thymic selection."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Thymic positive vs negative selection?",
   "back": "Positive (cortex): TCR recognises self-MHC → MHC restriction. Negative (medulla): high-affinity self-recognition → apoptosis → tolerance."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Thymic involution?",
   "back": "Hormones peak at puberty then fall; fibro-fatty replacement; memory T cells maintain numbers."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Systemic vs mucosal compartments?",
   "back": "Systemic (spleen, lymph nodes): IgG, IgM. Mucosal (MALT: GALT, BALT): secretory IgA."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Lymph node zones?",
   "back": "Cortex: B-cell follicles (primary, secondary). Paracortex: T cells. Medulla."
  },
  {
   "id": "img-bm",
   "type": "image",
   "target": "bm",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Bone marrow. Primary organ: stem-cell reservoir, B-cell maturation with BCR gene rearrangement and negative selection; houses plasma cells."
  },
  {
   "id": "img-thy",
   "type": "image",
   "target": "thy",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Thymus. Primary organ in the anterior mediastinum: T-cell maturation, positive (cortex) and negative (medulla) selection."
  },
  {
   "id": "img-blood",
   "type": "image",
   "target": "blood",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Circulation. Blood and lymphatic vessels connect all lymphoid organs into one network."
  },
  {
   "id": "img-ln",
   "type": "image",
   "target": "ln",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Lymph nodes. ~1,000 reniform nodes filtering lymph; cortex (B follicles), paracortex (T cells), medulla."
  },
  {
   "id": "img-sp",
   "type": "image",
   "target": "sp",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Spleen. Filters blood; protects the vascular compartment; IgG and IgM responses."
  },
  {
   "id": "img-malt",
   "type": "image",
   "target": "malt",
   "front": "What is at the arrow, and why does it matter?",
   "back": "MALT. Mucosal defence (digestive GALT, bronchial BALT); mainly secretory IgA."
  }
 ],
 "deeper": [
  {
   "title": "Why most developing lymphocytes are killed",
   "html": "<p>Random gene rearrangement produces receptors against everything, including the body itself. Letting self-reactive cells out would cause autoimmune disease, so the marrow and thymus test each new cell and destroy those that react to self (negative selection), and the thymus also removes T cells unable to recognise self-MHC. Most lymphocytes fail these tests, the price of a diverse but safe repertoire.</p><p class='src'>Source: the lecture's selection slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "Lymphoid organs (Immunopaedia)",
   "url": "https://www.immunopaedia.org.za/",
   "kind": "Website",
   "why": "Structure and function of lymphoid organs.",
   "note": ""
  },
  {
   "title": "T-cell development (NCBI Bookshelf, Janeway)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK27123/",
   "kind": "Book",
   "why": "Thymic selection explained.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Lymphoid organs (Immunopaedia)",
   "url": "https://www.immunopaedia.org.za/"
  },
  {
   "name": "T-cell development (NCBI Bookshelf, Janeway)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK27123/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["immuno1-cells"] = {
 "id": "immuno1-cells",
 "subject": "immuno1",
 "group": "Immunology",
 "title": "Hematopoiesis and cells of the immune system",
 "sourceFile": "ML3 Hematopoiesis and immunity cells (March 2026) (Immunology, Pr. F. Guessous)",
 "sourceUrl": "https://drive.google.com/file/d/1I-DZR7A_Zo93fw_iwSHFg4ZVG78j8Vr0/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p><strong>Hematopoiesis</strong> produces all blood cells, 10¹¹ to 10¹² a day. A pluripotent <strong>hematopoietic stem cell</strong> (self-renewing) gives a <strong>myeloid</strong> and a <strong>lymphoid</strong> progenitor. Stages: pluripotent stem cells → progenitors (identified by colony formation, not morphology) → maturation compartment (acquire morphological features).</p>"
  },
  {
   "id": "s1",
   "title": "Myeloid lineage (innate immunity)",
   "html": "<p>First responders to infection. <strong>Granulocytes</strong> (multilobed nucleus, granular cytoplasm): <strong>neutrophils</strong> (~<strong>60%</strong> of WBC, trilobed, <strong>36 h</strong> lifespan; azurophilic granules with myeloperoxidase and hydrolases, specific granules with lactoferrin and lysozyme; <strong>phagocytosis</strong>), <strong>eosinophils</strong> (2-5%, bilobed, crystalloid granules; <strong>allergy and parasites</strong>), <strong>basophils</strong> (< 1%, histamine and heparin; become <strong>mast cells</strong> in tissues; <strong>immediate hypersensitivity</strong>). <strong>Monocytes/macrophages</strong> (15 µm, horseshoe nucleus, lysosomes): phagocytosis, carry antigen to regional lymph nodes; express complement receptors and <strong>HLA-DR</strong> (antigen presentation), produce <strong>lysozyme</strong>, <strong>TNF</strong> (cytotoxic to tumour cells) and <strong>IL-1</strong> (T-cell activation, <strong>fever</strong>, acute-phase proteins). Also <strong>dendritic cells</strong>, <strong>erythrocytes</strong> and <strong>megakaryocytes</strong> (platelets).</p>"
  },
  {
   "id": "s2",
   "title": "Lymphoid lineage",
   "html": "<p>Lymphocytes are <strong>20-40%</strong> of circulating WBC and <strong>99%</strong> of lymph cells: B, T and NK cells. <strong>NK cells</strong> (up to 15% of blood lymphocytes): no TCR or BCR; a balance of <strong>activating and inhibiting receptors</strong>; anti-tumour and anti-infectious; kill by <strong>natural cytotoxicity</strong> (perforin/granzyme, Fas ligand, TRAIL), <strong>ADCC</strong> (Fc receptor binds antibody on a target) and <strong>cytokines</strong> (IFN-γ, activate macrophages and dendritic cells). <strong>NKT cells</strong>: NK markers (CD56, CD16) plus TCR/CD3 with a very conserved TCR; ~30% of liver T cells. <strong>γδ T cells</strong>: 1-5% of blood lymphocytes but ~50% of T cells in epithelia (gut, skin); limited repertoire; not restricted to classical MHC. NK, NKT and γδ T cells sit at the <strong>innate-adaptive interface</strong>. <strong>Adaptive cells</strong>: <strong>B cells</strong> (antibodies against extracellular microbes), <strong>CD4 helper T</strong>, <strong>CD8 cytotoxic T</strong> (intracellular germs), <strong>regulatory T</strong>. T cells mature in the thymus from <strong>double-negative</strong> (CD4⁻CD8⁻) to <strong>double-positive</strong> (CD4⁺CD8⁺) with a TCR, then single-positive.</p>"
  }
 ],
 "exam": [
  "Hematopoiesis: 10¹¹-10¹² cells/day from a self-renewing stem cell.",
  "Myeloid progenitor → granulocytes, monocytes/macrophages, dendritic cells, RBC, platelets.",
  "Neutrophils ~60% of WBC, 36 h, phagocytosis.",
  "Eosinophils 2-5%: allergy, parasites. Basophils < 1%: histamine; mast cells.",
  "Macrophages: HLA-DR, lysozyme, TNF, IL-1 (fever).",
  "Lymphocytes 20-40% of WBC, 99% of lymph cells.",
  "NK: no TCR/BCR; natural cytotoxicity, ADCC, IFN-γ.",
  "NKT: NK + T markers (liver); γδ T: epithelia.",
  "B: antibodies; CD4 helper; CD8 cytotoxic; regulatory T.",
  "Thymocytes: DN → DP → single positive."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "From stem cell to immune cells",
   "caption": "Myeloid and lymphoid lineages. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"47\" x2=\"100\" y2=\"135\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"47\" x2=\"460\" y2=\"135\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"200\" y1=\"160\" x2=\"110\" y2=\"200\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"300\" y1=\"135\" x2=\"210\" y2=\"230\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"560\" y1=\"160\" x2=\"485\" y2=\"200\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"660\" y1=\"135\" x2=\"580\" y2=\"230\"/>",
   "parts": {
    "hsc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"280\" y=\"20\" width=\"200\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Hematopoietic stem cell",
      "(self-renewal)"
     ],
     "lx": 380.0,
     "ly": 45.5
    },
    "mye": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"100\" y=\"110\" width=\"200\" height=\"50\" rx=\"10\"/>",
     "label": [
      "Myeloid progenitor"
     ],
     "lx": 200.0,
     "ly": 141.0
    },
    "lym": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"460\" y=\"110\" width=\"200\" height=\"50\" rx=\"10\"/>",
     "label": [
      "Lymphoid progenitor"
     ],
     "lx": 560.0,
     "ly": 141.0
    },
    "gran": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"20\" y=\"200\" width=\"180\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Neutrophils, eosinophils,",
      "basophils/mast cells"
     ],
     "lx": 110.0,
     "ly": 228.0
    },
    "mono": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"210\" y=\"200\" width=\"180\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Monocytes → macrophages,",
      "dendritic cells; RBC, platelets"
     ],
     "lx": 300.0,
     "ly": 228.0
    },
    "bt": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"400\" y=\"200\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "B cells → plasma cells;",
      "T cells (CD4, CD8)"
     ],
     "lx": 485.0,
     "ly": 228.0
    },
    "nk": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9ecec\" x=\"580\" y=\"200\" width=\"150\" height=\"60\" rx=\"10\"/>",
     "label": [
      "NK, NKT,",
      "γδ T cells"
     ],
     "lx": 655.0,
     "ly": 228.0
    }
   },
   "arrows": {
    "hsc": [
     {
      "t": [
       280.0,
       28.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "mye": [
     {
      "t": [
       100.0,
       118.0
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
       460.0,
       118.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "gran": [
     {
      "t": [
       20.0,
       208.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "mono": [
     {
      "t": [
       210.0,
       208.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "bt": [
     {
      "t": [
       400.0,
       208.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "nk": [
     {
      "t": [
       580.0,
       208.0
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
   "q": "How many blood cells does hematopoiesis produce daily?",
   "options": [
    "10¹¹-10¹²",
    "10⁹",
    "10⁶",
    "10¹⁵"
   ],
   "answer": 0,
   "why": "Continuous renewal."
  },
  {
   "q": "A hematopoietic stem cell is characterised by:",
   "options": [
    "Self-renewal and multipotency",
    "Antibody secretion",
    "No division",
    "Only red cell production"
   ],
   "answer": 0,
   "why": "Gives two progenitors."
  },
  {
   "q": "Which cells are the first to respond to infection?",
   "options": [
    "Memory T cells",
    "Myeloid cells",
    "Plasma cells",
    "B cells"
   ],
   "answer": 1,
   "why": "Innate immunity."
  },
  {
   "q": "Neutrophils represent about what share of circulating WBC?",
   "options": [
    "60%",
    "1%",
    "90%",
    "5%"
   ],
   "answer": 0,
   "why": "Lifespan ~36 h."
  },
  {
   "q": "Eosinophils are mainly involved in:",
   "options": [
    "Viral infection",
    "Antibody production",
    "Clotting",
    "Allergy and parasitic diseases"
   ],
   "answer": 3,
   "why": "2-5% of WBC."
  },
  {
   "q": "Which cell becomes a mast cell in tissues?",
   "options": [
    "Monocyte",
    "Basophil",
    "Neutrophil",
    "NK cell"
   ],
   "answer": 1,
   "why": "Histamine, heparin."
  },
  {
   "q": "Macrophages present antigen to T cells using:",
   "options": [
    "Histamine",
    "HLA-DR (MHC class II)",
    "Perforin",
    "Lysozyme"
   ],
   "answer": 1,
   "why": "Antigen-presenting cells."
  },
  {
   "q": "Which monocyte product is a pyrogen?",
   "options": [
    "Lysozyme",
    "Myeloperoxidase",
    "Heparin",
    "IL-1"
   ],
   "answer": 3,
   "why": "Also induces acute-phase proteins."
  },
  {
   "q": "NK cells lack:",
   "options": [
    "Fc receptors",
    "TCR and BCR",
    "Cytotoxicity",
    "Granzymes"
   ],
   "answer": 1,
   "why": "They are not T or B cells."
  },
  {
   "q": "ADCC by NK cells requires:",
   "options": [
    "Complement only",
    "A TCR",
    "Target-bound antibody",
    "MHC class II"
   ],
   "answer": 2,
   "why": "Via the Fc receptor."
  },
  {
   "q": "NKT cells are especially abundant in the:",
   "options": [
    "Brain",
    "Blood",
    "Kidney",
    "Liver"
   ],
   "answer": 3,
   "why": "~30% of T cells there."
  },
  {
   "q": "γδ T cells are abundant in:",
   "options": [
    "Bone marrow",
    "Thymus only",
    "Blood (50%)",
    "Epithelia (gut, skin)"
   ],
   "answer": 3,
   "why": "Not restricted to classical MHC."
  },
  {
   "q": "CD8 T cells mainly:",
   "options": [
    "Destroy infected cells",
    "Help B cells",
    "Make antibodies",
    "Phagocytose"
   ],
   "answer": 0,
   "why": "Cytotoxic."
  },
  {
   "q": "In the thymus, immature thymocytes are first:",
   "options": [
    "CD8⁺ only",
    "Double negative",
    "CD4⁺ only",
    "CD4⁺CD8⁺"
   ],
   "answer": 1,
   "why": "Then double positive."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "hsc",
   "options": [
    "Lymphoid progenitor",
    "Granulocytes",
    "Hematopoietic stem cell",
    "Myeloid progenitor"
   ],
   "answer": 2,
   "why": "The arrow points to: Hematopoietic stem cell. Pluripotent, self-renewing; gives lymphoid and myeloid progenitors; 10¹¹-10¹² blood cells a day."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "mye",
   "options": [
    "Myeloid progenitor",
    "Granulocytes",
    "Hematopoietic stem cell",
    "Monocytes/macrophages and others"
   ],
   "answer": 0,
   "why": "The arrow points to: Myeloid progenitor. First responders to infection."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "lym",
   "options": [
    "Granulocytes",
    "Innate-like lymphocytes",
    "Lymphoid progenitor",
    "Myeloid progenitor"
   ],
   "answer": 2,
   "why": "The arrow points to: Lymphoid progenitor. Regulates adaptive immunity."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "gran",
   "options": [
    "Lymphoid progenitor",
    "Monocytes/macrophages and others",
    "Granulocytes",
    "Adaptive lymphocytes"
   ],
   "answer": 2,
   "why": "The arrow points to: Granulocytes. Neutrophils (60% of WBC, 36 h, phagocytosis), eosinophils (2-5%, allergy and parasites), basophils (< 1%, histamine, heparin; mast cells in tissues)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "mono",
   "options": [
    "Monocytes/macrophages and others",
    "Hematopoietic stem cell",
    "Lymphoid progenitor",
    "Granulocytes"
   ],
   "answer": 0,
   "why": "The arrow points to: Monocytes/macrophages and others. Phagocytic antigen-presenting cells; also erythrocytes and megakaryocytes (platelets)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "bt",
   "options": [
    "Myeloid progenitor",
    "Hematopoietic stem cell",
    "Adaptive lymphocytes",
    "Monocytes/macrophages and others"
   ],
   "answer": 2,
   "why": "The arrow points to: Adaptive lymphocytes. B cells make antibodies; CD4 helper, CD8 cytotoxic, regulatory T cells."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "nk",
   "options": [
    "Innate-like lymphocytes",
    "Adaptive lymphocytes",
    "Granulocytes",
    "Myeloid progenitor"
   ],
   "answer": 0,
   "why": "The arrow points to: Innate-like lymphocytes. NK (no TCR/BCR), NKT (NK + T markers, liver), γδ T cells (epithelia), at the innate-adaptive interface."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Hematopoietic stem cell?",
   "back": "Pluripotent, self-renewing; gives lymphoid and myeloid progenitors; 10¹¹-10¹² cells/day."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Myeloid lineage cells?",
   "back": "Granulocytes (neutrophils, eosinophils, basophils/mast cells), monocytes/macrophages, dendritic cells, erythrocytes, megakaryocytes."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Granulocyte percentages and roles?",
   "back": "Neutrophils ~60% (phagocytosis), eosinophils 2-5% (allergy, parasites), basophils < 1% (histamine, immediate hypersensitivity)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Macrophage products?",
   "back": "HLA-DR (antigen presentation), lysozyme, lysosomal hydrolases, TNF, IL-1 (fever, acute phase)."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "NK cell mechanisms?",
   "back": "Natural cytotoxicity (perforin/granzyme, Fas-L, TRAIL), ADCC via Fc receptor, cytokines (IFN-γ)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "NKT and γδ T cells?",
   "back": "NKT: NK + T markers, conserved TCR, liver. γδ T: epithelia, limited repertoire, not classical-MHC restricted."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Adaptive immune cells?",
   "back": "B cells (antibodies), CD4 helper T, CD8 cytotoxic T, regulatory T."
  },
  {
   "id": "img-hsc",
   "type": "image",
   "target": "hsc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Hematopoietic stem cell. Pluripotent, self-renewing; gives lymphoid and myeloid progenitors; 10¹¹-10¹² blood cells a day."
  },
  {
   "id": "img-mye",
   "type": "image",
   "target": "mye",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Myeloid progenitor. First responders to infection."
  },
  {
   "id": "img-lym",
   "type": "image",
   "target": "lym",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Lymphoid progenitor. Regulates adaptive immunity."
  },
  {
   "id": "img-gran",
   "type": "image",
   "target": "gran",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Granulocytes. Neutrophils (60% of WBC, 36 h, phagocytosis), eosinophils (2-5%, allergy and parasites), basophils (< 1%, histamine, heparin; mast cells in tissues)."
  },
  {
   "id": "img-mono",
   "type": "image",
   "target": "mono",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Monocytes/macrophages and others. Phagocytic antigen-presenting cells; also erythrocytes and megakaryocytes (platelets)."
  },
  {
   "id": "img-bt",
   "type": "image",
   "target": "bt",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Adaptive lymphocytes. B cells make antibodies; CD4 helper, CD8 cytotoxic, regulatory T cells."
  },
  {
   "id": "img-nk",
   "type": "image",
   "target": "nk",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Innate-like lymphocytes. NK (no TCR/BCR), NKT (NK + T markers, liver), γδ T cells (epithelia), at the innate-adaptive interface."
  }
 ],
 "deeper": [
  {
   "title": "How NK cells spot abnormal cells",
   "html": "<p>NK cells carry inhibitory receptors that recognise normal MHC class I on healthy cells. Many viruses and tumours reduce MHC class I to hide from CD8 T cells; this removes the brake, and if activating signals dominate, the NK cell kills. The two systems cover each other's blind spots.</p><p class='src'>Source: the lecture's NK cell receptor balance slide.</p>"
  }
 ],
 "resources": [
  {
   "title": "Cells of the immune system (Immunopaedia)",
   "url": "https://www.immunopaedia.org.za/",
   "kind": "Website",
   "why": "Innate and adaptive immune cells.",
   "note": ""
  },
  {
   "title": "Hematopoiesis (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK534246/",
   "kind": "Book",
   "why": "Stem cells and lineages.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Cells of the immune system (Immunopaedia)",
   "url": "https://www.immunopaedia.org.za/"
  },
  {
   "name": "Hematopoiesis (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK534246/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["immuno1-antigens"] = {
 "id": "immuno1-antigens",
 "subject": "immuno1",
 "group": "Immunology",
 "title": "Antigens",
 "sourceFile": "ML4 Antigens (March 2026) (Immunology, Pr. F. Guessous)",
 "sourceUrl": "https://drive.google.com/file/d/1OG5NbLGWZEWdZdKRnkBKkUyry3IHXvWt/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p><strong>Immunity</strong> is the set of mechanisms by which an organism <strong>recognises and tolerates self</strong> and <strong>recognises and rejects non-self</strong> (foreign substances, infectious agents, modified self); it can be innate or adaptive, active or passive. An <strong>antigen</strong> ('antibody generator') is any natural, artificial or synthetic molecule able to induce an immune response and to <strong>react specifically</strong> with its products (antibodies, BCR, TCR).</p>"
  },
  {
   "id": "s1",
   "title": "Antigenicity and immunogenicity",
   "html": "<p><strong>Antigenicity</strong>: being recognised by immune effectors (in vivo and in vitro). <strong>Immunogenicity</strong>: triggering a T and/or B response in vivo. <strong>All immunogens are antigens, but not all antigens are immunogens.</strong> Factors: <strong>taxonomic distance</strong> ('foreignness': chicken albumin is strongly immunogenic in humans, human albumin not at all); <strong>molecular weight</strong> (cutoff about <strong>3-5 kDa</strong>); <strong>rigidity</strong>, <strong>mobility</strong> and <strong>complexity</strong> (e.g. glycosylation); chemical nature: <strong>proteins > carbohydrates > lipids > nucleic acids</strong> (pure DNA is not immunogenic experimentally; lipids may act as haptens); <strong>host genetics</strong> (immune response genes in the MHC class II region); <strong>dose</strong> (ng: low-dose tolerance; µg: few but high-affinity antibodies; mg: response rises with dose; very high: immune paralysis) and route.</p>"
  },
  {
   "id": "s2",
   "title": "Epitopes and haptens",
   "html": "<p>An <strong>epitope (antigenic determinant)</strong> is the active part binding the complementary <strong>paratope</strong>; an antigen is a <strong>mosaic of epitopes</strong>, and the same epitope can occur on different antigens (cross-reaction). Size: 1-3 nm, about 15-18 amino acids or 5-6 sugars (smallest: 3 amino acids). <strong>Linear (continuous)</strong> epitopes are consecutive amino acids; most protein epitopes are <strong>conformational (discontinuous)</strong>, formed by folding and lost on denaturation. <strong>B cells</strong> recognise native antigen with membrane immunoglobulin; <strong>T cells</strong> only recognise peptides presented by <strong>MHC</strong> on antigen-presenting cells. A <strong>hapten</strong> is a small molecule with one epitope, <strong>antigenic but not immunogenic</strong>; coupled to a <strong>carrier</strong> protein it induces anti-hapten and anti-carrier antibodies.</p>"
  },
  {
   "id": "s3",
   "title": "Superantigens and natural antigens",
   "html": "<p><strong>Superantigens</strong> (bacterial: <strong>staphylococcal enterotoxins, toxic shock syndrome toxin</strong>; viral: e.g. rabies nucleocapsid) activate T cells <strong>polyclonally</strong>, causing massive release of IL-2, TNF-α and IFN-γ. Natural antigens: <strong>alloantigens</strong> (differ within a species, e.g. ABO; the <strong>Bombay (Oh) phenotype</strong> lacks H antigen and has anti-H antibodies), <strong>xenoantigens</strong> (between species), <strong>autoantigens</strong> (self). Microbial antigens: bacterial <strong>capsule</strong> polysaccharides (pneumococcus), cell wall components (M protein, teichoic acids), <strong>flagella</strong>, exotoxins (tetanus, diphtheria); viral capsid, soluble and haemagglutinin antigens; parasitic somatic and metabolic antigens. Antigens are also classified as <strong>T-dependent</strong> (proteins, needing T help) or <strong>T-independent</strong> (repetitive polysaccharides).</p>"
  }
 ],
 "exam": [
  "Immunity: tolerate self, reject non-self.",
  "Antigen: induces a response and reacts specifically with its products.",
  "Antigenicity (recognition) vs immunogenicity (triggering a response).",
  "All immunogens are antigens; not all antigens are immunogens.",
  "Immunogenicity: foreignness, size > 3-5 kDa, rigidity, complexity.",
  "Proteins > carbohydrates > lipids > nucleic acids.",
  "Dose: ng tolerance; µg high affinity; very high paralysis.",
  "Epitope binds paratope; linear vs conformational.",
  "B cells see native antigen; T cells see peptide + MHC.",
  "Hapten + carrier → immunogenic.",
  "Superantigens: polyclonal T activation, cytokine storm.",
  "Allo-, xeno-, autoantigens; Bombay phenotype."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Antigen, epitope, hapten",
   "caption": "What makes a molecule immunogenic. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"240\" y1=\"70\" x2=\"280\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"240\" y1=\"200\" x2=\"280\" y2=\"200\"/>",
   "parts": {
    "ag": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"40\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Antigen = mosaic of",
      "epitopes"
     ],
     "lx": 140.0,
     "ly": 68.0
    },
    "ep": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"280\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Epitope ↔ paratope",
      "(1-3 nm, 15-18 aa)"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "imm": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"520\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Immunogen: antigenic",
      "+ induces a response"
     ],
     "lx": 620.0,
     "ly": 68.0
    },
    "hap": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"40\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Hapten: antigenic but",
      "not immunogenic"
     ],
     "lx": 140.0,
     "ly": 198.0
    },
    "car": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"280\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Hapten + carrier protein",
      "→ immunogenic"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "sag": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"520\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Superantigen: polyclonal",
      "T activation, cytokine storm"
     ],
     "lx": 620.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "ag": [
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
    "ep": [
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
    "imm": [
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
    "hap": [
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
    "car": [
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
    "sag": [
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
  }
 },
 "mcqs": [
  {
   "q": "Immunity is defined as mechanisms that:",
   "options": [
    "Cause inflammation",
    "Only kill microbes",
    "Tolerate self, reject non-self",
    "Produce antibodies only"
   ],
   "answer": 2,
   "why": "Innate or adaptive."
  },
  {
   "q": "Immunogenicity means the ability to:",
   "options": [
    "Bind MHC",
    "Be recognised in vitro",
    "Cause allergy",
    "Trigger an immune response in vivo"
   ],
   "answer": 3,
   "why": "Antigenicity = recognition."
  },
  {
   "q": "Which statement is correct?",
   "options": [
    "Lipids are the most immunogenic",
    "All antigens are immunogens",
    "Haptens are immunogens",
    "All immunogens are antigens"
   ],
   "answer": 3,
   "why": "Not all antigens are immunogens."
  },
  {
   "q": "The approximate molecular weight cutoff for immunogenicity is:",
   "options": [
    "3-5 kDa",
    "100 kDa",
    "300 Da",
    "1 MDa"
   ],
   "answer": 0,
   "why": "Larger molecules are more immunogenic."
  },
  {
   "q": "Rank of immunogenicity by chemical nature:",
   "options": [
    "Lipids > proteins",
    "Carbohydrates > proteins",
    "Proteins first",
    "Nucleic acids > proteins"
   ],
   "answer": 2,
   "why": "Proteins are the most immunogenic."
  },
  {
   "q": "Very low (ng) antigen doses tend to induce:",
   "options": [
    "Strong response",
    "Allergy",
    "Tolerance",
    "Paralysis"
   ],
   "answer": 2,
   "why": "Very high doses cause paralysis."
  },
  {
   "q": "The part of an antibody binding the epitope is the:",
   "options": [
    "Hinge",
    "Paratope",
    "Carrier",
    "Fc"
   ],
   "answer": 1,
   "why": "Complementary site."
  },
  {
   "q": "Most protein epitopes are:",
   "options": [
    "Nucleic",
    "Conformational",
    "Lipidic",
    "Linear"
   ],
   "answer": 1,
   "why": "Lost when the protein is denatured."
  },
  {
   "q": "T cells recognise antigen:",
   "options": [
    "As peptides presented by MHC",
    "Only as haptens",
    "Free in solution",
    "Only carbohydrates"
   ],
   "answer": 0,
   "why": "B cells see native antigen."
  },
  {
   "q": "A hapten is:",
   "options": [
    "Antigenic only",
    "A carrier protein",
    "A superantigen",
    "Immunogenic alone"
   ],
   "answer": 0,
   "why": "Needs a carrier."
  },
  {
   "q": "Staphylococcal enterotoxins act as:",
   "options": [
    "Autoantigens",
    "Superantigens",
    "Haptens",
    "Adjuvants"
   ],
   "answer": 1,
   "why": "Polyclonal T activation."
  },
  {
   "q": "ABO blood group antigens are examples of:",
   "options": [
    "Haptens",
    "Autoantigens",
    "Xenoantigens",
    "Alloantigens"
   ],
   "answer": 3,
   "why": "Differences within a species."
  },
  {
   "q": "Individuals with the Bombay phenotype lack:",
   "options": [
    "Rh antigen",
    "H antigen",
    "MHC",
    "A antigen only"
   ],
   "answer": 1,
   "why": "They have anti-H antibodies."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ag",
   "options": [
    "Antigen",
    "Hapten",
    "Immunogenicity",
    "Epitope"
   ],
   "answer": 0,
   "why": "The arrow points to: Antigen. Any molecule inducing an immune response and reacting specifically with its products (antibody, BCR, TCR); usually several epitopes."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ep",
   "options": [
    "Hapten",
    "Hapten-carrier conjugate",
    "Antigen",
    "Epitope"
   ],
   "answer": 3,
   "why": "The arrow points to: Epitope. The part bound by the paratope of an antibody or receptor; linear (continuous) or conformational (discontinuous)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "imm",
   "options": [
    "Hapten",
    "Epitope",
    "Immunogenicity",
    "Hapten-carrier conjugate"
   ],
   "answer": 2,
   "why": "The arrow points to: Immunogenicity. All immunogens are antigens, but not all antigens are immunogens."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "hap",
   "options": [
    "Hapten-carrier conjugate",
    "Hapten",
    "Immunogenicity",
    "Epitope"
   ],
   "answer": 1,
   "why": "The arrow points to: Hapten. Low molecular weight antigen (one epitope) that cannot trigger a response alone."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "car",
   "options": [
    "Hapten-carrier conjugate",
    "Superantigens",
    "Immunogenicity",
    "Hapten"
   ],
   "answer": 0,
   "why": "The arrow points to: Hapten-carrier conjugate. Bound to a protein carrier, the hapten induces anti-hapten and anti-carrier antibodies."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "sag",
   "options": [
    "Hapten",
    "Antigen",
    "Superantigens",
    "Immunogenicity"
   ],
   "answer": 2,
   "why": "The arrow points to: Superantigens. Staphylococcal enterotoxins, TSS toxin: activate many T cells at once, causing massive IL-2, TNF-α, IFN-γ release."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Define antigen.",
   "back": "Any natural, artificial or synthetic molecule that induces an immune response and reacts specifically with its products (antibody, BCR, TCR)."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Antigenicity vs immunogenicity?",
   "back": "Antigenicity: recognition by immune effectors. Immunogenicity: ability to trigger a response in vivo. All immunogens are antigens, not the reverse."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Factors affecting immunogenicity?",
   "back": "Foreignness, size (> 3-5 kDa), rigidity, complexity, chemical nature, host genes (MHC II), dose, route."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Epitope features?",
   "back": "Binds paratope; 1-3 nm, 15-18 aa or 5-6 sugars; linear or conformational; antigen = mosaic of epitopes."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "B vs T cell recognition?",
   "back": "B: native antigen via membrane Ig. T: processed peptide presented by MHC on APCs."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Hapten?",
   "back": "Small single-epitope molecule, antigenic but not immunogenic; immunogenic when bound to a carrier."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Superantigens?",
   "back": "Staph enterotoxins, TSS toxin: polyclonal T activation, massive IL-2, TNF-α, IFN-γ."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Allo-, xeno-, autoantigens?",
   "back": "Allo: within species (ABO). Xeno: between species. Auto: self."
  },
  {
   "id": "img-ag",
   "type": "image",
   "target": "ag",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Antigen. Any molecule inducing an immune response and reacting specifically with its products (antibody, BCR, TCR); usually several epitopes."
  },
  {
   "id": "img-ep",
   "type": "image",
   "target": "ep",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Epitope. The part bound by the paratope of an antibody or receptor; linear (continuous) or conformational (discontinuous)."
  },
  {
   "id": "img-imm",
   "type": "image",
   "target": "imm",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Immunogenicity. All immunogens are antigens, but not all antigens are immunogens."
  },
  {
   "id": "img-hap",
   "type": "image",
   "target": "hap",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Hapten. Low molecular weight antigen (one epitope) that cannot trigger a response alone."
  },
  {
   "id": "img-car",
   "type": "image",
   "target": "car",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Hapten-carrier conjugate. Bound to a protein carrier, the hapten induces anti-hapten and anti-carrier antibodies."
  },
  {
   "id": "img-sag",
   "type": "image",
   "target": "sag",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Superantigens. Staphylococcal enterotoxins, TSS toxin: activate many T cells at once, causing massive IL-2, TNF-α, IFN-γ release."
  }
 ],
 "deeper": [
  {
   "title": "Why some drugs cause allergy although they are tiny",
   "html": "<p>Drugs like penicillin are far too small to be immunogenic on their own; they act as haptens. Once they bind covalently to the patient's own proteins, the hapten-carrier complex is seen as foreign and can trigger antibodies, including IgE. That is how a small molecule can cause a serious allergic reaction.</p><p class='src'>Source: the lecture's hapten and carrier concept.</p>"
  }
 ],
 "resources": [
  {
   "title": "Antigens (Immunopaedia)",
   "url": "https://www.immunopaedia.org.za/",
   "kind": "Website",
   "why": "Antigens and epitopes.",
   "note": ""
  },
  {
   "title": "Superantigens (NCBI StatPearls: toxic shock syndrome)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK459345/",
   "kind": "Book",
   "why": "Clinical example of superantigen disease.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Antigens (Immunopaedia)",
   "url": "https://www.immunopaedia.org.za/"
  },
  {
   "name": "Superantigens (NCBI StatPearls: toxic shock syndrome)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK459345/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["immuno1-immunoglobulins"] = {
 "id": "immuno1-immunoglobulins",
 "subject": "immuno1",
 "group": "Immunology",
 "title": "Immunoglobulins and antibody functions",
 "sourceFile": "ML5 Immunoglobulins and antibodies (March 2026) (Immunology, Pr. F. Guessous)",
 "sourceUrl": "https://drive.google.com/file/d/1Q4LNGStk2g91IE6KidmvEESadRuxi2zp/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p><strong>Immunoglobulins (Ig)</strong> are glycoproteins made by B cells, soluble or membrane-bound (the BCR); 'immunoglobulin' refers to the structure and 'antibody' to the function. They are <strong>bifunctional</strong>: variable regions recognise an almost infinite range of epitopes, while a common Fc region interacts with a limited set of molecules (Fc receptors, complement, signalling molecules).</p>"
  },
  {
   "id": "s1",
   "title": "Structure",
   "html": "<p>Each Ig has <strong>2 heavy chains</strong> (μ, γ, α, δ, ε) and <strong>2 light chains</strong> (κ or λ), each with variable and constant regions. Intrachain disulfide bridges form ~110-amino-acid <strong>domains</strong>: heavy chains have 4 (5 in IgM and IgE), light chains 2. <strong>Papain</strong> cuts at the hinge into <strong>2 Fab</strong> (antigen recognition) and <strong>1 Fc</strong> (effector binding, complement, placental transfer, catabolism). Five <strong>classes</strong> by heavy chain; <strong>4 IgG subclasses</strong> and <strong>2 IgA subclasses</strong>. Variable domains have conserved <strong>framework</strong> regions carrying <strong>hypervariable loops (CDR1-3)</strong> at the tip, which contact the antigen and create diversity. Antigen-antibody binding is <strong>non-covalent</strong>: electrostatic, hydrogen bonds, Van der Waals and hydrophobic forces. Functions: BCR (sensing antigen, signalling); secreted antibody: <strong>neutralisation</strong>, <strong>recruiting effector cells</strong>, <strong>complement fixation</strong>.</p>"
  },
  {
   "id": "s2",
   "title": "The five classes",
   "html": "<p><strong>IgM</strong>: monomer on B cells (BCR); secreted as a <strong>pentamer</strong> with a <strong>J chain</strong> (extra CH4 domain, no hinge, 10 binding sites); ~10% of serum Ig, mainly intravascular, half-life ~5 days; <strong>first antibody of the primary response</strong>; strongly agglutinating; <strong>most powerful activator of the classical complement pathway</strong> (switches from 'staple' to 'planar' shape on binding antigen); does <strong>not cross the placenta</strong>; the main response to T-independent antigens. <strong>IgG</strong>: main serum class; subclasses IgG1 (45-53%), IgG2, IgG3, IgG4; half-life <strong>21-24 days</strong> (IgG3: 7-8); complement: IgG3 > IgG1 > IgG2, IgG4 none; binds <strong>Fcγ receptors</strong> on phagocytes (opsonisation) and NK cells (FcγRIII, ADCC); <strong>crosses the placenta</strong>. <strong>IgA</strong>: ~12% of serum Ig, half-life ~6 days; serum IgA is monomeric (mainly IgA1, from marrow B cells); <strong>secretory IgA</strong> is a <strong>dimer</strong> with J chain and <strong>secretory component</strong> (from the poly-Ig receptor, transported by <strong>transcytosis</strong>), predominant in tears, saliva, colostrum, mucus (mainly IgA2); neutralises, does not activate the classical pathway, little inflammation: <strong>mucosal immunity</strong>. <strong>IgD</strong>: 0.25% of serum Ig, half-life 2.8 days, sensitive to proteolysis; mainly a B-cell membrane receptor, no known effector function. <strong>IgE</strong>: trace levels; binds mast cells and basophils; <strong>allergy</strong> and anti-parasite immunity.</p>"
  }
 ],
 "exam": [
  "Ig = structure; antibody = function; made by B cells, soluble or BCR.",
  "2 heavy (μ, γ, α, δ, ε) + 2 light (κ, λ) chains.",
  "Domains ~110 aa: heavy 4 (IgM, IgE 5), light 2.",
  "Papain → 2 Fab (recognition) + 1 Fc (effector).",
  "CDRs on a framework create diversity.",
  "Non-covalent Ag-Ab binding.",
  "IgM: pentamer + J chain, first response, best complement activator, no placenta.",
  "IgG: main serum Ig, half-life ~3 weeks, crosses placenta, opsonisation, ADCC.",
  "IgA: secretory dimer + J chain + secretory component; mucosal immunity.",
  "IgD: B-cell receptor; IgE: mast cells, allergy, parasites."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Structure of an immunoglobulin",
   "caption": "Two heavy + two light chains; Fab recognises, Fc acts. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"240\" y1=\"70\" x2=\"280\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"70\" x2=\"520\" y2=\"70\"/>",
   "parts": {
    "fab": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"40\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Fab (×2): variable",
      "domains, CDRs bind epitope"
     ],
     "lx": 140.0,
     "ly": 68.0
    },
    "hinge": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"280\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Hinge",
      "(papain cleaves)"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "fc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"520\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Fc: complement, Fc",
      "receptors, placenta, catabolism"
     ],
     "lx": 620.0,
     "ly": 68.0
    },
    "h": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"120\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Heavy chains μ, γ, α, δ, ε",
      "→ IgM, G, A, D, E"
     ],
     "lx": 230.0,
     "ly": 198.0
    },
    "l": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"420\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Light chains κ or λ",
      "(2 domains)"
     ],
     "lx": 530.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "fab": [
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
    "hinge": [
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
    "fc": [
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
    "h": [
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
    "l": [
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
   "root": "Immunoglobulins",
   "branches": [
    [
     "Structure",
     [
      "2 heavy + 2 light",
      "Fab / Fc",
      "CDRs + framework"
     ]
    ],
    [
     "IgM",
     [
      "Pentamer, J chain",
      "First response",
      "Best complement"
     ]
    ],
    [
     "IgG",
     [
      "4 subclasses",
      "Crosses placenta",
      "Opsonisation, ADCC"
     ]
    ],
    [
     "IgA",
     [
      "Secretory dimer",
      "Secretory component",
      "Mucosa"
     ]
    ],
    [
     "IgD / IgE",
     [
      "IgD: BCR",
      "IgE: allergy, parasites"
     ]
    ]
   ]
  }
 },
 "mcqs": [
  {
   "q": "An immunoglobulin consists of:",
   "options": [
    "4 heavy chains",
    "5 light chains",
    "1 heavy + 1 light chain",
    "2 heavy + 2 light chains"
   ],
   "answer": 3,
   "why": "Linked by disulfide bridges."
  },
  {
   "q": "The Ig class is determined by the:",
   "options": [
    "Heavy chain constant region",
    "Variable region",
    "J chain",
    "Light chain"
   ],
   "answer": 0,
   "why": "μ, γ, α, δ, ε."
  },
  {
   "q": "Papain digestion of IgG yields:",
   "options": [
    "Light chains only",
    "F(ab')2 only",
    "1 Fab + 2 Fc",
    "2 Fab + 1 Fc"
   ],
   "answer": 3,
   "why": "Cut at the hinge."
  },
  {
   "q": "Antigen recognition is performed by the:",
   "options": [
    "Secretory component",
    "Fab fragment (variable domains)",
    "Fc fragment",
    "J chain"
   ],
   "answer": 1,
   "why": "CDRs."
  },
  {
   "q": "The CDRs are:",
   "options": [
    "Hinge regions",
    "Hypervariable loops",
    "Constant domains",
    "Complement receptors"
   ],
   "answer": 1,
   "why": "On a framework."
  },
  {
   "q": "Antigen-antibody bonds are:",
   "options": [
    "Peptide bonds",
    "Disulfide bonds",
    "Non-covalent",
    "Covalent"
   ],
   "answer": 2,
   "why": "Electrostatic, H-bonds, Van der Waals, hydrophobic."
  },
  {
   "q": "The secreted form of IgM is a:",
   "options": [
    "Monomer",
    "Pentamer",
    "Trimer",
    "Dimer"
   ],
   "answer": 1,
   "why": "With a J chain."
  },
  {
   "q": "Which Ig is produced first in a primary response?",
   "options": [
    "IgM",
    "IgE",
    "IgG",
    "IgA"
   ],
   "answer": 0,
   "why": "Naive B cells."
  },
  {
   "q": "Which Ig is the best activator of the classical complement pathway?",
   "options": [
    "IgA",
    "IgM",
    "IgD",
    "IgG4"
   ],
   "answer": 1,
   "why": "Pentameric."
  },
  {
   "q": "Which Ig crosses the placenta?",
   "options": [
    "IgG",
    "IgM",
    "IgE",
    "IgA"
   ],
   "answer": 0,
   "why": "Protects the newborn."
  },
  {
   "q": "The half-life of IgG1 is about:",
   "options": [
    "2 days",
    "5 days",
    "100 days",
    "21-24 days"
   ],
   "answer": 3,
   "why": "IgG3 is shorter."
  },
  {
   "q": "Secretory IgA contains:",
   "options": [
    "SC + J chain",
    "Complement",
    "Only a heavy chain",
    "CH4 domain"
   ],
   "answer": 0,
   "why": "Dimer transported by transcytosis."
  },
  {
   "q": "Which Ig predominates in saliva, tears and colostrum?",
   "options": [
    "IgM",
    "Secretory IgA",
    "IgD",
    "IgG"
   ],
   "answer": 1,
   "why": "Mucosal immunity."
  },
  {
   "q": "IgE is mainly involved in:",
   "options": [
    "Placental transfer",
    "Complement activation",
    "Mucosal secretion",
    "Allergy and parasitic immunity"
   ],
   "answer": 3,
   "why": "Binds mast cells."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "fab",
   "options": [
    "Fab fragments",
    "Hinge",
    "Fc fragment",
    "Heavy chains"
   ],
   "answer": 0,
   "why": "The arrow points to: Fab fragments. Variable domains (VH, VL); hypervariable loops (CDR1-3) on a framework contact the epitope."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "hinge",
   "options": [
    "Fab fragments",
    "Light chains",
    "Hinge",
    "Heavy chains"
   ],
   "answer": 2,
   "why": "The arrow points to: Hinge. Papain digestion gives 2 Fab + 1 Fc."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "fc",
   "options": [
    "Fab fragments",
    "Hinge",
    "Fc fragment",
    "Light chains"
   ],
   "answer": 2,
   "why": "The arrow points to: Fc fragment. Constant domains: binding to effector cells, complement fixation, placental transfer, catabolism."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "h",
   "options": [
    "Hinge",
    "Fc fragment",
    "Fab fragments",
    "Heavy chains"
   ],
   "answer": 3,
   "why": "The arrow points to: Heavy chains. Define the class; 4 domains (5 in IgM and IgE)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "l",
   "options": [
    "Hinge",
    "Fc fragment",
    "Light chains",
    "Heavy chains"
   ],
   "answer": 2,
   "why": "The arrow points to: Light chains. Kappa or lambda; one variable and one constant domain."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Immunoglobulin vs antibody?",
   "back": "Same molecule: 'Ig' describes structure, 'antibody' describes function."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Basic Ig structure?",
   "back": "2 heavy + 2 light chains; domains ~110 aa (heavy 4, IgM/IgE 5; light 2); variable and constant regions."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Fab vs Fc?",
   "back": "Fab (×2): variable domains recognising epitopes. Fc: effector functions (Fc receptors, complement, placenta, catabolism)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Framework and CDRs?",
   "back": "Conserved framework supports hypervariable loops (CDR1-3) at the tip that contact antigen and create diversity."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "IgM key facts?",
   "back": "Pentamer + J chain, ~10% serum Ig, first in primary response, best classical complement activator, no placental transfer."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "IgG key facts?",
   "back": "Main serum Ig; 4 subclasses; half-life ~3 weeks; crosses placenta; opsonisation (FcγR), ADCC (FcγRIII)."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "IgA key facts?",
   "back": "~12% serum; monomer in serum; secretory dimer with J chain and secretory component; mucosal immunity; IgA1 serum, IgA2 secretions."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "IgD and IgE?",
   "back": "IgD: B-cell receptor, 0.25% serum, no known effector role. IgE: trace, mast cells/basophils, allergy and parasites."
  },
  {
   "id": "img-fab",
   "type": "image",
   "target": "fab",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Fab fragments. Variable domains (VH, VL); hypervariable loops (CDR1-3) on a framework contact the epitope."
  },
  {
   "id": "img-hinge",
   "type": "image",
   "target": "hinge",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Hinge. Papain digestion gives 2 Fab + 1 Fc."
  },
  {
   "id": "img-fc",
   "type": "image",
   "target": "fc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Fc fragment. Constant domains: binding to effector cells, complement fixation, placental transfer, catabolism."
  },
  {
   "id": "img-h",
   "type": "image",
   "target": "h",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Heavy chains. Define the class; 4 domains (5 in IgM and IgE)."
  },
  {
   "id": "img-l",
   "type": "image",
   "target": "l",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Light chains. Kappa or lambda; one variable and one constant domain."
  }
 ],
 "deeper": [
  {
   "title": "Why IgM means a recent infection",
   "html": "<p>After a first encounter with an antigen, naive B cells make IgM first; class switching to IgG takes about a week or two. Finding specific IgM in a patient therefore points to a recent or ongoing infection, while IgG alone suggests past infection or vaccination. Serology for rubella, toxoplasmosis or hepatitis relies on this timing.</p><p class='src'>Source: the lecture's IgM properties.</p>"
  }
 ],
 "resources": [
  {
   "title": "Antibody structure (Immunopaedia)",
   "url": "https://www.immunopaedia.org.za/",
   "kind": "Website",
   "why": "Immunoglobulin classes and functions.",
   "note": ""
  },
  {
   "title": "Immunoglobulins (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK513460/",
   "kind": "Book",
   "why": "Structure and clinical relevance.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Antibody structure (Immunopaedia)",
   "url": "https://www.immunopaedia.org.za/"
  },
  {
   "name": "Immunoglobulins (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK513460/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["immuno1-complement"] = {
 "id": "immuno1-complement",
 "subject": "immuno1",
 "group": "Immunology",
 "title": "The complement system",
 "sourceFile": "ML6 Complement system (March 2026) (Immunology, Pr. F. Guessous)",
 "sourceUrl": "https://drive.google.com/file/d/1_56DulHXquRkKZMx21d24NaW0tihPkhX/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>Complement was discovered by <strong>Buchner</strong> and <strong>Bordet</strong> as a heat-labile serum factor that, with antibodies, lyses red cells or bacteria. It is a set of about <strong>35 proteins</strong> (soluble or membrane-bound), <strong>12</strong> directly involved in eliminating pathogens and the rest regulating them; many are proteases activated in <strong>cascade</strong>. Consequences: <strong>lysis</strong> of pathogens, <strong>inflammation</strong>, <strong>phagocytosis</strong> (opsonisation), <strong>virus neutralisation</strong> and <strong>clearance of immune complexes</strong>. It belongs to innate immunity but amplifies humoral immunity.</p>"
  },
  {
   "id": "s1",
   "title": "Physiology and nomenclature",
   "html": "<p>Levels: half the adult level at <strong>birth</strong>, higher than adults at 2-14 years, about <strong>3 g/L</strong> in adults (4-5% of serum proteins), increased in late pregnancy. <strong>Synthesis</strong>: mainly the <strong>liver (95%)</strong> (C3, C6, C9, factor B, C1 inhibitor); also macrophages, lymphocytes, epithelia (C1q, C2, C4). <strong>Half-life ~24 h</strong>; synthesis rises in inflammation. Genes for <strong>C2, C4 and factor B</strong> lie on <strong>chromosome 6</strong> in the MHC (<strong>class III</strong> region). Most inherited deficiencies affect the classical pathway and MAC. Names: classical pathway <strong>C1-C9</strong> (C1 = C1q + C1r + C1s); alternative pathway letters (<strong>factor B</strong>, <strong>factor D</strong>, <strong>properdin</strong>); lectin pathway <strong>MBL</strong> and <strong>MASP</strong>. On cleavage, the small fragment is the soluble mediator ('<strong>a</strong>') and the large one the active part ('<strong>b</strong>').</p>"
  },
  {
   "id": "s2",
   "title": "Activation pathways",
   "html": "<p><strong>Classical</strong>: C1q binds <strong>immune complexes (IgM or IgG with antigen)</strong> → activates C1r and C1s → C1s cleaves <strong>C4</strong> and <strong>C2</strong> → classical <strong>C3 convertase C4b2a</strong> → cleaves C3 into C3a and C3b → <strong>C5 convertase C4b2a3b</strong> → C5a + C5b. <strong>Lectin</strong>: <strong>mannose-binding lectin (MBL)</strong> with <strong>MASP</strong> serine proteases recognises microbial carbohydrates and then acts like C1 (cleaving C4 and C2). <strong>Alternative</strong>: spontaneous C3 activation deposits C3b on microbial surfaces; with <strong>factor B</strong>, cleaved by <strong>factor D</strong>, it forms the <strong>C3 convertase C3bBb</strong>, stabilised by <strong>properdin</strong>, an amplification loop. All pathways converge on <strong>C3</strong>, then the common terminal pathway: <strong>C5b</strong> recruits <strong>C6, C7</strong>, inserts into the membrane, recruits <strong>C8</strong> and polymerised <strong>C9</strong>: the <strong>membrane attack complex (MAC)</strong>, a pore that lyses the pathogen. <strong>C3a, C4a, C5a</strong> (anaphylatoxins) cause inflammation and chemotaxis; <strong>C3b</strong> opsonises for phagocytosis; regulatory proteins prevent damage to host cells.</p>"
  }
 ],
 "exam": [
  "~35 proteins; 12 effectors, rest regulators; protease cascade.",
  "Effects: lysis, inflammation, opsonisation, virus neutralisation, immune complex clearance.",
  "Adult level ~3 g/L; half at birth; 95% made by the liver; half-life 24 h.",
  "C2, C4, factor B genes in MHC class III (chromosome 6).",
  "'a' = small soluble mediator; 'b' = large active fragment.",
  "Classical: C1q + IgM/IgG complexes → C4, C2 → C4b2a.",
  "Lectin: MBL + MASP recognise sugars.",
  "Alternative: spontaneous C3b + factors B, D, properdin → C3bBb.",
  "All converge on C3 → C5 convertase → MAC (C5b-C9).",
  "C3a, C5a: anaphylatoxins; C3b: opsonin."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Three pathways converge on C3",
   "caption": "All pathways build a C3 convertase, then C5 convertase and the MAC. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"240\" y1=\"70\" x2=\"270\" y2=\"177\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"100\" x2=\"380\" y2=\"150\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"740\" y1=\"70\" x2=\"270\" y2=\"177\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"205\" x2=\"380\" y2=\"225\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"490\" y1=\"250\" x2=\"520\" y2=\"250\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"490\" y1=\"177\" x2=\"20\" y2=\"250\"/>",
   "parts": {
    "cl": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Classical: C1q binds",
      "IgM/IgG immune complex"
     ],
     "lx": 130.0,
     "ly": 68.0
    },
    "lec": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"270\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Lectin: MBL + MASP",
      "bind microbial sugars"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "alt": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"520\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Alternative: spontaneous C3b",
      "+ factors B, D, properdin"
     ],
     "lx": 630.0,
     "ly": 68.0
    },
    "c3": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"270\" y=\"150\" width=\"220\" height=\"55\" rx=\"10\"/>",
     "label": [
      "C3 convertase",
      "(C4b2a or C3bBb)"
     ],
     "lx": 380.0,
     "ly": 175.5
    },
    "c5": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"270\" y=\"225\" width=\"220\" height=\"50\" rx=\"10\"/>",
     "label": [
      "C5 convertase →",
      "C5b"
     ],
     "lx": 380.0,
     "ly": 248.0
    },
    "mac": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"520\" y=\"225\" width=\"200\" height=\"50\" rx=\"10\"/>",
     "label": [
      "MAC C5b-C9 → pore,",
      "lysis"
     ],
     "lx": 620.0,
     "ly": 248.0
    },
    "eff": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9ecec\" x=\"20\" y=\"225\" width=\"220\" height=\"50\" rx=\"10\"/>",
     "label": [
      "C3a, C5a: inflammation;",
      "C3b: opsonisation"
     ],
     "lx": 130.0,
     "ly": 248.0
    }
   },
   "arrows": {
    "cl": [
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
    "lec": [
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
    "alt": [
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
    "c3": [
     {
      "t": [
       270.0,
       158.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "c5": [
     {
      "t": [
       270.0,
       233.0
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
       233.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "eff": [
     {
      "t": [
       20.0,
       233.0
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
   "root": "Complement",
   "branches": [
    [
     "Pathways",
     [
      "Classical: C1q + IgM/IgG",
      "Lectin: MBL + MASP",
      "Alternative: C3b + B, D, properdin"
     ]
    ],
    [
     "Convertases",
     [
      "C3: C4b2a / C3bBb",
      "C5: + C3b"
     ]
    ],
    [
     "Effects",
     [
      "MAC lysis",
      "C3a, C5a inflammation",
      "C3b opsonisation",
      "Immune complex clearance"
     ]
    ],
    [
     "Physiology",
     [
      "Liver 95%",
      "~3 g/L adult",
      "MHC class III genes"
     ]
    ]
   ]
  }
 },
 "mcqs": [
  {
   "q": "About how many proteins make up the complement system?",
   "options": [
    "100",
    "5",
    "12",
    "35"
   ],
   "answer": 3,
   "why": "12 directly effector."
  },
  {
   "q": "Most complement proteins are synthesised by the:",
   "options": [
    "Liver",
    "Kidney",
    "Spleen",
    "Bone marrow"
   ],
   "answer": 0,
   "why": "About 95%."
  },
  {
   "q": "The complement level at birth is about:",
   "options": [
    "Equal",
    "Half the adult level",
    "Zero",
    "Double the adult level"
   ],
   "answer": 1,
   "why": "Higher than adults from 2-14 years."
  },
  {
   "q": "Genes for C2, C4 and factor B are located in the:",
   "options": [
    "MHC class III region",
    "MHC class I region",
    "X chromosome",
    "Mitochondria"
   ],
   "answer": 0,
   "why": "Chromosome 6."
  },
  {
   "q": "The classical pathway is triggered mainly by:",
   "options": [
    "Spontaneous C3 hydrolysis",
    "Microbial sugars",
    "C1q binding IgM or IgG immune complexes",
    "Properdin"
   ],
   "answer": 2,
   "why": "Antibody-dependent."
  },
  {
   "q": "The lectin pathway uses:",
   "options": [
    "Factor B",
    "MBL and MASP",
    "C1q",
    "IgE"
   ],
   "answer": 1,
   "why": "Recognises carbohydrates."
  },
  {
   "q": "Properdin stabilises the:",
   "options": [
    "MAC",
    "Alternative C3 convertase C3bBb",
    "C1 complex",
    "Classical C3 convertase"
   ],
   "answer": 1,
   "why": "Amplification loop."
  },
  {
   "q": "The classical C3 convertase is:",
   "options": [
    "C3bBb",
    "C1qrs",
    "C4b2a",
    "C5b-9"
   ],
   "answer": 2,
   "why": "Formed after C1s cleaves C4 and C2."
  },
  {
   "q": "All complement pathways converge on:",
   "options": [
    "C9",
    "C3",
    "C1",
    "Factor D"
   ],
   "answer": 1,
   "why": "Then C5 and the MAC."
  },
  {
   "q": "The membrane attack complex is formed by:",
   "options": [
    "C3a and C5a",
    "Factors B and D",
    "C5b, C6, C7, C8 and C9",
    "C1-C4"
   ],
   "answer": 2,
   "why": "Forms a pore."
  },
  {
   "q": "C3a and C5a are:",
   "options": [
    "Inhibitors",
    "Opsonins",
    "Proteases forming pores",
    "Anaphylatoxins (inflammation)"
   ],
   "answer": 3,
   "why": "Also chemotactic."
  },
  {
   "q": "Which fragment is the main opsonin?",
   "options": [
    "C9",
    "C3a",
    "C5a",
    "C3b"
   ],
   "answer": 3,
   "why": "Promotes phagocytosis."
  },
  {
   "q": "In complement nomenclature, the 'a' fragment is usually:",
   "options": [
    "The small soluble mediator",
    "The large active protease",
    "A regulator",
    "An antibody"
   ],
   "answer": 0,
   "why": "'b' is the large fragment."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "cl",
   "options": [
    "Classical pathway",
    "Lectin pathway",
    "C3 convertase",
    "Alternative pathway"
   ],
   "answer": 0,
   "why": "The arrow points to: Classical pathway. Triggered mainly by C1q binding antigen-bound IgM or IgG; C1s cleaves C4 and C2."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "lec",
   "options": [
    "C5 convertase",
    "Classical pathway",
    "C3 convertase",
    "Lectin pathway"
   ],
   "answer": 3,
   "why": "The arrow points to: Lectin pathway. Mannose-binding lectin with MASP proteases recognises microbial carbohydrates; resembles the classical pathway."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "alt",
   "options": [
    "C3 convertase",
    "Lectin pathway",
    "Alternative pathway",
    "Other effects"
   ],
   "answer": 2,
   "why": "The arrow points to: Alternative pathway. Spontaneous C3 activation on microbial surfaces, amplified by factors B and D, stabilised by properdin."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "c3",
   "options": [
    "C5 convertase",
    "C3 convertase",
    "Membrane attack complex",
    "Alternative pathway"
   ],
   "answer": 1,
   "why": "The arrow points to: C3 convertase. Classical/lectin C4b2a; alternative C3bBb; cleaves C3 into C3a and C3b."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "c5",
   "options": [
    "C5 convertase",
    "C3 convertase",
    "Alternative pathway",
    "Classical pathway"
   ],
   "answer": 0,
   "why": "The arrow points to: C5 convertase. C4b2a3b (or C3bBb3b) cleaves C5 into C5a and C5b."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "mac",
   "options": [
    "Classical pathway",
    "Lectin pathway",
    "Membrane attack complex",
    "C5 convertase"
   ],
   "answer": 2,
   "why": "The arrow points to: Membrane attack complex. C5b recruits C6, C7, C8 and polymerised C9, forming a pore that lyses the pathogen."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "eff",
   "options": [
    "Other effects",
    "Membrane attack complex",
    "Lectin pathway",
    "C3 convertase"
   ],
   "answer": 0,
   "why": "The arrow points to: Other effects. C3a and C5a (anaphylatoxins) drive inflammation and chemotaxis; C3b opsonises for phagocytosis and clears immune complexes."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Complement: composition and roles?",
   "back": "~35 proteins (12 effectors), protease cascade; lysis, inflammation, opsonisation, virus neutralisation, immune complex clearance."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Physiological variations and synthesis?",
   "back": "Birth: half adult level; 2-14 y: higher; adult ~3 g/L; liver makes 95%; half-life 24 h; rises in inflammation."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Genetics?",
   "back": "C2, C4, factor B in MHC class III (chromosome 6); deficits mostly classical pathway and MAC."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Classical pathway steps?",
   "back": "C1q binds IgM/IgG-antigen → C1r, C1s → C4, C2 → C3 convertase C4b2a → C5 convertase C4b2a3b."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Lectin pathway?",
   "back": "MBL + MASP bind microbial carbohydrates, then cleave C4 and C2 like C1."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Alternative pathway?",
   "back": "Spontaneous C3b on microbes + factor B (cleaved by D) → C3bBb stabilised by properdin; amplification."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Terminal pathway?",
   "back": "C5b + C6 + C7 insert, C8, polymerised C9 → MAC pore → lysis."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Anaphylatoxins vs opsonin?",
   "back": "C3a, C4a, C5a: inflammation, chemotaxis. C3b: opsonisation."
  },
  {
   "id": "img-cl",
   "type": "image",
   "target": "cl",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Classical pathway. Triggered mainly by C1q binding antigen-bound IgM or IgG; C1s cleaves C4 and C2."
  },
  {
   "id": "img-lec",
   "type": "image",
   "target": "lec",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Lectin pathway. Mannose-binding lectin with MASP proteases recognises microbial carbohydrates; resembles the classical pathway."
  },
  {
   "id": "img-alt",
   "type": "image",
   "target": "alt",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Alternative pathway. Spontaneous C3 activation on microbial surfaces, amplified by factors B and D, stabilised by properdin."
  },
  {
   "id": "img-c3",
   "type": "image",
   "target": "c3",
   "front": "What is at the arrow, and why does it matter?",
   "back": "C3 convertase. Classical/lectin C4b2a; alternative C3bBb; cleaves C3 into C3a and C3b."
  },
  {
   "id": "img-c5",
   "type": "image",
   "target": "c5",
   "front": "What is at the arrow, and why does it matter?",
   "back": "C5 convertase. C4b2a3b (or C3bBb3b) cleaves C5 into C5a and C5b."
  },
  {
   "id": "img-mac",
   "type": "image",
   "target": "mac",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Membrane attack complex. C5b recruits C6, C7, C8 and polymerised C9, forming a pore that lyses the pathogen."
  },
  {
   "id": "img-eff",
   "type": "image",
   "target": "eff",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Other effects. C3a and C5a (anaphylatoxins) drive inflammation and chemotaxis; C3b opsonises for phagocytosis and clears immune complexes."
  }
 ],
 "deeper": [
  {
   "title": "Why complement deficiencies cause specific infections",
   "html": "<p>The membrane attack complex is especially important against Neisseria bacteria, so patients lacking C5-C9 suffer repeated meningococcal and gonococcal infections. Deficiencies of early classical components (C1, C2, C4) impair immune complex clearance and predispose to lupus-like disease, while C3 deficiency, at the crossroads of all pathways, causes severe recurrent bacterial infections.</p><p class='src'>Source: the lecture's complement genetics and consequences slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "The complement system (Immunopaedia)",
   "url": "https://www.immunopaedia.org.za/",
   "kind": "Website",
   "why": "Pathways and functions.",
   "note": ""
  },
  {
   "title": "Complement system (NCBI Bookshelf, Janeway)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK27100/",
   "kind": "Book",
   "why": "Classical, lectin and alternative pathways.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "The complement system (Immunopaedia)",
   "url": "https://www.immunopaedia.org.za/"
  },
  {
   "name": "Complement system (NCBI Bookshelf, Janeway)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK27100/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["immuno1-dynamics"] = {
 "id": "immuno1-dynamics",
 "subject": "immuno1",
 "group": "Immunology",
 "title": "Dynamics of the immune response",
 "sourceFile": "ML7 Dynamics of the immune response (April 2026) (Immunology, Pr. F. Guessous)",
 "sourceUrl": "https://drive.google.com/file/d/1m0L9SWOh9yV6mYy_jw-1Lqu_-CfsaX1O/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>The <strong>adaptive</strong> immune response adapts to the aggressor: each lymphocyte carries a single receptor of unique specificity; high-affinity binding to its antigen triggers <strong>clonal expansion</strong>, then differentiation into <strong>effector</strong> and <strong>memory</strong> cells. It unfolds in secondary lymphoid organs through <strong>cellular cooperation</strong> in three phases: <strong>initiation</strong> (APC-T cooperation), <strong>clonal expansion</strong> (Th-B and Th-T cooperation) and <strong>effector phase</strong> (Th1, Th2, cytotoxic T lymphocytes).</p>"
  },
  {
   "id": "s1",
   "title": "Cooperation and activation",
   "html": "<p>Cells cooperate through <strong>membrane co-signals</strong> (co-stimulatory molecules) and <strong>soluble co-signals</strong> (cytokines, chemokines for migration), which allow, amplify and control the response. <strong>CD4 T cells</strong> recognise antigen with <strong>MHC class II</strong>, <strong>CD8 T cells</strong> with <strong>MHC class I</strong>; B cells recognise intact antigen. Activation of a CD4 T cell needs <strong>signal 1</strong> (TCR + peptide-MHC II) and <strong>signal 2</strong> (co-stimulation); <strong>signal 3</strong> (cytokines) polarises the response. Molecular events: <strong>early</strong> (seconds-minutes: phosphorylation cascades downstream of the receptor) and <strong>late</strong> (gene transcription via transcription factors such as <strong>NF-κB</strong> and <strong>NFAT</strong>).</p>"
  },
  {
   "id": "s2",
   "title": "Th1 and Th2 polarisation",
   "html": "<p>Naive Th0 cells become <strong>Th1</strong> under <strong>IL-12</strong>, secreting <strong>IL-2</strong> and <strong>IFN-γ</strong>: <strong>cellular immunity</strong> against intracellular pathogens (viruses, some bacteria and parasites); or <strong>Th2</strong>, secreting <strong>IL-4, IL-5, IL-10, IL-13</strong>: <strong>humoral immunity</strong> against extracellular pathogens.</p>"
  },
  {
   "id": "s3",
   "title": "B-cell responses",
   "html": "<p>Humoral immunity (B cells becoming antibody-secreting plasma cells) is <strong>T-dependent</strong> or <strong>T-independent</strong> depending on the antigen. <strong>T-independent antigens</strong> (polysaccharides such as LPS, polymeric proteins such as flagellin) cross-link many BCRs through repeated epitopes: mainly <strong>IgM</strong>, <strong>no class switching</strong>, <strong>low affinity</strong>, <strong>no memory</strong>. <strong>T-dependent antigens</strong> (proteins): the B cell internalises antigen bound to surface IgM, degrades it and presents peptides on <strong>MHC class II</strong> to a helper T cell, which responds via <strong>CD40L-CD40</strong> and cytokines, driving activation, differentiation and <strong>isotype (class) switching</strong>: heavy-chain constant gene rearrangement giving the <strong>same specificity (Fv)</strong> with <strong>different effector properties (Fc)</strong>, plus affinity maturation and memory.</p>"
  }
 ],
 "exam": [
  "Adaptive: one receptor per lymphocyte → clonal expansion → effector + memory cells.",
  "Phases: initiation (APC-T), expansion (Th-B, Th-T), effector (Th1, Th2, CTL).",
  "Co-signals: membrane co-stimulation and cytokines/chemokines.",
  "CD4 ↔ MHC II; CD8 ↔ MHC I; B cells see intact antigen.",
  "Signal 1 (TCR-MHC), signal 2 (co-stimulation), signal 3 (cytokines, polarisation).",
  "Early events: phosphorylation; late: NF-κB, NFAT transcription.",
  "Th1 (IL-12 → IL-2, IFN-γ): cellular. Th2 (IL-4, 5, 10, 13): humoral.",
  "T-independent antigens: IgM, no switch, low affinity, no memory.",
  "T-dependent: MHC II presentation by B cell, CD40L-CD40, class switching, memory.",
  "Class switching: same specificity, different Fc."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Three signals and Th polarisation",
   "caption": "APC activates naive CD4 T cells, which steer the response. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"220\" y1=\"70\" x2=\"260\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"460\" y1=\"70\" x2=\"500\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"700\" y1=\"70\" x2=\"80\" y2=\"200\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"600\" y1=\"100\" x2=\"530\" y2=\"170\"/>",
   "parts": {
    "s1": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Signal 1: TCR ↔",
      "peptide-MHC II"
     ],
     "lx": 120.0,
     "ly": 68.0
    },
    "s2": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"260\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Signal 2:",
      "co-stimulation"
     ],
     "lx": 360.0,
     "ly": 68.0
    },
    "s3": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"500\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Signal 3: cytokines",
      "→ polarisation"
     ],
     "lx": 600.0,
     "ly": 68.0
    },
    "th1": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"80\" y=\"170\" width=\"260\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Th1 (IL-12): IL-2, IFN-γ →",
      "cellular immunity"
     ],
     "lx": 210.0,
     "ly": 198.0
    },
    "th2": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"400\" y=\"170\" width=\"260\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Th2: IL-4, IL-5, IL-10, IL-13",
      "→ humoral immunity"
     ],
     "lx": 530.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "s1": [
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
    "s2": [
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
    "s3": [
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
    "th1": [
     {
      "t": [
       80.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "th2": [
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
   "q": "Clonal expansion is triggered by:",
   "options": [
    "Any antigen binding",
    "Specific high-affinity binding",
    "Complement",
    "Hormones"
   ],
   "answer": 1,
   "why": "Selects matching lymphocytes."
  },
  {
   "q": "Where does the adaptive response start?",
   "options": [
    "Bone marrow",
    "Liver",
    "Secondary lymphoid organs",
    "Thymus"
   ],
   "answer": 2,
   "why": "APC-T cooperation."
  },
  {
   "q": "CD4 T cells recognise antigen presented by:",
   "options": [
    "Free antigen",
    "MHC class II",
    "MHC class I",
    "Complement"
   ],
   "answer": 1,
   "why": "CD8 with MHC class I."
  },
  {
   "q": "Signal 2 in T-cell activation is:",
   "options": [
    "Antibody",
    "Cytokine polarisation",
    "Co-stimulation",
    "TCR binding"
   ],
   "answer": 2,
   "why": "Signal 3 = cytokines."
  },
  {
   "q": "Late activation events involve:",
   "options": [
    "Antigen degradation",
    "Only phosphorylation",
    "Complement",
    "NF-κB, NFAT"
   ],
   "answer": 3,
   "why": "Gene transcription."
  },
  {
   "q": "Th1 differentiation is driven by:",
   "options": [
    "IL-10",
    "IL-4",
    "IL-5",
    "IL-12"
   ],
   "answer": 3,
   "why": "Secretes IL-2, IFN-γ."
  },
  {
   "q": "Th2 cells mainly secrete:",
   "options": [
    "IL-12",
    "IL-4, IL-5, IL-10, IL-13",
    "TNF only",
    "IFN-γ and IL-2"
   ],
   "answer": 1,
   "why": "Humoral immunity."
  },
  {
   "q": "Cellular immunity mainly targets:",
   "options": [
    "Intracellular pathogens",
    "Extracellular pathogens",
    "Allergens",
    "Toxins"
   ],
   "answer": 0,
   "why": "Viruses, intracellular bacteria."
  },
  {
   "q": "T-independent antigens are typically:",
   "options": [
    "Polysaccharides",
    "Peptides",
    "Proteins",
    "Haptens"
   ],
   "answer": 0,
   "why": "Repeated epitopes."
  },
  {
   "q": "A T-independent response produces:",
   "options": [
    "IgA only",
    "IgM, no memory",
    "IgE",
    "IgG with memory"
   ],
   "answer": 1,
   "why": "No class switching."
  },
  {
   "q": "B-T cooperation depends on:",
   "options": [
    "CD40L-CD40 and cytokines",
    "MHC class I",
    "CD28 only",
    "Complement"
   ],
   "answer": 0,
   "why": "Th provides help."
  },
  {
   "q": "Class switching changes:",
   "options": [
    "The Fc only",
    "Antigen specificity",
    "The epitope",
    "The light chain"
   ],
   "answer": 0,
   "why": "Heavy-chain constant gene rearrangement."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "s1",
   "options": [
    "Th1",
    "Signal 3",
    "Signal 2",
    "Signal 1"
   ],
   "answer": 3,
   "why": "The arrow points to: Signal 1. Specific recognition of peptide presented by MHC class II on the APC."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "s2",
   "options": [
    "Th2",
    "Signal 2",
    "Th1",
    "Signal 1"
   ],
   "answer": 1,
   "why": "The arrow points to: Signal 2. Membrane co-stimulatory molecules; without it the T cell is not activated."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "s3",
   "options": [
    "Signal 2",
    "Signal 1",
    "Th2",
    "Signal 3"
   ],
   "answer": 3,
   "why": "The arrow points to: Signal 3. Cytokines from the APC orient the naive Th0 cell."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "th1",
   "options": [
    "Signal 1",
    "Signal 2",
    "Th1",
    "Signal 3"
   ],
   "answer": 2,
   "why": "The arrow points to: Th1. Induced by IL-12; secretes IL-2 and IFN-γ; cellular immunity against intracellular pathogens."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "th2",
   "options": [
    "Signal 2",
    "Signal 3",
    "Th2",
    "Th1"
   ],
   "answer": 2,
   "why": "The arrow points to: Th2. Secretes IL-4, IL-5, IL-10, IL-13; humoral immunity against extracellular pathogens."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Principle of adaptive immunity?",
   "back": "One receptor per lymphocyte; specific antigen binding → clonal expansion → effector and memory cells."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Three phases and cooperations?",
   "back": "Initiation (APC-T), clonal expansion (Th-B, Th-T), effector (Th1, Th2, CTL)."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Three signals of T-cell activation?",
   "back": "1: TCR + peptide-MHC. 2: co-stimulation. 3: cytokines that polarise."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Early vs late activation events?",
   "back": "Early: phosphorylation cascades. Late: gene transcription (NF-κB, NFAT)."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Th1 vs Th2?",
   "back": "Th1 (IL-12): IL-2, IFN-γ, cellular immunity, intracellular pathogens. Th2: IL-4, IL-5, IL-10, IL-13, humoral immunity, extracellular pathogens."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "T-independent antigens?",
   "back": "Polysaccharides (LPS), polymeric proteins; BCR cross-linking; IgM, no switch, low affinity, no memory."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "T-dependent B-cell response?",
   "back": "B cell presents peptide on MHC II → Th help via CD40L-CD40 + cytokines → class switching, affinity maturation, memory."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Isotype switching?",
   "back": "Heavy-chain constant region rearrangement: same Fv specificity, different Fc effector function."
  },
  {
   "id": "img-s1",
   "type": "image",
   "target": "s1",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Signal 1. Specific recognition of peptide presented by MHC class II on the APC."
  },
  {
   "id": "img-s2",
   "type": "image",
   "target": "s2",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Signal 2. Membrane co-stimulatory molecules; without it the T cell is not activated."
  },
  {
   "id": "img-s3",
   "type": "image",
   "target": "s3",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Signal 3. Cytokines from the APC orient the naive Th0 cell."
  },
  {
   "id": "img-th1",
   "type": "image",
   "target": "th1",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Th1. Induced by IL-12; secretes IL-2 and IFN-γ; cellular immunity against intracellular pathogens."
  },
  {
   "id": "img-th2",
   "type": "image",
   "target": "th2",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Th2. Secretes IL-4, IL-5, IL-10, IL-13; humoral immunity against extracellular pathogens."
  }
 ],
 "deeper": [
  {
   "title": "Why polysaccharide vaccines are conjugated",
   "html": "<p>Capsular polysaccharides (pneumococcus, Haemophilus, meningococcus) are T-independent antigens: they give short-lived IgM without memory and work poorly in infants. Coupling them to a protein carrier turns the response T-dependent, because B cells now present carrier peptides to helper T cells. The result is class switching, high-affinity IgG and memory, which is why conjugate vaccines protect babies.</p><p class='src'>Source: the lecture's T-dependent vs T-independent antigens.</p>"
  }
 ],
 "resources": [
  {
   "title": "T helper cell subsets (Immunopaedia)",
   "url": "https://www.immunopaedia.org.za/",
   "kind": "Website",
   "why": "Th1, Th2 and beyond.",
   "note": ""
  },
  {
   "title": "B-cell activation (NCBI Bookshelf, Janeway)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK27142/",
   "kind": "Book",
   "why": "T-dependent and T-independent responses.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "T helper cell subsets (Immunopaedia)",
   "url": "https://www.immunopaedia.org.za/"
  },
  {
   "name": "B-cell activation (NCBI Bookshelf, Janeway)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK27142/"
  }
 ],
 "verified": "22 Sep 2026"
};
