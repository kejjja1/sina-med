/* chem1: 2 lectures, merged for upload. Edit the source files, not this one. */
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["chem1-matter"] = {
 "id": "chem1-matter",
 "subject": "chem1",
 "group": "General chemistry",
 "title": "Structure of matter: the atom and its nucleus",
 "sourceFile": "Lecture 1 - General Chemistry (2025-2026) (General Chemistry, Prof. Tarik Ouchbani)",
 "sourceUrl": "https://drive.google.com/file/d/1uiDfl1VijY9p9PtyhQOZhK4u73lUt_sd/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>The General Chemistry course covers: I. structure of matter, II. model of the atom, III. chemical bonds, IV. chemistry in solutions, V. redox reactions. Matter exists in three <strong>phases</strong> (solid, liquid, gas); a substance like water can be in any of them depending on temperature and pressure, even all three at once. Matter is made of atoms combining into molecules and crystals. Key ideas: atoms are made of <strong>electrons and nuclei</strong>; atom size is set by the <strong>electron distribution</strong>; nuclei are tiny but hold almost all the <strong>mass</strong>; bonding arises from electrical forces between electrons and nuclei and the <strong>sharing of electrons</strong>.</p>"
  },
  {
   "id": "s1",
   "title": "The particles",
   "html": "<p><strong>Electron</strong>: stable, negative; charge <strong>q = −1.602 × 10⁻¹⁹ C</strong>, mass <strong>mₑ = 9.109 × 10⁻³¹ kg</strong>. The <strong>nucleus</strong> is made of <strong>nucleons</strong>: the <strong>proton</strong> (charge +1.602 × 10⁻¹⁹ C; mass 1.673 × 10⁻²⁷ kg = <strong>1836 mₑ</strong> ≈ 1.0073 u) and the <strong>neutron</strong> (neutral; mass 1.675 × 10⁻²⁷ kg = <strong>1839 mₑ</strong> ≈ 1.0087 u).</p><p>An element is written <sup>A</sup><sub>Z</sub>X. <strong>Z</strong> (atomic or charge number) = number of <strong>protons</strong> (and electrons in the neutral atom); it identifies the element. <strong>A</strong> (mass number) = number of <strong>nucleons</strong> = protons + neutrons, so neutrons N = A − Z. <strong>Isotopes</strong> are atoms of the same element (same Z) with different A (different numbers of neutrons), each with a natural relative abundance.</p>"
  },
  {
   "id": "s2",
   "title": "Atomic mass and the mole",
   "html": "<p>The atomic mass of an element is the mass of <strong>one mole</strong> of its atoms (gram-atom, atomic molar mass), i.e. the mass of <strong>Avogadro's number</strong> of atoms, <strong>Nₐ ≈ 6.02 × 10²³ mol⁻¹</strong> (the slides use 6.023 × 10²³). Two scales: <strong>atomic mass units</strong> (u, a.m.u.) and <strong>grams per mole</strong>, both referenced to <strong>carbon-12</strong>. By definition <strong>1 u = 1/12 of the mass of a ¹²C atom</strong> (6 protons, 6 neutrons); one mole of carbon weighs <strong>12 g</strong>, so <strong>1 u = 1/Nₐ g ≈ 1.66 × 10⁻²⁴ g</strong>. The mass of one atom = molar mass / Nₐ.</p>"
  },
  {
   "id": "s3",
   "title": "Mass defect and binding energy",
   "html": "<p>The measured mass of a nucleus is always <strong>smaller</strong> than the sum of its free protons and neutrons. This <strong>mass defect Δm</strong> has been converted into energy by <strong>Einstein's relation ΔE = Δm · c²</strong> (c = 3 × 10⁸ m/s). ΔE is the <strong>binding (cohesion) energy</strong> of the nucleus: the energy needed to break it into separate nucleons.</p>"
  }
 ],
 "exam": [
  "Three phases: solid, liquid, gas; one substance can exist in all three.",
  "Atoms = electrons + nucleus; nucleus holds almost all the mass.",
  "Electron: −1.602×10⁻¹⁹ C, 9.109×10⁻³¹ kg.",
  "Proton: +1.602×10⁻¹⁹ C, 1836 mₑ; neutron: 0, 1839 mₑ.",
  "Z = protons (defines the element); A = protons + neutrons; N = A − Z.",
  "Isotopes: same Z, different A.",
  "Mole: Nₐ ≈ 6.02×10²³; atomic mass = mass of one mole.",
  "1 u = 1/12 of ¹²C = 1/Nₐ g ≈ 1.66×10⁻²⁴ g.",
  "Mass of one atom = M / Nₐ.",
  "Mass defect Δm → binding energy ΔE = Δm·c²."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Inside the atom",
   "caption": "Particles, numbers and the mass defect. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"70\" x2=\"40\" y2=\"200\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"100\" x2=\"380\" y2=\"170\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"720\" y1=\"70\" x2=\"280\" y2=\"200\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"200\" x2=\"520\" y2=\"200\"/>",
   "parts": {
    "e": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"40\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Electron: −1.602×10⁻¹⁹ C,",
      "9.109×10⁻³¹ kg"
     ],
     "lx": 140.0,
     "ly": 68.0
    },
    "p": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"280\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Proton: +1.602×10⁻¹⁹ C,",
      "1836 mₑ"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "n": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"520\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Neutron: 0 C,",
      "1839 mₑ"
     ],
     "lx": 620.0,
     "ly": 68.0
    },
    "z": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"40\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Z = protons",
      "(atomic number)"
     ],
     "lx": 140.0,
     "ly": 198.0
    },
    "a": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"280\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "A = protons + neutrons",
      "(mass number)"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "def": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"520\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Mass defect Δm →",
      "binding energy ΔE = Δm·c²"
     ],
     "lx": 620.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "e": [
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
    "p": [
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
    "n": [
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
    "z": [
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
    "a": [
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
    "def": [
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
   "q": "What sets the size of an atom?",
   "options": [
    "The nucleus",
    "The number of neutrons",
    "The mass number",
    "The distribution of its electrons"
   ],
   "answer": 3,
   "why": "The nucleus is tiny."
  },
  {
   "q": "Where is almost all the mass of an atom?",
   "options": [
    "Between atoms",
    "Evenly spread",
    "Nucleus",
    "Electron cloud"
   ],
   "answer": 2,
   "why": "Protons and neutrons are ~1,800 times heavier than electrons."
  },
  {
   "q": "The charge of an electron is:",
   "options": [
    "+1.602×10⁻¹⁹ C",
    "0 C",
    "−9.109×10⁻³¹ C",
    "−1.602×10⁻¹⁹ C"
   ],
   "answer": 3,
   "why": "9.109×10⁻³¹ kg is its mass."
  },
  {
   "q": "The proton mass is about how many electron masses?",
   "options": [
    "183,600",
    "1",
    "1836",
    "18"
   ],
   "answer": 2,
   "why": "The neutron is 1839."
  },
  {
   "q": "Z represents:",
   "options": [
    "Number of protons",
    "Atomic mass",
    "Number of nucleons",
    "Number of neutrons"
   ],
   "answer": 0,
   "why": "It defines the element."
  },
  {
   "q": "For ²³Na (Z = 11), the number of neutrons is:",
   "options": [
    "23",
    "12",
    "11",
    "34"
   ],
   "answer": 1,
   "why": "N = A − Z = 23 − 11."
  },
  {
   "q": "Isotopes of an element have:",
   "options": [
    "Same A, different Z",
    "Same Z, different A",
    "Different electrons only",
    "Different Z"
   ],
   "answer": 1,
   "why": "Different numbers of neutrons."
  },
  {
   "q": "Avogadro's number is about:",
   "options": [
    "9.1×10⁻³¹",
    "1.66×10⁻²⁴",
    "3×10⁸",
    "6.02×10²³"
   ],
   "answer": 3,
   "why": "Atoms in one mole."
  },
  {
   "q": "By definition, 1 atomic mass unit equals:",
   "options": [
    "The mass of a proton",
    "1/12 of the mass of a carbon-12 atom",
    "The mass of an electron",
    "1 gram"
   ],
   "answer": 1,
   "why": "≈ 1.66×10⁻²⁴ g."
  },
  {
   "q": "One mole of carbon-12 weighs:",
   "options": [
    "12 g",
    "6.02×10²³ g",
    "6 g",
    "1 g"
   ],
   "answer": 0,
   "why": "So 1 u = 1/Nₐ g."
  },
  {
   "q": "To find the mass of one atom:",
   "options": [
    "Divide molar mass by Nₐ",
    "Add A and Z",
    "Divide Nₐ by Z",
    "Multiply molar mass by Nₐ"
   ],
   "answer": 0,
   "why": "m = M / Nₐ."
  },
  {
   "q": "The mass defect of a nucleus is:",
   "options": [
    "Mass of electrons",
    "Mass gained when nucleons join",
    "Zero",
    "Missing nucleon mass"
   ],
   "answer": 3,
   "why": "The real nucleus is lighter."
  },
  {
   "q": "The binding energy is calculated by:",
   "options": [
    "E = hν",
    "E = ½mv²",
    "E = mgh",
    "ΔE = Δm·c²"
   ],
   "answer": 3,
   "why": "Einstein's relation."
  },
  {
   "q": "The neutron is:",
   "options": [
    "Electrically neutral",
    "A lepton",
    "Positive",
    "Negative"
   ],
   "answer": 0,
   "why": "Slightly heavier than the proton."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "e",
   "options": [
    "Atomic number Z",
    "Electron",
    "Neutron",
    "Proton"
   ],
   "answer": 1,
   "why": "The arrow points to: Electron. Stable, negatively charged; sets the size of the atom through its distribution."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "p",
   "options": [
    "Atomic number Z",
    "Electron",
    "Proton",
    "Mass number A"
   ],
   "answer": 2,
   "why": "The arrow points to: Proton. Positively charged nucleon, 1.673×10⁻²⁷ kg ≈ 1.0073 u."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "n",
   "options": [
    "Atomic number Z",
    "Mass number A",
    "Neutron",
    "Proton"
   ],
   "answer": 2,
   "why": "The arrow points to: Neutron. Neutral nucleon, 1.675×10⁻²⁷ kg ≈ 1.0087 u."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "z",
   "options": [
    "Proton",
    "Atomic number Z",
    "Neutron",
    "Mass number A"
   ],
   "answer": 1,
   "why": "The arrow points to: Atomic number Z. Number of protons (= electrons in the neutral atom); defines the element."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "a",
   "options": [
    "Mass number A",
    "Atomic number Z",
    "Neutron",
    "Mass defect"
   ],
   "answer": 0,
   "why": "The arrow points to: Mass number A. Number of nucleons: protons + neutrons; N = A − Z neutrons."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "def",
   "options": [
    "Electron",
    "Atomic number Z",
    "Mass defect",
    "Neutron"
   ],
   "answer": 2,
   "why": "The arrow points to: Mass defect. The real nucleus is lighter than its separate nucleons; the missing mass is the binding energy."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Three states (phases) of matter?",
   "back": "Solid, liquid, gas; one substance (e.g. water) can exist in all three depending on temperature and pressure."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Charge and mass of the electron?",
   "back": "−1.602×10⁻¹⁹ C; 9.109×10⁻³¹ kg."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Proton vs neutron?",
   "back": "Proton: +1.602×10⁻¹⁹ C, 1.673×10⁻²⁷ kg (1836 mₑ). Neutron: 0 C, 1.675×10⁻²⁷ kg (1839 mₑ)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Z, A and N?",
   "back": "Z: protons (atomic number). A: nucleons (mass number). N = A − Z: neutrons."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "What are isotopes?",
   "back": "Atoms of the same element (same Z) with different mass numbers (different neutron counts)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Define the atomic mass unit.",
   "back": "1 u = 1/12 of the mass of a ¹²C atom = 1/Nₐ g ≈ 1.66×10⁻²⁴ g."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Atomic (molar) mass?",
   "back": "Mass of one mole (Nₐ ≈ 6.02×10²³) of atoms, in g/mol; one atom = M / Nₐ."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Mass defect and binding energy?",
   "back": "Real nucleus mass < sum of nucleons; Δm converts to binding energy ΔE = Δm·c²."
  },
  {
   "id": "img-e",
   "type": "image",
   "target": "e",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Electron. Stable, negatively charged; sets the size of the atom through its distribution."
  },
  {
   "id": "img-p",
   "type": "image",
   "target": "p",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Proton. Positively charged nucleon, 1.673×10⁻²⁷ kg ≈ 1.0073 u."
  },
  {
   "id": "img-n",
   "type": "image",
   "target": "n",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Neutron. Neutral nucleon, 1.675×10⁻²⁷ kg ≈ 1.0087 u."
  },
  {
   "id": "img-z",
   "type": "image",
   "target": "z",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Atomic number Z. Number of protons (= electrons in the neutral atom); defines the element."
  },
  {
   "id": "img-a",
   "type": "image",
   "target": "a",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Mass number A. Number of nucleons: protons + neutrons; N = A − Z neutrons."
  },
  {
   "id": "img-def",
   "type": "image",
   "target": "def",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Mass defect. The real nucleus is lighter than its separate nucleons; the missing mass is the binding energy."
  }
 ],
 "deeper": [
  {
   "title": "Why the nucleus is lighter than its parts",
   "html": "<p>When protons and neutrons bind, energy is released, and by E = mc² that energy carries away mass. To pull the nucleus apart you must put the same energy back, which is why it is called the binding energy. The effect is tiny for each nucleus but enormous per mole, and it powers nuclear reactions.</p><p class='src'>Source: the lecture's atomic mass defect slides.</p>"
  },
  {
   "title": "Why carbon-12 anchors the mass scale",
   "html": "<p>Defining the atomic mass unit as one twelfth of a carbon-12 atom makes the mass of one mole of carbon-12 exactly 12 g, so atomic masses in u and molar masses in g/mol are the same numbers. That is why you can read an element's molar mass straight off the periodic table.</p><p class='src'>Source: the lecture's atomic mass slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "Atomic structure (Khan Academy)",
   "url": "https://www.khanacademy.org/science/chemistry/atomic-structure-and-properties",
   "kind": "Website",
   "why": "Particles, isotopes and atomic mass.",
   "note": ""
  },
  {
   "title": "CODATA fundamental constants (NIST)",
   "url": "https://physics.nist.gov/cuu/Constants/",
   "kind": "Website",
   "why": "Current values of the electron charge, masses and Avogadro's number.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Atomic structure (Khan Academy)",
   "url": "https://www.khanacademy.org/science/chemistry/atomic-structure-and-properties"
  },
  {
   "name": "CODATA fundamental constants (NIST)",
   "url": "https://physics.nist.gov/cuu/Constants/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["chem1-bohr"] = {
 "id": "chem1-bohr",
 "subject": "chem1",
 "group": "General chemistry",
 "title": "Models of the atom: Rutherford, quantum theory and Bohr",
 "sourceFile": "Lecture 2 - General Chemistry (2025-2026) (General Chemistry, Prof. Tarik Ouchbani)",
 "sourceUrl": "https://drive.google.com/file/d/1-ZtpTPUeErS-ePaVOUkrPInYJHck9NEP/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>Chapter II builds the model of the atom step by step: Rutherford's nuclear model, the hydrogen emission spectrum that it could not explain, Planck-Einstein quantum theory, and Bohr's quantised model applied to hydrogen and hydrogen-like ions. (Quantum mechanics, quantum numbers, orbitals, electron configuration and periodic trends follow in the next lectures.)</p>"
  },
  {
   "id": "s1",
   "title": "Rutherford's model and its failure",
   "html": "<p><strong>Rutherford</strong>: the positive charge and almost all the mass are concentrated in a tiny <strong>nucleus</strong>; negative electrons <strong>orbit</strong> it at high speed in circular paths, held by <strong>electrostatic attraction</strong>, balanced by the centrifugal effect. Total energy = kinetic energy (½mv²) + potential energy. <strong>Hydrogen emission spectrum</strong>: an electric discharge through low-pressure hydrogen emits light which a prism splits into <strong>discrete lines</strong>; four visible lines form the <strong>Balmer series</strong>. <strong>Failure</strong>: by classical physics an orbiting (accelerating) electron should radiate energy continuously and spiral into the nucleus, giving a <strong>continuous</strong> spectrum; but hydrogen's spectrum is <strong>discontinuous</strong> and atoms are stable.</p>"
  },
  {
   "id": "s2",
   "title": "Quantum theory",
   "html": "<p><strong>Planck and Einstein</strong>: energy is exchanged between radiation and matter only in finite packets, <strong>quanta</strong>: <strong>ΔE = hν</strong> (h = Planck's constant ≈ 6.626 × 10⁻³⁴ J·s; ν = frequency). <strong>Absorption</strong> (excitation): Ef = Ei + hν (ΔE > 0). <strong>Emission</strong>: Ef = Ei − hν (ΔE < 0).</p>"
  },
  {
   "id": "s3",
   "title": "Bohr's model (1913)",
   "html": "<p>The first application of quantum theory to the atom, with three postulates. (1) <strong>Mechanical</strong>: the electron moves only on <strong>stationary circular orbits</strong> of fixed radius and <strong>quantised energy</strong>. (2) <strong>Optical</strong>: jumping between orbits absorbs or emits exactly <strong>|ΔE| = |En′ − En| = hν</strong>; <strong>n = 1</strong> is the <strong>ground state</strong> (minimum energy); absorbing a photon gives an <strong>excited</strong> atom; falling back emits a photon. (3) <strong>Angular momentum</strong> is quantised: <strong>mvr = n·h/2π</strong>, where n is the <strong>principal quantum number</strong>.</p><p><strong>Hydrogen</strong>: energy levels <strong>Eₙ = −13.6/n² eV</strong> (ground state −13.6 eV; ionisation at n = ∞, E = 0) and radii rₙ = 0.53 n² Å. Line series follow the <strong>Ritz formula</strong> 1/λ = R<sub>H</sub> (1/n₁² − 1/n₂²) (R<sub>H</sub> = Rydberg constant): <strong>Lyman</strong> (to n = 1, UV), <strong>Balmer</strong> (to n = 2, visible), then Paschen, Brackett, Pfund (infrared). <strong>Hydrogen-like ions</strong> (one electron, Z > 1: He⁺, Li²⁺, Be³⁺, B⁴⁺): Eₙ = −13.6 Z²/n² eV and <strong>R = Z² R<sub>H</sub></strong>.</p>"
  }
 ],
 "exam": [
  "Rutherford: tiny dense positive nucleus; electrons orbit it.",
  "Hydrogen spectrum is discontinuous (lines); Balmer = 4 visible lines.",
  "Classical physics: orbiting electron should spiral in → Rutherford model fails.",
  "Quantum theory: ΔE = hν (Planck, Einstein).",
  "Bohr 1913: stationary orbits, quantised energy.",
  "Transitions: |ΔE| = hν; n = 1 ground state.",
  "Angular momentum mvr = n·h/2π; n = principal quantum number.",
  "H: Eₙ = −13.6/n² eV; ionisation 13.6 eV.",
  "Ritz: 1/λ = R_H (1/n₁² − 1/n₂²); Lyman (n₁ = 1), Balmer (n₁ = 2).",
  "Hydrogen-like ions: R = Z² R_H."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Bohr energy levels of hydrogen",
   "caption": "Transitions produce the spectral series. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"85\" x2=\"380\" y2=\"140\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"190\" x2=\"380\" y2=\"210\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"260\" x2=\"380\" y2=\"300\"/>",
   "parts": {
    "n1": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"280\" y=\"300\" width=\"200\" height=\"55\" rx=\"10\"/>",
     "label": [
      "n = 1: ground state",
      "E₁ = −13.6 eV"
     ],
     "lx": 380.0,
     "ly": 325.5
    },
    "n2": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"280\" y=\"210\" width=\"200\" height=\"50\" rx=\"10\"/>",
     "label": [
      "n = 2: −3.4 eV"
     ],
     "lx": 380.0,
     "ly": 241.0
    },
    "n3": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"280\" y=\"140\" width=\"200\" height=\"50\" rx=\"10\"/>",
     "label": [
      "n = 3: −1.51 eV"
     ],
     "lx": 380.0,
     "ly": 171.0
    },
    "ninf": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"280\" y=\"30\" width=\"200\" height=\"55\" rx=\"10\"/>",
     "label": [
      "n = ∞: 0 eV",
      "(ionisation)"
     ],
     "lx": 380.0,
     "ly": 55.5
    },
    "lyman": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"40\" y=\"230\" width=\"180\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Lyman: → n = 1",
      "(ultraviolet)"
     ],
     "lx": 130.0,
     "ly": 255.5
    },
    "balmer": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"540\" y=\"150\" width=\"180\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Balmer: → n = 2",
      "(visible, 4 lines)"
     ],
     "lx": 630.0,
     "ly": 175.5
    }
   },
   "arrows": {
    "n1": [
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
    ],
    "n2": [
     {
      "t": [
       280.0,
       218.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "n3": [
     {
      "t": [
       280.0,
       148.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "ninf": [
     {
      "t": [
       280.0,
       38.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "lyman": [
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
    ],
    "balmer": [
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
   "q": "In Rutherford's model, most of the atom's mass is:",
   "options": [
    "In the electrons",
    "Evenly spread",
    "In the orbits",
    "In a tiny positive nucleus"
   ],
   "answer": 3,
   "why": "Electrons orbit around it."
  },
  {
   "q": "What holds electrons around the nucleus in Rutherford's model?",
   "options": [
    "Gravity",
    "Magnetism",
    "Electrostatic attraction",
    "Nuclear force"
   ],
   "answer": 2,
   "why": "Balanced by the centrifugal effect."
  },
  {
   "q": "The hydrogen emission spectrum is:",
   "options": [
    "Made of discrete lines",
    "Continuous",
    "Absent",
    "Only infrared"
   ],
   "answer": 0,
   "why": "Evidence of quantised energy."
  },
  {
   "q": "The four visible lines of hydrogen form the:",
   "options": [
    "Paschen series",
    "Pfund series",
    "Balmer series",
    "Lyman series"
   ],
   "answer": 2,
   "why": "Ending on n = 2."
  },
  {
   "q": "Why did Rutherford's model fail?",
   "options": [
    "Electrons would spiral in",
    "It had no nucleus",
    "It predicted discrete lines",
    "It ignored protons"
   ],
   "answer": 0,
   "why": "And give a continuous spectrum."
  },
  {
   "q": "The energy of a quantum is:",
   "options": [
    "ΔE = qV",
    "ΔE = hν",
    "ΔE = ½mv²",
    "ΔE = mc²"
   ],
   "answer": 1,
   "why": "Planck-Einstein."
  },
  {
   "q": "When an atom absorbs a photon of frequency ν:",
   "options": [
    "Ef = Ei",
    "Ef = Ei − hν",
    "Ef = Ei + hν",
    "E = 0"
   ],
   "answer": 2,
   "why": "It becomes excited."
  },
  {
   "q": "Bohr's first postulate states that electrons move on:",
   "options": [
    "The nucleus",
    "Elliptical orbits only",
    "Random paths",
    "Quantised stationary orbits"
   ],
   "answer": 3,
   "why": "Mechanical postulate."
  },
  {
   "q": "The ground state of hydrogen corresponds to:",
   "options": [
    "n = ∞",
    "n = 1",
    "n = 0",
    "n = 2"
   ],
   "answer": 1,
   "why": "Minimum energy."
  },
  {
   "q": "Bohr's quantisation condition for angular momentum is:",
   "options": [
    "mvr = n·h/2π",
    "E = n·h",
    "r = n·h",
    "mvr = h·ν"
   ],
   "answer": 0,
   "why": "n is the principal quantum number."
  },
  {
   "q": "The energy of hydrogen's level n is:",
   "options": [
    "−13.6/n² eV",
    "−13.6·n² eV",
    "+13.6/n eV",
    "−13.6·n eV"
   ],
   "answer": 0,
   "why": "Ground state −13.6 eV."
  },
  {
   "q": "The ionisation energy of hydrogen is:",
   "options": [
    "3.4 eV",
    "1.51 eV",
    "0 eV",
    "13.6 eV"
   ],
   "answer": 3,
   "why": "From n = 1 to n = ∞."
  },
  {
   "q": "The Lyman series corresponds to transitions ending on:",
   "options": [
    "n = ∞",
    "n = 2",
    "n = 3",
    "n = 1"
   ],
   "answer": 3,
   "why": "In the ultraviolet."
  },
  {
   "q": "For hydrogen-like ions, the Rydberg constant becomes:",
   "options": [
    "Z² R_H",
    "Z R_H",
    "R_H / Z",
    "R_H"
   ],
   "answer": 0,
   "why": "Energies scale with Z²."
  },
  {
   "q": "Which is a hydrogen-like ion?",
   "options": [
    "He",
    "He⁺",
    "H⁺",
    "Li"
   ],
   "answer": 1,
   "why": "One electron, Z = 2."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "n1",
   "options": [
    "Higher levels",
    "Ionisation limit",
    "First excited state",
    "Ground state"
   ],
   "answer": 3,
   "why": "The arrow points to: Ground state. n = 1, lowest energy (−13.6 eV for hydrogen); the most stable state."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "n2",
   "options": [
    "Ionisation limit",
    "Lyman series",
    "First excited state",
    "Ground state"
   ],
   "answer": 2,
   "why": "The arrow points to: First excited state. n = 2; Eₙ = −13.6/n² eV."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "n3",
   "options": [
    "Ionisation limit",
    "Higher levels",
    "Lyman series",
    "First excited state"
   ],
   "answer": 1,
   "why": "The arrow points to: Higher levels. Levels crowd together as n increases."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ninf",
   "options": [
    "Lyman series",
    "Ionisation limit",
    "Higher levels",
    "First excited state"
   ],
   "answer": 1,
   "why": "The arrow points to: Ionisation limit. At n = ∞ the electron is free (E = 0); ionisation energy of H = 13.6 eV."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "lyman",
   "options": [
    "Lyman series",
    "Ionisation limit",
    "Higher levels",
    "Balmer series"
   ],
   "answer": 0,
   "why": "The arrow points to: Lyman series. Emission lines ending on n = 1, in the ultraviolet."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "balmer",
   "options": [
    "Ionisation limit",
    "Higher levels",
    "Balmer series",
    "Ground state"
   ],
   "answer": 2,
   "why": "The arrow points to: Balmer series. Lines ending on n = 2; the four visible lines seen in the discharge tube."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Rutherford's model?",
   "back": "Tiny, dense, positive nucleus containing almost all the mass; electrons orbit it held by electrostatic attraction."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Why did Rutherford's model fail?",
   "back": "Accelerating (orbiting) electrons should radiate, spiral into the nucleus and give a continuous spectrum; hydrogen's spectrum is discrete and atoms are stable."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Planck-Einstein quantum relation?",
   "back": "ΔE = hν; absorption Ef = Ei + hν; emission Ef = Ei − hν."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Bohr's three postulates?",
   "back": "1) Stationary orbits with quantised energy. 2) Transitions absorb/emit |ΔE| = hν. 3) Angular momentum mvr = n·h/2π."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Energy levels of hydrogen?",
   "back": "Eₙ = −13.6/n² eV; n = 1 ground state; ionisation energy 13.6 eV."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Ritz formula and series?",
   "back": "1/λ = R_H (1/n₁² − 1/n₂²); Lyman n₁ = 1 (UV), Balmer n₁ = 2 (visible), Paschen, Brackett, Pfund (IR)."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Hydrogen-like ions?",
   "back": "One electron, Z > 1 (He⁺, Li²⁺, Be³⁺, B⁴⁺); Eₙ = −13.6 Z²/n² eV; R = Z² R_H."
  },
  {
   "id": "img-n1",
   "type": "image",
   "target": "n1",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Ground state. n = 1, lowest energy (−13.6 eV for hydrogen); the most stable state."
  },
  {
   "id": "img-n2",
   "type": "image",
   "target": "n2",
   "front": "What is at the arrow, and why does it matter?",
   "back": "First excited state. n = 2; Eₙ = −13.6/n² eV."
  },
  {
   "id": "img-n3",
   "type": "image",
   "target": "n3",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Higher levels. Levels crowd together as n increases."
  },
  {
   "id": "img-ninf",
   "type": "image",
   "target": "ninf",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Ionisation limit. At n = ∞ the electron is free (E = 0); ionisation energy of H = 13.6 eV."
  },
  {
   "id": "img-lyman",
   "type": "image",
   "target": "lyman",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Lyman series. Emission lines ending on n = 1, in the ultraviolet."
  },
  {
   "id": "img-balmer",
   "type": "image",
   "target": "balmer",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Balmer series. Lines ending on n = 2; the four visible lines seen in the discharge tube."
  }
 ],
 "deeper": [
  {
   "title": "Why line spectra prove quantised energy",
   "html": "<p>If an electron could have any energy, excited atoms would emit light of every wavelength, a continuous rainbow. Hydrogen emits only a few sharp colours, which means only certain energy differences are possible, so the electron's energy levels themselves are fixed. Bohr's model turned this observation into a theory.</p><p class='src'>Source: the lecture's emission spectrum and Bohr slides.</p>"
  },
  {
   "title": "Why energies are negative",
   "html": "<p>The zero of energy is chosen as the free electron at infinite distance (n = ∞). A bound electron has less energy than a free one, so its energy is negative; the deeper it sits (n = 1), the more negative. The ionisation energy, 13.6 eV for hydrogen, is the energy needed to bring it from −13.6 eV to 0.</p><p class='src'>Source: the lecture's hydrogen energy diagram.</p>"
  }
 ],
 "resources": [
  {
   "title": "The Bohr model (Khan Academy)",
   "url": "https://www.khanacademy.org/science/chemistry/electronic-structure-of-atoms/bohr-model-hydrogen/a/bohrs-model-of-hydrogen",
   "kind": "Article",
   "why": "Bohr's postulates and hydrogen energy levels.",
   "note": ""
  },
  {
   "title": "Hydrogen spectrum (Chemistry LibreTexts)",
   "url": "https://chem.libretexts.org/",
   "kind": "Website",
   "why": "Balmer, Lyman and Rydberg formula explained.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "The Bohr model (Khan Academy)",
   "url": "https://www.khanacademy.org/science/chemistry/electronic-structure-of-atoms/bohr-model-hydrogen/a/bohrs-model-of-hydrogen"
  },
  {
   "name": "Hydrogen spectrum (Chemistry LibreTexts)",
   "url": "https://chem.libretexts.org/"
  }
 ],
 "verified": "22 Sep 2026"
};
