(function () {
  "use strict";
  var S = window.SINA;
  var app = document.getElementById("app");

  /* ---------- helpers ---------- */
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]; }); }
  var store = {
    get: function (k, d) { try { var v = localStorage.getItem(k); return v === null ? d : JSON.parse(v); } catch (e) { return d; } },
    set: function (k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) {} }
  };
  function subjectById(id) { return S.subjects.filter(function (s) { return s.id === id; })[0]; }
  var T = S.t || function (k) { return k; };
  /* ---------- year / program ---------- */
  var PROGS = S.programs || [{ id: "y3-anglo" }];
  function progValid(id) { return PROGS.some(function (p) { return p.id === id; }); }
  var PROG = store.get("sina:program", null);
  if (!progValid(PROG)) PROG = S.DEFAULT_PROGRAM || PROGS[PROGS.length - 1].id;
  function progName(id) { return T("program." + (id || PROG)); }
  function progSubjects() { return S.subjects.filter(function (x) { return (x.program || S.DEFAULT_PROGRAM) === PROG; }); }
  function progSemesters() {
    var seen = []; progSubjects().forEach(function (x) { if (seen.indexOf(x.semester) < 0) seen.push(x.semester); });
    return seen.sort();
  }
  function readyCount(sub) {
    var n = 0;
    (sub.groups || []).forEach(function (g) { g.items.forEach(function (it) { if (S.lectures[it.id]) n++; }); });
    return n;
  }
  function totalCount(sub) {
    if (!sub.groups) return sub.count || 0;
    var n = 0; sub.groups.forEach(function (g) { n += g.items.length; }); return n;
  }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var t = a[i]; a[i] = a[j]; a[j] = t; } return a; }

  /* ---------- settings menu (light or dark) and suggestion button ---------- */
  var setBtn = document.getElementById("settings-btn"), setMenu = document.getElementById("settings-menu");
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    setMenu.querySelectorAll("[data-theme-choice]").forEach(function (b) { b.setAttribute("aria-checked", String(b.dataset.themeChoice === t)); });
    var m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute("content", t === "dark" ? "#1b1d20" : "#ffffff");
  }
  var theme = store.get("sina:theme", null) || (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  if (theme !== "dark") theme = "light";
  applyTheme(theme);
  function openSettings(open) {
    setMenu.hidden = !open;
    setBtn.setAttribute("aria-expanded", String(open));
    if (open) { var cur = setMenu.querySelector('[aria-checked="true"]') || setMenu.querySelector("button"); cur.focus(); }
  }
  setBtn.addEventListener("click", function (e) { e.stopPropagation(); openSettings(setMenu.hidden); });
  setMenu.querySelectorAll("[data-theme-choice]").forEach(function (b) {
    b.addEventListener("click", function () {
      theme = b.dataset.themeChoice; store.set("sina:theme", theme); applyTheme(theme);
      openSettings(false); setBtn.focus();
    });
  });
  setMenu.addEventListener("keydown", function (e) {
    var items = [].slice.call(setMenu.querySelectorAll("button:not([disabled])")), k = items.indexOf(document.activeElement);
    if (e.key === "ArrowDown") { e.preventDefault(); items[(k + 1) % items.length].focus(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); items[(k - 1 + items.length) % items.length].focus(); }
  });
  document.addEventListener("click", function (e) { if (!setMenu.hidden && !setMenu.contains(e.target)) openSettings(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !setMenu.hidden) { openSettings(false); setBtn.focus(); } });

  /* ---------- year selector (top left): opens on hover or click ---------- */
  var progBox = document.getElementById("prog"), progBtn = document.getElementById("prog-btn"), progMenu = document.getElementById("prog-menu"), progCur = document.getElementById("prog-cur"), progTimer;
  function renderProgMenu() {
    progCur.textContent = progName();
    progMenu.innerHTML = '<p class="sm-title">' + esc(T("program.choose")) + "</p>" + PROGS.map(function (p) {
      var n = S.subjects.filter(function (x) { return (x.program || S.DEFAULT_PROGRAM) === p.id && x.groups; }).length;
      return '<button type="button" role="menuitemradio" data-prog="' + p.id + '" aria-checked="' + (p.id === PROG) + '"><span class="pm-name">' + esc(progName(p.id)) + '</span>' +
        (n ? "" : '<span class="pm-soon">' + esc(T("settings.soon")) + "</span>") + '<span class="sm-tick" aria-hidden="true">&#10003;</span></button>';
    }).join("") + (S.usmle ? '<a class="pm-usmle" role="menuitem" href="#/usmle"><span class="pm-name">USMLE prep</span><span class="pm-soon">Step 1</span></a>' : "");
    var pu = progMenu.querySelector(".pm-usmle"); if (pu) pu.addEventListener("click", function () { openProg(false); });
    progMenu.querySelectorAll("[data-prog]").forEach(function (b) {
      b.addEventListener("click", function () { setProgram(b.dataset.prog); openProg(false); progBtn.focus(); });
    });
  }
  function openProg(open) {
    progMenu.hidden = !open; progBtn.setAttribute("aria-expanded", String(open));
  }
  function setProgram(id, quiet) {
    if (!progValid(id)) return;
    var changed = id !== PROG; PROG = id; store.set("sina:program", id);
    if (changed || quiet) { try { track("year-" + id, "Year chosen: " + progName(id), true); } catch (e) {} }
    renderProgMenu(); if (typeof renderDrawer === "function") renderDrawer();
    if (changed && !quiet) {
      var t = document.getElementById("toast") || document.body.appendChild(Object.assign(document.createElement("div"), { id: "toast", className: "toast", role: "status" }));
      t.textContent = T("program.switched", { name: progName() }); t.classList.add("show"); setTimeout(function () { t.classList.remove("show"); }, 2200);
    }
    if (changed) { if (location.hash === "#/" || location.hash === "" ) route(); else location.hash = "#/"; }
  }
  progBtn.setAttribute("aria-label", T("program.label"));
  progBtn.addEventListener("click", function (e) { e.stopPropagation(); openProg(progMenu.hidden); if (!progMenu.hidden) { var c = progMenu.querySelector('[aria-checked="true"]'); if (c) c.focus(); } });
  if (window.matchMedia && matchMedia("(hover: hover)").matches) {
    progBox.addEventListener("mouseenter", function () { clearTimeout(progTimer); openProg(true); });
    progBox.addEventListener("mouseleave", function () { progTimer = setTimeout(function () { openProg(false); }, 180); });
  }
  progMenu.addEventListener("keydown", function (e) {
    var items = [].slice.call(progMenu.querySelectorAll("button")), k = items.indexOf(document.activeElement);
    if (e.key === "ArrowDown") { e.preventDefault(); items[(k + 1) % items.length].focus(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); items[(k - 1 + items.length) % items.length].focus(); }
  });
  document.addEventListener("click", function (e) { if (!progMenu.hidden && !progBox.contains(e.target)) openProg(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !progMenu.hidden) { openProg(false); progBtn.focus(); } });
  renderProgMenu();

  /* ---------- first visit: ask which year the visitor is in ---------- */
  function yearChooser() {
    var box = document.createElement("div");
    box.className = "yc-backdrop"; box.id = "year-chooser";
    box.innerHTML = '<div class="yc" role="dialog" aria-modal="true" aria-labelledby="yc-title">' +
      '<p class="yc-kicker">' + esc(T("welcome.kicker")) + '</p><h2 id="yc-title">' + esc(T("welcome.title")) + '</h2><p class="yc-sub">' + esc(T("welcome.sub")) + '</p>' +
      '<div class="yc-grid">' + PROGS.map(function (p) {
        var n = S.subjects.filter(function (x) { return (x.program || S.DEFAULT_PROGRAM) === p.id && x.groups; }).length;
        return '<button type="button" class="yc-opt" data-year="' + p.id + '"><span class="yc-name">' + esc(progName(p.id)) + '</span>' +
          '<span class="yc-meta">' + esc(n ? T("welcome.ready", { n: n }) : T("settings.soon")) + "</span></button>";
      }).join("") + '</div>' + (S.usmle ? '<a class="yc-usmle" href="#/usmle">Preparing for the USMLE? Open USMLE prep</a>' : "") + '<button type="button" class="yc-skip">' + esc(T("welcome.skip")) + "</button></div>";
    document.body.appendChild(box);
    var last = document.activeElement;
    function close() { store.set("sina:yearAsked", "1"); box.remove(); document.removeEventListener("keydown", onKey, true); if (last && last.focus) last.focus(); }
    function onKey(e) {
      if (e.key === "Escape") { e.preventDefault(); close(); return; }
      if (e.key === "Tab") {
        var f = [].slice.call(box.querySelectorAll("button")), i = f.indexOf(document.activeElement);
        e.preventDefault(); f[(i + (e.shiftKey ? -1 : 1) + f.length) % f.length].focus();
      }
    }
    document.addEventListener("keydown", onKey, true);
    box.querySelectorAll("[data-year]").forEach(function (b) {
      b.addEventListener("click", function () { close(); setProgram(b.dataset.year, true); if (location.hash !== "#/" && location.hash !== "") location.hash = "#/"; else route(); });
    });
    box.querySelector(".yc-skip").addEventListener("click", close);
    var yu = box.querySelector(".yc-usmle"); if (yu) yu.addEventListener("click", close);
    box.addEventListener("click", function (e) { if (e.target === box) close(); });
    var first = box.querySelector('[data-year="' + PROG + '"]') || box.querySelector("[data-year]"); if (first) first.focus();
  }
  (function () {
    var h = location.hash || "#/", deep = /^#\/(lecture|year|papers|apps|updates|usmle)\//.test(h + "/") && h !== "#/";
    if (!store.get("sina:program", null) && !store.get("sina:yearAsked", null) && !deep) setTimeout(yearChooser, 0);
  })();

  /* ---------- language (Settings) ---------- */
  var LANGS = S.languages || [{ id: "en", label: "English", available: true }];
  S.lang = store.get("sina:lang", "en");
  if (!LANGS.some(function (l) { return l.id === S.lang && l.available; })) S.lang = "en";
  document.documentElement.setAttribute("lang", S.lang);
  function applyI18n() { document.querySelectorAll("[data-i18n]").forEach(function (el) { el.textContent = T(el.getAttribute("data-i18n")); }); var si = document.getElementById("search-input"); if (si) { si.placeholder = T("search.placeholder"); } }
  var langBox = document.getElementById("lang-items");
  if (langBox) {
    langBox.innerHTML = LANGS.map(function (l) {
      return '<button type="button" role="menuitemradio" data-lang="' + l.id + '" aria-checked="' + (l.id === S.lang) + '"' + (l.available ? "" : ' disabled aria-disabled="true"') + '><span class="sm-ico" aria-hidden="true">' + l.id.toUpperCase() + "</span>" + esc(l.label) +
        (l.available ? "" : '<span class="pm-soon">' + esc(T("settings.soon")) + "</span>") + '<span class="sm-tick" aria-hidden="true">&#10003;</span></button>';
    }).join("");
    langBox.querySelectorAll("[data-lang]:not([disabled])").forEach(function (b) {
      b.addEventListener("click", function () {
        S.lang = b.dataset.lang; store.set("sina:lang", S.lang); document.documentElement.setAttribute("lang", S.lang);
        langBox.querySelectorAll("[data-lang]").forEach(function (x) { x.setAttribute("aria-checked", String(x.dataset.lang === S.lang)); });
        applyI18n(); renderProgMenu(); if (typeof renderDrawer === "function") renderDrawer(); route(); openSettings(false);
      });
    });
  }
  applyI18n();

  var sugBtn = document.getElementById("suggest-btn"), formUrl = (sugBtn.getAttribute("data-form") || "").trim();
  if (/^https?:\/\//.test(formUrl)) sugBtn.href = formUrl;
  else sugBtn.addEventListener("click", function (e) {
    e.preventDefault();
    var t = document.getElementById("toast") || document.body.appendChild(Object.assign(document.createElement("div"), { id: "toast", className: "toast", role: "status" }));
    t.textContent = "The suggestion form is coming soon."; t.classList.add("show");
    clearTimeout(t._h); t._h = setTimeout(function () { t.classList.remove("show"); }, 2600);
  });

  /* ---------- orbit diagram (schematic, right orbit, front view) ---------- */
  var RIM = "M 140 75 H 420 Q 480 75 480 135 V 325 Q 480 385 420 385 H 140 Q 80 385 80 325 V 135 Q 80 75 140 75 Z";
  var WALLS = {
    roof: "80,75 480,75 360,245", floor: "80,385 480,385 360,245",
    lateral: "80,75 80,385 360,245", medial: "480,75 480,385 360,245"
  };
  var ARROWS = {
    "optic-canal": [{ t: [360, 245], d: [64, 54] }],
    sof: [{ t: [296, 206], d: [-12, -66] }],
    iof: [{ t: [258, 296], d: [-30, 60] }],
    supraorbital: [{ t: [347, 75], d: [0, -54] }],
    infraorbital: [{ t: [335, 418], d: [-64, 14] }],
    ethmoid: [{ t: [434, 140], d: [58, -30] }, { t: [408, 177], d: [70, 10] }],
    "lacrimal-fossa": [{ t: [458, 300], d: [58, 44] }],
    "trochlear-fossa": [{ t: [432, 100], d: [56, -40] }]
  };
  function arrowSVG(a) {
    var sx = a.t[0] + a.d[0], sy = a.t[1] + a.d[1];
    var dx = a.t[0] - sx, dy = a.t[1] - sy, len = Math.sqrt(dx * dx + dy * dy);
    var ux = dx / len, uy = dy / len, gap = 12;
    var ex = a.t[0] - ux * gap, ey = a.t[1] - uy * gap;
    var px = -uy, py = ux, hl = 14, hw = 7;
    var bx = ex - ux * hl, by = ey - uy * hl;
    var pts = ex + "," + ey + " " + (bx + px * hw) + "," + (by + py * hw) + " " + (bx - px * hw) + "," + (by - py * hw);
    return '<path class="arrow-halo" d="M ' + sx + " " + sy + " L " + bx + " " + by + '"/><path class="arrow-line" d="M ' + sx + " " + sy + " L " + bx + " " + by + '"/><polygon class="arrow-head" points="' + pts + '"/>';
  }
  function orbitSVG(cfg) {
    var quiz = cfg.mode === "quiz";
    var cls = "orbit " + (quiz ? "quiz" : "explore layer-" + (cfg.layer || "walls"));
    var out = '<svg class="' + cls + '" viewBox="-20 0 600 450" role="img" aria-label="' + esc(cfg.aria || "Schematic of the right orbit seen from the front") + '"><defs><clipPath id="rimclip' + (cfg.uid || "") + '"><path d="' + RIM + '"/></clipPath></defs>';
    out += '<g clip-path="url(#rimclip' + (cfg.uid || "") + ')">';
    Object.keys(WALLS).forEach(function (id) {
      out += '<polygon class="wall' + (quiz && cfg.target === id ? " hl" : "") + '" data-id="' + id + '" points="' + WALLS[id] + '"/>';
    });
    out += "</g>";
    out += '<path class="rim" d="' + RIM + '"/>';
    // margins
    var M = { "m-sup": [140, 75, 420, 75], "m-lat": [80, 135, 80, 325], "m-inf": [140, 385, 420, 385], "m-med": [480, 135, 480, 325] };
    Object.keys(M).forEach(function (id) {
      var m = M[id];
      out += '<g class="margin" data-id="' + id + '"><line class="hit" x1="' + m[0] + '" y1="' + m[1] + '" x2="' + m[2] + '" y2="' + m[3] + '"/><line x1="' + m[0] + '" y1="' + m[1] + '" x2="' + m[2] + '" y2="' + m[3] + '"/></g>';
    });
    // openings
    out += '<g class="opening" data-id="optic-canal"><circle class="hit" cx="360" cy="245" r="20"/><circle class="shape" cx="360" cy="245" r="10"/></g>';
    out += '<g class="opening" data-id="sof"><line class="hit" x1="332" y1="228" x2="262" y2="185"/><line class="shape" x1="332" y1="228" x2="262" y2="185"/></g>';
    out += '<g class="opening" data-id="iof"><line class="hit" x1="321" y1="265" x2="196" y2="327"/><line class="shape" x1="321" y1="265" x2="196" y2="327"/></g>';
    out += '<g class="opening" data-id="supraorbital"><circle class="hit" cx="347" cy="75" r="18"/><circle class="shape" cx="347" cy="75" r="6"/></g>';
    out += '<g class="opening" data-id="infraorbital"><circle class="hit" cx="335" cy="418" r="18"/><circle class="shape" cx="335" cy="418" r="6"/></g>';
    out += '<g class="opening" data-id="ethmoid"><circle class="hit" cx="434" cy="140" r="14"/><circle class="hit" cx="408" cy="177" r="14"/><circle class="shape" cx="434" cy="140" r="5"/><circle class="shape" cx="408" cy="177" r="5"/></g>';
    // landmarks
    out += '<g class="landmark" data-id="lacrimal-fossa"><ellipse class="hit" cx="458" cy="300" rx="20" ry="32"/><ellipse class="shape" cx="458" cy="300" rx="13" ry="25"/></g>';
    out += '<g class="landmark" data-id="trochlear-fossa"><circle class="hit" cx="432" cy="100" r="16"/><circle class="shape" cx="432" cy="100" r="6"/></g>';
    out += '<g class="landmark" data-id="lacrimal-gland-fossa"><ellipse class="hit" cx="125" cy="105" rx="30" ry="20"/><ellipse class="shape" cx="125" cy="105" rx="23" ry="13"/></g>';
    // orientation tags
    out += '<text class="tag" x="14" y="20">Superior</text><text class="tag" x="14" y="442">Inferior</text><text class="tag" x="14" y="235">Lateral</text><text class="tag" x="546" y="235" text-anchor="end">Medial</text>';
    if (!quiz) {
      var L = function (layer, x, y, txt, anchor) { return '<text class="lbl lbl-' + layer + '" x="' + x + '" y="' + y + '" text-anchor="' + (anchor || "middle") + '">' + txt + "</text>"; };
      out += L("walls", 307, 135, "Roof") + L("walls", 307, 345, "Floor") + L("walls", 175, 235, "Lateral wall") + L("walls", 428, 240, "Medial wall");
      out += L("margins", 280, 56, "Superior margin") + L("margins", 280, 372, "Inferior margin") + L("margins", 92, 300, "Lateral", "start") + L("margins", 470, 190, "Medial", "end");
      out += L("openings", 372, 274, "Optic canal", "start") + L("openings", 232, 168, "Superior orbital fissure") + L("openings", 205, 352, "Inferior orbital fissure") + L("openings", 347, 54, "Supraorbital notch") + L("openings", 335, 440, "Infraorbital foramen") + L("openings", 480, 152, "Ethmoidal", "start") + L("openings", 480, 170, "foramina", "start");
      out += L("landmarks", 486, 298, "Lacrimal", "start") + L("landmarks", 486, 316, "fossa", "start") + L("landmarks", 430, 56, "Trochlear fossa") + L("landmarks", 125, 66, "Lacrimal gland fossa");
    } else {
      (ARROWS[cfg.target] || []).forEach(function (a) { out += arrowSVG(a); });
    }
    out += "</svg>";
    return out;
  }

  /* ---------- 3D viewer (Sketchfab embed, loaded on tap) and figures ---------- */
  function viewer3dHTML(list) {
    var models = Array.isArray(list) ? list : [list], i = 0;
    var tabs = models.length > 1
      ? '<div class="model-switch" role="group" aria-label="Choose a model">' + models.map(function (m, n) {
          return '<button type="button" data-m="' + n + '" aria-pressed="' + (n === 0) + '">' + esc(m.tab || m.title) + "</button>";
        }).join("") + "</div>"
      : "";
    return '<div class="viewer3d" data-models=\'' + esc(JSON.stringify(models)).replace(/'/g, "&#39;") + '\'>' + tabs + '<div class="mbody"></div></div>';
  }
  function renderModel(box, n) {
    var models = JSON.parse(box.getAttribute("data-models").replace(/&#39;/g, "'"));
    var m = models[n];
    box.querySelector(".mbody").innerHTML = '<div class="frame" data-embed="' + esc(m.embed) + '" data-title="' + esc(m.title) + '"><button class="btn primary load3d" type="button">Load the 3D model</button></div>' +
      '<p class="how">' + esc(m.how) + '</p><p class="credit">' + esc(m.credit) + ' <a href="' + esc(m.url) + '" target="_blank" rel="noopener">Open on Sketchfab</a></p>';
    wireMedia(box);
  }
  function wireMedia(root) {
    root.querySelectorAll(".viewer3d").forEach(function (box) {
      if (box.dataset.wired) return;
      box.dataset.wired = "1";
      box.querySelectorAll(".model-switch button").forEach(function (b) {
        b.addEventListener("click", function () {
          box.querySelectorAll(".model-switch button").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
          renderModel(box, +b.dataset.m);
        });
      });
      renderModel(box, 0);
    });
    root.querySelectorAll(".load3d").forEach(function (b) {
      b.addEventListener("click", function () {
        var f = b.parentNode;
        f.innerHTML = '<iframe title="3D model: ' + esc(f.dataset.title) + '" allow="autoplay; fullscreen; xr-spatial-tracking" allowfullscreen src="https://sketchfab.com/models/' + f.dataset.embed + '/embed?autostart=1&ui_infos=0&ui_ar=0&tracking=0&ui_watermark=0"></iframe>';
      });
    });
    root.querySelectorAll("figure.fig img").forEach(function (img) {
      img.addEventListener("error", function () {
        var cap = img.parentNode.querySelector("figcaption");
        img.replaceWith(Object.assign(document.createElement("p"), { className: "src", textContent: "The picture could not load. It needs an internet connection." }));
        if (cap) cap.style.display = "block";
      });
    });
  }

  /* ---------- left menu: subjects slide open to chapters, chapters slide open to lectures ---------- */
  var drawer = document.getElementById("drawer"), backdrop = document.getElementById("backdrop"), menuBtn = document.getElementById("menu-btn");
  var accN = 0;
  function accHTML(label, meta, inner, cls) {
    var id = "acc" + (++accN);
    return '<div class="acc ' + cls + '"><button class="accbtn" type="button" aria-expanded="false" aria-controls="' + id + '"><span class="lbl">' + esc(label) + "</span>" + (meta ? '<span class="pn">' + esc(meta) + "</span>" : "") + '<span class="chev" aria-hidden="true">\u203a</span></button>' +
      '<div class="accpanel" id="' + id + '"><div class="accinner">' + inner + "</div></div></div>";
  }
  function renderDrawer() {
    accN = 0;
    var h = '<div class="dhead"><span class="wordmark">Sina<span>.</span></span><button class="btn dclose" type="button">' + esc(T("nav.close")) + '</button></div>' +
      '<p class="dprog">' + esc(progName()) + '</p>' +
      '<a class="dlink" href="#/">' + esc(T("nav.home")) + '</a>';

    /* Category 0: Upcoming midterm lectures */
    if (progMidterms().length) {
      var midHTML = '<a class="dlink sub" href="#/midterm">All upcoming midterm lectures</a>' + progMidterms().map(function (m) {
        return '<p class="dsem">' + esc(m.title) + "</p>" + m.groups.map(function (g) {
          return accHTML(g.name, g.items.length + " lectures", '<ul class="dlist">' + g.items.map(function (id) {
            return S.lectures[id] ? '<li><a href="#/lecture/' + id + '">' + esc(lectureTitle(id)) + '<span class="dtag">Midterm</span></a></li>' : '<li><span class="dsoon-item"><span>' + esc(lectureTitle(id)) + "</span><em>Coming</em></span></li>";
          }).join("") + "</ul>", "chapter");
        }).join("");
      }).join("");
      h += accHTML("Upcoming midterm lectures", "", midHTML, "cat");
    }

    /* Category 1: Browse subjects (semesters, subjects, chapters, lectures) */
    var subjectsHTML = "";
    progSemesters().forEach(function (sem) {
      subjectsHTML += '<p class="dsem">' + esc(T("home.semester", { n: sem.replace(/^S/, "") })) + "</p>";
      progSubjects().filter(function (x) { return x.semester === sem; }).forEach(function (sub) {
        if (!sub.groups) { subjectsHTML += '<div class="dsoon"><span>' + esc(sub.name) + "</span><em>" + (sub.status === "next" ? "Up next" : "Planned") + "</em></div>"; return; }
        var chapters = sub.groups.map(function (g) {
          var n = g.items.filter(function (it) { return S.lectures[it.id]; }).length;
          var lectures = '<ul class="dlist">' + g.items.map(function (it) {
            if (!S.lectures[it.id]) return '<li><span class="dsoon-item"><span>' + esc(it.title) + "</span><em>Coming</em></span></li>";
            return '<li><a href="#/lecture/' + it.id + '">' + esc(it.title) + (onMidterm(it.id) ? '<span class="dtag">Midterm</span>' : "") + "</a></li>";
          }).join("") + "</ul>";
          return accHTML(g.name, n + " of " + g.items.length + " ready", lectures, "chapter");
        }).join("") + '<a class="dlink sub" href="#/subject/' + sub.id + '">Open the ' + esc(sub.name) + " page</a>";
        subjectsHTML += accHTML(sub.name, "", chapters, "subject");
      });
    });
    h += accHTML("Browse subjects", "", subjectsHTML, "cat");

    /* Category 2: Past papers, by subject */
    var withPapers = progSubjects().filter(function (sb) { return (S.papers || []).some(function (x) { return x.subject === sb.id; }); });
    var hasOther = (S.papers || []).some(function (x) { return x.program === PROG && !subjectById(x.subject); });
    var papersHTML = '<a class="dlink sub" href="#/papers">All past papers</a>' + withPapers.map(function (sb) {
      var n = (S.papers || []).filter(function (x) { return x.subject === sb.id; }).length;
      return '<a class="dlink sub" href="#/papers/' + sb.id + '"><span>' + esc(sb.name) + '</span><span class="pn">' + n + "</span></a>";
    }).join("") + (hasOther ? '<a class="dlink sub" href="#/papers">Other modules</a>' : "");
    h += accHTML("Past papers", "", papersHTML, "cat");

    /* Category 3: Useful apps */
    var appsList = '<a class="dlink sub" href="#/apps">All useful apps</a>' + (S.apps || []).map(function (r) {
      return '<a class="dlink sub" href="' + esc(r.url) + '" target="_blank" rel="noopener"><span>' + esc(r.title) + '</span><span class="pn">' + esc(r.kind || "") + "</span></a>";
    }).join("");
    h += accHTML("Useful apps", "", appsList, "cat");
    if (S.usmle) h += '<a class="dlink" href="#/usmle"><span>USMLE prep</span><span class="pn">Step 1</span></a>';

    h += '<a class="dlink" href="#/updates"><span>' + esc(T("nav.updates")) + '</span>' + (newBadge() ? '<span class="badge">new</span>' : "") + "</a>";
    drawer.innerHTML = h;
    drawer.scrollTop = 0;
    drawer.querySelector(".dclose").addEventListener("click", function () {
      closeDrawer();
    });
    drawer.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeDrawer); });
    var dc = drawer.querySelector(".dclose");
    if (dc) dc.textContent = "Close";
    drawer.querySelectorAll(".accbtn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var acc = btn.parentNode, open = !acc.classList.contains("open");
        if (open) Array.prototype.forEach.call(acc.parentNode.children, function (sib) {
          if (sib !== acc && sib.classList && sib.classList.contains("acc")) { sib.classList.remove("open"); sib.querySelector(".accbtn").setAttribute("aria-expanded", "false"); }
        });
        acc.classList.toggle("open", open);
        btn.setAttribute("aria-expanded", String(open));
      });
    });
  }
  function isOpen() { return drawer.classList.contains("is-open"); }
  function showDrawer(on, withBackdrop) {
    drawer.classList.toggle("is-open", on);
    drawer.setAttribute("aria-hidden", String(!on));
    backdrop.classList.toggle("is-open", !!(on && withBackdrop));
  }
  function openDrawer() {
    renderDrawer();
    showDrawer(true, true);
    document.body.classList.add("noscroll");
    menuBtn.setAttribute("aria-expanded", "true");
    var dc = drawer.querySelector(".dclose"); if (dc) dc.focus({ preventScroll: true });
  }
  function closeDrawer() {
    if (document.body.classList.contains("pinned")) return;
    if (!isOpen()) return;
    showDrawer(false, false);
    document.body.classList.remove("noscroll");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.focus({ preventScroll: true });
  }
  /* the menu is always an overlay: it never moves or resizes the page */
  function applyLayout() {
    if (document.body.classList.contains("pinned")) { document.body.classList.remove("pinned"); showDrawer(false, false); menuBtn.setAttribute("aria-expanded", "false"); }
  }
  menuBtn.addEventListener("click", function () { isOpen() ? closeDrawer() : openDrawer(); });
  backdrop.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeDrawer(); hideSearch(); } });
  drawer.querySelector && 0;

  /* ---------- search ---------- */
  function searchIndex() {
    var out = [];
    progSubjects().forEach(function (sub) {
      out.push({ kind: "Subject", title: sub.name, sub: sub.semester, href: sub.groups ? "#/subject/" + sub.id : null, hay: sub.name + " " + (sub.blurb || "") });
      (sub.groups || []).forEach(function (g) {
        g.items.forEach(function (it) {
          var lec = S.lectures[it.id], extra = "";
          if (lec) extra = (lec.exam || []).join(" ") + " " + (lec.summary || []).map(function (x) { return x.title; }).join(" ");
          out.push({ kind: lec ? "Lecture" : "Coming soon", title: it.title, sub: sub.name + " \u00b7 " + g.name,
                     href: lec ? "#/lecture/" + it.id : null, hay: it.title + " " + g.name + " " + sub.name + " " + extra });
        });
      });
    });
    (S.papers || []).forEach(function (x) {
      out.push({ kind: "Past paper", title: x.title, sub: (subjectById(x.subject) || {}).name || "", href: "#/paper/" + x.id, hay: x.title + " " + (x.year || "") });
    });
    return out;
  }
  var IDX = null, sBox = document.getElementById("search"), sInput = document.getElementById("search-input"), sRes = document.getElementById("search-results");
  function hideSearch() { sRes.hidden = true; sBox.classList.remove("open"); }
  function searchHits(q) {
    q = q.toLowerCase();
    if (!IDX) IDX = searchIndex();
    var words = q.split(/\s+/), scored = [];
    IDX.forEach(function (r) {
      var title = r.title.toLowerCase(), hay = r.hay.toLowerCase();
      var inTitle = words.every(function (w) { return title.indexOf(w) > -1; });
      var inAll = words.every(function (w) { return hay.indexOf(w) > -1; });
      var anyTitle = words.some(function (w) { return title.indexOf(w) > -1; });
      if (!inTitle && !inAll && !anyTitle) return;
      var score = inTitle ? 0 : anyTitle ? 1 : 2;
      if (r.kind === "Lecture") score -= 0.5;
      scored.push({ r: r, score: score });
    });
    scored.sort(function (a, b) { return a.score - b.score; });
    return scored.slice(0, 20).map(function (x) { return x.r; });
  }
  function hitsHTML(hits) {
    return hits.length
      ? hits.map(function (r) {
          var inner = '<span class="sk">' + esc(r.kind) + '</span><span class="st">' + esc(r.title) + '</span><span class="ss">' + esc(r.sub) + "</span>";
          return r.href ? '<a href="' + r.href + '">' + inner + "</a>" : '<span class="dim">' + inner + "</span>";
        }).join("")
      : '<p class="none">Nothing matches that yet.</p>';
  }
  function runSearch() {
    var q = sInput.value.trim();
    if (q.length < 2) { hideSearch(); return; }
    sRes.innerHTML = hitsHTML(searchHits(q));
    sRes.hidden = false; sBox.classList.add("open");
    sRes.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { sInput.value = ""; hideSearch(); closePhoneSearch(); }); });
  }
  /* On phones the header search is a magnifier button that opens a full-width bar. */
  var sToggle = document.getElementById("search-toggle");
  function closePhoneSearch() { document.body.classList.remove("search-open"); if (sToggle) sToggle.setAttribute("aria-expanded", "false"); }
  if (sToggle) sToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    var on = !document.body.classList.contains("search-open");
    document.body.classList.toggle("search-open", on); sToggle.setAttribute("aria-expanded", String(on));
    if (on) sInput.focus(); else hideSearch();
  });
  sInput.addEventListener("keydown", function (e) { if (e.key === "Escape") { hideSearch(); closePhoneSearch(); sInput.blur(); } });
  sInput.addEventListener("input", runSearch);
  sInput.addEventListener("focus", runSearch);
  document.addEventListener("click", function (e) { if (!sBox.contains(e.target) && e.target !== sToggle) { hideSearch(); closePhoneSearch(); } });

  /* ---------- generic labelled figure (schematic, drawn for this site) ---------- */
  function figArrow(a) {
    var sx = a.t[0] + a.d[0], sy = a.t[1] + a.d[1];
    var dx = a.t[0] - sx, dy = a.t[1] - sy, len = Math.sqrt(dx * dx + dy * dy) || 1;
    var ux = dx / len, uy = dy / len, gap = a.gap || 10;
    var ex = a.t[0] - ux * gap, ey = a.t[1] - uy * gap;
    var px = -uy, py = ux, hl = 13, hw = 6.5;
    var bx = ex - ux * hl, by = ey - uy * hl;
    return '<path class="arrow-halo" d="M ' + sx + " " + sy + " L " + bx + " " + by + '"/><path class="arrow-line" d="M ' + sx + " " + sy + " L " + bx + " " + by + '"/><polygon class="arrow-head" points="' + ex + "," + ey + " " + (bx + px * hw) + "," + (by + py * hw) + " " + (bx - px * hw) + "," + (by - py * hw) + '"/>';
  }
  function figureSVG(fig, cfg) {
    cfg = cfg || {};
    var quiz = cfg.mode === "quiz", uid = cfg.uid || "f";
    var out = '<svg class="fig-svg' + (quiz ? " quiz" : "") + '" viewBox="' + fig.viewBox + '" role="img" aria-label="' + esc(fig.alt || "Schematic diagram") + '">';
    out += fig.base || "";
    Object.keys(fig.parts).forEach(function (id) {
      var pt = fig.parts[id];
      var on = quiz && cfg.target === id;
      out += '<g class="fpart' + (on ? " hl" : "") + '" data-id="' + id + '">' + (pt.shape || "") + "</g>";
    });
    if (!quiz) {
      Object.keys(fig.parts).forEach(function (id) {
        var pt = fig.parts[id];
        if (!pt.label) return;
        if (pt.lead) out += '<path class="guide" d="M ' + pt.lead.map(function (q) { return q[0] + " " + q[1]; }).join(" L ") + '"/>';
        (Array.isArray(pt.label) ? pt.label : [pt.label]).forEach(function (line, i) {
          out += '<text class="flbl" x="' + pt.lx + '" y="' + (pt.ly + i * 16) + '" text-anchor="' + (pt.anchor || "middle") + '">' + esc(line) + "</text>";
        });
      });
    } else {
      ((fig.arrows && fig.arrows[cfg.target]) || []).forEach(function (a) { out += figArrow(a); });
    }
    return out + "</svg>";
  }

  /* ---------- views ---------- */
  function setView(html, title) {
    app.innerHTML = html;
    document.title = (title ? title + " | " : "") + "Sina";
    window.scrollTo(0, 0);
    var h = app.querySelector("h1"); if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
  }

  function appsHTML() {
    var list = S.usefulApps || []; if (!list.length) return "";
    return '<ul class="apps-grid">' + list.map(function (a) {
      var mono = esc(a.name.charAt(0));
      return '<li class="app-card"><div class="app-top"><span class="app-icon" aria-hidden="true"><span class="mono">' + mono + '</span>' +
        (a.domain ? '<img alt="" loading="lazy" src="https://www.google.com/s2/favicons?domain=' + esc(a.domain) + '&sz=64" onerror="this.remove()">' : "") + "</span>" +
        '<span class="app-head"><span class="app-name">' + esc(a.name) + '</span><span class="app-kind">' + esc(a.kind || "") + "</span></span></div>" +
        '<p class="app-desc">' + esc(a.desc) + "</p>" +
        '<div class="app-plat">' + (a.platforms || []).map(function (p) { return '<span class="chip">' + esc(p) + "</span>"; }).join("") + "</div>" +
        '<div class="app-actions">' + a.links.map(function (l, n) { return '<a class="btn' + (n === 0 ? " primary" : "") + '" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + "</a>"; }).join("") + "</div></li>";
    }).join("") + "</ul>";
  }
  function appsView() {
    setView('<div class="wrap wide"><p class="crumbs"><a href="#/">Home</a> / Useful apps</p><h1>Useful apps and resources</h1><p class="meta">Apps and websites recommended for medical students. They open in a new tab.</p>' + appsHTML() + "</div>", "Useful apps");
  }

  /* ---------- USMLE prep ---------- */
  function usmleView() {
    var U = S.usmle || { sections: [] };
    var COST = { "Free": "free", "Free trial": "trial", "Paid": "paid" };
    var html = '<div class="wrap wide"><p class="crumbs"><a href="#/">Home</a> / USMLE prep</p><h1>USMLE Step 1 prep</h1>' +
      '<p class="lede">Resources for students preparing for the USMLE Step 1 alongside the medical school curriculum. Start with the free ones; the paid ones are listed so you know what people mean when they mention them.</p>';
    if (U.drive) html += '<div class="usmle-drive"><div><h2>Shared PDF folder</h2><p>High-yield PDFs and documents collected for the promo, all in one Google Drive folder. New files are added regularly.</p></div><a class="btn primary" href="' + esc(U.drive) + '" target="_blank" rel="noopener">Open the Drive folder</a></div>';
    U.sections.forEach(function (sec) {
      html += "<h2>" + esc(sec.title) + '</h2><ul class="apps-grid">' + sec.items.map(function (a) {
        return '<li class="app-card"><div class="app-top"><span class="app-icon" aria-hidden="true"><span class="mono">' + esc(a.name.charAt(0)) + '</span>' +
          (a.domain ? '<img alt="" loading="lazy" src="https://www.google.com/s2/favicons?domain=' + esc(a.domain) + '&sz=64" onerror="this.remove()">' : "") + "</span>" +
          '<span class="app-head"><span class="app-name">' + esc(a.name) + '</span><span class="app-kind">' + esc(a.kind || "") + "</span></span></div>" +
          '<div class="app-plat"><span class="chip cost-' + (COST[a.cost] || "paid") + '">' + esc(a.cost) + "</span></div>" +
          '<p class="app-desc">' + esc(a.desc) + "</p>" +
          '<div class="app-actions">' + a.links.map(function (l, n) { return '<a class="btn' + (n === 0 ? " primary" : "") + '" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + "</a>"; }).join("") + "</div></li>";
      }).join("") + "</ul>";
    });
    html += '<p class="src" style="margin-top:1.6rem">Links open the official sites in a new tab. Suggestions for this page are welcome through the feedback form.</p>';
    setView(html + "</div>", "USMLE prep");
  }

  function firstLecture() {
    var subs = progSubjects().filter(function (x) { return x.groups; });
    for (var i = 0; i < subs.length; i++) for (var j = 0; j < subs[i].groups.length; j++) for (var k = 0; k < subs[i].groups[j].items.length; k++) { var id = subs[i].groups[j].items[k].id; if (S.lectures[id]) return id; }
    return "";
  }
  function homeView() {
    var sems = {}, semList = progSemesters();
    semList.forEach(function (k) { sems[k] = []; });
    progSubjects().forEach(function (s) { sems[s.semester].push(s); });
    function row(s) {
      var tag, inner, n = totalCount(s), r = s.groups ? readyCount(s) : 0;
      if (s.groups) tag = '<span class="tag live">' + (r === n ? n + " lectures" : r + " of " + n + " ready") + "</span>";
      else if (s.status === "next") tag = '<span class="tag">Up next</span>';
      else tag = '<span class="tag">Planned</span>';
      inner = '<span><span class="name">' + esc(s.name) + '</span>' + (s.blurb ? '<span class="desc">' + esc(s.blurb) + "</span>" : "") + "</span>" + tag;
      return s.groups ? '<li><a href="#/subject/' + s.id + '">' + inner + "</a></li>" : '<li><span class="static planned">' + inner + "</span></li>";
    }
    var mids = progMidterms(), midHTML = "";
    mids.forEach(function (m) {
      var n = 0; m.groups.forEach(function (g) { n += g.items.length; });
      midHTML += '<div class="mid-card"><p class="mid-eyebrow">Upcoming</p><h2>' + esc(m.title) + '</h2><p class="meta">' + (n === 1 ? "1 lecture" : n + " lectures") + ' on this exam.</p><div class="row">' +
        (n === 1 ? '<a class="btn primary" href="#/lecture/' + m.groups[0].items[0] + '">Revise the lecture</a>' : '<a class="btn primary" href="#/midterm">Revise the lectures</a>') + '<a class="btn" href="#/subject/' + m.subject + '/questions/midterm">Practice questions</a>' +
        ((S.papers || []).some(function (x) { return x.subject === m.subject; }) ? '<a class="btn" href="#/subject/' + m.subject + '/papers">Practice papers</a>' : "") + "</div></div>";
    });
    var html = '<div class="wrap wide"><section class="hero slim"><h1>Study each lecture, then test yourself on it.</h1>' +
      '<div class="home-search"><input id="home-search" type="search" placeholder="Search a lecture, subject or past paper" aria-label="Search lectures, subjects and past papers" autocomplete="off"><div class="home-results" id="home-results" hidden></div></div>' +
      midHTML +
      '<p class="meta home-links">' + (S.usmle ? '<a href="#/usmle">USMLE prep</a> &middot; ' : "") + '<a href="#/apps">Useful apps</a>' +
      (S.updated ? ' &middot; <a href="#/updates">What\'s new' + (newBadge() ? ' <span class="badge">new</span>' : "") + "</a>" : "") + "</p></section>" +
      '<h2 id="subjects">' + esc(T("home.subjects")) + ' <span class="prog-tag">' + esc(progName()) + '</span></h2>' +
      (semList.length ? semList.map(function (k) { return '<h3 class="sem-title">' + esc(T("home.semester", { n: k.replace(/^S/, "") })) + '</h3><ul class="subject-list">' + sems[k].map(row).join("") + "</ul>"; }).join("")
        : '<div class="empty-prog"><h3>' + esc(T("home.empty.title", { name: progName() })) + '</h3><p>' + esc(T("home.empty.body")) + '</p></div>') +
      "</div>";
    setView(html, "");
    var hi = document.getElementById("home-search"), hr = document.getElementById("home-results");
    function hs() {
      var q = hi.value.trim();
      if (q.length < 2) { hr.hidden = true; return; }
      hr.innerHTML = hitsHTML(searchHits(q)); hr.hidden = false;
    }
    hi.addEventListener("input", hs);
  }


  /* Midterms */
  function progMidterms() { return (S.midterms || []).filter(function (m) { return (m.program || S.DEFAULT_PROGRAM) === PROG; }); }
  function onMidterm(id) { return (S.midterms || []).some(function (m) { return m.groups.some(function (g) { return g.items.indexOf(id) >= 0; }); }); }
  function lectureTitle(id) {
    var t = "";
    S.subjects.forEach(function (s) { (s.groups || []).forEach(function (g) { g.items.forEach(function (it) { if (it.id === id) t = it.title; }); }); });
    return t || (S.lectures[id] ? S.lectures[id].title : id);
  }
  function midtermView() {
    var ms = progMidterms();
    var html = '<div class="wrap"><p class="crumbs"><a href="#/">Home</a> / Upcoming midterm lectures</p><h1>Upcoming midterm lectures</h1>';
    if (!ms.length) html += "<p>No midterm is listed for this year yet.</p>";
    ms.forEach(function (m) {
      var sb = subjectById(m.subject), n = 0;
      m.groups.forEach(function (g) { n += g.items.length; });
      html += '<section class="midterm"><h2 class="group-title">' + esc(m.title) + '</h2><p class="meta">' + (n === 1 ? "1 lecture" : n + " lectures") + (sb ? ' from <a href="#/subject/' + sb.id + '">' + esc(sb.name) + "</a>" : "") + (n === 1 ? ". Only this lecture is on this midterm.</p>" : ". Only these lectures are on this midterm.</p>") + (m.practice ? '<p><a class="btn primary" href="' + esc(m.practice.url) + '">' + esc(m.practice.label) + "</a></p>" : "");
      m.groups.forEach(function (g) {
        html += '<h3 class="mid-group">' + esc(g.name) + '</h3><ul class="lec-list">' + g.items.map(function (id) {
          return S.lectures[id]
            ? '<li><a href="#/lecture/' + id + '"><span>' + esc(lectureTitle(id)) + '</span><span class="pill mid">On the midterm</span></a></li>'
            : '<li><span class="soon"><span>' + esc(lectureTitle(id)) + '</span><span class="pill muted">Coming</span></span></li>';
        }).join("") + "</ul>";
      });
      html += "</section>";
    });
    setView(html + "</div>", "Upcoming midterm lectures");
  }
  /* ---------- class page: Lectures, Questions, Visual, High yield, Resources, Past papers ---------- */
  function subLectures(s) {
    var out = [];
    (s.groups || []).forEach(function (g) { g.items.forEach(function (it) { if (S.lectures[it.id]) out.push({ id: it.id, title: it.title, group: g.name }); }); });
    return out;
  }
  function subSections(s) {
    var L = subLectures(s).map(function (x) { return S.lectures[x.id]; });
    var secs = [["lectures", "Lectures"], ["questions", "Questions"]];
    if (L.some(function (l) { return l.visual && (l.visual.figure || l.visual.regions || l.visual.mindmap || l.visual.model3d || galleryImages(l.visual).length); })) secs.push(["visual", "Visual"]);
    if (L.some(function (l) { return l.highYield && l.highYield.length; })) secs.push(["highyield", "High yield"]);
    if (L.some(function (l) { return l.resources && l.resources.length; })) secs.push(["resources", "Resources"]);
    if ((S.papers || []).some(function (x) { return x.subject === s.id; })) secs.push(["papers", "Past papers"]);
    return secs;
  }
  function subjectMid(s) { return progMidterms().filter(function (m) { return m.subject === s.id; })[0]; }
  function wireTabs(root) {
    var cur = root.querySelector('.tab[aria-selected="true"]');
    if (cur && cur.scrollIntoView) { var t = cur.parentNode; t.scrollLeft = cur.offsetLeft - (t.clientWidth - cur.clientWidth) / 2; }
  }
  function subjectView(id, sec, arg) {
    var s = subjectById(id);
    if (!s || !s.groups) return notFound();
    var secs = subSections(s);
    if (!secs.some(function (x) { return x[0] === sec; })) sec = "lectures";
    var n = totalCount(s), r = readyCount(s);
    var html = '<div class="wrap"><p class="crumbs"><a href="#/">Home</a> / ' + esc(s.name) + "</p><h1>" + esc(s.name) + "</h1>" +
      '<p class="meta">' + (r === n ? n + " lectures" : r + " of " + n + " lectures ready") + (s.blurb ? ". " + esc(s.blurb) : "") + "</p>" +
      '<nav class="tabs sticky" aria-label="' + esc(s.name) + ' sections">' + secs.map(function (t) {
        return '<a class="tab" href="#/subject/' + s.id + (t[0] === "lectures" ? "" : "/" + t[0]) + '" aria-selected="' + (t[0] === sec) + '"' + (t[0] === sec ? ' aria-current="page"' : "") + ">" + t[1] + "</a>";
      }).join("") + '</nav><div id="panel"></div></div>';
    setView(html, s.name + (sec !== "lectures" ? " | " + secs.filter(function (x) { return x[0] === sec; })[0][1] : ""));
    wireTabs(app);
    var p = document.getElementById("panel");
    ({ lectures: subLecturesPanel, questions: subQuestionsPanel, visual: subVisualPanel, highyield: subHighYieldPanel, resources: subResourcesPanel, papers: subPapersPanel })[sec](p, s, arg);
  }
  function subLecturesPanel(p, s) {
    var mid = subjectMid(s), h = mid ? '<p class="mid-note"><span class="pill mid">Midterm</span> marks the lectures on the ' + esc(mid.title) + '. <a href="#/subject/' + s.id + '/questions/midterm">Practise just those</a>.</p>' : "";
    s.groups.forEach(function (g) {
      h += '<h2 class="group-title">' + esc(g.name) + '</h2><ul class="lec-list">' + g.items.map(function (it) {
        return S.lectures[it.id]
          ? '<li><a href="#/lecture/' + it.id + '"><span>' + esc(it.title) + "</span>" + (onMidterm(it.id) ? '<span class="pill mid">Midterm</span>' : "") + "</a></li>"
          : '<li><span class="soon"><span>' + esc(it.title) + '</span><span class="pill muted">Coming</span></span></li>';
      }).join("") + "</ul>";
    });
    p.innerHTML = h;
  }
  /* Lecture picker shared by Visual (one lecture) */
  function lecSelect(s, cur, filter) {
    return '<label class="pick"><span>Lecture</span><select id="lec-pick">' + s.groups.map(function (g) {
      var its = g.items.filter(function (it) { return S.lectures[it.id] && (!filter || filter(S.lectures[it.id])); });
      return its.length ? '<optgroup label="' + esc(g.name) + '">' + its.map(function (it) { return '<option value="' + it.id + '"' + (it.id === cur ? " selected" : "") + ">" + esc(it.title) + "</option>"; }).join("") + "</optgroup>" : "";
    }).join("") + "</select></label>";
  }
  function subQuestionsPanel(p, s, arg) {
    var mid = subjectMid(s), lecs = subLectures(s), key = "sina:pick:" + s.id;
    var picked = arg === "midterm" && mid ? [].concat.apply([], mid.groups.map(function (g) { return g.items; }))
      : (arg && S.lectures[arg] ? [arg] : store.get(key, []));
    picked = picked.filter(function (id) { return S.lectures[id] && S.lectures[id].subject === s.id; });
    var count = store.get("sina:qcount", "20");
    function nQ(ids) { return ids.reduce(function (a, id) { return a + (S.lectures[id].mcqs || []).length; }, 0); }
    function picker() {
      var h = '<p class="lede-s">Choose one or more lectures, then start. Questions from all the chosen lectures are mixed into one quiz.</p>' +
        '<div class="chips quick" role="group" aria-label="Quick choices"><button type="button" data-q="all">All lectures</button>' + (mid ? '<button type="button" data-q="mid">Midterm lectures</button>' : "") + '<button type="button" data-q="none">Clear</button></div>';
      s.groups.forEach(function (g, gi) {
        var its = g.items.filter(function (it) { return S.lectures[it.id]; });
        if (!its.length) return;
        h += '<div class="pick-group" role="group" aria-label="' + esc(g.name) + '"><label class="pick-row pick-head"><input type="checkbox" class="gchk" data-g="' + gi + '"><span>' + esc(g.name) + '</span><span class="qn">' + its.length + " lecture" + (its.length > 1 ? "s" : "") + "</span></label>" + its.map(function (it) {
          return '<label class="pick-row"><input type="checkbox" class="lchk" data-g="' + gi + '" value="' + it.id + '"' + (picked.indexOf(it.id) > -1 ? " checked" : "") + "><span>" + esc(it.title) + '</span><span class="qn">' + (S.lectures[it.id].mcqs || []).length + "</span></label>";
        }).join("") + "</div>";
      });
      h += '<div class="start-bar"><label class="pick"><span>Questions</span><select id="qcount">' + ["10", "20", "40", "all"].map(function (v) { return '<option value="' + v + '"' + (v === count ? " selected" : "") + ">" + (v === "all" ? "All" : v) + "</option>"; }).join("") + "</select></label>" +
        '<button class="btn primary" id="qstart" type="button">Start</button><span class="qsel" id="qsel"></span></div>';
      p.innerHTML = h;
      var boxes = p.querySelectorAll(".lchk");
      function sync() {
        picked = []; boxes.forEach(function (b) { if (b.checked) picked.push(b.value); });
        p.querySelectorAll(".gchk").forEach(function (g) {
          var mine = [].filter.call(boxes, function (b) { return b.dataset.g === g.dataset.g; }), on = mine.filter(function (b) { return b.checked; }).length;
          g.checked = on === mine.length && on > 0; g.indeterminate = on > 0 && on < mine.length;
        });
        var n = nQ(picked);
        p.querySelector("#qsel").textContent = picked.length ? picked.length + " lecture" + (picked.length > 1 ? "s" : "") + ", " + n + " questions" : "No lecture chosen";
        p.querySelector("#qstart").disabled = !picked.length;
      }
      boxes.forEach(function (b) { b.addEventListener("change", sync); });
      p.querySelectorAll(".gchk").forEach(function (g) { g.addEventListener("change", function () { boxes.forEach(function (b) { if (b.dataset.g === g.dataset.g) b.checked = g.checked; }); sync(); }); });
      p.querySelectorAll(".quick button").forEach(function (b) {
        b.addEventListener("click", function () {
          var ids = b.dataset.q === "all" ? lecs.map(function (x) { return x.id; }) : b.dataset.q === "mid" ? [].concat.apply([], mid.groups.map(function (g) { return g.items; })) : [];
          boxes.forEach(function (x) { x.checked = ids.indexOf(x.value) > -1; }); sync();
        });
      });
      p.querySelector("#qcount").addEventListener("change", function () { count = this.value; store.set("sina:qcount", count); });
      p.querySelector("#qstart").addEventListener("click", start);
      sync();
    }
    function start() {
      store.set(key, picked);
      var pool = [];
      picked.forEach(function (id) {
        var L = S.lectures[id], fig = L.visual && L.visual.figure;
        (L.mcqs || []).forEach(function (q) {
          if (q.target && !fig) return;
          var c = {}; for (var k in q) c[k] = q[k];
          c._fig = fig; c._from = picked.length > 1 ? lectureTitle(id) : ""; pool.push(c);
        });
      });
      pool = shuffle(pool);
      if (count !== "all") pool = pool.slice(0, +count);
      p.innerHTML = '<div class="quiz-top"><button class="btn small-btn" id="qback" type="button">&larr; Change lectures</button><span class="meta">' + esc(picked.length === 1 ? lectureTitle(picked[0]) : picked.length + " lectures mixed") + '</span></div><div id="quiz"></div>';
      p.querySelector("#qback").addEventListener("click", picker);
      questionsPanel(p.querySelector("#quiz"), { id: "mix:" + picked.slice().sort().join("+") + ":" + count, mcqs: pool });
      window.scrollTo(0, 0);
    }
    picker();
  }
  function subVisualPanel(p, s, arg) {
    var has = function (l) { return l.visual && (l.visual.figure || l.visual.regions || l.visual.mindmap || l.visual.model3d || galleryImages(l.visual).length); };
    var ids = subLectures(s).map(function (x) { return x.id; }).filter(function (id) { return has(S.lectures[id]); });
    var cur = ids.indexOf(arg) > -1 ? arg : ids[0];
    p.innerHTML = lecSelect(s, cur, has) + '<div id="vis"></div>';
    p.querySelector("#lec-pick").addEventListener("change", function () { location.replace("#/subject/" + s.id + "/visual/" + this.value); });
    visualPanel(p.querySelector("#vis"), S.lectures[cur]);
  }
  /* Collapsible list, one row per lecture: used by High yield and Resources */
  function perLecture(p, s, arg, intro, test, render, countLabel) {
    var lecs = subLectures(s).filter(function (x) { return test(S.lectures[x.id]); });
    var h = intro + '<div class="row exp"><button class="btn small-btn" type="button" data-x="1">Expand all</button><button class="btn small-btn" type="button" data-x="0">Collapse all</button></div>', lastG = "";
    lecs.forEach(function (x) {
      if (x.group !== lastG) { h += '<h2 class="group-title">' + esc(x.group) + "</h2>"; lastG = x.group; }
      h += '<details class="lec-acc" id="acc-' + x.id + '"' + (x.id === arg ? " open" : "") + '><summary><span>' + esc(x.title) + '</span><span class="qn">' + countLabel(S.lectures[x.id]) + '</span></summary><div class="acc-body" data-id="' + x.id + '"></div></details>';
    });
    p.innerHTML = h;
    function fill(d) { var b = d.querySelector(".acc-body"); if (!b.dataset.done) { b.dataset.done = "1"; render(b, S.lectures[b.dataset.id]); } }
    p.querySelectorAll(".lec-acc").forEach(function (d) { if (d.open) fill(d); d.addEventListener("toggle", function () { if (d.open) fill(d); }); });
    p.querySelectorAll(".exp button").forEach(function (b) { b.addEventListener("click", function () { p.querySelectorAll(".lec-acc").forEach(function (d) { d.open = b.dataset.x === "1"; }); }); });
    if (arg) { var t = document.getElementById("acc-" + arg); if (t) setTimeout(function () { t.scrollIntoView({ block: "start" }); }, 30); }
  }
  function subHighYieldPanel(p, s, arg) {
    perLecture(p, s, arg, '<p class="lede-s">Quick revision notes for each lecture: key facts, clinical links and memory aids. Open a lecture to see its notes.</p>',
      function (l) { return l.highYield && l.highYield.length; },
      function (b, l) { highYieldPanel(b, l, true); },
      function (l) { return l.highYield.length + " notes"; });
  }
  function resCard(r, kind) {
    return '<li class="rcard"><a class="rlink" href="' + esc(r.url) + '" target="_blank" rel="noopener"><span class="rthumb" data-host="' + esc(hostOf(r.url)) + '"><img loading="lazy" alt="" src="' + esc(previewSrc(r)) + '"><span class="rkind">' + esc(kind || r.kind) + '</span></span>' +
      '<span class="rbody"><span class="t">' + esc(r.title) + '</span><span class="w">' + esc(r.why) + '</span><span class="dom">' + esc(hostOf(r.url)) + "</span>" + (r.note ? '<span class="n">' + esc(r.note) + "</span>" : "") + "</span></a></li>";
  }
  function wireThumbs(root) {
    root.querySelectorAll(".rthumb img").forEach(function (img) {
      if (img.dataset.w) return; img.dataset.w = "1";
      img.addEventListener("error", function () {
        var box = img.parentNode; img.remove(); box.classList.add("nofoto");
        var f = document.createElement("span"); f.className = "rfallback"; f.textContent = box.dataset.host; box.insertBefore(f, box.firstChild);
      });
    });
  }
  function subResourcesPanel(p, s, arg) {
    perLecture(p, s, arg, '<p class="lede-s">Videos, websites and books chosen for each lecture. Open a lecture to see its links; they open in a new tab.</p>',
      function (l) { return l.resources && l.resources.length; },
      function (b, l) { b.innerHTML = '<ul class="rgrid">' + l.resources.map(function (r) { return resCard(r); }).join("") + "</ul>"; wireThumbs(b); },
      function (l) { return l.resources.length + " links"; });
    var chans = [], seen = {};
    [s.id].concat(subLectures(s).map(function (x) { return x.id; })).forEach(function (k) {
      ((S.channels && S.channels[k]) || []).forEach(function (r) { if (!seen[r.url]) { seen[r.url] = 1; chans.push(r); } });
    });
    var extra = "";
    if (chans.length) extra += '<details class="lec-acc"><summary><span>Channels worth following</span><span class="qn">' + chans.length + '</span></summary><div class="acc-body"><ul class="rgrid">' + chans.map(function (r) { return resCard(r, "Channel"); }).join("") + "</ul></div></details>";
    if (S.apps && S.apps.length) extra += '<details class="lec-acc"><summary><span>Apps and practice sites</span><span class="qn">' + S.apps.length + '</span></summary><div class="acc-body"><ul class="rgrid">' + S.apps.map(function (r) { return resCard(r); }).join("") + "</ul></div></details>";
    if (extra) { p.insertAdjacentHTML("beforeend", '<h2 class="group-title">For the whole class</h2>' + extra); wireThumbs(p); }
  }
  function subPapersPanel(p, s) {
    var list = (S.papers || []).filter(function (x) { return x.subject === s.id; });
    p.innerHTML = '<ul class="lec-list">' + list.map(paperRow).join("") + "</ul>";
  }

  function psaHTML() {
    if (store.get("sina:psaDismissed", false)) return "";
    return PSA;
  }
  var PSA = '<div class="psa"><button class="psa-close" type="button" aria-label="Close this note for good">&times;</button><strong>A quick word before you close this.</strong> Everything here is a study aid built from the lecture slides, not a replacement for them. Sit in your lectures, read your professor\'s slides and your textbooks, and use this site to make sense of them, revise them and test yourself. If something here disagrees with your professor, your professor is right.</div>';
  function wirePSA(root) {
    var x = root.querySelector(".psa-close");
    if (x) x.addEventListener("click", function () { store.set("sina:psaDismissed", true); x.closest(".psa").remove(); });
  }
  var TABS = [["summary", "Summary"], ["cards", "Flashcards"], ["deeper", "Go deeper"]];
  var MOVED = { questions: "questions", visual: "visual", highyield: "highyield", resources: "resources" };

  function lectureView(id, tab) {
    var lec = S.lectures[id];
    if (!lec) return notFound();
    var sub = subjectById(lec.subject);
    if (MOVED[tab]) { location.replace("#/subject/" + sub.id + "/" + MOVED[tab] + "/" + id); return; }
    tab = tab || "summary";
    if (!TABS.some(function (t) { return t[0] === tab; })) tab = "summary";
    var secs = subSections(sub).map(function (x) { return x[0]; });
    var did = driveId(lec.sourceUrl), ppt = /\.pptx?\b/i.test(lec.sourceFile || ""), who = lecturer(lec);
    var more = [];
    if (did) more.push('<a role="menuitem" href="https://drive.google.com/uc?export=download&amp;id=' + esc(did) + '" target="_blank" rel="noopener">' + ICON.dl + "Download lecture" + (ppt ? " (PowerPoint)" : "") + "</a>");
    more.push('<a role="menuitem" href="#/subject/' + sub.id + "/questions/" + id + '">' + ICON.q + "Practice questions</a>");
    if (secs.indexOf("visual") > -1 && lec.visual) more.push('<a role="menuitem" href="#/subject/' + sub.id + "/visual/" + id + '">' + ICON.v + "Visual</a>");
    if (lec.highYield && lec.highYield.length) more.push('<a role="menuitem" href="#/subject/' + sub.id + "/highyield/" + id + '">' + ICON.hy + "High yield notes</a>");
    if (lec.resources && lec.resources.length) more.push('<a role="menuitem" href="#/subject/' + sub.id + "/resources/" + id + '">' + ICON.r + "Videos and websites</a>");
    var html = '<div class="wrap"><p class="crumbs"><a href="#/">Home</a> / <a href="#/subject/' + sub.id + '">' + esc(sub.name) + "</a></p>" +
      '<div class="lec-head"><h1>' + esc(lec.title) + '</h1><div class="more"><button class="more-btn" id="more-btn" type="button" aria-haspopup="true" aria-expanded="false" aria-label="Lecture options">' + ICON.dots + '</button><div class="more-menu" id="more-menu" role="menu" hidden>' + more.join("") + "</div></div></div>" +
      '<p class="meta lec-meta">' + [who ? esc(who) : "", onMidterm(id) ? '<span class="pill mid">Midterm</span>' : ""].filter(Boolean).join(" &middot; ") + "</p>" +
      '<div class="tabs sticky" role="tablist" aria-label="Lecture sections">' + TABS.map(function (t) {
        return '<button class="tab" role="tab" id="tab-' + t[0] + '" aria-selected="' + (t[0] === tab) + '" data-tab="' + t[0] + '">' + t[1] + "</button>";
      }).join("") + '</div><div id="panel" role="tabpanel" aria-labelledby="tab-' + tab + '"></div>' + prevNextHTML(sub, id) + psaHTML() + "</div>";
    setView(html, lec.title);
    wireTabs(app);
    var panel = document.getElementById("panel");
    ({ summary: summaryPanel, cards: cardsPanel, deeper: deeperPanel })[tab](panel, lec);
    app.querySelectorAll(".tab").forEach(function (b) {
      b.addEventListener("click", function () { location.hash = "#/lecture/" + id + (b.dataset.tab === "summary" ? "" : "/" + b.dataset.tab); });
    });
    var mb = document.getElementById("more-btn"), mm = document.getElementById("more-menu");
    function openMore(on) { mm.hidden = !on; mb.setAttribute("aria-expanded", String(on)); if (on) { var f = mm.querySelector("a"); if (f) f.focus(); } }
    mb.addEventListener("click", function (e) { e.stopPropagation(); openMore(mm.hidden); });
    mm.addEventListener("keydown", function (e) { if (e.key === "Escape") { openMore(false); mb.focus(); } });
    document.addEventListener("click", function off(e) { if (!mm.contains(e.target)) { mm.hidden = true; mb.setAttribute("aria-expanded", "false"); } if (!document.body.contains(mm)) document.removeEventListener("click", off); });
    wirePSA(app);
  }
  var ICON = {
    dots: '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><circle cx="5" cy="12" r="2" fill="currentColor"/><circle cx="12" cy="12" r="2" fill="currentColor"/><circle cx="19" cy="12" r="2" fill="currentColor"/></svg>',
    dl: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14"/></svg>',
    q: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M9 11l3 3L21 5M20 12v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h11"/></svg>',
    v: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M4 5h16v14H4zM4 15l5-5 4 4 3-3 4 4"/></svg>',
    hy: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round" d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z"/></svg>',
    r: '<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg>'
  };
  function prevNextHTML(sub, id) {
    var L = subLectures(sub), i = L.map(function (x) { return x.id; }).indexOf(id);
    if (i < 0) return "";
    var pv = L[i - 1], nx = L[i + 1];
    return '<nav class="prevnext" aria-label="Other lectures">' +
      (pv ? '<a class="pn prev" href="#/lecture/' + pv.id + '"><span class="pn-k">&larr; Previous</span><span class="pn-t">' + esc(pv.title) + "</span></a>" : "<span></span>") +
      (nx ? '<a class="pn next" href="#/lecture/' + nx.id + '"><span class="pn-k">Next &rarr;</span><span class="pn-t">' + esc(nx.title) + "</span></a>" : "<span></span>") + "</nav>";
  }

  function highYieldPanel(p, lec, noIntro) {
    var HYT = { note: "Note", clinic: "Clinical", mnemo: "Memory aid" };
    var order = ["note", "clinic", "mnemo"];
    var counts = {}; lec.highYield.forEach(function (x) { counts[x.t] = (counts[x.t] || 0) + 1; });
    var h = (noIntro ? "" : '<p class="hy-intro">Quick notes to help you revise this lecture: key facts, clinical links and a few memory aids. Nothing here is extra to learn by heart; the Summary tab has the full explanation.</p>') +
      '<div class="hy-filter" role="group" aria-label="Show">' +
      '<button class="chip hy-f" data-f="all" aria-pressed="true">All (' + lec.highYield.length + ')</button>' +
      order.filter(function (t) { return counts[t]; }).map(function (t) {
        return '<button class="chip hy-f" data-f="' + t + '" aria-pressed="false"><span class="hy-dot hy-' + t + '"></span>' + HYT[t] + " (" + counts[t] + ")</button>";
      }).join("") + "</div>" +
      '<ul class="hy-list">' + lec.highYield.map(function (x) {
        return '<li data-t="' + esc(x.t) + '"><span class="hy-tag hy-' + esc(x.t) + '">' + esc(HYT[x.t] || x.t) + "</span> " + x.html + "</li>";
      }).join("") + "</ul>";
    p.innerHTML = h;
    p.querySelectorAll(".hy-f").forEach(function (b) {
      b.addEventListener("click", function () {
        var f = b.dataset.f;
        p.querySelectorAll(".hy-f").forEach(function (o) { o.setAttribute("aria-pressed", String(o === b)); });
        p.querySelectorAll(".hy-list li").forEach(function (li) { li.hidden = !(f === "all" || li.dataset.t === f); });
      });
    });
  }

  function summaryPanel(p, lec) {
    var h = '<p class="buildnote">' + ICON.info + "Built from the lecture slides. If your professor says otherwise, trust your professor.</p>";
    if (lec.summary.length > 3) h += '<details class="toc"><summary>On this page</summary><ol>' + lec.summary.map(function (s, i) { return '<li><button type="button" data-to="sec-' + i + '">' + esc(s.title) + "</button></li>"; }).join("") + '<li><button type="button" data-to="sec-key">Key points</button></li></ol></details>';
    lec.summary.forEach(function (s, i) { h += '<h2 id="sec-' + i + '">' + esc(s.title) + "</h2>" + s.html; });
    h += "<h2 id='sec-key'>Key points</h2><ul class='exam-list'>" + lec.exam.map(function (e) { return "<li>" + esc(e) + "</li>"; }).join("") + "</ul>";
    h += (lec.sources && lec.sources.length)
      ? '<div class="foot"><p>Facts on this page were checked against these references (last check ' + esc(lec.verified) + "). Student flashcard sets were used only as a secondary consistency check.</p><ul class='sources'>" + lec.sources.map(function (s) { return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.name) + "</a></li>"; }).join("") + "</ul></div>"
      : '<div class="foot"><p>Built from the lecture slides (last check ' + esc(lec.verified) + "). Outside references will be added with the full version.</p></div>";
    p.innerHTML = h;
    p.querySelectorAll(".toc button").forEach(function (b) {
      b.addEventListener("click", function () { var t = document.getElementById(b.dataset.to); if (t) { t.scrollIntoView({ behavior: "smooth", block: "start" }); b.closest("details").open = false; } });
    });
    wireMedia(p);
  }
  ICON.info = '<svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true"><circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 11v6M12 7.5v.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';

  /* ---------- reference pictures: a small carousel, broken pictures drop out ---------- */

  /* Source slides: Drive preview can fail on big or heavy files (often PowerPoints),
     so every Drive source also gets a direct download link. */
  function driveId(u) { var m = /drive\.google\.com\/(?:file\/d\/|open\?id=)([\w-]{20,})/.exec(u || ""); return m ? m[1] : ""; }
  /* One "Download lecture" button instead of the long source line. The professor's name
     (taken from the source note) sits beside it in small text. */
  function lecturer(lec) {
    var m = /\(([^()]*)\)\s*$/.exec(lec.sourceFile || "");
    if (!m) return "";
    var p = m[1].split(/,\s*/).filter(function (x) { return /^(Prof|Pr|Dr)\b/.test(x); });
    return p.join(", ");
  }
  function sourceLine(lec) {
    var who = lecturer(lec);
    var id = driveId(lec.sourceUrl), ppt = /\.pptx?\b/i.test(lec.sourceFile || "");
    if (!id) return who ? '<p class="meta">' + esc(who) + "</p>" : "";
    return '<p class="srcline"><a class="dlbtn" href="https://drive.google.com/uc?export=download&amp;id=' + esc(id) + '" target="_blank" rel="noopener" title="' + esc(lec.sourceFile || "") + '">' +
      '<svg aria-hidden="true" viewBox="0 0 24 24" width="16" height="16"><path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="M12 4v11m0 0-4-4m4 4 4-4M5 20h14"/></svg>' +
      "Download lecture" + (ppt ? " (PowerPoint)" : "") + "</a>" + (who ? '<span class="srcwho">' + esc(who) + "</span>" : "") + "</p>";
  }
  function galleryImages(v) { return (v.images && v.images.length ? v.images : (v.image ? [v.image] : [])).filter(function (im) { return im && im.src; }); }
  function galleryHTML(v) {
    var ims = galleryImages(v); if (!ims.length) return "";
    return "<h2 style='margin-top:0'>Reference pictures</h2><div class='gallery' data-ims='" + esc(JSON.stringify(ims)).replace(/'/g, "&#39;") + "'></div>";
  }
  function commonsPage(src) { var m = /Special:FilePath\/([^?]+)/.exec(src); return m ? "https://commons.wikimedia.org/wiki/File:" + m[1] : src; }
  function wireGallery(root) {
    root.querySelectorAll(".gallery").forEach(function (g) {
      if (g.dataset.wired) return; g.dataset.wired = "1";
      var ims = JSON.parse(g.getAttribute("data-ims").replace(/&#39;/g, "'")), i = 0, x0 = null;
      function draw() {
        if (!ims.length) { g.innerHTML = "<p class='src'>The pictures could not load. They need an internet connection.</p>"; return; }
        if (i >= ims.length) i = 0;
        var im = ims[i], many = ims.length > 1;
        g.innerHTML = "<figure class='fig gfig'><div class='gstage'>" +
          (many ? "<button type='button' class='gnav prev' aria-label='Previous picture'>&#8249;</button>" : "") +
          "<img src='" + esc(im.src) + "' alt='" + esc(im.alt || im.caption || "") + "'>" +
          (many ? "<button type='button' class='gnav next' aria-label='Next picture'>&#8250;</button>" : "") +
          "</div><figcaption>" + (many ? "<span class='gcount'>" + (i + 1) + " / " + ims.length + "</span>" : "") + esc(im.caption || "") +
          " <a href='" + esc(commonsPage(im.src)) + "' target='_blank' rel='noopener'>Full size</a>" + (im.credit ? "<span class='gcredit'>" + esc(im.credit) + "</span>" : "") + "</figcaption>" +
          (many ? "<div class='gdots' role='group' aria-label='Choose a picture'>" + ims.map(function (m, n) { return "<button type='button' data-n='" + n + "' aria-label='Picture " + (n + 1) + ": " + esc(m.caption || "") + "' aria-pressed='" + (n === i) + "'></button>"; }).join("") + "</div>" : "") +
          "</figure>";
        var img = g.querySelector("img");
        img.addEventListener("error", function () { ims.splice(i, 1); draw(); });
        var pv = g.querySelector(".prev"), nx = g.querySelector(".next");
        if (pv) pv.addEventListener("click", function () { go(-1); });
        if (nx) nx.addEventListener("click", function () { go(1); });
        g.querySelectorAll(".gdots button").forEach(function (b) { b.addEventListener("click", function () { i = +b.dataset.n; draw(); }); });
      }
      function go(d) { i = (i + d + ims.length) % ims.length; draw(); var b = g.querySelector(d < 0 ? ".prev" : ".next"); if (b) b.focus(); }
      g.addEventListener("keydown", function (e) { if (ims.length < 2) return; if (e.key === "ArrowLeft") go(-1); else if (e.key === "ArrowRight") go(1); });
      g.addEventListener("touchstart", function (e) { x0 = e.touches[0].clientX; }, { passive: true });
      g.addEventListener("touchend", function (e) { if (x0 === null || ims.length < 2) return; var dx = e.changedTouches[0].clientX - x0; if (Math.abs(dx) > 45) go(dx < 0 ? 1 : -1); x0 = null; });
      draw();
    });
  }

  /* mind map: root + colour-coded branches; nodes are "text" or ["text", [children]] */
  function mmNode(n, depth) {
    var label = Array.isArray(n) ? n[0] : n, kids = Array.isArray(n) ? (n[1] || []) : [];
    if (!kids.length) return '<li class="mm-leaf">' + esc(label) + "</li>";
    return '<li class="mm-sub"><button type="button" class="mm-tog" aria-expanded="false"><span class="mm-caret" aria-hidden="true"></span>' + esc(label) +
      '</button><ul class="mm-kids" hidden>' + kids.map(function (k) { return mmNode(k, depth + 1); }).join("") + "</ul></li>";
  }
  function mindmapHTML(mm) {
    if (!mm || !mm.branches) return "";
    return '<h2 style="margin-top:0">Mind map</h2><p class="meta">The whole lecture at a glance. Tap a branch to open it.</p>' +
      '<div class="mm"><div class="mm-tools"><button type="button" class="btn mm-all" data-open="1">Expand all</button><button type="button" class="btn mm-all" data-open="0">Collapse all</button></div>' +
      '<div class="mm-root">' + esc(mm.root) + '</div><div class="mm-branches">' +
      mm.branches.map(function (b, i) {
        var label = Array.isArray(b) ? b[0] : b, kids = Array.isArray(b) ? (b[1] || []) : [];
        return '<div class="mm-branch" style="--mmc:var(--mm' + (i % 6 + 1) + ')"><button type="button" class="mm-head mm-tog" aria-expanded="false"><span class="mm-caret" aria-hidden="true"></span>' + esc(label) +
          (kids.length ? '<span class="mm-n">' + kids.length + "</span>" : "") + '</button><ul class="mm-kids" hidden>' + kids.map(function (k) { return mmNode(k, 1); }).join("") + "</ul></div>";
      }).join("") + "</div></div>";
  }
  function wireMindmap(p) {
    function set(btn, open) { btn.setAttribute("aria-expanded", String(open)); var ul = btn.nextElementSibling; if (ul) ul.hidden = !open; }
    p.querySelectorAll(".mm-tog").forEach(function (b) { b.addEventListener("click", function () { set(b, b.getAttribute("aria-expanded") !== "true"); }); });
    p.querySelectorAll(".mm-all").forEach(function (b) { b.addEventListener("click", function () { var o = b.dataset.open === "1"; p.querySelectorAll(".mm-tog").forEach(function (t) { set(t, o); }); }); });
  }

  function visualPanel(p, lec) {
    var v = lec.visual, layer = "walls";
    var hints = { walls: "Tap a wall to see which bones form it.", margins: "Tap a green edge to see which bones form that part of the rim.", openings: "Tap a dark opening to see what passes through it.", landmarks: "Tap a dashed outline to see what it is." };
    if (!v.regions) {
      var h2 = v.model3d ? "<h2 style='margin-top:0'>3D model</h2>" + viewer3dHTML(v.models || v.model3d) : "";
      var gal = galleryHTML(v);
      if (gal) h2 = gal + h2;
      var mmh = mindmapHTML(v.mindmap);
      if (mmh) h2 = mmh + (h2 ? h2.replace("<h2 style='margin-top:0'>", "<h2>").replace('<h2 style="margin-top:0">', "<h2>") : "");
      if (v.figure) h2 += "<h2" + (h2 ? "" : " style='margin-top:0'") + ">Labelled schematic</h2><p>" + esc(v.figure.caption || "Schematic drawn for this site, not to scale.") + '</p><div class="diagram-box">' + figureSVG(v.figure, { uid: "vis" }) + "</div>";
      p.innerHTML = h2 || "<p>No visual for this lecture yet.</p>";
      wireMedia(p); wireGallery(p); wireMindmap(p);
      return;
    }
    var gal0 = galleryHTML(v);
    var m3 = gal0 + (v.model3d ? "<h2" + (gal0 ? "" : " style='margin-top:0'") + ">3D model</h2>" + viewer3dHTML(v.models || v.model3d) : "") + ((gal0 || v.model3d) ? "<h2>Labelled schematic</h2>" : "");
    p.innerHTML = m3 + "<p>" + esc(v.intro) + '</p><div class="layer-switch" role="group" aria-label="Diagram layer">' + ["walls", "margins", "openings", "landmarks"].map(function (l) { return '<button data-layer="' + l + '" aria-pressed="' + (l === layer) + '">' + l.charAt(0).toUpperCase() + l.slice(1) + "</button>"; }).join("") +
      '</div><div class="diagram-box" id="dia"></div><div class="info" id="info" aria-live="polite"></div>';
    wireGallery(p);
    var dia = document.getElementById("dia"), info = document.getElementById("info");
    function drawDia() { dia.innerHTML = orbitSVG({ mode: "explore", layer: layer, uid: "vis" }); info.innerHTML = "<p>" + hints[layer] + "</p>"; wire(); }
    function select(id) {
      var r = v.regions[id]; if (!r || r.layer !== layer) return;
      dia.querySelectorAll(".sel").forEach(function (e) { e.classList.remove("sel"); });
      var el = dia.querySelector('[data-id="' + id + '"]'); if (el) { el.classList.add("sel"); el.querySelectorAll && el.querySelectorAll(".shape, line:not(.hit)").forEach(function (e) { e.classList.add("sel"); }); }
      info.innerHTML = "<h3>" + esc(r.title) + "</h3>" + r.body;
    }
    function wire() {
      dia.querySelectorAll("[data-id]").forEach(function (el) {
        var r = v.regions[el.dataset.id];
        if (r && r.layer === layer) { el.setAttribute("tabindex", "0"); el.setAttribute("role", "button"); el.setAttribute("aria-label", r.title); }
        el.addEventListener("click", function () { select(el.dataset.id); });
        el.addEventListener("keydown", function (e) { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); select(el.dataset.id); } });
      });
    }
    p.querySelectorAll(".layer-switch button").forEach(function (b) {
      b.addEventListener("click", function () {
        layer = b.dataset.layer;
        p.querySelectorAll(".layer-switch button").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
        drawDia();
      });
    });
    drawDia();
    wireMedia(p);
  }

  /* Lecture slide(s) that prove an answer: collapsed until opened, then click to see full size. */
  function slidesHTML(q) {
    if (!q.slides || !q.slides.length) return "";
    var groups = [];
    q.slides.forEach(function (s) { var g = groups.filter(function (x) { return x.lec === s.lec; })[0]; if (g) g.n.push(s.n); else groups.push({ lec: s.lec, n: [s.n] }); });
    var unit = q.slides[0].unit || "slide";
    var lbl = groups.map(function (g) { return g.lec + ", " + unit + (g.n.length > 1 ? "s " : " ") + g.n.join(" and "); }).join("; ");
    return '<details class="slide-ref"><summary>See the ' + unit + (q.slides.length > 1 ? "s" : "") + " that explain" + (q.slides.length > 1 ? "" : "s") + " this <span>(" + esc(lbl) + ")</span></summary>" +
      q.slides.map(function (s) {
        return '<figure><a href="' + esc(s.src) + '" target="_blank" rel="noopener" title="Open full size"><img loading="lazy" src="' + esc(s.src) + '" alt="' + esc(s.lec) + ", " + unit + " " + s.n + '"></a><figcaption>' + esc(s.lec) + ", " + unit + " " + s.n + ". Tap to open full size.</figcaption></figure>";
      }).join("") + "</details>";
  }

  function questionsPanel(p, lec) {
    var all = lec.mcqs, qs = all, i = 0, score = 0, wrong = [], key = "sina:best:" + lec.id, LET = "abcdefgh";
    function keyText(q) {
      var ans = q.answers || [q.answer];
      return ans.map(function (n) { return LET[n] + ". " + q.options[n]; }).join(" and ");
    }
    function feedback(q, ok) {
      var head = ok ? "Correct." : "Not quite.";
      var body = q.why ? " " + esc(q.why) : "";
      return '<div class="why"><strong>' + head + "</strong> Correct answer: " + esc(keyText(q)) + "." + body + "</div>" + slidesHTML(q) + '<button class="btn primary" id="nx">' + (i + 1 < qs.length ? "Next question" : "See score") + "</button>";
    }
    function render() {
      if (i >= qs.length) {
        var full = qs === all, best = store.get(key, 0);
        if (full && score > best) { best = score; store.set(key, best); }
        var missed = wrong.slice();
        p.innerHTML = '<div class="score">' + score + " / " + qs.length + "</div>" +
          (full ? "<p>Best score on this device: " + best + " / " + all.length + ".</p>" : "<p>Retry of the questions you missed.</p>") +
          '<div class="row">' + (missed.length ? '<button class="btn primary" id="rev">Show only my wrong answers (' + missed.length + ')</button><button class="btn" id="retry">Retry only these</button>' : '<p class="src">No wrong answers. Well done.</p>') +
          '<button class="btn" id="again">' + (full ? "Try again" : "Back to the full quiz") + '</button></div><div id="review"></div>';
        p.querySelector("#again").onclick = function () { qs = all; i = 0; score = 0; wrong = []; render(); };
        if (missed.length) {
          p.querySelector("#retry").onclick = function () { qs = missed.map(function (w) { return w.q; }); i = 0; score = 0; wrong = []; render(); };
          p.querySelector("#rev").onclick = function () {
            var box = p.querySelector("#review");
            if (box.innerHTML) { box.innerHTML = ""; this.textContent = "Show only my wrong answers (" + missed.length + ")"; return; }
            this.textContent = "Hide my wrong answers";
            box.innerHTML = '<h2 class="rev-h">Your wrong answers</h2>' + missed.map(function (w) {
              var q = w.q, ans = q.answers || [q.answer];
              return '<div class="rev-item"><p class="qhead">Question ' + w.n + '</p><p class="qtext">' + esc(q.q) + "</p>" +
                q.options.map(function (o, n) {
                  var cls = ans.indexOf(n) > -1 ? " correct" : (w.chosen.indexOf(n) > -1 ? " wrong" : "");
                  var tag = ans.indexOf(n) > -1 ? '<span class="rev-tag">Correct answer</span>' : (w.chosen.indexOf(n) > -1 ? '<span class="rev-tag">Your answer</span>' : "");
                  return '<div class="opt static' + cls + '"><span class="letter">' + LET[n].toUpperCase() + "</span><span>" + esc(o) + "</span>" + tag + "</div>";
                }).join("") + (q.why ? '<div class="why">' + esc(q.why) + "</div>" : "") + slidesHTML(q) + "</div>";
            }).join("");
            box.scrollIntoView({ behavior: "smooth", block: "start" });
          };
        }
        return;
      }
      var q = qs[i], multi = !!(q.multi || (q.answers && q.answers.length > 1));
      var qfig = q._fig || (lec.visual && lec.visual.figure);
      var pic = (q.target && qfig)
        ? '<div class="diagram-box qfig">' + figureSVG(qfig, { mode: "quiz", target: q.target, uid: "q" + i }) + "</div>"
        : "";
      p.innerHTML = '<p class="qhead">Question ' + (i + 1) + " of " + qs.length + (multi ? ", choose all correct answers" : "") + (q._from ? '<span class="qfrom">' + esc(q._from) + "</span>" : "") + '</p><div class="bar-track"><div class="bar-fill" style="width:' + (i / qs.length * 100) + '%"></div></div><p class="qtext">' + esc(q.q) + "</p>" + pic +
        q.options.map(function (o, n) { return '<button class="opt" data-n="' + n + '" aria-pressed="false"><span class="letter">' + LET[n].toUpperCase() + "</span><span>" + esc(o) + "</span></button>"; }).join("") + (multi ? '<button class="btn primary" id="chk" type="button">Check my answer</button>' : "") + '<div id="fb"></div>';
      var opts = p.querySelectorAll(".opt");
      function finish(chosen) {
        var ans = q.answers || [q.answer];
        var ok = chosen.length === ans.length && chosen.every(function (n) { return ans.indexOf(n) > -1; });
        if (ok) score++; else wrong.push({ q: q, n: i + 1, chosen: chosen });
        opts.forEach(function (x) {
          var n = +x.dataset.n; x.disabled = true;
          if (ans.indexOf(n) > -1) x.classList.add("correct"); else if (chosen.indexOf(n) > -1) x.classList.add("wrong");
        });
        var c = p.querySelector("#chk"); if (c) c.remove();
        document.getElementById("fb").innerHTML = feedback(q, ok);
        document.getElementById("nx").onclick = function () { i++; render(); };
        document.getElementById("nx").focus();
      }
      if (multi) {
        opts.forEach(function (b) { b.addEventListener("click", function () { var on = b.getAttribute("aria-pressed") !== "true"; b.setAttribute("aria-pressed", String(on)); b.classList.toggle("picked", on); }); });
        p.querySelector("#chk").addEventListener("click", function () {
          var chosen = []; opts.forEach(function (b) { if (b.getAttribute("aria-pressed") === "true") chosen.push(+b.dataset.n); });
          finish(chosen);
        });
      } else {
        opts.forEach(function (b) { b.addEventListener("click", function () { finish([+b.dataset.n]); }); });
      }
    }
    render();
  }

  function cardsPanel(p, lec) {
    var key = "sina:known:" + lec.id, known = store.get(key, []), filter = "all", order = lec.cards.map(function (c) { return c.id; }), pos = 0, shown = false;
    var byId = {}; lec.cards.forEach(function (c) { byId[c.id] = c; });
    function list() { return order.filter(function (id) { return filter === "all" || byId[id].type === filter; }); }
    function render() {
      var L = list();
      if (pos >= L.length) pos = 0;
      var c = byId[L[pos]], nk = L.filter(function (id) { return known.indexOf(id) > -1; }).length;
      var pic = "";
      if (c.type === "image") {
        pic = lec.visual && lec.visual.figure
          ? '<div class="diagram-box">' + figureSVG(lec.visual.figure, { mode: "quiz", target: c.target, uid: "fc" }) + "</div>"
          : '<div class="diagram-box">' + orbitSVG({ mode: "quiz", target: c.target, uid: "fc" }) + "</div>";
      }
      var front = '<div class="kind">' + (c.type === "image" ? "Picture card" : "Text card") + '</div><div class="front">' + esc(c.front) + "</div>" + pic;
      var kinds = lec.cards.some(function (x) { return x.type === "image"; }) ? [["all", "All"], ["text", "Text"], ["image", "Pictures"]] : [];
      p.innerHTML = '<div class="deck-tools"><div class="chips" role="group" aria-label="Card type">' + kinds.map(function (f) { return '<button data-f="' + f[0] + '" aria-pressed="' + (f[0] === filter) + '">' + f[1] + "</button>"; }).join("") +
        '</div><span class="progress-line">Card ' + (pos + 1) + " of " + L.length + ", " + nk + ' known</span></div><div class="fcard" aria-live="polite">' + front +
        (shown ? '<div class="back"><p>' + esc(c.back) + "</p></div>" : "") + '</div><div class="row" style="margin-top:1rem">' +
        (shown ? '<button class="btn primary" id="got">I knew it</button><button class="btn" id="again">Still learning</button>' : '<button class="btn primary" id="rev">Show answer</button>') +
        '<button class="btn" id="shuf">Shuffle</button><button class="btn" id="rst">Reset progress</button></div>';
      p.querySelectorAll(".chips button").forEach(function (b) { b.onclick = function () { filter = b.dataset.f; pos = 0; shown = false; render(); }; });
      var $ = function (s) { return p.querySelector(s); };
      if ($("#rev")) $("#rev").onclick = function () { shown = true; render(); var g = p.querySelector("#got"); if (g) g.focus(); };
      if ($("#got")) $("#got").onclick = function () { if (known.indexOf(c.id) < 0) known.push(c.id); store.set(key, known); pos++; shown = false; render(); };
      if ($("#again")) $("#again").onclick = function () { pos++; shown = false; render(); };
      $("#shuf").onclick = function () { order = shuffle(order); pos = 0; shown = false; render(); };
      $("#rst").onclick = function () { known = []; store.set(key, known); pos = 0; shown = false; render(); };
    }
    render();
  }

  function deeperPanel(p, lec) {
    if (!lec.deeper || !lec.deeper.length) { p.innerHTML = '<div class="note">Extra reading for this lecture is coming with the full version. Meanwhile, the Summary, Questions and Flashcards tabs cover the lecture.</div>'; return; }
    p.innerHTML = '<div class="note">Everything here goes beyond your lecture. It is optional, sourced, and meant to help you understand the topic more deeply.</div>' +
      lec.deeper.map(function (d, n) { return "<details" + (n === 0 ? " open" : "") + "><summary>" + esc(d.title) + "</summary>" + d.html + "</details>"; }).join("");
  }

  function hostOf(u) { try { return new URL(u).hostname.replace(/^www\./, ""); } catch (e) { return ""; } }
  function previewSrc(r) {
    if (r.img) return r.img;
    var m = /youtube\.com\/watch\?v=([\w-]{11})/.exec(r.url) || /youtu\.be\/([\w-]{11})/.exec(r.url);
    if (m) return "https://img.youtube.com/vi/" + m[1] + "/hqdefault.jpg";
    return "https://s.wordpress.com/mshots/v1/" + encodeURIComponent(r.url) + "?w=640&h=400";
  }
  function resourcesPanel(p, lec) {
    var noRes = !lec.resources || !lec.resources.length;
    p.innerHTML = noRes ? '<div class="note">Videos and websites for this lecture are coming with the full version.</div>' : ( '<p>Each card shows a preview of the page, video or model you will open. Links open other websites and need an internet connection. Items marked "reviewed by title and description only" were not watched in full.</p><ul class="rgrid">' +
      lec.resources.map(function (r) {
        return '<li class="rcard"><a class="rlink" href="' + esc(r.url) + '" target="_blank" rel="noopener"><span class="rthumb" data-host="' + esc(hostOf(r.url)) + '"><img loading="lazy" alt="" src="' + esc(previewSrc(r)) + '"><span class="rkind">' + esc(r.kind) + '</span></span>' +
          '<span class="rbody"><span class="t">' + esc(r.title) + '</span><span class="w">' + esc(r.why) + '</span><span class="dom">' + esc(hostOf(r.url)) + "</span>" + (r.note ? '<span class="n">' + esc(r.note) + "</span>" : "") + "</span></a></li>";
      }).join("") + "</ul>");
    var sub = subjectById(lec.subject), extra = "";
    var chans = (S.channels && (S.channels[lec.id] || S.channels[lec.subject])) || [];
    if (chans.length) extra += "<h2>Channels worth following</h2><ul class=\"rgrid\">" + chans.map(function (r) {
      return '<li class="rcard"><a class="rlink" href="' + esc(r.url) + '" target="_blank" rel="noopener"><span class="rthumb" data-host="' + esc(hostOf(r.url)) + '"><img loading="lazy" alt="" src="' + esc(previewSrc(r)) + '"><span class="rkind">Channel</span></span><span class="rbody"><span class="t">' + esc(r.title) + '</span><span class="w">' + esc(r.why) + '</span><span class="dom">' + esc(hostOf(r.url)) + "</span></span></a></li>";
    }).join("") + "</ul>";
    if (S.apps && S.apps.length) extra += "<h2>Apps and practice sites</h2><ul class=\"rgrid\">" + S.apps.map(function (r) {
      return '<li class="rcard"><a class="rlink" href="' + esc(r.url) + '" target="_blank" rel="noopener"><span class="rthumb" data-host="' + esc(hostOf(r.url)) + '"><img loading="lazy" alt="" src="' + esc(previewSrc(r)) + '"><span class="rkind">' + esc(r.kind) + '</span></span><span class="rbody"><span class="t">' + esc(r.title) + '</span><span class="w">' + esc(r.why) + '</span><span class="dom">' + esc(hostOf(r.url)) + "</span>" + (r.note ? '<span class="n">' + esc(r.note) + "</span>" : "") + "</span></a></li>";
    }).join("") + "</ul>";
    if (extra) p.insertAdjacentHTML("beforeend", extra);
    p.querySelectorAll(".rthumb img").forEach(function (img) {
      img.addEventListener("error", function () {
        var box = img.parentNode; img.remove();
        box.classList.add("nofoto");
        var f = document.createElement("span"); f.className = "rfallback"; f.textContent = box.dataset.host; box.insertBefore(f, box.firstChild);
      });
    });
  }

  /* ---------- past papers ---------- */
  function paperRow(x) {
    var quick = (x.links || []).filter(function (l) { return l.short; });
    if (quick.length) {
      return '<li class="paper-row"><a href="#/paper/' + esc(x.id) + '"><span>' + esc(x.title) + (x.year ? " (" + esc(x.year) + ")" : "") + "</span></a>" +
        '<span class="paper-btns">' + (x.questions ? '<a class="btn small primary" href="#/paper/' + esc(x.id) + '">Online quiz</a>' : "") +
        quick.map(function (l) { return '<a class="btn small" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.short) + "</a>"; }).join("") + "</span></li>";
    }
    var tags = [x.questions ? "Quiz" : "", (x.pdf || x.links) ? "PDF" : ""].filter(Boolean).join(" and ");
    return '<li><a href="#/paper/' + esc(x.id) + '"><span>' + esc(x.title) + (x.year ? " (" + esc(x.year) + ")" : "") + '</span><span class="pill">' + esc(tags || "Open") + "</span></a></li>";
  }
  function papersView(subjectId) {
    var sb0 = subjectId && subjectById(subjectId);
    if (sb0 && sb0.groups) { location.replace("#/subject/" + subjectId + "/papers"); return; }
    var all = S.papers || [];
    var html = '<div class="wrap"><p class="crumbs"><a href="#/">Home</a> / Past papers</p><h1>Past papers</h1>';
    var any = false;
    progSubjects().forEach(function (sb) {
      var list = all.filter(function (x) { return x.subject === sb.id; });
      if (!list.length) return;
      any = true;
      html += "<h2>" + (sb.groups ? '<a class="h-link" href="#/subject/' + sb.id + '/papers">' + esc(sb.name) + "</a>" : esc(sb.name)) + '</h2><ul class="lec-list">' + list.map(paperRow).join("") + "</ul>";
    });
    var others = all.filter(function (x) { return x.program === PROG && !subjectById(x.subject); });
    var groups = [];
    others.forEach(function (x) { if (groups.indexOf(x.subject) < 0) groups.push(x.subject); });
    groups.forEach(function (g) {
      any = true;
      html += "<h2>" + esc((S.otherPaperGroups || {})[g] || "Other") + '</h2><ul class="lec-list">' + others.filter(function (x) { return x.subject === g; }).map(paperRow).join("") + "</ul>";
    });
    var folder = (S.papersFolders || {})[PROG] || (PROG === S.DEFAULT_PROGRAM ? S.papersFolder : "");
    if (!any) html += "<p>Past papers will be added here soon.</p>" + (folder ? '<p class="src">Meanwhile, see <a href="' + esc(folder) + '" target="_blank" rel="noopener">the Google Drive folder</a>.</p>' : "");
    else if (folder) html += '<p class="src" style="margin-top:1.6rem">All the past papers are also in <a href="' + esc(folder) + '" target="_blank" rel="noopener">this Google Drive folder</a>.</p>';
    setView(html + "</div>", "Past papers");
  }
  function paperView(id) {
    var x = (S.papers || []).filter(function (q) { return q.id === id; })[0];
    if (!x) return notFound();
    var sb = subjectById(x.subject);
    var html = '<div class="wrap"><p class="crumbs"><a href="#/">Home</a> / <a href="' + (sb && sb.groups ? "#/subject/" + x.subject + "/papers" : "#/papers") + '">Past papers</a></p><h1>' + esc(x.title) + '</h1><p class="meta">' + esc(sb ? sb.name : ((S.otherPaperGroups || {})[x.subject] || "")) + (x.year ? ", " + esc(x.year) : "") + (x.session ? ", " + esc(x.session) : "") + "</p>";
    var links = x.links || (x.pdf ? [{ label: "Open the paper (PDF)", url: x.pdf }] : []);
    if (links.length) html += '<div class="row" style="margin:0 0 1.4rem">' + links.map(function (l, n) { return '<a class="btn' + (n === 0 ? " primary" : "") + '" href="' + esc(l.url) + '" target="_blank" rel="noopener">' + esc(l.label) + "</a>"; }).join("") + "</div>";
    if (x.note) html += '<p class="src">' + esc(x.note) + "</p>";
    html += '<div id="paperq"></div></div>';
    setView(html, x.title);
    if (x.questions && x.questions.length) questionsPanel(document.getElementById("paperq"), { id: x.id, mcqs: x.questions });
  }

  function notFound() {
    setView('<div class="wrap"><h1>Not built yet</h1><p>This lecture is on the list, but its page is not ready. <a href="#/">Back to the home page</a>.</p></div>', "Not ready");
  }

  /* ---------- what's new ---------- */
  function newBadge() {
    var latest = (S.updates && S.updates[0] && S.updates[0].date) || null;
    return latest ? store.get("sina:seenUpdate", null) !== latest : false;
  }
  function updatesView() {
    var list = S.updates || [];
    var html = '<div class="wrap"><p class="crumbs"><a href="#/">Home</a> / What\'s new</p><h1>What\'s new</h1>' +
      (S.updated ? '<p class="meta">Last updated ' + esc(S.updated) + ".</p>" : "");
    if (!list.length) html += "<p>No updates recorded yet.</p>";
    list.forEach(function (u, i) {
      html += '<div class="upd' + (i === 0 ? " latest" : "") + '"><h2>' + esc(u.date) + "</h2><ul>" +
        u.items.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul></div>";
    });
    html += '<p class="src">If the site looks out of date on your device, close the tab and open it again.</p>';
    setView(html + "</div>", "What's new");
    if (list[0]) store.set("sina:seenUpdate", list[0].date);
  }

  /* ---------- welcome screen ---------- */
  function showWelcome() {
    var w = document.getElementById("welcome");
    if (!w) return;
    if (store.get("sina:welcomed", false)) { w.remove(); return; }
    w.hidden = false;
    document.body.classList.add("noscroll");
    var btn = w.querySelector("#enter");
    btn.focus();
    btn.addEventListener("click", function () {
      store.set("sina:welcomed", true);
      w.classList.add("leaving");
      document.body.classList.remove("noscroll");
      setTimeout(function () { w.remove(); }, 260);
    });
  }
  showWelcome();

  applyLayout();

  /* sticky tabs sit right under the header, whatever its height */
  var hdrEl = document.querySelector(".site-header");
  function setHdr() { if (hdrEl) document.documentElement.style.setProperty("--hdr", hdrEl.offsetHeight + "px"); }
  setHdr(); window.addEventListener("resize", setHdr);

  /* ---------- back to top (long pages) ---------- */
  var toTop = document.createElement("button");
  toTop.className = "to-top"; toTop.type = "button"; toTop.setAttribute("aria-label", "Back to top"); toTop.hidden = true;
  toTop.innerHTML = '<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M12 19V5m0 0-6 6m6-6 6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  document.body.appendChild(toTop);
  toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  window.addEventListener("scroll", function () { toTop.hidden = window.scrollY < 900; }, { passive: true });

  /* ---------- router ---------- */
  requestAnimationFrame(function () { requestAnimationFrame(function () { document.body.classList.remove("no-anim"); }); });

  /* ---------- visitor statistics (GoatCounter) ---------- */
  var gcLast = "", gcQueue = [];
  function gcSend(item) {
    if (window.goatcounter && typeof window.goatcounter.count === "function") { try { window.goatcounter.count(item); } catch (e) {} return true; }
    return false;
  }
  function gcFlush(tries) {
    while (gcQueue.length && gcSend(gcQueue[0])) gcQueue.shift();
    if (gcQueue.length && tries < 40) setTimeout(function () { gcFlush(tries + 1); }, 250);
  }
  function track(path, title, isEvent) {
    var item = { path: path, title: title || path, event: !!isEvent };
    gcQueue.push(item); gcFlush(0);
  }
  function trackView() {
    var path = "/" + location.hash.replace(/^#\/?/, "");
    if (path === gcLast) return;
    gcLast = path;
    var parts = path.split("/").filter(Boolean), title = "Home";
    if (parts[0] === "lecture" && S.lectures[parts[1]]) title = S.lectures[parts[1]].title + (parts[2] ? " (" + parts[2] + ")" : "");
    else if (parts[0] === "subject") { var sb = subjectById(parts[1]); title = sb ? sb.name : path; }
    else if (parts.length) title = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
    track(path, title + " | " + progName(), false);
  }

  function route() {
    var parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    if (parts[0] !== "year") setTimeout(trackView, 0);
    if (isOpen()) closeDrawer();
    closePhoneSearch();
    if (!parts.length) return homeView();
    if (parts[0] === "updates") return updatesView();
    if (parts[0] === "apps") return appsView();
    if (parts[0] === "usmle") return usmleView();
    if (parts[0] === "year" && progValid(parts[1])) { setProgram(parts[1], true); location.replace("#/"); return; }
    if (parts[0] === "midterm") return midtermView();
    if (parts[0] === "papers") return papersView(parts[1]);
    if (parts[0] === "paper") return paperView(parts[1]);
    if (parts[0] === "subject") return subjectView(parts[1], parts[2], parts[3]);
    if (parts[0] === "lecture") return lectureView(parts[1], parts[2]);
    notFound();
  }
  window.addEventListener("hashchange", route);
  route();

  if ("serviceWorker" in navigator && /^https?:/.test(location.protocol)) {
    window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
  }
})();
