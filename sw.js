const CACHE = "sina-v46";
const CORE = ["./", "index.html", "css/style.css", "js/app.js", "js/i18n.js", "js/data/index.js", "js/data/papers.js", "js/data/updates.js", "js/data/extras.js", "js/data/lectures-anat3.js", "js/data/lectures-physio.js", "js/data/lectures-semio.js", "js/data/lectures-biochem.js", "js/data/lectures-fa.js", "js/data/lectures-pathanat.js", "js/data/lectures-history.js", "js/data/lectures-toxico.js", "js/data/lectures-pharma.js", "js/data/lectures-infect.js", "js/data/lectures-parasito.js", "js/data/lectures-term1.js", "js/data/lectures-pubhealth1.js", "js/data/lectures-genetics1.js", "js/data/lectures-chem1.js", "js/data/lectures-cellbio1.js", "js/data/lectures-biophys1.js", "js/data/lectures-physics1.js", "js/data/lectures-biochem1.js", "js/data/lectures-anat1.js", "js/data/lectures-immuno1.js", "js/data/lectures-anat2.js", "js/data/lectures-hemato1.js", "js/data/lectures-embryo1.js", "manifest.webmanifest", "icons/apple-touch-icon.png", "icons/favicon.svg", "icons/icon-192.png", "icons/icon-512.png"];
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
