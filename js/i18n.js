/* Interface text. Add a language by copying the "en" block, translating the values,
   and setting available: true in SINA.languages. Missing keys fall back to English. */
window.SINA = window.SINA || { subjects: [], lectures: {} };
SINA.lectures = SINA.lectures || {};
SINA.languages = [
  { id: "en", label: "English", available: true },
  { id: "fr", label: "Français", available: false }
];
SINA.i18n = {
  en: {
    "nav.home": "Home", "nav.papers": "Past papers", "nav.apps": "Useful apps", "nav.updates": "What's new", "nav.close": "Close",
    "settings.title": "Settings", "settings.appearance": "Appearance", "settings.light": "Light mode", "settings.dark": "Dark mode",
    "settings.language": "Language", "settings.soon": "Coming soon",
    "program.label": "Year and program", "program.choose": "Choose your year",
    "program.y1-anglo": "1st Year Anglo", "program.y1-franco": "1st Year Franco",
    "program.y2-anglo": "2nd Year Anglo", "program.y2-franco": "2nd Year Franco",
    "program.y3-anglo": "3rd Year Anglo",
    "program.switched": "Now showing {name}.",
    "home.subjects": "Subjects", "home.semester": "Semester {n}",
    "home.empty.title": "{name} is on its way",
    "home.empty.body": "Subjects and lectures for this year are being prepared. In the meantime, you can switch year with the selector at the top left.",
    "search.placeholder": "Search lectures and subjects",
    "welcome.kicker": "Welcome to Sina", "welcome.title": "Which year are you in?",
    "welcome.sub": "Pick your year to see its subjects and lectures. You can change it any time with the selector at the top left.",
    "welcome.ready": "{n} subjects ready", "welcome.skip": "Not now"
  },
  fr: {}
};
SINA.t = function (key, vars) {
  var lang = (SINA.lang && SINA.i18n[SINA.lang]) || {}, s = lang[key];
  if (s == null) s = SINA.i18n.en[key];
  if (s == null) s = key;
  if (vars) Object.keys(vars).forEach(function (k) { s = s.split("{" + k + "}").join(vars[k]); });
  return s;
};
