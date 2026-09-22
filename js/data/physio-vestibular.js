window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["physio-vestibular"] = {
 "id": "physio-vestibular",
 "subject": "physio",
 "group": "Special senses",
 "title": "The vestibular system",
 "sourceFile": "Covasa Vestibular System 2025.pdf (Neurophysiology, Prof. M. Covasa, 2025-2026)",
 "sourceUrl": "https://drive.google.com/file/d/1pzdNxk04kn4b1MZIShIlPzAEqetQAGTf/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>Two sensors, two kinds of motion. The <strong>otolith organs</strong> (utricle and saccule) feel <strong>gravity and linear acceleration</strong>; the <strong>semicircular canals</strong> feel <strong>rotation</strong>. Their signals keep you upright and keep your eyes steady while your head moves.</p>"
  },
  {
   "id": "s1",
   "title": "Balance and the vestibular apparatus",
   "html": "<p>Balance combines <strong>vestibular, visual and proprioceptive</strong> input, integrated mainly by the <strong>cerebellum</strong>, below consciousness. <strong>Kinesthesis</strong> is the somatosensory sense of body-part position; <strong>equilibrium</strong> is vestibular.</p><p>The vestibular apparatus lies in the petrous temporal bone, a bony and a membranous labyrinth, and senses the orientation and motion of the <strong>head</strong>, relayed by CN VIII to the vestibular nuclei and cerebellum.</p>"
  },
  {
   "id": "s2",
   "title": "Hair cells, maculae and cristae",
   "html": "<p>Stereocilia sit in a gel: the <strong>otolithic membrane</strong> (maculae) or the <strong>cupula</strong> (canals). Apices face endolymph. Bending <strong>toward the tallest row</strong> opens channels.</p><div class='table-wrap'><table class='wide'><thead><tr><th scope='col'></th><th scope='col'>Maculae (utricle, saccule)</th><th scope='col'>Cristae (canals)</th></tr></thead><tbody><tr><th scope='row'>Detect</th><td>Gravity, linear acceleration, pitch and roll</td><td>Angular acceleration</td></tr><tr><th scope='row'>Gel</th><td>Otolithic membrane with otoconia</td><td>Cupula</td></tr><tr><th scope='row'>Orientation</th><td>Utricle horizontal, saccule vertical</td><td>Three canals at right angles</td></tr></tbody></table></div><p><strong>Rotation:</strong> starting, the endolymph lags and tilts the crista opposite to the rotation; stopping, it tilts the same way; at steady speed the cupula returns to rest. Turning right excites the right lateral canal and inhibits the left.</p><p><strong>Tilt:</strong> otoconia bend the bundles; cells on the upward slope of the striola fire more, those downward less.</p>"
  },
  {
   "id": "s3",
   "title": "The vestibular nerve and central pathways",
   "html": "<p>Bipolar neurons in the <strong>vestibular ganglion</strong>. The <strong>superior division</strong> supplies the lateral and anterior cristae and most of the utricle; the <strong>inferior division</strong> supplies the saccule and the posterior crista via the singular nerve (foramen singulare). The nerve enters at the <strong>cerebellopontine angle</strong> and ends in the vestibular nuclei, projecting to motor nuclei, the cerebellum and the thalamus, then cortical areas 2v, 3a, 7 and the parieto-insular vestibular cortex.</p>"
  },
  {
   "id": "s4",
   "title": "Eye reflexes and disorders",
   "html": "<p>The <strong>MLF</strong> links the vestibular nuclei to the nuclei of III, IV and VI and upper spinal motor neurons, keeping gaze fixed. The <strong>vestibulo-ocular reflex</strong> rotates the eyes opposite to head movement; the <strong>flocculus</strong> adapts it long term.</p><div class='table-wrap'><table class='wide'><thead><tr><th scope='col'>Condition</th><th scope='col'>Features</th></tr></thead><tbody><tr><th scope='row'>Nystagmus</th><td>Involuntary jerky eye movement from abnormal vestibular input</td></tr><tr><th scope='row'>Caloric test</th><td>Warm or cold water stimulates the lateral canal crista</td></tr><tr><th scope='row'>Ménière's disease</th><td>High spontaneous vestibular firing: dizziness, nausea</td></tr><tr><th scope='row'>Internuclear ophthalmoplegia</th><td>MLF lesion: poor ipsilateral adduction, abducting nystagmus; seen in MS</td></tr></tbody></table></div>"
  }
 ],
 "exam": [
  "Otolith organs: linear acceleration and gravity; canals: angular acceleration.",
  "Cupula in canals; otolithic membrane in maculae.",
  "Bending toward the tallest stereocilium depolarises.",
  "Utricle horizontal, saccule vertical.",
  "Start of rotation: crista tilts opposite; stop: same way; steady: rest.",
  "Turning right excites the right lateral canal.",
  "Superior division: lateral and anterior cristae, utricle; inferior: saccule, posterior crista.",
  "Vestibular nerve enters at the cerebellopontine angle.",
  "MLF links vestibular nuclei to III, IV, VI.",
  "Caloric test: lateral canal; MLF lesion: internuclear ophthalmoplegia."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "-50 50 800 440",
   "alt": "Schematic of the inner ear labyrinth",
   "caption": "The right inner ear: bony labyrinth (cochlea, vestibule, semicircular canals) with the membranous utricle and saccule inside. Schematic, not to scale.",
   "base": "",
   "parts": {
    "vestibule": {
     "shape": "<ellipse class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9dde0\" cx=\"360\" cy=\"250\" rx=\"62\" ry=\"46\"/>",
     "label": "Vestibule",
     "lx": 360,
     "ly": 256
    },
    "utricle": {
     "shape": "<ellipse class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe0cf\" cx=\"382\" cy=\"234\" rx=\"24\" ry=\"14\"/>",
     "label": "Utricle",
     "lx": 540,
     "ly": 220,
     "anchor": "start",
     "lead": [
      [
       536,
       216
      ],
      [
       440,
       222
      ],
      [
       406,
       230
      ]
     ]
    },
    "saccule": {
     "shape": "<ellipse class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe0cf\" cx=\"342\" cy=\"272\" rx=\"16\" ry=\"12\"/>",
     "label": "Saccule",
     "lx": 440,
     "ly": 326,
     "anchor": "start",
     "lead": [
      [
       436,
       322
      ],
      [
       380,
       300
      ],
      [
       352,
       280
      ]
     ]
    },
    "anterior-scc": {
     "shape": "<path class=\"sh ln\" stroke=\"#5b8fb9\" stroke-width=\"9\" fill=\"none\" d=\"M 380 206 Q 380 90 470 110 Q 520 130 420 210\"/>",
     "label": [
      "Anterior (superior)",
      "semicircular canal"
     ],
     "lx": 540,
     "ly": 100,
     "anchor": "start",
     "lead": [
      [
       536,
       96
      ],
      [
       500,
       104
      ],
      [
       470,
       112
      ]
     ]
    },
    "posterior-scc": {
     "shape": "<path class=\"sh ln\" stroke=\"#d9534f\" stroke-width=\"9\" fill=\"none\" d=\"M 406 214 Q 520 180 520 270 Q 500 340 418 282\"/>",
     "label": [
      "Posterior",
      "semicircular canal"
     ],
     "lx": 540,
     "ly": 296,
     "anchor": "start",
     "lead": [
      [
       536,
       292
      ],
      [
       526,
       286
      ],
      [
       520,
       278
      ]
     ]
    },
    "lateral-scc": {
     "shape": "<path class=\"sh ln\" stroke=\"#f2e2a8\" stroke-width=\"9\" fill=\"none\" d=\"M 410 240 Q 470 214 480 250 Q 474 284 414 262\"/>",
     "label": [
      "Lateral (horizontal)",
      "semicircular canal"
     ],
     "lx": 540,
     "ly": 256,
     "anchor": "start",
     "lead": [
      [
       536,
       252
      ],
      [
       500,
       252
      ],
      [
       482,
       250
      ]
     ]
    },
    "ampulla": {
     "shape": "<circle class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9534f\" fill-opacity=\"0.6\" cx=\"386\" cy=\"192\" r=\"11\"/>",
     "label": "Ampulla",
     "lx": 470,
     "ly": 120,
     "anchor": "start",
     "lead": [
      [
       466,
       116
      ],
      [
       420,
       150
      ],
      [
       394,
       186
      ]
     ]
    },
    "cochlea": {
     "shape": "<g><circle class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" cx=\"220\" cy=\"300\" r=\"70\"/><circle class=\"sh\" stroke=\"#8a8a8a\" fill=\"#fff\" cx=\"220\" cy=\"300\" r=\"44\"/><circle class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" cx=\"220\" cy=\"300\" r=\"22\"/></g>",
     "label": "Cochlea",
     "lx": 220,
     "ly": 400
    },
    "modiolus": {
     "shape": "<circle class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d8ccb4\" cx=\"220\" cy=\"300\" r=\"7\"/>",
     "label": [
      "Modiolus",
      "(central pillar)"
     ],
     "lx": 110,
     "ly": 222,
     "anchor": "end",
     "lead": [
      [
       114,
       218
      ],
      [
       170,
       250
      ],
      [
       214,
       296
      ]
     ]
    },
    "oval-window": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9534f\" fill-opacity=\"0.55\" x=\"330\" y=\"296\" width=\"30\" height=\"10\" rx=\"4\"/>",
     "label": [
      "Oval window",
      "(stapes)"
     ],
     "lx": 360,
     "ly": 350
    },
    "round-window": {
     "shape": "<circle class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9534f\" fill-opacity=\"0.4\" cx=\"284\" cy=\"352\" r=\"10\"/>",
     "label": [
      "Round",
      "window"
     ],
     "lx": 180,
     "ly": 440,
     "anchor": "end",
     "lead": [
      [
       184,
       436
      ],
      [
       250,
       400
      ],
      [
       278,
       360
      ]
     ]
    },
    "endo-duct": {
     "shape": "<path class=\"sh ln\" stroke=\"#3a3a3a\" stroke-width=\"4\" fill=\"none\" d=\"M 362 250 Q 330 200 300 168\"/><ellipse class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" cx=\"292\" cy=\"160\" rx=\"16\" ry=\"10\"/>",
     "label": [
      "Endolymphatic duct",
      "and sac"
     ],
     "lx": 250,
     "ly": 90,
     "anchor": "end",
     "lead": [
      [
       254,
       100
      ],
      [
       276,
       124
      ],
      [
       288,
       150
      ]
     ]
    }
   },
   "arrows": {
    "vestibule": [
     {
      "t": [
       360,
       256
      ],
      "d": [
       0,
       96
      ]
     }
    ],
    "utricle": [
     {
      "t": [
       390,
       234
      ],
      "d": [
       110,
       -40
      ]
     }
    ],
    "saccule": [
     {
      "t": [
       342,
       272
      ],
      "d": [
       90,
       56
      ]
     }
    ],
    "anterior-scc": [
     {
      "t": [
       420,
       110
      ],
      "d": [
       70,
       -40
      ]
     }
    ],
    "posterior-scc": [
     {
      "t": [
       518,
       262
      ],
      "d": [
       70,
       40
      ]
     }
    ],
    "lateral-scc": [
     {
      "t": [
       476,
       250
      ],
      "d": [
       64,
       -10
      ]
     }
    ],
    "ampulla": [
     {
      "t": [
       386,
       192
      ],
      "d": [
       70,
       -60
      ]
     }
    ],
    "cochlea": [
     {
      "t": [
       200,
       240
      ],
      "d": [
       -60,
       -70
      ]
     }
    ],
    "modiolus": [
     {
      "t": [
       220,
       300
      ],
      "d": [
       -90,
       -60
      ]
     }
    ],
    "oval-window": [
     {
      "t": [
       345,
       301
      ],
      "d": [
       0,
       74
      ]
     }
    ],
    "round-window": [
     {
      "t": [
       284,
       352
      ],
      "d": [
       -80,
       60
      ]
     }
    ],
    "endo-duct": [
     {
      "t": [
       292,
       160
      ],
      "d": [
       -70,
       -50
      ]
     }
    ]
   }
  }
 },
 "mcqs": [
  {
   "q": "What does the vestibular apparatus detect?",
   "options": [
    "Head position, motion",
    "Body temperature",
    "Sound frequency",
    "Limb position only"
   ],
   "answer": 0,
   "why": "It detects orientation and motion of the head, not the body, and relays them to the vestibular nuclei and cerebellum via CN VIII."
  },
  {
   "q": "What is kinesthesis?",
   "options": [
    "Sense of head rotation",
    "Body part position",
    "Sense of hearing",
    "Sense of taste"
   ],
   "answer": 1,
   "why": "Kinesthesis, a somatosensory system, tells us the relative position and motion of body parts; it works with equilibrium, mediated by the vestibular system."
  },
  {
   "q": "Which organs detect linear acceleration?",
   "options": [
    "The semicircular canals",
    "The cochlea",
    "The utricle and saccule",
    "The ossicles"
   ],
   "answer": 2,
   "why": "The otolithic organs detect gravity and linear acceleration, plus pitch and roll tilts. The canals detect angular acceleration."
  },
  {
   "q": "What do the semicircular canals detect?",
   "options": [
    "Linear acceleration",
    "Gravity",
    "Sound",
    "Angular acceleration"
   ],
   "answer": 3,
   "why": "They detect angular accelerations from rotation of the head or body."
  },
  {
   "q": "What gel covers the hair cells of the canals?",
   "options": [
    "The otolithic membrane",
    "The cupula",
    "The tectorial membrane",
    "The basilar membrane"
   ],
   "answer": 1,
   "why": "Cupula in the canals; otolithic membrane in the utricle and saccule."
  },
  {
   "q": "What fluid bathes the apical surface of the hair cells?",
   "options": [
    "Perilymph",
    "CSF",
    "Blood plasma",
    "Endolymph"
   ],
   "answer": 3,
   "why": "Apices are bathed in endolymph, separated by tight junctions from the perilymph around the basolateral surfaces."
  },
  {
   "q": "What happens when stereocilia bend toward the tallest row?",
   "options": [
    "More channels open",
    "Channels close",
    "Nothing changes",
    "The cell dies"
   ],
   "answer": 0,
   "why": "Deflection toward the tallest row increases channel opening (depolarisation); away from it decreases it."
  },
  {
   "q": "How is the utricular macula oriented with the head upright?",
   "options": [
    "Vertically",
    "Obliquely at 45 degrees",
    "Horizontally",
    "It has no orientation"
   ],
   "answer": 2,
   "why": "The utricular macula lies horizontally and the saccular macula vertically when the head is upright."
  },
  {
   "q": "When rotation starts, which way does endolymph tilt the crista?",
   "options": [
    "Same way as the rotation",
    "Straight up",
    "It does not move",
    "Opposite to the rotation"
   ],
   "answer": 3,
   "why": "At the start the endolymph lags and tilts the crista opposite to rotation; on stopping it tilts it in the same direction."
  },
  {
   "q": "What happens during steady head rotation?",
   "options": [
    "The cupula rests",
    "The cupula stays bent",
    "Firing keeps rising",
    "The endolymph stops"
   ],
   "answer": 0,
   "why": "At constant velocity friction brings the endolymph to the same speed, so the cupula and receptors return to rest."
  },
  {
   "q": "How are the three canals oriented?",
   "options": [
    "In parallel",
    "All horizontal",
    "At right angles",
    "All vertical"
   ],
   "answer": 2,
   "why": "Being roughly perpendicular, together they detect every direction of rotation."
  },
  {
   "q": "Turning the head right excites which lateral canal?",
   "options": [
    "The left one",
    "The right one",
    "Both equally",
    "Neither"
   ],
   "answer": 1,
   "why": "Excitation occurs on the side the head turns to, with inhibition on the other side."
  },
  {
   "q": "What gives the maculae their sensitivity to gravity?",
   "options": [
    "The cupula",
    "Endolymph flow",
    "Muscle spindles",
    "Otoconia weight"
   ],
   "answer": 3,
   "why": "The otoconial crystals pull on the membrane and bend the stereocilia, signalling static head orientation."
  },
  {
   "q": "On a head tilt, which utricular hair cells fire more?",
   "options": [
    "Those on the downward slope",
    "All of them equally",
    "Those on the upward slope",
    "None of them"
   ],
   "answer": 2,
   "why": "Hair cells on the upward slope side of the striola increase firing; those on the downward slope decrease it."
  },
  {
   "q": "Which division of the vestibular nerve supplies the posterior crista?",
   "options": [
    "The inferior division",
    "The superior division",
    "The cochlear nerve",
    "The facial nerve"
   ],
   "answer": 0,
   "why": "The superior division supplies the lateral and anterior cristae and most of the utricle; the inferior supplies the rest of the saccule and the posterior crista via the singular nerve."
  },
  {
   "q": "Through what opening does the singular nerve pass?",
   "options": [
    "The foramen ovale",
    "The foramen singulare",
    "The stylomastoid foramen",
    "The jugular foramen"
   ],
   "answer": 1,
   "why": "The singular branch to the posterior ampullary crest passes through the foramen singulare."
  },
  {
   "q": "Where are the vestibular nerve cell bodies?",
   "options": [
    "The spiral ganglion",
    "The geniculate ganglion",
    "The vestibular ganglion",
    "The dorsal root ganglion"
   ],
   "answer": 2,
   "why": "Bipolar neurons in the vestibular ganglion, in the lateral internal acoustic meatus."
  },
  {
   "q": "Where does the vestibular nerve enter the brainstem?",
   "options": [
    "The interpeduncular fossa",
    "The pontomedullary midline",
    "Behind the olive",
    "The cerebellopontine angle"
   ],
   "answer": 3,
   "why": "It enters at the cerebellopontine angle and ends in the vestibular nuclear complex."
  },
  {
   "q": "Which tract links vestibular nuclei to eye muscle nuclei?",
   "options": [
    "The corticospinal tract",
    "The MLF",
    "The spinothalamic tract",
    "The optic radiation"
   ],
   "answer": 1,
   "why": "The MLF connects the vestibular nuclei with the oculomotor, trochlear and abducens nuclei and upper spinal motor neurons."
  },
  {
   "q": "What does the caloric test stimulate?",
   "options": [
    "The lateral canal",
    "The utricle macula",
    "The cochlea",
    "The saccule"
   ],
   "answer": 0,
   "why": "Warm or cold water in the ear canal appears to stimulate the lateral canal crista directly, producing nystagmus."
  },
  {
   "q": "What is Ménière's disease linked to?",
   "options": [
    "Loss of the cornea",
    "Blocked optic nerve",
    "Vestibular overactivity",
    "Damaged motor cortex"
   ],
   "answer": 2,
   "why": "Spontaneous high afferent activity causes dizziness and nausea, the nausea via the vagal reflex pathway."
  },
  {
   "q": "What does an MLF lesion cause?",
   "options": [
    "Internuclear ophthalmoplegia",
    "Horner's syndrome, ptosis",
    "Bitemporal hemianopia",
    "Bell's palsy of the face"
   ],
   "answer": 0,
   "why": "Slowed or absent adduction of the ipsilateral eye with nystagmus of the abducting eye; often from multiple sclerosis."
  },
  {
   "q": "What does the vestibulo-ocular reflex do?",
   "options": [
    "Constricts the pupil",
    "Focuses the lens",
    "Closes the eyelids",
    "Steadies the gaze"
   ],
   "answer": 3,
   "why": "It rotates the eyes opposite to head movement so the retina stays steady; the flocculus drives its long-term adaptation."
  },
  {
   "q": "Which muscles does the anterior canal drive in the VOR?",
   "options": [
    "Both lateral recti",
    "Ipsilateral SR, contralateral IO",
    "Both medial recti",
    "Ipsilateral IO, contralateral SR"
   ],
   "answer": 1,
   "why": "The anterior canal influences the ipsilateral superior rectus and the contralateral inferior oblique."
  },
  {
   "q": "Which inputs does the CNS integrate for balance? (choose all)",
   "options": [
    "Vestibular",
    "Visual",
    "Olfactory",
    "Gustatory"
   ],
   "answers": [
    0,
    1
   ],
   "why": "Visual, vestibular and proprioceptive input, integrated especially by the cerebellum."
  },
  {
   "q": "Which does the superior vestibular division supply? (choose all)",
   "options": [
    "Lateral canal crista",
    "Anterior canal crista",
    "Posterior canal crista",
    "Cochlea"
   ],
   "answers": [
    0,
    1
   ],
   "why": "Superior: lateral and anterior cristae, most of the utricle and part of the saccule."
  },
  {
   "q": "Which are cortical vestibular areas? (choose all)",
   "options": [
    "The parieto-insular vestibular cortex",
    "Area 2v of the intraparietal sulcus",
    "Primary visual cortex",
    "Broca's area"
   ],
   "answers": [
    0,
    1
   ],
   "why": "Area 2v, area 3a, area 7 and the parieto-insular vestibular cortex."
  },
  {
   "q": "Which structure is at the arrow?",
   "target": "utricle",
   "options": [
    "Utricle",
    "Round window",
    "Cochlea",
    "Lateral (horizontal) semicircular canal"
   ],
   "answer": 0,
   "why": "The arrow points to the utricle."
  },
  {
   "q": "Which structure is at the arrow?",
   "target": "saccule",
   "options": [
    "Vestibule",
    "Saccule",
    "Endolymphatic duct and sac",
    "Round window"
   ],
   "answer": 1,
   "why": "The arrow points to the saccule."
  },
  {
   "q": "Which structure is at the arrow?",
   "target": "lateral-scc",
   "options": [
    "Utricle",
    "Round window",
    "Lateral (horizontal) semicircular canal",
    "Vestibule"
   ],
   "answer": 2,
   "why": "The arrow points to the lateral (horizontal) semicircular canal."
  },
  {
   "q": "Which structure is at the arrow?",
   "target": "ampulla",
   "options": [
    "Endolymphatic duct and sac",
    "Anterior (superior) semicircular canal",
    "Lateral (horizontal) semicircular canal",
    "Ampulla"
   ],
   "answer": 3,
   "why": "The arrow points to the ampulla."
  }
 ],
 "cards": [
  {
   "id": "c0",
   "type": "text",
   "front": "What does the vestibular system do?",
   "back": "A proprioceptive system for posture, muscle tone, equilibrium and coordination of head and eye movements, and for sensing head position and spatial orientation. Its signals govern reflexes of balance and fixity of gaze."
  },
  {
   "id": "c1",
   "type": "text",
   "front": "Kinesthesis versus equilibrium.",
   "back": "Kinesthesis: a somatosensory sense of the relative position and motion of body parts. Equilibrium (balance): mediated by the vestibular system. The two work together."
  },
  {
   "id": "c2",
   "type": "text",
   "front": "Describe the vestibular apparatus.",
   "back": "In the inner ear, in the petrous temporal bone: a bony and a membranous labyrinth. It senses orientation and motion of the head, not the body, relayed by the vestibular division of CN VIII to the vestibular nuclei and cerebellum."
  },
  {
   "id": "c3",
   "type": "text",
   "front": "Name the two receptor groups.",
   "back": "The otolithic organs, utricle and saccule, detect linear acceleration and gravity, including pitch and roll tilts. The three semicircular canals detect angular acceleration from rotation."
  },
  {
   "id": "c4",
   "type": "text",
   "front": "How do vestibular hair cells transduce motion?",
   "back": "Stereocilia are embedded in a gel: the otolithic membrane in the maculae, the cupula in the canals. Apices sit in endolymph, basolateral surfaces in perilymph. Bending toward the tallest row opens more transduction channels; away closes them."
  },
  {
   "id": "c5",
   "type": "text",
   "front": "Describe the maculae.",
   "back": "The utricular macula lies horizontally and the saccular macula vertically with the head upright, each with a curved striola and differently oriented bundles. Type I and type II hair cells have different innervation. Otoconial weight lets them detect static head orientation and tilt; very loud low-frequency sound can also stimulate them."
  },
  {
   "id": "c6",
   "type": "text",
   "front": "How does the crista ampullaris respond to rotation?",
   "back": "At the start of rotation the endolymph lags, tilting the crista opposite to the rotation; on stopping, it tilts in the same direction. At steady velocity the endolymph catches up and the cupula returns to rest. Firing rate rises or falls from its basal level."
  },
  {
   "id": "c7",
   "type": "text",
   "front": "How do the canals encode direction?",
   "back": "The three canals lie at right angles, covering every direction. Paired canals on the two sides respond oppositely; turning right excites the right lateral canal and inhibits the left. Some vestibular neurons compare both sides, increasing sensitivity."
  },
  {
   "id": "c8",
   "type": "text",
   "front": "How do the maculae encode tilt?",
   "back": "Upright, afferents on both sides of the striola fire equally. On tilt, displaced otoconia bend the stereocilia: cells on the upward slope fire more, those on the downward slope less. Tilt also triggers ocular counter-roll."
  },
  {
   "id": "c9",
   "type": "text",
   "front": "Describe the branches of the vestibular nerve.",
   "back": "It divides into superior and inferior divisions joined by an isthmus. Superior (larger): lateral and anterior ampullary nerves, the utricular nerve and part of the saccule. Inferior: the rest of the saccule and the posterior crista via the singular nerve through the foramen singulare."
  },
  {
   "id": "c10",
   "type": "text",
   "front": "Trace the central vestibular pathway.",
   "back": "Bipolar neurons in the vestibular ganglion send axons in the vestibular nerve into the brainstem at the cerebellopontine angle, ending in the vestibular nuclei. These project to brainstem and upper spinal motor nuclei, the cerebellum and the thalamus, then to cortical areas 2v, 3a, 7 and the parieto-insular vestibular cortex."
  },
  {
   "id": "c11",
   "type": "text",
   "front": "How does the vestibular system control visual reflexes?",
   "back": "It keeps gaze fixed during head movement through the MLF, linking the vestibular nuclei to the oculomotor, trochlear and abducens nuclei and upper spinal motor neurons, and through the vestibulospinal tracts. Abnormal input produces nystagmus."
  },
  {
   "id": "c12",
   "type": "text",
   "front": "Describe the caloric test and Ménière's disease.",
   "back": "Caloric test: warm or cold water in the ear canal stimulates the lateral canal crista, producing nystagmus. Ménière's disease: spontaneous high vestibular firing causes dizziness and nausea via the vagal pathway."
  },
  {
   "id": "c13",
   "type": "text",
   "front": "What is internuclear ophthalmoplegia?",
   "back": "An MLF lesion: slowed or absent adduction of the ipsilateral eye with nystagmus of the abducting eye. Multiple sclerosis can cause it by demyelinating the MLF, with nystagmus and double vision."
  },
  {
   "id": "c14",
   "type": "text",
   "front": "Describe the vestibulo-ocular reflex.",
   "back": "An ancient reflex that stabilises the retina by rotating the eyes opposite to head movement. Its long-term adaptation is driven by the cerebellar flocculus, organised in the planes of the canals. The lateral canal drives horizontal eye muscles; the anterior canal drives the ipsilateral superior rectus and contralateral inferior oblique."
  },
  {
   "id": "i15",
   "type": "image",
   "target": "lateral-scc",
   "front": "Anatomy link: find the structure for rotation.",
   "back": "The lateral semicircular canal, which senses horizontal head rotation and is the one tested by the caloric test."
  },
  {
   "id": "i16",
   "type": "image",
   "target": "utricle",
   "front": "Anatomy link: find a linear acceleration sensor.",
   "back": "The utricle, whose horizontal macula senses linear acceleration and head tilt."
  }
 ],
 "deeper": [
  {
   "title": "Why you feel dizzy after spinning then stopping",
   "html": "<p>During steady spinning the endolymph catches up and the cupula rests. When you stop suddenly, the endolymph keeps moving and bends the cupula the other way, so the canal signals rotation in the opposite direction even though you are still. Your eyes jerk (nystagmus) and the room seems to spin until the fluid settles.</p><p class='src'>Source: the lecture's crista ampullaris slides.</p>"
  },
  {
   "title": "Why motion sickness makes you nauseous",
   "html": "<p>The lecture notes that vestibular input reaches the vagal reflex pathway, which is why Ménière's disease causes nausea. When vestibular signals disagree with what the eyes report, as below deck on a boat, the same pathway can trigger nausea and vomiting.</p><p class='src'>Source: the lecture's Ménière's disease and integration slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "The vestibular system",
   "url": "https://teachmephysiology.com/nervous-system/special-senses/vestibular-system/",
   "kind": "Article",
   "why": "Maculae, canals and the vestibulo-ocular reflex.",
   "note": ""
  },
  {
   "title": "Vestibular system (Kenhub)",
   "url": "https://www.kenhub.com/en/library/anatomy/vestibular-system",
   "kind": "Article",
   "why": "Anatomy of the labyrinth and pathways.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "The vestibular system",
   "url": "https://teachmephysiology.com/nervous-system/special-senses/vestibular-system/"
  },
  {
   "name": "Vestibular system (Kenhub)",
   "url": "https://www.kenhub.com/en/library/anatomy/vestibular-system"
  }
 ],
 "verified": "22 Sep 2026"
};
