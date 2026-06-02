(function () {
  var STORAGE_KEY = 'a11y_prefs_v1';
  var defaults = { fontSize: 0, highContrast: false, grayscale: false, underlineLinks: false, focusHighlight: false };
  var prefs = Object.assign({}, defaults);

  var css = `
    #a11y-btn {
      position: fixed; bottom: 1.5rem; left: 1.5rem; z-index: 9999;
      width: 52px; height: 52px; border-radius: 50%;
      background: #5ba4a4; color: white; border: none; cursor: pointer;
      font-size: 1.5rem; display: flex; align-items: center; justify-content: center;
      box-shadow: 0 4px 16px rgba(0,0,0,0.25); transition: transform 0.15s;
    }
    #a11y-btn:hover { transform: scale(1.1); }
    #a11y-btn:focus-visible { outline: 3px solid #9dd4d4; outline-offset: 3px; }

    #a11y-panel {
      position: fixed; bottom: 5.2rem; left: 1.5rem; z-index: 9998;
      background: white; border: 2px solid #5ba4a4; border-radius: 14px;
      padding: 1rem 1.1rem; min-width: 230px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.18); direction: rtl;
      font-family: Arial, Helvetica, sans-serif;
      display: none;
    }
    #a11y-panel.a11y-open { display: block; }

    #a11y-panel h3 {
      font-size: 0.9rem; color: #5ba4a4; margin: 0 0 0.75rem;
      padding-bottom: 0.5rem; border-bottom: 1.5px solid #d4eded;
    }
    .a11y-row {
      display: flex; align-items: center; justify-content: space-between;
      padding: 0.42rem 0; border-bottom: 1px solid #f0f8f8;
      font-size: 0.87rem; color: #333;
    }
    .a11y-row:last-of-type { border-bottom: none; }

    .a11y-toggle {
      position: relative; width: 42px; height: 24px;
      border-radius: 12px; border: none; cursor: pointer;
      background: #ccc; transition: background 0.2s; flex-shrink: 0;
    }
    .a11y-toggle::after {
      content: ''; position: absolute;
      width: 18px; height: 18px; border-radius: 50%;
      background: white; top: 3px; right: 3px;
      transition: transform 0.2s;
      box-shadow: 0 1px 4px rgba(0,0,0,0.2);
    }
    .a11y-toggle.on { background: #5ba4a4; }
    .a11y-toggle.on::after { transform: translateX(-18px); }

    .a11y-font-row { display: flex; align-items: center; justify-content: space-between; padding: 0.42rem 0; }
    .a11y-font-row span { font-size: 0.87rem; color: #333; }
    .a11y-font-btns { display: flex; gap: 6px; }
    .a11y-font-btns button {
      width: 28px; height: 28px; border-radius: 6px; border: 1.5px solid #d4eded;
      background: white; cursor: pointer; font-size: 0.85rem; color: #5ba4a4; font-weight: bold;
      display: flex; align-items: center; justify-content: center;
    }
    .a11y-font-btns button:hover { background: #e8f5f5; }

    .a11y-reset {
      width: 100%; margin-top: 0.6rem; padding: 0.4rem;
      border: 1.5px solid #d4eded; border-radius: 8px;
      background: white; cursor: pointer; font-size: 0.8rem; color: #888;
    }
    .a11y-reset:hover { background: #f0f8f8; }
  `;

  function injectCSS() {
    var style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }

  function applyPrefs() {
    var root = document.documentElement;
    var base = 16 + prefs.fontSize * 2;
    root.style.fontSize = base + 'px';
    root.style.filter = prefs.grayscale ? 'grayscale(100%)' : (prefs.highContrast ? 'contrast(1.5)' : '');
    if (prefs.underlineLinks) {
      if (!document.getElementById('a11y-ul-style')) {
        var s = document.createElement('style');
        s.id = 'a11y-ul-style';
        s.textContent = 'a { text-decoration: underline !important; }';
        document.head.appendChild(s);
      }
    } else {
      var ul = document.getElementById('a11y-ul-style');
      if (ul) ul.remove();
    }
    if (prefs.focusHighlight) {
      if (!document.getElementById('a11y-focus-style')) {
        var s2 = document.createElement('style');
        s2.id = 'a11y-focus-style';
        s2.textContent = '*:focus { outline: 3px solid #5ba4a4 !important; outline-offset: 3px !important; }';
        document.head.appendChild(s2);
      }
    } else {
      var fs = document.getElementById('a11y-focus-style');
      if (fs) fs.remove();
    }
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs)); } catch(e) {}
  }

  function loadPrefs() {
    try {
      var saved = localStorage.getItem(STORAGE_KEY);
      if (saved) prefs = Object.assign({}, defaults, JSON.parse(saved));
    } catch(e) {}
  }

  function buildUI() {
    var btn = document.createElement('button');
    btn.id = 'a11y-btn';
    btn.setAttribute('aria-label', 'אפשרויות נגישות');
    btn.setAttribute('aria-expanded', 'false');
    btn.textContent = '♿';

    var panel = document.createElement('div');
    panel.id = 'a11y-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'הגדרות נגישות');

    var title = document.createElement('h3');
    title.textContent = 'נגישות';
    panel.appendChild(title);

    function makeToggle(label, key) {
      var row = document.createElement('div');
      row.className = 'a11y-row';
      var lbl = document.createElement('span');
      lbl.textContent = label;
      var tog = document.createElement('button');
      tog.className = 'a11y-toggle' + (prefs[key] ? ' on' : '');
      tog.setAttribute('aria-label', label);
      tog.setAttribute('aria-pressed', prefs[key] ? 'true' : 'false');
      tog.addEventListener('click', function () {
        prefs[key] = !prefs[key];
        tog.className = 'a11y-toggle' + (prefs[key] ? ' on' : '');
        tog.setAttribute('aria-pressed', prefs[key] ? 'true' : 'false');
        applyPrefs();
      });
      row.appendChild(lbl);
      row.appendChild(tog);
      panel.appendChild(row);
    }

    var fontRow = document.createElement('div');
    fontRow.className = 'a11y-font-row';
    var fontLabel = document.createElement('span');
    fontLabel.textContent = 'גודל גופן';
    var fontBtns = document.createElement('div');
    fontBtns.className = 'a11y-font-btns';
    var btnMinus = document.createElement('button');
    btnMinus.textContent = '−';
    btnMinus.setAttribute('aria-label', 'הקטן גופן');
    btnMinus.addEventListener('click', function () {
      if (prefs.fontSize > -3) { prefs.fontSize--; applyPrefs(); }
    });
    var btnPlus = document.createElement('button');
    btnPlus.textContent = '+';
    btnPlus.setAttribute('aria-label', 'הגדל גופן');
    btnPlus.addEventListener('click', function () {
      if (prefs.fontSize < 5) { prefs.fontSize++; applyPrefs(); }
    });
    fontBtns.appendChild(btnMinus);
    fontBtns.appendChild(btnPlus);
    fontRow.appendChild(fontLabel);
    fontRow.appendChild(fontBtns);
    panel.appendChild(fontRow);

    makeToggle('ניגודיות גבוהה', 'highContrast');
    makeToggle('גווני אפור', 'grayscale');
    makeToggle('קו תחת קישורים', 'underlineLinks');
    makeToggle('הדגשת פוקוס', 'focusHighlight');

    var reset = document.createElement('button');
    reset.className = 'a11y-reset';
    reset.textContent = 'איפוס';
    reset.addEventListener('click', function () {
      prefs = Object.assign({}, defaults);
      applyPrefs();
      panel.remove();
      buildUI();
      document.body.appendChild(btn);
    });
    panel.appendChild(reset);

    btn.addEventListener('click', function () {
      var open = panel.classList.toggle('a11y-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    document.addEventListener('click', function (e) {
      if (!panel.contains(e.target) && e.target !== btn) {
        panel.classList.remove('a11y-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });

    document.body.appendChild(btn);
    document.body.appendChild(panel);
  }

  document.addEventListener('DOMContentLoaded', function () {
    injectCSS();
    loadPrefs();
    applyPrefs();
    buildUI();
  });
})();
