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
    { title: "Ninja Nerd", url: "https://www.youtube.com/@NinjaNerdOfficial", why: "Long whiteboard lectures on anatomy and physiology. The closest thing to a second lecture." },
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
  { title: "Ninja Nerd", url: "https://www.youtube.com/@NinjaNerdOfficial", why: "Its neurology and neuroanatomy playlists cover the tracts in detail." }
];
