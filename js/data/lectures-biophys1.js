/* biophys1: 6 lectures, merged for upload. Edit the source files, not this one. */
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["biophys1-radioactivity"] = {
 "id": "biophys1-radioactivity",
 "subject": "biophys1",
 "group": "Biophysics",
 "title": "Radioactivity: general concepts",
 "sourceFile": "1 Radioactivity general concepts (2025-2026) (Biophysics, Pr. Hasnae Guerrouj)",
 "sourceUrl": "https://drive.google.com/file/d/1n0zt6m-wqy8n-fsQRvrvhXsAtbsF-ZIG/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>Radioactivity is the <strong>spontaneous</strong> transformation of an <strong>unstable nucleus</strong> that emits <strong>ionising radiation</strong> until it becomes stable. It underlies nuclear medicine imaging (PET, scintigraphy) and radionuclide therapy.</p>"
  },
  {
   "id": "s1",
   "title": "Atoms, nuclides and units",
   "html": "<p>Atom: nucleus (protons +1.602 × 10⁻¹⁹ C, neutrons) with electrons on <strong>shells K, L, M…</strong> (Bohr: shell n holds up to <strong>2n²</strong> electrons; binding energy Eₙ is negative). <sup>A</sup><sub>Z</sub>X: <strong>Z</strong> (protons) determines <strong>chemical</strong> properties; <strong>A</strong> (nucleons) determines <strong>physical</strong> properties. <strong>Isotopes</strong>: same Z, different A (¹²³I, ¹²⁵I, ¹³¹I). <strong>Isobars</strong>: same A, different Z (⁶⁰Zn, ⁶⁰Cu, ⁶⁰Ni). <strong>Isotones</strong>: same N. <strong>Isomers</strong>: same nucleus in different energy states (<strong>⁹⁹ᵐTc</strong> vs ⁹⁹Tc). Energy: <strong>1 eV = 1.602 × 10⁻¹⁹ J</strong> (keV, MeV common). <strong>E = mc²</strong>: <strong>1 u = 1.66 × 10⁻²⁴ g ≈ 931 MeV/c²</strong>; electron mass = <strong>0.511 MeV</strong>. <strong>Ionisation</strong>: radiation ejects an electron (positive ion formed); <strong>excitation</strong>: it only moves an electron to an outer shell.</p>"
  },
  {
   "id": "s2",
   "title": "Types of decay",
   "html": "<p>An unstable nucleus undergoes <strong>disintegration</strong> (becomes another element) and/or <strong>de-excitation</strong>; charge, energy and momentum are conserved. <strong>β⁻</strong> (excess neutrons): n → p + <strong>e⁻ + antineutrino</strong> (energy shared; the antineutrino is practically undetectable); used in <strong>targeted radionuclide (metabolic) therapy</strong>. <strong>β⁺</strong> (excess protons): p → n + <strong>positron</strong> + neutrino, possible only if the energy difference exceeds <strong>1.022 MeV</strong> (2 × 0.511); the positron slows and <strong>annihilates</strong> with an electron into <strong>two 511 keV photons at 180°</strong>: the basis of <strong>PET</strong>. <strong>Electron capture</strong> (excess protons, energy below 1.022 MeV, heavy nuclei): a proton captures a K (then L, M) electron, Z → Z − 1; the vacancy is filled with emission of <strong>fluorescence X-rays</strong> or <strong>Auger electrons</strong>. <strong>α decay</strong> (heavy nuclei, N > 126, strong proton repulsion): emission of a <strong>helium nucleus</strong> (2p + 2n; 4-9 MeV). <strong>γ emission</strong>: an excited nucleus releases photons without changing Z (E = hν), immediately or delayed (<strong>isomeric transition</strong>).</p>"
  },
  {
   "id": "s3",
   "title": "Decay law and activity",
   "html": "<p>Decay is <strong>random</strong> for one nucleus, but the probability per unit time, the <strong>radioactive constant λ</strong>, is characteristic of the nuclide and independent of physical or chemical conditions or age. <strong>N(t) = N₀·e^(−λt)</strong>; <strong>activity</strong> (disintegrations per second) <strong>A(t) = A₀·e^(−λt)</strong>. Units: <strong>becquerel (Bq)</strong> = 1 disintegration/s (MBq in practice); <strong>curie (Ci)</strong> = <strong>3.7 × 10¹⁰ Bq</strong> (activity of 1 g of radium); 1 mCi = 37 MBq. <strong>Half-life T</strong> = time to halve activity: <strong>T = ln2/λ = 0.693/λ</strong>; ranges from fractions of a second to billions of years (³²P 14.3 days, tritium 12.3 years, ²³⁸U 4.5 × 10⁹ years, <strong>⁹⁹ᵐTc 6 h</strong>). After n half-lives <strong>A = A₀/2ⁿ</strong>; after <strong>10 half-lives</strong> ≈ A₀/1024, considered negligible; for any time A = A₀·e^(−t·ln2/T).</p>"
  }
 ],
 "exam": [
  "Radioactivity: spontaneous decay of unstable nuclei emitting ionising radiation.",
  "Z → chemical properties; A → physical properties.",
  "Isotopes (same Z), isobars (same A), isotones (same N), isomers (energy states: ⁹⁹ᵐTc).",
  "1 eV = 1.602×10⁻¹⁹ J; 1 u ≈ 931 MeV/c²; mₑ = 0.511 MeV.",
  "Ionisation ejects an electron; excitation moves it outward.",
  "β⁻: excess n → e⁻ + antineutrino (therapy).",
  "β⁺: excess p, > 1.022 MeV → annihilation, two 511 keV photons at 180° (PET).",
  "Electron capture: K electron captured, X-rays or Auger electrons.",
  "α: heavy nuclei → ⁴He; γ: de-excitation, Z unchanged.",
  "A = A₀·e^(−λt); T = 0.693/λ; 1 Ci = 3.7×10¹⁰ Bq; after 10 T ≈ A₀/1024."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Radioactive transformations",
   "caption": "Why a nucleus decays and what it emits. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs>",
   "parts": {
    "bm": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "β⁻: excess neutrons",
      "→ e⁻ + antineutrino"
     ],
     "lx": 105.0,
     "ly": 68.0
    },
    "bp": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"200\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "β⁺: excess protons",
      "→ positron (PET)"
     ],
     "lx": 285.0,
     "ly": 68.0
    },
    "ec": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"380\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Electron capture:",
      "→ X-rays, Auger e⁻"
     ],
     "lx": 465.0,
     "ly": 68.0
    },
    "a": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"560\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "α: heavy nuclei",
      "→ ⁴He nucleus"
     ],
     "lx": 645.0,
     "ly": 68.0
    },
    "g": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"120\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "γ de-excitation:",
      "photon, Z unchanged"
     ],
     "lx": 230.0,
     "ly": 198.0
    },
    "law": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"420\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "N(t) = N₀·e^(−λt);",
      "T = 0.693 / λ"
     ],
     "lx": 530.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "bm": [
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
    "bp": [
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
    "ec": [
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
    "a": [
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
    "g": [
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
    "law": [
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
   "root": "Radioactivity",
   "branches": [
    [
     "Nuclides",
     [
      "Z: chemistry, A: physics",
      "Isotopes, isobars, isotones, isomers"
     ]
    ],
    [
     "Units",
     [
      "1 eV = 1.6×10⁻¹⁹ J",
      "1 u = 931 MeV",
      "e⁻ = 0.511 MeV"
     ]
    ],
    [
     "Decays",
     [
      "β⁻: therapy",
      "β⁺: PET (2 × 511 keV)",
      "Electron capture: X-rays",
      "α: ⁴He",
      "γ: de-excitation"
     ]
    ],
    [
     "Decay law",
     [
      "A = A₀e^(−λt)",
      "T = 0.693/λ",
      "A₀/2ⁿ",
      "Bq, Ci = 3.7×10¹⁰ Bq"
     ]
    ]
   ]
  }
 },
 "mcqs": [
  {
   "q": "Radioactivity originates from:",
   "options": [
    "Chemical reactions",
    "Unstable electron shells",
    "Temperature",
    "An unstable nucleus"
   ],
   "answer": 3,
   "why": "A spontaneous phenomenon."
  },
  {
   "q": "Which number determines chemical properties?",
   "options": [
    "N",
    "A − Z",
    "Z",
    "A"
   ],
   "answer": 2,
   "why": "A determines physical properties."
  },
  {
   "q": "⁹⁹ᵐTc and ⁹⁹Tc are:",
   "options": [
    "Isotones",
    "Isomers",
    "Isobars",
    "Isotopes"
   ],
   "answer": 1,
   "why": "Same nucleus, different energy states."
  },
  {
   "q": "Isobars have the same:",
   "options": [
    "Z",
    "Energy state",
    "A",
    "N"
   ],
   "answer": 2,
   "why": "E.g. ⁶⁰Zn, ⁶⁰Cu, ⁶⁰Ni."
  },
  {
   "q": "1 eV equals:",
   "options": [
    "1.602×10⁻¹⁹ J",
    "1 J",
    "3.7×10¹⁰ J",
    "931 MeV"
   ],
   "answer": 0,
   "why": "Energy of an electron through 1 V."
  },
  {
   "q": "The rest mass energy of an electron is:",
   "options": [
    "1.022 MeV",
    "0.511 MeV",
    "931 MeV",
    "13.6 eV"
   ],
   "answer": 1,
   "why": "1 u ≈ 931 MeV/c²."
  },
  {
   "q": "β⁻ decay occurs when a nucleus has:",
   "options": [
    "Too many electrons",
    "High Z only",
    "Excess neutrons",
    "Excess protons"
   ],
   "answer": 2,
   "why": "Emits an electron and an antineutrino."
  },
  {
   "q": "PET imaging is based on:",
   "options": [
    "Electron capture",
    "β⁻ decay",
    "α decay",
    "β⁺ decay and annihilation"
   ],
   "answer": 3,
   "why": "Two 511 keV photons at 180°."
  },
  {
   "q": "β⁺ decay requires an energy difference above:",
   "options": [
    "931 MeV",
    "1.022 MeV",
    "13.6 eV",
    "0.511 MeV"
   ],
   "answer": 1,
   "why": "Twice the electron mass."
  },
  {
   "q": "After electron capture, the atom emits:",
   "options": [
    "X-rays or Auger e⁻",
    "α particles",
    "Neutrinos only",
    "Positrons"
   ],
   "answer": 0,
   "why": "When the K vacancy is filled."
  },
  {
   "q": "An α particle is:",
   "options": [
    "A helium nucleus",
    "A neutron",
    "An electron",
    "A photon"
   ],
   "answer": 0,
   "why": "2 protons + 2 neutrons."
  },
  {
   "q": "γ emission changes the atomic number by:",
   "options": [
    "−1",
    "+1",
    "−2",
    "0"
   ],
   "answer": 3,
   "why": "It is de-excitation."
  },
  {
   "q": "The half-life is related to λ by:",
   "options": [
    "T = λ/0.693",
    "T = e^λ",
    "T = λ²",
    "T = 0.693/λ"
   ],
   "answer": 3,
   "why": "T = ln2/λ."
  },
  {
   "q": "1 curie equals:",
   "options": [
    "3.7×10¹⁰ Bq",
    "10⁶ Bq",
    "1 Bq",
    "37 MBq"
   ],
   "answer": 0,
   "why": "Activity of 1 g of radium."
  },
  {
   "q": "After 3 half-lives, the remaining activity is:",
   "options": [
    "A₀/3",
    "A₀/8",
    "A₀/6",
    "A₀/9"
   ],
   "answer": 1,
   "why": "A₀/2³."
  },
  {
   "q": "The half-life of ⁹⁹ᵐTc is about:",
   "options": [
    "12 years",
    "4.5 billion years",
    "14 days",
    "6 hours"
   ],
   "answer": 3,
   "why": "Ideal for imaging."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "bm",
   "options": [
    "β⁺ decay",
    "Electron capture",
    "β⁻ decay",
    "α decay"
   ],
   "answer": 2,
   "why": "The arrow points to: β⁻ decay. Neutron → proton; emits an electron and an antineutrino sharing the energy; used in targeted radionuclide therapy."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "bp",
   "options": [
    "β⁻ decay",
    "β⁺ decay",
    "γ emission",
    "α decay"
   ],
   "answer": 1,
   "why": "The arrow points to: β⁺ decay. Proton → neutron; the positron annihilates with an electron into two 511 keV photons at 180°: the basis of PET."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ec",
   "options": [
    "α decay",
    "Electron capture",
    "β⁺ decay",
    "γ emission"
   ],
   "answer": 1,
   "why": "The arrow points to: Electron capture. A proton captures a K-shell electron (Z → Z − 1); the vacancy is filled with emission of fluorescence X-rays or Auger electrons; favoured in heavy nuclei with < 1.022 MeV."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "a",
   "options": [
    "α decay",
    "β⁺ decay",
    "γ emission",
    "Electron capture"
   ],
   "answer": 0,
   "why": "The arrow points to: α decay. Heavy nuclei (N > 126) emit a helium nucleus (2 p + 2 n)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "g",
   "options": [
    "γ emission",
    "Electron capture",
    "α decay",
    "Decay law"
   ],
   "answer": 0,
   "why": "The arrow points to: γ emission. An excited nucleus left after decay releases photons; isomeric if delayed (e.g. ⁹⁹ᵐTc)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "law",
   "options": [
    "Electron capture",
    "β⁻ decay",
    "Decay law",
    "α decay"
   ],
   "answer": 2,
   "why": "The arrow points to: Decay law. Activity A(t) = A₀·e^(−λt); after n half-lives A = A₀/2ⁿ; after 10 half-lives ≈ A₀/1024."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Isotopes, isobars, isotones, isomers?",
   "back": "Isotopes: same Z. Isobars: same A. Isotones: same N. Isomers: same nucleus, different energy states (⁹⁹ᵐTc)."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Key energy equivalences?",
   "back": "1 eV = 1.602×10⁻¹⁹ J; 1 u ≈ 931 MeV/c²; electron 0.511 MeV."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Ionisation vs excitation?",
   "back": "Ionisation: electron ejected, ion formed. Excitation: electron moved to an outer shell."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "β⁻ decay?",
   "back": "Excess neutrons; n → p + e⁻ + antineutrino; energy shared; used in radionuclide therapy."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "β⁺ decay and PET?",
   "back": "Excess protons, > 1.022 MeV; positron annihilates with an electron → two 511 keV photons at 180°."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Electron capture?",
   "back": "Excess protons, low energy, heavy nuclei; K electron captured (Z − 1); X-ray fluorescence or Auger electrons."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "α and γ?",
   "back": "α: heavy nuclei (N > 126) emit ⁴He. γ: de-excitation photons, Z unchanged; isomeric if delayed."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Decay law and units?",
   "back": "N = N₀e^(−λt), A = A₀e^(−λt); Bq = 1 decay/s; 1 Ci = 3.7×10¹⁰ Bq; T = 0.693/λ; after n T: A₀/2ⁿ."
  },
  {
   "id": "img-bm",
   "type": "image",
   "target": "bm",
   "front": "What is at the arrow, and why does it matter?",
   "back": "β⁻ decay. Neutron → proton; emits an electron and an antineutrino sharing the energy; used in targeted radionuclide therapy."
  },
  {
   "id": "img-bp",
   "type": "image",
   "target": "bp",
   "front": "What is at the arrow, and why does it matter?",
   "back": "β⁺ decay. Proton → neutron; the positron annihilates with an electron into two 511 keV photons at 180°: the basis of PET."
  },
  {
   "id": "img-ec",
   "type": "image",
   "target": "ec",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Electron capture. A proton captures a K-shell electron (Z → Z − 1); the vacancy is filled with emission of fluorescence X-rays or Auger electrons; favoured in heavy nuclei with < 1.022 MeV."
  },
  {
   "id": "img-a",
   "type": "image",
   "target": "a",
   "front": "What is at the arrow, and why does it matter?",
   "back": "α decay. Heavy nuclei (N > 126) emit a helium nucleus (2 p + 2 n)."
  },
  {
   "id": "img-g",
   "type": "image",
   "target": "g",
   "front": "What is at the arrow, and why does it matter?",
   "back": "γ emission. An excited nucleus left after decay releases photons; isomeric if delayed (e.g. ⁹⁹ᵐTc)."
  },
  {
   "id": "img-law",
   "type": "image",
   "target": "law",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Decay law. Activity A(t) = A₀·e^(−λt); after n half-lives A = A₀/2ⁿ; after 10 half-lives ≈ A₀/1024."
  }
 ],
 "deeper": [
  {
   "title": "Why PET sees two photons at once",
   "html": "<p>A positron travels only a millimetre or so before meeting an electron; both vanish and their mass becomes two 511 keV photons flying in exactly opposite directions. A ring of detectors registers pairs arriving at the same instant, and the line joining them passes through the point of emission, which is how PET localises where a tracer such as ¹⁸F-FDG has accumulated.</p><p class='src'>Source: the lecture's β⁺ decay and annihilation slide.</p>"
  },
  {
   "title": "Why ⁹⁹ᵐTc is the workhorse of nuclear medicine",
   "html": "<p>Its 6-hour half-life is long enough to prepare the tracer and image the patient but short enough that little radiation remains afterwards, and as a metastable isomer it emits a gamma photon with no charged particles, giving good images with a low dose. After 10 half-lives (~2.5 days) its activity is about a thousandth of the initial level.</p><p class='src'>Source: the lecture's isomer and half-life slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "Radioactivity basics (Khan Academy)",
   "url": "https://www.khanacademy.org/science/physics/quantum-physics/in-in-nuclear-physics/a/types-of-decay",
   "kind": "Article",
   "why": "α, β and γ decay explained.",
   "note": ""
  },
  {
   "title": "Radiation basics (US NRC)",
   "url": "https://www.nrc.gov/about-nrc/radiation/health-effects/radiation-basics.html",
   "kind": "Website",
   "why": "Types of radiation and units.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Radioactivity basics (Khan Academy)",
   "url": "https://www.khanacademy.org/science/physics/quantum-physics/in-in-nuclear-physics/a/types-of-decay"
  },
  {
   "name": "Radiation basics (US NRC)",
   "url": "https://www.nrc.gov/about-nrc/radiation/health-effects/radiation-basics.html"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["biophys1-interactions"] = {
 "id": "biophys1-interactions",
 "subject": "biophys1",
 "group": "Biophysics",
 "title": "Radiation-matter interactions, detection and dosimetry",
 "sourceFile": "2 Interactions, detection, dosimetry (Biophysics, Pr. Hasnae Guerrouj)",
 "sourceUrl": "https://drive.google.com/file/d/1SlZVPY9R8CUG7Fp8oyIjzAtp-gpcJOzh/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>Ionising radiations are <strong>directly ionising</strong> (charged particles: light β⁻, β⁺ electrons; heavy α, protons, fission fragments) or <strong>indirectly ionising</strong> (X and γ photons, neutrons). How they deposit energy explains radiotherapy, imaging, detectors and radiation protection.</p>"
  },
  {
   "id": "s1",
   "title": "Charged particles",
   "html": "<p>Energy transferred depends on the particle (nature, mass, energy) and the material (composition, density, Z). <strong>Heavy particles (α)</strong> interact mostly with electrons with nearly straight paths. <strong>Linear energy transfer (LET)</strong> = energy lost per unit length, LET ∝ q²nZ/v²: it rises as the particle slows; <strong>linear ionisation density (LID)</strong> = ion pairs per unit length (LET = W × LID). The <strong>Bragg curve</strong>: small losses at first, rising as the particle slows, with a <strong>maximum (Bragg peak)</strong> just before it stops. Radiotherapy (protontherapy) tunes the energy to place the peak in the tumour, sparing healthy tissue. α particles are stopped by a few cm of air, paper or the skin surface: little external risk, but dangerous if inhaled or ingested (<strong>internal exposure</strong>). <strong>Electrons</strong>: electron-electron collisions cause <strong>ionisation</strong> or <strong>excitation</strong> along a broken path; deflection by the nucleus produces <strong>braking X-rays (Bremsstrahlung)</strong>, used in the <strong>Coolidge X-ray tube</strong> and linear accelerators.</p>"
  },
  {
   "id": "s2",
   "title": "Photons",
   "html": "<p><strong>X-rays</strong> have electronic origin (Bremsstrahlung, fluorescence); <strong>γ-rays</strong> come from the nucleus (de-excitation) or annihilation. Photons are attenuated exponentially: <strong>N = N₀·e^(−µx)</strong>, µ = linear attenuation coefficient (depends on material Z and density and photon energy; high-energy photons are less attenuated; dense, high-Z materials attenuate more). <strong>Half-value layer X½ = ln2/µ</strong>: each X½ halves the beam (N₀/2, /4, /8…). Mechanisms: <strong>photoelectric effect</strong> (photon absorbed by a bound electron, mostly K shell, if its energy exceeds the binding energy; the photoelectron gets E − E_binding; then fluorescence X-rays or Auger electrons), <strong>Compton effect</strong> (on a loosely bound outer electron: the electron is ejected and a lower-energy photon is scattered), and <strong>materialisation</strong> (pair production: photon above 1.022 MeV → electron + positron).</p>"
  },
  {
   "id": "s3",
   "title": "Detection and dosimetry",
   "html": "<p>Detectors turn invisible radiation into a measurable signal via ionisation or excitation. Characteristics: <strong>detection efficiency</strong> (intrinsic: detected/received; extrinsic: detected/emitted), <strong>background</strong> (count without a source: cosmic, telluric, detector materials, electronics), <strong>energy resolution</strong> (ability to separate close energies; NaI ≈ 5-10% at ⁹⁹ᵐTc 140 keV, semiconductors ≈ 1%) and <strong>dead time</strong> (e.g. ~200 µs for a Geiger-Müller tube). <strong>Scintillation detectors</strong>: a NaI crystal emits visible light when excited, converted by photomultipliers into a signal: <strong>gamma camera</strong> (scintigraphy, SPECT), PET, whole-body counter (internal contamination). <strong>Gas detectors</strong>: ions collected between electrodes; by voltage: recombination, <strong>ionisation chamber</strong> (dose calibrator, survey meter), <strong>proportional counter</strong> (surface contamination), limited proportionality, <strong>Geiger-Müller</strong>. <strong>Individual dosimetry</strong>: passive (film, <strong>TLD</strong> thermoluminescent, <strong>OSL</strong> optically stimulated luminescence) and active electronic dosimeters with real-time reading.</p>"
  }
 ],
 "exam": [
  "Direct ionising: charged particles (α, β, p). Indirect: photons, neutrons.",
  "LET = energy lost per unit length; rises as particles slow.",
  "Bragg peak: maximum dose at the end of range (protontherapy).",
  "α: stopped by paper or skin; dangerous internally.",
  "Electrons: ionisation, excitation, Bremsstrahlung (X-ray tube).",
  "N = N₀e^(−µx); X½ = ln2/µ.",
  "Photoelectric: photon absorbed by K electron; Compton: outer electron + scattered photon; pair production > 1.022 MeV.",
  "Detector qualities: efficiency, background, energy resolution, dead time.",
  "Scintillation (NaI + photomultiplier): gamma camera, PET.",
  "Gas detectors: ionisation chamber, proportional counter, Geiger-Müller; dosimeters: film, TLD, OSL, electronic."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "How ionising radiation interacts with matter",
   "caption": "Direct vs indirect ionisation. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"720\" y1=\"70\" x2=\"40\" y2=\"200\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"720\" y1=\"70\" x2=\"280\" y2=\"200\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"620\" y1=\"100\" x2=\"620\" y2=\"170\"/>",
   "parts": {
    "heavy": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"40\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Heavy charged (α, p):",
      "straight, Bragg peak"
     ],
     "lx": 140.0,
     "ly": 68.0
    },
    "light": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"280\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Electrons (β): ionisation,",
      "excitation, Bremsstrahlung"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "ph": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"520\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Photons (X, γ): indirect,",
      "attenuated N = N₀e^(−µx)"
     ],
     "lx": 620.0,
     "ly": 68.0
    },
    "pe": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"40\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Photoelectric: K electron",
      "ejected, photon absorbed"
     ],
     "lx": 140.0,
     "ly": 198.0
    },
    "co": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"280\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Compton: outer electron",
      "+ scattered photon"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "pp": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"520\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Materialisation: photon",
      "→ e⁻ + e⁺ (> 1.022 MeV)"
     ],
     "lx": 620.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "heavy": [
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
    "light": [
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
    "ph": [
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
    "pe": [
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
    "co": [
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
    "pp": [
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
   "q": "Which radiation is indirectly ionising?",
   "options": [
    "α particles",
    "β⁻ electrons",
    "Protons",
    "X-ray photons"
   ],
   "answer": 3,
   "why": "Also γ-rays and neutrons."
  },
  {
   "q": "LET increases when a charged particle:",
   "options": [
    "Enters vacuum",
    "Loses charge",
    "Slows down",
    "Speeds up"
   ],
   "answer": 2,
   "why": "LET ∝ 1/v²."
  },
  {
   "q": "The Bragg peak is located:",
   "options": [
    "At the end of range",
    "At the entry point",
    "Nowhere",
    "Beyond the range"
   ],
   "answer": 0,
   "why": "Exploited in protontherapy."
  },
  {
   "q": "α particles are most dangerous by:",
   "options": [
    "External exposure",
    "Shielding",
    "Internal exposure",
    "Distance"
   ],
   "answer": 2,
   "why": "Stopped by paper or skin."
  },
  {
   "q": "Bremsstrahlung is:",
   "options": [
    "Braking radiation",
    "Fluorescence",
    "Annihilation",
    "α emission"
   ],
   "answer": 0,
   "why": "Used in X-ray tubes."
  },
  {
   "q": "Photon attenuation follows:",
   "options": [
    "N = N₀/x²",
    "N = N₀e^(−µx)",
    "N = N₀ − µx",
    "N = µx"
   ],
   "answer": 1,
   "why": "µ = linear attenuation coefficient."
  },
  {
   "q": "The half-value layer equals:",
   "options": [
    "2µ",
    "µ/ln2",
    "ln2/µ",
    "µ²"
   ],
   "answer": 2,
   "why": "Thickness halving the intensity."
  },
  {
   "q": "After 3 half-value layers, intensity is:",
   "options": [
    "N₀/3",
    "N₀/9",
    "N₀/6",
    "N₀/8"
   ],
   "answer": 3,
   "why": "N₀/2³."
  },
  {
   "q": "In the photoelectric effect, the photon:",
   "options": [
    "Creates a pair",
    "Is completely absorbed",
    "Is scattered",
    "Passes unchanged"
   ],
   "answer": 1,
   "why": "By a bound (K) electron."
  },
  {
   "q": "The Compton effect involves:",
   "options": [
    "An outer electron",
    "A tightly bound K electron",
    "A nucleus",
    "A positron"
   ],
   "answer": 0,
   "why": "Partial energy transfer."
  },
  {
   "q": "Pair production requires photon energy above:",
   "options": [
    "1.022 MeV",
    "13.6 eV",
    "0.511 MeV",
    "140 keV"
   ],
   "answer": 0,
   "why": "Electron + positron."
  },
  {
   "q": "Energy resolution of a detector describes:",
   "options": [
    "Its dead time",
    "Its background",
    "Its size",
    "Separating close energies"
   ],
   "answer": 3,
   "why": "Semiconductors ≈ 1%."
  },
  {
   "q": "A gamma camera uses:",
   "options": [
    "Gas ionisation",
    "Film",
    "TLD",
    "NaI scintillation"
   ],
   "answer": 3,
   "why": "Scintigraphy, SPECT."
  },
  {
   "q": "The Geiger-Müller tube's dead time is about:",
   "options": [
    "200 µs",
    "2 s",
    "2 min",
    "2 ns"
   ],
   "answer": 0,
   "why": "No new events recorded during it."
  },
  {
   "q": "Which is a passive dosimeter?",
   "options": [
    "Electronic dosimeter",
    "Thermoluminescent dosimeter (TLD)",
    "Ionisation chamber",
    "Geiger counter"
   ],
   "answer": 1,
   "why": "Also film and OSL."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "heavy",
   "options": [
    "Photons",
    "Electrons",
    "Photoelectric effect",
    "Heavy charged particles"
   ],
   "answer": 3,
   "why": "The arrow points to: Heavy charged particles. Interact mainly with electrons; energy loss (LET) rises as they slow, peaking at the end of range (Bragg peak)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "light",
   "options": [
    "Compton effect",
    "Heavy charged particles",
    "Electrons",
    "Photoelectric effect"
   ],
   "answer": 2,
   "why": "The arrow points to: Electrons. Ionise or excite atomic electrons along a broken path; deflected by nuclei they emit braking X-rays (Bremsstrahlung), used in X-ray tubes."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ph",
   "options": [
    "Electrons",
    "Photons",
    "Compton effect",
    "Photoelectric effect"
   ],
   "answer": 1,
   "why": "The arrow points to: Photons. No mass or charge; interact randomly; attenuation grows with density and Z and falls with energy."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pe",
   "options": [
    "Electrons",
    "Photoelectric effect",
    "Photons",
    "Compton effect"
   ],
   "answer": 1,
   "why": "The arrow points to: Photoelectric effect. Photon fully absorbed by a bound (mostly K) electron, which leaves; vacancy filling gives fluorescence X-rays or Auger electrons."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "co",
   "options": [
    "Compton effect",
    "Materialisation",
    "Photoelectric effect",
    "Photons"
   ],
   "answer": 0,
   "why": "The arrow points to: Compton effect. Photon transfers part of its energy to a loosely bound outer electron and is scattered with lower energy."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pp",
   "options": [
    "Photoelectric effect",
    "Heavy charged particles",
    "Materialisation",
    "Photons"
   ],
   "answer": 2,
   "why": "The arrow points to: Materialisation. High-energy photon near a nucleus creates an electron-positron pair."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Directly vs indirectly ionising radiation?",
   "back": "Direct: charged particles (β⁻, β⁺, α, protons). Indirect: photons (X, γ) and neutrons."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "LET and LID?",
   "back": "LET: energy lost per unit length (∝ q²nZ/v²). LID: ion pairs per unit length. LET = W × LID."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Bragg curve and its uses?",
   "back": "Energy loss rises as the particle slows, peaking at the end (Bragg peak); protontherapy targets tumours; α dangerous internally."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Electron interactions?",
   "back": "With electrons: ionisation or excitation. With nuclei: Bremsstrahlung (X-ray tubes, accelerators)."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Photon attenuation law?",
   "back": "N = N₀e^(−µx); µ depends on Z, density, energy; half-value layer X½ = ln2/µ."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Three photon interactions?",
   "back": "Photoelectric (absorbed by bound K electron), Compton (outer electron + scattered photon), materialisation (e⁻e⁺ pair > 1.022 MeV)."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Detector characteristics?",
   "back": "Efficiency (intrinsic, extrinsic), background, energy resolution, dead time."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Detector types?",
   "back": "Scintillation (NaI + PM: gamma camera, PET), gas (ionisation chamber, proportional counter, Geiger-Müller), dosimeters (film, TLD, OSL, electronic)."
  },
  {
   "id": "img-heavy",
   "type": "image",
   "target": "heavy",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Heavy charged particles. Interact mainly with electrons; energy loss (LET) rises as they slow, peaking at the end of range (Bragg peak)."
  },
  {
   "id": "img-light",
   "type": "image",
   "target": "light",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Electrons. Ionise or excite atomic electrons along a broken path; deflected by nuclei they emit braking X-rays (Bremsstrahlung), used in X-ray tubes."
  },
  {
   "id": "img-ph",
   "type": "image",
   "target": "ph",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Photons. No mass or charge; interact randomly; attenuation grows with density and Z and falls with energy."
  },
  {
   "id": "img-pe",
   "type": "image",
   "target": "pe",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Photoelectric effect. Photon fully absorbed by a bound (mostly K) electron, which leaves; vacancy filling gives fluorescence X-rays or Auger electrons."
  },
  {
   "id": "img-co",
   "type": "image",
   "target": "co",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Compton effect. Photon transfers part of its energy to a loosely bound outer electron and is scattered with lower energy."
  },
  {
   "id": "img-pp",
   "type": "image",
   "target": "pp",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Materialisation. High-energy photon near a nucleus creates an electron-positron pair."
  }
 ],
 "deeper": [
  {
   "title": "Why protontherapy spares healthy tissue",
   "html": "<p>X-ray beams deposit dose all along their path, including beyond the tumour. Protons deposit little energy on entry and most of it in the Bragg peak at a depth set by their energy, then stop. Tuning the energy puts the peak inside the tumour and leaves tissue behind it almost untouched, which matters near the spinal cord or in children.</p><p class='src'>Source: the lecture's Bragg curve applications.</p>"
  },
  {
   "title": "Why lead shields X-rays",
   "html": "<p>Photon attenuation increases with the density and atomic number of the absorber, especially through the photoelectric effect at diagnostic energies. Lead is dense and has a high Z, so a few millimetres cut the beam by several half-value layers, which is why aprons and walls in radiology use it.</p><p class='src'>Source: the lecture's photon attenuation slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "Interaction of radiation with matter (IAEA)",
   "url": "https://www.iaea.org/topics/radiation-protection",
   "kind": "Website",
   "why": "Radiation basics and protection.",
   "note": ""
  },
  {
   "title": "Radiation detection (US NRC)",
   "url": "https://www.nrc.gov/about-nrc/radiation/health-effects/measuring-radiation.html",
   "kind": "Website",
   "why": "How radiation is measured.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Interaction of radiation with matter (IAEA)",
   "url": "https://www.iaea.org/topics/radiation-protection"
  },
  {
   "name": "Radiation detection (US NRC)",
   "url": "https://www.nrc.gov/about-nrc/radiation/health-effects/measuring-radiation.html"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["biophys1-radiobiology"] = {
 "id": "biophys1-radiobiology",
 "subject": "biophys1",
 "group": "Biophysics",
 "title": "Radiobiology: biological effects of ionising radiation",
 "sourceFile": "4 Radiobiology (Biophysics, Pr. Hasnae Guerrouj)",
 "sourceUrl": "https://drive.google.com/file/d/1yf7TuECTpvLHfiQ_V5oW9FhZN5dOcBc2/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p><strong>Radiobiology</strong> studies how ionising radiation acts on living organisms, from particles to disease, to understand radiotherapy and to ensure <strong>radiation protection</strong>. Effects depend on the <strong>radiation</strong> (type, energy, path), the <strong>organism</strong> (cells, tissues, species) and the <strong>irradiation conditions</strong> (total dose, dose rate).</p>"
  },
  {
   "id": "s1",
   "title": "Dose quantities",
   "html": "<p><strong>Absorbed dose D</strong> = energy per unit mass, in <strong>gray (Gy = J/kg)</strong> (old unit rad = 0.01 Gy); <strong>dose rate</strong> = dose per unit time. <strong>Equivalent dose H<sub>T</sub> = D × W<sub>R</sub></strong>, in <strong>sievert (Sv)</strong>, weighting by radiation type: <strong>photons and electrons W<sub>R</sub> = 1</strong>, protons 5, neutrons 5-20 by energy, <strong>α particles 20</strong>. <strong>Effective dose E = Σ H<sub>T</sub> × W<sub>T</sub></strong> (Sv), weighting by tissue sensitivity; the lecture's table gives gonads 0.20; red marrow, colon, lung, stomach 0.12; bladder, liver, oesophagus, thyroid 0.04; skin, bone surface, brain, salivary glands 0.01; remainder 0.12.</p>"
  },
  {
   "id": "s2",
   "title": "Molecular and cellular effects",
   "html": "<p>Timeline: ionisation (10⁻¹⁵ s) → free radicals (10⁻⁵ s) → lesions of vital molecules (seconds-minutes) → cell death (days-weeks) → cancer (years) → mutations in descendants. <strong>Water</strong> (~65% of body mass) is the main target: <strong>radiolysis</strong> yields <strong>•OH</strong> (strong oxidant) and <strong>•H</strong>; high-LET radiation packs radicals densely (recombination, H₂O₂); <strong>oxygen</strong> forms more toxic species (O₂•⁻, ROO•) and <strong>raises radiosensitivity</strong>; heat speeds radical diffusion. Defences: superoxide dismutase, catalase and peroxidases keep the <strong>redox balance</strong>. <strong>Direct effects</strong>: covalent bond breakage in DNA and other molecules. <strong>Indirect effects</strong>: radicals damage proteins, mitochondria and membranes (lipid peroxidation, disturbed permeability, inflammation). <strong>DNA lesions</strong>: <strong>double-strand breaks</strong> (often lethal), single-strand breaks (usually repaired), base and sugar damage, cross-links; hits on oncogenes or tumour suppressors can start carcinogenesis. Chromosomal aberrations appear from <strong>0.1 Gy</strong>.</p><p><strong>Cell death</strong>: immediate necrosis at very high doses (10²-10³ Gy); <strong>apoptosis</strong> at lower doses in very sensitive cells (lymphocytes, oocytes); <strong>mitotic death</strong> (cells look normal but die when dividing); indirect death of differentiated cells from damage to their environment. Or the cell survives with <strong>mutations</strong>, transformation, cancerisation. <strong>Radiosensitivity</strong> is highest in rapidly renewing tissues (bone marrow, spermatogonia, mucosae, basal epidermis) and low in slowly renewing ones (liver, kidney, neurons: late effects); highest in <strong>M phase</strong>, lowest in <strong>S phase</strong>; depends on oxygen and repair capacity (Bergonié-Tribondeau principle).</p>"
  },
  {
   "id": "s3",
   "title": "Deterministic effects and acute irradiation",
   "html": "<p><strong>Deterministic effects</strong>: certain above a <strong>threshold dose</strong>, severity increasing with dose, due to cell death; early or medium-term, often reversible if limited. <strong>Acute whole-body irradiation</strong>: < 0.3 Gy nothing detectable; 0.3-1 Gy transient lymphocyte drop; 1-2 Gy malaise, nausea, vomiting within 3-6 h, spontaneous recovery; 2-4 Gy haematopoietic syndrome (falling white cells, red cells, platelets over ~3 weeks; recovery in 4-6 months with specialised care); 4-6 Gy severe (haemorrhage, marrow aplasia; <strong>LD50 ≈ 4-4.5 Gy</strong>); 6-7 Gy and above gastrointestinal syndrome (diarrhoea, vomiting, bleeding, dehydration), then neurological at very high doses. <strong>Stochastic effects</strong> (cancer, hereditary mutations): probability, not severity, rises with dose, with no known threshold.</p>"
  }
 ],
 "exam": [
  "Effects depend on radiation, organism and dose/dose rate.",
  "Absorbed dose: Gy = J/kg (1 rad = 0.01 Gy).",
  "Equivalent dose H = D × W_R (Sv): photons, electrons 1; α 20.",
  "Effective dose E = Σ H_T × W_T (Sv).",
  "Water radiolysis → •OH, •H; oxygen increases damage.",
  "Double-strand breaks: most lethal; aberrations from 0.1 Gy.",
  "Death: necrosis, apoptosis (lymphocytes), mitotic death.",
  "Radiosensitive: marrow, gonads, mucosa, basal skin; M phase most, S phase least.",
  "Deterministic: threshold, severity ∝ dose. Stochastic: probability ∝ dose, no threshold.",
  "Acute: 1-2 Gy nausea; 2-4 Gy marrow; LD50 ≈ 4-4.5 Gy; > 6 Gy digestive."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "From irradiation to disease: the time scale",
   "caption": "Physical, chemical, biological stages. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"190\" y1=\"70\" x2=\"200\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"370\" y1=\"70\" x2=\"380\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"550\" y1=\"70\" x2=\"560\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"730\" y1=\"70\" x2=\"200\" y2=\"200\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"370\" y1=\"200\" x2=\"380\" y2=\"200\"/>",
   "parts": {
    "t1": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "10⁻¹⁵ s: ionisations,",
      "excitations"
     ],
     "lx": 105.0,
     "ly": 68.0
    },
    "t2": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"200\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "10⁻⁵ s: free radicals",
      "(water radiolysis)"
     ],
     "lx": 285.0,
     "ly": 68.0
    },
    "t3": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"380\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Seconds-minutes:",
      "DNA lesions"
     ],
     "lx": 465.0,
     "ly": 68.0
    },
    "t4": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"560\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Days-weeks:",
      "cell death"
     ],
     "lx": 645.0,
     "ly": 68.0
    },
    "t5": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"200\" y=\"170\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Years: cancer",
      "(stochastic)"
     ],
     "lx": 285.0,
     "ly": 198.0
    },
    "t6": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"380\" y=\"170\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Descendants:",
      "genetic mutations"
     ],
     "lx": 465.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "t1": [
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
    "t2": [
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
    "t3": [
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
    "t4": [
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
    "t5": [
     {
      "t": [
       200.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "t6": [
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
    ]
   }
  },
  "mindmap": {
   "root": "Radiobiology",
   "branches": [
    [
     "Doses",
     [
      "Absorbed: Gy",
      "Equivalent: D × W_R (Sv)",
      "Effective: Σ H_T × W_T"
     ]
    ],
    [
     "Molecular",
     [
      "Water radiolysis: •OH",
      "Oxygen effect",
      "Direct / indirect",
      "DNA double-strand breaks"
     ]
    ],
    [
     "Cellular",
     [
      "Necrosis, apoptosis",
      "Mitotic death",
      "Mutations, cancer"
     ]
    ],
    [
     "Radiosensitivity",
     [
      "Marrow, gonads, mucosa",
      "M phase high, S low",
      "Oxygen, repair"
     ]
    ],
    [
     "Tissue effects",
     [
      "Deterministic: threshold",
      "Stochastic: no threshold",
      "LD50 ≈ 4-4.5 Gy"
     ]
    ]
   ]
  }
 },
 "mcqs": [
  {
   "q": "The unit of absorbed dose is:",
   "options": [
    "Sievert",
    "Becquerel",
    "Curie",
    "Gray (J/kg)"
   ],
   "answer": 3,
   "why": "1 rad = 0.01 Gy."
  },
  {
   "q": "Equivalent dose is obtained by multiplying absorbed dose by:",
   "options": [
    "The tissue weighting factor",
    "The activity",
    "The radiation weighting factor W_R",
    "The half-life"
   ],
   "answer": 2,
   "why": "H = D × W_R, in Sv."
  },
  {
   "q": "The radiation weighting factor of α particles is:",
   "options": [
    "5",
    "20",
    "1",
    "10"
   ],
   "answer": 1,
   "why": "Photons and electrons: 1."
  },
  {
   "q": "Effective dose accounts for:",
   "options": [
    "Radiation type only",
    "Distance",
    "Tissue sensitivity",
    "Activity"
   ],
   "answer": 2,
   "why": "E = Σ H_T × W_T."
  },
  {
   "q": "The main initial target of ionising radiation in the body is:",
   "options": [
    "Water (radiolysis)",
    "Bone",
    "Fat",
    "Proteins"
   ],
   "answer": 0,
   "why": "About 65% of body mass."
  },
  {
   "q": "Which radical is a strong oxidant produced by water radiolysis?",
   "options": [
    "H₂",
    "•OH",
    "•H",
    "O₂"
   ],
   "answer": 1,
   "why": "Toxic to DNA, proteins, lipids."
  },
  {
   "q": "Oxygen in tissues:",
   "options": [
    "Has no effect",
    "Protects against radiation",
    "Increases radiosensitivity",
    "Stops radiolysis"
   ],
   "answer": 2,
   "why": "It forms more toxic radicals."
  },
  {
   "q": "The most lethal DNA lesion is:",
   "options": [
    "Single-strand break",
    "Sugar damage",
    "Base oxidation",
    "Double-strand break"
   ],
   "answer": 3,
   "why": "Especially when opposite each other."
  },
  {
   "q": "Chromosomal aberrations become detectable from about:",
   "options": [
    "100 Gy",
    "0.1 Gy",
    "0.001 Gy",
    "10 Gy"
   ],
   "answer": 1,
   "why": "Used in biological dosimetry."
  },
  {
   "q": "Which cells are highly radiosensitive?",
   "options": [
    "Bone marrow cells",
    "Hepatocytes",
    "Kidney cells",
    "Neurons"
   ],
   "answer": 0,
   "why": "Rapidly renewing tissues."
  },
  {
   "q": "Cells are most radiosensitive in:",
   "options": [
    "M phase",
    "S phase",
    "G0",
    "G1 only"
   ],
   "answer": 0,
   "why": "Least in S phase."
  },
  {
   "q": "Mitotic death means that irradiated cells:",
   "options": [
    "Die instantly",
    "Never die",
    "Become cancerous",
    "Die at next division"
   ],
   "answer": 3,
   "why": "Loss of proliferative ability."
  },
  {
   "q": "Deterministic effects:",
   "options": [
    "Have no threshold",
    "Are only cancers",
    "Are hereditary",
    "Threshold, graded severity"
   ],
   "answer": 3,
   "why": "Due to cell death."
  },
  {
   "q": "Stochastic effects include:",
   "options": [
    "Cancer, mutations",
    "Marrow aplasia",
    "Radiation burns",
    "Cataract"
   ],
   "answer": 0,
   "why": "Probability rises with dose, no threshold."
  },
  {
   "q": "The LD50 for acute whole-body irradiation is about:",
   "options": [
    "20 Gy",
    "4-4.5 Gy",
    "0.5 Gy",
    "1 Gy"
   ],
   "answer": 1,
   "why": "Haematopoietic syndrome."
  },
  {
   "q": "Nausea and vomiting within 3-6 h with spontaneous recovery suggests about:",
   "options": [
    "0.1 Gy",
    "6-7 Gy",
    "50 Gy",
    "1-2 Gy"
   ],
   "answer": 3,
   "why": "General reaction."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "t1",
   "options": [
    "Molecular lesions",
    "Cellular stage",
    "Physical stage",
    "Chemical stage"
   ],
   "answer": 2,
   "why": "The arrow points to: Physical stage. Energy deposited in femtoseconds by ionisation and excitation."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "t2",
   "options": [
    "Late effects",
    "Chemical stage",
    "Cellular stage",
    "Physical stage"
   ],
   "answer": 1,
   "why": "The arrow points to: Chemical stage. Radiolysis of water (65% of the body) forms •OH (oxidant) and •H radicals; oxygen amplifies damage."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "t3",
   "options": [
    "Late effects",
    "Molecular lesions",
    "Cellular stage",
    "Chemical stage"
   ],
   "answer": 1,
   "why": "The arrow points to: Molecular lesions. Direct bond breakage or indirect radical attack on DNA, proteins, membranes."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "t4",
   "options": [
    "Cellular stage",
    "Late effects",
    "Molecular lesions",
    "Chemical stage"
   ],
   "answer": 0,
   "why": "The arrow points to: Cellular stage. Immediate death (very high doses), apoptosis, mitotic death, or survival with mutations."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "t5",
   "options": [
    "Late effects",
    "Hereditary effects",
    "Molecular lesions",
    "Cellular stage"
   ],
   "answer": 0,
   "why": "The arrow points to: Late effects. Cancerisation years later: probability rises with dose, no threshold."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "t6",
   "options": [
    "Cellular stage",
    "Physical stage",
    "Hereditary effects",
    "Molecular lesions"
   ],
   "answer": 2,
   "why": "The arrow points to: Hereditary effects. Mutations transmitted to offspring if germ cells are hit."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Factors governing biological effects?",
   "back": "Radiation (type, energy, trajectory), organism (cells, tissues, species), irradiation conditions (dose, dose rate)."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Absorbed, equivalent and effective dose?",
   "back": "Absorbed D (Gy = J/kg). Equivalent H_T = D × W_R (Sv). Effective E = Σ H_T × W_T (Sv)."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Radiation weighting factors?",
   "back": "Photons and electrons 1; protons 5; neutrons 5-20 by energy; α 20."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Timeline of radiation action?",
   "back": "10⁻¹⁵ s ionisation, 10⁻⁵ s free radicals, seconds-minutes molecular lesions, days-weeks cell death, years cancer, descendants mutations."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Water radiolysis and oxygen effect?",
   "back": "Radiation splits water into •OH (oxidant) and •H; oxygen forms more toxic radicals, increasing radiosensitivity."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "DNA lesions from radiation?",
   "back": "Double-strand breaks (most lethal), single-strand breaks (repairable), base and sugar damage, cross-links."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Types of radiation-induced cell death?",
   "back": "Immediate necrosis (very high doses), apoptosis (lymphocytes, oocytes), mitotic death, indirect death."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Determinants of radiosensitivity?",
   "back": "Radiation type, oxygen, temperature, repair capacity, proliferation rate (marrow, gonads, mucosa high), cell cycle (M high, S low)."
  },
  {
   "id": "x8",
   "type": "text",
   "front": "Deterministic vs stochastic effects?",
   "back": "Deterministic: threshold, severity rises with dose (cell death). Stochastic: probability rises with dose, no threshold (cancer, hereditary)."
  },
  {
   "id": "x9",
   "type": "text",
   "front": "Acute whole-body irradiation by dose?",
   "back": "0.3-1 Gy lymphopenia; 1-2 Gy nausea; 2-4 Gy marrow syndrome; 4-6 Gy aplasia, LD50 ≈ 4-4.5 Gy; > 6 Gy gastrointestinal."
  },
  {
   "id": "img-t1",
   "type": "image",
   "target": "t1",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Physical stage. Energy deposited in femtoseconds by ionisation and excitation."
  },
  {
   "id": "img-t2",
   "type": "image",
   "target": "t2",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Chemical stage. Radiolysis of water (65% of the body) forms •OH (oxidant) and •H radicals; oxygen amplifies damage."
  },
  {
   "id": "img-t3",
   "type": "image",
   "target": "t3",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Molecular lesions. Direct bond breakage or indirect radical attack on DNA, proteins, membranes."
  },
  {
   "id": "img-t4",
   "type": "image",
   "target": "t4",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Cellular stage. Immediate death (very high doses), apoptosis, mitotic death, or survival with mutations."
  },
  {
   "id": "img-t5",
   "type": "image",
   "target": "t5",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Late effects. Cancerisation years later: probability rises with dose, no threshold."
  },
  {
   "id": "img-t6",
   "type": "image",
   "target": "t6",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Hereditary effects. Mutations transmitted to offspring if germ cells are hit."
  }
 ],
 "deeper": [
  {
   "title": "Why oxygen makes tumours easier to kill",
   "html": "<p>Radiation breaks DNA directly and through radicals; oxygen reacts with the damaged sites and fixes the damage so it cannot be repaired. Well-oxygenated cells are therefore two to three times more radiosensitive than hypoxic ones. The poorly oxygenated core of large tumours resists radiotherapy, which is why treatment is split into fractions that let the tumour reoxygenate between sessions.</p><p class='src'>Source: the lecture's free radical and oxygen slides.</p>"
  },
  {
   "title": "Why the bone marrow fails first",
   "html": "<p>Tissues that constantly renew their cells depend on active divisions, and dividing cells are the most radiosensitive. After a few gray the marrow stem cells die; circulating blood cells then run out over the following weeks, giving infections and bleeding. Slowly renewing organs such as liver and brain show damage only much later.</p><p class='src'>Source: the lecture's radiosensitivity and acute irradiation slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "Ionizing radiation, health effects (WHO)",
   "url": "https://www.who.int/news-room/fact-sheets/detail/ionizing-radiation-and-health-effects",
   "kind": "Article",
   "why": "Deterministic and stochastic effects, doses.",
   "note": ""
  },
  {
   "title": "ICRP Publication 103 summary",
   "url": "https://www.icrp.org/publication.asp?id=ICRP%20Publication%20103",
   "kind": "Website",
   "why": "Current weighting factors and dose concepts.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Ionizing radiation, health effects (WHO)",
   "url": "https://www.who.int/news-room/fact-sheets/detail/ionizing-radiation-and-health-effects"
  },
  {
   "name": "ICRP Publication 103 summary",
   "url": "https://www.icrp.org/publication.asp?id=ICRP%20Publication%20103"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["biophys1-radioprotection"] = {
 "id": "biophys1-radioprotection",
 "subject": "biophys1",
 "group": "Biophysics",
 "title": "Radiation protection and safety in the medical sector",
 "sourceFile": "Radiation protection (Biophysics, Pr. Hasnae Guerrouj)",
 "sourceUrl": "https://drive.google.com/file/d/1OlcbQ0k_v7NKk-Csmv2qcgpdRIojdX37/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p><strong>Radiation protection</strong> is the set of technical, legal and administrative measures that protect people and the environment from the harmful effects of ionising radiation while allowing its controlled, justified use: a balance of <strong>risk and expected benefit</strong>. History: <strong>1902</strong> first radiation-induced cancers in physicians and physicists; <strong>1921</strong> committee for protection against X-rays; <strong>1928</strong> creation of the <strong>ICRP</strong>. Organisation: international <strong>ICRP</strong>, <strong>UNSCEAR</strong>, <strong>IAEA</strong>; European <strong>Euratom</strong>; in Morocco the <strong>CNRP</strong> (National Center for Radiation Protection) and <strong>AMSSNuR</strong> (Moroccan Agency for Nuclear and Radiological Safety and Security).</p>"
  },
  {
   "id": "s1",
   "title": "Sources of exposure",
   "html": "<p><strong>Natural</strong> (largest source): cosmic rays (<strong>0.2 mSv/year at sea level</strong>, 0.4 at 1,500 m, more when flying), soil radionuclides (U-238, Th-232: 0.3-0.5 mSv/year), and body radionuclides, mainly <strong>potassium-40</strong> (~0.25 mSv/year). <strong>Artificial</strong> (industry, nuclear test fallout): ~0.1 mSv/year. <strong>Medical</strong>: ~<strong>1 mSv/year</strong> on average, where the patient benefits directly (X-rays, CT, radiotherapy); effective dose is the key risk quantity. <strong>Occupational</strong>: health workers, industrial radiographers, aircrew and astronauts.</p>"
  },
  {
   "id": "s2",
   "title": "Modes of exposure",
   "html": "<p><strong>External exposure</strong>: the source is outside the body, no intake; reduced by the three rules <strong>time, distance, shielding</strong> (lead syringe shields, shielded hoods and screens, gamma cameras run from a separate room, lead aprons for accompanying parents). <strong>External contamination</strong>: radioactive material deposited on surfaces, in the air, or on skin and hair (can lead to intake if not removed). <strong>Internal contamination</strong>: intake by <strong>inhalation, ingestion or wounds</strong>; behaviour depends on chemical form: <strong>I-131 concentrates in the thyroid</strong>, <strong>Sr-90 in bone</strong>, others are excreted; risks include local organ irradiation and long-term cancer. Prevention: protective equipment, ventilation, monitoring (whole-body counters, bioassays), decontamination and decorporation therapy.</p>"
  },
  {
   "id": "s3",
   "title": "Principles, limits and monitoring",
   "html": "<p>Three principles: <strong>justification</strong> (net benefit; avoid useless exposure; a useful exam's result, positive or negative, changes management; the prescribing physician is responsible, the radiologist or nuclear physician decides), <strong>optimisation</strong> (<strong>ALARA</strong>: as low as reasonably achievable) and <strong>limitation</strong> (dose limits). <strong>Limits</strong>: <strong>category A workers</strong> (may exceed 3/10 of limits): <strong>20 mSv/year</strong> whole body, 500 mSv/year skin/extremities, 150 mSv/year lens; <strong>category B</strong>: 6 mSv/year, 150 skin, 45 lens; <strong>public</strong>: <strong>1 mSv/year</strong>; pregnant worker: <strong>< 1 mSv</strong> to the abdomen. <strong>Zoning</strong>: <strong>controlled area</strong> (possible dose > 3/10 of a limit) and <strong>supervised area</strong> (> 1/10), marked and access-restricted. <strong>Controls</strong>: sources and facilities (containers, shielding, ventilation, interlocks, signage), environment (fixed and portable detectors, contamination and air monitoring), and workers: <strong>passive regulatory dosimeter</strong> (TLD or OSL; records doses), <strong>ring dosimeter</strong> for syringe handling, <strong>active operational electronic dosimeter</strong> for real-time reading.</p>"
  }
 ],
 "exam": [
  "RP: protect people and environment while allowing justified use.",
  "ICRP 1928; UNSCEAR; IAEA; Morocco: CNRP, AMSSNuR.",
  "Natural exposure largest: cosmic 0.2 mSv/yr (sea level), soil 0.3-0.5, K-40 0.25.",
  "Medical ≈ 1 mSv/yr; artificial ≈ 0.1 mSv/yr.",
  "External exposure: time, distance, shielding.",
  "Internal contamination: inhalation, ingestion, wounds; I-131 thyroid, Sr-90 bone.",
  "Principles: justification, optimisation (ALARA), limitation.",
  "Worker A 20 mSv/yr; B 6 mSv/yr; public 1 mSv/yr; pregnancy < 1 mSv abdomen.",
  "Lens limit 150 mSv/yr (A); extremities 500 mSv/yr.",
  "Controlled area > 3/10, supervised > 1/10 of limits; TLD/OSL, ring, electronic dosimeters."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Radiation protection at a glance",
   "caption": "Principles, exposure modes and limits. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs>",
   "parts": {
    "just": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"40\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Justification:",
      "net benefit"
     ],
     "lx": 140.0,
     "ly": 68.0
    },
    "opt": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"280\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Optimisation:",
      "ALARA"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "lim": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"520\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Limitation:",
      "dose limits"
     ],
     "lx": 620.0,
     "ly": 68.0
    },
    "ext": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"40\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "External exposure:",
      "time, distance, shielding"
     ],
     "lx": 140.0,
     "ly": 198.0
    },
    "cont": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"280\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Contamination: external",
      "(skin) / internal (intake)"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "zone": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"520\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Zones: controlled (> 3/10),",
      "supervised (> 1/10)"
     ],
     "lx": 620.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "just": [
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
    "opt": [
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
    "lim": [
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
    "ext": [
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
    "cont": [
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
    "zone": [
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
   "root": "Radiation protection",
   "branches": [
    [
     "Organisation",
     [
      "ICRP, UNSCEAR, IAEA",
      "Euratom",
      "Morocco: CNRP, AMSSNuR"
     ]
    ],
    [
     "Sources",
     [
      "Natural (largest)",
      "Medical ~1 mSv/yr",
      "Artificial ~0.1 mSv/yr",
      "Occupational"
     ]
    ],
    [
     "Exposure modes",
     [
      "External: time, distance, shielding",
      "External contamination",
      "Internal: I-131 thyroid, Sr-90 bone"
     ]
    ],
    [
     "Principles",
     [
      "Justification",
      "Optimisation (ALARA)",
      "Limitation"
     ]
    ],
    [
     "Limits",
     [
      "Worker A 20 mSv",
      "Worker B 6 mSv",
      "Public 1 mSv",
      "Pregnancy < 1 mSv"
     ]
    ],
    [
     "Control",
     [
      "Controlled / supervised areas",
      "TLD, OSL, ring, electronic"
     ]
    ]
   ]
  }
 },
 "mcqs": [
  {
   "q": "The ICRP was founded in:",
   "options": [
    "1921",
    "1902",
    "1948",
    "1928"
   ],
   "answer": 3,
   "why": "International Commission on Radiological Protection."
  },
  {
   "q": "Which Moroccan body regulates nuclear and radiological safety?",
   "options": [
    "UNSCEAR",
    "Euratom",
    "AMSSNuR",
    "IAEA"
   ],
   "answer": 2,
   "why": "With the CNRP."
  },
  {
   "q": "The largest source of radiation exposure is:",
   "options": [
    "Natural",
    "Nuclear tests",
    "Industrial",
    "Medical"
   ],
   "answer": 0,
   "why": "Cosmic, terrestrial, internal."
  },
  {
   "q": "Cosmic exposure at sea level is about:",
   "options": [
    "0.02 mSv/year",
    "20 mSv/year",
    "0.2 mSv/year",
    "2 mSv/year"
   ],
   "answer": 2,
   "why": "It rises with altitude."
  },
  {
   "q": "The main natural radionuclide inside the body is:",
   "options": [
    "Potassium-40",
    "Tc-99m",
    "Sr-90",
    "I-131"
   ],
   "answer": 0,
   "why": "About 0.25 mSv/year."
  },
  {
   "q": "Average medical exposure is about:",
   "options": [
    "20 mSv/year",
    "1 mSv/year",
    "0.01 mSv/year",
    "100 mSv/year"
   ],
   "answer": 1,
   "why": "The patient benefits directly."
  },
  {
   "q": "The three rules against external exposure are:",
   "options": [
    "Justify, optimise, limit",
    "Wash, cover, monitor",
    "Time, distance, shielding",
    "Ingest, inhale, inject"
   ],
   "answer": 2,
   "why": "Reduce time, increase distance, add shielding."
  },
  {
   "q": "Internal contamination can occur through:",
   "options": [
    "Distance",
    "Lead aprons",
    "X-ray tubes only",
    "Intake of radionuclides"
   ],
   "answer": 3,
   "why": "Intake of radionuclides."
  },
  {
   "q": "Iodine-131 accumulates in the:",
   "options": [
    "Liver",
    "Thyroid",
    "Brain",
    "Bone"
   ],
   "answer": 1,
   "why": "Sr-90 goes to bone."
  },
  {
   "q": "ALARA corresponds to which principle?",
   "options": [
    "Optimisation",
    "Limitation",
    "Justification",
    "Zoning"
   ],
   "answer": 0,
   "why": "As low as reasonably achievable."
  },
  {
   "q": "The annual whole-body limit for category A workers is:",
   "options": [
    "20 mSv",
    "6 mSv",
    "50 mSv",
    "1 mSv"
   ],
   "answer": 0,
   "why": "Public: 1 mSv."
  },
  {
   "q": "The annual dose limit for the public is:",
   "options": [
    "20 mSv",
    "6 mSv",
    "0.1 mSv",
    "1 mSv"
   ],
   "answer": 3,
   "why": "Excluding medical and natural exposure."
  },
  {
   "q": "For a pregnant worker, the dose to the abdomen must stay below:",
   "options": [
    "6 mSv",
    "150 mSv",
    "20 mSv",
    "1 mSv"
   ],
   "answer": 3,
   "why": "For the rest of the pregnancy."
  },
  {
   "q": "A controlled area is where a worker may receive more than:",
   "options": [
    "3/10 of a limit",
    "1/10 of a limit",
    "The full limit",
    "Any dose"
   ],
   "answer": 0,
   "why": "Supervised area: > 1/10."
  },
  {
   "q": "Which dosimeter gives real-time dose reading?",
   "options": [
    "Film",
    "Electronic dosimeter",
    "TLD",
    "OSL"
   ],
   "answer": 1,
   "why": "Passive dosimeters are read later."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "just",
   "options": [
    "Limitation",
    "Optimisation",
    "External exposure",
    "Justification"
   ],
   "answer": 3,
   "why": "The arrow points to: Justification. Every exposure must bring a net benefit; a useful exam changes patient management; the prescriber is responsible."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "opt",
   "options": [
    "Justification",
    "External exposure",
    "Optimisation",
    "Contamination"
   ],
   "answer": 2,
   "why": "The arrow points to: Optimisation. As Low As Reasonably Achievable, considering technical, social and economic factors."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "lim",
   "options": [
    "External exposure",
    "Limitation",
    "Optimisation",
    "Contamination"
   ],
   "answer": 1,
   "why": "The arrow points to: Limitation. Workers A: 20 mSv/year whole body; public: 1 mSv/year; pregnancy: < 1 mSv to the abdomen."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ext",
   "options": [
    "Optimisation",
    "External exposure",
    "Contamination",
    "Limitation"
   ],
   "answer": 1,
   "why": "The arrow points to: External exposure. Source outside the body: reduce time, increase distance, use shielding (lead aprons, screens, syringe shields)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "cont",
   "options": [
    "Contamination",
    "Zoning",
    "Limitation",
    "External exposure"
   ],
   "answer": 0,
   "why": "The arrow points to: Contamination. Deposit on skin or clothes; intake by inhalation, ingestion or wounds (I-131 to thyroid, Sr-90 to bone)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "zone",
   "options": [
    "External exposure",
    "Limitation",
    "Zoning",
    "Justification"
   ],
   "answer": 2,
   "why": "The arrow points to: Zoning. Controlled area: dose could exceed 3/10 of a limit; supervised area: over 1/10; marked and access-restricted."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Define radiation protection.",
   "back": "Technical, legal and administrative measures protecting humans and the environment from ionising radiation while allowing its justified, controlled use (risk-benefit)."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Organisation of radiation protection?",
   "back": "International: ICRP (1928), UNSCEAR, IAEA. Europe: Euratom. Morocco: CNRP, AMSSNuR."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Natural exposure components?",
   "back": "Cosmic (0.2 mSv/yr at sea level, higher at altitude), soil radionuclides U-238, Th-232 (0.3-0.5), internal K-40 (0.25)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Artificial and medical exposure?",
   "back": "Artificial ~0.1 mSv/yr (industry, fallout); medical ~1 mSv/yr (diagnosis, therapy)."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Modes of exposure?",
   "back": "External exposure (source outside), external contamination (deposit on skin/surfaces), internal contamination (inhalation, ingestion, wounds)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Three principles of radiation protection?",
   "back": "Justification (net benefit), optimisation (ALARA), limitation (dose limits)."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Dose limits?",
   "back": "Category A 20 mSv/yr (skin 500, lens 150); category B 6 mSv/yr (skin 150, lens 45); public 1 mSv/yr; pregnancy < 1 mSv abdomen."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Zoning and monitoring?",
   "back": "Controlled (> 3/10 of limit) and supervised (> 1/10) areas; source, environment and worker controls; passive TLD/OSL, ring and electronic dosimeters."
  },
  {
   "id": "img-just",
   "type": "image",
   "target": "just",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Justification. Every exposure must bring a net benefit; a useful exam changes patient management; the prescriber is responsible."
  },
  {
   "id": "img-opt",
   "type": "image",
   "target": "opt",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Optimisation. As Low As Reasonably Achievable, considering technical, social and economic factors."
  },
  {
   "id": "img-lim",
   "type": "image",
   "target": "lim",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Limitation. Workers A: 20 mSv/year whole body; public: 1 mSv/year; pregnancy: < 1 mSv to the abdomen."
  },
  {
   "id": "img-ext",
   "type": "image",
   "target": "ext",
   "front": "What is at the arrow, and why does it matter?",
   "back": "External exposure. Source outside the body: reduce time, increase distance, use shielding (lead aprons, screens, syringe shields)."
  },
  {
   "id": "img-cont",
   "type": "image",
   "target": "cont",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Contamination. Deposit on skin or clothes; intake by inhalation, ingestion or wounds (I-131 to thyroid, Sr-90 to bone)."
  },
  {
   "id": "img-zone",
   "type": "image",
   "target": "zone",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Zoning. Controlled area: dose could exceed 3/10 of a limit; supervised area: over 1/10; marked and access-restricted."
  }
 ],
 "deeper": [
  {
   "title": "Why distance is such a powerful protection",
   "html": "<p>Radiation from a small source spreads out in all directions, so its intensity falls with the square of the distance. Doubling the distance cuts the dose rate to a quarter; stepping back a metre or two from a patient injected with a tracer reduces exposure far more than most shields, at no cost.</p><p class='src'>Source: the lecture's three principles of external exposure reduction.</p>"
  },
  {
   "title": "Why medical exposure has no dose limit",
   "html": "<p>Dose limits protect workers and the public, who gain nothing from their exposure. A patient receiving a CT scan or radiotherapy benefits directly, so the dose is governed by justification (is the exam useful?) and optimisation (lowest dose for a diagnostic image), not by a fixed limit that could prevent necessary care.</p><p class='src'>Source: the lecture's medical irradiation and principles slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "Radiation protection of patients (IAEA)",
   "url": "https://www.iaea.org/resources/rpop",
   "kind": "Website",
   "why": "Justification and optimisation in medical imaging.",
   "note": ""
  },
  {
   "title": "Ionizing radiation and health effects (WHO)",
   "url": "https://www.who.int/news-room/fact-sheets/detail/ionizing-radiation-and-health-effects",
   "kind": "Article",
   "why": "Sources of exposure and protection.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Radiation protection of patients (IAEA)",
   "url": "https://www.iaea.org/resources/rpop"
  },
  {
   "name": "Ionizing radiation and health effects (WHO)",
   "url": "https://www.who.int/news-room/fact-sheets/detail/ionizing-radiation-and-health-effects"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["biophys1-optics"] = {
 "id": "biophys1-optics",
 "subject": "biophys1",
 "group": "Biophysics",
 "title": "Geometrical optics applied to vision",
 "sourceFile": "Geometrical Optics Applied to Vision (2025-2026) (Biophysics, Pr. Hasnae Guerrouj)",
 "sourceUrl": "https://drive.google.com/file/d/1XjxT_Q0GiwP8cNSmXuwXuGTO_O0fhNby/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>Geometrical optics studies how light rays travel through transparent media, based on <strong>Fermat's principle</strong> (1657) and the <strong>Snell-Descartes laws</strong> of reflection and refraction. Applied to the eye, it explains how an image forms on the retina, how accommodation works, and how <strong>refractive errors</strong> are corrected.</p>"
  },
  {
   "id": "s1",
   "title": "Basic optics",
   "html": "<p>A <strong>light ray</strong> is the path light follows (straight in a homogeneous medium). Visible light: <strong>380-700 nm</strong>; speed in vacuum <strong>c = 3 × 10⁸ m/s</strong>. <strong>Refractive index n = c/v</strong>: air ≈ 1, water 1.333, glass 1.5; higher n = slower light and stronger bending. A <strong>diopter</strong> is a surface separating two media of different n; at it, light is partly <strong>reflected</strong> and partly <strong>refracted</strong> (n₁ sin i₁ = n₂ sin i₂). <strong>Power of a diopter P = (n₂ − n₁)/r</strong> (r in m; unit dioptre, D): positive = converging, negative = diverging. <strong>Stigmatism</strong>: a point object gives a point image; if not (elongated spot), the system is <strong>astigmatic</strong>.</p>"
  },
  {
   "id": "s2",
   "title": "Dioptrics of the normal eye",
   "html": "<p>Four surfaces: <strong>anterior cornea</strong> (n = 1.377, r = 7.8 mm): <strong>+48 D</strong>; <strong>posterior cornea</strong> (aqueous n = 1.337, r = 6.5 mm): <strong>−6 D</strong>; <strong>anterior lens</strong> (n = 1.42, r = 10 mm): <strong>+8 D</strong>; <strong>posterior lens</strong> (r = 6 mm): <strong>+14 D</strong>; total ≈ <strong>64 D at rest</strong>. <strong>Accommodation</strong>: the retina cannot move, so to see near objects the eye increases its power: the <strong>ciliary muscle contracts</strong>, the <strong>zonular fibres relax</strong>, and the lens becomes more convex. The <strong>punctum remotum</strong> (far point) is seen without accommodation (infinity in the normal eye); the <strong>punctum proximum</strong> (near point) with maximal accommodation (~10 cm in young children, ≤ 25 cm in adults). <strong>Presbyopia</strong>: age-related lens hardening reduces accommodation (< 4 D), the near point recedes beyond 25 cm; corrected with <strong>converging lenses</strong> for near vision; it appears later in myopes.</p>"
  },
  {
   "id": "s3",
   "title": "Binocular vision, acuity and ametropias",
   "html": "<p><strong>Binocular vision</strong>: simultaneous perception on corresponding retinal points and cortical fusion into a 3D (<strong>stereoscopic</strong>) image. <strong>Diplopia</strong>: images on non-corresponding points (e.g. muscle imbalance); if persistent, the brain suppresses one eye, causing <strong>amblyopia</strong> (lazy eye), treatable if found <strong>before age 6</strong> (treat the cause such as strabismus; <strong>patch the healthy eye</strong>), irreversible after ~10. <strong>Visual acuity</strong> = 1/α (α = smallest resolvable visual angle): a normal eye separates points at <strong>1′</strong> → <strong>10/10</strong>; 5′ → 2/10; measured with optotype charts. <strong>Ametropias</strong>: the eye at rest does not focus infinity on the retina. <strong>Myopia</strong>: image in <strong>front</strong> of the retina (eye too powerful or too long); far point at a finite distance; corrected with <strong>diverging</strong> lenses (degree = 1/PR). <strong>Hyperopia</strong>: image <strong>behind</strong> the retina (not powerful enough); virtual far point behind the eye; corrected with <strong>converging</strong> lenses. <strong>Astigmatism</strong>: a non-spherical surface (usually the cornea) distorts images; corrected with cylindrical lenses.</p>"
  }
 ],
 "exam": [
  "Snell-Descartes: n₁ sin i₁ = n₂ sin i₂; n = c/v.",
  "Visible light 380-700 nm; c = 3×10⁸ m/s.",
  "Diopter power P = (n₂ − n₁)/r, in dioptres; + converging, − diverging.",
  "Eye: cornea +48 and −6 D, lens +8 and +14 D; total ≈ 64 D.",
  "Accommodation: ciliary contraction, zonule relaxes, lens bulges.",
  "Near point ~10 cm (child), ≤ 25 cm (adult); presbyopia: > 25 cm, converging lenses.",
  "Diplopia → amblyopia; patch the healthy eye before age 6.",
  "Normal acuity: 1′ = 10/10; VA = 1/α.",
  "Myopia: image in front, diverging lens. Hyperopia: behind, converging lens.",
  "Astigmatism: non-spherical cornea, cylindrical lens."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "The eye's refracting surfaces",
   "caption": "Powers that add up to about 64 D at rest. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"190\" y1=\"70\" x2=\"200\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"370\" y1=\"70\" x2=\"380\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"550\" y1=\"70\" x2=\"560\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"730\" y1=\"70\" x2=\"120\" y2=\"200\"/>",
   "parts": {
    "c1": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Anterior cornea:",
      "+48 D"
     ],
     "lx": 105.0,
     "ly": 68.0
    },
    "c2": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"200\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Posterior cornea:",
      "−6 D"
     ],
     "lx": 285.0,
     "ly": 68.0
    },
    "l1": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"380\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Anterior lens:",
      "+8 D"
     ],
     "lx": 465.0,
     "ly": 68.0
    },
    "l2": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"560\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Posterior lens:",
      "+14 D"
     ],
     "lx": 645.0,
     "ly": 68.0
    },
    "tot": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"120\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Total ≈ 64 D",
      "at rest"
     ],
     "lx": 230.0,
     "ly": 198.0
    },
    "acc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"420\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Accommodation: lens",
      "more convex (ciliary muscle)"
     ],
     "lx": 530.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "c1": [
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
    "c2": [
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
    "l1": [
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
    "l2": [
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
    "tot": [
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
    "acc": [
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
   "root": "Optics of vision",
   "branches": [
    [
     "Optics",
     [
      "n = c/v",
      "Snell-Descartes",
      "P = (n₂ − n₁)/r"
     ]
    ],
    [
     "Eye powers",
     [
      "Cornea +48, −6 D",
      "Lens +8, +14 D",
      "Total ≈ 64 D"
     ]
    ],
    [
     "Accommodation",
     [
      "Ciliary contraction",
      "PR and PP",
      "Presbyopia: + lenses"
     ]
    ],
    [
     "Binocular",
     [
      "Stereoscopy",
      "Diplopia",
      "Amblyopia: patch < 6 y"
     ]
    ],
    [
     "Acuity",
     [
      "VA = 1/α",
      "1′ = 10/10"
     ]
    ],
    [
     "Ametropias",
     [
      "Myopia: − lens",
      "Hyperopia: + lens",
      "Astigmatism: cylinder"
     ]
    ]
   ]
  }
 },
 "mcqs": [
  {
   "q": "Visible light wavelengths range from about:",
   "options": [
    "700-1,000 nm",
    "100-300 nm",
    "1-10 µm",
    "380-700 nm"
   ],
   "answer": 3,
   "why": "Perceived by the eye."
  },
  {
   "q": "The refractive index is defined as:",
   "options": [
    "n = c × v",
    "n = 1/c",
    "n = c/v",
    "n = v/c"
   ],
   "answer": 2,
   "why": "Higher n, slower light."
  },
  {
   "q": "A diopter with negative power is:",
   "options": [
    "Diverging",
    "Reflecting",
    "Neutral",
    "Converging"
   ],
   "answer": 0,
   "why": "P = (n₂ − n₁)/r."
  },
  {
   "q": "Which ocular surface has the greatest power?",
   "options": [
    "Posterior cornea",
    "Posterior lens",
    "Anterior cornea",
    "Anterior lens"
   ],
   "answer": 2,
   "why": "About +48 D."
  },
  {
   "q": "The total refractive power of the eye at rest is about:",
   "options": [
    "64 D",
    "100 D",
    "20 D",
    "48 D"
   ],
   "answer": 0,
   "why": "48 − 6 + 8 + 14."
  },
  {
   "q": "During accommodation the ciliary muscle:",
   "options": [
    "Changes the cornea",
    "Contracts; lens bulges",
    "Relaxes and the lens flattens",
    "Pulls the retina"
   ],
   "answer": 1,
   "why": "Power increases."
  },
  {
   "q": "The punctum proximum is:",
   "options": [
    "The far point",
    "The blind spot",
    "Nearest sharp point",
    "The fovea"
   ],
   "answer": 2,
   "why": "~25 cm in adults."
  },
  {
   "q": "Presbyopia is corrected with:",
   "options": [
    "Prisms",
    "Diverging lenses",
    "Cylindrical lenses",
    "Converging lenses"
   ],
   "answer": 3,
   "why": "For near vision."
  },
  {
   "q": "Why does presbyopia appear later in myopes?",
   "options": [
    "Their lens is softer",
    "Eye already strong",
    "They have no accommodation",
    "It never appears"
   ],
   "answer": 1,
   "why": "Less accommodation needed."
  },
  {
   "q": "Amblyopia is best treated:",
   "options": [
    "Early, patching good eye",
    "After age 10",
    "Never",
    "With surgery only"
   ],
   "answer": 0,
   "why": "Irreversible after ~10."
  },
  {
   "q": "A normal visual acuity of 10/10 corresponds to separating points at:",
   "options": [
    "1 minute of arc",
    "1 degree",
    "10 degrees",
    "5 minutes of arc"
   ],
   "answer": 0,
   "why": "VA = 1/α."
  },
  {
   "q": "In myopia, the image of a distant object forms:",
   "options": [
    "On the retina",
    "Behind the retina",
    "In the lens",
    "In front of the retina"
   ],
   "answer": 3,
   "why": "The eye is too powerful or too long."
  },
  {
   "q": "Myopia is corrected with:",
   "options": [
    "Cylindrical lenses only",
    "Prisms",
    "Converging lenses",
    "Diverging lenses"
   ],
   "answer": 3,
   "why": "Power = degree of myopia."
  },
  {
   "q": "Hyperopia is corrected with:",
   "options": [
    "Converging lenses",
    "Cylindrical lenses",
    "Diverging lenses",
    "Nothing"
   ],
   "answer": 0,
   "why": "The eye lacks power."
  },
  {
   "q": "Astigmatism most often arises from:",
   "options": [
    "The retina",
    "A non-spherical cornea",
    "The vitreous",
    "The optic nerve"
   ],
   "answer": 1,
   "why": "Point images become elongated."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "c1",
   "options": [
    "Anterior lens surface",
    "Posterior corneal surface",
    "Posterior lens surface",
    "Anterior corneal surface"
   ],
   "answer": 3,
   "why": "The arrow points to: Anterior corneal surface. (1.377 − 1)/0.0078 ≈ +48 D: the strongest surface, because of the air-cornea index jump."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "c2",
   "options": [
    "Posterior lens surface",
    "Total power",
    "Posterior corneal surface",
    "Anterior corneal surface"
   ],
   "answer": 2,
   "why": "The arrow points to: Posterior corneal surface. (1.337 − 1.377)/0.0065 ≈ −6 D, slightly diverging."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "l1",
   "options": [
    "Posterior corneal surface",
    "Anterior lens surface",
    "Posterior lens surface",
    "Total power"
   ],
   "answer": 1,
   "why": "The arrow points to: Anterior lens surface. (1.42 − 1.337)/0.010 ≈ +8 D."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "l2",
   "options": [
    "Anterior lens surface",
    "Posterior lens surface",
    "Total power",
    "Posterior corneal surface"
   ],
   "answer": 1,
   "why": "The arrow points to: Posterior lens surface. (1.337 − 1.42)/(−0.006) ≈ +14 D."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "tot",
   "options": [
    "Total power",
    "Posterior lens surface",
    "Accommodation",
    "Anterior lens surface"
   ],
   "answer": 0,
   "why": "The arrow points to: Total power. ≈ 64 D at rest: an emmetropic eye focuses objects at infinity on the retina."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "acc",
   "options": [
    "Anterior lens surface",
    "Anterior corneal surface",
    "Accommodation",
    "Posterior lens surface"
   ],
   "answer": 2,
   "why": "The arrow points to: Accommodation. Ciliary muscle contraction relaxes the zonule so the lens bulges and power increases for near vision."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Fundamentals of geometrical optics?",
   "back": "Fermat's principle; rays travel straight in homogeneous media; Snell-Descartes reflection and refraction (n₁ sin i₁ = n₂ sin i₂); n = c/v."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Power of a diopter?",
   "back": "P = (n₂ − n₁)/r in dioptres (r in metres); positive converging, negative diverging."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Powers of the ocular surfaces?",
   "back": "Anterior cornea +48 D, posterior cornea −6 D, anterior lens +8 D, posterior lens +14 D; total ≈ 64 D."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Mechanism of accommodation?",
   "back": "Ciliary muscle contracts → zonular fibres relax → lens becomes more convex → power increases for near vision."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Punctum remotum and proximum?",
   "back": "Remotum: far point without accommodation (infinity if emmetropic). Proximum: near point at maximal accommodation (~10 cm child, ≤ 25 cm adult)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Presbyopia?",
   "back": "Age-related lens hardening, accommodation < 4 D, near point > 25 cm; converging lenses; later in myopes."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Diplopia and amblyopia?",
   "back": "Diplopia: images on non-corresponding retinal points. Amblyopia: suppression of one eye; patch the healthy eye before age 6; irreversible after ~10."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Visual acuity?",
   "back": "VA = 1/α; normal: 1′ = 10/10; 5′ = 2/10; measured with optotypes."
  },
  {
   "id": "x8",
   "type": "text",
   "front": "Myopia vs hyperopia vs astigmatism?",
   "back": "Myopia: image in front, diverging lens. Hyperopia: behind, converging lens. Astigmatism: non-spherical cornea, cylindrical lens."
  },
  {
   "id": "img-c1",
   "type": "image",
   "target": "c1",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Anterior corneal surface. (1.377 − 1)/0.0078 ≈ +48 D: the strongest surface, because of the air-cornea index jump."
  },
  {
   "id": "img-c2",
   "type": "image",
   "target": "c2",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Posterior corneal surface. (1.337 − 1.377)/0.0065 ≈ −6 D, slightly diverging."
  },
  {
   "id": "img-l1",
   "type": "image",
   "target": "l1",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Anterior lens surface. (1.42 − 1.337)/0.010 ≈ +8 D."
  },
  {
   "id": "img-l2",
   "type": "image",
   "target": "l2",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Posterior lens surface. (1.337 − 1.42)/(−0.006) ≈ +14 D."
  },
  {
   "id": "img-tot",
   "type": "image",
   "target": "tot",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Total power. ≈ 64 D at rest: an emmetropic eye focuses objects at infinity on the retina."
  },
  {
   "id": "img-acc",
   "type": "image",
   "target": "acc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Accommodation. Ciliary muscle contraction relaxes the zonule so the lens bulges and power increases for near vision."
  }
 ],
 "deeper": [
  {
   "title": "Why the cornea does most of the focusing",
   "html": "<p>Refraction depends on the jump in refractive index at a surface. Between air (1.0) and cornea (1.377) the jump is large, so the front of the cornea bends light by about 48 D, while inside the eye the indices of cornea, aqueous humour and lens are close, giving smaller powers. That is why reshaping the cornea (refractive surgery) can correct large errors, and why vision blurs underwater, where the air-cornea jump disappears.</p><p class='src'>Source: the lecture's ocular diopters slides.</p>"
  },
  {
   "title": "Why amblyopia must be caught early",
   "html": "<p>The visual cortex wires itself to each eye during early childhood. If one eye sends a blurred or conflicting image, the brain learns to ignore it, and its connections weaken. Patching the good eye forces the brain to use the weak one while the system is still plastic; after about age 10 the wiring is fixed and glasses can no longer restore vision.</p><p class='src'>Source: the lecture's diplopia and amblyopia slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "Refractive errors (National Eye Institute)",
   "url": "https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/refractive-errors",
   "kind": "Website",
   "why": "Myopia, hyperopia, astigmatism, presbyopia.",
   "note": ""
  },
  {
   "title": "Lazy eye (NHS)",
   "url": "https://www.nhs.uk/conditions/lazy-eye/",
   "kind": "Article",
   "why": "Amblyopia and patching treatment.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Refractive errors (National Eye Institute)",
   "url": "https://www.nei.nih.gov/learn-about-eye-health/eye-conditions-and-diseases/refractive-errors"
  },
  {
   "name": "Lazy eye (NHS)",
   "url": "https://www.nhs.uk/conditions/lazy-eye/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["biophys1-hearing"] = {
 "id": "biophys1-hearing",
 "subject": "biophys1",
 "group": "Biophysics",
 "title": "Biophysics of hearing",
 "sourceFile": "Biophysics of hearing (Biophysics, Pr. Hasnae Guerrouj)",
 "sourceUrl": "https://drive.google.com/file/d/1_xKtEqEgWJDEnr8uydRTrSP6u8JCJ7m_/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>The ear turns pressure waves in air into nerve signals: the outer and middle ear <strong>transmit</strong> sound, the inner ear <strong>perceives</strong> it (and also serves balance). Understanding the physics explains decibels, why speech frequencies are heard best, and how hearing loss is diagnosed and treated.</p>"
  },
  {
   "id": "s1",
   "title": "Physics of sound",
   "html": "<p>Sound is a <strong>mechanical wave</strong> in a medium, defined by <strong>frequency</strong> (pitch), <strong>amplitude</strong> (loudness) and phase; speed in air ≈ <strong>343 m/s</strong> at 20 °C; <strong>λ = c/f</strong>. The ear detects pressures from about <strong>20 µPa to 20 Pa</strong>. Intensity ∝ pressure², so doubling pressure quadruples intensity. <strong>Sound pressure level: dB = 20·log₁₀(P/P_ref)</strong>, with P_ref = <strong>20 µPa</strong> (hearing threshold). <strong>+10 dB = 10× intensity</strong>, perceived as about <strong>twice as loud</strong>. <strong>Loudness</strong> is subjective; by the <strong>Weber-Fechner law</strong> perception grows <strong>logarithmically</strong> with intensity. The ear is most sensitive at <strong>2-4 kHz</strong> (speech consonants): equal SPL does not mean equal loudness (a 3 kHz tone at 60 dB sounds louder than a 50 Hz tone at 60 dB).</p>"
  },
  {
   "id": "s2",
   "title": "The ear",
   "html": "<p><strong>Outer ear</strong>: the <strong>pinna</strong> collects and filters sound by direction (head-related transfer function) for localisation; the <strong>ear canal</strong> resonates at <strong>2.5-3 kHz</strong>; the <strong>eardrum</strong> converts acoustic into mechanical vibration. <strong>Middle ear</strong>: <strong>impedance matching</strong> between air and cochlear fluid (without it ~99% of energy would be reflected): the ossicles (malleus → incus → stapes) act as a lever and the pressure rises about <strong>22×</strong>. <strong>Cochlea</strong>: 2.5 turns, fluid-filled; <strong>scala vestibuli</strong> (from the oval window, perilymph), <strong>scala media</strong> (endolymph, organ of Corti), <strong>scala tympani</strong> (to the round window, perilymph). The <strong>basilar membrane</strong> is <strong>stiff and narrow at the base (high frequencies)</strong> and <strong>wide and floppy at the apex (low frequencies)</strong>: a travelling wave peaks at each frequency's place (<strong>tonotopy</strong>). <strong>Organ of Corti</strong>: <strong>inner hair cells detect</strong> (transduction); <strong>outer hair cells amplify</strong>. <strong>Pathway</strong>: auditory nerve → cochlear nucleus → superior olivary complex → inferior colliculus → <strong>medial geniculate body</strong> (thalamus) → auditory cortex; <strong>bilateral</strong> projections give redundancy and localisation.</p>"
  },
  {
   "id": "s3",
   "title": "Audiometry and hearing loss",
   "html": "<p>Pure-tone audiometry tests <strong>air conduction</strong> (headphones: whole system) and <strong>bone conduction</strong> (vibrator on the skull: inner ear and nerve only). <strong>Air ↓, bone normal → conductive loss</strong> (outer/middle ear: <strong>wax</strong>, <strong>otitis media</strong>, <strong>otosclerosis</strong> fixing the stapes). <strong>Air and bone ↓ equally → sensorineural loss</strong> (cochlea or nerve: <strong>noise</strong>, <strong>presbycusis</strong>, <strong>ototoxic drugs</strong> such as aminoglycosides and some chemotherapy). Both → <strong>mixed</strong> loss. Treatment: <strong>hearing aids</strong> amplify the frequencies poorly heard and reduce noise digitally (mild-moderate sensorineural loss); <strong>cochlear implants</strong> bypass destroyed hair cells and stimulate the auditory nerve directly.</p>"
  }
 ],
 "exam": [
  "Sound: mechanical wave; frequency = pitch, amplitude = loudness; c ≈ 343 m/s in air.",
  "Hearing range of pressure: 20 µPa to 20 Pa.",
  "dB = 20 log₁₀(P/20 µPa); +10 dB = 10× intensity ≈ 2× loudness.",
  "Weber-Fechner: perception is logarithmic.",
  "Best sensitivity 2-4 kHz; canal resonance 2.5-3 kHz.",
  "Middle ear: impedance matching, ×22 pressure; otherwise 99% reflected.",
  "Cochlea: base = high frequencies (stiff, narrow); apex = low (wide, floppy).",
  "Inner hair cells detect; outer hair cells amplify.",
  "Pathway: cochlear nucleus → olive → inferior colliculus → MGB → cortex; bilateral.",
  "Conductive: air ↓ bone normal. Sensorineural: both ↓. Aids vs cochlear implants."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Path of sound through the ear",
   "caption": "Air → mechanics → fluid → nerve. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"180\" y1=\"70\" x2=\"195\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"355\" y1=\"70\" x2=\"370\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"530\" y1=\"70\" x2=\"545\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"715\" y1=\"70\" x2=\"200\" y2=\"200\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"360\" y1=\"200\" x2=\"545\" y2=\"200\"/>",
   "parts": {
    "pinna": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Pinna: collects,",
      "localises (HRTF)"
     ],
     "lx": 100.0,
     "ly": 68.0
    },
    "canal": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"195\" y=\"40\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Ear canal: resonance",
      "2.5-3 kHz"
     ],
     "lx": 275.0,
     "ly": 68.0
    },
    "drum": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"370\" y=\"40\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Eardrum + ossicles:",
      "×22 pressure"
     ],
     "lx": 450.0,
     "ly": 68.0
    },
    "coch": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"545\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Cochlea: basilar",
      "membrane tonotopy"
     ],
     "lx": 630.0,
     "ly": 68.0
    },
    "ihc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"200\" y=\"170\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Inner hair cells:",
      "transduce"
     ],
     "lx": 280.0,
     "ly": 198.0
    },
    "ohc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"380\" y=\"170\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Outer hair cells:",
      "amplify"
     ],
     "lx": 460.0,
     "ly": 198.0
    },
    "brain": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9ecec\" x=\"545\" y=\"170\" width=\"180\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Nucleus → olive → colliculus",
      "→ MGB → cortex"
     ],
     "lx": 635.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "pinna": [
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
    "canal": [
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
    "drum": [
     {
      "t": [
       370.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "coch": [
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
    "ihc": [
     {
      "t": [
       200.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "ohc": [
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
    "brain": [
     {
      "t": [
       545.0,
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
   "root": "Hearing",
   "branches": [
    [
     "Sound",
     [
      "343 m/s",
      "dB = 20 log(P/20 µPa)",
      "+10 dB = 10× intensity",
      "Weber-Fechner"
     ]
    ],
    [
     "Outer ear",
     [
      "Pinna: HRTF",
      "Canal: 2.5-3 kHz"
     ]
    ],
    [
     "Middle ear",
     [
      "Impedance matching",
      "×22 pressure"
     ]
    ],
    [
     "Cochlea",
     [
      "Base: high freq",
      "Apex: low freq",
      "IHC detect, OHC amplify"
     ]
    ],
    [
     "Pathway",
     [
      "Cochlear nucleus → olive",
      "→ colliculus → MGB → cortex"
     ]
    ],
    [
     "Hearing loss",
     [
      "Conductive: air ↓ only",
      "Sensorineural: both ↓",
      "Aids, implants"
     ]
    ]
   ]
  }
 },
 "mcqs": [
  {
   "q": "The speed of sound in air at 20 °C is about:",
   "options": [
    "343 m/s",
    "1,500 m/s",
    "34 m/s",
    "3×10⁸ m/s"
   ],
   "answer": 0,
   "why": "λ = c/f."
  },
  {
   "q": "The reference pressure for dB SPL is:",
   "options": [
    "1 atm",
    "20 µPa",
    "1 Pa",
    "20 Pa"
   ],
   "answer": 1,
   "why": "The threshold of hearing."
  },
  {
   "q": "An increase of 10 dB corresponds to:",
   "options": [
    "100× loudness",
    "10× intensity",
    "2× intensity",
    "No change"
   ],
   "answer": 1,
   "why": "Logarithmic perception."
  },
  {
   "q": "If sound pressure doubles, intensity:",
   "options": [
    "Is unchanged",
    "Doubles",
    "Quadruples",
    "Halves"
   ],
   "answer": 2,
   "why": "Intensity ∝ pressure²."
  },
  {
   "q": "The Weber-Fechner law states that perception grows:",
   "options": [
    "Linearly",
    "Not at all",
    "Logarithmically",
    "Exponentially"
   ],
   "answer": 2,
   "why": "The brain compresses intensity."
  },
  {
   "q": "The ear is most sensitive to frequencies of about:",
   "options": [
    "50-100 Hz",
    "15-20 kHz",
    "200 Hz",
    "2-4 kHz"
   ],
   "answer": 3,
   "why": "Speech consonants."
  },
  {
   "q": "The ear canal resonates around:",
   "options": [
    "2.5-3 kHz",
    "10 kHz",
    "20 kHz",
    "250 Hz"
   ],
   "answer": 0,
   "why": "Amplifying those frequencies."
  },
  {
   "q": "The main function of the middle ear is:",
   "options": [
    "Impedance matching",
    "Frequency analysis",
    "Sound localisation",
    "Balance"
   ],
   "answer": 0,
   "why": "Pressure raised about 22×."
  },
  {
   "q": "Without the middle ear, about what fraction of sound energy would be reflected?",
   "options": [
    "50%",
    "10%",
    "0%",
    "99%"
   ],
   "answer": 3,
   "why": "Air and fluid impedances differ greatly."
  },
  {
   "q": "High frequencies are detected at the:",
   "options": [
    "Semicircular canals",
    "Apex of the cochlea",
    "Round window only",
    "Base of the cochlea"
   ],
   "answer": 3,
   "why": "Stiff, narrow basilar membrane."
  },
  {
   "q": "Which cells are the true sensory receptors of hearing?",
   "options": [
    "Ossicles",
    "Inner hair cells",
    "Supporting cells",
    "Outer hair cells"
   ],
   "answer": 1,
   "why": "Outer hair cells amplify."
  },
  {
   "q": "The thalamic relay of the auditory pathway is the:",
   "options": [
    "Lateral geniculate body",
    "Medial geniculate body",
    "Pulvinar",
    "Superior colliculus"
   ],
   "answer": 1,
   "why": "Then auditory cortex."
  },
  {
   "q": "Air conduction reduced with normal bone conduction indicates:",
   "options": [
    "Normal hearing",
    "Mixed loss",
    "Sensorineural loss",
    "Conductive loss"
   ],
   "answer": 3,
   "why": "Outer or middle ear problem."
  },
  {
   "q": "Otosclerosis causes hearing loss by:",
   "options": [
    "Blocking stapes movement",
    "Destroying hair cells",
    "Blocking the canal with wax",
    "Damaging the nerve"
   ],
   "answer": 0,
   "why": "A conductive loss."
  },
  {
   "q": "A cochlear implant works by:",
   "options": [
    "Amplifying sound",
    "Moving the ossicles",
    "Replacing the eardrum",
    "Stimulating the nerve"
   ],
   "answer": 3,
   "why": "Bypassing destroyed hair cells."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pinna",
   "options": [
    "Ear canal",
    "Pinna",
    "Cochlea",
    "Middle ear"
   ],
   "answer": 1,
   "why": "The arrow points to: Pinna. Captures sound and filters it by direction (head-related transfer function) to help localisation."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "canal",
   "options": [
    "Cochlea",
    "Ear canal",
    "Pinna",
    "Inner hair cells"
   ],
   "answer": 1,
   "why": "The arrow points to: Ear canal. Tube resonance amplifies 2.5-3 kHz, the range of speech consonants."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "drum",
   "options": [
    "Central pathway",
    "Cochlea",
    "Middle ear",
    "Ear canal"
   ],
   "answer": 2,
   "why": "The arrow points to: Middle ear. Eardrum and ossicles (malleus, incus, stapes) match air to fluid impedance, raising pressure ~22×; without it ~99% of energy would be reflected."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "coch",
   "options": [
    "Outer hair cells",
    "Inner hair cells",
    "Middle ear",
    "Cochlea"
   ],
   "answer": 3,
   "why": "The arrow points to: Cochlea. 2.5 turns; scala vestibuli and tympani (perilymph), scala media (endolymph); stiff narrow base = high frequencies, wide floppy apex = low."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ihc",
   "options": [
    "Inner hair cells",
    "Pinna",
    "Middle ear",
    "Cochlea"
   ],
   "answer": 0,
   "why": "The arrow points to: Inner hair cells. True sensory receptors converting vibration into nerve signals."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ohc",
   "options": [
    "Pinna",
    "Inner hair cells",
    "Outer hair cells",
    "Ear canal"
   ],
   "answer": 2,
   "why": "The arrow points to: Outer hair cells. Biological amplifier sharpening basilar membrane vibration."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "brain",
   "options": [
    "Central pathway",
    "Cochlea",
    "Outer hair cells",
    "Ear canal"
   ],
   "answer": 0,
   "why": "The arrow points to: Central pathway. Bilateral: redundancy and sound localisation."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Physical properties of sound?",
   "back": "Mechanical wave; frequency (pitch), amplitude (loudness), phase; c ≈ 343 m/s in air; λ = c/f."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Decibel scale?",
   "back": "dB SPL = 20 log₁₀(P/20 µPa); +10 dB = 10× intensity ≈ perceived doubling; range 20 µPa-20 Pa."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Loudness and Weber-Fechner?",
   "back": "Loudness is subjective; perception grows logarithmically; ear most sensitive 2-4 kHz, so equal SPL ≠ equal loudness."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Roles of the outer ear?",
   "back": "Pinna: collection, directional filtering (HRTF). Canal: resonance 2.5-3 kHz. Eardrum: acoustic → mechanical."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Role of the middle ear?",
   "back": "Impedance matching air → fluid via ossicle lever; pressure ×22; prevents ~99% reflection."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Cochlear structure and tonotopy?",
   "back": "Scala vestibuli and tympani (perilymph), scala media (endolymph, organ of Corti); base stiff/narrow = high, apex wide/floppy = low."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Inner vs outer hair cells?",
   "back": "Inner: transduction (true receptors). Outer: amplification and tuning."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Central auditory pathway?",
   "back": "Auditory nerve → cochlear nucleus → superior olive → inferior colliculus → medial geniculate body → auditory cortex; bilateral."
  },
  {
   "id": "x8",
   "type": "text",
   "front": "Conductive vs sensorineural loss?",
   "back": "Conductive: air ↓, bone normal (wax, otitis media, otosclerosis). Sensorineural: both ↓ (noise, presbycusis, ototoxic drugs). Mixed: both."
  },
  {
   "id": "x9",
   "type": "text",
   "front": "Hearing aid vs cochlear implant?",
   "back": "Aid: amplifies poorly heard frequencies (mild-moderate sensorineural). Implant: stimulates the auditory nerve when hair cells are destroyed."
  },
  {
   "id": "img-pinna",
   "type": "image",
   "target": "pinna",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Pinna. Captures sound and filters it by direction (head-related transfer function) to help localisation."
  },
  {
   "id": "img-canal",
   "type": "image",
   "target": "canal",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Ear canal. Tube resonance amplifies 2.5-3 kHz, the range of speech consonants."
  },
  {
   "id": "img-drum",
   "type": "image",
   "target": "drum",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Middle ear. Eardrum and ossicles (malleus, incus, stapes) match air to fluid impedance, raising pressure ~22×; without it ~99% of energy would be reflected."
  },
  {
   "id": "img-coch",
   "type": "image",
   "target": "coch",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Cochlea. 2.5 turns; scala vestibuli and tympani (perilymph), scala media (endolymph); stiff narrow base = high frequencies, wide floppy apex = low."
  },
  {
   "id": "img-ihc",
   "type": "image",
   "target": "ihc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Inner hair cells. True sensory receptors converting vibration into nerve signals."
  },
  {
   "id": "img-ohc",
   "type": "image",
   "target": "ohc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Outer hair cells. Biological amplifier sharpening basilar membrane vibration."
  },
  {
   "id": "img-brain",
   "type": "image",
   "target": "brain",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Central pathway. Bilateral: redundancy and sound localisation."
  }
 ],
 "deeper": [
  {
   "title": "Why the middle ear is needed",
   "html": "<p>Sound in air carries little pressure but lots of movement; cochlear fluid needs high pressure to move. Sending airborne sound straight into fluid would reflect almost all the energy, as happens when you shout at a swimming pool. The large eardrum funnels force onto the tiny stapes footplate and the ossicle lever adds leverage, multiplying pressure about 22 times.</p><p class='src'>Source: the lecture's middle ear function slide.</p>"
  },
  {
   "title": "Why air vs bone conduction pinpoints the problem",
   "html": "<p>Bone conduction vibrates the skull and reaches the cochlea directly, skipping the outer and middle ear. If a patient hears poorly through headphones but normally through bone, the cochlea works and the block is in transmission (conductive). If both are equally poor, the cochlea or nerve is damaged (sensorineural).</p><p class='src'>Source: the lecture's audiometry slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "How do we hear? (NIDCD)",
   "url": "https://www.nidcd.nih.gov/health/how-do-we-hear",
   "kind": "Article",
   "why": "The ear and hearing explained.",
   "note": ""
  },
  {
   "title": "Hearing loss (NHS)",
   "url": "https://www.nhs.uk/conditions/hearing-loss/",
   "kind": "Article",
   "why": "Types, causes, hearing aids and implants.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "How do we hear? (NIDCD)",
   "url": "https://www.nidcd.nih.gov/health/how-do-we-hear"
  },
  {
   "name": "Hearing loss (NHS)",
   "url": "https://www.nhs.uk/conditions/hearing-loss/"
  }
 ],
 "verified": "22 Sep 2026"
};
