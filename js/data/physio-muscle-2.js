window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physio-muscle-2"] = {
 "id": "physio-muscle-2",
 "subject": "physio",
 "group": "Muscle",
 "title": "Muscle physiology, part II",
 "sourceFile": "Covasa Muscle Physiology Part II.pdf (Neuromuscular Physiology, Prof. Mihai Covasa, 2025-2026)",
 "sourceUrl": "https://drive.google.com/file/d/1boG1z4lWfwjnJePoQI8zfZM-QaZ2DdR4/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> This page follows Prof. Covasa's lecture: the neuromuscular junction, excitation-contraction coupling in skeletal, smooth and cardiac muscle, muscle energetics, tension and motor units, fibre types and training, fatigue and rigor mortis, and the diseases of the neuromuscular system. Several slides in the PDF are images only, so their content is not covered here. Every fact was cross-checked against at least two references, listed at the bottom. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "big",
   "title": "The big picture",
   "html": "<p>Muscle contraction is a relay. The nerve releases <strong>ACh</strong>, the end plate depolarizes, the action potential runs down the <strong>T-tubules</strong>, the sarcoplasmic reticulum releases <strong>Ca2+</strong>, Ca2+ binds <strong>troponin</strong>, and myosin grabs actin.</p><p>Most diseases in this lecture break one link: myasthenia at the receptor, Lambert-Eaton at the Ca2+ channel, McArdle at the energy supply, Duchenne in the fibre's structure.</p>"
  },
  {
   "id": "nmj",
   "title": "The neuromuscular junction",
   "html": "<p>A <strong>motor unit</strong> is one motor neuron and all the fibres it supplies, contracting together; each fibre has only one neuron.</p><p>The <strong>NMJ</strong> is a chemical synapse. Vesicles hold about <strong>1000 ACh</strong> molecules each; the cleft is about <strong>50 nm</strong>, crossed in about 0.5 ms; the <strong>motor end plate</strong> carries nicotinic receptors in junctional folds.</p><ol><li>A neuronal action potential.</li><li>Voltage-gated Ca2+ channels open.</li><li>ACh is released.</li><li>ACh diffuses and binds its receptor.</li><li>The cation pore opens and Na+ enters.</li><li>An end plate potential (EPP) develops.</li><li>AChE splits ACh into choline and acetate; choline is taken back up.</li></ol><p><strong>The nicotinic receptor</strong> is a ligand-gated cation channel; two ACh bind its two α subunits. <strong>AChE</strong> is unregulated, so longer stimulation needs more ACh.</p><p><strong>From mEPP to action potential.</strong> One vesicle gives about <strong>0.5 mV</strong> (an mEPP). About 100 vesicles sum to an EPP of about <strong>50 mV</strong>, which brings nearby membrane to threshold.</p>"
  },
  {
   "id": "ec",
   "title": "Excitation-contraction coupling",
   "html": "<ol><li>Action potentials propagate along the <strong>T-tubules</strong>.</li><li>L-type voltage-gated Ca2+ channels, the <strong>DHP receptors</strong>, open.</li><li>They trigger the <strong>ryanodine receptors</strong> of the SR to release Ca2+.</li><li>Ca2+ binds <strong>troponin</strong>, unmasking the myosin sites on actin.</li><li><strong>SERCA</strong> pumps Ca2+ back into the SR.</li></ol><p>Resting cytosolic Ca2+ is about 0.1 µmol/L; the SR holds up to 10,000 times more, and release raises cytosolic Ca2+ tenfold or more. A single action potential gives a twitch; several summate.</p><div class='table-wrap'><table class='wide'><thead><tr><th scope='col'></th><th scope='col'>Skeletal</th><th scope='col'>Smooth</th><th scope='col'>Cardiac</th></tr></thead><tbody><tr><th scope='row'>Intrinsic activity</th><td>None</td><td>Slow wave</td><td>Pacemaker potential</td></tr><tr><th scope='row'>Coupling</th><td>DHP to ryanodine, partly mechanical</td><td>Calmodulin and MLCK, second messenger</td><td>Ca2+-induced Ca2+ release</td></tr><tr><th scope='row'>Speed</th><td>Fast</td><td>Slow but sustainable</td><td>Intermediate</td></tr></tbody></table></div><p>Smooth muscle phosphorylates myosin through <strong>MLCK</strong>, raising myosin ATPase activity; nitric oxide relaxes it via cGMP.</p>"
  },
  {
   "id": "force",
   "title": "Tension, motor units and energy",
   "html": "<p>The sarcoplasm holds ATP for only about <strong>8 twitches</strong>; the <strong>creatine kinase</strong> shunt keeps ADP/ATP low, backed by glycolysis and oxidative metabolism.</p><p><strong>Single-fibre tension</strong> depends on the number of pivoting cross-bridges, the resting length and the stimulation frequency. Optimal filament overlap gives maximum tension; resting sarcomere length is <strong>75 to 130 percent</strong> of optimal.</p><p><strong>Whole-muscle force</strong> is graded by <strong>recruiting motor units</strong> (the most important means) and by <strong>raising frequency</strong>. Fewer fibres per unit means finer movement.</p><p><strong>Twitch and summation.</strong> A twitch has lag, contraction and relaxation phases. Rising frequency gives <strong>incomplete tetanus</strong>, then fused tetanus. <strong>Treppe</strong>: in a rested muscle each contraction is stronger than the last. <strong>Isotonic</strong> contractions shorten the muscle; <strong>isometric</strong> contractions develop tension without shortening.</p>"
  },
  {
   "id": "fibres",
   "title": "Fibre types, training and fatigue",
   "html": "<div class='table-wrap'><table class=''><thead><tr><th scope='col'></th><th scope='col'>Type I</th><th scope='col'>Type IIa</th><th scope='col'>Type IIb</th></tr></thead><tbody><tr><th scope='row'>Speed</th><td>Slow</td><td>Intermediate</td><td>Fast</td></tr><tr><th scope='row'>Metabolism</th><td>Slow oxidative</td><td>Fast oxidative-glycolytic</td><td>Fast glycolytic</td></tr><tr><th scope='row'>Mitochondria</th><td>High (50%)</td><td>Intermediate (35%)</td><td>Low (20%)</td></tr><tr><th scope='row'>Myoglobin</th><td>High, red</td><td>High, red</td><td>Low, white</td></tr><tr><th scope='row'>Duration</th><td>Hours</td><td>Under 30 min</td><td>Under 5 min</td></tr><tr><th scope='row'>Fatigue resistance</th><td>High</td><td>Intermediate</td><td>Low</td></tr><tr><th scope='row'>Diameter</th><td>Small</td><td>Medium</td><td>Large</td></tr></tbody></table></div><p>All fibres in a motor unit are the same type, and fibre type is set by motor neuron activity. Muscle is plastic: <strong>endurance training</strong> (15 to 20 percent of maximal force) adds mitochondria, myoglobin, capillaries and GLUT4 with little hypertrophy; <strong>strength training</strong> (75 to 90 percent) causes hypertrophy. Disuse causes atrophy, mostly of type II fibres, reversible in the young.</p><p><strong>Fatigue</strong> is the inability to maintain the desired output, when ATP use outpaces synthesis: low pH from lactate, low glycogen, depleted reserves, damage to the sarcolemma and SR. Types: psychological, muscular and synaptic. <strong>Fats burn in the flame of carbohydrates</strong>: glucose supplies the oxaloacetate the TCA cycle needs to burn fatty acids, so glycogen depletion makes endurance athletes hit the wall.</p><p><strong>Fatigue versus rigor mortis:</strong> fatigue occurs at about <strong>30 percent</strong> ATP depletion; rigor mortis is complete depletion, so cross-bridges cannot detach; it starts about 3 hours after death and lasts up to 72 hours.</p>"
  },
  {
   "id": "disease",
   "title": "Diseases of the neuromuscular system",
   "html": "<div class='table-wrap'><table class='wide'><thead><tr><th scope='col'>Disease</th><th scope='col'>Defect</th><th scope='col'>Features</th></tr></thead><tbody><tr><th scope='row'>McArdle (GSD type V)</th><td>Muscle glycogen phosphorylase</td><td>Cramps, fatigue, myoglobinuria on exercise; no lactate rise; a characteristic second wind. Sucrose before exercise, gentle aerobic exercise</td></tr><tr><th scope='row'>Tarui (GSD type VII)</th><td>Muscle phosphofructokinase</td><td>The same symptoms; glucose-6-P builds up and inhibits phosphorylase. Avoid strenuous exercise</td></tr><tr><th scope='row'>Myasthenia gravis</th><td>Autoimmunity to postsynaptic nicotinic receptors</td><td>Treated with AChE inhibitors</td></tr><tr><th scope='row'>Lambert-Eaton syndrome</th><td>Autoimmunity to presynaptic voltage-gated Ca2+ channels</td><td>ACh release is blocked</td></tr><tr><th scope='row'>ALS</th><td>Motor neuron degeneration</td><td>Muscle atrophy; about 10 percent genetic; about 5 per 100,000</td></tr><tr><th scope='row'>Duchenne dystrophy</th><td>X-linked (Xp21), no dystrophin</td><td>Falls, waddling gait, using the arms to stand, proximal weakness, calf hypertrophy; raised CK; walking lost by about 10, life expectancy about 25. Becker is milder</td></tr></tbody></table></div><p>The glycogen storage myopathies are autosomal recessive. In dystrophy, nNOS falls off its dystrophin scaffold, so the lack of nitric oxide causes vasoconstriction, ischaemia and further degeneration. Gene therapy, exon skipping and CRISPR repair are being studied.</p>"
  }
 ],
 "exam": [
  "Motor unit: one motor neuron and all its fibres; each fibre has one neuron.",
  "NMJ: vesicles of about 1000 ACh; cleft about 50 nm; nicotinic receptors on the end plate.",
  "Ca2+ entry at the terminal triggers ACh release; AChE ends the signal.",
  "Nicotinic receptor: ligand-gated cation channel, two ACh on two α subunits.",
  "mEPP about 0.5 mV; EPP about 50 mV from about 100 vesicles.",
  "EC coupling: T-tubule, DHP receptor, ryanodine receptor, Ca2+ binds troponin, SERCA returns Ca2+.",
  "Smooth muscle uses calmodulin and MLCK; nitric oxide relaxes it.",
  "ATP stores last about 8 twitches; creatine kinase buffers.",
  "Resting sarcomere length 75 to 130 percent of optimal.",
  "Force is graded by recruitment and frequency.",
  "Type I slow oxidative red; IIb fast glycolytic white.",
  "Fatigue at about 30 percent ATP depletion; rigor mortis at 100 percent.",
  "McArdle: no phosphorylase, second wind. Tarui: no PFK.",
  "Myasthenia gravis: postsynaptic receptors. Lambert-Eaton: presynaptic Ca2+ channels.",
  "Duchenne: X-linked dystrophin loss, raised CK."
 ],
 "visual": {
  "figure": {
   "viewBox": "-80 20 880 360",
   "alt": "Schematic of the neuromuscular junction and excitation-contraction coupling",
   "caption": "The neuromuscular junction and excitation-contraction coupling: ACh release, the end plate, the T-tubule and sarcoplasmic reticulum, and the contractile filaments. Schematic, not to scale.",
   "base": "",
   "parts": {
    "terminal": {
     "shape": "<path class=\"sh\" stroke=\"#8a8a8a\" fill=\"#5b8fb9\" fill-opacity=\"0.45\" d=\"M 200 40 L 340 40 L 340 150 Q 270 180 200 150 Z\"/>",
     "label": [
      "Motor nerve",
      "terminal"
     ],
     "lx": 150,
     "ly": 90,
     "anchor": "end",
     "lead": [
      [
       154,
       86
      ],
      [
       180,
       90
      ],
      [
       204,
       96
      ]
     ]
    },
    "vesicles": {
     "shape": "<g><circle class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" cx=\"230\" cy=\"100\" r=\"9\"/><circle class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" cx=\"258\" cy=\"100\" r=\"9\"/><circle class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" cx=\"286\" cy=\"100\" r=\"9\"/><circle class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" cx=\"314\" cy=\"100\" r=\"9\"/><circle class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" cx=\"230\" cy=\"124\" r=\"9\"/><circle class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" cx=\"258\" cy=\"124\" r=\"9\"/><circle class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" cx=\"286\" cy=\"124\" r=\"9\"/><circle class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" cx=\"314\" cy=\"124\" r=\"9\"/></g>",
     "label": [
      "ACh vesicles",
      "(about 1000 ACh each)"
     ],
     "lx": 400,
     "ly": 70,
     "anchor": "start",
     "lead": [
      [
       396,
       66
      ],
      [
       330,
       84
      ],
      [
       314,
       98
      ]
     ]
    },
    "ca-channel": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9534f\" x=\"330\" y=\"120\" width=\"14\" height=\"30\" rx=\"4\"/>",
     "label": [
      "Voltage-gated",
      "Ca2+ channel"
     ],
     "lx": 400,
     "ly": 130,
     "anchor": "start",
     "lead": [
      [
       396,
       126
      ],
      [
       370,
       132
      ],
      [
       346,
       134
      ]
     ]
    },
    "cleft": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#fff\" x=\"180\" y=\"176\" width=\"180\" height=\"20\" rx=\"4\"/>",
     "label": [
      "Synaptic cleft",
      "(about 50 nm)"
     ],
     "lx": 400,
     "ly": 190,
     "anchor": "start",
     "lead": [
      [
       396,
       186
      ],
      [
       372,
       186
      ],
      [
       362,
       186
      ]
     ]
    },
    "endplate": {
     "shape": "<path class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" d=\"M 150 198 L 390 198 L 390 214 L 370 214 L 370 232 L 350 232 L 350 214 L 290 214 L 290 232 L 270 232 L 270 214 L 210 214 L 210 232 L 190 232 L 190 214 L 150 214 Z\"/>",
     "label": [
      "Motor end plate",
      "(nicotinic ACh receptors)"
     ],
     "lx": 150,
     "ly": 190,
     "anchor": "end",
     "lead": [
      [
       154,
       186
      ],
      [
       170,
       196
      ],
      [
       180,
       204
      ]
     ]
    },
    "ttubule": {
     "shape": "<path class=\"sh ln\" stroke=\"#3a3a3a\" stroke-width=\"6\" d=\"M 440 214 L 440 330\"/>",
     "label": [
      "T-tubule",
      "(DHP receptor)"
     ],
     "lx": 520,
     "ly": 260,
     "anchor": "start",
     "lead": [
      [
       516,
       256
      ],
      [
       470,
       262
      ],
      [
       444,
       266
      ]
     ]
    },
    "sr": {
     "shape": "<g><rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe0cf\" x=\"400\" y=\"238\" width=\"34\" height=\"80\" rx=\"10\"/><rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe0cf\" x=\"446\" y=\"238\" width=\"34\" height=\"80\" rx=\"10\"/></g>",
     "label": [
      "Sarcoplasmic reticulum",
      "(ryanodine receptor, Ca2+ store)"
     ],
     "lx": 520,
     "ly": 320,
     "anchor": "start",
     "lead": [
      [
       516,
       316
      ],
      [
       490,
       304
      ],
      [
       480,
       298
      ]
     ]
    },
    "filaments": {
     "shape": "<g><path class=\"sh ln\" stroke=\"#d9534f\" stroke-width=\"5\" d=\"M 160 280 L 360 280 M 160 300 L 360 300\"/><path class=\"sh ln\" stroke=\"#5b8fb9\" stroke-width=\"9\" d=\"M 200 290 L 320 290\"/></g>",
     "label": [
      "Actin and myosin",
      "(Ca2+ binds troponin)"
     ],
     "lx": 150,
     "ly": 294,
     "anchor": "end",
     "lead": [
      [
       154,
       290
      ],
      [
       160,
       290
      ],
      [
       164,
       290
      ]
     ]
    }
   },
   "arrows": {
    "terminal": [
     {
      "t": [
       210,
       80
      ],
      "d": [
       -60,
       -10
      ]
     }
    ],
    "vesicles": [
     {
      "t": [
       300,
       110
      ],
      "d": [
       70,
       -40
      ]
     }
    ],
    "ca-channel": [
     {
      "t": [
       337,
       135
      ],
      "d": [
       60,
       0
      ]
     }
    ],
    "cleft": [
     {
      "t": [
       270,
       186
      ],
      "d": [
       0,
       -40
      ]
     }
    ],
    "endplate": [
     {
      "t": [
       250,
       206
      ],
      "d": [
       -80,
       -30
      ]
     }
    ],
    "ttubule": [
     {
      "t": [
       440,
       300
      ],
      "d": [
       70,
       -40
      ]
     }
    ],
    "sr": [
     {
      "t": [
       463,
       280
      ],
      "d": [
       60,
       40
      ]
     }
    ],
    "filaments": [
     {
      "t": [
       260,
       290
      ],
      "d": [
       -50,
       40
      ]
     }
    ]
   }
  },
  "kind": "model",
  "intro": "",
  "image": {
   "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Synapse_diag1.svg?width=700",
   "alt": "Diagram of a chemical synapse.",
   "caption": "A chemical synapse. Public domain, via Wikimedia Commons. If it does not load, use the schematic below."
  }
 },
 "mcqs": [
  {
   "q": "What is a motor unit?",
   "options": [
    "One motor neuron and its fibres",
    "One fibre and its nerves",
    "All neurons to one muscle",
    "One sarcomere and its bridges"
   ],
   "answer": 0,
   "why": "A motor unit is a single motor neuron and all the muscle fibres it innervates, which contract together. Each fibre is innervated by only one motor neuron."
  },
  {
   "q": "How many ACh molecules does one vesicle contain?",
   "options": [
    "About 10",
    "About 1000",
    "About 100,000",
    "About 1 million"
   ],
   "answer": 1,
   "why": "Each vesicle holds a fixed amount of ACh, about 1000 molecules."
  },
  {
   "q": "How wide is the synaptic cleft at the NMJ?",
   "options": [
    "About 5 µm",
    "About 1 mm",
    "About 50 nm",
    "About 500 nm"
   ],
   "answer": 2,
   "why": "The gap is about 50 nm, and ACh takes about 0.5 ms to diffuse across it."
  },
  {
   "q": "What triggers ACh release from the nerve terminal?",
   "options": [
    "Opening of ligand-gated Na+ channels",
    "Binding of ACh to the terminal",
    "Closure of K+ channels",
    "Opening of voltage-gated Ca2+ channels"
   ],
   "answer": 3,
   "why": "The action potential opens voltage-gated Ca2+ channels; Ca2+ entry releases ACh, which diffuses and binds the receptor."
  },
  {
   "q": "What type of receptor is the nicotinic ACh receptor?",
   "options": [
    "A G-protein coupled receptor",
    "A ligand-gated cation channel",
    "A voltage-gated Na+ channel",
    "An enzyme-linked receptor"
   ],
   "answer": 1,
   "why": "A ligand-gated, cation-selective channel. Two ACh molecules bind the two α subunits to open it."
  },
  {
   "q": "How is ACh removed from the cleft?",
   "options": [
    "By reuptake of whole ACh",
    "By diffusion only",
    "By the muscle fibre",
    "By acetylcholinesterase"
   ],
   "answer": 3,
   "why": "AChE on the end plate breaks ACh into acetate and choline; choline is taken back up. AChE is not regulated, so longer stimulation needs more ACh."
  },
  {
   "q": "What voltage change does one vesicle produce?",
   "options": [
    "About 0.5 mV",
    "About 50 mV",
    "About 100 mV",
    "About 5 mV"
   ],
   "answer": 0,
   "why": "One vesicle gives a miniature end plate potential of about 0.5 mV. About 100 vesicles sum to an EPP of about 50 mV, enough to reach threshold."
  },
  {
   "q": "Which receptor on the T-tubule senses depolarization?",
   "options": [
    "The ryanodine receptor",
    "The nicotinic receptor",
    "The DHP receptor",
    "The SERCA pump"
   ],
   "answer": 2,
   "why": "L-type voltage-gated Ca2+ channels, the DHP receptors, open along the T-tubules and trigger the ryanodine receptors of the SR."
  },
  {
   "q": "What releases Ca2+ from the sarcoplasmic reticulum?",
   "options": [
    "The DHP receptor",
    "The SERCA pump",
    "The troponin complex",
    "The ryanodine receptor"
   ],
   "answer": 3,
   "why": "The ryanodine receptor on the SR releases Ca2+ into the cytosol. SERCA pumps it back."
  },
  {
   "q": "What does Ca2+ bind to start contraction?",
   "options": [
    "Troponin",
    "Tropomyosin",
    "Myosin",
    "Actin"
   ],
   "answer": 0,
   "why": "Ca2+ binds troponin, which shifts tropomyosin and unmasks the myosin-binding sites on actin."
  },
  {
   "q": "By how much can SR Ca2+ exceed cytosolic Ca2+?",
   "options": [
    "About twice",
    "About 10 times",
    "About 10,000 times",
    "It is about equal"
   ],
   "answer": 2,
   "why": "Resting cytosol holds about 0.1 µmol/L; the SR may hold 10,000 times more. On release, cytosolic Ca2+ rises 10-fold or more."
  },
  {
   "q": "How does smooth muscle activate contraction?",
   "options": [
    "DHP and ryanodine coupling",
    "Myosin light chain kinase",
    "Troponin binding",
    "Direct ACh binding to myosin"
   ],
   "answer": 1,
   "why": "Smooth muscle uses Ca2+-calmodulin to activate MLCK, phosphorylating myosin. It is slow but can be sustained. Nitric oxide relaxes it via cGMP."
  },
  {
   "q": "Which muscle type has no intrinsic activity?",
   "options": [
    "Cardiac muscle",
    "Smooth muscle",
    "Both cardiac and smooth",
    "Skeletal muscle"
   ],
   "answer": 3,
   "why": "Skeletal muscle needs a motor neuron. Smooth muscle has a slow wave and cardiac muscle a pacemaker potential."
  },
  {
   "q": "How many twitches can stored sarcoplasmic ATP power?",
   "options": [
    "About 800",
    "About 80",
    "About 8",
    "Only 1"
   ],
   "answer": 2,
   "why": "The sarcoplasm holds enough ATP for about 8 twitches; creatine kinase keeps ADP/ATP low for continuous work."
  },
  {
   "q": "What sets the tension of a single fibre?",
   "options": [
    "Bridges, length, frequency",
    "Fibre colour and size",
    "Tendon length and width",
    "Blood flow and oxygen"
   ],
   "answer": 0,
   "why": "Single-fibre tension depends on the number of pivoting cross-bridges, the resting length at stimulation and the stimulation frequency."
  },
  {
   "q": "What is the normal resting sarcomere length?",
   "options": [
    "10 to 20 percent of optimal",
    "75 to 130 percent of optimal",
    "200 to 300 percent",
    "Exactly optimal"
   ],
   "answer": 1,
   "why": "Optimal overlap of thick and thin filaments gives the greatest tension; too much or too little reduces it."
  },
  {
   "q": "Which muscles have the smallest motor units?",
   "options": [
    "Postural muscles",
    "The largest leg muscles",
    "Those for fine movements",
    "The trunk muscles"
   ],
   "answer": 2,
   "why": "The fewer fibres per neuron, the finer the movement. Motor units range from about 50 to 500 fibres."
  },
  {
   "q": "What is the most important way to control whole-muscle tension?",
   "options": [
    "Changing fibre type",
    "Lengthening the muscle",
    "Raising body temperature",
    "Recruiting more motor units"
   ],
   "answer": 3,
   "why": "Recruitment of motor units is the main means; the other is raising stimulation frequency."
  },
  {
   "q": "What is tetanus?",
   "options": [
    "A single twitch",
    "Fused contractions",
    "Muscle relaxation",
    "Ca2+ removal"
   ],
   "answer": 1,
   "why": "At high frequency the fibre cannot relax between action potentials, so contractions summate. In incomplete tetanus it partly relaxes."
  },
  {
   "q": "What is treppe?",
   "options": [
    "Rising contractions",
    "A sustained contraction",
    "Fatigue of fibres",
    "Loss of ATP"
   ],
   "answer": 0,
   "why": "In a muscle rested for a long time, each contraction is stronger than the one before until they level off."
  },
  {
   "q": "At what ATP depletion does peripheral fatigue occur?",
   "options": [
    "About 100 percent",
    "About 5 percent",
    "About 30 percent",
    "About 90 percent"
   ],
   "answer": 2,
   "why": "At about 30 percent depletion the ADP/ATP ratio is too high for cross-bridges. Rigor mortis is complete depletion."
  },
  {
   "q": "Why do cross-bridges stay locked in rigor mortis?",
   "options": [
    "No ATP to detach myosin",
    "Too much Ca2+ is removed",
    "ACh stays bound",
    "Troponin is destroyed"
   ],
   "answer": 0,
   "why": "With no ATP, Ca2+ cannot be pumped and cross-bridges cannot dissociate. It begins about 3 hours after death and lasts up to 72 hours."
  },
  {
   "q": "Which fibres resist fatigue the most?",
   "options": [
    "Type IIb fibres",
    "Type IIa fibres",
    "All equally",
    "Type I fibres"
   ],
   "answer": 3,
   "why": "Type I: slow oxidative, high mitochondria and myoglobin, used for hours. IIa intermediate (under 30 minutes). IIb fast glycolytic, fatigue in under 5 minutes."
  },
  {
   "q": "Which enzyme is deficient in McArdle disease?",
   "options": [
    "Phosphofructokinase",
    "Glycogen phosphorylase",
    "Creatine kinase",
    "Acetylcholinesterase"
   ],
   "answer": 1,
   "why": "Type V GSD: cramps, fatigue and myoglobinuria on exercise, no lactate rise, and a characteristic second wind. Tarui (type VII) lacks muscle PFK."
  },
  {
   "q": "What causes myasthenia gravis?",
   "options": [
    "Antibodies to presynaptic Ca2+ channels",
    "Loss of dystrophin",
    "Autoimmunity against ACh receptors",
    "Loss of motor neurons"
   ],
   "answer": 2,
   "why": "Autoimmune suppression of postsynaptic nicotinic receptors, treated with AChE inhibitors. Lambert-Eaton attacks presynaptic Ca2+ channels."
  },
  {
   "q": "Which protein is missing in Duchenne muscular dystrophy?",
   "options": [
    "Dystrophin",
    "Myosin",
    "Troponin",
    "Titin"
   ],
   "answer": 0,
   "why": "An X-linked recessive disorder (Xp21) of dystrophin. Becker dystrophy is milder, with partly functional dystrophin. CK is markedly raised."
  },
  {
   "q": "Which are the ways to increase whole-muscle force? (choose all)",
   "options": [
    "Recruit more motor units",
    "Increase stimulation frequency",
    "Change fibre type instantly",
    "Lengthen the tendon"
   ],
   "answers": [
    0,
    1
   ],
   "why": "Force rises by recruiting more motor units and by increasing frequency (force-frequency)."
  },
  {
   "q": "Which are features of endurance training? (choose all)",
   "options": [
    "More mitochondria",
    "More myoglobin",
    "Large hypertrophy",
    "Fewer capillaries"
   ],
   "answers": [
    0,
    1
   ],
   "why": "Little hypertrophy but more and larger mitochondria, glycogen, myoglobin, oxidative enzymes and capillaries."
  },
  {
   "q": "Which are signs of Duchenne muscular dystrophy? (choose all)",
   "options": [
    "Proximal weakness",
    "Calf hypertrophy",
    "Hyperreflexia",
    "Ptosis"
   ],
   "answers": [
    0,
    1
   ],
   "why": "Falls, a waddling gait, using the arms to stand, proximal weakness and calf hypertrophy in a young boy."
  },
  {
   "q": "Which are causes of muscle fatigue? (choose all)",
   "options": [
    "ATP depletion",
    "Low pH from lactate",
    "Excess glycogen",
    "High ACh"
   ],
   "answers": [
    0,
    1
   ],
   "why": "Metabolic depletion, low pH, low glycogen and damage to the sarcolemma and SR. Synaptic fatigue is from lack of ACh."
  },
  {
   "q": "Which structure is at the arrow?",
   "target": "terminal",
   "options": [
    "Motor nerve terminal",
    "Synaptic cleft (about 50 nm)",
    "ACh vesicles (about 1000 ACh each)",
    "Actin and myosin (Ca2+ binds troponin)"
   ],
   "answer": 0,
   "why": "The arrow points to the motor nerve terminal. The fully labelled diagram is on the Visual tab."
  },
  {
   "q": "Which structure is at the arrow?",
   "target": "vesicles",
   "options": [
    "T-tubule (DHP receptor)",
    "ACh vesicles (about 1000 ACh each)",
    "Actin and myosin (Ca2+ binds troponin)",
    "Voltage-gated Ca2+ channel"
   ],
   "answer": 1,
   "why": "The arrow points to the ach vesicles (about 1000 ach each). The fully labelled diagram is on the Visual tab."
  },
  {
   "q": "Which structure is at the arrow?",
   "target": "ca-channel",
   "options": [
    "Motor end plate (nicotinic ACh receptors)",
    "ACh vesicles (about 1000 ACh each)",
    "Voltage-gated Ca2+ channel",
    "Synaptic cleft (about 50 nm)"
   ],
   "answer": 2,
   "why": "The arrow points to the voltage-gated ca2+ channel. The fully labelled diagram is on the Visual tab."
  },
  {
   "q": "Which structure is at the arrow?",
   "target": "cleft",
   "options": [
    "Motor nerve terminal",
    "Voltage-gated Ca2+ channel",
    "T-tubule (DHP receptor)",
    "Synaptic cleft (about 50 nm)"
   ],
   "answer": 3,
   "why": "The arrow points to the synaptic cleft (about 50 nm). The fully labelled diagram is on the Visual tab."
  },
  {
   "q": "Which structure is at the arrow?",
   "target": "endplate",
   "options": [
    "Motor end plate (nicotinic ACh receptors)",
    "Actin and myosin (Ca2+ binds troponin)",
    "Motor nerve terminal",
    "Synaptic cleft (about 50 nm)"
   ],
   "answer": 0,
   "why": "The arrow points to the motor end plate (nicotinic ach receptors). The fully labelled diagram is on the Visual tab."
  },
  {
   "q": "Which structure is at the arrow?",
   "target": "ttubule",
   "options": [
    "Actin and myosin (Ca2+ binds troponin)",
    "T-tubule (DHP receptor)",
    "ACh vesicles (about 1000 ACh each)",
    "Sarcoplasmic reticulum (ryanodine receptor, Ca2+ store)"
   ],
   "answer": 1,
   "why": "The arrow points to the t-tubule (dhp receptor). The fully labelled diagram is on the Visual tab."
  }
 ],
 "cards": [
  {
   "id": "m1",
   "type": "text",
   "front": "Define a motor unit.",
   "back": "One motor neuron and all the muscle fibres it innervates, about 50 to 500 fibres, which contract together. One neuron can supply many fibres, but each fibre has only one neuron. The gastrocnemius has about 300 motor units."
  },
  {
   "id": "m2",
   "type": "text",
   "front": "Describe the neuromuscular junction.",
   "back": "A chemical synapse between a motor neuron and a skeletal fibre. The presynaptic terminal holds vesicles of about 1000 ACh molecules each. The cleft is about 50 nm, crossed in about 0.5 ms. The postsynaptic motor end plate carries clusters of nicotinic receptors in junctional folds."
  },
  {
   "id": "m3",
   "type": "text",
   "front": "List the events at the NMJ.",
   "back": "1. A neuronal action potential. 2. Voltage-gated Ca2+ channels open. 3. ACh is released. 4. ACh diffuses and binds its receptor. 5. The cation pore opens and Na+ enters. 6. An end plate potential develops. 7. AChE splits ACh into choline and acetate; choline returns by Na+-coupled transport."
  },
  {
   "id": "m4",
   "type": "text",
   "front": "Describe acetylcholinesterase.",
   "back": "Bound to the end plate facing the cleft, it rapidly breaks ACh into inactive acetate and choline, ending the EPP. Its activity is not regulated, so longer stimulation requires more ACh."
  },
  {
   "id": "j1",
   "type": "image",
   "target": "vesicles",
   "front": "What is at the arrow?",
   "back": "Synaptic vesicles of ACh, about 1000 molecules in each."
  },
  {
   "id": "m5",
   "type": "text",
   "front": "Describe the nicotinic ACh receptor.",
   "back": "A ligand-gated cation channel permeable to Ca2+, Na+ and K+, with the largest driving force for Na+ and Ca2+, giving net depolarization. Two ACh molecules bind the two α subunits to open it, producing the end plate potential."
  },
  {
   "id": "m6",
   "type": "text",
   "front": "From mEPP to EPP to action potential.",
   "back": "One vesicle gives a miniature EPP of about 0.5 mV. About 100 vesicles sum to an EPP of about 50 mV. The EPP spreads passively to nearby membrane, which reaches threshold and fires an action potential through voltage-gated Na+ and K+ channels."
  },
  {
   "id": "m7",
   "type": "text",
   "front": "Give the steps of excitation-contraction coupling.",
   "back": "1. Action potentials propagate along the T-tubules. 2. L-type Ca2+ channels, the DHP receptors, open. 3. They trigger the ryanodine receptors of the SR to release Ca2+. 4. Ca2+ binds troponin, unmasking the myosin sites on actin. 5. SERCA pumps Ca2+ back into the SR."
  },
  {
   "id": "m8",
   "type": "text",
   "front": "Give the calcium numbers in muscle.",
   "back": "Resting cytosol holds about 0.1 µmol/L of Ca2+; the SR can hold 10,000 times more. When the SR channels open, cytosolic Ca2+ rises 10-fold or more."
  },
  {
   "id": "j2",
   "type": "image",
   "target": "ca-channel",
   "front": "Which channel is at the arrow, and what does it trigger?",
   "back": "The voltage-gated Ca2+ channel of the nerve terminal; Ca2+ entry triggers ACh release."
  },
  {
   "id": "m9",
   "type": "text",
   "front": "What structures are involved in EC coupling?",
   "back": "The sarcolemma, the transverse (T) tubules, the terminal cisternae, the sarcoplasmic reticulum, Ca2+ and troponin."
  },
  {
   "id": "m10",
   "type": "text",
   "front": "Compare the three muscle types.",
   "back": "Skeletal: no intrinsic activity, a highly reliable end plate potential, fast through T-tubules and DHP-ryanodine coupling. Smooth: an intrinsic slow wave, slow because it lacks T-tubules and uses calmodulin and MLCK; relaxed by nitric oxide via cGMP. Cardiac: an intrinsic pacemaker potential, intermediate speed through Ca2+-induced Ca2+ release."
  },
  {
   "id": "m11",
   "type": "text",
   "front": "How does smooth muscle contract?",
   "back": "MLCK is activated, myosin is phosphorylated and its ATPase activity rises. This covalent change can be sustained for long-term contraction."
  },
  {
   "id": "m12",
   "type": "text",
   "front": "Give the three energy sources for muscle.",
   "back": "The sarcoplasm holds ATP for only about 8 twitches. It is regenerated by the creatine kinase (phosphocreatine) shunt, which keeps ADP/ATP low, and by glycolysis and oxidative metabolism."
  },
  {
   "id": "j3",
   "type": "image",
   "target": "cleft",
   "front": "Which space is at the arrow?",
   "back": "The synaptic cleft, about 50 nm wide, crossed by ACh in about 0.5 ms."
  },
  {
   "id": "m13",
   "type": "text",
   "front": "What sets single-fibre tension?",
   "back": "A fibre obeys the all or none principle. Its tension depends on the number of pivoting cross-bridges, its resting length at stimulation and the stimulation frequency."
  },
  {
   "id": "m14",
   "type": "text",
   "front": "Describe the length-tension relationship.",
   "back": "Cross-bridge number depends on the overlap of thick and thin filaments. Optimal overlap gives the greatest tension; too much or too little reduces it. Normal resting sarcomere length is 75 to 130 percent of optimal."
  },
  {
   "id": "m15",
   "type": "text",
   "front": "How is whole-muscle force graded?",
   "back": "Mainly by recruiting motor units, the most important means, and by increasing stimulation frequency. The fewer fibres per motor unit, the finer the movement."
  },
  {
   "id": "m16",
   "type": "text",
   "front": "Slow versus fast motor units.",
   "back": "All fibres in a motor unit are the same type. Slow units: myosin with a long cycle time, many mitochondria, economical sustained force. Fast units: rapid cycling myosin for high power; type 2A fast and sustained, type 2X faster but non-oxidative and quickly fatigued."
  },
  {
   "id": "j4",
   "type": "image",
   "target": "endplate",
   "front": "Which structure is at the arrow?",
   "back": "The motor end plate, with nicotinic ACh receptors clustered in the junctional folds."
  },
  {
   "id": "m17",
   "type": "text",
   "front": "How does muscle adapt to use and disuse?",
   "back": "Muscle is plastic. Endurance training brings little hypertrophy but more mitochondria and oxidative enzymes. Strength training brings hypertrophy. Disuse, from bed rest, casting, denervation or space flight, causes fibre atrophy without fibre loss, most marked in type II fibres and reversible in the young."
  },
  {
   "id": "m18",
   "type": "text",
   "front": "Isotonic versus isometric contraction.",
   "back": "Isotonic: the muscle shortens against a constant load. Isometric: the muscle develops tension without changing length."
  },
  {
   "id": "m19",
   "type": "text",
   "front": "Describe the muscle twitch and summation.",
   "back": "A twitch has lag, contraction and relaxation phases. Each fibre obeys the all or none law, but the whole muscle is graded by motor unit summation. As frequency rises, contractions summate: incomplete tetanus when the fibre partly relaxes, fused tetanus when it cannot."
  },
  {
   "id": "m20",
   "type": "text",
   "front": "What is treppe?",
   "back": "A graded response in a muscle rested for a long time: each contraction is stronger than the last until they level off after a few stimuli."
  },
  {
   "id": "j5",
   "type": "image",
   "target": "ttubule",
   "front": "Which structure is at the arrow?",
   "back": "The T-tubule, carrying the action potential inward; its DHP receptors sense the depolarization."
  },
  {
   "id": "m21",
   "type": "text",
   "front": "Define fatigue and its causes.",
   "back": "The inability to maintain the desired power output, when ATP use exceeds ATP synthesis. Causes: depletion of reserves, low pH from lactate, low glycogen, and damage to the sarcolemma and SR. Types: psychological, muscular (ATP depletion) and synaptic (lack of ACh)."
  },
  {
   "id": "m22",
   "type": "text",
   "front": "Why do fats burn in the flame of carbohydrates?",
   "back": "Even when fatty acids are being oxidised, glucose metabolism is needed to supply pyruvate, which becomes oxaloacetate to keep the TCA cycle turning. So when muscle glycogen runs out, endurance athletes hit the wall; carbohydrate loading beforehand raises stamina."
  },
  {
   "id": "m23",
   "type": "text",
   "front": "Peripheral fatigue versus rigor mortis.",
   "back": "Fatigue: only about 30 percent of ATP is depleted; there is enough to pump Ca2+ but ADP/ATP is too high for cross-bridges. Rigor mortis: complete ATP depletion, so no Ca2+ transport and no cross-bridge detachment; it begins about 3 hours after death and lasts up to 72 hours."
  },
  {
   "id": "m24",
   "type": "text",
   "front": "Compare type I, IIa and IIb fibres.",
   "back": "Type I: slow oxidative, low glycogen, high mitochondria (50 percent), high myoglobin (red), high capillaries, used for hours, highly fatigue resistant, small. Type IIa: fast oxidative-glycolytic, intermediate, under 30 minutes. Type IIb: fast glycolytic, high glycogen, low mitochondria (20 percent), white, under 5 minutes, large."
  },
  {
   "id": "j6",
   "type": "image",
   "target": "sr",
   "front": "Which structure is at the arrow?",
   "back": "The sarcoplasmic reticulum, which stores Ca2+ and releases it through ryanodine receptors."
  },
  {
   "id": "m25",
   "type": "text",
   "front": "Strength versus endurance training.",
   "back": "Strength training uses 75 to 90 percent of maximal force, gives few biochemical changes but hypertrophy through more sarcomeric protein. Endurance training uses 15 to 20 percent of maximal force and gives more and larger mitochondria, glycogen, myoglobin, capillaries and enzymes such as GLUT4, delaying fatigue and improving blood glucose in diabetes."
  },
  {
   "id": "m26",
   "type": "text",
   "front": "Describe McArdle and Tarui diseases.",
   "back": "Both are autosomal recessive glycogen storage myopathies with cramps, fatigue, myalgia and myoglobinuria on strenuous exercise. McArdle (type V): no muscle glycogen phosphorylase, no lactate rise, a characteristic second wind; treated with sucrose before exercise and gentle aerobic exercise. Tarui (type VII): no muscle PFK; avoid strenuous exercise."
  },
  {
   "id": "m27",
   "type": "text",
   "front": "Myasthenia gravis versus Lambert-Eaton syndrome.",
   "back": "Myasthenia gravis: autoimmune suppression of the postsynaptic nicotinic receptors, classically treated with AChE inhibitors. Lambert-Eaton: autoimmune attack on the presynaptic voltage-gated Ca2+ channels, blocking ACh release."
  },
  {
   "id": "m28",
   "type": "text",
   "front": "Describe amyotrophic lateral sclerosis.",
   "back": "A degenerative motor neuron disease with muscle atrophy; about 10 percent of cases are genetic, the rest of unknown, possibly environmental, cause; frequency about 5 per 100,000."
  },
  {
   "id": "m29",
   "type": "text",
   "front": "Describe Duchenne muscular dystrophy.",
   "back": "X-linked recessive (Xp21), lacking dystrophin, so fibres lose integrity and are replaced by fat and fibrous tissue. A young boy falls, waddles, pushes up with his arms to stand, with proximal weakness and calf hypertrophy. CK is markedly raised; genetic testing and biopsy confirm. Walking is usually lost by 10, life expectancy is about 25, with cardiomyopathy and respiratory failure. Becker is milder, with partly functional dystrophin."
  }
 ],
 "deeper": [
  {
   "title": "Why myasthenia gets worse through the day",
   "html": "<p>In myasthenia gravis there are fewer working ACh receptors, so each nerve impulse produces a smaller end plate potential. Early on, enough ACh is released to reach threshold, but with repeated use the ACh release per impulse falls, and the smaller EPPs start to miss threshold. That is why weakness, often of the eyelids, worsens with use and through the day, and why AChE inhibitors help: they leave more ACh in the cleft.</p><p class='src'>Source: the lecture's NMJ and myasthenic disease slides.</p>"
  },
  {
   "title": "Why low calcium causes muscle spasms",
   "html": "<p>The lecture lists hypocalcaemic tetany. Low extracellular Ca2+ makes nerve membranes more excitable, so they fire on their own and the muscles they supply contract repeatedly. It explains the tingling and hand spasms after thyroid or parathyroid surgery, linking this lecture to the thyroid anatomy you learned.</p><p class='src'>Source: the lecture's hypocalcaemic tetany slide.</p>"
  },
  {
   "title": "Why rigor mortis starts and then fades",
   "html": "<p>After death, ATP runs out, and without ATP myosin cannot detach from actin, so the muscles lock. That begins around 3 hours. The stiffness fades by about 72 hours not because ATP returns but because the muscle proteins themselves begin to break down. It is the reason time of death can be estimated from rigidity.</p><p class='src'>Source: the lecture's fatigue versus rigor mortis slide.</p>"
  },
  {
   "title": "Why Duchenne boys push up on their thighs",
   "html": "<p>Duchenne weakens the proximal muscles of the hips and shoulders first. Standing from the floor needs strong hip extensors, so the child walks his hands up his own legs to push his trunk upright, a manoeuvre called Gowers' sign. The calves look big not from strength but because muscle is being replaced by fat and fibrous tissue.</p><p class='src'>Source: the lecture's Duchenne clinical case.</p>"
  }
 ],
 "resources": [
  {
   "title": "The neuromuscular junction",
   "url": "https://teachmephysiology.com/musculoskeletal/muscles/neuromuscular-junction/",
   "kind": "Article",
   "why": "ACh release, receptors and the end plate potential.",
   "note": ""
  },
  {
   "title": "Skeletal muscle contraction",
   "url": "https://teachmephysiology.com/musculoskeletal/muscles/skeletal-muscle-contraction/",
   "kind": "Article",
   "why": "Excitation-contraction coupling and the cross-bridge cycle.",
   "note": ""
  },
  {
   "title": "Muscle fibre types",
   "url": "https://www.kenhub.com/en/library/physiology/muscle-fiber-types",
   "kind": "Article",
   "why": "Type I and type II fibres compared.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "TeachMePhysiology, The neuromuscular junction",
   "url": "https://teachmephysiology.com/musculoskeletal/muscles/neuromuscular-junction/"
  },
  {
   "name": "TeachMePhysiology, Skeletal muscle contraction",
   "url": "https://teachmephysiology.com/musculoskeletal/muscles/skeletal-muscle-contraction/"
  },
  {
   "name": "Kenhub, Muscle fibre types",
   "url": "https://www.kenhub.com/en/library/physiology/muscle-fiber-types"
  }
 ],
 "verified": "21 Sep 2026"
};
