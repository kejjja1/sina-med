/* pharma: 6 lectures, merged for upload. Edit the source files, not this one. */
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["pharma-dynamics"] = {
 "id": "pharma-dynamics",
 "subject": "pharma",
 "group": "General pharmacology",
 "title": "Pharmacodynamics",
 "sourceFile": "Lecture 1 Pharmacodynamics.pdf (Pharmacology, Pr. Manoj K. Patel)",
 "sourceUrl": "https://drive.google.com/file/d/1vhV9bo2y9J7tuZNHP_01C5owEAjjkVAW/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p><strong>Pharmacology</strong> studies substances that interact with living systems through chemical processes, usually by binding regulatory molecules to activate or inhibit body processes. <strong>Toxicology</strong> is the branch dealing with undesirable effects; herbal products are chemicals too and should meet the same standards of efficacy and safety. Two divisions: <strong>pharmacodynamics</strong> (what the drug does to the body: potency, efficacy, dose-response, mechanism) and <strong>pharmacokinetics</strong> (what the body does to the drug).</p>"
  },
  {
   "id": "s1",
   "title": "Drugs and receptors",
   "html": "<p>A drug changes biological function through chemical action, usually as an <strong>agonist</strong> (activator) or <strong>antagonist</strong> (inhibitor) at a <strong>receptor</strong>. It needs the right size, charge, shape and composition; most drugs weigh 100 to 1,000 Da (antibodies are far larger: erenumab 145,000), and those over 1,000 do not diffuse readily. Bonds: covalent (strongest, usually irreversible), electrostatic, hydrophobic; binding is usually <strong>reversible</strong> (hydrogen, ionic, van der Waals). Shape matters like a key in a lock, and so does <strong>chirality</strong>: the (S)(-) isomer of carvedilol is a potent β-blocker, the (R)(+) isomer 100-fold weaker at β but equal at α. Some drugs act indirectly: <strong>acetylcholinesterase inhibitors</strong> amplify endogenous acetylcholine. <strong>Receptor occupancy theory</strong>: effect is proportional to receptors occupied, up to a ceiling.</p>"
  },
  {
   "id": "s2",
   "title": "Types of ligands",
   "html": "<p>The receptor exists in inactive (Rᵢ) and active (Rₐ) states with some constitutive activity. <strong>Full agonists</strong> strongly prefer Rₐ (morphine). <strong>Partial agonists</strong> give a lower maximum whatever the dose (pentazocine; <strong>buprenorphine</strong> is safer than morphine because it causes less respiratory depression). <strong>Antagonists</strong> bind with no effect and block the agonist (naloxone). <strong>Inverse agonists</strong> prefer Rᵢ and reduce basal activity (nalmefene). <strong>Allosteric modulators</strong> bind elsewhere and enhance or inhibit (benzodiazepines enhance GABA at the GABA-A chloride channel); allosteric inhibition is not overcome by more agonist.</p><p>Action ends when the drug dissociates, or lasts longer if a coupling molecule stays active or the drug binds covalently (until new receptors are made). <strong>Desensitisation</strong> limits over-activation: GPCRs are phosphorylated and removed by <strong>β-arrestin-mediated endocytosis</strong>, then resensitised or degraded.</p>"
  },
  {
   "id": "s3",
   "title": "Dose-response relationships",
   "html": "<p>Effect rises with dose to a plateau and is usually plotted against log dose. <strong>Kd</strong> is the concentration occupying 50% of receptors: <strong>the lower the Kd, the higher the affinity</strong>. <strong>Affinity</strong>: attraction to the receptor. <strong>Potency</strong>: dose needed for 50% of the maximal effect (<strong>EC₅₀ / ED₅₀</strong>); fentanyl is about 100 times more potent than morphine. <strong>Efficacy</strong>: maximal effect (<strong>Emax</strong>); clinically efficacy usually matters more (loop diuretics outperform others). <strong>Spare receptors</strong>: a maximal response can occur without full occupancy; a little antagonist only shifts the curve, more antagonist lowers the maximum.</p><p><strong>Competitive antagonist</strong> (phentolamine, naloxone, propranolol): same site, reversible, <strong>curve shifts right, potency falls, efficacy unchanged</strong>, overcome by more agonist; its effect varies with plasma level and with agonist level (exercise can overcome propranolol). <strong>Irreversible/non-competitive antagonist</strong> (<strong>phenoxybenzamine</strong>, used in phaeochromocytoma): <strong>lowers maximal efficacy</strong>; duration depends on receptor turnover; overdose must be countered physiologically. <strong>Physiological antagonism</strong>: opposite pathways (acetylcholine slows the heart via muscarinic receptors, noradrenaline speeds it via β receptors).</p>"
  },
  {
   "id": "s4",
   "title": "Receptor families",
   "html": "<p>(1) <strong>Intracellular receptors</strong> for lipid-soluble ligands (corticosteroids, mineralocorticoids, sex steroids, vitamin D, thyroid hormone) that regulate gene transcription. (2) <strong>Enzyme-linked receptors</strong> (insulin, EGF, PDGF, ANP, TGF-β) activating tyrosine kinase, serine kinase or guanylyl cyclase. (3) <strong>Ligand-gated ion channels</strong> (acetylcholine, serotonin, GABA, glutamate). (4) <strong>G protein-coupled receptors</strong> acting via second messengers (cAMP, Ca²⁺-phosphoinositide); responses often desensitise quickly and reversibly.</p>"
  },
  {
   "id": "s5",
   "title": "Quantal responses and safety",
   "html": "<p><strong>Graded</strong> curves show effect in one individual; <strong>quantal</strong> curves show the proportion of a population responding. <strong>ED₅₀</strong> (effective in 50%), <strong>TD₅₀</strong> (toxic in 50%), <strong>LD₅₀</strong> (lethal in 50% of animals). <strong>Therapeutic index = TD₅₀ / ED₅₀</strong>: the larger it is, the wider the therapeutic window. Large TI: penicillins, cephalosporins, allopurinol, some antipsychotics. Small TI (narrow window, under about 2): <strong>lithium, digoxin, phenytoin, theophylline, chemotherapy</strong>, which need titration and monitoring. Example: TD₅₀ 200 mg / ED₅₀ 20 mg = TI 10.</p><p><strong>Variable responses</strong>: idiosyncratic, hypo- or hyper-reactive; <strong>tolerance</strong> (response falls with continued use) and <strong>tachyphylaxis</strong> (falls very rapidly). Causes: drug concentration at the target (age, weight, sex, disease, liver and kidney function), endogenous ligand levels (propranolol slows the heart in phaeochromocytoma but not in a marathon runner at rest), and receptor number or coupling. Case: an asthmatic hypertensive on <strong>propranolol</strong> should switch to <strong>verapamil</strong>, since non-selective β-blockade worsens bronchospasm and blunts adrenaline.</p>"
  }
 ],
 "exam": [
  "Pharmacodynamics: what the drug does to the body; pharmacokinetics: what the body does to the drug.",
  "Most drugs bind reversibly (hydrogen, ionic, van der Waals); covalent = irreversible.",
  "Chirality matters: (S)-carvedilol is the potent β-blocker.",
  "Lower Kd = higher affinity.",
  "Potency = EC₅₀/ED₅₀; efficacy = Emax.",
  "Fentanyl ≈ 100× more potent than morphine.",
  "Partial agonists: lower maximum (buprenorphine, pentazocine).",
  "Inverse agonist reduces constitutive activity (nalmefene).",
  "Competitive antagonist: curve right, efficacy unchanged (naloxone, propranolol).",
  "Irreversible antagonist: lower Emax (phenoxybenzamine).",
  "Benzodiazepines: allosteric modulators of GABA-A.",
  "Therapeutic index = TD₅₀ / ED₅₀; narrow for lithium, digoxin, phenytoin, theophylline.",
  "Tolerance develops slowly; tachyphylaxis rapidly."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Pharmacodynamics",
   "caption": "Drug-receptor interactions and the dose-response curve. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"240\" y1=\"70\" x2=\"280\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"70\" x2=\"520\" y2=\"70\"/>",
   "parts": {
    "bind": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"40\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Drug + receptor",
      "(reversible bonds)"
     ],
     "lx": 140.0,
     "ly": 68.0
    },
    "full": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"280\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Full agonist:",
      "maximal effect"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "partial": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"520\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Partial agonist:",
      "lower maximum"
     ],
     "lx": 620.0,
     "ly": 68.0
    },
    "comp": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"40\" y=\"180\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Competitive antagonist:",
      "curve shifts right"
     ],
     "lx": 140.0,
     "ly": 208.0
    },
    "noncomp": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"280\" y=\"180\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Irreversible antagonist:",
      "maximum falls"
     ],
     "lx": 380.0,
     "ly": 208.0
    },
    "inverse": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"520\" y=\"180\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Inverse agonist:",
      "reduces basal activity"
     ],
     "lx": 620.0,
     "ly": 208.0
    },
    "ti": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9ecec\" x=\"280\" y=\"310\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Therapeutic index",
      "= TD₅₀ / ED₅₀"
     ],
     "lx": 380.0,
     "ly": 338.0
    }
   },
   "arrows": {
    "bind": [
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
    "full": [
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
    "partial": [
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
    "comp": [
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
    ],
    "noncomp": [
     {
      "t": [
       280.0,
       188.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "inverse": [
     {
      "t": [
       520.0,
       188.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "ti": [
     {
      "t": [
       280.0,
       318.0
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
   "q": "Pharmacodynamics describes:",
   "options": [
    "What the drug does to the body",
    "How drugs are excreted",
    "How drugs are absorbed",
    "What the body does to the drug"
   ],
   "answer": 0,
   "why": "Pharmacokinetics is the reverse."
  },
  {
   "q": "Which bond type is usually irreversible?",
   "options": [
    "Covalent bond",
    "Hydrogen bond",
    "Ionic bond",
    "Van der Waals"
   ],
   "answer": 0,
   "why": "Most drug binding is reversible."
  },
  {
   "q": "Drugs larger than about which molecular weight do not diffuse readily?",
   "options": [
    "10,000",
    "1,000",
    "145,000",
    "100"
   ],
   "answer": 1,
   "why": "Most drugs are 100 to 1,000 Da."
  },
  {
   "q": "Which enantiomer of carvedilol is the potent β-blocker?",
   "options": [
    "Neither",
    "(S)(-)",
    "(R)(+)",
    "Both equally"
   ],
   "answer": 1,
   "why": "The (R) isomer is about 100-fold weaker at β."
  },
  {
   "q": "A lower Kd means:",
   "options": [
    "Higher efficacy",
    "Lower affinity",
    "Higher affinity",
    "Lower potency"
   ],
   "answer": 2,
   "why": "Kd is the concentration occupying 50% of receptors."
  },
  {
   "q": "Potency refers to:",
   "options": [
    "The maximal effect the drug can reach",
    "The number of receptors on the cell",
    "The duration of the drug's action",
    "The dose producing 50% of the maximal effect"
   ],
   "answer": 3,
   "why": "EC₅₀ or ED₅₀."
  },
  {
   "q": "Efficacy refers to:",
   "options": [
    "The Kd of the drug for the receptor",
    "The dose giving 50% of the maximal effect",
    "The ratio of TD₅₀ to ED₅₀",
    "The maximal response a drug can produce"
   ],
   "answer": 3,
   "why": "Emax."
  },
  {
   "q": "Buprenorphine is a:",
   "options": [
    "Partial µ agonist",
    "Inverse agonist",
    "Opioid antagonist",
    "Full µ agonist"
   ],
   "answer": 0,
   "why": "Safer than morphine because of less respiratory depression."
  },
  {
   "q": "An inverse agonist:",
   "options": [
    "Blocks the agonist without any effect",
    "Binds covalently to the active site",
    "Mimics the endogenous agonist fully",
    "Reduces the constitutive activity of the receptor"
   ],
   "answer": 3,
   "why": "Example given: nalmefene."
  },
  {
   "q": "A competitive antagonist shifts the agonist curve:",
   "options": [
    "Down, with lower Emax",
    "Not at all",
    "To the right, with unchanged Emax",
    "To the left"
   ],
   "answer": 2,
   "why": "It can be overcome by more agonist."
  },
  {
   "q": "Phenoxybenzamine is:",
   "options": [
    "A competitive β-adrenoceptor blocker",
    "An irreversible α antagonist lowering Emax",
    "A partial agonist at α receptors",
    "An allosteric enhancer of noradrenaline"
   ],
   "answer": 1,
   "why": "Used in phaeochromocytoma."
  },
  {
   "q": "Why can exercise overcome propranolol's effect on heart rate?",
   "options": [
    "Exercise speeds up propranolol breakdown",
    "More catecholamine outcompetes a competitive antagonist",
    "Propranolol binds irreversibly at rest",
    "Propranolol is a partial agonist at β1"
   ],
   "answer": 1,
   "why": "Competitive block depends on agonist concentration."
  },
  {
   "q": "Benzodiazepines act on GABA-A receptors as:",
   "options": [
    "Allosteric modulators enhancing GABA",
    "Full agonists at the GABA site",
    "Inverse agonists",
    "Competitive antagonists"
   ],
   "answer": 0,
   "why": "They bind a separate site."
  },
  {
   "q": "Acetylcholine lowering heart rate against noradrenaline is an example of:",
   "options": [
    "Irreversible antagonism",
    "Competitive antagonism",
    "Physiological antagonism",
    "Inverse agonism"
   ],
   "answer": 2,
   "why": "Opposite pathways, different receptors."
  },
  {
   "q": "Insulin and EGF act through:",
   "options": [
    "Ligand-gated ion channels",
    "Intracellular receptors",
    "Enzyme-linked (tyrosine kinase) receptors",
    "G protein-coupled receptors"
   ],
   "answer": 2,
   "why": "Also PDGF, ANP, TGF-β."
  },
  {
   "q": "Which ligands act on intracellular receptors?",
   "options": [
    "Adrenaline and noradrenaline",
    "Acetylcholine and nicotine",
    "Insulin and growth factors",
    "Steroids and thyroid hormone"
   ],
   "answer": 3,
   "why": "They regulate gene transcription."
  },
  {
   "q": "Therapeutic index is:",
   "options": [
    "LD₅₀ × ED₅₀",
    "EC₅₀ / Kd",
    "ED₅₀ / TD₅₀",
    "TD₅₀ / ED₅₀"
   ],
   "answer": 3,
   "why": "Larger = wider therapeutic window."
  },
  {
   "q": "If TD₅₀ is 200 mg and ED₅₀ 20 mg, the TI is:",
   "options": [
    "180",
    "10",
    "4,000",
    "0.1"
   ],
   "answer": 1,
   "why": "200 / 20 = 10."
  },
  {
   "q": "Which drug has a narrow therapeutic index?",
   "options": [
    "Cephalosporin",
    "Allopurinol",
    "Penicillin",
    "Lithium"
   ],
   "answer": 3,
   "why": "Also digoxin, phenytoin, theophylline."
  },
  {
   "q": "Rapidly developing loss of response is called:",
   "options": [
    "Tachyphylaxis",
    "Idiosyncrasy",
    "Hyperreactivity",
    "Tolerance"
   ],
   "answer": 0,
   "why": "Tolerance develops more slowly."
  },
  {
   "q": "If 1 mg lorazepam matches 10 mg diazepam, then lorazepam is:",
   "options": [
    "More efficacious",
    "Less potent",
    "A partial agonist",
    "More potent"
   ],
   "answer": 3,
   "why": "Same effect at a lower dose = potency."
  },
  {
   "q": "GABA-A activation reduces neuronal excitability by:",
   "options": [
    "Gene transcription",
    "Chloride entry",
    "G protein activation",
    "Sodium entry"
   ],
   "answer": 1,
   "why": "It is a ligand-gated chloride channel."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "bind",
   "options": [
    "Full agonist",
    "Competitive antagonist",
    "Partial agonist",
    "Drug-receptor binding"
   ],
   "answer": 3,
   "why": "The arrow points to: Drug-receptor binding. Usually reversible via hydrogen, ionic and van der Waals bonds; occasionally covalent and irreversible."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "full",
   "options": [
    "Drug-receptor binding",
    "Competitive antagonist",
    "Full agonist",
    "Irreversible antagonist"
   ],
   "answer": 2,
   "why": "The arrow points to: Full agonist. Binds and activates the receptor to give the maximal response (e.g. morphine)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "partial",
   "options": [
    "Full agonist",
    "Therapeutic index",
    "Partial agonist",
    "Competitive antagonist"
   ],
   "answer": 2,
   "why": "The arrow points to: Partial agonist. Lower efficacy at full occupancy (e.g. pentazocine, buprenorphine)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "comp",
   "options": [
    "Inverse agonist",
    "Competitive antagonist",
    "Partial agonist",
    "Irreversible antagonist"
   ],
   "answer": 1,
   "why": "The arrow points to: Competitive antagonist. Reversible at the agonist site: potency falls (EC₅₀ rises), efficacy unchanged (naloxone, propranolol)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "noncomp",
   "options": [
    "Irreversible antagonist",
    "Partial agonist",
    "Competitive antagonist",
    "Drug-receptor binding"
   ],
   "answer": 0,
   "why": "The arrow points to: Irreversible antagonist. Covalent binding lowers maximal efficacy (phenoxybenzamine)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "inverse",
   "options": [
    "Drug-receptor binding",
    "Irreversible antagonist",
    "Inverse agonist",
    "Full agonist"
   ],
   "answer": 2,
   "why": "The arrow points to: Inverse agonist. Prefers the inactive state, reduces constitutive activity (nalmefene)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ti",
   "options": [
    "Therapeutic index",
    "Inverse agonist",
    "Full agonist",
    "Competitive antagonist"
   ],
   "answer": 0,
   "why": "The arrow points to: Therapeutic index. TD₅₀ / ED₅₀: small for lithium, digoxin, chemotherapy; large for penicillins."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Define pharmacology and its two divisions.",
   "back": "Study of substances interacting with living systems by chemical processes. Pharmacodynamics: what drugs do to the body. Pharmacokinetics: what the body does to drugs."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "What properties must a drug have to bind its receptor?",
   "back": "Appropriate size (mostly 100-1,000 Da), charge, shape and atomic composition; complementary 'key-lock' fit; stereochemistry matters."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Full agonist, partial agonist, antagonist, inverse agonist?",
   "back": "Full: maximal effect (morphine). Partial: lower maximum (pentazocine, buprenorphine). Antagonist: blocks without effect (naloxone). Inverse: reduces basal activity (nalmefene)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Affinity vs potency vs efficacy?",
   "back": "Affinity: attraction (Kd; lower = higher). Potency: dose for 50% of max (EC₅₀). Efficacy: maximal effect (Emax)."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Competitive vs irreversible antagonist on the curve?",
   "back": "Competitive: shifts right, EC₅₀ rises, Emax unchanged, surmountable. Irreversible: Emax falls; duration depends on receptor turnover."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "What are spare receptors?",
   "back": "Receptors in excess of those needed for maximal response, so Emax is reached without full occupancy."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Four receptor families with examples?",
   "back": "Intracellular (steroids, thyroid hormone), enzyme-linked (insulin, EGF), ligand-gated channels (ACh, GABA, 5-HT, glutamate), GPCRs (cAMP, Ca²⁺-IP₃)."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "How do GPCRs desensitise?",
   "back": "Phosphorylation and β-arrestin-mediated endocytosis; then resensitisation or degradation."
  },
  {
   "id": "x8",
   "type": "text",
   "front": "Therapeutic index and window?",
   "back": "TI = TD₅₀ / ED₅₀. Large TI: penicillins, cephalosporins, allopurinol. Narrow: lithium, digoxin, phenytoin, theophylline, chemotherapy."
  },
  {
   "id": "x9",
   "type": "text",
   "front": "Causes of variable drug responses?",
   "back": "Different drug concentrations at the target (age, weight, sex, disease, organ function), different endogenous ligand levels, altered receptor number or coupling."
  },
  {
   "id": "img-bind",
   "type": "image",
   "target": "bind",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Drug-receptor binding. Usually reversible via hydrogen, ionic and van der Waals bonds; occasionally covalent and irreversible."
  },
  {
   "id": "img-full",
   "type": "image",
   "target": "full",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Full agonist. Binds and activates the receptor to give the maximal response (e.g. morphine)."
  },
  {
   "id": "img-partial",
   "type": "image",
   "target": "partial",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Partial agonist. Lower efficacy at full occupancy (e.g. pentazocine, buprenorphine)."
  },
  {
   "id": "img-comp",
   "type": "image",
   "target": "comp",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Competitive antagonist. Reversible at the agonist site: potency falls (EC₅₀ rises), efficacy unchanged (naloxone, propranolol)."
  },
  {
   "id": "img-noncomp",
   "type": "image",
   "target": "noncomp",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Irreversible antagonist. Covalent binding lowers maximal efficacy (phenoxybenzamine)."
  },
  {
   "id": "img-inverse",
   "type": "image",
   "target": "inverse",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Inverse agonist. Prefers the inactive state, reduces constitutive activity (nalmefene)."
  },
  {
   "id": "img-ti",
   "type": "image",
   "target": "ti",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Therapeutic index. TD₅₀ / ED₅₀: small for lithium, digoxin, chemotherapy; large for penicillins."
  }
 ],
 "deeper": [
  {
   "title": "Why efficacy usually matters more than potency",
   "html": "<p>A more potent drug simply needs a smaller dose; as long as that dose can be given safely, potency changes little for the patient. Efficacy sets the ceiling: if a drug cannot produce a strong enough effect, no dose will help. That is why a loop diuretic that removes more fluid is preferred in severe oedema, whatever its milligram dose.</p><p class='src'>Source: the lecture's potency vs efficacy slides.</p>"
  },
  {
   "title": "Why buprenorphine is safer than morphine",
   "html": "<p>As a partial agonist, buprenorphine can only activate µ-opioid receptors part of the way, even at full occupancy. Its respiratory depression therefore plateaus, while a full agonist's keeps rising with dose. It also occupies receptors tightly, blunting additional opioids taken on top.</p><p class='src'>Source: the lecture's partial agonist slide.</p>"
  }
 ],
 "resources": [
  {
   "title": "Pharmacodynamics (Osmosis)",
   "url": "https://www.osmosis.org/",
   "kind": "Website",
   "why": "Animated reviews of agonists, antagonists and dose-response curves.",
   "note": ""
  },
  {
   "title": "Basic and Clinical Pharmacology (Katzung, AccessMedicine)",
   "url": "https://accessmedicine.mhmedical.com/book.aspx?bookID=2988",
   "kind": "Book",
   "why": "The textbook the lecture draws on.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Pharmacodynamics (Osmosis)",
   "url": "https://www.osmosis.org/"
  },
  {
   "name": "Basic and Clinical Pharmacology (Katzung, AccessMedicine)",
   "url": "https://accessmedicine.mhmedical.com/book.aspx?bookID=2988"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["pharma-biotransformation"] = {
 "id": "pharma-biotransformation",
 "subject": "pharma",
 "group": "General pharmacology",
 "title": "Biotransformation (drug metabolism)",
 "sourceFile": "Lecture 3 Biotransformation.pdf (Pharmacology, Pr. Manoj K. Patel)",
 "sourceUrl": "https://drive.google.com/file/d/1aUBNDLLdUe8Jxi2opnqBtRNBbY8XUppX/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>Renal excretion ends drug action, but lipophilic drugs would stay in the body for a very long time (thiopental, pentobarbital) without being made more polar. Metabolism has five possible outcomes: <strong>deactivation</strong> (most drugs), <strong>activation of a prodrug</strong>, <strong>detoxification</strong>, <strong>toxification</strong> (rare: paracetamol) and a <strong>change of solubility</strong> (lipophilic → hydrophilic). The <strong>liver</strong> is the main site; drugs given orally (and partly rectally) undergo <strong>first-pass metabolism</strong> in the gut wall and liver, reducing bioavailability.</p>"
  },
  {
   "id": "s1",
   "title": "Phase I and phase II",
   "html": "<p><strong>Phase I</strong> (oxidation, reduction, hydrolysis) introduces or unmasks a functional group (-OH, -NH₂, -SH), mostly via <strong>cytochrome P450</strong>; the product may be excreted if polar enough. <strong>Phase II</strong> conjugates it with glucuronic acid, sulphate, acetate or an amino acid, via transferases, to form a highly polar product. Some drugs use only one phase, both, other systems, or are excreted unchanged. Other metabolising sites: gut, lungs, skin, kidneys, brain.</p>"
  },
  {
   "id": "s2",
   "title": "Cytochrome P450",
   "html": "<p>About <strong>57 CYP genes</strong> in humans, also used for vitamin D, haem and steroid metabolism. Mostly in the <strong>smooth endoplasmic reticulum</strong> of hepatocytes and enterocytes. A haem at the active site performs the redox reaction with <strong>NADPH-P450 oxidoreductase</strong>, NADPH and O₂: the Fe³⁺ P450 binds the drug, receives two electrons, activates oxygen and oxidises the drug. Naming: number = family, letter = subfamily, last number = isozyme. Liver content: 3A4 about 30%, 2C9 20%, 1A2 15%, 2E1 10%, 2D6 5%.</p><p><strong>Six main enzymes (≈90% of xenobiotic metabolism)</strong>: <strong>1A2</strong> (aromatic hydrocarbons, methylxanthines), <strong>2C9</strong> (S-warfarin, phenytoin), <strong>2C19</strong> (proton pump inhibitors in part, carisoprodol), <strong>2D6</strong> (about 25% of drugs: many cardiac and psychiatric drugs; strongly inhibited by quinidine, fluoxetine, paroxetine), <strong>2E1</strong> (paracetamol, high-dose ethanol, halogenated hydrocarbons; centrilobular), <strong>3A4</strong> (most liver and gut-wall CYP, first-pass; <strong>50-60% of all drugs</strong>: calcium channel blockers, steroids, statins, benzodiazepines; inhibited by grapefruit juice; induction shared with P-glycoprotein).</p>"
  },
  {
   "id": "s3",
   "title": "Induction, inhibition and liver disease",
   "html": "<p><strong>Inducers</strong> speed metabolism (the drug's own or others'): <strong>rifampin, phenytoin, carbamazepine, barbiturates, St John's wort</strong>; smoking induces CYP1A, ethanol and ketones induce CYP2E1. <strong>Inhibitors</strong> slow metabolism (competitive binding to haem, etc.): <strong>erythromycin, ketoconazole, cimetidine, fluoxetine, quinidine</strong>, grapefruit juice. These are the basis of many drug interactions. <strong>Liver disease</strong> reduces enzyme mass, albumin binding and hepatic blood flow.</p>"
  },
  {
   "id": "s4",
   "title": "Pharmacogenetics",
   "html": "<p>Two alleles per gene give four phenotypes: <strong>poor, intermediate, extensive (normal) and ultra-rapid metabolisers</strong>. <strong>CYP2D6</strong>: over 50 alleles; about 8% of Caucasians and 0-2% of Asians are poor metabolisers; 3% of Spaniards and 13% of Ethiopians are ultra-rapid. <strong>Codeine</strong> needs CYP2D6 to become morphine: poor metabolisers get no analgesia, ultra-rapid metabolisers risk opioid overdose. Multiple 2D6 copies lower tricyclic levels (nortriptyline, amitriptyline). <strong>Tamoxifen</strong> is activated by 2D6 to 4-hydroxy-tamoxifen, so poor metabolisers and patients on <strong>fluoxetine or quinidine</strong> may lose its benefit.</p><p><strong>Warfarin</strong>: doses vary 20-fold (0.5 to 10 mg/day); most variation comes from <strong>VKORC1</strong> (the target enzyme; the 1639G>A variant increases sensitivity), with <strong>CYP2C9</strong> variants also contributing; the risk is haemorrhage. <strong>CYP2C19</strong> ultra-rapid metabolisers of PPIs more often fail H. pylori or reflux treatment. Other polymorphisms: dihydropyrimidine dehydrogenase (fluorouracil), butyrylcholinesterase (succinylcholine).</p>"
  },
  {
   "id": "s5",
   "title": "Non-CYP oxidation, conjugation and hydrolysis",
   "html": "<p><strong>Alcohol dehydrogenase</strong> (alcohol → aldehyde; ethanol at low-moderate levels; also ethylene glycol, methanol, isopropanol, chloral hydrate), <strong>aldehyde dehydrogenase</strong> (mitochondrial), <strong>monoamine oxidase</strong> (catecholamines, tyramine). <strong>Phase II</strong>: <strong>glucuronidation</strong> (UGT1 and UGT2; UGT1A1 polymorphism causes <strong>Gilbert's syndrome</strong>), <strong>sulfation</strong> (SULT1, SULT2), <strong>glutathione</strong> conjugation (detoxifies reactive P450 metabolites such as paracetamol's), <strong>acetylation</strong> by N-acetyltransferases: NAT1 (PABA, sulphonamides), <strong>NAT2</strong> (isoniazid, hydralazine, procainamide, dapsone), polymorphic: about 70% of Middle Eastern, 50% of Caucasian and 25% of Asian people are <strong>slow acetylators</strong> with higher drug levels. Other polymorphisms: thiopurine S-methyltransferase, COMT. <strong>Hydrolysis</strong> by esterases; <strong>plasma cholinesterase</strong> deficiency causes <strong>prolonged paralysis after succinylcholine</strong>.</p>"
  }
 ],
 "exam": [
  "Metabolism outcomes: deactivation, prodrug activation, detoxification, toxification, solubility change.",
  "First-pass metabolism affects oral (and partly rectal) drugs.",
  "Phase I: CYP450 oxidation, reduction, hydrolysis. Phase II: conjugation.",
  "CYP450 lives in the smooth ER; needs NADPH, P450 reductase and O₂.",
  "CYP3A4 handles 50-60% of drugs; inhibited by grapefruit juice.",
  "CYP2D6 ≈ 25% of drugs; inhibited by quinidine, fluoxetine, paroxetine.",
  "Inducers: rifampin, phenytoin, carbamazepine, barbiturates, St John's wort.",
  "Inhibitors: erythromycin, ketoconazole, cimetidine, fluoxetine, quinidine.",
  "Codeine → morphine needs CYP2D6: poor metabolisers get no analgesia.",
  "Tamoxifen + fluoxetine: loss of tamoxifen activation.",
  "Warfarin dose varies 20×: VKORC1 > CYP2C9.",
  "NAT2 slow acetylators: isoniazid, hydralazine, procainamide, dapsone.",
  "Plasma cholinesterase deficiency: prolonged succinylcholine paralysis."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Drug biotransformation",
   "caption": "Phase I and phase II, and what alters CYP450 activity. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"240\" y1=\"70\" x2=\"280\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"70\" x2=\"520\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"620\" y1=\"100\" x2=\"620\" y2=\"170\"/>",
   "parts": {
    "drug": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"40\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Lipophilic drug",
      "(first pass: gut, liver)"
     ],
     "lx": 140.0,
     "ly": 68.0
    },
    "p1": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"280\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Phase I: CYP450",
      "oxidation, reduction, hydrolysis"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "p2": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"520\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Phase II: glucuronide,",
      "sulfate, GSH, acetyl"
     ],
     "lx": 620.0,
     "ly": 68.0
    },
    "urine": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"520\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Polar product →",
      "urine or bile"
     ],
     "lx": 620.0,
     "ly": 198.0
    },
    "ind": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"40\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Inducers: rifampin,",
      "carbamazepine, St John's wort"
     ],
     "lx": 140.0,
     "ly": 198.0
    },
    "inh": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"280\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Inhibitors: erythromycin,",
      "ketoconazole, grapefruit"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "gen": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9ecec\" x=\"280\" y=\"300\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Polymorphism: poor to",
      "ultra-rapid metabolisers"
     ],
     "lx": 380.0,
     "ly": 328.0
    }
   },
   "arrows": {
    "drug": [
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
    "p1": [
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
    "p2": [
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
    "urine": [
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
    "ind": [
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
    "inh": [
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
    "gen": [
     {
      "t": [
       280.0,
       308.0
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
   "root": "Drug metabolism",
   "branches": [
    [
     "Phase I",
     [
      "CYP450 oxidation",
      "Reduction, hydrolysis",
      "May create toxic metabolites (NAPQI)"
     ]
    ],
    [
     "Phase II",
     [
      "Glucuronidation (UGT1A1: Gilbert)",
      "Sulfation",
      "Glutathione",
      "Acetylation (NAT2)"
     ]
    ],
    [
     "Key CYPs",
     [
      "3A4: 50-60% of drugs",
      "2D6: codeine, tamoxifen",
      "2C9: warfarin, phenytoin",
      "2C19: PPIs",
      "2E1: paracetamol, ethanol",
      "1A2: methylxanthines"
     ]
    ],
    [
     "Modulators",
     [
      "Inducers: rifampin, carbamazepine, phenytoin, St John's wort",
      "Inhibitors: ketoconazole, erythromycin, fluoxetine, grapefruit"
     ]
    ],
    [
     "Pharmacogenetics",
     [
      "Poor to ultra-rapid metabolisers",
      "Codeine and CYP2D6",
      "Warfarin: VKORC1 + CYP2C9",
      "Slow acetylators"
     ]
    ]
   ]
  }
 },
 "mcqs": [
  {
   "q": "Which is an example of toxification by metabolism?",
   "options": [
    "Omeprazole → hydroxyomeprazole",
    "Thiopental → inactive",
    "Codeine → morphine",
    "Paracetamol → reactive metabolite"
   ],
   "answer": 3,
   "why": "Toxification is rare; paracetamol is the classic example."
  },
  {
   "q": "Which routes undergo first-pass metabolism?",
   "options": [
    "Oral and partly rectal",
    "Inhalation",
    "IV",
    "Intramuscular"
   ],
   "answer": 0,
   "why": "The drug passes the gut wall and liver first."
  },
  {
   "q": "Where is most CYP450 activity located?",
   "options": [
    "Mitochondrial matrix",
    "Smooth endoplasmic reticulum",
    "Cell nucleus",
    "Lysosomes"
   ],
   "answer": 1,
   "why": "Some mitochondrial CYP exists in the adrenal."
  },
  {
   "q": "What does CYP450 require for drug oxidation?",
   "options": [
    "Acetyl-CoA",
    "ATP only",
    "Glucuronic acid",
    "NADPH, P450 reductase and O₂"
   ],
   "answer": 3,
   "why": "A haem iron performs the redox steps."
  },
  {
   "q": "Which enzyme metabolises about half of all drugs?",
   "options": [
    "CYP2D6",
    "CYP2E1",
    "CYP3A4",
    "CYP1A2"
   ],
   "answer": 2,
   "why": "It is also abundant in the gut wall."
  },
  {
   "q": "Grapefruit juice increases the bioavailability of some drugs by inhibiting:",
   "options": [
    "UGT1A1 in the liver",
    "NAT2 in the liver",
    "CYP3A4 in the gut wall",
    "CYP2D6 in the liver"
   ],
   "answer": 2,
   "why": "Especially calcium channel blockers and statins."
  },
  {
   "q": "Which enzyme metabolises S-warfarin and phenytoin?",
   "options": [
    "CYP2C9",
    "CYP3A4",
    "CYP2E1",
    "CYP1A2"
   ],
   "answer": 0,
   "why": "CYP2C9 polymorphisms contribute to warfarin variability."
  },
  {
   "q": "Smoking induces:",
   "options": [
    "CYP2C19",
    "CYP1A",
    "CYP2D6",
    "NAT2"
   ],
   "answer": 1,
   "why": "Ethanol induces CYP2E1."
  },
  {
   "q": "Which is a CYP450 inducer?",
   "options": [
    "Cimetidine",
    "Rifampin",
    "Ketoconazole",
    "Erythromycin"
   ],
   "answer": 1,
   "why": "Also phenytoin, carbamazepine, barbiturates, St John's wort."
  },
  {
   "q": "Why do some patients get no pain relief from codeine?",
   "options": [
    "They are CYP2D6 poor metabolisers",
    "They are slow acetylators",
    "They lack opioid receptors",
    "They have liver failure"
   ],
   "answer": 0,
   "why": "Codeine must be converted to morphine."
  },
  {
   "q": "An ultra-rapid CYP2D6 metaboliser given codeine risks:",
   "options": [
    "Haemolysis",
    "Prolonged paralysis",
    "No effect",
    "Opioid overdose"
   ],
   "answer": 3,
   "why": "Too much morphine is made too quickly."
  },
  {
   "q": "Why should a patient on tamoxifen avoid fluoxetine?",
   "options": [
    "It causes QT prolongation",
    "It displaces tamoxifen from albumin",
    "It inhibits CYP2D6, which activates tamoxifen",
    "It induces CYP3A4"
   ],
   "answer": 2,
   "why": "The patient may lose the benefit of tamoxifen."
  },
  {
   "q": "Most of the variation in warfarin dose comes from polymorphism in:",
   "options": [
    "CYP3A4",
    "VKORC1",
    "CYP2D6",
    "NAT2"
   ],
   "answer": 1,
   "why": "CYP2C9 also contributes."
  },
  {
   "q": "Ultra-rapid CYP2C19 metabolisers more often fail treatment with:",
   "options": [
    "Warfarin",
    "Isoniazid",
    "Proton pump inhibitors",
    "Codeine"
   ],
   "answer": 2,
   "why": "For H. pylori or reflux oesophagitis."
  },
  {
   "q": "Which enzyme is responsible for Gilbert's syndrome?",
   "options": [
    "NAT2",
    "CYP2D6",
    "TPMT",
    "UGT1A1"
   ],
   "answer": 3,
   "why": "A glucuronidation polymorphism."
  },
  {
   "q": "Isoniazid, hydralazine and procainamide are metabolised by:",
   "options": [
    "NAT2 acetylation",
    "Glucuronidation",
    "CYP3A4",
    "Sulfation"
   ],
   "answer": 0,
   "why": "Slow acetylators reach higher levels."
  },
  {
   "q": "Roughly what proportion of Middle Eastern people are slow acetylators?",
   "options": [
    "25%",
    "70%",
    "50%",
    "10%"
   ],
   "answer": 1,
   "why": "About 50% of Caucasians and 25% of Asians."
  },
  {
   "q": "Deficiency of plasma cholinesterase causes:",
   "options": [
    "Hepatotoxicity after paracetamol",
    "Codeine failure with no analgesia",
    "Warfarin resistance at usual doses",
    "Prolonged paralysis after succinylcholine"
   ],
   "answer": 3,
   "why": "Succinylcholine is normally hydrolysed quickly."
  },
  {
   "q": "Which enzyme metabolises ethanol at low to moderate concentrations?",
   "options": [
    "Monoamine oxidase",
    "Alcohol dehydrogenase",
    "N-acetyltransferase 1",
    "CYP2E1 only"
   ],
   "answer": 1,
   "why": "CYP2E1 contributes at high concentrations."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "drug",
   "options": [
    "Parent drug",
    "Phase II",
    "Excretion",
    "Phase I"
   ],
   "answer": 0,
   "why": "The arrow points to: Parent drug. Lipophilic drugs are hard to excrete; oral and partly rectal drugs undergo first-pass metabolism."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "p1",
   "options": [
    "CYP inducers",
    "Parent drug",
    "Phase I",
    "Excretion"
   ],
   "answer": 2,
   "why": "The arrow points to: Phase I. Introduces or unmasks -OH, -NH₂, -SH, mainly via CYP450 in the smooth ER."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "p2",
   "options": [
    "Phase I",
    "Excretion",
    "Pharmacogenetics",
    "Phase II"
   ],
   "answer": 3,
   "why": "The arrow points to: Phase II. Conjugation by transferases with glucuronic acid, sulfate, glutathione or acetyl groups."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "urine",
   "options": [
    "Phase II",
    "Excretion",
    "CYP inducers",
    "CYP inhibitors"
   ],
   "answer": 1,
   "why": "The arrow points to: Excretion. Hydrophilic conjugates leave in urine or bile."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ind",
   "options": [
    "CYP inducers",
    "Phase II",
    "Excretion",
    "Parent drug"
   ],
   "answer": 0,
   "why": "The arrow points to: CYP inducers. Speed metabolism: rifampin, phenytoin, carbamazepine, barbiturates, St John's wort, smoking (CYP1A), ethanol (CYP2E1)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "inh",
   "options": [
    "Phase I",
    "CYP inducers",
    "CYP inhibitors",
    "Parent drug"
   ],
   "answer": 2,
   "why": "The arrow points to: CYP inhibitors. Slow metabolism: erythromycin, ketoconazole, cimetidine, fluoxetine, quinidine, grapefruit juice (CYP3A4)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "gen",
   "options": [
    "Pharmacogenetics",
    "Phase I",
    "Excretion",
    "CYP inhibitors"
   ],
   "answer": 0,
   "why": "The arrow points to: Pharmacogenetics. CYP2D6, 2C9, 2C19 and NAT2 polymorphisms change drug levels and responses."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Five outcomes of drug metabolism?",
   "back": "Deactivation (most), activation of prodrugs, detoxification, toxification (paracetamol), change of solubility (lipophilic → hydrophilic)."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Phase I vs phase II?",
   "back": "Phase I: oxidation, reduction, hydrolysis; mostly CYP450; adds/unmasks -OH, -NH₂, -SH. Phase II: conjugation (glucuronide, sulfate, GSH, acetyl) by transferases → highly polar."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Six main CYP enzymes and substrates?",
   "back": "1A2 (methylxanthines), 2C9 (S-warfarin, phenytoin), 2C19 (PPIs), 2D6 (~25% of drugs; cardiac, psychiatric), 2E1 (paracetamol, ethanol), 3A4 (50-60% of drugs; CCBs, statins, steroids, benzodiazepines)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "List CYP inducers and inhibitors.",
   "back": "Inducers: rifampin, phenytoin, carbamazepine, barbiturates, St John's wort, smoking (1A), ethanol (2E1). Inhibitors: erythromycin, ketoconazole, cimetidine, fluoxetine, quinidine, grapefruit juice."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Four metaboliser phenotypes?",
   "back": "Poor, intermediate, extensive (normal), ultra-rapid."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "CYP2D6 and codeine?",
   "back": "Codeine is converted to morphine by CYP2D6: poor metabolisers get no analgesia; ultra-rapid metabolisers risk overdose."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Why do warfarin doses vary 20-fold?",
   "back": "Polymorphisms in VKORC1 (the target; 1639G>A increases sensitivity) and CYP2C9 (metabolism), plus weight and other factors."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "NAT2 slow acetylators: drugs and frequencies?",
   "back": "Isoniazid, hydralazine, procainamide, dapsone; ~70% Middle Eastern, 50% Caucasian, 25% Asian."
  },
  {
   "id": "x8",
   "type": "text",
   "front": "Non-CYP oxidation enzymes?",
   "back": "Alcohol dehydrogenase, aldehyde dehydrogenase, monoamine oxidase."
  },
  {
   "id": "img-drug",
   "type": "image",
   "target": "drug",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Parent drug. Lipophilic drugs are hard to excrete; oral and partly rectal drugs undergo first-pass metabolism."
  },
  {
   "id": "img-p1",
   "type": "image",
   "target": "p1",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Phase I. Introduces or unmasks -OH, -NH₂, -SH, mainly via CYP450 in the smooth ER."
  },
  {
   "id": "img-p2",
   "type": "image",
   "target": "p2",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Phase II. Conjugation by transferases with glucuronic acid, sulfate, glutathione or acetyl groups."
  },
  {
   "id": "img-urine",
   "type": "image",
   "target": "urine",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Excretion. Hydrophilic conjugates leave in urine or bile."
  },
  {
   "id": "img-ind",
   "type": "image",
   "target": "ind",
   "front": "What is at the arrow, and why does it matter?",
   "back": "CYP inducers. Speed metabolism: rifampin, phenytoin, carbamazepine, barbiturates, St John's wort, smoking (CYP1A), ethanol (CYP2E1)."
  },
  {
   "id": "img-inh",
   "type": "image",
   "target": "inh",
   "front": "What is at the arrow, and why does it matter?",
   "back": "CYP inhibitors. Slow metabolism: erythromycin, ketoconazole, cimetidine, fluoxetine, quinidine, grapefruit juice (CYP3A4)."
  },
  {
   "id": "img-gen",
   "type": "image",
   "target": "gen",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Pharmacogenetics. CYP2D6, 2C9, 2C19 and NAT2 polymorphisms change drug levels and responses."
  }
 ],
 "deeper": [
  {
   "title": "Why grapefruit juice can double a statin's level",
   "html": "<p>CYP3A4 in the gut wall normally destroys a large part of an oral dose before it reaches the blood. Grapefruit compounds irreversibly inhibit that intestinal CYP3A4, so much more drug gets through. The effect lasts until new enzyme is made, which is why simply spacing the juice and the tablet does not fully help.</p><p class='src'>Source: the lecture's CYP3A4 slide.</p>"
  },
  {
   "title": "Why the same codeine dose can do nothing or be dangerous",
   "html": "<p>Codeine itself barely binds opioid receptors; its effect depends on conversion to morphine by CYP2D6. A poor metaboliser makes almost no morphine and gets no relief, while someone with duplicated CYP2D6 genes makes morphine fast enough to cause sedation and respiratory depression. Genotype, not dose alone, decides the result.</p><p class='src'>Source: the lecture's codeine and CYP2D6 slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "Drug interactions flockhart table (Indiana University)",
   "url": "https://drug-interactions.medicine.iu.edu/MainTable.aspx",
   "kind": "Website",
   "why": "Reference table of CYP substrates, inhibitors and inducers.",
   "note": ""
  },
  {
   "title": "PharmGKB",
   "url": "https://www.pharmgkb.org/",
   "kind": "Website",
   "why": "How gene variants affect drug response.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Drug interactions flockhart table (Indiana University)",
   "url": "https://drug-interactions.medicine.iu.edu/MainTable.aspx"
  },
  {
   "name": "PharmGKB",
   "url": "https://www.pharmgkb.org/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["pharma-trials"] = {
 "id": "pharma-trials",
 "subject": "pharma",
 "group": "General pharmacology",
 "title": "Clinical trials and new drug development",
 "sourceFile": "Lecture 4 Clinical trials.pdf (Pharmacology, Pr. Manoj K. Patel)",
 "sourceUrl": "https://drive.google.com/file/d/1jiwhoXRG65lIPPt84D92IZe7RxFdO_8Y/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>A new molecule must be characterised for its target interactions, metabolism, pharmacokinetics and above all safety, first in vitro and in animals, before regulators allow human trials, usually in <strong>three phases</strong>, followed by <strong>phase 4</strong> monitoring after marketing. Development costs <strong>$150 million to several billion</strong>; thousands of compounds are tested and optimised; only <strong>10-15%</strong> of approved drugs are real advances; a patent gives about 10 years of exclusivity before generics (the lecture cites Lipitor sales over $12 billion in 2007).</p>"
  },
  {
   "id": "s1",
   "title": "Kinetics recap",
   "html": "<p><strong>First-order</strong>: a constant fraction eliminated per unit time; half-life constant. <strong>Zero-order</strong>: a constant amount eliminated per unit time once enzymes or transporters are saturated; plasma level falls linearly; examples <strong>phenytoin, ethanol, aspirin (PEA)</strong> at high doses. <strong>t½ = 0.693 × Vd / CL</strong>: rises with larger Vd or lower clearance; <strong>4-5 half-lives</strong> eliminate about 97% (50, 75, 87.5, 93.75, 96.9%); doubling the dose extends action by about one half-life. <strong>Ion trapping</strong>: alkalinising urine with sodium bicarbonate keeps salicylate (pKa 3) ionised: ionised/unionised = 10^(pH-pKa), 100:1 at pH 5 but 100,000:1 at pH 8 (10⁵; the slide writes 10,000:1); forced alkaline diuresis is used essentially for <strong>salicylate and phenobarbital</strong> overdose.</p>"
  },
  {
   "id": "s2",
   "title": "Discovery and preclinical steps",
   "html": "<p>Identify the target; design a molecule from the receptor structure; screen natural products, chemical libraries or peptides; modify a known active molecule (<strong>structure-activity relationship</strong>). Screening checks the target, agonist vs antagonist action, <strong>off-target effects</strong>, effects on <strong>CYP450</strong>, and <strong>hERG and other cardiac channels</strong> (to avoid fatal arrhythmias), then animal disease models. The lecture's example: <strong>SCN8A (Nav1.6)</strong> gain-of-function epilepsy (elevated persistent sodium current; onset around 4 months; developmental disability; SUDEP in about 10%); epilepsy affects 1 in 26 Americans and 30% are drug-refractory; selective Nav1.6 inhibitors were screened for cardiac safety and tested in a mouse model. Another example: the <strong>MONARCH</strong> antisense (STK-001) trial in Dravet syndrome.</p>"
  },
  {
   "id": "s3",
   "title": "Trial design and phases",
   "html": "<p>Designs must account for variable disease course (<strong>crossover design</strong>: each subject alternates test drug, placebo and standard treatment; <strong>parallel design</strong>: separate groups), comorbidities, genetics, age, sex, pregnancy, recreational drug use, and <strong>randomisation</strong>. The <strong>placebo response</strong> (an inert look-alike) can reach <strong>30-40%</strong>, with even 'adverse effects'; hence blinding.</p><p><strong>Phase 1</strong>: first in humans, usually healthy volunteers (not for AIDS or cancer drugs); safety and ideal dose by gradual escalation; PK (absorption, half-life, metabolism); open or blinded; <strong>20-100 subjects</strong>, months to a year, in specialised centres. <strong>Phase 2</strong>: <strong>proof of concept</strong> in <strong>100-300 patients</strong>, months to 2 years, often single-blind with placebo and a positive control; <strong>highest failure rate: only 25% proceed</strong>. <strong>Phase 3</strong>: hundreds to thousands of patients in many countries, compared with the standard treatment, usually <strong>double-blind</strong>. <strong>Phase 4</strong>: post-approval surveillance for years; several hundred thousand exposures may be needed to see a 1-in-10,000 toxicity. Registries such as clinicaltrials.gov list trials; patients should ask about purpose, eligibility, placebo, risks, visits and costs.</p>"
  },
  {
   "id": "s4",
   "title": "Drugs in pregnancy",
   "html": "<p><strong>Maternal PK</strong>: higher GFR shortens half-lives of renally cleared drugs (aminoglycosides, digoxin); lower albumin increases free fraction (larger Vd, more effect, sometimes more hepatic clearance: phenytoin); larger blood volume, body water and fat increase Vd and can lengthen half-life. <strong>Placental transfer</strong> increases with <strong>lipophilicity</strong>, low protein binding (though chronic dosing lets bound drugs cross), low <strong>molecular weight</strong> (cross well under 400-500 Da, rarely above 1,000), and ion trapping (fetal pH slightly lower). The placenta inactivates prednisolone to prednisone. <strong>Thalidomide</strong>: critical window days 34-50 after the last period; 20-30% of exposed children had limb defects (phocomelia), plus ear and visceral anomalies; about 10,000 children affected; probably by inhibiting angiogenesis.</p>"
  }
 ],
 "exam": [
  "Development costs $150 million to billions; only 10-15% of approved drugs are real advances.",
  "Zero-order drugs: phenytoin, ethanol, aspirin (PEA).",
  "t½ = 0.693 × Vd / CL; 4-5 half-lives eliminate ~97%.",
  "Alkaline diuresis: salicylate and phenobarbital.",
  "Preclinical screens include CYP450 effects and hERG cardiac safety.",
  "Placebo response up to 30-40%.",
  "Phase 1: 20-100 healthy volunteers, safety and dose, PK.",
  "Phase 2: 100-300 patients, proof of concept; only 25% pass.",
  "Phase 3: hundreds-thousands, double-blind vs standard.",
  "Phase 4: post-marketing; 1/10,000 toxicities need huge exposure.",
  "Crossover: each subject gets all treatments; parallel: separate groups.",
  "Placental transfer: lipophilic, unbound, < 500 Da drugs cross best.",
  "Thalidomide window: days 34-50; phocomelia."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "New drug development",
   "caption": "From target to market and beyond. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"200\" y1=\"70\" x2=\"215\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"375\" y1=\"70\" x2=\"390\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"550\" y1=\"70\" x2=\"565\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"725\" y1=\"70\" x2=\"390\" y2=\"200\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"550\" y1=\"200\" x2=\"565\" y2=\"200\"/>",
   "parts": {
    "disc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"40\" y=\"40\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Discovery: target,",
      "screening, SAR"
     ],
     "lx": 120.0,
     "ly": 68.0
    },
    "pre": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"215\" y=\"40\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Preclinical: animal",
      "safety, hERG, CYP"
     ],
     "lx": 295.0,
     "ly": 68.0
    },
    "p1": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"390\" y=\"40\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Phase 1: 20-100,",
      "safety, dose, PK"
     ],
     "lx": 470.0,
     "ly": 68.0
    },
    "p2": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"565\" y=\"40\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Phase 2: 100-300,",
      "proof of concept"
     ],
     "lx": 645.0,
     "ly": 68.0
    },
    "p3": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"390\" y=\"170\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Phase 3: hundreds to",
      "thousands, vs standard"
     ],
     "lx": 470.0,
     "ly": 198.0
    },
    "p4": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"565\" y=\"170\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Phase 4: post-marketing",
      "surveillance"
     ],
     "lx": 645.0,
     "ly": 198.0
    },
    "appr": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9ecec\" x=\"215\" y=\"170\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Regulatory",
      "approval"
     ],
     "lx": 295.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "disc": [
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
    "pre": [
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
    "p1": [
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
    "p2": [
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
    "p3": [
     {
      "t": [
       390.0,
       178.0
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
       565.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "appr": [
     {
      "t": [
       215.0,
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
   "q": "Which drugs follow zero-order kinetics at high doses?",
   "options": [
    "Phenytoin, ethanol, aspirin",
    "Warfarin, heparin, insulin",
    "Morphine, codeine, fentanyl",
    "Penicillin, digoxin, lithium"
   ],
   "answer": 0,
   "why": "Remember 'PEA'."
  },
  {
   "q": "In zero-order kinetics:",
   "options": [
    "A constant fraction is eliminated",
    "Half-life is constant",
    "A constant amount is eliminated per unit time",
    "Elimination is exponential"
   ],
   "answer": 2,
   "why": "Because the elimination system is saturated."
  },
  {
   "q": "Half-life increases when:",
   "options": [
    "Vd falls",
    "Clearance rises",
    "Vd rises or clearance falls",
    "The dose falls"
   ],
   "answer": 2,
   "why": "t½ = 0.693 × Vd / CL."
  },
  {
   "q": "After 4-5 half-lives, about how much drug is eliminated?",
   "options": [
    "97%",
    "100%",
    "50%",
    "75%"
   ],
   "answer": 0,
   "why": "50, 75, 87.5, 93.75, 96.9%."
  },
  {
   "q": "At urine pH 8, the ratio of ionised to unionised salicylate (pKa 3) is:",
   "options": [
    "100:1",
    "10,000:1",
    "1,000:1",
    "100,000:1"
   ],
   "answer": 3,
   "why": "10^(8-3) = 10^5 = 100,000:1 (the slide's arithmetic shows 10⁵)."
  },
  {
   "q": "Forced alkaline diuresis is used mainly for overdose of:",
   "options": [
    "Benzodiazepines",
    "Opioids",
    "Paracetamol and digoxin",
    "Salicylate and phenobarbital"
   ],
   "answer": 3,
   "why": "Weak acids trapped in alkaline urine."
  },
  {
   "q": "Why are new compounds screened on hERG channels?",
   "options": [
    "To avoid life-threatening arrhythmias",
    "To test gut absorption of the drug",
    "To test CYP induction by the drug",
    "To test efficacy against epilepsy"
   ],
   "answer": 0,
   "why": "Part of cardiac safety screening."
  },
  {
   "q": "How high can the placebo response be?",
   "options": [
    "0%",
    "30-40%",
    "1-2%",
    "80-90%"
   ],
   "answer": 1,
   "why": "Hence blinded, placebo-controlled trials."
  },
  {
   "q": "Phase 1 trials usually involve:",
   "options": [
    "20-100 mostly healthy volunteers",
    "Post-marketing surveillance",
    "Thousands of patients",
    "Only children"
   ],
   "answer": 0,
   "why": "Except for AIDS or cancer drugs."
  },
  {
   "q": "The main goal of phase 1 is:",
   "options": [
    "Long-term surveillance",
    "Proof of efficacy",
    "Comparison with standard care",
    "Safety and dose-finding"
   ],
   "answer": 3,
   "why": "PK is often measured too."
  },
  {
   "q": "Which phase has the highest failure rate?",
   "options": [
    "Phase 1",
    "Phase 2",
    "Phase 3",
    "Phase 4"
   ],
   "answer": 1,
   "why": "Only about 25% move on to phase 3."
  },
  {
   "q": "Phase 3 trials typically compare the new drug with:",
   "options": [
    "Placebo in animals only",
    "The standard treatment, double-blind",
    "Healthy volunteers without disease",
    "No comparator at all"
   ],
   "answer": 1,
   "why": "In hundreds to thousands of patients."
  },
  {
   "q": "A toxicity with incidence 1 in 10,000 is usually found in:",
   "options": [
    "Phase 3 (large comparative trials)",
    "Phase 1 (healthy volunteers)",
    "Phase 4 post-marketing",
    "Phase 2 (proof of concept)"
   ],
   "answer": 2,
   "why": "Several hundred thousand exposures may be needed."
  },
  {
   "q": "In a crossover trial:",
   "options": [
    "Only animals are used",
    "There is no control",
    "Each subject alternates test drug, placebo and standard",
    "Each subject receives only one treatment"
   ],
   "answer": 2,
   "why": "Useful when disease severity varies."
  },
  {
   "q": "Why does pregnancy shorten the half-life of aminoglycosides?",
   "options": [
    "Higher fat stores",
    "Lower albumin",
    "Placental metabolism",
    "Increased GFR"
   ],
   "answer": 3,
   "why": "Renal clearance rises."
  },
  {
   "q": "Which drug property favours crossing the placenta?",
   "options": [
    "High lipophilicity",
    "Full ionisation",
    "High molecular weight",
    "High protein binding"
   ],
   "answer": 0,
   "why": "Drugs under 400-500 Da cross best."
  },
  {
   "q": "The placenta inactivates:",
   "options": [
    "Prednisone to prednisolone",
    "Digoxin to inactive products",
    "Phenytoin to its metabolite",
    "Prednisolone to prednisone"
   ],
   "answer": 3,
   "why": "Prednisone is inactive."
  },
  {
   "q": "Thalidomide's critical exposure window is:",
   "options": [
    "Days 1-10 after the last period",
    "Days 34-50 after the last menstrual period",
    "The third trimester",
    "The first week after delivery"
   ],
   "answer": 1,
   "why": "20-30% of exposed children developed limb defects."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "disc",
   "options": [
    "Phase 1",
    "Preclinical testing",
    "Phase 2",
    "Discovery"
   ],
   "answer": 3,
   "why": "The arrow points to: Discovery. Identify the target, design or screen molecules, optimise by structure-activity relationship."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pre",
   "options": [
    "Phase 2",
    "Discovery",
    "Preclinical testing",
    "Phase 3"
   ],
   "answer": 2,
   "why": "The arrow points to: Preclinical testing. In vitro and animal studies: off-target effects, CYP450 effects, hERG and cardiac safety, disease models."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "p1",
   "options": [
    "Approval",
    "Preclinical testing",
    "Phase 1",
    "Phase 2"
   ],
   "answer": 2,
   "why": "The arrow points to: Phase 1. 20-100 usually healthy volunteers; safety, dose-finding and pharmacokinetics; months to a year."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "p2",
   "options": [
    "Phase 3",
    "Phase 2",
    "Phase 1",
    "Phase 4"
   ],
   "answer": 1,
   "why": "The arrow points to: Phase 2. 100-300 patients; efficacy (proof of concept) and safety; highest failure rate, only 25% continue."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "p3",
   "options": [
    "Phase 3",
    "Phase 1",
    "Discovery",
    "Phase 2"
   ],
   "answer": 0,
   "why": "The arrow points to: Phase 3. Hundreds to thousands of patients, multicentre, usually double-blind against the standard treatment."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "p4",
   "options": [
    "Phase 3",
    "Preclinical testing",
    "Phase 4",
    "Discovery"
   ],
   "answer": 2,
   "why": "The arrow points to: Phase 4. After approval: long-term benefits, side effects and best use; rare toxicities emerge."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "appr",
   "options": [
    "Approval",
    "Phase 2",
    "Preclinical testing",
    "Phase 4"
   ],
   "answer": 0,
   "why": "The arrow points to: Approval. Safety and efficacy must be defined before legal marketing."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Zero-order vs first-order kinetics?",
   "back": "First-order: constant fraction per time, constant half-life. Zero-order: constant amount per time (saturated), linear fall; phenytoin, ethanol, aspirin."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Key half-life facts?",
   "back": "t½ = 0.693 × Vd / CL; rises with Vd, falls with CL; 4-5 t½ ≈ 97% eliminated; doubling the dose adds about one t½ of action."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Explain ion trapping for salicylate overdose.",
   "back": "Alkaline urine keeps salicylate (pKa 3) ionised (10^(pH-pKa)), preventing tubular reabsorption; used for salicylate and phenobarbital."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Steps of drug discovery?",
   "back": "Target identification, molecule design, library screening, SAR modification; then off-target, CYP, hERG and animal-model testing."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Phases 1-4 of clinical trials?",
   "back": "1: 20-100 volunteers, safety/dose/PK. 2: 100-300 patients, proof of concept (25% pass). 3: hundreds-thousands, double-blind vs standard. 4: post-marketing surveillance."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Parallel vs crossover design?",
   "back": "Parallel: separate groups get different treatments. Crossover: each subject alternates test drug, placebo and standard; controls for variable disease course."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "What is the placebo response?",
   "back": "Improvement (up to 30-40%) and even 'side effects' from an inert look-alike, due to expectation and caring attention."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "PK changes in pregnancy?",
   "back": "↑GFR (faster renal clearance), ↓albumin (↑free fraction, ↑Vd, sometimes ↑hepatic clearance: phenytoin), ↑blood volume/water/fat (↑Vd, longer t½)."
  },
  {
   "id": "x8",
   "type": "text",
   "front": "Factors in placental drug transfer?",
   "back": "Lipophilicity, protein binding, molecular weight (< 400-500 Da), pKa (fetal ion trapping), placental metabolism (prednisolone → prednisone)."
  },
  {
   "id": "img-disc",
   "type": "image",
   "target": "disc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Discovery. Identify the target, design or screen molecules, optimise by structure-activity relationship."
  },
  {
   "id": "img-pre",
   "type": "image",
   "target": "pre",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Preclinical testing. In vitro and animal studies: off-target effects, CYP450 effects, hERG and cardiac safety, disease models."
  },
  {
   "id": "img-p1",
   "type": "image",
   "target": "p1",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Phase 1. 20-100 usually healthy volunteers; safety, dose-finding and pharmacokinetics; months to a year."
  },
  {
   "id": "img-p2",
   "type": "image",
   "target": "p2",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Phase 2. 100-300 patients; efficacy (proof of concept) and safety; highest failure rate, only 25% continue."
  },
  {
   "id": "img-p3",
   "type": "image",
   "target": "p3",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Phase 3. Hundreds to thousands of patients, multicentre, usually double-blind against the standard treatment."
  },
  {
   "id": "img-p4",
   "type": "image",
   "target": "p4",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Phase 4. After approval: long-term benefits, side effects and best use; rare toxicities emerge."
  },
  {
   "id": "img-appr",
   "type": "image",
   "target": "appr",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Approval. Safety and efficacy must be defined before legal marketing."
  }
 ],
 "deeper": [
  {
   "title": "Why phase 2 is where most drugs fail",
   "html": "<p>Phase 1 asks whether a drug is tolerated; phase 2 asks for the first time whether it actually helps patients with the disease. Many molecules that hit their target beautifully in cells and animals turn out not to change the disease in people, or only at doses that are not tolerated. That is why only about a quarter of drugs survive this phase.</p><p class='src'>Source: the lecture's phase 2 slide.</p>"
  },
  {
   "title": "Why a placebo arm is needed",
   "html": "<p>Patients often improve simply from being cared for and expecting benefit, and many diseases fluctuate on their own. Without a blinded placebo comparison, a drug could look effective when it adds nothing. The lecture's figure of a 30-40% placebo response shows how large this effect can be.</p><p class='src'>Source: the lecture's subject and observer bias slide.</p>"
  }
 ],
 "resources": [
  {
   "title": "ClinicalTrials.gov",
   "url": "https://www.clinicaltrials.gov/",
   "kind": "Website",
   "why": "The registry of clinical trials the lecture points to.",
   "note": ""
  },
  {
   "title": "Questions to ask about a clinical trial (Cancer.Net)",
   "url": "https://www.cancer.net/research-and-advocacy/clinical-trials",
   "kind": "Article",
   "why": "The patient questions listed in the lecture.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "ClinicalTrials.gov",
   "url": "https://www.clinicaltrials.gov/"
  },
  {
   "name": "Questions to ask about a clinical trial (Cancer.Net)",
   "url": "https://www.cancer.net/research-and-advocacy/clinical-trials"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["pharma-vigilance"] = {
 "id": "pharma-vigilance",
 "subject": "pharma",
 "group": "General pharmacology",
 "title": "Pharmacovigilance",
 "sourceFile": "Lecture 5 Pharmacovigilance.pdf (Pharmacology, Pr. Manoj K. Patel)",
 "sourceUrl": "https://drive.google.com/file/d/1sKYfiVUdV_J8cqsXx-Gp6zvn3rfRi0Hd/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>WHO definition: <strong>pharmacovigilance (PV)</strong> is the science and activities relating to the <strong>detection, assessment, understanding and prevention of adverse drug effects</strong> or any other drug-related problem. Goals: prevent serious safety problems, encourage proper use, and minimise harm. PV receives information from patients, health professionals and the literature, then manages risk: data collection, analysis, hypothesis, crisis management, planning and implementing safety measures, and checking their effect.</p>"
  },
  {
   "id": "s1",
   "title": "Why PV is needed",
   "html": "<p>No drug is 100% safe; in the USA about <strong>1 in 3 drugs</strong> has safety issues after approval. PV monitors unexpected reactions, interactions, risk factors, quality of life, long-term efficacy and cost. Trials see only about a thousand patients, while marketed drugs reach hundreds of thousands. The <strong>five 'too's</strong> of clinical trials: <strong>too few</strong> patients (rare AEs, about 0.1%, are missed), <strong>too simple</strong> (efficacy only, no co-medication), <strong>too median-aged</strong> (children and elderly excluded), <strong>too narrow</strong> (administration controlled by professionals), <strong>too brief</strong> (real use lasts years). Risk therefore rises after launch, and PV activity lowers it.</p><p>An <strong>adverse drug reaction (ADR)</strong> is any noxious change suspected to be due to a drug at normal doses that needs treatment, dose reduction, or caution in future use.</p>"
  },
  {
   "id": "s2",
   "title": "Steps and history",
   "html": "<p><strong>Steps</strong>: (1) collect side-effect reports (patient to doctor or directly to the company, then the regulator, e.g. FDA); (2) review the data to find effects missed before; (3) respond (new label warnings, safety announcements), as with the lamotrigine cardiac warning, where experts cautioned against assuming it was unique among sodium-channel blockers. <strong>History</strong>: in 1937 sulfanilamide was dissolved in <strong>diethylene glycol</strong>, tested only for flavour, look and smell, and shipped 633 times; <strong>107 people died</strong>, leading to the <strong>1938 Food, Drug and Cosmetic Act</strong> that strengthened the FDA.</p>"
  },
  {
   "id": "s3",
   "title": "Reporting timelines",
   "html": "<p><strong>Serious ADR</strong>: death, life-threatening, hospitalisation, disability, congenital anomaly, or intervention needed to prevent permanent damage; expedited reporting: <strong>serious unexpected within 15 days</strong>, <strong>fatal or life-threatening unexpected within 7 calendar days</strong>. <strong>Non-serious ADR</strong> (headache, insomnia): not expedited, included in <strong>periodic safety reports</strong>. Outcomes include drug withdrawal, emergency-use restrictions and expedited reviews.</p>"
  }
 ],
 "exam": [
  "PV: detection, assessment, understanding, prevention of adverse effects (WHO).",
  "About 1 in 3 US drugs has post-approval safety issues.",
  "Five 'too's: too few, too simple, too median-aged, too narrow, too brief.",
  "ADR: noxious effect at normal doses needing treatment, dose change or caution.",
  "Steps: collect, review, respond.",
  "1937 sulfanilamide-diethylene glycol: 107 deaths → 1938 FD&C Act.",
  "Serious unexpected ADR: report within 15 days.",
  "Fatal/life-threatening unexpected: 7 calendar days.",
  "Non-serious ADRs go in periodic safety reports."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Pharmacovigilance cycle",
   "caption": "From reports to safety action. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"240\" y1=\"70\" x2=\"280\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"70\" x2=\"520\" y2=\"70\"/>",
   "parts": {
    "collect": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"40\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Collect reports:",
      "patients, doctors, literature"
     ],
     "lx": 140.0,
     "ly": 68.0
    },
    "review": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"280\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Review data:",
      "new signals"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "respond": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"520\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Respond: warnings,",
      "label change, withdrawal"
     ],
     "lx": 620.0,
     "ly": 68.0
    },
    "serious": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"160\" y=\"180\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Serious unexpected:",
      "15 days; fatal: 7 days"
     ],
     "lx": 260.0,
     "ly": 208.0
    },
    "nonser": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"400\" y=\"180\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Non-serious:",
      "periodic safety report"
     ],
     "lx": 500.0,
     "ly": 208.0
    }
   },
   "arrows": {
    "collect": [
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
    "review": [
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
    "respond": [
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
    "serious": [
     {
      "t": [
       160.0,
       188.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "nonser": [
     {
      "t": [
       400.0,
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
   "q": "Which organisation's definition of pharmacovigilance does the lecture use?",
   "options": [
    "OECD",
    "FDA",
    "WHO",
    "EMA"
   ],
   "answer": 2,
   "why": "Detection, assessment, understanding and prevention of adverse effects."
  },
  {
   "q": "Roughly how many US drugs have safety issues after approval?",
   "options": [
    "1 in 100",
    "1 in 3",
    "1 in 1,000",
    "None"
   ],
   "answer": 1,
   "why": "Hence continuous monitoring."
  },
  {
   "q": "Which is one of the 'five too's' of clinical trials?",
   "options": [
    "Too long",
    "Too expensive",
    "Too few patients",
    "Too many elderly"
   ],
   "answer": 2,
   "why": "Also too simple, too median-aged, too narrow, too brief."
  },
  {
   "q": "Why do trials miss rare adverse effects?",
   "options": [
    "Their sample is too small",
    "They use generics",
    "They last too long",
    "They include the elderly"
   ],
   "answer": 0,
   "why": "Only about 0.1% of AEs may be detected before marketing."
  },
  {
   "q": "An ADR is defined as occurring at:",
   "options": [
    "Overdose only",
    "Doses above the LD₅₀",
    "Doses normally used in humans",
    "Doses in animals"
   ],
   "answer": 2,
   "why": "And requiring treatment, dose change or caution."
  },
  {
   "q": "Which is a serious ADR?",
   "options": [
    "Nausea",
    "Mild headache",
    "Insomnia",
    "Hospitalisation"
   ],
   "answer": 3,
   "why": "Also death, life-threat, disability, congenital anomaly."
  },
  {
   "q": "A serious unexpected ADR must be reported within:",
   "options": [
    "15 days",
    "1 year",
    "24 hours",
    "7 days"
   ],
   "answer": 0,
   "why": "Fatal or life-threatening unexpected ADRs: 7 calendar days."
  },
  {
   "q": "Non-serious ADRs are reported:",
   "options": [
    "Within 15 days",
    "In periodic safety reports",
    "Never",
    "Within 7 days"
   ],
   "answer": 1,
   "why": "They are not expedited."
  },
  {
   "q": "The 1937 sulfanilamide disaster was caused by:",
   "options": [
    "Diethylene glycol used as solvent",
    "Contaminated water",
    "Bacterial contamination",
    "Wrong dose"
   ],
   "answer": 0,
   "why": "107 people died."
  },
  {
   "q": "The sulfanilamide disaster led to:",
   "options": [
    "The WHO",
    "The Nuremberg Code",
    "The Declaration of Helsinki",
    "The 1938 Food, Drug and Cosmetic Act"
   ],
   "answer": 3,
   "why": "It increased the FDA's authority."
  },
  {
   "q": "What is the first step of pharmacovigilance?",
   "options": [
    "Collect adverse effect reports",
    "Change the label",
    "Withdraw the drug",
    "Run a new trial"
   ],
   "answer": 0,
   "why": "Then review and respond."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "collect",
   "options": [
    "Review",
    "Expedited reporting",
    "Respond",
    "Collect"
   ],
   "answer": 3,
   "why": "The arrow points to: Collect. Adverse effects reported by patients, health professionals, companies and the literature."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "review",
   "options": [
    "Periodic reporting",
    "Review",
    "Collect",
    "Expedited reporting"
   ],
   "answer": 1,
   "why": "The arrow points to: Review. The regulator analyses data and identifies new, unexpected effects."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "respond",
   "options": [
    "Review",
    "Periodic reporting",
    "Collect",
    "Respond"
   ],
   "answer": 3,
   "why": "The arrow points to: Respond. New warnings, label changes, safety announcements or withdrawal."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "serious",
   "options": [
    "Respond",
    "Expedited reporting",
    "Review",
    "Collect"
   ],
   "answer": 1,
   "why": "The arrow points to: Expedited reporting. Serious unexpected ADRs within 15 days; fatal or life-threatening ones within 7 calendar days."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "nonser",
   "options": [
    "Respond",
    "Expedited reporting",
    "Periodic reporting",
    "Review"
   ],
   "answer": 2,
   "why": "The arrow points to: Periodic reporting. Non-serious ADRs such as headache go into periodic safety reports."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Define pharmacovigilance.",
   "back": "WHO: the science and activities relating to the detection, assessment, understanding and prevention of adverse drug effects or other drug-related problems."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Goals of PV?",
   "back": "Prevent serious drug safety problems, encourage proper drug use, minimise harm from drug use."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "What does PV monitor after approval?",
   "back": "Unexpected adverse reactions, drug interactions, risk factors, quality of life, long-term efficacy, cost."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "List the five 'too's of clinical trials.",
   "back": "Too few (patients), too simple (efficacy only), too median-aged (no children or elderly), too narrow (professional administration), too brief (short duration)."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Define an adverse drug reaction.",
   "back": "A noxious change suspected to be due to a drug, at normal human doses, requiring treatment, dose reduction or caution in future use."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Three steps of PV?",
   "back": "Collect side-effect information; review clinical data for new signals; respond with warnings, label changes or safety announcements."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Reporting timelines for ADRs?",
   "back": "Serious unexpected: 15 days. Fatal/life-threatening unexpected: 7 calendar days. Non-serious: periodic safety reports."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "What was the sulfanilamide elixir disaster?",
   "back": "1937: sulfanilamide dissolved in diethylene glycol, tested only for taste, look and smell; 633 shipments; 107 deaths; led to the 1938 FD&C Act."
  },
  {
   "id": "img-collect",
   "type": "image",
   "target": "collect",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Collect. Adverse effects reported by patients, health professionals, companies and the literature."
  },
  {
   "id": "img-review",
   "type": "image",
   "target": "review",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Review. The regulator analyses data and identifies new, unexpected effects."
  },
  {
   "id": "img-respond",
   "type": "image",
   "target": "respond",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Respond. New warnings, label changes, safety announcements or withdrawal."
  },
  {
   "id": "img-serious",
   "type": "image",
   "target": "serious",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Expedited reporting. Serious unexpected ADRs within 15 days; fatal or life-threatening ones within 7 calendar days."
  },
  {
   "id": "img-nonser",
   "type": "image",
   "target": "nonser",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Periodic reporting. Non-serious ADRs such as headache go into periodic safety reports."
  }
 ],
 "deeper": [
  {
   "title": "Why most drug risks appear after launch",
   "html": "<p>If an adverse effect occurs in 1 in 10,000 patients, a trial of a few thousand people will probably never see it. Once hundreds of thousands of people, including the old, the young and those on many other drugs, take the medicine for years, rare effects become visible. Pharmacovigilance is how those signals are caught and acted on.</p><p class='src'>Source: the lecture's 'why we need PV' slides.</p>"
  },
  {
   "title": "Why reporting matters even for a single case",
   "html": "<p>Spontaneous reports are the raw material of pharmacovigilance: a regulator can only link a drug to a rare reaction if individual clinicians report what they see. A single well-documented report, added to others, can be the signal that leads to a warning or a withdrawal.</p><p class='src'>Source: the lecture's steps in PV slide.</p>"
  }
 ],
 "resources": [
  {
   "title": "What is pharmacovigilance? (WHO)",
   "url": "https://www.who.int/teams/regulation-prequalification/regulation-and-safety/pharmacovigilance",
   "kind": "Website",
   "why": "The WHO programme for drug safety monitoring.",
   "note": ""
  },
  {
   "title": "Sulfanilamide disaster (FDA history)",
   "url": "https://www.fda.gov/about-fda/histories-product-regulation/sulfanilamide-disaster",
   "kind": "Article",
   "why": "The story that created modern drug regulation.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "What is pharmacovigilance? (WHO)",
   "url": "https://www.who.int/teams/regulation-prequalification/regulation-and-safety/pharmacovigilance"
  },
  {
   "name": "Sulfanilamide disaster (FDA history)",
   "url": "https://www.fda.gov/about-fda/histories-product-regulation/sulfanilamide-disaster"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["pharma-interactions"] = {
 "id": "pharma-interactions",
 "subject": "pharma",
 "group": "General pharmacology",
 "title": "Drug interactions",
 "sourceFile": "Lecture 6 Drug Interactions.pdf (Pharmacology, Pr. Manoj K. Patel)",
 "sourceUrl": "https://drive.google.com/file/d/1nftXyn4FP9rAJ8FlfiAh1CeIDed_as3B/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>Drug-drug interactions (DDI) are common: in a US Medicaid review about <strong>17% of patients</strong> had more than one clinically significant DDI, rising with age, comorbidity and number of drugs. In vitro, 77% of compounds inhibited or induced more than one metabolising enzyme, and 45% had a metabolism-based DDI changing clinical exposure. Interactions can also be <strong>drug-food</strong> (alcohol with sedatives) or <strong>drug-condition</strong> (a decongestant in hypertension). Two families: <strong>pharmacodynamic</strong> (effect at the target) and <strong>pharmacokinetic</strong> (ADME, most often via CYP450).</p>"
  },
  {
   "id": "s1",
   "title": "Pharmacodynamic interactions",
   "html": "<p><strong>Additive</strong>: effect is the sum. Beneficial: ibuprofen + paracetamol for pain; harmful: zidovudine + ganciclovir (neutropenia). <strong>Synergistic</strong>: effect greater than the sum. Beneficial: <strong>aminoglycoside + penicillin</strong> against Gram-positive bacteria; harmful: <strong>sedatives + alcohol</strong>. <strong>Antagonistic</strong>: one drug blocks the other. Beneficial: <strong>naloxone</strong> for opioid overdose; harmful: zidovudine + stavudine competing in HIV treatment. <strong>Therapeutic duplication</strong>: two drugs with similar properties taken together, with additive effects.</p>"
  },
  {
   "id": "s2",
   "title": "Absorption",
   "html": "<p><strong>pH</strong>: raising gastric pH with H₂ antagonists or PPIs (omeprazole) can reduce or increase absorption: <strong>atazanavir AUC falls 94%</strong>, raltegravir rises 300%, erlotinib falls 50% (with shorter survival). <strong>Motility</strong>: slowed by methadone, sped by metoclopramide (methadone lowers didanosine absorption). <strong>Chelation</strong>: <strong>tetracyclines and quinolones</strong> bind iron, aluminium, magnesium (antacids) and calcium (dairy); avoided by spacing doses. <strong>Gut transporters</strong>: P-glycoprotein (MDR1) and BCRP limit absorption; <strong>quinidine (a P-gp inhibitor) increased digoxin absorption 2.5-fold</strong>; other P-gp inhibitors: ciclosporin, erythromycin, verapamil.</p>"
  },
  {
   "id": "s3",
   "title": "Distribution",
   "html": "<p>Displacement from plasma proteins transiently raises free drug (warfarin example). Transporters at the blood-brain barrier, placenta and kidneys control access: quinidine (MDR1 inhibition) lets <strong>loperamide into the CNS</strong>; paroxetine raises CNS digoxin; <strong>St John's wort induces MDR1</strong> and lowers ciclosporin; ritonavir inhibits OCT1 (less desipramine uptake); fruit juices inhibit OATP (less fexofenadine absorbed); probenecid inhibits OAT (longer penicillin half-life).</p>"
  },
  {
   "id": "s4",
   "title": "Metabolism: inhibition and induction",
   "html": "<p>CYP3A4 handles most liver-metabolised drugs. Inhibition matters most when a drug depends on one enzyme (<strong>midazolam and CYP3A4</strong>); drugs with several routes (voriconazole: 2C9, 2C19, 3A4) are less sensitive. <strong>Mechanism-based inactivation</strong>: reactive metabolites bind the enzyme covalently, causing profound, prolonged, irreversible inhibition (grapefruit juice), lasting until new enzyme is made. Example in the lecture: a CYP3A4 inhibitor raises statin levels and side effects.</p><p><strong>Induction</strong>: via nuclear receptors (<strong>PXR, CAR</strong>) that increase CYP transcription; slower onset and offset, <strong>about 1-2 weeks</strong>; lowers drug levels or increases toxic metabolites; stopping the inducer without adjusting the dose can cause toxicity. Examples: <strong>phenytoin induces CYP3A4 → contraceptive failure</strong>; <strong>alcohol induces CYP2E1 → more NAPQI from paracetamol</strong>; rifampin cut a CYP3A drug's half-life from 19 to 8 h. <strong>St John's wort</strong> (hyperforin) induces CYP1A2, 2B6, 2C19, 2C8, 3A4 and P-gp: it reduces alprazolam, bupropion, irinotecan, docetaxel, imatinib, tacrolimus, ciclosporin, simvastatin, contraceptives, digoxin, methadone, NNRTIs, protease inhibitors, omeprazole, phenytoin, voriconazole and warfarin, and adds <strong>serotonin syndrome</strong> risk with antidepressants, dextromethorphan and triptans. Sex and hormones also alter metabolism (propranolol is cleared faster in men).</p>"
  },
  {
   "id": "s5",
   "title": "Elimination and clinical judgement",
   "html": "<p><strong>Liver</strong>: inhibiting OATP1B1 uptake raises systemic exposure; <strong>gemfibrozil raised rosuvastatin by 88%</strong>; inhibiting BCRP reduces biliary excretion. <strong>Kidney</strong>: inhibiting OAT1/3 (<strong>probenecid</strong>) or OCT (<strong>cimetidine</strong>) or P-gp reduces renal elimination. <strong>Judging a DDI</strong>: consider the therapeutic window (a 50% rise in atorvastatin with its wide TI matters little; in a narrow-TI drug it can be dangerous), alternatives with different susceptibility (rosuvastatin vs simvastatin), and patient age and organ function. The liver is the main site of interactions, but gut and kidney also contribute.</p>"
  }
 ],
 "exam": [
  "~17% of patients have > 1 clinically significant DDI; risk rises with age and polypharmacy.",
  "PD interactions: additive, synergistic, antagonistic.",
  "Synergy: aminoglycoside + penicillin (good); sedatives + alcohol (bad).",
  "PPIs cut atazanavir AUC by 94%.",
  "Tetracyclines/quinolones chelate Fe, Al, Mg, Ca: space doses.",
  "Quinidine (P-gp inhibitor) raises digoxin 2.5-fold.",
  "Inhibition: fast; induction: 1-2 weeks via PXR/CAR.",
  "Grapefruit: mechanism-based (irreversible) CYP3A4 inactivation.",
  "Phenytoin induction → contraceptive failure; alcohol induction → more NAPQI.",
  "St John's wort induces CYP3A4 and P-gp; serotonin syndrome risk with SSRIs and triptans.",
  "Probenecid prolongs penicillin (OAT); gemfibrozil raises rosuvastatin 88% (OATP).",
  "Narrow therapeutic index makes a DDI clinically dangerous."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Drug-drug interactions",
   "caption": "Pharmacodynamic vs pharmacokinetic interactions. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"140\" y1=\"100\" x2=\"140\" y2=\"170\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"100\" x2=\"380\" y2=\"170\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"620\" y1=\"100\" x2=\"620\" y2=\"170\"/>",
   "parts": {
    "pd": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"40\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Pharmacodynamic:",
      "same target or pathway"
     ],
     "lx": 140.0,
     "ly": 68.0
    },
    "add": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"40\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Additive / synergistic /",
      "antagonistic"
     ],
     "lx": 140.0,
     "ly": 198.0
    },
    "abs": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"280\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Absorption: pH, motility,",
      "chelation, P-gp"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "dist": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"520\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Distribution: protein",
      "binding, barriers"
     ],
     "lx": 620.0,
     "ly": 68.0
    },
    "met": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"280\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Metabolism: CYP",
      "inhibition / induction"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "exc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"520\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Excretion: OAT, OCT,",
      "P-gp in kidney and bile"
     ],
     "lx": 620.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "pd": [
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
    "add": [
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
    "abs": [
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
    "dist": [
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
    "met": [
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
    "exc": [
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
   "root": "Drug interactions",
   "branches": [
    [
     "Pharmacodynamic",
     [
      "Additive",
      "Synergistic",
      "Antagonistic"
     ]
    ],
    [
     "Absorption",
     [
      "pH (PPIs ↓ atazanavir)",
      "Chelation (tetracyclines + Ca/Fe)",
      "P-gp (quinidine ↑ digoxin)"
     ]
    ],
    [
     "Distribution",
     [
      "Protein displacement",
      "Barrier transporters"
     ]
    ],
    [
     "Metabolism",
     [
      "Inhibition: fast",
      "Induction: 1-2 weeks (PXR/CAR)",
      "Grapefruit: irreversible CYP3A4"
     ]
    ],
    [
     "Excretion",
     [
      "Probenecid: OAT (penicillin)",
      "Gemfibrozil: OATP (rosuvastatin)",
      "Cimetidine: OCT"
     ]
    ],
    [
     "Judge risk",
     [
      "Therapeutic window",
      "Number of metabolic routes",
      "Age, organ function"
     ]
    ]
   ]
  }
 },
 "mcqs": [
  {
   "q": "Pharmacokinetic interactions affect:",
   "options": [
    "Only the toxicity of the partner drug",
    "Only receptor sensitivity to the drug",
    "Only efficacy at the target site",
    "Absorption, distribution, metabolism, excretion"
   ],
   "answer": 3,
   "why": "Pharmacodynamic interactions act at the target."
  },
  {
   "q": "Ibuprofen plus paracetamol for pain is an example of:",
   "options": [
    "An antagonistic interaction",
    "A beneficial additive interaction",
    "Enzyme induction by ibuprofen",
    "Chelation in the gut"
   ],
   "answer": 1,
   "why": "The effects sum."
  },
  {
   "q": "Sedatives combined with alcohol are an example of:",
   "options": [
    "Chelation",
    "Beneficial antagonism",
    "Harmful synergy",
    "No interaction"
   ],
   "answer": 2,
   "why": "The combined depression exceeds the sum."
  },
  {
   "q": "Naloxone reversing an opioid overdose is:",
   "options": [
    "Beneficial antagonism",
    "Additive effect",
    "Synergy",
    "Induction"
   ],
   "answer": 0,
   "why": "It blocks opioid receptors."
  },
  {
   "q": "Omeprazole taken with atazanavir causes:",
   "options": [
    "No change",
    "Toxicity",
    "A 300% rise in atazanavir",
    "A 94% fall in atazanavir AUC"
   ],
   "answer": 3,
   "why": "Atazanavir needs an acid pH to dissolve."
  },
  {
   "q": "Why should tetracyclines not be taken with milk or antacids?",
   "options": [
    "Tetracyclines induce CYP3A4 in the gut",
    "Milk and antacids cause severe diarrhoea",
    "Chelation with Ca, Mg, Al or Fe reduces absorption",
    "Tetracyclines are destroyed by stomach acid"
   ],
   "answer": 2,
   "why": "Separate the doses."
  },
  {
   "q": "Quinidine increases digoxin absorption because it:",
   "options": [
    "Chelates digoxin",
    "Induces CYP3A4",
    "Raises gastric pH",
    "Inhibits P-glycoprotein"
   ],
   "answer": 3,
   "why": "By about 2.5-fold."
  },
  {
   "q": "How long does enzyme induction take to develop?",
   "options": [
    "About 1-2 weeks",
    "1 year",
    "Immediately",
    "Minutes"
   ],
   "answer": 0,
   "why": "New CYP protein must be made."
  },
  {
   "q": "Enzyme induction works through which nuclear receptors?",
   "options": [
    "β1 and β2",
    "GABA-A and NMDA",
    "PXR and CAR",
    "H1 and H2"
   ],
   "answer": 2,
   "why": "They increase CYP gene transcription."
  },
  {
   "q": "Grapefruit juice inhibits CYP3A4 by:",
   "options": [
    "Chelation",
    "Induction",
    "Competitive reversible binding",
    "Mechanism-based irreversible inactivation"
   ],
   "answer": 3,
   "why": "The effect lasts until new enzyme is made."
  },
  {
   "q": "A woman on phenytoin has an unplanned pregnancy despite the pill. Why?",
   "options": [
    "Phenytoin chelates oestrogen in the gut",
    "Phenytoin induces CYP3A4 and lowers contraceptive levels",
    "Phenytoin raises gastric pH and absorption",
    "Phenytoin inhibits CYP3A4 and raises levels"
   ],
   "answer": 1,
   "why": "Induction increases contraceptive metabolism."
  },
  {
   "q": "Chronic alcohol use increases paracetamol toxicity by:",
   "options": [
    "Inhibiting CYP2E1",
    "Inducing CYP2E1 and increasing NAPQI",
    "Chelation",
    "Blocking glucuronidation"
   ],
   "answer": 1,
   "why": "More toxic metabolite is formed."
  },
  {
   "q": "St John's wort combined with an SSRI risks:",
   "options": [
    "Serotonin syndrome",
    "Hypoglycaemia",
    "Bleeding only",
    "Hyperkalaemia"
   ],
   "answer": 0,
   "why": "Also with triptans and dextromethorphan."
  },
  {
   "q": "Which drug depends mainly on CYP3A4 and is very sensitive to its inhibition?",
   "options": [
    "Midazolam",
    "Penicillin",
    "Rosuvastatin",
    "Voriconazole"
   ],
   "answer": 0,
   "why": "Drugs with several routes are less sensitive."
  },
  {
   "q": "Probenecid prolongs penicillin's half-life by inhibiting:",
   "options": [
    "CYP3A4",
    "OATP in the liver",
    "P-gp in the gut",
    "Renal OAT transporters"
   ],
   "answer": 3,
   "why": "Reducing tubular secretion."
  },
  {
   "q": "Gemfibrozil raises rosuvastatin levels by inhibiting:",
   "options": [
    "Renal P-gp",
    "CYP2D6",
    "NAT2",
    "Hepatic OATP uptake"
   ],
   "answer": 3,
   "why": "By 88% in the cited study."
  },
  {
   "q": "Why does a 50% rise in atorvastatin rarely matter?",
   "options": [
    "It is renally excreted",
    "It is not absorbed",
    "Its therapeutic index is wide",
    "It has no side effects"
   ],
   "answer": 2,
   "why": "The same rise in a narrow-TI drug could be dangerous."
  },
  {
   "q": "Therapeutic duplication means:",
   "options": [
    "Two pharmacists dispensing",
    "Two drugs with similar properties taken together",
    "A double dose once",
    "Two drugs with different mechanisms for one disease"
   ],
   "answer": 1,
   "why": "Their effects add up."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pd",
   "options": [
    "Absorption interactions",
    "Types of PD interaction",
    "Pharmacodynamic interactions",
    "Distribution interactions"
   ],
   "answer": 2,
   "why": "The arrow points to: Pharmacodynamic interactions. One drug modifies the effect of another at the target level."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "add",
   "options": [
    "Distribution interactions",
    "Types of PD interaction",
    "Pharmacodynamic interactions",
    "Metabolic interactions"
   ],
   "answer": 1,
   "why": "The arrow points to: Types of PD interaction. Additive (ibuprofen + paracetamol), synergistic (aminoglycoside + penicillin; sedatives + alcohol), antagonistic (naloxone)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "abs",
   "options": [
    "Metabolic interactions",
    "Absorption interactions",
    "Distribution interactions",
    "Types of PD interaction"
   ],
   "answer": 1,
   "why": "The arrow points to: Absorption interactions. Acid suppressants change pH, motility drugs change transit, cations chelate tetracyclines and quinolones, P-gp inhibitors raise digoxin."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "dist",
   "options": [
    "Distribution interactions",
    "Metabolic interactions",
    "Types of PD interaction",
    "Absorption interactions"
   ],
   "answer": 0,
   "why": "The arrow points to: Distribution interactions. Displacement from plasma proteins; transporters at the blood-brain and other barriers."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "met",
   "options": [
    "Metabolic interactions",
    "Absorption interactions",
    "Distribution interactions",
    "Elimination interactions"
   ],
   "answer": 0,
   "why": "The arrow points to: Metabolic interactions. CYP inhibition raises levels quickly; induction lowers them over 1-2 weeks."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "exc",
   "options": [
    "Pharmacodynamic interactions",
    "Distribution interactions",
    "Elimination interactions",
    "Absorption interactions"
   ],
   "answer": 2,
   "why": "The arrow points to: Elimination interactions. Probenecid blocks OAT (longer penicillin half-life); gemfibrozil blocks OATP (more rosuvastatin)."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Epidemiology of DDIs?",
   "back": "About 17% of US Medicaid patients had > 1 clinically significant DDI; risk rises with age, comorbidity and polypharmacy."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Three types of drug interaction by partner?",
   "back": "Drug-drug, drug-food (e.g. alcohol with sedatives), drug-condition (e.g. decongestant in hypertension)."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Additive, synergistic, antagonistic: examples?",
   "back": "Additive: ibuprofen + paracetamol; zidovudine + ganciclovir. Synergistic: aminoglycoside + penicillin; sedatives + alcohol. Antagonistic: naloxone; zidovudine + stavudine."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Absorption interactions?",
   "back": "Gastric pH (PPIs: atazanavir ↓94%), motility (methadone, metoclopramide), chelation (tetracyclines/quinolones + Fe/Al/Mg/Ca), gut P-gp (quinidine raises digoxin)."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Inhibition vs induction?",
   "back": "Inhibition: fast, raises levels (competitive or mechanism-based, e.g. grapefruit). Induction: via PXR/CAR, 1-2 weeks, lowers levels or raises toxic metabolites."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Classic induction interactions?",
   "back": "Phenytoin → contraceptive failure; alcohol → more NAPQI from paracetamol; rifampin shortens half-lives; St John's wort lowers many drugs."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Transporter interactions?",
   "back": "Quinidine-loperamide (CNS entry), St John's wort-ciclosporin (MDR1 induction), probenecid-penicillin (OAT), gemfibrozil-rosuvastatin (OATP), cimetidine (OCT)."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "How do you judge whether a DDI matters?",
   "back": "Therapeutic window of the affected drug, number of metabolic routes, alternatives with different susceptibility, patient age and organ function."
  },
  {
   "id": "img-pd",
   "type": "image",
   "target": "pd",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Pharmacodynamic interactions. One drug modifies the effect of another at the target level."
  },
  {
   "id": "img-add",
   "type": "image",
   "target": "add",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Types of PD interaction. Additive (ibuprofen + paracetamol), synergistic (aminoglycoside + penicillin; sedatives + alcohol), antagonistic (naloxone)."
  },
  {
   "id": "img-abs",
   "type": "image",
   "target": "abs",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Absorption interactions. Acid suppressants change pH, motility drugs change transit, cations chelate tetracyclines and quinolones, P-gp inhibitors raise digoxin."
  },
  {
   "id": "img-dist",
   "type": "image",
   "target": "dist",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Distribution interactions. Displacement from plasma proteins; transporters at the blood-brain and other barriers."
  },
  {
   "id": "img-met",
   "type": "image",
   "target": "met",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Metabolic interactions. CYP inhibition raises levels quickly; induction lowers them over 1-2 weeks."
  },
  {
   "id": "img-exc",
   "type": "image",
   "target": "exc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Elimination interactions. Probenecid blocks OAT (longer penicillin half-life); gemfibrozil blocks OATP (more rosuvastatin)."
  }
 ],
 "deeper": [
  {
   "title": "Why induction is slow and inhibition fast",
   "html": "<p>An inhibitor only has to reach the enzyme to block it, so drug levels rise within a day or two. An inducer has to activate nuclear receptors, switch on transcription and let new enzyme accumulate, which takes one to two weeks, and the effect fades just as slowly after stopping. That is why stopping rifampin or carbamazepine without adjusting a partner drug's dose can lead to toxicity.</p><p class='src'>Source: the lecture's CYP induction slides.</p>"
  },
  {
   "title": "Why herbal products belong on the drug list",
   "html": "<p>St John's wort is sold as a harmless supplement, yet its hyperforin induces several CYPs and P-glycoprotein strongly enough to cause transplant rejection (ciclosporin), contraceptive failure or loss of seizure control. Always ask patients about herbal remedies and supplements when checking interactions.</p><p class='src'>Source: the lecture's St John's wort slide.</p>"
  }
 ],
 "resources": [
  {
   "title": "Drug interactions checker (Drugs.com)",
   "url": "https://www.drugs.com/drug_interactions.html",
   "kind": "Website",
   "why": "Quickly check a combination for known interactions.",
   "note": ""
  },
  {
   "title": "Drug interactions flockhart table (Indiana University)",
   "url": "https://drug-interactions.medicine.iu.edu/MainTable.aspx",
   "kind": "Website",
   "why": "CYP substrates, inhibitors and inducers.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Drug interactions checker (Drugs.com)",
   "url": "https://www.drugs.com/drug_interactions.html"
  },
  {
   "name": "Drug interactions flockhart table (Indiana University)",
   "url": "https://drug-interactions.medicine.iu.edu/MainTable.aspx"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["pharma-asthma"] = {
 "id": "pharma-asthma",
 "subject": "pharma",
 "group": "Systemic pharmacology",
 "title": "Drugs for asthma and COPD",
 "sourceFile": "Drugs for asthma COPD, Lecture 2 (2026).pdf (Pharmacology module)",
 "sourceUrl": "https://drive.google.com/file/d/1XGj6qSUsbotLpJrd5g2zmCRciVudSYBm/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>Asthma and COPD are obstructive chronic airway diseases. <strong>Asthma</strong> is the commonest chronic disease, affecting <strong>over 300 million people</strong>; most deaths occur in low- and lower-middle-income countries, where under-diagnosis and under-treatment are common. Triggers are largely environmental with a genetic predisposition. Treatment rests on <strong>bronchodilators</strong> for relief, <strong>anti-inflammatories</strong> for control, combination and <strong>SMART</strong> strategies, <strong>biologics</strong> for severe disease, and correct <strong>inhaler technique</strong>.</p>"
  },
  {
   "id": "s1",
   "title": "Asthma phenotypes",
   "html": "<p><strong>T2-high asthma</strong> (about half or more of patients): often childhood-onset, <strong>eosinophilic</strong>, allergen-driven with high IgE, frequent rhinitis, driven by Th2 cytokines; responds well to corticosteroids. <strong>T2-low asthma</strong> (fewer than half): Th1 or Th17 activation, sometimes neutrophilic, usually not allergic, responds less to corticosteroids; mitochondrial dysfunction may contribute. Severe flares need urgent recognition.</p>"
  },
  {
   "id": "s2",
   "title": "Bronchodilators",
   "html": "<p><strong>β₂ agonists</strong> relax airway smooth muscle via β₂ receptors (Gs → cAMP). <strong>SABAs</strong>: salbutamol (Ventoline), terbutaline (Bricanyl), fenoterol (Berotec): <strong>first line in acute asthma and exacerbations</strong>, and prevention of exercise-induced asthma. <strong>LABAs</strong>: salmeterol, formoterol (Foradil), plus ultra-long-acting agents, for maintenance. <strong>Muscarinic antagonists</strong>: ipratropium, oxitropium (Tersigat), <strong>tiotropium (Spiriva)</strong>; adverse effects include pharyngeal irritation and <strong>paradoxical bronchospasm</strong> (stop the drug); caution in <strong>benign prostatic enlargement, bladder outflow obstruction and glaucoma</strong>.</p>"
  },
  {
   "id": "s3",
   "title": "Anti-inflammatories",
   "html": "<p><strong>Corticosteroids</strong>: inhaled (<strong>ICS</strong>, e.g. beclometasone (Becotide), budesonide, fluticasone), oral or injected. ICS are the <strong>first-line long-term control</strong> treatment of persistent asthma; main adverse effect <strong>oropharyngeal candidiasis</strong>, prevented by rinsing the mouth. <strong>Leukotriene modifiers</strong>: <strong>montelukast</strong> (Singulair), a cysteinyl leukotriene receptor antagonist, for prophylaxis and chronic treatment, exercise-induced bronchospasm and allergic rhinitis symptoms (not first-line alone for allergic rhinitis, where intranasal corticosteroids are preferred). <strong>Phosphodiesterase inhibitors</strong>: <strong>theophylline</strong> (non-selective; aminophylline IV) and <strong>roflumilast</strong> (PDE4, COPD).</p><p><strong>Theophylline</strong> kinetics vary widely: clearance rises with smoking (active and passive) and low-carbohydrate high-protein diets; many drug interactions; <strong>therapeutic drug monitoring</strong> is recommended; avoid in cor pulmonale, heart failure or end-stage liver disease. Adverse effects: nausea, vomiting, hypotension, tachycardia, <strong>arrhythmias</strong>, weight loss, insomnia, dizziness, anxiety.</p>"
  },
  {
   "id": "s4",
   "title": "SMART and biologics",
   "html": "<p><strong>SMART</strong> (single maintenance and reliever therapy): one inhaler combining an ICS with the fast-onset LABA <strong>formoterol</strong> (budesonide/formoterol, Symbicort; mometasone/formoterol) used both daily and as needed; supported by the 2020 NHLBI and 2022 GINA guidelines, and it simplifies which inhaler to use. <strong>Biologics</strong> for severe asthma: <strong>omalizumab</strong> (Xolair; anti-IgE, stops IgE binding mast cells and basophils; age 6 or more, positive allergy tests, IgE 30-700 IU/mL; SC every 2-4 weeks), <strong>mepolizumab</strong> (Nucala) and <strong>benralizumab</strong> (Fasenra) targeting the IL-5 pathway, <strong>dupilumab</strong> (Dupixent; anti-IL-4/13), <strong>tezepelumab</strong> (anti-TSLP).</p>"
  },
  {
   "id": "s5",
   "title": "Inhaler devices",
   "html": "<p><strong>Pressurised metered-dose inhalers</strong> (conventional or breath-actuated), used with <strong>spacers / valved holding chambers</strong> to improve delivery; <strong>dry powder inhalers</strong> (single-dose, reusable, multidose such as Turbuhaler and Diskus for Flixotide and Seretide), which need a fast, deep inspiration; <strong>nebulisers</strong> (jet, ultrasonic, mesh). Correct technique is essential for inhaled therapy to work.</p>"
  }
 ],
 "exam": [
  "Asthma affects > 300 million people; most deaths in low-income countries.",
  "T2-high: eosinophilic, allergic, high IgE, steroid-responsive; T2-low: Th1/Th17, neutrophils, less steroid-responsive.",
  "SABA (salbutamol, terbutaline): first line in acute attacks.",
  "LABA (salmeterol, formoterol): maintenance, with an ICS.",
  "Tiotropium/ipratropium: caution in prostate enlargement, urinary obstruction, glaucoma.",
  "ICS: first-line long-term control; rinse mouth to prevent thrush.",
  "Montelukast: leukotriene receptor antagonist.",
  "Theophylline: narrow window, many interactions, smoking raises clearance, TDM.",
  "Roflumilast: PDE4 inhibitor for COPD.",
  "SMART: budesonide/formoterol as maintenance and reliever.",
  "Omalizumab = anti-IgE; mepolizumab/benralizumab = IL-5; dupilumab = IL-4/13; tezepelumab = TSLP.",
  "Use spacers with pMDIs; DPIs need a strong inspiration."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Drugs for asthma and COPD",
   "caption": "Bronchodilators, anti-inflammatories, combinations and biologics. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"140\" y1=\"230\" x2=\"260\" y2=\"300\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"100\" x2=\"260\" y2=\"300\"/>",
   "parts": {
    "saba": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"40\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "SABA: salbutamol,",
      "terbutaline (relief)"
     ],
     "lx": 140.0,
     "ly": 68.0
    },
    "laba": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"280\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "LABA: salmeterol,",
      "formoterol (control)"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "anticho": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"520\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Antimuscarinics:",
      "ipratropium, tiotropium"
     ],
     "lx": 620.0,
     "ly": 68.0
    },
    "ics": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"40\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Inhaled corticosteroids:",
      "first-line control"
     ],
     "lx": 140.0,
     "ly": 198.0
    },
    "ltra": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"280\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Montelukast:",
      "leukotriene receptor"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "pde": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"520\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Theophylline, roflumilast:",
      "PDE inhibitors"
     ],
     "lx": 620.0,
     "ly": 198.0
    },
    "smart": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9ecec\" x=\"160\" y=\"300\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "SMART: ICS +",
      "formoterol inhaler"
     ],
     "lx": 260.0,
     "ly": 328.0
    },
    "bio": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f0d0e0\" x=\"400\" y=\"300\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Biologics: anti-IgE,",
      "anti-IL-5, anti-IL-4/13"
     ],
     "lx": 500.0,
     "ly": 328.0
    }
   },
   "arrows": {
    "saba": [
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
    "laba": [
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
    "anticho": [
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
    "ics": [
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
    "ltra": [
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
    "pde": [
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
    "smart": [
     {
      "t": [
       160.0,
       308.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "bio": [
     {
      "t": [
       400.0,
       308.0
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
   "q": "How many people have asthma worldwide?",
   "options": [
    "About 30 million",
    "About 3 billion",
    "More than 300 million",
    "About 3 million"
   ],
   "answer": 2,
   "why": "It is the commonest chronic disease."
  },
  {
   "q": "T2-high asthma is characterised by:",
   "options": [
    "No inflammation",
    "Neutrophils and poor steroid response",
    "Th17 activation",
    "Eosinophils, allergy and high IgE"
   ],
   "answer": 3,
   "why": "It responds well to corticosteroids."
  },
  {
   "q": "Which drug is first line for an acute asthma attack?",
   "options": [
    "Omalizumab",
    "Tiotropium",
    "Montelukast",
    "Salbutamol"
   ],
   "answer": 3,
   "why": "A short-acting β₂ agonist."
  },
  {
   "q": "β₂ agonists relax airway smooth muscle by:",
   "options": [
    "Blocking leukotrienes",
    "Blocking muscarinic receptors",
    "Increasing cAMP via Gs",
    "Inhibiting IgE"
   ],
   "answer": 2,
   "why": "Leading to bronchodilation."
  },
  {
   "q": "Which is a long-acting β₂ agonist?",
   "options": [
    "Formoterol",
    "Theophylline",
    "Salbutamol",
    "Ipratropium"
   ],
   "answer": 0,
   "why": "Also salmeterol."
  },
  {
   "q": "Tiotropium is a:",
   "options": [
    "Short-acting β₂ agonist",
    "Inhaled corticosteroid",
    "PDE4 inhibitor for COPD",
    "Long-acting muscarinic antagonist"
   ],
   "answer": 3,
   "why": "Brand Spiriva."
  },
  {
   "q": "Which condition calls for caution with inhaled antimuscarinics?",
   "options": [
    "Diabetes",
    "Benign prostatic enlargement",
    "Anaemia",
    "Hypothyroidism"
   ],
   "answer": 1,
   "why": "Also bladder outflow obstruction and glaucoma."
  },
  {
   "q": "What is first-line long-term control for persistent asthma?",
   "options": [
    "SABA alone",
    "Inhaled corticosteroid",
    "Oral theophylline",
    "Montelukast alone"
   ],
   "answer": 1,
   "why": "ICS reduce airway inflammation."
  },
  {
   "q": "The main local adverse effect of inhaled corticosteroids is:",
   "options": [
    "Oropharyngeal candidiasis",
    "Urinary retention",
    "Tremor",
    "Tachycardia"
   ],
   "answer": 0,
   "why": "Prevented by rinsing the mouth."
  },
  {
   "q": "Montelukast acts by:",
   "options": [
    "Blocking IgE binding to mast cells",
    "Inhibiting phosphodiesterase 4",
    "Stimulating β₂ receptors directly",
    "Blocking cysteinyl leukotriene receptors"
   ],
   "answer": 3,
   "why": "Used for prophylaxis and exercise-induced bronchospasm."
  },
  {
   "q": "Which drug requires therapeutic drug monitoring because of its narrow window?",
   "options": [
    "Montelukast",
    "Theophylline",
    "Budesonide",
    "Salbutamol"
   ],
   "answer": 1,
   "why": "With many interactions and variable clearance."
  },
  {
   "q": "Smoking affects theophylline by:",
   "options": [
    "Decreasing its clearance",
    "Blocking its absorption",
    "Increasing its clearance",
    "No effect"
   ],
   "answer": 2,
   "why": "Smoking induces its metabolism."
  },
  {
   "q": "Roflumilast is a:",
   "options": [
    "Leukotriene antagonist",
    "PDE4 inhibitor for COPD",
    "Anti-IgE antibody",
    "Non-selective PDE inhibitor"
   ],
   "answer": 1,
   "why": "Approved in COPD."
  },
  {
   "q": "SMART therapy uses:",
   "options": [
    "Theophylline plus montelukast daily",
    "Oral corticosteroids every day",
    "A short-acting β₂ agonist alone",
    "One ICS-formoterol inhaler for both"
   ],
   "answer": 3,
   "why": "E.g. budesonide/formoterol."
  },
  {
   "q": "Why formoterol in SMART rather than salmeterol?",
   "options": [
    "It has a fast onset suitable for relief",
    "It is an antimuscarinic bronchodilator",
    "It is much cheaper than salmeterol",
    "It is a corticosteroid itself"
   ],
   "answer": 0,
   "why": "So it can serve as a reliever."
  },
  {
   "q": "Omalizumab targets:",
   "options": [
    "IgE",
    "TSLP",
    "IL-4/13",
    "IL-5"
   ],
   "answer": 0,
   "why": "It stops IgE binding to mast cells and basophils."
  },
  {
   "q": "Dupilumab blocks:",
   "options": [
    "IgE",
    "IL-5",
    "Leukotrienes",
    "IL-4/IL-13 signalling"
   ],
   "answer": 3,
   "why": "Mepolizumab and benralizumab act on the IL-5 pathway."
  },
  {
   "q": "What is the purpose of a spacer?",
   "options": [
    "To nebulise the drug into a fine mist",
    "To improve delivery from a pMDI",
    "To measure the patient's peak flow",
    "To replace the inhaler completely"
   ],
   "answer": 1,
   "why": "Valved holding chambers reduce coordination problems."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "saba",
   "options": [
    "Short-acting β₂ agonists",
    "Muscarinic antagonists",
    "Inhaled corticosteroids",
    "Long-acting β₂ agonists"
   ],
   "answer": 0,
   "why": "The arrow points to: Short-acting β₂ agonists. Salbutamol, terbutaline, fenoterol: first line for acute attacks and exercise-induced asthma."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "laba",
   "options": [
    "Inhaled corticosteroids",
    "Biologics",
    "Long-acting β₂ agonists",
    "Leukotriene modifiers"
   ],
   "answer": 2,
   "why": "The arrow points to: Long-acting β₂ agonists. Salmeterol, formoterol (and ultra-long-acting) for maintenance, combined with an ICS."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "anticho",
   "options": [
    "Biologics",
    "Muscarinic antagonists",
    "Short-acting β₂ agonists",
    "Inhaled corticosteroids"
   ],
   "answer": 1,
   "why": "The arrow points to: Muscarinic antagonists. Ipratropium, oxitropium, tiotropium: bronchodilators; caution in prostate enlargement, bladder outflow obstruction, glaucoma."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ics",
   "options": [
    "Muscarinic antagonists",
    "Leukotriene modifiers",
    "Inhaled corticosteroids",
    "SMART therapy"
   ],
   "answer": 2,
   "why": "The arrow points to: Inhaled corticosteroids. Beclometasone, budesonide, fluticasone: first-line long-term control; risk of oral thrush."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ltra",
   "options": [
    "Biologics",
    "Short-acting β₂ agonists",
    "Leukotriene modifiers",
    "SMART therapy"
   ],
   "answer": 2,
   "why": "The arrow points to: Leukotriene modifiers. Montelukast blocks cysteinyl leukotriene receptors: prophylaxis, exercise-induced bronchospasm."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pde",
   "options": [
    "PDE inhibitors",
    "SMART therapy",
    "Long-acting β₂ agonists",
    "Biologics"
   ],
   "answer": 0,
   "why": "The arrow points to: PDE inhibitors. Theophylline (narrow window, TDM) and roflumilast (PDE4, COPD)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "smart",
   "options": [
    "Muscarinic antagonists",
    "SMART therapy",
    "Biologics",
    "Long-acting β₂ agonists"
   ],
   "answer": 1,
   "why": "The arrow points to: SMART therapy. One ICS-formoterol inhaler (budesonide-formoterol) for maintenance and reliever."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "bio",
   "options": [
    "Biologics",
    "Muscarinic antagonists",
    "PDE inhibitors",
    "Leukotriene modifiers"
   ],
   "answer": 0,
   "why": "The arrow points to: Biologics. Omalizumab (anti-IgE), mepolizumab and benralizumab (IL-5 pathway), dupilumab (IL-4/13), tezepelumab (anti-TSLP)."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "T2-high vs T2-low asthma?",
   "back": "T2-high: ≥ half of patients, childhood onset, eosinophilic, allergic, high IgE, steroid-responsive. T2-low: Th1/Th17, neutrophils, non-allergic, less steroid-responsive."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Classes of bronchodilators?",
   "back": "β₂ agonists (SABA: salbutamol, terbutaline, fenoterol; LABA: salmeterol, formoterol) and muscarinic antagonists (ipratropium, oxitropium, tiotropium)."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Indications for SABAs?",
   "back": "First line in acute asthma and exacerbations; prevention of exercise-induced asthma."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Antimuscarinic adverse effects and cautions?",
   "back": "Pharyngeal irritation, paradoxical bronchospasm; caution in prostate enlargement, bladder outflow obstruction, glaucoma."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Role and adverse effect of ICS?",
   "back": "First-line long-term control of persistent asthma; oropharyngeal candidiasis (rinse mouth)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Theophylline: key clinical points?",
   "back": "Non-selective PDE inhibitor; clearance raised by smoking and high-protein diet; many interactions; TDM; avoid in cor pulmonale, heart failure, liver failure; nausea, arrhythmias, insomnia."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "What is SMART?",
   "back": "Single maintenance and reliever therapy with one ICS-formoterol inhaler (budesonide/formoterol, mometasone/formoterol), per GINA 2022 and NHLBI 2020."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Asthma biologics and targets?",
   "back": "Omalizumab: IgE. Mepolizumab, benralizumab: IL-5 pathway. Dupilumab: IL-4/13. Tezepelumab: TSLP."
  },
  {
   "id": "x8",
   "type": "text",
   "front": "Inhaler device types?",
   "back": "Pressurised metered-dose inhalers (conventional, breath-actuated) ± spacers; dry powder inhalers (single-dose, multidose: Turbuhaler, Diskus); nebulisers (jet, ultrasonic, mesh)."
  },
  {
   "id": "img-saba",
   "type": "image",
   "target": "saba",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Short-acting β₂ agonists. Salbutamol, terbutaline, fenoterol: first line for acute attacks and exercise-induced asthma."
  },
  {
   "id": "img-laba",
   "type": "image",
   "target": "laba",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Long-acting β₂ agonists. Salmeterol, formoterol (and ultra-long-acting) for maintenance, combined with an ICS."
  },
  {
   "id": "img-anticho",
   "type": "image",
   "target": "anticho",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Muscarinic antagonists. Ipratropium, oxitropium, tiotropium: bronchodilators; caution in prostate enlargement, bladder outflow obstruction, glaucoma."
  },
  {
   "id": "img-ics",
   "type": "image",
   "target": "ics",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Inhaled corticosteroids. Beclometasone, budesonide, fluticasone: first-line long-term control; risk of oral thrush."
  },
  {
   "id": "img-ltra",
   "type": "image",
   "target": "ltra",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Leukotriene modifiers. Montelukast blocks cysteinyl leukotriene receptors: prophylaxis, exercise-induced bronchospasm."
  },
  {
   "id": "img-pde",
   "type": "image",
   "target": "pde",
   "front": "What is at the arrow, and why does it matter?",
   "back": "PDE inhibitors. Theophylline (narrow window, TDM) and roflumilast (PDE4, COPD)."
  },
  {
   "id": "img-smart",
   "type": "image",
   "target": "smart",
   "front": "What is at the arrow, and why does it matter?",
   "back": "SMART therapy. One ICS-formoterol inhaler (budesonide-formoterol) for maintenance and reliever."
  },
  {
   "id": "img-bio",
   "type": "image",
   "target": "bio",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Biologics. Omalizumab (anti-IgE), mepolizumab and benralizumab (IL-5 pathway), dupilumab (IL-4/13), tezepelumab (anti-TSLP)."
  }
 ],
 "deeper": [
  {
   "title": "Why an inhaled steroid, not a reliever, controls asthma",
   "html": "<p>Salbutamol relaxes the muscle but does nothing to the eosinophilic inflammation that drives attacks, so relying on it alone lets the disease progress and increases the risk of severe exacerbations. Inhaled corticosteroids reduce that inflammation, which is why they are first-line control and why SMART gives a dose of steroid every time the patient uses a reliever.</p><p class='src'>Source: the lecture's ICS and SMART slides.</p>"
  },
  {
   "title": "Why theophylline is used less today",
   "html": "<p>Its therapeutic window is narrow, its clearance varies with smoking, diet, age, illness and many interacting drugs, and toxic levels cause vomiting, arrhythmias and seizures. Inhaled drugs deliver bronchodilation and anti-inflammatory effect directly to the airways with far fewer systemic effects.</p><p class='src'>Source: the lecture's phosphodiesterase inhibitor slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "Global Initiative for Asthma (GINA)",
   "url": "https://ginasthma.org/",
   "kind": "Guideline",
   "why": "The international asthma strategy the lecture cites.",
   "note": ""
  },
  {
   "title": "Asthma (NHS)",
   "url": "https://www.nhs.uk/conditions/asthma/",
   "kind": "Article",
   "why": "Symptoms, inhalers and asthma action plans.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Global Initiative for Asthma (GINA)",
   "url": "https://ginasthma.org/"
  },
  {
   "name": "Asthma (NHS)",
   "url": "https://www.nhs.uk/conditions/asthma/"
  }
 ],
 "verified": "22 Sep 2026"
};
