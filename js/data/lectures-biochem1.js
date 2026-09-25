/* biochem1: 9 lectures, merged for upload. Edit the source files, not this one. */
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["biochem1-amino-acids"] = {
 "id": "biochem1-amino-acids",
 "subject": "biochem1",
 "group": "Structural biochemistry",
 "title": "Introduction to biochemistry and amino acids",
 "sourceFile": "Amino acids, Chapter 1 (2025-2026) (Biochemistry, Pr. F.Z. Lahlou)",
 "sourceUrl": "https://drive.google.com/file/d/1n1cMWz5hUUH5efcABd3Sa4MXrVY9ug3e/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p><strong>Biochemistry</strong> integrates life with chemistry: the structure, properties and functions of biomolecules and the chemical processes of living organisms, with medical, pharmaceutical, food, agricultural and environmental applications. Branches: structural, metabolic, clinical, analytical. Biomolecules are <strong>inorganic</strong> (water, O₂, CO₂, Ca, Fe, Na, Cl) or <strong>organic</strong> (amino acids/peptides/proteins, carbohydrates, lipids, nucleotides/nucleic acids).</p>"
  },
  {
   "id": "s1",
   "title": "Amino acids: structure and classes",
   "html": "<p>An amino acid has an <strong>amino group</strong>, a <strong>carboxyl group</strong>, a hydrogen and a <strong>side chain (R)</strong> on the <strong>α-carbon</strong>. Over 500 exist in nature; <strong>22 are proteinogenic</strong> (20 standard + 2 non-standard: selenocysteine, pyrrolysine). <strong>9 are essential</strong> (must come from the diet): <strong>phenylalanine, valine, tryptophan, threonine, isoleucine, methionine, histidine, leucine, lysine</strong>; <strong>arginine</strong> is conditionally essential (growth, pregnancy, recovery from trauma). The α-carbon is <strong>chiral</strong> (four different groups), giving <strong>D and L enantiomers</strong>; natural amino acids are <strong>L</strong>. <strong>Glycine</strong> (R = H) is the smallest and has <strong>no asymmetric carbon</strong>; <strong>proline</strong> is an exception to the common structure (cyclic). Amino acids are <strong>amphoteric</strong>; at pH 7.3-7.4 they exist as <strong>zwitterions</strong> (dipolar ions). Named with 3- or 1-letter codes.</p><p>Classification by side chain: aliphatic (Gly, Ala, Val, Leu, Ile), alcohol (Ser, Thr), sulphur (Cys, Met), acidic (Asp, Glu), basic (Lys, Arg, His), amide (Asn, Gln), aromatic (Phe, Tyr, Trp: <strong>absorb UV light</strong>). By polarity: <strong>polar (hydrophilic)</strong>, charged or uncharged, vs <strong>non-polar (hydrophobic)</strong>.</p>"
  },
  {
   "id": "s2",
   "title": "Reactions and roles",
   "html": "<p><strong>Decarboxylation</strong>: histidine → <strong>histamine</strong> (allergy, inflammation); glutamate → <strong>GABA</strong> (inhibitory neurotransmitter). <strong>Amidation</strong>: glutamate → glutamine (renal acid-base balance, muscle); aspartate → asparagine. <strong>Oxidative deamination</strong> (feeds the urea cycle) and <strong>transamination</strong>. <strong>Post-translational modifications</strong>: phosphorylation of Tyr, Ser, Thr; N- and O-glycosylation. Roles: <strong>structural</strong>, <strong>metabolic/functional</strong> and <strong>energetic</strong>.</p>"
  }
 ],
 "exam": [
  "Biochemistry branches: structural, metabolic, clinical, analytical.",
  "Amino acid: amino + carboxyl + H + R on the α-carbon.",
  "22 proteinogenic (20 standard + 2).",
  "9 essential: Phe, Val, Trp, Thr, Ile, Met, His, Leu, Lys; Arg conditionally.",
  "Natural amino acids are L; glycine is achiral.",
  "Proline: cyclic exception.",
  "Zwitterion at physiological pH; amphoteric.",
  "Aromatic amino acids absorb UV.",
  "His → histamine; Glu → GABA (decarboxylation).",
  "PTM: phosphorylation (Tyr, Ser, Thr), glycosylation."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Structure of an α-amino acid",
   "caption": "Four groups around the α-carbon. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"240\" y1=\"70\" x2=\"280\" y2=\"140\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"720\" y1=\"70\" x2=\"280\" y2=\"140\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"290\" x2=\"380\" y2=\"110\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"240\" y1=\"205\" x2=\"280\" y2=\"140\"/>",
   "parts": {
    "ca": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"280\" y=\"110\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "α-carbon",
      "(chiral except glycine)"
     ],
     "lx": 380.0,
     "ly": 138.0
    },
    "nh": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"40\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Amino group",
      "−NH₃⁺ at pH 7.4"
     ],
     "lx": 140.0,
     "ly": 68.0
    },
    "co": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"520\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Carboxyl group",
      "−COO⁻ at pH 7.4"
     ],
     "lx": 620.0,
     "ly": 68.0
    },
    "r": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"280\" y=\"230\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Side chain R",
      "(defines the amino acid)"
     ],
     "lx": 380.0,
     "ly": 258.0
    },
    "h": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"40\" y=\"180\" width=\"200\" height=\"50\" rx=\"10\"/>",
     "label": [
      "Hydrogen"
     ],
     "lx": 140.0,
     "ly": 211.0
    }
   },
   "arrows": {
    "ca": [
     {
      "t": [
       280.0,
       118.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "nh": [
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
    "co": [
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
    "r": [
     {
      "t": [
       280.0,
       238.0
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
       40.0,
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
   "q": "How many amino acids are proteinogenic?",
   "options": [
    "20",
    "22",
    "9",
    "500"
   ],
   "answer": 1,
   "why": "20 standard + 2 non-standard."
  },
  {
   "q": "Which is an essential amino acid?",
   "options": [
    "Serine",
    "Alanine",
    "Leucine",
    "Glutamate"
   ],
   "answer": 2,
   "why": "Must come from the diet."
  },
  {
   "q": "Arginine is conditionally essential during:",
   "options": [
    "Old age",
    "Growth and healing",
    "Fasting only",
    "Sleep"
   ],
   "answer": 1,
   "why": "Demand exceeds synthesis."
  },
  {
   "q": "Which amino acid has no asymmetric carbon?",
   "options": [
    "Proline",
    "Serine",
    "Glycine",
    "Alanine"
   ],
   "answer": 2,
   "why": "Its R group is H."
  },
  {
   "q": "Natural protein amino acids are in the:",
   "options": [
    "Racemic form",
    "D configuration",
    "Both equally",
    "L configuration"
   ],
   "answer": 3,
   "why": "Enantiomers."
  },
  {
   "q": "At physiological pH, amino acids exist mainly as:",
   "options": [
    "Anions only",
    "Neutral molecules",
    "Cations only",
    "Zwitterions"
   ],
   "answer": 3,
   "why": "Dipolar ions."
  },
  {
   "q": "Which amino acids absorb UV light?",
   "options": [
    "Sulphur",
    "Aromatic",
    "Aliphatic",
    "Acidic"
   ],
   "answer": 1,
   "why": "Used to measure proteins at 280 nm."
  },
  {
   "q": "Which amino acid is an exception to the common structure?",
   "options": [
    "Proline",
    "Valine",
    "Glycine",
    "Lysine"
   ],
   "answer": 0,
   "why": "Cyclic side chain."
  },
  {
   "q": "Decarboxylation of histidine gives:",
   "options": [
    "Histamine",
    "Serotonin",
    "GABA",
    "Glutamine"
   ],
   "answer": 0,
   "why": "Mediator of allergy."
  },
  {
   "q": "Decarboxylation of glutamate gives:",
   "options": [
    "Urea",
    "GABA",
    "Histamine",
    "Asparagine"
   ],
   "answer": 1,
   "why": "Inhibitory neurotransmitter."
  },
  {
   "q": "Which amino acids are commonly phosphorylated?",
   "options": [
    "Tyr, Ser, Thr",
    "Leu, Ile, Met",
    "Gly, Ala, Val",
    "Asp, Glu"
   ],
   "answer": 0,
   "why": "Post-translational modification."
  },
  {
   "q": "Hydrophobic amino acids have:",
   "options": [
    "Non-polar side chains",
    "Charged side chains",
    "Hydroxyl groups only",
    "Amide groups"
   ],
   "answer": 0,
   "why": "'Water hating'."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ca",
   "options": [
    "Carboxyl group",
    "Side chain",
    "Amino group",
    "α-carbon"
   ],
   "answer": 3,
   "why": "The arrow points to: α-carbon. Bears four different groups, so it is chiral (L or D), except in glycine where R = H."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "nh",
   "options": [
    "α-carbon",
    "Amino group",
    "Hydrogen",
    "Side chain"
   ],
   "answer": 1,
   "why": "The arrow points to: Amino group. Protonated at physiological pH."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "co",
   "options": [
    "Amino group",
    "α-carbon",
    "Hydrogen",
    "Carboxyl group"
   ],
   "answer": 3,
   "why": "The arrow points to: Carboxyl group. Deprotonated at physiological pH: the zwitterion."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "r",
   "options": [
    "α-carbon",
    "Amino group",
    "Side chain",
    "Carboxyl group"
   ],
   "answer": 2,
   "why": "The arrow points to: Side chain. Determines size, polarity, charge and reactivity."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "h",
   "options": [
    "Carboxyl group",
    "Amino group",
    "Hydrogen",
    "Side chain"
   ],
   "answer": 2,
   "why": "The arrow points to: Hydrogen. Fourth substituent."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Define biochemistry and its branches.",
   "back": "Science integrating life with chemistry; structural, metabolic, clinical, analytical biochemistry."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "General structure of an amino acid?",
   "back": "α-carbon bearing an amino group, a carboxyl group, a hydrogen and a side chain R."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Proteinogenic and essential amino acids?",
   "back": "22 proteinogenic (20 + 2); 9 essential: Phe, Val, Trp, Thr, Ile, Met, His, Leu, Lys; Arg conditionally essential."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Chirality of amino acids?",
   "back": "α-carbon chiral (L/D); natural = L; glycine achiral."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Zwitterion?",
   "back": "At physiological pH amino acids carry −NH₃⁺ and −COO⁻: dipolar ion; amino acids are amphoteric."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Classification by side chain?",
   "back": "Aliphatic, alcohol, sulphur, acidic, basic, amide, aromatic (UV-absorbing); polar vs non-polar."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Key amino acid reactions?",
   "back": "Decarboxylation (His → histamine, Glu → GABA), amidation (Glu → Gln), oxidative deamination, transamination, PTMs."
  },
  {
   "id": "img-ca",
   "type": "image",
   "target": "ca",
   "front": "What is at the arrow, and why does it matter?",
   "back": "α-carbon. Bears four different groups, so it is chiral (L or D), except in glycine where R = H."
  },
  {
   "id": "img-nh",
   "type": "image",
   "target": "nh",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Amino group. Protonated at physiological pH."
  },
  {
   "id": "img-co",
   "type": "image",
   "target": "co",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Carboxyl group. Deprotonated at physiological pH: the zwitterion."
  },
  {
   "id": "img-r",
   "type": "image",
   "target": "r",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Side chain. Determines size, polarity, charge and reactivity."
  },
  {
   "id": "img-h",
   "type": "image",
   "target": "h",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Hydrogen. Fourth substituent."
  }
 ],
 "deeper": [
  {
   "title": "Why some amino acids are 'essential'",
   "html": "<p>Human cells lack the enzymes to build certain carbon skeletons, such as branched chains (Leu, Ile, Val) or aromatic rings (Phe, Trp). These must come from food; a diet missing even one stalls protein synthesis. Others, like arginine, can be made, but not always fast enough during growth or healing.</p><p class='src'>Source: the lecture's essential amino acids slide.</p>"
  }
 ],
 "resources": [
  {
   "title": "Amino acids (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/macromolecules/proteins-and-amino-acids/a/introduction-to-proteins-and-amino-acids",
   "kind": "Article",
   "why": "Structure and classification.",
   "note": ""
  },
  {
   "title": "Amino acids (MedlinePlus)",
   "url": "https://medlineplus.gov/ency/article/002222.htm",
   "kind": "Article",
   "why": "Essential and non-essential amino acids.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Amino acids (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/macromolecules/proteins-and-amino-acids/a/introduction-to-proteins-and-amino-acids"
  },
  {
   "name": "Amino acids (MedlinePlus)",
   "url": "https://medlineplus.gov/ency/article/002222.htm"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["biochem1-proteins"] = {
 "id": "biochem1-proteins",
 "subject": "biochem1",
 "group": "Structural biochemistry",
 "title": "Peptides and proteins",
 "sourceFile": "Peptides and proteins, Chapter 2 (2025-2026) (Biochemistry, Pr. F.Z. Lahlou)",
 "sourceUrl": "https://drive.google.com/file/d/14jVb9t3eKewe_F9W63SRVWnl0kHlcbj3/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>Amino acids (residues) link into <strong>peptides</strong>: oligopeptides (2-10), polypeptides (> 10) and <strong>proteins</strong> (> 100 amino acids). Proteins, made by translation, have structural, transport, defence, enzymatic, hormonal and storage roles, and their <strong>function depends on their 3D structure</strong>.</p>"
  },
  {
   "id": "s1",
   "title": "The peptide bond and peptides",
   "html": "<p>The <strong>peptide bond</strong> forms between the COOH of one amino acid and the NH₂ of the next, giving a chain with an <strong>N-terminal</strong> and a <strong>C-terminal</strong> end. It is <strong>strong</strong> (partial double-bond character), <strong>stable, planar</strong> and does <strong>not rotate</strong>. Examples: <strong>glutathione</strong> (tripeptide of glutamate, cysteine and glycine: antioxidant) and <strong>insulin</strong> (51 amino acids, from pancreatic β-cells, lowers blood glucose).</p>"
  },
  {
   "id": "s2",
   "title": "Levels of structure and classification",
   "html": "<p><strong>Primary</strong>: amino acid sequence (peptide bonds). <strong>Secondary</strong>: hydrogen-bonded <strong>α-helix</strong>, <strong>β-sheets</strong> (parallel or antiparallel) and <strong>β-turns</strong> reversing the chain (rich in <strong>proline and glycine</strong>). <strong>Tertiary</strong>: 3D folding by side-chain interactions; determines function. <strong>Quaternary</strong>: several subunits. Examples: <strong>keratin</strong> (hair, nails, skin; fibrous), <strong>collagen</strong> (skin, bone, tendons, ligaments; fibrous; declines with age), <strong>elastin</strong> (lungs, aorta, skin; stretch and recoil), <strong>haemoglobin</strong> (O₂/CO₂ transport; globular). By shape: <strong>fibrous</strong> vs <strong>globular</strong>. By composition: <strong>simple</strong> (albumin, globulins) or <strong>conjugated</strong> with a prosthetic group: <strong>glycoproteins</strong> (blood group antigens), <strong>lipoproteins</strong> (LDL, HDL), <strong>nucleoproteins</strong> (histones), <strong>phosphoproteins</strong> (casein), <strong>metalloproteins</strong> (haemoglobin, cytochromes).</p>"
  },
  {
   "id": "s3",
   "title": "Denaturation",
   "html": "<p>Loss of secondary, tertiary and quaternary structure (bonds broken, protein unfolded) with <strong>loss of biological activity</strong>; the primary structure is preserved. Causes: <strong>heat above ~41 °C</strong> (why high fever is dangerous), <strong>acidic pH (2-5)</strong> or <strong>basic pH (≥ 10)</strong>, <strong>ethanol</strong>, high salt concentration, reducing and oxidising agents, <strong>detergents</strong>, <strong>heavy metal ions (Ag⁺, Pb²⁺, Hg²⁺)</strong> and strong agitation.</p>"
  }
 ],
 "exam": [
  "Oligopeptide 2-10, polypeptide > 10, protein > 100 amino acids.",
  "Peptide bond: COOH + NH₂; strong, planar, no rotation; N- to C-terminus.",
  "Glutathione (Glu, Cys, Gly): antioxidant; insulin: 51 amino acids.",
  "Roles: structural, transport, defence, enzymatic, hormonal, storage.",
  "Primary (sequence), secondary (α-helix, β-sheet, turns), tertiary (3D), quaternary (subunits).",
  "β-turns rich in proline and glycine.",
  "Fibrous (keratin, collagen, elastin) vs globular (haemoglobin).",
  "Simple (albumin) vs conjugated (glyco-, lipo-, nucleo-, phospho-, metalloproteins).",
  "Denaturation: heat > 41 °C, pH extremes, ethanol, salts, detergents, heavy metals."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Four levels of protein structure",
   "caption": "Each level builds on the previous one. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"190\" y1=\"70\" x2=\"200\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"370\" y1=\"70\" x2=\"380\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"550\" y1=\"70\" x2=\"560\" y2=\"70\"/>",
   "parts": {
    "p1": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Primary: amino acid",
      "sequence (peptide bonds)"
     ],
     "lx": 105.0,
     "ly": 68.0
    },
    "p2": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"200\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Secondary: α-helix, β-sheet,",
      "turns (H-bonds)"
     ],
     "lx": 285.0,
     "ly": 68.0
    },
    "p3": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"380\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Tertiary: 3D folding",
      "(side-chain interactions)"
     ],
     "lx": 465.0,
     "ly": 68.0
    },
    "p4": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"560\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Quaternary: several",
      "subunits (haemoglobin)"
     ],
     "lx": 645.0,
     "ly": 68.0
    },
    "den": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"280\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Denaturation: loss of 2°-4°,",
      "loss of function"
     ],
     "lx": 380.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "p1": [
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
    "p2": [
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
    "p3": [
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
    "p4": [
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
    "den": [
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
    ]
   }
  }
 },
 "mcqs": [
  {
   "q": "A protein contains more than about:",
   "options": [
    "10 amino acids",
    "50 amino acids",
    "1,000 amino acids",
    "100 amino acids"
   ],
   "answer": 3,
   "why": "Polypeptides > 10."
  },
  {
   "q": "The peptide bond forms between:",
   "options": [
    "Two amino groups",
    "Two carboxyl groups",
    "COOH and NH₂",
    "Two side chains"
   ],
   "answer": 2,
   "why": "With release of water."
  },
  {
   "q": "The peptide bond is:",
   "options": [
    "Weak",
    "Planar and rigid",
    "Ionic",
    "Freely rotating"
   ],
   "answer": 1,
   "why": "No rotation."
  },
  {
   "q": "Insulin contains:",
   "options": [
    "3 amino acids",
    "100 amino acids",
    "51 amino acids",
    "21 amino acids"
   ],
   "answer": 2,
   "why": "Made by pancreatic β-cells."
  },
  {
   "q": "Glutathione is a(n):",
   "options": [
    "Antioxidant",
    "Lipid",
    "Hormone",
    "Enzyme"
   ],
   "answer": 0,
   "why": "Glu, Cys, Gly."
  },
  {
   "q": "The α-helix is part of the:",
   "options": [
    "Quaternary structure",
    "Primary structure",
    "Tertiary structure",
    "Secondary structure"
   ],
   "answer": 3,
   "why": "Stabilised by hydrogen bonds."
  },
  {
   "q": "Which amino acids favour β-turns?",
   "options": [
    "Asp and Glu",
    "Pro and Gly",
    "Leu and Ile",
    "Lys and Arg"
   ],
   "answer": 1,
   "why": "They change the chain's direction."
  },
  {
   "q": "Quaternary structure refers to:",
   "options": [
    "Assembly of several subunits",
    "A single helix",
    "Hydrogen bonds",
    "Amino acid sequence"
   ],
   "answer": 0,
   "why": "E.g. haemoglobin."
  },
  {
   "q": "Which protein is globular?",
   "options": [
    "Elastin",
    "Keratin",
    "Collagen",
    "Haemoglobin"
   ],
   "answer": 3,
   "why": "The others are fibrous."
  },
  {
   "q": "LDL and HDL are:",
   "options": [
    "Lipoproteins",
    "Phosphoproteins",
    "Nucleoproteins",
    "Glycoproteins"
   ],
   "answer": 0,
   "why": "Conjugated proteins."
  },
  {
   "q": "Casein is a:",
   "options": [
    "Phosphoprotein",
    "Metalloprotein",
    "Simple protein",
    "Lipoprotein"
   ],
   "answer": 0,
   "why": "Milk protein."
  },
  {
   "q": "Denaturation affects:",
   "options": [
    "Only the primary structure",
    "2°, 3° and 4°",
    "Nothing",
    "Only peptide bonds"
   ],
   "answer": 1,
   "why": "Function is lost."
  },
  {
   "q": "Which does NOT denature proteins?",
   "options": [
    "Heavy metal ions",
    "Heat above 41 °C",
    "Detergents",
    "Physiological pH 7.4"
   ],
   "answer": 3,
   "why": "Extreme pH does."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "p1",
   "options": [
    "Secondary structure",
    "Primary structure",
    "Tertiary structure",
    "Quaternary structure"
   ],
   "answer": 1,
   "why": "The arrow points to: Primary structure. The ordered sequence of amino acids, held by peptide bonds from N- to C-terminus."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "p2",
   "options": [
    "Denaturation",
    "Secondary structure",
    "Quaternary structure",
    "Primary structure"
   ],
   "answer": 1,
   "why": "The arrow points to: Secondary structure. Local folding stabilised by hydrogen bonds: α-helix, parallel and antiparallel β-sheets, β-turns (proline, glycine)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "p3",
   "options": [
    "Primary structure",
    "Secondary structure",
    "Tertiary structure",
    "Denaturation"
   ],
   "answer": 2,
   "why": "The arrow points to: Tertiary structure. Overall 3D shape from interactions between side chains; it determines function."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "p4",
   "options": [
    "Tertiary structure",
    "Secondary structure",
    "Quaternary structure",
    "Primary structure"
   ],
   "answer": 2,
   "why": "The arrow points to: Quaternary structure. Association of several polypeptide subunits."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "den",
   "options": [
    "Quaternary structure",
    "Tertiary structure",
    "Secondary structure",
    "Denaturation"
   ],
   "answer": 3,
   "why": "The arrow points to: Denaturation. Heat (> 41 °C), extreme pH, solvents, salts, heavy metals, detergents or agitation unfold the protein; the primary structure remains."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Peptide size categories?",
   "back": "Oligopeptide 2-10, polypeptide > 10, protein > 100 amino acids."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Properties of the peptide bond?",
   "back": "COOH + NH₂; strong, stable, planar, partial double bond, no rotation; N-terminal to C-terminal."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Examples of peptides?",
   "back": "Glutathione (Glu-Cys-Gly, antioxidant); insulin (51 amino acids, β-cells, lowers glucose)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Four levels of protein structure?",
   "back": "Primary: sequence. Secondary: α-helix, β-sheet, turns. Tertiary: 3D folding. Quaternary: subunits."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Fibrous vs globular examples?",
   "back": "Fibrous: keratin, collagen, elastin. Globular: haemoglobin."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Conjugated proteins?",
   "back": "Glycoproteins (blood groups), lipoproteins (LDL/HDL), nucleoproteins (histones), phosphoproteins (casein), metalloproteins (haemoglobin, cytochromes)."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Causes of denaturation?",
   "back": "Heat > 41 °C, pH 2-5 or ≥ 10, ethanol, high NaCl, redox agents, detergents, heavy metals (Ag⁺, Pb²⁺, Hg²⁺), agitation."
  },
  {
   "id": "img-p1",
   "type": "image",
   "target": "p1",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Primary structure. The ordered sequence of amino acids, held by peptide bonds from N- to C-terminus."
  },
  {
   "id": "img-p2",
   "type": "image",
   "target": "p2",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Secondary structure. Local folding stabilised by hydrogen bonds: α-helix, parallel and antiparallel β-sheets, β-turns (proline, glycine)."
  },
  {
   "id": "img-p3",
   "type": "image",
   "target": "p3",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Tertiary structure. Overall 3D shape from interactions between side chains; it determines function."
  },
  {
   "id": "img-p4",
   "type": "image",
   "target": "p4",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Quaternary structure. Association of several polypeptide subunits."
  },
  {
   "id": "img-den",
   "type": "image",
   "target": "den",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Denaturation. Heat (> 41 °C), extreme pH, solvents, salts, heavy metals, detergents or agitation unfold the protein; the primary structure remains."
  }
 ],
 "deeper": [
  {
   "title": "Why a high fever is dangerous",
   "html": "<p>Proteins keep their working shape through many weak bonds that heat disrupts. Above about 41 °C, some body proteins begin to unfold and lose activity; enzymes stop working and cells are damaged, especially in the brain. That is why very high fever and heat stroke are emergencies.</p><p class='src'>Source: the lecture's denaturation slide.</p>"
  }
 ],
 "resources": [
  {
   "title": "Protein structure (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/macromolecules/proteins-and-amino-acids/a/orders-of-protein-structure",
   "kind": "Article",
   "why": "Primary to quaternary structure.",
   "note": ""
  },
  {
   "title": "Proteins (NCBI Bookshelf, Molecular Cell Biology)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK21581/",
   "kind": "Book",
   "why": "Hierarchical structure of proteins.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Protein structure (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/macromolecules/proteins-and-amino-acids/a/orders-of-protein-structure"
  },
  {
   "name": "Proteins (NCBI Bookshelf, Molecular Cell Biology)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK21581/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["biochem1-enzymes"] = {
 "id": "biochem1-enzymes",
 "subject": "biochem1",
 "group": "Structural biochemistry",
 "title": "Enzymes and coenzymes",
 "sourceFile": "Enzymes and coenzymes, Chapter 3 (2025-2026) (Biochemistry, Pr. F.Z. Lahlou)",
 "sourceUrl": "https://drive.google.com/file/d/1jmwqjpaIayMD4cFx-tn-5D0UZzxNgZOm/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p><strong>Enzymes</strong> are biological catalysts, proteins except the <strong>ribozymes</strong> (catalytic RNA). They speed up reactions by <strong>lowering the activation energy</strong>, are recovered unchanged, act at low doses, and change <strong>neither the yield nor the equilibrium</strong>. Many need <strong>cofactors</strong>.</p>"
  },
  {
   "id": "s1",
   "title": "Specificity and naming",
   "html": "<p><strong>Double specificity</strong>: for the <strong>substrate</strong> ('lock and key' model) and for the <strong>reaction</strong> (degradation or synthesis). Common names usually indicate substrate and reaction and end in <strong>-ase</strong> (glucokinase, proteases, lactate dehydrogenase; exceptions: pepsin, trypsin). The <strong>EC number</strong> (International Union of Biochemistry) has four digits: <strong>class</strong>, subclass, sub-subclass, specific enzyme. Six classes: <strong>1 oxidoreductases, 2 transferases, 3 hydrolases, 4 lyases, 5 isomerases, 6 ligases</strong>.</p>"
  },
  {
   "id": "s2",
   "title": "Regulation and conditions",
   "html": "<p>Enzymes are switched on or off by <strong>allosteric</strong> effectors (binding at a site other than the active site, with <strong>cooperativity</strong>), <strong>phosphorylation/dephosphorylation</strong>, and <strong>association/dissociation</strong> of subunits. <strong>Inhibition</strong>: <strong>competitive</strong> (inhibitor competes with the substrate for the active site; overcome by more substrate), <strong>non-competitive</strong> (binds elsewhere, lowers activity whatever the substrate level), <strong>uncompetitive</strong> (binds only the enzyme-substrate complex). <strong>pH</strong> changes charges and shape, preventing substrate binding; each enzyme has an <strong>optimal pH</strong>. <strong>Temperature</strong> affects structure; each has an <strong>optimal temperature</strong>, above which it denatures.</p>"
  },
  {
   "id": "s3",
   "title": "Cofactors and coenzymes",
   "html": "<p><strong>Cofactors</strong> are 'helper molecules'. <strong>Inorganic</strong>: <strong>Mg²⁺</strong> (kinases), <strong>Zn²⁺</strong> (DNA polymerase, alcohol dehydrogenase), <strong>Fe²⁺</strong> (catalase), <strong>Se</strong> (glutathione peroxidases). <strong>Organic = coenzymes</strong>: non-protein molecules, often vitamins or their derivatives, either tightly bound (<strong>prosthetic group</strong>) or loosely bound (<strong>co-substrate</strong>). Apoenzyme (protein) + cofactor = <strong>holoenzyme</strong>. Main coenzymes: <strong>TPP</strong> (thiamine, B1: decarboxylation), <strong>FMN/FAD</strong> (riboflavin, B2: redox, 2 H), <strong>NAD⁺/NADP⁺</strong> (niacin, B3: redox, hydride), <strong>biotin</strong> (carboxylation), <strong>coenzyme A</strong> (pantothenate: acyl carrier), <strong>pyridoxal phosphate</strong> (B6: amino-group transfer), <strong>coenzyme Q</strong> and <strong>cytochrome c</strong> (electron transfer).</p>"
  }
 ],
 "exam": [
  "Enzymes: catalysts, proteins except ribozymes; lower activation energy.",
  "Do not change yield or equilibrium; recycled; low doses.",
  "Double specificity: substrate (lock and key) and reaction.",
  "Names end in -ase; EC number: 4 digits.",
  "Classes: oxidoreductases, transferases, hydrolases, lyases, isomerases, ligases.",
  "Regulation: allosteric, phosphorylation, association/dissociation.",
  "Inhibition: competitive, non-competitive, uncompetitive.",
  "Optimal pH and temperature.",
  "Inorganic cofactors: Mg²⁺ (kinases), Zn²⁺, Fe²⁺, Se.",
  "Coenzymes: TPP, FAD, NAD⁺, biotin, CoA, PLP, CoQ, cytochrome c."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "The six EC enzyme classes",
   "caption": "First digit of the Enzyme Commission number. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs>",
   "parts": {
    "e1": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"220\" height=\"55\" rx=\"10\"/>",
     "label": [
      "1. Oxidoreductases",
      "(dehydrogenases)"
     ],
     "lx": 130.0,
     "ly": 65.5
    },
    "e2": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"260\" y=\"40\" width=\"220\" height=\"55\" rx=\"10\"/>",
     "label": [
      "2. Transferases",
      "(kinases)"
     ],
     "lx": 370.0,
     "ly": 65.5
    },
    "e3": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"500\" y=\"40\" width=\"220\" height=\"55\" rx=\"10\"/>",
     "label": [
      "3. Hydrolases",
      "(proteases)"
     ],
     "lx": 610.0,
     "ly": 65.5
    },
    "e4": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"20\" y=\"160\" width=\"220\" height=\"55\" rx=\"10\"/>",
     "label": [
      "4. Lyases"
     ],
     "lx": 130.0,
     "ly": 193.5
    },
    "e5": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"260\" y=\"160\" width=\"220\" height=\"55\" rx=\"10\"/>",
     "label": [
      "5. Isomerases"
     ],
     "lx": 370.0,
     "ly": 193.5
    },
    "e6": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"500\" y=\"160\" width=\"220\" height=\"55\" rx=\"10\"/>",
     "label": [
      "6. Ligases",
      "(synthetases)"
     ],
     "lx": 610.0,
     "ly": 185.5
    }
   },
   "arrows": {
    "e1": [
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
    "e2": [
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
    "e3": [
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
    "e4": [
     {
      "t": [
       20.0,
       168.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "e5": [
     {
      "t": [
       260.0,
       168.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "e6": [
     {
      "t": [
       500.0,
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
   "q": "Enzymes speed up reactions by:",
   "options": [
    "Changing the equilibrium",
    "Increasing yield",
    "Being consumed",
    "Lowering the activation energy"
   ],
   "answer": 3,
   "why": "They are recovered unchanged."
  },
  {
   "q": "Ribozymes are:",
   "options": [
    "Protein enzymes",
    "Vitamins",
    "Catalytic RNA molecules",
    "Coenzymes"
   ],
   "answer": 2,
   "why": "The exception to enzymes being proteins."
  },
  {
   "q": "The 'lock and key' model describes:",
   "options": [
    "Reaction specificity",
    "Inhibition",
    "Denaturation",
    "Substrate specificity"
   ],
   "answer": 3,
   "why": "Double specificity."
  },
  {
   "q": "How many digits are in an EC number?",
   "options": [
    "3",
    "6",
    "4",
    "2"
   ],
   "answer": 2,
   "why": "Class, subclass, sub-subclass, enzyme."
  },
  {
   "q": "Which EC class is number 3?",
   "options": [
    "Hydrolases",
    "Transferases",
    "Ligases",
    "Lyases"
   ],
   "answer": 0,
   "why": "They use water to break bonds."
  },
  {
   "q": "Kinases belong to which class?",
   "options": [
    "Isomerases",
    "Transferases",
    "Oxidoreductases",
    "Ligases"
   ],
   "answer": 1,
   "why": "They transfer phosphate groups."
  },
  {
   "q": "A competitive inhibitor:",
   "options": [
    "Destroys the enzyme",
    "Competes with the substrate for the active site",
    "Binds the enzyme-substrate complex only",
    "Binds elsewhere"
   ],
   "answer": 1,
   "why": "Overcome by more substrate."
  },
  {
   "q": "An uncompetitive inhibitor binds:",
   "options": [
    "The coenzyme",
    "The substrate",
    "The free enzyme",
    "The ES complex"
   ],
   "answer": 3,
   "why": "Distinct from non-competitive."
  },
  {
   "q": "Which ion is the cofactor of kinases?",
   "options": [
    "Se",
    "Mg²⁺",
    "Zn²⁺",
    "Fe²⁺"
   ],
   "answer": 1,
   "why": "Zn²⁺: DNA polymerase."
  },
  {
   "q": "Apoenzyme + cofactor gives the:",
   "options": [
    "Holoenzyme",
    "Zymogen",
    "Isoenzyme",
    "Proenzyme"
   ],
   "answer": 0,
   "why": "Active complete enzyme."
  },
  {
   "q": "Which coenzyme carries acyl groups?",
   "options": [
    "Coenzyme A",
    "Biotin",
    "TPP",
    "NAD⁺"
   ],
   "answer": 0,
   "why": "From pantothenic acid."
  },
  {
   "q": "Pyridoxal phosphate is needed for:",
   "options": [
    "Electron transport",
    "Decarboxylation only",
    "Carboxylation",
    "Transfer of amino groups"
   ],
   "answer": 3,
   "why": "Transaminases (vitamin B6)."
  },
  {
   "q": "Biotin is the coenzyme of:",
   "options": [
    "Decarboxylation",
    "Hydrolysis",
    "Isomerisation",
    "Carboxylation"
   ],
   "answer": 3,
   "why": "E.g. pyruvate carboxylase."
  },
  {
   "q": "TPP (thiamine pyrophosphate) is needed for:",
   "options": [
    "Decarboxylation",
    "Methylation",
    "Carboxylation",
    "Hydrolysis"
   ],
   "answer": 0,
   "why": "Vitamin B1."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "e1",
   "options": [
    "Transferases",
    "Oxidoreductases",
    "Lyases",
    "Hydrolases"
   ],
   "answer": 1,
   "why": "The arrow points to: Oxidoreductases. Catalyse redox reactions, e.g. lactate dehydrogenase (NAD⁺/FAD)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "e2",
   "options": [
    "Isomerases",
    "Lyases",
    "Transferases",
    "Oxidoreductases"
   ],
   "answer": 2,
   "why": "The arrow points to: Transferases. Transfer groups, e.g. glucokinase transfers phosphate."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "e3",
   "options": [
    "Isomerases",
    "Transferases",
    "Hydrolases",
    "Lyases"
   ],
   "answer": 2,
   "why": "The arrow points to: Hydrolases. Break bonds with water, e.g. proteases, pepsin, trypsin."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "e4",
   "options": [
    "Isomerases",
    "Lyases",
    "Hydrolases",
    "Transferases"
   ],
   "answer": 1,
   "why": "The arrow points to: Lyases. Break or form bonds without water or oxidation."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "e5",
   "options": [
    "Isomerases",
    "Ligases",
    "Lyases",
    "Hydrolases"
   ],
   "answer": 0,
   "why": "The arrow points to: Isomerases. Rearrange a molecule into an isomer."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "e6",
   "options": [
    "Lyases",
    "Hydrolases",
    "Ligases",
    "Oxidoreductases"
   ],
   "answer": 2,
   "why": "The arrow points to: Ligases. Join two molecules using ATP energy."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Properties of enzymes?",
   "back": "Proteins (except ribozymes), catalysts lowering activation energy, recycled, low doses, no effect on yield or equilibrium, double specificity."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Enzyme naming?",
   "back": "Common names end in -ase (except pepsin, trypsin); EC number: class, subclass, sub-subclass, enzyme."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Six enzyme classes?",
   "back": "Oxidoreductases, transferases, hydrolases, lyases, isomerases, ligases."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Mechanisms of enzyme regulation?",
   "back": "Allosteric effectors (cooperativity), phosphorylation/dephosphorylation, association/dissociation of subunits."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Types of inhibition?",
   "back": "Competitive (active site, overcome by substrate), non-competitive (other site), uncompetitive (enzyme-substrate complex only)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Inorganic cofactors?",
   "back": "Mg²⁺ (kinases), Zn²⁺ (DNA polymerase, alcohol dehydrogenase), Fe²⁺ (catalase), Se (glutathione peroxidase)."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Main coenzymes and roles?",
   "back": "TPP decarboxylation; FAD/FMN and NAD⁺/NADP⁺ redox; biotin carboxylation; CoA acyl carrier; PLP amino transfer; CoQ and cytochrome c electron transfer."
  },
  {
   "id": "img-e1",
   "type": "image",
   "target": "e1",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Oxidoreductases. Catalyse redox reactions, e.g. lactate dehydrogenase (NAD⁺/FAD)."
  },
  {
   "id": "img-e2",
   "type": "image",
   "target": "e2",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Transferases. Transfer groups, e.g. glucokinase transfers phosphate."
  },
  {
   "id": "img-e3",
   "type": "image",
   "target": "e3",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Hydrolases. Break bonds with water, e.g. proteases, pepsin, trypsin."
  },
  {
   "id": "img-e4",
   "type": "image",
   "target": "e4",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Lyases. Break or form bonds without water or oxidation."
  },
  {
   "id": "img-e5",
   "type": "image",
   "target": "e5",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Isomerases. Rearrange a molecule into an isomer."
  },
  {
   "id": "img-e6",
   "type": "image",
   "target": "e6",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Ligases. Join two molecules using ATP energy."
  }
 ],
 "deeper": [
  {
   "title": "Why enzymes don't change the equilibrium",
   "html": "<p>An enzyme lowers the energy barrier for the forward and reverse reactions equally, so both go faster and equilibrium is simply reached sooner. The final ratio of products to substrates is set by thermodynamics, not by the catalyst. Cells steer metabolism by coupling reactions and by controlling which enzymes are active.</p><p class='src'>Source: the lecture's biochemical properties slide.</p>"
  }
 ],
 "resources": [
  {
   "title": "Enzymes (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/energy-and-enzymes",
   "kind": "Website",
   "why": "Activation energy, regulation and inhibition.",
   "note": ""
  },
  {
   "title": "ExPASy ENZYME database",
   "url": "https://enzyme.expasy.org/",
   "kind": "Website",
   "why": "EC numbers and enzyme nomenclature.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Enzymes (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/energy-and-enzymes"
  },
  {
   "name": "ExPASy ENZYME database",
   "url": "https://enzyme.expasy.org/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["biochem1-carbohydrates"] = {
 "id": "biochem1-carbohydrates",
 "subject": "biochem1",
 "group": "Structural biochemistry",
 "title": "Carbohydrates: structure and classification",
 "sourceFile": "Carbohydrates, Chapter 4 (2025-2026) (Biochemistry, Pr. F.Z. Lahlou)",
 "sourceUrl": "https://drive.google.com/file/d/1-HSz1mWcKkSHcavWZUjEXNebqpg_uelq/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p><strong>Carbohydrates</strong> (sugars, saccharides, oses) are hydrophilic organic molecules: <strong>polyhydroxylated</strong> chains with one <strong>carbonyl</strong> group: an aldehyde (<strong>aldose</strong>) or a ketone (<strong>ketose</strong>). Roles: <strong>energy</strong> (primary fuel; glycaemia), <strong>structure</strong> (cartilage), components of <strong>DNA/RNA</strong> and other biomolecules, and metabolism.</p>"
  },
  {
   "id": "s1",
   "title": "Monosaccharides and isomers",
   "html": "<p>Formula <strong>CₙH₂ₙOₙ</strong>. By carbons: <strong>trioses</strong> (glyceraldehyde, dihydroxyacetone), <strong>pentoses</strong> (ribose, deoxyribose: RNA/DNA), <strong>hexoses</strong> (glucose, galactose, mannose: aldoses; fructose: ketose). Classified also by carbonyl type, number of units, linear/cyclic shape, D/L form. <strong>D/L stereoisomers</strong>: D-sugars predominate biologically. <strong>Epimers</strong> differ at only one carbon (glucose and galactose at C4; glucose and mannose at C2). In solution sugars cyclise by an intramolecular <strong>hemiacetal</strong> (aldoses) or <strong>hemiketal</strong> (ketoses) reaction, creating a new chiral anomeric carbon with two <strong>anomers, α and β</strong>.</p>"
  },
  {
   "id": "s2",
   "title": "Disaccharides and reducing sugars",
   "html": "<p>Monosaccharides join by <strong>glycosidic bonds</strong> (α or β). Disaccharides (C₁₂H₂₂O₁₁): <strong>sucrose</strong> = glucose + fructose (α1-2β), <strong>non-reducing</strong> (no free anomeric OH); <strong>lactose</strong> (milk sugar) = galactose + glucose (β1-4), <strong>reducing</strong>; lactase deficiency causes <strong>lactose intolerance</strong>; <strong>maltose</strong> = glucose + glucose (α1-4). A <strong>reducing sugar</strong> has a free anomeric OH (cyclic) or free carbonyl (linear) and gives a <strong>positive Fehling test</strong> (Cu²⁺ reduced to a <strong>brick-red</strong> Cu₂O precipitate). Other reactions: reduction, oxidation, phosphorylation, epimerisation.</p>"
  },
  {
   "id": "s3",
   "title": "Polysaccharides",
   "html": "<p><strong>Homopolysaccharides</strong> (one monomer): <strong>glycogen</strong> (glucose, ~50,000 units; <strong>α1-4</strong> chains with <strong>α1-6</strong> branches; animal storage in <strong>liver and muscle</strong>), <strong>starch</strong> (plant storage: amylose, linear, + amylopectin, branched), <strong>cellulose</strong> (glucose, <strong>β1-4</strong>; plant structure; undigested by humans; aids intestinal transit). <strong>Heteropolysaccharides</strong> = <strong>glycosaminoglycans (GAGs)</strong>: two or more monomer types, bound to proteins as <strong>proteoglycans</strong>: <strong>hyaluronic acid</strong> (cartilage, tendons, vitreous humour, synovial fluid), <strong>chondroitin sulphate</strong> (tensile strength of cartilage, tendons, arteries), keratan sulphate. <strong>Proteoglycans</strong> are mostly carbohydrate (GAG chains on a protein core); <strong>glycoproteins</strong> are mostly protein with short branched oligosaccharides.</p>"
  }
 ],
 "exam": [
  "Carbohydrate: polyhydroxylated + one carbonyl (aldose or ketose).",
  "Roles: energy, structure, nucleic acids, metabolism.",
  "CₙH₂ₙOₙ; trioses, pentoses (ribose), hexoses (glucose, fructose).",
  "D-sugars predominate; epimers differ at one carbon.",
  "Cyclisation → α/β anomers.",
  "Sucrose (Glc α1-2β Fru) non-reducing; lactose (Gal β1-4 Glc) and maltose (Glc α1-4 Glc) reducing.",
  "Fehling test: brick-red precipitate with reducing sugars.",
  "Glycogen: α1-4 + α1-6 branches; liver and muscle.",
  "Cellulose: β1-4, indigestible fibre.",
  "GAGs (hyaluronic acid, chondroitin sulphate) form proteoglycans."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Classifying carbohydrates",
   "caption": "By size, from monosaccharides to polysaccharides. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"190\" y1=\"70\" x2=\"200\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"370\" y1=\"70\" x2=\"380\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"550\" y1=\"70\" x2=\"560\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"730\" y1=\"70\" x2=\"380\" y2=\"200\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"645\" y1=\"100\" x2=\"645\" y2=\"170\"/>",
   "parts": {
    "mono": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Monosaccharides: trioses,",
      "pentoses, hexoses"
     ],
     "lx": 105.0,
     "ly": 68.0
    },
    "di": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"200\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Disaccharides: sucrose,",
      "lactose, maltose"
     ],
     "lx": 285.0,
     "ly": 68.0
    },
    "oligo": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"380\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Oligosaccharides",
      "(2-10 units)"
     ],
     "lx": 465.0,
     "ly": 68.0
    },
    "poly": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"560\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Polysaccharides",
      "(> 10 units)"
     ],
     "lx": 645.0,
     "ly": 68.0
    },
    "homo": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"380\" y=\"170\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Homo: glycogen, starch,",
      "cellulose"
     ],
     "lx": 465.0,
     "ly": 198.0
    },
    "hetero": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"560\" y=\"170\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Hetero: GAGs",
      "(hyaluronic acid…)"
     ],
     "lx": 645.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "mono": [
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
    "di": [
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
    "oligo": [
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
    "poly": [
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
    "homo": [
     {
      "t": [
       380.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "hetero": [
     {
      "t": [
       560.0,
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
   "q": "An aldose contains a:",
   "options": [
    "Carboxyl group",
    "Ketone group",
    "Amino group",
    "Aldehyde group"
   ],
   "answer": 3,
   "why": "Ketoses have a ketone."
  },
  {
   "q": "The general formula of monosaccharides is:",
   "options": [
    "CₙH₂ₙ₊₂",
    "CₙHₙOₙ",
    "CₙH₂ₙOₙ",
    "C₁₂H₂₂O₁₁"
   ],
   "answer": 2,
   "why": "Disaccharides: C₁₂H₂₂O₁₁."
  },
  {
   "q": "Fructose is a:",
   "options": [
    "Disaccharide",
    "Triose",
    "Pentose aldose",
    "Hexose ketose"
   ],
   "answer": 3,
   "why": "Glucose is a hexose aldose."
  },
  {
   "q": "Ribose is a:",
   "options": [
    "Triose",
    "Heptose",
    "Pentose",
    "Hexose"
   ],
   "answer": 2,
   "why": "Component of RNA."
  },
  {
   "q": "Epimers differ at:",
   "options": [
    "Only one carbon",
    "No carbon",
    "All carbons",
    "The anomeric carbon only"
   ],
   "answer": 0,
   "why": "E.g. glucose and galactose (C4)."
  },
  {
   "q": "α and β anomers arise from:",
   "options": [
    "Hydrolysis",
    "Cyclisation",
    "Phosphorylation",
    "Oxidation"
   ],
   "answer": 1,
   "why": "Hemiacetal formation."
  },
  {
   "q": "Sucrose is composed of:",
   "options": [
    "Glucose + glucose",
    "Glucose + fructose",
    "Fructose + galactose",
    "Glucose + galactose"
   ],
   "answer": 1,
   "why": "α1-2β bond."
  },
  {
   "q": "Why is sucrose non-reducing?",
   "options": [
    "It contains fructose",
    "It is linear",
    "It is too large",
    "It has no free anomeric OH"
   ],
   "answer": 3,
   "why": "Both anomeric carbons are in the bond."
  },
  {
   "q": "Lactose is made of:",
   "options": [
    "Glucose + fructose",
    "Galactose + glucose (β1-4)",
    "Two glucoses",
    "Mannose + glucose"
   ],
   "answer": 1,
   "why": "Milk sugar."
  },
  {
   "q": "A positive Fehling test gives:",
   "options": [
    "Brick-red precipitate",
    "Blue solution",
    "No change",
    "Purple colour"
   ],
   "answer": 0,
   "why": "Cu²⁺ reduced to Cu₂O."
  },
  {
   "q": "Glycogen branches are formed by:",
   "options": [
    "α1-6 bonds",
    "β1-4 bonds",
    "α1-2 bonds",
    "α1-4 bonds"
   ],
   "answer": 0,
   "why": "Chains are α1-4."
  },
  {
   "q": "Where is glycogen stored?",
   "options": [
    "Adipose tissue only",
    "Brain and kidney",
    "Blood",
    "Liver and muscle"
   ],
   "answer": 3,
   "why": "Animal storage."
  },
  {
   "q": "Cellulose is indigestible for humans because of its:",
   "options": [
    "α1-4 bonds",
    "Charge",
    "Size",
    "β1-4 bonds"
   ],
   "answer": 3,
   "why": "Aids intestinal transit."
  },
  {
   "q": "Hyaluronic acid is a:",
   "options": [
    "Glycosaminoglycan",
    "Homopolysaccharide",
    "Disaccharide",
    "Glycoprotein"
   ],
   "answer": 0,
   "why": "In cartilage, vitreous, synovial fluid."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "mono",
   "options": [
    "Polysaccharides",
    "Monosaccharides",
    "Disaccharides",
    "Oligosaccharides"
   ],
   "answer": 1,
   "why": "The arrow points to: Monosaccharides. CₙH₂ₙOₙ: glyceraldehyde and dihydroxyacetone (C3), ribose and deoxyribose (C5), glucose, galactose, fructose, mannose (C6)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "di",
   "options": [
    "Homopolysaccharides",
    "Monosaccharides",
    "Disaccharides",
    "Polysaccharides"
   ],
   "answer": 2,
   "why": "The arrow points to: Disaccharides. C₁₂H₂₂O₁₁: sucrose (Glc α1-2β Fru, non-reducing), lactose (Gal β1-4 Glc), maltose (Glc α1-4 Glc)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "oligo",
   "options": [
    "Homopolysaccharides",
    "Disaccharides",
    "Oligosaccharides",
    "Polysaccharides"
   ],
   "answer": 2,
   "why": "The arrow points to: Oligosaccharides. 2-10 units, e.g. on glycolipids and glycoproteins."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "poly",
   "options": [
    "Oligosaccharides",
    "Polysaccharides",
    "Homopolysaccharides",
    "Disaccharides"
   ],
   "answer": 1,
   "why": "The arrow points to: Polysaccharides. More than 10 units."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "homo",
   "options": [
    "Homopolysaccharides",
    "Heteropolysaccharides",
    "Oligosaccharides",
    "Polysaccharides"
   ],
   "answer": 0,
   "why": "The arrow points to: Homopolysaccharides. One type of monomer: glycogen (animal storage), starch (plant storage), cellulose (structural, β1-4)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "hetero",
   "options": [
    "Monosaccharides",
    "Polysaccharides",
    "Heteropolysaccharides",
    "Oligosaccharides"
   ],
   "answer": 2,
   "why": "The arrow points to: Heteropolysaccharides. Glycosaminoglycans with two or more monomer types, bound to proteins as proteoglycans."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Define carbohydrates.",
   "back": "Hydrophilic polyhydroxylated molecules with one carbonyl group: aldehyde (aldose) or ketone (ketose)."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Biological roles?",
   "back": "Energy (primary fuel, glycaemia), structure (cartilage), nucleic acid components, metabolism."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Classification of monosaccharides?",
   "back": "By carbonyl (aldose/ketose) and carbon number: trioses, pentoses (ribose), hexoses (glucose, galactose, mannose, fructose)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Isomers of sugars?",
   "back": "D/L stereoisomers (D predominant); epimers (one carbon); α/β anomers after cyclisation."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Main disaccharides?",
   "back": "Sucrose Glc α1-2β Fru (non-reducing); lactose Gal β1-4 Glc (reducing); maltose Glc α1-4 Glc (reducing)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Reducing sugar and Fehling test?",
   "back": "Free anomeric OH or carbonyl; reduces Cu²⁺ to brick-red Cu₂O."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Homopolysaccharides?",
   "back": "Glycogen (α1-4, α1-6 branches; liver, muscle), starch (amylose + amylopectin; plants), cellulose (β1-4; structural)."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "GAGs, proteoglycans, glycoproteins?",
   "back": "GAGs: heteropolysaccharides (hyaluronic acid, chondroitin sulphate); proteoglycans: GAGs on a protein core (mostly sugar); glycoproteins: mostly protein with short sugar chains."
  },
  {
   "id": "img-mono",
   "type": "image",
   "target": "mono",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Monosaccharides. CₙH₂ₙOₙ: glyceraldehyde and dihydroxyacetone (C3), ribose and deoxyribose (C5), glucose, galactose, fructose, mannose (C6)."
  },
  {
   "id": "img-di",
   "type": "image",
   "target": "di",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Disaccharides. C₁₂H₂₂O₁₁: sucrose (Glc α1-2β Fru, non-reducing), lactose (Gal β1-4 Glc), maltose (Glc α1-4 Glc)."
  },
  {
   "id": "img-oligo",
   "type": "image",
   "target": "oligo",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Oligosaccharides. 2-10 units, e.g. on glycolipids and glycoproteins."
  },
  {
   "id": "img-poly",
   "type": "image",
   "target": "poly",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Polysaccharides. More than 10 units."
  },
  {
   "id": "img-homo",
   "type": "image",
   "target": "homo",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Homopolysaccharides. One type of monomer: glycogen (animal storage), starch (plant storage), cellulose (structural, β1-4)."
  },
  {
   "id": "img-hetero",
   "type": "image",
   "target": "hetero",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Heteropolysaccharides. Glycosaminoglycans with two or more monomer types, bound to proteins as proteoglycans."
  }
 ],
 "deeper": [
  {
   "title": "Why cellulose passes through us",
   "html": "<p>Starch and cellulose are both chains of glucose, but starch uses α bonds and cellulose β bonds. Human digestive enzymes cut α1-4 bonds only, so cellulose passes undigested as dietary fibre, adding bulk that speeds intestinal transit. Herbivores rely on gut microbes with β-glucosidases to digest it.</p><p class='src'>Source: the lecture's polysaccharides slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "Carbohydrates (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/macromolecules/carbohydrates-and-sugars/a/carbohydrates",
   "kind": "Article",
   "why": "Monosaccharides, disaccharides, polysaccharides.",
   "note": ""
  },
  {
   "title": "Lactose intolerance (NIDDK)",
   "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/lactose-intolerance",
   "kind": "Website",
   "why": "Clinical relevance of lactose.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Carbohydrates (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/macromolecules/carbohydrates-and-sugars/a/carbohydrates"
  },
  {
   "name": "Lactose intolerance (NIDDK)",
   "url": "https://www.niddk.nih.gov/health-information/digestive-diseases/lactose-intolerance"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["biochem1-lipids"] = {
 "id": "biochem1-lipids",
 "subject": "biochem1",
 "group": "Structural biochemistry",
 "title": "Lipids: structure, classes and lipoproteins",
 "sourceFile": "Lipids, Chapter 5 (2025-2026) (Biochemistry, Pr. F.Z. Lahlou)",
 "sourceUrl": "https://drive.google.com/file/d/1qeT4WNqepPpWuYcLyiluH8bjUkB2C4a3/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p><strong>Lipids</strong> (lipos = fat) are organic molecules <strong>insoluble in water</strong> and soluble in organic solvents (ethanol, chloroform, hexane). They are either <strong>strictly hydrophobic</strong> or <strong>amphiphilic</strong> (amphipathic: a hydrophilic head and hydrophobic tail). Roles: <strong>energy</strong> (the richest fuel, ahead of carbohydrates and proteins), <strong>structure</strong> (membranes), <strong>metabolism</strong>, and <strong>insulation</strong>: electrical (myelin allows fast <strong>saltatory conduction</strong>), water, thermal and mechanical.</p>"
  },
  {
   "id": "s1",
   "title": "Fatty acids",
   "html": "<p>A long hydrocarbon chain with a <strong>carboxylic acid</strong>; linear or branched, <strong>saturated</strong> or <strong>unsaturated</strong>, usually an even number of carbons; amphiphilic; oxidised for energy by <strong>β-oxidation</strong>. Double bonds are <strong>cis</strong> (natural, beneficial: raise 'good' cholesterol) or <strong>trans</strong> (hydrogenated oils in processed foods: cardiovascular disease). Nomenclature: delta, common, <strong>omega</strong>. Saturated: butyric C4:0, caprylic C8:0, <strong>palmitic C16:0</strong>, <strong>stearic C18:0</strong>. Unsaturated: palmitoleic C16:1 (ω7), <strong>linoleic C18:2 (ω6)</strong>, <strong>α-linolenic C18:3 (ω3)</strong>.</p>"
  },
  {
   "id": "s2",
   "title": "Lipid classes",
   "html": "<p><strong>Waxes</strong> (strictly hydrophobic). <strong>Glycerides</strong>: glycerol esters of fatty acids; mono/diglycerides amphiphilic, <strong>triglycerides</strong> strictly hydrophobic. <strong>Phosphoglycerides</strong>: glycerol + 2 fatty acids + phosphate + an alcohol (<strong>choline</strong>, serine, inositol, ethanolamine, glycerol); phosphatidylcholine = <strong>lecithin</strong>. <strong>Sphingolipids</strong>: membrane components (e.g. galactocerebroside). <strong>Sterols</strong>: <strong>cholesterol</strong>, 80% synthesised and 20% dietary; controls <strong>membrane fluidity</strong> and is the precursor of <strong>steroid hormones</strong> (cortisol, testosterone, progesterone), <strong>vitamin D</strong> and <strong>bile salts</strong>; free cholesterol is amphiphilic, esterified cholesterol strictly hydrophobic. <strong>Prostaglandins</strong>: C20 lipid mediators from unsaturated fatty acids (a cyclopentane ring and two chains) causing <strong>pain, inflammation and vasodilation</strong>; synthesised by <strong>COX-1 and COX-2</strong>, inhibited by analgesic and anti-inflammatory drugs.</p>"
  },
  {
   "id": "s3",
   "title": "Lipoproteins",
   "html": "<p>Lipid-protein particles that <strong>transport lipids in blood</strong>: a strictly hydrophobic core (triglycerides, cholesterol esters) and an amphiphilic surface (phospholipids, free cholesterol, apoproteins). <strong>Five classes</strong> separated by density, size and composition (ultracentrifugation): chylomicrons, VLDL, IDL, <strong>LDL</strong>, <strong>HDL</strong>. LDL is taken up by the <strong>LDL receptor</strong> (5 domains); excess LDL promotes <strong>atherosclerosis</strong>, hypertension and heart disease ('bad cholesterol'; HDL is 'good'). The <strong>lipid profile</strong> (triglycerides, LDL-C, HDL-C, total cholesterol) diagnoses <strong>dyslipidaemia</strong>.</p>"
  }
 ],
 "exam": [
  "Lipids: water-insoluble; strictly hydrophobic or amphiphilic.",
  "Roles: energy, structure, metabolism, insulation (myelin).",
  "Fatty acids: saturated/unsaturated, cis (good)/trans (harmful), β-oxidation.",
  "Palmitic C16:0, stearic C18:0, linoleic C18:2 ω6, α-linolenic C18:3 ω3.",
  "Triglycerides: strictly hydrophobic storage.",
  "Phosphoglycerides (lecithin): amphiphilic membrane lipids.",
  "Cholesterol: 80% made, 20% diet; steroids, vitamin D, bile salts.",
  "Prostaglandins: C20, pain and inflammation; COX-1/2 inhibited by NSAIDs.",
  "Lipoproteins: 5 classes; LDL → atherosclerosis; lipid profile."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Main lipid families",
   "caption": "From fatty acids to lipoproteins. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs>",
   "parts": {
    "fa": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Fatty acids: saturated/",
      "unsaturated, cis/trans"
     ],
     "lx": 105.0,
     "ly": 68.0
    },
    "tg": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"200\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Glycerides (TG):",
      "energy storage"
     ],
     "lx": 285.0,
     "ly": 68.0
    },
    "pl": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"380\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Phosphoglycerides:",
      "lecithin (membranes)"
     ],
     "lx": 465.0,
     "ly": 68.0
    },
    "sph": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"560\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Sphingolipids:",
      "membranes, myelin"
     ],
     "lx": 645.0,
     "ly": 68.0
    },
    "chol": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"120\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Cholesterol → steroids,",
      "vitamin D, bile salts"
     ],
     "lx": 220.0,
     "ly": 198.0
    },
    "pg": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"340\" y=\"170\" width=\"180\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Prostaglandins (C20):",
      "inflammation (COX)"
     ],
     "lx": 430.0,
     "ly": 198.0
    },
    "lp": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9ecec\" x=\"540\" y=\"170\" width=\"180\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Lipoproteins:",
      "blood transport (LDL, HDL)"
     ],
     "lx": 630.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "fa": [
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
    "tg": [
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
    "pl": [
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
    "sph": [
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
    "chol": [
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
    "pg": [
     {
      "t": [
       340.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "lp": [
     {
      "t": [
       540.0,
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
   "q": "Lipids are soluble in:",
   "options": [
    "Plasma directly",
    "Water",
    "Acids only",
    "Organic solvents"
   ],
   "answer": 3,
   "why": "Insoluble in water."
  },
  {
   "q": "An amphiphilic molecule is:",
   "options": [
    "Hydrophilic + phobic",
    "Charged",
    "Only hydrophobic",
    "Only hydrophilic"
   ],
   "answer": 0,
   "why": "Also called amphipathic."
  },
  {
   "q": "Myelin's lipid insulation allows:",
   "options": [
    "No conduction",
    "Rapid saltatory conduction",
    "Slow conduction",
    "Muscle contraction"
   ],
   "answer": 1,
   "why": "Electrical insulation."
  },
  {
   "q": "Palmitic acid is:",
   "options": [
    "C16:0",
    "C18:2",
    "C18:3",
    "C4:0"
   ],
   "answer": 0,
   "why": "Saturated."
  },
  {
   "q": "α-Linolenic acid is an:",
   "options": [
    "Omega-7",
    "Saturated fatty acid",
    "Omega-3",
    "Omega-6"
   ],
   "answer": 2,
   "why": "C18:3."
  },
  {
   "q": "Trans fatty acids are associated with:",
   "options": [
    "Better health",
    "Cardiovascular disease",
    "Higher HDL",
    "Vitamin D synthesis"
   ],
   "answer": 1,
   "why": "From hydrogenated oils."
  },
  {
   "q": "Triglycerides are:",
   "options": [
    "Proteins",
    "Strictly hydrophobic",
    "Amphiphilic",
    "Water-soluble"
   ],
   "answer": 1,
   "why": "Storage fat."
  },
  {
   "q": "Lecithin is:",
   "options": [
    "A prostaglandin",
    "A wax",
    "Phosphatidylcholine",
    "Cholesterol ester"
   ],
   "answer": 2,
   "why": "A phosphoglyceride."
  },
  {
   "q": "Most body cholesterol comes from:",
   "options": [
    "Bacteria",
    "Biosynthesis (80%)",
    "Diet (80%)",
    "Bile"
   ],
   "answer": 1,
   "why": "Diet ~20%."
  },
  {
   "q": "Cholesterol is NOT a precursor of:",
   "options": [
    "Cortisol",
    "Bile salts",
    "Insulin",
    "Vitamin D"
   ],
   "answer": 2,
   "why": "Insulin is a peptide."
  },
  {
   "q": "Prostaglandin synthesis is blocked by drugs inhibiting:",
   "options": [
    "HMG-CoA only",
    "LDL receptor",
    "Lipase",
    "COX-1 and COX-2"
   ],
   "answer": 3,
   "why": "NSAIDs, analgesics."
  },
  {
   "q": "Lipoproteins are classified by:",
   "options": [
    "Charge only",
    "Colour",
    "Taste",
    "Density and size"
   ],
   "answer": 3,
   "why": "Ultracentrifugation."
  },
  {
   "q": "High LDL promotes:",
   "options": [
    "Atherosclerosis",
    "Osteoporosis",
    "Anaemia",
    "Hypoglycaemia"
   ],
   "answer": 0,
   "why": "'Bad cholesterol'."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "fa",
   "options": [
    "Fatty acids",
    "Phosphoglycerides",
    "Sphingolipids",
    "Glycerides"
   ],
   "answer": 0,
   "why": "The arrow points to: Fatty acids. Hydrocarbon chain + carboxylic acid; energy via β-oxidation; cis beneficial, trans (hydrogenated oils) harmful."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "tg",
   "options": [
    "Sphingolipids",
    "Cholesterol",
    "Fatty acids",
    "Glycerides"
   ],
   "answer": 3,
   "why": "The arrow points to: Glycerides. Esters of glycerol and fatty acids; triglycerides are strictly hydrophobic storage fat."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pl",
   "options": [
    "Glycerides",
    "Sphingolipids",
    "Phosphoglycerides",
    "Lipoproteins"
   ],
   "answer": 2,
   "why": "The arrow points to: Phosphoglycerides. Glycerol + 2 fatty acids + phosphate + alcohol (choline, serine, inositol, ethanolamine): amphiphilic membrane lipids."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "sph",
   "options": [
    "Prostaglandins",
    "Sphingolipids",
    "Phosphoglycerides",
    "Cholesterol"
   ],
   "answer": 1,
   "why": "The arrow points to: Sphingolipids. Membrane components such as galactocerebroside."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "chol",
   "options": [
    "Cholesterol",
    "Fatty acids",
    "Phosphoglycerides",
    "Sphingolipids"
   ],
   "answer": 0,
   "why": "The arrow points to: Cholesterol. 80% synthesised, 20% dietary; membrane fluidity; precursor of steroid hormones, vitamin D and bile salts."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pg",
   "options": [
    "Fatty acids",
    "Glycerides",
    "Prostaglandins",
    "Cholesterol"
   ],
   "answer": 2,
   "why": "The arrow points to: Prostaglandins. C20 mediators from unsaturated fatty acids; pain, inflammation, vasodilation; made by COX-1/COX-2, blocked by anti-inflammatories."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "lp",
   "options": [
    "Lipoproteins",
    "Glycerides",
    "Sphingolipids",
    "Prostaglandins"
   ],
   "answer": 0,
   "why": "The arrow points to: Lipoproteins. Hydrophobic core with amphiphilic surface; five classes by density; high LDL → atherosclerosis."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Define lipids and their solubility.",
   "back": "Organic molecules insoluble in water, soluble in organic solvents; strictly hydrophobic or amphiphilic."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Biological roles of lipids?",
   "back": "Energy, membrane structure, metabolism, insulation (electrical: myelin; water; thermal and mechanical)."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Fatty acid features?",
   "back": "Hydrocarbon chain + COOH; saturated/unsaturated; cis vs trans; even carbons; β-oxidation."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Key fatty acids?",
   "back": "Palmitic C16:0, stearic C18:0, palmitoleic C16:1 ω7, linoleic C18:2 ω6, α-linolenic C18:3 ω3."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Main lipid classes?",
   "back": "Waxes, glycerides (TG), phosphoglycerides (lecithin), sphingolipids, sterols (cholesterol), prostaglandins."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Roles of cholesterol?",
   "back": "Membrane fluidity; precursor of steroid hormones, vitamin D and bile salts; 80% synthesised."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Prostaglandins?",
   "back": "C20 mediators from unsaturated fatty acids; pain, inflammation, vasodilation; COX-1/COX-2, inhibited by NSAIDs."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Lipoproteins and lipid profile?",
   "back": "Hydrophobic core + amphiphilic surface; 5 classes by density; LDL (atherosclerosis), HDL; profile: TG, LDL-C, HDL-C, total cholesterol."
  },
  {
   "id": "img-fa",
   "type": "image",
   "target": "fa",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Fatty acids. Hydrocarbon chain + carboxylic acid; energy via β-oxidation; cis beneficial, trans (hydrogenated oils) harmful."
  },
  {
   "id": "img-tg",
   "type": "image",
   "target": "tg",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Glycerides. Esters of glycerol and fatty acids; triglycerides are strictly hydrophobic storage fat."
  },
  {
   "id": "img-pl",
   "type": "image",
   "target": "pl",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Phosphoglycerides. Glycerol + 2 fatty acids + phosphate + alcohol (choline, serine, inositol, ethanolamine): amphiphilic membrane lipids."
  },
  {
   "id": "img-sph",
   "type": "image",
   "target": "sph",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Sphingolipids. Membrane components such as galactocerebroside."
  },
  {
   "id": "img-chol",
   "type": "image",
   "target": "chol",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Cholesterol. 80% synthesised, 20% dietary; membrane fluidity; precursor of steroid hormones, vitamin D and bile salts."
  },
  {
   "id": "img-pg",
   "type": "image",
   "target": "pg",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Prostaglandins. C20 mediators from unsaturated fatty acids; pain, inflammation, vasodilation; made by COX-1/COX-2, blocked by anti-inflammatories."
  },
  {
   "id": "img-lp",
   "type": "image",
   "target": "lp",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Lipoproteins. Hydrophobic core with amphiphilic surface; five classes by density; high LDL → atherosclerosis."
  }
 ],
 "deeper": [
  {
   "title": "Why fat is the best energy store",
   "html": "<p>Fatty acid chains are highly reduced carbon, so their oxidation releases more than twice the energy per gram of carbohydrates or proteins. Triglycerides are also stored without water, unlike glycogen, which carries a lot of water. Storing energy as fat is therefore far lighter.</p><p class='src'>Source: the lecture's energetic role of lipids.</p>"
  }
 ],
 "resources": [
  {
   "title": "Lipids (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/macromolecules/lipids/a/lipids",
   "kind": "Article",
   "why": "Fatty acids, triglycerides, phospholipids, steroids.",
   "note": ""
  },
  {
   "title": "Cholesterol levels (MedlinePlus)",
   "url": "https://medlineplus.gov/cholesterollevelswhatyouneedtoknow.html",
   "kind": "Website",
   "why": "LDL, HDL and the lipid profile.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Lipids (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/macromolecules/lipids/a/lipids"
  },
  {
   "name": "Cholesterol levels (MedlinePlus)",
   "url": "https://medlineplus.gov/cholesterollevelswhatyouneedtoknow.html"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["biochem1-nucleotides"] = {
 "id": "biochem1-nucleotides",
 "subject": "biochem1",
 "group": "Structural biochemistry",
 "title": "Nucleotides and nucleic acids",
 "sourceFile": "Nucleotides and nucleic acids, Chapter 6 (2025-2026) (Biochemistry, Pr. F.Z. Lahlou)",
 "sourceUrl": "https://drive.google.com/file/d/1IPgsU2JgUTwq5ZkK1y3Wn5xlIFMIHrWl/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>Nucleotides and their polymers, the <strong>nucleic acids</strong>, carry genetic information (<strong>DNA</strong>) and its means of expression (<strong>RNA</strong>) in all organisms, from animals and plants to bacteria and viruses (adenovirus: DNA virus; retrovirus: RNA virus). This chapter links with the Genetics course.</p>"
  },
  {
   "id": "s1",
   "title": "DNA",
   "html": "<p>A <strong>double helix</strong> (Watson and Crick) of <strong>two antiparallel strands</strong>, a polymer of nucleotides joined by <strong>phosphodiester bonds</strong>, the strands held by <strong>hydrogen bonds</strong> between complementary bases (A-T, G-C). About 2 m long per cell and ~3.2 billion base pairs. <strong>Nucleotide</strong> = phosphate + pentose + base (A, T, C, G); <strong>nucleoside</strong> = pentose + base. Properties: <strong>water-soluble</strong>, absorbs UV maximally at <strong>260 nm</strong>, denatured by heat, hydrolysed by acid, base and enzymes (<strong>exonucleases</strong>, <strong>endonucleases</strong>). <strong>Tm</strong>: temperature at which half the double strands separate; <strong>higher with high GC content</strong>.</p>"
  },
  {
   "id": "s2",
   "title": "RNA, free nucleotides and applications",
   "html": "<p><strong>RNA</strong>: a <strong>single, short strand</strong> of ribonucleotides with <strong>ribose</strong> and <strong>uracil</strong>, in nucleus and cytoplasm, less stable than DNA. Types: <strong>mRNA</strong> (messenger), <strong>rRNA</strong> (ribosomal), <strong>tRNA</strong> (carries amino acids), <strong>microRNA</strong> (regulation). DNA vs RNA: double vs single strand; nucleus/mitochondria vs nucleus/cytoplasm; deoxyribose vs ribose; long vs short; stable vs unstable; thymine vs uracil. <strong>Free nucleotides</strong>: energy carriers (<strong>ATP, ADP, GTP</strong>), second messenger (<strong>cAMP</strong>), coenzymes (<strong>NAD⁺, NADP⁺</strong>). Applications: diagnosis of genetic diseases and cancer staging, genetic engineering (recombinant <strong>insulin</strong>), transgenic crops; techniques: <strong>PCR</strong> (DNA amplification) and <strong>NGS</strong> sequencing.</p>"
  }
 ],
 "exam": [
  "Nucleic acids: DNA (information) and RNA (expression), universal.",
  "DNA: double helix, antiparallel, phosphodiester and hydrogen bonds; ~3.2 billion bp.",
  "Nucleotide = phosphate + pentose + base; nucleoside = pentose + base.",
  "DNA absorbs UV at 260 nm; Tm higher with high GC.",
  "Hydrolysis: exonucleases, endonucleases.",
  "RNA: single short strand, ribose, uracil; mRNA, rRNA, tRNA, microRNA.",
  "Free nucleotides: ATP, GTP (energy), cAMP (messenger), NAD⁺/NADP⁺ (coenzymes).",
  "Applications: diagnosis, recombinant insulin; PCR and NGS."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "DNA vs RNA",
   "caption": "Key structural differences. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"490\" y1=\"70\" x2=\"40\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"490\" y1=\"70\" x2=\"500\" y2=\"70\"/>",
   "parts": {
    "dna": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"40\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "DNA: double strand,",
      "deoxyribose, thymine"
     ],
     "lx": 150.0,
     "ly": 68.0
    },
    "rna": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"500\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "RNA: single strand,",
      "ribose, uracil"
     ],
     "lx": 610.0,
     "ly": 68.0
    },
    "nt": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"270\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Nucleotide = phosphate",
      "+ pentose + base"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "free": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"150\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Free nucleotides: ATP, GTP,",
      "cAMP, NAD⁺/NADP⁺"
     ],
     "lx": 260.0,
     "ly": 198.0
    },
    "tech": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"420\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Techniques: PCR,",
      "sequencing (NGS)"
     ],
     "lx": 530.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "dna": [
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
    "rna": [
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
    "nt": [
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
    "free": [
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
    "tech": [
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
   "q": "DNA strands are:",
   "options": [
    "Identical",
    "Single",
    "Antiparallel",
    "Parallel"
   ],
   "answer": 2,
   "why": "Watson and Crick double helix."
  },
  {
   "q": "Nucleotides within a strand are joined by:",
   "options": [
    "Peptide bonds",
    "Phosphodiester bonds",
    "Glycosidic bonds only",
    "Hydrogen bonds"
   ],
   "answer": 1,
   "why": "Strands pair by hydrogen bonds."
  },
  {
   "q": "A nucleoside consists of:",
   "options": [
    "Phosphate + pentose",
    "Phosphate + pentose + base",
    "Pentose + base",
    "Phosphate + base"
   ],
   "answer": 2,
   "why": "The nucleotide adds phosphate."
  },
  {
   "q": "DNA absorbs UV maximally at:",
   "options": [
    "260 nm",
    "220 nm",
    "340 nm",
    "280 nm"
   ],
   "answer": 0,
   "why": "Proteins: 280 nm."
  },
  {
   "q": "DNA rich in GC has a:",
   "options": [
    "Lower Tm",
    "Same Tm",
    "Higher Tm",
    "No Tm"
   ],
   "answer": 2,
   "why": "Three hydrogen bonds per GC pair."
  },
  {
   "q": "Which enzymes cut DNA inside a strand?",
   "options": [
    "Polymerases",
    "Exonucleases",
    "Ligases",
    "Endonucleases"
   ],
   "answer": 3,
   "why": "Exonucleases cut from the ends."
  },
  {
   "q": "RNA contains:",
   "options": [
    "Ribose and uracil",
    "Deoxyribose and uracil",
    "Deoxyribose and thymine",
    "Ribose and thymine"
   ],
   "answer": 0,
   "why": "Single strand."
  },
  {
   "q": "Which RNA carries amino acids?",
   "options": [
    "microRNA",
    "tRNA",
    "mRNA",
    "rRNA"
   ],
   "answer": 1,
   "why": "MicroRNA regulates."
  },
  {
   "q": "cAMP is a:",
   "options": [
    "Second messenger",
    "Energy store",
    "DNA base",
    "Coenzyme"
   ],
   "answer": 0,
   "why": "Free nucleotide."
  },
  {
   "q": "Which technique amplifies DNA?",
   "options": [
    "ELISA",
    "NGS",
    "Electrophoresis",
    "PCR"
   ],
   "answer": 3,
   "why": "Polymerase chain reaction."
  },
  {
   "q": "An example of a retrovirus genome is:",
   "options": [
    "RNA",
    "Protein",
    "DNA",
    "Lipid"
   ],
   "answer": 0,
   "why": "Adenovirus is a DNA virus."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "dna",
   "options": [
    "Nucleotide",
    "Free nucleotides",
    "RNA",
    "DNA"
   ],
   "answer": 3,
   "why": "The arrow points to: DNA. Two antiparallel strands, hydrogen-bonded, in the nucleus and mitochondria; long and stable; about 3.2 billion base pairs."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "rna",
   "options": [
    "Molecular biology",
    "RNA",
    "DNA",
    "Free nucleotides"
   ],
   "answer": 1,
   "why": "The arrow points to: RNA. One short strand, in nucleus and cytoplasm; less stable; mRNA, rRNA, tRNA, microRNA."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "nt",
   "options": [
    "RNA",
    "DNA",
    "Molecular biology",
    "Nucleotide"
   ],
   "answer": 3,
   "why": "The arrow points to: Nucleotide. Phosphate + pentose + nitrogenous base; a nucleoside lacks the phosphate."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "free",
   "options": [
    "Nucleotide",
    "Free nucleotides",
    "DNA",
    "RNA"
   ],
   "answer": 1,
   "why": "The arrow points to: Free nucleotides. Energy (ATP, GTP), second messenger (cAMP), coenzymes (NAD⁺, NADP⁺)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "tech",
   "options": [
    "Free nucleotides",
    "Nucleotide",
    "Molecular biology",
    "RNA"
   ],
   "answer": 2,
   "why": "The arrow points to: Molecular biology. PCR amplifies DNA; next-generation sequencing reads it."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Roles of nucleic acids?",
   "back": "DNA stores genetic information; RNA expresses it; universal in all organisms."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Structure of DNA?",
   "back": "Antiparallel double helix; phosphodiester bonds in strands, hydrogen bonds between A-T and G-C; ~3.2 billion bp."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Nucleotide vs nucleoside?",
   "back": "Nucleotide: phosphate + pentose + base. Nucleoside: pentose + base."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Physicochemical properties of DNA?",
   "back": "Water-soluble, UV max 260 nm, heat denaturation (Tm, higher with GC), acid/base and nuclease hydrolysis."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "DNA vs RNA?",
   "back": "Double vs single strand; deoxyribose vs ribose; T vs U; long and stable vs short and unstable; nucleus/mitochondria vs nucleus/cytoplasm."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Types of RNA?",
   "back": "mRNA, rRNA, tRNA, microRNA."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Free nucleotides and roles?",
   "back": "ATP, ADP, GTP (energy); cAMP (second messenger); NAD⁺/NADP⁺ (coenzymes)."
  },
  {
   "id": "img-dna",
   "type": "image",
   "target": "dna",
   "front": "What is at the arrow, and why does it matter?",
   "back": "DNA. Two antiparallel strands, hydrogen-bonded, in the nucleus and mitochondria; long and stable; about 3.2 billion base pairs."
  },
  {
   "id": "img-rna",
   "type": "image",
   "target": "rna",
   "front": "What is at the arrow, and why does it matter?",
   "back": "RNA. One short strand, in nucleus and cytoplasm; less stable; mRNA, rRNA, tRNA, microRNA."
  },
  {
   "id": "img-nt",
   "type": "image",
   "target": "nt",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Nucleotide. Phosphate + pentose + nitrogenous base; a nucleoside lacks the phosphate."
  },
  {
   "id": "img-free",
   "type": "image",
   "target": "free",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Free nucleotides. Energy (ATP, GTP), second messenger (cAMP), coenzymes (NAD⁺, NADP⁺)."
  },
  {
   "id": "img-tech",
   "type": "image",
   "target": "tech",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Molecular biology. PCR amplifies DNA; next-generation sequencing reads it."
  }
 ],
 "deeper": [
  {
   "title": "Why DNA is more stable than RNA",
   "html": "<p>Ribose carries a 2′-OH group that can attack the neighbouring phosphodiester bond and cut the chain, especially in alkaline conditions. Deoxyribose lacks it, making DNA far more durable, which suits a permanent archive. RNA's instability suits a temporary message that must be degraded once used.</p><p class='src'>Source: the lecture's DNA vs RNA comparison.</p>"
  }
 ],
 "resources": [
  {
   "title": "Nucleic acids (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/macromolecules/nucleic-acids/a/nucleic-acids",
   "kind": "Article",
   "why": "DNA and RNA structure.",
   "note": ""
  },
  {
   "title": "PCR fact sheet (NHGRI)",
   "url": "https://www.genome.gov/about-genomics/fact-sheets/Polymerase-Chain-Reaction-Fact-Sheet",
   "kind": "Article",
   "why": "How PCR amplifies DNA.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Nucleic acids (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/macromolecules/nucleic-acids/a/nucleic-acids"
  },
  {
   "name": "PCR fact sheet (NHGRI)",
   "url": "https://www.genome.gov/about-genomics/fact-sheets/Polymerase-Chain-Reaction-Fact-Sheet"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["biochem1-carb-metabolism"] = {
 "id": "biochem1-carb-metabolism",
 "subject": "biochem1",
 "group": "Metabolic biochemistry",
 "title": "Carbohydrate metabolism",
 "sourceFile": "Carbohydrate metabolism, Chapter 1 (2025-2026) (Biochemistry, Pr. F.Z. Lahlou)",
 "sourceUrl": "https://drive.google.com/file/d/1sAEzXCaTVRhUmHtY1PyFAeU997aQC34S/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p><strong>Metabolism = anabolism + catabolism</strong>. Glucose, from dietary sugars (sucrose, maltose, lactose, starch), is the key fuel. <strong>Glycaemia</strong> (blood glucose) is normally <strong>3.9-5.6 mmol/L (0.7-1.1 g/L)</strong>: below 0.7 g/L hypoglycaemia, above 1.1 g/L hyperglycaemia (diabetes). Insulin lowers it; glucagon and adrenaline raise it.</p>"
  },
  {
   "id": "s1",
   "title": "Glycolysis and pyruvate",
   "html": "<p>Glycolysis converts glucose into <strong>2 pyruvate</strong> in the <strong>cytoplasm</strong>. Glucose enters cells by facilitated diffusion (GLUT) or Na⁺-glucose symport. <strong>Ten reactions</strong>: preparatory phase (1-5) and payoff phase (6-10). Irreversible regulated steps: reaction <strong>1 (hexokinase/glucokinase</strong>: glucose → glucose-6-P), reaction <strong>3</strong> (phosphofructokinase-1) and reaction <strong>10</strong> (pyruvate kinase). Reaction 6 makes NADH; reactions 7 and 10 make ATP. Net: <strong>2 ATP + 2 NADH</strong> per glucose. Fates of pyruvate: <strong>lactic fermentation</strong> (hypoxia, anaerobic muscle; lactate returns to the liver: <strong>Cori cycle</strong>), <strong>alcoholic fermentation</strong> (yeast), or <strong>aerobic oxidation</strong>: <strong>pyruvate dehydrogenase</strong> → acetyl-CoA → <strong>Krebs cycle</strong> → <strong>respiratory chain</strong> (mobile carriers ubiquinone Q and cytochrome c; oxidative phosphorylation). Yield: NADH = 2.5 ATP, FADH₂ = 1.5 ATP; total <strong>30-32 ATP per glucose</strong>. <strong>Shuttles</strong> bring cytosolic NADH into mitochondria: <strong>malate-aspartate</strong> (liver, heart, kidney: 2.5 ATP) and <strong>glycerol-3-phosphate</strong> (muscle, brain: 1.5 ATP).</p>"
  },
  {
   "id": "s2",
   "title": "Glycogen",
   "html": "<p><strong>Glycogenesis</strong> (cytosol): glucose activated as <strong>UDP-glucose</strong> (uses ATP and UTP), primed by <strong>glycogenin</strong>, extended by <strong>glycogen synthase</strong> and branched by the branching enzyme; occurs when glucose is high; activated by <strong>insulin</strong> in liver, inhibited by glucagon (liver) and adrenaline (muscle). Stores: liver ~6-8% (~75 g), muscle ~1-2% (~250 g). <strong>Glycogenolysis</strong>: <strong>glycogen phosphorylase</strong>, phosphoglucomutase, debranching enzyme and (liver only) <strong>glucose-6-phosphatase</strong>; in liver it maintains blood glucose, in muscle it fuels contraction; triggered by fasting and intense effort, activated by <strong>glucagon</strong> and <strong>adrenaline</strong>.</p>"
  },
  {
   "id": "s3",
   "title": "Gluconeogenesis and pentose phosphate pathway",
   "html": "<p><strong>Gluconeogenesis</strong>: synthesis of glucose from non-carbohydrate substrates (<strong>lactate, pyruvate, glycerol, glucogenic amino acids</strong>: all except <strong>leucine and lysine</strong>) in the <strong>liver and kidney</strong>, to supply the brain (120-160 g/day) and red cells. It is <strong>not the reverse of glycolysis</strong>: it bypasses the three irreversible steps with pyruvate carboxylase, PEPCK, fructose-1,6-bisphosphatase and glucose-6-phosphatase; it consumes ATP and is regulated. <strong>Pentose phosphate pathway</strong> (hexose monophosphate shunt, cytosol): produces <strong>NADPH</strong> and <strong>ribose-5-phosphate</strong>; key enzyme <strong>glucose-6-phosphate dehydrogenase (G6PD)</strong>; its deficiency makes red cells vulnerable to oxidative haemolysis.</p>"
  }
 ],
 "exam": [
  "Metabolism = anabolism + catabolism.",
  "Glycaemia 3.9-5.6 mmol/L (0.7-1.1 g/L).",
  "Glycolysis (cytosol): glucose → 2 pyruvate; net 2 ATP + 2 NADH.",
  "Regulated steps: hexokinase/glucokinase, PFK-1, pyruvate kinase.",
  "Pyruvate fates: lactate (Cori cycle), ethanol (yeast), acetyl-CoA (PDH).",
  "NADH = 2.5 ATP, FADH₂ = 1.5 ATP; glucose → 30-32 ATP.",
  "Shuttles: malate-aspartate (2.5) and glycerol-3-P (1.5).",
  "Glycogenesis: UDP-glucose, glycogenin, glycogen synthase; insulin.",
  "Glycogenolysis: phosphorylase; glucagon, adrenaline; G6Pase in liver only.",
  "Gluconeogenesis: liver and kidney; lactate, glycerol, amino acids (not Leu, Lys).",
  "Pentose phosphate: NADPH + ribose-5-P; G6PD."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Glucose metabolism map",
   "caption": "Main pathways and where they happen. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"75\" x2=\"380\" y2=\"110\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"47\" x2=\"520\" y2=\"137\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"47\" x2=\"40\" y2=\"137\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"137\" x2=\"40\" y2=\"247\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"165\" x2=\"380\" y2=\"220\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"240\" y1=\"247\" x2=\"520\" y2=\"247\"/>",
   "parts": {
    "glc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"280\" y=\"20\" width=\"200\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Glucose",
      "(blood 0.7-1.1 g/L)"
     ],
     "lx": 380.0,
     "ly": 45.5
    },
    "gly": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"280\" y=\"110\" width=\"200\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Glycolysis (cytosol):",
      "→ 2 pyruvate, 2 ATP"
     ],
     "lx": 380.0,
     "ly": 135.5
    },
    "ppp": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"520\" y=\"110\" width=\"200\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Pentose phosphate:",
      "NADPH + ribose-5-P"
     ],
     "lx": 620.0,
     "ly": 135.5
    },
    "gg": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"40\" y=\"110\" width=\"200\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Glycogenesis /",
      "glycogenolysis"
     ],
     "lx": 140.0,
     "ly": 135.5
    },
    "lac": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"40\" y=\"220\" width=\"200\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Lactate (anaerobic)",
      "→ Cori cycle"
     ],
     "lx": 140.0,
     "ly": 245.5
    },
    "tca": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"280\" y=\"220\" width=\"200\" height=\"55\" rx=\"10\"/>",
     "label": [
      "PDH → acetyl-CoA → Krebs",
      "→ respiratory chain"
     ],
     "lx": 380.0,
     "ly": 245.5
    },
    "gng": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9ecec\" x=\"520\" y=\"220\" width=\"200\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Gluconeogenesis",
      "(liver, kidney)"
     ],
     "lx": 620.0,
     "ly": 245.5
    }
   },
   "arrows": {
    "glc": [
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
    "gly": [
     {
      "t": [
       280.0,
       118.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "ppp": [
     {
      "t": [
       520.0,
       118.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "gg": [
     {
      "t": [
       40.0,
       118.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "lac": [
     {
      "t": [
       40.0,
       228.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "tca": [
     {
      "t": [
       280.0,
       228.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "gng": [
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
   "q": "Normal fasting glycaemia is:",
   "options": [
    "0.7-1.1 g/L",
    "1.5-2.0 g/L",
    "3.9-5.6 g/L",
    "0.3-0.5 g/L"
   ],
   "answer": 0,
   "why": "3.9-5.6 mmol/L."
  },
  {
   "q": "Where does glycolysis occur?",
   "options": [
    "Nucleus",
    "Lysosome",
    "Cytoplasm",
    "Mitochondria"
   ],
   "answer": 2,
   "why": "All cells."
  },
  {
   "q": "Glycolysis converts one glucose into:",
   "options": [
    "2 acetyl-CoA",
    "2 pyruvate",
    "6 CO₂",
    "1 pyruvate"
   ],
   "answer": 1,
   "why": "Net 2 ATP + 2 NADH."
  },
  {
   "q": "Which is an irreversible regulated step of glycolysis?",
   "options": [
    "Triose interconversion",
    "Aldolase",
    "Enolase",
    "Hexokinase/glucokinase"
   ],
   "answer": 3,
   "why": "Also PFK-1 and pyruvate kinase."
  },
  {
   "q": "In anaerobic muscle, pyruvate becomes:",
   "options": [
    "Ethanol",
    "Lactate",
    "Glycogen",
    "Acetyl-CoA"
   ],
   "answer": 1,
   "why": "Recycled via the Cori cycle."
  },
  {
   "q": "The Cori cycle links:",
   "options": [
    "Heart and lung",
    "Liver and adipose",
    "Brain and kidney",
    "Muscle and liver"
   ],
   "answer": 3,
   "why": "Lactate → glucose in liver."
  },
  {
   "q": "Pyruvate is converted to acetyl-CoA by:",
   "options": [
    "Lactate dehydrogenase",
    "Pyruvate dehydrogenase",
    "Pyruvate carboxylase",
    "Pyruvate kinase"
   ],
   "answer": 1,
   "why": "Entry to the Krebs cycle."
  },
  {
   "q": "One NADH yields about:",
   "options": [
    "2.5 ATP",
    "32 ATP",
    "1.5 ATP",
    "4 ATP"
   ],
   "answer": 0,
   "why": "FADH₂ ≈ 1.5 ATP."
  },
  {
   "q": "Complete oxidation of glucose yields about:",
   "options": [
    "100 ATP",
    "8 ATP",
    "2 ATP",
    "30-32 ATP"
   ],
   "answer": 3,
   "why": "Depends on the shuttle."
  },
  {
   "q": "The glycerol-3-phosphate shuttle operates mainly in:",
   "options": [
    "Red cells",
    "Muscle and brain",
    "Liver and heart",
    "Kidney only"
   ],
   "answer": 1,
   "why": "1.5 ATP per NADH."
  },
  {
   "q": "Glycogenesis uses activated glucose in the form of:",
   "options": [
    "UDP-glucose",
    "GDP-glucose",
    "Glucose-1,6-bisphosphate",
    "ATP-glucose"
   ],
   "answer": 0,
   "why": "Primed by glycogenin."
  },
  {
   "q": "Which enzyme releases free glucose from glycogen in the liver (not muscle)?",
   "options": [
    "Hexokinase",
    "Branching enzyme",
    "Glucose-6-phosphatase",
    "Phosphorylase"
   ],
   "answer": 2,
   "why": "Muscle keeps its glucose."
  },
  {
   "q": "Glycogenolysis is activated by:",
   "options": [
    "High glucose",
    "Insulin",
    "Glucagon and adrenaline",
    "Fed state"
   ],
   "answer": 2,
   "why": "Fasting, intense effort."
  },
  {
   "q": "Which amino acids are NOT glucogenic?",
   "options": [
    "Glu and Gln",
    "Ala and Ser",
    "Gly and Asp",
    "Leu and Lys"
   ],
   "answer": 3,
   "why": "They are purely ketogenic."
  },
  {
   "q": "Gluconeogenesis takes place mainly in:",
   "options": [
    "Adipose tissue",
    "Liver and kidney",
    "Muscle and brain",
    "Red cells"
   ],
   "answer": 1,
   "why": "Not the reverse of glycolysis."
  },
  {
   "q": "The key enzyme of the pentose phosphate pathway is:",
   "options": [
    "PEPCK",
    "Hexokinase",
    "PDH",
    "G6PD"
   ],
   "answer": 3,
   "why": "Produces NADPH and ribose-5-P."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "glc",
   "options": [
    "Pentose phosphate pathway",
    "Glucose",
    "Glycolysis",
    "Glycogen"
   ],
   "answer": 1,
   "why": "The arrow points to: Glucose. Blood glucose 3.9-5.6 mmol/L (0.7-1.1 g/L); enters cells by GLUT or Na⁺-glucose symport."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "gly",
   "options": [
    "Lactic fermentation",
    "Glucose",
    "Glycolysis",
    "Glycogen"
   ],
   "answer": 2,
   "why": "The arrow points to: Glycolysis. 10 reactions in 2 phases; regulation at hexokinase/glucokinase, PFK-1 and pyruvate kinase; net 2 ATP + 2 NADH."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ppp",
   "options": [
    "Glycolysis",
    "Gluconeogenesis",
    "Pentose phosphate pathway",
    "Glycogen"
   ],
   "answer": 2,
   "why": "The arrow points to: Pentose phosphate pathway. Cytosolic shunt producing NADPH and ribose-5-phosphate; key enzyme G6PD."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "gg",
   "options": [
    "Glycogen",
    "Pentose phosphate pathway",
    "Aerobic oxidation",
    "Lactic fermentation"
   ],
   "answer": 0,
   "why": "The arrow points to: Glycogen. Glycogenesis (insulin) and glycogenolysis (glucagon, adrenaline) in liver and muscle."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "lac",
   "options": [
    "Lactic fermentation",
    "Pentose phosphate pathway",
    "Glucose",
    "Glycogen"
   ],
   "answer": 0,
   "why": "The arrow points to: Lactic fermentation. Without oxygen, pyruvate → lactate, recycled to glucose by the liver (Cori cycle)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "tca",
   "options": [
    "Glycolysis",
    "Glucose",
    "Aerobic oxidation",
    "Lactic fermentation"
   ],
   "answer": 2,
   "why": "The arrow points to: Aerobic oxidation. Pyruvate dehydrogenase, Krebs cycle and oxidative phosphorylation: 30-32 ATP per glucose."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "gng",
   "options": [
    "Gluconeogenesis",
    "Aerobic oxidation",
    "Glycogen",
    "Glycolysis"
   ],
   "answer": 0,
   "why": "The arrow points to: Gluconeogenesis. Glucose from lactate, pyruvate, glycerol and glucogenic amino acids; bypasses 3 irreversible steps."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Normal glycaemia and hormones?",
   "back": "3.9-5.6 mmol/L (0.7-1.1 g/L); insulin lowers, glucagon and adrenaline raise."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Glycolysis summary?",
   "back": "Cytosol; 10 reactions (prep 1-5, payoff 6-10); regulated at hexokinase, PFK-1, pyruvate kinase; net 2 ATP + 2 NADH + 2 pyruvate."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Fates of pyruvate?",
   "back": "Lactate (anaerobic; Cori cycle), ethanol (yeast), acetyl-CoA via PDH → Krebs → respiratory chain."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "ATP yield from glucose?",
   "back": "NADH 2.5, FADH₂ 1.5; total 30-32 ATP per glucose."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Shuttles?",
   "back": "Malate-aspartate (liver, heart, kidney: 2.5 ATP/NADH); glycerol-3-phosphate (muscle, brain: 1.5)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Glycogenesis?",
   "back": "UDP-glucose, glycogenin primer, glycogen synthase + branching enzyme; insulin; liver ~75 g, muscle ~250 g."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Glycogenolysis?",
   "back": "Phosphorylase, phosphoglucomutase, debranching enzyme, G6Pase (liver); glucagon, adrenaline; liver keeps blood glucose, muscle fuels contraction."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Gluconeogenesis?",
   "back": "Liver and kidney; lactate, pyruvate, glycerol, glucogenic amino acids (not Leu, Lys); pyruvate carboxylase, PEPCK, FBPase-1, G6Pase."
  },
  {
   "id": "x8",
   "type": "text",
   "front": "Pentose phosphate pathway?",
   "back": "Cytosolic; produces NADPH and ribose-5-P; key enzyme G6PD."
  },
  {
   "id": "img-glc",
   "type": "image",
   "target": "glc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Glucose. Blood glucose 3.9-5.6 mmol/L (0.7-1.1 g/L); enters cells by GLUT or Na⁺-glucose symport."
  },
  {
   "id": "img-gly",
   "type": "image",
   "target": "gly",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Glycolysis. 10 reactions in 2 phases; regulation at hexokinase/glucokinase, PFK-1 and pyruvate kinase; net 2 ATP + 2 NADH."
  },
  {
   "id": "img-ppp",
   "type": "image",
   "target": "ppp",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Pentose phosphate pathway. Cytosolic shunt producing NADPH and ribose-5-phosphate; key enzyme G6PD."
  },
  {
   "id": "img-gg",
   "type": "image",
   "target": "gg",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Glycogen. Glycogenesis (insulin) and glycogenolysis (glucagon, adrenaline) in liver and muscle."
  },
  {
   "id": "img-lac",
   "type": "image",
   "target": "lac",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Lactic fermentation. Without oxygen, pyruvate → lactate, recycled to glucose by the liver (Cori cycle)."
  },
  {
   "id": "img-tca",
   "type": "image",
   "target": "tca",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Aerobic oxidation. Pyruvate dehydrogenase, Krebs cycle and oxidative phosphorylation: 30-32 ATP per glucose."
  },
  {
   "id": "img-gng",
   "type": "image",
   "target": "gng",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Gluconeogenesis. Glucose from lactate, pyruvate, glycerol and glucogenic amino acids; bypasses 3 irreversible steps."
  }
 ],
 "deeper": [
  {
   "title": "Why muscle glycogen cannot raise blood sugar",
   "html": "<p>Muscle lacks glucose-6-phosphatase, so the glucose-6-phosphate released from its glycogen stays trapped in the cell and is burned for contraction. Only the liver (and kidney) can remove the phosphate and export free glucose, which is why the liver's much smaller store, not muscle's larger one, maintains blood glucose between meals.</p><p class='src'>Source: the lecture's glycogenolysis slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "Glycolysis (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/cellular-respiration-and-fermentation",
   "kind": "Website",
   "why": "Glycolysis, Krebs cycle and oxidative phosphorylation.",
   "note": ""
  },
  {
   "title": "G6PD deficiency (MedlinePlus Genetics)",
   "url": "https://medlineplus.gov/genetics/condition/glucose-6-phosphate-dehydrogenase-deficiency/",
   "kind": "Website",
   "why": "Clinical relevance of the pentose phosphate pathway.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Glycolysis (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/cellular-respiration-and-fermentation"
  },
  {
   "name": "G6PD deficiency (MedlinePlus Genetics)",
   "url": "https://medlineplus.gov/genetics/condition/glucose-6-phosphate-dehydrogenase-deficiency/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["biochem1-lipid-metabolism"] = {
 "id": "biochem1-lipid-metabolism",
 "subject": "biochem1",
 "group": "Metabolic biochemistry",
 "title": "Lipid metabolism",
 "sourceFile": "Lipid metabolism, Chapter 2 (2025-2026) (Biochemistry, Pr. F.Z. Lahlou)",
 "sourceUrl": "https://drive.google.com/file/d/1KcQSG7VFBqEmKnRB_2AZXKS_G4xeyBvg/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>Lipid metabolism covers <strong>catabolism</strong> (lipolysis, β-oxidation, ketone bodies) that yields energy, and <strong>anabolism</strong> (fatty acids, triglycerides, phospholipids, cholesterol) that builds stores, membranes and signalling molecules.</p>"
  },
  {
   "id": "s1",
   "title": "Catabolism",
   "html": "<p><strong>Lipolysis</strong>: hydrolysis of lipids into their components. <strong>Phospholipases A1, A2, C and D</strong> release second messengers (<strong>IP3, DAG</strong>, phosphatidic acid), free fatty acids such as <strong>arachidonic acid</strong> (precursor of prostaglandins) and remodel membranes. Dietary triglycerides are partly hydrolysed; stored triglycerides are fully hydrolysed to glycerol (→ glycolysis) and fatty acids. <strong>Fatty acid oxidation</strong>: <strong>activation</strong> to acyl-CoA (costs 2 ATP), <strong>transport</strong> into mitochondria by <strong>carnitine</strong>, then <strong>β-oxidation</strong> (Lynen spiral): dehydrogenation (FADH₂), hydration, dehydrogenation (NADH), <strong>thiolysis</strong> releasing <strong>acetyl-CoA</strong>. For a fatty acid of 2n carbons: <strong>n − 1 turns</strong>, <strong>n acetyl-CoA</strong>, n − 1 NADH, n − 1 FADH₂; <strong>palmitate (C16) yields about 106 ATP</strong>. Odd-chain fatty acids end with <strong>propionyl-CoA</strong> → succinyl-CoA (Krebs cycle); unsaturated fatty acids need extra enzymes.</p><p><strong>Ketone bodies</strong> (acetoacetate, β-hydroxybutyrate, acetone): water-soluble fuels made in <strong>liver mitochondria</strong> from acetyl-CoA during <strong>fasting</strong>, high-protein/low-carbohydrate diets and <strong>uncontrolled diabetes</strong>; used by brain, heart, kidney and muscle (not red cells, which depend strictly on glucose). Excess causes <strong>metabolic acidosis</strong> (ketoacidosis); they are excreted in urine and acetone is exhaled. Acetoacetate yields ~22-23 ATP, β-hydroxybutyrate ~25-26.</p>"
  },
  {
   "id": "s2",
   "title": "Anabolism",
   "html": "<p><strong>Fatty acid synthesis</strong> in the <strong>cytoplasm</strong> (liver, adipose tissue): activation (acetyl-CoA carboxylase → malonyl-CoA), then <strong>fatty acid synthase</strong> repeats four steps (Wakil spiral): condensation, reduction, dehydration, reduction, up to palmitate (C16). Longer and unsaturated fatty acids are made by <strong>elongases</strong> and <strong>desaturases</strong> (endoplasmic reticulum). <strong>Omega-3 and omega-6</strong> are <strong>essential</strong> (dietary). <strong>Triglycerides</strong>: from acyl-CoA and glycerol-3-phosphate (or monoglycerides), in liver, adipose tissue and intestine; shares <strong>phosphatidic acid</strong> with <strong>phospholipid</strong> synthesis (+ an alcohol). <strong>Cholesterol</strong>: 43 steps from acetyl-CoA, consuming ATP and NADPH; key regulated enzyme <strong>HMG-CoA reductase</strong>, inhibited by <strong>statins</strong>; hormonally regulated. Derivatives: <strong>bile salts</strong> (amphiphilic detergents made in liver, modified by colonic bacteria; primary bile salts are <strong>conjugated to taurine or glycine</strong>; lipid digestion and cholesterol solubilisation), <strong>vitamin D</strong> and <strong>steroid hormones</strong>.</p>"
  }
 ],
 "exam": [
  "Phospholipases A1, A2, C, D → IP3, DAG, arachidonic acid.",
  "Fatty acid oxidation: activation (2 ATP), carnitine transport, β-oxidation.",
  "β-oxidation: dehydrogenation, hydration, dehydrogenation, thiolysis → acetyl-CoA.",
  "C2n: n − 1 turns, n acetyl-CoA, n − 1 NADH and FADH₂; palmitate ≈ 106 ATP.",
  "Odd chains → propionyl-CoA → succinyl-CoA.",
  "Ketone bodies: liver mitochondria; fasting, diabetes; ketoacidosis; not for red cells.",
  "Fatty acid synthase (cytosol) builds palmitate; elongases/desaturases for longer ones.",
  "Omega-3 and omega-6 are essential.",
  "Cholesterol: HMG-CoA reductase, blocked by statins.",
  "Bile salts conjugated to taurine or glycine; vitamin D; steroid hormones."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Fatty acid oxidation and ketone bodies",
   "caption": "From adipose triglyceride to ATP. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"220\" y1=\"70\" x2=\"270\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"470\" y1=\"70\" x2=\"520\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"720\" y1=\"70\" x2=\"270\" y2=\"200\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"490\" y1=\"200\" x2=\"520\" y2=\"200\"/>",
   "parts": {
    "tg": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Triglycerides → glycerol",
      "+ fatty acids (lipolysis)"
     ],
     "lx": 120.0,
     "ly": 68.0
    },
    "act": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"270\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Activation: acyl-CoA",
      "(costs 2 ATP)"
     ],
     "lx": 370.0,
     "ly": 68.0
    },
    "carn": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"520\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Carnitine shuttle into",
      "mitochondria"
     ],
     "lx": 620.0,
     "ly": 68.0
    },
    "beta": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"270\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "β-oxidation (Lynen): dehydrogenation,",
      "hydration, dehydrogenation, thiolysis"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "acoa": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"520\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Acetyl-CoA → Krebs",
      "(or ketone bodies in liver)"
     ],
     "lx": 620.0,
     "ly": 198.0
    },
    "pal": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"20\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Palmitate C16: 8 acetyl-CoA,",
      "7 NADH, 7 FADH₂ → 106 ATP"
     ],
     "lx": 130.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "tg": [
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
    "carn": [
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
    "beta": [
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
    "acoa": [
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
    "pal": [
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
    ]
   }
  }
 },
 "mcqs": [
  {
   "q": "Phospholipase C releases which second messengers?",
   "options": [
    "NADH and FADH₂",
    "cAMP and GTP",
    "Acetyl-CoA",
    "IP3 and DAG"
   ],
   "answer": 3,
   "why": "From phosphatidylinositol."
  },
  {
   "q": "Arachidonic acid is the precursor of:",
   "options": [
    "Ketone bodies",
    "Cholesterol",
    "Prostaglandins",
    "Bile salts"
   ],
   "answer": 2,
   "why": "Released by phospholipase A2."
  },
  {
   "q": "Fatty acid activation costs about:",
   "options": [
    "0 ATP",
    "10 ATP",
    "106 ATP",
    "2 ATP"
   ],
   "answer": 3,
   "why": "Forms acyl-CoA."
  },
  {
   "q": "Long-chain fatty acids enter mitochondria via:",
   "options": [
    "Glucose",
    "Glycerol",
    "Carnitine",
    "Albumin"
   ],
   "answer": 2,
   "why": "The carnitine shuttle."
  },
  {
   "q": "The last step of each β-oxidation turn is:",
   "options": [
    "Thiolysis",
    "Condensation",
    "Reduction",
    "Hydration"
   ],
   "answer": 0,
   "why": "Releases acetyl-CoA."
  },
  {
   "q": "How many acetyl-CoA come from palmitate (C16)?",
   "options": [
    "7",
    "8",
    "16",
    "4"
   ],
   "answer": 1,
   "why": "n = 8; 7 turns."
  },
  {
   "q": "The net ATP yield of palmitate oxidation is about:",
   "options": [
    "200",
    "106",
    "32",
    "8"
   ],
   "answer": 1,
   "why": "80 + 17.5 + 10.5 − 2."
  },
  {
   "q": "Odd-chain fatty acids end as:",
   "options": [
    "HMG-CoA",
    "Acetyl-CoA only",
    "Malonyl-CoA",
    "Propionyl-CoA"
   ],
   "answer": 3,
   "why": "→ succinyl-CoA."
  },
  {
   "q": "Ketone bodies are made in:",
   "options": [
    "Muscle cytosol",
    "Liver mitochondria",
    "Red blood cells",
    "Kidney only"
   ],
   "answer": 1,
   "why": "From acetyl-CoA."
  },
  {
   "q": "Which cells cannot use ketone bodies?",
   "options": [
    "Red blood cells",
    "Neurons",
    "Kidney cells",
    "Heart cells"
   ],
   "answer": 0,
   "why": "No mitochondria: strictly glucose-dependent."
  },
  {
   "q": "Uncontrolled diabetes can cause:",
   "options": [
    "Ketoacidosis",
    "Hypoglycaemia only",
    "Low ketones",
    "Metabolic alkalosis"
   ],
   "answer": 0,
   "why": "Metabolic acidosis."
  },
  {
   "q": "Fatty acid synthesis takes place in the:",
   "options": [
    "Nucleus",
    "Mitochondria",
    "Lysosome",
    "Cytoplasm"
   ],
   "answer": 3,
   "why": "By fatty acid synthase."
  },
  {
   "q": "The key regulated enzyme of cholesterol synthesis is:",
   "options": [
    "Acetyl-CoA carboxylase",
    "Carnitine transferase",
    "Lipase",
    "HMG-CoA reductase"
   ],
   "answer": 3,
   "why": "Target of statins."
  },
  {
   "q": "Primary bile salts are conjugated to:",
   "options": [
    "Taurine or glycine",
    "Albumin",
    "Glucose",
    "Phosphate"
   ],
   "answer": 0,
   "why": "In the liver."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "tg",
   "options": [
    "β-oxidation",
    "Lipolysis",
    "Transport",
    "Activation"
   ],
   "answer": 1,
   "why": "The arrow points to: Lipolysis. Hydrolysis of triglycerides into glycerol and fatty acids."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "act",
   "options": [
    "β-oxidation",
    "Lipolysis",
    "Activation",
    "Acetyl-CoA"
   ],
   "answer": 2,
   "why": "The arrow points to: Activation. Fatty acid + CoA → acyl-CoA in the cytosol, costing the equivalent of 2 ATP."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "carn",
   "options": [
    "β-oxidation",
    "Acetyl-CoA",
    "Transport",
    "Activation"
   ],
   "answer": 2,
   "why": "The arrow points to: Transport. Carnitine carries long-chain acyl groups across the inner mitochondrial membrane."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "beta",
   "options": [
    "Activation",
    "β-oxidation",
    "Transport",
    "Acetyl-CoA"
   ],
   "answer": 1,
   "why": "The arrow points to: β-oxidation. Each turn removes 2 carbons as acetyl-CoA, producing 1 NADH and 1 FADH₂."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "acoa",
   "options": [
    "Acetyl-CoA",
    "β-oxidation",
    "Transport",
    "Palmitate yield"
   ],
   "answer": 0,
   "why": "The arrow points to: Acetyl-CoA. Enters the Krebs cycle; in the fasting liver it forms ketone bodies."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pal",
   "options": [
    "β-oxidation",
    "Transport",
    "Palmitate yield",
    "Lipolysis"
   ],
   "answer": 2,
   "why": "The arrow points to: Palmitate yield. n = 8: 7 turns, 8 acetyl-CoA (80 ATP) + 7 NADH (17.5) + 7 FADH₂ (10.5) − 2 = 106 ATP."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Products of phospholipases?",
   "back": "IP3, DAG, phosphatidic acid (second messengers), free fatty acids (arachidonic acid → prostaglandins), membrane remodelling."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Steps of fatty acid oxidation?",
   "back": "Activation to acyl-CoA (2 ATP), carnitine transport into mitochondria, β-oxidation (dehydrogenation, hydration, dehydrogenation, thiolysis)."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "β-oxidation arithmetic?",
   "back": "C2n: n − 1 turns, n acetyl-CoA, n − 1 NADH, n − 1 FADH₂; palmitate ≈ 106 ATP."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Odd and unsaturated fatty acids?",
   "back": "Odd chains → propionyl-CoA → succinyl-CoA; unsaturated need extra isomerase/reductase steps."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Ketone bodies?",
   "back": "Acetoacetate, β-hydroxybutyrate, acetone; liver mitochondria; fasting, diabetes, high-protein diet; fuel brain, heart, muscle; excess → ketoacidosis."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Fatty acid synthesis?",
   "back": "Cytosol; malonyl-CoA; fatty acid synthase cycles (condensation, reduction, dehydration, reduction) to palmitate; elongases, desaturases; ω3/ω6 essential."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Cholesterol synthesis and derivatives?",
   "back": "43 steps from acetyl-CoA, ATP and NADPH; HMG-CoA reductase (statins); derivatives: bile salts, vitamin D, steroid hormones."
  },
  {
   "id": "img-tg",
   "type": "image",
   "target": "tg",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Lipolysis. Hydrolysis of triglycerides into glycerol and fatty acids."
  },
  {
   "id": "img-act",
   "type": "image",
   "target": "act",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Activation. Fatty acid + CoA → acyl-CoA in the cytosol, costing the equivalent of 2 ATP."
  },
  {
   "id": "img-carn",
   "type": "image",
   "target": "carn",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Transport. Carnitine carries long-chain acyl groups across the inner mitochondrial membrane."
  },
  {
   "id": "img-beta",
   "type": "image",
   "target": "beta",
   "front": "What is at the arrow, and why does it matter?",
   "back": "β-oxidation. Each turn removes 2 carbons as acetyl-CoA, producing 1 NADH and 1 FADH₂."
  },
  {
   "id": "img-acoa",
   "type": "image",
   "target": "acoa",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Acetyl-CoA. Enters the Krebs cycle; in the fasting liver it forms ketone bodies."
  },
  {
   "id": "img-pal",
   "type": "image",
   "target": "pal",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Palmitate yield. n = 8: 7 turns, 8 acetyl-CoA (80 ATP) + 7 NADH (17.5) + 7 FADH₂ (10.5) − 2 = 106 ATP."
  }
 ],
 "deeper": [
  {
   "title": "Why diabetes can make the blood acidic",
   "html": "<p>Without insulin, cells cannot take up glucose, so the body behaves as if starving: fat is broken down massively and the liver turns the flood of acetyl-CoA into ketone bodies. These are acids; when production outruns use, they consume bicarbonate and blood pH falls, causing diabetic ketoacidosis with acetone on the breath.</p><p class='src'>Source: the lecture's ketone bodies slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "Fatty acid oxidation (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK556002/",
   "kind": "Book",
   "why": "β-oxidation and its disorders.",
   "note": ""
  },
  {
   "title": "Statins (MedlinePlus)",
   "url": "https://medlineplus.gov/statins.html",
   "kind": "Website",
   "why": "How HMG-CoA reductase inhibitors lower cholesterol.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Fatty acid oxidation (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK556002/"
  },
  {
   "name": "Statins (MedlinePlus)",
   "url": "https://medlineplus.gov/statins.html"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["biochem1-aa-metabolism"] = {
 "id": "biochem1-aa-metabolism",
 "subject": "biochem1",
 "group": "Metabolic biochemistry",
 "title": "Amino acid metabolism and the urea cycle",
 "sourceFile": "Amino acid metabolism, Chapter 3 (2025-2026) (Biochemistry, Pr. F.Z. Lahlou)",
 "sourceUrl": "https://drive.google.com/file/d/1Lxg8-Gan2Pj9N3xo4RGM47ray-scKhGy/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p><strong>Proteolysis</strong> is the hydrolysis of peptide bonds, breaking proteins into peptides and amino acids. Body amino acids come from <strong>dietary protein</strong> and the <strong>recycling of endogenous proteins</strong>. They are used for protein synthesis and derivatives, or broken down: the amino group becomes <strong>urea</strong>, and the carbon skeleton becomes glucose, ketone bodies or fatty acids.</p>"
  },
  {
   "id": "s1",
   "title": "Proteolysis",
   "html": "<p><strong>Exogenous</strong> (digestive): proteases <strong>pepsin</strong> (acidic stomach), <strong>trypsin</strong>, <strong>chymotrypsin</strong>, <strong>carboxypeptidases</strong>, <strong>aminopeptidases</strong> release peptides and amino acids. <strong>Endogenous</strong>: <strong>lysosomes</strong> (enzymes degrading all biopolymers), the <strong>calpain/calpastatin</strong> system (calpains degrade cytoskeletal and membrane proteins, e.g. in apoptosis and muscle wasting; calpastatin inhibits them), and the <strong>proteasome</strong>, a multi-subunit complex for selective, efficient degradation of tagged proteins.</p>"
  },
  {
   "id": "s2",
   "title": "Reactions of amino acids",
   "html": "<p><strong>Decarboxylation</strong> gives biogenic amines: histidine → <strong>histamine</strong> (vasodilator, lowers blood pressure); tryptophan → <strong>serotonin</strong> (5-hydroxytryptamine, vasoconstrictor) and <strong>melatonin</strong> (pineal hormone); glutamate → <strong>GABA</strong> (inhibitory neurotransmitter); DOPA → <strong>dopamine</strong> (precursor of adrenaline and noradrenaline); cysteine → <strong>taurine</strong> (bile acids: taurocholic acid); β-alanine (coenzyme A, carnosine). <strong>Transamination</strong>: an amino group moves to an α-keto acid (coenzyme <strong>pyridoxal phosphate</strong>): <strong>ALT</strong> (alanine aminotransferase, GPT: alanine + α-ketoglutarate ⇌ pyruvate + glutamate) and <strong>AST</strong> (aspartate aminotransferase, GOT: aspartate + α-ketoglutarate ⇌ oxaloacetate + glutamate), both <strong>liver biomarkers</strong>. <strong>Oxidative deamination</strong> (glutamate dehydrogenase, amino acid oxidases) releases <strong>ammonia</strong>. Microorganisms can also bioconvert precursors into amino acids industrially.</p>"
  },
  {
   "id": "s3",
   "title": "Urea cycle and carbon skeletons",
   "html": "<p>Ammonia is toxic, especially to the brain, so the <strong>liver</strong> converts it into <strong>urea</strong> through the <strong>urea cycle</strong> (partly mitochondrial, partly cytosolic); urea is excreted by the kidneys. Carbon skeletons are <strong>glucogenic</strong> (feed gluconeogenesis) or <strong>ketogenic</strong> (acetyl-CoA, ketone bodies, fatty acids); <strong>leucine and lysine</strong> are purely ketogenic.</p>"
  }
 ],
 "exam": [
  "Proteolysis: hydrolysis of peptide bonds.",
  "Sources: dietary protein and recycled body protein.",
  "Digestive proteases: pepsin, trypsin, chymotrypsin, carboxy- and aminopeptidases.",
  "Endogenous: lysosomes, calpain/calpastatin, proteasome.",
  "Decarboxylation: histamine, serotonin, melatonin, GABA, dopamine, taurine.",
  "Transamination (PLP): ALT and AST are liver markers.",
  "Oxidative deamination (glutamate dehydrogenase) → ammonia.",
  "Urea cycle in the liver detoxifies ammonia.",
  "Glucogenic vs ketogenic skeletons; Leu and Lys purely ketogenic."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Fate of amino acids",
   "caption": "From proteins to urea and carbon skeletons. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"80\" x2=\"380\" y2=\"120\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"145\" x2=\"40\" y2=\"150\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"145\" x2=\"520\" y2=\"150\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"620\" y1=\"180\" x2=\"620\" y2=\"230\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"170\" x2=\"380\" y2=\"230\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"145\" x2=\"40\" y2=\"260\"/>",
   "parts": {
    "prot": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"280\" y=\"20\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Dietary and body",
      "proteins (proteolysis)"
     ],
     "lx": 380.0,
     "ly": 48.0
    },
    "aa": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"280\" y=\"120\" width=\"200\" height=\"50\" rx=\"10\"/>",
     "label": [
      "Amino acid pool"
     ],
     "lx": 380.0,
     "ly": 151.0
    },
    "trans": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"40\" y=\"120\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Transamination",
      "(ALT, AST, PLP)"
     ],
     "lx": 140.0,
     "ly": 148.0
    },
    "deam": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"520\" y=\"120\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Oxidative deamination",
      "(glutamate DH) → NH₃"
     ],
     "lx": 620.0,
     "ly": 148.0
    },
    "urea": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"520\" y=\"230\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "NH₃ → urea cycle",
      "(liver)"
     ],
     "lx": 620.0,
     "ly": 258.0
    },
    "skel": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"280\" y=\"230\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Carbon skeletons → glucose,",
      "ketone bodies, fatty acids"
     ],
     "lx": 380.0,
     "ly": 258.0
    },
    "deriv": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9ecec\" x=\"40\" y=\"230\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Decarboxylation →",
      "histamine, GABA, serotonin"
     ],
     "lx": 140.0,
     "ly": 258.0
    }
   },
   "arrows": {
    "prot": [
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
    "aa": [
     {
      "t": [
       280.0,
       128.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "trans": [
     {
      "t": [
       40.0,
       128.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "deam": [
     {
      "t": [
       520.0,
       128.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "urea": [
     {
      "t": [
       520.0,
       238.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "skel": [
     {
      "t": [
       280.0,
       238.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "deriv": [
     {
      "t": [
       40.0,
       238.0
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
   "q": "Proteolysis is the:",
   "options": [
    "Oxidation of fatty acids",
    "Synthesis of proteins",
    "Formation of urea",
    "Hydrolysis of peptide bonds"
   ],
   "answer": 3,
   "why": "Proteins → peptides → amino acids."
  },
  {
   "q": "Which protease works in an acidic medium?",
   "options": [
    "Pepsin",
    "Trypsin",
    "Chymotrypsin",
    "Carboxypeptidase"
   ],
   "answer": 0,
   "why": "Stomach."
  },
  {
   "q": "Which is an endogenous proteolysis system?",
   "options": [
    "Pepsin",
    "Proteasome",
    "Aminopeptidase",
    "Trypsin"
   ],
   "answer": 1,
   "why": "Also lysosomes and calpains."
  },
  {
   "q": "Calpastatin:",
   "options": [
    "Inhibits calpain",
    "Is a lysosomal enzyme",
    "Makes urea",
    "Activates calpain"
   ],
   "answer": 0,
   "why": "Regulates calpain activity."
  },
  {
   "q": "Decarboxylation of tryptophan leads to:",
   "options": [
    "GABA",
    "Histamine",
    "Serotonin and melatonin",
    "Taurine"
   ],
   "answer": 2,
   "why": "Via 5-hydroxytryptamine."
  },
  {
   "q": "Histamine is a:",
   "options": [
    "Hormone of the pineal",
    "A vasodilator",
    "Vasoconstrictor",
    "Bile acid"
   ],
   "answer": 1,
   "why": "From histidine."
  },
  {
   "q": "Taurine derives from:",
   "options": [
    "Histidine",
    "Cysteine",
    "Tyrosine",
    "Glutamate"
   ],
   "answer": 1,
   "why": "Constituent of bile acids."
  },
  {
   "q": "Transamination requires the coenzyme:",
   "options": [
    "NAD⁺",
    "Biotin",
    "Pyridoxal phosphate",
    "TPP"
   ],
   "answer": 2,
   "why": "Vitamin B6."
  },
  {
   "q": "ALT and AST are used clinically as markers of:",
   "options": [
    "Bone",
    "Liver",
    "Kidney",
    "Brain"
   ],
   "answer": 1,
   "why": "Transaminases."
  },
  {
   "q": "ALT converts alanine + α-ketoglutarate into:",
   "options": [
    "Urea",
    "Oxaloacetate + glutamate",
    "Pyruvate + glutamate",
    "Aspartate"
   ],
   "answer": 2,
   "why": "AST uses aspartate."
  },
  {
   "q": "Oxidative deamination releases:",
   "options": [
    "Glucose",
    "Urea",
    "CO₂ only",
    "Ammonia"
   ],
   "answer": 3,
   "why": "By glutamate dehydrogenase."
  },
  {
   "q": "Where is urea made?",
   "options": [
    "Brain",
    "Kidney",
    "Muscle",
    "Liver"
   ],
   "answer": 3,
   "why": "Urea cycle; excreted by kidney."
  },
  {
   "q": "Which amino acids are purely ketogenic?",
   "options": [
    "Leu and Lys",
    "Ser and Thr",
    "Ala and Gly",
    "Asp and Glu"
   ],
   "answer": 0,
   "why": "No glucose from them."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "prot",
   "options": [
    "Proteolysis",
    "Oxidative deamination",
    "Amino acid pool",
    "Transamination"
   ],
   "answer": 0,
   "why": "The arrow points to: Proteolysis. Hydrolysis of peptide bonds: digestive proteases (exogenous) and lysosomes, calpains, proteasome (endogenous)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "aa",
   "options": [
    "Proteolysis",
    "Urea cycle",
    "Oxidative deamination",
    "Amino acid pool"
   ],
   "answer": 3,
   "why": "The arrow points to: Amino acid pool. Supplied by diet and recycling of body proteins; used for synthesis or broken down."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "trans",
   "options": [
    "Derivatives",
    "Oxidative deamination",
    "Transamination",
    "Amino acid pool"
   ],
   "answer": 2,
   "why": "The arrow points to: Transamination. Transfer of an amino group to an α-keto acid (pyridoxal phosphate); ALT and AST are liver markers."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "deam",
   "options": [
    "Transamination",
    "Oxidative deamination",
    "Urea cycle",
    "Carbon skeletons"
   ],
   "answer": 1,
   "why": "The arrow points to: Oxidative deamination. Glutamate dehydrogenase and amino acid oxidases release ammonia."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "urea",
   "options": [
    "Urea cycle",
    "Oxidative deamination",
    "Transamination",
    "Proteolysis"
   ],
   "answer": 0,
   "why": "The arrow points to: Urea cycle. The liver converts toxic ammonia into urea excreted by the kidneys."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "skel",
   "options": [
    "Amino acid pool",
    "Urea cycle",
    "Carbon skeletons",
    "Proteolysis"
   ],
   "answer": 2,
   "why": "The arrow points to: Carbon skeletons. Glucogenic amino acids give glucose; leucine and lysine are purely ketogenic."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "deriv",
   "options": [
    "Derivatives",
    "Oxidative deamination",
    "Amino acid pool",
    "Carbon skeletons"
   ],
   "answer": 0,
   "why": "The arrow points to: Derivatives. Decarboxylation gives biogenic amines: histamine, GABA, serotonin, dopamine, taurine."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Define proteolysis and amino acid sources.",
   "back": "Hydrolysis of peptide bonds; amino acids come from dietary protein and recycling of body proteins."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Exogenous vs endogenous proteolysis?",
   "back": "Exogenous: pepsin, trypsin, chymotrypsin, carboxy-/aminopeptidases. Endogenous: lysosomes, calpain/calpastatin, proteasome."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Biogenic amines from decarboxylation?",
   "back": "Histidine → histamine; tryptophan → serotonin, melatonin; glutamate → GABA; DOPA → dopamine; cysteine → taurine."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Transamination and clinical use?",
   "back": "Amino group transfer to an α-keto acid (PLP); ALT (alanine/pyruvate) and AST (aspartate/oxaloacetate) are liver markers."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Oxidative deamination and urea cycle?",
   "back": "Glutamate dehydrogenase releases NH₃; the liver's urea cycle converts it to urea excreted by the kidneys."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Glucogenic vs ketogenic?",
   "back": "Glucogenic skeletons → glucose; ketogenic → acetyl-CoA, ketone bodies; Leu and Lys purely ketogenic."
  },
  {
   "id": "img-prot",
   "type": "image",
   "target": "prot",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Proteolysis. Hydrolysis of peptide bonds: digestive proteases (exogenous) and lysosomes, calpains, proteasome (endogenous)."
  },
  {
   "id": "img-aa",
   "type": "image",
   "target": "aa",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Amino acid pool. Supplied by diet and recycling of body proteins; used for synthesis or broken down."
  },
  {
   "id": "img-trans",
   "type": "image",
   "target": "trans",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Transamination. Transfer of an amino group to an α-keto acid (pyridoxal phosphate); ALT and AST are liver markers."
  },
  {
   "id": "img-deam",
   "type": "image",
   "target": "deam",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Oxidative deamination. Glutamate dehydrogenase and amino acid oxidases release ammonia."
  },
  {
   "id": "img-urea",
   "type": "image",
   "target": "urea",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Urea cycle. The liver converts toxic ammonia into urea excreted by the kidneys."
  },
  {
   "id": "img-skel",
   "type": "image",
   "target": "skel",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Carbon skeletons. Glucogenic amino acids give glucose; leucine and lysine are purely ketogenic."
  },
  {
   "id": "img-deriv",
   "type": "image",
   "target": "deriv",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Derivatives. Decarboxylation gives biogenic amines: histamine, GABA, serotonin, dopamine, taurine."
  }
 ],
 "deeper": [
  {
   "title": "Why raised transaminases point to the liver",
   "html": "<p>ALT and AST are abundant inside liver cells, where they shuttle amino groups. When hepatocytes are damaged (hepatitis, drugs, alcohol), these enzymes leak into the blood, so their plasma levels rise. ALT is more liver-specific; AST is also found in heart and muscle.</p><p class='src'>Source: the lecture's transamination slide.</p>"
  }
 ],
 "resources": [
  {
   "title": "Amino acid metabolism (NCBI StatPearls: urea cycle)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK513323/",
   "kind": "Book",
   "why": "Urea cycle and ammonia detoxification.",
   "note": ""
  },
  {
   "title": "Liver function tests (MedlinePlus)",
   "url": "https://medlineplus.gov/lab-tests/liver-function-tests/",
   "kind": "Website",
   "why": "ALT and AST in practice.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Amino acid metabolism (NCBI StatPearls: urea cycle)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK513323/"
  },
  {
   "name": "Liver function tests (MedlinePlus)",
   "url": "https://medlineplus.gov/lab-tests/liver-function-tests/"
  }
 ],
 "verified": "22 Sep 2026"
};
