# moshikolevi.com — אתר אישי של מושיקו לוי
## תיעוד לעבודה עם Claude Code

---

## סקירה כללית

אתר תדמית אישי עבור מושיקו לוי — מטפל קוגנטיבי-חוויתי וצייר.
מחליף את אתר Wix הקיים. מתארח על Cloudflare Pages — חינמי לנצח.

**כתובת חיה (עתידית):** https://moshikolevi.com
**תיקיית פרויקט:** `C:\Users\moshe.l\Documents\moshikolevi`

---

## Stack טכנולוגי

| טכנולוגיה | שימוש |
|-----------|-------|
| Astro | Static Site Generator |
| Tailwind CSS v4 | עיצוב |
| Cloudflare Pages | אירוח (חינמי, unlimited bandwidth) |
| GitHub | קוד + auto-deploy trigger |

---

## מבנה קבצים

```
moshikolevi/
├── src/
│   ├── pages/
│   │   ├── index.astro          — דף הבית (טיפול)
│   │   ├── treatment.astro      — שיטת הטיפול
│   │   ├── about.astro          — קצת עליי
│   │   ├── articles.astro       — מאמרים (רשימה)
│   │   ├── articles/[slug].astro — מאמר בודד
│   │   ├── contact.astro        — יצירת קשר
│   │   ├── art.astro            — אמנות (דף ראשי)
│   │   ├── gallery.astro        — גלריה
│   │   ├── for-sale.astro       — ציורים למכירה
│   │   ├── portrait.astro       — ציור על פי תמונה
│   │   ├── custom.astro         — ציור בהזמנה אישית
│   │   ├── exhibitions.astro    — תערוכות
│   │   └── meditation.astro     — מדיטציה
│   ├── layouts/
│   │   ├── BaseLayout.astro     — layout כללי (nav + footer)
│   │   ├── TherapyLayout.astro  — layout לאתר הטיפול
│   │   └── ArtLayout.astro      — layout לאתר האמנות
│   ├── components/
│   │   ├── Nav.astro            — ניווט ראשי
│   │   ├── Footer.astro         — footer עם קשר + רשתות
│   │   ├── Testimonials.astro   — קרוסלת המלצות
│   │   ├── GalleryGrid.astro    — גריד תמונות + lightbox
│   │   └── ContactForm.astro    — טופס יצירת קשר
│   ├── content/
│   │   └── articles/            — מאמרים כקבצי Markdown
│   │       └── example.md
│   └── styles/
│       └── global.css           — Tailwind imports + CSS משותף
├── public/
│   └── images/
│       ├── gallery/             — תמונות גלריה
│       ├── for-sale/            — ציורים למכירה
│       └── about/               — תמונות אישיות (פרופיל, קליניקה)
├── .mcp.json                    — Astro Docs MCP
├── astro.config.mjs
├── wrangler.toml                — Cloudflare Pages config
└── package.json
```

---

## עיצוב

**סגנון:** נקי, בהיר, מינימליסטי — מתאים לטיפול ואמנות
**כיוון:** RTL (עברית)
**פלטת צבעים:** לבן/אפור בהיר + акцент сине-фиолетовый (כמו הוויקס הנוכחי)
**גופנים:** Heebo (עברית, Google Fonts)
**Mobile-first** — חיוני מאוד

---

## ניווט — 3 עולמות

```
[טיפול]  [אמנות]  [מדיטציה]
```

כל עולם עם תת-ניווט משלו.

---

## תוכן — דפי הטיפול

| דף | תיאור |
|----|-------|
| index | היכרות + המלצות + CTA |
| treatment | LI-CBT / CBT / ACT הסבר |
| about | ביוגרפיה + תמונה |
| articles | רשימת מאמרים (מ-Markdown) |
| contact | טלפון + מייל + רשתות |

## תוכן — דפי האמנות

| דף | תיאור |
|----|-------|
| art | דף ראשי עם וידאו + תקציר |
| gallery | גריד ציורים + lightbox |
| for-sale | ציורים למכירה + כפתור WhatsApp |
| portrait | ציור על פי תמונה + טופס |
| custom | ציור בהזמנה אישית |
| exhibitions | תערוכות שהיו |

---

## פרטי קשר (לשימוש בכל הדפים)

- **טלפון/WhatsApp:** 0542400106
- **אימייל:** mlevi8230@gmail.com
- **כתובת:** רחוב התבור 7, גני תקווה
- **Instagram:** https://www.instagram.com/moshikoleviart/
- **Facebook:** https://www.facebook.com/moshiko.levy.794

---

## פקודות חשובות

```bash
# פיתוח מקומי
npm run dev

# בניה לפרסום
npm run build

# תצוגה מקדימה של build
npm run preview

# פרסום ל-Cloudflare (אחרי git push האתר מתפרסם אוטומטית)
git add . && git commit -m "..." && git push
```

---

## הערות לפיתוח

1. **RTL** — `dir="rtl"` על `<html>`, כל הממשק מימין לשמאל
2. **Mobile-first** — עיצוב מובייל תמיד קודם, desktop ב-breakpoints
3. **תמונות** — להשתמש ב-Astro `<Image>` component לאופטימיזציה
4. **מאמרים** — Markdown ב-`src/content/articles/`, Astro Content Collections
5. **גלריה** — תמונות ב-`public/images/gallery/`, לא לשכוח alt text בעברית
6. **Auto-deploy** — כל `git push` ל-main מפרסם ל-Cloudflare Pages אוטומטית
7. **דומיין** — moshikolevi.com מחובר ל-Cloudflare Pages (DNS עדכון ב-Wix)
