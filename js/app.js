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
    var items = [].slice.call(setMenu.querySelectorAll("button")), k = items.indexOf(document.activeElement);
    if (e.key === "ArrowDown") { e.preventDefault(); items[(k + 1) % items.length].focus(); }
    else if (e.key === "ArrowUp") { e.preventDefault(); items[(k - 1 + items.length) % items.length].focus(); }
  });
  document.addEventListener("click", function (e) { if (!setMenu.hidden && !setMenu.contains(e.target)) openSettings(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !setMenu.hidden) { openSettings(false); setBtn.focus(); } });

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
    var h = '<div class="dhead"><span class="wordmark">Sina<span>.</span></span><button class="btn dclose" type="button">Close</button></div>' +
      '<a class="dlink" href="#/">Home</a><a class="dlink" href="#/papers">Past papers</a><a class="dlink" href="#/apps">Useful apps</a>' +
      '<a class="dlink" href="#/updates"><span>What\'s new</span>' + (newBadge() ? '<span class="badge">new</span>' : "") + "</a>";
    ["S3", "S4"].forEach(function (sem) {
      h += '<p class="dsem">Semester ' + sem.charAt(1) + "</p>";
      S.subjects.filter(function (x) { return x.semester === sem; }).forEach(function (sub) {
        if (!sub.groups) { h += '<div class="dsoon"><span>' + esc(sub.name) + "</span><em>" + (sub.status === "next" ? "Up next" : "Planned") + "</em></div>"; return; }
        var chapters = sub.groups.map(function (g) {
          var n = g.items.filter(function (it) { return S.lectures[it.id]; }).length;
          var lectures = '<ul class="dlist">' + g.items.map(function (it) {
            return S.lectures[it.id] ? '<li><a href="#/lecture/' + it.id + '">' + esc(it.title) + "</a></li>" : '<li><span class="dsoon-item"><span>' + esc(it.title) + "</span><em>Coming</em></span></li>";
          }).join("") + "</ul>";
          return accHTML(g.name, n + " of " + g.items.length + " ready", lectures, "chapter");
        }).join("") + '<a class="dlink sub" href="#/papers/' + sub.id + '">Past papers</a>';
        h += accHTML(sub.name, "", chapters, "subject");
      });
    });
    drawer.innerHTML = h;
    drawer.scrollTop = 0;
    drawer.querySelector(".dclose").addEventListener("click", function () {
      if (document.body.classList.contains("pinned")) setPinned(false); else closeDrawer();
    });
    drawer.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", closeDrawer); });
    var dc = drawer.querySelector(".dclose");
    if (dc) dc.textContent = document.body.classList.contains("pinned") ? "Hide" : "Close";
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
  var DESKTOP = function () { return window.matchMedia("(min-width: 60rem)").matches; };
  function setPinned(on) {
    store.set("sina:pinned", on);
    document.body.classList.toggle("pinned", on);
    if (on) renderDrawer();
    showDrawer(on, false);
    document.body.classList.remove("noscroll");
    menuBtn.setAttribute("aria-expanded", String(on));
  }
  function applyLayout() {
    if (DESKTOP()) { if (!document.body.classList.contains("pinned") && !isOpen()) setPinned(store.get("sina:pinned", true)); else if (isOpen() && !document.body.classList.contains("pinned")) setPinned(true); }
    else if (document.body.classList.contains("pinned")) { document.body.classList.remove("pinned"); showDrawer(false, false); menuBtn.setAttribute("aria-expanded", "false"); }
  }
  var rsz; window.addEventListener("resize", function () { clearTimeout(rsz); rsz = setTimeout(applyLayout, 120); });
  menuBtn.addEventListener("click", function () {
    if (DESKTOP()) { setPinned(!document.body.classList.contains("pinned")); return; }
    isOpen() ? closeDrawer() : openDrawer();
  });
  backdrop.addEventListener("click", closeDrawer);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { closeDrawer(); hideSearch(); } });
  drawer.querySelector && 0;

  /* ---------- search ---------- */
  function searchIndex() {
    var out = [];
    S.subjects.forEach(function (sub) {
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
  function runSearch() {
    var q = sInput.value.trim().toLowerCase();
    if (q.length < 2) { hideSearch(); return; }
    if (!IDX) IDX = searchIndex();
    var words = q.split(/\s+/);
    var scored = [];
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
    var hits = scored.slice(0, 20).map(function (x) { return x.r; });
    sRes.innerHTML = hits.length
      ? hits.map(function (r) {
          var inner = '<span class="sk">' + esc(r.kind) + '</span><span class="st">' + esc(r.title) + '</span><span class="ss">' + esc(r.sub) + "</span>";
          return r.href ? '<a href="' + r.href + '">' + inner + "</a>" : '<span class="dim">' + inner + "</span>";
        }).join("")
      : '<p class="none">Nothing matches that yet.</p>';
    sRes.hidden = false; sBox.classList.add("open");
    sRes.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { sInput.value = ""; hideSearch(); }); });
  }
  sInput.addEventListener("input", runSearch);
  sInput.addEventListener("focus", runSearch);
  document.addEventListener("click", function (e) { if (!sBox.contains(e.target)) hideSearch(); });

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
      '<p class="lede">Summaries, key points, questions, flashcards and extra reading for every lecture of the promo. Each page is built from the lecture slides and checked against other references.</p>' +
      '<div class="row"><a class="btn primary" href="#/lecture/anat3-orbit">Try the first lecture</a><button class="btn" type="button" id="browse-subjects">Browse subjects</button><a class="btn" href="#/papers">Past papers</a><a class="btn" href="#/apps">Useful apps</a></div>' +
      (S.updated ? '<p class="meta" style="margin-top:1.4rem">Last updated ' + esc(S.updated) + '. <a href="#/updates">What\'s new' + (newBadge() ? ' <span class="badge">new</span>' : "") + "</a>.</p>" : "") + '</div>' +
      '</section>' +
      '<h2 id="subjects">Subjects</h2><h3 class="sem-title">Semester 3</h3><ul class="subject-list">' + sems.S3.map(row).join("") + '</ul>' +
      '<h3 class="sem-title">Semester 4</h3><ul class="subject-list">' + sems.S4.map(row).join("") + "</ul>" +
      (appsHTML() ? '<h2 id="apps" style="margin-top:2.4rem">Useful apps and resources</h2><p class="meta">Recommended apps and websites for medical students.</p>' + appsHTML() : "") + "</div>";
    setView(html, "");
    var bb = document.getElementById("browse-subjects");
    if (bb) bb.addEventListener("click", function () {
      var t = document.getElementById("subjects");
      if (t) t.scrollIntoView({ behavior: "smooth", block: "start" });
    });
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

  function psaHTML() {
    if (store.get("sina:psaDismissed", false)) return "";
    return PSA;
  }
  var PSA = '<div class="psa"><button class="psa-close" type="button" aria-label="Close this note for good">&times;</button><strong>A quick word before you close this.</strong> Everything here is a study aid built from the lecture slides, not a replacement for them. Sit in your lectures, read your professor\'s slides and your textbooks, and use this site to make sense of them, revise them and test yourself. If something here disagrees with your professor, your professor is right.</div>';
  function wirePSA(root) {
    var x = root.querySelector(".psa-close");
    if (x) x.addEventListener("click", function () { store.set("sina:psaDismissed", true); x.closest(".psa").remove(); });
  }
  var TABS = [["summary", "Summary"], ["visual", "Visual"], ["questions", "Questions"], ["cards", "Flashcards"], ["deeper", "Go deeper"], ["resources", "Resources"]];

  function lectureView(id, tab) {
    var lec = S.lectures[id];
    if (!lec) return notFound();
    var sub = subjectById(lec.subject);
    tab = tab || "summary";
    if (!TABS.some(function (t) { return t[0] === tab; })) tab = "summary";
    var html = '<div class="wrap"><p class="crumbs"><a href="#/">Home</a> / <a href="#/subject/' + sub.id + '">' + esc(sub.name) + "</a></p><h1>" + esc(lec.title) + "</h1>" +
      '<p class="meta">Source: ' + (lec.sourceUrl ? '<a class="srclink" href="' + esc(lec.sourceUrl) + '" target="_blank" rel="noopener">' + esc(lec.sourceFile) + "</a>" : esc(lec.sourceFile)) + "</p>" +
      '<div class="tabs" role="tablist" aria-label="Lecture sections">' + TABS.map(function (t) {
        return '<button class="tab" role="tab" id="tab-' + t[0] + '" aria-selected="' + (t[0] === tab) + '" data-tab="' + t[0] + '">' + t[1] + "</button>";
      }).join("") + '</div><div id="panel" role="tabpanel" aria-labelledby="tab-' + tab + '"></div>' + psaHTML() + "</div>";
    setView(html, lec.title);
    var panel = document.getElementById("panel");
    ({ summary: summaryPanel, visual: visualPanel, questions: questionsPanel, cards: cardsPanel, deeper: deeperPanel, resources: resourcesPanel })[tab](panel, lec);
    app.querySelectorAll(".tab").forEach(function (b) {
      b.addEventListener("click", function () { location.hash = "#/lecture/" + id + "/" + b.dataset.tab; });
    });
    wirePSA(app);
  }

  function summaryPanel(p, lec) {
    var h = '<div class="note">' + lec.buildNote + "</div>";
    lec.summary.forEach(function (s) { h += "<h2>" + esc(s.title) + "</h2>" + s.html; });
    h += "<h2>Key points</h2><ul class='exam-list'>" + lec.exam.map(function (e) { return "<li>" + esc(e) + "</li>"; }).join("") + "</ul>";
    h += (lec.sources && lec.sources.length)
      ? '<div class="foot"><p>Facts on this page were checked against these references (last check ' + esc(lec.verified) + "). Student flashcard sets were used only as a secondary consistency check.</p><ul class='sources'>" + lec.sources.map(function (s) { return '<li><a href="' + esc(s.url) + '" target="_blank" rel="noopener">' + esc(s.name) + "</a></li>"; }).join("") + "</ul></div>"
      : '<div class="foot"><p>Built from the lecture slides (last check ' + esc(lec.verified) + "). Outside references will be added with the full version.</p></div>";
    p.innerHTML = h;
    wireMedia(p);
  }

  /* ---------- reference pictures: a small carousel, broken pictures drop out ---------- */
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

  function visualPanel(p, lec) {
    var v = lec.visual, layer = "walls";
    var hints = { walls: "Tap a wall to see which bones form it.", margins: "Tap a green edge to see which bones form that part of the rim.", openings: "Tap a dark opening to see what passes through it.", landmarks: "Tap a dashed outline to see what it is." };
    if (!v.regions) {
      var h2 = v.model3d ? "<h2 style='margin-top:0'>3D model</h2>" + viewer3dHTML(v.models || v.model3d) : "";
      var gal = galleryHTML(v);
      if (gal) h2 = gal + h2;
      if (v.figure) h2 += "<h2" + (h2 ? "" : " style='margin-top:0'") + ">Labelled schematic</h2><p>" + esc(v.figure.caption || "Schematic drawn for this site, not to scale.") + '</p><div class="diagram-box">' + figureSVG(v.figure, { uid: "vis" }) + "</div>";
      p.innerHTML = h2 || "<p>No visual for this lecture yet.</p>";
      wireMedia(p); wireGallery(p);
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

  function questionsPanel(p, lec) {
    var qs = lec.mcqs, i = 0, score = 0, key = "sina:best:" + lec.id, LET = "abcdefgh";
    function keyText(q) {
      var ans = q.answers || [q.answer];
      return ans.map(function (n) { return LET[n] + ". " + q.options[n]; }).join(" and ");
    }
    function feedback(q, ok) {
      var head = ok ? "Correct." : "Not quite.";
      var body = q.why ? " " + esc(q.why) : "";
      return '<div class="why"><strong>' + head + "</strong> Correct answer: " + esc(keyText(q)) + "." + body + '</div><button class="btn primary" id="nx">' + (i + 1 < qs.length ? "Next question" : "See score") + "</button>";
    }
    function render() {
      if (i >= qs.length) {
        var best = store.get(key, 0); if (score > best) { best = score; store.set(key, best); }
        p.innerHTML = '<div class="score">' + score + " / " + qs.length + "</div><p>Best score on this device: " + best + " / " + qs.length + '.</p><div class="row"><button class="btn primary" id="again">Try again</button></div>';
        p.querySelector("#again").onclick = function () { i = 0; score = 0; render(); };
        return;
      }
      var q = qs[i], multi = !!(q.answers && q.answers.length > 1);
      var pic = (q.target && lec.visual && lec.visual.figure)
        ? '<div class="diagram-box qfig">' + figureSVG(lec.visual.figure, { mode: "quiz", target: q.target, uid: "q" + i }) + "</div>"
        : "";
      p.innerHTML = '<p class="qhead">Question ' + (i + 1) + " of " + qs.length + (multi ? ", choose all correct answers" : "") + '</p><div class="bar-track"><div class="bar-fill" style="width:' + (i / qs.length * 100) + '%"></div></div><p class="qtext">' + esc(q.q) + "</p>" + pic +
        q.options.map(function (o, n) { return '<button class="opt" data-n="' + n + '" aria-pressed="false"><span class="letter">' + LET[n].toUpperCase() + "</span><span>" + esc(o) + "</span></button>"; }).join("") + (multi ? '<button class="btn primary" id="chk" type="button">Check my answer</button>' : "") + '<div id="fb"></div>';
      var opts = p.querySelectorAll(".opt");
      function finish(chosen) {
        var ans = q.answers || [q.answer];
        var ok = chosen.length === ans.length && chosen.every(function (n) { return ans.indexOf(n) > -1; });
        if (ok) score++;
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
        var tags = [x.questions ? "Quiz" : "", (x.pdf || x.links) ? "PDF" : ""].filter(Boolean).join(" and ");
        return '<li><a href="#/paper/' + esc(x.id) + '"><span>' + esc(x.title) + (x.year ? " (" + esc(x.year) + ")" : "") + '</span><span class="pill">' + esc(tags || "Open") + "</span></a></li>";
      }).join("") + "</ul>";
    });
    if (!any) html += "<p>Past papers will be added here soon.</p>";
    else if (S.papersFolder && !subjectId) html += '<p class="src" style="margin-top:1.6rem">All the past papers are also in <a href="' + esc(S.papersFolder) + '" target="_blank" rel="noopener">this Google Drive folder</a>.</p>';
    setView(html + "</div>", "Past papers");
  }
  function paperView(id) {
    var x = (S.papers || []).filter(function (q) { return q.id === id; })[0];
    if (!x) return notFound();
    var sb = subjectById(x.subject);
    var html = '<div class="wrap"><p class="crumbs"><a href="#/">Home</a> / <a href="#/papers/' + x.subject + '">Past papers</a></p><h1>' + esc(x.title) + '</h1><p class="meta">' + esc(sb ? sb.name : "") + (x.year ? ", " + esc(x.year) : "") + (x.session ? ", " + esc(x.session) : "") + "</p>";
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

  /* ---------- router ---------- */
  requestAnimationFrame(function () { requestAnimationFrame(function () { document.body.classList.remove("no-anim"); }); });

  function route() {
    var parts = location.hash.replace(/^#\/?/, "").split("/").filter(Boolean);
    if (isOpen()) closeDrawer();
    if (!parts.length) return homeView();
    if (parts[0] === "updates") return updatesView();
    if (parts[0] === "apps") return appsView();
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
