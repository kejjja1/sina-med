/* Channels and apps shown on every Resources tab. Keyed by lecture id or subject id. */
window.SINA = window.SINA || { subjects: [], lectures: {} };

SINA.apps = [
  { title: "Kenhub", url: "https://www.kenhub.com/", kind: "App and site", why: "Atlas, articles and quizzes built around anatomy exams. Free tier, paid for the full quiz banks." },
  { title: "Complete Anatomy", url: "https://www.elsevier.com/products/complete-anatomy", kind: "3D app", why: "Full 3D body you can peel layer by layer. Free basic version, student discount for the rest." },
  { title: "Anatomy Learning (3D atlas)", url: "https://anatomylearning.com/", kind: "3D app", why: "Free 3D anatomy atlas you can rotate and dissect in the browser or on a phone." },
  { title: "PurposeGames anatomy quizzes", url: "https://www.purposegames.com/games/anatomy", kind: "Practice", why: "Label-the-diagram games. Good for drilling structures fast before a spotter exam." },
  { title: "Anatomy Quiz (Anatomy.app)", url: "https://anatomy.app/", kind: "App", why: "3D models plus quizzes by region, with a free tier." },
  { title: "Quizlet", url: "https://quizlet.com/subject/anatomy/", kind: "Flashcards", why: "Huge bank of student-made anatomy decks. Check them against your slides: quality varies." }
];

SINA.channels = {
  anat3: [
    { title: "Ninja Nerd", url: "https://www.youtube.com/channel/UC6QYFutt9cluQ3uSM963_KQ", why: "Long whiteboard lectures on anatomy and physiology. The closest thing to a second lecture." },
    { title: "Kenhub - Learn Human Anatomy", url: "https://www.youtube.com/@Kenhub", why: "Short, clean anatomy tutorials that match the structure of most exam questions." },
    { title: "AnatomyZone", url: "https://www.youtube.com/@AnatomyZone", why: "3D anatomy tutorials, very good for the orbit, the skull and the muscles of mastication." },
    { title: "Sam Webster (Anatomy)", url: "https://www.youtube.com/@samwebster", why: "A medical anatomist's channel, strong on head, neck and neuroanatomy." },
    { title: "Institute of Human Anatomy", url: "https://www.youtube.com/@theanatomylab", why: "Real cadaveric dissection explained clearly. Useful once you know the names." }
  ]
};

/* Neuroanatomy channels, used when those lectures are built. */
SINA.channels["anat3-neuro"] = [
  { title: "Eccles Health Sciences Library (Neuroanatomy)", url: "https://www.youtube.com/@EcclesHealthSciLibrary", why: "The classic University of Utah neuroanatomy series: brainstem, tracts and cranial nerves." },
  { title: "UBC Medicine - Educational Media", url: "https://www.youtube.com/@UBCMedicine", why: "Neuroanatomy walkthroughs on real specimens, from the University of British Columbia." },
  { title: "Neuroanatomy with Dr. Wolfe", url: "https://www.youtube.com/@neuroanatomy", why: "Systematic neuroanatomy lectures, good for the spinal cord and descending tracts." },
  { title: "Ninja Nerd", url: "https://www.youtube.com/channel/UC6QYFutt9cluQ3uSM963_KQ", why: "Its neurology and neuroanatomy playlists cover the tracts in detail." }
];

["anat3-spinal-cord","anat3-brainstem","anat3-cerebrum","anat3-diencephalon","anat3-descending-tracts","anat3-pns"].forEach(function (id) { SINA.channels[id] = SINA.channels["anat3-neuro"]; });

