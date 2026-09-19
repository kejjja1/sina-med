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

  /* ---------- theme ---------- */
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    var b = document.getElementById("theme-btn");
    if (b) b.textContent = t === "dark" ? "Light mode" : "Dark mode";
    var m = document.querySelector('meta[name="theme-color"]');
    if (m) m.setAttribute("content", t === "dark" ? "#1b1d20" : "#ffffff");
  }
  var theme = store.get("sina:theme", null) || (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  applyTheme(theme);
  document.getElementById("theme-btn").addEventListener("click", function () {
    theme = theme === "dark" ? "light" : "dark"; store.set("sina:theme", theme); applyTheme(theme);
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
  function viewer3dHTML(m) {
    return '<div class="viewer3d"><div class="frame" data-embed="' + esc(m.embed) + '" data-title="' + esc(m.title) + '"><button class="btn primary load3d" type="button">Load the 3D model</button></div>' +
      '<p class="how">' + esc(m.how) + '</p><p class="credit">' + esc(m.credit) + ' <a href="' + esc(m.url) + '" target="_blank" rel="noopener">Open on Sketchfab</a></p></div>';
  }
  function wireMedia(root) {
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

  /* ---------- left menu: subjects, then chapters, then lectures ---------- */
  var drawer = document.getElementById("drawer"), backdrop = document.getElementById("backdrop"), menuBtn = document.getElementById("menu-btn");
  var menuPath = []; // [] = subjects, [subjectId] = chapters, [subjectId, chapterIndex] = lectures
  function renderDrawer() {
    var h = '<div class="dhead"><span class="wordmark">Sina<span>.</span></span><button class="btn dclose" type="button">Close</button></div>';
    if (menuPath.length === 0) {
      h += '<a class="dlink" href="#/">Home</a><a class="dlink" href="#/papers">Past papers</a>';
      ["S3", "S4"].forEach(function (sem) {
        h += '<p class="dsem">Semester ' + sem.charAt(1) + "</p>";
        S.subjects.filter(function (x) { return x.semester === sem; }).forEach(function (sub) {
          if (sub.groups) h += '<button class="dnav" type="button" data-go="' + sub.id + '"><span>' + esc(sub.name) + '</span><span class="chev" aria-hidden="true">\u203a</span></button>';
          else h += '<div class="dsoon"><span>' + esc(sub.name) + "</span><em>" + (sub.status === "next" ? "Up next" : "Planned") + "</em></div>";
        });
      });
    } else if (menuPath.length === 1) {
      var sub = subjectById(menuPath[0]);
      h += '<button class="dback" type="button" data-back>\u2039 All subjects</button><h2 class="dtitle">' + esc(sub.name) + "</h2>";
      sub.groups.forEach(function (g, i) {
        var n = g.items.filter(function (it) { return S.lectures[it.id]; }).length;
        h += '<button class="dnav" type="button" data-go="' + i + '"><span>' + esc(g.name) + '</span><span class="pn">' + n + " of " + g.items.length + ' ready</span><span class="chev" aria-hidden="true">\u203a</span></button>';
      });
      h += '<a class="dlink sub" href="#/papers/' + sub.id + '">Past papers</a>';
    } else {
      var sb = subjectById(menuPath[0]), gr = sb.groups[menuPath[1]];
      h += '<button class="dback" type="button" data-back>\u2039 ' + esc(sb.name) + '</button><h2 class="dtitle">' + esc(gr.name) + '</h2><ul class="dlist">' +
        gr.items.map(function (it) {
          return S.lectures[it.id] ? '<li><a href="#/lecture/' + it.id + '">' + esc(it.title) + "</a></li>" : '<li><span class="dsoon-item"><span>' + esc(it.title) + "</span><em>Coming</em></span></li>";
        }).join("") + "</ul>";
    }
    drawer.innerHTML = h;
    drawer.scrollTop = 0;
    drawer.querySelector(".dclose").addEventListener("click", closeDrawer);
    drawer.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeDrawer); });
    drawer.querySelectorAll("[data-go]").forEach(function (b) {
      b.addEventListener("click", function () { menuPath.push(menuPath.length === 0 ? b.dataset.go : Number(b.dataset.go)); renderDrawer(); var f = drawer.querySelector(".dback"); if (f) f.focus(); });
    });
    var back = drawer.querySelector("[data-back]");
    if (back) back.addEventListener("click", function () { menuPath.pop(); renderDrawer(); var f = drawer.querySelector(".dnav, .dback"); if (f) f.focus(); });
  }
  function openDrawer() {
    menuPath = [];
    renderDrawer();
    drawer.hidden = false; backdrop.hidden = false;
    document.body.classList.add("noscroll");
    menuBtn.setAttribute("aria-expanded", "true");
    drawer.querySelector(".dclose").focus();
  }
  function closeDrawer() {
    if (drawer.hidden) return;
    drawer.hidden = true; backdrop.hidden = true;
    document.body.classList.remove("noscroll");
    menuBtn.setAttribute("aria-expanded", "false");
    menuBtn.focus();
  }
  menuBtn.addEventListener("click", function () { drawer.hidden ? openDrawer() : closeDrawer(); });
  backdrop.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeDrawer(); });

  /* ---------- views ---------- */
  function setView(html, title) {
    app.innerHTML = html;
    document.title = (title ? title + " | " : "") + "Sina";
    window.scrollTo(0, 0);
    var h = app.querySelector("h1"); if (h) { h.setAttribute("tabindex", "-1"); h.focus({ preventScroll: true }); }
  }

  function homeView() {
    var sems = { S3: [], S4: [] };
    S.subjects.forEach(function (s) { sems[s.semester].push(s); });
    function row(s) {
      var tag, inner;
      if (s.groups) { tag = '<span class="tag live">' + readyCount(s) + " of " + totalCount(s) + " lectures ready</span>"; }
      else if (s.status === "next") { tag = '<span class="tag">Up next, ' + s.count + " lectures</span>"; }
      else { tag = '<span class="tag">' + s.count + " lectures, planned</span>"; }
      inner = '<span><span class="name">' + esc(s.name) + '</span>' + (s.blurb ? '<span class="desc">' + esc(s.blurb) + "</span>" : "") + "</span>" + tag;
      return s.groups ? '<li><a href="#/subject/' + s.id + '">' + inner + "</a></li>" : '<li><span class="static planned">' + inner + "</span></li>";
    }
    var html = '<div class="wrap wide"><section class="hero"><div><h1>Study each lecture, then test yourself on it.</h1>' +
      '<p class="lede">Summaries, exam points, questions, flashcards and extra reading for every lecture of the promo. Each page is built from the lecture slides and checked against other references.</p>' +
      '<div class="row"><a class="btn primary" href="#/lecture/anat3-orbit">Try the first lecture</a><a class="btn" href="#/subject/anat3">Browse Anatomy 3</a><a class="btn" href="#/papers">Past papers</a></div></div>' +
      '</section>' +
      '<h2>Subjects</h2><h3 class="sem-title">Semester 3</h3><ul class="subject-list">' + sems.S3.map(row).join("") + '</ul>' +
      '<h3 class="sem-title">Semester 4</h3><ul class="subject-list">' + sems.S4.map(row).join("") + "</ul></div>";
    setView(html, "");
  }

  function subjectView(id) {
    var s = subjectById(id);
    if (!s || !s.groups) return notFound();
    var html = '<div class="wrap"><p class="crumbs"><a href="#/">Home</a> / ' + esc(s.name) + "</p><h1>" + esc(s.name) + "</h1>" +
      '<p class="meta">' + readyCount(s) + " of " + totalCount(s) + " lectures ready. " + esc(s.blurb) + '</p><p><a href="#/papers/' + s.id + '">Past papers for ' + esc(s.name) + "</a></p>";
    s.groups.forEach(function (g) {
      html += '<h2 class="group-title">' + esc(g.name) + '</h2><ul class="lec-list">' + g.items.map(function (it) {
        return S.lectures[it.id]
          ? '<li><a href="#/lecture/' + it.id + '"><span>' + esc(it.title) + '</span><span class="pill">Ready</span></a></li>'
          : '<li><span class="soon"><span>' + esc(it.title) + '</span><span class="pill muted">Coming</span></span></li>';
      }).join("") + "</ul>";
    });
    setView(html + "</div>", s.name);
  }

  var TABS = [["summary", "Summary"], ["visual", "Visual"], ["questions", "Questions"], ["cards", "Flashcards"], ["deeper", "Go deeper"], ["resources", "Resources"]];

  function lectureView(id, tab) {
    var lec = S.lectures[id];
    if (!lec) return notFound();
    var sub = subjectById(lec.subject);
    tab = tab || "summary";
    if (!TABS.some(function (t) { return t[0] === tab; })) tab = "summary";
    var html = '<div class="wrap"><p class="crumbs"><a href="#/">Home</a> / <a href="#/subject/' + sub.id + '">' + esc(sub.name) + "</a></p><h1>" + esc(lec.title) + "</h1>" +
      '<p class="meta">Source: ' + esc(lec.sourceFile) + "</p>" +
      '<div class="tabs" role="tablist" aria-label="Lecture sections">' + TABS.map(function (t) {
        return '<button class="tab" role="tab" id="tab-' + t[0] + '" aria-selected="' + (t[0] === tab) + '" data-tab="' + t[0] + '">' + t[1] + "</button>";
      }).join("") + '</div><div id="panel" role="tabpanel" aria-labelledby="tab-' + tab + '"></div></div>';
    setView(html, lec.title);
    var panel = document.getElementById("panel");
    ({ summary: summaryPanel, visual: visualPanel, questions: questionsPanel, cards: cardsPanel, deeper: deeperPanel, resources: resourcesPanel })[tab](panel, lec);
    app.querySelectorAll(".tab").forEach(function (b) {
      b.addEventListener("click", function () { location.hash = "#/lecture/" + id + "/" + b.dataset.tab; });
    });
  }

  function summaryPanel(p, lec) {
    var h = '<div class="note">' + lec.buildNote + "</div>";
    lec.summary.forEach(function (s) { h += "<h2>" + esc(s.title) + "</h2>" + s.html; });
    h += "<h2>Likely exam points</h2><ul class='exam-list'>" + lec.exam.map(function (e) { return "<li>" + esc(e) + "</li>"; }).join("") + "</ul>";
    h += '<div class="foot"><p>Facts on this page were checked against these references (last check ' + esc(lec.verified) + "). Student flashcard sets were used only as a secondary consistency check.</p><ul class='sources'>" + lec.sources.map(function (s) { return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.name) + "</a></li>"; }).join("") + "</ul></div>";
    p.innerHTML = h;
    wireMedia(p);
  }

  function visualPanel(p, lec) {
    var v = lec.visual, layer = "walls";
    var hints = { walls: "Tap a wall to see which bones form it.", margins: "Tap a green edge to see which bones form that part of the rim.", openings: "Tap a dark opening to see what passes through it.", landmarks: "Tap a dashed outline to see what it is." };
    if (!v.regions) {
      p.innerHTML = (v.model3d ? "<h2 style='margin-top:0'>3D model</h2>" + viewer3dHTML(v.model3d) : "<p>No visual for this lecture yet.</p>");
      wireMedia(p);
      return;
    }
    var m3 = v.model3d ? "<h2 style='margin-top:0'>3D model</h2>" + viewer3dHTML(v.model3d) + "<h2>Labeled schematic</h2>" : "";
    p.innerHTML = m3 + "<p>" + esc(v.intro) + '</p><div class="layer-switch" role="group" aria-label="Diagram layer">' + ["walls", "margins", "openings", "landmarks"].map(function (l) { return '<button data-layer="' + l + '" aria-pressed="' + (l === layer) + '">' + l.charAt(0).toUpperCase() + l.slice(1) + "</button>"; }).join("") +
      '</div><div class="diagram-box" id="dia"></div><div class="info" id="info" aria-live="polite"></div>';
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

  function questionsPanel(p, lec) {
    var qs = lec.mcqs, i = 0, score = 0, key = "sina:best:" + lec.id, LET = "ABCD";
    function render() {
      if (i >= qs.length) {
        var best = store.get(key, 0); if (score > best) { best = score; store.set(key, best); }

        p.innerHTML = '<div class="score">' + score + " / " + qs.length + "</div><p>Best score on this device: " + best + " / " + qs.length + '.</p><div class="row"><button class="btn primary" id="again">Try again</button></div>';
        p.querySelector("#again").onclick = function () { i = 0; score = 0; render(); };
        return;
      }
      var q = qs[i];
      p.innerHTML = '<p class="qhead">Question ' + (i + 1) + " of " + qs.length + '</p><div class="bar-track"><div class="bar-fill" style="width:' + (i / qs.length * 100) + '%"></div></div><p class="qtext">' + esc(q.q) + "</p>" +
        q.options.map(function (o, n) { return '<button class="opt" data-n="' + n + '"><span class="letter">' + LET[n] + "</span><span>" + esc(o) + "</span></button>"; }).join("") + '<div id="fb"></div>';
      p.querySelectorAll(".opt").forEach(function (b) {
        b.addEventListener("click", function () {
          var n = +b.dataset.n, ok = n === q.answer; if (ok) score++;
          p.querySelectorAll(".opt").forEach(function (x) { x.disabled = true; if (+x.dataset.n === q.answer) x.classList.add("correct"); });
          if (!ok) b.classList.add("wrong");
          document.getElementById("fb").innerHTML = '<div class="why"><strong>' + (ok ? "Correct." : "Not quite. The answer is " + LET[q.answer] + ".") + "</strong> " + esc(q.why) + '</div><button class="btn primary" id="nx">' + (i + 1 < qs.length ? "Next question" : "See score") + "</button>";
          document.getElementById("nx").onclick = function () { i++; render(); };
          document.getElementById("nx").focus();
        });
      });
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
      var front = '<div class="kind">' + (c.type === "image" ? "Picture card" : "Text card") + '</div><div class="front">' + esc(c.front) + "</div>" +
        (c.type === "image" ? '<div class="diagram-box">' + orbitSVG({ mode: "quiz", target: c.target, uid: "fc" }) + "</div>" : "");
      p.innerHTML = '<div class="deck-tools"><div class="chips" role="group" aria-label="Card type">' + [["all", "All"], ["text", "Text"], ["image", "Pictures"]].map(function (f) { return '<button data-f="' + f[0] + '" aria-pressed="' + (f[0] === filter) + '">' + f[1] + "</button>"; }).join("") +
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
    p.innerHTML = '<p>Each card shows a preview of the page, video or model you will open. Links open other websites and need an internet connection. Items marked "reviewed by title and description only" were not watched in full.</p><ul class="rgrid">' +
      lec.resources.map(function (r) {
        return '<li class="rcard"><a class="rlink" href="' + esc(r.url) + '" target="_blank" rel="noopener"><span class="rthumb" data-host="' + esc(hostOf(r.url)) + '"><img loading="lazy" alt="" src="' + esc(previewSrc(r)) + '"><span class="rkind">' + esc(r.kind) + '</span></span>' +
          '<span class="rbody"><span class="t">' + esc(r.title) + '</span><span class="w">' + esc(r.why) + '</span><span class="dom">' + esc(hostOf(r.url)) + "</span>" + (r.note ? '<span class="n">' + esc(r.note) + "</span>" : "") + "</span></a></li>";
      }).join("") + "</ul>";
    p.querySelectorAll(".rthumb img").forEach(function (img) {
      img.addEventListener("error", function () {
        var box = img.parentNode; img.remove();
        box.classList.add("nofoto");
        var f = document.createElement("span"); f.className = "rfallback"; f.textContent = box.dataset.host; box.insertBefore(f, box.firstChild);
      });
    });
  }

  /* ---------- past papers ---------- */
  function papersView(subjectId) {
    var all = S.papers || [], sub = subjectId ? subjectById(subjectId) : null;
    var html = '<div class="wrap"><p class="crumbs"><a href="#/">Home</a> / Past papers</p><h1>Past papers' + (sub ? ": " + esc(sub.name) : "") + "</h1>";
    var any = false;
    S.subjects.forEach(function (sb) {
      if (subjectId && sb.id !== subjectId) return;
      var list = all.filter(function (x) { return x.subject === sb.id; });
      if (!list.length) return;
      any = true;
      html += "<h2>" + esc(sb.name) + '</h2><ul class="lec-list">' + list.map(function (x) {
        var tags = [x.questions ? "Questions" : "", x.pdf ? "PDF" : ""].filter(Boolean).join(" and ");
        return '<li><a href="#/paper/' + esc(x.id) + '"><span>' + esc(x.title) + (x.year ? " (" + esc(x.year) + ")" : "") + '</span><span class="pill">' + esc(tags || "Open") + "</span></a></li>";
      }).join("") + "</ul>";
    });
    if (!any) html += "<p>Past papers will be added here soon.</p>";
    setView(html + "</div>", "Past papers");
  }
  function paperView(id) {
    var x = (S.papers || []).filter(function (q) { return q.id === id; })[0];
    if (!x) return notFound();
    var sb = subjectById(x.subject);
    var html = '<div class="wrap"><p class="crumbs"><a href="#/">Home</a> / <a href="#/papers/' + x.subject + '">Past papers</a></p><h1>' + esc(x.title) + '</h1><p class="meta">' + esc(sb ? sb.name : "") + (x.year ? ", " + esc(x.year) : "") + (x.session ? ", " + esc(x.session) : "") + "</p>";
    if (x.pdf) html += '<p><a class="btn primary" href="' + esc(x.pdf) + '" target="_blank" rel="noopener">Open the paper (PDF)</a>' + (x.answersPdf ? ' <a class="btn" href="' + esc(x.answersPdf) + '" target="_blank" rel="noopener">Open the answers (PDF)</a>' : "") + "</p>";
    html += '<div id="paperq"></div></div>';
    setView(html, x.title);
    if (x.questions && x.questions.length) questionsPanel(document.getElementById("paperq"), { id: x.id, mcqs: x.questions });
  }

  function notFound() {
    setView('<div class="wrap"><h1>Not built yet</h1><p>This lecture is on the list, but its page is not ready. <a href="#/">Back to the home page</a>.</p></div>', "Not ready");
  }

  /* ---------- router ---------- */
  function route() {
    var parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    if (!drawer.hidden) closeDrawer();
    if (!parts.length) return homeView();
    if (parts[0] === "papers") return papersView(parts[1]);
    if (parts[0] === "paper") return paperView(parts[1]);
    if (parts[0] === "subject") return subjectView(parts[1]);
    if (parts[0] === "lecture") return lectureView(parts[1], parts[2]);
    notFound();
  }
  window.addEventListener("hashchange", route);
  route();

  if ("serviceWorker" in navigator && /^https?:/.test(location.protocol)) {
    window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
  }
})();
