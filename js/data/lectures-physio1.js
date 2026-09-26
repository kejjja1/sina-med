/* physio1: 20 lectures, merged for upload. Edit the source files, not this one. */
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physio1-cardiovascular"] = {
 "id": "physio1-cardiovascular",
 "subject": "physio1",
 "group": "Cardiovascular and respiratory physiology",
 "title": "The cardiovascular system",
 "sourceFile": "The cardiovascular system (Physiology, Pr. A. T. Dinh-Xuan)",
 "sourceUrl": "https://drive.google.com/file/d/12SJeS0fk614RXBTwk0tZSfR3WamQwRr-/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "Components and circuits",
   "html": "<p>The cardiovascular system has three components: the <strong>heart</strong> (pump), the <strong>blood vessels</strong> (pipes) and the <strong>blood</strong> (the fluid). It works with the respiratory, nervous and endocrine systems and the kidneys. Two loops run <strong>in series</strong> in a closed system: the <strong>pulmonary loop</strong> takes oxygen-poor blood to the lungs and back, and the <strong>systemic loop</strong> takes blood from the heart to the rest of the body. The systemic circulation holds about <strong>84% of the blood volume</strong>.</p><p>Vessels: arteries, arterioles, capillaries, venules, veins. <strong>All arteries carry blood away from the heart, all veins towards it</strong>. Usually arteries carry oxygenated blood, except the <strong>pulmonary arteries</strong> (deoxygenated to the lungs) and the <strong>pulmonary veins</strong> (four, oxygenated to the left atrium). The lungs also receive a small nutritive supply from the bronchial arteries; the heart from the coronaries.</p>"
  },
  {
   "id": "s1",
   "title": "Pressure, flow and resistance",
   "html": "<p><strong>Pressure</strong> (mmHg) is the force exerted; <strong>flow</strong> (mL/min) is the volume moved per unit time; <strong>resistance</strong> is the friction that impedes flow between two points. The basic relation is <strong>Q = ΔP / R</strong>: at constant pressure, raising resistance lowers flow.</p><p>By <strong>Poiseuille's law</strong>, <strong>R = 8ηL / πr⁴</strong>: resistance depends on (1) <strong>blood viscosity</strong> (η, mainly red cell count), (2) <strong>vessel length</strong> and (3) <strong>vessel radius</strong>, to the fourth power. Radius is the main minute-to-minute control: halving the radius multiplies resistance by 16. <strong>Arterioles</strong>, small and muscular, are the main resistance vessels. Velocity is flow divided by cross-sectional area (Q = v × S), so blood is slowest in the capillaries, whose total area is largest.</p><p>Typical pressures: aorta about <strong>120/80 mmHg</strong>, falling along arterioles and capillaries (about 35 at the arterial end) to near 0-7 mmHg in the right atrium; pulmonary artery about <strong>20/8 mmHg</strong>.</p>"
  },
  {
   "id": "s2",
   "title": "The endothelium and nitric oxide",
   "html": "<p>Vascular tone results from the balance between vasodilatation and vasoconstriction of vascular smooth muscle, strongly modulated by the <strong>endothelium</strong>. Furchgott showed that <strong>acetylcholine relaxes a rabbit aorta only if its endothelium is intact</strong>: without endothelium it constricts. The endothelium releases an <strong>endothelium-derived relaxing factor (EDRF)</strong>, identified as <strong>nitric oxide (NO)</strong>.</p><p>Stimuli such as <strong>shear stress</strong>, acetylcholine, ADP and serotonin raise endothelial Ca²⁺, activating <strong>NO synthase</strong>; NO diffuses to smooth muscle and causes <strong>relaxation</strong>, acting as a brake on vasoconstriction. NO donors (nitrates) reproduce this effect. Furchgott, Ignarro and Murad received the <strong>1998 Nobel Prize</strong> for this discovery.</p>"
  }
 ],
 "exam": [
  "Heart, vessels and blood; two loops in series (pulmonary, systemic).",
  "Systemic circulation holds ~84% of blood volume.",
  "Arteries leave the heart, veins return to it; pulmonary arteries carry O₂-poor blood.",
  "Q = ΔP / R.",
  "Poiseuille: R = 8ηL / πr⁴ (viscosity, length, radius⁴).",
  "Radius is the main moment-to-moment control; arterioles = resistance vessels.",
  "Aorta ~120/80 mmHg; pulmonary artery ~20/8 mmHg.",
  "Velocity lowest in capillaries (largest total area).",
  "Endothelium releases EDRF = NO → smooth muscle relaxation.",
  "ACh relaxes vessels only with intact endothelium (Furchgott); Nobel 1998."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Two circulations in series",
   "caption": "Pulmonary and systemic loops. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"215\" y1=\"70\" x2=\"280\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"70\" x2=\"545\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"560\" y1=\"100\" x2=\"465\" y2=\"190\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"295\" y1=\"190\" x2=\"200\" y2=\"100\"/>",
   "parts": {
    "rh": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"15\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Right heart",
      "(RA → RV)"
     ],
     "lx": 115.0,
     "ly": 68.0
    },
    "lung": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"280\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Pulmonary loop: lungs",
      "(O₂-poor in arteries)"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "lh": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"545\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Left heart",
      "(LA → LV)"
     ],
     "lx": 645.0,
     "ly": 68.0
    },
    "body": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"280\" y=\"190\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Systemic loop: organs",
      "(84% of blood volume)"
     ],
     "lx": 380.0,
     "ly": 218.0
    },
    "qpr": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"545\" y=\"190\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Q = ΔP / R",
      "R = 8ηL / πr⁴"
     ],
     "lx": 645.0,
     "ly": 218.0
    }
   },
   "arrows": {
    "rh": [
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
    "lung": [
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
    "lh": [
     {
      "t": [
       545.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "body": [
     {
      "t": [
       280.0,
       198.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "qpr": [
     {
      "t": [
       545.0,
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
   "q": "The pulmonary arteries carry:",
   "options": [
    "Oxygenated blood to the body",
    "Deoxygenated blood to the lungs",
    "Oxygenated blood to the left atrium",
    "Lymph"
   ],
   "answer": 1,
   "why": "Exception to the rule."
  },
  {
   "q": "How many pulmonary veins enter the left atrium?",
   "options": [
    "1",
    "2",
    "4",
    "6"
   ],
   "answer": 2,
   "why": "Oxygenated blood."
  },
  {
   "q": "The systemic circulation holds about what share of blood volume?",
   "options": [
    "16%",
    "50%",
    "84%",
    "99%"
   ],
   "answer": 2,
   "why": "Pulmonary holds the rest."
  },
  {
   "q": "The basic haemodynamic equation is:",
   "options": [
    "Q = ΔP × R",
    "Q = ΔP / R",
    "Q = R / ΔP",
    "Q = ΔP + R"
   ],
   "answer": 1,
   "why": "Ohm's law analogue."
  },
  {
   "q": "According to Poiseuille, resistance is inversely proportional to:",
   "options": [
    "Radius",
    "Radius squared",
    "Radius to the fourth power",
    "Length"
   ],
   "answer": 2,
   "why": "R = 8ηL/πr⁴."
  },
  {
   "q": "If a vessel's radius halves, its resistance:",
   "options": [
    "Doubles",
    "Quadruples",
    "Increases 16-fold",
    "Halves"
   ],
   "answer": 2,
   "why": "2⁴ = 16."
  },
  {
   "q": "The main resistance vessels are the:",
   "options": [
    "Aorta",
    "Arterioles",
    "Capillaries",
    "Veins"
   ],
   "answer": 1,
   "why": "Small, muscular."
  },
  {
   "q": "Blood viscosity mainly depends on the:",
   "options": [
    "Plasma sodium",
    "Number of red cells",
    "Platelet count",
    "Heart rate"
   ],
   "answer": 1,
   "why": "Haematocrit."
  },
  {
   "q": "Blood velocity is lowest in the:",
   "options": [
    "Aorta",
    "Capillaries",
    "Large veins",
    "Arteries"
   ],
   "answer": 1,
   "why": "Largest total cross-section."
  },
  {
   "q": "Typical aortic pressure is about:",
   "options": [
    "20/8 mmHg",
    "120/80 mmHg",
    "200/120 mmHg",
    "35/10 mmHg"
   ],
   "answer": 1,
   "why": "Systemic."
  },
  {
   "q": "Pulmonary artery pressure is about:",
   "options": [
    "120/80 mmHg",
    "20/8 mmHg",
    "60/40 mmHg",
    "5/0 mmHg"
   ],
   "answer": 1,
   "why": "Low-pressure loop."
  },
  {
   "q": "EDRF was identified as:",
   "options": [
    "Endothelin",
    "Nitric oxide",
    "Prostacyclin",
    "Angiotensin II"
   ],
   "answer": 1,
   "why": "Nobel 1998."
  },
  {
   "q": "Without endothelium, acetylcholine makes an aortic ring:",
   "options": [
    "Relax",
    "Contract",
    "Do nothing",
    "Fibrillate"
   ],
   "answer": 1,
   "why": "Direct muscarinic effect on muscle."
  },
  {
   "q": "Nitric oxide causes vascular smooth muscle to:",
   "options": [
    "Contract",
    "Relax",
    "Divide",
    "Calcify"
   ],
   "answer": 1,
   "why": "Vasodilatation."
  },
  {
   "q": "A stimulus for endothelial NO release is:",
   "options": [
    "Shear stress",
    "Hypothermia",
    "Vasopressin only",
    "Low calcium"
   ],
   "answer": 0,
   "why": "Flow-mediated dilatation."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "rh",
   "options": [
    "Systemic circulation",
    "Flow, pressure, resistance",
    "Right heart",
    "Pulmonary circulation"
   ],
   "answer": 2,
   "why": "The arrow points to: Right heart. Receives deoxygenated blood from the venae cavae and pumps it into the pulmonary arteries."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "lung",
   "options": [
    "Systemic circulation",
    "Pulmonary circulation",
    "Left heart",
    "Flow, pressure, resistance"
   ],
   "answer": 1,
   "why": "The arrow points to: Pulmonary circulation. Low-pressure loop: pulmonary arteries carry oxygen-poor blood to the lungs and pulmonary veins bring oxygenated blood back to the left atrium."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "lh",
   "options": [
    "Systemic circulation",
    "Flow, pressure, resistance",
    "Left heart",
    "Right heart"
   ],
   "answer": 2,
   "why": "The arrow points to: Left heart. Receives oxygenated blood from the four pulmonary veins and pumps it into the aorta at high pressure (about 120/80 mmHg)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "body",
   "options": [
    "Left heart",
    "Systemic circulation",
    "Flow, pressure, resistance",
    "Pulmonary circulation"
   ],
   "answer": 1,
   "why": "The arrow points to: Systemic circulation. High-pressure loop to all organs, holding about 84% of total blood volume; returns through the venae cavae."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "qpr",
   "options": [
    "Pulmonary circulation",
    "Right heart",
    "Flow, pressure, resistance",
    "Left heart"
   ],
   "answer": 2,
   "why": "The arrow points to: Flow, pressure, resistance. Flow equals driving pressure over resistance; by Poiseuille, resistance rises with viscosity and length and falls with the fourth power of radius."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Three components of the cardiovascular system?",
   "back": "Heart (pump), vessels (pipes), blood (fluid)."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Pulmonary vs systemic loop?",
   "back": "Pulmonary: RV → lungs → LA (low pressure). Systemic: LV → organs → RA (high pressure, 84% of volume)."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Exception to 'arteries carry oxygenated blood'?",
   "back": "Pulmonary arteries carry deoxygenated blood; pulmonary veins carry oxygenated blood."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Relation between flow, pressure and resistance?",
   "back": "Q = ΔP / R."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Poiseuille's law?",
   "back": "R = 8ηL / πr⁴: viscosity, length, radius to the fourth power."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Why are arterioles key?",
   "back": "Small muscular vessels whose radius changes control resistance and flow distribution."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "What is EDRF?",
   "back": "Nitric oxide made by endothelial NO synthase in response to shear stress, ACh, ADP; relaxes smooth muscle."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Furchgott's experiment?",
   "back": "ACh relaxes an aortic ring with endothelium but constricts it without; revealed EDRF (NO)."
  },
  {
   "id": "img-rh",
   "type": "image",
   "target": "rh",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Right heart. Receives deoxygenated blood from the venae cavae and pumps it into the pulmonary arteries."
  },
  {
   "id": "img-lung",
   "type": "image",
   "target": "lung",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Pulmonary circulation. Low-pressure loop: pulmonary arteries carry oxygen-poor blood to the lungs and pulmonary veins bring oxygenated blood back to the left atrium."
  },
  {
   "id": "img-lh",
   "type": "image",
   "target": "lh",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Left heart. Receives oxygenated blood from the four pulmonary veins and pumps it into the aorta at high pressure (about 120/80 mmHg)."
  },
  {
   "id": "img-body",
   "type": "image",
   "target": "body",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Systemic circulation. High-pressure loop to all organs, holding about 84% of total blood volume; returns through the venae cavae."
  },
  {
   "id": "img-qpr",
   "type": "image",
   "target": "qpr",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Flow, pressure, resistance. Flow equals driving pressure over resistance; by Poiseuille, resistance rises with viscosity and length and falls with the fourth power of radius."
  }
 ],
 "deeper": [
  {
   "title": "Nitroglycerin: an old drug explained by NO",
   "html": "<p>Nitroglycerin relieved angina in the 1870s, long before anyone knew why. It is an <strong>NO donor</strong>: it releases nitric oxide in vascular smooth muscle, mimicking the endothelium's own relaxing factor. Veins dilate most, lowering the return of blood to the heart and so the heart's work and oxygen demand; coronary arteries dilate too. The same pathway explains sildenafil's interaction with nitrates: both raise the same messenger (cGMP), and together they can drop blood pressure dangerously.</p><p class='src'>Source: the lecture's EDRF/NO slides (NO donors).</p>"
  }
 ],
 "resources": [
  {
   "title": "Physiology, Cardiovascular (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK493197/",
   "kind": "Book",
   "why": "Circulation, pressure and resistance.",
   "note": ""
  },
  {
   "title": "The Nobel Prize in Physiology or Medicine 1998",
   "url": "https://www.nobelprize.org/prizes/medicine/1998/summary/",
   "kind": "Website",
   "why": "Nitric oxide as a signalling molecule.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Physiology, Cardiovascular (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK493197/"
  },
  {
   "name": "The Nobel Prize in Physiology or Medicine 1998",
   "url": "https://www.nobelprize.org/prizes/medicine/1998/summary/"
  }
 ],
 "verified": "26 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physio1-heart"] = {
 "id": "physio1-heart",
 "subject": "physio1",
 "group": "Cardiovascular and respiratory physiology",
 "title": "Physiology of the heart",
 "sourceFile": "Physiology of the heart (Physiology, Pr. A. T. Dinh-Xuan)",
 "sourceUrl": "https://drive.google.com/file/d/1-NZx-TXPYbop9kUmbsoz8kpJRWRniU8r/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "Structure of the heart",
   "html": "<p>The heart wall has three layers: the <strong>epicardium</strong> (outer, the visceral layer of the serous pericardium), the <strong>myocardium</strong> (cardiac muscle, the bulk of the heart, the layer that contracts) and the <strong>endocardium</strong> (endothelium on thin connective tissue, continuous with the vessel lining). Four valves ensure one-way flow: two <strong>atrioventricular</strong> valves (tricuspid, mitral) between atria and ventricles and two <strong>semilunar</strong> valves (pulmonary, aortic) at the ventricular outlets.</p><p>Cardiomyocytes are arranged in layers encircling the chambers and squeeze like a fist; every cell contracts with every beat. Regeneration is very limited (about <strong>1% of cardiomyocytes replaced per year</strong>), which is why myocardial infarction leaves permanent damage.</p>"
  },
  {
   "id": "s1",
   "title": "Conduction system and pacemaker",
   "html": "<p>About <strong>1% of cardiac cells</strong> are not contractile but form the <strong>conducting system</strong>, linked to the myocardium by <strong>gap junctions</strong>. They have <strong>automaticity</strong>: the <strong>sinoatrial (SA) node</strong> (normal pacemaker, about <strong>70/min</strong>), the internodal pathways, the <strong>atrioventricular (AV) node</strong> (delays the impulse by about <strong>0.1 s</strong> so the atria fill the ventricles), the <strong>bundle of His</strong>, the bundle branches and the <strong>Purkinje fibres</strong>, which run to the apex, then turn upward through the ventricles and reach the papillary muscles so they tense before the ventricular walls contract.</p><p>If a higher pacemaker fails, a lower one takes over at its own slower rate: <strong>AV node about 50/min</strong>, <strong>Purkinje about 30/min</strong>. In complete AV block, the atria beat at 70/min while the ventricles follow a slow escape rhythm.</p><p>The <strong>pacemaker potential</strong> of SA cells is a slow spontaneous depolarisation due to the <strong>'funny' current I<sub>f</sub></strong> (Na⁺ inward current activated by hyperpolarisation) and <strong>T-type Ca²⁺ channels</strong>, followed by an action potential. Contractile cells have a long plateau action potential.</p>"
  },
  {
   "id": "s2",
   "title": "Nerves and hormones",
   "html": "<p><strong>Sympathetic</strong> fibres innervate the whole heart (nodes and muscle) and release <strong>noradrenaline</strong> on mainly <strong>β-adrenergic (β1)</strong> receptors; adrenaline from the adrenal medulla acts on the same receptors: faster rate and stronger contraction. <strong>Parasympathetic (vagal)</strong> fibres innervate mainly the nodes and release <strong>acetylcholine</strong> on <strong>muscarinic</strong> receptors: slower rate. Autonomic tone changes the slope of the pacemaker potential.</p><p>The heart is also an <strong>endocrine</strong> organ: atrial cells secrete <strong>atrial natriuretic peptide (ANP)</strong> when stretched, promoting Na⁺ excretion and regulating extracellular Na⁺ and volume.</p>"
  },
  {
   "id": "s3",
   "title": "Arrhythmias",
   "html": "<p><strong>Arrhythmias</strong> are uncoordinated atrial and ventricular contractions caused by conduction defects. In <strong>fibrillation</strong> contraction is rapid and irregular and the SA node no longer controls rate. <strong>Atrial fibrillation</strong> impairs ventricular filling and promotes <strong>clots</strong> (stroke risk). <strong>Ventricular fibrillation</strong> is life-threatening: the ventricles do not pump, circulation stops and brain death follows unless <strong>defibrillation</strong>, an electric shock, restores sinus rhythm. For chronic conduction problems, an implanted <strong>pacemaker</strong> delivers the stimulus instead of the SA node.</p><p class='src'>Note: a slide says the Purkinje fibres make the papillary muscles contract before 'the rest of the atria'; it means before the rest of the ventricles.</p>"
  }
 ],
 "exam": [
  "Wall: epicardium, myocardium, endocardium; 2 AV + 2 semilunar valves.",
  "~1% of cardiomyocytes renewed per year → infarcts are permanent.",
  "Conduction: SA → internodal → AV (0.1 s delay) → His → branches → Purkinje.",
  "Intrinsic rates: SA ~70, AV ~50, Purkinje ~30/min.",
  "Pacemaker potential: funny current I_f + T-type Ca²⁺ channels.",
  "Gap junctions link conducting and contractile cells.",
  "Sympathetic NE on β1: ↑ rate and force; vagal ACh on muscarinic receptors: ↓ rate.",
  "Atria secrete ANP → natriuresis.",
  "Atrial fibrillation: poor filling, clots; ventricular fibrillation: cardiac arrest → defibrillation.",
  "Pacemakers replace a failing conduction system."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "The conduction system",
   "caption": "Pacemakers and their intrinsic rates. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"235\" y1=\"70\" x2=\"270\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"490\" y1=\"70\" x2=\"525\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"635\" y1=\"100\" x2=\"635\" y2=\"170\"/>",
   "parts": {
    "sa": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"15\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "SA node: pacemaker",
      "~70/min"
     ],
     "lx": 125.0,
     "ly": 68.0
    },
    "av": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"270\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "AV node: ~0.1 s delay",
      "~50/min if alone"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "his": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"525\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Bundle of His →",
      "bundle branches"
     ],
     "lx": 635.0,
     "ly": 68.0
    },
    "pk": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"525\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Purkinje fibres",
      "~30/min if alone"
     ],
     "lx": 635.0,
     "ly": 198.0
    },
    "ans": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"15\" y=\"170\" width=\"400\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Sympathetic (NE, β1) ↑ rate/force;",
      "vagus (ACh, muscarinic) ↓ rate"
     ],
     "lx": 215.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "sa": [
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
    "av": [
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
    "his": [
     {
      "t": [
       525.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "pk": [
     {
      "t": [
       525.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "ans": [
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
   "q": "The layer of the heart that contracts is the:",
   "options": [
    "Epicardium",
    "Myocardium",
    "Endocardium",
    "Pericardium"
   ],
   "answer": 1,
   "why": "Cardiac muscle."
  },
  {
   "q": "The endocardium is continuous with the:",
   "options": [
    "Pericardium",
    "Lining of blood vessels",
    "Pleura",
    "Myocardium"
   ],
   "answer": 1,
   "why": "Endothelium."
  },
  {
   "q": "The normal pacemaker of the heart is the:",
   "options": [
    "AV node",
    "SA node",
    "Bundle of His",
    "Purkinje fibres"
   ],
   "answer": 1,
   "why": "About 70/min."
  },
  {
   "q": "The AV node delays conduction by about:",
   "options": [
    "0.01 s",
    "0.1 s",
    "1 s",
    "0.5 s"
   ],
   "answer": 1,
   "why": "Lets atria finish filling."
  },
  {
   "q": "If the SA and AV nodes fail, the Purkinje fibres pace at about:",
   "options": [
    "70/min",
    "50/min",
    "30/min",
    "100/min"
   ],
   "answer": 2,
   "why": "Escape rhythm."
  },
  {
   "q": "The pacemaker potential is driven partly by:",
   "options": [
    "The funny current I_f",
    "The Na⁺/K⁺ pump alone",
    "Chloride channels",
    "Gap junctions"
   ],
   "answer": 0,
   "why": "HCN channels."
  },
  {
   "q": "Cells of the conducting system communicate through:",
   "options": [
    "Desmosomes",
    "Gap junctions",
    "Tight junctions",
    "Synapses"
   ],
   "answer": 1,
   "why": "Electrical coupling."
  },
  {
   "q": "Noradrenaline acts on cardiac muscle mainly via:",
   "options": [
    "α1 receptors",
    "β1 receptors",
    "Muscarinic receptors",
    "Nicotinic receptors"
   ],
   "answer": 1,
   "why": "↑ rate and force."
  },
  {
   "q": "Vagal acetylcholine acts on cardiac:",
   "options": [
    "β1 receptors",
    "Muscarinic receptors",
    "Nicotinic receptors",
    "α2 receptors"
   ],
   "answer": 1,
   "why": "Slows the SA node."
  },
  {
   "q": "The parasympathetic system mainly innervates:",
   "options": [
    "All ventricular muscle",
    "The nodal cells",
    "Only the aorta",
    "The pericardium"
   ],
   "answer": 1,
   "why": "SA and AV nodes."
  },
  {
   "q": "ANP is secreted by:",
   "options": [
    "Ventricular cells",
    "Atrial cells",
    "The adrenal medulla",
    "The kidney"
   ],
   "answer": 1,
   "why": "When stretched."
  },
  {
   "q": "ANP promotes:",
   "options": [
    "Sodium retention",
    "Sodium excretion",
    "Vasoconstriction",
    "Renin release"
   ],
   "answer": 1,
   "why": "Natriuresis."
  },
  {
   "q": "A risk of atrial fibrillation is:",
   "options": [
    "Brain death within minutes",
    "Clot formation and stroke",
    "Complete heart block",
    "Hyperkalaemia"
   ],
   "answer": 1,
   "why": "Stasis in atria."
  },
  {
   "q": "Ventricular fibrillation is treated by:",
   "options": [
    "Pacemaker implantation",
    "Defibrillation",
    "Atropine",
    "Rest"
   ],
   "answer": 1,
   "why": "Emergency shock."
  },
  {
   "q": "Approximately what share of cardiomyocytes is renewed per year?",
   "options": [
    "1%",
    "10%",
    "50%",
    "100%"
   ],
   "answer": 0,
   "why": "Very limited repair."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "sa",
   "options": [
    "Sinoatrial node",
    "Autonomic control",
    "Atrioventricular node",
    "Bundle of His and branches"
   ],
   "answer": 0,
   "why": "The arrow points to: Sinoatrial node. Dominant pacemaker in the right atrium, firing about 70 times a minute thanks to its spontaneous pacemaker potential."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "av",
   "options": [
    "Bundle of His and branches",
    "Purkinje fibres",
    "Sinoatrial node",
    "Atrioventricular node"
   ],
   "answer": 3,
   "why": "The arrow points to: Atrioventricular node. Slows conduction by about 0.1 s so the atria finish emptying before the ventricles contract; can pace at about 50/min."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "his",
   "options": [
    "Sinoatrial node",
    "Bundle of His and branches",
    "Atrioventricular node",
    "Autonomic control"
   ],
   "answer": 1,
   "why": "The arrow points to: Bundle of His and branches. The only electrical path through the fibrous skeleton from atria to ventricles, dividing into right and left bundle branches along the septum."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pk",
   "options": [
    "Atrioventricular node",
    "Sinoatrial node",
    "Autonomic control",
    "Purkinje fibres"
   ],
   "answer": 3,
   "why": "The arrow points to: Purkinje fibres. Fast conducting fibres spreading excitation from the apex upward through the ventricles and to the papillary muscles; intrinsic rate about 30/min."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ans",
   "options": [
    "Autonomic control",
    "Atrioventricular node",
    "Sinoatrial node",
    "Bundle of His and branches"
   ],
   "answer": 0,
   "why": "The arrow points to: Autonomic control. Sympathetic noradrenaline on β1 receptors speeds and strengthens the heart; vagal acetylcholine on muscarinic receptors slows the nodes."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Three layers of the heart wall?",
   "back": "Epicardium (visceral pericardium), myocardium (muscle), endocardium (endothelium)."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Components of the conducting system?",
   "back": "SA node, internodal pathways, AV node, bundle of His, bundle branches, Purkinje fibres."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Why the AV nodal delay?",
   "back": "About 0.1 s lets the atria contract and finish filling the ventricles."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Intrinsic pacemaker rates?",
   "back": "SA ~70/min, AV ~50/min, Purkinje ~30/min."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Ionic basis of the pacemaker potential?",
   "back": "Funny current I_f (Na⁺ in, activated by hyperpolarisation) and T-type Ca²⁺ channels."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Autonomic effects on the heart?",
   "back": "Sympathetic NE/adrenaline on β1: ↑ rate and contractility. Vagal ACh on muscarinic: ↓ rate."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Endocrine role of the heart?",
   "back": "Atrial cells secrete ANP when stretched → Na⁺ excretion."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Atrial vs ventricular fibrillation?",
   "back": "Atrial: poor filling, clots, stroke risk. Ventricular: no output, cardiac arrest → defibrillation."
  },
  {
   "id": "img-sa",
   "type": "image",
   "target": "sa",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Sinoatrial node. Dominant pacemaker in the right atrium, firing about 70 times a minute thanks to its spontaneous pacemaker potential."
  },
  {
   "id": "img-av",
   "type": "image",
   "target": "av",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Atrioventricular node. Slows conduction by about 0.1 s so the atria finish emptying before the ventricles contract; can pace at about 50/min."
  },
  {
   "id": "img-his",
   "type": "image",
   "target": "his",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Bundle of His and branches. The only electrical path through the fibrous skeleton from atria to ventricles, dividing into right and left bundle branches along the septum."
  },
  {
   "id": "img-pk",
   "type": "image",
   "target": "pk",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Purkinje fibres. Fast conducting fibres spreading excitation from the apex upward through the ventricles and to the papillary muscles; intrinsic rate about 30/min."
  },
  {
   "id": "img-ans",
   "type": "image",
   "target": "ans",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Autonomic control. Sympathetic noradrenaline on β1 receptors speeds and strengthens the heart; vagal acetylcholine on muscarinic receptors slows the nodes."
  }
 ],
 "deeper": [
  {
   "title": "Why the heart has a built-in backup",
   "html": "<p>Every cell of the conducting system can generate impulses, but the fastest one sets the rhythm and keeps the slower ones reset before they fire (overdrive suppression). If the SA node fails, the AV node takes over at about 50/min; if conduction through the AV node is blocked, the ventricles still beat at about 30/min from Purkinje fibres. This backup keeps a person alive in complete heart block, though the slow rate causes fatigue and fainting, which is exactly the situation an implanted pacemaker corrects.</p><p class='src'>Source: the lecture's SA/AV/Purkinje rate diagrams and pacemaker slide.</p>"
  }
 ],
 "resources": [
  {
   "title": "Physiology, Cardiac (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK526089/",
   "kind": "Book",
   "why": "Conduction and contraction.",
   "note": ""
  },
  {
   "title": "Atrial fibrillation (NHS)",
   "url": "https://www.nhs.uk/conditions/atrial-fibrillation/",
   "kind": "Website",
   "why": "Symptoms, stroke risk and treatment.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Physiology, Cardiac (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK526089/"
  },
  {
   "name": "Atrial fibrillation (NHS)",
   "url": "https://www.nhs.uk/conditions/atrial-fibrillation/"
  }
 ],
 "verified": "26 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physio1-cardiac-cycle"] = {
 "id": "physio1-cardiac-cycle",
 "subject": "physio1",
 "group": "Cardiovascular and respiratory physiology",
 "title": "The cardiac cycle and cardiac output",
 "sourceFile": "The cardiac cycle (Physiology, Pr. A. T. Dinh-Xuan)",
 "sourceUrl": "https://drive.google.com/file/d/1auu-fLnOcM4IbF8wOyjVuWrqLnuNWxIL/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The cardiac cycle and heart sounds",
   "html": "<p>The <strong>cardiac cycle</strong> is all the events of one heartbeat: <strong>systole</strong> (contraction, ejection of blood) and <strong>diastole</strong> (relaxation, filling). In diastole the atrioventricular valves are open and the ventricles fill, completed by atrial contraction; in systole the ventricles contract, the AV valves close (<strong>first heart sound, S1</strong>), pressure rises until the semilunar valves open and blood is ejected; as the ventricles relax, the aortic and pulmonary valves close (<strong>second sound, S2</strong>).</p><p><strong>Murmurs</strong> are abnormal sounds from <strong>turbulent flow</strong>; in adults most come from valves. An <strong>incompetent (regurgitant)</strong> valve does not close fully and gives a swishing sound; a <strong>stenotic</strong> valve does not open fully and gives a high-pitched sound or click. Timing follows the valve's job: mitral regurgitation and aortic stenosis are heard in <strong>systole</strong>; mitral stenosis and aortic regurgitation in <strong>diastole</strong>.</p>"
  },
  {
   "id": "s1",
   "title": "Cardiac output and heart rate",
   "html": "<p><strong>Cardiac output (CO)</strong> is the volume pumped by each ventricle per minute: <strong>CO = heart rate × stroke volume</strong>, about <strong>70 beats/min × 70 mL ≈ 5 L/min</strong> at rest and <strong>20-30 L/min</strong> in exercise. Stroke volume is fairly constant in health; if blood volume falls or the heart weakens, stroke volume drops and output is maintained by a faster heart rate.</p><p>Factors that raise heart rate are <strong>positive chronotropic</strong>, those that lower it <strong>negative chronotropic</strong>. The <strong>sympathetic</strong> system (noradrenaline) increases heart rate and innervates both nodes and muscle; the <strong>parasympathetic</strong> (acetylcholine, vagus) decreases it and innervates mainly the nodes.</p>"
  },
  {
   "id": "s2",
   "title": "Stroke volume, Starling's law and ejection fraction",
   "html": "<p><strong>Stroke volume = end-diastolic volume − end-systolic volume</strong> (SV = EDV − ESV); at rest about <strong>70 mL</strong>, roughly 60% of the ventricular content. It depends on <strong>preload</strong>, <strong>contractility</strong> and afterload.</p><p><strong>Starling's law</strong>: the critical factor controlling stroke volume is <strong>preload</strong>, the stretch of the fibres before contraction, set mainly by <strong>venous return</strong> and hence EDV. More stretch gives a stronger contraction, up to an optimal length; over-stretching makes pumping inefficient. A slow heart rate or exercise raises EDV. <strong>Extrinsic controls</strong>: sympathetic noradrenaline on β1 receptors and hormones such as <strong>thyroid hormones</strong> increase the force of contraction, so the ventricle empties further (lower ESV).</p><p>Lecture example: rest EDV 135, ESV 65 → SV 70 mL; Frank-Starling alone (EDV 165) → SV 100 mL; sympathetic alone (ESV 35) → SV 100 mL; both → SV 130 mL. The <strong>ejection fraction</strong>, EF = SV / EDV, normally <strong>50-75%</strong> at rest, is a measure of contractility; increased contractility raises it.</p>"
  }
 ],
 "exam": [
  "Cycle = systole (contraction, ejection) + diastole (relaxation, filling).",
  "S1: AV valves close; S2: semilunar valves close.",
  "Murmur = turbulent flow; incompetent (leaky) vs stenotic (narrow) valve.",
  "Systolic: MR, AS; diastolic: MS, AR.",
  "CO = HR × SV ≈ 70 × 70 ≈ 5 L/min; 20-30 L/min in exercise.",
  "Chronotropic: sympathetic ↑, parasympathetic ↓.",
  "SV = EDV − ESV ≈ 70 mL.",
  "Starling: ↑ preload (venous return, EDV) → ↑ SV.",
  "Sympathetic and thyroid hormones ↑ contractility → ↓ ESV.",
  "EF = SV / EDV; normal 50-75%."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Stroke volume: Frank-Starling and sympathetic effect",
   "caption": "Numbers from the lecture. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"250\" y1=\"70\" x2=\"270\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"250\" y1=\"70\" x2=\"510\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"100\" x2=\"380\" y2=\"170\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"525\" y1=\"100\" x2=\"475\" y2=\"170\"/>",
   "parts": {
    "n": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"15\" y=\"40\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Rest: EDV 135 − ESV 65",
      "→ SV 70 mL"
     ],
     "lx": 132.5,
     "ly": 68.0
    },
    "fs": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"270\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Frank-Starling: EDV 165",
      "− ESV 65 → SV 100 mL"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "sy": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"510\" y=\"40\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Sympathetic: EDV 135",
      "− ESV 35 → SV 100 mL"
     ],
     "lx": 627.5,
     "ly": 68.0
    },
    "both": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"270\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Both: EDV 165 − ESV 35",
      "→ SV 130 mL"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "co": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"15\" y=\"290\" width=\"420\" height=\"60\" rx=\"10\"/>",
     "label": [
      "CO = SV × HR: 70 × 70 ≈ 5 L/min at rest;",
      "20-30 L/min in exercise"
     ],
     "lx": 225.0,
     "ly": 318.0
    }
   },
   "arrows": {
    "n": [
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
    "fs": [
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
    "sy": [
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
    "both": [
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
    "co": [
     {
      "t": [
       15.0,
       298.0
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
   "q": "Systole corresponds to:",
   "options": [
    "Relaxation and filling",
    "Contraction and ejection",
    "Atrial filling only",
    "Valve closure only"
   ],
   "answer": 1,
   "why": "Diastole is filling."
  },
  {
   "q": "The first heart sound is due to closure of the:",
   "options": [
    "Semilunar valves",
    "Atrioventricular valves",
    "Foramen ovale",
    "Ductus"
   ],
   "answer": 1,
   "why": "Start of systole."
  },
  {
   "q": "A murmur is caused by:",
   "options": [
    "Laminar flow",
    "Turbulent flow",
    "Low heart rate",
    "Low viscosity only"
   ],
   "answer": 1,
   "why": "Obstruction or leak."
  },
  {
   "q": "Mitral regurgitation is heard during:",
   "options": [
    "Diastole",
    "Systole",
    "Only on inspiration",
    "Never"
   ],
   "answer": 1,
   "why": "Blood leaks back into LA as LV contracts."
  },
  {
   "q": "Aortic stenosis is heard during:",
   "options": [
    "Systole",
    "Diastole",
    "Only at rest",
    "Only in children"
   ],
   "answer": 0,
   "why": "Narrow outflow in ejection."
  },
  {
   "q": "Cardiac output equals:",
   "options": [
    "SV + HR",
    "SV × HR",
    "EDV − ESV",
    "SV / EDV"
   ],
   "answer": 1,
   "why": "About 5 L/min."
  },
  {
   "q": "Resting cardiac output is about:",
   "options": [
    "1 L/min",
    "5 L/min",
    "15 L/min",
    "30 L/min"
   ],
   "answer": 1,
   "why": "70 × 70 mL."
  },
  {
   "q": "Stroke volume equals:",
   "options": [
    "EDV + ESV",
    "EDV − ESV",
    "ESV − EDV",
    "HR × EDV"
   ],
   "answer": 1,
   "why": "About 70 mL."
  },
  {
   "q": "According to Starling's law, stroke volume depends mainly on:",
   "options": [
    "Afterload",
    "Preload",
    "Heart rate",
    "Blood viscosity"
   ],
   "answer": 1,
   "why": "Fibre stretch."
  },
  {
   "q": "Preload is mainly determined by:",
   "options": [
    "Aortic pressure",
    "Venous return",
    "Heart rate alone",
    "Coronary flow"
   ],
   "answer": 1,
   "why": "Sets EDV."
  },
  {
   "q": "Sympathetic stimulation increases stroke volume mainly by:",
   "options": [
    "Raising end-systolic volume",
    "Lowering ESV by stronger beats",
    "Lowering end-diastolic volume",
    "Slowing the heart rate"
   ],
   "answer": 1,
   "why": "Contractility."
  },
  {
   "q": "Ejection fraction is:",
   "options": [
    "SV / EDV",
    "EDV / SV",
    "ESV / EDV",
    "CO / HR"
   ],
   "answer": 0,
   "why": "50-75% normally."
  },
  {
   "q": "With EDV 165 mL and ESV 35 mL, stroke volume is:",
   "options": [
    "70 mL",
    "100 mL",
    "130 mL",
    "200 mL"
   ],
   "answer": 2,
   "why": "Both mechanisms."
  },
  {
   "q": "A negative chronotropic influence is:",
   "options": [
    "Noradrenaline",
    "Vagal acetylcholine",
    "Adrenaline",
    "Thyroid hormone"
   ],
   "answer": 1,
   "why": "Slows the SA node."
  },
  {
   "q": "If stroke volume falls, cardiac output is maintained by:",
   "options": [
    "Lower heart rate",
    "Higher heart rate",
    "Lower preload",
    "Vasodilatation only"
   ],
   "answer": 1,
   "why": "Tachycardia."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "n",
   "options": [
    "Combined effect",
    "Resting stroke volume",
    "Frank-Starling mechanism",
    "Cardiac output"
   ],
   "answer": 1,
   "why": "The arrow points to: Resting stroke volume. End-diastolic volume about 135 mL minus end-systolic volume about 65 mL gives a stroke volume of about 70 mL, an ejection fraction near 52%."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "fs",
   "options": [
    "Frank-Starling mechanism",
    "Combined effect",
    "Resting stroke volume",
    "Sympathetic stimulation"
   ],
   "answer": 0,
   "why": "The arrow points to: Frank-Starling mechanism. More venous return stretches the fibres (higher preload, EDV 165 mL); they contract more strongly and eject more (SV 100 mL) with the same ESV."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "sy",
   "options": [
    "Cardiac output",
    "Sympathetic stimulation",
    "Frank-Starling mechanism",
    "Combined effect"
   ],
   "answer": 1,
   "why": "The arrow points to: Sympathetic stimulation. Noradrenaline on β1 receptors increases contractility, so the ventricle empties more (ESV 35 mL) from the same EDV: SV 100 mL."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "both",
   "options": [
    "Frank-Starling mechanism",
    "Sympathetic stimulation",
    "Cardiac output",
    "Combined effect"
   ],
   "answer": 3,
   "why": "The arrow points to: Combined effect. Greater filling plus greater contractility: EDV 165 mL − ESV 35 mL = SV 130 mL, as during exercise."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "co",
   "options": [
    "Combined effect",
    "Resting stroke volume",
    "Cardiac output",
    "Sympathetic stimulation"
   ],
   "answer": 2,
   "why": "The arrow points to: Cardiac output. Stroke volume times heart rate: about 5 L/min at rest, rising to 20-30 L/min during exercise."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Systole and diastole?",
   "back": "Systole: ventricular contraction and ejection. Diastole: relaxation and filling."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Heart sounds?",
   "back": "S1: closure of mitral and tricuspid valves. S2: closure of aortic and pulmonary valves."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Incompetent vs stenotic valve?",
   "back": "Incompetent: fails to close (leak, swishing). Stenotic: fails to open fully (high-pitched sound, click)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "When is each murmur heard?",
   "back": "Systolic: mitral/tricuspid regurgitation, aortic/pulmonary stenosis. Diastolic: mitral stenosis, aortic regurgitation."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Cardiac output formula and values?",
   "back": "CO = HR × SV; ~5 L/min at rest, 20-30 L/min in exercise."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Starling's law?",
   "back": "Greater preload (fibre stretch from venous return, EDV) → stronger contraction → larger SV, up to an optimum."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Extrinsic control of SV?",
   "back": "Sympathetic NE on β1 and thyroid hormones increase contractility, lowering ESV."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Ejection fraction?",
   "back": "EF = SV / EDV; normal 50-75%; rises with contractility."
  },
  {
   "id": "img-n",
   "type": "image",
   "target": "n",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Resting stroke volume. End-diastolic volume about 135 mL minus end-systolic volume about 65 mL gives a stroke volume of about 70 mL, an ejection fraction near 52%."
  },
  {
   "id": "img-fs",
   "type": "image",
   "target": "fs",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Frank-Starling mechanism. More venous return stretches the fibres (higher preload, EDV 165 mL); they contract more strongly and eject more (SV 100 mL) with the same ESV."
  },
  {
   "id": "img-sy",
   "type": "image",
   "target": "sy",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Sympathetic stimulation. Noradrenaline on β1 receptors increases contractility, so the ventricle empties more (ESV 35 mL) from the same EDV: SV 100 mL."
  },
  {
   "id": "img-both",
   "type": "image",
   "target": "both",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Combined effect. Greater filling plus greater contractility: EDV 165 mL − ESV 35 mL = SV 130 mL, as during exercise."
  },
  {
   "id": "img-co",
   "type": "image",
   "target": "co",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Cardiac output. Stroke volume times heart rate: about 5 L/min at rest, rising to 20-30 L/min during exercise."
  }
 ],
 "deeper": [
  {
   "title": "Why a failing heart gets bigger",
   "html": "<p>When contractility falls, the ventricle ejects less, so more blood remains at the end of systole and filling raises the end-diastolic volume. By Starling's law the extra stretch restores some force, and stroke volume is partly maintained, but at the price of a dilated ventricle and a falling ejection fraction. Beyond the optimum length the curve flattens and then drops: more filling only raises pressures, backing blood up into the lungs (breathlessness) or veins (oedema). An EF well below 50% on an echocardiogram is how this is measured in the clinic.</p><p class='src'>Source: the lecture's Frank-Starling curve, over-extension note and ejection fraction.</p>"
  }
 ],
 "resources": [
  {
   "title": "Physiology, Cardiac Cycle (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK459327/",
   "kind": "Book",
   "why": "Pressure-volume events and sounds.",
   "note": ""
  },
  {
   "title": "Physiology, Cardiovascular Hemodynamics (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK470310/",
   "kind": "Book",
   "why": "Preload, afterload, cardiac output.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Physiology, Cardiac Cycle (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK459327/"
  },
  {
   "name": "Physiology, Cardiovascular Hemodynamics (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK470310/"
  }
 ],
 "verified": "26 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physio1-ecg"] = {
 "id": "physio1-ecg",
 "subject": "physio1",
 "group": "Cardiovascular and respiratory physiology",
 "title": "Electrocardiography (ECG)",
 "sourceFile": "Electrical activity of the heart: electrocardiography (Physiology / Biophysics, Pr. I. Ghfir)",
 "sourceUrl": "https://drive.google.com/file/d/1fdlGHG4LIhKjCJ4GIOzaHFracfmOj1mr/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "Cardiac electrophysiology",
   "html": "<p>Cardiac cells show excitability, conduction, automaticity and contractility, which produce electrical fields. Two tissues: <strong>nodal tissue</strong> (SA node, AV node, bundle of His and branches, Purkinje fibres), which generates and conducts the impulse, and <strong>myocardium</strong>, which contracts. The impulse starts in the SA node, spreads through both atria, converges on the AV node, then descends the His bundle and Purkinje fibres to the apex and both ventricles simultaneously.</p><p>At rest the membrane is <strong>polarised</strong> (inside negative, about −90 mV in myocardial cells). The <strong>action potential</strong> of a myocardial cell: <strong>phase 0</strong> fast depolarisation to about +30 mV (Na⁺ entry); <strong>phase 1</strong> early repolarisation; <strong>phase 2</strong> <strong>plateau</strong> (Ca²⁺ entry balancing K⁺ exit); <strong>phase 3</strong> repolarisation (K⁺ exit); <strong>phase 4</strong> resting potential.</p>"
  },
  {
   "id": "s1",
   "title": "Physical basis: the heart as a dipole",
   "html": "<p>Seen from distant electrodes, the heart behaves like an <strong>electric dipole</strong>. The potential at a point P is V = M·u / (4πεr²), proportional to the projection of the <strong>dipole moment M</strong> (q·d) on the line to P. A membrane or group of fibres at a depolarisation front acts as an <strong>electric sheet</strong>, i.e. a dipole pointing from the depolarised to the resting region. Resting or fully depolarised fibres give no potential difference; only a moving front does. Rule: <strong>an electrode that sees depolarisation coming records a positive deflection; one that sees it moving away records a negative deflection</strong>.</p><p>The overall dipole (the cardiac vector) changes in size and direction during the beat; its tip traces the <strong>vectocardiogram</strong>, and each ECG lead records its projection on that lead's axis.</p>"
  },
  {
   "id": "s2",
   "title": "Recording: 12 leads",
   "html": "<p>Standard paper speed <strong>25 mm/s</strong> (1 mm = 0.04 s) and gain <strong>10 mm/mV</strong> (1 mm = 0.1 mV). <strong>Frontal (limb) leads</strong>: augmented unipolar <strong>aVR</strong> (red, right wrist), <strong>aVL</strong> (yellow, left wrist), <strong>aVF</strong> (green, left ankle), black on the right ankle as ground; bipolar <strong>Einthoven</strong> leads <strong>DI</strong> (right arm-left arm), <strong>DII</strong> (right arm-left leg), <strong>DIII</strong> (left arm-left leg), with <strong>DII = DI + DIII</strong>. Together they form Bailey's six-axis system (30° apart), used to find the electrical axis.</p><p><strong>Precordial leads</strong> (horizontal plane): <strong>V1</strong> 4th right intercostal space at the sternal edge; <strong>V2</strong> 4th left intercostal space at the sternal edge; <strong>V4</strong> 5th left space, midclavicular line; <strong>V3</strong> between V2 and V4; <strong>V5</strong> anterior axillary line; <strong>V6</strong> mid-axillary line (same level as V4).</p>"
  },
  {
   "id": "s3",
   "title": "Reading an ECG",
   "html": "<p>Read methodically: leads DI to V6, each complex from P to T, and never over-interpret a single lead. <strong>Rhythm</strong>: regular R-R intervals and <strong>sinus</strong> (each QRS preceded by a P). <strong>Rate</strong>: 60-100/min; &gt; 100 tachycardia, &lt; 60 bradycardia (normal in athletes). <strong>Axis</strong>: normally 0° to +90°; left deviation suggests left ventricular overload, right deviation (beyond +90°) right ventricular overload.</p><p><strong>P</strong> 0.08-0.10 s, &lt; 2.5 mm (longer suggests left atrial enlargement, taller right atrial). <strong>PR</strong> 0.12-0.20 s (&gt; 0.20 s: first-degree AV block). <strong>QRS</strong> about 0.06-0.08 s in the lecture; R(DI) + S(DIII) &lt; 30 mm and R(V5/V6) + S(V1/V2) &lt; 35 mm, larger values suggesting left ventricular hypertrophy. <strong>Q wave</strong> normal if &lt; 0.04 s and &lt; 1/3 of R; a wider, deeper Q in several leads is a <strong>necrotic Q wave</strong> (old infarct). <strong>ST</strong> isoelectric; elevation suggests ischaemia or injury. <strong>QT</strong> 0.35-0.44 s. <strong>T</strong> positive except aVR, V1, V2, DIII; tall, peaked, symmetrical T waves in contiguous leads suggest subendocardial ischaemia.</p><p><strong>Territories</strong>: DII, DIII, aVF inferior; V1-V3 anteroseptal; V1-V5 anterior; V3-V4 apical; DI, aVL, V5, V6 lateral.</p>"
  }
 ],
 "exam": [
  "Nodal tissue conducts; myocardium contracts.",
  "Myocardial AP: phase 0 Na⁺ in, 2 plateau, 3 K⁺ out, 4 rest (−90 mV).",
  "Heart = dipole; electrode facing an approaching front → positive deflection.",
  "25 mm/s (1 mm = 0.04 s); 10 mm/mV.",
  "Limb leads: DI, DII, DIII (Einthoven; DII = DI + DIII), aVR, aVL, aVF.",
  "V1/V2: 4th space at the sternum; V4: 5th space midclavicular; V6: mid-axillary.",
  "P = atria; PR 0.12-0.20 s; QRS = ventricles; T = ventricular repolarisation; QT 0.35-0.44 s.",
  "Normal rate 60-100; axis 0 to +90°.",
  "PR > 0.20 s: first-degree AV block; necrotic Q: old infarct; ST elevation: ischaemia.",
  "Territories: inferior DII/DIII/aVF; anteroseptal V1-V3; lateral DI/aVL/V5/V6."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Waves of the normal ECG",
   "caption": "Timings at 25 mm/s (1 mm = 0.04 s). Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"250\" y1=\"70\" x2=\"270\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"490\" y1=\"70\" x2=\"510\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"627.5\" y1=\"100\" x2=\"627.5\" y2=\"170\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"510\" y1=\"200\" x2=\"490\" y2=\"200\"/>",
   "parts": {
    "p": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"15\" y=\"40\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "P wave: atrial",
      "depolarisation, 0.08-0.10 s"
     ],
     "lx": 132.5,
     "ly": 68.0
    },
    "pr": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"270\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "PR interval: AV conduction",
      "0.12-0.20 s"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "qrs": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"510\" y=\"40\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "QRS: ventricular",
      "depolarisation"
     ],
     "lx": 627.5,
     "ly": 68.0
    },
    "st": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"510\" y=\"170\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "ST segment: isoelectric",
      "(ventricles depolarised)"
     ],
     "lx": 627.5,
     "ly": 198.0
    },
    "t": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"270\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "T wave: ventricular",
      "repolarisation"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "qt": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"15\" y=\"170\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "QT: 0.35-0.44 s",
      "(whole ventricular event)"
     ],
     "lx": 132.5,
     "ly": 198.0
    }
   },
   "arrows": {
    "p": [
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
    "pr": [
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
    "qrs": [
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
    "t": [
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
    "qt": [
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
   "q": "The P wave represents:",
   "options": [
    "Ventricular depolarisation",
    "Atrial depolarisation",
    "Ventricular repolarisation",
    "AV conduction"
   ],
   "answer": 1,
   "why": "Thin atrial wall → small wave."
  },
  {
   "q": "The QRS complex represents:",
   "options": [
    "Atrial depolarisation",
    "Ventricular depolarisation",
    "Ventricular repolarisation",
    "Atrial repolarisation"
   ],
   "answer": 1,
   "why": "Atrial repolarisation is hidden in it."
  },
  {
   "q": "The T wave represents:",
   "options": [
    "Atrial depolarisation",
    "Ventricular repolarisation",
    "AV delay",
    "Septal depolarisation"
   ],
   "answer": 1,
   "why": "Normally positive."
  },
  {
   "q": "The normal PR interval is:",
   "options": [
    "0.04-0.08 s",
    "0.12-0.20 s",
    "0.35-0.44 s",
    "0.5-1 s"
   ],
   "answer": 1,
   "why": "AV conduction."
  },
  {
   "q": "A PR interval above 0.20 s suggests:",
   "options": [
    "Atrial fibrillation",
    "First-degree AV block",
    "Ventricular hypertrophy",
    "Hyperkalaemia"
   ],
   "answer": 1,
   "why": "Slow AV conduction."
  },
  {
   "q": "At 25 mm/s, one small square (1 mm) equals:",
   "options": [
    "0.02 s",
    "0.04 s",
    "0.1 s",
    "0.2 s"
   ],
   "answer": 1,
   "why": "Five squares = 0.2 s."
  },
  {
   "q": "Einthoven's relation is:",
   "options": [
    "DI = DII + DIII",
    "DII = DI + DIII",
    "DIII = DI + DII",
    "aVR = aVL + aVF"
   ],
   "answer": 1,
   "why": "Bipolar limb leads."
  },
  {
   "q": "Lead DII measures between:",
   "options": [
    "Right arm and left arm",
    "Right arm and left leg",
    "Left arm and left leg",
    "Chest and back"
   ],
   "answer": 1,
   "why": "Einthoven."
  },
  {
   "q": "V1 is placed at the:",
   "options": [
    "4th right space, sternal edge",
    "5th left space, midclavicular",
    "5th left space, mid-axillary",
    "2nd right space, sternal edge"
   ],
   "answer": 0,
   "why": "V2 on the left."
  },
  {
   "q": "An electrode that sees depolarisation approaching records:",
   "options": [
    "A negative deflection",
    "A positive deflection",
    "Nothing",
    "A flat line"
   ],
   "answer": 1,
   "why": "Dipole rule."
  },
  {
   "q": "Phase 0 of the myocardial action potential is due to:",
   "options": [
    "K⁺ exit",
    "Na⁺ entry",
    "Cl⁻ entry",
    "Ca²⁺ exit"
   ],
   "answer": 1,
   "why": "Fast depolarisation."
  },
  {
   "q": "The plateau (phase 2) is characteristic of:",
   "options": [
    "Nerve fibres",
    "Myocardial cells",
    "Skeletal muscle",
    "Red cells"
   ],
   "answer": 1,
   "why": "Prolongs contraction."
  },
  {
   "q": "Normal resting heart rate in adults is:",
   "options": [
    "40-60/min",
    "60-100/min",
    "100-140/min",
    "30-50/min"
   ],
   "answer": 1,
   "why": "Tachycardia > 100."
  },
  {
   "q": "The inferior territory is seen in leads:",
   "options": [
    "V1-V3",
    "DII, DIII, aVF",
    "DI, aVL",
    "V5, V6 only"
   ],
   "answer": 1,
   "why": "Diaphragmatic wall."
  },
  {
   "q": "A necrotic Q wave suggests:",
   "options": [
    "Acute pericarditis",
    "An old myocardial infarction",
    "Normal septum",
    "Hyperthyroidism"
   ],
   "answer": 1,
   "why": "> 0.04 s, > 1/3 of R."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "p",
   "options": [
    "PR interval",
    "T wave",
    "P wave",
    "QT interval"
   ],
   "answer": 2,
   "why": "The arrow points to: P wave. Atrial depolarisation spreading from the SA node; small because the atrial wall is thin; normally 0.08-0.10 s and under 2.5 mm."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pr",
   "options": [
    "QRS complex",
    "T wave",
    "PR interval",
    "QT interval"
   ],
   "answer": 2,
   "why": "The arrow points to: PR interval. Atrioventricular conduction time from the start of P to the start of QRS, 0.12-0.20 s; longer suggests first-degree AV block."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "qrs",
   "options": [
    "QT interval",
    "T wave",
    "QRS complex",
    "P wave"
   ],
   "answer": 2,
   "why": "The arrow points to: QRS complex. Ventricular depolarisation starting in the left side of the septum; Q is the first negative, R the first positive and S the next negative deflection."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "st",
   "options": [
    "T wave",
    "P wave",
    "ST segment",
    "PR interval"
   ],
   "answer": 2,
   "why": "The arrow points to: ST segment. Isoelectric while the ventricles are fully depolarised; elevation can signal myocardial ischaemia or injury."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "t",
   "options": [
    "T wave",
    "PR interval",
    "QRS complex",
    "P wave"
   ],
   "answer": 0,
   "why": "The arrow points to: T wave. Ventricular repolarisation; normally positive except in aVR, V1, V2 and sometimes DIII."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "qt",
   "options": [
    "T wave",
    "PR interval",
    "QRS complex",
    "QT interval"
   ],
   "answer": 3,
   "why": "The arrow points to: QT interval. From the start of QRS to the end of T, 0.35-0.44 s: the whole of ventricular depolarisation and repolarisation."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Two types of cardiac tissue?",
   "back": "Nodal tissue (SA, AV, His, Purkinje: generates and conducts) and myocardium (contracts)."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Phases of the myocardial action potential?",
   "back": "0: Na⁺ in; 1: early repolarisation; 2: plateau; 3: K⁺ out; 4: rest (−90 mV)."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Dipole rule for deflections?",
   "back": "Depolarisation moving towards the electrode → positive; moving away → negative; no moving front → isoelectric."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Paper speed and gain?",
   "back": "25 mm/s (1 mm = 0.04 s); 10 mm per mV (1 mm = 0.1 mV)."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "The 12 leads?",
   "back": "Limb: DI, DII, DIII, aVR, aVL, aVF (frontal). Chest: V1-V6 (horizontal)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Normal intervals?",
   "back": "P 0.08-0.10 s; PR 0.12-0.20 s; QRS ~0.06-0.08 s (lecture); QT 0.35-0.44 s."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Signs of LVH?",
   "back": "R(DI) + S(DIII) ≥ 30 mm or R(V5/V6) + S(V1/V2) ≥ 35 mm; left axis deviation."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "ECG territories?",
   "back": "Inferior: DII, DIII, aVF. Anteroseptal: V1-V3. Anterior: V1-V5. Apical: V3-V4. Lateral: DI, aVL, V5, V6."
  },
  {
   "id": "img-p",
   "type": "image",
   "target": "p",
   "front": "What is at the arrow, and why does it matter?",
   "back": "P wave. Atrial depolarisation spreading from the SA node; small because the atrial wall is thin; normally 0.08-0.10 s and under 2.5 mm."
  },
  {
   "id": "img-pr",
   "type": "image",
   "target": "pr",
   "front": "What is at the arrow, and why does it matter?",
   "back": "PR interval. Atrioventricular conduction time from the start of P to the start of QRS, 0.12-0.20 s; longer suggests first-degree AV block."
  },
  {
   "id": "img-qrs",
   "type": "image",
   "target": "qrs",
   "front": "What is at the arrow, and why does it matter?",
   "back": "QRS complex. Ventricular depolarisation starting in the left side of the septum; Q is the first negative, R the first positive and S the next negative deflection."
  },
  {
   "id": "img-st",
   "type": "image",
   "target": "st",
   "front": "What is at the arrow, and why does it matter?",
   "back": "ST segment. Isoelectric while the ventricles are fully depolarised; elevation can signal myocardial ischaemia or injury."
  },
  {
   "id": "img-t",
   "type": "image",
   "target": "t",
   "front": "What is at the arrow, and why does it matter?",
   "back": "T wave. Ventricular repolarisation; normally positive except in aVR, V1, V2 and sometimes DIII."
  },
  {
   "id": "img-qt",
   "type": "image",
   "target": "qt",
   "front": "What is at the arrow, and why does it matter?",
   "back": "QT interval. From the start of QRS to the end of T, 0.35-0.44 s: the whole of ventricular depolarisation and repolarisation."
  }
 ],
 "deeper": [
  {
   "title": "Counting the rate in five seconds",
   "html": "<p>At 25 mm/s, one large square (5 mm) lasts 0.2 s, so 300 large squares fill a minute. The heart rate is therefore <strong>300 divided by the number of large squares between two R waves</strong>: one square = 300/min, two = 150, three = 100, four = 75, five = 60, six = 50. Memorising '300-150-100-75-60-50' gives an instant rate estimate for regular rhythms; for irregular rhythms such as atrial fibrillation, count the QRS complexes in 10 seconds (a standard strip) and multiply by 6.</p><p class='src'>Source: the lecture's paper speed (1 mm = 0.04 s) and normal rate range.</p>"
  }
 ],
 "resources": [
  {
   "title": "Physiology, Cardiac (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK526089/",
   "kind": "Book",
   "why": "Action potentials and conduction.",
   "note": ""
  },
  {
   "title": "ECG T Wave (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK538264/",
   "kind": "Book",
   "why": "Normal and abnormal T waves.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Physiology, Cardiac (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK526089/"
  },
  {
   "name": "ECG T Wave (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK538264/"
  }
 ],
 "verified": "26 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physio1-respiratory"] = {
 "id": "physio1-respiratory",
 "subject": "physio1",
 "group": "Cardiovascular and respiratory physiology",
 "title": "Introduction to the respiratory system",
 "sourceFile": "Introduction to the respiratory system (Physiology, Pr. A. T. Dinh-Xuan)",
 "sourceUrl": "https://drive.google.com/file/d/1Y9onSt9fJWIR2bX9HzCGSb-UXPqwz5HG/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "Roles of the lung and gas exchange",
   "html": "<p>The respiratory system includes the nose, pharynx, larynx, trachea, bronchi, lungs, the <strong>diaphragm</strong> and the <strong>rib cage</strong>. The lung has three roles: <strong>gas exchange</strong>, <strong>metabolism</strong> (activation or inactivation of molecules, e.g. converting angiotensin I to II) and a <strong>blood reservoir</strong>.</p><p>Pulmonary gas exchange concerns <strong>O₂ and CO₂</strong>, between <strong>air</strong> (the O₂ provider and CO₂ remover) and <strong>blood</strong>, across the <strong>alveolar-capillary membrane</strong>, by <strong>passive diffusion</strong>. <strong>Fick's law</strong>: the transfer rate is proportional to the gas's <strong>solubility</strong>, the <strong>surface area</strong> and the <strong>partial pressure difference</strong>, and inversely proportional to <strong>thickness</strong> and molecular weight.</p>"
  },
  {
   "id": "s1",
   "title": "Partial pressures",
   "html": "<p><strong>Inspired O₂</strong>: PIO₂ = (P<sub>atm</sub> − P<sub>H₂O</sub>) × FIO₂ = (760 − 47) × 0.21 ≈ <strong>150 mmHg</strong>. <strong>Alveolar</strong>: PAO₂ ≈ <strong>100</strong>, PACO₂ ≈ <strong>40 mmHg</strong> (inspired CO₂ ≈ 0). <strong>Mixed venous</strong>: PvO₂ ≈ <strong>40</strong>, PvCO₂ ≈ <strong>45 mmHg</strong>. Gradients drive O₂ from alveoli to blood and CO₂ from blood to alveoli; because CO₂ equilibrates fully, <strong>arterial PaCO₂ ≈ alveolar PACO₂</strong>.</p><p>Worked examples from the lecture: at 5,500 m (P<sub>atm</sub> ≈ 360 mmHg) PIO₂ ≈ (360 − 47) × 0.21 ≈ <strong>65 mmHg</strong>; on Everest (P<sub>atm</sub> ≈ 250 mmHg) PIO₂ ≈ <strong>42 mmHg</strong>; a patient with PaCO₂ 50 mmHg has an alveolar PCO₂ of about <strong>50 mmHg</strong>.</p>"
  },
  {
   "id": "s2",
   "title": "Conducting and respiratory zones",
   "html": "<p>Air path: nasal cavity → pharynx → larynx (glottis, vocal cords) → trachea → main, lobar, segmental bronchi → terminal bronchioles → respiratory bronchioles → alveolar ducts and sacs. The <strong>conducting zone</strong> (nose to terminal bronchioles) transports, warms, humidifies, filters and cleans the air (mucus traps particles, cilia move it out) and produces voice; it does <strong>not</strong> exchange gas: this is the <strong>anatomical dead space</strong>. The <strong>respiratory zone</strong> (respiratory bronchioles, alveolar ducts, sacs, alveoli) is where exchange occurs. Upper (extrathoracic) airways: nose, nasopharynx, larynx; lower (intrathoracic): trachea and bronchi.</p>"
  },
  {
   "id": "s3",
   "title": "Ventilation and perfusion",
   "html": "<p>Tidal volume divides into dead space and alveolar volume: <strong>VT = VD + VA</strong>, e.g. 500 = 150 + 350 mL. Multiplying by the respiratory rate (15/min): <strong>minute ventilation VE = 7.5 L/min</strong>, of which <strong>alveolar ventilation VA = 5.25 L/min</strong> takes part in exchange. <strong>Pulmonary blood flow</strong> equals <strong>cardiac output</strong>: 70 mL × 70/min ≈ <strong>4.9 L/min</strong>. The overall <strong>ventilation/perfusion ratio VA/Q ≈ 1</strong>.</p>"
  }
 ],
 "exam": [
  "Lung roles: gas exchange, metabolism (angiotensin), blood reservoir.",
  "Exchange of O₂/CO₂ by passive diffusion across the alveolar-capillary membrane.",
  "Fick: ∝ area, solubility, ΔP; ∝ 1/thickness, 1/√MW.",
  "PIO₂ = (760 − 47) × 0.21 ≈ 150 mmHg.",
  "PAO₂ ≈ 100, PACO₂ ≈ 40; PvO₂ ≈ 40, PvCO₂ ≈ 45 mmHg.",
  "PaCO₂ ≈ PACO₂.",
  "Conducting zone (dead space) vs respiratory zone (exchange).",
  "VT = VD + VA (500 = 150 + 350 mL).",
  "VE = 7.5 L/min; VA = 5.25 L/min; Q = 4.9 L/min; VA/Q ≈ 1."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "The oxygen cascade",
   "caption": "Partial pressures at sea level (mmHg). Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"250\" y1=\"70\" x2=\"270\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"490\" y1=\"70\" x2=\"510\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"170\" x2=\"380\" y2=\"100\"/>",
   "parts": {
    "pi": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"15\" y=\"40\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Inspired PIO₂ = (760 − 47)",
      "× 0.21 ≈ 150"
     ],
     "lx": 132.5,
     "ly": 68.0
    },
    "pa": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"270\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Alveolar: PAO₂ ≈ 100,",
      "PACO₂ ≈ 40"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "art": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"510\" y=\"40\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Arterial blood: PaO₂ ≈ 100,",
      "PaCO₂ ≈ 40"
     ],
     "lx": 627.5,
     "ly": 68.0
    },
    "ven": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"270\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Mixed venous: PvO₂ ≈ 40,",
      "PvCO₂ ≈ 45"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "fick": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"15\" y=\"290\" width=\"420\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Fick: diffusion ∝ area × solubility × ΔP",
      "/ (thickness × √MW)"
     ],
     "lx": 225.0,
     "ly": 318.0
    }
   },
   "arrows": {
    "pi": [
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
    "pa": [
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
    "art": [
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
    "ven": [
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
    "fick": [
     {
      "t": [
       15.0,
       298.0
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
   "q": "Inspired PO₂ at sea level is about:",
   "options": [
    "100 mmHg",
    "150 mmHg",
    "160 mmHg",
    "40 mmHg"
   ],
   "answer": 1,
   "why": "(760 − 47) × 0.21."
  },
  {
   "q": "The 47 mmHg subtracted from barometric pressure is:",
   "options": [
    "Alveolar CO₂ pressure",
    "Water vapour at 37 °C",
    "Nitrogen partial pressure",
    "Venous O₂ pressure"
   ],
   "answer": 1,
   "why": "Air is humidified."
  },
  {
   "q": "Normal alveolar PO₂ is about:",
   "options": [
    "40 mmHg",
    "100 mmHg",
    "150 mmHg",
    "760 mmHg"
   ],
   "answer": 1,
   "why": "PACO₂ ≈ 40."
  },
  {
   "q": "Mixed venous PCO₂ is about:",
   "options": [
    "0 mmHg",
    "40 mmHg",
    "45 mmHg",
    "100 mmHg"
   ],
   "answer": 2,
   "why": "PvO₂ ≈ 40."
  },
  {
   "q": "At 5,500 m with Patm 360 mmHg, PIO₂ is about:",
   "options": [
    "150 mmHg",
    "100 mmHg",
    "65 mmHg",
    "20 mmHg"
   ],
   "answer": 2,
   "why": "(360 − 47) × 0.21."
  },
  {
   "q": "On Everest (Patm 250 mmHg), PIO₂ is about:",
   "options": [
    "100 mmHg",
    "65 mmHg",
    "42 mmHg",
    "20 mmHg"
   ],
   "answer": 2,
   "why": "(250 − 47) × 0.21."
  },
  {
   "q": "A patient with PaCO₂ 50 mmHg has alveolar PCO₂ about:",
   "options": [
    "40 mmHg",
    "45 mmHg",
    "50 mmHg",
    "55 mmHg"
   ],
   "answer": 2,
   "why": "CO₂ equilibrates."
  },
  {
   "q": "By Fick's law, gas diffusion is inversely proportional to:",
   "options": [
    "Surface area",
    "Membrane thickness",
    "Solubility",
    "Pressure gradient"
   ],
   "answer": 1,
   "why": "Thicker = slower."
  },
  {
   "q": "Which is part of the respiratory zone?",
   "options": [
    "Trachea",
    "Terminal bronchiole",
    "Respiratory bronchiole",
    "Main bronchus"
   ],
   "answer": 2,
   "why": "Gas exchange starts."
  },
  {
   "q": "The conducting zone does NOT:",
   "options": [
    "Warm the air",
    "Exchange gas",
    "Filter the air",
    "Humidify the air"
   ],
   "answer": 1,
   "why": "Anatomical dead space."
  },
  {
   "q": "With VT 500 mL and VD 150 mL, alveolar volume per breath is:",
   "options": [
    "650 mL",
    "350 mL",
    "150 mL",
    "500 mL"
   ],
   "answer": 1,
   "why": "VT = VD + VA."
  },
  {
   "q": "With VT 500 mL and 15 breaths/min, minute ventilation is:",
   "options": [
    "5.25 L/min",
    "7.5 L/min",
    "10 L/min",
    "4.9 L/min"
   ],
   "answer": 1,
   "why": "500 × 15."
  },
  {
   "q": "Alveolar ventilation in the lecture example is:",
   "options": [
    "7.5 L/min",
    "5.25 L/min",
    "2.25 L/min",
    "4.9 L/min"
   ],
   "answer": 1,
   "why": "350 × 15."
  },
  {
   "q": "Pulmonary blood flow equals:",
   "options": [
    "Alveolar ventilation",
    "Cardiac output",
    "Minute ventilation",
    "Dead space ventilation"
   ],
   "answer": 1,
   "why": "≈ 4.9 L/min."
  },
  {
   "q": "The overall ventilation/perfusion ratio is about:",
   "options": [
    "0.1",
    "1",
    "5",
    "10"
   ],
   "answer": 1,
   "why": "5.25/4.9."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pi",
   "options": [
    "Mixed venous blood",
    "Alveolar gas",
    "Fick's law of diffusion",
    "Inspired oxygen pressure"
   ],
   "answer": 3,
   "why": "The arrow points to: Inspired oxygen pressure. Humidified inspired air: PIO₂ = (barometric pressure − water vapour 47 mmHg) × FIO₂ 0.21 ≈ 150 mmHg at sea level."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pa",
   "options": [
    "Inspired oxygen pressure",
    "Arterial blood",
    "Mixed venous blood",
    "Alveolar gas"
   ],
   "answer": 3,
   "why": "The arrow points to: Alveolar gas. Mixing with CO₂ from the blood lowers alveolar PO₂ to about 100 mmHg and raises PCO₂ to about 40 mmHg."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "art",
   "options": [
    "Arterial blood",
    "Mixed venous blood",
    "Fick's law of diffusion",
    "Alveolar gas"
   ],
   "answer": 0,
   "why": "The arrow points to: Arterial blood. Blood leaving the lungs equilibrates with alveolar gas: PaO₂ about 100 and PaCO₂ about 40 mmHg."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ven",
   "options": [
    "Mixed venous blood",
    "Inspired oxygen pressure",
    "Alveolar gas",
    "Arterial blood"
   ],
   "answer": 0,
   "why": "The arrow points to: Mixed venous blood. Returning from the tissues with PO₂ about 40 and PCO₂ about 45 mmHg; the gradients drive O₂ into and CO₂ out of the blood."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "fick",
   "options": [
    "Inspired oxygen pressure",
    "Arterial blood",
    "Fick's law of diffusion",
    "Alveolar gas"
   ],
   "answer": 2,
   "why": "The arrow points to: Fick's law of diffusion. Gas transfer is proportional to surface area, solubility and partial pressure difference, and inversely proportional to membrane thickness and (the square root of) molecular weight."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Three roles of the lung?",
   "back": "Gas exchange, metabolism (e.g. angiotensin conversion), blood reservoir."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Fick's law?",
   "back": "Diffusion ∝ surface area × solubility × pressure difference / (thickness × √molecular weight)."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Inspired PO₂ formula?",
   "back": "PIO₂ = (Patm − 47) × FIO₂ ≈ (760 − 47) × 0.21 ≈ 150 mmHg."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Normal alveolar and venous pressures?",
   "back": "PAO₂ ≈ 100, PACO₂ ≈ 40; PvO₂ ≈ 40, PvCO₂ ≈ 45 mmHg."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Conducting vs respiratory zone?",
   "back": "Conducting: nose to terminal bronchioles, dead space, conditions air. Respiratory: respiratory bronchioles to alveoli, exchange."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "VT = ?",
   "back": "VT = VD + VA (500 = 150 + 350 mL)."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Minute vs alveolar ventilation?",
   "back": "VE = VT × RR = 7.5 L/min; VA = (VT − VD) × RR = 5.25 L/min."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Global V/Q?",
   "back": "VA ≈ 5.25 L/min over Q ≈ 4.9 L/min → ≈ 1."
  },
  {
   "id": "img-pi",
   "type": "image",
   "target": "pi",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Inspired oxygen pressure. Humidified inspired air: PIO₂ = (barometric pressure − water vapour 47 mmHg) × FIO₂ 0.21 ≈ 150 mmHg at sea level."
  },
  {
   "id": "img-pa",
   "type": "image",
   "target": "pa",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Alveolar gas. Mixing with CO₂ from the blood lowers alveolar PO₂ to about 100 mmHg and raises PCO₂ to about 40 mmHg."
  },
  {
   "id": "img-art",
   "type": "image",
   "target": "art",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Arterial blood. Blood leaving the lungs equilibrates with alveolar gas: PaO₂ about 100 and PaCO₂ about 40 mmHg."
  },
  {
   "id": "img-ven",
   "type": "image",
   "target": "ven",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Mixed venous blood. Returning from the tissues with PO₂ about 40 and PCO₂ about 45 mmHg; the gradients drive O₂ into and CO₂ out of the blood."
  },
  {
   "id": "img-fick",
   "type": "image",
   "target": "fick",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Fick's law of diffusion. Gas transfer is proportional to surface area, solubility and partial pressure difference, and inversely proportional to membrane thickness and (the square root of) molecular weight."
  }
 ],
 "deeper": [
  {
   "title": "Why shallow fast breathing is inefficient",
   "html": "<p>The anatomical dead space (about 150 mL) is ventilated on every breath whatever the tidal volume. Breathing 500 mL 15 times a minute gives 5.25 L/min of alveolar ventilation. Breathing 250 mL 30 times a minute gives the same minute ventilation (7.5 L/min), but only 100 mL per breath reaches the alveoli: 3 L/min. That is why a patient taking rapid shallow breaths (pain, fatigue, drugs) can retain CO₂ even though the breathing looks busy, and why deep, slower breaths are more efficient.</p><p class='src'>Source: the lecture's VT = VD + VA example.</p>"
  }
 ],
 "resources": [
  {
   "title": "Physiology, Pulmonary Ventilation and Perfusion (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK539907/",
   "kind": "Book",
   "why": "Dead space, V/Q and gas exchange.",
   "note": ""
  },
  {
   "title": "Alveolar Gas Equation (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK482268/",
   "kind": "Book",
   "why": "Partial pressures and altitude.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Physiology, Pulmonary Ventilation and Perfusion (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK539907/"
  },
  {
   "name": "Alveolar Gas Equation (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK482268/"
  }
 ],
 "verified": "26 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physio1-lung-volumes"] = {
 "id": "physio1-lung-volumes",
 "subject": "physio1",
 "group": "Cardiovascular and respiratory physiology",
 "title": "Lung volumes and capacities",
 "sourceFile": "Lung volumes and capacities (mechanics of breathing) (Physiology, Pr. A. T. Dinh-Xuan)",
 "sourceUrl": "https://drive.google.com/file/d/1HZkRGtoeE3i1ou1alRmndHB9rVKuJkHJ/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "Mechanics of breathing",
   "html": "<p>Breathing, or <strong>pulmonary ventilation</strong>, has two phases: <strong>inspiration</strong> and <strong>expiration</strong>, achieved by changing thoracic and lung volume. The thorax must be rigid enough to protect and flexible enough to act as <strong>bellows</strong>. At rest, intrapulmonary pressure equals atmospheric pressure (760 mmHg) and intrapleural pressure is lower (about 756 mmHg). In <strong>inspiration</strong>, the diaphragm and inspiratory muscles enlarge the thorax, intrapleural pressure falls (about 754), alveolar pressure drops below atmospheric (about 757) and air flows in. In <strong>expiration</strong>, the thorax recoils, alveolar pressure rises above atmospheric (about 763) and air flows out.</p>"
  },
  {
   "id": "s1",
   "title": "Volumes",
   "html": "<p>A <strong>spirometer</strong> (a floating bell over water; expiration lifts the bell) records the <strong>spirogram</strong>. Four volumes: <strong>tidal volume (VT)</strong>, air moved in quiet breathing (about 500 mL); <strong>inspiratory reserve volume (IRV)</strong>, extra air that can be forced in after a tidal inspiration; <strong>expiratory reserve volume (ERV)</strong>, extra air that can be forced out after a tidal expiration; <strong>residual volume (RV)</strong>, air left after a maximal expiration, which spirometry alone cannot measure.</p>"
  },
  {
   "id": "s2",
   "title": "Capacities",
   "html": "<p><strong>Vital capacity (VC)</strong> = IRV + VT + ERV: the maximal volume exhaled after a maximal inhalation. <strong>Total lung capacity (TLC)</strong> = VC + RV: all the gas after a maximal inspiration (about 6 L). <strong>Inspiratory capacity (IC)</strong> = IRV + VT: what can be inspired after a normal expiration. <strong>Functional residual capacity (FRC)</strong> = ERV + RV: gas left after a normal expiration. <strong>Minute volume</strong> = VT × breaths per minute (about 6-7.5 L/min). Recall the lecture's example: VT 500 mL = VD 150 + VA 350 mL; at 15/min VE = 7.5 L/min and VA = 5.25 L/min, while pulmonary blood flow equals cardiac output (≈ 4.9 L/min), so VA/Q ≈ 1.</p>"
  },
  {
   "id": "s3",
   "title": "Obstructive disease and air trapping",
   "html": "<p>In <strong>obstructive lung disease</strong> (COPD, asthma) narrowed airways close early in expiration, so air is <strong>trapped</strong>: RV and FRC rise and the lung becomes <strong>hyperinflated</strong> (distended), while VC may fall. <strong>COPD</strong> combines chronic bronchitis and emphysema; about <strong>80% of cases are due to smoking</strong>; it affects 5-10% of people over 45 in the lecture's figures, and in 2015 it caused about 3.2 million deaths worldwide. Pulmonary vascular disease (e.g. pulmonary embolism) affects perfusion rather than volumes.</p>"
  }
 ],
 "exam": [
  "Ventilation by changing thoracic volume; pressure gradients drive air.",
  "Inspiration: alveolar pressure < atmospheric; expiration: >.",
  "Volumes: VT (~500 mL), IRV, ERV, RV.",
  "RV cannot be measured by simple spirometry.",
  "VC = IRV + VT + ERV.",
  "TLC = VC + RV; IC = IRV + VT; FRC = ERV + RV.",
  "Minute volume = VT × RR (~6-7.5 L/min).",
  "Obstruction (COPD, asthma) → air trapping: ↑ RV, ↑ FRC, hyperinflation.",
  "COPD = chronic bronchitis + emphysema; ~80% due to smoking."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Lung volumes and capacities",
   "caption": "Four volumes combine into four capacities. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"220\" y1=\"85\" x2=\"315\" y2=\"90\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"235\" y1=\"197.5\" x2=\"300\" y2=\"230\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"235\" y1=\"267.5\" x2=\"300\" y2=\"230\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"510\" y1=\"117.5\" x2=\"560\" y2=\"117.5\"/>",
   "parts": {
    "irv": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"15\" y=\"30\" width=\"220\" height=\"55\" rx=\"10\"/>",
     "label": [
      "IRV: extra air in",
      "after a normal breath"
     ],
     "lx": 125.0,
     "ly": 55.5
    },
    "vt": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"15\" y=\"100\" width=\"220\" height=\"55\" rx=\"10\"/>",
     "label": [
      "VT: tidal volume",
      "(~500 mL)"
     ],
     "lx": 125.0,
     "ly": 125.5
    },
    "erv": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"15\" y=\"170\" width=\"220\" height=\"55\" rx=\"10\"/>",
     "label": [
      "ERV: extra air out",
      "after a normal breath"
     ],
     "lx": 125.0,
     "ly": 195.5
    },
    "rv": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"15\" y=\"240\" width=\"220\" height=\"55\" rx=\"10\"/>",
     "label": [
      "RV: air left after",
      "maximal expiration"
     ],
     "lx": 125.0,
     "ly": 265.5
    },
    "vc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"300\" y=\"90\" width=\"210\" height=\"55\" rx=\"10\"/>",
     "label": [
      "VC = IRV + VT + ERV"
     ],
     "lx": 405.0,
     "ly": 123.5
    },
    "frc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"300\" y=\"200\" width=\"210\" height=\"60\" rx=\"10\"/>",
     "label": [
      "FRC = ERV + RV",
      "(after normal exp.)"
     ],
     "lx": 405.0,
     "ly": 228.0
    },
    "tlc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9ecec\" x=\"560\" y=\"90\" width=\"185\" height=\"55\" rx=\"10\"/>",
     "label": [
      "TLC = VC + RV"
     ],
     "lx": 652.5,
     "ly": 123.5
    },
    "ic": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"560\" y=\"200\" width=\"185\" height=\"55\" rx=\"10\"/>",
     "label": [
      "IC = IRV + VT"
     ],
     "lx": 652.5,
     "ly": 233.5
    }
   },
   "arrows": {
    "irv": [
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
    "vt": [
     {
      "t": [
       15.0,
       108.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "erv": [
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
    "rv": [
     {
      "t": [
       15.0,
       248.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "vc": [
     {
      "t": [
       300.0,
       98.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "frc": [
     {
      "t": [
       300.0,
       208.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "tlc": [
     {
      "t": [
       560.0,
       98.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "ic": [
     {
      "t": [
       560.0,
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
   "q": "Tidal volume is about:",
   "options": [
    "150 mL",
    "500 mL",
    "1,500 mL",
    "6,000 mL"
   ],
   "answer": 1,
   "why": "Quiet breathing."
  },
  {
   "q": "Air left in the lungs after a maximal expiration is the:",
   "options": [
    "ERV",
    "Residual volume",
    "FRC",
    "Tidal volume"
   ],
   "answer": 1,
   "why": "Not measurable by spirometry."
  },
  {
   "q": "Vital capacity equals:",
   "options": [
    "IRV + VT + ERV",
    "VT + RV",
    "ERV + RV",
    "TLC + RV"
   ],
   "answer": 0,
   "why": "Maximal exhaled volume."
  },
  {
   "q": "Functional residual capacity equals:",
   "options": [
    "IRV + VT",
    "ERV + RV",
    "VC + RV",
    "VT + ERV"
   ],
   "answer": 1,
   "why": "After normal expiration."
  },
  {
   "q": "Total lung capacity equals:",
   "options": [
    "VC + RV",
    "IRV + ERV",
    "IC + VT",
    "FRC + VT"
   ],
   "answer": 0,
   "why": "About 6 L."
  },
  {
   "q": "Inspiratory capacity equals:",
   "options": [
    "IRV + VT",
    "ERV + RV",
    "VC − RV",
    "TLC − VT"
   ],
   "answer": 0,
   "why": "From end of normal expiration."
  },
  {
   "q": "Which cannot be measured with a simple spirometer?",
   "options": [
    "Tidal volume",
    "Vital capacity",
    "Residual volume",
    "IRV"
   ],
   "answer": 2,
   "why": "Needs plethysmography or gas dilution."
  },
  {
   "q": "During inspiration, alveolar pressure is:",
   "options": [
    "Above atmospheric",
    "Below atmospheric",
    "Equal to pleural pressure",
    "Zero"
   ],
   "answer": 1,
   "why": "Air flows in."
  },
  {
   "q": "Intrapleural pressure at rest is:",
   "options": [
    "Above atmospheric",
    "Below atmospheric",
    "Equal to atmospheric",
    "Positive always"
   ],
   "answer": 1,
   "why": "About 756 mmHg."
  },
  {
   "q": "In obstructive lung disease, residual volume usually:",
   "options": [
    "Falls",
    "Rises",
    "Is unchanged",
    "Becomes zero"
   ],
   "answer": 1,
   "why": "Air trapping."
  },
  {
   "q": "Air trapping leads to:",
   "options": [
    "Lung collapse",
    "Hyperinflation",
    "Lower FRC",
    "Lower TLC always"
   ],
   "answer": 1,
   "why": "Distension."
  },
  {
   "q": "COPD combines:",
   "options": [
    "Asthma and pneumonia",
    "Chronic bronchitis and emphysema",
    "Fibrosis and oedema",
    "Embolism and infarction"
   ],
   "answer": 1,
   "why": "Mostly smoking."
  },
  {
   "q": "The main cause of COPD is:",
   "options": [
    "Genetics",
    "Smoking",
    "Infection",
    "Altitude"
   ],
   "answer": 1,
   "why": "About 80%."
  },
  {
   "q": "Minute volume equals:",
   "options": [
    "VT × respiratory rate",
    "VC × rate",
    "FRC × rate",
    "VT − VD"
   ],
   "answer": 0,
   "why": "~6-7.5 L/min."
  },
  {
   "q": "If IRV = 3,000, VT = 500, ERV = 1,200 mL, vital capacity is:",
   "options": [
    "3,500 mL",
    "4,700 mL",
    "1,700 mL",
    "6,000 mL"
   ],
   "answer": 1,
   "why": "Sum of the three."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "irv",
   "options": [
    "Expiratory reserve volume",
    "Residual volume",
    "Tidal volume",
    "Inspiratory reserve volume"
   ],
   "answer": 3,
   "why": "The arrow points to: Inspiratory reserve volume. The extra air that can be forced in after a normal tidal inspiration."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "vt",
   "options": [
    "Total lung capacity",
    "Tidal volume",
    "Inspiratory reserve volume",
    "Functional residual capacity"
   ],
   "answer": 1,
   "why": "The arrow points to: Tidal volume. The air breathed in or out in quiet breathing, about 500 mL."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "erv",
   "options": [
    "Inspiratory capacity",
    "Vital capacity",
    "Functional residual capacity",
    "Expiratory reserve volume"
   ],
   "answer": 3,
   "why": "The arrow points to: Expiratory reserve volume. The extra air that can be forced out after a normal tidal expiration."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "rv",
   "options": [
    "Inspiratory capacity",
    "Functional residual capacity",
    "Residual volume",
    "Inspiratory reserve volume"
   ],
   "answer": 2,
   "why": "The arrow points to: Residual volume. The air left in the lungs after a maximal expiration; it cannot be measured by simple spirometry."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "vc",
   "options": [
    "Total lung capacity",
    "Functional residual capacity",
    "Vital capacity",
    "Inspiratory reserve volume"
   ],
   "answer": 2,
   "why": "The arrow points to: Vital capacity. The maximal volume exhaled after a maximal inspiration: IRV + VT + ERV."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "frc",
   "options": [
    "Inspiratory reserve volume",
    "Total lung capacity",
    "Inspiratory capacity",
    "Functional residual capacity"
   ],
   "answer": 3,
   "why": "The arrow points to: Functional residual capacity. The gas left after a normal expiration: ERV + RV; increased by air trapping in obstructive disease."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "tlc",
   "options": [
    "Total lung capacity",
    "Inspiratory reserve volume",
    "Expiratory reserve volume",
    "Vital capacity"
   ],
   "answer": 0,
   "why": "The arrow points to: Total lung capacity. All the gas in the lungs after a maximal inspiration: VC + RV."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ic",
   "options": [
    "Expiratory reserve volume",
    "Vital capacity",
    "Inspiratory capacity",
    "Functional residual capacity"
   ],
   "answer": 2,
   "why": "The arrow points to: Inspiratory capacity. The volume that can be inspired from the end of a normal expiration: IRV + VT."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Four lung volumes?",
   "back": "Tidal volume, inspiratory reserve volume, expiratory reserve volume, residual volume."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Vital capacity?",
   "back": "IRV + VT + ERV: maximal expiration after maximal inspiration."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Total lung capacity?",
   "back": "VC + RV (≈ 6 L)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "FRC and IC?",
   "back": "FRC = ERV + RV (after normal expiration). IC = IRV + VT."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Which volume needs more than spirometry?",
   "back": "Residual volume (and thus FRC, TLC)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Pressures in inspiration?",
   "back": "Diaphragm contracts → pleural pressure falls → alveolar pressure below atmospheric → inflow."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Air trapping?",
   "back": "In obstruction, airways close early: RV and FRC rise, lungs hyperinflate."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "COPD facts?",
   "back": "Chronic bronchitis + emphysema; ~80% smoking; ~3.2 million deaths worldwide (2015)."
  },
  {
   "id": "img-irv",
   "type": "image",
   "target": "irv",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Inspiratory reserve volume. The extra air that can be forced in after a normal tidal inspiration."
  },
  {
   "id": "img-vt",
   "type": "image",
   "target": "vt",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Tidal volume. The air breathed in or out in quiet breathing, about 500 mL."
  },
  {
   "id": "img-erv",
   "type": "image",
   "target": "erv",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Expiratory reserve volume. The extra air that can be forced out after a normal tidal expiration."
  },
  {
   "id": "img-rv",
   "type": "image",
   "target": "rv",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Residual volume. The air left in the lungs after a maximal expiration; it cannot be measured by simple spirometry."
  },
  {
   "id": "img-vc",
   "type": "image",
   "target": "vc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Vital capacity. The maximal volume exhaled after a maximal inspiration: IRV + VT + ERV."
  },
  {
   "id": "img-frc",
   "type": "image",
   "target": "frc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Functional residual capacity. The gas left after a normal expiration: ERV + RV; increased by air trapping in obstructive disease."
  },
  {
   "id": "img-tlc",
   "type": "image",
   "target": "tlc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Total lung capacity. All the gas in the lungs after a maximal inspiration: VC + RV."
  },
  {
   "id": "img-ic",
   "type": "image",
   "target": "ic",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Inspiratory capacity. The volume that can be inspired from the end of a normal expiration: IRV + VT."
  }
 ],
 "deeper": [
  {
   "title": "Why the diaphragm flattens in COPD",
   "html": "<p>Air trapping keeps the lungs over-inflated, pushing the diaphragm down and flat. A flat diaphragm works at a mechanical disadvantage: it is already shortened, so it generates less force, and when it contracts it may even pull the lower ribs inward. Patients recruit neck and shoulder muscles and lean forward on their arms to help. On a chest X-ray, hyperinflated lungs, a flat diaphragm and a long thin heart are the classic signs, direct consequences of the raised RV and FRC in this lecture.</p><p class='src'>Source: the lecture's air trapping and hyperinflation slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "Physiology, Pulmonary Ventilation and Perfusion (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK539907/",
   "kind": "Book",
   "why": "Ventilation and lung volumes.",
   "note": ""
  },
  {
   "title": "COPD (WHO fact sheet)",
   "url": "https://www.who.int/news-room/fact-sheets/detail/chronic-obstructive-pulmonary-disease-(copd)",
   "kind": "Website",
   "why": "Burden, causes and prevention.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Physiology, Pulmonary Ventilation and Perfusion (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK539907/"
  },
  {
   "name": "COPD (WHO fact sheet)",
   "url": "https://www.who.int/news-room/fact-sheets/detail/chronic-obstructive-pulmonary-disease-(copd)"
  }
 ],
 "verified": "26 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physio1-pulmonary-vascular"] = {
 "id": "physio1-pulmonary-vascular",
 "subject": "physio1",
 "group": "Cardiovascular and respiratory physiology",
 "title": "Pulmonary vascular physiology",
 "sourceFile": "Pulmonary vascular physiology (Physiology, Pr. A. T. Dinh-Xuan)",
 "sourceUrl": "https://drive.google.com/file/d/1T0WMatqPiA2rx8gqp9iMY7Y2B7FjfEgI/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The pulmonary circulation",
   "html": "<p>The pulmonary circulation receives the whole cardiac output at <strong>low pressure</strong> (about 20/8 mmHg) and low resistance. Ventilation-perfusion problems fall into two groups: <strong>obstructive airway disease</strong> (COPD, asthma: poorly ventilated but perfused alveoli, V/Q low) and <strong>pulmonary vascular disease</strong> (e.g. <strong>pulmonary embolism</strong>: ventilated but unperfused alveoli, V/Q high, dead space). Pneumonia fills alveoli with exudate: blood through them is not oxygenated (shunt).</p>"
  },
  {
   "id": "s1",
   "title": "Hypoxic pulmonary vasoconstriction",
   "html": "<p>When alveolar PO₂ falls, the small pulmonary arteries supplying that region <strong>constrict</strong>: <strong>hypoxic pulmonary vasoconstriction (HPV)</strong>. In the lecture's experiment, hypoxia raises pulmonary artery pressure within minutes while systemic (renal) artery pressure does not rise: systemic vessels dilate in hypoxia, pulmonary vessels constrict. The mechanism involves <strong>oxygen-sensitive voltage-gated K⁺ channels</strong>: hypoxia closes them, the smooth muscle depolarises, <strong>voltage-gated Ca²⁺ channels</strong> open and the cell contracts (the same logic as K<sub>ATP</sub> channels in the pancreatic β-cell).</p><p><strong>Good or bad?</strong> Locally it is <strong>good</strong>: it diverts blood away from poorly ventilated alveoli to well-ventilated ones, <strong>optimising V/Q</strong> and arterial PO₂. In the <strong>fetus</strong>, HPV keeps pulmonary resistance high so blood bypasses the non-breathing lungs through the <strong>foramen ovale</strong> and <strong>ductus arteriosus</strong>; at birth, lung inflation removes it. When hypoxia is <strong>global and chronic</strong> (COPD, altitude), widespread HPV raises pulmonary pressure and causes <strong>pulmonary hypertension</strong> and right heart strain: then it is bad.</p>"
  },
  {
   "id": "s2",
   "title": "Ventilation-perfusion coupling",
   "html": "<p>Two local mechanisms match air and blood. <strong>Perfusion adjusted to ventilation</strong>: reduced airflow → low alveolar PO₂ → vasoconstriction → less blood; increased airflow → high PO₂ → vasodilatation → more blood. <strong>Ventilation adjusted to perfusion</strong>: reduced blood flow → low alveolar PCO₂ → <strong>bronchoconstriction</strong> → less air; increased blood flow → high PCO₂ → bronchodilatation → more air. The result is a V/Q close to 1 in each region.</p>"
  }
 ],
 "exam": [
  "Pulmonary circulation: whole cardiac output at low pressure (~20/8 mmHg).",
  "Airway disease → low V/Q; embolism → high V/Q (dead space); pneumonia → shunt.",
  "Hypoxia constricts pulmonary arterioles (HPV) but dilates systemic ones.",
  "Mechanism: hypoxia closes O₂-sensitive K⁺ channels → depolarisation → Ca²⁺ entry.",
  "Local HPV is good: diverts blood to ventilated alveoli, optimises V/Q.",
  "Fetal HPV keeps blood out of the lungs (foramen ovale, ductus).",
  "Global chronic hypoxia → pulmonary hypertension (bad).",
  "Low alveolar PCO₂ → bronchoconstriction (ventilation follows perfusion)."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Ventilation-perfusion coupling",
   "caption": "Local responses that keep V/Q near 1. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"250\" y1=\"70\" x2=\"270\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"490\" y1=\"70\" x2=\"510\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"250\" y1=\"200\" x2=\"270\" y2=\"200\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"490\" y1=\"200\" x2=\"510\" y2=\"200\"/>",
   "parts": {
    "lowv": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"15\" y=\"40\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Poorly ventilated alveolus:",
      "low alveolar PO₂"
     ],
     "lx": 132.5,
     "ly": 68.0
    },
    "hpv": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"270\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Hypoxic pulmonary",
      "vasoconstriction"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "redir": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"510\" y=\"40\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Blood diverted to",
      "well-ventilated alveoli"
     ],
     "lx": 627.5,
     "ly": 68.0
    },
    "lowq": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"15\" y=\"170\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Poorly perfused alveolus:",
      "low alveolar PCO₂"
     ],
     "lx": 132.5,
     "ly": 198.0
    },
    "bc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"270\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Local bronchoconstriction",
      "(less airflow)"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "match": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"510\" y=\"170\" width=\"235\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Airflow redirected to",
      "well-perfused alveoli"
     ],
     "lx": 627.5,
     "ly": 198.0
    }
   },
   "arrows": {
    "lowv": [
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
    "hpv": [
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
    "redir": [
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
    "lowq": [
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
    "bc": [
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
    "match": [
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
   "q": "Hypoxic pulmonary vasoconstriction is triggered by low:",
   "options": [
    "Arterial PCO₂",
    "Alveolar PO₂",
    "Blood pH only",
    "Temperature"
   ],
   "answer": 1,
   "why": "Local alveolar hypoxia."
  },
  {
   "q": "In hypoxia, systemic arteries generally:",
   "options": [
    "Constrict like pulmonary ones",
    "Dilate",
    "Do not respond",
    "Rupture"
   ],
   "answer": 1,
   "why": "Opposite response."
  },
  {
   "q": "Locally, HPV helps by:",
   "options": [
    "Raising cardiac output",
    "Diverting blood to aerated areas",
    "Increasing dead space",
    "Lowering arterial PO₂"
   ],
   "answer": 1,
   "why": "Optimises V/Q."
  },
  {
   "q": "Global chronic HPV (e.g. severe COPD) causes:",
   "options": [
    "Systemic hypotension",
    "Pulmonary hypertension",
    "Asthma",
    "Pneumothorax"
   ],
   "answer": 1,
   "why": "Right heart strain."
  },
  {
   "q": "HPV involves closure of:",
   "options": [
    "Sodium channels",
    "Oxygen-sensitive K⁺ channels",
    "Chloride channels",
    "Gap junctions"
   ],
   "answer": 1,
   "why": "Depolarisation → Ca²⁺ entry."
  },
  {
   "q": "In the fetus, pulmonary resistance is high partly because of:",
   "options": [
    "HPV",
    "High PO₂",
    "Surfactant",
    "Ductus closure"
   ],
   "answer": 0,
   "why": "Lungs not ventilated."
  },
  {
   "q": "Pulmonary embolism produces alveoli that are:",
   "options": [
    "Perfused but not ventilated",
    "Ventilated but not perfused",
    "Neither",
    "Normal"
   ],
   "answer": 1,
   "why": "Dead space, high V/Q."
  },
  {
   "q": "In asthma, affected alveoli are:",
   "options": [
    "Well ventilated and unperfused",
    "Poorly ventilated but perfused",
    "Unaffected",
    "Collapsed and unperfused only"
   ],
   "answer": 1,
   "why": "Low V/Q."
  },
  {
   "q": "A poorly perfused lung region responds with:",
   "options": [
    "Bronchodilatation",
    "Bronchoconstriction",
    "Vasoconstriction",
    "Surfactant loss"
   ],
   "answer": 1,
   "why": "Low PCO₂."
  },
  {
   "q": "Pulmonary artery pressure is normally about:",
   "options": [
    "120/80 mmHg",
    "20/8 mmHg",
    "60/40 mmHg",
    "5/2 mmHg"
   ],
   "answer": 1,
   "why": "Low-pressure circuit."
  },
  {
   "q": "Blood passing through pneumonic alveoli is an example of:",
   "options": [
    "Dead space",
    "Shunt",
    "Normal V/Q",
    "Hyperventilation"
   ],
   "answer": 1,
   "why": "Not oxygenated."
  },
  {
   "q": "The fetal structures bypassing the lungs are:",
   "options": [
    "Ductus venosus and umbilical vein",
    "Foramen ovale and ductus arteriosus",
    "Urachus and allantois",
    "Aorta and pulmonary vein"
   ],
   "answer": 1,
   "why": "Close after birth."
  },
  {
   "q": "The logic of HPV resembles insulin release, where K⁺ channel closure causes:",
   "options": [
    "Hyperpolarisation",
    "Depolarisation and Ca²⁺ entry",
    "Cell death",
    "Na⁺ exit"
   ],
   "answer": 1,
   "why": "Excitation-secretion coupling."
  },
  {
   "q": "Increased local airflow leads to:",
   "options": [
    "Local vasoconstriction",
    "Vasodilatation, more flow",
    "Bronchoconstriction",
    "A right-to-left shunt"
   ],
   "answer": 1,
   "why": "High PO₂."
  },
  {
   "q": "The aim of ventilation-perfusion coupling is a regional V/Q near:",
   "options": [
    "0",
    "1",
    "10",
    "100"
   ],
   "answer": 1,
   "why": "Matching."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "lowv",
   "options": [
    "Low alveolar CO₂",
    "Hypoxic pulmonary vasoconstriction",
    "Matching",
    "Low alveolar oxygen"
   ],
   "answer": 3,
   "why": "The arrow points to: Low alveolar oxygen. An alveolus that is poorly ventilated (mucus, pneumonia, atelectasis) has a low PO₂."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "hpv",
   "options": [
    "Hypoxic pulmonary vasoconstriction",
    "Bronchoconstriction",
    "Redistribution of blood",
    "Matching"
   ],
   "answer": 0,
   "why": "The arrow points to: Hypoxic pulmonary vasoconstriction. Pulmonary arterioles constrict in response to low alveolar PO₂, via oxygen-sensitive K⁺ channels and voltage-gated Ca²⁺ entry in smooth muscle; systemic arteries do the opposite."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "redir",
   "options": [
    "Matching",
    "Hypoxic pulmonary vasoconstriction",
    "Bronchoconstriction",
    "Redistribution of blood"
   ],
   "answer": 3,
   "why": "The arrow points to: Redistribution of blood. Perfusion shifts to well-ventilated regions, optimising V/Q and arterial oxygenation."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "lowq",
   "options": [
    "Low alveolar CO₂",
    "Redistribution of blood",
    "Hypoxic pulmonary vasoconstriction",
    "Bronchoconstriction"
   ],
   "answer": 0,
   "why": "The arrow points to: Low alveolar CO₂. An alveolus that is poorly perfused (e.g. embolism) receives little CO₂, so its PCO₂ falls."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "bc",
   "options": [
    "Low alveolar CO₂",
    "Low alveolar oxygen",
    "Bronchoconstriction",
    "Hypoxic pulmonary vasoconstriction"
   ],
   "answer": 2,
   "why": "The arrow points to: Bronchoconstriction. Low local PCO₂ constricts the bronchioles supplying that region, reducing wasted ventilation."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "match",
   "options": [
    "Redistribution of blood",
    "Matching",
    "Low alveolar CO₂",
    "Bronchoconstriction"
   ],
   "answer": 1,
   "why": "The arrow points to: Matching. Air goes where blood is: ventilation adjusted to perfusion, the counterpart of HPV."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "What is HPV?",
   "back": "Constriction of pulmonary arterioles in response to low alveolar PO₂."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Pulmonary vs systemic response to hypoxia?",
   "back": "Pulmonary vessels constrict; systemic vessels dilate."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Mechanism of HPV?",
   "back": "Hypoxia closes O₂-sensitive K⁺ channels → depolarisation → voltage-gated Ca²⁺ entry → contraction."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Is HPV good or bad?",
   "back": "Local: good (optimises V/Q). Global chronic hypoxia: bad (pulmonary hypertension)."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Role of HPV in the fetus?",
   "back": "Keeps pulmonary resistance high so blood bypasses the lungs via foramen ovale and ductus."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Perfusion adjusted to ventilation?",
   "back": "Low airflow → low PO₂ → vasoconstriction; high airflow → vasodilatation."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Ventilation adjusted to perfusion?",
   "back": "Low blood flow → low PCO₂ → bronchoconstriction; high flow → bronchodilatation."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "V/Q in asthma vs embolism?",
   "back": "Asthma: low V/Q (poorly ventilated, perfused). Embolism: high V/Q (ventilated, unperfused)."
  },
  {
   "id": "img-lowv",
   "type": "image",
   "target": "lowv",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Low alveolar oxygen. An alveolus that is poorly ventilated (mucus, pneumonia, atelectasis) has a low PO₂."
  },
  {
   "id": "img-hpv",
   "type": "image",
   "target": "hpv",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Hypoxic pulmonary vasoconstriction. Pulmonary arterioles constrict in response to low alveolar PO₂, via oxygen-sensitive K⁺ channels and voltage-gated Ca²⁺ entry in smooth muscle; systemic arteries do the opposite."
  },
  {
   "id": "img-redir",
   "type": "image",
   "target": "redir",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Redistribution of blood. Perfusion shifts to well-ventilated regions, optimising V/Q and arterial oxygenation."
  },
  {
   "id": "img-lowq",
   "type": "image",
   "target": "lowq",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Low alveolar CO₂. An alveolus that is poorly perfused (e.g. embolism) receives little CO₂, so its PCO₂ falls."
  },
  {
   "id": "img-bc",
   "type": "image",
   "target": "bc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Bronchoconstriction. Low local PCO₂ constricts the bronchioles supplying that region, reducing wasted ventilation."
  },
  {
   "id": "img-match",
   "type": "image",
   "target": "match",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Matching. Air goes where blood is: ventilation adjusted to perfusion, the counterpart of HPV."
  }
 ],
 "deeper": [
  {
   "title": "Why giving oxygen can make some COPD patients worse",
   "html": "<p>In advanced COPD, HPV has diverted blood away from the worst-ventilated regions. Giving high concentrations of oxygen raises alveolar PO₂ everywhere, releases that vasoconstriction and sends blood back to poorly ventilated alveoli, worsening V/Q matching; oxygen also unloads CO₂ from haemoglobin (Haldane effect). PaCO₂ can then rise dangerously. That is why oxygen in COPD is titrated to a target saturation (often 88-92%) rather than given at full flow: a direct clinical consequence of hypoxic pulmonary vasoconstriction.</p><p class='src'>Source: the lecture's 'is HPV good or bad?' question and V/Q coupling.</p>"
  }
 ],
 "resources": [
  {
   "title": "Physiology, Pulmonary Vasoconstriction (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK499962/",
   "kind": "Book",
   "why": "Hypoxic pulmonary vasoconstriction.",
   "note": ""
  },
  {
   "title": "Physiology, Pulmonary Ventilation and Perfusion (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK539907/",
   "kind": "Book",
   "why": "V/Q matching.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Physiology, Pulmonary Vasoconstriction (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK499962/"
  },
  {
   "name": "Physiology, Pulmonary Ventilation and Perfusion (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK539907/"
  }
 ],
 "verified": "26 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physio1-gi-intro"] = {
 "id": "physio1-gi-intro",
 "subject": "physio1",
 "group": "Digestive physiology",
 "title": "Introduction to digestive physiology",
 "sourceFile": "Introduction to GI physiology (Physiology, Pr. O. Bahlaoui)",
 "sourceUrl": "https://drive.google.com/file/d/1J5JWDCVW_2Jv5BiF3t74HTsPlw1Dl3wI/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "What the digestive tract does",
   "html": "<p>The digestive tract turns food into molecules the body can absorb. It performs four linked functions: <strong>motility</strong> (mixing and moving contents), <strong>secretion</strong> (water, electrolytes, enzymes, acid, mucus, bile), <strong>digestion</strong> (breaking polymers into monomers) and <strong>absorption</strong> (transfer across the mucosa into blood and lymph). What is not absorbed is <strong>eliminated</strong> as faeces.</p>"
  },
  {
   "id": "s1",
   "title": "Role of each organ",
   "html": "<p><strong>Mouth</strong>: chewing, saliva (amylase, lubrication), swallowing. <strong>Oesophagus</strong>: transport by peristalsis; sphincters at each end. <strong>Stomach</strong>: storage, acid and pepsin, grinding into chyme, controlled emptying. <strong>Pancreas</strong>: enzymes for all three nutrient classes plus bicarbonate. <strong>Liver and gallbladder</strong>: bile for fat emulsification. <strong>Small intestine</strong>: final digestion and most absorption (villi, microvilli, huge surface). <strong>Colon</strong>: water and electrolyte absorption, microbiota, storage. <strong>Rectum and anus</strong>: continence and defecation.</p>"
  },
  {
   "id": "s2",
   "title": "How it is controlled",
   "html": "<p>The gut wall contains its own <strong>enteric nervous system</strong> (myenteric plexus for motility, submucosal plexus for secretion), which can work on its own but is modulated by the <strong>parasympathetic</strong> (mostly vagus: stimulates) and <strong>sympathetic</strong> (inhibits) systems. <strong>GI hormones</strong> add long-distance control: gastrin (acid), CCK (pancreatic enzymes, gallbladder), secretin (bicarbonate), GIP (insulin), motilin (fasting motility). Control runs in <strong>phases</strong>: cephalic (sight, smell, thought), gastric and intestinal.</p>"
  }
 ],
 "exam": [
  "Four functions: motility, secretion, digestion, absorption (plus elimination).",
  "Most absorption happens in the small intestine.",
  "Pancreas digests all three nutrient classes and secretes bicarbonate.",
  "Bile emulsifies fat; it contains no digestive enzymes.",
  "Enteric nervous system: myenteric (motility) and submucosal (secretion) plexuses.",
  "Parasympathetic stimulates digestion; sympathetic inhibits it.",
  "Key hormones: gastrin, CCK, secretin, GIP, motilin.",
  "Control phases: cephalic, gastric, intestinal."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "The four functions of the digestive tract",
   "caption": "From meal to absorbed nutrient. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"245\" y1=\"70\" x2=\"265\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"495\" y1=\"70\" x2=\"515\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"630\" y1=\"100\" x2=\"630\" y2=\"170\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"630\" y1=\"230\" x2=\"630\" y2=\"300\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"170\" x2=\"380\" y2=\"100\"/>",
   "parts": {
    "mot": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"15\" y=\"40\" width=\"230\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Motility:",
      "mixing and propulsion"
     ],
     "lx": 130.0,
     "ly": 68.0
    },
    "sec": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"265\" y=\"40\" width=\"230\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Secretion:",
      "enzymes, acid, bile"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "dig": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"515\" y=\"40\" width=\"230\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Digestion:",
      "polymers → monomers"
     ],
     "lx": 630.0,
     "ly": 68.0
    },
    "abs": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"515\" y=\"170\" width=\"230\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Absorption:",
      "mostly small intestine"
     ],
     "lx": 630.0,
     "ly": 198.0
    },
    "ens": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"265\" y=\"170\" width=\"230\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Control: enteric nerves,",
      "vagus, GI hormones"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "elim": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"515\" y=\"300\" width=\"230\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Elimination:",
      "colon and rectum"
     ],
     "lx": 630.0,
     "ly": 328.0
    }
   },
   "arrows": {
    "mot": [
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
    "sec": [
     {
      "t": [
       265.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "dig": [
     {
      "t": [
       515.0,
       48.0
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
       515.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "ens": [
     {
      "t": [
       265.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "elim": [
     {
      "t": [
       515.0,
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
   "q": "Most nutrient absorption takes place in the:",
   "options": [
    "Stomach",
    "Small intestine",
    "Colon",
    "Oesophagus"
   ],
   "answer": 1,
   "why": "Villi and microvilli give a vast surface."
  },
  {
   "q": "The myenteric plexus mainly controls:",
   "options": [
    "Secretion",
    "Motility",
    "Absorption",
    "Blood flow only"
   ],
   "answer": 1,
   "why": "Between the muscle layers."
  },
  {
   "q": "The submucosal plexus mainly controls:",
   "options": [
    "Secretion and local blood flow",
    "Swallowing",
    "Defecation reflex only",
    "Chewing"
   ],
   "answer": 0,
   "why": "Meissner's plexus."
  },
  {
   "q": "Bile contributes to digestion by:",
   "options": [
    "Hydrolysing proteins",
    "Emulsifying fat",
    "Digesting starch",
    "Secreting acid"
   ],
   "answer": 1,
   "why": "No enzymes in bile."
  },
  {
   "q": "Which organ secretes enzymes for carbohydrates, proteins and fats?",
   "options": [
    "Stomach",
    "Pancreas",
    "Liver",
    "Colon"
   ],
   "answer": 1,
   "why": "Amylase, proteases, lipase."
  },
  {
   "q": "The main role of the colon is:",
   "options": [
    "Protein and starch digestion",
    "Water and electrolyte absorption",
    "Bile and bicarbonate production",
    "Gastric acid secretion"
   ],
   "answer": 1,
   "why": "Plus storage."
  },
  {
   "q": "The parasympathetic supply to most of the gut is carried by the:",
   "options": [
    "Phrenic nerve",
    "Vagus nerve",
    "Splanchnic nerves",
    "Hypoglossal nerve"
   ],
   "answer": 1,
   "why": "Stimulates motility and secretion."
  },
  {
   "q": "Seeing and smelling food starts secretion in the:",
   "options": [
    "Intestinal phase",
    "Cephalic phase",
    "Gastric phase",
    "Colonic phase"
   ],
   "answer": 1,
   "why": "Vagally mediated."
  },
  {
   "q": "Secretin mainly stimulates:",
   "options": [
    "Gastric acid",
    "Pancreatic bicarbonate",
    "Gallbladder contraction",
    "Salivation"
   ],
   "answer": 1,
   "why": "Neutralises acid chyme."
  },
  {
   "q": "Breaking polymers into monomers is called:",
   "options": [
    "Motility",
    "Digestion",
    "Absorption",
    "Secretion"
   ],
   "answer": 1,
   "why": "Chemical digestion."
  },
  {
   "q": "The sympathetic system generally:",
   "options": [
    "Stimulates gut motility",
    "Inhibits digestion",
    "Controls chewing",
    "Makes bile"
   ],
   "answer": 1,
   "why": "Fight or flight."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "mot",
   "options": [
    "Regulation",
    "Absorption",
    "Digestion",
    "Motility"
   ],
   "answer": 3,
   "why": "The arrow points to: Motility. Smooth muscle mixes food with secretions and moves it aborally: peristalsis, segmentation, gastric grinding."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "sec",
   "options": [
    "Motility",
    "Absorption",
    "Secretion",
    "Regulation"
   ],
   "answer": 2,
   "why": "The arrow points to: Secretion. Glands add water, electrolytes, enzymes, acid, mucus and bile: several litres a day, mostly reabsorbed."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "dig",
   "options": [
    "Digestion",
    "Elimination",
    "Secretion",
    "Regulation"
   ],
   "answer": 0,
   "why": "The arrow points to: Digestion. Mechanical and chemical breakdown of carbohydrates, proteins and fats into absorbable units."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "abs",
   "options": [
    "Elimination",
    "Absorption",
    "Motility",
    "Secretion"
   ],
   "answer": 1,
   "why": "The arrow points to: Absorption. Transfer of nutrients, water and electrolytes across the mucosa, mainly in the small intestine."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ens",
   "options": [
    "Elimination",
    "Absorption",
    "Motility",
    "Regulation"
   ],
   "answer": 3,
   "why": "The arrow points to: Regulation. The enteric nervous system, autonomic nerves and hormones (gastrin, CCK, secretin, GIP, motilin) coordinate everything."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "elim",
   "options": [
    "Digestion",
    "Motility",
    "Elimination",
    "Absorption"
   ],
   "answer": 2,
   "why": "The arrow points to: Elimination. The colon absorbs water and stores faeces until defecation."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Four functions of the gut?",
   "back": "Motility, secretion, digestion, absorption (then elimination)."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Myenteric vs submucosal plexus?",
   "back": "Myenteric (Auerbach): motility. Submucosal (Meissner): secretion and blood flow."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Where is most absorption?",
   "back": "Small intestine."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Does bile contain enzymes?",
   "back": "No: bile salts emulsify fat."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Three phases of digestive control?",
   "back": "Cephalic, gastric, intestinal."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Five classic GI hormones?",
   "back": "Gastrin, CCK, secretin, GIP, motilin."
  },
  {
   "id": "img-mot",
   "type": "image",
   "target": "mot",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Motility. Smooth muscle mixes food with secretions and moves it aborally: peristalsis, segmentation, gastric grinding."
  },
  {
   "id": "img-sec",
   "type": "image",
   "target": "sec",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Secretion. Glands add water, electrolytes, enzymes, acid, mucus and bile: several litres a day, mostly reabsorbed."
  },
  {
   "id": "img-dig",
   "type": "image",
   "target": "dig",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Digestion. Mechanical and chemical breakdown of carbohydrates, proteins and fats into absorbable units."
  },
  {
   "id": "img-abs",
   "type": "image",
   "target": "abs",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Absorption. Transfer of nutrients, water and electrolytes across the mucosa, mainly in the small intestine."
  },
  {
   "id": "img-ens",
   "type": "image",
   "target": "ens",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Regulation. The enteric nervous system, autonomic nerves and hormones (gastrin, CCK, secretin, GIP, motilin) coordinate everything."
  },
  {
   "id": "img-elim",
   "type": "image",
   "target": "elim",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Elimination. The colon absorbs water and stores faeces until defecation."
  }
 ],
 "deeper": [
  {
   "title": "The 'second brain'",
   "html": "<p>The enteric nervous system contains roughly as many neurons as the spinal cord and can run peristalsis even when the gut is disconnected from the brain. That is why it is called the second brain. Its absence in a segment of colon (Hirschsprung disease) leaves that segment permanently contracted, with obstruction above it.</p>"
  }
 ],
 "resources": [
  {
   "title": "Physiology, Gastrointestinal (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK537103/",
   "kind": "Book",
   "why": "Overview of GI functions.",
   "note": ""
  },
  {
   "title": "Physiology, Gastrointestinal Hormonal Control (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK537284/",
   "kind": "Book",
   "why": "Gastrin, CCK, secretin and the rest.",
   "note": ""
  },
  {
   "title": "Physiology, Gastrointestinal Nervous Control (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK545268/",
   "kind": "Book",
   "why": "Enteric and autonomic control.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Physiology, Gastrointestinal (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK537103/"
  },
  {
   "name": "Physiology, Gastrointestinal Hormonal Control (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK537284/"
  },
  {
   "name": "Physiology, Gastrointestinal Nervous Control (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK545268/"
  }
 ],
 "verified": "26 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physio1-oral"] = {
 "id": "physio1-oral",
 "subject": "physio1",
 "group": "Digestive physiology",
 "title": "Saliva, mastication and deglutition",
 "sourceFile": "Salivary secretion, mastication and deglutition (Physiology, Pr. O. Bahlaoui)",
 "sourceUrl": "https://drive.google.com/file/d/1Ad5i3R8RvhZV9cl4jxj8PER-MSLkiqXz/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "Saliva",
   "html": "<p>Saliva is about <strong>99.5% water</strong>, with electrolytes, <strong>α-amylase</strong> (starch), lingual lipase, <strong>mucins</strong> (lubrication), lysozyme, IgA and lactoferrin (defence). It moistens food, starts starch digestion, protects teeth (bicarbonate buffer) and allows taste and speech. The three major glands are the parotid (serous), submandibular (mixed) and sublingual (mostly mucous).</p><p>Saliva is made in two steps. <strong>Acinar cells</strong> secrete an <strong>isotonic</strong> primary fluid. <strong>Duct cells</strong> then reabsorb Na⁺ and Cl⁻ and secrete K⁺ and HCO₃⁻, while staying poorly permeable to water, so final saliva is <strong>hypotonic</strong>. <strong>Parasympathetic</strong> stimulation (the main one) gives abundant watery saliva; <strong>sympathetic</strong> stimulation gives a small viscous volume. <strong>Aldosterone</strong> increases ductal Na⁺ reabsorption.</p>"
  },
  {
   "id": "s1",
   "title": "Mastication",
   "html": "<p>Chewing breaks food into small pieces, mixes it with saliva and forms a <strong>bolus</strong>. The muscles of mastication are the <strong>masseter, temporalis, medial and lateral pterygoids</strong>, all supplied by the <strong>mandibular nerve (V3)</strong>. Chewing is voluntary but runs largely automatically, driven by a <strong>central pattern generator in the brainstem</strong> with sensory feedback from teeth and mouth.</p>"
  },
  {
   "id": "s2",
   "title": "Deglutition",
   "html": "<p>Swallowing has three phases. <strong>Oral</strong> (voluntary): the tongue pushes the bolus back to the pharynx. <strong>Pharyngeal</strong> (reflex, <strong>swallowing centre in the medulla</strong>): the soft palate closes the nasopharynx, the larynx rises, the <strong>epiglottis</strong> covers the airway, breathing stops briefly and the <strong>upper oesophageal sphincter</strong> opens. <strong>Oesophageal</strong>: a peristaltic wave carries the bolus down and the <strong>lower oesophageal sphincter</strong> relaxes to let it into the stomach.</p>"
  },
  {
   "id": "s3",
   "title": "Disorders",
   "html": "<p><strong>Xerostomia</strong> (dry mouth): Sjögren's syndrome, drugs, radiotherapy; causes caries and difficulty chewing. <strong>Sialorrhoea</strong> (excess saliva or drooling), e.g. in neurological disease. <strong>Dysphagia</strong>: difficulty swallowing, oropharyngeal (neurological, e.g. stroke) or oesophageal. <strong>Zenker's diverticulum</strong>: a pouch above the upper oesophageal sphincter causing regurgitation of undigested food.</p>"
  }
 ],
 "exam": [
  "Saliva: 99.5% water; amylase, lipase, mucins, lysozyme, IgA.",
  "Acinar cells make isotonic saliva; ducts make it hypotonic.",
  "Ducts reabsorb Na⁺/Cl⁻ and secrete K⁺/HCO₃⁻.",
  "Parasympathetic → watery saliva; sympathetic → viscous saliva.",
  "Mastication muscles: masseter, temporalis, pterygoids (V3).",
  "Chewing rhythm: brainstem central pattern generator.",
  "Swallowing phases: oral (voluntary), pharyngeal (reflex, medulla), oesophageal.",
  "Xerostomia (Sjögren's), dysphagia, Zenker's diverticulum."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "How saliva is made",
   "caption": "Two-stage model of salivary secretion. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"245\" y1=\"90\" x2=\"265\" y2=\"90\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"505\" y1=\"90\" x2=\"525\" y2=\"90\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"130\" y1=\"220\" x2=\"130\" y2=\"120\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"540\" y1=\"220\" x2=\"490\" y2=\"120\"/>",
   "parts": {
    "acin": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"15\" y=\"60\" width=\"230\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Acinar cells:",
      "isotonic primary saliva"
     ],
     "lx": 130.0,
     "ly": 88.0
    },
    "duct": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"265\" y=\"60\" width=\"240\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Duct cells: reabsorb",
      "Na⁺, Cl⁻; secrete K⁺, HCO₃⁻"
     ],
     "lx": 385.0,
     "ly": 88.0
    },
    "final": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"525\" y=\"60\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Final saliva:",
      "hypotonic"
     ],
     "lx": 635.0,
     "ly": 88.0
    },
    "para": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"15\" y=\"220\" width=\"230\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Parasympathetic:",
      "abundant watery saliva"
     ],
     "lx": 130.0,
     "ly": 248.0
    },
    "symp": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"265\" y=\"220\" width=\"240\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Sympathetic:",
      "small, viscous volume"
     ],
     "lx": 385.0,
     "ly": 248.0
    },
    "aldo": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"525\" y=\"220\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Aldosterone:",
      "more Na⁺ reabsorbed"
     ],
     "lx": 635.0,
     "ly": 248.0
    }
   },
   "arrows": {
    "acin": [
     {
      "t": [
       15.0,
       68.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "duct": [
     {
      "t": [
       265.0,
       68.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "final": [
     {
      "t": [
       525.0,
       68.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "para": [
     {
      "t": [
       15.0,
       228.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "symp": [
     {
      "t": [
       265.0,
       228.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "aldo": [
     {
      "t": [
       525.0,
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
   "q": "Final saliva compared with plasma is:",
   "options": [
    "Hypertonic",
    "Hypotonic",
    "Isotonic",
    "Identical"
   ],
   "answer": 1,
   "why": "Ducts remove salt, not water."
  },
  {
   "q": "Primary saliva secreted by acinar cells is:",
   "options": [
    "Hypotonic",
    "Isotonic",
    "Hypertonic",
    "Free of electrolytes"
   ],
   "answer": 1,
   "why": "Plasma-like."
  },
  {
   "q": "The salivary ducts secrete:",
   "options": [
    "Na⁺ and Cl⁻",
    "K⁺ and HCO₃⁻",
    "Glucose",
    "Water only"
   ],
   "answer": 1,
   "why": "And reabsorb Na⁺/Cl⁻."
  },
  {
   "q": "The main stimulus of salivary secretion is:",
   "options": [
    "Sympathetic",
    "Parasympathetic",
    "Gastrin",
    "Insulin"
   ],
   "answer": 1,
   "why": "Watery saliva."
  },
  {
   "q": "The enzyme in saliva that begins starch digestion is:",
   "options": [
    "Pepsin",
    "α-amylase",
    "Trypsin",
    "Lactase"
   ],
   "answer": 1,
   "why": "Ptyalin."
  },
  {
   "q": "The muscles of mastication are supplied by:",
   "options": [
    "Facial nerve",
    "Mandibular nerve (V3)",
    "Hypoglossal nerve",
    "Vagus nerve"
   ],
   "answer": 1,
   "why": "Trigeminal motor root."
  },
  {
   "q": "Which phase of swallowing is voluntary?",
   "options": [
    "Oral",
    "Pharyngeal",
    "Oesophageal",
    "All three"
   ],
   "answer": 0,
   "why": "The rest is reflex."
  },
  {
   "q": "The swallowing centre is in the:",
   "options": [
    "Cortex",
    "Medulla",
    "Cerebellum",
    "Spinal cord"
   ],
   "answer": 1,
   "why": "Brainstem."
  },
  {
   "q": "During the pharyngeal phase, the airway is protected by:",
   "options": [
    "Opening of the glottis",
    "Epiglottis and laryngeal elevation",
    "The lower oesophageal sphincter",
    "Increased breathing"
   ],
   "answer": 1,
   "why": "Breathing stops briefly."
  },
  {
   "q": "Xerostomia is typical of:",
   "options": [
    "Sjögren's syndrome",
    "Achalasia only",
    "Parotid tumour only",
    "Hyperthyroidism"
   ],
   "answer": 0,
   "why": "Autoimmune exocrinopathy."
  },
  {
   "q": "Zenker's diverticulum lies:",
   "options": [
    "Above the upper oesophageal sphincter",
    "In the gastric fundus",
    "In the sigmoid colon",
    "Just above the lower sphincter"
   ],
   "answer": 0,
   "why": "Pharyngo-oesophageal pouch."
  },
  {
   "q": "Aldosterone acts on salivary ducts to:",
   "options": [
    "Increase Na⁺ reabsorption",
    "Increase Na⁺ secretion",
    "Stop amylase release",
    "Increase water entry"
   ],
   "answer": 0,
   "why": "Like the kidney."
  },
  {
   "q": "At high flow rates saliva becomes:",
   "options": [
    "More hypotonic",
    "Closer to isotonic",
    "Acidic",
    "Enzyme free"
   ],
   "answer": 1,
   "why": "Less time for duct modification."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "acin",
   "options": [
    "Hypotonic saliva",
    "Acinar cells",
    "Parasympathetic control",
    "Sympathetic control"
   ],
   "answer": 1,
   "why": "The arrow points to: Acinar cells. Secrete a primary fluid similar to plasma (isotonic), plus amylase, lipase and mucins."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "duct",
   "options": [
    "Acinar cells",
    "Sympathetic control",
    "Duct modification",
    "Aldosterone"
   ],
   "answer": 2,
   "why": "The arrow points to: Duct modification. Ducts reabsorb Na⁺ and Cl⁻ and secrete K⁺ and HCO₃⁻; the ducts are poorly permeable to water."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "final",
   "options": [
    "Aldosterone",
    "Hypotonic saliva",
    "Sympathetic control",
    "Duct modification"
   ],
   "answer": 1,
   "why": "The arrow points to: Hypotonic saliva. Because salt is removed without water, final saliva is hypotonic; at high flow it has less time to be modified."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "para",
   "options": [
    "Acinar cells",
    "Duct modification",
    "Sympathetic control",
    "Parasympathetic control"
   ],
   "answer": 3,
   "why": "The arrow points to: Parasympathetic control. The main stimulus (CN VII and IX, acetylcholine): large volumes of watery saliva."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "symp",
   "options": [
    "Aldosterone",
    "Acinar cells",
    "Sympathetic control",
    "Hypotonic saliva"
   ],
   "answer": 2,
   "why": "The arrow points to: Sympathetic control. Produces a smaller volume of viscous, protein-rich saliva."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "aldo",
   "options": [
    "Duct modification",
    "Acinar cells",
    "Parasympathetic control",
    "Aldosterone"
   ],
   "answer": 3,
   "why": "The arrow points to: Aldosterone. Acts on the ducts like on the kidney: more Na⁺ reabsorption and K⁺ secretion."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Saliva composition?",
   "back": "99.5% water; electrolytes, amylase, lingual lipase, mucins, lysozyme, IgA, lactoferrin."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Two-stage secretion?",
   "back": "Acini: isotonic fluid. Ducts: reabsorb Na⁺/Cl⁻, secrete K⁺/HCO₃⁻ → hypotonic."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Autonomic control of saliva?",
   "back": "Parasympathetic: large watery volume. Sympathetic: small viscous volume."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Muscles of mastication and nerve?",
   "back": "Masseter, temporalis, medial and lateral pterygoids; V3."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Three phases of swallowing?",
   "back": "Oral (voluntary), pharyngeal (reflex), oesophageal (peristalsis)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "What is Zenker's diverticulum?",
   "back": "A pharyngeal pouch above the UES causing regurgitation."
  },
  {
   "id": "img-acin",
   "type": "image",
   "target": "acin",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Acinar cells. Secrete a primary fluid similar to plasma (isotonic), plus amylase, lipase and mucins."
  },
  {
   "id": "img-duct",
   "type": "image",
   "target": "duct",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Duct modification. Ducts reabsorb Na⁺ and Cl⁻ and secrete K⁺ and HCO₃⁻; the ducts are poorly permeable to water."
  },
  {
   "id": "img-final",
   "type": "image",
   "target": "final",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Hypotonic saliva. Because salt is removed without water, final saliva is hypotonic; at high flow it has less time to be modified."
  },
  {
   "id": "img-para",
   "type": "image",
   "target": "para",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Parasympathetic control. The main stimulus (CN VII and IX, acetylcholine): large volumes of watery saliva."
  },
  {
   "id": "img-symp",
   "type": "image",
   "target": "symp",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Sympathetic control. Produces a smaller volume of viscous, protein-rich saliva."
  },
  {
   "id": "img-aldo",
   "type": "image",
   "target": "aldo",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Aldosterone. Acts on the ducts like on the kidney: more Na⁺ reabsorption and K⁺ secretion."
  }
 ],
 "deeper": [
  {
   "title": "Why stroke patients choke",
   "html": "<p>The pharyngeal phase is a brainstem reflex, but it depends on sensory input and cortical coordination. After a stroke, delayed triggering of the reflex or weak laryngeal closure lets food or liquid enter the airway (aspiration), often silently. This is why swallowing is screened before a stroke patient is allowed to eat, and why aspiration pneumonia is a major complication.</p>"
  }
 ],
 "resources": [
  {
   "title": "Physiology, Salivation (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK542251/",
   "kind": "Book",
   "why": "Composition and control of saliva.",
   "note": ""
  },
  {
   "title": "Physiology, Swallowing (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK541071/",
   "kind": "Book",
   "why": "Phases of deglutition.",
   "note": ""
  },
  {
   "title": "Anatomy, Head and Neck, Swallowing (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK554405/",
   "kind": "Book",
   "why": "Muscles and nerves involved.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Physiology, Salivation (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK542251/"
  },
  {
   "name": "Physiology, Swallowing (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK541071/"
  },
  {
   "name": "Anatomy, Head and Neck, Swallowing (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK554405/"
  }
 ],
 "verified": "26 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physio1-gastric-motility"] = {
 "id": "physio1-gastric-motility",
 "subject": "physio1",
 "group": "Digestive physiology",
 "title": "Gastric motility",
 "sourceFile": "Gastric motility (Physiology, Pr. W. Khannoussi)",
 "sourceUrl": "https://drive.google.com/file/d/14-71ShUktWQoMSmF9vsA-soiRs_7GZo3/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "Pacemaker and fasting pattern",
   "html": "<p>Gastric smooth muscle is paced by the <strong>interstitial cells of Cajal</strong>, which generate <strong>slow waves</strong> (about 3 per minute in the stomach); contractions occur when spikes ride on those waves. In the <strong>fasting state</strong> the gut shows the <strong>migrating motor complex (MMC)</strong>, a cycle of about <strong>80-120 minutes</strong>: phase I quiescence, phase II irregular contractions, <strong>phase III</strong> intense regular contractions that sweep residue into the intestine (the 'housekeeper'). <strong>Motilin</strong> triggers phase III; feeding interrupts the MMC, and CCK and gastrin inhibit it.</p>"
  },
  {
   "id": "s1",
   "title": "Proximal stomach: storage",
   "html": "<p>When food arrives, the fundus and body relax: <strong>receptive relaxation</strong> (on swallowing) and <strong>accommodation</strong> (on distension), both <strong>vagovagal reflexes</strong> using <strong>NO and VIP</strong>. Volume rises with little pressure rise. Then the proximal stomach slowly contracts (tone), and this pressure gradient drives <strong>liquid emptying</strong>, which is fast and exponential.</p>"
  },
  {
   "id": "s2",
   "title": "Distal stomach: grinding and emptying",
   "html": "<p>The antrum produces strong peristaltic waves. As a wave reaches the pylorus, the pylorus closes and chyme is pushed back: <strong>retropulsion</strong>, which grinds and mixes. Coordinated <strong>antro-pyloro-duodenal</strong> activity lets only particles of about <strong>1-2 mm</strong> through, at about <strong>2-3 kcal/min</strong>. Solids empty after a <strong>lag phase</strong>, then linearly. Large indigestible particles leave only in <strong>MMC phase III</strong>. Nutrients in the duodenum (fat, acid, hyperosmolar chyme) release <strong>enterogastrones</strong>, <strong>secretin, CCK and GIP</strong>, which slow emptying.</p>"
  },
  {
   "id": "s3",
   "title": "Vomiting",
   "html": "<p>Vomiting is coordinated by the brainstem (vomiting centre, fed by the chemoreceptor trigger zone, vestibular system and vagal afferents). It begins with a retrograde giant contraction from the small intestine, then retching, then forceful expulsion by abdominal and diaphragmatic contraction with the LES open and the glottis closed.</p>"
  },
  {
   "id": "s4",
   "title": "Disorders, tests and drugs",
   "html": "<p><strong>Functional dyspepsia</strong>: postprandial fullness, early satiety, epigastric pain, often with impaired accommodation. <strong>Gastroparesis</strong>: delayed emptying without obstruction, caused by <strong>diabetes</strong>, <strong>scleroderma</strong>, <strong>Parkinson's disease</strong>, <strong>amyloidosis</strong>, drugs or surgery. Tests: gastric emptying scintigraphy, <strong>¹³C-octanoic acid breath test</strong>, wireless motility capsule (<strong>SmartPill</strong>). Prokinetics: <strong>metoclopramide</strong> and <strong>domperidone</strong> (D2 antagonists), <strong>erythromycin</strong> (motilin agonist). After surgery: <strong>vagotomy</strong> impairs accommodation and antral grinding; <strong>dumping syndrome</strong> follows rapid emptying of hyperosmolar chyme.</p>"
  }
 ],
 "exam": [
  "Interstitial cells of Cajal generate slow waves (~3/min in stomach).",
  "MMC: 80-120 min cycle; phase III clears residue; triggered by motilin.",
  "Receptive relaxation and accommodation: vagovagal, NO and VIP.",
  "Liquids empty by proximal tone; solids by antral grinding after a lag.",
  "Pylorus passes particles < 1-2 mm at ~2-3 kcal/min.",
  "Enterogastrones (secretin, CCK, GIP) slow emptying.",
  "Gastroparesis: diabetes, scleroderma, Parkinson's, amyloidosis.",
  "Prokinetics: metoclopramide, domperidone, erythromycin (motilin agonist)."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Gastric motility",
   "caption": "Proximal and distal stomach have different jobs. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"245\" y1=\"70\" x2=\"265\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"495\" y1=\"70\" x2=\"515\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"630\" y1=\"100\" x2=\"630\" y2=\"170\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"130\" y1=\"100\" x2=\"130\" y2=\"170\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"300\" x2=\"530\" y2=\"100\"/>",
   "parts": {
    "fund": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"15\" y=\"40\" width=\"230\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Proximal stomach:",
      "receptive relaxation"
     ],
     "lx": 130.0,
     "ly": 68.0
    },
    "tone": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"15\" y=\"170\" width=\"230\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Tonic contraction:",
      "empties liquids"
     ],
     "lx": 130.0,
     "ly": 198.0
    },
    "antr": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"265\" y=\"40\" width=\"230\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Antrum: grinding",
      "and retropulsion"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "pyl": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"515\" y=\"40\" width=\"230\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Pylorus: passes",
      "particles < 1-2 mm"
     ],
     "lx": 630.0,
     "ly": 68.0
    },
    "duo": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"515\" y=\"170\" width=\"230\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Duodenum: feedback",
      "(CCK, secretin, GIP)"
     ],
     "lx": 630.0,
     "ly": 198.0
    },
    "mmc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"265\" y=\"300\" width=\"230\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Fasting MMC phase III:",
      "clears big particles"
     ],
     "lx": 380.0,
     "ly": 328.0
    }
   },
   "arrows": {
    "fund": [
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
    "tone": [
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
    "antr": [
     {
      "t": [
       265.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "pyl": [
     {
      "t": [
       515.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "duo": [
     {
      "t": [
       515.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "mmc": [
     {
      "t": [
       265.0,
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
   "q": "The gastric pacemaker cells are the:",
   "options": [
    "Parietal cells",
    "Interstitial cells of Cajal",
    "G cells",
    "Chief cells"
   ],
   "answer": 1,
   "why": "Generate slow waves."
  },
  {
   "q": "Phase III of the migrating motor complex is triggered by:",
   "options": [
    "Gastrin",
    "Motilin",
    "Secretin",
    "Insulin"
   ],
   "answer": 1,
   "why": "Fasting housekeeper."
  },
  {
   "q": "The MMC cycle lasts about:",
   "options": [
    "5-10 min",
    "80-120 min",
    "6 hours",
    "24 hours"
   ],
   "answer": 1,
   "why": "Interrupted by feeding."
  },
  {
   "q": "Receptive relaxation is mediated by:",
   "options": [
    "Sympathetic noradrenaline",
    "Vagal NO and VIP",
    "Gastrin",
    "Histamine"
   ],
   "answer": 1,
   "why": "Vagovagal reflex."
  },
  {
   "q": "Liquid emptying mainly depends on:",
   "options": [
    "Antral grinding",
    "Proximal gastric tone",
    "MMC phase III",
    "Pyloric closure"
   ],
   "answer": 1,
   "why": "Pressure gradient."
  },
  {
   "q": "During feeding the pylorus allows particles of about:",
   "options": [
    "1-2 mm",
    "1-2 cm",
    "5 cm",
    "Any size"
   ],
   "answer": 0,
   "why": "Sieving."
  },
  {
   "q": "Which hormone does NOT slow gastric emptying?",
   "options": [
    "CCK",
    "Secretin",
    "GIP",
    "Motilin"
   ],
   "answer": 3,
   "why": "Motilin accelerates."
  },
  {
   "q": "Erythromycin speeds gastric emptying because it:",
   "options": [
    "Blocks D2 receptors",
    "Acts on motilin receptors",
    "Blocks acid",
    "Relaxes the pylorus only"
   ],
   "answer": 1,
   "why": "Motilin agonist."
  },
  {
   "q": "A classic cause of gastroparesis is:",
   "options": [
    "Diabetes mellitus",
    "Hyperthyroidism",
    "Iron deficiency",
    "Hepatitis A"
   ],
   "answer": 0,
   "why": "Vagal neuropathy."
  },
  {
   "q": "The ¹³C-octanoic acid breath test measures:",
   "options": [
    "Acid output",
    "Gastric emptying of solids",
    "H. pylori",
    "Pancreatic function"
   ],
   "answer": 1,
   "why": "Absorbed after emptying."
  },
  {
   "q": "Metoclopramide and domperidone are:",
   "options": [
    "Motilin agonists",
    "Dopamine D2 antagonists",
    "Proton pump inhibitors",
    "Anticholinergics"
   ],
   "answer": 1,
   "why": "Prokinetics."
  },
  {
   "q": "Large indigestible solids leave the stomach:",
   "options": [
    "Immediately after a meal",
    "During MMC phase III",
    "Only by vomiting",
    "Never"
   ],
   "answer": 1,
   "why": "Fasting state."
  },
  {
   "q": "Retropulsion occurs when:",
   "options": [
    "The pylorus closes as the antral wave arrives",
    "The lower oesophageal sphincter relaxes",
    "The fundus relaxes to accept a meal",
    "The duodenum contracts before the antrum"
   ],
   "answer": 0,
   "why": "Grinding."
  },
  {
   "q": "Dumping syndrome results from:",
   "options": [
    "Delayed gastric emptying of solids",
    "Rapid emptying of hyperosmolar chyme",
    "Excess acid secretion by parietal cells",
    "Failure of the LES to relax"
   ],
   "answer": 1,
   "why": "Often after gastric surgery."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "fund",
   "options": [
    "Receptive relaxation",
    "Migrating motor complex",
    "Proximal tone",
    "Duodenal brake"
   ],
   "answer": 0,
   "why": "The arrow points to: Receptive relaxation. A vagovagal reflex (NO, VIP) lets the fundus relax as food arrives, so volume rises with little pressure rise."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "tone",
   "options": [
    "Antral grinding",
    "Duodenal brake",
    "Migrating motor complex",
    "Proximal tone"
   ],
   "answer": 3,
   "why": "The arrow points to: Proximal tone. Slow tonic contraction of the proximal stomach pushes liquids out: liquid emptying depends on this pressure gradient."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "antr",
   "options": [
    "Pyloric sieving",
    "Antral grinding",
    "Migrating motor complex",
    "Receptive relaxation"
   ],
   "answer": 1,
   "why": "The arrow points to: Antral grinding. Peristaltic waves driven by slow waves grind solids; retropulsion against a closing pylorus mixes and breaks them."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pyl",
   "options": [
    "Pyloric sieving",
    "Proximal tone",
    "Duodenal brake",
    "Receptive relaxation"
   ],
   "answer": 0,
   "why": "The arrow points to: Pyloric sieving. Only particles under about 1-2 mm pass during feeding, at about 2-3 kcal per minute."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "duo",
   "options": [
    "Duodenal brake",
    "Pyloric sieving",
    "Antral grinding",
    "Migrating motor complex"
   ],
   "answer": 0,
   "why": "The arrow points to: Duodenal brake. Fat, acid and hyperosmolar chyme release CCK, secretin and GIP, which slow emptying (enterogastrones)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "mmc",
   "options": [
    "Migrating motor complex",
    "Receptive relaxation",
    "Antral grinding",
    "Duodenal brake"
   ],
   "answer": 0,
   "why": "The arrow points to: Migrating motor complex. Every 80-120 min in fasting, phase III sweeps indigestible solids through the pylorus; motilin triggers it."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Who paces the stomach?",
   "back": "Interstitial cells of Cajal: slow waves about 3/min."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "What is the MMC?",
   "back": "Fasting cycle (80-120 min); phase III sweeps residue; triggered by motilin."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Receptive relaxation?",
   "back": "Vagovagal relaxation of the fundus on swallowing (NO, VIP)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Liquids vs solids emptying?",
   "back": "Liquids: proximal tone, exponential. Solids: lag phase, antral grinding, linear."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Pyloric particle size?",
   "back": "About 1-2 mm during feeding."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Enterogastrones?",
   "back": "Secretin, CCK, GIP: slow emptying."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Causes of gastroparesis?",
   "back": "Diabetes, scleroderma, Parkinson's, amyloidosis, drugs, surgery."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Prokinetic drugs?",
   "back": "Metoclopramide, domperidone (D2 antagonists); erythromycin (motilin agonist)."
  },
  {
   "id": "img-fund",
   "type": "image",
   "target": "fund",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Receptive relaxation. A vagovagal reflex (NO, VIP) lets the fundus relax as food arrives, so volume rises with little pressure rise."
  },
  {
   "id": "img-tone",
   "type": "image",
   "target": "tone",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Proximal tone. Slow tonic contraction of the proximal stomach pushes liquids out: liquid emptying depends on this pressure gradient."
  },
  {
   "id": "img-antr",
   "type": "image",
   "target": "antr",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Antral grinding. Peristaltic waves driven by slow waves grind solids; retropulsion against a closing pylorus mixes and breaks them."
  },
  {
   "id": "img-pyl",
   "type": "image",
   "target": "pyl",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Pyloric sieving. Only particles under about 1-2 mm pass during feeding, at about 2-3 kcal per minute."
  },
  {
   "id": "img-duo",
   "type": "image",
   "target": "duo",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Duodenal brake. Fat, acid and hyperosmolar chyme release CCK, secretin and GIP, which slow emptying (enterogastrones)."
  },
  {
   "id": "img-mmc",
   "type": "image",
   "target": "mmc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Migrating motor complex. Every 80-120 min in fasting, phase III sweeps indigestible solids through the pylorus; motilin triggers it."
  }
 ],
 "deeper": [
  {
   "title": "Why diabetic patients' glucose becomes unpredictable",
   "html": "<p>In diabetic gastroparesis, vagal neuropathy and loss of interstitial cells of Cajal make gastric emptying slow and erratic. A dose of insulin given before a meal may peak while the food is still sitting in the stomach, causing hypoglycaemia, followed later by hyperglycaemia when the food finally empties. Recognising gastroparesis explains 'brittle' glucose control and changes how insulin is timed.</p>"
  }
 ],
 "resources": [
  {
   "title": "Physiology, Stomach (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK535425/",
   "kind": "Book",
   "why": "Gastric motility and emptying.",
   "note": ""
  },
  {
   "title": "Gastroparesis (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK551528/",
   "kind": "Book",
   "why": "Causes, tests and treatment.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Physiology, Stomach (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK535425/"
  },
  {
   "name": "Gastroparesis (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK551528/"
  }
 ],
 "verified": "26 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physio1-gastric-secretion"] = {
 "id": "physio1-gastric-secretion",
 "subject": "physio1",
 "group": "Digestive physiology",
 "title": "Gastric secretion",
 "sourceFile": "Gastric secretion (Physiology, Pr. W. Khannoussi)",
 "sourceUrl": "https://drive.google.com/file/d/1N9BitOXuIFrpvTbSlJOeuGtqqsyRoarw/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "Cells and what they secrete",
   "html": "<p>Gastric secretion is the second exocrine secretion of digestion, dominated by <strong>hydrochloric acid</strong>, <strong>pepsin</strong> and <strong>intrinsic factor</strong>. In the <strong>body and fundus</strong>: <strong>parietal cells</strong> (HCl and intrinsic factor), <strong>chief cells</strong> (pepsinogen and gastric lipase), mucous neck cells, and <strong>ECL cells</strong> (histamine). In the <strong>antrum</strong>: <strong>G cells</strong> (gastrin), <strong>D cells</strong> (somatostatin) and mucous cells. Surface cells secrete mucus and HCO₃⁻, which keeps the pH at the cell surface near 7 while luminal pH is 1-2 (the <strong>mucus-bicarbonate barrier</strong>).</p>"
  },
  {
   "id": "s1",
   "title": "How HCl is made",
   "html": "<p>Inside the parietal cell, <strong>carbonic anhydrase</strong> combines CO₂ and H₂O into H₂CO₃, which splits into H⁺ and HCO₃⁻. The <strong>H⁺/K⁺ ATPase</strong> (proton pump) on the apical membrane pumps H⁺ into the lumen in exchange for K⁺. Cl⁻ enters at the basolateral side in exchange for HCO₃⁻ and leaves through apical Cl⁻ channels. The HCO₃⁻ goes to the blood: the <strong>alkaline tide</strong> after a meal. The H⁺ gradient is about a million-fold (0.05 µM in plasma, 150 mM in juice). The <strong>concentration stays constant</strong> (150-160 mM); what varies is the rate.</p>"
  },
  {
   "id": "s2",
   "title": "Roles of the secretions",
   "html": "<p><strong>HCl</strong>: sterilises gastric contents (long-term PPIs raise the risk of bacterial overgrowth; acid does not kill <em>M. tuberculosis</em>), converts pepsinogen into pepsin, begins sucrose hydrolysis, helps iron absorption and ionises calcium. <strong>Pepsin</strong>: splits proteins; activated from pepsinogen by acid. <strong>Gastric lipase</strong>: active at acid pH, about 10% of fat digestion, important in newborns. <strong>Mucus</strong>: protection; its synthesis depends on <strong>prostaglandins</strong>, which is why NSAIDs damage the stomach. <strong>Intrinsic factor</strong>: a glycoprotein that binds <strong>vitamin B12</strong>; the complex is absorbed in the <strong>terminal ileum</strong>. Its loss causes <strong>pernicious (Biermer's) anaemia</strong>, with achlorhydria and gastric atrophy.</p><p class='note'>One slide says acid converts ferrous iron to ferric iron. It is the other way round: acid keeps iron soluble and helps reduce <strong>ferric (Fe³⁺) to ferrous (Fe²⁺)</strong>, the form absorbed in the duodenum. That is why long-term PPIs can cause iron deficiency.</p>"
  },
  {
   "id": "s3",
   "title": "Regulation and phases",
   "html": "<p>Three stimulants act together and <strong>potentiate</strong> each other: <strong>acetylcholine</strong> (M3, Ca²⁺ pathway), <strong>gastrin</strong> (CCK2, Ca²⁺) and <strong>histamine</strong> (H2, cAMP). The vagus acts three ways: directly on parietal cells, on ECL cells (histamine) and on G cells via <strong>GRP</strong> (gastrin). The brake is <strong>somatostatin</strong> from D cells, released when antral pH falls below about 3; prostaglandins also inhibit. <strong>Cephalic phase</strong> (~30%): sight, smell, taste, via the vagus. <strong>Gastric phase</strong> (~60%): distension (vagovagal and local reflexes) and amino acids/peptides (gastrin). <strong>Intestinal phase</strong>: mostly inhibitory; acid, fat and hyperosmolar chyme in the duodenum release <strong>secretin, somatostatin and GIP</strong>, which switch acid off.</p>"
  },
  {
   "id": "s4",
   "title": "Clinical applications",
   "html": "<p><strong>Peptic ulcer</strong> results from an imbalance between aggression (acid, pepsin, <em>H. pylori</em>, NSAIDs) and defence (mucus, bicarbonate, prostaglandins, blood flow). <strong><em>Helicobacter pylori</em></strong> is the main cause. Drugs: <strong>proton pump inhibitors</strong> (omeprazole: block the final common pathway), <strong>H2 antagonists</strong> (cimetidine), antimuscarinics (atropine, rarely used). <strong>Autoimmune atrophic gastritis</strong> destroys the fundic glands: achlorhydria, B12 deficiency, and high gastrin (no acid to trigger somatostatin). <strong>Zollinger-Ellison syndrome</strong>: a gastrin-secreting tumour (gastrinoma) causes massive acid output and multiple, diffuse ulcers.</p>"
  }
 ],
 "exam": [
  "Parietal cells: HCl and intrinsic factor. Chief cells: pepsinogen and lipase.",
  "G cells (antrum): gastrin. D cells: somatostatin. ECL cells: histamine.",
  "H⁺/K⁺ ATPase pumps H⁺ out for K⁺; HCO₃⁻ goes to blood (alkaline tide).",
  "Acid concentration is constant (~150 mM); the rate varies.",
  "ACh (M3), gastrin (CCK2), histamine (H2) potentiate each other.",
  "Somatostatin (antral pH < 3) inhibits gastrin: negative feedback.",
  "Phases: cephalic ~30%, gastric ~60%, intestinal mainly inhibitory.",
  "Intrinsic factor + B12 absorbed in the terminal ileum; loss → pernicious anaemia.",
  "Mucus depends on prostaglandins: NSAIDs cause ulcers.",
  "Zollinger-Ellison: gastrinoma → hyperacidity and multiple ulcers."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Control of the parietal cell",
   "caption": "Three stimulants and one brake. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"220\" y1=\"90\" x2=\"315\" y2=\"150\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"235\" y1=\"180\" x2=\"300\" y2=\"180\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"220\" y1=\"270\" x2=\"315\" y2=\"210\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"500\" y1=\"180\" x2=\"560\" y2=\"180\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"315\" y1=\"300\" x2=\"220\" y2=\"210\"/>",
   "parts": {
    "vag": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"15\" y=\"30\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Vagus: ACh",
      "(M3 receptor)"
     ],
     "lx": 125.0,
     "ly": 58.0
    },
    "g": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"15\" y=\"150\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "G cell (antrum):",
      "gastrin (CCK2)"
     ],
     "lx": 125.0,
     "ly": 178.0
    },
    "ecl": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"15\" y=\"270\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "ECL cell: histamine",
      "(H2 receptor)"
     ],
     "lx": 125.0,
     "ly": 298.0
    },
    "par": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"300\" y=\"150\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Parietal cell:",
      "H⁺/K⁺ ATPase"
     ],
     "lx": 400.0,
     "ly": 178.0
    },
    "hcl": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"560\" y=\"150\" width=\"185\" height=\"60\" rx=\"10\"/>",
     "label": [
      "HCl + intrinsic",
      "factor to lumen"
     ],
     "lx": 652.5,
     "ly": 178.0
    },
    "d": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"300\" y=\"300\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "D cell: somatostatin",
      "(acid pH < 3)"
     ],
     "lx": 400.0,
     "ly": 328.0
    }
   },
   "arrows": {
    "vag": [
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
    "g": [
     {
      "t": [
       15.0,
       158.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "ecl": [
     {
      "t": [
       15.0,
       278.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "par": [
     {
      "t": [
       300.0,
       158.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "hcl": [
     {
      "t": [
       560.0,
       158.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "d": [
     {
      "t": [
       300.0,
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
   "q": "Intrinsic factor is secreted by:",
   "options": [
    "Chief cells",
    "Parietal cells",
    "G cells",
    "D cells"
   ],
   "answer": 1,
   "why": "Along with HCl."
  },
  {
   "q": "Pepsinogen is secreted by:",
   "options": [
    "Parietal cells",
    "Chief cells",
    "ECL cells",
    "Mucous neck cells only"
   ],
   "answer": 1,
   "why": "Activated by acid."
  },
  {
   "q": "Gastrin is secreted by G cells located in the:",
   "options": [
    "Fundus",
    "Antrum",
    "Cardia",
    "Duodenal crypts only"
   ],
   "answer": 1,
   "why": "Antral glands."
  },
  {
   "q": "The proton pump exchanges H⁺ for:",
   "options": [
    "Na⁺",
    "K⁺",
    "Cl⁻",
    "Ca²⁺"
   ],
   "answer": 1,
   "why": "H⁺/K⁺ ATPase."
  },
  {
   "q": "After a meal, blood leaving the stomach is alkaline because:",
   "options": [
    "HCO₃⁻ is exchanged for Cl⁻ into blood",
    "Pepsin is absorbed into the blood",
    "Gastrin itself is an alkaline hormone",
    "K⁺ leaves the cell into the blood"
   ],
   "answer": 0,
   "why": "Alkaline tide."
  },
  {
   "q": "Histamine stimulates the parietal cell through:",
   "options": [
    "H1 receptors",
    "H2 receptors and cAMP",
    "M3 receptors",
    "CCK2 receptors"
   ],
   "answer": 1,
   "why": "Cimetidine blocks it."
  },
  {
   "q": "Acetylcholine acts on the parietal cell via:",
   "options": [
    "Nicotinic receptors",
    "M3 receptors",
    "H2 receptors",
    "β2 receptors"
   ],
   "answer": 1,
   "why": "Ca²⁺ pathway."
  },
  {
   "q": "The main inhibitor of gastrin release is:",
   "options": [
    "Secretin",
    "Somatostatin",
    "Histamine",
    "GRP"
   ],
   "answer": 1,
   "why": "From D cells when pH < 3."
  },
  {
   "q": "The phase responsible for most acid secretion is:",
   "options": [
    "Cephalic",
    "Gastric",
    "Intestinal",
    "Interdigestive"
   ],
   "answer": 1,
   "why": "About 60%."
  },
  {
   "q": "Vitamin B12-intrinsic factor complex is absorbed in the:",
   "options": [
    "Duodenum",
    "Jejunum",
    "Terminal ileum",
    "Colon"
   ],
   "answer": 2,
   "why": "Specific receptor."
  },
  {
   "q": "NSAIDs damage the gastric mucosa mainly by:",
   "options": [
    "Blocking prostaglandin synthesis",
    "Increasing gastrin",
    "Blocking the proton pump",
    "Killing H. pylori"
   ],
   "answer": 0,
   "why": "Less mucus and HCO₃⁻."
  },
  {
   "q": "Omeprazole works by blocking:",
   "options": [
    "H2 receptors",
    "The H⁺/K⁺ ATPase",
    "M3 receptors",
    "Carbonic anhydrase"
   ],
   "answer": 1,
   "why": "Final common pathway."
  },
  {
   "q": "Zollinger-Ellison syndrome is caused by a tumour secreting:",
   "options": [
    "Insulin",
    "Gastrin",
    "Somatostatin",
    "VIP"
   ],
   "answer": 1,
   "why": "Gastrinoma."
  },
  {
   "q": "In autoimmune atrophic gastritis, serum gastrin is:",
   "options": [
    "Low",
    "High",
    "Normal",
    "Absent"
   ],
   "answer": 1,
   "why": "No acid to inhibit it."
  },
  {
   "q": "As secretion rate rises, the H⁺ concentration of gastric juice:",
   "options": [
    "Stays about constant (150-160 mM)",
    "Roughly doubles with each meal",
    "Falls progressively towards zero",
    "Becomes alkaline at high flow"
   ],
   "answer": 0,
   "why": "Rate varies, not concentration."
  },
  {
   "q": "Gastric lipase accounts for about what share of fat digestion?",
   "options": [
    "10%",
    "50%",
    "90%",
    "0%"
   ],
   "answer": 0,
   "why": "More important in newborns."
  },
  {
   "q": "Vagal fibres stimulate G cells through:",
   "options": [
    "Histamine",
    "Gastrin-releasing peptide",
    "Somatostatin",
    "Secretin"
   ],
   "answer": 1,
   "why": "Not ACh directly."
  },
  {
   "q": "Which does gastric acid NOT do?",
   "options": [
    "Activate pepsinogen",
    "Sterilise food",
    "Emulsify fat",
    "Aid iron absorption"
   ],
   "answer": 2,
   "why": "Bile emulsifies fat."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "vag",
   "options": [
    "Secretion",
    "Gastrin",
    "Acetylcholine",
    "Somatostatin"
   ],
   "answer": 2,
   "why": "The arrow points to: Acetylcholine. Vagal and enteric neurons release ACh onto M3 receptors of the parietal cell (Ca²⁺ pathway); atropine blocks it."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "g",
   "options": [
    "Histamine",
    "Acetylcholine",
    "Somatostatin",
    "Gastrin"
   ],
   "answer": 3,
   "why": "The arrow points to: Gastrin. Released by antral G cells in response to GRP (vagus), distension and amino acids; acts on CCK2 receptors of parietal and ECL cells."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ecl",
   "options": [
    "Somatostatin",
    "Histamine",
    "Acetylcholine",
    "Gastrin"
   ],
   "answer": 1,
   "why": "The arrow points to: Histamine. Paracrine release from ECL cells, acting on H2 receptors (cAMP); blocked by cimetidine and other H2 antagonists."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "par",
   "options": [
    "Somatostatin",
    "Secretion",
    "Acetylcholine",
    "Parietal cell"
   ],
   "answer": 3,
   "why": "The arrow points to: Parietal cell. The H⁺/K⁺ ATPase (proton pump) pumps H⁺ out in exchange for K⁺; Cl⁻ follows through apical channels. Blocked by omeprazole."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "hcl",
   "options": [
    "Gastrin",
    "Secretion",
    "Somatostatin",
    "Histamine"
   ],
   "answer": 1,
   "why": "The arrow points to: Secretion. HCl at about 150-160 mM (pH 1-2) and intrinsic factor, needed for vitamin B12 absorption in the ileum."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "d",
   "options": [
    "Parietal cell",
    "Acetylcholine",
    "Secretion",
    "Somatostatin"
   ],
   "answer": 3,
   "why": "The arrow points to: Somatostatin. When antral pH falls below about 3, D cells release somatostatin, which inhibits gastrin release: negative feedback."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Cells of gastric glands and their products?",
   "back": "Parietal: HCl, IF. Chief: pepsinogen, lipase. G: gastrin. D: somatostatin. ECL: histamine. Mucous: mucus."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "How is H⁺ produced?",
   "back": "Carbonic anhydrase: CO₂ + H₂O → H⁺ + HCO₃⁻; H⁺/K⁺ ATPase pumps H⁺ out."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "What is the alkaline tide?",
   "back": "HCO₃⁻ exchanged for Cl⁻ enters the blood during acid secretion."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Three stimulants of the parietal cell?",
   "back": "ACh (M3), gastrin (CCK2), histamine (H2); they potentiate."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Negative feedback on acid?",
   "back": "Antral pH < 3 → D cells release somatostatin → less gastrin."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Phases of gastric secretion?",
   "back": "Cephalic ~30%, gastric ~60%, intestinal (inhibitory: secretin, GIP, somatostatin)."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Role of intrinsic factor?",
   "back": "Binds B12 for absorption in the terminal ileum."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Zollinger-Ellison?",
   "back": "Gastrinoma → massive acid → multiple ulcers."
  },
  {
   "id": "img-vag",
   "type": "image",
   "target": "vag",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Acetylcholine. Vagal and enteric neurons release ACh onto M3 receptors of the parietal cell (Ca²⁺ pathway); atropine blocks it."
  },
  {
   "id": "img-g",
   "type": "image",
   "target": "g",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Gastrin. Released by antral G cells in response to GRP (vagus), distension and amino acids; acts on CCK2 receptors of parietal and ECL cells."
  },
  {
   "id": "img-ecl",
   "type": "image",
   "target": "ecl",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Histamine. Paracrine release from ECL cells, acting on H2 receptors (cAMP); blocked by cimetidine and other H2 antagonists."
  },
  {
   "id": "img-par",
   "type": "image",
   "target": "par",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Parietal cell. The H⁺/K⁺ ATPase (proton pump) pumps H⁺ out in exchange for K⁺; Cl⁻ follows through apical channels. Blocked by omeprazole."
  },
  {
   "id": "img-hcl",
   "type": "image",
   "target": "hcl",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Secretion. HCl at about 150-160 mM (pH 1-2) and intrinsic factor, needed for vitamin B12 absorption in the ileum."
  },
  {
   "id": "img-d",
   "type": "image",
   "target": "d",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Somatostatin. When antral pH falls below about 3, D cells release somatostatin, which inhibits gastrin release: negative feedback."
  }
 ],
 "deeper": [
  {
   "title": "Why PPIs work better than H2 blockers",
   "html": "<p>H2 antagonists remove only one of the three stimulants; gastrin and acetylcholine can still drive the pump, especially after a meal. Proton pump inhibitors block the H⁺/K⁺ ATPase itself, the final common step, so acid falls whatever the stimulus. They bind irreversibly to active pumps, which is why they are taken 30 minutes before breakfast, when pumps are about to be switched on, and why their effect lasts until new pumps are made.</p>"
  }
 ],
 "resources": [
  {
   "title": "Histology, Parietal Cells (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK547758/",
   "kind": "Book",
   "why": "Acid secretion and its regulation.",
   "note": ""
  },
  {
   "title": "Physiology, Gastric Intrinsic Factor (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK546655/",
   "kind": "Book",
   "why": "B12 absorption and pernicious anaemia.",
   "note": ""
  },
  {
   "title": "Gastrinoma (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK441842/",
   "kind": "Book",
   "why": "Zollinger-Ellison syndrome.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Histology, Parietal Cells (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK547758/"
  },
  {
   "name": "Physiology, Gastric Intrinsic Factor (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK546655/"
  },
  {
   "name": "Gastrinoma (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK441842/"
  }
 ],
 "verified": "26 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physio1-pancreas"] = {
 "id": "physio1-pancreas",
 "subject": "physio1",
 "group": "Digestive physiology",
 "title": "Exocrine pancreas",
 "sourceFile": "Pancreas physiology (Physiology, Pr. W. Khannoussi)",
 "sourceUrl": "https://drive.google.com/file/d/1tfLO_bbCRXQSbLYRoev9e-v-PebegFiS/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "Structure",
   "html": "<p>The pancreas is an <strong>amphicrine</strong> gland, 12-15 cm long, lying from the duodenum to the spleen. Its <strong>endocrine</strong> part (islets of Langerhans: α, β, δ, PP cells) regulates blood glucose. Its <strong>exocrine</strong> part makes pancreatic juice. The functional unit is the <strong>acinus</strong> (6-8 acinar cells around a lumen) that secretes <strong>enzymes</strong> stored as <strong>zymogen granules</strong>; the <strong>duct cells</strong> secrete <strong>water and bicarbonate</strong>. Juice drains through the main duct (Wirsung), joined by the common bile duct, and the accessory duct (Santorini). Blood supply: splenic, gastroduodenal and superior mesenteric branches; innervation: vagus (stimulates) and splanchnic nerves.</p>"
  },
  {
   "id": "s1",
   "title": "Pancreatic juice",
   "html": "<p>A clear, <strong>isotonic</strong>, alkaline fluid (pH 7-9), <strong>1.5-3 L per day</strong>, 98% water. Na⁺ and K⁺ are at plasma concentrations. <strong>HCO₃⁻</strong> is secreted by the ducts through <strong>CFTR</strong> and the Cl⁻/HCO₃⁻ exchanger, stimulated by <strong>secretin</strong>; as flow rises, HCO₃⁻ rises and Cl⁻ falls (their sum is constant). Bicarbonate <strong>neutralises gastric acid</strong> so the enzymes can work.</p><p><strong>Enzymes</strong> (90% of proteins): proteases secreted as zymogens (<strong>trypsinogen</strong>, chymotrypsinogen, proelastase, procarboxypeptidases A and B, kallikreinogen), <strong>lipase</strong> (secreted active) with its cofactor <strong>colipase</strong>, prophospholipase A2, carboxylester hydrolase, <strong>amylase</strong>, ribonuclease and deoxyribonuclease. <strong>Enterokinase</strong> (enteropeptidase) on the duodenal brush border turns trypsinogen into <strong>trypsin</strong>, which activates all the others. Protection against autodigestion: zymogens, and <strong>trypsin inhibitors</strong> (SPINK1/PSTI, Kunitz). Other proteins: lithostatin (prevents calcium stones), lactoferrin.</p>"
  },
  {
   "id": "s2",
   "title": "Regulation",
   "html": "<p><strong>Stimulants</strong>: secretin (bicarbonate), <strong>CCK</strong> (enzymes), the vagus (ACh, enzymes), gastrin, VIP and others. <strong>Inhibitors</strong>: somatostatin, pancreatic polypeptide, pancreastatin, glucagon, sympathetic nerves. Basal secretion (between meals) is about 20% of maximum. During a meal: <strong>cephalic phase</strong> (vagal: enzymes), <strong>gastric phase</strong> (distension: gastro-pancreatic reflexes), <strong>intestinal phase</strong> (the main one: duodenal pH < 4.5 → secretin; fat and amino acids → CCK). Secretion peaks at 2-3 h and returns to basal at 7-10 h, and enzyme mix adapts to diet.</p>"
  },
  {
   "id": "s3",
   "title": "Clinical applications",
   "html": "<p><strong>Tests</strong>: direct sampling of juice is no longer used. Indirect: stool (steatorrhoea, creatorrhoea, <strong>faecal elastase</strong> < 200 µg/g means insufficiency), blood (<strong>lipase</strong>, amylase, which is less specific), urine amylase. <strong>Acute pancreatitis</strong>: premature activation of trypsin inside the gland causes autodigestion and inflammation. Main causes: <strong>gallstones</strong> and <strong>alcohol</strong>; others include drugs, hypertriglyceridaemia, autoimmune, obstructive and infectious causes. Diagnosis: typical epigastric pain radiating to the back plus <strong>lipase > 3 × normal</strong> (or imaging). <strong>Chronic pancreatitis</strong>: fibrosis and calcifications (trypsin degrades lithostatin), leading to <strong>exocrine insufficiency</strong> (maldigestion, steatorrhoea) and <strong>diabetes</strong>. Causes: alcohol, autoimmune, obstruction, and genetic mutations (<strong>SPINK1</strong>, <strong>PRSS1</strong> cationic trypsinogen, <strong>CFTR</strong>).</p><p class='note'>The slide lists faecal elastase as &lt;200 'mg/j'. The usual cut-off is <strong>200 µg per gram of stool</strong>.</p>"
  }
 ],
 "exam": [
  "Acinar cells: enzymes (zymogens). Duct cells: water and HCO₃⁻.",
  "Juice: isotonic, alkaline, 1.5-3 L/day.",
  "Secretin (low duodenal pH) → bicarbonate; CCK (fat, amino acids) → enzymes.",
  "Enterokinase activates trypsinogen; trypsin activates the rest.",
  "Lipase and amylase are secreted active; proteases as zymogens.",
  "Protection: zymogens and trypsin inhibitors (SPINK1).",
  "HCO₃⁻ secretion depends on CFTR (cystic fibrosis).",
  "Intestinal phase is the main phase of pancreatic secretion.",
  "Acute pancreatitis: gallstones, alcohol; pain + lipase > 3 × normal.",
  "Chronic pancreatitis: exocrine insufficiency, calcifications, diabetes."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Exocrine pancreas",
   "caption": "Two cell types, two hormones. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"215\" y1=\"70\" x2=\"270\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"470\" y1=\"70\" x2=\"530\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"215\" y1=\"230\" x2=\"270\" y2=\"230\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"470\" y1=\"230\" x2=\"530\" y2=\"230\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"597.5\" y1=\"260\" x2=\"637.5\" y2=\"320\"/>",
   "parts": {
    "acid": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"15\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Acid chyme",
      "in duodenum"
     ],
     "lx": 115.0,
     "ly": 68.0
    },
    "sec": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"270\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "S cells:",
      "secretin"
     ],
     "lx": 370.0,
     "ly": 68.0
    },
    "duct": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"530\" y=\"40\" width=\"215\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Duct cells: HCO₃⁻",
      "(CFTR, Cl⁻/HCO₃⁻)"
     ],
     "lx": 637.5,
     "ly": 68.0
    },
    "fat": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"15\" y=\"200\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Fat and amino acids",
      "in duodenum"
     ],
     "lx": 115.0,
     "ly": 228.0
    },
    "cck": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"270\" y=\"200\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "I cells:",
      "CCK"
     ],
     "lx": 370.0,
     "ly": 228.0
    },
    "acin": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"530\" y=\"200\" width=\"215\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Acinar cells:",
      "zymogens"
     ],
     "lx": 637.5,
     "ly": 228.0
    },
    "ek": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9ecec\" x=\"450\" y=\"320\" width=\"295\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Enterokinase: trypsinogen",
      "→ trypsin → cascade"
     ],
     "lx": 597.5,
     "ly": 348.0
    }
   },
   "arrows": {
    "acid": [
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
    "sec": [
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
    "duct": [
     {
      "t": [
       530.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "fat": [
     {
      "t": [
       15.0,
       208.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "cck": [
     {
      "t": [
       270.0,
       208.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "acin": [
     {
      "t": [
       530.0,
       208.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "ek": [
     {
      "t": [
       450.0,
       328.0
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
   "q": "Bicarbonate in pancreatic juice is secreted mainly by:",
   "options": [
    "Acinar cells",
    "Duct cells",
    "β cells",
    "δ cells"
   ],
   "answer": 1,
   "why": "Stimulated by secretin."
  },
  {
   "q": "The main stimulus for pancreatic bicarbonate secretion is:",
   "options": [
    "CCK",
    "Secretin",
    "Gastrin",
    "Somatostatin"
   ],
   "answer": 1,
   "why": "Released by acid chyme."
  },
  {
   "q": "CCK is released in response to:",
   "options": [
    "Acid only",
    "Fat and amino acids in the duodenum",
    "Gastric distension only",
    "Glucose in blood"
   ],
   "answer": 1,
   "why": "From I cells."
  },
  {
   "q": "Trypsinogen is converted to trypsin by:",
   "options": [
    "Pepsin",
    "Enterokinase",
    "Lipase",
    "Bile salts"
   ],
   "answer": 1,
   "why": "Duodenal brush border."
  },
  {
   "q": "Which pancreatic enzyme is secreted in active form?",
   "options": [
    "Trypsinogen",
    "Lipase",
    "Chymotrypsinogen",
    "Proelastase"
   ],
   "answer": 1,
   "why": "Needs colipase."
  },
  {
   "q": "The pancreas avoids autodigestion partly through:",
   "options": [
    "SPINK1 trypsin inhibitor",
    "High acid in the ducts",
    "Secreting pepsin",
    "Lack of blood supply"
   ],
   "answer": 0,
   "why": "PSTI."
  },
  {
   "q": "Daily volume of pancreatic juice is about:",
   "options": [
    "100 mL",
    "1.5-3 L",
    "10 L",
    "500 mL"
   ],
   "answer": 1,
   "why": ""
  },
  {
   "q": "As pancreatic flow rises, bicarbonate concentration:",
   "options": [
    "Falls",
    "Rises while Cl⁻ falls",
    "Stays zero",
    "Rises with Cl⁻"
   ],
   "answer": 1,
   "why": "Sum constant."
  },
  {
   "q": "The duct protein defective in cystic fibrosis is:",
   "options": [
    "CFTR",
    "H⁺/K⁺ ATPase",
    "SGLT1",
    "Na⁺/K⁺ ATPase"
   ],
   "answer": 0,
   "why": "Cl⁻/HCO₃⁻ channel."
  },
  {
   "q": "The most specific blood test for acute pancreatitis is:",
   "options": [
    "Amylase",
    "Lipase",
    "ALT",
    "Bilirubin"
   ],
   "answer": 1,
   "why": "> 3 × normal."
  },
  {
   "q": "The two main causes of acute pancreatitis are:",
   "options": [
    "Gallstones and alcohol",
    "Viruses and trauma",
    "Drugs and tumours",
    "Hypercalcaemia and mumps"
   ],
   "answer": 0,
   "why": ""
  },
  {
   "q": "Faecal elastase is used to detect:",
   "options": [
    "Acute pancreatitis",
    "Exocrine insufficiency",
    "Gastrinoma",
    "Coeliac disease"
   ],
   "answer": 1,
   "why": "Low in insufficiency."
  },
  {
   "q": "Chronic pancreatitis may cause diabetes because:",
   "options": [
    "Islets are destroyed by fibrosis",
    "Lipase levels rise in blood",
    "Secretin release is lost",
    "Bile flow to the gut stops"
   ],
   "answer": 0,
   "why": "Endocrine loss."
  },
  {
   "q": "Which phase contributes most to pancreatic secretion?",
   "options": [
    "Cephalic",
    "Gastric",
    "Intestinal",
    "Interdigestive"
   ],
   "answer": 2,
   "why": "Secretin and CCK."
  },
  {
   "q": "A gene linked to hereditary pancreatitis is:",
   "options": [
    "PRSS1",
    "BRCA1",
    "HFE",
    "APC"
   ],
   "answer": 0,
   "why": "Also SPINK1, CFTR."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "acid",
   "options": [
    "Ductal secretion",
    "Secretin",
    "Duodenal acidity",
    "Acinar cells"
   ],
   "answer": 2,
   "why": "The arrow points to: Duodenal acidity. When duodenal pH falls below about 4.5, S cells release secretin."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "sec",
   "options": [
    "Activation cascade",
    "Ductal secretion",
    "Secretin",
    "Cholecystokinin"
   ],
   "answer": 2,
   "why": "The arrow points to: Secretin. The main stimulus of water and bicarbonate secretion by the duct cells."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "duct",
   "options": [
    "Acinar cells",
    "Ductal secretion",
    "Activation cascade",
    "Secretin"
   ],
   "answer": 1,
   "why": "The arrow points to: Ductal secretion. Duct cells secrete HCO₃⁻ via CFTR and the Cl⁻/HCO₃⁻ exchanger; defective CFTR in cystic fibrosis gives thick secretions."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "fat",
   "options": [
    "Duodenal acidity",
    "Cholecystokinin",
    "Ductal secretion",
    "Nutrients"
   ],
   "answer": 3,
   "why": "The arrow points to: Nutrients. Fatty acids and amino acids in the duodenum are the stimulus for CCK release."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "cck",
   "options": [
    "Nutrients",
    "Secretin",
    "Cholecystokinin",
    "Duodenal acidity"
   ],
   "answer": 2,
   "why": "The arrow points to: Cholecystokinin. Stimulates acinar enzyme secretion (with the vagus) and contracts the gallbladder."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "acin",
   "options": [
    "Secretin",
    "Duodenal acidity",
    "Activation cascade",
    "Acinar cells"
   ],
   "answer": 3,
   "why": "The arrow points to: Acinar cells. Store enzymes as inactive zymogens in granules; lipase and amylase are secreted active."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ek",
   "options": [
    "Nutrients",
    "Acinar cells",
    "Activation cascade",
    "Cholecystokinin"
   ],
   "answer": 2,
   "why": "The arrow points to: Activation cascade. Enterokinase on the duodenal brush border activates trypsinogen; trypsin then activates all the other zymogens."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Acinar vs duct cells?",
   "back": "Acinar: enzymes (zymogens). Duct: water and HCO₃⁻."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Secretin vs CCK?",
   "back": "Secretin (acid): bicarbonate. CCK (fat, amino acids): enzymes and gallbladder contraction."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "How are proteases activated?",
   "back": "Enterokinase activates trypsinogen → trypsin, which activates the others."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Enzymes secreted active?",
   "back": "Lipase and amylase."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Protection from autodigestion?",
   "back": "Zymogens, trypsin inhibitors (SPINK1/PSTI, Kunitz)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Diagnosis of acute pancreatitis?",
   "back": "Typical pain + lipase > 3 × normal (or imaging)."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Consequences of chronic pancreatitis?",
   "back": "Steatorrhoea, calcifications, diabetes."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Test for exocrine insufficiency?",
   "back": "Faecal elastase (< 200 µg/g)."
  },
  {
   "id": "img-acid",
   "type": "image",
   "target": "acid",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Duodenal acidity. When duodenal pH falls below about 4.5, S cells release secretin."
  },
  {
   "id": "img-sec",
   "type": "image",
   "target": "sec",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Secretin. The main stimulus of water and bicarbonate secretion by the duct cells."
  },
  {
   "id": "img-duct",
   "type": "image",
   "target": "duct",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Ductal secretion. Duct cells secrete HCO₃⁻ via CFTR and the Cl⁻/HCO₃⁻ exchanger; defective CFTR in cystic fibrosis gives thick secretions."
  },
  {
   "id": "img-fat",
   "type": "image",
   "target": "fat",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Nutrients. Fatty acids and amino acids in the duodenum are the stimulus for CCK release."
  },
  {
   "id": "img-cck",
   "type": "image",
   "target": "cck",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Cholecystokinin. Stimulates acinar enzyme secretion (with the vagus) and contracts the gallbladder."
  },
  {
   "id": "img-acin",
   "type": "image",
   "target": "acin",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Acinar cells. Store enzymes as inactive zymogens in granules; lipase and amylase are secreted active."
  },
  {
   "id": "img-ek",
   "type": "image",
   "target": "ek",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Activation cascade. Enterokinase on the duodenal brush border activates trypsinogen; trypsin then activates all the other zymogens."
  }
 ],
 "deeper": [
  {
   "title": "Why steatorrhoea is the first sign of pancreatic failure",
   "html": "<p>Several enzymes can digest starch and protein (salivary amylase, pepsin, brush border peptidases), but fat digestion depends almost entirely on pancreatic lipase and colipase. When exocrine function drops below about 10% of normal, fat is the first nutrient to escape digestion, producing pale, bulky, greasy stools and deficiency of fat-soluble vitamins (A, D, E, K). Treatment is pancreatic enzyme replacement taken with meals.</p>"
  }
 ],
 "resources": [
  {
   "title": "Physiology, Pancreas (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK459261/",
   "kind": "Book",
   "why": "Exocrine and endocrine functions.",
   "note": ""
  },
  {
   "title": "The Exocrine Pancreas (NCBI Bookshelf)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK54128/",
   "kind": "Book",
   "why": "Detailed physiology of pancreatic secretion.",
   "note": ""
  },
  {
   "title": "Acute Pancreatitis (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK482468/",
   "kind": "Book",
   "why": "Causes and diagnosis.",
   "note": ""
  },
  {
   "title": "Exocrine Pancreatic Insufficiency (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK555926/",
   "kind": "Book",
   "why": "Faecal elastase and enzyme replacement.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Physiology, Pancreas (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK459261/"
  },
  {
   "name": "The Exocrine Pancreas (NCBI Bookshelf)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK54128/"
  },
  {
   "name": "Acute Pancreatitis (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK482468/"
  },
  {
   "name": "Exocrine Pancreatic Insufficiency (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK555926/"
  }
 ],
 "verified": "26 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physio1-small-intestine-motility"] = {
 "id": "physio1-small-intestine-motility",
 "subject": "physio1",
 "group": "Digestive physiology",
 "title": "Small intestine motility",
 "sourceFile": "Motility of the small intestine (Physiology, Pr. O. Bahlaoui)",
 "sourceUrl": "https://drive.google.com/file/d/1R2u4xYZ8BgNKZ-IbukheAaSWyLbTZAnT/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "Reminders",
   "html": "<p>The small intestine is 5-6 m long, 75-80% of the digestive tract: <strong>duodenum</strong> (25 cm), <strong>jejunum</strong> (about 2 m) and <strong>ileum</strong> (about 3 m), which ends at the <strong>ileocaecal valve</strong>. Its motility mixes food with enzymes, maximises absorption and moves waste on. It is controlled by the <strong>enteric nervous system</strong>: the <strong>myenteric (Auerbach) plexus</strong> between the longitudinal and circular layers (motor control) and the <strong>submucosal (Meissner) plexus</strong> (secretion and sensory role). Extrinsic nerves modulate it: <strong>sympathetic</strong> (splanchnic nerves, noradrenaline) inhibits; <strong>parasympathetic</strong> (vagus, ACh) stimulates, mainly proximally. Most vagal fibres are sensory.</p>"
  },
  {
   "id": "s1",
   "title": "Fasting state: the MMC",
   "html": "<p>Between meals, the <strong>migrating motor complex</strong> recurs every <strong>90-120 minutes</strong>. <strong>Phase I</strong>: quiescence. <strong>Phase II</strong>: irregular contractions of increasing strength. <strong>Phase III</strong>: intense, regular contractions that migrate down the gut, clearing undigested residue and bacteria (the housekeeper) and preparing for the next meal. <strong>Motilin</strong> from M cells of the duodenum starts the MMC; <strong>food intake suppresses it</strong>.</p>"
  },
  {
   "id": "s2",
   "title": "Fed state",
   "html": "<p><strong>Segmentation</strong>: rhythmic, localised contractions of the circular muscle that divide and re-mix chyme without moving it far, increasing contact with the mucosa; regulated by the ENS and <strong>CCK</strong>. <strong>Peristalsis</strong>: coordinated waves that move chyme <strong>aborally</strong>: the circular muscle contracts behind the bolus while the segment ahead relaxes (the law of the intestine), mediated by <strong>serotonin (5-HT)</strong>, <strong>ACh</strong> and <strong>substance P</strong> (contraction) with NO and VIP (relaxation).</p>"
  },
  {
   "id": "s3",
   "title": "Disorders",
   "html": "<p><strong>Intestinal dysmotility</strong> (reduced motility): bloating and <strong>small intestinal bacterial overgrowth</strong>, because the MMC no longer clears bacteria. <strong>Diarrhoea</strong>: excess motility shortens contact time and reduces absorption. <strong>Ileus</strong>: loss of motility after surgery, with electrolyte disturbances (low K⁺) or neurological impairment; it causes distension and vomiting without mechanical obstruction.</p>"
  }
 ],
 "exam": [
  "Small intestine: 5-6 m (duodenum 25 cm, jejunum ~2 m, ileum ~3 m).",
  "Myenteric plexus: motility. Submucosal plexus: secretion.",
  "Vagus stimulates (ACh); sympathetic inhibits (noradrenaline).",
  "MMC every 90-120 min; motilin starts it; food stops it.",
  "Phase III clears residue and bacteria (housekeeper).",
  "Segmentation mixes (ENS, CCK); peristalsis propels (5-HT, ACh, substance P).",
  "Loss of MMC → bacterial overgrowth.",
  "Ileus: absent motility after surgery or with low K⁺."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Small intestine motility",
   "caption": "Fasting and fed patterns. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"215\" y1=\"70\" x2=\"265\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"495\" y1=\"70\" x2=\"545\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"215\" y1=\"230\" x2=\"265\" y2=\"230\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"200\" y1=\"260\" x2=\"280\" y2=\"320\"/>",
   "parts": {
    "fast": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"15\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Fasting state"
     ],
     "lx": 115.0,
     "ly": 76.0
    },
    "mmc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"265\" y=\"40\" width=\"230\" height=\"60\" rx=\"10\"/>",
     "label": [
      "MMC every 90-120 min",
      "(motilin, M cells)"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "ph3": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"545\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Phase III: sweeps",
      "residue and bacteria"
     ],
     "lx": 645.0,
     "ly": 68.0
    },
    "fed": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"15\" y=\"200\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Fed state"
     ],
     "lx": 115.0,
     "ly": 236.0
    },
    "seg": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"265\" y=\"200\" width=\"230\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Segmentation:",
      "mixing (CCK, ENS)"
     ],
     "lx": 380.0,
     "ly": 228.0
    },
    "peri": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"265\" y=\"320\" width=\"230\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Peristalsis: aboral",
      "(5-HT, ACh, subst. P)"
     ],
     "lx": 380.0,
     "ly": 348.0
    }
   },
   "arrows": {
    "fast": [
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
    "mmc": [
     {
      "t": [
       265.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "ph3": [
     {
      "t": [
       545.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "fed": [
     {
      "t": [
       15.0,
       208.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "seg": [
     {
      "t": [
       265.0,
       208.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "peri": [
     {
      "t": [
       265.0,
       328.0
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
   "q": "The MMC recurs about every:",
   "options": [
    "10 min",
    "90-120 min",
    "6 hours",
    "24 hours"
   ],
   "answer": 1,
   "why": "Fasting state."
  },
  {
   "q": "The hormone that initiates the MMC is:",
   "options": [
    "Gastrin",
    "Motilin",
    "Secretin",
    "CCK"
   ],
   "answer": 1,
   "why": "From duodenal M cells."
  },
  {
   "q": "Which phase of the MMC is the 'housekeeper'?",
   "options": [
    "Phase I",
    "Phase II",
    "Phase III",
    "Phase IV"
   ],
   "answer": 2,
   "why": "Intense contractions."
  },
  {
   "q": "The MMC is interrupted by:",
   "options": [
    "Sleep",
    "Eating",
    "Fasting",
    "Motilin"
   ],
   "answer": 1,
   "why": "Fed pattern replaces it."
  },
  {
   "q": "Segmentation mainly serves to:",
   "options": [
    "Propel chyme quickly",
    "Mix chyme with secretions",
    "Clear bacteria",
    "Close the ileocaecal valve"
   ],
   "answer": 1,
   "why": "Local contractions."
  },
  {
   "q": "In peristalsis, ahead of the bolus the gut:",
   "options": [
    "Contracts",
    "Relaxes",
    "Secretes acid",
    "Stays unchanged"
   ],
   "answer": 1,
   "why": "Law of the intestine."
  },
  {
   "q": "Motor activity of the gut is controlled mainly by the:",
   "options": [
    "Submucosal plexus",
    "Myenteric plexus",
    "Phrenic nerve",
    "Spinal cord only"
   ],
   "answer": 1,
   "why": "Auerbach."
  },
  {
   "q": "Sympathetic stimulation of the small intestine:",
   "options": [
    "Increases motility",
    "Inhibits motility",
    "Starts the MMC",
    "Triggers segmentation"
   ],
   "answer": 1,
   "why": "Noradrenaline."
  },
  {
   "q": "A mediator of peristaltic contraction is:",
   "options": [
    "Nitric oxide",
    "Serotonin (5-HT)",
    "VIP",
    "Somatostatin"
   ],
   "answer": 1,
   "why": "With ACh and substance P."
  },
  {
   "q": "Loss of the MMC predisposes to:",
   "options": [
    "Bacterial overgrowth",
    "Peptic ulcer",
    "Gallstones",
    "Hypoglycaemia"
   ],
   "answer": 0,
   "why": "Residue not cleared."
  },
  {
   "q": "Postoperative loss of intestinal motility is called:",
   "options": [
    "Volvulus",
    "Ileus",
    "Intussusception",
    "Diverticulosis"
   ],
   "answer": 1,
   "why": "No mechanical obstruction."
  },
  {
   "q": "The longest part of the small intestine is the:",
   "options": [
    "Duodenum",
    "Jejunum",
    "Ileum",
    "Caecum"
   ],
   "answer": 2,
   "why": "About 3 m."
  },
  {
   "q": "Diarrhoea from excess motility occurs because:",
   "options": [
    "Absorption time is reduced",
    "Secretion stops",
    "Bile is lost",
    "The pylorus closes"
   ],
   "answer": 0,
   "why": ""
  },
  {
   "q": "Which element is at the arrow?",
   "target": "fast",
   "options": [
    "Fed state",
    "Fasting state",
    "Peristalsis",
    "Segmentation"
   ],
   "answer": 1,
   "why": "The arrow points to: Fasting state. Between meals the small intestine is not at rest: it runs the migrating motor complex."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "mmc",
   "options": [
    "Phase III",
    "Fasting state",
    "Peristalsis",
    "Migrating motor complex"
   ],
   "answer": 3,
   "why": "The arrow points to: Migrating motor complex. A cycle every 90-120 minutes in three phases, started by motilin and suppressed by eating."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ph3",
   "options": [
    "Fed state",
    "Phase III",
    "Peristalsis",
    "Fasting state"
   ],
   "answer": 1,
   "why": "The arrow points to: Phase III. Intense rhythmic contractions that clear undigested residue and bacteria: the housekeeper."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "fed",
   "options": [
    "Peristalsis",
    "Fasting state",
    "Migrating motor complex",
    "Fed state"
   ],
   "answer": 3,
   "why": "The arrow points to: Fed state. After a meal the MMC stops and the gut switches to mixing and slow propulsion."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "seg",
   "options": [
    "Fed state",
    "Migrating motor complex",
    "Peristalsis",
    "Segmentation"
   ],
   "answer": 3,
   "why": "The arrow points to: Segmentation. Rhythmic, local ring contractions that mix chyme and increase contact with the mucosa."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "peri",
   "options": [
    "Peristalsis",
    "Fed state",
    "Segmentation",
    "Phase III"
   ],
   "answer": 0,
   "why": "The arrow points to: Peristalsis. Contraction behind the bolus and relaxation ahead of it, moving chyme aborally."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Length of the small intestine parts?",
   "back": "Duodenum 25 cm, jejunum ~2 m, ileum ~3 m; total 5-6 m."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "What is the MMC?",
   "back": "Fasting motor cycle every 90-120 min; phases I-III; started by motilin; stopped by eating."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Segmentation vs peristalsis?",
   "back": "Segmentation: local mixing. Peristalsis: aboral propulsion."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Mediators of peristalsis?",
   "back": "Contraction: ACh, 5-HT, substance P. Relaxation ahead: NO, VIP."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Motility disorders?",
   "back": "Dysmotility (bacterial overgrowth), diarrhoea (fast transit), ileus (no motility)."
  },
  {
   "id": "img-fast",
   "type": "image",
   "target": "fast",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Fasting state. Between meals the small intestine is not at rest: it runs the migrating motor complex."
  },
  {
   "id": "img-mmc",
   "type": "image",
   "target": "mmc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Migrating motor complex. A cycle every 90-120 minutes in three phases, started by motilin and suppressed by eating."
  },
  {
   "id": "img-ph3",
   "type": "image",
   "target": "ph3",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Phase III. Intense rhythmic contractions that clear undigested residue and bacteria: the housekeeper."
  },
  {
   "id": "img-fed",
   "type": "image",
   "target": "fed",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Fed state. After a meal the MMC stops and the gut switches to mixing and slow propulsion."
  },
  {
   "id": "img-seg",
   "type": "image",
   "target": "seg",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Segmentation. Rhythmic, local ring contractions that mix chyme and increase contact with the mucosa."
  },
  {
   "id": "img-peri",
   "type": "image",
   "target": "peri",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Peristalsis. Contraction behind the bolus and relaxation ahead of it, moving chyme aborally."
  }
 ],
 "deeper": [
  {
   "title": "Why hunger rumbles",
   "html": "<p>The loud gurgling of an empty stomach (borborygmi) is largely MMC phase III: strong contractions pushing gas and fluid through an empty gut. Motilin peaks coincide with hunger sensations, and the MMC restarts a few hours after each meal. It is one reason nutritionists sometimes recommend not snacking constantly: the gut needs fasting periods to run its housekeeper wave.</p>"
  }
 ],
 "resources": [
  {
   "title": "Physiology, Small Bowel (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK532263/",
   "kind": "Book",
   "why": "Motility and absorption.",
   "note": ""
  },
  {
   "title": "Physiology, Motilin (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK545309/",
   "kind": "Book",
   "why": "Motilin and the MMC.",
   "note": ""
  },
  {
   "title": "Ileus (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK558937/",
   "kind": "Book",
   "why": "Causes and management.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Physiology, Small Bowel (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK532263/"
  },
  {
   "name": "Physiology, Motilin (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK545309/"
  },
  {
   "name": "Ileus (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK558937/"
  }
 ],
 "verified": "26 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physio1-absorption"] = {
 "id": "physio1-absorption",
 "subject": "physio1",
 "group": "Digestive physiology",
 "title": "Intestinal absorption",
 "sourceFile": "Intestinal absorption (Physiology, Pr. O. Bahlaoui)",
 "sourceUrl": "https://drive.google.com/file/d/12BRHZhMPuROEiZDtMCLdqbiixiuaRUhe/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "Structure made for absorption",
   "html": "<p>The small intestine (5-6 m, 2-3 cm diameter) multiplies its surface by folds within folds: <strong>circular folds</strong> (valves of Kerckring, 1-2 cm), <strong>villi</strong> (about 1 mm, more in the jejunum, separated by crypts; villus + crypt is the functional unit) and <strong>microvilli</strong> (the brush border). Total surface is about <strong>200 m²</strong>. Blood flow rises sharply during digestion. The <strong>duodenum</strong> mixes chyme with bile and pancreatic juice, with rapid osmotic equilibration. The <strong>jejunum</strong> is the main site for carbohydrates, lipids, proteins and most water and electrolytes. The <strong>ileum</strong> is specific for <strong>vitamin B12</strong> and <strong>bile salts</strong>.</p>"
  },
  {
   "id": "s1",
   "title": "Digestion in three stages",
   "html": "<p><strong>Luminal</strong>: pancreatic enzymes (after salivary and gastric enzymes) produce oligomers. <strong>Membranous</strong> (brush border): saccharidases (maltase, sucrase, <strong>lactase</strong>), peptidases, and conjugase (folate) produce monomers. <strong>Intracellular</strong>: cytoplasmic and lysosomal enzymes (e.g. di- and tripeptides split inside the cell). Carbohydrates: amylase → disaccharides; maltose → glucose + glucose; sucrose → glucose + fructose; lactose → glucose + galactose. Proteins: pepsin, then trypsin, chymotrypsin, elastase and carboxypeptidases, then brush border peptidases. Lipids: gastric lipase, then bile salt emulsification and pancreatic lipase with colipase → monoglycerides and free fatty acids.</p>"
  },
  {
   "id": "s2",
   "title": "Carbohydrates and proteins",
   "html": "<p>About 400 g of carbohydrate a day (60% starch, 30% sucrose, 10% lactose), absorbed mostly in the jejunum. <strong>Glucose and galactose</strong> enter via <strong>SGLT1</strong> with Na⁺ (secondary active transport); <strong>fructose</strong> via <strong>GLUT5</strong> (facilitated diffusion); all leave through <strong>GLUT2</strong> to the portal blood. Fibre (cellulose, hemicellulose, lignin) is not digested. Proteins (70-100 g/day, plus endogenous enzymes and shed cells) are absorbed as amino acids via <strong>Na⁺-dependent cotransporters</strong> and as di- and tripeptides, then go to the liver through the portal vein. Only 6-10 g/day of protein is lost in stool.</p><p class='note'>The slide says 50-60% of protein is absorbed in the ileum. Most textbooks place the bulk of protein absorption in the <strong>duodenum and jejunum</strong>; follow your professor for the exam figure.</p>"
  },
  {
   "id": "s3",
   "title": "Lipids and vitamins",
   "html": "<p>Four steps. <strong>Lipolysis</strong>: pancreatic lipase splits triglycerides into monoglycerides and fatty acids, helped by bile salt emulsification. <strong>Micelle formation</strong>: bile salts and lecithin package monoglycerides, fatty acids, cholesterol and fat-soluble vitamins; micelles cross the unstirred water layer and the contents diffuse into the enterocyte. <strong>Re-esterification</strong> in the smooth ER into triglycerides, packed into <strong>chylomicrons</strong>. <strong>Transport</strong>: chylomicrons are exocytosed into <strong>lacteals</strong> and reach the blood through the <strong>thoracic duct</strong>. Fat-soluble vitamins <strong>A, D, E, K</strong> follow lipids. Vitamin C: Na⁺-dependent in the jejunum; B1, B2, B6: proximal. <strong>Folate (B9)</strong>: brush border hydrolysis then Na⁺-dependent transport. <strong>Vitamin B12</strong>: binds R protein in the stomach; pancreatic proteases free it in the duodenum; it binds <strong>intrinsic factor</strong>, and the complex is absorbed in the <strong>terminal ileum</strong>.</p>"
  },
  {
   "id": "s4",
   "title": "Water, electrolytes and iron",
   "html": "<p>About <strong>10-11 L</strong> of fluid is absorbed daily (2 L drunk, 8-9 L of digestive secretions); the jejunum absorbs 5-6 L, the ileum 2 L, the colon 0.4-1 L, leaving only <strong>50-200 mL</strong> in stool. Water follows solutes passively along osmotic gradients. <strong>Na⁺</strong> is actively absorbed (aldosterone acts mainly in the colon); Cl⁻ follows. <strong>Calcium</strong>: active absorption in the duodenum, requiring <strong>vitamin D</strong> and PTH. <strong>Iron</strong> (10-20 mg/day intake, 1-2 mg absorbed; 3-4 mg in menstruation or pregnancy) is absorbed in the <strong>duodenum</strong>; ferrous (Fe²⁺) and haem iron from meat are better absorbed than ferric iron from vegetables.</p><p class='note'>The slide describes iron absorption as passive. It is a regulated, carrier-mediated process (DMT1 on the apical side, ferroportin basolaterally, controlled by hepcidin).</p>"
  },
  {
   "id": "s5",
   "title": "Malabsorption and the colon",
   "html": "<p><strong>Maldigestion</strong>: defective gastric, pancreatic or biliary secretion or brush border enzymes (e.g. <strong>lactase deficiency</strong>: bloating, gas, diarrhoea). <strong>Malabsorption</strong>: mucosal damage or loss of surface: <strong>coeliac disease</strong> (autoimmune reaction to gluten), Crohn's disease, lymphoma, <strong>short bowel syndrome</strong>. Chronic pancreatitis gives steatorrhoea. The <strong>colon</strong> (about 1.5 m, crypts but no villi) stores residue, absorbs water and Na⁺, and hosts the microbiota, which makes vitamin K and some B vitamins, ferments fibre into short-chain fatty acids and gas, and converts bilirubin into urobilinogen and stercobilinogen.</p>"
  }
 ],
 "exam": [
  "Surface amplified by folds, villi, microvilli: ~200 m².",
  "Jejunum: main site of nutrient absorption. Ileum: B12 and bile salts.",
  "Glucose/galactose: SGLT1 with Na⁺. Fructose: GLUT5. Exit: GLUT2.",
  "Amino acids: Na⁺-dependent cotransport; di/tripeptides also absorbed.",
  "Fats: lipolysis → micelles → re-esterification → chylomicrons → lymph.",
  "Fat-soluble vitamins A, D, E, K follow fat absorption.",
  "B12: R protein → freed by pancreatic proteases → intrinsic factor → terminal ileum.",
  "Calcium: duodenum, needs vitamin D. Iron: duodenum, Fe²⁺ and haem better absorbed.",
  "About 10-11 L of fluid absorbed daily; only 50-200 mL lost in stool.",
  "Coeliac disease, lactase deficiency, short bowel syndrome."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "How the enterocyte absorbs",
   "caption": "Transporters for sugars and lipids. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"240\" y1=\"100\" x2=\"315\" y2=\"100\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"240\" y1=\"160\" x2=\"315\" y2=\"160\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"500\" y1=\"130\" x2=\"550\" y2=\"130\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"255\" y1=\"330\" x2=\"300\" y2=\"330\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"500\" y1=\"330\" x2=\"550\" y2=\"330\"/>",
   "parts": {
    "sglt": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"15\" y=\"40\" width=\"240\" height=\"60\" rx=\"10\"/>",
     "label": [
      "SGLT1: glucose, galactose",
      "with Na⁺ (apical)"
     ],
     "lx": 135.0,
     "ly": 68.0
    },
    "glut5": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"15\" y=\"160\" width=\"240\" height=\"60\" rx=\"10\"/>",
     "label": [
      "GLUT5: fructose",
      "(facilitated)"
     ],
     "lx": 135.0,
     "ly": 188.0
    },
    "glut2": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"300\" y=\"100\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "GLUT2 (basolateral):",
      "all sugars → blood"
     ],
     "lx": 400.0,
     "ly": 128.0
    },
    "portal": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"550\" y=\"100\" width=\"195\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Portal vein",
      "→ liver"
     ],
     "lx": 647.5,
     "ly": 128.0
    },
    "mic": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"15\" y=\"300\" width=\"240\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Micelles: MG, FA,",
      "cholesterol, vit. ADEK"
     ],
     "lx": 135.0,
     "ly": 328.0
    },
    "chylo": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"300\" y=\"300\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Re-esterified TG →",
      "chylomicrons"
     ],
     "lx": 400.0,
     "ly": 328.0
    },
    "lymph": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9ecec\" x=\"550\" y=\"300\" width=\"195\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Lacteals → lymph",
      "→ thoracic duct"
     ],
     "lx": 647.5,
     "ly": 328.0
    }
   },
   "arrows": {
    "sglt": [
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
    "glut5": [
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
    "glut2": [
     {
      "t": [
       300.0,
       108.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "portal": [
     {
      "t": [
       550.0,
       108.0
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
       15.0,
       308.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "chylo": [
     {
      "t": [
       300.0,
       308.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "lymph": [
     {
      "t": [
       550.0,
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
   "q": "Glucose is absorbed across the apical membrane by:",
   "options": [
    "GLUT5",
    "SGLT1 with Na⁺",
    "GLUT2 only",
    "Simple diffusion"
   ],
   "answer": 1,
   "why": "Secondary active transport."
  },
  {
   "q": "Fructose enters the enterocyte via:",
   "options": [
    "SGLT1",
    "GLUT5",
    "GLUT4",
    "Endocytosis"
   ],
   "answer": 1,
   "why": "Facilitated diffusion."
  },
  {
   "q": "All monosaccharides leave the enterocyte via:",
   "options": [
    "GLUT2",
    "SGLT1",
    "GLUT5",
    "CFTR"
   ],
   "answer": 0,
   "why": "Basolateral."
  },
  {
   "q": "Lactose is split into:",
   "options": [
    "Glucose + fructose",
    "Glucose + galactose",
    "Two glucoses",
    "Galactose + fructose"
   ],
   "answer": 1,
   "why": "By lactase."
  },
  {
   "q": "Vitamin B12 is absorbed in the:",
   "options": [
    "Duodenum",
    "Jejunum",
    "Terminal ileum",
    "Colon"
   ],
   "answer": 2,
   "why": "With intrinsic factor."
  },
  {
   "q": "Chylomicrons enter the circulation through:",
   "options": [
    "The portal vein",
    "Lacteals and the thoracic duct",
    "Hepatic artery",
    "Capillaries of the villi"
   ],
   "answer": 1,
   "why": "Too large for capillaries."
  },
  {
   "q": "Micelles are formed with the help of:",
   "options": [
    "Pepsin",
    "Bile salts",
    "Amylase",
    "Intrinsic factor"
   ],
   "answer": 1,
   "why": "And lecithin."
  },
  {
   "q": "The fat-soluble vitamins are:",
   "options": [
    "B and C",
    "A, D, E, K",
    "B12 and folate",
    "C and K"
   ],
   "answer": 1,
   "why": "Follow lipids."
  },
  {
   "q": "Calcium absorption in the duodenum requires:",
   "options": [
    "Vitamin D",
    "Vitamin C",
    "Intrinsic factor",
    "Bile salts only"
   ],
   "answer": 0,
   "why": "And PTH."
  },
  {
   "q": "Iron is absorbed mainly in the:",
   "options": [
    "Duodenum",
    "Ileum",
    "Colon",
    "Stomach"
   ],
   "answer": 0,
   "why": "Proximal."
  },
  {
   "q": "Total absorptive surface of the small intestine is about:",
   "options": [
    "2 m²",
    "20 m²",
    "200 m²",
    "2000 m²"
   ],
   "answer": 2,
   "why": "Folds, villi, microvilli."
  },
  {
   "q": "Coeliac disease is caused by an immune reaction to:",
   "options": [
    "Lactose",
    "Gluten",
    "Fructose",
    "Casein only"
   ],
   "answer": 1,
   "why": "Villous atrophy."
  },
  {
   "q": "Water absorption in the gut is:",
   "options": [
    "Active",
    "Passive, following osmotic gradients",
    "Only in the colon",
    "Driven by aldosterone alone"
   ],
   "answer": 1,
   "why": "Follows solutes."
  },
  {
   "q": "Stool water per day is normally about:",
   "options": [
    "2 L",
    "50-200 mL",
    "1 L",
    "5 L"
   ],
   "answer": 1,
   "why": "Most is absorbed."
  },
  {
   "q": "Before binding intrinsic factor, B12 is freed from R protein by:",
   "options": [
    "Gastric acid",
    "Pancreatic proteases",
    "Bile salts",
    "Lactase"
   ],
   "answer": 1,
   "why": "In the duodenum."
  },
  {
   "q": "Bilirubin is converted to urobilinogen by:",
   "options": [
    "Liver enzymes",
    "Colonic bacteria",
    "Pancreatic lipase",
    "Gastric acid"
   ],
   "answer": 1,
   "why": "Microbiota."
  },
  {
   "q": "Bile salts are reabsorbed mainly in the:",
   "options": [
    "Duodenum",
    "Terminal ileum",
    "Colon",
    "Stomach"
   ],
   "answer": 1,
   "why": "Enterohepatic circulation."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "sglt",
   "options": [
    "Chylomicrons",
    "Lymphatic route",
    "GLUT2",
    "SGLT1"
   ],
   "answer": 3,
   "why": "The arrow points to: SGLT1. Secondary active transport: glucose and galactose enter with Na⁺, driven by the basolateral Na⁺/K⁺ ATPase."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "glut5",
   "options": [
    "GLUT5",
    "Lymphatic route",
    "SGLT1",
    "Micelles"
   ],
   "answer": 0,
   "why": "The arrow points to: GLUT5. Fructose enters by facilitated diffusion, without sodium."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "glut2",
   "options": [
    "GLUT2",
    "Lymphatic route",
    "SGLT1",
    "GLUT5"
   ],
   "answer": 0,
   "why": "The arrow points to: GLUT2. All monosaccharides leave the enterocyte on the basolateral side by facilitated diffusion."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "portal",
   "options": [
    "Portal circulation",
    "Lymphatic route",
    "GLUT5",
    "GLUT2"
   ],
   "answer": 0,
   "why": "The arrow points to: Portal circulation. Sugars and amino acids go through the portal vein to the liver."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "mic",
   "options": [
    "GLUT5",
    "Lymphatic route",
    "Micelles",
    "GLUT2"
   ],
   "answer": 2,
   "why": "The arrow points to: Micelles. Bile salts carry lipolysis products to the brush border, where they diffuse into the cell."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "chylo",
   "options": [
    "Chylomicrons",
    "GLUT5",
    "Lymphatic route",
    "GLUT2"
   ],
   "answer": 0,
   "why": "The arrow points to: Chylomicrons. In the smooth ER, fatty acids and monoglycerides re-form triglycerides, packed with cholesterol, phospholipids and apoproteins."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "lymph",
   "options": [
    "GLUT5",
    "SGLT1",
    "Lymphatic route",
    "GLUT2"
   ],
   "answer": 2,
   "why": "The arrow points to: Lymphatic route. Chylomicrons are too large for capillaries: they enter lacteals and reach blood through the thoracic duct."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Three levels of surface amplification?",
   "back": "Circular folds, villi, microvilli → ~200 m²."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Sugar transporters?",
   "back": "SGLT1 (glucose, galactose + Na⁺), GLUT5 (fructose), GLUT2 (exit)."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Four steps of fat absorption?",
   "back": "Lipolysis, micelles, re-esterification, chylomicrons into lymph."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "B12 absorption pathway?",
   "back": "R protein in stomach → freed by pancreatic proteases → intrinsic factor → terminal ileum."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "What does the ileum specifically absorb?",
   "back": "Vitamin B12 and bile salts."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Daily fluid load of the gut?",
   "back": "~10-11 L absorbed; 50-200 mL in stool."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Calcium and iron absorption site?",
   "back": "Both in the duodenum; calcium needs vitamin D."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Maldigestion vs malabsorption?",
   "back": "Maldigestion: enzyme or bile deficit. Malabsorption: mucosal damage or lost surface."
  },
  {
   "id": "img-sglt",
   "type": "image",
   "target": "sglt",
   "front": "What is at the arrow, and why does it matter?",
   "back": "SGLT1. Secondary active transport: glucose and galactose enter with Na⁺, driven by the basolateral Na⁺/K⁺ ATPase."
  },
  {
   "id": "img-glut5",
   "type": "image",
   "target": "glut5",
   "front": "What is at the arrow, and why does it matter?",
   "back": "GLUT5. Fructose enters by facilitated diffusion, without sodium."
  },
  {
   "id": "img-glut2",
   "type": "image",
   "target": "glut2",
   "front": "What is at the arrow, and why does it matter?",
   "back": "GLUT2. All monosaccharides leave the enterocyte on the basolateral side by facilitated diffusion."
  },
  {
   "id": "img-portal",
   "type": "image",
   "target": "portal",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Portal circulation. Sugars and amino acids go through the portal vein to the liver."
  },
  {
   "id": "img-mic",
   "type": "image",
   "target": "mic",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Micelles. Bile salts carry lipolysis products to the brush border, where they diffuse into the cell."
  },
  {
   "id": "img-chylo",
   "type": "image",
   "target": "chylo",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Chylomicrons. In the smooth ER, fatty acids and monoglycerides re-form triglycerides, packed with cholesterol, phospholipids and apoproteins."
  },
  {
   "id": "img-lymph",
   "type": "image",
   "target": "lymph",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Lymphatic route. Chylomicrons are too large for capillaries: they enter lacteals and reach blood through the thoracic duct."
  }
 ],
 "deeper": [
  {
   "title": "Why oral rehydration solution contains sugar",
   "html": "<p>SGLT1 carries two Na⁺ with each glucose, and water follows. In cholera, toxin makes the gut secrete chloride and water, but SGLT1 still works. A solution with the right balance of glucose and salt therefore drives sodium and water back into the body even during massive diarrhoea. Oral rehydration solution, built on this single transporter, has saved millions of lives.</p>"
  }
 ],
 "resources": [
  {
   "title": "Physiology, Nutrient Absorption (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK597379/",
   "kind": "Book",
   "why": "Carbohydrates, proteins, lipids, vitamins.",
   "note": ""
  },
  {
   "title": "Physiology, Small Bowel (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK532263/",
   "kind": "Book",
   "why": "Structure and absorption.",
   "note": ""
  },
  {
   "title": "Coeliac disease (NHS)",
   "url": "https://www.nhs.uk/conditions/coeliac-disease/",
   "kind": "Website",
   "why": "Patient-level overview of gluten enteropathy.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Physiology, Nutrient Absorption (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK597379/"
  },
  {
   "name": "Physiology, Small Bowel (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK532263/"
  },
  {
   "name": "Coeliac disease (NHS)",
   "url": "https://www.nhs.uk/conditions/coeliac-disease/"
  }
 ],
 "verified": "26 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physio1-colon-motility"] = {
 "id": "physio1-colon-motility",
 "subject": "physio1",
 "group": "Digestive physiology",
 "title": "Colon motility",
 "sourceFile": "Colon motility (Physiology, Pr. W. Khannoussi, Pr. A. Taiymi)",
 "sourceUrl": "https://drive.google.com/file/d/1zKMvOr9fYWCoX10KcVjP4w4tpjPo1eb5/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "Anatomy and functions",
   "html": "<p>The colon runs about <strong>1.5 m</strong> from the caecum through ascending, transverse, descending and sigmoid colon to the rectum. Its longitudinal muscle is gathered into three bands, the <strong>taeniae coli</strong>; the sacculations between them are the <strong>haustra</strong>. The colon secretes mainly <strong>mucus</strong> (almost no enzymes), absorbs water and electrolytes (mostly in the <strong>proximal</strong> 'absorptive' colon; up to 5-8 L/day if needed), absorbs bacterial vitamins such as <strong>vitamin K</strong>, ferments residue and <strong>stores</strong> faeces in the distal 'storage' colon.</p>"
  },
  {
   "id": "s1",
   "title": "Motor patterns",
   "html": "<p><strong>Haustral segmental contractions</strong>: non-propulsive, low-amplitude ring contractions in the proximal colon that mix contents for absorption and fermentation. <strong>Propulsive peristaltic contractions</strong>: low- to medium-amplitude, in the transverse and descending colon; each lasts about 30 s and series last 10-30 min, moving faeces slowly towards the sigmoid. <strong>Retrograde contractions</strong>: from the ascending-transverse junction back towards the caecum, delaying transit to favour absorption. <strong>High-amplitude propagating contractions (HAPCs)</strong> or <strong>mass movements</strong>: a few times a day, especially after meals, pushing stool into the rectosigmoid and preceding the urge to defecate. Irritation (parasites, enterotoxins) can trigger them.</p>"
  },
  {
   "id": "s2",
   "title": "Control",
   "html": "<p><strong>Myogenic</strong>: <strong>interstitial cells of Cajal</strong> generate slow waves (about 2-6/min); depolarisation depends on Ca²⁺ entry through L-type channels. <strong>Enteric</strong>: myenteric plexus (peristalsis), submucosal plexus (secretion, blood flow). <strong>Extrinsic</strong>: parasympathetic, from the vagus to the proximal colon and from the <strong>pelvic splanchnic nerves (S2-S4)</strong> to the distal colon and rectum (excitatory); sympathetic from T10-L2 via hypogastric nerves (inhibitory, raises sphincter tone); afferents carry distension and pain. <strong>Hormonal</strong>: gastrin enhances colonic motility; motilin has minor effects. <strong>Reflexes</strong>: <strong>gastrocolic</strong> (meal → colonic activity), <strong>rectocolonic</strong> (rectal distension relaxes the proximal colon) and the <strong>defecation reflex</strong>.</p>"
  },
  {
   "id": "s3",
   "title": "Tests and disorders",
   "html": "<p>Tests: <strong>colonoscopy</strong> (excludes mucosal disease and cancer), <strong>colonic manometry</strong>, electromyography. <strong>Colonic inertia</strong>: severe slow-transit constipation with absent or weak propulsive contractions. <strong>Hirschsprung disease</strong>: congenital absence of ganglion cells in the distal bowel → functional obstruction, delayed passage of meconium, distension, explosive stool after rectal examination; diagnosed by <strong>rectal biopsy</strong> (gold standard) and anorectal manometry (absent recto-anal inhibitory reflex). <strong>Dyssynergic defecation</strong>: poor coordination of abdominal, rectal and pelvic floor muscles.</p>"
  }
 ],
 "exam": [
  "Colon ~1.5 m; taeniae coli and haustra.",
  "Proximal colon absorbs; distal colon stores.",
  "Haustral contractions mix; propulsive contractions move slowly.",
  "Retrograde contractions delay transit towards the caecum.",
  "HAPCs (mass movements) fill the rectum, often after meals.",
  "Gastrocolic reflex: meal → colonic activity.",
  "Pacemaker: interstitial cells of Cajal (2-6/min).",
  "Parasympathetic excites (vagus, S2-S4); sympathetic inhibits.",
  "Hirschsprung: aganglionic distal bowel; rectal biopsy."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Colonic movement patterns",
   "caption": "Four motor patterns along the colon. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"230\" y1=\"100\" x2=\"280\" y2=\"100\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"495\" y1=\"130\" x2=\"515\" y2=\"130\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"260\" x2=\"530\" y2=\"160\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"630\" y1=\"160\" x2=\"630\" y2=\"260\"/>",
   "parts": {
    "haus": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"15\" y=\"40\" width=\"230\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Haustral segmentation:",
      "mixing (proximal)"
     ],
     "lx": 130.0,
     "ly": 68.0
    },
    "retro": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"15\" y=\"170\" width=\"230\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Retrograde contractions:",
      "delay transit"
     ],
     "lx": 130.0,
     "ly": 198.0
    },
    "prop": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"265\" y=\"100\" width=\"230\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Propulsive contractions:",
      "slow progression"
     ],
     "lx": 380.0,
     "ly": 128.0
    },
    "hapc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"515\" y=\"100\" width=\"230\" height=\"60\" rx=\"10\"/>",
     "label": [
      "HAPCs (mass movements)",
      "→ rectosigmoid"
     ],
     "lx": 630.0,
     "ly": 128.0
    },
    "gcr": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"265\" y=\"260\" width=\"230\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Gastrocolic reflex:",
      "meal triggers"
     ],
     "lx": 380.0,
     "ly": 288.0
    },
    "urge": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"515\" y=\"260\" width=\"230\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Urge to",
      "defecate"
     ],
     "lx": 630.0,
     "ly": 288.0
    }
   },
   "arrows": {
    "haus": [
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
    "retro": [
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
    "prop": [
     {
      "t": [
       265.0,
       108.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "hapc": [
     {
      "t": [
       515.0,
       108.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "gcr": [
     {
      "t": [
       265.0,
       268.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "urge": [
     {
      "t": [
       515.0,
       268.0
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
   "q": "The longitudinal muscle of the colon forms:",
   "options": [
    "Haustra",
    "Taeniae coli",
    "Plicae circulares",
    "Villi"
   ],
   "answer": 1,
   "why": "Three bands."
  },
  {
   "q": "Water absorption occurs mostly in the:",
   "options": [
    "Proximal colon",
    "Sigmoid colon",
    "Rectum",
    "Anal canal"
   ],
   "answer": 0,
   "why": "Absorptive colon."
  },
  {
   "q": "Haustral contractions are:",
   "options": [
    "Propulsive",
    "Non-propulsive and mixing",
    "Retrograde to the ileum",
    "Only in the rectum"
   ],
   "answer": 1,
   "why": "Proximal colon."
  },
  {
   "q": "Mass movements are also called:",
   "options": [
    "Retrograde contractions",
    "HAPCs",
    "Haustral contractions",
    "MMC phase I"
   ],
   "answer": 1,
   "why": "High-amplitude propagating contractions."
  },
  {
   "q": "The reflex that increases colonic activity after a meal is:",
   "options": [
    "Rectocolonic",
    "Gastrocolic",
    "Recto-anal inhibitory",
    "Enterogastric"
   ],
   "answer": 1,
   "why": "Gastric distension."
  },
  {
   "q": "Colonic slow waves are generated by:",
   "options": [
    "Enterocytes of the crypts",
    "Interstitial cells of Cajal",
    "Goblet cells of the mucosa",
    "Paneth cells"
   ],
   "answer": 1,
   "why": "About 2-6/min."
  },
  {
   "q": "Parasympathetic supply to the distal colon comes from:",
   "options": [
    "Vagus nerve",
    "Pelvic splanchnic nerves",
    "Phrenic nerve",
    "Lumbar splanchnic nerves"
   ],
   "answer": 1,
   "why": ""
  },
  {
   "q": "Sympathetic stimulation of the colon:",
   "options": [
    "Increases motility",
    "Inhibits motility, raises sphincter tone",
    "Starts mass movements",
    "Relaxes the internal sphincter"
   ],
   "answer": 1,
   "why": ""
  },
  {
   "q": "Hirschsprung disease is due to:",
   "options": [
    "Absent ganglion cells",
    "Excess ganglion cells",
    "Absent smooth muscle",
    "Mucosal ulceration"
   ],
   "answer": 0,
   "why": "Aganglionosis."
  },
  {
   "q": "The gold standard to diagnose Hirschsprung disease is:",
   "options": [
    "Colonoscopy",
    "Rectal biopsy",
    "Barium swallow",
    "Stool culture"
   ],
   "answer": 1,
   "why": ""
  },
  {
   "q": "Retrograde colonic contractions serve to:",
   "options": [
    "Speed transit to the rectum",
    "Delay transit and favour absorption",
    "Trigger the defecation reflex",
    "Empty the caecum into the ileum"
   ],
   "answer": 1,
   "why": ""
  },
  {
   "q": "Colonic inertia is:",
   "options": [
    "Severe slow-transit constipation",
    "Excess mass movements",
    "A type of diarrhoea",
    "Rectal prolapse"
   ],
   "answer": 0,
   "why": "Weak propulsion."
  },
  {
   "q": "Colonic secretion is mainly:",
   "options": [
    "Enzymes",
    "Mucus",
    "Acid",
    "Bile"
   ],
   "answer": 1,
   "why": "Protective, lubricating."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "haus",
   "options": [
    "Propulsive contractions",
    "Haustral contractions",
    "Mass movements (HAPCs)",
    "Urge"
   ],
   "answer": 1,
   "why": "The arrow points to: Haustral contractions. Non-propulsive ring contractions of the proximal colon that mix contents, maximise water absorption and keep contact with the microbiota."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "retro",
   "options": [
    "Propulsive contractions",
    "Gastrocolic reflex",
    "Urge",
    "Retrograde contractions"
   ],
   "answer": 3,
   "why": "The arrow points to: Retrograde contractions. Start at the ascending-transverse junction and run back towards the caecum, slowing transit and preventing premature rectal filling."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "prop",
   "options": [
    "Gastrocolic reflex",
    "Urge",
    "Mass movements (HAPCs)",
    "Propulsive contractions"
   ],
   "answer": 3,
   "why": "The arrow points to: Propulsive contractions. Low- to medium-amplitude peristalsis in the transverse and descending colon, moving stool slowly towards the sigmoid."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "hapc",
   "options": [
    "Gastrocolic reflex",
    "Retrograde contractions",
    "Haustral contractions",
    "Mass movements (HAPCs)"
   ],
   "answer": 3,
   "why": "The arrow points to: Mass movements (HAPCs). Mass movements, a few times a day, pushing stool from the ascending colon to the rectosigmoid."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "gcr",
   "options": [
    "Gastrocolic reflex",
    "Haustral contractions",
    "Retrograde contractions",
    "Propulsive contractions"
   ],
   "answer": 0,
   "why": "The arrow points to: Gastrocolic reflex. Gastric distension after a meal increases colonic motor activity via vagal and spinal afferents, modulated by gastrin."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "urge",
   "options": [
    "Propulsive contractions",
    "Urge",
    "Retrograde contractions",
    "Mass movements (HAPCs)"
   ],
   "answer": 1,
   "why": "The arrow points to: Urge. Mass movements filling the rectum precede the sensation of urgency and defecation."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Taeniae coli and haustra?",
   "back": "Three longitudinal muscle bands; sacculations between them."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Four colonic motor patterns?",
   "back": "Haustral, propulsive, retrograde, HAPCs (mass movements)."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Gastrocolic reflex?",
   "back": "Meal distends stomach → increased colonic motility."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Colonic pacemaker?",
   "back": "Interstitial cells of Cajal, 2-6/min."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Extrinsic nerves of the colon?",
   "back": "Parasympathetic (vagus, S2-S4): excitatory. Sympathetic (T10-L2): inhibitory."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Hirschsprung disease?",
   "back": "Aganglionic distal bowel; delayed meconium; rectal biopsy."
  },
  {
   "id": "img-haus",
   "type": "image",
   "target": "haus",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Haustral contractions. Non-propulsive ring contractions of the proximal colon that mix contents, maximise water absorption and keep contact with the microbiota."
  },
  {
   "id": "img-retro",
   "type": "image",
   "target": "retro",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Retrograde contractions. Start at the ascending-transverse junction and run back towards the caecum, slowing transit and preventing premature rectal filling."
  },
  {
   "id": "img-prop",
   "type": "image",
   "target": "prop",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Propulsive contractions. Low- to medium-amplitude peristalsis in the transverse and descending colon, moving stool slowly towards the sigmoid."
  },
  {
   "id": "img-hapc",
   "type": "image",
   "target": "hapc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Mass movements (HAPCs). Mass movements, a few times a day, pushing stool from the ascending colon to the rectosigmoid."
  },
  {
   "id": "img-gcr",
   "type": "image",
   "target": "gcr",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Gastrocolic reflex. Gastric distension after a meal increases colonic motor activity via vagal and spinal afferents, modulated by gastrin."
  },
  {
   "id": "img-urge",
   "type": "image",
   "target": "urge",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Urge. Mass movements filling the rectum precede the sensation of urgency and defecation."
  }
 ],
 "deeper": [
  {
   "title": "Why babies need a nappy change right after feeding",
   "html": "<p>The gastrocolic reflex is especially strong in infants: a feed distends the stomach and triggers mass movements within minutes, so a bowel motion often follows the meal. Adults feel the same reflex as the urge to go after breakfast, and people with irritable bowel syndrome often feel it exaggerated.</p>"
  }
 ],
 "resources": [
  {
   "title": "Physiology, Large Intestine (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK507857/",
   "kind": "Book",
   "why": "Colonic motility and absorption.",
   "note": ""
  },
  {
   "title": "Hirschsprung Disease (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK562142/",
   "kind": "Book",
   "why": "Aganglionosis and its diagnosis.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Physiology, Large Intestine (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK507857/"
  },
  {
   "name": "Hirschsprung Disease (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK562142/"
  }
 ],
 "verified": "26 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physio1-anorectal"] = {
 "id": "physio1-anorectal",
 "subject": "physio1",
 "group": "Digestive physiology",
 "title": "Anorectal motility",
 "sourceFile": "Ano-rectal motility (Physiology, Pr. W. Khannoussi, Pr. A. Taiymi)",
 "sourceUrl": "https://drive.google.com/file/d/1r7z86FTErt61ezYBkO9BlTv4yaJMXJMU/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "Anatomy",
   "html": "<p>The rectum is a distensible reservoir with an inner circular and outer longitudinal smooth muscle layer. The anal sphincter complex has three parts: the <strong>internal anal sphincter (IAS)</strong>, a thickening of the circular smooth muscle, <strong>involuntary</strong>, providing about <strong>70% of resting anal tone</strong>; the <strong>external anal sphincter (EAS)</strong>, striated and <strong>voluntary</strong> (pudendal nerve); and the <strong>puborectalis</strong>, part of the levator ani, a sling around the anorectal junction that keeps the <strong>anorectal angle</strong> at about <strong>80-90°</strong>. Sympathetic fibres inhibit rectal motility; parasympathetic fibres (pelvic nerves) excite it.</p>"
  },
  {
   "id": "s1",
   "title": "Storage and continence",
   "html": "<p>At rest, rectal pressure is low (about <strong>3 cmH₂O</strong>) while the IAS keeps anal pressure at about <strong>50-100 cmH₂O</strong>; the EAS adds little at rest. Continence relies on: a <strong>capacitive system</strong> (rectal <strong>compliance</strong>: volume accepted with little pressure rise); a <strong>resistive system</strong> (IAS tone, voluntary EAS and levator ani); <strong>initial continence</strong> (quick EAS and pelvic floor contraction on sudden filling, short-lived because striated muscle fatigues); and <strong>rectal adaptation</strong> (the wall stretches and pressure falls, relieving the voluntary muscles).</p>"
  },
  {
   "id": "s2",
   "title": "Pre-defecation reflexes",
   "html": "<p>As stool enters the rectum, stretch receptors signal via the pelvic nerves and pressure rises (up to 40-60 mmHg). Three reflexes dominate. <strong>Recto-rectal reflex</strong>: mild distension triggers contractions that redistribute contents and adapt compliance. <strong>Recto-anal inhibitory reflex (RAIR)</strong>: transient <strong>relaxation of the IAS</strong> while the EAS stays contracted, allowing the anal canal to <strong>sample</strong> contents. <strong>Recto-anal excitatory reflex (RAER)</strong>: reflex <strong>contraction of the EAS</strong>, the guarding reflex that preserves continence while the IAS is relaxed.</p>"
  },
  {
   "id": "s3",
   "title": "Expulsion",
   "html": "<p>When the person decides to defecate (cortical control), the rectum contracts and the rectosigmoid junction closes (cut-off mechanism). Parasympathetic pelvic nerves inhibit IAS tone; the <strong>EAS and puborectalis relax voluntarily</strong> via the <strong>pudendal nerve (S2-S4)</strong>, so the anorectal angle straightens. The diaphragm and abdominal muscles contract (<strong>Valsalva</strong>), the pelvic floor descends and the rectum empties. Afterwards the sphincters re-contract.</p><p class='note'>One slide says the anorectal angle goes 'from ~90° to ~15-20°' while also saying it increases. During defecation the angle becomes <strong>wider (more obtuse, around 130-140°)</strong>, which straightens the passage.</p>"
  },
  {
   "id": "s4",
   "title": "Tests and disorders",
   "html": "<p>Tests: rectosigmoidoscopy or colonoscopy, <strong>high-resolution anorectal manometry</strong> (pressures, reflexes, coordination), <strong>endoanal ultrasound</strong> (sphincter defects), <strong>defecography</strong> (conventional or MRI). <strong>Dyssynergic defecation</strong>: paradoxical contraction or failure of pelvic floor relaxation on straining: constipation, excessive straining, incomplete evacuation. <strong>Anismus</strong>: failure of puborectalis and/or EAS relaxation, with obstructed defecation. <strong>Faecal incontinence</strong>: sphincter or pelvic floor weakness (e.g. obstetric injury); manometry shows low resting (IAS) or squeeze (EAS) pressures.</p>"
  }
 ],
 "exam": [
  "IAS: smooth, involuntary, ~70% of resting tone.",
  "EAS: striated, voluntary (pudendal nerve).",
  "Puborectalis keeps the anorectal angle ~80-90°.",
  "Rest: rectum ~3 cmH₂O; anal canal 50-100 cmH₂O.",
  "Continence: compliance, sphincters, initial continence, rectal adaptation.",
  "RAIR: IAS relaxes (sampling). RAER: EAS contracts (guarding).",
  "Defecation: EAS and puborectalis relax, angle widens, Valsalva.",
  "Tests: anorectal manometry, endoanal ultrasound, defecography.",
  "Dyssynergia/anismus: paradoxical pelvic floor contraction."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Anorectal reflexes and defecation",
   "caption": "From rectal filling to evacuation. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"235\" y1=\"70\" x2=\"275\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"485\" y1=\"70\" x2=\"525\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"100\" x2=\"380\" y2=\"170\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"235\" y1=\"330\" x2=\"275\" y2=\"330\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"485\" y1=\"330\" x2=\"525\" y2=\"330\"/>",
   "parts": {
    "fill": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"15\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Rectal filling:",
      "stretch receptors"
     ],
     "lx": 125.0,
     "ly": 68.0
    },
    "rair": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"275\" y=\"40\" width=\"210\" height=\"60\" rx=\"10\"/>",
     "label": [
      "RAIR: internal",
      "sphincter relaxes"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "raer": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"525\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "RAER: external",
      "sphincter contracts"
     ],
     "lx": 635.0,
     "ly": 68.0
    },
    "sense": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"275\" y=\"170\" width=\"210\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Sampling and",
      "conscious urge"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "decide": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"15\" y=\"300\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Decision to defecate",
      "(cortex)"
     ],
     "lx": 125.0,
     "ly": 328.0
    },
    "relax": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"275\" y=\"300\" width=\"210\" height=\"60\" rx=\"10\"/>",
     "label": [
      "EAS and puborectalis",
      "relax; angle opens"
     ],
     "lx": 380.0,
     "ly": 328.0
    },
    "push": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9ecec\" x=\"525\" y=\"300\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Abdominal push,",
      "pelvic floor descends"
     ],
     "lx": 635.0,
     "ly": 328.0
    }
   },
   "arrows": {
    "fill": [
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
    "rair": [
     {
      "t": [
       275.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "raer": [
     {
      "t": [
       525.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "sense": [
     {
      "t": [
       275.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "decide": [
     {
      "t": [
       15.0,
       308.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "relax": [
     {
      "t": [
       275.0,
       308.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "push": [
     {
      "t": [
       525.0,
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
   "q": "Most resting anal tone comes from the:",
   "options": [
    "External anal sphincter",
    "Internal anal sphincter",
    "Puborectalis",
    "Rectal wall"
   ],
   "answer": 1,
   "why": "About 70%."
  },
  {
   "q": "The external anal sphincter is:",
   "options": [
    "Smooth, involuntary",
    "Striated, voluntary",
    "Smooth, voluntary",
    "Part of the rectal wall"
   ],
   "answer": 1,
   "why": "Pudendal nerve."
  },
  {
   "q": "The puborectalis maintains the anorectal angle at about:",
   "options": [
    "30°",
    "80-90°",
    "150°",
    "180°"
   ],
   "answer": 1,
   "why": "At rest."
  },
  {
   "q": "The recto-anal inhibitory reflex relaxes the:",
   "options": [
    "External sphincter",
    "Internal sphincter",
    "Puborectalis",
    "Diaphragm"
   ],
   "answer": 1,
   "why": "Sampling."
  },
  {
   "q": "The recto-anal excitatory reflex contracts the:",
   "options": [
    "Internal sphincter",
    "External sphincter",
    "Rectum",
    "Sigmoid colon"
   ],
   "answer": 1,
   "why": "Guarding reflex."
  },
  {
   "q": "Rectal compliance means:",
   "options": [
    "Volume accepted with little pressure rise",
    "Strong rectal contraction",
    "Voluntary sphincter control",
    "Fast transit"
   ],
   "answer": 0,
   "why": "Capacitive system."
  },
  {
   "q": "Voluntary control of the EAS travels in the:",
   "options": [
    "Pelvic splanchnic nerves",
    "Pudendal nerve",
    "Hypogastric nerve",
    "Vagus"
   ],
   "answer": 1,
   "why": "S2-S4."
  },
  {
   "q": "During defecation the anorectal angle:",
   "options": [
    "Becomes more acute",
    "Widens",
    "Stays at 90°",
    "Disappears"
   ],
   "answer": 1,
   "why": "Puborectalis relaxes."
  },
  {
   "q": "Resting anal canal pressure is about:",
   "options": [
    "3 cmH₂O",
    "50-100 cmH₂O",
    "300 cmH₂O",
    "0 cmH₂O"
   ],
   "answer": 1,
   "why": "IAS."
  },
  {
   "q": "Paradoxical contraction of the pelvic floor on straining is:",
   "options": [
    "Faecal incontinence",
    "Dyssynergic defecation",
    "Hirschsprung disease",
    "Colonic inertia"
   ],
   "answer": 1,
   "why": ""
  },
  {
   "q": "The best test for sphincter anatomical defects is:",
   "options": [
    "Anorectal manometry",
    "Endoanal ultrasound",
    "Colonoscopy",
    "Barium swallow"
   ],
   "answer": 1,
   "why": ""
  },
  {
   "q": "Initial continence is short-lived because:",
   "options": [
    "Striated muscle fatigues",
    "Smooth muscle fatigues",
    "The rectum empties",
    "The IAS relaxes"
   ],
   "answer": 0,
   "why": ""
  },
  {
   "q": "The RAIR is absent in:",
   "options": [
    "Hirschsprung disease",
    "Haemorrhoids",
    "Anal fissure",
    "Diverticulosis"
   ],
   "answer": 0,
   "why": "No ganglion cells."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "fill",
   "options": [
    "Rectal distension",
    "Sphincter and puborectalis relaxation",
    "Expulsion",
    "Recto-anal inhibitory reflex"
   ],
   "answer": 0,
   "why": "The arrow points to: Rectal distension. Stool entering the rectum stretches its wall; signals go through the pelvic nerves to the brain."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "rair",
   "options": [
    "Recto-anal excitatory reflex",
    "Rectal distension",
    "Sphincter and puborectalis relaxation",
    "Recto-anal inhibitory reflex"
   ],
   "answer": 3,
   "why": "The arrow points to: Recto-anal inhibitory reflex. Transient relaxation of the internal anal sphincter lets the anal canal 'sample' contents; absent in Hirschsprung disease."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "raer",
   "options": [
    "Rectal distension",
    "Sampling",
    "Expulsion",
    "Recto-anal excitatory reflex"
   ],
   "answer": 3,
   "why": "The arrow points to: Recto-anal excitatory reflex. Reflex contraction of the external sphincter guards continence while the internal sphincter is relaxed."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "sense",
   "options": [
    "Sampling",
    "Rectal distension",
    "Recto-anal excitatory reflex",
    "Voluntary decision"
   ],
   "answer": 0,
   "why": "The arrow points to: Sampling. The sensitive anal canal distinguishes gas, liquid and solid, and the desire to defecate is felt."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "decide",
   "options": [
    "Voluntary decision",
    "Recto-anal excitatory reflex",
    "Sampling",
    "Sphincter and puborectalis relaxation"
   ],
   "answer": 0,
   "why": "The arrow points to: Voluntary decision. If appropriate, cortical centres allow defecation; otherwise the external sphincter and puborectalis hold and the rectum adapts."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "relax",
   "options": [
    "Sampling",
    "Recto-anal inhibitory reflex",
    "Sphincter and puborectalis relaxation",
    "Rectal distension"
   ],
   "answer": 2,
   "why": "The arrow points to: Sphincter and puborectalis relaxation. Voluntary relaxation via the pudendal nerve (S2-S4); the puborectalis relaxes and the anorectal angle straightens."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "push",
   "options": [
    "Sphincter and puborectalis relaxation",
    "Expulsion",
    "Recto-anal excitatory reflex",
    "Voluntary decision"
   ],
   "answer": 1,
   "why": "The arrow points to: Expulsion. Rectal contraction, raised intra-abdominal pressure (Valsalva) and pelvic floor descent evacuate the rectum."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "IAS vs EAS?",
   "back": "IAS: smooth, involuntary, ~70% resting tone. EAS: striated, voluntary, pudendal nerve."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Role of puborectalis?",
   "back": "Sling keeping the anorectal angle ~80-90°; relaxes during defecation."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "RAIR vs RAER?",
   "back": "RAIR: IAS relaxes (sampling). RAER: EAS contracts (guarding)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Four continence mechanisms?",
   "back": "Compliance, sphincter resistance, initial continence, rectal adaptation."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Steps of expulsion?",
   "back": "Rectal contraction, IAS/EAS/puborectalis relaxation, Valsalva, pelvic floor descent."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Anorectal tests?",
   "back": "Manometry, endoanal ultrasound, defecography, endoscopy."
  },
  {
   "id": "img-fill",
   "type": "image",
   "target": "fill",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Rectal distension. Stool entering the rectum stretches its wall; signals go through the pelvic nerves to the brain."
  },
  {
   "id": "img-rair",
   "type": "image",
   "target": "rair",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Recto-anal inhibitory reflex. Transient relaxation of the internal anal sphincter lets the anal canal 'sample' contents; absent in Hirschsprung disease."
  },
  {
   "id": "img-raer",
   "type": "image",
   "target": "raer",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Recto-anal excitatory reflex. Reflex contraction of the external sphincter guards continence while the internal sphincter is relaxed."
  },
  {
   "id": "img-sense",
   "type": "image",
   "target": "sense",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Sampling. The sensitive anal canal distinguishes gas, liquid and solid, and the desire to defecate is felt."
  },
  {
   "id": "img-decide",
   "type": "image",
   "target": "decide",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Voluntary decision. If appropriate, cortical centres allow defecation; otherwise the external sphincter and puborectalis hold and the rectum adapts."
  },
  {
   "id": "img-relax",
   "type": "image",
   "target": "relax",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Sphincter and puborectalis relaxation. Voluntary relaxation via the pudendal nerve (S2-S4); the puborectalis relaxes and the anorectal angle straightens."
  },
  {
   "id": "img-push",
   "type": "image",
   "target": "push",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Expulsion. Rectal contraction, raised intra-abdominal pressure (Valsalva) and pelvic floor descent evacuate the rectum."
  }
 ],
 "deeper": [
  {
   "title": "Why squatting helps",
   "html": "<p>Sitting upright keeps the puborectalis partly contracted and the anorectal angle relatively sharp. Squatting flexes the hips, stretches the puborectalis and straightens the anorectal angle, so less straining is needed. That is the physiological basis of footstools used for constipation and of biofeedback therapy for dyssynergic defecation.</p>"
  }
 ],
 "resources": [
  {
   "title": "Physiology, Defecation (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK539732/",
   "kind": "Book",
   "why": "Continence and the defecation reflex.",
   "note": ""
  },
  {
   "title": "Fecal Incontinence (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK459128/",
   "kind": "Book",
   "why": "Causes, manometry and treatment.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Physiology, Defecation (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK539732/"
  },
  {
   "name": "Fecal Incontinence (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK459128/"
  }
 ],
 "verified": "26 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physio1-microbiota"] = {
 "id": "physio1-microbiota",
 "subject": "physio1",
 "group": "Digestive physiology",
 "title": "Intestinal microbiota",
 "sourceFile": "Intestinal microbiota (Physiology, Pr. O. Bahlaoui)",
 "sourceUrl": "https://drive.google.com/file/d/19wADJoI0Di3ElT-xl51xtPVWwW4pB9Ma/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "Composition",
   "html": "<p>The intestinal microbiota is the community of microorganisms in the digestive tract. <strong>Bacteria</strong> make up about 95%: <strong>Firmicutes</strong> (Lactobacillus, Clostridium, Enterococcus), <strong>Bacteroidetes</strong> (Bacteroides, Prevotella), <strong>Actinobacteria</strong> (Bifidobacterium), <strong>Proteobacteria</strong> (Escherichia, Helicobacter, Salmonella) and <strong>Verrucomicrobia</strong> (<em>Akkermansia muciniphila</em>, mucus layer integrity). There are also viruses (mostly bacteriophages), fungi (Candida, Saccharomyces), archaea (<em>Methanobrevibacter smithii</em>, methane) and protozoa.</p><p>Density increases along the tract: <strong>stomach and duodenum</strong> low (acid; Lactobacillus, Helicobacter), <strong>jejunum and ileum</strong> more diverse, <strong>colon</strong> highest (about <strong>10¹² bacteria per gram</strong>). Composition depends on diet (fibre favours Bifidobacterium and Lactobacillus), age and birth mode (vaginal vs caesarean), antibiotics, genetics, stress and environment.</p>"
  },
  {
   "id": "s1",
   "title": "Functions",
   "html": "<p><strong>Metabolic</strong>: fermentation of fibre into <strong>short-chain fatty acids</strong>: <strong>acetate</strong> (energy), <strong>propionate</strong> (liver gluconeogenesis), <strong>butyrate</strong> (main fuel of colonocytes, anti-inflammatory); synthesis of <strong>vitamin K</strong> and B vitamins; conversion of primary into <strong>secondary bile acids</strong>. <strong>Protection</strong> (colonisation resistance): competitive exclusion, bacteriocins and organic acids, support of the mucus layer. <strong>Immune</strong>: maturation of GALT, tolerance to commensals, balance of IL-6/TNF-α and IL-10. <strong>Gut-brain axis</strong>: production of serotonin, dopamine and GABA precursors; SCFAs modulate the HPA axis; links with depression, autism and Parkinson's disease are being studied. <strong>Energy balance</strong>: effects on fat storage and insulin sensitivity; a changed Firmicutes/Bacteroidetes ratio is associated with obesity.</p>"
  },
  {
   "id": "s2",
   "title": "Dysbiosis and therapy",
   "html": "<p><strong>Dysbiosis</strong> is linked to obesity and type 2 diabetes, Crohn's disease and ulcerative colitis, allergy, and neurological conditions. Tools to modulate the microbiota: <strong>probiotics</strong> (live beneficial organisms: Lactobacillus, Bifidobacterium, <em>Saccharomyces boulardii</em>; used for antibiotic-associated and infectious diarrhoea), <strong>prebiotics</strong> (non-digestible fibres that feed beneficial bacteria: FOS in onions, garlic, bananas; GOS; <strong>inulin</strong> in chicory), <strong>synbiotics</strong> (both together), diet and exercise. <strong>Faecal microbiota transplantation</strong>: stool from a screened healthy donor given by colonoscopy, enema or capsules; about <strong>90% success in recurrent <em>Clostridioides difficile</em> infection</strong>, with a risk of transmitting unknown pathogens.</p>"
  }
 ],
 "exam": [
  "Bacteria ~95% of the microbiota; Firmicutes and Bacteroidetes dominate.",
  "Density rises from stomach (low) to colon (~10¹²/g).",
  "SCFAs: acetate, propionate, butyrate (colonocyte fuel).",
  "Microbiota makes vitamin K and B vitamins; makes secondary bile acids.",
  "Colonisation resistance protects against pathogens.",
  "Microbiota matures GALT and shapes immune tolerance.",
  "Probiotics = live organisms; prebiotics = fibre; synbiotics = both.",
  "FMT: ~90% success in recurrent C. difficile infection."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "What the gut microbiota does",
   "caption": "Five roles and one failure. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"280\" y1=\"170\" x2=\"220\" y2=\"100\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"170\" x2=\"540\" y2=\"100\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"280\" y1=\"230\" x2=\"220\" y2=\"300\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"230\" x2=\"540\" y2=\"300\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"170\" x2=\"380\" y2=\"100\"/>",
   "parts": {
    "mb": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"265\" y=\"170\" width=\"230\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Gut microbiota",
      "(~10¹² bacteria/g colon)"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "met": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"15\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Fibre → SCFAs;",
      "vitamins K, B"
     ],
     "lx": 125.0,
     "ly": 68.0
    },
    "prot": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"525\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Colonisation",
      "resistance"
     ],
     "lx": 635.0,
     "ly": 68.0
    },
    "imm": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"15\" y=\"300\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Immune maturation",
      "(GALT)"
     ],
     "lx": 125.0,
     "ly": 328.0
    },
    "brain": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"525\" y=\"300\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Gut-brain axis",
      "(5-HT, GABA)"
     ],
     "lx": 635.0,
     "ly": 328.0
    },
    "dys": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"265\" y=\"40\" width=\"230\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Dysbiosis: IBD,",
      "obesity, C. difficile"
     ],
     "lx": 380.0,
     "ly": 68.0
    }
   },
   "arrows": {
    "mb": [
     {
      "t": [
       265.0,
       178.0
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
    "prot": [
     {
      "t": [
       525.0,
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
       15.0,
       308.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "brain": [
     {
      "t": [
       525.0,
       308.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "dys": [
     {
      "t": [
       265.0,
       48.0
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
   "q": "The dominant microorganisms of the gut microbiota are:",
   "options": [
    "Fungi",
    "Bacteria",
    "Viruses",
    "Protozoa"
   ],
   "answer": 1,
   "why": "About 95%."
  },
  {
   "q": "Bacterial density is highest in the:",
   "options": [
    "Stomach",
    "Duodenum",
    "Colon",
    "Jejunum"
   ],
   "answer": 2,
   "why": "~10¹²/g."
  },
  {
   "q": "The main energy source of colonocytes is:",
   "options": [
    "Glucose",
    "Butyrate",
    "Acetate",
    "Propionate"
   ],
   "answer": 1,
   "why": "SCFA."
  },
  {
   "q": "Propionate mainly regulates:",
   "options": [
    "Colonocyte energy",
    "Liver gluconeogenesis",
    "Vitamin K synthesis",
    "Mucus production"
   ],
   "answer": 1,
   "why": ""
  },
  {
   "q": "A vitamin produced by gut bacteria is:",
   "options": [
    "Vitamin C",
    "Vitamin K",
    "Vitamin A",
    "Vitamin D"
   ],
   "answer": 1,
   "why": "Also B vitamins."
  },
  {
   "q": "Akkermansia muciniphila is associated with:",
   "options": [
    "Mucus layer integrity",
    "Methane production",
    "Gastric ulcer",
    "Vitamin C synthesis"
   ],
   "answer": 0,
   "why": ""
  },
  {
   "q": "Methanobrevibacter smithii belongs to the:",
   "options": [
    "Archaea",
    "Fungi",
    "Firmicutes",
    "Protozoa"
   ],
   "answer": 0,
   "why": "Methane."
  },
  {
   "q": "Prebiotics are:",
   "options": [
    "Live beneficial bacteria",
    "Fibres that feed good bacteria",
    "Narrow-spectrum antibiotics",
    "Screened stool transplants"
   ],
   "answer": 1,
   "why": "E.g. inulin."
  },
  {
   "q": "Saccharomyces boulardii is used as a:",
   "options": [
    "Prebiotic",
    "Probiotic",
    "Antibiotic",
    "Synbiotic fibre"
   ],
   "answer": 1,
   "why": "Yeast."
  },
  {
   "q": "The main indication for faecal microbiota transplantation is:",
   "options": [
    "Morbid obesity",
    "Recurrent C. difficile infection",
    "Chronic peptic ulcer disease",
    "Refractory coeliac disease"
   ],
   "answer": 1,
   "why": "~90% success."
  },
  {
   "q": "Colonisation resistance refers to:",
   "options": [
    "Bacteria resisting antibiotics",
    "Commensals preventing pathogen growth",
    "Immune rejection of transplants",
    "Bile resistance"
   ],
   "answer": 1,
   "why": ""
  },
  {
   "q": "Microbiota converts primary bile acids into:",
   "options": [
    "Cholesterol",
    "Secondary bile acids",
    "Bilirubin",
    "Chylomicrons"
   ],
   "answer": 1,
   "why": ""
  },
  {
   "q": "A factor shaping the newborn microbiota is:",
   "options": [
    "Birth mode",
    "Blood group",
    "Eye colour",
    "Height"
   ],
   "answer": 0,
   "why": "Vaginal vs caesarean."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "mb",
   "options": [
    "Immune role",
    "Gut-brain axis",
    "Microbiota",
    "Colonisation resistance"
   ],
   "answer": 2,
   "why": "The arrow points to: Microbiota. Bacteria (95%), viruses, fungi, archaea and protozoa; density rises from stomach to colon."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "met",
   "options": [
    "Colonisation resistance",
    "Gut-brain axis",
    "Metabolic role",
    "Immune role"
   ],
   "answer": 2,
   "why": "The arrow points to: Metabolic role. Fermentation of fibre into acetate, propionate and butyrate; synthesis of vitamin K and B vitamins; bile acid transformation."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "prot",
   "options": [
    "Gut-brain axis",
    "Dysbiosis",
    "Colonisation resistance",
    "Microbiota"
   ],
   "answer": 2,
   "why": "The arrow points to: Colonisation resistance. Competition for nutrients and sites, bacteriocins and organic acids, and mucus support keep pathogens out."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "imm",
   "options": [
    "Microbiota",
    "Gut-brain axis",
    "Colonisation resistance",
    "Immune role"
   ],
   "answer": 3,
   "why": "The arrow points to: Immune role. Maturation of GALT and balance of pro- and anti-inflammatory cytokines; tolerance to commensals."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "brain",
   "options": [
    "Immune role",
    "Dysbiosis",
    "Gut-brain axis",
    "Microbiota"
   ],
   "answer": 2,
   "why": "The arrow points to: Gut-brain axis. Microbial metabolites and neurotransmitters influence mood, stress (HPA axis) and neurological disease."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "dys",
   "options": [
    "Colonisation resistance",
    "Microbiota",
    "Dysbiosis",
    "Immune role"
   ],
   "answer": 2,
   "why": "The arrow points to: Dysbiosis. Imbalance linked to IBD, obesity, type 2 diabetes and recurrent Clostridioides difficile infection."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Main bacterial phyla?",
   "back": "Firmicutes, Bacteroidetes, Actinobacteria, Proteobacteria, Verrucomicrobia."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Three SCFAs and roles?",
   "back": "Acetate (energy), propionate (liver gluconeogenesis), butyrate (colonocytes)."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Five functions of microbiota?",
   "back": "Metabolism, protection, immunity, gut-brain axis, energy balance."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Probiotic vs prebiotic vs synbiotic?",
   "back": "Live organisms; non-digestible fibre; both together."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "FMT indication?",
   "back": "Recurrent C. difficile infection (~90% success)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Distribution along the gut?",
   "back": "Low in stomach/duodenum, higher in ileum, highest in colon."
  },
  {
   "id": "img-mb",
   "type": "image",
   "target": "mb",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Microbiota. Bacteria (95%), viruses, fungi, archaea and protozoa; density rises from stomach to colon."
  },
  {
   "id": "img-met",
   "type": "image",
   "target": "met",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Metabolic role. Fermentation of fibre into acetate, propionate and butyrate; synthesis of vitamin K and B vitamins; bile acid transformation."
  },
  {
   "id": "img-prot",
   "type": "image",
   "target": "prot",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Colonisation resistance. Competition for nutrients and sites, bacteriocins and organic acids, and mucus support keep pathogens out."
  },
  {
   "id": "img-imm",
   "type": "image",
   "target": "imm",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Immune role. Maturation of GALT and balance of pro- and anti-inflammatory cytokines; tolerance to commensals."
  },
  {
   "id": "img-brain",
   "type": "image",
   "target": "brain",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Gut-brain axis. Microbial metabolites and neurotransmitters influence mood, stress (HPA axis) and neurological disease."
  },
  {
   "id": "img-dys",
   "type": "image",
   "target": "dys",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Dysbiosis. Imbalance linked to IBD, obesity, type 2 diabetes and recurrent Clostridioides difficile infection."
  }
 ],
 "deeper": [
  {
   "title": "Why antibiotics can cause colitis",
   "html": "<p>Broad-spectrum antibiotics wipe out much of the commensal colonic flora. <em>Clostridioides difficile</em>, which forms resistant spores, can then expand without competition and release toxins that cause diarrhoea and pseudomembranous colitis. Restoring a diverse microbiota by faecal transplantation removes the niche, which is why FMT works so well in recurrent infection: it is colonisation resistance put back.</p>"
  }
 ],
 "resources": [
  {
   "title": "Impact of the gut microbiota, prebiotics and probiotics on human health (PubMed)",
   "url": "https://pubmed.ncbi.nlm.nih.gov/25179725/",
   "kind": "Article",
   "why": "Review of microbiota functions and modulation.",
   "note": ""
  },
  {
   "title": "Fecal Microbiota Transplantation (Cleveland Clinic)",
   "url": "https://my.clevelandclinic.org/health/treatments/25202-fecal-transplant",
   "kind": "Website",
   "why": "How FMT is done and why.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Impact of the gut microbiota, prebiotics and probiotics on human health (PubMed)",
   "url": "https://pubmed.ncbi.nlm.nih.gov/25179725/"
  },
  {
   "name": "Fecal Microbiota Transplantation (Cleveland Clinic)",
   "url": "https://my.clevelandclinic.org/health/treatments/25202-fecal-transplant"
  }
 ],
 "verified": "26 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physio1-endocrine-intro"] = {
 "id": "physio1-endocrine-intro",
 "subject": "physio1",
 "group": "Endocrine physiology",
 "title": "Introduction to endocrine physiology",
 "sourceFile": "Physiology of the endocrine system (Physiology, Pr. M. Covasa)",
 "sourceUrl": "https://drive.google.com/file/d/1xrVXsZrXj5KImkobvwwlrOb4iTFlDVfX/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "What the endocrine system is",
   "html": "<p>Endocrine glands are <strong>ductless</strong> and secrete hormones into the <strong>blood</strong>, acting on distant targets that carry the right <strong>receptor</strong> (exocrine glands use ducts). The glands are scattered and not anatomically connected, but work as one system integrated with the nervous and immune systems. The nervous system is <strong>fast and precise</strong>; the endocrine system is <strong>slow, sustained and widespread</strong>. Some molecules are both hormones and neurotransmitters (noradrenaline, dopamine, ADH, TRH, CCK). Hormones regulate blood pressure and volume, fluid and electrolytes, calcium and phosphate, temperature, energy balance, metabolism, growth, development and reproduction. Many organs besides classic glands secrete hormones: heart (ANP, BNP), liver (IGF-1, angiotensinogen), kidney (EPO, renin, calcitriol), adipose tissue (leptin, adiponectin), gut (gastrin, CCK, GLP-1). The adrenal gland shows how one organ can be two: <strong>cortex</strong> (mesoderm, steroids, ACTH-controlled, slow) and <strong>medulla</strong> (neural crest, catecholamines, sympathetic, fast).</p><p>Modes of signalling: <strong>endocrine</strong> (via blood to distant cells), <strong>paracrine</strong> (neighbouring cells), <strong>autocrine</strong> (the same cell) and <strong>intracrine</strong> (acts inside the cell that made it).</p>"
  },
  {
   "id": "s1",
   "title": "Hormone classes",
   "html": "<p><strong>Peptides and proteins</strong> (3-200 amino acids; the largest class): made as pre-prohormone → prohormone → hormone in ER and Golgi, <strong>stored in granules</strong>, released by <strong>Ca²⁺-dependent exocytosis</strong>, short half-life (minutes). Glycoproteins: LH, FSH, TSH, hCG. <strong>Steroids</strong>: from <strong>cholesterol</strong> (adrenal cortex, gonads, placenta; vitamin D is related), lipid-soluble, <strong>synthesised on demand</strong>, carried by proteins, act on intracellular receptors. <strong>Amino acid-derived</strong> (tyrosine): catecholamines (membrane receptors, very short half-life, 2-3 min) and <strong>thyroid hormones</strong> (nuclear receptors, half-life of days): the key exception.</p>"
  },
  {
   "id": "s2",
   "title": "Transport and clearance",
   "html": "<p>Hormones circulate <strong>free</strong> (active) or <strong>bound</strong> (inactive reservoir). Binding proteins, mostly made in the <strong>liver</strong>, can be specific (TBG, CBG, SHBG) or not (albumin); they prolong half-life and buffer the free fraction. Only <strong>free</strong> hormone acts. <strong>Trap</strong>: when binding proteins rise (pregnancy, oestrogen), total hormone rises but free hormone stays normal. Example: pregnancy ↑ CBG → ↓ free cortisol → ↑ CRH and ACTH → more cortisol until free cortisol is normal again. IGFs are the peptides that circulate bound (six IGF-binding proteins). Half-life is inversely related to <strong>metabolic clearance rate</strong>. Clearance: receptor-mediated internalisation, <strong>liver</strong> metabolism (phase I and II) and renal excretion of metabolites; urinary tests need normal kidney and liver function.</p>"
  },
  {
   "id": "s3",
   "title": "Receptors and signalling",
   "html": "<p>Receptors show <strong>affinity</strong> (Kd: the lower, the tighter), <strong>specificity</strong> and <strong>saturation</strong>. <strong>GPCRs</strong>: Gs → ↑ cAMP → PKA (ACTH, TSH, LH, FSH); Gi → ↓ cAMP (dopamine on lactotrophs); Gq → PLC → IP₃ + DAG → Ca²⁺ and PKC (GnRH, TRH). <strong>Receptor tyrosine kinases</strong> have intrinsic kinase activity (insulin, IGF-1). <strong>Class I cytokine receptors</strong> have no kinase and use <strong>JAK2/STAT</strong> (GH, prolactin). <strong>Intracellular receptors</strong>: steroid receptors are often cytosolic with heat-shock proteins and move to the nucleus; the thyroid receptor represses transcription when empty and activates it with T3.</p><p><strong>Receptor regulation</strong>: prolonged exposure → <strong>down-regulation</strong> and desensitisation; low levels → <strong>up-regulation</strong>; one hormone can regulate another's receptors (thyroid hormone ↑ cardiac β-receptors). <strong>Tachyphylaxis</strong>: rapid loss of response not overcome by higher dose; <strong>tolerance</strong>: slow, partly overcome. Receptor mutations cause disease: androgen receptor loss of function (androgen insensitivity); gain of function of the calcium-sensing receptor (low PTH, hypocalcaemia with hypercalciuria).</p>"
  },
  {
   "id": "s4",
   "title": "Control of secretion",
   "html": "<p>Secretion is controlled by <strong>neural</strong> input (sympathetic → adrenal medulla; dopamine → prolactin), <strong>hormones</strong> (tropic: CRH → ACTH → cortisol; inhibitory: somatostatin → GH) and <strong>substrates</strong> (↑ glucose → insulin; ↓ Ca²⁺ → PTH; ↑ Ca²⁺ → calcitonin; ↑ K⁺ → aldosterone). Many hormones are <strong>pulsatile</strong> (GnRH, GH), which prevents desensitisation, and <strong>circadian</strong> (cortisol peaks early morning; GH in deep sleep). <strong>Negative feedback</strong> is the rule: long loop (target hormone → hypothalamus and pituitary), short loop (pituitary → hypothalamus), ultra-short loop (hypothalamic hormone → itself). <strong>Positive feedback</strong> is rare, temporary and needs an off switch: oestradiol → LH surge → ovulation; oxytocin in labour.</p>"
  },
  {
   "id": "s5",
   "title": "Measuring hormones",
   "html": "<p>Hormones are measured mostly by immunoassay in plasma, urine (24-hour urine integrates pulsatile secretion) or other fluids, and must be read in context (time of day, fed or fasted, cycle phase, stress, age, sex). <strong>Always read a hormone with its regulator</strong>: TSH with T4, PTH with calcium, insulin with glucose. Tropic ↑ + target ↓ = <strong>primary</strong> gland failure; tropic ↓ + target ↓ = <strong>secondary</strong> deficiency; tropic ↓ + target ↑ = autonomous target gland; tropic ↑ + target ↑ = autonomous tropic secretion or feedback failure; hormone ↑ with substrate ↑ = <strong>resistance</strong>. Dynamic tests: <strong>stimulation</strong> tests for deficiency (ACTH stimulation, OGTT) and <strong>suppression</strong> tests for excess (dexamethasone suppression, glucose suppression of GH).</p>"
  }
 ],
 "exam": [
  "Endocrine = ductless, via blood; paracrine, autocrine, intracrine also exist.",
  "Peptides: stored, Ca²⁺-dependent exocytosis, membrane receptors, short half-life.",
  "Steroids: from cholesterol, made on demand, intracellular receptors.",
  "Thyroid hormone: tyrosine-derived but nuclear receptor (exception).",
  "Only free hormone is active; binding protein changes alter totals, not free.",
  "Gs ↑ cAMP (ACTH, TSH, LH, FSH); Gq IP₃/Ca²⁺ (TRH, GnRH); Gi ↓ cAMP (dopamine).",
  "RTK: insulin, IGF-1. JAK/STAT: GH, prolactin.",
  "Negative feedback is the rule; positive feedback: LH surge, oxytocin in labour.",
  "Tropic ↑ + target ↓ = primary failure; both ↓ = secondary.",
  "Stimulation tests for deficiency; suppression tests for excess."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Where the receptor sits",
   "caption": "Hormone structure predicts receptor and speed. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"235\" y1=\"70\" x2=\"280\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"500\" y1=\"70\" x2=\"545\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"235\" y1=\"230\" x2=\"280\" y2=\"230\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"500\" y1=\"230\" x2=\"545\" y2=\"230\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"125\" y1=\"320\" x2=\"125\" y2=\"260\"/>",
   "parts": {
    "pep": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"15\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Peptides and",
      "catecholamines"
     ],
     "lx": 125.0,
     "ly": 68.0
    },
    "mem": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"280\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Membrane receptors:",
      "GPCR, RTK, JAK/STAT"
     ],
     "lx": 390.0,
     "ly": 68.0
    },
    "fast": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"545\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Fast effects",
      "(seconds-minutes)"
     ],
     "lx": 645.0,
     "ly": 68.0
    },
    "ster": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"15\" y=\"200\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Steroids and",
      "thyroid hormone"
     ],
     "lx": 125.0,
     "ly": 228.0
    },
    "nuc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"280\" y=\"200\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Intracellular receptors:",
      "transcription factors"
     ],
     "lx": 390.0,
     "ly": 228.0
    },
    "slow": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"545\" y=\"200\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Slow genomic effects",
      "(hours-days)"
     ],
     "lx": 645.0,
     "ly": 228.0
    },
    "bind": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9ecec\" x=\"15\" y=\"320\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Binding proteins:",
      "only free hormone acts"
     ],
     "lx": 125.0,
     "ly": 348.0
    }
   },
   "arrows": {
    "pep": [
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
    "mem": [
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
    "fast": [
     {
      "t": [
       545.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "ster": [
     {
      "t": [
       15.0,
       208.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "nuc": [
     {
      "t": [
       280.0,
       208.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "slow": [
     {
      "t": [
       545.0,
       208.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "bind": [
     {
      "t": [
       15.0,
       328.0
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
   "q": "Which hormone acts on a nuclear receptor despite being amino acid-derived?",
   "options": [
    "Adrenaline",
    "Thyroxine",
    "Dopamine",
    "Noradrenaline"
   ],
   "answer": 1,
   "why": "Classic exception."
  },
  {
   "q": "Steroid hormones are derived from:",
   "options": [
    "Tyrosine",
    "Cholesterol",
    "Tryptophan",
    "Arachidonic acid"
   ],
   "answer": 1,
   "why": ""
  },
  {
   "q": "Peptide hormones are released by:",
   "options": [
    "Diffusion through the membrane",
    "Ca²⁺-dependent exocytosis",
    "Carrier proteins",
    "Gap junctions"
   ],
   "answer": 1,
   "why": "Stored in granules."
  },
  {
   "q": "Growth hormone and prolactin signal through:",
   "options": [
    "Receptor tyrosine kinases",
    "JAK/STAT cytokine receptors",
    "Nuclear receptors",
    "Ion channels"
   ],
   "answer": 1,
   "why": "JAK2."
  },
  {
   "q": "Insulin acts through a:",
   "options": [
    "GPCR",
    "Receptor tyrosine kinase",
    "Nuclear receptor",
    "Cytokine receptor"
   ],
   "answer": 1,
   "why": "Intrinsic kinase."
  },
  {
   "q": "TRH and GnRH signal via:",
   "options": [
    "Gs and cAMP",
    "Gq, IP₃ and Ca²⁺",
    "Gi",
    "JAK/STAT"
   ],
   "answer": 1,
   "why": ""
  },
  {
   "q": "Dopamine inhibits prolactin through:",
   "options": [
    "Gs",
    "Gi (D2)",
    "Gq",
    "RTK"
   ],
   "answer": 1,
   "why": "↓ cAMP."
  },
  {
   "q": "In pregnancy, raised TBG leads to:",
   "options": [
    "High free T4 and hyperthyroidism",
    "High total T4, normal free T4",
    "Low total T4",
    "Low TSH"
   ],
   "answer": 1,
   "why": "Euthyroid."
  },
  {
   "q": "A high TSH with low free T4 indicates:",
   "options": [
    "Secondary hypothyroidism",
    "Primary hypothyroidism",
    "Hyperthyroidism",
    "TBG excess"
   ],
   "answer": 1,
   "why": "Loss of negative feedback."
  },
  {
   "q": "Low ACTH with low cortisol indicates:",
   "options": [
    "Primary adrenal failure",
    "Secondary adrenal insufficiency",
    "Cushing syndrome",
    "Adrenal tumour"
   ],
   "answer": 1,
   "why": "Tropic deficiency."
  },
  {
   "q": "An example of positive feedback is:",
   "options": [
    "Cortisol on ACTH",
    "Oestradiol causing the LH surge",
    "T4 on TSH",
    "Glucose on insulin"
   ],
   "answer": 1,
   "why": "Ends with ovulation."
  },
  {
   "q": "The adrenal medulla derives from:",
   "options": [
    "Mesoderm",
    "Neural crest",
    "Endoderm",
    "Yolk sac"
   ],
   "answer": 1,
   "why": "Catecholamines."
  },
  {
   "q": "Tachyphylaxis is:",
   "options": [
    "A slow loss overcome by more hormone",
    "A rapid loss not overcome by more hormone",
    "Receptor up-regulation",
    "Hormone deficiency"
   ],
   "answer": 1,
   "why": ""
  },
  {
   "q": "To diagnose hormone excess you mostly use:",
   "options": [
    "Stimulation tests",
    "Suppression tests",
    "Random levels only",
    "Imaging only"
   ],
   "answer": 1,
   "why": "E.g. dexamethasone."
  },
  {
   "q": "A hormone that acts on the same cell that released it is:",
   "options": [
    "Endocrine",
    "Paracrine",
    "Autocrine",
    "Neurocrine"
   ],
   "answer": 2,
   "why": ""
  },
  {
   "q": "Pulsatile GnRH secretion is important because it:",
   "options": [
    "Prevents receptor desensitisation",
    "Increases binding proteins",
    "Stops feedback",
    "Blocks LH"
   ],
   "answer": 0,
   "why": "Continuous GnRH suppresses LH/FSH."
  },
  {
   "q": "Thyroid hormone increases cardiac responsiveness by:",
   "options": [
    "Up-regulating β-adrenergic receptors",
    "Down-regulating β-receptors",
    "Blocking Ca²⁺ channels",
    "Lowering cAMP"
   ],
   "answer": 0,
   "why": "Cross-regulation."
  },
  {
   "q": "Which is mainly regulated by a substrate rather than a tropic hormone?",
   "options": [
    "Cortisol",
    "Insulin",
    "T4",
    "Testosterone"
   ],
   "answer": 1,
   "why": "Glucose."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pep",
   "options": [
    "Genomic responses",
    "Water-soluble hormones",
    "Rapid responses",
    "Lipid-soluble hormones"
   ],
   "answer": 1,
   "why": "The arrow points to: Water-soluble hormones. Peptides (insulin, GH, ACTH) and catecholamines cannot cross the membrane; they are stored in granules and released by Ca²⁺-dependent exocytosis."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "mem",
   "options": [
    "Genomic responses",
    "Membrane receptors",
    "Rapid responses",
    "Lipid-soluble hormones"
   ],
   "answer": 1,
   "why": "The arrow points to: Membrane receptors. G protein-coupled receptors (Gs, Gi, Gq), receptor tyrosine kinases (insulin, IGF-1) and cytokine receptors using JAK/STAT (GH, prolactin)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "fast",
   "options": [
    "Lipid-soluble hormones",
    "Rapid responses",
    "Membrane receptors",
    "Carrier proteins"
   ],
   "answer": 1,
   "why": "The arrow points to: Rapid responses. Second messengers (cAMP, IP₃/Ca²⁺, DAG) change enzyme activity within seconds to minutes."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ster",
   "options": [
    "Genomic responses",
    "Membrane receptors",
    "Lipid-soluble hormones",
    "Water-soluble hormones"
   ],
   "answer": 2,
   "why": "The arrow points to: Lipid-soluble hormones. Steroids are made from cholesterol on demand; thyroid hormone is a tyrosine derivative transported into the cell."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "nuc",
   "options": [
    "Water-soluble hormones",
    "Nuclear receptors",
    "Carrier proteins",
    "Rapid responses"
   ],
   "answer": 1,
   "why": "The arrow points to: Nuclear receptors. Ligand-regulated transcription factors: steroid receptors move from cytosol to nucleus; the thyroid receptor sits on DNA and switches from repressor to activator."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "slow",
   "options": [
    "Nuclear receptors",
    "Genomic responses",
    "Rapid responses",
    "Lipid-soluble hormones"
   ],
   "answer": 1,
   "why": "The arrow points to: Genomic responses. Changes in gene transcription and protein synthesis, taking hours to days."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "bind",
   "options": [
    "Membrane receptors",
    "Nuclear receptors",
    "Genomic responses",
    "Carrier proteins"
   ],
   "answer": 3,
   "why": "The arrow points to: Carrier proteins. TBG, CBG, SHBG and albumin carry lipophilic hormones, prolonging half-life and buffering the free, active fraction."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Endocrine vs exocrine?",
   "back": "Endocrine: ductless, blood. Exocrine: ducts, surfaces."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Four modes of hormone signalling?",
   "back": "Endocrine, paracrine, autocrine, intracrine."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Receptor location by class?",
   "back": "Peptides and catecholamines: membrane. Steroids and thyroid hormone: intracellular."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "GPCR pathways?",
   "back": "Gs ↑ cAMP (ACTH, TSH, LH, FSH); Gi ↓ cAMP (dopamine); Gq IP₃/Ca²⁺ (TRH, GnRH)."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "RTK vs JAK/STAT?",
   "back": "RTK has intrinsic kinase (insulin, IGF-1). Cytokine receptor uses JAK2 (GH, prolactin)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Why measure free hormone?",
   "back": "Only free hormone is active; binding proteins change totals."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Three feedback loops?",
   "back": "Long (target → pituitary/hypothalamus), short (pituitary → hypothalamus), ultra-short (self)."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Primary vs secondary failure pattern?",
   "back": "Primary: tropic ↑, target ↓. Secondary: both ↓."
  },
  {
   "id": "x8",
   "type": "text",
   "front": "Tachyphylaxis vs tolerance?",
   "back": "Tachyphylaxis: fast, not overcome by dose. Tolerance: slow, partly overcome."
  },
  {
   "id": "img-pep",
   "type": "image",
   "target": "pep",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Water-soluble hormones. Peptides (insulin, GH, ACTH) and catecholamines cannot cross the membrane; they are stored in granules and released by Ca²⁺-dependent exocytosis."
  },
  {
   "id": "img-mem",
   "type": "image",
   "target": "mem",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Membrane receptors. G protein-coupled receptors (Gs, Gi, Gq), receptor tyrosine kinases (insulin, IGF-1) and cytokine receptors using JAK/STAT (GH, prolactin)."
  },
  {
   "id": "img-fast",
   "type": "image",
   "target": "fast",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Rapid responses. Second messengers (cAMP, IP₃/Ca²⁺, DAG) change enzyme activity within seconds to minutes."
  },
  {
   "id": "img-ster",
   "type": "image",
   "target": "ster",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Lipid-soluble hormones. Steroids are made from cholesterol on demand; thyroid hormone is a tyrosine derivative transported into the cell."
  },
  {
   "id": "img-nuc",
   "type": "image",
   "target": "nuc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Nuclear receptors. Ligand-regulated transcription factors: steroid receptors move from cytosol to nucleus; the thyroid receptor sits on DNA and switches from repressor to activator."
  },
  {
   "id": "img-slow",
   "type": "image",
   "target": "slow",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Genomic responses. Changes in gene transcription and protein synthesis, taking hours to days."
  },
  {
   "id": "img-bind",
   "type": "image",
   "target": "bind",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Carrier proteins. TBG, CBG, SHBG and albumin carry lipophilic hormones, prolonging half-life and buffering the free, active fraction."
  }
 ],
 "deeper": [
  {
   "title": "The tired student (lecture case)",
   "html": "<p>A 20-year-old woman has fatigue, cold intolerance, weight gain, irregular periods, bradycardia and dry skin. TSH is high and free T4 low. The pattern is <strong>primary hypothyroidism</strong>: the thyroid fails, so low T4 removes negative feedback and the pituitary raises TSH. The lecture's answers: T4 is an <strong>amino acid-derived</strong> hormone, its receptor is <strong>nuclear</strong>, it <strong>increases metabolic activity and promotes growth and development</strong>, and TSH comes from the <strong>anterior pituitary</strong>. Irregular periods fit too: high TRH also raises prolactin, which suppresses GnRH.</p>"
  }
 ],
 "resources": [
  {
   "title": "Physiology, Endocrine Hormones (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK538498/",
   "kind": "Book",
   "why": "Hormone classes, receptors and feedback.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Physiology, Endocrine Hormones (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK538498/"
  }
 ],
 "verified": "26 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physio1-hypothalamus-pituitary"] = {
 "id": "physio1-hypothalamus-pituitary",
 "subject": "physio1",
 "group": "Endocrine physiology",
 "title": "Hypothalamus and pituitary",
 "sourceFile": "Physiology of the hypothalamic-pituitary gland (Physiology, Pr. M. Covasa)",
 "sourceUrl": "https://drive.google.com/file/d/1KabKgEG8m0KBdJcTOI-tCG0QerynZiDe/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The hypothalamus",
   "html": "<p>The hypothalamus integrates behaviour, emotion, autonomic function, sleep and neuroendocrine reflexes. In the endocrine system it controls the pituitary two ways: <strong>neural</strong> (magnocellular neurons whose axons end in the <strong>posterior pituitary</strong>) and <strong>vascular</strong> (parvocellular neurons releasing hypophysiotropic hormones at the <strong>median eminence</strong> into the <strong>portal vessels</strong> to the <strong>anterior pituitary</strong>).</p>"
  },
  {
   "id": "s1",
   "title": "Posterior pituitary: ADH and oxytocin",
   "html": "<p>Both are made in magnocellular neurons of the <strong>supraoptic and paraventricular nuclei</strong> as precursors (ADH with neurophysin II; oxytocin with neurophysin I), transported down axons and released by exocytosis. <strong>Oxytocin</strong> is released in response to stretch of the reproductive tract and <strong>nipple stimulation</strong> (synchronous high-frequency firing); it causes <strong>uterine contraction</strong> in labour and <strong>milk ejection</strong> (myoepithelial cells).</p><p><strong>ADH (arginine vasopressin)</strong> rises with <strong>plasma osmolality</strong> (osmoreceptors shrink when dehydrated) and with falls in <strong>blood volume/pressure</strong> (baroreceptors via CN IX and X to the NTS; also <strong>angiotensin II</strong>). Pain, nausea and stress increase it; <strong>alcohol</strong> decreases it. Receptors are GPCRs: <strong>V2</strong> (Gs) on collecting duct principal cells inserts <strong>aquaporin-2</strong> → water reabsorption, concentrated urine; <strong>V1A</strong> (Gq) → vasoconstriction and hepatic glycogenolysis; <strong>V1B (V3)</strong> → ACTH release.</p><p><strong>Diabetes insipidus</strong>: central (low ADH: trauma, surgery, tumours, inflammation) or <strong>nephrogenic</strong> (renal resistance: X-linked V2 receptor mutations, lithium, hypokalaemia): large volumes of dilute urine. <strong>SIADH</strong>: excess ADH (tumours, brain injury): small volumes of concentrated urine and <strong>dilutional hyponatraemia</strong>.</p>"
  },
  {
   "id": "s2",
   "title": "Anterior pituitary and its controllers",
   "html": "<p>Six hormones in three families: <strong>glycoproteins</strong> TSH, FSH, LH (shared α subunit; β gives specificity); <strong>POMC-derived</strong> ACTH (plus β-endorphin, MSH); and the <strong>GH/prolactin</strong> family. Hypothalamic controllers: <strong>CRH</strong> → ACTH, <strong>TRH</strong> → TSH (and prolactin), <strong>GHRH</strong> → GH, <strong>somatostatin</strong> ⊣ GH, <strong>GnRH</strong> → LH and FSH, <strong>dopamine</strong> ⊣ prolactin. CRH and TRH neurons lie in the parvocellular PVN, GHRH and dopamine in the arcuate nucleus, GnRH in the medial preoptic area.</p>"
  },
  {
   "id": "s3",
   "title": "Growth hormone",
   "html": "<p>GH is a 191-amino-acid peptide (hGH-N gene; a variant hGH-V comes from the placenta), half-life 6-20 min; about half circulates bound to <strong>GH-binding protein</strong> (the shed receptor). Its receptor is a <strong>cytokine receptor</strong>: GH binding causes dimerisation and activates <strong>JAK2-STAT</strong>. <strong>Direct effects</strong>: widening of the epiphyseal plates (chondrogenesis), protein synthesis and lean mass, ↑ phosphate and Ca²⁺ absorption, Na⁺ and K⁺ retention, and <strong>diabetogenic</strong> effects (↑ hepatic glucose output, opposes insulin), lipolysis (↑ free fatty acids, ↓ body fat). <strong>Indirect effects</strong> via <strong>IGF-1</strong> (somatomedin) made in the liver and cartilage, 95% bound to IGFBP-3: skeletal growth and insulin-like protein synthesis.</p><p>Secretion is pulsatile (GHRH stimulates, somatostatin inhibits). IGF-1 feeds back by raising somatostatin and acting on somatotrophs. <strong>Ghrelin</strong>, <strong>hypoglycaemia</strong>, <strong>arginine</strong> and <strong>stress</strong> stimulate; <strong>hyperglycaemia</strong>, free fatty acids and progesterone metabolites inhibit. Deep sleep brings the largest pulses.</p>"
  },
  {
   "id": "s4",
   "title": "Prolactin",
   "html": "<p>A 199-amino-acid peptide from lactotrophs, half-life about 20 min, acting on a <strong>cytokine receptor (JAK/STAT)</strong>. It stimulates mammary growth and <strong>milk synthesis</strong>, and <strong>inhibits GnRH</strong>, so it suppresses ovulation and spermatogenesis and lowers libido. It is under <strong>tonic dopamine inhibition</strong> (D2, Gi) from the arcuate and PVN; somatostatin and GABA also inhibit. <strong>TRH stimulates</strong> prolactin, which is why primary hypothyroidism can raise prolactin and cause galactorrhoea and menstrual disturbance.</p>"
  }
 ],
 "exam": [
  "Posterior pituitary: ADH and oxytocin made in SON and PVN, released from axon terminals.",
  "Anterior pituitary: controlled by hypothalamic hormones via portal vessels.",
  "ADH ↑ with osmolality, ↓ volume, angiotensin II; ↓ with alcohol.",
  "V2 (Gs) → aquaporin-2; V1A (Gq) → vasoconstriction.",
  "Central DI: no ADH. Nephrogenic DI: resistance (V2 mutation, lithium).",
  "SIADH: concentrated urine, dilutional hyponatraemia.",
  "Oxytocin: labour contractions, milk ejection.",
  "TSH, LH, FSH share an α subunit; ACTH comes from POMC.",
  "GH: JAK2/STAT; diabetogenic; acts directly and via IGF-1.",
  "Prolactin: tonic dopamine (D2) inhibition; TRH stimulates; inhibits GnRH."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Hypothalamus to pituitary",
   "caption": "Two lobes, two routes of control. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"235\" y1=\"70\" x2=\"280\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"490\" y1=\"70\" x2=\"540\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"235\" y1=\"230\" x2=\"280\" y2=\"230\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"490\" y1=\"230\" x2=\"520\" y2=\"230\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"475\" y1=\"320\" x2=\"535\" y2=\"260\"/>",
   "parts": {
    "pvn": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"15\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Magnocellular neurons",
      "(SON, PVN)"
     ],
     "lx": 125.0,
     "ly": 68.0
    },
    "post": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"280\" y=\"40\" width=\"210\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Posterior pituitary:",
      "ADH, oxytocin"
     ],
     "lx": 385.0,
     "ly": 68.0
    },
    "blood1": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"540\" y=\"40\" width=\"205\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Released directly",
      "into blood"
     ],
     "lx": 642.5,
     "ly": 68.0
    },
    "parvo": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"15\" y=\"200\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Parvocellular neurons:",
      "CRH TRH GnRH GHRH"
     ],
     "lx": 125.0,
     "ly": 228.0
    },
    "portal": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"280\" y=\"200\" width=\"210\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Median eminence,",
      "portal vessels"
     ],
     "lx": 385.0,
     "ly": 228.0
    },
    "ant": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"520\" y=\"200\" width=\"225\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Anterior pituitary:",
      "ACTH TSH LH FSH GH PRL"
     ],
     "lx": 632.5,
     "ly": 228.0
    },
    "da": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9ecec\" x=\"280\" y=\"320\" width=\"210\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Dopamine: tonic",
      "inhibition of PRL"
     ],
     "lx": 385.0,
     "ly": 348.0
    }
   },
   "arrows": {
    "pvn": [
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
    "post": [
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
    "blood1": [
     {
      "t": [
       540.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "parvo": [
     {
      "t": [
       15.0,
       208.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "portal": [
     {
      "t": [
       280.0,
       208.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "ant": [
     {
      "t": [
       520.0,
       208.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "da": [
     {
      "t": [
       280.0,
       328.0
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
   "q": "ADH and oxytocin are synthesised in the:",
   "options": [
    "Anterior pituitary lobe",
    "Supraoptic and paraventricular nuclei",
    "Arcuate (infundibular) nucleus",
    "Median eminence of the stalk"
   ],
   "answer": 1,
   "why": "Magnocellular neurons."
  },
  {
   "q": "The main stimulus of ADH release is:",
   "options": [
    "Low plasma osmolality",
    "High plasma osmolality",
    "Alcohol",
    "High blood volume"
   ],
   "answer": 1,
   "why": "Osmoreceptors."
  },
  {
   "q": "ADH increases water reabsorption through:",
   "options": [
    "V1A receptors",
    "V2 receptors and aquaporin-2",
    "Nuclear receptors",
    "Na⁺ channels"
   ],
   "answer": 1,
   "why": "Gs, cAMP."
  },
  {
   "q": "Vasoconstriction by ADH is mediated by:",
   "options": [
    "V1A",
    "V2",
    "V1B",
    "D2"
   ],
   "answer": 0,
   "why": "Gq."
  },
  {
   "q": "Lithium causes:",
   "options": [
    "Central diabetes insipidus",
    "Nephrogenic diabetes insipidus",
    "SIADH",
    "Acromegaly"
   ],
   "answer": 1,
   "why": "Renal resistance."
  },
  {
   "q": "SIADH produces:",
   "options": [
    "Hypernatraemia and dilute urine",
    "Hyponatraemia and concentrated urine",
    "Hyperkalaemia",
    "Polyuria"
   ],
   "answer": 1,
   "why": "Dilutional."
  },
  {
   "q": "Alcohol causes diuresis by:",
   "options": [
    "Stimulating ADH",
    "Inhibiting ADH",
    "Blocking aldosterone",
    "Raising oxytocin"
   ],
   "answer": 1,
   "why": ""
  },
  {
   "q": "Milk ejection is caused by:",
   "options": [
    "Prolactin",
    "Oxytocin",
    "GH",
    "Oestrogen"
   ],
   "answer": 1,
   "why": "Myoepithelial contraction."
  },
  {
   "q": "Prolactin is tonically inhibited by:",
   "options": [
    "TRH",
    "Dopamine",
    "Oxytocin",
    "Cortisol"
   ],
   "answer": 1,
   "why": "D2 receptors."
  },
  {
   "q": "The growth hormone receptor signals via:",
   "options": [
    "cAMP",
    "JAK2-STAT",
    "Tyrosine kinase domain of its own",
    "Nuclear receptor"
   ],
   "answer": 1,
   "why": "Cytokine receptor."
  },
  {
   "q": "GH is described as diabetogenic because it:",
   "options": [
    "Increases hepatic glucose output",
    "Increases insulin sensitivity",
    "Lowers blood glucose",
    "Stores glycogen"
   ],
   "answer": 0,
   "why": "Opposes insulin."
  },
  {
   "q": "Which stimulates GH secretion?",
   "options": [
    "Hyperglycaemia",
    "Hypoglycaemia",
    "Free fatty acids",
    "Somatostatin"
   ],
   "answer": 1,
   "why": "Also arginine, ghrelin, stress."
  },
  {
   "q": "IGF-1 is mainly produced by the:",
   "options": [
    "Pituitary",
    "Liver",
    "Kidney",
    "Adrenal"
   ],
   "answer": 1,
   "why": "In response to GH."
  },
  {
   "q": "TSH, LH and FSH share:",
   "options": [
    "The β subunit",
    "The α subunit",
    "A POMC precursor",
    "A JAK receptor"
   ],
   "answer": 1,
   "why": "β confers specificity."
  },
  {
   "q": "ACTH is derived from:",
   "options": [
    "Thyroglobulin",
    "Pro-opiomelanocortin",
    "Prolactin",
    "Neurophysin"
   ],
   "answer": 1,
   "why": "With MSH and β-endorphin."
  },
  {
   "q": "Primary hypothyroidism can raise prolactin because:",
   "options": [
    "TRH stimulates prolactin",
    "T4 stimulates prolactin",
    "Dopamine rises",
    "GH falls"
   ],
   "answer": 0,
   "why": ""
  },
  {
   "q": "Hypophysiotropic hormones reach the anterior pituitary via:",
   "options": [
    "Axons",
    "Portal vessels",
    "Lymphatics",
    "CSF"
   ],
   "answer": 1,
   "why": "Median eminence."
  },
  {
   "q": "Prolactin suppresses fertility by inhibiting:",
   "options": [
    "GnRH",
    "TSH",
    "ACTH",
    "GH"
   ],
   "answer": 0,
   "why": ""
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pvn",
   "options": [
    "Magnocellular neurons",
    "Hypophysiotropic neurons",
    "Posterior pituitary",
    "Direct release"
   ],
   "answer": 0,
   "why": "The arrow points to: Magnocellular neurons. Cell bodies in the supraoptic and paraventricular nuclei make ADH and oxytocin with their neurophysins."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "post",
   "options": [
    "Posterior pituitary",
    "Anterior pituitary",
    "Magnocellular neurons",
    "Hypophysiotropic neurons"
   ],
   "answer": 0,
   "why": "The arrow points to: Posterior pituitary. Neural lobe: axon terminals store and release ADH and oxytocin."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "blood1",
   "options": [
    "Posterior pituitary",
    "Hypophysiotropic neurons",
    "Direct release",
    "Hypophyseal portal system"
   ],
   "answer": 2,
   "why": "The arrow points to: Direct release. The posterior lobe hormones enter systemic blood by exocytosis from nerve endings."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "parvo",
   "options": [
    "Hypophyseal portal system",
    "Anterior pituitary",
    "Magnocellular neurons",
    "Hypophysiotropic neurons"
   ],
   "answer": 3,
   "why": "The arrow points to: Hypophysiotropic neurons. Parvocellular PVN (CRH, TRH), arcuate (GHRH, dopamine), preoptic area (GnRH), PVN (somatostatin)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "portal",
   "options": [
    "Magnocellular neurons",
    "Direct release",
    "Hypophyseal portal system",
    "Anterior pituitary"
   ],
   "answer": 2,
   "why": "The arrow points to: Hypophyseal portal system. Releasing and inhibiting hormones are secreted at the median eminence and carried to the anterior lobe."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ant",
   "options": [
    "Hypophyseal portal system",
    "Magnocellular neurons",
    "Posterior pituitary",
    "Anterior pituitary"
   ],
   "answer": 3,
   "why": "The arrow points to: Anterior pituitary. Glandular lobe secreting six main hormones: TSH, FSH, LH (glycoproteins), ACTH (POMC), GH and prolactin."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "da",
   "options": [
    "Hypophysiotropic neurons",
    "Anterior pituitary",
    "Dopamine",
    "Posterior pituitary"
   ],
   "answer": 2,
   "why": "The arrow points to: Dopamine. The only inhibitory control dominant over a pituitary hormone: cutting the stalk raises prolactin."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Where are ADH and oxytocin made?",
   "back": "Supraoptic and paraventricular nuclei; released from the posterior pituitary."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Stimuli for ADH?",
   "back": "↑ osmolality, ↓ volume/pressure, angiotensin II, pain, nausea. Inhibited by alcohol."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "ADH receptors?",
   "back": "V2 (Gs): aquaporin-2. V1A (Gq): vasoconstriction, glycogenolysis. V1B: ACTH."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Central vs nephrogenic DI?",
   "back": "Central: no ADH. Nephrogenic: kidney resistant (V2 mutation, lithium, low K⁺)."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "SIADH findings?",
   "back": "Concentrated urine, dilutional hyponatraemia."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Hypothalamic controllers of the anterior pituitary?",
   "back": "CRH, TRH, GHRH, somatostatin, GnRH, dopamine."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "GH direct vs indirect effects?",
   "back": "Direct: lipolysis, diabetogenic, protein synthesis. Indirect via IGF-1: skeletal growth."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Control of prolactin?",
   "back": "Dopamine (D2) inhibits; TRH stimulates."
  },
  {
   "id": "img-pvn",
   "type": "image",
   "target": "pvn",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Magnocellular neurons. Cell bodies in the supraoptic and paraventricular nuclei make ADH and oxytocin with their neurophysins."
  },
  {
   "id": "img-post",
   "type": "image",
   "target": "post",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Posterior pituitary. Neural lobe: axon terminals store and release ADH and oxytocin."
  },
  {
   "id": "img-blood1",
   "type": "image",
   "target": "blood1",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Direct release. The posterior lobe hormones enter systemic blood by exocytosis from nerve endings."
  },
  {
   "id": "img-parvo",
   "type": "image",
   "target": "parvo",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Hypophysiotropic neurons. Parvocellular PVN (CRH, TRH), arcuate (GHRH, dopamine), preoptic area (GnRH), PVN (somatostatin)."
  },
  {
   "id": "img-portal",
   "type": "image",
   "target": "portal",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Hypophyseal portal system. Releasing and inhibiting hormones are secreted at the median eminence and carried to the anterior lobe."
  },
  {
   "id": "img-ant",
   "type": "image",
   "target": "ant",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Anterior pituitary. Glandular lobe secreting six main hormones: TSH, FSH, LH (glycoproteins), ACTH (POMC), GH and prolactin."
  },
  {
   "id": "img-da",
   "type": "image",
   "target": "da",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Dopamine. The only inhibitory control dominant over a pituitary hormone: cutting the stalk raises prolactin."
  }
 ],
 "deeper": [
  {
   "title": "Why a pituitary stalk injury raises prolactin but lowers everything else",
   "html": "<p>Every anterior pituitary hormone except prolactin needs a hypothalamic releasing hormone to keep going. Prolactin is the opposite: its dominant control is inhibition by dopamine. If the stalk is compressed by a tumour or cut by trauma, dopamine can no longer reach the lactotrophs, so prolactin rises (stalk effect) while ACTH, TSH, LH, FSH and GH fall. A mildly raised prolactin with a large non-secreting pituitary mass is therefore not proof of a prolactinoma.</p>"
  }
 ],
 "resources": [
  {
   "title": "Physiology, Pituitary Gland (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK459247/",
   "kind": "Book",
   "why": "Anterior and posterior pituitary hormones.",
   "note": ""
  },
  {
   "title": "Physiology, Vasopressin (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK526069/",
   "kind": "Book",
   "why": "ADH secretion and receptors.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Physiology, Pituitary Gland (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK459247/"
  },
  {
   "name": "Physiology, Vasopressin (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK526069/"
  }
 ],
 "verified": "26 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physio1-thyroid"] = {
 "id": "physio1-thyroid",
 "subject": "physio1",
 "group": "Endocrine physiology",
 "title": "Thyroid physiology",
 "sourceFile": "Thyroid physiology (Physiology, Pr. M. Covasa)",
 "sourceUrl": "https://drive.google.com/file/d/1XPDZ6_R9h66hWhoYoQy62T08yn6vkiq9/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "Hormones and synthesis",
   "html": "<p>Thyroid hormones are tyrosine derivatives: <strong>T4</strong> (thyroxine, the main secreted form), <strong>T3</strong> (3-5 times more potent: higher receptor affinity) and <strong>reverse T3</strong> (inactive). Adults need at least <strong>150 µg of iodine</strong> a day. Synthesis: (1) the <strong>Na⁺/I⁻ symporter (NIS)</strong> brings in iodide (2 Na⁺ : 1 I⁻, secondary active); <strong>pendrin</strong> moves it into the colloid. (2) <strong>Thyroid peroxidase (TPO)</strong> oxidises it, using H₂O₂ from DUOX. (3) <strong>Organification</strong>: iodine is attached to tyrosines of <strong>thyroglobulin</strong> (Tg), forming MIT and DIT. (4) <strong>Coupling</strong> by TPO: MIT + DIT → T3; DIT + DIT → T4. (5) Storage in colloid (2-3 months' supply). (6) Release: Tg is endocytosed and digested; T4 and T3 go to blood; MIT and DIT are deiodinated and their iodine recycled.</p><p>Very high iodide acutely blocks organification: the <strong>Wolff-Chaikoff effect</strong>. It lasts a few days, then the gland <strong>escapes</strong> by down-regulating NIS.</p>"
  },
  {
   "id": "s1",
   "title": "Transport and activation",
   "html": "<p>Total T4 is about 8 µg/dL and T3 about 0.15 µg/dL, almost all bound: <strong>TBG</strong> (lowest concentration, highest affinity, carries most), <strong>transthyretin</strong> and <strong>albumin</strong> (highest capacity, lowest affinity). Only free hormone is active; T4 half-life is 6-7 days. A rise in TBG (e.g. pregnancy) transiently lowers free T4, TSH rises, and a new steady state is reached with <strong>high total but normal free</strong> hormone: the patient is euthyroid.</p><p><strong>Deiodinases</strong> (contain <strong>selenocysteine</strong>): <strong>D1</strong> (liver, kidney, thyroid) makes T3 and rT3; <strong>D2</strong> (brain, pituitary, brown fat) makes local T3 and mediates feedback on TSH and TRH; <strong>D3</strong> (brain, placenta, fetus) inactivates T4 and T3. The liver also conjugates them (sulfate, glucuronide).</p>"
  },
  {
   "id": "s2",
   "title": "The hypothalamic-pituitary-thyroid axis",
   "html": "<p><strong>TRH</strong>, a tripeptide from the paraventricular nucleus, acts on thyrotrophs through a <strong>Gq</strong> receptor (PLC, IP₃, Ca²⁺) to release <strong>TSH</strong>. TSH is a glycoprotein (α subunit shared with LH, FSH, hCG; β gives specificity), normal level about <strong>0.5-4.5 mIU/L</strong>, pulsatile, half-life 30-60 min. It acts on a GPCR (cAMP, PLC) and stimulates every step: NIS, TPO and Tg expression, hormone release, blood flow and gland growth; chronic excess causes <strong>goitre</strong>. <strong>Negative feedback</strong> is mostly by <strong>T3 made locally by D2</strong> in the pituitary and hypothalamus. Dopamine, somatostatin and high glucocorticoids inhibit TSH; cold stimulates it in infants. Because TSH changes steeply with small changes in free T4, <strong>TSH is the best single test of thyroid function</strong>. The TSH receptor is the target of autoantibodies: stimulating in <strong>Graves' disease</strong>, blocking in some autoimmune hypothyroidism.</p>"
  },
  {
   "id": "s3",
   "title": "Effects and mechanism",
   "html": "<p>T3 enters cells and binds <strong>nuclear thyroid receptors</strong> (TRα, TRβ), often as heterodimers with <strong>RXR</strong>, changing gene expression (Na⁺/K⁺ ATPase, uncoupling proteins, β1 receptors, Ca²⁺ ATPase, α-myosin heavy chain). Effects: <strong>↑ basal metabolic rate</strong> and heat production (UCPs, more mitochondria, Na⁺/K⁺ ATPase) except in brain, testes, uterus, spleen, lymph nodes and anterior pituitary; <strong>catabolism</strong> (lipolysis, protein breakdown, glycogenolysis, faster glucose absorption); <strong>heart</strong>: ↑ rate and contractility (more β-receptors, catecholamine sensitivity) with ↓ peripheral resistance; ↑ LDL receptors (lower cholesterol); normal <strong>bone growth</strong> and <strong>brain maturation</strong>. Deficiency from birth causes <strong>cretinism</strong> (irreversible intellectual disability, short stature); excess in adults raises the risk of osteoporosis. Mutations of TRβ cause resistance to thyroid hormone.</p>"
  },
  {
   "id": "s4",
   "title": "Hyper- and hypothyroidism",
   "html": "<p><strong>Hyperthyroidism</strong>: weight loss, heat intolerance, sweating, tachycardia, tremor, muscle weakness. <strong>Primary</strong> (↑ T4, ↓ TSH): most often <strong>Graves' disease</strong>, where thyroid-stimulating immunoglobulins activate the TSH receptor, with diffuse goitre. <strong>Secondary</strong> (↑ TSH and ↑ T4): rare, TSH-secreting adenoma.</p><p><strong>Hypothyroidism</strong> (about 1% of adults): fatigue, weight gain, cold intolerance, bradycardia, constipation, depression; chronic cases develop <strong>myxoedema</strong>. <strong>Primary</strong> (↓ T4, ↑ TSH), the common form: <strong>Hashimoto's thyroiditis</strong> (anti-TPO and anti-thyroglobulin antibodies) and <strong>iodine deficiency</strong>, where high TSH produces a painless <strong>goitre</strong>. <strong>Secondary</strong> (↓ TSH, ↓ T4): rare, pituitary disease.</p>"
  }
 ],
 "exam": [
  "T4 is the main product; T3 is 3-5× more potent; rT3 inactive.",
  "Steps: NIS uptake → TPO oxidation → organification of Tg → coupling → storage → release.",
  "MIT + DIT → T3; DIT + DIT → T4.",
  "Wolff-Chaikoff: excess iodide blocks organification (then escape).",
  "Mostly bound to TBG; only free hormone is active.",
  "Deiodinases (selenium): D1, D2 activate; D3 inactivates.",
  "TRH (Gq) → TSH (GPCR, cAMP) → all steps + growth (goitre).",
  "Feedback mainly by T3 made by D2 in pituitary; TSH is the best test.",
  "Effects: ↑ BMR, catabolism, ↑ heart rate via β-receptors, brain and bone development.",
  "Graves: stimulating TSH-receptor antibodies. Hashimoto: anti-TPO; high TSH."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Making thyroid hormone",
   "caption": "Steps inside the thyroid follicle. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"235\" y1=\"70\" x2=\"280\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"70\" x2=\"525\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"635\" y1=\"100\" x2=\"635\" y2=\"170\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"525\" y1=\"200\" x2=\"480\" y2=\"200\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"280\" y1=\"200\" x2=\"235\" y2=\"200\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"125\" y1=\"230\" x2=\"125\" y2=\"300\"/>",
   "parts": {
    "nis": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"15\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "NIS: 2 Na⁺ + I⁻",
      "into the thyrocyte"
     ],
     "lx": 125.0,
     "ly": 68.0
    },
    "pend": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"280\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Pendrin: I⁻",
      "into the colloid"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "tpo": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"525\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "TPO + H₂O₂: oxidation,",
      "organification of Tg"
     ],
     "lx": 635.0,
     "ly": 68.0
    },
    "coup": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"525\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Coupling: MIT+DIT → T3,",
      "DIT+DIT → T4"
     ],
     "lx": 635.0,
     "ly": 198.0
    },
    "store": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"280\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Stored in colloid",
      "(2-3 months)"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "rel": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"15\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Endocytosis of Tg →",
      "T4, T3 released"
     ],
     "lx": 125.0,
     "ly": 198.0
    },
    "d1": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9ecec\" x=\"15\" y=\"300\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Deiodinases: T4 → T3",
      "in tissues"
     ],
     "lx": 125.0,
     "ly": 328.0
    }
   },
   "arrows": {
    "nis": [
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
    "pend": [
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
    "tpo": [
     {
      "t": [
       525.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "coup": [
     {
      "t": [
       525.0,
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
    "rel": [
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
    "d1": [
     {
      "t": [
       15.0,
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
   "q": "Iodide enters the thyrocyte through the:",
   "options": [
    "Pendrin exchanger",
    "Na⁺/I⁻ symporter",
    "TPO",
    "Thyroglobulin"
   ],
   "answer": 1,
   "why": "Basolateral, secondary active."
  },
  {
   "q": "The enzyme that oxidises iodide and couples iodotyrosines is:",
   "options": [
    "Deiodinase",
    "Thyroid peroxidase",
    "Carbonic anhydrase",
    "DUOX"
   ],
   "answer": 1,
   "why": "Uses H₂O₂."
  },
  {
   "q": "DIT + DIT forms:",
   "options": [
    "T3",
    "T4",
    "rT3",
    "MIT"
   ],
   "answer": 1,
   "why": ""
  },
  {
   "q": "The most potent thyroid hormone at the receptor is:",
   "options": [
    "T4",
    "T3",
    "rT3",
    "Thyroglobulin"
   ],
   "answer": 1,
   "why": "3-5 times."
  },
  {
   "q": "Most circulating T4 is bound to:",
   "options": [
    "Albumin",
    "TBG",
    "Transthyretin",
    "Free"
   ],
   "answer": 1,
   "why": "Highest affinity."
  },
  {
   "q": "In pregnancy, raised TBG gives:",
   "options": [
    "High free T4",
    "High total T4, normal free T4",
    "Low TSH permanently",
    "Hypothyroidism"
   ],
   "answer": 1,
   "why": "Euthyroid."
  },
  {
   "q": "Deiodinases require:",
   "options": [
    "Zinc",
    "Selenium",
    "Iron",
    "Copper"
   ],
   "answer": 1,
   "why": "Selenocysteine."
  },
  {
   "q": "The deiodinase that inactivates thyroid hormone is:",
   "options": [
    "D1",
    "D2",
    "D3",
    "TPO"
   ],
   "answer": 2,
   "why": "Inner-ring."
  },
  {
   "q": "TRH acts on thyrotrophs via:",
   "options": [
    "Gs and cAMP",
    "Gq, IP₃ and Ca²⁺",
    "JAK/STAT",
    "Nuclear receptor"
   ],
   "answer": 1,
   "why": ""
  },
  {
   "q": "The best single screening test of thyroid function is:",
   "options": [
    "Total T4",
    "TSH",
    "Thyroglobulin",
    "rT3"
   ],
   "answer": 1,
   "why": "Steep inverse relation."
  },
  {
   "q": "Excess iodide acutely blocking hormone synthesis is the:",
   "options": [
    "Jod-Basedow effect",
    "Wolff-Chaikoff effect",
    "Haldane effect",
    "Bohr effect"
   ],
   "answer": 1,
   "why": ""
  },
  {
   "q": "Graves' disease is caused by antibodies that:",
   "options": [
    "Block TPO",
    "Stimulate the TSH receptor",
    "Destroy thyroglobulin",
    "Block NIS"
   ],
   "answer": 1,
   "why": ""
  },
  {
   "q": "Primary hypothyroidism shows:",
   "options": [
    "Low TSH, low T4",
    "High TSH, low T4",
    "Low TSH, high T4",
    "High TSH, high T4"
   ],
   "answer": 1,
   "why": "Loss of feedback."
  },
  {
   "q": "Thyroid hormone increases heart rate mainly by:",
   "options": [
    "Increasing β-adrenergic receptors",
    "Blocking vagal tone",
    "Raising aldosterone",
    "Lowering Ca²⁺"
   ],
   "answer": 0,
   "why": ""
  },
  {
   "q": "Thyroid deficiency from birth causes:",
   "options": [
    "Myxoedema coma",
    "Cretinism",
    "Graves' disease",
    "Acromegaly"
   ],
   "answer": 1,
   "why": ""
  },
  {
   "q": "Hashimoto's thyroiditis is associated with:",
   "options": [
    "Anti-TPO antibodies",
    "Stimulating TSH-receptor antibodies",
    "Iodine excess only",
    "Low TSH"
   ],
   "answer": 0,
   "why": ""
  },
  {
   "q": "Which tissue does NOT increase oxygen use with thyroid hormone?",
   "options": [
    "Heart",
    "Liver",
    "Brain",
    "Skeletal muscle"
   ],
   "answer": 2,
   "why": "Also testes, spleen."
  },
  {
   "q": "The thyroid receptor often binds DNA as a heterodimer with:",
   "options": [
    "RXR",
    "Glucocorticoid receptor",
    "CREB",
    "STAT"
   ],
   "answer": 0,
   "why": ""
  },
  {
   "q": "Which element is at the arrow?",
   "target": "nis",
   "options": [
    "Sodium-iodide symporter",
    "Coupling",
    "Secretion",
    "Thyroid peroxidase"
   ],
   "answer": 0,
   "why": "The arrow points to: Sodium-iodide symporter. Secondary active transport on the basolateral membrane, driven by the Na⁺/K⁺ ATPase; stimulated by TSH."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pend",
   "options": [
    "Peripheral activation",
    "Secretion",
    "Thyroid peroxidase",
    "Pendrin"
   ],
   "answer": 3,
   "why": "The arrow points to: Pendrin. A Cl⁻/I⁻ exchanger that moves iodide across the apical membrane into the colloid."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "tpo",
   "options": [
    "Pendrin",
    "Sodium-iodide symporter",
    "Secretion",
    "Thyroid peroxidase"
   ],
   "answer": 3,
   "why": "The arrow points to: Thyroid peroxidase. Uses H₂O₂ from DUOX to oxidise iodide and attach it to tyrosines of thyroglobulin, forming MIT and DIT."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "coup",
   "options": [
    "Sodium-iodide symporter",
    "Secretion",
    "Peripheral activation",
    "Coupling"
   ],
   "answer": 3,
   "why": "The arrow points to: Coupling. TPO joins iodotyrosines: MIT + DIT → T3; DIT + DIT → T4."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "store",
   "options": [
    "Thyroid peroxidase",
    "Secretion",
    "Colloid storage",
    "Coupling"
   ],
   "answer": 2,
   "why": "The arrow points to: Colloid storage. Hormone stays attached to thyroglobulin in the colloid, a 2-3 month supply."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "rel",
   "options": [
    "Coupling",
    "Thyroid peroxidase",
    "Secretion",
    "Peripheral activation"
   ],
   "answer": 2,
   "why": "The arrow points to: Secretion. TSH triggers endocytosis of thyroglobulin; lysosomes free T4 (mostly) and T3; MIT and DIT are deiodinated and recycled."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "d1",
   "options": [
    "Thyroid peroxidase",
    "Sodium-iodide symporter",
    "Peripheral activation",
    "Secretion"
   ],
   "answer": 2,
   "why": "The arrow points to: Peripheral activation. Selenium-containing deiodinases convert T4 to the more potent T3 (D1, D2) or inactivate it (D3)."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Steps of thyroid hormone synthesis?",
   "back": "NIS uptake, pendrin, TPO oxidation, organification of Tg (MIT/DIT), coupling, storage, endocytosis and release."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "T3 vs T4?",
   "back": "T4 main secreted form; T3 3-5× more potent; T4 → T3 in tissues."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Binding proteins?",
   "back": "TBG (most, highest affinity), transthyretin, albumin (highest capacity)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Three deiodinases?",
   "back": "D1 (liver, kidney): T3 and rT3. D2 (brain, pituitary): local T3, feedback. D3: inactivation."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Wolff-Chaikoff effect?",
   "back": "Excess iodide blocks organification; escape by NIS down-regulation."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Why TSH is the best test?",
   "back": "Small changes in free T4 cause large inverse changes in TSH."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Main effects of thyroid hormone?",
   "back": "↑ BMR and heat, catabolism, ↑ heart rate and contractility, brain and bone development."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Graves vs Hashimoto?",
   "back": "Graves: TSH-receptor stimulating antibodies, ↑ T4, ↓ TSH. Hashimoto: anti-TPO, ↓ T4, ↑ TSH."
  },
  {
   "id": "img-nis",
   "type": "image",
   "target": "nis",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Sodium-iodide symporter. Secondary active transport on the basolateral membrane, driven by the Na⁺/K⁺ ATPase; stimulated by TSH."
  },
  {
   "id": "img-pend",
   "type": "image",
   "target": "pend",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Pendrin. A Cl⁻/I⁻ exchanger that moves iodide across the apical membrane into the colloid."
  },
  {
   "id": "img-tpo",
   "type": "image",
   "target": "tpo",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Thyroid peroxidase. Uses H₂O₂ from DUOX to oxidise iodide and attach it to tyrosines of thyroglobulin, forming MIT and DIT."
  },
  {
   "id": "img-coup",
   "type": "image",
   "target": "coup",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Coupling. TPO joins iodotyrosines: MIT + DIT → T3; DIT + DIT → T4."
  },
  {
   "id": "img-store",
   "type": "image",
   "target": "store",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Colloid storage. Hormone stays attached to thyroglobulin in the colloid, a 2-3 month supply."
  },
  {
   "id": "img-rel",
   "type": "image",
   "target": "rel",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Secretion. TSH triggers endocytosis of thyroglobulin; lysosomes free T4 (mostly) and T3; MIT and DIT are deiodinated and recycled."
  },
  {
   "id": "img-d1",
   "type": "image",
   "target": "d1",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Peripheral activation. Selenium-containing deiodinases convert T4 to the more potent T3 (D1, D2) or inactivate it (D3)."
  }
 ],
 "deeper": [
  {
   "title": "Why iodised salt eliminated goitre",
   "html": "<p>Without enough iodine, the thyroid cannot make T4. Free T4 falls, TSH rises, and the constant trophic drive makes the gland grow, sometimes enormously: endemic goitre. In mountainous regions far from the sea, including parts of Morocco, iodine deficiency was common and also caused cretinism in children of deficient mothers. Adding iodine to table salt, a single cheap public health measure, prevents both, and is why the problem is now much rarer.</p>"
  }
 ],
 "resources": [
  {
   "title": "Physiology, Thyroid Hormone (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK500006/",
   "kind": "Book",
   "why": "Synthesis, regulation and actions.",
   "note": ""
  },
  {
   "title": "Underactive thyroid (NHS)",
   "url": "https://www.nhs.uk/conditions/underactive-thyroid-hypothyroidism/",
   "kind": "Website",
   "why": "Symptoms and treatment of hypothyroidism.",
   "note": ""
  },
  {
   "title": "Overactive thyroid (NHS)",
   "url": "https://www.nhs.uk/conditions/overactive-thyroid-hyperthyroidism/",
   "kind": "Website",
   "why": "Graves' disease and other causes.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Physiology, Thyroid Hormone (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK500006/"
  },
  {
   "name": "Underactive thyroid (NHS)",
   "url": "https://www.nhs.uk/conditions/underactive-thyroid-hypothyroidism/"
  },
  {
   "name": "Overactive thyroid (NHS)",
   "url": "https://www.nhs.uk/conditions/overactive-thyroid-hyperthyroidism/"
  }
 ],
 "verified": "26 Sep 2026"
};
