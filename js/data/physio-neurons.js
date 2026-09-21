window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physio-neurons"] = {
 "id": "physio-neurons",
 "subject": "physio",
 "group": "Neurophysiology",
 "title": "Neurons and electrical communication",
 "sourceFile": "Covasa Lecture 2 Neurons. Electrical communication.pdf (Neurophysiology, Prof. Mihai Covasa, 2025-2026)",
 "sourceUrl": "https://drive.google.com/file/d/1xR4ZprZNYs4VgeX3B3wLpM4LUfBBiQ5T/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> This page follows Prof. Covasa's lecture: nervous system cells and the structure of the neuron, ion channels, the resting membrane potential, graded and action potentials, and conduction velocity. Every fact was cross-checked against at least two references, listed at the bottom. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "big",
   "title": "The big picture",
   "html": "<p>A neuron is a charged battery. At rest the inside sits at about <strong>-70 mV</strong>. A signal is simply a change in that voltage: small and local (a <strong>graded potential</strong>) or large and travelling (an <strong>action potential</strong>).</p><p>The action potential is two ions taking turns: <strong>Na+ rushes in</strong> to depolarize, then <strong>K+ flows out</strong> to repolarize.</p>"
  },
  {
   "id": "objectives",
   "title": "What the lecture asks you to do",
   "html": "<ul><li>Know the terminology of changes in membrane potential.</li><li>Know the neuron's membrane domains, the channels in each and how their opening affects the membrane potential.</li><li>Know the ionic basis of an action potential: its requirements, which channels shape each phase, what inactivation is and why it matters, and how positive feedback builds it.</li><li>Know which cells are excitable and why, and why action potentials differ between them.</li></ul>"
  },
  {
   "id": "cells",
   "title": "Nervous system cells and the neuron",
   "html": "<p>Two categories: <strong>neurons</strong>, the signalling cells, and <strong>neuroglia</strong> (ependymal cells, astrocytes, Schwann cells, oligodendrocytes, microglia), which support them. The CNS contains over 100 billion neurons and 50 to 100 times as many glia.</p><div class='table-wrap'><table class=''><thead><tr><th scope='col'>Zone</th><th scope='col'>Part</th><th scope='col'>Role</th></tr></thead><tbody><tr><th scope='row'>Input</th><td>Dendrites and cell body</td><td>Receive incoming signals</td></tr><tr><th scope='row'>Trigger</th><td>Axon hillock</td><td>Initiates action potentials</td></tr><tr><th scope='row'>Conducting</th><td>Axon (1 mm to over 1 m)</td><td>Conducts action potentials without decrement</td></tr><tr><th scope='row'>Output</th><td>Axon terminals</td><td>Release neurotransmitter</td></tr></tbody></table></div><p><strong>Unlike other cells</strong>, neurons have processes, Nissl granules and neurofibrillae, no centrosome (so they cannot divide), and they secrete neurotransmitters. Every neuron has <strong>exactly one axon</strong>; dendrites may be absent, one or many.</p><div class='table-wrap'><table class='wide'><thead><tr><th scope='col'>Part</th><th scope='col'>Key facts</th></tr></thead><tbody><tr><th scope='row'>Cell body (soma, perikaryon)</th><td>Nucleus with prominent nucleoli, no centrosome; Nissl granules; neurofibrillae; mitochondria; Golgi apparatus. No process survives without it</td></tr><tr><th scope='row'>Nissl granules</th><td>Tigroid, basophilic; in the cell body and dendrites, absent from the axon and axon hillock</td></tr><tr><th scope='row'>Dendrites</th><td>Conduct toward the soma; generate local, not action, potentials; spines in the cerebral and cerebellar cortex</td></tr><tr><th scope='row'>Axon</th><td>One per neuron, from the axon hillock; carries impulses away; cannot make protein; branches only at its terminals; converts electrical to chemical signals</td></tr><tr><th scope='row'>Axis cylinder</th><td>Axoplasm plus axolemma; covered by neurilemma or by myelin</td></tr></tbody></table></div><p><strong>Classification:</strong> by number of poles; by function (motor with a long axon, sensory with long dendrites); by axon length (Golgi type I long, type II short). <strong>Synapses</strong> join neuron to neuron, neuron to muscle (neuromuscular junction) and neuron to gland.</p>"
  },
  {
   "id": "channels",
   "title": "Ion channels",
   "html": "<p>Neurons communicate <strong>electrically</strong>, by ions crossing membranes, and <strong>chemically</strong>, by neurotransmitters at synapses. Stimuli may be mechanical, electrical or chemical.</p><div class='table-wrap'><table class=''><thead><tr><th scope='col'>Channel</th><th scope='col'>Opens when</th></tr></thead><tbody><tr><th scope='row'>Mechanically gated</th><td>A physical force acts on it</td></tr><tr><th scope='row'>Voltage-gated</th><td>The membrane potential changes</td></tr><tr><th scope='row'>Ligand-gated</th><td>A chemical or neurotransmitter binds</td></tr><tr><th scope='row'>Phosphorylation-gated</th><td>A phosphate group is attached</td></tr><tr><th scope='row'>Leak</th><td>Always open, non-gated</td></tr></tbody></table></div><p><strong>Properties.</strong> Channels are transmembrane protein pores; flux through them is <strong>always passive</strong>, up to a million ions per second. Opening is a conformational change. They are <strong>selective</strong> by charge (a positive charge in the pore repels cations and passes anions) and by size.</p>"
  },
  {
   "id": "membrane",
   "title": "The resting membrane potential",
   "html": "<p>Membrane potential is the charge inside compared with outside, in millivolts. Charges line up right at the membrane and cannot cross the lipid bilayer without channels.</p><p><strong>A resting neuron sits at -70 mV</strong>, because of negative proteins inside, moderate K+ inside and high Na+ outside.</p><div class='table-wrap'><table class=''><thead><tr><th scope='col'>Ion</th><th scope='col'>Concentration gradient</th><th scope='col'>Electrical gradient</th><th scope='col'>Equilibrium</th></tr></thead><tbody><tr><th scope='row'>K+ (inside)</th><td>Pushes it out</td><td>Negative interior holds it in</td><td>About -90 mV</td></tr><tr><th scope='row'>Na+ (outside)</th><td>Pulls it in</td><td>Negative interior pulls it in</td><td>About +60 mV</td></tr></tbody></table></div><p>At rest, <strong>K+ leak channels</strong> are open, so K+ permeability is high and the potential sits near the K+ equilibrium; few Na+ channels are open.</p><p><strong>Terms:</strong> depolarization (less negative), hyperpolarization (more negative), repolarization (back to rest), threshold (the level that triggers an action potential).</p>"
  },
  {
   "id": "signals",
   "title": "Graded potentials and action potentials",
   "html": "<div class='table-wrap'><table class='wide'><thead><tr><th scope='col'></th><th scope='col'>Graded potential</th><th scope='col'>Action potential</th></tr></thead><tbody><tr><th scope='row'>Size</th><td>Small, proportional to the stimulus (V = IR)</td><td>Large, all or none, always the same</td></tr><tr><th scope='row'>Spread</th><td>Local, fades with distance</td><td>Long distance, without decrement</td></tr><tr><th scope='row'>Where</th><td>Any membrane</td><td>Membranes with voltage-gated channels</td></tr><tr><th scope='row'>Type</th><td>Excitatory (positive in) or inhibitory (negative in, positive out)</td><td>Depolarizing, one-way toward the terminal</td></tr></tbody></table></div><p>Graded potentials can <strong>summate</strong> over time or space. If they reach threshold where voltage-gated channels exist, an action potential fires.</p><h3>Phases of the action potential</h3><ol><li><strong>Rest</strong> at -70 mV: leak K+ channels open, voltage-gated Na+ and K+ channels closed.</li><li><strong>Threshold</strong> reached at about -50 to -55 mV.</li><li><strong>Rising phase</strong>: voltage-gated Na+ channels open rapidly and Na+ rushes in.</li><li><strong>Falling phase</strong>: Na+ channels inactivate; slow K+ channels let K+ out.</li><li><strong>Dip</strong>: K+ channels close slowly, giving afterhyperpolarization.</li><li><strong>Return to rest</strong>.</li></ol><p><strong>Na+ channels</strong> are closed at rest, open rapidly at threshold and are shut by a <strong>separate inactivation gate</strong>. <strong>K+ channels</strong> open and close slowly.</p><p><strong>Propagation.</strong> Starting at the axon hillock, entering Na+ brings the next patch to threshold, a domino effect. The action potential travels only toward the terminal because the Na+ channels behind it are inactivated.</p>"
  },
  {
   "id": "conduction",
   "title": "Conduction velocity",
   "html": "<p>Two factors set how fast an action potential travels:</p><ol><li><strong>Myelination.</strong> Myelin, from oligodendrocytes (CNS) or Schwann cells (PNS), is up to 300 layers thick, with no channels beneath it. The gaps, the <strong>nodes of Ranvier</strong>, hold the voltage-gated channels, so the signal jumps node to node: <strong>saltatory conduction</strong>, faster and needing fewer Na+/K+ pumps.</li><li><strong>Axon diameter.</strong> Larger means lower resistance. Large axons reach 120 m/s (neuron to skeletal muscle); small ones only 0.7 m/s (neuron to gut).</li></ol><p>Space is limited, so an axon that must be fast is <strong>both large and myelinated</strong>.</p>"
  }
 ],
 "exam": [
  "Neurons signal; neuroglia (ependymal cells, astrocytes, Schwann cells, oligodendrocytes, microglia) support.",
  "Four zones: input (dendrites, soma), trigger (axon hillock), conducting (axon), output (terminals).",
  "One axon per neuron; no centrosome, so no division.",
  "Nissl granules absent from the axon and axon hillock.",
  "Channels: mechanical, voltage, ligand, phosphorylation-gated and leak. Flux is always passive.",
  "Resting potential -70 mV; K+ equilibrium -90 mV; Na+ equilibrium +60 mV.",
  "At rest K+ leak channels are open, so the potential sits near the K+ equilibrium.",
  "Graded potentials vary with stimulus and fade; action potentials are all or none.",
  "Threshold about -50 to -55 mV.",
  "Rising phase: Na+ in. Falling phase: K+ out. Dip: slow K+ channels close late.",
  "Na+ channels inactivate by a separate gate, making propagation one-way.",
  "Conduction velocity rises with myelination and diameter: up to 120 m/s.",
  "Saltatory conduction: node to node, at the nodes of Ranvier."
 ],
 "visual": {
  "figure": {
   "viewBox": "20 60 720 380",
   "alt": "Graph of a neuronal action potential",
   "caption": "The phases of a neuronal action potential. The dashed line marks threshold. Schematic, not to scale.",
   "base": "<path class=\"guide\" d=\"M 120 94.0 L 120 391.0 L 700 391.0\"/><text class=\"flbl\" x=\"112\" y=\"98.0\" text-anchor=\"end\">+40</text><text class=\"flbl\" x=\"112\" y=\"185.99999999999997\" text-anchor=\"end\">0</text><text class=\"flbl\" x=\"112\" y=\"340.0\" text-anchor=\"end\">-70</text><text class=\"flbl\" x=\"112\" y=\"384.0\" text-anchor=\"end\">-90</text><text class=\"flbl\" x=\"690\" y=\"413.0\" text-anchor=\"end\">Time (ms)</text><text class=\"flbl\" x=\"40\" y=\"80.0\">mV</text><path class=\"guide\" d=\"M 120 303.0 L 700 303.0\" stroke-dasharray=\"6 5\"/><path d=\"M 130 336.0 L 250 336.0 Q 268 327.2 280 303.0 Q 300 137.99999999999997 320 105.0 Q 340 137.99999999999997 360 270.0 Q 380 371.2 420 362.4 Q 470 340.4 560 336.0 L 690 336.0\" fill=\"none\" stroke=\"#8a8a8a\" stroke-width=\"3\"/>",
   "parts": {
    "rest": {
     "shape": "<path class=\"sh ln\" stroke=\"#5b8fb9\" stroke-width=\"7\" d=\"M 130 336.0 L 250 336.0\"/>",
     "label": [
      "Resting potential",
      "(-70 mV)"
     ],
     "lx": 190,
     "ly": 370.0
    },
    "threshold": {
     "shape": "<circle class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" cx=\"280\" cy=\"303.0\" r=\"9\"/>",
     "label": [
      "Threshold",
      "(-50 to -55 mV)"
     ],
     "lx": 200,
     "ly": 270.0,
     "anchor": "end",
     "lead": [
      [
       204,
       274.4
      ],
      [
       250,
       292.0
      ],
      [
       272,
       300.8
      ]
     ]
    },
    "rising": {
     "shape": "<path class=\"sh ln\" stroke=\"#d9534f\" stroke-width=\"7\" d=\"M 282 292.0 Q 300 137.99999999999997 318 109.39999999999998\"/>",
     "label": [
      "Rising phase:",
      "Na+ rushes in"
     ],
     "lx": 240,
     "ly": 137.99999999999997,
     "anchor": "end",
     "lead": [
      [
       244,
       142.39999999999998
      ],
      [
       270,
       159.99999999999997
      ],
      [
       296,
       170.99999999999997
      ]
     ]
    },
    "overshoot": {
     "shape": "<circle class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9534f\" fill-opacity=\"0.6\" cx=\"320\" cy=\"105.0\" r=\"9\"/>",
     "label": [
      "Peak",
      "(about +30 to +35 mV)"
     ],
     "lx": 400,
     "ly": 98.39999999999998,
     "anchor": "start",
     "lead": [
      [
       396,
       98.39999999999998
      ],
      [
       360,
       100.59999999999997
      ],
      [
       330,
       105.0
      ]
     ]
    },
    "falling": {
     "shape": "<path class=\"sh ln\" stroke=\"#cfe0cf\" stroke-width=\"7\" d=\"M 324 116.0 Q 340 137.99999999999997 358 265.6\"/>",
     "label": [
      "Falling phase:",
      "K+ flows out"
     ],
     "lx": 470,
     "ly": 181.99999999999997,
     "anchor": "start",
     "lead": [
      [
       466,
       181.99999999999997
      ],
      [
       400,
       181.99999999999997
      ],
      [
       346,
       181.99999999999997
      ]
     ]
    },
    "hyper": {
     "shape": "<path class=\"sh ln\" stroke=\"#3a3a3a\" stroke-width=\"7\" d=\"M 362 278.8 Q 380 371.2 420 362.4\"/>",
     "label": [
      "Afterhyperpolarization",
      "(dip below rest)"
     ],
     "lx": 470,
     "ly": 375.6,
     "anchor": "start",
     "lead": [
      [
       466,
       375.6
      ],
      [
       430,
       371.2
      ],
      [
       400,
       366.8
      ]
     ]
    }
   },
   "arrows": {
    "rest": [
     {
      "t": [
       190,
       336.0
      ],
      "d": [
       0,
       30
      ]
     }
    ],
    "threshold": [
     {
      "t": [
       280,
       303.0
      ],
      "d": [
       -60,
       20
      ]
     }
    ],
    "rising": [
     {
      "t": [
       300,
       181.99999999999997
      ],
      "d": [
       -80,
       0
      ]
     }
    ],
    "overshoot": [
     {
      "t": [
       320,
       105.0
      ],
      "d": [
       70,
       0
      ]
     }
    ],
    "falling": [
     {
      "t": [
       344,
       181.99999999999997
      ],
      "d": [
       110,
       0
      ]
     }
    ],
    "hyper": [
     {
      "t": [
       395,
       366.8
      ],
      "d": [
       70,
       -4
      ]
     }
    ]
   }
  },
  "kind": "model",
  "intro": "",
  "image": {
   "src": "https://commons.wikimedia.org/wiki/Special:FilePath/Action_potential.svg?width=700",
   "alt": "Graph of an action potential with its phases.",
   "caption": "An action potential. Public domain, via Wikimedia Commons. If it does not load, use the labelled graph below."
  }
 },
 "mcqs": [
  {
   "q": "What are the two major cell categories of the nervous system?",
   "options": [
    "Neurons and neuroglia",
    "Neurons and myocytes",
    "Axons and dendrites",
    "Astrocytes and microglia"
   ],
   "answer": 0,
   "why": "Neurons are the signalling cells; neuroglia support their development, growth, survival and structure."
  },
  {
   "q": "Which glial cells form myelin in the CNS?",
   "options": [
    "Schwann cells",
    "Oligodendrocytes",
    "Astrocytes",
    "Microglia"
   ],
   "answer": 1,
   "why": "Myelin is formed by oligodendrocytes in the CNS and Schwann cells in the PNS."
  },
  {
   "q": "Which zone of the neuron initiates action potentials?",
   "options": [
    "The dendrites (input zone)",
    "The axon (conducting zone)",
    "The axon hillock",
    "The terminals (output zone)"
   ],
   "answer": 2,
   "why": "Four zones: input (dendrites and cell body), trigger (axon hillock), conducting (axon) and output (axon terminals)."
  },
  {
   "q": "How many axons does a neuron have?",
   "options": [
    "None to many",
    "Two",
    "One to five",
    "Exactly one"
   ],
   "answer": 3,
   "why": "All neurons contain one and only one axon; dendrites may be absent, one or many."
  },
  {
   "q": "Why can neurons not divide?",
   "options": [
    "They have no nucleus",
    "They have no centrosome",
    "They lack mitochondria",
    "They lack a Golgi apparatus"
   ],
   "answer": 1,
   "why": "Neurons have no centrosome, so they have lost the power of division."
  },
  {
   "q": "Where are Nissl granules absent?",
   "options": [
    "In the dendrites",
    "In the cell body",
    "In the soma cytoplasm",
    "In the axon and hillock"
   ],
   "answer": 3,
   "why": "Nissl granules, the tigroid substance, are in the cell body and dendrites but absent from the axon and axon hillock."
  },
  {
   "q": "Which neurons have long axons reaching remote organs?",
   "options": [
    "Golgi type I",
    "Golgi type II",
    "Bipolar sensory neurons",
    "Interneurons of the cortex"
   ],
   "answer": 0,
   "why": "Golgi type I neurons have long axons from the CNS to remote organs; Golgi type II have short axons in the cortex and cord."
  },
  {
   "q": "Which direction does the axon carry impulses?",
   "options": [
    "Towards the soma",
    "In both directions",
    "Away from the soma",
    "Towards the dendrites"
   ],
   "answer": 2,
   "why": "The axon conducts centrifugally, away from the soma; dendrites conduct centripetally, towards it."
  },
  {
   "q": "What do dendrites generate?",
   "options": [
    "Action potentials",
    "Neurotransmitters",
    "Myelin",
    "Local potentials"
   ],
   "answer": 3,
   "why": "Dendrites conduct toward the cell body and generate local, graded potentials rather than action potentials."
  },
  {
   "q": "Which channel type is always open?",
   "options": [
    "Leak channels",
    "Voltage-gated channels",
    "Ligand-gated channels",
    "Mechanically gated channels"
   ],
   "answer": 0,
   "why": "Leaky channels are non-gated and always open. The others open in response to voltage, a ligand or physical force."
  },
  {
   "q": "How is ion flux through a channel described?",
   "options": [
    "Always active",
    "Uses ATP",
    "Always passive",
    "Needs a carrier"
   ],
   "answer": 2,
   "why": "Ion flux through a channel is always passive, down the electrochemical gradient, up to a million ions per second."
  },
  {
   "q": "What makes a channel pore selective for anions?",
   "options": [
    "A negative charge inside the pore",
    "A positive charge inside the pore",
    "A very wide pore",
    "A phosphate group"
   ],
   "answer": 1,
   "why": "Charge selectivity: a positive charge in the pore repels cations, so the channel passes anions, and vice versa. Size selectivity then separates ions within a charge class."
  },
  {
   "q": "What is the resting membrane potential of a typical neuron?",
   "options": [
    "-90 mV",
    "+60 mV",
    "0 mV",
    "-70 mV"
   ],
   "answer": 3,
   "why": "About -70 mV, due to intracellular negative proteins, moderate intracellular K+ and high extracellular Na+."
  },
  {
   "q": "What is the equilibrium potential of K+?",
   "options": [
    "About +60 mV",
    "About -70 mV",
    "About -90 mV",
    "About 0 mV"
   ],
   "answer": 2,
   "why": "K+ tends to leave down its concentration gradient while the negative interior holds it in; the two balance at about -90 mV. For Na+ the equilibrium is about +60 mV."
  },
  {
   "q": "Why is the resting potential close to the K+ equilibrium?",
   "options": [
    "Many K+ leak channels are open",
    "Na+ channels are all open",
    "The pump moves Cl- only",
    "Proteins cross the membrane"
   ],
   "answer": 0,
   "why": "At rest K+ permeability is high through leak channels, while few Na+ channels are open, so the potential sits near the K+ equilibrium."
  },
  {
   "q": "What is depolarization?",
   "options": [
    "The membrane becomes more negative",
    "The membrane becomes less negative",
    "The potential returns to rest",
    "Ions stop moving"
   ],
   "answer": 1,
   "why": "Depolarization: less negative, as when positive ions enter. Hyperpolarization: more negative. Repolarization: return to rest."
  },
  {
   "q": "What sets the size of a graded potential?",
   "options": [
    "It is always the same size",
    "The axon diameter",
    "The strength of the stimulus",
    "The myelin thickness"
   ],
   "answer": 2,
   "why": "The deflection is proportional to the stimulus (V = IR). Graded potentials are local, vary in size and fade with distance."
  },
  {
   "q": "What is meant by all or none?",
   "options": [
    "It varies with the stimulus",
    "It fades with distance",
    "It can travel both ways",
    "It is always the same size"
   ],
   "answer": 3,
   "why": "Once threshold is reached, the action potential has the same magnitude and pattern every time, and spreads without decrement."
  },
  {
   "q": "At what potential do voltage-gated Na+ channels open?",
   "options": [
    "-70 mV (rest)",
    "-50 to -55 mV",
    "-90 mV",
    "+30 mV"
   ],
   "answer": 1,
   "why": "Both voltage-gated Na+ and K+ channels are closed at -70 mV and open at about -50 to -55 mV; Na+ opens rapidly, K+ slowly."
  },
  {
   "q": "What closes the voltage-gated Na+ channel after it opens?",
   "options": [
    "An inactivation gate",
    "The opening K+ channels",
    "The Na+/K+ pump",
    "A ligand binding"
   ],
   "answer": 0,
   "why": "Na+ channels are closed by a separate inactivation gate. This temporary inactivation also makes the action potential travel only one way."
  },
  {
   "q": "What causes the falling phase of the action potential?",
   "options": [
    "Na+ flowing in",
    "Cl- flowing out",
    "K+ flowing out",
    "Ca2+ flowing in"
   ],
   "answer": 2,
   "why": "Rising phase: Na+ rushes in. Falling phase: K+ leaves through the slow voltage-gated K+ channels, which close late and cause the dip below rest."
  },
  {
   "q": "Why does an action potential travel only one way along the axon?",
   "options": [
    "Na+ channels behind are inactive",
    "The axon is one-way by structure",
    "K+ blocks the way back",
    "Myelin prevents backflow"
   ],
   "answer": 0,
   "why": "The Na+ channels just behind the wave are temporarily inactivated, like dominoes that have already fallen."
  },
  {
   "q": "Which two factors increase conduction velocity?",
   "options": [
    "Length and temperature",
    "Na+ and K+ levels",
    "Soma size and dendrites",
    "Myelin and axon diameter"
   ],
   "answer": 3,
   "why": "Myelin insulates the axon; a larger diameter lowers resistance. Fast axons are both large and myelinated."
  },
  {
   "q": "Where do ions cross the membrane in a myelinated axon?",
   "options": [
    "Under the myelin",
    "At the nodes of Ranvier",
    "At the axon hillock only",
    "All along the axon"
   ],
   "answer": 1,
   "why": "Voltage-gated channels cluster at the nodes of Ranvier, and the signal jumps node to node: saltatory conduction. It is faster and needs fewer Na+/K+ pumps."
  },
  {
   "q": "Which are neuroglial cells? (choose all)",
   "options": [
    "Astrocytes",
    "Microglia",
    "Neurons",
    "Myocytes"
   ],
   "answers": [
    0,
    1
   ],
   "why": "Neuroglia: ependymal cells, astrocytes, Schwann cells, oligodendrocytes and microglia."
  },
  {
   "q": "Which set the resting membrane potential? (choose all)",
   "options": [
    "Negative intracellular proteins",
    "High extracellular Na+",
    "Open voltage-gated Na+ channels",
    "A positive interior"
   ],
   "answers": [
    0,
    1
   ],
   "why": "Negative proteins inside, moderate K+ inside and high Na+ outside give about -70 mV. Voltage-gated Na+ channels are closed at rest."
  },
  {
   "q": "Which stimuli can activate neurons? (choose all)",
   "options": [
    "Mechanical",
    "Chemical",
    "Gravitational pull",
    "Magnetic fields"
   ],
   "answers": [
    0,
    1
   ],
   "why": "Mechanical (touch, vibration), electrical (voltage change) and chemical (taste, smell, ligands) stimuli."
  },
  {
   "q": "Which are properties of an action potential? (choose all)",
   "options": [
    "All or none",
    "Travels without fading",
    "Graded with stimulus strength",
    "Travels both ways"
   ],
   "answers": [
    0,
    1
   ],
   "why": "It is all or none, propagates without decrement, keeps the same pattern and travels one way toward the terminal."
  },
  {
   "q": "Which phase of the action potential is at the arrow?",
   "target": "rest",
   "options": [
    "Resting potential (-70 mV)",
    "Threshold (-50 to -55 mV)",
    "Peak (about +30 to +35 mV)",
    "Falling phase: K+ flows out"
   ],
   "answer": 0,
   "why": "The arrow points to the resting potential (-70 mv). The fully labelled graph is on the Visual tab."
  },
  {
   "q": "Which phase of the action potential is at the arrow?",
   "target": "threshold",
   "options": [
    "Falling phase: K+ flows out",
    "Threshold (-50 to -55 mV)",
    "Peak (about +30 to +35 mV)",
    "Rising phase: Na+ rushes in"
   ],
   "answer": 1,
   "why": "The arrow points to the threshold (-50 to -55 mv). The fully labelled graph is on the Visual tab."
  },
  {
   "q": "Which phase of the action potential is at the arrow?",
   "target": "rising",
   "options": [
    "Falling phase: K+ flows out",
    "Afterhyperpolarization (dip below rest)",
    "Rising phase: Na+ rushes in",
    "Peak (about +30 to +35 mV)"
   ],
   "answer": 2,
   "why": "The arrow points to the rising phase: na+ rushes in. The fully labelled graph is on the Visual tab."
  },
  {
   "q": "Which phase of the action potential is at the arrow?",
   "target": "overshoot",
   "options": [
    "Falling phase: K+ flows out",
    "Rising phase: Na+ rushes in",
    "Resting potential (-70 mV)",
    "Peak (about +30 to +35 mV)"
   ],
   "answer": 3,
   "why": "The arrow points to the peak (about +30 to +35 mv). The fully labelled graph is on the Visual tab."
  },
  {
   "q": "Which phase of the action potential is at the arrow?",
   "target": "falling",
   "options": [
    "Falling phase: K+ flows out",
    "Resting potential (-70 mV)",
    "Afterhyperpolarization (dip below rest)",
    "Peak (about +30 to +35 mV)"
   ],
   "answer": 0,
   "why": "The arrow points to the falling phase: k+ flows out. The fully labelled graph is on the Visual tab."
  },
  {
   "q": "Which phase of the action potential is at the arrow?",
   "target": "hyper",
   "options": [
    "Falling phase: K+ flows out",
    "Afterhyperpolarization (dip below rest)",
    "Peak (about +30 to +35 mV)",
    "Rising phase: Na+ rushes in"
   ],
   "answer": 1,
   "why": "The arrow points to the afterhyperpolarization (dip below rest). The fully labelled graph is on the Visual tab."
  }
 ],
 "cards": [
  {
   "id": "n1",
   "type": "text",
   "front": "Name the two cell categories of the nervous system and the glial types.",
   "back": "Neurons, the signalling cells, and neuroglia, which support development, growth, survival and structure: ependymal cells, astrocytes, Schwann cells, oligodendrocytes and microglia."
  },
  {
   "id": "n2",
   "type": "text",
   "front": "Give the four functional zones of a neuron.",
   "back": "1. Input zone: dendrites and cell body receive signals. 2. Trigger zone: the axon hillock initiates action potentials. 3. Conducting zone: the axon, 1 mm to over 1 m long, conducts without decrement. 4. Output zone: axon terminals release neurotransmitter."
  },
  {
   "id": "n3",
   "type": "text",
   "front": "Give some numbers about the nervous system.",
   "back": "The human CNS contains over 100 billion neurons and 50 to 100 times as many glial cells; about 40 percent of human genes take part in its formation. With the endocrine system it forms the major control system of the body."
  },
  {
   "id": "n4",
   "type": "text",
   "front": "How do neurons differ from other cells?",
   "back": "They have processes (dendrites and an axon), Nissl granules and neurofibrillae, no centrosome so they cannot divide, and they contain and secrete neurotransmitters."
  },
  {
   "id": "a1",
   "type": "image",
   "target": "rest",
   "front": "Which part of the graph is at the arrow?",
   "back": "The resting potential, about -70 mV, with leak K+ channels open and voltage-gated channels closed."
  },
  {
   "id": "n5",
   "type": "text",
   "front": "Describe the neuronal domains and their channels.",
   "back": "Dendrites receive signals through ligand-gated and GPCR-gated channels. The cell body carries out biosynthesis and integration. The axon hillock generates action potentials. The axon conducts impulses with voltage-gated Na+ and K+ channels. The nerve terminals secrete neurotransmitter with voltage-gated Na+, Ca2+ and K+ channels."
  },
  {
   "id": "n6",
   "type": "text",
   "front": "How are neurons classified?",
   "back": "By number of poles; by function (motor or efferent, with a long axon and short dendrites, carrying impulses from the CNS; sensory or afferent, with a short axon and long dendrites, carrying impulses to the CNS); and by axon length (Golgi type I, long axons to remote organs; Golgi type II, short axons in the cortex and cord)."
  },
  {
   "id": "n7",
   "type": "text",
   "front": "Describe the nerve cell body.",
   "back": "Also called soma or perikaryon, stellate, round or pyramidal, maintaining the integrity of the axon. It contains the nucleus, Nissl bodies, neurofibrillae, mitochondria and the Golgi apparatus. Somata lie in the grey matter and the nuclei and ganglia; no process survives without its soma."
  },
  {
   "id": "n8",
   "type": "text",
   "front": "Describe the nucleus and Nissl granules.",
   "back": "One central nucleus with prominent nucleoli rich in RNA; no centrosome, so no division. Nissl granules, named after Franz Nissl and called tigroid substance, are small basophilic clusters in the cell body and dendrites, absent from the axon and axon hillock."
  },
  {
   "id": "a2",
   "type": "image",
   "target": "threshold",
   "front": "Which point is at the arrow?",
   "back": "Threshold, about -50 to -55 mV, where voltage-gated Na+ channels open and the action potential begins."
  },
  {
   "id": "n9",
   "type": "text",
   "front": "Describe neurofibrillae, mitochondria and the Golgi apparatus.",
   "back": "Neurofibrillae: threads of microtubules and microfilaments throughout the cell. Mitochondria: in the soma and axon, making ATP. Golgi apparatus: processes and packages proteins into granules."
  },
  {
   "id": "n10",
   "type": "text",
   "front": "Describe the dendrites.",
   "back": "Tapering, branching extensions of the soma, with dendritic spines in the cerebral and cerebellar cortex. There may be none, one or many. They conduct toward the cell body, generate local rather than action potentials, contain Nissl granules and neurofibrils, and with the soma form the input zone."
  },
  {
   "id": "n11",
   "type": "text",
   "front": "Describe the axon.",
   "back": "Only one per neuron, arising from the axon hillock and carrying impulses away from the soma. It cannot make its own protein. It branches only at its end, the synaptic knob or terminal button. It may be myelinated or not, contains transmitter vesicles, and converts the electrical signal into a chemical one."
  },
  {
   "id": "n12",
   "type": "text",
   "front": "What is the axis cylinder?",
   "back": "The axoplasm, the central core of cytoplasm, together with the axolemma, its membrane, continuous with the cell membrane of the soma. It contains mitochondria, neurofibrils and vesicles, and is covered by neurilemma in unmyelinated fibres or by myelin in myelinated ones."
  },
  {
   "id": "a3",
   "type": "image",
   "target": "rising",
   "front": "Which phase is at the arrow, and what causes it?",
   "back": "The rising phase, depolarization, caused by Na+ rushing in through voltage-gated Na+ channels."
  },
  {
   "id": "n13",
   "type": "text",
   "front": "Name the three types of synapse.",
   "back": "Neuron to neuron (synapse), neuron to skeletal muscle (neuromuscular junction) and neuron to gland (neuroglandular synapse)."
  },
  {
   "id": "n14",
   "type": "text",
   "front": "How do neurons communicate?",
   "back": "Electrically, by ions moving across membranes, locally or over long distances; and chemically, by releasing neurotransmitters onto receptors at synapses."
  },
  {
   "id": "n15",
   "type": "text",
   "front": "Name the ion channel types in neurons.",
   "back": "Mechanically gated (physical force), voltage-gated (membrane potential), ligand-gated (a chemical binds) and leak channels (always open). Phosphorylation-gated channels stay open while a phosphate is attached."
  },
  {
   "id": "n16",
   "type": "text",
   "front": "Give the key properties of ion channels.",
   "back": "Transmembrane protein pores. Flux is always passive, up to a million ions per second. Most are gated. Opening is a conformational change; once open, no further change is needed. They are selective by charge (a positive charge in the pore passes anions) and by size (Na+ versus K+)."
  },
  {
   "id": "a4",
   "type": "image",
   "target": "overshoot",
   "front": "Which point is at the arrow?",
   "back": "The peak of the action potential, when Na+ channels inactivate and K+ channels are opening."
  },
  {
   "id": "n17",
   "type": "text",
   "front": "Define membrane potential.",
   "back": "The electrical charge inside the cell compared with outside. Positive when the inside is more positive; negative when the inside is less positive. Measured in millivolts; charges accumulate right at the membrane and cannot cross the lipid bilayer without channels."
  },
  {
   "id": "n18",
   "type": "text",
   "front": "Define the membrane potential terms.",
   "back": "Resting potential: maintained across excitable membranes. Hyperpolarization: more negative than rest. Depolarization: less negative or positive. Threshold: the depolarization that triggers an action potential. Action potential: a rapid, large regenerative depolarization. Repolarization: return to rest."
  },
  {
   "id": "n19",
   "type": "text",
   "front": "Why is the resting potential -70 mV?",
   "back": "Negative proteins inside, a moderate K+ concentration inside and a high Na+ concentration outside. At rest K+ leak channels are open, so K+ permeability is high, while few Na+ channels are open, so Na+ permeability is low."
  },
  {
   "id": "n20",
   "type": "text",
   "front": "What are the forces on K+ and Na+?",
   "back": "K+: the concentration gradient pushes it out, the negative interior holds it in; equilibrium about -90 mV. Na+: both the concentration gradient and the negative interior pull it in; equilibrium about +60 mV. Nothing moves without channels."
  },
  {
   "id": "a5",
   "type": "image",
   "target": "falling",
   "front": "Which phase is at the arrow, and what causes it?",
   "back": "The falling phase, repolarization, caused by K+ flowing out through voltage-gated K+ channels."
  },
  {
   "id": "n21",
   "type": "text",
   "front": "Graded potential versus action potential.",
   "back": "Graded: small, local, variable in size and proportional to the stimulus, fading with distance, excitatory (positive ions in) or inhibitory (negative ions in or positive ions out). Action potential: large, fast, all or none, the same every time, spreading without decrement one way down the axon."
  },
  {
   "id": "n22",
   "type": "text",
   "front": "Give the six phases of the action potential.",
   "back": "1. Rest at -70 mV. 2. Threshold reached. 3. Rising phase: depolarization. 4. Falling phase: repolarization. 5. Dip: afterhyperpolarization. 6. Return to rest."
  },
  {
   "id": "n23",
   "type": "text",
   "front": "Describe the voltage-gated Na+ and K+ channels.",
   "back": "Na+: closed at -70 mV, opening rapidly at -50 to -55 mV, closed by a separate inactivation gate. K+: closed at -70 mV, opening slowly at -50 to -55 mV and closing slowly, which causes the dip below rest."
  },
  {
   "id": "n24",
   "type": "text",
   "front": "How does an action potential propagate?",
   "back": "It starts at the axon hillock. Na+ rushing in brings neighbouring membrane to threshold, opening more Na+ channels in a domino effect. It moves only toward the axon terminal, because the Na+ channels behind it are temporarily inactivated."
  },
  {
   "id": "a6",
   "type": "image",
   "target": "hyper",
   "front": "Which phase is at the arrow, and why does it happen?",
   "back": "The afterhyperpolarization: the slow K+ channels close late, so the membrane dips below rest before recovering."
  },
  {
   "id": "n25",
   "type": "text",
   "front": "What sets conduction velocity?",
   "back": "Myelination, which insulates the axon, and axon diameter, since a larger diameter means lower resistance. Large axons reach 120 m/s, for skeletal muscle; small ones only 0.7 m/s, for the gut. Fast axons are both large and myelinated."
  },
  {
   "id": "n26",
   "type": "text",
   "front": "Describe myelin and saltatory conduction.",
   "back": "Myelin, from oligodendrocytes in the CNS and Schwann cells in the PNS, is up to 300 layers thick, with no channels beneath it and gaps called nodes of Ranvier. Voltage-gated channels cluster at the nodes, so the signal jumps from node to node, faster and needing fewer Na+/K+ pumps."
  }
 ],
 "deeper": [
  {
   "title": "Why demyelination slows or blocks the nerve",
   "html": "<p>In a myelinated axon the voltage-gated channels sit almost only at the nodes of Ranvier. Strip the myelin away and the current leaks out across a membrane with too few channels to regenerate it, so conduction slows or fails entirely. That is the mechanism of multiple sclerosis in the CNS and of some neuropathies in the PNS, and it follows directly from how saltatory conduction works.</p><p class='src'>Source: the lecture's myelination and saltatory conduction slides.</p>"
  },
  {
   "title": "Why local anaesthetics stop pain",
   "html": "<p>Local anaesthetics block voltage-gated Na+ channels. With no Na+ rushing in, the rising phase can never happen, so no action potential forms and the pain signal never leaves the area. Small, unmyelinated pain fibres are blocked first, which is why pain goes before touch and movement.</p><p class='src'>Source: the lecture's voltage-gated Na+ channel and axon diameter slides.</p>"
  },
  {
   "title": "Why potassium levels matter so much clinically",
   "html": "<p>The resting potential sits near the K+ equilibrium because K+ leak channels dominate at rest. Change the potassium concentration outside the cell and the resting potential moves with it. High potassium depolarises cells toward threshold, which is why dangerous potassium levels can disturb the heart's rhythm.</p><p class='src'>Source: the lecture's resting potential and forces on ion movement slides.</p>"
  },
  {
   "title": "Why a stronger stimulus fires more often, not bigger",
   "html": "<p>Because the action potential is all or none, a neuron cannot signal a stronger stimulus by making its spikes bigger. Instead a stronger stimulus reaches threshold faster after each spike, so the neuron fires more often. Intensity is coded in frequency, not amplitude.</p><p class='src'>Source: the lecture's graded potential versus action potential slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "The action potential",
   "url": "https://teachmephysiology.com/nervous-system/synapses/action-potential/",
   "kind": "Article",
   "why": "Phases, ion channels and propagation of the action potential.",
   "note": ""
  },
  {
   "title": "Resting membrane potential",
   "url": "https://teachmephysiology.com/nervous-system/synapses/resting-membrane-potential/",
   "kind": "Article",
   "why": "How the -70 mV resting potential arises, with the ion gradients.",
   "note": ""
  },
  {
   "title": "Neuron action potential (Khan Academy)",
   "url": "https://www.khanacademy.org/science/biology/human-biology/neuron-nervous-system",
   "kind": "Course",
   "why": "Short videos building the action potential step by step.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "TeachMePhysiology, The action potential",
   "url": "https://teachmephysiology.com/nervous-system/synapses/action-potential/"
  },
  {
   "name": "TeachMePhysiology, Resting membrane potential",
   "url": "https://teachmephysiology.com/nervous-system/synapses/resting-membrane-potential/"
  },
  {
   "name": "Khan Academy, Neurons and the nervous system",
   "url": "https://www.khanacademy.org/science/biology/human-biology/neuron-nervous-system"
  }
 ],
 "verified": "21 Sep 2026"
};
