/* chem1: 7 lectures, merged for upload. Edit the source files, not this one. */
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
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["chem1-quantum"] = {
 "id": "chem1-quantum",
 "subject": "chem1",
 "group": "General chemistry",
 "title": "Quantum mechanics, quantum numbers and atomic orbitals",
 "sourceFile": "Lecture 3 - General Chemistry (2025-2026) (General Chemistry, Prof. Tarik Ouchbani)",
 "sourceUrl": "https://drive.google.com/file/d/1d_Qkg4r6EHEv_P0V2L9qrpEHGnnQWLyQ/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>Bohr's model works only for one-electron systems. <strong>Quantum mechanics</strong> replaces the idea of a trajectory with the <strong>probability of presence</strong> of the electron, described by a <strong>wave function ψ</strong> and four <strong>quantum numbers</strong>.</p>"
  },
  {
   "id": "s1",
   "title": "Wave-particle duality and uncertainty",
   "html": "<p><strong>De Broglie</strong>: matter such as an electron has both wave and particle character: <strong>λ = h / (m·v)</strong> (λ wavelength, h Planck's constant, m·v momentum). <strong>Heisenberg's uncertainty principle</strong>: position and speed cannot both be known precisely: <strong>Δx · Δp ≥ h/2π</strong> (Δp = m·Δv). So the electron's trajectory cannot be predicted: we speak of its <strong>probability of presence</strong> in a region around the nucleus.</p><p><strong>Schrödinger (1926)</strong> described electrons by a <strong>wave function ψ(x, y, z)</strong>; <strong>ψ²</strong> is proportional to the probability of finding the electron in a volume. The region where this probability is essentially certain is the <strong>atomic orbital</strong>.</p>"
  },
  {
   "id": "s2",
   "title": "Quantum numbers",
   "html": "<p><strong>n (principal)</strong>: integer ≥ 1; the <strong>shell</strong>; larger n = farther from the nucleus, larger atom, higher energy; n = 1 is the innermost shell (ground state); absorption raises n, emission lowers it. <strong>l (azimuthal, orbital angular momentum)</strong>: from <strong>0 to n − 1</strong>; gives the <strong>subshell shape</strong> and number of angular nodes: <strong>l = 0 → s, 1 → p, 2 → d, 3 → f</strong>. n = 2 gives 2s and 2p only (<strong>no 2d</strong>); n = 3 gives 3s, 3p, 3d. <strong>mₗ (magnetic)</strong>: from <strong>−l to +l</strong>; gives the <strong>orientation</strong> and the number of orbitals, <strong>2l + 1</strong> (s 1, p 3, d 5, f 7). <strong>mₛ (spin)</strong>: <strong>+½</strong> (↑, spin up) or <strong>−½</strong> (↓); independent of the others; determines magnetic behaviour.</p><p>Each orbital holds <strong>2 electrons</strong> of opposite spin, so a subshell holds 2(2l + 1): s 2, p 6, d 10, f 14. No two electrons of an atom can share all four quantum numbers: this is the <strong>Pauli exclusion principle</strong>. Worked example: n = 4 gives 4s (1 orbital, 2 e⁻), 4p (3, 6), 4d (5, 10), 4f (7, 14); l = 4 gives 9 orbitals with mₗ = −4 … +4.</p>"
  }
 ],
 "exam": [
  "De Broglie: λ = h / (m·v); matter has wave and particle character.",
  "Heisenberg: position and momentum cannot both be known exactly.",
  "Trajectory replaced by probability of presence.",
  "Schrödinger 1926: wave function ψ; ψ² ∝ probability; orbital.",
  "n: shell (≥ 1), size and energy.",
  "l: 0 to n−1; s, p, d, f; no 2d.",
  "mₗ: −l to +l; 2l + 1 orbitals.",
  "mₛ: +½ or −½.",
  "2 electrons per orbital: s 2, p 6, d 10, f 14.",
  "Pauli: no two electrons share all four numbers."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "The four quantum numbers",
   "caption": "From shell to spin. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"240\" y1=\"70\" x2=\"280\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"70\" x2=\"520\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"620\" y1=\"100\" x2=\"620\" y2=\"170\"/>",
   "parts": {
    "n": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"40\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "n: shell (size, energy)",
      "n = 1, 2, 3…"
     ],
     "lx": 140.0,
     "ly": 68.0
    },
    "l": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"280\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "l: subshell shape",
      "0 to n−1 (s, p, d, f)"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "ml": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"520\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "mₗ: orientation",
      "−l to +l (2l+1 orbitals)"
     ],
     "lx": 620.0,
     "ly": 68.0
    },
    "ms": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"520\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "mₛ: spin",
      "+½ (↑) or −½ (↓)"
     ],
     "lx": 620.0,
     "ly": 198.0
    },
    "orb": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"280\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Orbital: region where",
      "ψ² gives the electron"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "pauli": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"40\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "No two electrons share",
      "all four numbers"
     ],
     "lx": 140.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "n": [
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
    "l": [
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
    "ml": [
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
    "ms": [
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
    "orb": [
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
    "pauli": [
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
    ]
   }
  },
  "mindmap": {
   "root": "Quantum model",
   "branches": [
    [
     "Foundations",
     [
      "De Broglie λ = h/mv",
      "Heisenberg uncertainty",
      "Schrödinger ψ, ψ²"
     ]
    ],
    [
     "Quantum numbers",
     [
      "n: shell",
      "l: 0 to n−1 (s p d f)",
      "mₗ: −l to +l",
      "mₛ: ±½"
     ]
    ],
    [
     "Capacity",
     [
      "2l + 1 orbitals",
      "2 e⁻ per orbital",
      "s 2, p 6, d 10, f 14"
     ]
    ],
    [
     "Rules",
     [
      "No 2d orbital",
      "Pauli exclusion"
     ]
    ]
   ]
  }
 },
 "mcqs": [
  {
   "q": "De Broglie's relation is:",
   "options": [
    "E = hν",
    "ΔE = Δm·c²",
    "E = −13.6/n²",
    "λ = h / (m·v)"
   ],
   "answer": 3,
   "why": "Matter waves."
  },
  {
   "q": "Heisenberg's principle states that we cannot know precisely both:",
   "options": [
    "Mass and charge",
    "Z and A",
    "Position and speed (momentum)",
    "Energy and time only"
   ],
   "answer": 2,
   "why": "Δx·Δp ≥ h/2π."
  },
  {
   "q": "In quantum mechanics, the electron's trajectory is replaced by:",
   "options": [
    "A fixed orbit",
    "A straight line",
    "The nucleus",
    "A probability of presence"
   ],
   "answer": 3,
   "why": "Described by ψ."
  },
  {
   "q": "ψ² is proportional to:",
   "options": [
    "The electron's mass",
    "The energy",
    "Presence probability",
    "The nuclear charge"
   ],
   "answer": 2,
   "why": "It defines the orbital."
  },
  {
   "q": "The principal quantum number n can be:",
   "options": [
    "Any integer ≥ 1",
    "0",
    "Negative",
    "Half-integer"
   ],
   "answer": 0,
   "why": "n = 1 is the innermost shell."
  },
  {
   "q": "For n = 3, the possible l values are:",
   "options": [
    "0 to 3",
    "0, 1, 2",
    "Only 0",
    "1, 2, 3"
   ],
   "answer": 1,
   "why": "3s, 3p, 3d."
  },
  {
   "q": "Which subshell does not exist?",
   "options": [
    "3d",
    "2d",
    "2p",
    "4f"
   ],
   "answer": 1,
   "why": "l must be less than n."
  },
  {
   "q": "l = 2 corresponds to which subshell?",
   "options": [
    "s",
    "f",
    "p",
    "d"
   ],
   "answer": 3,
   "why": "l = 0 s, 1 p, 3 f."
  },
  {
   "q": "For l = 3, mₗ can take:",
   "options": [
    "±½",
    "−3 to +3 (7 values)",
    "0 to 3",
    "1 to 7"
   ],
   "answer": 1,
   "why": "2l + 1 = 7 orbitals."
  },
  {
   "q": "How many orbitals are in a d subshell?",
   "options": [
    "5",
    "3",
    "1",
    "7"
   ],
   "answer": 0,
   "why": "2l + 1 with l = 2."
  },
  {
   "q": "How many electrons can the 4f subshell hold?",
   "options": [
    "14",
    "7",
    "10",
    "18"
   ],
   "answer": 0,
   "why": "7 orbitals × 2."
  },
  {
   "q": "The spin quantum number can be:",
   "options": [
    "0 or 1",
    "−l to +l",
    "Any integer",
    "+½ or −½"
   ],
   "answer": 3,
   "why": "Spin up or down."
  },
  {
   "q": "How many orbitals are there for l = 4?",
   "options": [
    "16",
    "4",
    "8",
    "9"
   ],
   "answer": 3,
   "why": "(2×4) + 1."
  },
  {
   "q": "The rule that no two electrons in an atom share all four quantum numbers is:",
   "options": [
    "The Pauli exclusion principle",
    "Hund's rule",
    "De Broglie's relation",
    "Heisenberg's principle"
   ],
   "answer": 0,
   "why": "Hence max 2 electrons of opposite spin per orbital."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "n",
   "options": [
    "Spin number mₛ",
    "Principal quantum number n",
    "Magnetic number mₗ",
    "Azimuthal number l"
   ],
   "answer": 1,
   "why": "The arrow points to: Principal quantum number n. Positive integer ≥ 1; larger n = farther from nucleus, bigger atom, higher energy; n = 1 is the innermost shell."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "l",
   "options": [
    "Orbital",
    "Spin number mₛ",
    "Azimuthal number l",
    "Principal quantum number n"
   ],
   "answer": 2,
   "why": "The arrow points to: Azimuthal number l. 0 to n−1: l = 0 s, 1 p, 2 d, 3 f; sets orbital shape and number of angular nodes."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ml",
   "options": [
    "Spin number mₛ",
    "Azimuthal number l",
    "Magnetic number mₗ",
    "Orbital"
   ],
   "answer": 2,
   "why": "The arrow points to: Magnetic number mₗ. From −l to +l: gives orbital orientation and number of orbitals (2l + 1) in a subshell."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ms",
   "options": [
    "Azimuthal number l",
    "Spin number mₛ",
    "Magnetic number mₗ",
    "Orbital"
   ],
   "answer": 1,
   "why": "The arrow points to: Spin number mₛ. +½ (spin up) or −½ (spin down); independent of n, l, mₗ."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "orb",
   "options": [
    "Orbital",
    "Magnetic number mₗ",
    "Spin number mₛ",
    "Exclusion"
   ],
   "answer": 0,
   "why": "The arrow points to: Orbital. ψ² is proportional to the probability of finding the electron; the orbital is the volume where it is found."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pauli",
   "options": [
    "Magnetic number mₗ",
    "Spin number mₛ",
    "Exclusion",
    "Principal quantum number n"
   ],
   "answer": 2,
   "why": "The arrow points to: Exclusion. Each orbital holds at most 2 electrons of opposite spin (Pauli exclusion principle)."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "De Broglie relation?",
   "back": "λ = h / (m·v): matter (e.g. an electron) has an associated wavelength."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Heisenberg uncertainty principle?",
   "back": "Position and momentum cannot both be known exactly: Δx·Δp ≥ h/2π; hence probability of presence, not trajectory."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Wave function and orbital?",
   "back": "Schrödinger (1926): ψ(x, y, z) describes the electron; ψ² ∝ probability of presence; the orbital is where the electron is found."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Principal quantum number n?",
   "back": "Integer ≥ 1; shell; larger n = farther from nucleus, larger size, higher energy."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Azimuthal quantum number l?",
   "back": "0 to n − 1; subshell shape: 0 s, 1 p, 2 d, 3 f."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Magnetic quantum number mₗ?",
   "back": "−l to +l; orbital orientation; 2l + 1 orbitals per subshell."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Spin quantum number mₛ?",
   "back": "+½ (↑) or −½ (↓), independent of n, l, mₗ."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Capacity of subshells?",
   "back": "2 electrons per orbital: s 2, p 6, d 10, f 14; n = 4 has 4s, 4p, 4d, 4f."
  },
  {
   "id": "img-n",
   "type": "image",
   "target": "n",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Principal quantum number n. Positive integer ≥ 1; larger n = farther from nucleus, bigger atom, higher energy; n = 1 is the innermost shell."
  },
  {
   "id": "img-l",
   "type": "image",
   "target": "l",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Azimuthal number l. 0 to n−1: l = 0 s, 1 p, 2 d, 3 f; sets orbital shape and number of angular nodes."
  },
  {
   "id": "img-ml",
   "type": "image",
   "target": "ml",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Magnetic number mₗ. From −l to +l: gives orbital orientation and number of orbitals (2l + 1) in a subshell."
  },
  {
   "id": "img-ms",
   "type": "image",
   "target": "ms",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Spin number mₛ. +½ (spin up) or −½ (spin down); independent of n, l, mₗ."
  },
  {
   "id": "img-orb",
   "type": "image",
   "target": "orb",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Orbital. ψ² is proportional to the probability of finding the electron; the orbital is the volume where it is found."
  },
  {
   "id": "img-pauli",
   "type": "image",
   "target": "pauli",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Exclusion. Each orbital holds at most 2 electrons of opposite spin (Pauli exclusion principle)."
  }
 ],
 "deeper": [
  {
   "title": "Why an electron has no path",
   "html": "<p>To trace a path you need position and speed at every instant. Heisenberg showed that for a particle as light as an electron, measuring one precisely disturbs the other, so both can never be known together. Chemists therefore describe where an electron is likely to be, the orbital, rather than where it goes.</p><p class='src'>Source: the lecture's uncertainty principle and probability slides.</p>"
  },
  {
   "title": "Why there is no 2d orbital",
   "html": "<p>The azimuthal number l can only go up to n − 1. For the second shell (n = 2), l can be 0 or 1, so only 2s and 2p exist. d orbitals (l = 2) first appear in the third shell. This rule explains the shape of the periodic table: its blocks follow the subshells available at each n.</p><p class='src'>Source: the lecture's azimuthal quantum number slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "Quantum numbers (Chemistry LibreTexts)",
   "url": "https://chem.libretexts.org/",
   "kind": "Website",
   "why": "Search 'quantum numbers' for worked examples.",
   "note": ""
  },
  {
   "title": "Electron configurations and orbitals (Khan Academy)",
   "url": "https://www.khanacademy.org/science/chemistry/electronic-structure-of-atoms",
   "kind": "Website",
   "why": "Orbitals, quantum numbers, configurations.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Quantum numbers (Chemistry LibreTexts)",
   "url": "https://chem.libretexts.org/"
  },
  {
   "name": "Electron configurations and orbitals (Khan Academy)",
   "url": "https://www.khanacademy.org/science/chemistry/electronic-structure-of-atoms"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["chem1-configuration"] = {
 "id": "chem1-configuration",
 "subject": "chem1",
 "group": "General chemistry",
 "title": "Atomic orbitals and electron configuration",
 "sourceFile": "Lecture 4 - General Chemistry (2025-2026) (General Chemistry, Prof. Tarik Ouchbani)",
 "sourceUrl": "https://drive.google.com/file/d/1XpdQB7tRgircTkdh-0DB09lDUtbzhEv1/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>This lecture turns quantum numbers into pictures and rules: the shapes of <strong>s, p, d, f orbitals</strong>, and how electrons fill them to give each element's <strong>electron configuration</strong>, which determines valency, family properties and atomic spectra.</p>"
  },
  {
   "id": "s1",
   "title": "Orbital shapes",
   "html": "<p><strong>s orbitals</strong> are <strong>spherical</strong> around the nucleus; 1s is closest, 2s, 3s, 4s are progressively farther out (s electrons penetrate close to the nucleus, which slightly lowers their energy). <strong>p orbitals</strong> appear from n = 2: three equivalent orbitals at right angles, <strong>pₓ, p<sub>y</sub>, p<sub>z</sub></strong> (a p orbital is the region with a 95% chance of finding the electron). From n = 3 there are five <strong>d</strong> orbitals (complex shapes), and from n = 4 seven <strong>f</strong> orbitals. Orbitals per level: n = 1: 1; n = 2: 4; n = 3: 9; n = 4: 16 (n²).</p>"
  },
  {
   "id": "s2",
   "title": "Writing configurations",
   "html": "<p>Notation: shell number + subshell letter + electrons as a superscript, e.g. <strong>1s²</strong> ('one s two'). Maximum per <strong>shell = 2n²</strong> (2, 8, 18, 32); per <strong>subshell = 2(2l + 1)</strong>: s 2, p 6, d 10, f 14. Examples: <strong>Na (Z = 11): 1s² 2s² 2p⁶ 3s¹</strong>; <strong>Mg (Z = 12): 1s² 2s² 2p⁶ 3s²</strong>. 'Electrons in boxes' show each orbital as a box with arrows (↑↓) for spins. Configurations help determine <strong>valency</strong>, predict <strong>group properties</strong> (similar configurations → similar properties) and interpret <strong>spectra</strong>.</p>"
  },
  {
   "id": "s3",
   "title": "Filling rules",
   "html": "<p><strong>Aufbau principle</strong> ('build up'): electrons occupy lower-energy orbitals first; energy follows <strong>n + l</strong> (at equal n + l, lower n first): <strong>1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, 7s, 5f, 6d, 7p</strong>. Exceptions such as <strong>chromium and copper</strong> are explained by the extra stability of half-filled or completely filled subshells (Cr: …3d⁵ 4s¹; Cu: …3d¹⁰ 4s¹). <strong>Pauli exclusion principle</strong>: at most <strong>two electrons per orbital, with opposite spins</strong>; no two electrons share all four quantum numbers. <strong>Hund's rule</strong> (maximum multiplicity): in a subshell, every orbital is <strong>singly occupied first</strong>, with <strong>parallel spins</strong>, before any pairing. Examples: <strong>N (Z = 7): 1s² 2s² 2p³</strong> with three unpaired 2p electrons; <strong>O (Z = 8): 1s² 2s² 2p⁴</strong> with one paired and two unpaired 2p electrons.</p>"
  }
 ],
 "exam": [
  "s spherical; p: three orbitals px, py, pz at right angles; d five; f seven.",
  "Orbitals per shell = n²; electrons per shell = 2n².",
  "Subshell capacity 2(2l + 1): s 2, p 6, d 10, f 14.",
  "Notation 1s² = 'one s two'.",
  "Na: 1s² 2s² 2p⁶ 3s¹; Mg: 1s² 2s² 2p⁶ 3s².",
  "Aufbau: fill by increasing n + l; 4s before 3d.",
  "Exceptions: Cr 3d⁵4s¹, Cu 3d¹⁰4s¹.",
  "Pauli: max 2 electrons of opposite spin per orbital.",
  "Hund: singly fill each orbital with parallel spins before pairing.",
  "N: 2p³ (3 unpaired); O: 2p⁴ (2 unpaired)."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Filling order of subshells (Aufbau, n + l rule)",
   "caption": "Lowest energy first. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"240\" y1=\"70\" x2=\"280\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"70\" x2=\"520\" y2=\"70\"/>",
   "parts": {
    "a": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"40\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "1s → 2s → 2p",
      "→ 3s → 3p"
     ],
     "lx": 140.0,
     "ly": 68.0
    },
    "b": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"280\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "→ 4s → 3d",
      "(4s before 3d)"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "c": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"520\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "→ 4p → 5s → 4d",
      "→ 5p → 6s → 4f…"
     ],
     "lx": 620.0,
     "ly": 68.0
    },
    "pauli": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"40\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Pauli: ≤ 2 electrons,",
      "opposite spins"
     ],
     "lx": 140.0,
     "ly": 198.0
    },
    "hund": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"280\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Hund: fill each orbital",
      "singly first, same spin"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "exc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"520\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Exceptions: Cr, Cu",
      "(half/full d subshell)"
     ],
     "lx": 620.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "a": [
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
    "b": [
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
    "c": [
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
    "pauli": [
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
    "hund": [
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
   "root": "Electron configuration",
   "branches": [
    [
     "Orbitals",
     [
      "s: sphere",
      "p: px, py, pz",
      "d: 5",
      "f: 7"
     ]
    ],
    [
     "Capacity",
     [
      "Shell 2n²",
      "Subshell 2(2l+1)"
     ]
    ],
    [
     "Rules",
     [
      "Aufbau (n + l)",
      "Pauli",
      "Hund"
     ]
    ],
    [
     "Examples",
     [
      "Na 3s¹",
      "Mg 3s²",
      "N 2p³",
      "O 2p⁴",
      "Cr, Cu exceptions"
     ]
    ]
   ]
  }
 },
 "mcqs": [
  {
   "q": "What is the shape of an s orbital?",
   "options": [
    "Cloverleaf",
    "Dumbbell",
    "Ring",
    "Spherical"
   ],
   "answer": 3,
   "why": "Around the nucleus."
  },
  {
   "q": "How many p orbitals exist in a given shell (n ≥ 2)?",
   "options": [
    "5",
    "7",
    "3",
    "1"
   ],
   "answer": 2,
   "why": "px, py, pz."
  },
  {
   "q": "The d orbitals first appear at:",
   "options": [
    "n = 4",
    "n = 2",
    "n = 1",
    "n = 3"
   ],
   "answer": 3,
   "why": "Five d orbitals."
  },
  {
   "q": "How many orbitals are in the n = 3 level?",
   "options": [
    "3",
    "18",
    "9",
    "4"
   ],
   "answer": 2,
   "why": "n² = 9: one 3s, three 3p, five 3d."
  },
  {
   "q": "The maximum number of electrons in shell n is:",
   "options": [
    "2n²",
    "2(2l + 1)",
    "n²",
    "2l + 1"
   ],
   "answer": 0,
   "why": "2, 8, 18, 32."
  },
  {
   "q": "The electron configuration of sodium (Z = 11) is:",
   "options": [
    "1s² 2s² 2p⁶ 3p¹",
    "1s² 2s² 2p⁶ 3s¹",
    "1s² 2s² 2p⁷",
    "1s² 2s⁸ 3s¹"
   ],
   "answer": 1,
   "why": "One valence electron."
  },
  {
   "q": "'1s²' is read as:",
   "options": [
    "One s squared",
    "One s two",
    "Two s one",
    "One squared s"
   ],
   "answer": 1,
   "why": "The superscript counts electrons."
  },
  {
   "q": "According to the Aufbau principle, which fills first?",
   "options": [
    "Both 3d and 4p",
    "3d",
    "4p",
    "4s"
   ],
   "answer": 3,
   "why": "4s has lower n + l (4) than 3d (5)."
  },
  {
   "q": "Orbital energy order in the Aufbau rule follows:",
   "options": [
    "n only",
    "n + l",
    "mₗ",
    "l only"
   ],
   "answer": 1,
   "why": "Lower n first when n + l is equal."
  },
  {
   "q": "Which elements are classic exceptions to the Aufbau order?",
   "options": [
    "Cr and Cu",
    "He and Ne",
    "N and O",
    "Na and Mg"
   ],
   "answer": 0,
   "why": "Half-filled or full d subshells."
  },
  {
   "q": "The Pauli exclusion principle limits each orbital to:",
   "options": [
    "2 electrons of opposite spin",
    "2 electrons of the same spin",
    "6 electrons",
    "1 electron"
   ],
   "answer": 0,
   "why": "No two share all four numbers."
  },
  {
   "q": "Hund's rule states that in a subshell electrons:",
   "options": [
    "Have random spins",
    "Fill the highest energy first",
    "Pair up first",
    "Fill singly, parallel spins"
   ],
   "answer": 3,
   "why": "Maximum multiplicity."
  },
  {
   "q": "How many unpaired electrons does nitrogen (1s² 2s² 2p³) have?",
   "options": [
    "1",
    "5",
    "0",
    "3"
   ],
   "answer": 3,
   "why": "One in each 2p orbital."
  },
  {
   "q": "Magnesium (Z = 12) has the configuration:",
   "options": [
    "1s² 2s² 2p⁶ 3s²",
    "1s² 2s² 2p⁶ 3p²",
    "1s² 2s² 2p⁸",
    "1s² 2s² 2p⁶ 3s¹ 3p¹"
   ],
   "answer": 0,
   "why": "Two valence electrons."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "a",
   "options": [
    "4s before 3d",
    "First subshells",
    "Continuing order",
    "Pauli exclusion"
   ],
   "answer": 1,
   "why": "The arrow points to: First subshells. Order by increasing n + l; at equal n + l, lower n first."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "b",
   "options": [
    "Hund's rule",
    "First subshells",
    "4s before 3d",
    "Pauli exclusion"
   ],
   "answer": 2,
   "why": "The arrow points to: 4s before 3d. 4s (n + l = 4) fills before 3d (n + l = 5)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "c",
   "options": [
    "Pauli exclusion",
    "Hund's rule",
    "Continuing order",
    "4s before 3d"
   ],
   "answer": 2,
   "why": "The arrow points to: Continuing order. … 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, 7s, 5f, 6d, 7p."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pauli",
   "options": [
    "4s before 3d",
    "Pauli exclusion",
    "Hund's rule",
    "Continuing order"
   ],
   "answer": 1,
   "why": "The arrow points to: Pauli exclusion. Two electrons in one orbital must have opposite spins; no two share all four quantum numbers."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "hund",
   "options": [
    "Hund's rule",
    "Pauli exclusion",
    "Exceptions",
    "Continuing order"
   ],
   "answer": 0,
   "why": "The arrow points to: Hund's rule. Within a subshell, each orbital gets one electron (parallel spins) before any pairing."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "exc",
   "options": [
    "First subshells",
    "Continuing order",
    "Exceptions",
    "Pauli exclusion"
   ],
   "answer": 2,
   "why": "The arrow points to: Exceptions. Chromium and copper adopt half-filled or filled 3d configurations for extra stability."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Orbital shapes?",
   "back": "s spherical; p three dumbbell orbitals px, py, pz at right angles (from n = 2); d five (from n = 3); f seven (from n = 4)."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Orbitals and electrons per shell?",
   "back": "n² orbitals; 2n² electrons (2, 8, 18, 32)."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Subshell capacities?",
   "back": "2(2l + 1): s 2, p 6, d 10, f 14."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Aufbau filling order?",
   "back": "1s, 2s, 2p, 3s, 3p, 4s, 3d, 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, 7s…, by increasing n + l."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Pauli exclusion principle?",
   "back": "Max two electrons per orbital, with opposite spins; no two electrons share all four quantum numbers."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Hund's rule?",
   "back": "Fill each orbital of a subshell singly with parallel spins before pairing (maximum multiplicity)."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Exceptions to Aufbau?",
   "back": "Cr (…3d⁵ 4s¹) and Cu (…3d¹⁰ 4s¹): half-filled or filled d subshells are extra stable."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Uses of electron configuration?",
   "back": "Determine valency, predict group properties, interpret atomic spectra."
  },
  {
   "id": "img-a",
   "type": "image",
   "target": "a",
   "front": "What is at the arrow, and why does it matter?",
   "back": "First subshells. Order by increasing n + l; at equal n + l, lower n first."
  },
  {
   "id": "img-b",
   "type": "image",
   "target": "b",
   "front": "What is at the arrow, and why does it matter?",
   "back": "4s before 3d. 4s (n + l = 4) fills before 3d (n + l = 5)."
  },
  {
   "id": "img-c",
   "type": "image",
   "target": "c",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Continuing order. … 4p, 5s, 4d, 5p, 6s, 4f, 5d, 6p, 7s, 5f, 6d, 7p."
  },
  {
   "id": "img-pauli",
   "type": "image",
   "target": "pauli",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Pauli exclusion. Two electrons in one orbital must have opposite spins; no two share all four quantum numbers."
  },
  {
   "id": "img-hund",
   "type": "image",
   "target": "hund",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Hund's rule. Within a subshell, each orbital gets one electron (parallel spins) before any pairing."
  },
  {
   "id": "img-exc",
   "type": "image",
   "target": "exc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Exceptions. Chromium and copper adopt half-filled or filled 3d configurations for extra stability."
  }
 ],
 "deeper": [
  {
   "title": "Why 4s fills before 3d",
   "html": "<p>The 4s orbital has a higher principal number than 3d, but its electrons penetrate close to the nucleus, feel more of its charge and end up slightly lower in energy. The n + l rule captures this: 4s (4 + 0 = 4) comes before 3d (3 + 2 = 5). This is why potassium and calcium start the fourth period before the transition metals.</p><p class='src'>Source: the lecture's s-orbital and Aufbau slides.</p>"
  },
  {
   "title": "Why Hund's rule makes sense",
   "html": "<p>Electrons repel each other. Placing them in separate orbitals of the same subshell keeps them apart, and parallel spins lower the energy further. Only when every orbital has one electron is pairing unavoidable. This is why nitrogen has three unpaired electrons and forms three bonds.</p><p class='src'>Source: the lecture's Hund's rule slide and nitrogen example.</p>"
  }
 ],
 "resources": [
  {
   "title": "Electron configurations (Khan Academy)",
   "url": "https://www.khanacademy.org/science/chemistry/electronic-structure-of-atoms/electron-configurations-jay-sal/a/electron-configurations",
   "kind": "Article",
   "why": "Aufbau, Pauli and Hund with examples.",
   "note": ""
  },
  {
   "title": "Ptable: interactive periodic table",
   "url": "https://ptable.com/",
   "kind": "Website",
   "why": "Shows electron configurations for every element.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Electron configurations (Khan Academy)",
   "url": "https://www.khanacademy.org/science/chemistry/electronic-structure-of-atoms/electron-configurations-jay-sal/a/electron-configurations"
  },
  {
   "name": "Ptable: interactive periodic table",
   "url": "https://ptable.com/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["chem1-periodic"] = {
 "id": "chem1-periodic",
 "subject": "chem1",
 "group": "General chemistry",
 "title": "The periodic table",
 "sourceFile": "Lecture 5 - General Chemistry: periodic classification (2025-2026) (General Chemistry, Prof. Tarik Ouchbani)",
 "sourceUrl": "https://drive.google.com/file/d/1bnWUqxnAaCZNh4hnG0HgdRbBfkiIcrJ4/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>In 1800 only 31 elements were known; by 1865 about 63 more had been found, creating the need to classify them. Today <strong>118 elements</strong> are known, some man-made. The periodic table arranges them so that properties repeat at regular intervals, letting chemists predict an element's behaviour from its neighbours.</p>"
  },
  {
   "id": "s1",
   "title": "Metals, non-metals, metalloids",
   "html": "<p><strong>Metals</strong>: solid at normal T and P (except <strong>mercury</strong>), shiny, <strong>malleable</strong> (can be rolled) and <strong>ductile</strong> (can be stretched), <strong>electron donors</strong>, good conductors of heat and electricity; they form <strong>cations</strong>, their oxides are <strong>basic</strong>, they react with acids. <strong>Non-metals</strong>: often gases or liquids, dull, neither malleable nor ductile, poor conductors. <strong>Metalloids</strong>: on the stepped line between the two; semiconductors whose electrical resistance <strong>decreases with temperature</strong>; brittle.</p>"
  },
  {
   "id": "s2",
   "title": "Structure of the modern table",
   "html": "<p>Elements are ordered by <strong>atomic number Z</strong> (no longer atomic mass), following <strong>Klechkowski's</strong> (Aufbau) rule, so an element's position reflects its electron configuration; the <strong>valence layer</strong> fixes chemical properties. <strong>7 rows (periods)</strong>, each filling a new shell (ns, (n−2)f, (n−1)d, np), and <strong>18 columns</strong>: elements with the same outer-layer configuration are in the same column (family) with similar properties: hence 'periodic'. <strong>Blocks</strong>: <strong>s</strong> (IA, IIA: ns¹⁻²; e.g. Na 3s¹), <strong>p</strong> (IIIA-VIIIA: ns² np¹⁻⁶; e.g. B 2p¹), <strong>d</strong> (IIIB-VIIIB, IB, IIB: ns² (n−1)d¹⁻¹⁰; e.g. Sc 4s² 3d¹), <strong>f</strong> (the 'balconies').</p>"
  },
  {
   "id": "s3",
   "title": "Main families",
   "html": "<p><strong>Alkali metals</strong> (IA, ns¹: Li, Na, K, Rb, Cs, Fr): monovalent, electropositive, form M⁺, very reactive, oxides (Na₂O) give strong bases (NaOH). <strong>Alkaline earths</strong> (IIA, ns²: Be, Mg, Ca, Sr, Ba, Ra): bivalent, form M²⁺, oxides (MgO, CaO) give strong bases. <strong>Boron family</strong> (ns² np¹), <strong>carbon family</strong> (ns² np²; excited state gives more unpaired electrons), <strong>nitrogen family</strong> (ns² np³; N and P essential to life). <strong>Chalcogens</strong> (ns² np⁴: O, S, Se, Te; Po radioactive): gain 2 electrons (O²⁻), usual oxidation state −2 (also +2, +4, +6). <strong>Halogens</strong> (ns² np⁵: F, Cl, Br, I, At): gain one electron, oxidation state −1, occur as ions or diatomic molecules (Cl₂, Br₂, I₂), form ionic bonds and strong acids with hydrogen (HF, HCl). <strong>Noble gases</strong> (ns² np⁶). <strong>Transition metals</strong> (ns² (n−1)dˣ): three series of 10 in periods 4-6, all metals, many oxidation states.</p>"
  }
 ],
 "exam": [
  "118 known elements.",
  "Metals: shiny, malleable, ductile, conductors, cations, basic oxides (Hg liquid).",
  "Metalloids: semiconductors, resistance falls with temperature.",
  "Order by Z (not mass), following Klechkowski's rule.",
  "7 periods (shells) × 18 columns (families).",
  "Same outer configuration → same column → similar properties.",
  "Blocks: s (ns¹⁻²), p (ns² np¹⁻⁶), d (ns² (n−1)d¹⁻¹⁰), f.",
  "Alkali ns¹ → M⁺, strong bases; alkaline earths ns² → M²⁺.",
  "Chalcogens ns² np⁴ → −2; halogens ns² np⁵ → −1, strong acids HX.",
  "Transition metals: many oxidation states."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Blocks of the periodic table",
   "caption": "Where the outer electrons go. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs>",
   "parts": {
    "s": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"40\" y=\"40\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "s block: IA, IIA",
      "ns¹, ns²"
     ],
     "lx": 120.0,
     "ly": 68.0
    },
    "d": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"215\" y=\"40\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "d block: transition",
      "ns² (n−1)dˣ"
     ],
     "lx": 295.0,
     "ly": 68.0
    },
    "p": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"390\" y=\"40\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "p block: IIIA-VIIIA",
      "ns² npˣ"
     ],
     "lx": 470.0,
     "ly": 68.0
    },
    "f": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"565\" y=\"40\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "f block:",
      "lanthanides, actinides"
     ],
     "lx": 645.0,
     "ly": 68.0
    },
    "per": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"120\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "7 periods (rows):",
      "one value of n"
     ],
     "lx": 230.0,
     "ly": 198.0
    },
    "grp": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"420\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "18 columns: same",
      "outer layer = same family"
     ],
     "lx": 530.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "s": [
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
    "d": [
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
    "p": [
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
    "f": [
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
    "per": [
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
    "grp": [
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
   "q": "How many elements are known today?",
   "options": [
    "103",
    "92",
    "150",
    "118"
   ],
   "answer": 3,
   "why": "Some are man-made."
  },
  {
   "q": "Which metal is liquid at normal temperature?",
   "options": [
    "Copper",
    "Iron",
    "Mercury",
    "Sodium"
   ],
   "answer": 2,
   "why": "All other metals are solid."
  },
  {
   "q": "'Ductile' means a metal can be:",
   "options": [
    "Rolled into sheets",
    "Magnetised",
    "Melted easily",
    "Stretched without breaking"
   ],
   "answer": 3,
   "why": "Malleable = can be rolled or crushed."
  },
  {
   "q": "Metals form:",
   "options": [
    "Only covalent bonds",
    "Anions and acidic oxides",
    "Cations and basic oxides",
    "Diatomic gases"
   ],
   "answer": 2,
   "why": "They are electron donors."
  },
  {
   "q": "Metalloids are characterised by:",
   "options": [
    "Being semiconductors",
    "Being malleable",
    "Being gases",
    "Resistance rising with temperature"
   ],
   "answer": 0,
   "why": "Resistance falls with temperature."
  },
  {
   "q": "The modern periodic table orders elements by:",
   "options": [
    "Discovery date",
    "Atomic number Z",
    "Atomic mass",
    "Density"
   ],
   "answer": 1,
   "why": "Following Klechkowski's rule."
  },
  {
   "q": "How many periods and columns does the table have?",
   "options": [
    "6 and 20",
    "7 and 18",
    "18 and 7",
    "8 and 16"
   ],
   "answer": 1,
   "why": "Periods = shells."
  },
  {
   "q": "Elements in the same column share:",
   "options": [
    "The same mass",
    "The same Z",
    "The same period",
    "Outer configuration"
   ],
   "answer": 3,
   "why": "Hence similar properties."
  },
  {
   "q": "Scandium (1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹) belongs to the:",
   "options": [
    "f block",
    "d block",
    "s block",
    "p block"
   ],
   "answer": 1,
   "why": "Outer ns² (n−1)d¹."
  },
  {
   "q": "Alkali metals have outer configuration:",
   "options": [
    "ns¹",
    "ns² np⁵",
    "ns²",
    "ns² np⁶"
   ],
   "answer": 0,
   "why": "Li, Na, K…"
  },
  {
   "q": "Alkali metal oxides react with water to give:",
   "options": [
    "Strong bases",
    "Neutral salts",
    "Noble gases",
    "Strong acids"
   ],
   "answer": 0,
   "why": "E.g. NaOH."
  },
  {
   "q": "Halogens usually have oxidation state:",
   "options": [
    "−2",
    "+1",
    "0",
    "−1"
   ],
   "answer": 3,
   "why": "They gain one electron."
  },
  {
   "q": "Chalcogens (O, S, Se) tend to:",
   "options": [
    "Lose 2 electrons",
    "Share 5 electrons",
    "Gain 1 electron",
    "Gain 2 electrons"
   ],
   "answer": 3,
   "why": "Oxidation state −2."
  },
  {
   "q": "Transition metals are known for:",
   "options": [
    "Many oxidation states",
    "A single oxidation state",
    "Being non-metals",
    "ns¹ configuration only"
   ],
   "answer": 0,
   "why": "Three series of 10."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "s",
   "options": [
    "f block",
    "s block",
    "d block",
    "p block"
   ],
   "answer": 1,
   "why": "The arrow points to: s block. Alkali metals (ns¹: Li, Na, K…; monovalent, strong bases) and alkaline earths (ns²: Be, Mg, Ca…; bivalent)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "d",
   "options": [
    "Periods",
    "s block",
    "d block",
    "f block"
   ],
   "answer": 2,
   "why": "The arrow points to: d block. Transition metals: three series of 10 elements in periods 4-6; many oxidation states."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "p",
   "options": [
    "Periods",
    "d block",
    "p block",
    "f block"
   ],
   "answer": 2,
   "why": "The arrow points to: p block. ns² npˣ: boron, carbon, nitrogen families, chalcogens (ns² np⁴), halogens (ns² np⁵), noble gases (ns² np⁶)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "f",
   "options": [
    "p block",
    "f block",
    "Periods",
    "d block"
   ],
   "answer": 1,
   "why": "The arrow points to: f block. The 'balconies' filling f subshells."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "per",
   "options": [
    "Periods",
    "Groups",
    "p block",
    "f block"
   ],
   "answer": 0,
   "why": "The arrow points to: Periods. Each row fills a new shell: ns, (n−2)f, (n−1)d, np."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "grp",
   "options": [
    "s block",
    "f block",
    "Groups",
    "p block"
   ],
   "answer": 2,
   "why": "The arrow points to: Groups. Elements with the same outer-layer configuration share chemical properties."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Why classify elements?",
   "back": "Properties repeat periodically; the table predicts an element's behaviour in reactions and gathers its key data."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Metals vs non-metals vs metalloids?",
   "back": "Metals: shiny, malleable, ductile, conductors, cations, basic oxides. Non-metals: dull, brittle, poor conductors. Metalloids: semiconductors, resistance falls with temperature."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Organising principle of the modern table?",
   "back": "Increasing Z, following Klechkowski's rule; 7 periods (shells), 18 columns (families with the same outer configuration)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "The four blocks?",
   "back": "s: ns¹⁻² (IA, IIA). p: ns² np¹⁻⁶ (IIIA-VIIIA). d: ns² (n−1)d¹⁻¹⁰ (transition metals). f: lanthanides, actinides."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Alkali vs alkaline earth metals?",
   "back": "Alkali: ns¹, monovalent, M⁺, strong bases. Alkaline earths: ns², bivalent, M²⁺, strong bases."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Chalcogens and halogens?",
   "back": "Chalcogens: ns² np⁴, gain 2 e⁻, −2 (also +2, +4, +6). Halogens: ns² np⁵, gain 1 e⁻, −1, diatomic, strong acids HX."
  },
  {
   "id": "img-s",
   "type": "image",
   "target": "s",
   "front": "What is at the arrow, and why does it matter?",
   "back": "s block. Alkali metals (ns¹: Li, Na, K…; monovalent, strong bases) and alkaline earths (ns²: Be, Mg, Ca…; bivalent)."
  },
  {
   "id": "img-d",
   "type": "image",
   "target": "d",
   "front": "What is at the arrow, and why does it matter?",
   "back": "d block. Transition metals: three series of 10 elements in periods 4-6; many oxidation states."
  },
  {
   "id": "img-p",
   "type": "image",
   "target": "p",
   "front": "What is at the arrow, and why does it matter?",
   "back": "p block. ns² npˣ: boron, carbon, nitrogen families, chalcogens (ns² np⁴), halogens (ns² np⁵), noble gases (ns² np⁶)."
  },
  {
   "id": "img-f",
   "type": "image",
   "target": "f",
   "front": "What is at the arrow, and why does it matter?",
   "back": "f block. The 'balconies' filling f subshells."
  },
  {
   "id": "img-per",
   "type": "image",
   "target": "per",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Periods. Each row fills a new shell: ns, (n−2)f, (n−1)d, np."
  },
  {
   "id": "img-grp",
   "type": "image",
   "target": "grp",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Groups. Elements with the same outer-layer configuration share chemical properties."
  }
 ],
 "deeper": [
  {
   "title": "Why columns share chemistry",
   "html": "<p>Chemical reactions involve only the outer (valence) electrons. Elements in the same column have the same outer arrangement, for example ns¹ for all alkali metals, so they react in the same way: each gives up one electron to form a +1 ion. The inner shells only change the size and how easily that electron is lost.</p><p class='src'>Source: the lecture's construction principle slide.</p>"
  },
  {
   "title": "Why ordering by Z, not mass, fixed the table",
   "html": "<p>Early tables sorted elements by atomic mass, which put a few pairs in the wrong order. Sorting by atomic number, the number of protons and therefore electrons, lines every element up with its electron configuration, so properties repeat exactly where the configuration repeats.</p><p class='src'>Source: the lecture's modern classification slide.</p>"
  }
 ],
 "resources": [
  {
   "title": "Ptable: interactive periodic table",
   "url": "https://ptable.com/",
   "kind": "Website",
   "why": "Blocks, families and configurations for every element.",
   "note": ""
  },
  {
   "title": "Periodic table (Royal Society of Chemistry)",
   "url": "https://www.rsc.org/periodic-table",
   "kind": "Website",
   "why": "Element data and history.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Ptable: interactive periodic table",
   "url": "https://ptable.com/"
  },
  {
   "name": "Periodic table (Royal Society of Chemistry)",
   "url": "https://www.rsc.org/periodic-table"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["chem1-bonds"] = {
 "id": "chem1-bonds",
 "subject": "chem1",
 "group": "General chemistry",
 "title": "Chemical bonds",
 "sourceFile": "Lecture 6 - General Chemistry: chemical bonds (2025-2026) (General Chemistry, Prof. Tarik Ouchbani)",
 "sourceUrl": "https://drive.google.com/file/d/1bnWUqxnAaCZNh4hnG0HgdRbBfkiIcrJ4/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>A <strong>chemical bond</strong> is the attractive force holding atoms or ions together, stabilising them by an overall <strong>loss of energy</strong>. Attractive forces lower energy; repulsive forces raise it. The stronger the bonds, the more stable the compound; weakly bonded compounds react to form stronger bonds.</p>"
  },
  {
   "id": "s1",
   "title": "Lewis and Kossel theories",
   "html": "<p><strong>Lewis</strong>: an atom is a positive <strong>kernel</strong> (nucleus + inner electrons) plus an outer shell holding at most <strong>eight</strong> electrons; the <strong>octet</strong> is a stable configuration. Atoms reach it by <strong>gaining or losing</strong> electrons (NaCl, MgCl₂) or by <strong>sharing</strong> (F₂); only <strong>valence electrons</strong> take part. <strong>Lewis symbols</strong> show valence electrons as dots (Li 1, O 6, Ne 8); valency = number of dots or 8 minus it. <strong>Kossel</strong>: noble gases separate the very electronegative halogens from the very electropositive alkali metals; ions with a noble-gas configuration (ns² np⁶) attract electrostatically: an <strong>electrovalent</strong> bond (e.g. MgCl₂). <strong>Duet rule</strong> for H (Z ≤ 4, structure of He); <strong>octet rule</strong> for periods 2 and 3. A shared electron pair (binding doublet) is drawn as a dash (H–H).</p>"
  },
  {
   "id": "s2",
   "title": "Types of bonds",
   "html": "<p><strong>Covalent</strong>: electrons <strong>shared</strong> between atoms (typical of organic, carbon compounds). <strong>Polar covalent</strong>: unequal sharing because the more <strong>electronegative</strong> atom pulls the pair; partial charges appear (water). <strong>Hydrogen bond</strong>: weaker than ionic or covalent bonds; a hydrogen bonded to an electronegative atom such as oxygen carries a partial positive charge and is attracted to the negative charges of a neighbouring atom; responsible for many properties of water. <strong>Ionic (electrovalent)</strong>: strong electrostatic attraction between cations and anions arranged in a <strong>crystal lattice</strong> stabilised by the <strong>lattice enthalpy</strong>; favoured by low <strong>ionisation energy</strong> of the cation-forming atom, high <strong>electron gain enthalpy</strong> of the anion-forming atom and high lattice enthalpy; typically <strong>metal + non-metal</strong>.</p>"
  },
  {
   "id": "s3",
   "title": "Lewis structures, valence, MO theory",
   "html": "<p><strong>Writing Lewis structures</strong>: (1) add the valence electrons (CH₄: 4 + 4 = 8); (2) add one electron per negative charge, subtract one per positive charge; (3) draw the skeleton and place bonding pairs; (4) the <strong>least electronegative atom is central</strong>, H and F terminal; (5) use remaining pairs for multiple bonds or lone pairs so each atom gets an octet. Example <strong>CO</strong>: 4 + 6 = 10 electrons → <strong>triple bond</strong> with a lone pair on each atom. <strong>Valence</strong> = number of covalent bonds an atom can make.</p><p><strong>Molecular orbital theory (LCAO)</strong>: only atomic orbitals of comparable symmetry and close energy combine; <strong>as many MOs form as AOs combined</strong>, each with a defined energy: <strong>bonding</strong> and <strong>antibonding</strong> (σ from axial overlap, π from side overlap). For A₂ molecules with Z ≤ 7, <strong>s-p interaction</strong> places π below σz. <strong>H₂</strong>: two 1s AOs give σ1s and σ*1s; configuration <strong>σ1s²</strong>. From the 8 valence AOs (2s, 2p) of second-period diatomics come 4 bonding and 4 antibonding MOs.</p>"
  }
 ],
 "exam": [
  "Bond = attraction lowering energy; stronger bonds = more stable compound.",
  "Lewis: kernel + up to 8 outer electrons; octet by gain, loss or sharing.",
  "Kossel: ions with noble-gas configuration → electrovalent bond.",
  "Duet rule for H; octet for periods 2-3.",
  "Covalent: shared pair. Polar covalent: unequal sharing (water).",
  "Hydrogen bond: weak, δ+ H attracted to electronegative neighbours.",
  "Ionic: cations + anions in a lattice; metal + non-metal.",
  "Lewis structure: count valence e⁻, central least electronegative atom, complete octets; CO has a triple bond.",
  "MO (LCAO): n AOs → n MOs, bonding and antibonding; σ axial, π lateral.",
  "H₂: σ1s²."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Types of chemical bonds",
   "caption": "From sharing to transfer. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"240\" y1=\"70\" x2=\"280\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"70\" x2=\"520\" y2=\"70\"/>",
   "parts": {
    "cov": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"40\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Covalent: shared",
      "electron pair (H₂, F₂)"
     ],
     "lx": 140.0,
     "ly": 68.0
    },
    "pol": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"280\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Polar covalent: unequal",
      "sharing (H₂O)"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "ion": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"520\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Ionic: electron transfer,",
      "electrostatic (NaCl, MgCl₂)"
     ],
     "lx": 620.0,
     "ly": 68.0
    },
    "hb": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"40\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Hydrogen bond: weak,",
      "H near O, N, F"
     ],
     "lx": 140.0,
     "ly": 198.0
    },
    "oct": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"280\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Octet (duet for H):",
      "noble gas structure"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "mo": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"520\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "MO theory (LCAO):",
      "bonding + antibonding"
     ],
     "lx": 620.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "cov": [
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
    "pol": [
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
    "ion": [
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
    "hb": [
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
    "oct": [
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
    "mo": [
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
   "root": "Chemical bonds",
   "branches": [
    [
     "Theories",
     [
      "Lewis: octet, dots",
      "Kossel: ions",
      "Duet (H)"
     ]
    ],
    [
     "Bond types",
     [
      "Covalent",
      "Polar covalent",
      "Hydrogen bond",
      "Ionic"
     ]
    ],
    [
     "Lewis structures",
     [
      "Count valence e⁻",
      "Central: least electronegative",
      "Complete octets",
      "CO: triple bond"
     ]
    ],
    [
     "MO theory",
     [
      "LCAO",
      "Bonding / antibonding",
      "σ axial, π lateral",
      "H₂: σ1s²"
     ]
    ]
   ]
  }
 },
 "mcqs": [
  {
   "q": "Forming a chemical bond:",
   "options": [
    "Increases energy",
    "Has no energy change",
    "Destroys atoms",
    "Lowers the overall energy"
   ],
   "answer": 3,
   "why": "Stability comes from energy loss."
  },
  {
   "q": "In Lewis theory, the kernel is:",
   "options": [
    "Only the nucleus",
    "A lone pair",
    "Nucleus + inner electrons",
    "The valence shell"
   ],
   "answer": 2,
   "why": "The outer shell holds up to 8 electrons."
  },
  {
   "q": "Which electrons form chemical bonds?",
   "options": [
    "Valence electrons",
    "Inner electrons",
    "All electrons",
    "Nuclear particles"
   ],
   "answer": 0,
   "why": "Shown as dots in Lewis symbols."
  },
  {
   "q": "How many dots does oxygen's Lewis symbol have?",
   "options": [
    "4",
    "2",
    "6",
    "8"
   ],
   "answer": 2,
   "why": "Six valence electrons."
  },
  {
   "q": "The duet rule applies to:",
   "options": [
    "Hydrogen",
    "Chlorine",
    "Sodium",
    "Carbon"
   ],
   "answer": 0,
   "why": "It reaches the He structure."
  },
  {
   "q": "A covalent bond is formed by:",
   "options": [
    "Hydrogen only",
    "Sharing of an electron pair",
    "Transfer of electrons",
    "Attraction between ions"
   ],
   "answer": 1,
   "why": "Typical of carbon compounds."
  },
  {
   "q": "In a polar covalent bond:",
   "options": [
    "No electrons are shared",
    "Electrons are shared equally",
    "Electronegative atom pulls pair",
    "Ions are formed"
   ],
   "answer": 2,
   "why": "Water is an example."
  },
  {
   "q": "Compared with ionic and covalent bonds, hydrogen bonds are:",
   "options": [
    "Stronger",
    "Identical",
    "Nuclear",
    "Weaker"
   ],
   "answer": 3,
   "why": "They shape water's properties."
  },
  {
   "q": "An ionic bond typically forms between:",
   "options": [
    "Two non-metals",
    "A metal and a non-metal",
    "Two identical atoms",
    "Two noble gases"
   ],
   "answer": 1,
   "why": "E.g. NaCl, MgCl₂."
  },
  {
   "q": "Which favours ionic bond formation?",
   "options": [
    "Low ionisation energy of the cation-forming atom",
    "Low lattice enthalpy",
    "Equal electronegativities",
    "High ionisation energy of the metal"
   ],
   "answer": 0,
   "why": "Plus high electron gain enthalpy of the anion-forming atom."
  },
  {
   "q": "In a Lewis structure, the central atom is usually the:",
   "options": [
    "Least electronegative",
    "Fluorine",
    "Hydrogen",
    "Most electronegative"
   ],
   "answer": 0,
   "why": "H and F are terminal."
  },
  {
   "q": "How many valence electrons does CO have in total?",
   "options": [
    "14",
    "12",
    "8",
    "10"
   ],
   "answer": 3,
   "why": "4 (C) + 6 (O); triple bond."
  },
  {
   "q": "In LCAO theory, combining 2 atomic orbitals gives:",
   "options": [
    "1 MO",
    "4 MOs",
    "No MOs",
    "2 MOs"
   ],
   "answer": 3,
   "why": "Number of MOs = number of AOs."
  },
  {
   "q": "A π molecular orbital comes from:",
   "options": [
    "Side (lateral) overlap",
    "s orbitals only",
    "Axial overlap",
    "Nuclear fusion"
   ],
   "answer": 0,
   "why": "σ comes from axial overlap."
  },
  {
   "q": "The electron configuration of H₂ is:",
   "options": [
    "σ1s² σ*1s²",
    "σ1s²",
    "σ1s¹",
    "σ*1s²"
   ],
   "answer": 1,
   "why": "Both electrons in the bonding MO."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "cov",
   "options": [
    "Ionic bond",
    "Hydrogen bond",
    "Polar covalent",
    "Covalent bond"
   ],
   "answer": 3,
   "why": "The arrow points to: Covalent bond. Two atoms share a pair of electrons (a binding doublet), common in carbon compounds."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pol",
   "options": [
    "Covalent bond",
    "Hydrogen bond",
    "Polar covalent",
    "Octet and duet rules"
   ],
   "answer": 2,
   "why": "The arrow points to: Polar covalent. The more electronegative atom pulls the shared pair, creating partial charges δ+ and δ−."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ion",
   "options": [
    "Polar covalent",
    "Ionic bond",
    "Hydrogen bond",
    "Octet and duet rules"
   ],
   "answer": 1,
   "why": "The arrow points to: Ionic bond. Electrostatic attraction between cations and anions in a crystal lattice; favoured by low ionisation energy and high lattice enthalpy."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "hb",
   "options": [
    "Polar covalent",
    "Hydrogen bond",
    "Octet and duet rules",
    "Ionic bond"
   ],
   "answer": 1,
   "why": "The arrow points to: Hydrogen bond. Weaker attraction between a δ+ hydrogen and a lone pair on a neighbouring electronegative atom; explains many properties of water."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "oct",
   "options": [
    "Octet and duet rules",
    "Hydrogen bond",
    "Ionic bond",
    "Molecular orbitals"
   ],
   "answer": 0,
   "why": "The arrow points to: Octet and duet rules. Atoms gain, lose or share electrons to reach 8 outer electrons (2 for H)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "mo",
   "options": [
    "Covalent bond",
    "Ionic bond",
    "Molecular orbitals",
    "Hydrogen bond"
   ],
   "answer": 2,
   "why": "The arrow points to: Molecular orbitals. Atomic orbitals of similar energy and symmetry combine: as many MOs as AOs, bonding and antibonding."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Define a chemical bond.",
   "back": "The attractive force holding atoms/ions together, stabilising them by an overall loss of energy."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Lewis theory of bonding?",
   "back": "Atom = kernel + outer shell (max 8); octet reached by gaining, losing or sharing valence electrons; Lewis symbols show valence electrons as dots."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Kossel theory?",
   "back": "Halogens gain and alkali metals lose electrons to reach noble-gas configuration; the ions attract electrostatically (electrovalent bond)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Octet and duet rules?",
   "back": "Atoms reach a noble-gas structure: 2 electrons for H (duet), 8 for periods 2-3 (octet)."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Four main bond types?",
   "back": "Covalent (shared pair), polar covalent (unequal sharing), hydrogen bond (weak δ+ H attraction), ionic (electrostatic between ions)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Conditions for ionic bonding?",
   "back": "Low ionisation energy (cation), high electron gain enthalpy (anion), high lattice enthalpy; usually metal + non-metal."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Steps to write a Lewis structure?",
   "back": "Count valence e⁻ (adjust for charge), draw skeleton with least electronegative atom central, place bonding pairs, complete octets with lone pairs or multiple bonds."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Principles of MO (LCAO) theory?",
   "back": "AOs of similar symmetry and energy combine; n AOs → n MOs (bonding and antibonding); σ axial, π lateral overlap; H₂ = σ1s²."
  },
  {
   "id": "img-cov",
   "type": "image",
   "target": "cov",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Covalent bond. Two atoms share a pair of electrons (a binding doublet), common in carbon compounds."
  },
  {
   "id": "img-pol",
   "type": "image",
   "target": "pol",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Polar covalent. The more electronegative atom pulls the shared pair, creating partial charges δ+ and δ−."
  },
  {
   "id": "img-ion",
   "type": "image",
   "target": "ion",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Ionic bond. Electrostatic attraction between cations and anions in a crystal lattice; favoured by low ionisation energy and high lattice enthalpy."
  },
  {
   "id": "img-hb",
   "type": "image",
   "target": "hb",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Hydrogen bond. Weaker attraction between a δ+ hydrogen and a lone pair on a neighbouring electronegative atom; explains many properties of water."
  },
  {
   "id": "img-oct",
   "type": "image",
   "target": "oct",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Octet and duet rules. Atoms gain, lose or share electrons to reach 8 outer electrons (2 for H)."
  },
  {
   "id": "img-mo",
   "type": "image",
   "target": "mo",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Molecular orbitals. Atomic orbitals of similar energy and symmetry combine: as many MOs as AOs, bonding and antibonding."
  }
 ],
 "deeper": [
  {
   "title": "Why CO needs a triple bond",
   "html": "<p>Carbon brings 4 valence electrons and oxygen 6, 10 in all. A single bond plus lone pairs completes oxygen's octet but leaves carbon with only 4 electrons around it. Moving lone pairs into shared pairs until both atoms have 8 gives a triple bond, which also explains why carbon monoxide is so stable and binds haemoglobin so tightly.</p><p class='src'>Source: the lecture's Lewis structure example.</p>"
  },
  {
   "title": "Why antibonding orbitals exist",
   "html": "<p>When two atomic orbitals combine, their waves can add in phase, building electron density between the nuclei (bonding, lower energy), or out of phase, leaving a node between them (antibonding, higher energy). Both always form together, which is why the number of molecular orbitals equals the number of atomic orbitals combined.</p><p class='src'>Source: the lecture's molecular orbital slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "Chemical bonds (Khan Academy)",
   "url": "https://www.khanacademy.org/science/chemistry/chemical-bonds",
   "kind": "Website",
   "why": "Ionic, covalent and polar bonds, Lewis structures.",
   "note": ""
  },
  {
   "title": "Molecular orbital theory (Chemistry LibreTexts)",
   "url": "https://chem.libretexts.org/",
   "kind": "Website",
   "why": "Search 'molecular orbital theory' for diagrams.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Chemical bonds (Khan Academy)",
   "url": "https://www.khanacademy.org/science/chemistry/chemical-bonds"
  },
  {
   "name": "Molecular orbital theory (Chemistry LibreTexts)",
   "url": "https://chem.libretexts.org/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["chem1-solutions"] = {
 "id": "chem1-solutions",
 "subject": "chem1",
 "group": "General chemistry",
 "title": "Chemistry in solutions",
 "sourceFile": "General chemistry 6+7: Chapter IV Chemistry in solutions (2022-2023) (General Chemistry, Prof. Tarik Ouchbani)",
 "sourceUrl": "https://drive.google.com/file/d/1RxHn5W7gkw1peYCCL72PvYf8gSYcPbO_/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>A <strong>solution</strong> is a <strong>homogeneous mixture</strong> of two or more components with particles <strong>smaller than 1 nm</strong>, forming a single phase (sugar or salt in water, soda water). The <strong>solvent</strong> dissolves the <strong>solute</strong> and is usually in greater amount; either can be solid, liquid or gas, giving <strong>nine types</strong> of solutions (air: gas in gas; alloys: solid solutions; tincture of iodine: iodine in alcohol). Properties: homogeneous, particles invisible, <strong>no light scattering</strong>, stable (no sedimentation), <strong>not separable by filtration</strong>.</p>"
  },
  {
   "id": "s1",
   "title": "Concentration",
   "html": "<p>'Dilute' and 'concentrated' are qualitative. Quantitative units: <strong>mass concentration</strong> (amount of solute per litre); <strong>ppm, ppb, ppt</strong> (for dilute aqueous solutions, 1 kg ≈ 1 L, so <strong>1 ppm = 1 mg/L</strong>, 1 ppb = 1 µg/L, 1 ppt = 1 ng/L); <strong>mass %</strong> (w/w); <strong>volume %</strong> (v/v); <strong>mass/volume %</strong> (w/v: grams per 100 mL, used in pharmacy); <strong>molarity</strong> (M = moles of solute per <strong>litre of solution</strong>; 0.25 M ethanol = 0.25 mol per litre; n = m/M_solute = C·V); <strong>molality</strong> (m = moles per <strong>kg of solvent</strong>); <strong>normality</strong> (gram equivalents per litre; <strong>N = molarity × valency</strong>, i.e. × number of H⁺ or OH⁻); <strong>mole fraction</strong> x_A = n_A/(n_A + n_B). Molarity depends on <strong>temperature</strong>; molality and mole fraction do not.</p>"
  },
  {
   "id": "s2",
   "title": "Dilution and safety",
   "html": "<p><strong>Dilution</strong> adds solvent to lower concentration; <strong>concentration</strong> removes solvent. Moles of solute stay constant, so <strong>M₁V₁ = M₂V₂</strong>. Safety: <strong>always add acid to water</strong>, never water to concentrated acid: mixing releases heat, and water poured into acid can boil and spatter concentrated acid; acid added to water warms a large volume of water only slightly.</p>"
  },
  {
   "id": "s3",
   "title": "Aqueous solutions, saturation, acids and bases",
   "html": "<p>An <strong>aqueous solution</strong> has water as solvent. The body is ~65% water (22% of bone, up to 76% of brain; ~45 L in a 70 kg person). Water is an <strong>ionising solvent</strong> transporting nutrients, wastes and gases; it dissolves <strong>hydrophilic</strong> substances (acids, bases, many salts), not hydrophobic ones (fats, oils). <strong>Electrolytes</strong> (NaCl, KCl) give conducting ions; <strong>non-electrolytes</strong> (sugar) dissolve as intact molecules and do not conduct. <strong>Solubility</strong> = maximum concentration at equilibrium under given conditions: <strong>saturated</strong> (= solubility), <strong>unsaturated</strong> (below), <strong>supersaturated</strong> (above; non-equilibrium, e.g. an unopened fizzy drink losing CO₂).</p><p>Water is <strong>amphoteric</strong> (proton donor and acceptor); about one molecule in half a billion dissociates: 2 H₂O ⇌ H₃O⁺ + OH⁻. <strong>Kw = [H₃O⁺][OH⁻] = 1.0 × 10⁻¹⁴</strong> at 25 °C. <strong>Neutral</strong>: both 10⁻⁷ M; <strong>acidic</strong>: [H₃O⁺] > 10⁻⁷; <strong>basic</strong>: [H₃O⁺] < 10⁻⁷. <strong>pH = −log[H₃O⁺]</strong> ('potential of hydrogen'): measures acidity; pH 7 neutral at 25 °C, below 7 acidic, above 7 basic.</p>"
  }
 ],
 "exam": [
  "Solution: homogeneous, particles < 1 nm, single phase, no light scattering, not filterable.",
  "Solvent dissolves solute; nine types by physical state.",
  "1 ppm = 1 mg/L (dilute aqueous).",
  "Molarity = mol/L solution (T-dependent); molality = mol/kg solvent (T-independent).",
  "Normality = molarity × valency (H⁺/OH⁻).",
  "n = m/M = C·V; dilution M₁V₁ = M₂V₂.",
  "Always add acid to water.",
  "Body ~65% water; electrolytes conduct, sugar does not.",
  "Saturated, unsaturated, supersaturated.",
  "Kw = 10⁻¹⁴ at 25 °C; neutral [H₃O⁺] = 10⁻⁷; pH = −log[H₃O⁺]."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Ways to express concentration",
   "caption": "Pick the unit for the job. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs>",
   "parts": {
    "mol": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"40\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Molarity M = n / V(L)",
      "(depends on T)"
     ],
     "lx": 140.0,
     "ly": 68.0
    },
    "molal": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"280\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Molality m = n / kg",
      "solvent (T-independent)"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "norm": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"520\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Normality N = M ×",
      "valency (H⁺ or OH⁻)"
     ],
     "lx": 620.0,
     "ly": 68.0
    },
    "pct": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"40\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "% w/w, % v/v,",
      "% w/v (per 100 mL)"
     ],
     "lx": 140.0,
     "ly": 198.0
    },
    "ppm": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"280\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "ppm = mg/L; ppb = µg/L;",
      "ppt = ng/L"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "dil": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"520\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Dilution:",
      "M₁V₁ = M₂V₂"
     ],
     "lx": 620.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "mol": [
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
    "molal": [
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
    "norm": [
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
    "pct": [
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
    "ppm": [
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
    "dil": [
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
   "root": "Chemistry in solutions",
   "branches": [
    [
     "Solutions",
     [
      "Homogeneous, < 1 nm",
      "Solvent + solute",
      "9 types"
     ]
    ],
    [
     "Concentration",
     [
      "ppm = mg/L",
      "% w/w, v/v, w/v",
      "Molarity, molality",
      "Normality, mole fraction"
     ]
    ],
    [
     "Dilution",
     [
      "M₁V₁ = M₂V₂",
      "Acid into water"
     ]
    ],
    [
     "Water",
     [
      "Body ~65%",
      "Electrolytes",
      "Saturation"
     ]
    ],
    [
     "Acids & bases",
     [
      "Kw = 10⁻¹⁴",
      "Neutral 10⁻⁷",
      "pH = −log[H₃O⁺]"
     ]
    ]
   ]
  }
 },
 "mcqs": [
  {
   "q": "A solution is a:",
   "options": [
    "Heterogeneous mixture",
    "Suspension",
    "Colloid that scatters light",
    "Homogeneous mixture with particles < 1 nm"
   ],
   "answer": 3,
   "why": "Single phase."
  },
  {
   "q": "In tincture of iodine, the solvent is:",
   "options": [
    "Iodine",
    "Air",
    "Alcohol",
    "Water"
   ],
   "answer": 2,
   "why": "Iodine is the solute."
  },
  {
   "q": "How many types of solutions exist by physical state?",
   "options": [
    "6",
    "9",
    "3",
    "12"
   ],
   "answer": 1,
   "why": "Any state as solute or solvent."
  },
  {
   "q": "Which property belongs to a true solution?",
   "options": [
    "It can be separated by filtration",
    "It scatters light",
    "Its particles do not sediment",
    "Particles are visible"
   ],
   "answer": 2,
   "why": "It is stable."
  },
  {
   "q": "For dilute aqueous solutions, 1 ppm equals:",
   "options": [
    "1 mg/L",
    "1 µg/L",
    "1 ng/L",
    "1 g/L"
   ],
   "answer": 0,
   "why": "Assuming 1 kg ≈ 1 L."
  },
  {
   "q": "Molarity is defined as:",
   "options": [
    "Equivalents per litre",
    "Moles of solute per litre of solution",
    "Moles per kg of solvent",
    "Grams per 100 mL"
   ],
   "answer": 1,
   "why": "M = n/V."
  },
  {
   "q": "Which unit is independent of temperature?",
   "options": [
    "Normality",
    "Mass concentration per litre",
    "Molality",
    "Molarity"
   ],
   "answer": 2,
   "why": "Also mole fraction."
  },
  {
   "q": "The normality of 1 M H₂SO₄ is:",
   "options": [
    "4 N",
    "1 N",
    "0.5 N",
    "2 N"
   ],
   "answer": 3,
   "why": "Two H⁺ per molecule."
  },
  {
   "q": "How much 2 M stock is needed to make 100 mL of 0.5 M solution?",
   "options": [
    "200 mL",
    "25 mL",
    "10 mL",
    "50 mL"
   ],
   "answer": 1,
   "why": "M₁V₁ = M₂V₂: 2 × V = 0.5 × 100."
  },
  {
   "q": "When diluting a strong acid you should:",
   "options": [
    "Add the acid to the water",
    "Add water to the acid",
    "Use boiling water",
    "Mix quickly with heat"
   ],
   "answer": 0,
   "why": "The heat is absorbed by the water."
  },
  {
   "q": "About what percentage of the human body is water?",
   "options": [
    "65%",
    "45%",
    "90%",
    "25%"
   ],
   "answer": 0,
   "why": "About 45 L in a 70 kg person."
  },
  {
   "q": "Which solute makes water conduct electricity?",
   "options": [
    "Oil",
    "Sugar",
    "Ethanol",
    "NaCl"
   ],
   "answer": 3,
   "why": "It is an electrolyte."
  },
  {
   "q": "A supersaturated solution:",
   "options": [
    "Is at equilibrium",
    "Is always solid",
    "Contains no solute",
    "Exceeds its solubility"
   ],
   "answer": 3,
   "why": "E.g. a fizzy drink before going flat."
  },
  {
   "q": "At 25 °C, Kw equals:",
   "options": [
    "10⁻¹⁴",
    "7",
    "10⁻¹",
    "10⁻⁷"
   ],
   "answer": 0,
   "why": "[H₃O⁺][OH⁻]."
  },
  {
   "q": "A solution with [H₃O⁺] = 10⁻⁴ M is:",
   "options": [
    "Neutral",
    "Acidic",
    "Saturated",
    "Basic"
   ],
   "answer": 1,
   "why": "pH 4."
  },
  {
   "q": "pH is defined as:",
   "options": [
    "[H₃O⁺] × 10⁷",
    "Kw / [H₃O⁺]",
    "log[OH⁻]",
    "−log[H₃O⁺]"
   ],
   "answer": 3,
   "why": "Potential of hydrogen."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "mol",
   "options": [
    "Molality",
    "Percentages",
    "Molarity",
    "Normality"
   ],
   "answer": 2,
   "why": "The arrow points to: Molarity. Moles of solute per litre of solution; n = C·V; varies with temperature."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "molal",
   "options": [
    "Percentages",
    "Molality",
    "Molarity",
    "Trace units"
   ],
   "answer": 1,
   "why": "The arrow points to: Molality. Moles of solute per kg of solvent; independent of temperature, like mole fraction."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "norm",
   "options": [
    "Trace units",
    "Normality",
    "Molality",
    "Percentages"
   ],
   "answer": 1,
   "why": "The arrow points to: Normality. Gram equivalents per litre: N = M × number of H⁺ or OH⁻ exchanged."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pct",
   "options": [
    "Percentages",
    "Molality",
    "Trace units",
    "Normality"
   ],
   "answer": 0,
   "why": "The arrow points to: Percentages. Mass %, volume %, and mass/volume % (pharmacy: grams per 100 mL)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ppm",
   "options": [
    "Trace units",
    "Normality",
    "Percentages",
    "Dilution"
   ],
   "answer": 0,
   "why": "The arrow points to: Trace units. For dilute aqueous solutions, 1 kg ≈ 1 L: 1 ppm = 1 mg/L."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "dil",
   "options": [
    "Normality",
    "Molarity",
    "Dilution",
    "Percentages"
   ],
   "answer": 2,
   "why": "The arrow points to: Dilution. Moles of solute are constant, so M₁V₁ = M₂V₂. Always add acid to water."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Define a solution and its properties.",
   "back": "Homogeneous mixture, particles < 1 nm, one phase; no light scattering, stable, not separable by filtration."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Solvent vs solute?",
   "back": "Solvent dissolves (usually major component); solute is dissolved; any state for either (9 types)."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "ppm, ppb, ppt?",
   "back": "Parts per million/billion/trillion; for dilute aqueous: 1 ppm = 1 mg/L, 1 ppb = 1 µg/L, 1 ppt = 1 ng/L."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Molarity vs molality?",
   "back": "Molarity: mol solute per L solution (T-dependent). Molality: mol solute per kg solvent (T-independent)."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Normality?",
   "back": "Gram equivalents per litre; N = M × valency (number of H⁺ or OH⁻)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Dilution formula and safety?",
   "back": "M₁V₁ = M₂V₂ (moles constant); always add acid to water."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Electrolytes vs non-electrolytes?",
   "back": "Electrolytes (NaCl, KCl) dissociate into ions and conduct; non-electrolytes (sugar) stay intact, no conduction."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Saturated, unsaturated, supersaturated?",
   "back": "At solubility; below it; above it (non-equilibrium)."
  },
  {
   "id": "x8",
   "type": "text",
   "front": "Water ionisation and pH?",
   "back": "2 H₂O ⇌ H₃O⁺ + OH⁻; Kw = 10⁻¹⁴ at 25 °C; neutral 10⁻⁷ M; pH = −log[H₃O⁺]."
  },
  {
   "id": "img-mol",
   "type": "image",
   "target": "mol",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Molarity. Moles of solute per litre of solution; n = C·V; varies with temperature."
  },
  {
   "id": "img-molal",
   "type": "image",
   "target": "molal",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Molality. Moles of solute per kg of solvent; independent of temperature, like mole fraction."
  },
  {
   "id": "img-norm",
   "type": "image",
   "target": "norm",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Normality. Gram equivalents per litre: N = M × number of H⁺ or OH⁻ exchanged."
  },
  {
   "id": "img-pct",
   "type": "image",
   "target": "pct",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Percentages. Mass %, volume %, and mass/volume % (pharmacy: grams per 100 mL)."
  },
  {
   "id": "img-ppm",
   "type": "image",
   "target": "ppm",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Trace units. For dilute aqueous solutions, 1 kg ≈ 1 L: 1 ppm = 1 mg/L."
  },
  {
   "id": "img-dil",
   "type": "image",
   "target": "dil",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Dilution. Moles of solute are constant, so M₁V₁ = M₂V₂. Always add acid to water."
  }
 ],
 "deeper": [
  {
   "title": "Why add acid to water",
   "html": "<p>Dissolving a strong acid releases a lot of heat. If a little water is poured onto concentrated acid, that small amount of water can boil instantly and throw droplets of hot concentrated acid out of the container. Adding acid slowly to a large volume of water spreads the heat through the water, which only warms a little.</p><p class='src'>Source: the lecture's dilution safety slide.</p>"
  },
  {
   "title": "Why molality is used for precise work",
   "html": "<p>A litre of solution expands or contracts with temperature, so molarity changes slightly as the lab warms or cools. Molality uses the mass of solvent, which does not change with temperature, so it stays constant. That is why properties such as freezing-point depression are expressed with molality.</p><p class='src'>Source: the lecture's comparison of concentration units.</p>"
  }
 ],
 "resources": [
  {
   "title": "Solutions and concentration (Khan Academy)",
   "url": "https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces/mixtures-and-solutions",
   "kind": "Website",
   "why": "Molarity, dilution and solubility.",
   "note": ""
  },
  {
   "title": "Acids, bases and pH (Khan Academy)",
   "url": "https://www.khanacademy.org/science/chemistry/acids-and-bases-topic",
   "kind": "Website",
   "why": "Kw, pH and acid-base basics.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Solutions and concentration (Khan Academy)",
   "url": "https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces/mixtures-and-solutions"
  },
  {
   "name": "Acids, bases and pH (Khan Academy)",
   "url": "https://www.khanacademy.org/science/chemistry/acids-and-bases-topic"
  }
 ],
 "verified": "22 Sep 2026"
};
