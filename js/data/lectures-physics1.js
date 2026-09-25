/* physics1: 13 lectures, merged for upload. Edit the source files, not this one. */
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physics1-units"] = {
 "id": "physics1-units",
 "subject": "physics1",
 "group": "General",
 "title": "Quantities, units and measurement uncertainties",
 "sourceFile": "Quantities and Units - Uncertainties (Physics, Pr. Ghfir)",
 "sourceUrl": "https://drive.google.com/file/d/1n231mJQXhCFE7ImsIDNnjJUmqiBI4LYO/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>The Physics-Biophysics module studies <strong>physical and physicochemical phenomena in living organisms</strong> and the action of external agents (force, pressure, gravity) on them, from states of matter to the major functions (circulation, respiration, acid-base balance). It starts with how we <strong>measure</strong>: quantities, units and uncertainties.</p>"
  },
  {
   "id": "s1",
   "title": "Quantities and units",
   "html": "<p>A <strong>physical quantity</strong> is a measurable (or calculable) property. The <strong>SI</strong> has <strong>7 fundamental quantities</strong>: length (<strong>m</strong>), mass (<strong>kg</strong>), time (<strong>s</strong>), electric current (<strong>A</strong>), temperature (<strong>K</strong>), amount of substance (<strong>mol</strong>), luminous intensity (<strong>cd</strong>). <strong>Derived quantities</strong> combine them: area m², volume m³, density kg/m³, velocity m·s⁻¹, acceleration m·s⁻², <strong>force newton N = kg·m·s⁻²</strong>, <strong>pressure pascal Pa = N·m⁻²</strong>, energy joule J, power watt W = J·s⁻¹, absorbed dose gray Gy = J·kg⁻¹, activity becquerel Bq, charge coulomb C = A·s, potential volt V = J·C⁻¹. <strong>Extensive</strong> quantities are proportional to the amount of matter and additive (mass, volume); <strong>intensive</strong> quantities do not depend on it (temperature, pressure, concentration). Prefixes: kilo 10³, mega 10⁶, giga 10⁹, tera 10¹², peta 10¹⁵, exa 10¹⁸; milli 10⁻³, micro 10⁻⁶, nano 10⁻⁹, pico 10⁻¹², femto 10⁻¹⁵, atto 10⁻¹⁸.</p><p>A <strong>dimensional equation</strong> expresses a quantity in base dimensions and checks the <strong>homogeneity</strong> of formulas: velocity L·T⁻¹; force M·L·T⁻²; energy M·L²·T⁻²; pressure M·L⁻¹·T⁻². A <strong>gradient</strong> is the change of a quantity per unit distance (e.g. concentration gradient), the driving force of many transport phenomena.</p>"
  },
  {
   "id": "s2",
   "title": "Measurement uncertainties",
   "html": "<p>Every measurement has an error. <strong>Systematic errors</strong> shift all results the same way (badly calibrated instrument, method bias) and are not reduced by repeating; <strong>random errors</strong> scatter results around the true value and are reduced by averaging repeated measurements. The <strong>absolute uncertainty</strong> Δx has the units of x; the <strong>relative uncertainty</strong> Δx/x is unitless (often %). Propagation: for sums and differences, <strong>absolute uncertainties add</strong>; for products and quotients, <strong>relative uncertainties add</strong> (e.g. for a concentration C = n/V: ΔC/C = Δn/n + ΔV/V). A result is written x ± Δx with sensible significant figures.</p>"
  }
 ],
 "exam": [
  "7 SI base units: m, kg, s, A, K, mol, cd.",
  "N = kg·m·s⁻²; Pa = N·m⁻²; J; W = J·s⁻¹; Gy = J·kg⁻¹; C = A·s; V = J·C⁻¹.",
  "Extensive (additive: mass, volume) vs intensive (temperature, pressure, concentration).",
  "Prefixes: k 10³, M 10⁶, G 10⁹; m 10⁻³, µ 10⁻⁶, n 10⁻⁹, p 10⁻¹².",
  "Dimensional equations check homogeneity: force M·L·T⁻².",
  "Gradient = change per unit distance.",
  "Systematic error: constant bias; random error: scatter, reduced by averaging.",
  "Sums: add absolute uncertainties; products/quotients: add relative ones."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "SI base quantities",
   "caption": "Seven fundamental quantities and their units. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs>",
   "parts": {
    "l": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"160\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Length [L]:",
      "metre (m)"
     ],
     "lx": 100.0,
     "ly": 65.5
    },
    "m": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"195\" y=\"40\" width=\"160\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Mass [M]:",
      "kilogram (kg)"
     ],
     "lx": 275.0,
     "ly": 65.5
    },
    "t": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"370\" y=\"40\" width=\"160\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Time [T]:",
      "second (s)"
     ],
     "lx": 450.0,
     "ly": 65.5
    },
    "i": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"545\" y=\"40\" width=\"160\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Current [I]:",
      "ampere (A)"
     ],
     "lx": 625.0,
     "ly": 65.5
    },
    "th": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"110\" y=\"160\" width=\"160\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Temperature [θ]:",
      "kelvin (K)"
     ],
     "lx": 190.0,
     "ly": 185.5
    },
    "n": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"290\" y=\"160\" width=\"160\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Amount [N]:",
      "mole (mol)"
     ],
     "lx": 370.0,
     "ly": 185.5
    },
    "j": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9ecec\" x=\"470\" y=\"160\" width=\"180\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Luminous intensity [J]:",
      "candela (cd)"
     ],
     "lx": 560.0,
     "ly": 185.5
    }
   },
   "arrows": {
    "l": [
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
    "m": [
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
    "t": [
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
    "i": [
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
    "th": [
     {
      "t": [
       110.0,
       168.0
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
       290.0,
       168.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "j": [
     {
      "t": [
       470.0,
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
   "q": "How many fundamental quantities does the SI have?",
   "options": [
    "7",
    "12",
    "5",
    "9"
   ],
   "answer": 0,
   "why": "m, kg, s, A, K, mol, cd."
  },
  {
   "q": "The SI unit of amount of substance is:",
   "options": [
    "Mole",
    "Kelvin",
    "Gram",
    "Litre"
   ],
   "answer": 0,
   "why": "Avogadro's number of entities."
  },
  {
   "q": "One newton equals:",
   "options": [
    "kg·m²·s⁻²",
    "kg·m·s⁻²",
    "N·m⁻²",
    "kg·m·s⁻¹"
   ],
   "answer": 1,
   "why": "Mass × acceleration."
  },
  {
   "q": "One pascal equals:",
   "options": [
    "N·m⁻²",
    "J·s⁻¹",
    "N·m",
    "kg·m⁻³"
   ],
   "answer": 0,
   "why": "Pressure."
  },
  {
   "q": "The dimension of force is:",
   "options": [
    "M·L²·T⁻²",
    "L·T⁻²",
    "M·L·T⁻¹",
    "M·L·T⁻²"
   ],
   "answer": 3,
   "why": "Energy is M·L²·T⁻²."
  },
  {
   "q": "Which quantity is intensive?",
   "options": [
    "Mass",
    "Temperature",
    "Amount of matter",
    "Volume"
   ],
   "answer": 1,
   "why": "It does not depend on system size."
  },
  {
   "q": "Extensive quantities are:",
   "options": [
    "Independent of size",
    "Additive, size-dependent",
    "Always temperatures",
    "Unitless"
   ],
   "answer": 1,
   "why": "E.g. mass, volume."
  },
  {
   "q": "The prefix 'nano' means:",
   "options": [
    "10⁻³",
    "10⁻¹²",
    "10⁻⁶",
    "10⁻⁹"
   ],
   "answer": 3,
   "why": "Pico is 10⁻¹²."
  },
  {
   "q": "A dimensional equation is used to:",
   "options": [
    "Convert moles",
    "Check the homogeneity of a formula",
    "Calculate uncertainty",
    "Measure temperature"
   ],
   "answer": 1,
   "why": "Both sides must have the same dimensions."
  },
  {
   "q": "A systematic error:",
   "options": [
    "Is always zero",
    "Is random",
    "Biases all results",
    "Is reduced by averaging"
   ],
   "answer": 2,
   "why": "E.g. poor calibration."
  },
  {
   "q": "Random errors are reduced by:",
   "options": [
    "Recalibration only",
    "Nothing",
    "Changing units",
    "Averaging repeated measurements"
   ],
   "answer": 3,
   "why": "They scatter around the true value."
  },
  {
   "q": "For a quotient C = n/V, the relative uncertainty is:",
   "options": [
    "Δn/ΔV",
    "Δn − ΔV",
    "Δn × ΔV",
    "Δn/n + ΔV/V"
   ],
   "answer": 3,
   "why": "Relative uncertainties add."
  },
  {
   "q": "For a sum, you add:",
   "options": [
    "Absolute uncertainties",
    "Squares of values",
    "Relative uncertainties",
    "Nothing"
   ],
   "answer": 0,
   "why": "Δ(a + b) = Δa + Δb."
  },
  {
   "q": "The gray (Gy) equals:",
   "options": [
    "N·m⁻²",
    "J·kg⁻¹",
    "J·s⁻¹",
    "A·s"
   ],
   "answer": 1,
   "why": "Absorbed dose."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "l",
   "options": [
    "Mass",
    "Time",
    "Length",
    "Electric current"
   ],
   "answer": 2,
   "why": "The arrow points to: Length. Base dimension L; derived: area L², volume L³."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "m",
   "options": [
    "Mass",
    "Length",
    "Temperature",
    "Electric current"
   ],
   "answer": 0,
   "why": "The arrow points to: Mass. Base dimension M; density M·L⁻³."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "t",
   "options": [
    "Mass",
    "Luminous intensity",
    "Time",
    "Electric current"
   ],
   "answer": 2,
   "why": "The arrow points to: Time. Base dimension T; velocity L·T⁻¹, acceleration L·T⁻²."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "i",
   "options": [
    "Time",
    "Temperature",
    "Electric current",
    "Amount of substance"
   ],
   "answer": 2,
   "why": "The arrow points to: Electric current. Base dimension I; charge C = A·s."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "th",
   "options": [
    "Temperature",
    "Time",
    "Length",
    "Electric current"
   ],
   "answer": 0,
   "why": "The arrow points to: Temperature. Absolute temperature in kelvin."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "n",
   "options": [
    "Length",
    "Temperature",
    "Amount of substance",
    "Mass"
   ],
   "answer": 2,
   "why": "The arrow points to: Amount of substance. Mole: Avogadro's number of entities."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "j",
   "options": [
    "Luminous intensity",
    "Amount of substance",
    "Mass",
    "Electric current"
   ],
   "answer": 0,
   "why": "The arrow points to: Luminous intensity. Candela."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Seven SI base quantities and units?",
   "back": "Length m, mass kg, time s, current A, temperature K, amount mol, luminous intensity cd."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Key derived units?",
   "back": "N = kg·m·s⁻², Pa = N·m⁻², J, W = J·s⁻¹, Gy = J·kg⁻¹, Bq, C = A·s, V = J·C⁻¹."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Extensive vs intensive?",
   "back": "Extensive: proportional to amount, additive (mass, volume). Intensive: independent of amount (temperature, pressure, concentration)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Purpose of a dimensional equation?",
   "back": "Express a quantity in base dimensions and check a formula's homogeneity (force M·L·T⁻²)."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Systematic vs random error?",
   "back": "Systematic: constant bias, not reduced by repetition. Random: scatter, reduced by averaging."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Uncertainty propagation rules?",
   "back": "Sums/differences: add absolute uncertainties. Products/quotients: add relative uncertainties."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Common SI prefixes?",
   "back": "kilo 10³, mega 10⁶, giga 10⁹; milli 10⁻³, micro 10⁻⁶, nano 10⁻⁹, pico 10⁻¹²."
  },
  {
   "id": "img-l",
   "type": "image",
   "target": "l",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Length. Base dimension L; derived: area L², volume L³."
  },
  {
   "id": "img-m",
   "type": "image",
   "target": "m",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Mass. Base dimension M; density M·L⁻³."
  },
  {
   "id": "img-t",
   "type": "image",
   "target": "t",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Time. Base dimension T; velocity L·T⁻¹, acceleration L·T⁻²."
  },
  {
   "id": "img-i",
   "type": "image",
   "target": "i",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Electric current. Base dimension I; charge C = A·s."
  },
  {
   "id": "img-th",
   "type": "image",
   "target": "th",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Temperature. Absolute temperature in kelvin."
  },
  {
   "id": "img-n",
   "type": "image",
   "target": "n",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Amount of substance. Mole: Avogadro's number of entities."
  },
  {
   "id": "img-j",
   "type": "image",
   "target": "j",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Luminous intensity. Candela."
  }
 ],
 "deeper": [
  {
   "title": "Why check the dimensions of a formula",
   "html": "<p>An equation that mixes, say, a length on one side and a pressure on the other cannot be right, whatever the numbers. Writing each term in M, L and T catches such mistakes instantly and is a quick way to recover a forgotten formula in an exam.</p><p class='src'>Source: the lecture's dimensional equation slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "SI base units (NIST)",
   "url": "https://www.nist.gov/pml/owm/metric-si/si-units",
   "kind": "Website",
   "why": "Official definitions of the SI units.",
   "note": ""
  },
  {
   "title": "Uncertainty of measurement (NIST)",
   "url": "https://physics.nist.gov/cuu/Uncertainty/",
   "kind": "Website",
   "why": "Basics of expressing uncertainty.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "SI base units (NIST)",
   "url": "https://www.nist.gov/pml/owm/metric-si/si-units"
  },
  {
   "name": "Uncertainty of measurement (NIST)",
   "url": "https://physics.nist.gov/cuu/Uncertainty/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physics1-states"] = {
 "id": "physics1-states",
 "subject": "physics1",
 "group": "States of matter and energetics",
 "title": "Physical states of matter",
 "sourceFile": "Physical States of matter (Physics, Pr. Ghfir)",
 "sourceUrl": "https://drive.google.com/file/d/19npFfZdUYs1EtfFFsMsTLmjXUP2PHH7h/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>Matter is <strong>solid, liquid or gas</strong> (or changing state) depending on temperature and pressure. The molecules are the same in each state; what differs is the balance between <strong>attractive forces</strong> that gather particles and <strong>repulsive causes</strong> (repulsion, thermal agitation) that disperse them.</p>"
  },
  {
   "id": "s1",
   "title": "Intermolecular forces",
   "html": "<p><strong>Between ions</strong>: <strong>Coulomb's law F = k·q·q′/(ε·d²)</strong>: inversely proportional to the <strong>dielectric constant ε</strong> and to distance squared. Water has a high ε (<strong>78.5</strong> at 25 °C), so ions attract weakly and separate: <strong>electrolytic dissociation</strong>; ethanol (ε = 24.3) keeps ions together. <strong>Between neutral molecules</strong>: <strong>Van der Waals</strong> forces from uneven charge distribution (dipoles), very short-range (F ∝ 1/r⁷). <strong>Ion-dipole</strong>: ions attract the opposite pole of solvent dipoles: <strong>solvation</strong> (in water, <strong>hydration</strong>; Na⁺ surrounded by the oxygen poles of water). <strong>Repulsive</strong>: electron clouds cannot interpenetrate (F ∝ 1/r¹³, Pauli), and <strong>thermal agitation</strong> (Brownian motion, 1827), the main dispersing cause, increasing with absolute temperature.</p><p><strong>Solid</strong>: ordered, dense, fixed shape and volume. <strong>Liquid</strong>: disordered but close molecules, dense, takes the container's shape, fixed volume. <strong>Gas</strong>: far-apart molecules, low density, indeterminate shape and volume, compressible. <strong>Gel</strong> (intermediate): cross-linked macromolecular network enclosing a liquid.</p>"
  },
  {
   "id": "s2",
   "title": "Changes of state",
   "html": "<p>Reversible transformations driven by temperature and pressure, without chemical change. <strong>Melting</strong> (solid → liquid): during the change, temperature stays <strong>constant</strong> (0 °C for water at 1 atm) while solid and liquid coexist. <strong>Freezing</strong>: a liquid can cool below its freezing point without solidifying (<strong>supercooling / superfusion</strong>), then jumps back to the freezing temperature as it solidifies. Also vaporisation/condensation (liquid ↔ gas) and <strong>sublimation</strong> (solid → gas).</p><p><strong>Cryoscopy</strong>: a solution freezes at a lower temperature than its solvent; the <strong>cryoscopic depression Δθ = K × osmolality</strong> (Raoult's law), with <strong>K = 1.86</strong> °C·kg/mol for water (plasma ≈ water). Measuring Δθ gives a fluid's osmolality (plasma freezes at about −0.56 °C). <strong>Thermoregulation</strong>: evaporating water (sweat, breath) absorbs large amounts of heat (latent heat), the body's main way to lose heat when the environment is hot.</p>"
  }
 ],
 "exam": [
  "State = balance between attraction and dispersion.",
  "Coulomb: F = kqq′/(εd²); water ε = 78.5 → ions dissociate.",
  "Van der Waals: dipole forces, very short range.",
  "Solvation (hydration in water): ions surrounded by solvent dipoles.",
  "Repulsion (Pauli) and thermal (Brownian) agitation disperse molecules.",
  "Solid ordered and fixed; liquid fixed volume, flows; gas compressible.",
  "Melting and freezing at constant temperature; supercooling possible.",
  "Cryoscopy: Δθ = 1.86 × osmolality (water); plasma ≈ −0.56 °C.",
  "Water evaporation cools the body (latent heat)."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Forces that shape the states of matter",
   "caption": "Attraction gathers, agitation disperses. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs>",
   "parts": {
    "coul": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Coulomb (ions):",
      "F = kqq′/εd²"
     ],
     "lx": 105.0,
     "ly": 68.0
    },
    "vdw": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"200\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Van der Waals",
      "(dipoles): F ∝ 1/r⁷"
     ],
     "lx": 285.0,
     "ly": 68.0
    },
    "solv": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"380\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Ion-dipole:",
      "solvation (hydration)"
     ],
     "lx": 465.0,
     "ly": 68.0
    },
    "rep": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"560\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Repulsion: F ∝ 1/r¹³;",
      "thermal agitation"
     ],
     "lx": 645.0,
     "ly": 68.0
    },
    "s": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"40\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Solid: ordered,",
      "fixed shape and volume"
     ],
     "lx": 140.0,
     "ly": 198.0
    },
    "l": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"280\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Liquid: disordered, fixed",
      "volume, flows"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "g": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9ecec\" x=\"520\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Gas: far apart,",
      "compressible"
     ],
     "lx": 620.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "coul": [
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
    "vdw": [
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
    "solv": [
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
    "rep": [
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
    "s": [
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
    "l": [
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
    "g": [
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
   "q": "A state of matter results from:",
   "options": [
    "Attraction vs dispersion",
    "Only temperature",
    "Different molecules",
    "Only pressure"
   ],
   "answer": 0,
   "why": "The molecules are the same."
  },
  {
   "q": "According to Coulomb's law, the force between ions is inversely proportional to:",
   "options": [
    "ε and distance squared",
    "Mass",
    "The charges",
    "Temperature"
   ],
   "answer": 0,
   "why": "F = kqq′/(εd²)."
  },
  {
   "q": "Why do salts dissociate well in water?",
   "options": [
    "Water is non-polar",
    "Water has a high dielectric constant (78.5)",
    "Water has a low dielectric constant",
    "Water is a gas"
   ],
   "answer": 1,
   "why": "Ionic attraction is weakened."
  },
  {
   "q": "Van der Waals forces act between:",
   "options": [
    "Neutral dipoles",
    "Electrons and protons",
    "Ions only",
    "Nuclei"
   ],
   "answer": 0,
   "why": "Very short range."
  },
  {
   "q": "Hydration is:",
   "options": [
    "Evaporation of water",
    "Condensation",
    "Freezing",
    "Solvation by water"
   ],
   "answer": 3,
   "why": "E.g. Na⁺ surrounded by water oxygens."
  },
  {
   "q": "The main cause of molecular dispersion is:",
   "options": [
    "Van der Waals force",
    "Thermal agitation",
    "Gravity",
    "Coulomb force"
   ],
   "answer": 1,
   "why": "It increases with temperature."
  },
  {
   "q": "A liquid has:",
   "options": [
    "Fixed shape and volume",
    "Fixed volume but no fixed shape",
    "No fixed volume",
    "Ordered molecules"
   ],
   "answer": 1,
   "why": "It flows."
  },
  {
   "q": "A gas is:",
   "options": [
    "Dense",
    "Ordered",
    "Incompressible",
    "Compressible"
   ],
   "answer": 3,
   "why": "Molecules far apart."
  },
  {
   "q": "During melting of pure ice at 1 atm, temperature:",
   "options": [
    "Oscillates",
    "Stays constant at 0 °C",
    "Rises steadily",
    "Falls"
   ],
   "answer": 1,
   "why": "Solid and liquid coexist."
  },
  {
   "q": "Supercooling (superfusion) is:",
   "options": [
    "Sublimation",
    "Boiling at low temperature",
    "Liquid below 0 °C",
    "Freezing above 0 °C"
   ],
   "answer": 2,
   "why": "It then freezes suddenly."
  },
  {
   "q": "Cryoscopic depression is proportional to:",
   "options": [
    "Volume",
    "Density",
    "Mass",
    "Osmolality"
   ],
   "answer": 3,
   "why": "Δθ = K × osmolality."
  },
  {
   "q": "The cryoscopic constant of water is:",
   "options": [
    "0.52",
    "22.4",
    "78.5",
    "1.86"
   ],
   "answer": 3,
   "why": "°C·kg/mol."
  },
  {
   "q": "Sublimation is the transition:",
   "options": [
    "Solid → gas",
    "Liquid → gas",
    "Gas → liquid",
    "Solid → liquid"
   ],
   "answer": 0,
   "why": "Without passing through liquid."
  },
  {
   "q": "How does sweating cool the body?",
   "options": [
    "By conduction",
    "Evaporation heat loss",
    "It does not",
    "By radiation only"
   ],
   "answer": 1,
   "why": "Main heat loss in hot conditions."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "coul",
   "options": [
    "Dispersing causes",
    "Van der Waals forces",
    "Coulomb force",
    "Solvation"
   ],
   "answer": 2,
   "why": "The arrow points to: Coulomb force. Attraction between ions, inversely proportional to the dielectric constant and distance squared; water's high ε (78.5) separates ions."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "vdw",
   "options": [
    "Van der Waals forces",
    "Solid",
    "Coulomb force",
    "Dispersing causes"
   ],
   "answer": 0,
   "why": "The arrow points to: Van der Waals forces. Attraction between neutral molecules behaving as dipoles; very short range."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "solv",
   "options": [
    "Gas",
    "Van der Waals forces",
    "Solvation",
    "Dispersing causes"
   ],
   "answer": 2,
   "why": "The arrow points to: Solvation. Ions attract the opposite poles of solvent dipoles; in water, hydration (Na⁺ surrounded by water oxygens)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "rep",
   "options": [
    "Liquid",
    "Solvation",
    "Dispersing causes",
    "Solid"
   ],
   "answer": 2,
   "why": "The arrow points to: Dispersing causes. Electron-cloud repulsion at contact (Pauli) and Brownian thermal agitation, rising with temperature."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "s",
   "options": [
    "Solid",
    "Solvation",
    "Dispersing causes",
    "Coulomb force"
   ],
   "answer": 0,
   "why": "The arrow points to: Solid. Strong interactions, dense, definite shape and volume."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "l",
   "options": [
    "Solid",
    "Van der Waals forces",
    "Liquid",
    "Coulomb force"
   ],
   "answer": 2,
   "why": "The arrow points to: Liquid. Close but disordered molecules; takes the container's shape; nearly incompressible."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "g",
   "options": [
    "Gas",
    "Dispersing causes",
    "Van der Waals forces",
    "Liquid"
   ],
   "answer": 0,
   "why": "The arrow points to: Gas. Very low density; shape and volume set by the container; compressible and expandable."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "What determines the state of matter?",
   "back": "Competition between attractive forces (Coulomb, Van der Waals, ion-dipole) and dispersing causes (repulsion, thermal agitation)."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Coulomb's law and water?",
   "back": "F = kqq′/(εd²); water's high ε (78.5) weakens ionic attraction → electrolytic dissociation."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Van der Waals and solvation?",
   "back": "Van der Waals: attraction between dipoles of neutral molecules. Solvation: ions surrounded by solvent dipoles (hydration in water)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Properties of solid, liquid, gas, gel?",
   "back": "Solid: ordered, fixed shape and volume. Liquid: fixed volume, flows. Gas: compressible. Gel: macromolecular network enclosing a liquid."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Melting and supercooling?",
   "back": "Melting occurs at constant temperature; a liquid can supercool below its freezing point before solidifying."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Cryoscopy?",
   "back": "Δθ = K × osmolality (K = 1.86 for water); used to measure osmolality of plasma (≈ −0.56 °C)."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Role of evaporation in thermoregulation?",
   "back": "Evaporating sweat absorbs latent heat, the main heat loss when ambient temperature is high."
  },
  {
   "id": "img-coul",
   "type": "image",
   "target": "coul",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Coulomb force. Attraction between ions, inversely proportional to the dielectric constant and distance squared; water's high ε (78.5) separates ions."
  },
  {
   "id": "img-vdw",
   "type": "image",
   "target": "vdw",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Van der Waals forces. Attraction between neutral molecules behaving as dipoles; very short range."
  },
  {
   "id": "img-solv",
   "type": "image",
   "target": "solv",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Solvation. Ions attract the opposite poles of solvent dipoles; in water, hydration (Na⁺ surrounded by water oxygens)."
  },
  {
   "id": "img-rep",
   "type": "image",
   "target": "rep",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Dispersing causes. Electron-cloud repulsion at contact (Pauli) and Brownian thermal agitation, rising with temperature."
  },
  {
   "id": "img-s",
   "type": "image",
   "target": "s",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Solid. Strong interactions, dense, definite shape and volume."
  },
  {
   "id": "img-l",
   "type": "image",
   "target": "l",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Liquid. Close but disordered molecules; takes the container's shape; nearly incompressible."
  },
  {
   "id": "img-g",
   "type": "image",
   "target": "g",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Gas. Very low density; shape and volume set by the container; compressible and expandable."
  }
 ],
 "deeper": [
  {
   "title": "Why cryoscopy measures osmolality",
   "html": "<p>Dissolved particles make it harder for solvent molecules to organise into a crystal, lowering the freezing point in proportion to the number of particles per kilogram of solvent, whatever their nature. Measuring how far below 0 °C plasma or urine freezes therefore counts all its dissolved particles, which is how osmometers work in the lab.</p><p class='src'>Source: the lecture's freezing and Raoult's law slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "States of matter (Khan Academy)",
   "url": "https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces",
   "kind": "Website",
   "why": "Intermolecular forces and phase changes.",
   "note": ""
  },
  {
   "title": "Colligative properties (Chemistry LibreTexts)",
   "url": "https://chem.libretexts.org/",
   "kind": "Website",
   "why": "Search 'freezing point depression'.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "States of matter (Khan Academy)",
   "url": "https://www.khanacademy.org/science/chemistry/states-of-matter-and-intermolecular-forces"
  },
  {
   "name": "Colligative properties (Chemistry LibreTexts)",
   "url": "https://chem.libretexts.org/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physics1-water"] = {
 "id": "physics1-water",
 "subject": "physics1",
 "group": "States of matter and energetics",
 "title": "Biophysics of water and solutions",
 "sourceFile": "Biophysics of water and solutions (Physics, Pr. Ghfir)",
 "sourceUrl": "https://drive.google.com/file/d/1cSF-9zmVXKx6Zmjxk9lZeQox2Bfs6t1o/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>Water is about <strong>two thirds of body weight</strong>, the reference fluid of biophysics and the solvent of most drugs. <strong>Total body water ≈ 60-65%</strong> of body weight (~75% in infants, falling with age): <strong>intracellular ≈ 40%</strong>, <strong>extracellular ≈ 20%</strong> (interstitial ≈ 15.5%, plasma water ≈ 4.5%).</p>"
  },
  {
   "id": "s1",
   "title": "Properties of water",
   "html": "<p>H₂O has <strong>polar covalent bonds</strong> (oxygen more electronegative) and molecules link by <strong>hydrogen bonds</strong>; polarity makes it a near-universal solvent. Boils at 100 °C, freezes at 0 °C (1 atm). Density ≈ 1 g/cm³ liquid vs <strong>0.91 g/cm³ ice</strong> (ice floats). Very high <strong>specific heat, 4.184 J/g·°C</strong> (thermal buffering). High <strong>surface tension</strong> (~72 mN/m at 25 °C). Very high <strong>dielectric constant, 78.5</strong> (excellent solvent for ions and polar substances). <strong>Amphoteric</strong> (acid and base), takes part in <strong>hydrolysis</strong>, acts as oxidant and reductant. It dissolves (polarity) and <strong>dissociates</strong> ionic crystals.</p><p><strong>Equivalent</strong>: the fraction of a mole of ions carrying one mole of charge (<strong>Faraday constant ≈ 96,500 C</strong>); for an ion of valence z, 1 mol = z Eq (Na⁺: 1 mol = 1 Eq; Ca²⁺: 1 mol = 2 Eq).</p>"
  },
  {
   "id": "s2",
   "title": "Concentrations",
   "html": "<p>A <strong>solution</strong> = solvent + one or more solutes in a single liquid phase. <strong>Mass concentration</strong> = m/V (g/L). <strong>Molarity</strong> = n/V (mol/L); the sum of all solute molarities is the <strong>osmolarity</strong>. <strong>Molality</strong> = n/mass of solvent (mol/kg); the sum is the <strong>osmolality</strong>. <strong>Equivalent concentration</strong> C_Eq = molarity × valence (Eq/L, mEq/L). <strong>Mole fraction</strong> x_i = n_i/Σn. <strong>Electroneutrality</strong>: total anionic Eq = total cationic Eq, so a missing ion can be calculated: e.g. 20 mEq/L Na⁺ and 45 mEq/L Cl⁻ imply <strong>25 mEq/L K⁺</strong>.</p>"
  }
 ],
 "exam": [
  "Total body water 60-65% (infants ~75%); intracellular 40%, extracellular 20% (interstitial 15.5, plasma 4.5).",
  "Water: polar, hydrogen bonds, universal solvent.",
  "Ice density 0.91 → floats; specific heat 4.184 J/g·°C.",
  "Dielectric constant 78.5; surface tension ~72 mN/m.",
  "Amphoteric; dissolving and dissociating power.",
  "1 mol of ion of valence z = z Eq; Faraday ≈ 96,500 C.",
  "Molarity (mol/L) → osmolarity; molality (mol/kg) → osmolality.",
  "C_Eq = molarity × valence.",
  "Electroneutrality: Σ anion Eq = Σ cation Eq."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Body water compartments",
   "caption": "As a percentage of body weight (adult). Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"50\" x2=\"120\" y2=\"170\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"50\" x2=\"440\" y2=\"170\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"540\" y1=\"200\" x2=\"440\" y2=\"260\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"540\" y1=\"200\" x2=\"620\" y2=\"260\"/>",
   "parts": {
    "tot": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"280\" y=\"20\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Total body water",
      "60-65% (infant ~75%)"
     ],
     "lx": 380.0,
     "ly": 48.0
    },
    "ic": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"120\" y=\"140\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Intracellular",
      "~40%"
     ],
     "lx": 220.0,
     "ly": 168.0
    },
    "ec": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"440\" y=\"140\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Extracellular",
      "~20%"
     ],
     "lx": 540.0,
     "ly": 168.0
    },
    "int": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"360\" y=\"260\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Interstitial",
      "~15.5%"
     ],
     "lx": 440.0,
     "ly": 288.0
    },
    "pl": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"540\" y=\"260\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Plasma water",
      "~4.5%"
     ],
     "lx": 620.0,
     "ly": 288.0
    }
   },
   "arrows": {
    "tot": [
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
    "ic": [
     {
      "t": [
       120.0,
       148.0
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
       440.0,
       148.0
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
       360.0,
       268.0
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
       540.0,
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
   "q": "Total body water in an adult is about:",
   "options": [
    "30%",
    "45%",
    "90%",
    "60-65%"
   ],
   "answer": 3,
   "why": "Higher in infants."
  },
  {
   "q": "Intracellular water represents about:",
   "options": [
    "15.5%",
    "60%",
    "40%",
    "4.5% of body weight"
   ],
   "answer": 2,
   "why": "Extracellular ~20%."
  },
  {
   "q": "Plasma water represents about:",
   "options": [
    "40%",
    "4.5% of body weight",
    "15.5%",
    "20%"
   ],
   "answer": 1,
   "why": "Interstitial ~15.5%."
  },
  {
   "q": "Water molecules are linked to each other by:",
   "options": [
    "Peptide bonds",
    "Metallic bonds",
    "Hydrogen bonds",
    "Ionic bonds"
   ],
   "answer": 2,
   "why": "Due to polarity."
  },
  {
   "q": "Why does ice float?",
   "options": [
    "It is less dense",
    "It is polar",
    "It is denser",
    "It contains air"
   ],
   "answer": 0,
   "why": "Hydrogen bonds form an open lattice."
  },
  {
   "q": "The specific heat of water is about:",
   "options": [
    "100 J/g·°C",
    "1 J/g·°C",
    "78.5 J/g·°C",
    "4.184 J/g·°C"
   ],
   "answer": 3,
   "why": "Very high: buffers temperature."
  },
  {
   "q": "Water's dielectric constant at 25 °C is about:",
   "options": [
    "24.3",
    "78.5",
    "96,500",
    "1"
   ],
   "answer": 1,
   "why": "Makes it a strong solvent for ions."
  },
  {
   "q": "Water can act as an acid and a base: it is:",
   "options": [
    "Amphoteric",
    "Neutral",
    "Inert",
    "Hydrophobic"
   ],
   "answer": 0,
   "why": "Amphoterism."
  },
  {
   "q": "How many equivalents in 1 mol of Ca²⁺?",
   "options": [
    "1",
    "0.5",
    "4",
    "2"
   ],
   "answer": 3,
   "why": "1 mol = z Eq."
  },
  {
   "q": "The Faraday constant is about:",
   "options": [
    "96,500 C",
    "1.6×10⁻¹⁹ C",
    "6.02×10²³ C",
    "8.314 C"
   ],
   "answer": 0,
   "why": "Charge of one mole of electrons."
  },
  {
   "q": "The sum of molal concentrations of all solutes is the:",
   "options": [
    "Osmolality",
    "Osmolarity",
    "Normality",
    "Molarity"
   ],
   "answer": 0,
   "why": "Osmolarity uses molarities."
  },
  {
   "q": "Equivalent concentration equals:",
   "options": [
    "Mass / volume",
    "Molarity × valence",
    "Molality × volume",
    "Molarity / valence"
   ],
   "answer": 1,
   "why": "In Eq/L or mEq/L."
  },
  {
   "q": "A neutral solution has 20 mEq/L Na⁺, 45 mEq/L Cl⁻ and K⁺. K⁺ =",
   "options": [
    "65 mEq/L",
    "45 mEq/L",
    "20 mEq/L",
    "25 mEq/L"
   ],
   "answer": 3,
   "why": "Electroneutrality: 45 = 20 + K⁺."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "tot",
   "options": [
    "Interstitial fluid",
    "Total body water",
    "Intracellular water",
    "Extracellular water"
   ],
   "answer": 1,
   "why": "The arrow points to: Total body water. 60-65% of body weight, higher in infants (~75%), falling with age."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ic",
   "options": [
    "Plasma water",
    "Intracellular water",
    "Total body water",
    "Interstitial fluid"
   ],
   "answer": 1,
   "why": "The arrow points to: Intracellular water. About 40% of body weight."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ec",
   "options": [
    "Plasma water",
    "Intracellular water",
    "Extracellular water",
    "Total body water"
   ],
   "answer": 2,
   "why": "The arrow points to: Extracellular water. About 20% of body weight."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "int",
   "options": [
    "Intracellular water",
    "Total body water",
    "Interstitial fluid",
    "Extracellular water"
   ],
   "answer": 2,
   "why": "The arrow points to: Interstitial fluid. About 15.5% of body weight, bathing the cells."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pl",
   "options": [
    "Intracellular water",
    "Extracellular water",
    "Interstitial fluid",
    "Plasma water"
   ],
   "answer": 3,
   "why": "The arrow points to: Plasma water. About 4.5% of body weight."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Body water distribution?",
   "back": "Total 60-65% (infant ~75%); intracellular ~40%; extracellular ~20% (interstitial ~15.5%, plasma ~4.5%)."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Key physical properties of water?",
   "back": "Polar, hydrogen bonds; ice 0.91 g/cm³; specific heat 4.184 J/g·°C; surface tension ~72 mN/m; dielectric constant 78.5; amphoteric."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Define an equivalent.",
   "back": "The fraction of a mole of ions carrying one mole of charge (96,500 C); 1 mol of ion of valence z = z Eq."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Molarity vs molality; osmolarity vs osmolality?",
   "back": "Molarity: mol/L solution (sum = osmolarity). Molality: mol/kg solvent (sum = osmolality)."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Equivalent concentration?",
   "back": "C_Eq = molarity × valence (Eq/L, mEq/L)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Principle of electroneutrality?",
   "back": "Σ anionic Eq = Σ cationic Eq in a solution; allows computing an unknown ion concentration."
  },
  {
   "id": "img-tot",
   "type": "image",
   "target": "tot",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Total body water. 60-65% of body weight, higher in infants (~75%), falling with age."
  },
  {
   "id": "img-ic",
   "type": "image",
   "target": "ic",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Intracellular water. About 40% of body weight."
  },
  {
   "id": "img-ec",
   "type": "image",
   "target": "ec",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Extracellular water. About 20% of body weight."
  },
  {
   "id": "img-int",
   "type": "image",
   "target": "int",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Interstitial fluid. About 15.5% of body weight, bathing the cells."
  },
  {
   "id": "img-pl",
   "type": "image",
   "target": "pl",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Plasma water. About 4.5% of body weight."
  }
 ],
 "deeper": [
  {
   "title": "Why water's high specific heat protects us",
   "html": "<p>Because water needs a lot of energy to warm up, a body made of 60% water changes temperature slowly even when heat production or the environment changes. Combined with the cooling from evaporating sweat, this lets the body keep a stable core temperature.</p><p class='src'>Source: the lecture's properties of water slide.</p>"
  }
 ],
 "resources": [
  {
   "title": "Water in the body (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/water-acids-and-bases",
   "kind": "Website",
   "why": "Hydrogen bonding and properties of water.",
   "note": ""
  },
  {
   "title": "Body fluid compartments (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK557855/",
   "kind": "Book",
   "why": "Distribution of body water.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Water in the body (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/water-acids-and-bases"
  },
  {
   "name": "Body fluid compartments (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK557855/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physics1-gases"] = {
 "id": "physics1-gases",
 "subject": "physics1",
 "group": "States of matter and energetics",
 "title": "Biophysics of the gaseous state",
 "sourceFile": "Biophysics of gaseous state (Physics, Pr. Ghfir)",
 "sourceUrl": "https://drive.google.com/file/d/1tOKapVc2kBMLULi-hyOIiibMKflopS1v/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>Gas molecules move in disorder, with no proper shape, and the gas is compressible. Its state depends on four variables: <strong>pressure P, volume V, temperature T and amount n</strong>. These laws underpin respiratory physiology, blood gases and anaesthesia.</p>"
  },
  {
   "id": "s1",
   "title": "Pressure and hydrostatics",
   "html": "<p><strong>P = F/S</strong> (dimension M·L⁻¹·T⁻²), in <strong>pascal</strong> (N/m²). <strong>1 mmHg = 133.3 Pa</strong>; <strong>1 atm = 760 mmHg ≈ 101 kPa ≈ 10 m of water ≈ 1 kg/cm² ≈ 1 bar</strong>. <strong>Fundamental law of fluid statics (Pascal)</strong>: in a fluid at rest, pressure is the same in all directions at a point, the same on a horizontal plane, and increases linearly with depth: <strong>ΔP = ρ·g·h</strong>. Consequences: at altitude, atmospheric pressure and oxygen fall. <strong>Transmural pressure</strong> = inside − outside pressure of a vessel or alveolus: positive distends it, zero or negative lets it collapse.</p>"
  },
  {
   "id": "s2",
   "title": "Gas laws",
   "html": "<p><strong>Boyle-Mariotte</strong> (n, T constant): <strong>PV = constant</strong>. <strong>Charles</strong> (n, P constant): V increases linearly with T. <strong>Gay-Lussac</strong> (n, V constant): <strong>P/T = constant</strong>. Temperature in kelvin (0 °C = 273 K). At P and T constant, V ∝ n; <strong>1 mol of ideal gas = 22.4 L</strong> at 0 °C, 1 atm. An <strong>ideal (perfect) gas</strong> has molecules far apart (low pressure or high temperature): <strong>PV = nRT</strong>, R = <strong>8.314 J·mol⁻¹·K⁻¹</strong> (dimension M·L²·T⁻²·N⁻¹·θ⁻¹). Gas volumes in medicine are reported as <strong>STPD</strong> (0 °C, 1 atm, dry), <strong>BTPS</strong> (37 °C, ambient pressure, saturated with water vapour: lung volumes) or <strong>ATPS</strong> (ambient temperature and pressure, saturated: spirometer).</p>"
  },
  {
   "id": "s3",
   "title": "Gas mixtures",
   "html": "<p><strong>Mole fraction</strong> xᵢ = nᵢ/n (dimensionless, Σxᵢ = 1, independent of T and P); the <strong>composition by volume</strong> Vᵢ/V equals xᵢ. <strong>Partial pressure</strong> Pᵢ is the pressure gas i would exert alone in the whole volume: <strong>Pᵢ = xᵢ·P</strong>, and <strong>Dalton's law</strong>: total pressure = Σ Pᵢ. Example: O₂ is ~21% of dry air, so at sea level P_O₂ ≈ 0.21 × 760 ≈ 160 mmHg; it falls at altitude as total pressure falls.</p>"
  }
 ],
 "exam": [
  "Gas state depends on P, V, T, n.",
  "1 atm = 760 mmHg ≈ 101 kPa ≈ 10 m water; 1 mmHg = 133.3 Pa.",
  "Fluid statics: ΔP = ρgh; pressure equal in all directions.",
  "Transmural pressure = inside − outside; negative → collapse.",
  "Boyle: PV = const; Charles: V ∝ T; Gay-Lussac: P ∝ T.",
  "1 mol = 22.4 L at 0 °C, 1 atm.",
  "PV = nRT; R = 8.314 J/mol·K.",
  "STPD, BTPS (lung volumes), ATPS.",
  "Pᵢ = xᵢ·P; Dalton: P = Σ Pᵢ; air O₂ ≈ 160 mmHg at sea level."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Gas laws",
   "caption": "Relationships between P, V, T and n. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"130\" y1=\"100\" x2=\"250\" y2=\"170\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"370\" y1=\"100\" x2=\"250\" y2=\"170\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"720\" y1=\"70\" x2=\"140\" y2=\"200\"/>",
   "parts": {
    "boyle": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Boyle-Mariotte: PV = const",
      "(n, T fixed)"
     ],
     "lx": 130.0,
     "ly": 68.0
    },
    "charles": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"260\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Charles: V ∝ T",
      "(n, P fixed)"
     ],
     "lx": 370.0,
     "ly": 68.0
    },
    "gl": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"500\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Gay-Lussac: P ∝ T",
      "(n, V fixed)"
     ],
     "lx": 610.0,
     "ly": 68.0
    },
    "ideal": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"140\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "PV = nRT",
      "R = 8.314 J/mol·K"
     ],
     "lx": 250.0,
     "ly": 198.0
    },
    "dalton": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"420\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Dalton: P = Σ Pᵢ;",
      "Pᵢ = xᵢ·P"
     ],
     "lx": 530.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "boyle": [
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
    "charles": [
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
    "gl": [
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
    "ideal": [
     {
      "t": [
       140.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "dalton": [
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
   "q": "1 mmHg equals about:",
   "options": [
    "1 Pa",
    "760 Pa",
    "101 kPa",
    "133.3 Pa"
   ],
   "answer": 3,
   "why": "1 atm = 760 mmHg."
  },
  {
   "q": "1 atm is approximately:",
   "options": [
    "100 m of water",
    "1 m of water",
    "10 m of water",
    "10 cm of water"
   ],
   "answer": 2,
   "why": "Also ≈ 101 kPa."
  },
  {
   "q": "Hydrostatic pressure increases with depth as:",
   "options": [
    "ΔP = nRT",
    "ΔP = ρgh",
    "ΔP = F·S",
    "ΔP = PV"
   ],
   "answer": 1,
   "why": "Pascal's law of fluid statics."
  },
  {
   "q": "A negative transmural pressure tends to:",
   "options": [
    "Distend the vessel",
    "Have no effect",
    "Collapse the structure",
    "Raise temperature"
   ],
   "answer": 2,
   "why": "PTM = inside − outside."
  },
  {
   "q": "Boyle-Mariotte's law states that at constant T and n:",
   "options": [
    "PV = constant",
    "V/T = constant",
    "PV = nRT only",
    "P/T = constant"
   ],
   "answer": 0,
   "why": "Pressure up, volume down."
  },
  {
   "q": "Gay-Lussac's law: at constant V and n,",
   "options": [
    "P = 0",
    "V ∝ T",
    "P ∝ 1/T",
    "P ∝ T (absolute)"
   ],
   "answer": 3,
   "why": "P/T = constant."
  },
  {
   "q": "At 0 °C and 1 atm, one mole of ideal gas occupies:",
   "options": [
    "8.314 L",
    "22.4 L",
    "1 L",
    "24.5 L"
   ],
   "answer": 1,
   "why": "Standard molar volume."
  },
  {
   "q": "R, the ideal gas constant, is:",
   "options": [
    "8.314 J/mol·K",
    "22.4 J/mol·K",
    "96,500 J/mol·K",
    "0.082 J/mol·K"
   ],
   "answer": 0,
   "why": "In SI units."
  },
  {
   "q": "Lung volumes are usually reported in:",
   "options": [
    "Kelvin",
    "ATPS",
    "STPD",
    "BTPS"
   ],
   "answer": 3,
   "why": "37 °C, saturated with water vapour."
  },
  {
   "q": "STPD means:",
   "options": [
    "0 °C, 1 atm, dry",
    "37 °C, saturated",
    "25 °C, dry",
    "Ambient, saturated"
   ],
   "answer": 0,
   "why": "Standard conditions."
  },
  {
   "q": "Partial pressure of a gas equals:",
   "options": [
    "xᵢ × total P",
    "Its volume",
    "Its mass × P",
    "Total pressure"
   ],
   "answer": 0,
   "why": "Dalton's law."
  },
  {
   "q": "With 21% O₂ at sea level (760 mmHg), P_O₂ of dry air ≈",
   "options": [
    "760 mmHg",
    "160 mmHg",
    "100 mmHg",
    "21 mmHg"
   ],
   "answer": 1,
   "why": "0.21 × 760."
  },
  {
   "q": "A gas behaves ideally at:",
   "options": [
    "High pressure, low temperature",
    "Any condition",
    "Only at 0 K",
    "Low pressure or high temperature"
   ],
   "answer": 3,
   "why": "Molecules far apart."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "boyle",
   "options": [
    "Ideal gas equation",
    "Boyle-Mariotte's law",
    "Gay-Lussac's law",
    "Charles's law"
   ],
   "answer": 1,
   "why": "The arrow points to: Boyle-Mariotte's law. At constant n and T, volume falls as pressure rises: PV is constant."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "charles",
   "options": [
    "Ideal gas equation",
    "Charles's law",
    "Boyle-Mariotte's law",
    "Partial pressures"
   ],
   "answer": 1,
   "why": "The arrow points to: Charles's law. At constant n and P, volume varies linearly with absolute temperature."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "gl",
   "options": [
    "Charles's law",
    "Partial pressures",
    "Gay-Lussac's law",
    "Boyle-Mariotte's law"
   ],
   "answer": 2,
   "why": "The arrow points to: Gay-Lussac's law. At constant n and V, pressure is proportional to absolute temperature."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ideal",
   "options": [
    "Charles's law",
    "Gay-Lussac's law",
    "Ideal gas equation",
    "Boyle-Mariotte's law"
   ],
   "answer": 2,
   "why": "The arrow points to: Ideal gas equation. PV = nRT (SI units); 1 mol occupies 22.4 L at 0 °C and 1 atm."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "dalton",
   "options": [
    "Ideal gas equation",
    "Charles's law",
    "Gay-Lussac's law",
    "Partial pressures"
   ],
   "answer": 3,
   "why": "The arrow points to: Partial pressures. Each gas's partial pressure equals its mole fraction times total pressure; the total is their sum."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Units of pressure?",
   "back": "Pa = N/m²; 1 mmHg = 133.3 Pa; 1 atm = 760 mmHg ≈ 101 kPa ≈ 10 m water ≈ 1 bar."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Fundamental law of fluid statics?",
   "back": "In a fluid at rest, pressure is equal in all directions, equal on a horizontal plane, and increases linearly with depth (ΔP = ρgh)."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Transmural pressure?",
   "back": "Inside − outside pressure of a vessel or alveolus: positive distends, zero/negative allows collapse."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Boyle, Charles, Gay-Lussac laws?",
   "back": "Boyle: PV constant (n, T). Charles: V ∝ T (n, P). Gay-Lussac: P ∝ T (n, V)."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Ideal gas equation?",
   "back": "PV = nRT; R = 8.314 J/mol·K; 1 mol = 22.4 L at 0 °C, 1 atm."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "STPD, BTPS, ATPS?",
   "back": "STPD: 0 °C, 1 atm, dry. BTPS: 37 °C, ambient P, saturated. ATPS: ambient T and P, saturated."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Mole fraction and partial pressure?",
   "back": "xᵢ = nᵢ/n; Pᵢ = xᵢ·P; Dalton: total P = Σ Pᵢ."
  },
  {
   "id": "img-boyle",
   "type": "image",
   "target": "boyle",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Boyle-Mariotte's law. At constant n and T, volume falls as pressure rises: PV is constant."
  },
  {
   "id": "img-charles",
   "type": "image",
   "target": "charles",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Charles's law. At constant n and P, volume varies linearly with absolute temperature."
  },
  {
   "id": "img-gl",
   "type": "image",
   "target": "gl",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Gay-Lussac's law. At constant n and V, pressure is proportional to absolute temperature."
  },
  {
   "id": "img-ideal",
   "type": "image",
   "target": "ideal",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Ideal gas equation. PV = nRT (SI units); 1 mol occupies 22.4 L at 0 °C and 1 atm."
  },
  {
   "id": "img-dalton",
   "type": "image",
   "target": "dalton",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Partial pressures. Each gas's partial pressure equals its mole fraction times total pressure; the total is their sum."
  }
 ],
 "deeper": [
  {
   "title": "Why oxygen falls at altitude",
   "html": "<p>Air stays about 21% oxygen at any altitude, but total atmospheric pressure drops as you climb. Because the partial pressure of oxygen is its fraction times total pressure, less oxygen pressure pushes O₂ into the blood, causing hypoxia in mountaineers and requiring cabin pressurisation in aircraft.</p><p class='src'>Source: the lecture's fluid statics and partial pressure slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "Gas laws (Khan Academy)",
   "url": "https://www.khanacademy.org/science/chemistry/gases-and-kinetic-molecular-theory",
   "kind": "Website",
   "why": "Ideal gas law and partial pressures.",
   "note": ""
  },
  {
   "title": "Pulmonary function test conditions (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK482339/",
   "kind": "Book",
   "why": "BTPS and spirometry basics.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Gas laws (Khan Academy)",
   "url": "https://www.khanacademy.org/science/chemistry/gases-and-kinetic-molecular-theory"
  },
  {
   "name": "Pulmonary function test conditions (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK482339/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physics1-energetics"] = {
 "id": "physics1-energetics",
 "subject": "physics1",
 "group": "States of matter and energetics",
 "title": "Energetics: work, potentials and chemical potential",
 "sourceFile": "Energetics (Physics, Pr. Ghfir)",
 "sourceUrl": "https://drive.google.com/file/d/1HUf_ucWS8TiE0uuK0KmDPpTGCkQM5GPe/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>Movements of matter in the body (blood flow, diffusion, osmosis, ion currents) are driven by differences in <strong>potential</strong>. Energetics defines <strong>work</strong>, <strong>potential energy</strong> and the main potentials (gravitational, electrical, chemical, electrochemical) used in the rest of the course.</p>"
  },
  {
   "id": "s1",
   "title": "Work",
   "html": "<p>The <strong>work</strong> of a constant force along a straight displacement is the scalar product <strong>dW = F·dl = F·dl·cos α</strong>; dimension M·L²·T⁻², unit <strong>joule</strong>. Work is algebraic: <strong>positive</strong> (0 ≤ α < 90°), <strong>negative / resistive</strong> (90° < α ≤ 180°), or <strong>zero</strong> (α = 90°). For a fluid pushed in a pipe: F = P·S, so <strong>dW = P·dV</strong>. Convention: <strong>W = −ΔE</strong>: positive work is done by the system itself (spontaneous, it loses energy); negative work means the system receives energy from outside.</p>"
  },
  {
   "id": "s2",
   "title": "Potential energy and potential",
   "html": "<p>The <strong>potential energy difference</strong> between A and B is the opposite of the work of the force moving a quantity X from A to B: ΔE = −W. The <strong>potential difference</strong> ΔY = ΔE/X is the energy difference <strong>per unit quantity</strong>, independent of the amount moved. <strong>Fundamental property</strong>: any <strong>spontaneous</strong> displacement lowers potential energy (energy is transformed, not lost); any move that raises it is <strong>not spontaneous</strong> and needs external energy.</p><p>Examples: <strong>gravitational</strong>: Ep = mgh, potential <strong>Y = g·h</strong> (J/kg). <strong>Electrical</strong>: ΔE = q(V_A − V_B); potential in <strong>volts</strong> (J/C). <strong>Chemical potential of an ideal gas</strong>: from dE = −P·dV and PV = nRT, dE = nRT·dP/P, so moving a gas from P₁ to P₂ involves nRT·ln(P₂/P₁); per mole, the chemical potential rises with <strong>RT ln P</strong> (in a mixture, with the partial pressure; in solution, with concentration: <strong>µ = µ⁰ + RT ln C</strong>). <strong>Electrochemical potential</strong> of an ion adds the electrical term, <strong>µ̃ = µ + zFV</strong>, and determines the direction of ion movement across membranes.</p>"
  }
 ],
 "exam": [
  "Work dW = F·dl·cos α; joule (M·L²·T⁻²).",
  "Positive (α < 90°), negative (α > 90°), zero (α = 90°).",
  "Fluid: dW = P·dV.",
  "W = −ΔE: spontaneous processes lose potential energy.",
  "Potential = potential energy per unit quantity.",
  "Gravitational Y = gh; electrical V (J/C); chemical µ = µ⁰ + RT ln C.",
  "Gas: energy nRT ln(P₂/P₁).",
  "Electrochemical potential µ̃ = µ + zFV governs ion movement."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Potentials drive spontaneous movement",
   "caption": "Each quantity moves down its own potential. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs>",
   "parts": {
    "grav": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Gravitational:",
      "Y = gh (J/kg)"
     ],
     "lx": 105.0,
     "ly": 68.0
    },
    "elec": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"200\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Electrical:",
      "V (J/C = volt)"
     ],
     "lx": 285.0,
     "ly": 68.0
    },
    "chem": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"380\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Chemical (gas/solute):",
      "µ = µ⁰ + RT ln C"
     ],
     "lx": 465.0,
     "ly": 68.0
    },
    "ec": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"560\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Electrochemical:",
      "µ̃ = µ + zFV"
     ],
     "lx": 645.0,
     "ly": 68.0
    },
    "rule": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"160\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Spontaneous: from high",
      "to low potential"
     ],
     "lx": 260.0,
     "ly": 198.0
    },
    "work": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"420\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Work W = −ΔE;",
      "fluid dW = P·dV"
     ],
     "lx": 520.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "grav": [
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
    "elec": [
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
    "chem": [
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
    "ec": [
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
    "rule": [
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
    "work": [
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
   "q": "The work of a force is:",
   "options": [
    "F·t",
    "F/dl",
    "F·dl·cos α",
    "F × mass"
   ],
   "answer": 2,
   "why": "A scalar product."
  },
  {
   "q": "The SI unit of work is:",
   "options": [
    "Pascal",
    "Joule",
    "Watt",
    "Newton"
   ],
   "answer": 1,
   "why": "kg·m²·s⁻²."
  },
  {
   "q": "When the force is perpendicular to the displacement, work is:",
   "options": [
    "Zero",
    "Infinite",
    "Maximal",
    "Negative"
   ],
   "answer": 0,
   "why": "cos 90° = 0."
  },
  {
   "q": "For a fluid pushed in a pipe, dW equals:",
   "options": [
    "F/S",
    "P·dV",
    "V·dP only",
    "P/dV"
   ],
   "answer": 1,
   "why": "F = P·S and S·dl = dV."
  },
  {
   "q": "By convention, W and ΔE are related by:",
   "options": [
    "W = ΔE",
    "W = 2ΔE",
    "W = 0",
    "W = −ΔE"
   ],
   "answer": 3,
   "why": "Spontaneous work lowers energy."
  },
  {
   "q": "A potential difference is:",
   "options": [
    "Energy per unit quantity",
    "Mass per volume",
    "Total energy",
    "Force per area"
   ],
   "answer": 0,
   "why": "ΔY = ΔE/X."
  },
  {
   "q": "A spontaneous displacement always:",
   "options": [
    "Decreases potential energy",
    "Needs external energy",
    "Creates energy",
    "Increases potential energy"
   ],
   "answer": 0,
   "why": "Energy is transformed, not lost."
  },
  {
   "q": "The gravitational potential is:",
   "options": [
    "h/g",
    "mgh",
    "g·h (J/kg)",
    "m·g"
   ],
   "answer": 2,
   "why": "Potential energy per unit mass."
  },
  {
   "q": "The volt equals:",
   "options": [
    "N/m²",
    "C/J",
    "J/kg",
    "J/C"
   ],
   "answer": 3,
   "why": "Energy per unit charge."
  },
  {
   "q": "The chemical potential of a solute increases with:",
   "options": [
    "Temperature only",
    "ln of concentration",
    "Volume",
    "Its mass"
   ],
   "answer": 1,
   "why": "µ = µ⁰ + RT ln C."
  },
  {
   "q": "Ion movement across membranes depends on the:",
   "options": [
    "Electrochemical potential",
    "Gravitational potential",
    "Mass",
    "Kinetic energy only"
   ],
   "answer": 0,
   "why": "Chemical + electrical terms."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "grav",
   "options": [
    "Electrochemical potential",
    "Electrical potential",
    "Chemical potential",
    "Gravitational potential"
   ],
   "answer": 3,
   "why": "The arrow points to: Gravitational potential. Potential energy mgh per unit mass: g·h, in J/kg."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "elec",
   "options": [
    "Fundamental property",
    "Electrical potential",
    "Electrochemical potential",
    "Gravitational potential"
   ],
   "answer": 1,
   "why": "The arrow points to: Electrical potential. Energy per unit charge: ΔE = q(V_A − V_B), in volts."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "chem",
   "options": [
    "Electrochemical potential",
    "Fundamental property",
    "Electrical potential",
    "Chemical potential"
   ],
   "answer": 3,
   "why": "The arrow points to: Chemical potential. Energy per mole related to concentration (or partial pressure): µ = µ⁰ + RT ln C."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ec",
   "options": [
    "Electrical potential",
    "Fundamental property",
    "Electrochemical potential",
    "Chemical potential"
   ],
   "answer": 2,
   "why": "The arrow points to: Electrochemical potential. Chemical plus electrical terms for ions: governs ion movement across membranes."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "rule",
   "options": [
    "Fundamental property",
    "Electrochemical potential",
    "Chemical potential",
    "Work and energy"
   ],
   "answer": 0,
   "why": "The arrow points to: Fundamental property. A spontaneous displacement lowers potential energy; moving uphill needs external energy."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "work",
   "options": [
    "Electrochemical potential",
    "Gravitational potential",
    "Work and energy",
    "Chemical potential"
   ],
   "answer": 2,
   "why": "The arrow points to: Work and energy. W = −ΔE; for a fluid, dW = P·dV."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Define work and its sign.",
   "back": "dW = F·dl·cos α (J); positive for α < 90°, negative for α > 90°, zero at 90°."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Work for a fluid?",
   "back": "dW = P·dV."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Relationship between work and energy?",
   "back": "W = −ΔE: positive work is spontaneous (energy lost); negative work requires external energy."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Potential energy vs potential?",
   "back": "Potential energy difference ΔE = −W depends on the amount; potential difference ΔY = ΔE/X is per unit quantity."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Fundamental property of potentials?",
   "back": "Spontaneous movement goes from high to low potential (energy decreases); going up requires external energy."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Main potentials?",
   "back": "Gravitational gh (J/kg), electrical V (J/C), chemical µ = µ⁰ + RT ln C, electrochemical µ̃ = µ + zFV."
  },
  {
   "id": "img-grav",
   "type": "image",
   "target": "grav",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Gravitational potential. Potential energy mgh per unit mass: g·h, in J/kg."
  },
  {
   "id": "img-elec",
   "type": "image",
   "target": "elec",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Electrical potential. Energy per unit charge: ΔE = q(V_A − V_B), in volts."
  },
  {
   "id": "img-chem",
   "type": "image",
   "target": "chem",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Chemical potential. Energy per mole related to concentration (or partial pressure): µ = µ⁰ + RT ln C."
  },
  {
   "id": "img-ec",
   "type": "image",
   "target": "ec",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Electrochemical potential. Chemical plus electrical terms for ions: governs ion movement across membranes."
  },
  {
   "id": "img-rule",
   "type": "image",
   "target": "rule",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Fundamental property. A spontaneous displacement lowers potential energy; moving uphill needs external energy."
  },
  {
   "id": "img-work",
   "type": "image",
   "target": "work",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Work and energy. W = −ΔE; for a fluid, dW = P·dV."
  }
 ],
 "deeper": [
  {
   "title": "Why potentials explain transport",
   "html": "<p>Water, solutes and ions all move spontaneously from a region of high potential to one of low potential, like a ball rolling downhill. Diffusion follows the chemical potential, current follows the electrical potential, and ions follow the combined electrochemical potential. Moving anything uphill, as the Na⁺/K⁺ pump does, needs energy from ATP.</p><p class='src'>Source: the lecture's fundamental property of potentials.</p>"
  }
 ],
 "resources": [
  {
   "title": "Work and energy (Khan Academy)",
   "url": "https://www.khanacademy.org/science/physics/work-and-energy",
   "kind": "Website",
   "why": "Work, energy and potential energy.",
   "note": ""
  },
  {
   "title": "Chemical potential (Chemistry LibreTexts)",
   "url": "https://chem.libretexts.org/",
   "kind": "Website",
   "why": "Search 'chemical potential'.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Work and energy (Khan Academy)",
   "url": "https://www.khanacademy.org/science/physics/work-and-energy"
  },
  {
   "name": "Chemical potential (Chemistry LibreTexts)",
   "url": "https://chem.libretexts.org/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physics1-viscosity"] = {
 "id": "physics1-viscosity",
 "subject": "physics1",
 "group": "Free displacements of matter",
 "title": "Viscosity applied to biological fluids",
 "sourceFile": "Viscosity applied to biological fluids (Physics, Pr. Ghfir)",
 "sourceUrl": "https://drive.google.com/file/d/1irBxo68Zddn_2nhLodZkti0PtzC2p3VZ/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>An oily or honey-like fluid flows more slowly than water under the same pressure because of internal friction: <strong>viscosity</strong>, a fluid's <strong>resistance to flow</strong>, reflecting friction and intermolecular bonds that must be broken for layers to slide. Blood viscosity matters in circulation, anaemia, polycythaemia and inflammation.</p>"
  },
  {
   "id": "s1",
   "title": "Newton's law and units",
   "html": "<p>A flowing fluid behaves like stacked parallel layers. The friction force between two layers of area S, separated by dx with velocity difference dv, is <strong>F = η·S·dv/dx</strong> (dv/dx = <strong>velocity gradient</strong>; η = <strong>viscosity coefficient</strong>). Dimension M·L⁻¹·T⁻¹; SI unit <strong>pascal-second (Pa·s)</strong> (formerly poiseuille); cgs <strong>poise</strong> (<strong>1 Pa·s = 10 poise</strong>). <strong>Relative viscosity</strong> η_r = η/η_water (unitless, easy to measure). Water ≈ <strong>10⁻³ Pa·s</strong> at 20 °C; honey ≈ 10 Pa·s.</p>"
  },
  {
   "id": "s2",
   "title": "What changes viscosity",
   "html": "<p><strong>Pure fluids</strong>: depends on the fluid and <strong>temperature</strong> (viscosity <strong>falls as temperature rises</strong>). <strong>Micromolecular solutions</strong> (< 10⁻⁹ m): solvent, solute nature and concentration, temperature. <strong>Macromolecules</strong> (< 10⁻⁸ m, invisible by light microscopy: albumin, globulins, fibrinogen) and <strong>suspended particles</strong> (> 10⁻⁷ m, visible: red and white cells): depends on solvent viscosity, particle <strong>shape</strong> and <strong>relative volume φ</strong>. <strong>Einstein's law: η = η°(1 + k·φ)</strong>; k rises with asymmetry: <strong>2.6 for spheres</strong>, <strong>> 1000 for linear macromolecules</strong>.</p>"
  },
  {
   "id": "s3",
   "title": "Blood viscosity; Newtonian fluids",
   "html": "<p>Blood = red cells (≈ spheres, k = 2.6) suspended in plasma, with φ = <strong>haematocrit</strong>: <strong>η_blood = η_plasma(1 + 2.6·Ht)</strong>. It rises with plasma viscosity or haematocrit (<strong>polycythaemia</strong>) and falls in <strong>anaemia</strong>; it also rises with <strong>cold</strong> (poor circulation in extremities, chilblains). Plasma viscosity rises in <strong>inflammation</strong> (more linear macromolecules: <strong>fibrinogen</strong>, α2-globulin) and with infusion of <strong>dextrans</strong>. <strong>Newtonian fluids</strong> have a viscosity independent of flow velocity (water, plasma); <strong>non-Newtonian</strong> fluids change with velocity because their structure changes (blood: red cells aggregate at low flow and align at high flow).</p>"
  }
 ],
 "exam": [
  "Viscosity = resistance to flow (internal friction).",
  "F = η·S·dv/dx; η in Pa·s (1 Pa·s = 10 poise).",
  "Water ≈ 10⁻³ Pa·s at 20 °C; η_r = η/η_water.",
  "Viscosity falls as temperature rises.",
  "Einstein: η = η°(1 + kφ); k = 2.6 spheres, > 1000 linear molecules.",
  "Blood: η = η_plasma(1 + 2.6 Ht); ↑ polycythaemia, ↓ anaemia, ↑ cold.",
  "Plasma η ↑ in inflammation (fibrinogen, α2-globulin) and with dextrans.",
  "Newtonian: η independent of velocity; blood is non-Newtonian."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Viscosity of blood",
   "caption": "Einstein's law applied to red cells in plasma. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"720\" y1=\"70\" x2=\"120\" y2=\"200\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"620\" y1=\"100\" x2=\"530\" y2=\"170\"/>",
   "parts": {
    "layers": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"40\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Fluid = sliding layers:",
      "F = η·S·dv/dx"
     ],
     "lx": 140.0,
     "ly": 68.0
    },
    "unit": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"280\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "η in Pa·s",
      "(1 Pa·s = 10 poise)"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "ein": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"520\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Einstein: η = η°(1 + kφ)",
      "sphere k = 2.6"
     ],
     "lx": 620.0,
     "ly": 68.0
    },
    "blood": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"120\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "η_blood = η_plasma",
      "(1 + 2.6 Ht)"
     ],
     "lx": 230.0,
     "ly": 198.0
    },
    "plasma": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"420\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Plasma η ↑ in inflammation",
      "(fibrinogen, α2)"
     ],
     "lx": 530.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "layers": [
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
    "unit": [
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
    "ein": [
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
    "blood": [
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
    "plasma": [
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
   "q": "Viscosity is a fluid's:",
   "options": [
    "Density",
    "Resistance to flow",
    "Pressure",
    "Temperature"
   ],
   "answer": 1,
   "why": "Internal friction."
  },
  {
   "q": "Newton's law of viscosity is:",
   "options": [
    "F = ma",
    "F = kq/d²",
    "F = η·S·dv/dx",
    "F = PV"
   ],
   "answer": 2,
   "why": "dv/dx = velocity gradient."
  },
  {
   "q": "The SI unit of viscosity is:",
   "options": [
    "Newton",
    "Pascal-second",
    "Poise",
    "Joule"
   ],
   "answer": 1,
   "why": "1 Pa·s = 10 poise."
  },
  {
   "q": "Viscosity of water at 20 °C is about:",
   "options": [
    "10 Pa·s",
    "1 Pa·s",
    "10⁻³ Pa·s",
    "10⁻⁶ Pa·s"
   ],
   "answer": 2,
   "why": "Honey ≈ 10 Pa·s."
  },
  {
   "q": "When temperature rises, the viscosity of a liquid:",
   "options": [
    "Is unchanged",
    "Doubles",
    "Rises",
    "Falls"
   ],
   "answer": 3,
   "why": "Explains poor flow in cold extremities."
  },
  {
   "q": "Einstein's law is:",
   "options": [
    "η = φ/k",
    "η = kφ",
    "η = η° − kφ",
    "η = η°(1 + kφ)"
   ],
   "answer": 3,
   "why": "φ = relative volume."
  },
  {
   "q": "For spherical particles, k equals:",
   "options": [
    "100",
    "2.6",
    "> 1000",
    "1"
   ],
   "answer": 1,
   "why": "Linear macromolecules > 1000."
  },
  {
   "q": "In blood, the relative volume φ corresponds to:",
   "options": [
    "The haematocrit",
    "Plasma protein level",
    "Platelet count",
    "White cell count"
   ],
   "answer": 0,
   "why": "η_blood = η_plasma(1 + 2.6 Ht)."
  },
  {
   "q": "Blood viscosity increases in:",
   "options": [
    "Polycythaemia",
    "Dilution",
    "Anaemia",
    "Warmth"
   ],
   "answer": 0,
   "why": "Higher haematocrit."
  },
  {
   "q": "Plasma viscosity rises in inflammation mainly because of:",
   "options": [
    "Sodium",
    "Fibrinogen, α2",
    "Glucose",
    "Albumin"
   ],
   "answer": 1,
   "why": "Linear macromolecules."
  },
  {
   "q": "A Newtonian fluid has a viscosity that:",
   "options": [
    "Does not depend on velocity",
    "Rises with flow",
    "Depends on velocity",
    "Is zero"
   ],
   "answer": 0,
   "why": "Blood is non-Newtonian."
  },
  {
   "q": "Red blood cells are classified as:",
   "options": [
    "Suspended particles",
    "Micromolecules",
    "Ions",
    "Macromolecules"
   ],
   "answer": 0,
   "why": "Visible by light microscopy."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "layers",
   "options": [
    "Blood",
    "Units",
    "Einstein's law",
    "Newton's law of viscosity"
   ],
   "answer": 3,
   "why": "The arrow points to: Newton's law of viscosity. Friction force between layers is proportional to area and velocity gradient."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "unit",
   "options": [
    "Blood",
    "Units",
    "Newton's law of viscosity",
    "Plasma"
   ],
   "answer": 1,
   "why": "The arrow points to: Units. SI pascal-second (formerly poiseuille); cgs poise; water ≈ 10⁻³ Pa·s at 20 °C."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ein",
   "options": [
    "Plasma",
    "Newton's law of viscosity",
    "Units",
    "Einstein's law"
   ],
   "answer": 3,
   "why": "The arrow points to: Einstein's law. Viscosity of a suspension rises with relative volume φ; k grows with particle asymmetry (> 1000 for linear molecules)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "blood",
   "options": [
    "Units",
    "Einstein's law",
    "Blood",
    "Newton's law of viscosity"
   ],
   "answer": 2,
   "why": "The arrow points to: Blood. Red cells behave as spheres (k = 2.6) and φ is the haematocrit: polycythaemia raises viscosity, anaemia lowers it."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "plasma",
   "options": [
    "Blood",
    "Units",
    "Plasma",
    "Einstein's law"
   ],
   "answer": 2,
   "why": "The arrow points to: Plasma. Protein solution; linear macromolecules (fibrinogen, α2-globulin, dextrans) raise its viscosity."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Define viscosity.",
   "back": "A fluid's resistance to flow, from friction between layers and intermolecular bonds."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Newton's law of viscosity and units?",
   "back": "F = η·S·dv/dx; η in Pa·s (1 Pa·s = 10 poise); dimension M·L⁻¹·T⁻¹."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Relative viscosity?",
   "back": "η_r = η/η_water; unitless; water ≈ 10⁻³ Pa·s at 20 °C."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Factors affecting viscosity?",
   "back": "Fluid nature, temperature (↑T ↓η), solute concentration, particle shape and relative volume."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Einstein's law?",
   "back": "η = η°(1 + kφ); k = 2.6 for spheres, > 1000 for linear macromolecules."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Blood viscosity formula and variations?",
   "back": "η_blood = η_plasma(1 + 2.6 Ht); ↑ polycythaemia, cold, inflammation; ↓ anaemia."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Newtonian vs non-Newtonian?",
   "back": "Newtonian: η independent of velocity (water, plasma). Non-Newtonian: η changes with velocity (blood)."
  },
  {
   "id": "img-layers",
   "type": "image",
   "target": "layers",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Newton's law of viscosity. Friction force between layers is proportional to area and velocity gradient."
  },
  {
   "id": "img-unit",
   "type": "image",
   "target": "unit",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Units. SI pascal-second (formerly poiseuille); cgs poise; water ≈ 10⁻³ Pa·s at 20 °C."
  },
  {
   "id": "img-ein",
   "type": "image",
   "target": "ein",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Einstein's law. Viscosity of a suspension rises with relative volume φ; k grows with particle asymmetry (> 1000 for linear molecules)."
  },
  {
   "id": "img-blood",
   "type": "image",
   "target": "blood",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Blood. Red cells behave as spheres (k = 2.6) and φ is the haematocrit: polycythaemia raises viscosity, anaemia lowers it."
  },
  {
   "id": "img-plasma",
   "type": "image",
   "target": "plasma",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Plasma. Protein solution; linear macromolecules (fibrinogen, α2-globulin, dextrans) raise its viscosity."
  }
 ],
 "deeper": [
  {
   "title": "Why cold fingers turn white",
   "html": "<p>Viscosity rises as temperature falls, so blood in cold fingers and toes flows less easily through narrow vessels, while cold also constricts those vessels. Slower flow reduces oxygen delivery, explaining pale, numb extremities and chilblains.</p><p class='src'>Source: the lecture's blood viscosity slide.</p>"
  }
 ],
 "resources": [
  {
   "title": "Viscosity (Khan Academy)",
   "url": "https://www.khanacademy.org/science/physics/fluids",
   "kind": "Website",
   "why": "Fluid flow and viscosity.",
   "note": ""
  },
  {
   "title": "Blood viscosity (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK562314/",
   "kind": "Book",
   "why": "Clinical relevance of blood viscosity.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Viscosity (Khan Academy)",
   "url": "https://www.khanacademy.org/science/physics/fluids"
  },
  {
   "name": "Blood viscosity (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK562314/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physics1-migration"] = {
 "id": "physics1-migration",
 "subject": "physics1",
 "group": "Free displacements of matter",
 "title": "Migration movements: sedimentation, centrifugation, electrophoresis",
 "sourceFile": "Migration movements (Physics, Pr. Ghfir)",
 "sourceUrl": "https://drive.google.com/file/d/1v-Aut5gkutaG5OG0gubl23Bo0MDz-AJU/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>A <strong>migration movement</strong> is the movement of some particles while others (the solvent) stay still. External causes (gravity, centrifugal acceleration, electric field) or internal ones (concentration gradient: diffusion) drive them, always opposed by viscous drag. These principles underlie the <strong>ESR</strong>, laboratory <strong>centrifugation</strong> and <strong>electrophoresis</strong>.</p>"
  },
  {
   "id": "s1",
   "title": "Drag and sedimentation",
   "html": "<p>An object falling in a liquid meets a <strong>drag force</strong> opposing its motion. <strong>Stokes' law: R = −k·η·v</strong> (k depends on shape); for a sphere of radius r, <strong>R = −6πrηv</strong>. The drag grows until it balances the driving force, after which velocity is constant. <strong>Sedimentation</strong> (gravity): the driving force is the apparent weight, <strong>F = V·g(ρ_s − ρ₀)</strong> (weight minus Archimedes' thrust), so the limit velocity rises with particle size and density difference and falls with viscosity. <strong>Erythrocyte sedimentation rate (ESR)</strong>: in anticoagulated blood in a vertical tube, the height of red-cell-free plasma after <strong>1 hour</strong> (control at 2 h); normally <strong>< 10 mm at 1 h</strong>; raised in infection and inflammation.</p>"
  },
  {
   "id": "s2",
   "title": "Centrifugation and electrophoresis",
   "html": "<p>When gravity is too weak, rotation provides a centrifugal acceleration <strong>γ = ω²R</strong> (ω angular velocity, R distance to the axis), far greater than g: <strong>centrifugation</strong> and <strong>ultracentrifugation</strong> separate bacteria, cells and macromolecules from urine or blood. In an <strong>electric field</strong>, a charged particle feels <strong>F = q·E</strong> opposed by drag; it quickly reaches a constant velocity <strong>v = u·E</strong> (u = electrical mobility). The <strong>flux</strong> of particles through a surface S: <strong>Φ = C·S·v</strong> (positive ions move with the field, negative ions against it). <strong>Electrophoresis</strong>: macro-ions (proteins) in a field move at different speeds and are separated (e.g. serum protein electrophoresis).</p>"
  }
 ],
 "exam": [
  "Migration: some particles move, the solvent stays.",
  "Stokes: R = −6πrηv for a sphere; velocity becomes constant.",
  "Sedimentation force = V·g(ρ_s − ρ₀) (weight − Archimedes).",
  "ESR: plasma height after 1 h; normal < 10 mm; ↑ inflammation.",
  "Centrifugal acceleration γ = ω²R ≫ g.",
  "Electric field: F = qE; v = uE; flux Φ = C·S·v.",
  "Electrophoresis separates proteins by charge, size, shape."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Migration movements",
   "caption": "Driving force balanced by viscous drag. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"50\" x2=\"20\" y2=\"170\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"80\" x2=\"285\" y2=\"140\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"80\" x2=\"465\" y2=\"140\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"50\" x2=\"560\" y2=\"170\"/>",
   "parts": {
    "drag": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"280\" y=\"20\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Drag (Stokes):",
      "R = −6πrηv"
     ],
     "lx": 380.0,
     "ly": 48.0
    },
    "sed": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"20\" y=\"140\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Gravity → sedimentation",
      "(ESR)"
     ],
     "lx": 105.0,
     "ly": 168.0
    },
    "cent": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"200\" y=\"140\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Centrifugal γ = ω²R",
      "→ centrifugation"
     ],
     "lx": 285.0,
     "ly": 168.0
    },
    "el": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"380\" y=\"140\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Electric field F = qE",
      "→ electrophoresis"
     ],
     "lx": 465.0,
     "ly": 168.0
    },
    "diff": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"560\" y=\"140\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Concentration gradient",
      "→ diffusion"
     ],
     "lx": 645.0,
     "ly": 168.0
    }
   },
   "arrows": {
    "drag": [
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
    "sed": [
     {
      "t": [
       20.0,
       148.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "cent": [
     {
      "t": [
       200.0,
       148.0
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
       380.0,
       148.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "diff": [
     {
      "t": [
       560.0,
       148.0
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
   "q": "A migration movement means:",
   "options": [
    "All particles move",
    "Only some particles move",
    "Nothing moves",
    "Only the solvent moves"
   ],
   "answer": 1,
   "why": "E.g. red cells settling in plasma."
  },
  {
   "q": "Stokes' law for a sphere is:",
   "options": [
    "R = 6πrηv",
    "R = qE",
    "R = mg",
    "R = ω²R"
   ],
   "answer": 0,
   "why": "Drag opposes motion (sign negative)."
  },
  {
   "q": "Drag force increases with:",
   "options": [
    "Nothing",
    "Temperature only",
    "Viscosity and velocity",
    "Lower viscosity"
   ],
   "answer": 2,
   "why": "R ∝ ηv."
  },
  {
   "q": "The driving force in sedimentation equals:",
   "options": [
    "Weight minus Archimedes' thrust",
    "Real weight only",
    "Archimedes' thrust only",
    "Zero"
   ],
   "answer": 0,
   "why": "V·g(ρ_s − ρ₀)."
  },
  {
   "q": "The ESR measures:",
   "options": [
    "Haemoglobin",
    "Clotting time",
    "Platelet count",
    "Plasma height at 1 h"
   ],
   "answer": 3,
   "why": "In anticoagulated blood."
  },
  {
   "q": "A normal ESR at 1 hour is:",
   "options": [
    "30-50 mm",
    "0 mm always",
    "< 10 mm",
    "> 100 mm"
   ],
   "answer": 2,
   "why": "Raised in inflammation."
  },
  {
   "q": "Centrifugal acceleration equals:",
   "options": [
    "g",
    "qE",
    "ω²R",
    "6πrηv"
   ],
   "answer": 2,
   "why": "Much larger than g."
  },
  {
   "q": "In an electric field, a charged particle's driving force is:",
   "options": [
    "6πrηv",
    "mg",
    "ω²R",
    "qE"
   ],
   "answer": 3,
   "why": "Balanced by drag at constant velocity."
  },
  {
   "q": "The flux of particles Φ equals:",
   "options": [
    "C·S·v",
    "S/C",
    "v/S",
    "C/v"
   ],
   "answer": 0,
   "why": "Concentration × area × velocity."
  },
  {
   "q": "Electrophoresis separates proteins according to:",
   "options": [
    "Smell",
    "Colour",
    "Temperature",
    "Charge, size and shape"
   ],
   "answer": 3,
   "why": "Different migration velocities."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "drag",
   "options": [
    "Electrophoresis",
    "Stokes' law",
    "Centrifugation",
    "Sedimentation"
   ],
   "answer": 1,
   "why": "The arrow points to: Stokes' law. Viscous drag opposes motion, proportional to viscosity and velocity; for a sphere R = −6πrηv; velocity quickly becomes constant."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "sed",
   "options": [
    "Electrophoresis",
    "Sedimentation",
    "Stokes' law",
    "Diffusion"
   ],
   "answer": 1,
   "why": "The arrow points to: Sedimentation. Apparent weight (weight − Archimedes' thrust) drives particles down: red cells settle in anticoagulated blood (ESR)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "cent",
   "options": [
    "Stokes' law",
    "Sedimentation",
    "Centrifugation",
    "Diffusion"
   ],
   "answer": 2,
   "why": "The arrow points to: Centrifugation. Rotation creates an acceleration ω²R much larger than g, separating cells, bacteria, macromolecules."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "el",
   "options": [
    "Sedimentation",
    "Stokes' law",
    "Centrifugation",
    "Electrophoresis"
   ],
   "answer": 3,
   "why": "The arrow points to: Electrophoresis. Charged macro-ions move at speeds set by charge, size and shape, separating proteins."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "diff",
   "options": [
    "Diffusion",
    "Centrifugation",
    "Sedimentation",
    "Electrophoresis"
   ],
   "answer": 0,
   "why": "The arrow points to: Diffusion. Internal cause: particles move down their concentration gradient."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Define migration movement.",
   "back": "Movement of some particles while others (the solvent) remain stationary."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Stokes' law?",
   "back": "Drag R = −kηv; for a sphere R = −6πrηv; velocity becomes constant when drag balances the driving force."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Driving force in sedimentation?",
   "back": "Apparent weight: V·g(ρ_s − ρ₀)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "What is the ESR?",
   "back": "Height of red-cell-free plasma after 1 hour in anticoagulated blood; normal < 10 mm; raised in infection or inflammation."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Centrifugation principle?",
   "back": "Rotation gives γ = ω²R ≫ g to separate cells, bacteria, macromolecules."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Migration in an electric field?",
   "back": "F = qE; v = uE (u = mobility); flux Φ = C·S·v."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Principle of electrophoresis?",
   "back": "Macro-ions move at different speeds in a field and separate (e.g. serum proteins)."
  },
  {
   "id": "img-drag",
   "type": "image",
   "target": "drag",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Stokes' law. Viscous drag opposes motion, proportional to viscosity and velocity; for a sphere R = −6πrηv; velocity quickly becomes constant."
  },
  {
   "id": "img-sed",
   "type": "image",
   "target": "sed",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Sedimentation. Apparent weight (weight − Archimedes' thrust) drives particles down: red cells settle in anticoagulated blood (ESR)."
  },
  {
   "id": "img-cent",
   "type": "image",
   "target": "cent",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Centrifugation. Rotation creates an acceleration ω²R much larger than g, separating cells, bacteria, macromolecules."
  },
  {
   "id": "img-el",
   "type": "image",
   "target": "el",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Electrophoresis. Charged macro-ions move at speeds set by charge, size and shape, separating proteins."
  },
  {
   "id": "img-diff",
   "type": "image",
   "target": "diff",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Diffusion. Internal cause: particles move down their concentration gradient."
  }
 ],
 "deeper": [
  {
   "title": "Why the ESR rises in inflammation",
   "html": "<p>Inflammation raises plasma fibrinogen and globulins, which reduce the negative repulsion between red cells so they stack into rouleaux. A stack is a much bigger particle, and by Stokes' law larger particles settle faster, so the plasma column clears more quickly: a high ESR.</p><p class='src'>Source: the lecture's sedimentation and ESR slides, and the viscosity lecture.</p>"
  }
 ],
 "resources": [
  {
   "title": "Erythrocyte sedimentation rate (MedlinePlus)",
   "url": "https://medlineplus.gov/lab-tests/erythrocyte-sedimentation-rate-esr/",
   "kind": "Website",
   "why": "What the ESR test shows.",
   "note": ""
  },
  {
   "title": "Electrophoresis (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/biotech-dna-technology/dna-sequencing-pcr-electrophoresis/a/gel-electrophoresis",
   "kind": "Article",
   "why": "How electrophoresis separates molecules.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Erythrocyte sedimentation rate (MedlinePlus)",
   "url": "https://medlineplus.gov/lab-tests/erythrocyte-sedimentation-rate-esr/"
  },
  {
   "name": "Electrophoresis (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/biotech-dna-technology/dna-sequencing-pcr-electrophoresis/a/gel-electrophoresis"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physics1-diffusion"] = {
 "id": "physics1-diffusion",
 "subject": "physics1",
 "group": "Free displacements of matter",
 "title": "Membranes and simple elementary phenomena",
 "sourceFile": "Simple elementary phenomena (Physics, Pr. Ghfir)",
 "sourceUrl": "https://drive.google.com/file/d/1fF8mcNATdyoQS1VLFqfTnZlug4HFUCL0/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>A <strong>membrane</strong> is an interface between two compartments, characterised by its thickness d, the <strong>mobility</strong> uᵢ of particles crossing it, the <strong>diffusion coefficient Dᵢ = RT·uᵢ</strong> and the <strong>permeability Pᵢ = Dᵢ/d</strong>. Membranes may be <strong>semipermeable</strong> (solvent only), <strong>dialysis</strong> (solvent, small molecules and ions, not macromolecules) or <strong>selective</strong> (certain ions or molecules only). Transfers are <strong>passive</strong> (no energy, down a gradient: diffusion, facilitated diffusion, osmosis) or <strong>active</strong> (proteins using ATP, against a gradient).</p>"
  },
  {
   "id": "s1",
   "title": "Elementary passive phenomena",
   "html": "<p><strong>Simple diffusion</strong>: molecules or ions move from high to low <strong>concentration</strong> or <strong>partial pressure</strong> (Fick's law). <strong>Simple convection</strong>: a <strong>hydrostatic pressure</strong> difference pushes solvent and solutes together: <strong>Φ = K·S·(P₁ − P₂)</strong> (K permeability coefficient, S area). <strong>Electrical migration</strong>: ions move under an electric potential gradient: cation flux Φ = −C·S·u·dV/dx, anions the opposite. <strong>Electrochemical migration</strong>: ions respond to both chemical and electrical gradients (the electrochemical potential gradient).</p>"
  },
  {
   "id": "s2",
   "title": "Membrane potentials",
   "html": "<p><strong>Equilibrium potential</strong>: if a membrane lets only one ion through (e.g. H⁺ in a selective membrane), that ion diffuses down its gradient, but its counter-ions cannot follow, so charges separate and an electric potential builds up until it balances the concentration gradient; net flow stops. Its value is given by the <strong>Nernst equation, E = (RT/zF)·ln(C₁/C₂)</strong>. If the membrane lets small ions through but not <strong>macro-ions</strong> (proteins), the <strong>Donnan equilibrium</strong> gives an unequal distribution of small ions and a membrane potential. <strong>Diffusion potentials</strong> arise transiently when a cation and anion (or two cations) cross with <strong>different mobilities</strong>: the faster ion runs ahead, separating charge.</p>"
  }
 ],
 "exam": [
  "Membrane: thickness d, mobility u, D = RTu, permeability P = D/d.",
  "Semipermeable (solvent), dialysis (not macromolecules), selective.",
  "Passive: down gradients, no energy; active: ATP, against gradients.",
  "Diffusion: concentration or partial pressure gradient (Fick).",
  "Convection: Φ = K·S·(P₁ − P₂).",
  "Electrical migration: potential gradient; electrochemical: both.",
  "Equilibrium potential (Nernst): E = (RT/zF) ln(C₁/C₂).",
  "Donnan: impermeant macro-ions unbalance small ions.",
  "Diffusion potential: ions with different mobilities."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Passive transmembrane phenomena",
   "caption": "Each driven by its own gradient. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs>",
   "parts": {
    "diff": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Simple diffusion:",
      "concentration gradient (Fick)"
     ],
     "lx": 105.0,
     "ly": 68.0
    },
    "conv": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"200\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Convection: pressure",
      "gradient Φ = K·S·(P₁−P₂)"
     ],
     "lx": 285.0,
     "ly": 68.0
    },
    "elec": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"380\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Electrical migration:",
      "potential gradient"
     ],
     "lx": 465.0,
     "ly": 68.0
    },
    "ecp": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"560\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Electrochemical",
      "potential gradient"
     ],
     "lx": 645.0,
     "ly": 68.0
    },
    "eq": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"160\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Equilibrium potential:",
      "Nernst (one permeant ion)"
     ],
     "lx": 260.0,
     "ly": 198.0
    },
    "don": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"420\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Donnan: impermeant",
      "macro-ions"
     ],
     "lx": 520.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "diff": [
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
    "conv": [
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
    "elec": [
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
    "ecp": [
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
    "eq": [
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
    "don": [
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
   "q": "Membrane permeability equals:",
   "options": [
    "D × d",
    "u / RT",
    "D / d",
    "RT × d"
   ],
   "answer": 2,
   "why": "D = RT·u."
  },
  {
   "q": "A dialysis membrane is permeable to:",
   "options": [
    "Only water",
    "All but macromolecules",
    "Nothing",
    "Only macromolecules"
   ],
   "answer": 1,
   "why": "Used in haemodialysis."
  },
  {
   "q": "A semipermeable membrane lets through:",
   "options": [
    "Only the solvent",
    "Only ions",
    "All solutes",
    "Only proteins"
   ],
   "answer": 0,
   "why": "Basis of osmosis."
  },
  {
   "q": "Passive transport:",
   "options": [
    "Goes against a gradient",
    "Goes down a gradient without energy",
    "Needs a pump",
    "Uses ATP"
   ],
   "answer": 1,
   "why": "Diffusion, osmosis, facilitated diffusion."
  },
  {
   "q": "Simple diffusion is driven by:",
   "options": [
    "Gravity",
    "Hydrostatic pressure",
    "ATP",
    "Concentration gradients"
   ],
   "answer": 3,
   "why": "Fick's law."
  },
  {
   "q": "Simple convection is driven by:",
   "options": [
    "Hydrostatic pressure difference",
    "Temperature",
    "Concentration gradient",
    "Electric field"
   ],
   "answer": 0,
   "why": "Φ = K·S·(P₁ − P₂)."
  },
  {
   "q": "Ions moving under both chemical and electrical gradients follow the:",
   "options": [
    "Electrochemical potential gradient",
    "Osmotic pressure",
    "Gravitational potential",
    "Viscosity"
   ],
   "answer": 0,
   "why": "Electrochemical migration."
  },
  {
   "q": "An equilibrium potential appears when:",
   "options": [
    "All ions cross",
    "Pressure differs",
    "One ion type crosses",
    "No ion crosses"
   ],
   "answer": 2,
   "why": "Charge separation stops net flow."
  },
  {
   "q": "The Nernst equation gives:",
   "options": [
    "Viscosity",
    "Flux by convection",
    "Osmotic pressure",
    "An ion's equilibrium potential"
   ],
   "answer": 3,
   "why": "E = (RT/zF) ln(C₁/C₂)."
  },
  {
   "q": "The Donnan equilibrium is caused by:",
   "options": [
    "Permeant small ions only",
    "Non-diffusible macro-ions",
    "Temperature",
    "Hydrostatic pressure"
   ],
   "answer": 1,
   "why": "Proteins trapped on one side."
  },
  {
   "q": "A diffusion potential arises from:",
   "options": [
    "Unequal ion mobilities",
    "Macro-ions",
    "Equal mobilities",
    "Hydrostatic pressure"
   ],
   "answer": 0,
   "why": "The faster ion leads."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "diff",
   "options": [
    "Electrical migration",
    "Simple convection",
    "Electrochemical migration",
    "Simple diffusion"
   ],
   "answer": 3,
   "why": "The arrow points to: Simple diffusion. Molecules move from high to low concentration or partial pressure (Fick's law)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "conv",
   "options": [
    "Simple diffusion",
    "Simple convection",
    "Electrochemical migration",
    "Equilibrium potential"
   ],
   "answer": 1,
   "why": "The arrow points to: Simple convection. Solvent and solutes pushed together by a hydrostatic pressure difference."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "elec",
   "options": [
    "Simple convection",
    "Electrochemical migration",
    "Equilibrium potential",
    "Electrical migration"
   ],
   "answer": 3,
   "why": "The arrow points to: Electrical migration. Ions move under an electric potential difference; cations and anions in opposite directions."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ecp",
   "options": [
    "Simple convection",
    "Equilibrium potential",
    "Electrochemical migration",
    "Electrical migration"
   ],
   "answer": 2,
   "why": "The arrow points to: Electrochemical migration. Ions respond to combined chemical and electrical gradients."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "eq",
   "options": [
    "Equilibrium potential",
    "Electrical migration",
    "Donnan equilibrium",
    "Electrochemical migration"
   ],
   "answer": 0,
   "why": "The arrow points to: Equilibrium potential. When only one ion can cross, charge separation builds a potential that stops net flow: E = (RT/zF) ln(C₁/C₂)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "don",
   "options": [
    "Simple diffusion",
    "Electrical migration",
    "Donnan equilibrium",
    "Electrochemical migration"
   ],
   "answer": 2,
   "why": "The arrow points to: Donnan equilibrium. Non-diffusible macro-ions (proteins) cause an unequal distribution of small ions and a membrane potential."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Membrane characteristics?",
   "back": "Thickness d, particle mobility u, diffusion coefficient D = RTu, permeability P = D/d."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Types of membranes?",
   "back": "Semipermeable (solvent only), dialysis (not macromolecules), selective (some ions/molecules)."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Passive vs active transport?",
   "back": "Passive: no energy, down a gradient (diffusion, facilitated diffusion, osmosis). Active: ATP, against a gradient."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Four elementary passive phenomena?",
   "back": "Simple diffusion (concentration), convection (pressure), electrical migration (potential), electrochemical migration."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Equilibrium (Nernst) potential?",
   "back": "One permeant ion diffuses, charge separates until the potential balances the gradient: E = (RT/zF) ln(C₁/C₂)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Donnan equilibrium vs diffusion potential?",
   "back": "Donnan: impermeant macro-ions cause unequal small-ion distribution. Diffusion potential: ions crossing at different speeds."
  },
  {
   "id": "img-diff",
   "type": "image",
   "target": "diff",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Simple diffusion. Molecules move from high to low concentration or partial pressure (Fick's law)."
  },
  {
   "id": "img-conv",
   "type": "image",
   "target": "conv",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Simple convection. Solvent and solutes pushed together by a hydrostatic pressure difference."
  },
  {
   "id": "img-elec",
   "type": "image",
   "target": "elec",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Electrical migration. Ions move under an electric potential difference; cations and anions in opposite directions."
  },
  {
   "id": "img-ecp",
   "type": "image",
   "target": "ecp",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Electrochemical migration. Ions respond to combined chemical and electrical gradients."
  },
  {
   "id": "img-eq",
   "type": "image",
   "target": "eq",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Equilibrium potential. When only one ion can cross, charge separation builds a potential that stops net flow: E = (RT/zF) ln(C₁/C₂)."
  },
  {
   "id": "img-don",
   "type": "image",
   "target": "don",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Donnan equilibrium. Non-diffusible macro-ions (proteins) cause an unequal distribution of small ions and a membrane potential."
  }
 ],
 "deeper": [
  {
   "title": "Why a membrane can have a voltage without any pump",
   "html": "<p>If only K⁺ can cross, K⁺ leaks out down its gradient but its negative partners stay behind. Very few ions need to move before the inside becomes negative enough to pull K⁺ back as hard as the gradient pushes it out. That balance point is the Nernst potential, and it is the basis of the resting membrane potential of nerve and muscle cells.</p><p class='src'>Source: the lecture's equilibrium potential slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "Membrane potential (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/human-biology/neuron-nervous-system/a/the-membrane-potential",
   "kind": "Article",
   "why": "Equilibrium potentials and the Nernst equation.",
   "note": ""
  },
  {
   "title": "Diffusion and osmosis (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/membranes-and-transport/diffusion-and-osmosis",
   "kind": "Website",
   "why": "Passive transport basics.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Membrane potential (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/human-biology/neuron-nervous-system/a/the-membrane-potential"
  },
  {
   "name": "Diffusion and osmosis (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/membranes-and-transport/diffusion-and-osmosis"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physics1-osmosis"] = {
 "id": "physics1-osmosis",
 "subject": "physics1",
 "group": "Membranes and major functions",
 "title": "Osmotic phenomena and oncotic pressure",
 "sourceFile": "Osmotic phenomena (Physics, Pr. Ghfir)",
 "sourceUrl": "https://drive.google.com/file/d/1DBfh7N35qLQ_BHxHAfyy1iNn3b6SDAkq/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p><strong>Osmosis</strong> is the flow of solvent (water) through a <strong>semipermeable membrane</strong> from a less concentrated to a more concentrated solution, driven by the solvent's chemical potential gradient; it tends to equalise concentrations. It governs water exchanges between cells, interstitium and plasma.</p>"
  },
  {
   "id": "s1",
   "title": "Osmotic pressure",
   "html": "<p><strong>Osmotic pressure ω</strong> is the <strong>minimum pressure</strong> to apply to the concentrated side to prevent solvent passing from the dilute side. For dilute solutions of small particles, <strong>Van't Hoff's law: ω = R·T·C</strong> (Pa), with C = <strong>osmolarity of non-diffusible particles</strong>, T in kelvin, R = 8.31 J·mol⁻¹·K⁻¹: ω rises linearly with C; measured with a membrane osmometer. For <strong>neutral macromolecules</strong>, measured ω is slightly higher: ω = aC + bC² (+ dC³): <strong>ω = RTC + RTvC²</strong>, the C² term due to the <strong>excluded volume v</strong> of the large molecules. For <strong>macro-ions</strong> (e.g. Na-proteinates) with diffusible Na⁺ and Cl⁻, the <strong>Donnan equilibrium</strong> leaves unequal diffusible-ion concentrations (Cl⁻ lower and Na⁺ higher on the protein side), a <strong>Donnan potential</strong>, and an extra <strong>Donnan pressure</strong> adding to the osmotic pressure.</p>"
  },
  {
   "id": "s2",
   "title": "Oncotic pressure",
   "html": "<p>The <strong>oncotic (Starling) pressure</strong> is the osmotic pressure of the macromolecules (proteins) of a biological fluid; it depends on the number, size and shape of the particles. <strong>Plasma oncotic pressure ≈ 28 mmHg (3.2 kPa) at 37 °C</strong>, mainly from <strong>albumin (~85%)</strong>. It pulls water into the capillaries, balancing hydrostatic pressure and keeping <strong>blood volume</strong> constant; a fall (hypoalbuminaemia in liver failure, nephrotic syndrome, malnutrition) favours <strong>oedema</strong>.</p>"
  }
 ],
 "exam": [
  "Osmosis: solvent flows through a semipermeable membrane toward the more concentrated side.",
  "Osmotic pressure: minimum pressure to stop the flow.",
  "Van't Hoff: ω = RTC (C = osmolarity of non-diffusible particles).",
  "Macromolecules: ω = RTC + RTvC² (excluded volume).",
  "Macro-ions: Donnan effect adds pressure and a potential.",
  "Oncotic pressure ≈ 28 mmHg (3.2 kPa), ~85% from albumin.",
  "Oncotic pressure keeps water in capillaries; low albumin → oedema."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Osmosis and osmotic pressure",
   "caption": "Water moves toward the more concentrated side. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"240\" y1=\"70\" x2=\"280\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"70\" x2=\"520\" y2=\"70\"/>",
   "parts": {
    "dil": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"40\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Dilute side",
      "(high water potential)"
     ],
     "lx": 140.0,
     "ly": 68.0
    },
    "mem": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"280\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Semipermeable",
      "membrane"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "conc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"520\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Concentrated side",
      "(solute)"
     ],
     "lx": 620.0,
     "ly": 68.0
    },
    "vh": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"120\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Van't Hoff: ω = RTC",
      "(small solutes)"
     ],
     "lx": 230.0,
     "ly": 198.0
    },
    "onc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"420\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Oncotic pressure ≈ 28 mmHg",
      "(85% albumin)"
     ],
     "lx": 530.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "dil": [
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
    "conc": [
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
    "vh": [
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
    "onc": [
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
   "q": "In osmosis, water flows:",
   "options": [
    "From concentrated to dilute",
    "From dilute to concentrated",
    "In both directions equally",
    "Only with ATP"
   ],
   "answer": 1,
   "why": "Through a semipermeable membrane."
  },
  {
   "q": "Osmotic pressure is:",
   "options": [
    "Pressure stopping osmosis",
    "Atmospheric pressure",
    "Blood pressure",
    "The pressure of the solute"
   ],
   "answer": 0,
   "why": "Applied to the concentrated side."
  },
  {
   "q": "Van't Hoff's law is:",
   "options": [
    "F = 6πrηv",
    "E = hν",
    "ω = RTC",
    "PV = nRT"
   ],
   "answer": 2,
   "why": "For dilute solutions of small particles."
  },
  {
   "q": "In Van't Hoff's law, C is the:",
   "options": [
    "Impermeant osmolarity",
    "Mass concentration",
    "Temperature",
    "Molality of water"
   ],
   "answer": 0,
   "why": "Only particles that cannot cross count."
  },
  {
   "q": "For neutral macromolecules, measured osmotic pressure is:",
   "options": [
    "Equal",
    "Lower than Van't Hoff",
    "Zero",
    "Slightly higher"
   ],
   "answer": 3,
   "why": "ω = RTC + RTvC²."
  },
  {
   "q": "The Donnan effect is due to:",
   "options": [
    "Diffusible ions only",
    "Hydrostatic pressure",
    "Trapped macro-ions",
    "Temperature"
   ],
   "answer": 2,
   "why": "It adds a Donnan pressure."
  },
  {
   "q": "Plasma oncotic pressure is about:",
   "options": [
    "2.8 mmHg",
    "280 mmHg",
    "28 mmHg",
    "760 mmHg"
   ],
   "answer": 2,
   "why": "3.2 kPa at 37 °C."
  },
  {
   "q": "Plasma oncotic pressure is mainly due to:",
   "options": [
    "Sodium",
    "Globulins",
    "Fibrinogen",
    "Albumin"
   ],
   "answer": 3,
   "why": "About 85%."
  },
  {
   "q": "A fall in plasma albumin tends to cause:",
   "options": [
    "Oedema",
    "Hypertension",
    "Polycythaemia",
    "Dehydration"
   ],
   "answer": 0,
   "why": "Less water held in capillaries."
  },
  {
   "q": "Osmotic pressure depends on temperature because:",
   "options": [
    "It does not",
    "Proteins denature",
    "Water boils",
    "ω = RTC includes absolute T"
   ],
   "answer": 3,
   "why": "Proportional to T."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "dil",
   "options": [
    "Van't Hoff's law",
    "Dilute compartment",
    "Concentrated compartment",
    "Semipermeable membrane"
   ],
   "answer": 1,
   "why": "The arrow points to: Dilute compartment. Water has the higher chemical potential here and flows out."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "mem",
   "options": [
    "Oncotic pressure",
    "Semipermeable membrane",
    "Dilute compartment",
    "Van't Hoff's law"
   ],
   "answer": 1,
   "why": "The arrow points to: Semipermeable membrane. Passes water but not the solute."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "conc",
   "options": [
    "Semipermeable membrane",
    "Oncotic pressure",
    "Concentrated compartment",
    "Dilute compartment"
   ],
   "answer": 2,
   "why": "The arrow points to: Concentrated compartment. Water enters, tending to equalise concentrations."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "vh",
   "options": [
    "Semipermeable membrane",
    "Concentrated compartment",
    "Dilute compartment",
    "Van't Hoff's law"
   ],
   "answer": 3,
   "why": "The arrow points to: Van't Hoff's law. Osmotic pressure proportional to osmolarity of non-diffusible particles and absolute temperature."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "onc",
   "options": [
    "Oncotic pressure",
    "Concentrated compartment",
    "Semipermeable membrane",
    "Van't Hoff's law"
   ],
   "answer": 0,
   "why": "The arrow points to: Oncotic pressure. Osmotic pressure of plasma proteins, pulling water into capillaries and keeping blood volume stable."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Define osmosis.",
   "back": "Flow of solvent through a semipermeable membrane from dilute to concentrated solution, driven by the solvent's chemical potential."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Define osmotic pressure.",
   "back": "The minimum pressure applied to the concentrated side to prevent solvent passage."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Van't Hoff's law?",
   "back": "ω = RTC, with C = osmolarity of non-diffusible particles, T in kelvin, R = 8.31 J/mol·K."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Macromolecules and osmotic pressure?",
   "back": "ω = RTC + RTvC²: excluded volume makes it slightly higher than Van't Hoff."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Donnan effect?",
   "back": "Non-diffusible macro-ions cause unequal diffusible-ion concentrations, a Donnan potential and extra Donnan pressure."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Plasma oncotic pressure?",
   "back": "≈ 28 mmHg (3.2 kPa) at 37 °C, ~85% from albumin; keeps water in capillaries."
  },
  {
   "id": "img-dil",
   "type": "image",
   "target": "dil",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Dilute compartment. Water has the higher chemical potential here and flows out."
  },
  {
   "id": "img-mem",
   "type": "image",
   "target": "mem",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Semipermeable membrane. Passes water but not the solute."
  },
  {
   "id": "img-conc",
   "type": "image",
   "target": "conc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Concentrated compartment. Water enters, tending to equalise concentrations."
  },
  {
   "id": "img-vh",
   "type": "image",
   "target": "vh",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Van't Hoff's law. Osmotic pressure proportional to osmolarity of non-diffusible particles and absolute temperature."
  },
  {
   "id": "img-onc",
   "type": "image",
   "target": "onc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Oncotic pressure. Osmotic pressure of plasma proteins, pulling water into capillaries and keeping blood volume stable."
  }
 ],
 "deeper": [
  {
   "title": "Why only non-diffusible particles count",
   "html": "<p>A solute that crosses the membrane freely equalises on both sides and creates no lasting water pull. Only particles held back by the membrane, such as proteins at the capillary wall, sustain an osmotic gradient. That is why small solutes like glucose and sodium, which cross capillaries easily, contribute little to the oncotic pressure that holds water in the blood.</p><p class='src'>Source: the lecture's Van't Hoff law and oncotic pressure slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "Osmosis (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/membranes-and-transport/diffusion-and-osmosis/a/osmosis",
   "kind": "Article",
   "why": "Tonicity and osmosis.",
   "note": ""
  },
  {
   "title": "Oncotic pressure (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK544373/",
   "kind": "Book",
   "why": "Physiology and clinical relevance.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Osmosis (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/membranes-and-transport/diffusion-and-osmosis/a/osmosis"
  },
  {
   "name": "Oncotic pressure (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK544373/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physics1-fluid-transfers"] = {
 "id": "physics1-fluid-transfers",
 "subject": "physics1",
 "group": "Membranes and major functions",
 "title": "Fluid transfers in the organism",
 "sourceFile": "Fluid transfers (Physics, Pr. Ghfir)",
 "sourceUrl": "https://drive.google.com/file/d/181KKZmFlrNv9CTGj454lnGJ_rFyG5Frm/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>Water (60-65% of body weight) is exchanged between compartments: intracellular ≈ 40% (≈ 28 L in a 70 kg adult); extracellular ≈ 20-21% (interstitial ≈ 15%, 10-11 L; plasma ≈ 4%, 3 L; lymph 1-2%). Transfers happen between the outside world and plasma (gut), plasma and interstitium (capillaries), and plasma and outside (kidney), through <strong>dialysis-like membranes</strong> driven by <strong>hydrostatic</strong> and <strong>oncotic</strong> pressures, and through semipermeable membranes (red cells) driven by osmosis.</p>"
  },
  {
   "id": "s1",
   "title": "Starling's law",
   "html": "<p>For a dialysis membrane (passes water and small solutes, not proteins), the effective osmotic pressure is the <strong>oncotic pressure π</strong>, and flow results from competition with <strong>hydrostatic pressure P</strong>: <strong>Φ₁→₂ = K·S·(P₁ − P₂ − π₁ + π₂)</strong> (K permeability, S exchange area). Plasma oncotic pressure ≈ <strong>28 mmHg</strong> (albumin concentration, excluded volume, Donnan effect); it can be raised by IV linear macromolecules.</p>"
  },
  {
   "id": "s2",
   "title": "Intestine and capillaries",
   "html": "<p><strong>Intestinal absorption</strong> (villi as dialysis membrane): between meals, lumen P = 2, π = 0 (digested proteins); capillary P = 20, π = 28 → Φ = K·S(2 − 20 − 0 + 28) = <strong>+10</strong>: absorption. During digestion (P lumen ≈ 100 mmHg): +108, optimal absorption. In <strong>intestinal congestion</strong> (capillary P > 20) absorption falls; above ~30 mmHg flow reverses: water exudes (<strong>diarrhoea</strong>). <strong>Capillary exchange</strong>: blood P = 35 (arterial end) or 20 (venous end), π = 28; interstitium P = 6, π = 6. Arterial end: 35 − 6 + 6 − 28 = <strong>+7</strong> → filtration to the tissues (<strong>nutritive</strong>); venous end: 20 − 6 + 6 − 28 = <strong>−8</strong> → reabsorption (removal of metabolic waste); excess filtered fluid returns via lymph. <strong>Oedema</strong> results from raised capillary hydrostatic pressure (venous congestion, heart failure) or lowered oncotic pressure (hypoalbuminaemia).</p>"
  }
 ],
 "exam": [
  "Intracellular ≈ 40% (28 L); interstitial ≈ 15%; plasma ≈ 4% (3 L); lymph 1-2%.",
  "Dialysis membranes: flow driven by hydrostatic vs oncotic pressures.",
  "Starling: Φ = K·S(P₁ − P₂ − π₁ + π₂).",
  "Plasma oncotic pressure ≈ 28 mmHg.",
  "Gut between meals: +10 (absorption); digestion: +108.",
  "Capillary P > 30 mmHg in gut → exudation, diarrhoea.",
  "Capillary arterial end +7 (filtration, nutritive); venous end −8 (reabsorption).",
  "Oedema: ↑ capillary pressure or ↓ oncotic pressure."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Starling forces along a capillary",
   "caption": "Filtration at the arterial end, reabsorption at the venous end. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"260\" y1=\"70\" x2=\"270\" y2=\"200\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"490\" y1=\"200\" x2=\"500\" y2=\"70\"/>",
   "parts": {
    "art": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"40\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Arterial end: P = 35,",
      "π = 28 → +7 (filtration)"
     ],
     "lx": 150.0,
     "ly": 68.0
    },
    "ven": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"500\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Venous end: P = 20,",
      "π = 28 → −8 (reabsorption)"
     ],
     "lx": 610.0,
     "ly": 68.0
    },
    "int": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"270\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Interstitium:",
      "P = 6, π = 6 mmHg"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "law": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"270\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Φ = K·S (P₁ − P₂ − π₁ + π₂)"
     ],
     "lx": 380.0,
     "ly": 76.0
    }
   },
   "arrows": {
    "art": [
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
    "ven": [
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
    "int": [
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
    "law": [
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
    ]
   }
  }
 },
 "mcqs": [
  {
   "q": "Intracellular water in a 70 kg adult is about:",
   "options": [
    "11 L",
    "28 L",
    "3 L",
    "42 L"
   ],
   "answer": 1,
   "why": "≈ 40% of body weight."
  },
  {
   "q": "Plasma water volume is about:",
   "options": [
    "28 L",
    "11 L",
    "3 L",
    "5 L"
   ],
   "answer": 2,
   "why": "≈ 4% of body weight."
  },
  {
   "q": "Across a dialysis membrane, the effective osmotic pressure is the:",
   "options": [
    "Total osmotic pressure",
    "Hydrostatic pressure",
    "Oncotic pressure",
    "Atmospheric pressure"
   ],
   "answer": 2,
   "why": "Small solutes cross freely."
  },
  {
   "q": "The Starling equation is:",
   "options": [
    "Φ = ρgh",
    "Φ = RTC",
    "Φ = C·S·v",
    "K·S(ΔP − Δπ)"
   ],
   "answer": 3,
   "why": "Hydrostatic vs oncotic."
  },
  {
   "q": "Between meals, net intestinal flow is:",
   "options": [
    "+108",
    "−8, secretion",
    "0",
    "+10, absorption"
   ],
   "answer": 3,
   "why": "2 − 20 − 0 + 28."
  },
  {
   "q": "Why is intestinal oncotic pressure ≈ 0?",
   "options": [
    "Proteins are digested",
    "Albumin is absorbed",
    "No water",
    "High pressure"
   ],
   "answer": 0,
   "why": "Proteins broken down."
  },
  {
   "q": "If intestinal capillary pressure exceeds ~30 mmHg:",
   "options": [
    "Nothing changes",
    "Absorption increases",
    "Flow reverses",
    "Oncotic pressure rises"
   ],
   "answer": 2,
   "why": "Intestinal congestion."
  },
  {
   "q": "At the arterial end of a capillary, net flow is about:",
   "options": [
    "+28 mmHg",
    "−8 mmHg",
    "0",
    "+7 mmHg, filtration"
   ],
   "answer": 3,
   "why": "35 − 6 + 6 − 28."
  },
  {
   "q": "At the venous end, net flow is about:",
   "options": [
    "+7",
    "−8, reabsorption",
    "0",
    "+20"
   ],
   "answer": 1,
   "why": "20 − 6 + 6 − 28."
  },
  {
   "q": "Which favours oedema?",
   "options": [
    "Low plasma oncotic pressure",
    "Dehydration",
    "Low capillary pressure",
    "High plasma albumin"
   ],
   "answer": 0,
   "why": "Also raised capillary hydrostatic pressure."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "art",
   "options": [
    "Starling equation",
    "Arterial segment",
    "Interstitial compartment",
    "Venous segment"
   ],
   "answer": 1,
   "why": "The arrow points to: Arterial segment. 35 − 6 + 6 − 28 = +7 mmHg: water and small solutes leave the blood (nutritive effect)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ven",
   "options": [
    "Venous segment",
    "Starling equation",
    "Interstitial compartment",
    "Arterial segment"
   ],
   "answer": 0,
   "why": "The arrow points to: Venous segment. 20 − 6 + 6 − 28 = −8 mmHg: water returns to the blood, carrying metabolic waste."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "int",
   "options": [
    "Interstitial compartment",
    "Venous segment",
    "Arterial segment",
    "Starling equation"
   ],
   "answer": 0,
   "why": "The arrow points to: Interstitial compartment. Low hydrostatic (≈ 6 mmHg) and oncotic (≈ 6 mmHg) pressures."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "law",
   "options": [
    "Venous segment",
    "Starling equation",
    "Interstitial compartment",
    "Arterial segment"
   ],
   "answer": 1,
   "why": "The arrow points to: Starling equation. Net flow set by hydrostatic minus oncotic pressure differences across a dialysis-like membrane."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Distribution of body water?",
   "back": "Intracellular ≈ 40% (28 L); extracellular ≈ 20-21%: interstitial ≈ 15% (10-11 L), plasma ≈ 4% (3 L), lymph 1-2%."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Starling equation?",
   "back": "Φ₁→₂ = K·S·(P₁ − P₂ − π₁ + π₂): hydrostatic minus oncotic pressure differences."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Intestinal absorption of water?",
   "back": "Between meals: 2 − 20 − 0 + 28 = +10 (absorption); digestion: +108; congestion (capillary P > 30): reversal, diarrhoea."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Capillary exchange values?",
   "back": "Arterial end: 35 − 6 + 6 − 28 = +7 (filtration). Venous end: 20 − 6 + 6 − 28 = −8 (reabsorption)."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Causes of oedema by Starling forces?",
   "back": "Raised capillary hydrostatic pressure (heart failure, venous congestion) or lowered plasma oncotic pressure (hypoalbuminaemia)."
  },
  {
   "id": "img-art",
   "type": "image",
   "target": "art",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Arterial segment. 35 − 6 + 6 − 28 = +7 mmHg: water and small solutes leave the blood (nutritive effect)."
  },
  {
   "id": "img-ven",
   "type": "image",
   "target": "ven",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Venous segment. 20 − 6 + 6 − 28 = −8 mmHg: water returns to the blood, carrying metabolic waste."
  },
  {
   "id": "img-int",
   "type": "image",
   "target": "int",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Interstitial compartment. Low hydrostatic (≈ 6 mmHg) and oncotic (≈ 6 mmHg) pressures."
  },
  {
   "id": "img-law",
   "type": "image",
   "target": "law",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Starling equation. Net flow set by hydrostatic minus oncotic pressure differences across a dialysis-like membrane."
  }
 ],
 "deeper": [
  {
   "title": "Why capillaries both feed and drain tissues",
   "html": "<p>Blood pressure falls along the capillary from about 35 to 20 mmHg while the oncotic pressure of plasma proteins stays near 28 mmHg. At the arterial end pressure wins and fluid carrying nutrients leaves; at the venous end oncotic pull wins and fluid carrying waste returns. The small excess left behind is collected by lymphatics.</p><p class='src'>Source: the lecture's capillary exchange calculation.</p>"
  }
 ],
 "resources": [
  {
   "title": "Capillary exchange (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/human-biology/circulatory-pulmonary/v/capillary-fluid-exchange",
   "kind": "Video",
   "why": "Starling forces explained.",
   "note": ""
  },
  {
   "title": "Edema (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK537065/",
   "kind": "Book",
   "why": "Mechanisms of oedema.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Capillary exchange (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/human-biology/circulatory-pulmonary/v/capillary-fluid-exchange"
  },
  {
   "name": "Edema (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK537065/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physics1-circulation"] = {
 "id": "physics1-circulation",
 "subject": "physics1",
 "group": "Membranes and major functions",
 "title": "Biophysics of the blood circulation",
 "sourceFile": "Biophysics of the blood circulation (Physics, Pr. Ghfir)",
 "sourceUrl": "https://drive.google.com/file/d/1C-iyVxMURGC5K78OfaXdHoyCeO2ytkMy/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>The circulation is a closed circuit: a <strong>pump</strong> (heart), a <strong>fluid</strong> (blood) and <strong>conduits</strong> (vessels). It delivers oxygen and nutrients and removes metabolic waste, adjusted to each organ's activity. The heart is a <strong>double pump</strong>: the right heart drives the <strong>pulmonary</strong> circulation (right atrium → right ventricle → pulmonary artery → lungs), the left heart the <strong>systemic</strong> circulation (pulmonary veins → left atrium → left ventricle → aorta → organs), separated by the septa and connected by valves.</p>"
  },
  {
   "id": "s1",
   "title": "Blood and flow laws",
   "html": "<p>Blood is a suspension of cells in plasma and a <strong>non-Newtonian</strong> fluid whose viscosity rises in small vessels (reversible red-cell aggregation). <strong>Poiseuille's law</strong> (laminar flow): <strong>Q = πr⁴ΔP/(8ηL)</strong>: resistance is proportional to viscosity and length and inversely to r⁴. A sustained rise in viscosity (<strong>polycythaemia</strong>) tends to lower flow; to keep flow constant, pressure rises: <strong>hypertension</strong>. Pressure falls progressively from the heart to the periphery. Elastic vessels convert <strong>pulsatile</strong> flow into <strong>continuous</strong> flow.</p><p><strong>Flow regimes</strong>: <strong>Reynolds number R = ρvr/η</strong>: in large vessels velocity is high and flow <strong>turbulent</strong> (aorta R ≈ 4,500); in medium vessels flow is <strong>laminar</strong>, with a plasma layer at the wall and cells centrally; in capillaries red cells pass in <strong>single file</strong>. <strong>Bernoulli</strong> (energy conservation): <strong>P + ρgh + ½ρv² = constant</strong>. In a <strong>stenosis</strong>, velocity rises and pressure falls, causing turbulence heard as a <strong>murmur</strong> and felt as a <strong>thrill</strong>; in an <strong>aneurysm</strong>, velocity falls and pressure rises.</p>"
  },
  {
   "id": "s2",
   "title": "Velocity, section and Laplace",
   "html": "<p>Vessels branch into ever more numerous, smaller vessels. The <strong>total cross-sectional area</strong> increases from the aorta to the <strong>capillaries</strong> (maximal) and falls again toward the venae cavae; because flow = area × velocity (<strong>Q = S·v</strong>), <strong>velocity is lowest in the capillaries</strong>, favouring exchanges, then rises again in veins. <strong>Laplace's law</strong>: the wall <strong>tension T = P·r</strong> (for a cylinder); for a given pressure, larger vessels bear more tension, which is why a dilated segment (aneurysm) tends to enlarge further and can rupture.</p>"
  }
 ],
 "exam": [
  "Circulation: heart (pump), blood (fluid), vessels (closed conduits).",
  "Right heart: pulmonary circulation; left heart: systemic.",
  "Blood is non-Newtonian.",
  "Poiseuille: Q = πr⁴ΔP/(8ηL); ↑ viscosity → ↑ pressure (hypertension).",
  "Reynolds R = ρvr/η: aorta ≈ 4,500 (turbulent); medium vessels laminar.",
  "Bernoulli: P + ρgh + ½ρv² = const.",
  "Stenosis: v ↑, P ↓ → murmur, thrill. Aneurysm: v ↓, P ↑.",
  "Total section maximal in capillaries → lowest velocity.",
  "Laplace: T = P·r; larger radius, more tension."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Physical laws of the circulation",
   "caption": "From heart to capillaries and back. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs>",
   "parts": {
    "pois": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Poiseuille: Q = πr⁴ΔP/8ηL",
      "(resistance ∝ η/r⁴)"
     ],
     "lx": 130.0,
     "ly": 68.0
    },
    "bern": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"260\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Bernoulli: P + ρgh + ½ρv²",
      "= constant"
     ],
     "lx": 370.0,
     "ly": 68.0
    },
    "rey": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"500\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Reynolds R = ρvr/η:",
      "laminar vs turbulent"
     ],
     "lx": 610.0,
     "ly": 68.0
    },
    "cont": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"120\" y=\"170\" width=\"240\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Total section ↑ to capillaries",
      "→ velocity ↓ (exchanges)"
     ],
     "lx": 240.0,
     "ly": 198.0
    },
    "lap": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"420\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Laplace: T = P·r",
      "(wall tension)"
     ],
     "lx": 530.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "pois": [
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
    "bern": [
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
    "rey": [
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
    "cont": [
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
    "lap": [
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
   "q": "The right heart drives the:",
   "options": [
    "Systemic circulation",
    "Pulmonary circulation",
    "Coronary circulation only",
    "Portal circulation"
   ],
   "answer": 1,
   "why": "Via the pulmonary artery."
  },
  {
   "q": "Blood is a:",
   "options": [
    "Non-Newtonian fluid",
    "Gas",
    "Pure solution",
    "Newtonian fluid"
   ],
   "answer": 0,
   "why": "Viscosity varies with flow."
  },
  {
   "q": "According to Poiseuille, flow is proportional to:",
   "options": [
    "r²",
    "1/r",
    "r⁴",
    "r"
   ],
   "answer": 2,
   "why": "Small changes in radius matter hugely."
  },
  {
   "q": "Sustained high blood viscosity (polycythaemia) tends to cause:",
   "options": [
    "Hypertension",
    "Hypotension",
    "Oedema only",
    "Anaemia"
   ],
   "answer": 0,
   "why": "Pressure rises to keep flow."
  },
  {
   "q": "Flow in the aorta is typically:",
   "options": [
    "Absent",
    "Laminar",
    "Single file",
    "Turbulent"
   ],
   "answer": 3,
   "why": "High velocity."
  },
  {
   "q": "Bernoulli's equation expresses:",
   "options": [
    "Conservation of mass",
    "Osmosis",
    "Conservation of energy",
    "Viscosity"
   ],
   "answer": 2,
   "why": "P + ρgh + ½ρv² = const."
  },
  {
   "q": "In a stenosis:",
   "options": [
    "Velocity falls, pressure rises",
    "Nothing changes",
    "Velocity rises, pressure falls",
    "Flow stops"
   ],
   "answer": 2,
   "why": "Murmur and thrill."
  },
  {
   "q": "In an aneurysm:",
   "options": [
    "Pressure falls",
    "Flow is turbulent only",
    "Velocity rises",
    "Velocity falls and pressure rises"
   ],
   "answer": 3,
   "why": "Bernoulli."
  },
  {
   "q": "Where is blood velocity lowest?",
   "options": [
    "Capillaries",
    "Venae cavae",
    "Aorta",
    "Arteries"
   ],
   "answer": 0,
   "why": "Largest total cross-section."
  },
  {
   "q": "Laplace's law for a vessel is:",
   "options": [
    "T = Q/S",
    "T = P/r",
    "T = ρgh",
    "T = P·r"
   ],
   "answer": 3,
   "why": "Tension grows with radius."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pois",
   "options": [
    "Continuity",
    "Poiseuille's law",
    "Reynolds number",
    "Bernoulli's theorem"
   ],
   "answer": 1,
   "why": "The arrow points to: Poiseuille's law. Laminar flow is proportional to r⁴ and ΔP, inversely to viscosity and length; high viscosity raises resistance."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "bern",
   "options": [
    "Laplace's law",
    "Bernoulli's theorem",
    "Poiseuille's law",
    "Continuity"
   ],
   "answer": 1,
   "why": "The arrow points to: Bernoulli's theorem. Energy conservation: in a stenosis velocity rises and pressure falls; in an aneurysm the reverse."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "rey",
   "options": [
    "Laplace's law",
    "Bernoulli's theorem",
    "Reynolds number",
    "Poiseuille's law"
   ],
   "answer": 2,
   "why": "The arrow points to: Reynolds number. High in the aorta (≈ 4,500): turbulent flow; low in medium vessels: laminar."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "cont",
   "options": [
    "Bernoulli's theorem",
    "Reynolds number",
    "Poiseuille's law",
    "Continuity"
   ],
   "answer": 3,
   "why": "The arrow points to: Continuity. Q = S·v: total cross-section is maximal in capillaries, so velocity is lowest there."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "lap",
   "options": [
    "Laplace's law",
    "Bernoulli's theorem",
    "Reynolds number",
    "Continuity"
   ],
   "answer": 0,
   "why": "The arrow points to: Laplace's law. Wall tension rises with pressure and radius: dilated vessels and aneurysms are under more tension."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Components and aims of the circulation?",
   "back": "Pump (heart), fluid (blood), closed conduits (vessels); deliver O₂ and nutrients, remove waste, adapted to needs."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Pulmonary vs systemic circuits?",
   "back": "Right heart → pulmonary artery → lungs; left heart → aorta → organs."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Poiseuille's law and its consequence?",
   "back": "Q = πr⁴ΔP/(8ηL); raised viscosity lowers flow, so pressure rises (hypertension)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Flow regimes in vessels?",
   "back": "Large vessels turbulent (aorta R ≈ 4,500); medium laminar; capillaries single-file red cells."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Bernoulli in stenosis and aneurysm?",
   "back": "Stenosis: v ↑, P ↓, murmur and thrill. Aneurysm: v ↓, P ↑."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Velocity along the vascular tree?",
   "back": "Falls from aorta to capillaries (max total section), rises again in veins."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Laplace's law?",
   "back": "T = P·r: wall tension increases with pressure and radius."
  },
  {
   "id": "img-pois",
   "type": "image",
   "target": "pois",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Poiseuille's law. Laminar flow is proportional to r⁴ and ΔP, inversely to viscosity and length; high viscosity raises resistance."
  },
  {
   "id": "img-bern",
   "type": "image",
   "target": "bern",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Bernoulli's theorem. Energy conservation: in a stenosis velocity rises and pressure falls; in an aneurysm the reverse."
  },
  {
   "id": "img-rey",
   "type": "image",
   "target": "rey",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Reynolds number. High in the aorta (≈ 4,500): turbulent flow; low in medium vessels: laminar."
  },
  {
   "id": "img-cont",
   "type": "image",
   "target": "cont",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Continuity. Q = S·v: total cross-section is maximal in capillaries, so velocity is lowest there."
  },
  {
   "id": "img-lap",
   "type": "image",
   "target": "lap",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Laplace's law. Wall tension rises with pressure and radius: dilated vessels and aneurysms are under more tension."
  }
 ],
 "deeper": [
  {
   "title": "Why a narrowed artery makes a noise",
   "html": "<p>Blood must speed up to pass a stenosis, and by Bernoulli its pressure drops. The fast jet raises the Reynolds number above the laminar limit, so flow becomes turbulent downstream. Turbulence vibrates the vessel wall, which a stethoscope hears as a murmur or bruit and a hand feels as a thrill.</p><p class='src'>Source: the lecture's Bernoulli and Reynolds slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "Blood flow and pressure (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/human-biology/circulatory-pulmonary",
   "kind": "Website",
   "why": "Circulation and hemodynamics.",
   "note": ""
  },
  {
   "title": "Poiseuille's law (Physiopedia)",
   "url": "https://www.physio-pedia.com/Cardiovascular_System",
   "kind": "Website",
   "why": "Cardiovascular physiology overview.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Blood flow and pressure (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/human-biology/circulatory-pulmonary"
  },
  {
   "name": "Poiseuille's law (Physiopedia)",
   "url": "https://www.physio-pedia.com/Cardiovascular_System"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physics1-respiration"] = {
 "id": "physics1-respiration",
 "subject": "physics1",
 "group": "Membranes and major functions",
 "title": "Biophysics of respiration and gas transport",
 "sourceFile": "Biophysics of respiration (Physics, Pr. Ghfir)",
 "sourceUrl": "https://drive.google.com/file/d/1oHJYUbJ5h9apo2-FbdosUO_XSS2PtMT0/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>Respiration supplies <strong>O₂</strong> and removes <strong>CO₂</strong> through five processes: pulmonary ventilation, gas exchange in the lungs, gas transport in the blood, gas exchange in the tissues, and mitochondrial oxidation. The airways form a <strong>conduction zone</strong> (upper airways to terminal bronchioles: warming, filtering, humidifying) and a <strong>respiratory zone</strong> (lobules: respiratory bronchioles, alveolar ducts, alveoli). <strong>Inspiration is active</strong> (muscle contraction); <strong>expiration is passive</strong> and slightly slower.</p>"
  },
  {
   "id": "s1",
   "title": "Gas exchange",
   "html": "<p>Gases always diffuse from <strong>higher to lower partial pressure</strong>. <strong>Ventilation</strong> renews alveolar air: atmospheric PO₂ ≈ <strong>152 mmHg</strong>, PCO₂ ≈ 0.2 mmHg; alveolar PO₂ ≈ <strong>100-103</strong>, PCO₂ ≈ <strong>40</strong>. <strong>Alveolar-capillary diffusion</strong> (Fick): flux ∝ diffusion coefficient × <strong>solubility</strong> × surface S × partial pressure difference / membrane <strong>thickness e</strong>. Capillary blood arrives with PO₂ ≈ <strong>40</strong> and PCO₂ ≈ <strong>47</strong>, so O₂ enters and CO₂ leaves. <strong>CO₂ is about 20× more soluble</strong> than O₂, so it diffuses much more easily despite its small gradient; thickened membranes (fibrosis, oedema) impair O₂ first.</p>"
  },
  {
   "id": "s2",
   "title": "Mechanics and surfactant",
   "html": "<p>By Poiseuille, the pressure difference between alveoli and atmosphere drives airflow against airway <strong>resistance</strong> (mostly in larger airways; raised in bronchospasm). <strong>Compliance</strong> = ΔV/ΔP (ease of inflation; elastance is its inverse). By <strong>Laplace's law</strong> (P = 2T/r for a sphere), small alveoli with the same surface tension would collapse into larger ones; <strong>surfactant</strong> from type II pneumocytes lowers surface tension, prevents alveolar collapse at end-expiration and allows newborn lungs to open. Its absence in premature babies causes <strong>hyaline membrane disease</strong> (respiratory distress).</p>"
  },
  {
   "id": "s3",
   "title": "Gas transport in blood",
   "html": "<p><strong>O₂</strong> travels mainly bound to <strong>haemoglobin</strong> (about 98%), with a small dissolved fraction (proportional to PO₂). <strong>CO₂</strong> travels mostly as <strong>bicarbonate</strong> (about 70%, via carbonic anhydrase in red cells), as <strong>carbamino compounds</strong> bound to haemoglobin (about 20%), and dissolved (about 7-10%). Disorders of gas transport include anaemia (less haemoglobin) and <strong>carbon monoxide</strong> poisoning (CO binds haemoglobin far more avidly than O₂).</p>"
  }
 ],
 "exam": [
  "Five processes: ventilation, lung exchange, blood transport, tissue exchange, mitochondrial oxidation.",
  "Conduction zone vs respiratory zone.",
  "Inspiration active; expiration passive.",
  "Gases diffuse down partial pressure gradients.",
  "Atmosphere PO₂ 152; alveolus PO₂ ≈ 100, PCO₂ 40; venous PO₂ 40, PCO₂ 47 mmHg.",
  "Fick: flux ∝ D·s·S·ΔP / e.",
  "CO₂ ~20× more soluble than O₂.",
  "Surfactant (type II pneumocytes) prevents collapse; absent → hyaline membrane disease.",
  "O₂ ≈ 98% on haemoglobin; CO₂ mainly as bicarbonate."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Partial pressure gradients for O₂ and CO₂",
   "caption": "Gases always diffuse down their partial pressure gradient. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"190\" y1=\"70\" x2=\"200\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"370\" y1=\"70\" x2=\"380\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"550\" y1=\"70\" x2=\"560\" y2=\"70\"/>",
   "parts": {
    "atm": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Atmosphere: PO₂ 152,",
      "PCO₂ 0.2 mmHg"
     ],
     "lx": 105.0,
     "ly": 68.0
    },
    "alv": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"200\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Alveolus: PO₂ 100-103,",
      "PCO₂ 40"
     ],
     "lx": 285.0,
     "ly": 68.0
    },
    "cap": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"380\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Venous capillary blood:",
      "PO₂ 40, PCO₂ 47"
     ],
     "lx": 465.0,
     "ly": 68.0
    },
    "tis": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"560\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Tissues: O₂ used,",
      "CO₂ produced"
     ],
     "lx": 645.0,
     "ly": 68.0
    },
    "fick": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"260\" y=\"170\" width=\"240\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Fick: Φ = D·s·S·ΔP / e",
      "(CO₂ ~20× more soluble)"
     ],
     "lx": 380.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "atm": [
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
    "alv": [
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
    "cap": [
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
    "tis": [
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
    "fick": [
     {
      "t": [
       260.0,
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
   "q": "Which respiratory phase is passive at rest?",
   "options": [
    "Neither",
    "Inspiration",
    "Expiration",
    "Both"
   ],
   "answer": 2,
   "why": "Inspiration needs muscle contraction."
  },
  {
   "q": "The conduction zone ends at the:",
   "options": [
    "Alveoli",
    "Terminal bronchioles",
    "Trachea",
    "Alveolar ducts"
   ],
   "answer": 1,
   "why": "Then the respiratory zone begins."
  },
  {
   "q": "Alveolar PO₂ is about:",
   "options": [
    "152 mmHg",
    "760 mmHg",
    "100 mmHg",
    "40 mmHg"
   ],
   "answer": 2,
   "why": "Atmospheric PO₂ ≈ 152 mmHg."
  },
  {
   "q": "Alveolar PCO₂ is about:",
   "options": [
    "40 mmHg",
    "0.2 mmHg",
    "100 mmHg",
    "47 mmHg"
   ],
   "answer": 0,
   "why": "Venous blood ≈ 47."
  },
  {
   "q": "Gases diffuse across the alveolar membrane according to:",
   "options": [
    "Poiseuille's law",
    "Laplace's law",
    "Fick's law",
    "Stokes' law"
   ],
   "answer": 2,
   "why": "Flux ∝ D·s·S·ΔP/e."
  },
  {
   "q": "CO₂ diffuses more easily than O₂ because it is:",
   "options": [
    "Bound to haemoglobin",
    "Lighter",
    "Charged",
    "About 20 times more soluble"
   ],
   "answer": 3,
   "why": "Solubility coefficient."
  },
  {
   "q": "Thickening of the alveolar-capillary membrane:",
   "options": [
    "Slows diffusion",
    "Only affects CO₂",
    "Speeds diffusion",
    "Has no effect"
   ],
   "answer": 0,
   "why": "Flux ∝ 1/e."
  },
  {
   "q": "Surfactant is produced by:",
   "options": [
    "Macrophages",
    "Type II pneumocytes",
    "Endothelium",
    "Type I pneumocytes"
   ],
   "answer": 1,
   "why": "Lowers surface tension."
  },
  {
   "q": "Absence of surfactant in premature newborns causes:",
   "options": [
    "Hyaline membrane disease",
    "Asthma",
    "Pneumothorax",
    "Emphysema"
   ],
   "answer": 0,
   "why": "Alveoli cannot open."
  },
  {
   "q": "Most O₂ in blood travels:",
   "options": [
    "In plasma proteins",
    "Dissolved",
    "As bicarbonate",
    "Bound to haemoglobin"
   ],
   "answer": 3,
   "why": "About 98%."
  },
  {
   "q": "Most CO₂ in blood travels as:",
   "options": [
    "Bicarbonate",
    "Carbonic acid only",
    "Carboxyhaemoglobin",
    "Dissolved gas"
   ],
   "answer": 0,
   "why": "About 70%."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "atm",
   "options": [
    "Pulmonary capillary (entering)",
    "Tissue exchange",
    "Alveolar air",
    "Atmospheric air"
   ],
   "answer": 3,
   "why": "The arrow points to: Atmospheric air. PO₂ ≈ 152 mmHg, PCO₂ ≈ 0.2 mmHg at sea level."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "alv",
   "options": [
    "Alveolar-capillary diffusion",
    "Alveolar air",
    "Atmospheric air",
    "Tissue exchange"
   ],
   "answer": 1,
   "why": "The arrow points to: Alveolar air. PO₂ ≈ 100-103, PCO₂ ≈ 40 mmHg."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "cap",
   "options": [
    "Atmospheric air",
    "Alveolar-capillary diffusion",
    "Alveolar air",
    "Pulmonary capillary (entering)"
   ],
   "answer": 3,
   "why": "The arrow points to: Pulmonary capillary (entering). Venous blood PO₂ ≈ 40, PCO₂ ≈ 47 mmHg: O₂ enters the blood, CO₂ leaves."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "tis",
   "options": [
    "Pulmonary capillary (entering)",
    "Tissue exchange",
    "Atmospheric air",
    "Alveolar air"
   ],
   "answer": 1,
   "why": "The arrow points to: Tissue exchange. In tissues the gradients reverse: O₂ diffuses to cells, CO₂ to blood."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "fick",
   "options": [
    "Pulmonary capillary (entering)",
    "Alveolar air",
    "Alveolar-capillary diffusion",
    "Tissue exchange"
   ],
   "answer": 2,
   "why": "The arrow points to: Alveolar-capillary diffusion. Flux proportional to diffusion coefficient, solubility, surface and pressure difference, inversely to membrane thickness."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Five processes of respiration?",
   "back": "Pulmonary ventilation, gas exchange in lungs, gas transport in blood, gas exchange in tissues, mitochondrial oxidation."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Zones of the respiratory system?",
   "back": "Conduction zone (to terminal bronchioles: warm, filter, humidify) and respiratory zone (lobules, alveoli: exchange)."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Partial pressures along the path?",
   "back": "Atmosphere PO₂ 152, PCO₂ 0.2; alveolus PO₂ ~100, PCO₂ 40; venous blood PO₂ 40, PCO₂ 47 mmHg."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Fick's law for alveolar diffusion?",
   "back": "Flux ∝ diffusion coefficient × solubility × surface × ΔP / membrane thickness; CO₂ ~20× more soluble than O₂."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Role of surfactant?",
   "back": "Made by type II pneumocytes; lowers surface tension, prevents end-expiratory collapse (Laplace), opens newborn lungs; absence → hyaline membrane disease."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Transport of O₂ and CO₂?",
   "back": "O₂: ~98% on haemoglobin, rest dissolved. CO₂: ~70% bicarbonate, ~20% carbamino, ~7-10% dissolved."
  },
  {
   "id": "img-atm",
   "type": "image",
   "target": "atm",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Atmospheric air. PO₂ ≈ 152 mmHg, PCO₂ ≈ 0.2 mmHg at sea level."
  },
  {
   "id": "img-alv",
   "type": "image",
   "target": "alv",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Alveolar air. PO₂ ≈ 100-103, PCO₂ ≈ 40 mmHg."
  },
  {
   "id": "img-cap",
   "type": "image",
   "target": "cap",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Pulmonary capillary (entering). Venous blood PO₂ ≈ 40, PCO₂ ≈ 47 mmHg: O₂ enters the blood, CO₂ leaves."
  },
  {
   "id": "img-tis",
   "type": "image",
   "target": "tis",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Tissue exchange. In tissues the gradients reverse: O₂ diffuses to cells, CO₂ to blood."
  },
  {
   "id": "img-fick",
   "type": "image",
   "target": "fick",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Alveolar-capillary diffusion. Flux proportional to diffusion coefficient, solubility, surface and pressure difference, inversely to membrane thickness."
  }
 ],
 "deeper": [
  {
   "title": "Why small alveoli need surfactant",
   "html": "<p>By Laplace's law, the pressure needed to keep a bubble open is proportional to surface tension and inversely to radius. Without surfactant, small alveoli would have higher internal pressure than large ones, empty into them and collapse. Surfactant lowers surface tension more as alveoli shrink, stabilising them; premature babies lacking it cannot keep their alveoli open.</p><p class='src'>Source: the lecture's surfactant and alveolar-capillary barrier slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "Gas exchange (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/human-biology/circulatory-pulmonary",
   "kind": "Website",
   "why": "Lungs, partial pressures and gas transport.",
   "note": ""
  },
  {
   "title": "Respiratory distress syndrome (NHLBI)",
   "url": "https://www.nhlbi.nih.gov/health/respiratory-distress-syndrome",
   "kind": "Website",
   "why": "Surfactant deficiency in premature babies.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Gas exchange (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/human-biology/circulatory-pulmonary"
  },
  {
   "name": "Respiratory distress syndrome (NHLBI)",
   "url": "https://www.nhlbi.nih.gov/health/respiratory-distress-syndrome"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physics1-acid-base"] = {
 "id": "physics1-acid-base",
 "subject": "physics1",
 "group": "Membranes and major functions",
 "title": "Acid-base balance",
 "sourceFile": "Acid-base balance (Physics, Pr. Ghfir)",
 "sourceUrl": "https://drive.google.com/file/d/1clVlTBEEQtQitP6gskQ5gF42RXuDLLu8/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>Blood pH must stay within narrow limits: <strong>arterial pH 7.38-7.42</strong> (venous 7.36-7.41); the range compatible with life is about <strong>7.00-7.80</strong>. <strong>pH = −log[H⁺]</strong>, so [H⁺] = 10⁻ᵖᴴ mol/L; neutral 7, acidic < 7, basic > 7. The body constantly produces acid from metabolism and diet, so buffers, lungs and kidneys keep pH constant for enzyme function and homeostasis.</p>"
  },
  {
   "id": "s1",
   "title": "Acids, bases and buffers",
   "html": "<p>An <strong>acid</strong> releases H⁺; a <strong>base</strong> captures H⁺; an acid and its <strong>conjugate base</strong> form a pair (A ⇌ B + H⁺). A <strong>strong acid</strong> dissociates easily (high Ka, low <strong>pKa = −log Ka</strong>); a <strong>weak acid</strong> stays mostly combined (low Ka, high pKa). A <strong>buffer</strong> (weak acid + conjugate base) damps pH changes very quickly. <strong>Open system</strong>: <strong>H₂CO₃/HCO₃⁻</strong>, pKa <strong>6.1</strong> at 37 °C; HCO₃⁻ normally <strong>24-28 mmol/L</strong>; H₂CO₃ is in equilibrium with dissolved CO₂, proportional to arterial <strong>PCO₂</strong> (normally <strong>40 ± 3 mmHg</strong>), which the lungs control: <strong>Henderson-Hasselbalch: pH = 6.1 + log [HCO₃⁻] / (0.03 × PCO₂)</strong> (0.03 mmol/L/mmHg = CO₂ solubility); with 24 mmol/L and 40 mmHg: 6.1 + log(24/1.2) = 6.1 + log 20 ≈ <strong>7.40</strong>. <strong>Closed systems</strong> (total acid + base constant): <strong>phosphate</strong> (pKa 6.82; HPO₄²⁻/H₂PO₄⁻ = 4 gives pH 7.4; intracellular and renal), <strong>proteins</strong> (plasma and cells), and <strong>haemoglobin</strong>, the main red-cell buffer (so blood buffers more than plasma). Other intracellular buffers take up H⁺ in exchange for K⁺ (hence hyperkalaemia in acidosis), acting before the kidney.</p>"
  },
  {
   "id": "s2",
   "title": "Disorders and compensation",
   "html": "<p><strong>Respiratory acidosis</strong>: PCO₂ ↑ (hypoventilation); <strong>respiratory alkalosis</strong>: PCO₂ ↓ (hyperventilation). <strong>Metabolic acidosis</strong>: HCO₃⁻ ↓ (acid gain, e.g. ketoacidosis, or bicarbonate loss, e.g. diarrhoea); <strong>metabolic alkalosis</strong>: HCO₃⁻ ↑ (e.g. vomiting). Compensation acts on the other term of the ratio: the <strong>lungs</strong> change PCO₂ within minutes (hyperventilation in metabolic acidosis), the <strong>kidneys</strong> adjust H⁺ excretion and HCO₃⁻ over hours to days (bicarbonate retention in respiratory acidosis).</p>"
  }
 ],
 "exam": [
  "Arterial pH 7.38-7.42; life-compatible ~7.00-7.80.",
  "pH = −log[H⁺].",
  "Strong acid: high Ka, low pKa; weak acid: low Ka, high pKa.",
  "Buffer = weak acid + conjugate base.",
  "Open buffer: H₂CO₃/HCO₃⁻, pKa 6.1; HCO₃⁻ 24-28 mmol/L; PCO₂ 40 mmHg.",
  "pH = 6.1 + log[HCO₃⁻]/(0.03·PCO₂) ≈ 6.1 + log 20 = 7.40.",
  "Closed buffers: phosphate (pKa 6.82), proteins, haemoglobin.",
  "Acidosis: H⁺ enters cells in exchange for K⁺.",
  "Respiratory disorders: PCO₂; metabolic disorders: HCO₃⁻.",
  "Lungs compensate in minutes; kidneys in hours-days."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Henderson-Hasselbalch and the four disorders",
   "caption": "pH = 6.1 + log [HCO₃⁻] / (0.03 × PCO₂). Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs>",
   "parts": {
    "ra": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Respiratory acidosis:",
      "PCO₂ ↑ (hypoventilation)"
     ],
     "lx": 105.0,
     "ly": 68.0
    },
    "ma": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"200\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Metabolic acidosis:",
      "HCO₃⁻ ↓"
     ],
     "lx": 285.0,
     "ly": 68.0
    },
    "ralk": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"380\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Respiratory alkalosis:",
      "PCO₂ ↓ (hyperventilation)"
     ],
     "lx": 465.0,
     "ly": 68.0
    },
    "malk": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"560\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Metabolic alkalosis:",
      "HCO₃⁻ ↑"
     ],
     "lx": 645.0,
     "ly": 68.0
    },
    "lung": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"160\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Lungs adjust PCO₂",
      "(minutes)"
     ],
     "lx": 260.0,
     "ly": 198.0
    },
    "kid": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"420\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Kidneys adjust HCO₃⁻, H⁺",
      "(hours-days)"
     ],
     "lx": 520.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "ra": [
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
    "ma": [
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
    "ralk": [
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
    "malk": [
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
    "lung": [
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
    "kid": [
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
   "root": "Acid-base balance",
   "branches": [
    [
     "pH",
     [
      "−log[H⁺]",
      "Arterial 7.38-7.42"
     ]
    ],
    [
     "Buffers",
     [
      "Open: HCO₃⁻/CO₂ (pKa 6.1)",
      "Phosphate (6.82)",
      "Proteins, haemoglobin"
     ]
    ],
    [
     "Henderson-Hasselbalch",
     [
      "6.1 + log HCO₃⁻/(0.03 PCO₂)",
      "Ratio 20 → 7.40"
     ]
    ],
    [
     "Disorders",
     [
      "Resp. acidosis / alkalosis: PCO₂",
      "Metab. acidosis / alkalosis: HCO₃⁻"
     ]
    ],
    [
     "Compensation",
     [
      "Lungs: minutes",
      "Kidneys: hours-days"
     ]
    ]
   ]
  }
 },
 "mcqs": [
  {
   "q": "Normal arterial pH is:",
   "options": [
    "7.50-7.60",
    "6.80-7.00",
    "7.38-7.42",
    "7.00-7.20"
   ],
   "answer": 2,
   "why": "Venous slightly lower."
  },
  {
   "q": "pH is defined as:",
   "options": [
    "log[H⁺]",
    "[H⁺]×10",
    "[OH⁻]",
    "−log[H⁺]"
   ],
   "answer": 3,
   "why": "[H⁺] = 10⁻ᵖᴴ."
  },
  {
   "q": "A strong acid has:",
   "options": [
    "pKa = 7",
    "No Ka",
    "Low Ka, high pKa",
    "High Ka, low pKa"
   ],
   "answer": 3,
   "why": "It dissociates easily."
  },
  {
   "q": "A buffer consists of:",
   "options": [
    "Weak acid + its base",
    "A strong acid alone",
    "A salt only",
    "Water only"
   ],
   "answer": 0,
   "why": "It damps pH changes."
  },
  {
   "q": "The pKa of the bicarbonate buffer at 37 °C is:",
   "options": [
    "7.4",
    "6.82",
    "6.1",
    "9.2"
   ],
   "answer": 2,
   "why": "Phosphate: 6.82."
  },
  {
   "q": "Normal plasma bicarbonate is about:",
   "options": [
    "100 mmol/L",
    "2-4 mmol/L",
    "24-28 mmol/L",
    "140 mmol/L"
   ],
   "answer": 2,
   "why": "Measured on blood gases."
  },
  {
   "q": "Normal arterial PCO₂ is about:",
   "options": [
    "100 mmHg",
    "40 mmHg",
    "20 mmHg",
    "760 mmHg"
   ],
   "answer": 1,
   "why": "40 ± 3 mmHg."
  },
  {
   "q": "Why is bicarbonate called an 'open' buffer?",
   "options": [
    "It has no pKa",
    "CO₂ leaves via lungs",
    "It never changes",
    "It is intracellular"
   ],
   "answer": 1,
   "why": "CO₂ is exhaled."
  },
  {
   "q": "With HCO₃⁻ = 24 mmol/L and PCO₂ = 40 mmHg, pH ≈",
   "options": [
    "7.40",
    "7.10",
    "7.60",
    "6.10"
   ],
   "answer": 0,
   "why": "6.1 + log(24/1.2) = 6.1 + log 20."
  },
  {
   "q": "The main buffer inside red cells is:",
   "options": [
    "Haemoglobin",
    "Albumin",
    "Phosphate",
    "Bicarbonate"
   ],
   "answer": 0,
   "why": "Blood buffers better than plasma."
  },
  {
   "q": "Hypoventilation causes:",
   "options": [
    "Metabolic acidosis",
    "Respiratory acidosis",
    "Respiratory alkalosis",
    "Metabolic alkalosis"
   ],
   "answer": 1,
   "why": "CO₂ retention."
  },
  {
   "q": "Metabolic acidosis is compensated by:",
   "options": [
    "Hypoventilation",
    "Nothing",
    "Bicarbonate excretion",
    "Hyperventilation lowering PCO₂"
   ],
   "answer": 3,
   "why": "Lungs act within minutes."
  },
  {
   "q": "Prolonged vomiting typically causes:",
   "options": [
    "No change",
    "Metabolic alkalosis",
    "Respiratory acidosis",
    "Metabolic acidosis"
   ],
   "answer": 1,
   "why": "Loss of gastric acid."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ra",
   "options": [
    "Respiratory acidosis",
    "Respiratory alkalosis",
    "Metabolic acidosis",
    "Metabolic alkalosis"
   ],
   "answer": 0,
   "why": "The arrow points to: Respiratory acidosis. CO₂ retention lowers pH; kidneys compensate by retaining bicarbonate."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ma",
   "options": [
    "Respiratory acidosis",
    "Respiratory regulation",
    "Metabolic alkalosis",
    "Metabolic acidosis"
   ],
   "answer": 3,
   "why": "The arrow points to: Metabolic acidosis. Loss of bicarbonate or gain of acid; lungs compensate by hyperventilating (lower PCO₂)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ralk",
   "options": [
    "Metabolic acidosis",
    "Respiratory regulation",
    "Respiratory alkalosis",
    "Metabolic alkalosis"
   ],
   "answer": 2,
   "why": "The arrow points to: Respiratory alkalosis. Excess CO₂ elimination raises pH; kidneys excrete bicarbonate."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "malk",
   "options": [
    "Respiratory alkalosis",
    "Metabolic alkalosis",
    "Metabolic acidosis",
    "Respiratory regulation"
   ],
   "answer": 1,
   "why": "The arrow points to: Metabolic alkalosis. Excess bicarbonate or loss of acid (vomiting); lungs hypoventilate."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "lung",
   "options": [
    "Respiratory regulation",
    "Renal regulation",
    "Respiratory alkalosis",
    "Metabolic alkalosis"
   ],
   "answer": 0,
   "why": "The arrow points to: Respiratory regulation. The open bicarbonate buffer lets the lungs change PCO₂ quickly."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "kid",
   "options": [
    "Respiratory alkalosis",
    "Respiratory acidosis",
    "Renal regulation",
    "Metabolic alkalosis"
   ],
   "answer": 2,
   "why": "The arrow points to: Renal regulation. Kidneys excrete H⁺ (phosphate, ammonium) and reabsorb or regenerate HCO₃⁻."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Normal pH values?",
   "back": "Arterial 7.38-7.42; venous 7.36-7.41; compatible with life ~7.00-7.80."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Acid, base, strong vs weak?",
   "back": "Acid releases H⁺, base captures H⁺; strong acid: high Ka, low pKa; weak acid: low Ka, high pKa."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Bicarbonate buffer values?",
   "back": "pKa 6.1; HCO₃⁻ 24-28 mmol/L; PCO₂ 40 ± 3 mmHg; CO₂ solubility 0.03 mmol/L/mmHg."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Henderson-Hasselbalch for blood?",
   "back": "pH = 6.1 + log [HCO₃⁻]/(0.03 × PCO₂); normal ratio 20:1 → pH 7.40."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Closed buffers?",
   "back": "Phosphate (pKa 6.82; intracellular and renal), proteins, haemoglobin (main red-cell buffer)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Four acid-base disorders?",
   "back": "Respiratory acidosis (PCO₂ ↑), respiratory alkalosis (PCO₂ ↓), metabolic acidosis (HCO₃⁻ ↓), metabolic alkalosis (HCO₃⁻ ↑)."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Compensation?",
   "back": "Lungs change PCO₂ in minutes; kidneys adjust H⁺ excretion and HCO₃⁻ over hours to days."
  },
  {
   "id": "img-ra",
   "type": "image",
   "target": "ra",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Respiratory acidosis. CO₂ retention lowers pH; kidneys compensate by retaining bicarbonate."
  },
  {
   "id": "img-ma",
   "type": "image",
   "target": "ma",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Metabolic acidosis. Loss of bicarbonate or gain of acid; lungs compensate by hyperventilating (lower PCO₂)."
  },
  {
   "id": "img-ralk",
   "type": "image",
   "target": "ralk",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Respiratory alkalosis. Excess CO₂ elimination raises pH; kidneys excrete bicarbonate."
  },
  {
   "id": "img-malk",
   "type": "image",
   "target": "malk",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Metabolic alkalosis. Excess bicarbonate or loss of acid (vomiting); lungs hypoventilate."
  },
  {
   "id": "img-lung",
   "type": "image",
   "target": "lung",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Respiratory regulation. The open bicarbonate buffer lets the lungs change PCO₂ quickly."
  },
  {
   "id": "img-kid",
   "type": "image",
   "target": "kid",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Renal regulation. Kidneys excrete H⁺ (phosphate, ammonium) and reabsorb or regenerate HCO₃⁻."
  }
 ],
 "deeper": [
  {
   "title": "Why bicarbonate is the body's most powerful buffer",
   "html": "<p>Its pKa (6.1) is far from blood pH, which would make it a weak closed buffer. What makes it powerful is that it is open: the acid side leaves as CO₂ through the lungs, and the kidneys regenerate bicarbonate. Both terms of the Henderson-Hasselbalch ratio can therefore be adjusted independently, which is how acid-base disorders are compensated.</p><p class='src'>Source: the lecture's open buffer system slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "Acid-base balance (MedlinePlus)",
   "url": "https://medlineplus.gov/ency/article/001187.htm",
   "kind": "Article",
   "why": "Acidosis and alkalosis overview.",
   "note": ""
  },
  {
   "title": "Physiology, acid base balance (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK507807/",
   "kind": "Book",
   "why": "Buffers and compensation.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Acid-base balance (MedlinePlus)",
   "url": "https://medlineplus.gov/ency/article/001187.htm"
  },
  {
   "name": "Physiology, acid base balance (NCBI StatPearls)",
   "url": "https://www.ncbi.nlm.nih.gov/books/NBK507807/"
  }
 ],
 "verified": "22 Sep 2026"
};