/* Useful apps and resources, shown on the home page and at #/apps. */
SINA.usefulApps = [
  { name: "YPT (Yeolpumta)", domain: "yeolpumta.com", kind: "Study group and focus timer",
    desc: "A study timer you share with a group. Start a session and YPT times your studying by subject; turn on focus mode and it blocks your other apps until you stop, so you can't drift off to social media. Everyone in the group sees who is studying right now and how many hours each person has done today, so you keep each other going. Join the promo's group with the invite link below, then install the app if you don't have it yet.",
    platforms: ["iOS", "Android"],
    links: [{ label: "Join our study group", url: "https://link.yeolpumta.com/P3R5cGU9Z3JvdXBJbnZpdGUmaWQ9NzUzMzMwMQ==" },
            { label: "App Store", url: "https://apps.apple.com/app/id1441909643" },
            { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.pallo.passiontimerscoped" }] },
  { name: "Gizmo", domain: "gizmo.ai", kind: "AI flashcards and quizzes",
    desc: "Turns your notes, PDFs and slides into flashcards and quizzes, then schedules reviews with spaced repetition. There are already a lot of ready-made 1st year flashcard decks on Saad's Gizmo profile: open it and add any deck to start reviewing straight away.",
    platforms: ["Web", "iOS", "Android"],
    links: [{ label: "1st year flashcards", url: "https://gizmo.ai/profile/10214249" },
            { label: "Visit website", url: "https://gizmo.ai/" }] },
  { name: "Daily Anatomy Flashcards", domain: "kenhub.com", kind: "Anatomy flashcards by Kenhub",
    desc: "A few illustrated anatomy flashcards every day on muscles and bones, to keep anatomy fresh between exams.",
    platforms: ["iOS", "Android"],
    links: [{ label: "App Store", url: "https://apps.apple.com/ca/app/daily-anatomy-flashcards/id1271405479" },
            { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.kenhub.dailyanatomy.musclesandbones&hl=en_CA" }] }
];

/* USMLE prep page (#/usmle). drive = the shared Google Drive folder for PDFs.
   cost: "Free", "Free trial" or "Paid". Keep links to official sites only. */
SINA.usmle = {
  drive: "https://drive.google.com/drive/folders/1TgIZASorTbwBMryn2LzPKicddxsoI80V?usp=drive_link",
  sections: [
    { title: "Start here: official and free", items: [
      { name: "USMLE Step 1 official materials", domain: "usmle.org", kind: "Official exam site", cost: "Free",
        desc: "The exam's own page: what Step 1 covers (the content outline), how questions are written, and the free sample test questions you can take in the real exam software. Read the content outline first so you know exactly what is on the exam.",
        links: [{ label: "Step 1 materials", url: "https://www.usmle.org/exam-resources/step-1-materials" },
                { label: "Sample test questions", url: "https://www.usmle.org/exam-resources/step-1-materials/step-1-sample-test-questions" },
                { label: "Content outline", url: "https://www.usmle.org/exam-resources/step-1-materials/step-1-content-outline-and-specifications" }] },
      { name: "Mehlman Medical free stuff", domain: "mehlmanmedical.com", kind: "High-yield PDFs, self-assessments, lectures", cost: "Free",
        desc: "Around 30 free high-yield PDFs (anatomy, biochemistry, biostatistics, cardiology, pharmacology, pathology, the 'HY USMLE Review' series and more), free self-assessments in biochemistry, microbiology and pharmacology with PDF versions, over 100 recorded lectures with notes, and a free video question bank. No account needed.",
        links: [{ label: "Open the free resources", url: "https://mehlmanmedical.com/free-stuff/" }] },
      { name: "Anki", domain: "apps.ankiweb.net", kind: "Spaced-repetition flashcards", cost: "Free",
        desc: "The flashcard app most Step 1 students use every day. Free on computer, Android and the web; the iPhone app is paid. Start with a few new cards a day and do your reviews every day rather than in bursts.",
        links: [{ label: "Download Anki", url: "https://apps.ankiweb.net/" }] }
    ]},
    { title: "Free videos and podcasts", items: [
      { name: "Dirty Medicine", domain: "youtube.com", kind: "YouTube channel", cost: "Free",
        desc: "Short, high-yield videos with memory tricks, especially good for biochemistry, microbiology and pharmacology.",
        links: [{ label: "Watch on YouTube", url: "https://www.youtube.com/@DirtyMedicine" }] },
      { name: "Ninja Nerd", domain: "youtube.com", kind: "YouTube channel", cost: "Free",
        desc: "Long, whiteboard-style lectures that explain the physiology and pathology from the ground up. Use it when a topic doesn't make sense yet.",
        links: [{ label: "Watch on YouTube", url: "https://www.youtube.com/channel/UC6QYFutt9cluQ3uSM963_KQ" }] },
      { name: "Divine Intervention", domain: "divineinterventionpodcasts.com", kind: "Podcast", cost: "Free",
        desc: "Hundreds of free podcast episodes reviewing high-yield Step 1 topics and question strategy. Good for commuting or the gym.",
        links: [{ label: "Open the podcast", url: "https://divineinterventionpodcasts.com/" }] },
      { name: "Armando Hasudungan", domain: "youtube.com", kind: "YouTube channel", cost: "Free",
        desc: "Hand-drawn explanations of physiology, pathology, immunology and haematology. Good if you remember things better as pictures.",
        links: [{ label: "Watch on YouTube", url: "https://www.youtube.com/@armandohasudungan" }] },
      { name: "MedCram", domain: "medcram.com", kind: "Video lectures", cost: "Free",
        desc: "Clear 'explained clearly' lectures by Dr. Roger Seheult, strong on cardiopulmonary, renal and acid-base physiology. Hours of videos are free on YouTube and on their site.",
        links: [{ label: "Watch on YouTube", url: "https://www.youtube.com/c/medcram" }] },
      { name: "Osmosis", domain: "osmosis.org", kind: "Animated videos", cost: "Free",
        desc: "Short animated videos on almost every Step 1 disease and drug, free on YouTube. A quick way to get the big picture before going into detail. Their full platform is paid.",
        links: [{ label: "Find on YouTube", url: "https://www.youtube.com/results?search_query=osmosis+from+elsevier" }] }
    ]},
    { title: "Free questions, flashcards and reading", items: [
      { name: "MedAll Step 1 question bank", domain: "medall.org", kind: "Question bank", cost: "Free",
        desc: "Over 3,500 board-style Step 1 questions that MedAll currently offers for free (you register with an account). Useful extra practice before or alongside a paid bank; MedAll says it may not stay free forever.",
        links: [{ label: "Open MedAll", url: "https://medall.org/question-banks/usmle-step1" }] },
      { name: "AnkiWeb shared decks", domain: "ankiweb.net", kind: "Anki decks", cost: "Free",
        desc: "Anki's own library of free decks made by students, searchable by subject (pharmacology, microbiology, biochemistry and more). Check the ratings and the last update date before downloading.",
        links: [{ label: "Browse shared decks", url: "https://ankiweb.net/shared/decks" }] },
      { name: "StatPearls", domain: "ncbi.nlm.nih.gov", kind: "Medical reference", cost: "Free",
        desc: "Thousands of free, peer-reviewed review articles hosted by the US National Library of Medicine. Search any disease or drug when a question explanation isn't enough.",
        links: [{ label: "Open StatPearls", url: "https://www.ncbi.nlm.nih.gov/books/NBK430685/" }] },
      { name: "TeachMe series", domain: "teachmeanatomy.info", kind: "Anatomy and physiology articles", cost: "Free",
        desc: "Free, clearly illustrated articles on anatomy and physiology with clinical relevance boxes. Also useful for our own anatomy exams.",
        links: [{ label: "TeachMeAnatomy", url: "https://teachmeanatomy.info/" }, { label: "TeachMePhysiology", url: "https://teachmephysiology.com/" }] }
    ]},
    { title: "The main paid resources (worth knowing about)", items: [
      { name: "UWorld Step 1", domain: "uworld.com", kind: "Question bank", cost: "Paid",
        desc: "The standard Step 1 question bank, with detailed explanations for every answer. Most students do it once, by system, in the months before the exam.",
        links: [{ label: "UWorld", url: "https://medical.uworld.com/usmle/usmle-step-1/" }] },
      { name: "AnKing Step deck (AnkiHub)", domain: "ankihub.net", kind: "Anki deck", cost: "Paid",
        desc: "The most widely used Step 1 Anki deck (30,000+ cards, tagged to UWorld, Pathoma, Boards and Beyond and Sketchy). It is distributed and kept up to date through AnkiHub, which needs a monthly subscription.",
        links: [{ label: "AnKing Step deck", url: "https://www.ankihub.net/step-deck" }] },
      { name: "NBME self-assessments", domain: "nbme.org", kind: "Practice exams", cost: "Paid",
        desc: "Practice exams written by the people who write Step 1. Used near the end of preparation to predict your score.",
        links: [{ label: "NBME self-assessments", url: "https://www.nbme.org/examinees/self-assessments" }] },
      { name: "Pathoma", domain: "pathoma.com", kind: "Pathology videos and book", cost: "Paid",
        desc: "Short, very high-yield pathology course with a companion book. A limited free version exists; the full PathomaPro is paid.",
        links: [{ label: "Pathoma", url: "https://www.pathoma.com/" }] },
      { name: "Boards and Beyond", domain: "boardsbeyond.com", kind: "Video lectures", cost: "Paid",
        desc: "Clear video lectures covering the whole of Step 1 system by system; a good main 'textbook' while you do questions.",
        links: [{ label: "Boards and Beyond", url: "https://www.boardsbeyond.com/" }] },
      { name: "Sketchy", domain: "sketchy.com", kind: "Visual mnemonics", cost: "Paid",
        desc: "Picture-based memory palaces for microbiology and pharmacology, the two subjects with the most facts to memorise.",
        links: [{ label: "Sketchy", url: "https://www.sketchy.com/" }] },
      { name: "AMBOSS", domain: "amboss.com", kind: "Question bank and library", cost: "Free trial",
        desc: "A large question bank and medical library with a free trial. Its library is handy for looking things up quickly.",
        links: [{ label: "AMBOSS", url: "https://www.amboss.com/us" }] }
    ]}
  ]
};
