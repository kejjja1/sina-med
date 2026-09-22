const CACHE = "sina-v41";
const CORE = ["./", "index.html", "css/style.css", "js/app.js", "js/data/index.js", "js/data/papers.js", "js/data/updates.js", "js/data/extras.js", "js/data/anat3-orbit.js", "js/data/anat3-face-osteology.js", "js/data/anat3-facial-muscles.js", "js/data/anat3-blood-supply.js", "js/data/anat3-orbital-appendages.js", "js/data/anat3-eyeball-1.js", "js/data/anat3-ocular-muscles.js", "js/data/anat3-eye-innervation.js", "js/data/anat3-ocular-clinical.js", "js/data/anat3-sinuses.js", "js/data/anat3-oral-cavity.js", "js/data/anat3-nasal-cavity.js", "js/data/anat3-larynx.js", "js/data/anat3-pharynx.js", "js/data/anat3-thyroid.js", "js/data/anat3-neck-triangles.js", "js/data/anat3-ear-1.js", "js/data/anat3-ear-2.js", "js/data/anat3-spinal-cord.js", "js/data/anat3-brainstem.js", "js/data/anat3-cerebrum.js", "js/data/anat3-diencephalon.js", "js/data/anat3-descending-tracts.js", "js/data/anat3-pns.js", "js/data/physio-intro-neuro.js", "js/data/physio-neurons.js", "js/data/physio-myotatic.js", "js/data/physio-muscle-2.js", "js/data/physio-pain.js", "js/data/physio-stress.js", "js/data/physio-vision.js", "js/data/physio-vestibular.js", "js/data/physio-taste-smell.js", "js/data/physio-renal-gfr.js", "js/data/semio-resp-symptoms.js", "js/data/semio-resp-exam.js", "js/data/semio-resp-syndromes.js", "js/data/semio-cv-intro.js", "js/data/semio-cv-lhf.js", "js/data/semio-cv-rhf.js", "js/data/semio-cv-angina.js", "js/data/semio-cv-arrhythmia.js", "js/data/semio-cv-revision.js", "js/data/semio-gi-exam.js", "js/data/semio-gi-jaundice.js", "js/data/semio-gi-hepatomegaly.js", "js/data/semio-gi-constipation.js", "js/data/semio-gi-dysentery.js", "js/data/semio-endo-thyroid.js", "js/data/semio-endo-adrenal.js", "js/data/biochem-preanalytical.js", "js/data/biochem-adrenal-medulla.js", "js/data/biochem-insulin.js", "js/data/biochem-hepatic.js", "js/data/biochem-steroids.js", "js/data/biochem-cardiac.js", "js/data/biochem-renal.js", "js/data/semio-gi-diarrhoea.js", "js/data/semio-gi-dysphagia.js", "js/data/semio-gi-gerd.js", "js/data/semio-gi-bleeding.js", "js/data/biochem-spe.js", "js/data/biochem-lipids.js", "js/data/biochem-calcium.js", "js/data/biochem-iron.js", "js/data/biochem-water.js", "js/data/biochem-acid-base.js", "js/data/fa-protection.js", "js/data/fa-cardiac-arrest.js", "js/data/fa-bleeding.js", "js/data/fa-trauma-burns.js", "js/data/fa-neural.js", "js/data/fa-cardiovascular.js", "js/data/fa-renal.js", "js/data/fa-endocrine.js", "js/data/fa-immune.js", "js/data/fa-digestive.js", "manifest.webmanifest", "icons/favicon.svg", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"];
self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === location.origin;
  const isFont = url.hostname === "fonts.googleapis.com" || url.hostname === "fonts.gstatic.com";
  if (!sameOrigin && !isFont) return; // other sites (3D models, pictures, links): network only
  if (isFont) {
    // fonts: cache first
    e.respondWith(caches.open(CACHE).then((cache) => cache.match(req).then((hit) => hit || fetch(req).then((res) => { if (res && (res.ok || res.type === "opaque")) cache.put(req, res.clone()); return res; }))));
    return;
  }
  // the site's own files: network first so updates show up straight away, cache as offline fallback
  e.respondWith(
    fetch(req).then((res) => { if (res && res.ok) { const copy = res.clone(); caches.open(CACHE).then((c) => c.put(req, copy)); } return res; })
      .catch(() => caches.match(req).then((hit) => hit || caches.match("index.html")))
  );
});
