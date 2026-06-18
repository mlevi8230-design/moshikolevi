# מדריך ניהול האתר — moshikolevi.com

---

## מה זה בעצם?

האתר שלך בנוי מקבצי טקסט פשוטים שנמצאים במחשב שלך.
כשאתה שומר שינוי ו"דוחף" אותו לאינטרנט — האתר מתעדכן תוך 2 דקות.

---

## ספקי השירות

| ספק | תפקיד | עלות | כתובת |
|-----|--------|------|--------|
| **GitHub** | מאחסן את קוד האתר בענן | חינם | github.com |
| **Cloudflare Pages** | בונה ומפרסם את האתר | חינם | dash.cloudflare.com |
| **Wix** | מחזיק את שם הדומיין בלבד (עד 2027) | ~$10/שנה | wix.com |

> כניסה ל-GitHub ול-Cloudflare: עם **mlevi8230@gmail.com** (Sign in with Google)

---

## המסלול של כל שינוי

```
אתה עורך קובץ במחשב
        ↓
Git — שומר את השינוי בהיסטוריה (כמו Ctrl+S עם זיכרון)
        ↓
GitHub — מאחסן את הקוד בענן
        ↓
Cloudflare Pages — בונה ומפרסם אוטומטית (~2 דקות)
        ↓
www.moshikolevi.com — האתר החי
```

---

## איך Claude מתחיל שיחה חדשה

בתיקיית הפרויקט קיים קובץ `CLAUDE.md` — Claude קורא אותו **אוטומטית** בתחילת כל שיחה ויודע מיד מה הפרויקט, איך הוא בנוי ואיך לפרסם. אין צורך להסביר מחדש.

---

## כדי לערוך, פתח 3 דברים:

1. **VSCode** — תוכנת עריכת הקבצים
2. **תיקיית הפרויקט** — `C:\Users\moshe.l\Documents\moshikolevi`
   - ב-VSCode: File → Open Folder → בחר את התיקייה
3. **Claude Code** — הסייען שעורך עבורך
   - ב-VSCode: Ctrl+Shift+P → הקלד "Claude"

---

## איך לבקש שינוי

פשוט כתוב לי מה אתה רוצה. לדוגמה:
- "שנה את הטקסט בדף הבית ל..."
- "הוסף תמונה לדף הגלריה"
- "הוסף מאמר חדש בשם..."

אני אמצא את הקובץ, אערוך אותו, ואפרסם — אתה לא צריך לנגוע בקוד.

---

## אחרי שינוי — פרסום לבד (אם צריך)

פתח טרמינל ב-VSCode (Ctrl+`) והדבק בזו אחר זו:

```
git add .
git commit -m "תיאור מה שינית"
git push origin master
```

חכה 2 דקות → האתר מתעדכן.

---

## איפה כל דף נמצא

| דף באתר | קובץ |
|---------|------|
| דף הבית (טיפול) | `src/pages/index.astro` |
| שיטת הטיפול | `src/pages/treatment.astro` |
| קצת עליי | `src/pages/about.astro` |
| יצירת קשר | `src/pages/contact.astro` |
| מאמרים — רשימה | `src/pages/articles/index.astro` |
| מאמרים — תוכן | `src/data/articles.json` |
| אמנות — ראשי | `src/pages/art/index.astro` |
| גלריה | `src/pages/art/gallery.astro` |
| ציור על פי תמונה | `src/pages/art/portrait.astro` |
| ציורי הנצחה | `src/pages/art/memorial.astro` |
| תערוכות — ראשי | `src/pages/art/exhibitions/index.astro` |
| תערוכת WHERE IS MY MIND | `src/pages/art/exhibitions/wimm.astro` |
| ניווט עליון | `src/components/Nav.astro` |

---

## איפה שמים תמונות חדשות

תמונות נמצאות בתיקייה `public/images/` ומחולקות לנושאים:

| נושא | תיקייה |
|------|---------|
| דף הבית / טיפול | `public/images/home/` |
| תמונות "קצת עליי" | `public/images/about/` |
| גלריה | `public/images/gallery/` |
| ציור על פי תמונה | `public/images/portrait/` |
| תערוכות | `public/images/exhibitions/` |
| ציורים למכירה | `public/images/for-sale/` |

**איך מוסיפים תמונה:**
1. שמור את הקובץ בתיקייה המתאימה
2. תגיד לי שהוספת תמונה — אני אוסיף אותה לדף הנכון

---

## אם משהו לא עובד

כנס ל-[dash.cloudflare.com](https://dash.cloudflare.com) עם Gmail:
**Workers & Pages** → **moshikolevi** → בדוק שהפרסום האחרון מסומן ✓

אם יש ✗ אדום — שלח לי צילום מסך ואני אתקן.

---

## כתובות שימושיות

| מה | כתובת |
|----|--------|
| האתר החי | www.moshikolevi.com |
| גיבוי (זהה) | moshikolevi.pages.dev |
| קוד בענן | github.com/mlevi8230-design/moshikolevi |
| לוח Cloudflare | dash.cloudflare.com |
