/* genetics1: 3 lectures, merged for upload. Edit the source files, not this one. */
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["genetics1-intro"] = {
 "id": "genetics1-intro",
 "subject": "genetics1",
 "group": "Molecular genetics",
 "title": "Introduction to molecular genetics: nucleic acids",
 "sourceFile": "Chapter 1 Introduction to molecular Genetics.pdf (Molecular Genetics, Pr. Amal Oudghiri)",
 "sourceUrl": "https://drive.google.com/file/d/1Eu-X8s7WNdoc3_jelmvabKt2Nu-VnwFn/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>Every face is different, yet all are written in the same genetic language. <strong>Genetics</strong> is the study of <strong>genes</strong> (DNA segments carrying instructions for traits and functions), <strong>heredity</strong> (transmission from parents to offspring) and <strong>variation</strong> (DNA differences producing diversity). Applications: inherited diseases, forensics, agriculture, personalised medicine. Genetic information determines proteins, which determine the <strong>phenotype</strong> (observed traits): a non-functional protein gives a pathology, e.g. <strong>albinism</strong> (melanin) or <strong>diabetes</strong> (insulin). The course covers the genome, the central dogma, replication, transcription, translation, mutations and chromosomal anomalies, DNA repair and molecular diagnosis.</p>"
  },
  {
   "id": "s1",
   "title": "DNA and the central dogma",
   "html": "<p><strong>DNA</strong> (deoxyribonucleic acid) is the hereditary molecule transmitted from parents to offspring, containing the information to make proteins. It lies mainly in the <strong>nucleus</strong> (main genome) and also in <strong>mitochondria</strong>. The <strong>central dogma</strong>: DNA is copied by <strong>replication</strong>, transcribed into <strong>RNA</strong> (an intermediate: mRNA, tRNA, rRNA) by <strong>transcription</strong>, and RNA is translated into protein by <strong>translation</strong> in the cytoplasm.</p>"
  },
  {
   "id": "s2",
   "title": "The nucleotide",
   "html": "<p>Nucleic acids are linear polymers of <strong>nucleotides</strong>, each made of a <strong>phosphate</strong>, a <strong>pentose sugar</strong> and a <strong>nitrogenous base</strong>. The sugar connects phosphate and base and gives stability. <strong>Bases</strong>: purines (<strong>A, G</strong>) pair with pyrimidines (<strong>T or U, C</strong>): <strong>A with T (or U), G with C</strong>, which keeps the helix width uniform; hydrogen bond donors and acceptors dictate specific pairing and fidelity. <strong>Thymine = uracil with a methyl group at position 5</strong>. <strong>Phosphate groups</strong> link sugars into the backbone and give DNA its <strong>negative charge</strong>. The <strong>N-glycosidic bond</strong> joins the sugar's <strong>C1′</strong> (the reducing carbon) to <strong>N1 of pyrimidines</strong> or <strong>N9 of purines</strong>.</p><p><strong>Nucleoside</strong> = base + sugar (e.g. deoxyadenosine, adenosine, uridine); <strong>nucleotide</strong> = nucleoside + phosphate (e.g. dAMP/dATP, AMP/ATP, UMP/UTP). DNA uses dA, dG, dC, dT; RNA uses A, G, C, U.</p>"
  },
  {
   "id": "s3",
   "title": "Polymerisation",
   "html": "<p>A nucleic acid's sequence is defined <strong>only by the order of its bases</strong> (sugar and phosphate do not vary). Synthesis and sequence notation proceed <strong>5′ → 3′</strong>: each new nucleotide is added to the <strong>3′-OH</strong> of the chain, which bonds with the incoming <strong>5′-phosphate</strong> to form a <strong>3′-5′ phosphodiester bond</strong>. DNA is a double helix of two antiparallel strands (5′-3′ paired with 3′-5′).</p>"
  }
 ],
 "exam": [
  "Genetics = genes, heredity, variation.",
  "Protein defect → phenotype/pathology (albinism, diabetes).",
  "DNA: nucleus and mitochondria.",
  "Central dogma: replication (DNA→DNA), transcription (DNA→RNA), translation (RNA→protein).",
  "Nucleotide = phosphate + pentose + base; nucleoside = sugar + base.",
  "Purines A, G; pyrimidines C, T, U. A-T/U, G-C.",
  "Thymine = uracil + methyl at C5.",
  "Phosphate backbone gives DNA its negative charge.",
  "N-glycosidic bond: C1′ to N1 (pyrimidines) or N9 (purines).",
  "Synthesis 5′→3′ via 3′-5′ phosphodiester bonds at the 3′-OH."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "The nucleotide and the central dogma",
   "caption": "Building blocks of DNA and the flow of genetic information. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"200\" y1=\"70\" x2=\"215\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"375\" y1=\"70\" x2=\"390\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"250\" y1=\"210\" x2=\"315\" y2=\"210\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"475\" y1=\"210\" x2=\"540\" y2=\"210\"/>",
   "parts": {
    "phos": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"40\" y=\"40\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Phosphate",
      "(backbone, − charge)"
     ],
     "lx": 120.0,
     "ly": 68.0
    },
    "sugar": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"215\" y=\"40\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Pentose: deoxyribose",
      "(DNA), ribose (RNA)"
     ],
     "lx": 295.0,
     "ly": 68.0
    },
    "base": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"390\" y=\"40\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Base: purines A, G;",
      "pyrimidines C, T, U"
     ],
     "lx": 470.0,
     "ly": 68.0
    },
    "bond": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"565\" y=\"40\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "N-glycosidic bond:",
      "C1′ to N9 / N1"
     ],
     "lx": 645.0,
     "ly": 68.0
    },
    "dna": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"90\" y=\"180\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "DNA",
      "(replication)"
     ],
     "lx": 170.0,
     "ly": 208.0
    },
    "rna": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"315\" y=\"180\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "RNA",
      "(transcription)"
     ],
     "lx": 395.0,
     "ly": 208.0
    },
    "prot": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9ecec\" x=\"540\" y=\"180\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Protein",
      "(translation)"
     ],
     "lx": 620.0,
     "ly": 208.0
    }
   },
   "arrows": {
    "phos": [
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
    "sugar": [
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
    "base": [
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
    "bond": [
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
    "dna": [
     {
      "t": [
       90.0,
       188.0
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
       315.0,
       188.0
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
       540.0,
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
   "q": "Genetics is the study of:",
   "options": [
    "Heredity and variation",
    "Proteins only",
    "Cells only",
    "Evolution only"
   ],
   "answer": 0,
   "why": "Three core concepts."
  },
  {
   "q": "Albinism results from a problem with:",
   "options": [
    "Collagen",
    "Melanin production",
    "Haemoglobin",
    "Insulin"
   ],
   "answer": 1,
   "why": "A non-functional protein gives a phenotype."
  },
  {
   "q": "Besides the nucleus, DNA is found in:",
   "options": [
    "Ribosomes",
    "Mitochondria",
    "Lysosomes",
    "Golgi"
   ],
   "answer": 1,
   "why": "Mitochondrial genome."
  },
  {
   "q": "Transcription produces:",
   "options": [
    "Protein from RNA",
    "DNA from DNA",
    "RNA from DNA",
    "DNA from RNA"
   ],
   "answer": 2,
   "why": "Translation makes protein."
  },
  {
   "q": "Where does translation take place?",
   "options": [
    "Nucleolus",
    "Nucleus",
    "Cytoplasm",
    "Mitochondrial membrane"
   ],
   "answer": 2,
   "why": "On ribosomes."
  },
  {
   "q": "A nucleotide is composed of:",
   "options": [
    "Phosphate + base",
    "Base + amino acid",
    "Sugar + base",
    "Phosphate + pentose + base"
   ],
   "answer": 3,
   "why": "A nucleoside lacks the phosphate."
  },
  {
   "q": "Which bases are purines?",
   "options": [
    "A and G",
    "U and C",
    "C and T",
    "T and U"
   ],
   "answer": 0,
   "why": "Pyrimidines: C, T, U."
  },
  {
   "q": "In DNA, adenine pairs with:",
   "options": [
    "Thymine",
    "Cytosine",
    "Guanine",
    "Uracil"
   ],
   "answer": 0,
   "why": "In RNA, A pairs with U."
  },
  {
   "q": "Thymine differs from uracil by:",
   "options": [
    "A ribose",
    "An amino group",
    "A phosphate",
    "A methyl group at position 5"
   ],
   "answer": 3,
   "why": "Uracil replaces thymine in RNA."
  },
  {
   "q": "What gives DNA its negative charge?",
   "options": [
    "Bases",
    "Hydrogen bonds",
    "Deoxyribose",
    "Phosphate groups"
   ],
   "answer": 3,
   "why": "In the sugar-phosphate backbone."
  },
  {
   "q": "The N-glycosidic bond joins the sugar's C1′ to which atom of a purine?",
   "options": [
    "N1",
    "N9",
    "N3",
    "N7"
   ],
   "answer": 1,
   "why": "N1 for pyrimidines."
  },
  {
   "q": "Deoxyadenosine is a:",
   "options": [
    "Base",
    "Nucleoside",
    "Nucleic acid",
    "Nucleotide"
   ],
   "answer": 1,
   "why": "Base + deoxyribose, no phosphate."
  },
  {
   "q": "A nucleic acid sequence is defined by:",
   "options": [
    "Its sugars",
    "Its length only",
    "Its phosphates",
    "The order of its bases"
   ],
   "answer": 3,
   "why": "Sugar and phosphate do not vary."
  },
  {
   "q": "Nucleic acid synthesis proceeds in which direction?",
   "options": [
    "5′ → 3′",
    "Random",
    "3′ → 5′",
    "Both"
   ],
   "answer": 0,
   "why": "Nucleotides are added to the 3′-OH."
  },
  {
   "q": "Nucleotides are linked by:",
   "options": [
    "Peptide bonds",
    "Disulphide bonds",
    "Glycosidic bonds only",
    "3′-5′ phosphodiester bonds"
   ],
   "answer": 3,
   "why": "3′-OH + 5′-phosphate."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "phos",
   "options": [
    "N-glycosidic bond",
    "Phosphate group",
    "Nitrogenous bases",
    "Pentose sugar"
   ],
   "answer": 1,
   "why": "The arrow points to: Phosphate group. Links sugars into the backbone and gives DNA its negative charge."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "sugar",
   "options": [
    "Phosphate group",
    "Pentose sugar",
    "N-glycosidic bond",
    "DNA"
   ],
   "answer": 1,
   "why": "The arrow points to: Pentose sugar. Links to phosphate and base; deoxyribose in DNA, ribose in RNA."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "base",
   "options": [
    "Pentose sugar",
    "Protein",
    "Nitrogenous bases",
    "N-glycosidic bond"
   ],
   "answer": 2,
   "why": "The arrow points to: Nitrogenous bases. Purines (A, G) pair with pyrimidines (T/U, C): A-T/U, G-C, giving a uniform helix width."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "bond",
   "options": [
    "RNA",
    "DNA",
    "Nitrogenous bases",
    "N-glycosidic bond"
   ],
   "answer": 3,
   "why": "The arrow points to: N-glycosidic bond. Joins the sugar's C1′ to N1 of pyrimidines or N9 of purines."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "dna",
   "options": [
    "DNA",
    "N-glycosidic bond",
    "Nitrogenous bases",
    "Phosphate group"
   ],
   "answer": 0,
   "why": "The arrow points to: DNA. Hereditary molecule in the nucleus and mitochondria; copied by replication."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "rna",
   "options": [
    "Phosphate group",
    "DNA",
    "RNA",
    "Pentose sugar"
   ],
   "answer": 2,
   "why": "The arrow points to: RNA. Intermediate molecule (mRNA, tRNA, rRNA) made by transcription."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "prot",
   "options": [
    "Protein",
    "N-glycosidic bond",
    "RNA",
    "Pentose sugar"
   ],
   "answer": 0,
   "why": "The arrow points to: Protein. Made by translation in the cytoplasm; determines the phenotype."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Define genetics, gene, heredity, variation.",
   "back": "Genetics: study of genes, heredity and variation. Gene: DNA segment with instructions. Heredity: transmission to offspring. Variation: DNA differences between individuals."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Central dogma?",
   "back": "DNA → (replication) DNA; DNA → (transcription) RNA; RNA → (translation) protein."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Components of a nucleotide?",
   "back": "Phosphate group, pentose sugar (deoxyribose/ribose), nitrogenous base."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Purines, pyrimidines and pairing?",
   "back": "Purines A, G; pyrimidines C, T (DNA), U (RNA); A-T/U and G-C, uniform helix width."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Nucleoside vs nucleotide?",
   "back": "Nucleoside: base + sugar (deoxyadenosine). Nucleotide: nucleoside + phosphate (dAMP, dATP)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "N-glycosidic bond?",
   "back": "Links the sugar's C1′ to N1 of pyrimidines or N9 of purines."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "How are nucleotides joined?",
   "back": "The 3′-OH of the chain bonds the 5′-phosphate of the next nucleotide: 3′-5′ phosphodiester bond; synthesis 5′→3′."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Thymine vs uracil?",
   "back": "Thymine is uracil with a methyl group at C5; T in DNA, U in RNA."
  },
  {
   "id": "img-phos",
   "type": "image",
   "target": "phos",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Phosphate group. Links sugars into the backbone and gives DNA its negative charge."
  },
  {
   "id": "img-sugar",
   "type": "image",
   "target": "sugar",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Pentose sugar. Links to phosphate and base; deoxyribose in DNA, ribose in RNA."
  },
  {
   "id": "img-base",
   "type": "image",
   "target": "base",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Nitrogenous bases. Purines (A, G) pair with pyrimidines (T/U, C): A-T/U, G-C, giving a uniform helix width."
  },
  {
   "id": "img-bond",
   "type": "image",
   "target": "bond",
   "front": "What is at the arrow, and why does it matter?",
   "back": "N-glycosidic bond. Joins the sugar's C1′ to N1 of pyrimidines or N9 of purines."
  },
  {
   "id": "img-dna",
   "type": "image",
   "target": "dna",
   "front": "What is at the arrow, and why does it matter?",
   "back": "DNA. Hereditary molecule in the nucleus and mitochondria; copied by replication."
  },
  {
   "id": "img-rna",
   "type": "image",
   "target": "rna",
   "front": "What is at the arrow, and why does it matter?",
   "back": "RNA. Intermediate molecule (mRNA, tRNA, rRNA) made by transcription."
  },
  {
   "id": "img-prot",
   "type": "image",
   "target": "prot",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Protein. Made by translation in the cytoplasm; determines the phenotype."
  }
 ],
 "deeper": [
  {
   "title": "Why purines always pair with pyrimidines",
   "html": "<p>A purine has two rings and a pyrimidine one. Pairing a large base with a small one keeps the distance between the two backbones constant all along the helix, so DNA has a uniform width. The specific hydrogen-bond patterns then make A pair only with T (or U) and G only with C, which is what makes copying accurate.</p><p class='src'>Source: the lecture's nitrogen bases slide.</p>"
  },
  {
   "title": "Why DNA grows only 5′ to 3′",
   "html": "<p>Polymerases can only attach a new nucleotide to a free 3′-OH, using the energy of the incoming nucleotide's triphosphate. That is why chains grow 5′→3′ and why sequences are written in that direction; it also explains why one strand must be copied in pieces during replication, the subject of the next chapter.</p><p class='src'>Source: the lecture's polymerisation slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "Deoxyribonucleic acid (DNA) fact sheet (NHGRI)",
   "url": "https://www.genome.gov/about-genomics/fact-sheets/Deoxyribonucleic-Acid-Fact-Sheet",
   "kind": "Article",
   "why": "Structure and function of DNA.",
   "note": ""
  },
  {
   "title": "Central dogma (Khan Academy)",
   "url": "https://www.khanacademy.org/science/ap-biology/gene-expression-and-regulation",
   "kind": "Website",
   "why": "Replication, transcription and translation lessons.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Deoxyribonucleic acid (DNA) fact sheet (NHGRI)",
   "url": "https://www.genome.gov/about-genomics/fact-sheets/Deoxyribonucleic-Acid-Fact-Sheet"
  },
  {
   "name": "Central dogma (Khan Academy)",
   "url": "https://www.khanacademy.org/science/ap-biology/gene-expression-and-regulation"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["genetics1-genome"] = {
 "id": "genetics1-genome",
 "subject": "genetics1",
 "group": "Molecular genetics",
 "title": "The human genome: DNA structure and organisation",
 "sourceFile": "Chapter 2 - Human genome.pdf (Molecular Genetics, Pr. Amal Oudghiri)",
 "sourceUrl": "https://drive.google.com/file/d/1nmUGbP0h8wHzhS6Ktc6K4xOhu2raP1Fr/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>DNA's double-helix structure was published by <strong>Watson and Crick in 1953</strong> (Nature), with Wilkins; <strong>Rosalind Franklin</strong>'s X-ray diffraction 'Photo 51' was decisive. <strong>Chargaff's rules</strong> (1949-50): in double-stranded DNA <strong>A = T and G = C</strong>, so <strong>(A+G)/(T+C) = 1</strong>, while (G+C)/(A+T) varies between species. In eukaryotes DNA is in the <strong>nucleus</strong> and <strong>mitochondria</strong>; in prokaryotes it lies in the cytoplasm, where transcription and translation are coupled.</p>"
  },
  {
   "id": "s1",
   "title": "Structure of DNA",
   "html": "<p>The two strands are <strong>complementary</strong> and held by weak hydrogen bonds: <strong>A=T with 2 hydrogen bonds</strong>, <strong>G≡C with 3</strong>. Strands can be separated (<strong>denaturation</strong>) and rejoin (<strong>renaturation or hybridisation</strong>); one strand's sequence can be deduced from the other. Helical forms depend on sequence and ionic environment: <strong>B-DNA</strong> (right-handed, ~2.0 nm, ~10 bp/turn, wide major and narrow minor groove; the common physiological form), <strong>A-DNA</strong> (right-handed, ~2.3 nm, ~11 bp/turn; dehydrated conditions or RNA-DNA hybrids) and <strong>Z-DNA</strong> (<strong>left-handed</strong>, ~1.8 nm, ~12 bp/turn, zigzag backbone; high salt, alternating purine-pyrimidine; rare). B-DNA: one turn = 10 bp = <strong>3.4 nm</strong>; 0.34 nm between consecutive nucleotides. Size units: bp or kb (1 kb = 1,000 bp ≈ 6.6 × 10⁵ Da ≈ 340 nm).</p>"
  },
  {
   "id": "s2",
   "title": "The human genome",
   "html": "<p>The <strong>genome</strong> is the complete set of genetic material of an individual or species, with coding sequences (transcribed and translated) and non-coding sequences. The <strong>Human Genome Project</strong> began in 1988 (conventionally dated 1990); drafts in <strong>2001</strong> (~92%), 'completion' in 2003; the <strong>Telomere-to-Telomere (T2T) consortium</strong> produced the first truly complete genome in <strong>2022</strong>, including centromeric satellite arrays and the short arms of the five acrocentric chromosomes. The human genome contains about <strong>3.055 billion base pairs</strong>; only <strong>1-5% is coding</strong> (~<strong>19,969 genes</strong>), and about <strong>45% is repeated sequences</strong> (transposable elements: <strong>SINE, LINE, LTR</strong>), which also serve homologous recombination (repair, replication fork restart, chromosome segregation). A cell cycle lasts about 24 hours on average; DNA doubles in S phase and condenses in mitosis.</p>"
  },
  {
   "id": "s3",
   "title": "Chromatin compaction",
   "html": "<p><strong>Histones</strong>: an <strong>octamer</strong> of two each of <strong>H2A, H2B, H3, H4</strong>. <strong>Nucleosome</strong> (~11 nm, 'beads on a string'): about <strong>146 bp</strong> wrapped about twice around the octamer; linker DNA about 55 bp; stabilised by <strong>H1</strong>; first level of compaction. <strong>Solenoid</strong> (30 nm): 6 nucleosomes per turn, organised by H1 and non-histone proteins (topoisomerase II, scaffold protein SC2, lamins, cohesin). Then <strong>looped domains</strong> (300 nm), the <strong>metaphase chromatid</strong> (700 nm), and the fully condensed mitotic chromosome (~10,000-fold compaction). <strong>Histone modifications</strong> (methylation, acetylation, phosphorylation) are <strong>epigenetic</strong>: they change gene activity without changing the DNA sequence; condensed DNA is less accessible to expression enzymes. <strong>Euchromatin</strong>: loosely packed, accessible, active (acetylated histones). <strong>Heterochromatin</strong>: tightly packed, inactive (deacetylated, methyl-CpG binding proteins), structural or regulatory.</p>"
  }
 ],
 "exam": [
  "Watson and Crick 1953; Franklin's Photo 51.",
  "Chargaff: A = T, G = C; (A+G)/(T+C) = 1.",
  "A=T 2 hydrogen bonds; G≡C 3.",
  "Denaturation and renaturation (hybridisation).",
  "B-DNA: right-handed, 10 bp/turn, 3.4 nm/turn. A-DNA: 11 bp. Z-DNA: left-handed, 12 bp.",
  "Genome ≈ 3.055 billion bp; 1-5% coding (~20,000 genes); ~45% repeats (SINE, LINE, LTR).",
  "T2T consortium: first complete genome in 2022.",
  "Histone octamer: 2 × (H2A, H2B, H3, H4); H1 is the linker histone.",
  "Nucleosome ≈ 146 bp (11 nm) → solenoid 30 nm → loops 300 nm → chromatid 700 nm.",
  "Epigenetics: histone/DNA modifications change activity, not sequence.",
  "Euchromatin active and loose; heterochromatin silent and dense."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Levels of DNA compaction",
   "caption": "From double helix to metaphase chromosome. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"150\" y1=\"70\" x2=\"165\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"335\" y1=\"70\" x2=\"350\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"520\" y1=\"70\" x2=\"535\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"610\" y1=\"100\" x2=\"620\" y2=\"170\"/>",
   "parts": {
    "dna": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"130\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Double helix",
      "2 nm"
     ],
     "lx": 85.0,
     "ly": 68.0
    },
    "nuc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"165\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Nucleosome: 146 bp",
      "on histone octamer (11 nm)"
     ],
     "lx": 250.0,
     "ly": 68.0
    },
    "sol": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"350\" y=\"40\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Solenoid: 6 nucleosomes",
      "per turn, H1 (30 nm)"
     ],
     "lx": 435.0,
     "ly": 68.0
    },
    "loop": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"535\" y=\"40\" width=\"150\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Looped domains",
      "(300 nm)"
     ],
     "lx": 610.0,
     "ly": 68.0
    },
    "chrom": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"535\" y=\"170\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Metaphase chromosome",
      "(700 nm chromatid)"
     ],
     "lx": 620.0,
     "ly": 198.0
    },
    "eu": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"200\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Euchromatin (active) vs",
      "heterochromatin (silent)"
     ],
     "lx": 310.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "dna": [
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
    "nuc": [
     {
      "t": [
       165.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "sol": [
     {
      "t": [
       350.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "loop": [
     {
      "t": [
       535.0,
       48.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "chrom": [
     {
      "t": [
       535.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "eu": [
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
    ]
   }
  },
  "mindmap": {
   "root": "The human genome",
   "branches": [
    [
     "History",
     [
      "Watson & Crick 1953",
      "Franklin: Photo 51",
      "Chargaff: A=T, G=C"
     ]
    ],
    [
     "DNA structure",
     [
      "Complementary strands",
      "A=T (2 H), G≡C (3 H)",
      "B, A, Z forms",
      "10 bp = 3.4 nm"
     ]
    ],
    [
     "Genome",
     [
      "3.055 billion bp",
      "1-5% coding (~20,000 genes)",
      "45% repeats",
      "T2T 2022"
     ]
    ],
    [
     "Compaction",
     [
      "Nucleosome 11 nm",
      "Solenoid 30 nm",
      "Loops 300 nm",
      "Chromatid 700 nm"
     ]
    ],
    [
     "Chromatin",
     [
      "Euchromatin: active",
      "Heterochromatin: silent",
      "Epigenetics"
     ]
    ]
   ]
  }
 },
 "mcqs": [
  {
   "q": "The double-helix model was published in 1953 by:",
   "options": [
    "Chargaff",
    "Mendel",
    "Franklin alone",
    "Watson and Crick"
   ],
   "answer": 3,
   "why": "Franklin's X-ray images were key."
  },
  {
   "q": "Chargaff's rules state that in double-stranded DNA:",
   "options": [
    "C = T",
    "A + T = G + C always",
    "A = T and G = C",
    "A = G"
   ],
   "answer": 2,
   "why": "So purines = pyrimidines."
  },
  {
   "q": "How many hydrogen bonds link G and C?",
   "options": [
    "1",
    "3",
    "2",
    "4"
   ],
   "answer": 1,
   "why": "A-T has two."
  },
  {
   "q": "Separating the two DNA strands is called:",
   "options": [
    "Replication",
    "Transcription",
    "Denaturation",
    "Hybridisation"
   ],
   "answer": 2,
   "why": "Rejoining is renaturation."
  },
  {
   "q": "Which DNA form is left-handed?",
   "options": [
    "Z-DNA",
    "All of them",
    "B-DNA",
    "A-DNA"
   ],
   "answer": 0,
   "why": "Rare, high salt, alternating purine-pyrimidine."
  },
  {
   "q": "The common physiological DNA form is:",
   "options": [
    "Z-DNA",
    "B-DNA",
    "A-DNA",
    "C-DNA"
   ],
   "answer": 1,
   "why": "About 10 bp per turn."
  },
  {
   "q": "One turn of B-DNA measures:",
   "options": [
    "34 nm",
    "11 nm",
    "3.4 nm",
    "0.34 nm"
   ],
   "answer": 2,
   "why": "10 bp per turn."
  },
  {
   "q": "The human genome contains about:",
   "options": [
    "30 billion bp",
    "300,000 bp",
    "3 million bp",
    "3.055 billion bp"
   ],
   "answer": 3,
   "why": "Per haploid genome."
  },
  {
   "q": "What proportion of the human genome codes for proteins?",
   "options": [
    "25%",
    "1-5%",
    "50%",
    "90%"
   ],
   "answer": 1,
   "why": "About 20,000 genes."
  },
  {
   "q": "About what proportion of the genome is repeated sequences?",
   "options": [
    "45%",
    "80%",
    "5%",
    "1%"
   ],
   "answer": 0,
   "why": "SINE, LINE, LTR."
  },
  {
   "q": "The first truly complete human genome was produced in:",
   "options": [
    "2022",
    "1990",
    "2003",
    "2001"
   ],
   "answer": 0,
   "why": "By the T2T consortium."
  },
  {
   "q": "The histone octamer contains two copies each of:",
   "options": [
    "H1, H2, H3, H4",
    "H1, H2A, H3, H4",
    "H1, H2B, H3, H4",
    "H2A, H2B, H3, H4"
   ],
   "answer": 3,
   "why": "H1 is the linker histone."
  },
  {
   "q": "A nucleosome wraps about:",
   "options": [
    "20 bp",
    "10 bp",
    "1,000 bp",
    "146 bp"
   ],
   "answer": 3,
   "why": "About twice around the octamer."
  },
  {
   "q": "The 30-nm solenoid has how many nucleosomes per turn?",
   "options": [
    "6",
    "2",
    "10",
    "20"
   ],
   "answer": 0,
   "why": "Organised by histone H1."
  },
  {
   "q": "Epigenetic modifications:",
   "options": [
    "Occur only in bacteria",
    "Alter activity, not sequence",
    "Change the DNA sequence",
    "Are mutations"
   ],
   "answer": 1,
   "why": "Methylation, acetylation, phosphorylation."
  },
  {
   "q": "Euchromatin is:",
   "options": [
    "Only at centromeres",
    "Only in mitosis",
    "Dense and inactive",
    "Loosely packed and active"
   ],
   "answer": 3,
   "why": "Heterochromatin is dense and silent."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "dna",
   "options": [
    "Nucleosome",
    "Looped domains",
    "B-DNA",
    "Solenoid"
   ],
   "answer": 2,
   "why": "The arrow points to: B-DNA. Right-handed double helix, about 2 nm wide, 10 bp per 3.4 nm turn."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "nuc",
   "options": [
    "Looped domains",
    "Nucleosome",
    "B-DNA",
    "Mitotic chromosome"
   ],
   "answer": 1,
   "why": "The arrow points to: Nucleosome. About 146 bp wrapped twice around an octamer of two each of H2A, H2B, H3, H4: first level of compaction."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "sol",
   "options": [
    "Mitotic chromosome",
    "Solenoid",
    "Nucleosome",
    "Looped domains"
   ],
   "answer": 1,
   "why": "The arrow points to: Solenoid. 30-nm fibre of 6 nucleosomes per turn organised by H1; linker DNA about 55 bp; scaffold proteins."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "loop",
   "options": [
    "Looped domains",
    "Nucleosome",
    "Mitotic chromosome",
    "Solenoid"
   ],
   "answer": 0,
   "why": "The arrow points to: Looped domains. 300-nm fibre attached to a protein scaffold (topoisomerase II, SC2, lamins, cohesin)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "chrom",
   "options": [
    "Mitotic chromosome",
    "Chromatin states",
    "Solenoid",
    "Looped domains"
   ],
   "answer": 0,
   "why": "The arrow points to: Mitotic chromosome. Fully condensed, about 10,000-fold compaction."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "eu",
   "options": [
    "B-DNA",
    "Solenoid",
    "Chromatin states",
    "Looped domains"
   ],
   "answer": 2,
   "why": "The arrow points to: Chromatin states. Euchromatin: loose, accessible, active. Heterochromatin: dense, inactive, structural or regulatory."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Key historical figures of DNA structure?",
   "back": "Watson and Crick (1953 model), Wilkins, Rosalind Franklin (X-ray Photo 51), Chargaff (base ratios)."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Chargaff's rules?",
   "back": "A = T, G = C; (A+G)/(T+C) = 1; (G+C)/(A+T) varies between species."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Base pairing bonds?",
   "back": "A=T two hydrogen bonds; G≡C three hydrogen bonds."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "A-, B-, Z-DNA?",
   "back": "B: right-handed, ~10 bp/turn, physiological. A: right-handed, ~11 bp, dehydrated/RNA-DNA hybrids. Z: left-handed, ~12 bp, rare."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "B-DNA dimensions?",
   "back": "~2 nm diameter; 10 bp per turn = 3.4 nm; 0.34 nm between nucleotides."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Human genome in numbers?",
   "back": "~3.055 billion bp; 1-5% coding (~20,000 genes); ~45% repeats (SINE, LINE, LTR)."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Human Genome Project milestones?",
   "back": "Launched late 1980s; drafts 2001; completion 2003; T2T complete genome 2022."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Levels of chromatin compaction?",
   "back": "Nucleosome 11 nm (146 bp + octamer), solenoid 30 nm (6 nucleosomes/turn, H1), loops 300 nm, chromatid 700 nm, mitotic chromosome."
  },
  {
   "id": "x8",
   "type": "text",
   "front": "Euchromatin vs heterochromatin?",
   "back": "Euchromatin: loose, accessible, active, acetylated. Heterochromatin: dense, inactive, deacetylated, methylated."
  },
  {
   "id": "img-dna",
   "type": "image",
   "target": "dna",
   "front": "What is at the arrow, and why does it matter?",
   "back": "B-DNA. Right-handed double helix, about 2 nm wide, 10 bp per 3.4 nm turn."
  },
  {
   "id": "img-nuc",
   "type": "image",
   "target": "nuc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Nucleosome. About 146 bp wrapped twice around an octamer of two each of H2A, H2B, H3, H4: first level of compaction."
  },
  {
   "id": "img-sol",
   "type": "image",
   "target": "sol",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Solenoid. 30-nm fibre of 6 nucleosomes per turn organised by H1; linker DNA about 55 bp; scaffold proteins."
  },
  {
   "id": "img-loop",
   "type": "image",
   "target": "loop",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Looped domains. 300-nm fibre attached to a protein scaffold (topoisomerase II, SC2, lamins, cohesin)."
  },
  {
   "id": "img-chrom",
   "type": "image",
   "target": "chrom",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Mitotic chromosome. Fully condensed, about 10,000-fold compaction."
  },
  {
   "id": "img-eu",
   "type": "image",
   "target": "eu",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Chromatin states. Euchromatin: loose, accessible, active. Heterochromatin: dense, inactive, structural or regulatory."
  }
 ],
 "deeper": [
  {
   "title": "Why G-C rich DNA is harder to separate",
   "html": "<p>A G-C pair is held by three hydrogen bonds and an A-T pair by two, so regions rich in G and C need more energy (higher temperature) to melt. Laboratory techniques like PCR use this: the melting temperature of a DNA fragment depends on its G-C content.</p><p class='src'>Source: the lecture's strand complementarity slide.</p>"
  },
  {
   "title": "Why only a few percent of the genome codes for proteins",
   "html": "<p>Most human DNA is non-coding: regulatory regions, introns, structural elements at centromeres and telomeres, and repeated transposable elements. These are not 'junk': repeats provide substrates for recombination and repair, and non-coding regions control when and where genes are switched on.</p><p class='src'>Source: the lecture's human genome in numbers slide.</p>"
  }
 ],
 "resources": [
  {
   "title": "Human Genome Project fact sheet (NHGRI)",
   "url": "https://www.genome.gov/about-genomics/educational-resources/fact-sheets/human-genome-project",
   "kind": "Article",
   "why": "History and results of the project.",
   "note": ""
  },
  {
   "title": "Chromatin and nucleosomes (NHGRI glossary)",
   "url": "https://www.genome.gov/genetics-glossary/Chromatin",
   "kind": "Website",
   "why": "Short definitions with illustrations.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Human Genome Project fact sheet (NHGRI)",
   "url": "https://www.genome.gov/about-genomics/educational-resources/fact-sheets/human-genome-project"
  },
  {
   "name": "Chromatin and nucleosomes (NHGRI glossary)",
   "url": "https://www.genome.gov/genetics-glossary/Chromatin"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["genetics1-replication"] = {
 "id": "genetics1-replication",
 "subject": "genetics1",
 "group": "Molecular genetics",
 "title": "DNA replication",
 "sourceFile": "Chapter 3 DNA Replication.pdf (Molecular Genetics, Pr. Amal Oudghiri)",
 "sourceUrl": "https://drive.google.com/file/d/1_dPNJNKuz9_og_nsBcW6lM5EUQjayaRs/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p><strong>Replication</strong> duplicates the entire DNA to produce two identical molecules. It is <strong>semi-conservative</strong>: each new molecule keeps one parental strand, as shown by the <strong>Meselson-Stahl experiment</strong> (after one cycle, density-gradient centrifugation showed all DNA was a hybrid of heavy and light nitrogen). Requirements: DNA template, DNA polymerases, replication proteins, <strong>dNTPs</strong>, ATP and <strong>Mg²⁺</strong>. Synthesis always runs <strong>5′ → 3′</strong> on antiparallel strands through phosphodiester bonds. Three phases: <strong>initiation, elongation, termination</strong>.</p>"
  },
  {
   "id": "s1",
   "title": "Initiation",
   "html": "<p>Replication starts at an <strong>origin (Ori)</strong>, recognised by the <strong>origin recognition complex (ORC)</strong>; licensing factors load the <strong>MCM</strong> helicase so that replication happens <strong>once per cell cycle</strong>. Bacteria and viruses have <strong>one origin</strong> per chromosome; eukaryotic chromosomes have <strong>many</strong>, about <strong>40 kb</strong> apart. Each origin opens a <strong>replication bubble</strong> with <strong>two forks moving in opposite directions</strong> (bidirectional); bubbles fuse where they meet. No polymerase activity occurs during initiation. <strong>Helicase</strong> unwinds DNA using ATP, breaking hydrogen bonds; <strong>single-strand binding proteins (RPA)</strong> stabilise and protect single strands and recruit Pol α-primase; <strong>topoisomerases</strong> relieve supercoiling ahead of the fork: <strong>type I</strong> cuts one strand without ATP (mild supercoiling), <strong>type II</strong> (gyrase in bacteria) cuts both strands with ATP (severe supercoiling). Helicase + primase = <strong>primosome</strong>.</p>"
  },
  {
   "id": "s2",
   "title": "Eukaryotic DNA polymerases",
   "html": "<p><strong>Pol α</strong>: with primase, starts synthesis (primers); no 3′→5′ exonuclease; low processivity. <strong>Pol δ</strong>: <strong>lagging strand</strong> (Okazaki fragments); 3′→5′ proofreading; needs PCNA. <strong>Pol ε</strong>: <strong>leading strand</strong>; proofreading; needs PCNA. <strong>Pol β</strong>: DNA repair (base excision), not replication. <strong>Pol γ</strong>: <strong>mitochondrial</strong> DNA replication, with proofreading. <strong>3′→5′ exonuclease</strong> = the 'eraser' that removes mistakes (proofreading); 5′→3′ exonuclease removes nucleotides ahead. <strong>PCNA</strong> (proliferating cell nuclear antigen) is the ring-shaped <strong>sliding clamp</strong>, loaded by replication factor C, that keeps Pol δ/ε on DNA and raises processivity.</p>"
  },
  {
   "id": "s3",
   "title": "Elongation and telomeres",
   "html": "<p><strong>Leading strand</strong>: continuous, toward the fork, on the 3′→5′ parental template; one RNA-DNA primer (10-20 nt) by Pol α-primase; extended by <strong>Pol ε</strong>. <strong>Lagging strand</strong>: discontinuous <strong>Okazaki fragments</strong>, away from the fork; many primers; extended by <strong>Pol δ</strong>; primers removed by <strong>RNase H + FEN1</strong>; gaps filled by Pol δ; fragments sealed by <strong>DNA ligase I</strong>. <strong>End-replication problem</strong>: removing the last primer at chromosome ends leaves a gap, so telomeres shorten with each division; <strong>telomerase</strong> (an RNA-dependent DNA polymerase, reverse transcriptase) extends the 3′ end with <strong>TTAGGG</strong> repeats.</p>"
  },
  {
   "id": "s4",
   "title": "Termination; prokaryotes vs eukaryotes",
   "html": "<p>Forks from adjacent origins converge; the last Okazaki fragments are ligated; telomerase finishes ends; the replisome (with the <strong>CMG</strong> helicase: Cdc45-MCM-GINS) is disassembled; <strong>topoisomerase II decatenates</strong> interlinked daughter molecules; checkpoints guard genome stability. <strong>Prokaryotes (E. coli) vs eukaryotes</strong>: main polymerase <strong>Pol III</strong> vs Pol δ/ε; primer removal <strong>Pol I</strong> vs RNase H + FEN1 + Pol δ; helicase <strong>DnaB</strong> vs CMG; <strong>SSB</strong> vs RPA; primase <strong>DnaG</strong> vs primase-Pol α; clamp <strong>β-clamp</strong> vs PCNA; ligase vs ligase I; gyrase/topo II in both.</p>"
  }
 ],
 "exam": [
  "Replication is semi-conservative (Meselson-Stahl).",
  "Needs template, polymerases, dNTPs, ATP, Mg²⁺; synthesis 5′→3′.",
  "ORC recognises origins; MCM helicase; once per cell cycle.",
  "Bacteria: one origin; eukaryotes: many, ~40 kb apart, bidirectional.",
  "Helicase unwinds (ATP); RPA protects ssDNA; topoisomerase I (no ATP) and II (ATP) relieve supercoiling.",
  "Pol α primes; Pol ε leading; Pol δ lagging; Pol β repair; Pol γ mitochondria.",
  "PCNA sliding clamp increases processivity.",
  "Leading: continuous, one primer. Lagging: Okazaki fragments, many primers.",
  "RNase H + FEN1 remove primers; ligase I seals.",
  "Telomerase adds TTAGGG to solve the end-replication problem.",
  "E. coli: Pol III, Pol I, DnaB, SSB, DnaG, β-clamp."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "The eukaryotic replication fork",
   "caption": "Leading and lagging strands and their enzymes. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"240\" y1=\"57\" x2=\"280\" y2=\"57\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"57\" x2=\"520\" y2=\"57\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"180\" x2=\"40\" y2=\"180\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"180\" x2=\"520\" y2=\"180\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"720\" y1=\"180\" x2=\"280\" y2=\"297\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"297\" x2=\"520\" y2=\"297\"/>",
   "parts": {
    "topo": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"40\" y=\"30\" width=\"200\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Topoisomerase: relieves",
      "supercoiling ahead"
     ],
     "lx": 140.0,
     "ly": 55.5
    },
    "heli": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"280\" y=\"30\" width=\"200\" height=\"55\" rx=\"10\"/>",
     "label": [
      "Helicase (MCM/CMG):",
      "unwinds, ATP"
     ],
     "lx": 380.0,
     "ly": 55.5
    },
    "rpa": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"520\" y=\"30\" width=\"200\" height=\"55\" rx=\"10\"/>",
     "label": [
      "RPA: binds and",
      "protects ssDNA"
     ],
     "lx": 620.0,
     "ly": 55.5
    },
    "lead": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"40\" y=\"150\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Leading strand: Pol ε,",
      "continuous, 1 primer"
     ],
     "lx": 140.0,
     "ly": 178.0
    },
    "prim": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"280\" y=\"150\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Primase-Pol α:",
      "RNA-DNA primers"
     ],
     "lx": 380.0,
     "ly": 178.0
    },
    "lag": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"520\" y=\"150\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Lagging strand: Pol δ,",
      "Okazaki fragments"
     ],
     "lx": 620.0,
     "ly": 178.0
    },
    "pcna": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d9ecec\" x=\"40\" y=\"270\" width=\"200\" height=\"55\" rx=\"10\"/>",
     "label": [
      "PCNA clamp: keeps",
      "Pol δ/ε attached"
     ],
     "lx": 140.0,
     "ly": 295.5
    },
    "rnase": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f0d0e0\" x=\"280\" y=\"270\" width=\"200\" height=\"55\" rx=\"10\"/>",
     "label": [
      "RNase H + FEN1 remove",
      "primers; Pol δ fills"
     ],
     "lx": 380.0,
     "ly": 295.5
    },
    "lig": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"520\" y=\"270\" width=\"200\" height=\"55\" rx=\"10\"/>",
     "label": [
      "DNA ligase I",
      "seals fragments"
     ],
     "lx": 620.0,
     "ly": 295.5
    }
   },
   "arrows": {
    "topo": [
     {
      "t": [
       40.0,
       38.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "heli": [
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
    "rpa": [
     {
      "t": [
       520.0,
       38.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "lead": [
     {
      "t": [
       40.0,
       158.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "prim": [
     {
      "t": [
       280.0,
       158.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "lag": [
     {
      "t": [
       520.0,
       158.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "pcna": [
     {
      "t": [
       40.0,
       278.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "rnase": [
     {
      "t": [
       280.0,
       278.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "lig": [
     {
      "t": [
       520.0,
       278.0
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
   "root": "DNA replication",
   "branches": [
    [
     "Principles",
     [
      "Semi-conservative",
      "5′ → 3′",
      "dNTPs, ATP, Mg²⁺"
     ]
    ],
    [
     "Initiation",
     [
      "ORC, MCM licensing",
      "Many origins (~40 kb)",
      "Helicase, RPA, topoisomerases"
     ]
    ],
    [
     "Polymerases",
     [
      "α: primer",
      "ε: leading",
      "δ: lagging",
      "β: repair; γ: mitochondria"
     ]
    ],
    [
     "Elongation",
     [
      "Leading: continuous",
      "Lagging: Okazaki fragments",
      "PCNA clamp",
      "RNase H + FEN1, ligase I"
     ]
    ],
    [
     "Termination",
     [
      "Fork convergence",
      "Telomerase TTAGGG",
      "Topo II decatenation"
     ]
    ],
    [
     "E. coli",
     [
      "Pol III, Pol I",
      "DnaB, SSB, DnaG",
      "β-clamp"
     ]
    ]
   ]
  }
 },
 "mcqs": [
  {
   "q": "The Meselson-Stahl experiment showed that replication is:",
   "options": [
    "Semi-conservative",
    "Conservative",
    "Dispersive",
    "Random"
   ],
   "answer": 0,
   "why": "Each daughter molecule keeps one parental strand."
  },
  {
   "q": "Which ion is a required cofactor for DNA polymerase?",
   "options": [
    "K⁺",
    "Na⁺",
    "Cl⁻",
    "Mg²⁺"
   ],
   "answer": 3,
   "why": "Along with dNTPs and ATP."
  },
  {
   "q": "Origins of replication in eukaryotes are recognised by:",
   "options": [
    "FEN1",
    "ORC",
    "RPA",
    "PCNA"
   ],
   "answer": 1,
   "why": "Origin recognition complex."
  },
  {
   "q": "How many origins does a eukaryotic chromosome have?",
   "options": [
    "Many",
    "Two",
    "None",
    "One"
   ],
   "answer": 0,
   "why": "Bacteria have a single origin."
  },
  {
   "q": "Which enzyme unwinds the double helix using ATP?",
   "options": [
    "Primase",
    "Ligase",
    "Helicase",
    "Topoisomerase I"
   ],
   "answer": 2,
   "why": "It breaks hydrogen bonds between bases."
  },
  {
   "q": "What prevents separated strands from reannealing?",
   "options": [
    "PCNA",
    "Pol β",
    "Ligase",
    "RPA"
   ],
   "answer": 3,
   "why": "Also protects from nucleases."
  },
  {
   "q": "Type II topoisomerase:",
   "options": [
    "Seals fragments",
    "Adds primers",
    "Cuts one strand without ATP",
    "Cuts both strands and uses ATP"
   ],
   "answer": 3,
   "why": "DNA gyrase in bacteria."
  },
  {
   "q": "Which polymerase synthesises the leading strand in eukaryotes?",
   "options": [
    "Pol γ",
    "Pol α",
    "Pol ε",
    "Pol δ"
   ],
   "answer": 2,
   "why": "Pol δ makes the lagging strand."
  },
  {
   "q": "Which polymerase replicates mitochondrial DNA?",
   "options": [
    "Pol γ",
    "Pol α",
    "Pol β",
    "Pol ε"
   ],
   "answer": 0,
   "why": "The only polymerase in mitochondria."
  },
  {
   "q": "Pol α differs from Pol δ and ε because it:",
   "options": [
    "Proofreads",
    "Repairs DNA",
    "Works only in mitochondria",
    "Has no 3′→5′ exonuclease"
   ],
   "answer": 3,
   "why": "It starts synthesis with primase."
  },
  {
   "q": "PCNA is:",
   "options": [
    "A ligase",
    "A primase",
    "A helicase",
    "A sliding clamp"
   ],
   "answer": 3,
   "why": "Raises processivity."
  },
  {
   "q": "Okazaki fragments are made on the:",
   "options": [
    "Lagging strand",
    "Leading strand",
    "Mitochondrial DNA only",
    "Both strands"
   ],
   "answer": 0,
   "why": "Discontinuous synthesis away from the fork."
  },
  {
   "q": "Which enzymes remove RNA primers in eukaryotes?",
   "options": [
    "Helicase",
    "RNase H and FEN1",
    "DNA Pol I",
    "Topoisomerase"
   ],
   "answer": 1,
   "why": "Pol I does this in bacteria."
  },
  {
   "q": "Okazaki fragments are joined by:",
   "options": [
    "PCNA",
    "RPA",
    "DNA ligase I",
    "Primase"
   ],
   "answer": 2,
   "why": "After gaps are filled by Pol δ."
  },
  {
   "q": "Telomerase adds which repeat?",
   "options": [
    "CCCTAA only",
    "GCGCGC",
    "TTAGGG",
    "ATATAT"
   ],
   "answer": 2,
   "why": "It is an RNA-dependent DNA polymerase."
  },
  {
   "q": "The main replicative polymerase of E. coli is:",
   "options": [
    "Pol I",
    "Pol III",
    "Pol δ",
    "Pol II"
   ],
   "answer": 1,
   "why": "Pol I removes primers."
  },
  {
   "q": "Decatenation of daughter DNA molecules is done by:",
   "options": [
    "Topoisomerase II",
    "Primase",
    "Ligase",
    "Helicase"
   ],
   "answer": 0,
   "why": "Separating interlinked molecules."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "topo",
   "options": [
    "Topoisomerase",
    "Leading strand",
    "RPA (SSB)",
    "Helicase"
   ],
   "answer": 0,
   "why": "The arrow points to: Topoisomerase. Type I cuts one strand (no ATP); type II cuts both (ATP; gyrase in bacteria) to relieve supercoiling."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "heli",
   "options": [
    "Lagging strand",
    "Helicase",
    "PCNA",
    "Primer removal"
   ],
   "answer": 1,
   "why": "The arrow points to: Helicase. ATP-dependent unwinding that breaks base-pair hydrogen bonds and opens the fork (MCM, part of the CMG complex)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "rpa",
   "options": [
    "Primase-Pol α",
    "Leading strand",
    "RPA (SSB)",
    "Helicase"
   ],
   "answer": 2,
   "why": "The arrow points to: RPA (SSB). Single-strand binding protein that stabilises unwound DNA, prevents reannealing and protects from nucleases."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "lead",
   "options": [
    "Primer removal",
    "Topoisomerase",
    "Leading strand",
    "PCNA"
   ],
   "answer": 2,
   "why": "The arrow points to: Leading strand. Synthesised continuously toward the fork by Pol ε, needing only one primer."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "prim",
   "options": [
    "Topoisomerase",
    "Primase-Pol α",
    "Lagging strand",
    "Ligation"
   ],
   "answer": 1,
   "why": "The arrow points to: Primase-Pol α. Lays down short RNA-DNA primers (10-20 nt); Pol α has no proofreading."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "lag",
   "options": [
    "Leading strand",
    "Lagging strand",
    "Helicase",
    "RPA (SSB)"
   ],
   "answer": 1,
   "why": "The arrow points to: Lagging strand. Made discontinuously away from the fork as Okazaki fragments by Pol δ."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pcna",
   "options": [
    "Primase-Pol α",
    "RPA (SSB)",
    "PCNA",
    "Leading strand"
   ],
   "answer": 2,
   "why": "The arrow points to: PCNA. Sliding clamp loaded by replication factor C; boosts processivity."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "rnase",
   "options": [
    "Lagging strand",
    "Ligation",
    "Leading strand",
    "Primer removal"
   ],
   "answer": 3,
   "why": "The arrow points to: Primer removal. RNase H and FEN1 remove RNA primers; Pol δ fills the gaps."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "lig",
   "options": [
    "Lagging strand",
    "Ligation",
    "RPA (SSB)",
    "Leading strand"
   ],
   "answer": 1,
   "why": "The arrow points to: Ligation. DNA ligase I joins Okazaki fragments into a continuous strand."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "What does semi-conservative mean?",
   "back": "Each new DNA molecule has one parental and one new strand (Meselson-Stahl)."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Requirements for replication?",
   "back": "DNA template, DNA polymerases, replication proteins, dNTPs, ATP, Mg²⁺."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Origins in prokaryotes vs eukaryotes?",
   "back": "Prokaryotes: one origin per chromosome. Eukaryotes: many, ~40 kb apart, recognised by ORC, licensed once per cycle, bidirectional forks."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Roles of helicase, RPA and topoisomerases?",
   "back": "Helicase unwinds (ATP). RPA stabilises ssDNA. Topo I cuts one strand (no ATP); topo II cuts both (ATP) to relieve supercoiling."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Eukaryotic polymerases?",
   "back": "α: priming, no proofreading. δ: lagging. ε: leading. β: repair. γ: mitochondrial."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Leading vs lagging strand?",
   "back": "Leading: continuous toward the fork, one primer, Pol ε. Lagging: Okazaki fragments away from the fork, many primers, Pol δ, ligase I."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Lagging-strand maturation?",
   "back": "RNase H + FEN1 remove primers; Pol δ fills gaps; DNA ligase I seals."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "End-replication problem?",
   "back": "Removing the last primer leaves a gap so telomeres shorten; telomerase adds TTAGGG repeats."
  },
  {
   "id": "x8",
   "type": "text",
   "front": "E. coli vs eukaryotic replication machinery?",
   "back": "Pol III vs Pol δ/ε; Pol I vs RNase H/FEN1; DnaB vs CMG; SSB vs RPA; DnaG vs primase-Pol α; β-clamp vs PCNA."
  },
  {
   "id": "img-topo",
   "type": "image",
   "target": "topo",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Topoisomerase. Type I cuts one strand (no ATP); type II cuts both (ATP; gyrase in bacteria) to relieve supercoiling."
  },
  {
   "id": "img-heli",
   "type": "image",
   "target": "heli",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Helicase. ATP-dependent unwinding that breaks base-pair hydrogen bonds and opens the fork (MCM, part of the CMG complex)."
  },
  {
   "id": "img-rpa",
   "type": "image",
   "target": "rpa",
   "front": "What is at the arrow, and why does it matter?",
   "back": "RPA (SSB). Single-strand binding protein that stabilises unwound DNA, prevents reannealing and protects from nucleases."
  },
  {
   "id": "img-lead",
   "type": "image",
   "target": "lead",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Leading strand. Synthesised continuously toward the fork by Pol ε, needing only one primer."
  },
  {
   "id": "img-prim",
   "type": "image",
   "target": "prim",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Primase-Pol α. Lays down short RNA-DNA primers (10-20 nt); Pol α has no proofreading."
  },
  {
   "id": "img-lag",
   "type": "image",
   "target": "lag",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Lagging strand. Made discontinuously away from the fork as Okazaki fragments by Pol δ."
  },
  {
   "id": "img-pcna",
   "type": "image",
   "target": "pcna",
   "front": "What is at the arrow, and why does it matter?",
   "back": "PCNA. Sliding clamp loaded by replication factor C; boosts processivity."
  },
  {
   "id": "img-rnase",
   "type": "image",
   "target": "rnase",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Primer removal. RNase H and FEN1 remove RNA primers; Pol δ fills the gaps."
  },
  {
   "id": "img-lig",
   "type": "image",
   "target": "lig",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Ligation. DNA ligase I joins Okazaki fragments into a continuous strand."
  }
 ],
 "deeper": [
  {
   "title": "Why one strand is made in pieces",
   "html": "<p>Polymerases only add nucleotides to a 3′-OH, so they can only build 5′→3′. At a fork, one template lets the new strand grow continuously in the direction the fork moves; the other points the opposite way, so the new strand must be started again and again as the fork opens, giving Okazaki fragments that are later joined.</p><p class='src'>Source: the lecture's leading vs lagging strand slides.</p>"
  },
  {
   "title": "Why telomeres shorten and why it matters",
   "html": "<p>At the very end of a chromosome there is no DNA beyond the last primer to fill the gap once that primer is removed, so each division trims a little telomere. Telomerase re-extends the ends in stem and germ cells; in most body cells telomeres shorten over time, a limit on cell divisions linked to ageing, while cancer cells often reactivate telomerase.</p><p class='src'>Source: the lecture's telomere replication slide.</p>"
  }
 ],
 "resources": [
  {
   "title": "DNA replication (NHGRI glossary)",
   "url": "https://www.genome.gov/genetics-glossary/DNA-Replication",
   "kind": "Website",
   "why": "Short illustrated definition.",
   "note": ""
  },
  {
   "title": "DNA replication (Khan Academy)",
   "url": "https://www.khanacademy.org/science/ap-biology/gene-expression-and-regulation/replication/a/molecular-mechanism-of-dna-replication",
   "kind": "Article",
   "why": "Step-by-step mechanism of replication.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "DNA replication (NHGRI glossary)",
   "url": "https://www.genome.gov/genetics-glossary/DNA-Replication"
  },
  {
   "name": "DNA replication (Khan Academy)",
   "url": "https://www.khanacademy.org/science/ap-biology/gene-expression-and-regulation/replication/a/molecular-mechanism-of-dna-replication"
  }
 ],
 "verified": "22 Sep 2026"
};
