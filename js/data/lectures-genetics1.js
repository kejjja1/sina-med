/* genetics1: 9 lectures, merged for upload. Edit the source files, not this one. */
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
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["genetics1-transcription"] = {
 "id": "genetics1-transcription",
 "subject": "genetics1",
 "group": "Molecular genetics",
 "title": "DNA transcription",
 "sourceFile": "Chapter 4 DNA Transcription.pdf (Molecular Genetics, Pr. Amal Oudghiri)",
 "sourceUrl": "https://drive.google.com/file/d/1Q3G_zPr4N8zPnmSYGXbDGI3Dh9841-ST/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p><strong>Gene expression</strong> reads DNA to make functional RNA and proteins. <strong>Transcription</strong> (in the nucleus) uses RNA polymerase to copy a DNA template into a <strong>primary transcript</strong>, which is then processed; translation follows in the cytoplasm. Requirements: DNA template, RNA polymerase, transcription factors, <strong>NTPs</strong>, Mg²⁺.</p>"
  },
  {
   "id": "s1",
   "title": "DNA stability, denaturation and Tm",
   "html": "<p>The double helix is stabilised by hydrogen bonds (A-T 2, G-C 3), <strong>base stacking</strong> (hydrophobic) and electrostatic interactions with ions. <strong>Denaturation</strong> separates strands (heat, high pH, chemicals); <strong>renaturation (annealing)</strong> re-forms them depending on length, GC content and temperature. Single-stranded DNA absorbs more UV at <strong>260 nm</strong> (<strong>hyperchromic effect</strong>). The <strong>melting temperature (Tm)</strong> is where 50% of base pairs are separated; Tm rises with <strong>GC content, length and cations</strong>. Used in PCR and hybridisation.</p>"
  },
  {
   "id": "s2",
   "title": "Template strand and RNA",
   "html": "<p>The <strong>template (antisense)</strong> strand is read <strong>3′→5′</strong>; RNA is made <strong>5′→3′</strong>, adding to the 3′-OH, and is complementary to the template, so it has the same sequence as the <strong>sense (coding, non-template)</strong> strand with U for T. Only one strand is used per gene, but different genes can use different strands (e.g. adjacent apoA-I and apoC-III genes). <strong>RNA</strong>: single-stranded, <strong>ribose</strong>, bases A, G, C, <strong>U</strong>; shorter, less stable, folds into hairpins (stem-loops), internal loops and bulges, and multi-branched junctions that affect termination, splicing, translation and stability.</p>"
  },
  {
   "id": "s3",
   "title": "RNA polymerases and RNA types",
   "html": "<p><strong>Pol I</strong> (nucleolus): 47S pre-rRNA → <strong>28S, 18S, 5.8S</strong> rRNA (genes on acrocentric chromosomes 13, 14, 15, 21, 22: nucleolar organiser regions). <strong>Pol II</strong> (nucleoplasm): <strong>mRNA</strong> and some regulatory RNAs (snRNA, lncRNA); couples transcription with capping, splicing and polyadenylation via its <strong>C-terminal domain (CTD)</strong>: repeats of <strong>YSPTSPS</strong> (52 in humans) on the largest subunit RPB1, whose serine phosphorylation controls initiation → elongation → termination; Pol I and III lack it. <strong>Pol III</strong>: <strong>tRNA, 5S rRNA</strong>, U6 snRNA, 7SL, 7SK (internal A and B boxes; TFIIIA/B/C; repressor Maf1). RNA types: <strong>mRNA</strong> (5′ cap, CDS, poly(A) tail; alternative splicing), <strong>tRNA</strong> (cloverleaf, anticodon, modified bases like pseudouridine, inosine), <strong>rRNA</strong> (ribosome core, catalyses peptide bonds: ribozyme), <strong>snRNA</strong> (splicing), <strong>miRNA</strong> (post-transcriptional silencing).</p>"
  },
  {
   "id": "s4",
   "title": "Promoters, factors and the three phases",
   "html": "<p><strong>Promoter elements</strong>: <strong>TATA box</strong> (~25-30 bp upstream of +1; bound by TBP), <strong>Inr</strong> (spans +1), <strong>DPE</strong> (+28 to +32, in TATA-less promoters), <strong>CAAT box</strong> (CTF; strong genes), <strong>GC box</strong> (Sp1). <strong>General transcription factors</strong>: <strong>TFIID</strong> (TBP + 13 TAFs; binds first), TFIIA (stabilises), <strong>TFIIB</strong> (positions Pol II at +1), TFIIF (escorts Pol II), TFIIE (recruits TFIIH), <strong>TFIIH</strong> (helicase + CTD kinase). <strong>Activators</strong> bind enhancers, recruit coactivators and HATs (open chromatin); <strong>repressors</strong> bind silencers, recruit corepressors and HDACs; both act at a distance by DNA looping. DNA-binding motifs: <strong>helix-loop-helix</strong> (MyoD), <strong>zinc finger</strong> (steroid receptors), <strong>leucine zipper</strong> (Fos/Jun, AP-1).</p><p><strong>Initiation</strong>: TBP binds and bends the TATA box → TFIIB → Pol II-TFIIF → TFIIE → TFIIH completes the <strong>pre-initiation complex</strong>; TFIIH helicase unwinds DNA (open complex); CTD phosphorylation triggers <strong>promoter clearance</strong>. <strong>Elongation</strong>: 5′→3′ within a ~12-17 bp bubble, with chromatin remodelling. <strong>Termination</strong> (not sequence-defined, unlike bacteria): the <strong>AAUAAA</strong> signal is bound by <strong>CPSF</strong> and <strong>CstF</strong>, the RNA is cut, <strong>poly(A) polymerase</strong> adds the tail, and the <strong>XRN2 'torpedo'</strong> exonuclease degrades the remaining RNA until Pol II falls off.</p>"
  }
 ],
 "exam": [
  "Transcription: DNA → primary RNA transcript in the nucleus.",
  "Tm = 50% of pairs separated; rises with GC, length, cations; hyperchromic effect at 260 nm.",
  "Template (antisense) read 3′→5′; RNA made 5′→3′; RNA = sense strand with U.",
  "Pol I: 28S, 18S, 5.8S rRNA (nucleolus). Pol II: mRNA (CTD). Pol III: tRNA, 5S rRNA.",
  "CTD: YSPTSPS repeats (52 in humans); phosphorylation drives the transcription cycle.",
  "TATA box ~ −25/−30 (TBP); Inr at +1; DPE downstream; GC box (Sp1); CAAT box.",
  "TFIID first (TBP), TFIIB positions Pol II, TFIIH helicase + CTD kinase.",
  "Activators: enhancers, HATs. Repressors: silencers, HDACs.",
  "Motifs: helix-loop-helix, zinc finger, leucine zipper.",
  "Termination: AAUAAA, CPSF + CstF cleavage, poly(A) polymerase, XRN2 torpedo."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Assembling the pre-initiation complex",
   "caption": "General transcription factors at a Pol II promoter. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"240\" y1=\"70\" x2=\"280\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"70\" x2=\"520\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"620\" y1=\"100\" x2=\"620\" y2=\"170\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"720\" y1=\"200\" x2=\"280\" y2=\"200\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"200\" x2=\"40\" y2=\"200\"/>",
   "parts": {
    "tata": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"40\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "TATA box: −25 to −30",
      "(core promoter)"
     ],
     "lx": 140.0,
     "ly": 68.0
    },
    "tfiid": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"280\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "TFIID (TBP + TAFs)",
      "binds and bends DNA"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "tfiib": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"520\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "TFIIB: positions",
      "Pol II at +1"
     ],
     "lx": 620.0,
     "ly": 68.0
    },
    "pol": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"520\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "TFIIF escorts",
      "RNA Pol II"
     ],
     "lx": 620.0,
     "ly": 198.0
    },
    "tfiih": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"280\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "TFIIE recruits TFIIH:",
      "helicase + CTD kinase"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "elong": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"40\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "CTD phosphorylated →",
      "promoter clearance"
     ],
     "lx": 140.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "tata": [
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
    "tfiid": [
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
    "tfiib": [
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
    "pol": [
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
    "tfiih": [
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
    "elong": [
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
   "root": "Transcription",
   "branches": [
    [
     "DNA physics",
     [
      "Denaturation / renaturation",
      "Hyperchromic 260 nm",
      "Tm: GC, length, cations"
     ]
    ],
    [
     "Strands",
     [
      "Template read 3′→5′",
      "RNA made 5′→3′",
      "mRNA = sense strand (U)"
     ]
    ],
    [
     "Polymerases",
     [
      "Pol I: 28S, 18S, 5.8S",
      "Pol II: mRNA (CTD)",
      "Pol III: tRNA, 5S"
     ]
    ],
    [
     "Promoter & factors",
     [
      "TATA, Inr, DPE, CAAT, GC",
      "TFIID, B, F, E, H",
      "Activators vs repressors"
     ]
    ],
    [
     "Phases",
     [
      "Initiation: PIC",
      "Elongation: bubble",
      "Termination: AAUAAA, XRN2"
     ]
    ]
   ]
  }
 },
 "mcqs": [
  {
   "q": "Which UV wavelength is used to follow DNA denaturation?",
   "options": [
    "340 nm",
    "280 nm",
    "450 nm",
    "260 nm"
   ],
   "answer": 3,
   "why": "Single strands absorb more (hyperchromic effect)."
  },
  {
   "q": "The melting temperature (Tm) of DNA increases with:",
   "options": [
    "Low salt",
    "Short length",
    "GC content",
    "AT content"
   ],
   "answer": 2,
   "why": "Also with length and cations."
  },
  {
   "q": "RNA polymerase reads the template strand in which direction?",
   "options": [
    "Random",
    "3′ → 5′",
    "Both",
    "5′ → 3′"
   ],
   "answer": 1,
   "why": "RNA is made 5′ → 3′."
  },
  {
   "q": "The mRNA sequence is identical to the:",
   "options": [
    "Template strand",
    "Promoter",
    "Sense strand (U for T)",
    "Antisense strand"
   ],
   "answer": 2,
   "why": "It is complementary to the template."
  },
  {
   "q": "Which polymerase makes 28S, 18S and 5.8S rRNA?",
   "options": [
    "Pol I",
    "Pol γ",
    "Pol III",
    "Pol II"
   ],
   "answer": 0,
   "why": "In the nucleolus."
  },
  {
   "q": "Which polymerase makes tRNA and 5S rRNA?",
   "options": [
    "Pol II",
    "Pol III",
    "Pol I",
    "Primase"
   ],
   "answer": 1,
   "why": "Using internal promoters."
  },
  {
   "q": "The CTD with YSPTSPS repeats belongs to:",
   "options": [
    "Pol III",
    "All three",
    "Pol II",
    "Pol I"
   ],
   "answer": 2,
   "why": "It recruits processing factors."
  },
  {
   "q": "The TATA box lies about:",
   "options": [
    "At +1",
    "In the intron",
    "+100 bp",
    "25-30 bp upstream of +1"
   ],
   "answer": 3,
   "why": "Bound by TBP."
  },
  {
   "q": "Which factor binds the promoter first?",
   "options": [
    "TFIIH",
    "TFIID (TBP)",
    "TFIIE",
    "TFIIF"
   ],
   "answer": 1,
   "why": "It bends the DNA."
  },
  {
   "q": "TFIIB:",
   "options": [
    "Positions Pol II at +1",
    "Unwinds DNA",
    "Binds enhancers",
    "Adds the poly(A) tail"
   ],
   "answer": 0,
   "why": "Bridges TFIID and Pol II."
  },
  {
   "q": "Which factor has helicase and CTD kinase activity?",
   "options": [
    "TFIIH",
    "TFIIB",
    "TFIIF",
    "TFIIA"
   ],
   "answer": 0,
   "why": "It opens DNA and triggers promoter clearance."
  },
  {
   "q": "Repressors act mainly by recruiting:",
   "options": [
    "HATs",
    "TBP",
    "Pol III",
    "HDACs, corepressors"
   ],
   "answer": 3,
   "why": "Chromatin condensation."
  },
  {
   "q": "Steroid hormone receptors use which DNA-binding motif?",
   "options": [
    "Helix-loop-helix",
    "Homeobox only",
    "Leucine zipper",
    "Zinc finger"
   ],
   "answer": 3,
   "why": "Zn²⁺ stabilises the motif."
  },
  {
   "q": "The polyadenylation signal is:",
   "options": [
    "AAUAAA",
    "AUG",
    "TATAAA",
    "GGGCGG"
   ],
   "answer": 0,
   "why": "Recognised by CPSF."
  },
  {
   "q": "Which exonuclease causes Pol II to dissociate at termination?",
   "options": [
    "RNase H",
    "XRN2",
    "FEN1",
    "Dicer"
   ],
   "answer": 1,
   "why": "The 'torpedo' model."
  },
  {
   "q": "Which RNA has catalytic (ribozyme) activity forming peptide bonds?",
   "options": [
    "miRNA",
    "snRNA",
    "mRNA",
    "rRNA"
   ],
   "answer": 3,
   "why": "In the large ribosomal subunit."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "tata",
   "options": [
    "TFIID",
    "TFIIB",
    "TATA box",
    "TFIIF + Pol II"
   ],
   "answer": 2,
   "why": "The arrow points to: TATA box. Core promoter element about 25-30 bp upstream of +1; other elements: Inr at +1, DPE at +28 to +32, CAAT and GC boxes."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "tfiid",
   "options": [
    "TATA box",
    "TFIID",
    "TFIIE and TFIIH",
    "TFIIF + Pol II"
   ],
   "answer": 1,
   "why": "The arrow points to: TFIID. First factor to bind; its TBP subunit recognises the TATA box and bends DNA; with 13 TAFs; TFIIA stabilises it."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "tfiib",
   "options": [
    "TFIIE and TFIIH",
    "TFIIB",
    "TFIID",
    "TFIIF + Pol II"
   ],
   "answer": 1,
   "why": "The arrow points to: TFIIB. Bridges TFIID and Pol II, positioning the polymerase at the +1 start site."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pol",
   "options": [
    "TFIIF + Pol II",
    "TFIID",
    "TFIIE and TFIIH",
    "TFIIB"
   ],
   "answer": 0,
   "why": "The arrow points to: TFIIF + Pol II. TFIIF escorts RNA Pol II to the promoter and stabilises its binding."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "tfiih",
   "options": [
    "TFIIE and TFIIH",
    "Promoter clearance",
    "TFIIF + Pol II",
    "TFIIB"
   ],
   "answer": 0,
   "why": "The arrow points to: TFIIE and TFIIH. TFIIE recruits TFIIH, completing the PIC; TFIIH helicase unwinds DNA (ATP) to form the open complex."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "elong",
   "options": [
    "TATA box",
    "TFIIF + Pol II",
    "Promoter clearance",
    "TFIIB"
   ],
   "answer": 2,
   "why": "The arrow points to: Promoter clearance. TFIIH kinase phosphorylates the Pol II CTD, which changes shape and leaves the promoter to elongate."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Factors stabilising DNA?",
   "back": "Hydrogen bonds (A-T 2, G-C 3), base stacking (hydrophobic), electrostatic interactions with ions."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Define Tm and its determinants.",
   "back": "Temperature at which 50% of base pairs separate; increased by GC content, length and cation concentration."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Template vs sense strand?",
   "back": "Template (antisense) is read 3′→5′; sense (coding) has the same sequence as mRNA (T→U)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Three eukaryotic RNA polymerases?",
   "back": "Pol I: 28S, 18S, 5.8S rRNA (nucleolus). Pol II: mRNA, snRNA, lncRNA. Pol III: tRNA, 5S rRNA, U6, 7SL."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "What is the Pol II CTD?",
   "back": "C-terminal repeats of YSPTSPS (52 in humans) on RPB1; phosphorylation coordinates capping, splicing, polyadenylation and phase transitions."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Core promoter elements?",
   "back": "TATA box (−25/−30, TBP), Inr (+1), DPE (+28/+32), CAAT box (CTF), GC box (Sp1)."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Roles of the general transcription factors?",
   "back": "TFIID: binds TATA (TBP). TFIIA: stabilises. TFIIB: positions Pol II. TFIIF: escorts Pol II. TFIIE: recruits TFIIH. TFIIH: helicase + CTD kinase."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Activators vs repressors?",
   "back": "Activators: enhancers, coactivators, HATs, more Pol II. Repressors: silencers, corepressors, HDACs, less Pol II."
  },
  {
   "id": "x8",
   "type": "text",
   "front": "Eukaryotic termination?",
   "back": "AAUAAA → CPSF + CstF cleave → poly(A) polymerase adds tail → XRN2 degrades the remaining RNA → Pol II released."
  },
  {
   "id": "img-tata",
   "type": "image",
   "target": "tata",
   "front": "What is at the arrow, and why does it matter?",
   "back": "TATA box. Core promoter element about 25-30 bp upstream of +1; other elements: Inr at +1, DPE at +28 to +32, CAAT and GC boxes."
  },
  {
   "id": "img-tfiid",
   "type": "image",
   "target": "tfiid",
   "front": "What is at the arrow, and why does it matter?",
   "back": "TFIID. First factor to bind; its TBP subunit recognises the TATA box and bends DNA; with 13 TAFs; TFIIA stabilises it."
  },
  {
   "id": "img-tfiib",
   "type": "image",
   "target": "tfiib",
   "front": "What is at the arrow, and why does it matter?",
   "back": "TFIIB. Bridges TFIID and Pol II, positioning the polymerase at the +1 start site."
  },
  {
   "id": "img-pol",
   "type": "image",
   "target": "pol",
   "front": "What is at the arrow, and why does it matter?",
   "back": "TFIIF + Pol II. TFIIF escorts RNA Pol II to the promoter and stabilises its binding."
  },
  {
   "id": "img-tfiih",
   "type": "image",
   "target": "tfiih",
   "front": "What is at the arrow, and why does it matter?",
   "back": "TFIIE and TFIIH. TFIIE recruits TFIIH, completing the PIC; TFIIH helicase unwinds DNA (ATP) to form the open complex."
  },
  {
   "id": "img-elong",
   "type": "image",
   "target": "elong",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Promoter clearance. TFIIH kinase phosphorylates the Pol II CTD, which changes shape and leaves the promoter to elongate."
  }
 ],
 "deeper": [
  {
   "title": "Why TFIIH is the switch from start to go",
   "html": "<p>TFIIH does two jobs at the right moment: its helicase opens the DNA so the template is exposed, and its kinase phosphorylates the Pol II tail. The phosphorylated CTD loosens the polymerase's grip on the initiation factors so it can leave the promoter, and becomes a landing pad for the enzymes that cap and splice the new RNA.</p><p class='src'>Source: the lecture's initiation phase slides.</p>"
  },
  {
   "title": "Why eukaryotic termination is 'torpedo'-driven",
   "html": "<p>Bacterial genes end with sequences that directly stop the polymerase. In eukaryotes, Pol II keeps going past the polyadenylation site; once the RNA is cut there, an exonuclease (XRN2) chews the leftover RNA still attached to Pol II and catches up with it, knocking it off. Termination is thus linked to making the poly(A) tail.</p><p class='src'>Source: the lecture's termination slide.</p>"
  }
 ],
 "resources": [
  {
   "title": "Transcription (NHGRI glossary)",
   "url": "https://www.genome.gov/genetics-glossary/Transcription",
   "kind": "Website",
   "why": "Short illustrated definition.",
   "note": ""
  },
  {
   "title": "Stages of transcription (Khan Academy)",
   "url": "https://www.khanacademy.org/science/ap-biology/gene-expression-and-regulation/transcription-and-rna-processing/a/stages-of-transcription",
   "kind": "Article",
   "why": "Initiation, elongation, termination.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Transcription (NHGRI glossary)",
   "url": "https://www.genome.gov/genetics-glossary/Transcription"
  },
  {
   "name": "Stages of transcription (Khan Academy)",
   "url": "https://www.khanacademy.org/science/ap-biology/gene-expression-and-regulation/transcription-and-rna-processing/a/stages-of-transcription"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["genetics1-rna-processing"] = {
 "id": "genetics1-rna-processing",
 "subject": "genetics1",
 "group": "Molecular genetics",
 "title": "Post-transcriptional RNA processing",
 "sourceFile": "Chapter 5 Post transcriptional RNA processing.pdf (Molecular Genetics, Pr. Amal Oudghiri)",
 "sourceUrl": "https://drive.google.com/file/d/1itbbjSFXRzfNTozOQ1U-edZLAFbZU4lA/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>In eukaryotes, transcription makes a <strong>pre-mRNA</strong> that must be processed before export: <strong>5′ capping</strong>, <strong>polyadenylation</strong>, <strong>splicing</strong>, sometimes <strong>RNA editing</strong>, then <strong>nuclear export</strong>. Quality control degrades badly capped or spliced RNAs; these steps are also a level of gene regulation. Prokaryotes have <strong>no introns, no cap, rarely a poly(A) tail</strong>, and couple transcription and translation in the cytoplasm.</p>"
  },
  {
   "id": "s1",
   "title": "5′ cap and poly(A) tail",
   "html": "<p><strong>Cap</strong>: a <strong>7-methylguanosine (m⁷G)</strong> joined by an unusual <strong>5′-5′ triphosphate</strong> bond, added co-transcriptionally when the RNA is ~20-30 nt: <strong>RNA triphosphatase</strong> removes the γ-phosphate, <strong>guanylyltransferase</strong> adds GMP from GTP, <strong>methyltransferase</strong> methylates guanine N7. Functions: protects from 5′→3′ exonucleases, needed for export, helps ribosome binding (translation initiation) and first-intron splicing.</p><p><strong>Poly(A) tail</strong>: pre-mRNA is cleaved downstream of <strong>AAUAAA</strong>; <strong>CPSF</strong> binds AAUAAA, <strong>CstF</strong> binds the downstream GU-rich region (with CFIm, CFIIm); <strong>poly(A) polymerase</strong> adds ~<strong>200 A</strong> without a template; <strong>PABP</strong> binds the tail, stabilises it and regulates length. Functions: protects from 3′→5′ exonucleases, aids export, boosts translation and stability. <strong>Alternative polyadenylation</strong> (multiple signals) gives different 3′ UTR lengths, stability and translation, sometimes different proteins.</p>"
  },
  {
   "id": "s2",
   "title": "Splicing",
   "html": "<p>Removes <strong>introns</strong> and joins <strong>exons</strong>. The <strong>spliceosome</strong> is an RNA-protein complex of snRNAs + proteins (<strong>snRNPs U1, U2, U4/U6, U5</strong>) recognising the 5′ splice site, the 3′ splice site and the <strong>branch point</strong> (recognised by U2). Two <strong>transesterifications</strong>: (1) the <strong>2′-OH of the branch-point adenine</strong> attacks the 5′ splice site, forming a <strong>lariat</strong>; (2) the <strong>3′-OH of the upstream exon</strong> attacks the 3′ splice site, joining exons and releasing the intron for degradation. <strong>Alternative splicing</strong>: one pre-mRNA gives several isoforms by exon skipping, alternative 5′/3′ sites, intron retention or mutually exclusive exons, regulated by SR proteins and hnRNPs. Examples: fibronectin (plasma vs tissue), <strong>calcitonin vs CGRP</strong> (thyroid vs nervous system), tropomyosin (muscle types), <strong>Bcl-xL vs Bcl-xS</strong> (anti- vs pro-apoptotic), CD44 (>20 isoforms), Dscam (thousands), <strong>SMN1/SMN2</strong> (spinal muscular atrophy).</p>"
  },
  {
   "id": "s3",
   "title": "Editing, export and pseudogenes",
   "html": "<p><strong>RNA editing</strong> changes individual bases after transcription: <strong>A→I</strong> (inosine = hypoxanthine; by <strong>ADAR</strong>, e.g. glutamate receptor channel properties) and <strong>C→U</strong> (by <strong>APOBEC</strong>). Unlike alternative splicing (whole exons), editing changes one or a few amino acids. Only mature mRNA (cap, no introns, poly(A)) is exported. <strong>Processed pseudogenes</strong>: non-functional gene copies without introns or regulatory sequences, formed by <strong>retrotransposition</strong> of mRNA (also tRNA, snRNA) with LINE ORF1/ORF2 proteins.</p>"
  }
 ],
 "exam": [
  "Processing: capping, polyadenylation, splicing, editing, export.",
  "Cap = m⁷G via 5′-5′ triphosphate, added at ~20-30 nt.",
  "Cap enzymes: triphosphatase, guanylyltransferase, methyltransferase.",
  "Cap: protection from 5′ exonucleases, export, translation start.",
  "Poly(A): CPSF (AAUAAA) + CstF (GU-rich) cleave; PAP adds ~200 A; PABP binds.",
  "Spliceosome snRNPs: U1, U2, U4/U6, U5; U2 binds branch point.",
  "Branch-point A 2′-OH attacks 5′ site → lariat; exon 3′-OH attacks 3′ site.",
  "Alternative splicing: calcitonin/CGRP, Bcl-xL/xS, SMN1/SMN2.",
  "Editing: A→I (ADAR), C→U (APOBEC).",
  "Processed pseudogenes: intronless copies by retrotransposition.",
  "Prokaryotes: no introns, no cap, coupled transcription-translation."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "From pre-mRNA to mature mRNA",
   "caption": "The processing steps. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"240\" y1=\"70\" x2=\"280\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"70\" x2=\"520\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"620\" y1=\"100\" x2=\"620\" y2=\"170\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"720\" y1=\"200\" x2=\"280\" y2=\"200\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"200\" x2=\"40\" y2=\"200\"/>",
   "parts": {
    "pre": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"40\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Pre-mRNA: exons",
      "+ introns"
     ],
     "lx": 140.0,
     "ly": 68.0
    },
    "cap": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"280\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "5′ cap: m⁷G,",
      "5′-5′ triphosphate"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "splice": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"520\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Splicing: spliceosome",
      "(U1, U2, U4/U6, U5)"
     ],
     "lx": 620.0,
     "ly": 68.0
    },
    "polya": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"520\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "3′ cleavage at AAUAAA,",
      "poly(A) tail ~200 A"
     ],
     "lx": 620.0,
     "ly": 198.0
    },
    "edit": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"280\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Editing: A→I (ADAR),",
      "C→U (APOBEC)"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "export": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"40\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Mature mRNA exported",
      "to the cytoplasm"
     ],
     "lx": 140.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "pre": [
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
    "cap": [
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
    "splice": [
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
    "polya": [
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
    "edit": [
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
    "export": [
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
  }
 },
 "mcqs": [
  {
   "q": "The 5′ cap is:",
   "options": [
    "A poly(A) sequence",
    "A lariat",
    "An intron",
    "7-methylguanosine linked 5′-5′"
   ],
   "answer": 3,
   "why": "Unique 5′-5′ triphosphate bond."
  },
  {
   "q": "When is the cap added?",
   "options": [
    "After export",
    "In the cytoplasm",
    "Co-transcriptionally",
    "After splicing"
   ],
   "answer": 2,
   "why": "Very early."
  },
  {
   "q": "Which enzyme adds GMP during capping?",
   "options": [
    "Poly(A) polymerase",
    "Guanylyltransferase",
    "ADAR",
    "Ligase"
   ],
   "answer": 1,
   "why": "Then methyltransferase methylates N7."
  },
  {
   "q": "Which is NOT a function of the cap?",
   "options": [
    "Nuclear export",
    "Translation initiation",
    "Adding the poly(A) tail",
    "Protection from 5′ exonucleases"
   ],
   "answer": 2,
   "why": "Tailing is done by PAP at the 3′ end."
  },
  {
   "q": "CPSF binds the sequence:",
   "options": [
    "AAUAAA",
    "TATA",
    "AUG",
    "GU-rich"
   ],
   "answer": 0,
   "why": "CstF binds the GU-rich region."
  },
  {
   "q": "Poly(A) polymerase adds about:",
   "options": [
    "2,000 A",
    "200 A",
    "20 A",
    "5 A"
   ],
   "answer": 1,
   "why": "Without a template."
  },
  {
   "q": "Alternative polyadenylation mainly changes:",
   "options": [
    "The intron number",
    "The 5′ cap",
    "3′ UTR length",
    "The promoter"
   ],
   "answer": 2,
   "why": "Sometimes the protein if inside the last exon."
  },
  {
   "q": "Which snRNP recognises the branch point?",
   "options": [
    "U1",
    "U5",
    "U6",
    "U2"
   ],
   "answer": 3,
   "why": "U1 binds the 5′ splice site."
  },
  {
   "q": "In the first splicing step, the nucleophile is:",
   "options": [
    "The 3′-OH of the exon",
    "Branch-point A 2′-OH",
    "The cap",
    "Water"
   ],
   "answer": 1,
   "why": "Forming a lariat."
  },
  {
   "q": "The excised intron has the shape of a:",
   "options": [
    "Lariat",
    "Circle",
    "Cloverleaf",
    "Hairpin"
   ],
   "answer": 0,
   "why": "Then degraded."
  },
  {
   "q": "Calcitonin and CGRP arise from:",
   "options": [
    "Alternative splicing",
    "Pseudogenes",
    "RNA editing",
    "Two genes"
   ],
   "answer": 0,
   "why": "Thyroid vs nervous system."
  },
  {
   "q": "Bcl-xL and Bcl-xS are:",
   "options": [
    "Unrelated proteins",
    "Edited forms",
    "Pseudogenes",
    "Opposing splice isoforms"
   ],
   "answer": 3,
   "why": "Anti- vs pro-apoptotic."
  },
  {
   "q": "Which disease is linked to SMN1/SMN2 splicing?",
   "options": [
    "Cystic fibrosis",
    "Sickle cell disease",
    "Haemophilia",
    "Spinal muscular atrophy"
   ],
   "answer": 3,
   "why": "SMN2 is only partially functional."
  },
  {
   "q": "A-to-I RNA editing is performed by:",
   "options": [
    "ADAR",
    "PAP",
    "APOBEC",
    "CPSF"
   ],
   "answer": 0,
   "why": "C-to-U by APOBEC."
  },
  {
   "q": "Processed pseudogenes lack:",
   "options": [
    "Nucleotides",
    "Introns",
    "DNA",
    "Exons"
   ],
   "answer": 1,
   "why": "Made by retrotransposition of mRNA."
  },
  {
   "q": "Which feature is present in prokaryotic mRNA?",
   "options": [
    "Introns",
    "5′ cap",
    "Spliceosome",
    "Coupled translation"
   ],
   "answer": 3,
   "why": "No nucleus separates them."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "pre",
   "options": [
    "Polyadenylation",
    "Splicing",
    "Primary transcript",
    "5′ capping"
   ],
   "answer": 2,
   "why": "The arrow points to: Primary transcript. Pre-mRNA with no cap, no tail and all introns."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "cap",
   "options": [
    "Polyadenylation",
    "5′ capping",
    "RNA editing",
    "Primary transcript"
   ],
   "answer": 1,
   "why": "The arrow points to: 5′ capping. Added at ~20-30 nt: triphosphatase, guanylyltransferase, methyltransferase give m⁷G; protects, exports, starts translation."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "splice",
   "options": [
    "RNA editing",
    "Splicing",
    "Polyadenylation",
    "5′ capping"
   ],
   "answer": 1,
   "why": "The arrow points to: Splicing. Spliceosome of snRNPs removes introns by two transesterifications, forming a lariat, and joins exons."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "polya",
   "options": [
    "Polyadenylation",
    "Splicing",
    "RNA editing",
    "5′ capping"
   ],
   "answer": 0,
   "why": "The arrow points to: Polyadenylation. CPSF binds AAUAAA, CstF binds the GU-rich region; cleavage then poly(A) polymerase adds ~200 A; PABP binds."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "edit",
   "options": [
    "RNA editing",
    "Polyadenylation",
    "Export",
    "Splicing"
   ],
   "answer": 0,
   "why": "The arrow points to: RNA editing. Individual bases are chemically changed after transcription, e.g. A→I in glutamate receptor mRNA."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "export",
   "options": [
    "Splicing",
    "Primary transcript",
    "Export",
    "Polyadenylation"
   ],
   "answer": 2,
   "why": "The arrow points to: Export. Only fully processed mRNA leaves the nucleus; faulty RNAs are degraded."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Steps of eukaryotic mRNA processing?",
   "back": "5′ capping, polyadenylation, splicing, RNA editing, nuclear export."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Cap structure, enzymes and functions?",
   "back": "m⁷G via 5′-5′ triphosphate; triphosphatase, guanylyltransferase, methyltransferase; protects, exports, starts translation, helps first-intron splicing."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Polyadenylation machinery?",
   "back": "CPSF (AAUAAA), CstF (GU-rich), CFIm/CFIIm cleave; poly(A) polymerase adds ~200 A; PABP stabilises."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Spliceosome composition?",
   "back": "snRNAs + proteins forming snRNPs U1, U2, U4/U6, U5; recognise 5′ site, 3′ site, branch point."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Splicing chemistry?",
   "back": "Two transesterifications: branch-point A 2′-OH attacks 5′ site (lariat); exon 3′-OH attacks 3′ site (exons joined)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Mechanisms of alternative splicing?",
   "back": "Exon skipping, alternative 5′/3′ sites, intron retention, mutually exclusive exons; regulated by SR proteins and hnRNPs."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Examples of alternative splicing?",
   "back": "Fibronectin, calcitonin/CGRP, tropomyosin, Bcl-xL/Bcl-xS, CD44, Dscam, SMN1/SMN2."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "RNA editing vs alternative splicing?",
   "back": "Editing: single bases changed (A→I by ADAR, C→U by APOBEC). Splicing: exon combinations change."
  },
  {
   "id": "x8",
   "type": "text",
   "front": "Prokaryotic vs eukaryotic mRNA?",
   "back": "Prokaryotes: no introns, no cap, rare poly(A), cytoplasm, coupled translation. Eukaryotes: all processing, nucleus, separate translation."
  },
  {
   "id": "img-pre",
   "type": "image",
   "target": "pre",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Primary transcript. Pre-mRNA with no cap, no tail and all introns."
  },
  {
   "id": "img-cap",
   "type": "image",
   "target": "cap",
   "front": "What is at the arrow, and why does it matter?",
   "back": "5′ capping. Added at ~20-30 nt: triphosphatase, guanylyltransferase, methyltransferase give m⁷G; protects, exports, starts translation."
  },
  {
   "id": "img-splice",
   "type": "image",
   "target": "splice",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Splicing. Spliceosome of snRNPs removes introns by two transesterifications, forming a lariat, and joins exons."
  },
  {
   "id": "img-polya",
   "type": "image",
   "target": "polya",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Polyadenylation. CPSF binds AAUAAA, CstF binds the GU-rich region; cleavage then poly(A) polymerase adds ~200 A; PABP binds."
  },
  {
   "id": "img-edit",
   "type": "image",
   "target": "edit",
   "front": "What is at the arrow, and why does it matter?",
   "back": "RNA editing. Individual bases are chemically changed after transcription, e.g. A→I in glutamate receptor mRNA."
  },
  {
   "id": "img-export",
   "type": "image",
   "target": "export",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Export. Only fully processed mRNA leaves the nucleus; faulty RNAs are degraded."
  }
 ],
 "deeper": [
  {
   "title": "Why one gene can make several proteins",
   "html": "<p>About 20,000 human genes produce far more distinct proteins than that, largely because alternative splicing mixes and matches exons. The same calcitonin gene gives a calcium-regulating hormone in the thyroid and a pain-signalling peptide in neurons; the Bcl-x gene gives either a survival or a death signal. Which isoform is made depends on splicing factors present in each tissue.</p><p class='src'>Source: the lecture's alternative splicing table.</p>"
  },
  {
   "title": "Why the cap and tail protect mRNA",
   "html": "<p>Cells are full of exonucleases that chew RNA from either end. The inverted 5′-5′ cap and the long poly(A) tail with its binding proteins shield both ends, so an mRNA survives long enough to be translated many times. As the tail shortens with time, the mRNA becomes vulnerable and is degraded, which sets its lifespan.</p><p class='src'>Source: the lecture's cap and polyadenylation slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "RNA splicing (NHGRI glossary)",
   "url": "https://www.genome.gov/genetics-glossary/RNA-Splicing",
   "kind": "Website",
   "why": "Short illustrated definition.",
   "note": ""
  },
  {
   "title": "Eukaryotic pre-mRNA processing (Khan Academy)",
   "url": "https://www.khanacademy.org/science/ap-biology/gene-expression-and-regulation/transcription-and-rna-processing/a/eukaryotic-pre-mrna-processing",
   "kind": "Article",
   "why": "Capping, tailing and splicing.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "RNA splicing (NHGRI glossary)",
   "url": "https://www.genome.gov/genetics-glossary/RNA-Splicing"
  },
  {
   "name": "Eukaryotic pre-mRNA processing (Khan Academy)",
   "url": "https://www.khanacademy.org/science/ap-biology/gene-expression-and-regulation/transcription-and-rna-processing/a/eukaryotic-pre-mrna-processing"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["genetics1-translation"] = {
 "id": "genetics1-translation",
 "subject": "genetics1",
 "group": "Molecular genetics",
 "title": "Gene expression: translation",
 "sourceFile": "Chapter 6 Gene expression - Translation.pdf (Molecular Genetics, Pr. Amal Oudghiri)",
 "sourceUrl": "https://drive.google.com/file/d/17Nao7oL435j-6mOwyaMxW5LZJVX2n12T/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>DNA stores information in coded form; the <strong>genetic code</strong> links <strong>codons</strong> (3 nucleotides) to amino acids: 4 bases give <strong>64 codons</strong> for <strong>20 amino acids</strong>. Translation reads mRNA on ribosomes, using tRNAs as adapters. Requirements: mRNA, ribosomes, tRNAs, amino acids, aminoacyl-tRNA synthetases, translation factors, ATP, GTP, Mg²⁺.</p>"
  },
  {
   "id": "s1",
   "title": "The genetic code and mRNA",
   "html": "<p>Properties: <strong>triplet</strong>, <strong>universal</strong> (exceptions: human <strong>mitochondria</strong>, where UGA = Trp and AUA = Met; <strong>ciliates</strong>, where UAA and UAG = Gln), <strong>degenerate</strong> (several codons per amino acid), <strong>non-overlapping</strong>, with <strong>stop codons</strong>. <strong>Reading frame</strong>: 3 possible per strand, set by the start point; an <strong>open reading frame (ORF)</strong> runs from start to stop. <strong>Frameshift</strong> (insertion/deletion of 1-2 nt) changes all downstream codons (e.g. cystic fibrosis, Tay-Sachs). Mature mRNA: 5′ cap, 5′ UTR (initiation control), <strong>CDS</strong>, 3′ UTR (stability, localisation, efficiency), poly(A) tail.</p>"
  },
  {
   "id": "s2",
   "title": "tRNA, synthetases, ribosomes, wobble",
   "html": "<p><strong>tRNA</strong>: 70-95 nt, many modified bases, ~50% paired; <strong>cloverleaf</strong> in 2D (DHU loop, <strong>anticodon loop</strong>, TΨC loop, <strong>CCA 3′ end</strong> where the amino acid attaches) and <strong>L-shape</strong> in 3D. Each tRNA has a unique anticodon and carries only its cognate amino acid. <strong>Aminoacyl-tRNA synthetases</strong> 'charge' tRNAs: amino acid + ATP → aminoacyl-adenylate, then transfer to the tRNA 3′ end; each enzyme is specific. Codon (5′→3′) pairs antiparallel with anticodon (3′→5′). <strong>Ribosomes</strong>: 40S + 60S = <strong>80S</strong>; ~60% rRNA, 40% protein; free or on the RER; assembled in the nucleolus. The small subunit ensures accurate <strong>decoding</strong>; the large subunit rRNA is the <strong>peptidyl transferase</strong> (a ribozyme). Sites: <strong>A</strong> (aminoacyl), <strong>P</strong> (peptidyl), <strong>E</strong> (exit). <strong>Wobble</strong>: flexibility at the codon's <strong>3rd base</strong> (e.g. G-U) lets one tRNA read several codons, explaining degeneracy.</p>"
  },
  {
   "id": "s3",
   "title": "Initiation, elongation, termination",
   "html": "<p><strong>Initiation</strong>: eIF1, 1A, 3, 5 bind 40S; <strong>eIF2-GTP</strong> brings the initiator <strong>Met-tRNAi</strong> into the P site → <strong>43S</strong>. <strong>eIF4E</strong> binds the cap; <strong>eIF4G</strong> scaffolds; <strong>eIF4A/B</strong> helicase unwinds the 5′ UTR; eIF4G-eIF3 recruit the 43S → <strong>48S</strong>, which <strong>scans</strong> 5′→3′ to the first <strong>AUG</strong> in a <strong>Kozak</strong> context; eIF2 hydrolyses GTP and leaves; <strong>eIF5B-GTP</strong> joins the <strong>60S</strong> → <strong>80S</strong>. <strong>Elongation</strong>: <strong>eEF1A-GTP</strong> delivers aa-tRNA to the A site (correct pairing → GTP hydrolysis, fidelity checkpoint); <strong>peptidyl transferase</strong> moves the chain onto the A-site tRNA; <strong>eEF2-GTP</strong> translocates one codon (A→P, P→E) via hybrid states. <strong>Termination</strong>: stop codons <strong>UAA, UAG, UGA</strong> recognised by <strong>eRF1</strong>; <strong>eRF3-GTP</strong> escorts it; eRF1's <strong>GGQ</strong> motif releases the peptide; <strong>Rli1</strong> helps recycle subunits. <strong>Polysomes</strong>: many ribosomes on one mRNA.</p>"
  },
  {
   "id": "s4",
   "title": "Localisation and regulation",
   "html": "<p><strong>Free ribosomes</strong> make cytosolic, nuclear and mitochondrial proteins. <strong>ER-bound ribosomes</strong> make <strong>secreted and membrane</strong> proteins: a <strong>signal peptide</strong> is recognised by the <strong>signal recognition particle (SRP)</strong>, which guides the ribosome to the RER for co-translational translocation. Gene expression is regulated at transcriptional, post-transcriptional (RNA-binding proteins), translational and post-translational levels.</p>"
  }
 ],
 "exam": [
  "Codon = 3 nt; 64 codons → 20 amino acids.",
  "Code: triplet, universal (not mitochondria, ciliates), degenerate, non-overlapping.",
  "Mitochondria: UGA = Trp, AUA = Met.",
  "Frameshift (1-2 nt indel) alters all downstream codons.",
  "tRNA: cloverleaf, anticodon, CCA 3′ end; L-shape in 3D.",
  "Aminoacyl-tRNA synthetases charge tRNAs using ATP.",
  "Ribosome 80S = 40S + 60S; rRNA is the peptidyl transferase.",
  "A (aminoacyl), P (peptidyl), E (exit) sites.",
  "Wobble at the 3rd codon base explains degeneracy.",
  "Initiation: eIF2-GTP + Met-tRNAi, eIF4E cap, scanning to AUG (Kozak), eIF5B joins 60S.",
  "Elongation: eEF1A-GTP delivers, eEF2-GTP translocates.",
  "Termination: UAA, UAG, UGA; eRF1 (GGQ) + eRF3.",
  "SRP targets signal peptides to the RER."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "The ribosome during elongation",
   "caption": "A, P and E sites and one elongation cycle. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"720\" y1=\"70\" x2=\"280\" y2=\"200\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"100\" x2=\"380\" y2=\"170\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"200\" x2=\"520\" y2=\"200\"/>",
   "parts": {
    "a": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"520\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "A site: incoming",
      "aminoacyl-tRNA (eEF1A-GTP)"
     ],
     "lx": 620.0,
     "ly": 68.0
    },
    "p": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"280\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "P site: tRNA with",
      "growing peptide"
     ],
     "lx": 380.0,
     "ly": 68.0
    },
    "e": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"40\" y=\"40\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "E site: empty",
      "tRNA exits"
     ],
     "lx": 140.0,
     "ly": 68.0
    },
    "ptc": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"280\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Peptidyl transferase",
      "(60S rRNA ribozyme)"
     ],
     "lx": 380.0,
     "ly": 198.0
    },
    "tl": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"520\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Translocation by",
      "eEF2-GTP: 1 codon"
     ],
     "lx": 620.0,
     "ly": 198.0
    },
    "stop": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"40\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Stop codon: eRF1",
      "(GGQ) + eRF3-GTP"
     ],
     "lx": 140.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "a": [
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
    "ptc": [
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
    "tl": [
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
    "stop": [
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
   "root": "Translation",
   "branches": [
    [
     "Genetic code",
     [
      "Triplet, 64 codons",
      "Degenerate, universal*",
      "Mitochondria: UGA = Trp",
      "Frameshift"
     ]
    ],
    [
     "Players",
     [
      "mRNA: cap, UTRs, CDS, tail",
      "tRNA: anticodon, CCA",
      "Synthetases (ATP)",
      "Ribosome 80S: A, P, E"
     ]
    ],
    [
     "Initiation",
     [
      "eIF2-GTP + Met-tRNAi",
      "eIF4E cap, scanning",
      "Kozak AUG",
      "eIF5B → 80S"
     ]
    ],
    [
     "Elongation",
     [
      "eEF1A-GTP delivery",
      "Peptidyl transferase (rRNA)",
      "eEF2-GTP translocation"
     ]
    ],
    [
     "Termination",
     [
      "UAA, UAG, UGA",
      "eRF1 (GGQ) + eRF3"
     ]
    ],
    [
     "Localisation",
     [
      "Free ribosomes",
      "SRP → RER"
     ]
    ]
   ]
  }
 },
 "mcqs": [
  {
   "q": "How many codons does the genetic code contain?",
   "options": [
    "61",
    "4",
    "64",
    "20"
   ],
   "answer": 2,
   "why": "For 20 amino acids."
  },
  {
   "q": "The genetic code is degenerate because:",
   "options": [
    "Codons overlap",
    "Several codons code the same amino acid",
    "It is not universal",
    "One codon codes several amino acids"
   ],
   "answer": 1,
   "why": "Explained by wobble."
  },
  {
   "q": "In human mitochondria, UGA codes for:",
   "options": [
    "Methionine",
    "Glutamine",
    "Stop",
    "Tryptophan"
   ],
   "answer": 3,
   "why": "AUA codes Met."
  },
  {
   "q": "A frameshift mutation is caused by:",
   "options": [
    "A silent change",
    "A single base substitution",
    "Codon degeneracy",
    "Insertion or deletion of 1-2 nucleotides"
   ],
   "answer": 3,
   "why": "All downstream codons change."
  },
  {
   "q": "The amino acid attaches to the tRNA at the:",
   "options": [
    "CCA 3′ end",
    "DHU loop",
    "5′ phosphate",
    "Anticodon loop"
   ],
   "answer": 0,
   "why": "Via aminoacyl-tRNA synthetase."
  },
  {
   "q": "Aminoacyl-tRNA synthetases activate amino acids using:",
   "options": [
    "FAD",
    "GTP",
    "ATP",
    "NADH"
   ],
   "answer": 2,
   "why": "Forming aminoacyl-adenylate."
  },
  {
   "q": "The eukaryotic ribosome is:",
   "options": [
    "100S",
    "70S (30S + 50S)",
    "60S",
    "80S (40S + 60S)"
   ],
   "answer": 3,
   "why": "About 60% rRNA."
  },
  {
   "q": "Peptide bond formation is catalysed by:",
   "options": [
    "A ribosomal protein",
    "eEF2",
    "Large-subunit rRNA",
    "tRNA"
   ],
   "answer": 2,
   "why": "Peptidyl transferase centre."
  },
  {
   "q": "Which site holds the tRNA with the growing peptide?",
   "options": [
    "E site",
    "P site",
    "A site",
    "Decoding site"
   ],
   "answer": 1,
   "why": "A: incoming; E: exit."
  },
  {
   "q": "Wobble occurs at which codon position?",
   "options": [
    "All",
    "Third",
    "Second",
    "First"
   ],
   "answer": 1,
   "why": "Allows G-U pairing."
  },
  {
   "q": "Which factor brings the initiator Met-tRNAi to the 40S?",
   "options": [
    "eIF2-GTP",
    "eRF1",
    "eIF4E",
    "eEF1A"
   ],
   "answer": 0,
   "why": "Ternary complex."
  },
  {
   "q": "Which factor binds the 5′ cap?",
   "options": [
    "eIF4E",
    "eIF2",
    "eEF2",
    "eIF5B"
   ],
   "answer": 0,
   "why": "eIF4G is the scaffold."
  },
  {
   "q": "The scanning ribosome recognises the first AUG in a:",
   "options": [
    "TATA context",
    "Kozak context",
    "Shine-Dalgarno sequence",
    "Poly(A) signal"
   ],
   "answer": 1,
   "why": "Shine-Dalgarno is bacterial."
  },
  {
   "q": "Translocation is driven by:",
   "options": [
    "eEF1A-GTP",
    "eRF3",
    "eIF2-GTP",
    "eEF2-GTP"
   ],
   "answer": 3,
   "why": "The ribosome moves one codon."
  },
  {
   "q": "Which are the stop codons?",
   "options": [
    "UAA, UAG, UGA",
    "AUG, UGG, UAA",
    "AUG, UAA, UGA",
    "UUU, UAG, UGA"
   ],
   "answer": 0,
   "why": "Recognised by eRF1."
  },
  {
   "q": "The peptide is released by eRF1 through its:",
   "options": [
    "Leucine zipper",
    "Zinc finger",
    "GGQ motif",
    "CCA end"
   ],
   "answer": 2,
   "why": "In the peptidyl transferase centre."
  },
  {
   "q": "Secreted proteins are made on:",
   "options": [
    "Mitochondrial ribosomes",
    "ER-bound ribosomes guided by SRP",
    "The nucleolus",
    "Free ribosomes"
   ],
   "answer": 1,
   "why": "Signal peptide recognised by SRP."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "a",
   "options": [
    "E site",
    "Peptidyl transferase",
    "A site",
    "P site"
   ],
   "answer": 2,
   "why": "The arrow points to: A site. Aminoacyl site: the charged tRNA arrives as eEF1A-GTP-aa-tRNA; correct pairing triggers GTP hydrolysis (fidelity checkpoint)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "p",
   "options": [
    "A site",
    "P site",
    "Translocation",
    "Peptidyl transferase"
   ],
   "answer": 1,
   "why": "The arrow points to: P site. Peptidyl site: holds the tRNA carrying the growing chain; the initiator Met-tRNAi starts here."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "e",
   "options": [
    "Peptidyl transferase",
    "E site",
    "Translocation",
    "P site"
   ],
   "answer": 1,
   "why": "The arrow points to: E site. Exit site: the deacylated tRNA leaves."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ptc",
   "options": [
    "Peptidyl transferase",
    "P site",
    "Translocation",
    "E site"
   ],
   "answer": 0,
   "why": "The arrow points to: Peptidyl transferase. The A-site amino group attacks the P-site ester bond; the chain moves onto the A-site tRNA. Catalysed by rRNA."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "tl",
   "options": [
    "Translocation",
    "Termination",
    "Peptidyl transferase",
    "E site"
   ],
   "answer": 0,
   "why": "The arrow points to: Translocation. eEF2-GTP moves the ribosome 3 nucleotides: A→P, P→E."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "stop",
   "options": [
    "A site",
    "Peptidyl transferase",
    "Termination",
    "E site"
   ],
   "answer": 2,
   "why": "The arrow points to: Termination. eRF1 recognises UAA, UAG, UGA; its GGQ motif releases the peptide; eRF3-GTP escorts it; ribosome recycled."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Properties of the genetic code?",
   "back": "Triplet, universal (exceptions: mitochondria, ciliates), degenerate, non-overlapping, with stop codons; 64 codons for 20 amino acids."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Mitochondrial and ciliate code exceptions?",
   "back": "Mitochondria: UGA = Trp, AUA = Met. Ciliates: UAA, UAG = Gln."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "ORF and frameshift?",
   "back": "ORF: continuous codons from start to stop. Frameshift: 1-2 nt insertion/deletion changes all downstream codons (CF, Tay-Sachs)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "tRNA structure?",
   "back": "70-95 nt; cloverleaf with DHU loop, anticodon loop, TΨC loop, CCA 3′ end; L-shaped in 3D; modified bases."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Role of aminoacyl-tRNA synthetases?",
   "back": "Charge each tRNA with its amino acid: aa + ATP → aminoacyl-adenylate → transfer to tRNA 3′ end."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Ribosome composition and sites?",
   "back": "80S = 40S (decoding) + 60S (peptidyl transferase rRNA); ~60% rRNA; A, P, E sites."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "What is wobble?",
   "back": "Flexible pairing at the codon's 3rd base (e.g. G-U), letting one tRNA read several codons."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Eukaryotic initiation steps?",
   "back": "43S (40S + eIF1/1A/3/5 + eIF2-GTP-Met-tRNAi) → eIF4E/4G/4A bind cap → 48S scans to AUG (Kozak) → eIF2 GTP hydrolysis → eIF5B joins 60S → 80S."
  },
  {
   "id": "x8",
   "type": "text",
   "front": "Elongation cycle?",
   "back": "eEF1A-GTP delivers aa-tRNA to A site → peptidyl transfer → eEF2-GTP translocation (A→P, P→E)."
  },
  {
   "id": "x9",
   "type": "text",
   "front": "Termination?",
   "back": "Stop codon (UAA/UAG/UGA) → eRF1 (GGQ) with eRF3-GTP releases peptide → Rli1 recycles subunits."
  },
  {
   "id": "x10",
   "type": "text",
   "front": "Free vs ER-bound ribosomes?",
   "back": "Free: cytosolic, nuclear, mitochondrial proteins. ER-bound: secreted and membrane proteins, targeted by SRP."
  },
  {
   "id": "img-a",
   "type": "image",
   "target": "a",
   "front": "What is at the arrow, and why does it matter?",
   "back": "A site. Aminoacyl site: the charged tRNA arrives as eEF1A-GTP-aa-tRNA; correct pairing triggers GTP hydrolysis (fidelity checkpoint)."
  },
  {
   "id": "img-p",
   "type": "image",
   "target": "p",
   "front": "What is at the arrow, and why does it matter?",
   "back": "P site. Peptidyl site: holds the tRNA carrying the growing chain; the initiator Met-tRNAi starts here."
  },
  {
   "id": "img-e",
   "type": "image",
   "target": "e",
   "front": "What is at the arrow, and why does it matter?",
   "back": "E site. Exit site: the deacylated tRNA leaves."
  },
  {
   "id": "img-ptc",
   "type": "image",
   "target": "ptc",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Peptidyl transferase. The A-site amino group attacks the P-site ester bond; the chain moves onto the A-site tRNA. Catalysed by rRNA."
  },
  {
   "id": "img-tl",
   "type": "image",
   "target": "tl",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Translocation. eEF2-GTP moves the ribosome 3 nucleotides: A→P, P→E."
  },
  {
   "id": "img-stop",
   "type": "image",
   "target": "stop",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Termination. eRF1 recognises UAA, UAG, UGA; its GGQ motif releases the peptide; eRF3-GTP escorts it; ribosome recycled."
  }
 ],
 "deeper": [
  {
   "title": "Why wobble saves tRNAs",
   "html": "<p>There are 61 sense codons, but cells need far fewer tRNAs because the third codon base pairs loosely. A tRNA with G at the matching position can read codons ending in C or U, for example. This flexibility is why many amino acids are encoded by codons differing only in the third base, and why many third-base mutations are silent.</p><p class='src'>Source: the lecture's wobble hypothesis slide.</p>"
  },
  {
   "title": "Why rRNA, not protein, makes peptide bonds",
   "html": "<p>The peptidyl transferase centre of the large subunit is built of rRNA, with no protein close enough to catalyse the reaction. The ribosome is therefore a ribozyme, which supports the idea that RNA both stored information and catalysed reactions before proteins evolved.</p><p class='src'>Source: the lecture's rRNA function slide.</p>"
  }
 ],
 "resources": [
  {
   "title": "Genetic code (NHGRI glossary)",
   "url": "https://www.genome.gov/genetics-glossary/Genetic-Code",
   "kind": "Website",
   "why": "Codons and the code table.",
   "note": ""
  },
  {
   "title": "Stages of translation (Khan Academy)",
   "url": "https://www.khanacademy.org/science/ap-biology/gene-expression-and-regulation/translation/a/the-stages-of-translation",
   "kind": "Article",
   "why": "Initiation, elongation and termination.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Genetic code (NHGRI glossary)",
   "url": "https://www.genome.gov/genetics-glossary/Genetic-Code"
  },
  {
   "name": "Stages of translation (Khan Academy)",
   "url": "https://www.khanacademy.org/science/ap-biology/gene-expression-and-regulation/translation/a/the-stages-of-translation"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["genetics1-mutation"] = {
 "id": "genetics1-mutation",
 "subject": "genetics1",
 "group": "Molecular genetics",
 "title": "Gene mutations",
 "sourceFile": "Chapter 7 Gene mutation.pdf (Molecular Genetics, Pr. Amal Oudghiri)",
 "sourceUrl": "https://drive.google.com/file/d/1G-7TDtGHjjqzSchmJ2hsUiaRGCFLD248/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p><strong>Gene mutations</strong> are permanent changes in a cell's DNA sequence that leave the karyotype normal. Scale matters: single nucleotides to ~1 kb are studied by molecular genetics; hundreds of kb to 2-5 Mb by molecular cytogenetics; larger by cytogenetics (genome ~3 × 10⁹ bp, chromosome ~2 × 10⁸, sub-band ~2 × 10⁶, average gene ~2 × 10⁴, exon 50-1,000 bp). Human mutation frequency: <strong>10⁻⁴ to 10⁻⁸ per gene per generation (average ~10⁻⁶)</strong>, higher for large genes and at <strong>hot spots</strong> such as <strong>CpG</strong> sites (e.g. achondroplasia).</p>"
  },
  {
   "id": "s1",
   "title": "Germline, somatic, mosaicism, causes",
   "html": "<p><strong>Germline</strong> mutations occur in gametes, are transmitted and present in all cells of the offspring. <strong>Somatic</strong> mutations occur in body cells, affect only the individual (the mutated cell's clone) and are not inherited. <strong>Mosaicism</strong>: cells with different genotypes in one individual, from mutations during development: <strong>somatic</strong> (early embryogenesis) or <strong>germline</strong> (in the developing gonads). <strong>Spontaneous</strong> mutations arise from replication errors (~1 error per 100,000 nucleotides before proofreading); <strong>induced</strong> mutations come from physical or chemical mutagens.</p>"
  },
  {
   "id": "s2",
   "title": "Types of change",
   "html": "<p>Genome anomalies range from <strong>gene (sequence) mutations</strong> to <strong>chromosomal</strong> structural rearrangements (deletions, duplications, inversions, translocations) and <strong>numerical</strong> anomalies. Gene mutations include deletions, duplications, insertions, substitutions and interruptions by rearrangement; <strong>point mutations</strong> affect one base pair. <strong>Substitutions</strong>: <strong>transitions</strong> (purine→purine or pyrimidine→pyrimidine; about <strong>twice as common</strong>) and <strong>transversions</strong> (purine↔pyrimidine). Non-pathogenic variation: <strong>SNVs/SNPs</strong> (SNP > 1% frequency), <strong>STRs</strong> (microsatellites, 1-4 nt repeats; forensics), <strong>VNTRs</strong> (minisatellites, 10-60 nt; fingerprinting), <strong>CNVs</strong> (copy number, gene dosage). CpG islands are hot spots for C→T transitions.</p>"
  },
  {
   "id": "s3",
   "title": "Consequences",
   "html": "<p>Effects depend on location: <strong>exons</strong> (truncated, unstable or dominant-negative protein), <strong>promoters/regulatory regions</strong> (altered expression level or timing), <strong>splice sites</strong> (exon skipping, intron retention), <strong>3′ UTR</strong> (mRNA instability). Functional classes: <strong>loss-of-function</strong>, <strong>gain-of-function</strong>, hypomorphic (partial loss), hypermorphic (increased), conditional, lethal, <strong>dominant-negative</strong> (mutant protein blocks the normal one in multimers), neutral.</p><p><strong>Coding substitutions</strong>: <strong>synonymous/silent</strong> (same amino acid; usually neutral, sometimes affects splicing, e.g. NOD2 in Crohn's), <strong>missense</strong> (conservative or not; <strong>sickle cell disease</strong>: HBB <strong>Glu → Val</strong>, haemoglobin polymerises; 80% of rare diseases are genetic), <strong>nonsense</strong> (premature stop TAA/TAG/TGA; <strong>Duchenne</strong> DMD; β-thalassaemia codon 39 C→U turning Gln into a stop), <strong>readthrough</strong> (stop → sense codon, extended protein). <strong>Frameshifts</strong> (Tay-Sachs, HEXA), <strong>regulatory</strong> mutations (some β-thalassaemias), <strong>dominant-negative</strong> (Marfan, FBN1).</p>"
  }
 ],
 "exam": [
  "Gene mutation: permanent sequence change, normal karyotype.",
  "Frequency 10⁻⁴-10⁻⁸ per gene per generation (~10⁻⁶); CpG hot spots.",
  "Germline: in gametes, inherited. Somatic: body cells, not inherited.",
  "Mosaicism: somatic (embryo) or germline (gonads).",
  "Spontaneous (replication errors) vs induced (mutagens).",
  "Transition (same base class) ≈ 2× more common than transversion.",
  "SNP > 1%; STR 1-4 nt repeats; VNTR 10-60 nt; CNV copy number.",
  "Silent, missense (sickle cell Glu→Val), nonsense (DMD), readthrough.",
  "Frameshift: Tay-Sachs (HEXA).",
  "Dominant-negative: Marfan (FBN1).",
  "Loss vs gain of function; hypo-/hypermorphic."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Point substitutions and their effects",
   "caption": "One base changed, four possible outcomes. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"50\" x2=\"20\" y2=\"180\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"80\" x2=\"290\" y2=\"150\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"380\" y1=\"80\" x2=\"475\" y2=\"150\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"480\" y1=\"50\" x2=\"570\" y2=\"180\"/>",
   "parts": {
    "sub": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"280\" y=\"20\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Base substitution",
      "(transition or transversion)"
     ],
     "lx": 380.0,
     "ly": 48.0
    },
    "silent": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"20\" y=\"150\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Silent: same",
      "amino acid"
     ],
     "lx": 105.0,
     "ly": 178.0
    },
    "mis": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"200\" y=\"150\" width=\"180\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Missense: new amino acid",
      "(sickle cell: Glu→Val)"
     ],
     "lx": 290.0,
     "ly": 178.0
    },
    "non": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"390\" y=\"150\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Nonsense: premature",
      "stop (DMD)"
     ],
     "lx": 475.0,
     "ly": 178.0
    },
    "read": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"570\" y=\"150\" width=\"170\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Readthrough: stop →",
      "sense, longer protein"
     ],
     "lx": 655.0,
     "ly": 178.0
    },
    "fs": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"280\" y=\"280\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Indel of 1-2 nt:",
      "frameshift (Tay-Sachs)"
     ],
     "lx": 380.0,
     "ly": 308.0
    }
   },
   "arrows": {
    "sub": [
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
    "silent": [
     {
      "t": [
       20.0,
       158.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "mis": [
     {
      "t": [
       200.0,
       158.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "non": [
     {
      "t": [
       390.0,
       158.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "read": [
     {
      "t": [
       570.0,
       158.0
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
       280.0,
       288.0
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
   "q": "A gene mutation, by definition, leaves the karyotype:",
   "options": [
    "Absent",
    "Abnormal",
    "Duplicated",
    "Normal"
   ],
   "answer": 3,
   "why": "It is a sequence change."
  },
  {
   "q": "The average human mutation frequency per gene per generation is about:",
   "options": [
    "10⁻¹²",
    "1",
    "10⁻⁶",
    "10⁻²"
   ],
   "answer": 2,
   "why": "Range 10⁻⁴ to 10⁻⁸."
  },
  {
   "q": "A classic mutation hot spot is:",
   "options": [
    "CpG site",
    "Telomere",
    "Poly(A) tail",
    "TATA box"
   ],
   "answer": 0,
   "why": "Prone to C→T transitions."
  },
  {
   "q": "A somatic mutation:",
   "options": [
    "Is transmitted to offspring",
    "Is in gametes",
    "Affects only the individual",
    "Is always lethal"
   ],
   "answer": 2,
   "why": "Not inherited."
  },
  {
   "q": "Germline mosaicism arises during:",
   "options": [
    "Development of the gonads",
    "Transcription",
    "Fertilisation only",
    "Old age"
   ],
   "answer": 0,
   "why": "Somatic mosaicism arises early in the embryo."
  },
  {
   "q": "A transition is:",
   "options": [
    "Purine ↔ pyrimidine",
    "Same-class base swap",
    "A deletion",
    "An insertion"
   ],
   "answer": 1,
   "why": "About twice as common as transversions."
  },
  {
   "q": "An SNP is a variant with population frequency above:",
   "options": [
    "50%",
    "0.1%",
    "1%",
    "10%"
   ],
   "answer": 2,
   "why": "Mostly non-pathogenic."
  },
  {
   "q": "STRs (microsatellites) are repeats of:",
   "options": [
    "Whole genes",
    "10-60 nucleotides",
    "1,000 nucleotides",
    "1-4 nucleotides"
   ],
   "answer": 3,
   "why": "Used in forensics."
  },
  {
   "q": "A silent mutation:",
   "options": [
    "Creates a stop codon",
    "Does not change the amino acid",
    "Shifts the reading frame",
    "Deletes an exon"
   ],
   "answer": 1,
   "why": "Often at the 3rd codon base."
  },
  {
   "q": "Sickle cell disease results from which type of mutation?",
   "options": [
    "Missense (Glu→Val)",
    "Nonsense",
    "Silent",
    "Frameshift"
   ],
   "answer": 0,
   "why": "In the β-globin (HBB) gene."
  },
  {
   "q": "Duchenne muscular dystrophy is cited as an example of:",
   "options": [
    "Nonsense",
    "Readthrough",
    "Silent",
    "Missense"
   ],
   "answer": 0,
   "why": "Truncated dystrophin."
  },
  {
   "q": "A readthrough mutation:",
   "options": [
    "Creates a premature stop",
    "Deletes a base",
    "Changes the promoter",
    "Stop → sense codon"
   ],
   "answer": 3,
   "why": "C-terminally extended protein."
  },
  {
   "q": "Tay-Sachs disease is cited as an example of:",
   "options": [
    "Regulatory mutation",
    "Readthrough",
    "Silent mutation",
    "Frameshift"
   ],
   "answer": 3,
   "why": "HEXA gene."
  },
  {
   "q": "A dominant-negative mutation:",
   "options": [
    "Blocks the normal protein",
    "Is always silent",
    "Increases normal function",
    "Has no effect"
   ],
   "answer": 0,
   "why": "E.g. Marfan (FBN1)."
  },
  {
   "q": "A mutation in a splice site typically causes:",
   "options": [
    "Faster transcription",
    "Exon skipping or intron retention",
    "A silent change",
    "A longer poly(A) tail"
   ],
   "answer": 1,
   "why": "Aberrant mRNA splicing."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "sub",
   "options": [
    "Missense",
    "Nonsense",
    "Synonymous (silent)",
    "Substitution"
   ],
   "answer": 3,
   "why": "The arrow points to: Substitution. Transition: purine↔purine or pyrimidine↔pyrimidine (twice as common). Transversion: purine↔pyrimidine."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "silent",
   "options": [
    "Nonsense",
    "Readthrough",
    "Synonymous (silent)",
    "Substitution"
   ],
   "answer": 2,
   "why": "The arrow points to: Synonymous (silent). Uses code degeneracy, often the 3rd base; usually neutral, occasionally affects splicing or regulation (e.g. NOD2, Crohn's)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "mis",
   "options": [
    "Nonsense",
    "Missense",
    "Readthrough",
    "Synonymous (silent)"
   ],
   "answer": 1,
   "why": "The arrow points to: Missense. Changes one amino acid; conservative or non-conservative. Sickle cell disease: HBB Glu→Val."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "non",
   "options": [
    "Readthrough",
    "Nonsense",
    "Missense",
    "Synonymous (silent)"
   ],
   "answer": 1,
   "why": "The arrow points to: Nonsense. Creates a stop codon: truncated, often degraded protein. Duchenne (DMD); β-thalassaemia codon 39 (Gln→stop)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "read",
   "options": [
    "Readthrough",
    "Nonsense",
    "Missense",
    "Frameshift"
   ],
   "answer": 0,
   "why": "The arrow points to: Readthrough. A stop codon becomes a sense codon, giving a C-terminally extended protein."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "fs",
   "options": [
    "Substitution",
    "Missense",
    "Frameshift",
    "Nonsense"
   ],
   "answer": 2,
   "why": "The arrow points to: Frameshift. Insertion or deletion not multiple of 3 shifts the reading frame; e.g. Tay-Sachs (HEXA)."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Define gene mutation and its frequency.",
   "back": "Permanent DNA sequence change with a normal karyotype; 10⁻⁴-10⁻⁸ per gene per generation (~10⁻⁶), higher in large genes and at CpG hot spots."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Germline vs somatic mutation?",
   "back": "Germline: in gametes, inherited, in all offspring cells. Somatic: in body cells, limited to the individual and the mutant clone."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "What is mosaicism?",
   "back": "Coexistence of cells with different genotypes in one individual: somatic (early embryo) or germline (gonads)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Transition vs transversion?",
   "back": "Transition: purine↔purine or pyrimidine↔pyrimidine (≈2× more common). Transversion: purine↔pyrimidine."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Non-pathogenic variants?",
   "back": "SNV/SNP (> 1%), STR (1-4 nt), VNTR (10-60 nt), CNV (copy number)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Coding substitution types with examples?",
   "back": "Silent (NOD2), missense (sickle cell HBB Glu→Val), nonsense (DMD; β-thal codon 39), readthrough (extended protein)."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Consequences by gene region?",
   "back": "Exon: truncated/dominant-negative protein. Promoter: altered expression. Splice site: exon skipping, intron retention. 3′ UTR: mRNA instability."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Functional classes of mutations?",
   "back": "Loss-of-function, gain-of-function, hypomorphic, hypermorphic, conditional, lethal, dominant-negative, neutral."
  },
  {
   "id": "img-sub",
   "type": "image",
   "target": "sub",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Substitution. Transition: purine↔purine or pyrimidine↔pyrimidine (twice as common). Transversion: purine↔pyrimidine."
  },
  {
   "id": "img-silent",
   "type": "image",
   "target": "silent",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Synonymous (silent). Uses code degeneracy, often the 3rd base; usually neutral, occasionally affects splicing or regulation (e.g. NOD2, Crohn's)."
  },
  {
   "id": "img-mis",
   "type": "image",
   "target": "mis",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Missense. Changes one amino acid; conservative or non-conservative. Sickle cell disease: HBB Glu→Val."
  },
  {
   "id": "img-non",
   "type": "image",
   "target": "non",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Nonsense. Creates a stop codon: truncated, often degraded protein. Duchenne (DMD); β-thalassaemia codon 39 (Gln→stop)."
  },
  {
   "id": "img-read",
   "type": "image",
   "target": "read",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Readthrough. A stop codon becomes a sense codon, giving a C-terminally extended protein."
  },
  {
   "id": "img-fs",
   "type": "image",
   "target": "fs",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Frameshift. Insertion or deletion not multiple of 3 shifts the reading frame; e.g. Tay-Sachs (HEXA)."
  }
 ],
 "deeper": [
  {
   "title": "Why CpG sites mutate so often",
   "html": "<p>Cytosines in CpG pairs are often methylated. When a methylated cytosine loses its amino group spontaneously it becomes thymine, a normal DNA base that repair enzymes can miss, so a C→T transition is fixed. That is why CpG sites are mutation hot spots in many disease genes.</p><p class='src'>Source: the lecture's mutation frequency and hot-spot slides.</p>"
  },
  {
   "title": "Why one amino acid can cause sickle cell disease",
   "html": "<p>Replacing glutamic acid (charged) with valine (hydrophobic) at one position of β-globin creates a sticky patch on haemoglobin. When oxygen is low, the molecules stick together into long polymers that deform red cells into sickles, which block small vessels and are destroyed early. A single missense change thus explains a whole disease.</p><p class='src'>Source: the lecture's sickle cell example.</p>"
  }
 ],
 "resources": [
  {
   "title": "Mutation (NHGRI glossary)",
   "url": "https://www.genome.gov/genetics-glossary/Mutation",
   "kind": "Website",
   "why": "Short definition with examples.",
   "note": ""
  },
  {
   "title": "Sickle cell disease (NHS)",
   "url": "https://www.nhs.uk/conditions/sickle-cell-disease/",
   "kind": "Article",
   "why": "The classic missense-mutation disease.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Mutation (NHGRI glossary)",
   "url": "https://www.genome.gov/genetics-glossary/Mutation"
  },
  {
   "name": "Sickle cell disease (NHS)",
   "url": "https://www.nhs.uk/conditions/sickle-cell-disease/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["genetics1-chromosomal"] = {
 "id": "genetics1-chromosomal",
 "subject": "genetics1",
 "group": "Molecular genetics",
 "title": "Chromosomal anomalies: detection and characterisation",
 "sourceFile": "Chapter 8 Chromosomal Anomalies - Techniques for Detection and Characterization.pdf (Molecular Genetics, Pr. Amal Oudghiri)",
 "sourceUrl": "https://drive.google.com/file/d/1LaZv0ZE2foOZymy9-w7xPYQKAiqIA59I/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>Chromosomal anomalies are classified by <strong>origin</strong>: <strong>constitutional</strong> (in all organs; the accident happened in a gamete or just after fertilisation, de novo) vs <strong>acquired</strong> (one organ, during life, e.g. in a cancer); by <strong>distribution</strong>: <strong>homogeneous</strong> (all cells) vs <strong>mosaic</strong> (some cells; especially sex chromosomes; from post-zygotic nondisjunction); and by <strong>type</strong>: <strong>numerical</strong> (aneuploidy, polyploidy) or <strong>structural</strong>.</p>"
  },
  {
   "id": "s1",
   "title": "Numerical anomalies",
   "html": "<p><strong>Aneuploidy</strong>: loss (<strong>monosomy</strong>) or gain (<strong>trisomy</strong>) of whole chromosomes, from <strong>nondisjunction</strong> in meiosis I (homologues) or II (sister chromatids); causes developmental delay, malformations, infertility. Autosomal trisomies: <strong>13 (Patau)</strong>: usually non-viable, microphthalmia, cleft lip/palate, polydactyly, heart defects; <strong>18 (Edwards)</strong>: ~1:5,000, high neonatal mortality, rocker-bottom feet, overlapping fingers; <strong>21 (Down)</strong>: ~<strong>1:700</strong>, viable into adulthood, mild-moderate intellectual disability, hypotonia, typical face, AV canal defects. Sex chromosomes: <strong>47,XXY Klinefelter</strong> (~1:500 males; tall, small testes, infertility, normal cognition), <strong>47,XXX</strong> (~1:1,000 females; tall, mostly normal), <strong>47,XYY</strong> (~1:840 males; tall, fertile), <strong>45,X Turner</strong> (~1:2,000 females; short stature, gonadal dysgenesis, primary amenorrhoea, cardiovascular anomalies).</p><p><strong>Polyploidy</strong>: extra complete sets; rare and usually lethal; most often <strong>triploidy (3n = 69)</strong> causing early miscarriage. Mechanisms: <strong>digyny</strong> (diploid egg from meiosis I or II nondisjunction + normal sperm) and <strong>diandry</strong> (two paternal sets: <strong>dispermy</strong>, two sperm; or <strong>diplospermy</strong>, a diploid sperm).</p>"
  },
  {
   "id": "s2",
   "title": "Structural anomalies",
   "html": "<p>Chromosome breaks with abnormal rejoining; <strong>balanced</strong> (no net gain/loss; carrier usually normal but can make unbalanced gametes → miscarriage or malformed child) or <strong>unbalanced</strong> (partial trisomy/monosomy; de novo or from a parent's balanced rearrangement). <strong>One chromosome</strong>: <strong>terminal deletion</strong> (one break; needs a neotelomere), <strong>interstitial deletion</strong> (two breaks in one arm; e.g. 46,XY,4p-: dysmorphia, intellectual disability), <strong>isochromosome</strong> (two identical arms; e.g. 46,X,i(Xq) in Turner; i(12p)), <strong>ring chromosome</strong> (breaks on both arms fused; e.g. r(13)), <strong>inversion</strong> (segment rotated 180°: <strong>paracentric</strong> excludes, <strong>pericentric</strong> includes the centromere), <strong>duplication</strong> (partial trisomy; tandem, reverse, terminal). <strong>Two chromosomes</strong>: <strong>insertion</strong> (usually balanced), <strong>Robertsonian translocation</strong> (fusion of two <strong>acrocentric</strong> chromosomes 13, 14, 15, 21, 22 with loss of short arms; carriers have <strong>45 chromosomes</strong> and are normal but risk trisomic offspring, e.g. t(14;21) → Down syndrome; 6 gamete types), <strong>reciprocal translocation</strong> (exchange between non-homologous chromosomes; balanced carriers, risk of partial trisomy/monosomy).</p>"
  },
  {
   "id": "s3",
   "title": "Detection techniques",
   "html": "<p><strong>Karyotype</strong>: whole genome, low resolution (<strong>5-10 Mb</strong>), large numerical and structural anomalies, needs dividing cells, banding (550-850 bands). <strong>FISH</strong>: targeted probe, <strong>100 kb-1 Mb</strong>, rapid interphase aneuploidy detection, microdeletions, needs a prior hypothesis. <strong>Chromosomal microarray (CMA)</strong>: genome-wide, <strong>10-50 kb</strong>, detects <strong>CNVs</strong> and regions of homozygosity (SNP arrays) but <strong>not balanced rearrangements</strong>; <strong>first-line</strong> for developmental delay, autism, intellectual disability. <strong>MLPA</strong>: gene-level copy number, exon deletions/duplications, rapid, cheap, targeted (DMD, MSH2, BRCA1). <strong>NGS</strong>: nucleotide resolution (SNVs, indels), exome or panels, some small CNVs, limited for large structural anomalies; complements CMA and karyotype.</p>"
  }
 ],
 "exam": [
  "Constitutional (all tissues) vs acquired (one organ, e.g. cancer).",
  "Homogeneous vs mosaic (post-zygotic nondisjunction).",
  "Aneuploidy from meiotic nondisjunction: monosomy, trisomy.",
  "Trisomy 21 ~1:700 (viable); 18 ~1:5,000; 13 usually non-viable.",
  "47,XXY Klinefelter; 45,X Turner; 47,XXX; 47,XYY.",
  "Triploidy (69): digyny or diandry (dispermy, diplospermy).",
  "Balanced carriers are normal but make unbalanced gametes.",
  "Deletions, isochromosome, ring, inversion (para-/pericentric), duplication.",
  "Robertsonian: two acrocentrics (13, 14, 15, 21, 22), 45 chromosomes; t(14;21) → Down risk.",
  "Karyotype 5-10 Mb; FISH 100 kb-1 Mb; CMA 10-50 kb (not balanced); MLPA exons; NGS nucleotides."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Detecting chromosomal anomalies: resolution ladder",
   "caption": "From whole karyotype to single nucleotides. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"180\" y1=\"70\" x2=\"195\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"355\" y1=\"70\" x2=\"370\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"530\" y1=\"70\" x2=\"545\" y2=\"70\"/><line stroke=\"#8a8a8a\" stroke-width=\"2\" marker-end=\"url(#ah)\" x1=\"705\" y1=\"70\" x2=\"280\" y2=\"200\"/>",
   "parts": {
    "kar": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Karyotype:",
      "5-10 Mb, whole genome"
     ],
     "lx": 100.0,
     "ly": 68.0
    },
    "fish": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"195\" y=\"40\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "FISH: 100 kb-1 Mb,",
      "targeted probe"
     ],
     "lx": 275.0,
     "ly": 68.0
    },
    "cma": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"370\" y=\"40\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Microarray (CMA):",
      "10-50 kb, CNVs"
     ],
     "lx": 450.0,
     "ly": 68.0
    },
    "mlpa": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"545\" y=\"40\" width=\"160\" height=\"60\" rx=\"10\"/>",
     "label": [
      "MLPA: exon-level",
      "copy number"
     ],
     "lx": 625.0,
     "ly": 68.0
    },
    "ngs": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"280\" y=\"170\" width=\"200\" height=\"60\" rx=\"10\"/>",
     "label": [
      "NGS: nucleotide",
      "level (SNVs, indels)"
     ],
     "lx": 380.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "kar": [
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
    "fish": [
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
    "cma": [
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
    "mlpa": [
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
    "ngs": [
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
    ]
   }
  },
  "mindmap": {
   "root": "Chromosomal anomalies",
   "branches": [
    [
     "Classification",
     [
      "Constitutional vs acquired",
      "Homogeneous vs mosaic",
      "Numerical vs structural"
     ]
    ],
    [
     "Aneuploidy",
     [
      "Nondisjunction",
      "T13, T18, T21",
      "XXY, XXX, XYY, 45,X"
     ]
    ],
    [
     "Polyploidy",
     [
      "Triploidy 69",
      "Digyny, diandry"
     ]
    ],
    [
     "Structural",
     [
      "Deletion, ring, isochromosome",
      "Inversion: para/peri",
      "Duplication",
      "Robertsonian, reciprocal"
     ]
    ],
    [
     "Techniques",
     [
      "Karyotype 5-10 Mb",
      "FISH 100 kb-1 Mb",
      "CMA 10-50 kb",
      "MLPA",
      "NGS"
     ]
    ]
   ]
  }
 },
 "mcqs": [
  {
   "q": "A constitutional chromosomal anomaly is present in:",
   "options": [
    "Only tumours",
    "All organs",
    "Only gametes",
    "One organ only"
   ],
   "answer": 1,
   "why": "The accident happened in a gamete or just after fertilisation."
  },
  {
   "q": "Mosaic numerical anomalies result from:",
   "options": [
    "Translocations",
    "Meiotic errors only",
    "Point mutations",
    "Post-zygotic nondisjunction"
   ],
   "answer": 3,
   "why": "Especially common for sex chromosomes."
  },
  {
   "q": "The cause of most aneuploidies is:",
   "options": [
    "Crossing over",
    "Replication error",
    "Point mutation",
    "Nondisjunction during meiosis"
   ],
   "answer": 3,
   "why": "In meiosis I or II."
  },
  {
   "q": "The prevalence of Down syndrome is about:",
   "options": [
    "1:700",
    "1:7,000",
    "1:70",
    "1:70,000"
   ],
   "answer": 0,
   "why": "Trisomy 21, viable into adulthood."
  },
  {
   "q": "Which trisomy features rocker-bottom feet and overlapping fingers?",
   "options": [
    "18",
    "X",
    "13",
    "21"
   ],
   "answer": 0,
   "why": "Edwards syndrome."
  },
  {
   "q": "Klinefelter syndrome karyotype is:",
   "options": [
    "47,XYY",
    "45,X",
    "47,XXY",
    "47,XXX"
   ],
   "answer": 2,
   "why": "Tall, small testes, infertility."
  },
  {
   "q": "Turner syndrome karyotype is:",
   "options": [
    "47,XXX",
    "45,X",
    "47,XXY",
    "46,XY"
   ],
   "answer": 1,
   "why": "Short stature, gonadal dysgenesis."
  },
  {
   "q": "The most common polyploidy in humans is:",
   "options": [
    "Tetraploidy",
    "Haploidy",
    "Pentaploidy",
    "Triploidy"
   ],
   "answer": 3,
   "why": "Usually early miscarriage."
  },
  {
   "q": "Dispermy is a cause of:",
   "options": [
    "Monosomy",
    "Mosaicism",
    "Digyny",
    "Diandry"
   ],
   "answer": 3,
   "why": "Two sperm fertilise one egg."
  },
  {
   "q": "A balanced rearrangement carrier is usually:",
   "options": [
    "Healthy, risky gametes",
    "Severely affected",
    "Infertile always",
    "Monosomic"
   ],
   "answer": 0,
   "why": "Risk of miscarriage or affected child."
  },
  {
   "q": "An isochromosome has:",
   "options": [
    "Two identical arms",
    "Two centromeres always active",
    "An inverted segment",
    "A ring shape"
   ],
   "answer": 0,
   "why": "E.g. i(Xq) in Turner."
  },
  {
   "q": "A pericentric inversion:",
   "options": [
    "Involves two chromosomes",
    "Includes the centromere",
    "Excludes the centromere",
    "Is a deletion"
   ],
   "answer": 1,
   "why": "Paracentric excludes it."
  },
  {
   "q": "Robertsonian translocations involve:",
   "options": [
    "Chromosome 1",
    "Two acrocentrics",
    "Sex chromosomes only",
    "Any two chromosomes"
   ],
   "answer": 1,
   "why": "Carriers have 45 chromosomes."
  },
  {
   "q": "A t(14;21) carrier is at risk of having a child with:",
   "options": [
    "Down syndrome",
    "Triploidy",
    "Turner syndrome",
    "Klinefelter"
   ],
   "answer": 0,
   "why": "Translocation trisomy 21."
  },
  {
   "q": "The resolution of a standard karyotype is about:",
   "options": [
    "1 bp",
    "5-10 Mb",
    "100 kb",
    "10-50 kb"
   ],
   "answer": 1,
   "why": "Detects large anomalies."
  },
  {
   "q": "Which test is first-line for unexplained developmental delay?",
   "options": [
    "FISH",
    "Microarray (CMA)",
    "MLPA",
    "Karyotype"
   ],
   "answer": 1,
   "why": "Genome-wide CNVs."
  },
  {
   "q": "Which technique cannot detect balanced rearrangements?",
   "options": [
    "Karyotype",
    "FISH with specific probes",
    "Banding",
    "CMA"
   ],
   "answer": 3,
   "why": "It measures copy number only."
  },
  {
   "q": "MLPA is especially suited to detect:",
   "options": [
    "Exon copy changes",
    "Balanced translocations",
    "Point mutations genome-wide",
    "Triploidy"
   ],
   "answer": 0,
   "why": "E.g. DMD, BRCA1."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "kar",
   "options": [
    "MLPA",
    "FISH",
    "Karyotype",
    "Chromosomal microarray"
   ],
   "answer": 2,
   "why": "The arrow points to: Karyotype. Low resolution; detects aneuploidies and large rearrangements; needs dividing (metaphase) cells; banding 550-850 bands."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "fish",
   "options": [
    "Next-generation sequencing",
    "MLPA",
    "FISH",
    "Karyotype"
   ],
   "answer": 2,
   "why": "The arrow points to: FISH. Fluorescent probe for a chosen region; fast interphase aneuploidy screening, microdeletions; needs a hypothesis."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "cma",
   "options": [
    "Karyotype",
    "Next-generation sequencing",
    "FISH",
    "Chromosomal microarray"
   ],
   "answer": 3,
   "why": "The arrow points to: Chromosomal microarray. Genome-wide CNVs and regions of homozygosity; misses balanced rearrangements; first-line for developmental delay, autism, ID."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "mlpa",
   "options": [
    "Karyotype",
    "FISH",
    "MLPA",
    "Chromosomal microarray"
   ],
   "answer": 2,
   "why": "The arrow points to: MLPA. Targeted, rapid, cheap test for exon deletions/duplications (DMD, BRCA1, MSH2)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ngs",
   "options": [
    "MLPA",
    "FISH",
    "Next-generation sequencing",
    "Chromosomal microarray"
   ],
   "answer": 2,
   "why": "The arrow points to: Next-generation sequencing. Exome or panels; detects SNVs and indels, some small CNVs; weak for large structural anomalies."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Classify chromosomal anomalies.",
   "back": "By origin (constitutional vs acquired), distribution (homogeneous vs mosaic), type (numerical: aneuploidy, polyploidy; structural)."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "How do aneuploidies arise?",
   "back": "Nondisjunction of homologues (meiosis I) or sister chromatids (meiosis II) → gametes n+1 or n−1."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Autosomal trisomies?",
   "back": "13 Patau (non-viable, cleft, polydactyly), 18 Edwards (~1:5,000, rocker-bottom feet), 21 Down (~1:700, viable, ID, AV canal)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "Sex chromosome aneuploidies?",
   "back": "47,XXY Klinefelter (~1:500), 47,XXX (~1:1,000), 47,XYY (~1:840), 45,X Turner (~1:2,000)."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "Mechanisms of triploidy?",
   "back": "Digyny (diploid egg) and diandry (dispermy or diplospermy)."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "Balanced vs unbalanced rearrangements?",
   "back": "Balanced: no net gain/loss, normal carrier, unbalanced gametes. Unbalanced: partial trisomy/monosomy."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "Single-chromosome structural anomalies?",
   "back": "Terminal and interstitial deletions, isochromosome, ring, inversion (paracentric/pericentric), duplication."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "Robertsonian vs reciprocal translocation?",
   "back": "Robertsonian: fusion of two acrocentrics, 45 chromosomes, trisomy risk. Reciprocal: segment exchange between non-homologous chromosomes."
  },
  {
   "id": "x8",
   "type": "text",
   "front": "Resolution of detection techniques?",
   "back": "Karyotype 5-10 Mb; FISH 100 kb-1 Mb; CMA 10-50 kb; MLPA exon level; NGS nucleotide level."
  },
  {
   "id": "x9",
   "type": "text",
   "front": "Limits of CMA and NGS?",
   "back": "CMA misses balanced rearrangements; NGS is limited for large structural anomalies."
  },
  {
   "id": "img-kar",
   "type": "image",
   "target": "kar",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Karyotype. Low resolution; detects aneuploidies and large rearrangements; needs dividing (metaphase) cells; banding 550-850 bands."
  },
  {
   "id": "img-fish",
   "type": "image",
   "target": "fish",
   "front": "What is at the arrow, and why does it matter?",
   "back": "FISH. Fluorescent probe for a chosen region; fast interphase aneuploidy screening, microdeletions; needs a hypothesis."
  },
  {
   "id": "img-cma",
   "type": "image",
   "target": "cma",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Chromosomal microarray. Genome-wide CNVs and regions of homozygosity; misses balanced rearrangements; first-line for developmental delay, autism, ID."
  },
  {
   "id": "img-mlpa",
   "type": "image",
   "target": "mlpa",
   "front": "What is at the arrow, and why does it matter?",
   "back": "MLPA. Targeted, rapid, cheap test for exon deletions/duplications (DMD, BRCA1, MSH2)."
  },
  {
   "id": "img-ngs",
   "type": "image",
   "target": "ngs",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Next-generation sequencing. Exome or panels; detects SNVs and indels, some small CNVs; weak for large structural anomalies."
  }
 ],
 "deeper": [
  {
   "title": "Why a healthy parent can have a child with Down syndrome by translocation",
   "html": "<p>A parent carrying a balanced Robertsonian translocation t(14;21) has all the genetic material, just arranged differently, so they are healthy. At meiosis, however, the fused chromosome can go into a gamete together with a normal 21, and the child then has three copies of chromosome 21 material. This is why karyotyping parents matters when a child has translocation Down syndrome.</p><p class='src'>Source: the lecture's Robertsonian translocation slides.</p>"
  },
  {
   "title": "Why test choice follows the question",
   "html": "<p>Each technique sees a different scale: a karyotype sees whole chromosomes but misses anything under a few megabases; FISH only looks where you place the probe; microarrays count copies genome-wide but cannot see balanced swaps; sequencing reads letters but struggles with large rearrangements. Clinicians choose, and often combine, tests according to the anomaly they suspect.</p><p class='src'>Source: the lecture's technologies section.</p>"
  }
 ],
 "resources": [
  {
   "title": "Chromosome abnormalities fact sheet (NHGRI)",
   "url": "https://www.genome.gov/about-genomics/fact-sheets/Chromosome-Abnormalities-Fact-Sheet",
   "kind": "Article",
   "why": "Numerical and structural anomalies.",
   "note": ""
  },
  {
   "title": "Down's syndrome (NHS)",
   "url": "https://www.nhs.uk/conditions/downs-syndrome/",
   "kind": "Article",
   "why": "The most common viable trisomy.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "Chromosome abnormalities fact sheet (NHGRI)",
   "url": "https://www.genome.gov/about-genomics/fact-sheets/Chromosome-Abnormalities-Fact-Sheet"
  },
  {
   "name": "Down's syndrome (NHS)",
   "url": "https://www.nhs.uk/conditions/downs-syndrome/"
  }
 ],
 "verified": "22 Sep 2026"
};
window.SINA = window.SINA || {subjects:[], lectures:{}};
SINA.lectures["genetics1-heredity"] = {
 "id": "genetics1-heredity",
 "subject": "genetics1",
 "group": "Molecular genetics",
 "title": "Hereditary disease transmission",
 "sourceFile": "Chapter 9 Hereditary Disease Transmission.pdf (Medical Genetics, Pr. Amal Oudghiri)",
 "sourceUrl": "https://drive.google.com/file/d/1jDeOmiuz2pq9dRHkQTFvnIp6b5Fp3XLz/view?usp=drivesdk",
 "buildNote": "<strong>Built from the lecture slides.</strong> Slides that only show pictures are covered in outline. If your professor says something different, trust your professor.",
 "summary": [
  {
   "id": "s0",
   "title": "The big picture",
   "html": "<p>Medical genetics studies heredity and the genetic causes of disease: diagnosis and management, <strong>genetic counselling</strong>, prenatal diagnosis and newborn screening. About <strong>6-8% of births</strong> worldwide involve a genetic or partly genetic anomaly; chromosomal anomalies explain ~11% of recurrent pregnancy loss in Moroccan couples. In <strong>Morocco</strong>, about <strong>74% of genetic disorders are autosomal recessive</strong>, 17% autosomal dominant, 5% X-linked, 0.4% mitochondrial and 0.4% Y-linked. Genetic counselling helps families understand the disease, assess recurrence risk, and choose options (prenatal, preimplantation, presymptomatic diagnosis).</p>"
  },
  {
   "id": "s1",
   "title": "Key terms",
   "html": "<p><strong>Gene</strong>: unit of information with a function; <strong>locus</strong>: its location; <strong>allele</strong>: a version of a gene; <strong>genotype</strong>: the alleles present; <strong>phenotype</strong>: the traits studied; <strong>homozygote/heterozygote</strong>: identical/different alleles; <strong>dominant</strong>: same phenotype in hetero- and homozygotes; <strong>recessive</strong>: not expressed in heterozygotes; <strong>congenital</strong>: present at birth (not always genetic, e.g. rubella, fetal alcohol syndrome); <strong>de novo</strong>: new, not inherited; <strong>syndrome</strong>: signs from one cause. <strong>Monogenic</strong> (cystic fibrosis, sickle cell) vs <strong>multifactorial</strong> (type 2 diabetes, heart defects). Allelic expression: dominance, <strong>incomplete dominance</strong> (intermediate phenotype), <strong>co-dominance</strong> (both expressed: ABO blood groups A and B). The <strong>pedigree</strong> (family tree with standard symbols) reveals the mode of transmission.</p>"
  },
  {
   "id": "s2",
   "title": "Autosomal dominant and recessive",
   "html": "<p><strong>Autosomal dominant</strong>: Aa × aa → <strong>50%</strong> risk per pregnancy; <strong>vertical</strong> transmission; both sexes. Pitfalls: <strong>de novo mutations</strong> (often paternal, age effect; e.g. achondroplasia), <strong>germline mosaicism</strong> (a normal parent can have several affected children; negative parental testing ≠ zero risk), <strong>incomplete penetrance</strong> (e.g. <strong>retinoblastoma ~90%</strong>: 10% of carriers never develop tumours, mimicking skipped generations; penetrance depends on age, modifier genes, environment), <strong>variable expressivity</strong> and <strong>pleiotropy</strong> (one gene, several traits; cleidocranial dysostosis). Examples: achondroplasia (FGFR3), polydactyly, hereditary angioedema (SERPING1), <strong>neurofibromatosis 1</strong> (café-au-lait spots, neurofibromas, Lisch nodules), <strong>Marfan</strong> (FBN1: skeletal, aortic root dilation, ectopia lentis), osteogenesis imperfecta (COL1A1/2), ADPKD (PKD1/2), Charcot-Marie-Tooth 1A (PMP22 duplication).</p><p><strong>Autosomal recessive</strong>: affected are <strong>a/a</strong>; parents usually healthy <strong>carriers</strong>; Aa × Aa → <strong>25% affected</strong>, 50% carriers, 25% non-carriers; <strong>horizontal</strong> pattern (siblings); both sexes; <strong>consanguinity</strong> increases risk (the child is consanguineous, not the marriage). Examples: <strong>thalassaemias</strong>, albinism (OCA1/2), <strong>cystic fibrosis</strong> (CFTR), haemochromatosis (HFE), <strong>Wilson disease</strong> (ATP7B), xeroderma pigmentosum, spinal muscular atrophy (SMN1).</p>"
  },
  {
   "id": "s3",
   "title": "X-linked and non-Mendelian inheritance",
   "html": "<p><strong>X-linked recessive</strong>: mostly <strong>males</strong> (hemizygous); carrier females usually healthy; <strong>no father-to-son transmission</strong>; skips generations. Healthy father + carrier mother: 50% of sons affected, 50% of daughters carriers; affected father: all daughters carriers, no sons affected. Examples: <strong>haemophilia A</strong> (factor VIII, 80-85%) and <strong>B</strong> (factor IX, Christmas disease), <strong>Duchenne</strong>/Becker (~1 in 3,500-5,000 boys), colour blindness (~8% of men), Lesch-Nyhan, X-linked adrenoleukodystrophy. <strong>X-linked dominant</strong>: both sexes; affected father → <strong>all daughters</strong>, no sons; affected mother → 50% of children; often more severe or lethal in males. Examples: <strong>fragile X</strong> (FMR1; leading inherited cause of intellectual disability), X-linked hypophosphataemic rickets (PHEX), incontinentia pigmenti, OTC deficiency, Aicardi syndrome. Database: <strong>OMIM</strong>.</p><p><strong>Y-linked (holandric)</strong>: father → all sons (SRY, AZF). <strong>Mitochondrial</strong>: mtDNA 16,569 bp, 37 genes; <strong>maternal only</strong>; both sexes, often more severe in males; <strong>heteroplasmy</strong> sets severity; multi-organ energy failure (muscle, nerve, brain, heart, eye). <strong>Multifactorial</strong>: many genes + environment, <strong>liability-threshold model</strong>, familial clustering without Mendelian ratios (cleft lip/palate, pyloric stenosis, clubfoot, diabetes, asthma, hypertension, schizophrenia). <strong>Genomic imprinting</strong>: ~100-200 genes; only the maternal or paternal allele is expressed, set epigenetically by the sex of the transmitting parent and reset each generation.</p>"
  }
 ],
 "exam": [
  "6-8% of births have a genetic anomaly; Morocco: 74% of genetic disorders AR.",
  "Congenital ≠ always genetic.",
  "Co-dominance: ABO; incomplete dominance: intermediate phenotype.",
  "AD: vertical, 50%, both sexes; de novo, germline mosaicism, incomplete penetrance (retinoblastoma ~90%).",
  "AD examples: achondroplasia, NF1, Marfan, ADPKD, osteogenesis imperfecta.",
  "AR: horizontal, carrier parents, 25% risk, consanguinity; CF, thalassaemia, Wilson, SMA.",
  "XR: males, no father→son; haemophilia A/B, DMD, colour blindness.",
  "XD: affected father → all daughters; fragile X, hypophosphataemic rickets.",
  "Y-linked: father → all sons.",
  "Mitochondrial: maternal; heteroplasmy.",
  "Multifactorial: liability threshold; imprinting: parent-of-origin expression."
 ],
 "visual": {
  "kind": "model",
  "intro": "",
  "figure": {
   "viewBox": "0 0 760 420",
   "alt": "Recognising the mode of inheritance on a pedigree",
   "caption": "Key clues for each pattern. Schematic drawn for this site.",
   "base": "<defs><marker id=\"ah\" markerWidth=\"10\" markerHeight=\"8\" refX=\"9\" refY=\"4\" orient=\"auto\"><path d=\"M0,0 L10,4 L0,8 Z\" fill=\"#8a8a8a\"/></marker></defs>",
   "parts": {
    "ad": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2d7cf\" x=\"20\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Autosomal dominant: vertical,",
      "50% risk, both sexes"
     ],
     "lx": 130.0,
     "ly": 68.0
    },
    "ar": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#cfe3f2\" x=\"260\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Autosomal recessive: horizontal,",
      "25% risk, consanguinity"
     ],
     "lx": 370.0,
     "ly": 68.0
    },
    "xr": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#d7edd2\" x=\"500\" y=\"40\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "X-linked recessive: males,",
      "no father→son"
     ],
     "lx": 610.0,
     "ly": 68.0
    },
    "xd": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f2e2a8\" x=\"20\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "X-linked dominant: all daughters",
      "of affected father"
     ],
     "lx": 130.0,
     "ly": 198.0
    },
    "y": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#e3d5f0\" x=\"260\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Y-linked: father →",
      "all sons only"
     ],
     "lx": 370.0,
     "ly": 198.0
    },
    "mt": {
     "shape": "<rect class=\"sh\" stroke=\"#8a8a8a\" fill=\"#f7d9b8\" x=\"500\" y=\"170\" width=\"220\" height=\"60\" rx=\"10\"/>",
     "label": [
      "Mitochondrial: mother →",
      "all children"
     ],
     "lx": 610.0,
     "ly": 198.0
    }
   },
   "arrows": {
    "ad": [
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
    "ar": [
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
    "xr": [
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
    "xd": [
     {
      "t": [
       20.0,
       178.0
      ],
      "d": [
       -70,
       -60
      ],
      "gap": 6
     }
    ],
    "y": [
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
    ],
    "mt": [
     {
      "t": [
       500.0,
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
   "root": "Hereditary transmission",
   "branches": [
    [
     "Autosomal dominant",
     [
      "Vertical, 50%",
      "De novo, germline mosaicism",
      "Penetrance, expressivity, pleiotropy",
      "Marfan, NF1, achondroplasia"
     ]
    ],
    [
     "Autosomal recessive",
     [
      "Horizontal, 25%",
      "Carriers, consanguinity",
      "CF, thalassaemia, Wilson, SMA"
     ]
    ],
    [
     "X-linked",
     [
      [
       "Recessive",
       [
        "Males, no father→son",
        "Haemophilia, DMD"
       ]
      ],
      [
       "Dominant",
       [
        "Father → all daughters",
        "Fragile X"
       ]
      ]
     ]
    ],
    [
     "Non-Mendelian",
     [
      "Y-linked",
      "Mitochondrial (maternal)",
      "Multifactorial",
      "Imprinting"
     ]
    ],
    [
     "Tools",
     [
      "Pedigree",
      "Genetic counselling",
      "OMIM"
     ]
    ]
   ]
  }
 },
 "mcqs": [
  {
   "q": "What proportion of Moroccan genetic disorders are autosomal recessive?",
   "options": [
    "50%",
    "17%",
    "5%",
    "~74%"
   ],
   "answer": 3,
   "why": "Linked to consanguinity."
  },
  {
   "q": "A congenital disease is:",
   "options": [
    "Always genetic",
    "Present at birth, genetic or not",
    "Always infectious",
    "Always acquired later"
   ],
   "answer": 1,
   "why": "E.g. congenital rubella is not genetic."
  },
  {
   "q": "The ABO blood group system illustrates:",
   "options": [
    "Recessivity",
    "Incomplete dominance",
    "Co-dominance",
    "Imprinting"
   ],
   "answer": 2,
   "why": "A and B are both expressed."
  },
  {
   "q": "For an autosomal dominant disease, Aa × aa gives an affected child risk of:",
   "options": [
    "50%",
    "75%",
    "100%",
    "25%"
   ],
   "answer": 0,
   "why": "In each pregnancy."
  },
  {
   "q": "A healthy couple has two children with the same autosomal dominant disease. A likely explanation is:",
   "options": [
    "Imprinting",
    "Consanguinity",
    "X-linkage",
    "Germline mosaicism"
   ],
   "answer": 3,
   "why": "Negative parental testing does not mean zero risk."
  },
  {
   "q": "Retinoblastoma is an example of:",
   "options": [
    "Mitochondrial inheritance",
    "Complete penetrance",
    "Incomplete penetrance (~90%)",
    "X-linked inheritance"
   ],
   "answer": 2,
   "why": "10% of carriers do not develop tumours."
  },
  {
   "q": "Pleiotropy means:",
   "options": [
    "Two alleles expressed",
    "No phenotype",
    "Several genes, one trait",
    "One gene affecting several traits"
   ],
   "answer": 3,
   "why": "E.g. Marfan, cleidocranial dysostosis."
  },
  {
   "q": "Marfan syndrome is caused by mutations in:",
   "options": [
    "FBN1",
    "HBB",
    "CFTR",
    "FGFR3"
   ],
   "answer": 0,
   "why": "Autosomal dominant."
  },
  {
   "q": "Two carrier parents (Aa × Aa) of a recessive disease have what risk per child of an affected child?",
   "options": [
    "50%",
    "0%",
    "25%",
    "75%"
   ],
   "answer": 2,
   "why": "And 50% healthy carriers."
  },
  {
   "q": "Which pattern is typically 'horizontal' in a pedigree?",
   "options": [
    "Mitochondrial",
    "Y-linked",
    "Autosomal dominant",
    "Autosomal recessive"
   ],
   "answer": 3,
   "why": "Affected siblings in one generation."
  },
  {
   "q": "Which is an autosomal recessive disease?",
   "options": [
    "Marfan syndrome",
    "Cystic fibrosis",
    "Achondroplasia",
    "NF1"
   ],
   "answer": 1,
   "why": "CFTR gene."
  },
  {
   "q": "A hallmark of X-linked recessive inheritance is:",
   "options": [
    "Father-to-son transmission",
    "No father-to-son transmission",
    "Only females affected",
    "50% of all children affected"
   ],
   "answer": 1,
   "why": "Transmission through carrier mothers."
  },
  {
   "q": "A healthy father and a carrier mother (X-linked recessive): what proportion of sons are affected?",
   "options": [
    "50%",
    "100%",
    "25%",
    "0%"
   ],
   "answer": 0,
   "why": "Daughters: 50% carriers."
  },
  {
   "q": "Haemophilia A is due to deficiency of:",
   "options": [
    "Factor VIII",
    "Factor IX",
    "Factor VII",
    "Fibrinogen"
   ],
   "answer": 0,
   "why": "Haemophilia B = factor IX."
  },
  {
   "q": "An affected father with an X-linked dominant disease transmits it to:",
   "options": [
    "Half of all children",
    "All sons",
    "No children",
    "All daughters and no sons"
   ],
   "answer": 3,
   "why": "He gives his X to every daughter."
  },
  {
   "q": "Fragile X syndrome involves the gene:",
   "options": [
    "PHEX",
    "CFTR",
    "DMD",
    "FMR1"
   ],
   "answer": 3,
   "why": "Leading inherited cause of intellectual disability."
  },
  {
   "q": "Mitochondrial diseases are transmitted:",
   "options": [
    "By fathers only",
    "Only to males",
    "By mothers only",
    "By both parents"
   ],
   "answer": 2,
   "why": "Heteroplasmy explains variable severity."
  },
  {
   "q": "Genomic imprinting means:",
   "options": [
    "A mutation in both alleles",
    "One-parent allele expression",
    "A dominant mutation",
    "Loss of a chromosome"
   ],
   "answer": 1,
   "why": "Epigenetic, reset each generation."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ad",
   "options": [
    "X-linked dominant",
    "X-linked recessive",
    "Autosomal dominant",
    "Autosomal recessive"
   ],
   "answer": 2,
   "why": "The arrow points to: Autosomal dominant. Every generation affected (vertical); Aa × aa gives 50% risk per pregnancy; watch for incomplete penetrance and de novo cases."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "ar",
   "options": [
    "X-linked dominant",
    "Autosomal recessive",
    "Y-linked (holandric)",
    "Autosomal dominant"
   ],
   "answer": 1,
   "why": "The arrow points to: Autosomal recessive. Affected siblings in one generation (horizontal); carrier parents Aa × Aa give 25% affected, 50% carriers; consanguinity raises risk."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "xr",
   "options": [
    "Y-linked (holandric)",
    "X-linked recessive",
    "Autosomal recessive",
    "X-linked dominant"
   ],
   "answer": 1,
   "why": "The arrow points to: X-linked recessive. Mostly males; transmitted through carrier mothers; no father-to-son transmission; skips generations (grandfather → carrier daughter → grandson)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "xd",
   "options": [
    "X-linked dominant",
    "X-linked recessive",
    "Y-linked (holandric)",
    "Autosomal recessive"
   ],
   "answer": 0,
   "why": "The arrow points to: X-linked dominant. Both sexes; affected father transmits to all daughters and no sons; often more severe in males."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "y",
   "options": [
    "Y-linked (holandric)",
    "X-linked dominant",
    "Mitochondrial",
    "X-linked recessive"
   ],
   "answer": 0,
   "why": "The arrow points to: Y-linked (holandric). Only males; father to every son (e.g. SRY, AZF spermatogenesis genes)."
  },
  {
   "q": "Which element is at the arrow?",
   "target": "mt",
   "options": [
    "X-linked recessive",
    "Autosomal dominant",
    "Mitochondrial",
    "X-linked dominant"
   ],
   "answer": 2,
   "why": "The arrow points to: Mitochondrial. Maternal only; both sexes affected; heteroplasmy explains variable severity."
  }
 ],
 "cards": [
  {
   "id": "x0",
   "type": "text",
   "front": "Genetic disease burden and Morocco's profile?",
   "back": "6-8% of births worldwide; in Morocco ~74% AR, 17% AD, 5% X-linked, 0.4% mitochondrial, 0.4% Y-linked."
  },
  {
   "id": "x1",
   "type": "text",
   "front": "Aims of genetic counselling?",
   "back": "Explain the disease and its cause, assess recurrence risk, discuss options (prenatal, preimplantation, presymptomatic diagnosis), support decisions."
  },
  {
   "id": "x2",
   "type": "text",
   "front": "Dominance, incomplete dominance, co-dominance?",
   "back": "Dominant: same phenotype hetero/homozygous. Incomplete: intermediate phenotype. Co-dominant: both expressed (ABO)."
  },
  {
   "id": "x3",
   "type": "text",
   "front": "AD inheritance features?",
   "back": "Vertical, both sexes, 50% risk; pitfalls: de novo, germline mosaicism, incomplete penetrance, variable expressivity, pleiotropy."
  },
  {
   "id": "x4",
   "type": "text",
   "front": "AD disease examples?",
   "back": "Achondroplasia (FGFR3), NF1, Marfan (FBN1), osteogenesis imperfecta, ADPKD, CMT1A, hereditary angioedema."
  },
  {
   "id": "x5",
   "type": "text",
   "front": "AR inheritance features?",
   "back": "Horizontal, carrier parents, 25% affected, 50% carriers, consanguinity; CF, thalassaemia, albinism, Wilson, SMA, haemochromatosis."
  },
  {
   "id": "x6",
   "type": "text",
   "front": "X-linked recessive features?",
   "back": "Mostly males, no father-to-son transmission, carrier mothers, skipped generations; haemophilia A/B, DMD, colour blindness."
  },
  {
   "id": "x7",
   "type": "text",
   "front": "X-linked dominant features?",
   "back": "Both sexes; affected father → all daughters, no sons; often severe in males; fragile X, hypophosphataemic rickets."
  },
  {
   "id": "x8",
   "type": "text",
   "front": "Non-Mendelian modes?",
   "back": "Y-linked (father → sons), mitochondrial (maternal, heteroplasmy), multifactorial (liability threshold), imprinting (parent-of-origin expression)."
  },
  {
   "id": "img-ad",
   "type": "image",
   "target": "ad",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Autosomal dominant. Every generation affected (vertical); Aa × aa gives 50% risk per pregnancy; watch for incomplete penetrance and de novo cases."
  },
  {
   "id": "img-ar",
   "type": "image",
   "target": "ar",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Autosomal recessive. Affected siblings in one generation (horizontal); carrier parents Aa × Aa give 25% affected, 50% carriers; consanguinity raises risk."
  },
  {
   "id": "img-xr",
   "type": "image",
   "target": "xr",
   "front": "What is at the arrow, and why does it matter?",
   "back": "X-linked recessive. Mostly males; transmitted through carrier mothers; no father-to-son transmission; skips generations (grandfather → carrier daughter → grandson)."
  },
  {
   "id": "img-xd",
   "type": "image",
   "target": "xd",
   "front": "What is at the arrow, and why does it matter?",
   "back": "X-linked dominant. Both sexes; affected father transmits to all daughters and no sons; often more severe in males."
  },
  {
   "id": "img-y",
   "type": "image",
   "target": "y",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Y-linked (holandric). Only males; father to every son (e.g. SRY, AZF spermatogenesis genes)."
  },
  {
   "id": "img-mt",
   "type": "image",
   "target": "mt",
   "front": "What is at the arrow, and why does it matter?",
   "back": "Mitochondrial. Maternal only; both sexes affected; heteroplasmy explains variable severity."
  }
 ],
 "deeper": [
  {
   "title": "Why consanguinity raises recessive disease",
   "html": "<p>Relatives share a common ancestor and therefore some identical alleles. If that ancestor carried a rare recessive mutation, two cousins are far more likely than two unrelated people to both carry it, so their child has a real chance of inheriting two copies. This is why autosomal recessive disorders dominate Morocco's genetic disease profile.</p><p class='src'>Source: the lecture's consanguinity slide and Moroccan statistics.</p>"
  },
  {
   "title": "Why X-linked recessive diseases skip to grandsons",
   "html": "<p>An affected man passes his X to all his daughters, who become healthy carriers because their second X compensates, and his Y to his sons, who are unaffected. Each carrier daughter then has a 50% chance of passing the mutated X to her sons, who are affected. The disease therefore appears in a grandfather and his grandsons, skipping the middle generation.</p><p class='src'>Source: the lecture's X-linked recessive slides.</p>"
  }
 ],
 "resources": [
  {
   "title": "OMIM: Online Mendelian Inheritance in Man",
   "url": "https://www.omim.org/",
   "kind": "Website",
   "why": "The reference catalogue of genes and genetic disorders.",
   "note": ""
  },
  {
   "title": "Genetic and Rare Diseases Information Center (NIH)",
   "url": "https://rarediseases.info.nih.gov/diseases",
   "kind": "Website",
   "why": "The rare-disease portal cited in the lecture.",
   "note": ""
  }
 ],
 "checks": [],
 "sources": [
  {
   "name": "OMIM: Online Mendelian Inheritance in Man",
   "url": "https://www.omim.org/"
  },
  {
   "name": "Genetic and Rare Diseases Information Center (NIH)",
   "url": "https://rarediseases.info.nih.gov/diseases"
  }
 ],
 "verified": "22 Sep 2026"
};
