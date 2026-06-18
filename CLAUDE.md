# moshikolevi.com — הוראות לעבודה עם Claude Code

## סקירה כללית
אתר אישי של מושיקו לוי — מטפל ואמן. כולל שני חלקים:
- **טיפול** — שיטת טיפול, מאמרים, יצירת קשר
- **אמנות** — גלריה, תערוכות, ציור על פי תמונה, ציורי הנצחה

**כתובת חיה:** https://www.moshikolevi.com  
**תיקיית פרויקט:** `C:\Users\moshe.l\Documents\moshikolevi`

---

## Stack טכנולוגי

| טכנולוגיה | שימוש |
|-----------|-------|
| Astro v6.3.7 | Static Site Generator |
| Tailwind CSS v4 | עיצוב |
| Cloudflare Pages | אחסון + פרסום אוטומטי |
| GitHub | קוד בענן (mlevi8230-design/moshikolevi) |
| Wix | רשם דומיין בלבד עד 2027 |

---

## מבנה קבצים

```
moshikolevi/
├── src/
│   ├── pages/
│   │   ├── index.astro          — דף הבית (טיפול)
│   │   ├── treatment.astro      — שיטת הטיפול
│   │   ├── about.astro          — קצת עליי
│   │   ├── contact.astro        — יצירת קשר
│   │   ├── articles/
│   │   │   ├── index.astro      — רשימת מאמרים
│   │   │   └── [slug].astro     — תבנית מאמר בודד
│   │   └── art/
│   │       ├── index.astro      — דף אמנות ראשי
│   │       ├── gallery.astro    — גלריה
│   │       ├── portrait.astro   — ציור על פי תמונה
│   │       ├── memorial.astro   — ציורי הנצחה
│   │       ├── for-sale.astro   — ציורים למכירה
│   │       └── exhibitions/
│   │           ├── index.astro  — דף תערוכות ראשי
│   │           └── wimm.astro   — WHERE IS MY MIND
│   ├── components/
│   │   └── Nav.astro            — ניווט עליון
│   ├── layouts/
│   │   └── BaseLayout.astro     — Layout בסיסי
│   └── data/
│       └── articles.json        — תוכן המאמרים
└── public/
    └── images/
        ├── home/                — תמונות דף הבית
        ├── about/               — תמונות "קצת עליי"
        ├── gallery/             — תמונות גלריה
        ├── portrait/            — תמונות ציור על פי תמונה
        ├── exhibitions/         — תמונות תערוכות
        └── for-sale/            — תמונות ציורים למכירה
```

---

## פרסום

```bash
git add .
git commit -m "תיאור השינוי"
git push origin master
# האתר מתעדכן תוך ~2 דקות דרך Cloudflare Pages
```

---

## כללים חשובים

1. **RTL** — כל הטקסט עברית מימין לשמאל
2. **תמונות** — נשמרות ב-`public/images/` לפי נושא
3. **מאמרים** — נוספים ב-`src/data/articles.json` עם שדות: `slug, title, date, excerpt, content, image`
4. **עיצוב** — Tailwind CSS v4, צבע ראשי `#5ba4a4` (ירוק-כחול)
5. **Astro files** — Cloudflare בונה אוטומטית, אין צורך ב-build ידני

---

## DNS

- `www.moshikolevi.com` — CNAME → `moshikolevi.pages.dev` (ב-Wix DNS)
- הדומיין רשום ב-Wix עד יוני 2027
