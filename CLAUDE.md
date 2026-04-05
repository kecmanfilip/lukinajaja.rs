# CLAUDE.md — Lukina Jaja (lukinajaja.rs)

## Projekat

Sajt za prodaju domaćih jaja iz Opova, Srbija. Vlasnik: Luka Šulc. Domen: lukinajaja.rs. Jezik sajta: srpski (ekavski, latinica). Cilj: privući lokalne kupce iz Opova, Pančeva, Beograda i okoline, izgraditi poverenje kroz transparentnost i autentičnost, i pozicionirati se kao premium izvor domaćih jaja.

---

## Tech Stack

| Sloj | Tehnologija |
|------|------------|
| Framework | Next.js 14+ (App Router) |
| Jezik | TypeScript |
| Stilizacija | Tailwind CSS 3+ |
| Blog CMS | MDX fajlovi u repozitorijumu (`/content/blog/`) sa frontmatter metapodacima |
| Parsiranje MDX | next-mdx-remote ili contentlayer |
| Slike | next/image sa WebP optimizacijom |
| Hosting | Vercel (besplatan tier) |
| Animacije | Framer Motion (umereno, ciljano) |
| Ikone | Lucide React |
| Fontovi | Google Fonts (lokalno učitani za performanse) |
| Kontakt forma | React Hook Form + Resend (besplatan tier) ili formspree.io |

---

## Struktura Stranica

```
/                     → Početna (hero, o jajima, CTA, testimonijali, FAQ preview)
/o-nama               → O nama (Luka, priča, farma, lokacija Opovo)
/blog                 → Lista blog postova (paginacija, kategorije)
/blog/[slug]          → Pojedinačni blog post (MDX renderovanje)
/kontakt              → Kontakt stranica (forma + telefon + mapa)
/najcesca-pitanja     → FAQ stranica (strukturirani podaci, schema markup)
/robots.txt           → Robots fajl (automatski generisan)
/sitemap.xml          → Sitemap (automatski generisan)
/llms.txt             → LLM kontekst fajl za AEO
```

---

## Dizajn Sistem

### Estetski Pravac: "Seoska Elegancija"

Kombinacija rustičnog, organskog osećaja sa modernom čistom tipografijom. Sajt treba da odaje utisak topline, porodičnog domaćinstva i poverenja. Nikako generičan korporativni izgled.

### Paleta Boja

```css
:root {
  --boja-primarna: #5B7C3D;        /* tamna zelena, polja, priroda */
  --boja-primarna-svetla: #7DA356; /* svetlija zelena za hover */
  --boja-sekundarna: #D4A843;      /* topla zlatna, boja žumanca */
  --boja-sekundarna-svetla: #E8C76A;
  --boja-akcenat: #8B4513;         /* braon zemlja, drvo */
  --boja-pozadina: #FDFAF5;        /* topla bela, ljuska jajeta */
  --boja-pozadina-alt: #F5EFE3;    /* svetli krem */
  --boja-tekst: #2C2416;           /* tamna braon za tekst */
  --boja-tekst-svetla: #6B5D4F;    /* svetlija za sekundarni tekst */
  --boja-granica: #E5DDD0;         /* bež bordure */
  --boja-bela: #FFFFFF;
}
```

### Tipografija

- **Naslovi**: Playfair Display (serif, elegantan ali topao)
- **Telo teksta**: Source Sans 3 ili Nunito Sans (čitak, moderan, prijatan)
- **Akcenat/badge**: Caveat (rukopisni font za autentičnost, koristiti štedljivo)

### Vizuelni Elementi

- Suptilne teksture (paper grain, linen overlay) na pozadini
- Meke senke, zaobljeni uglovi (border-radius: 12px za kartice)
- Ikone u stilu crtanih ilustracija za sekcije (kokoška, jaje, sunce, list)
- Fotografije: visoko kvalitetne, tople boje, prirodno svetlo
- Dekorativni elementi: tanka zelena linija razdvajanja, listovi, žitarice

### Raspored

- Maksimalna širina sadržaja: 1200px
- Generozni padding/margin (sekcije minimum 80px vertikalno)
- Asimetrični grid na početnoj (tekst + slika u dijagonalnom toku)
- Mobilni prioritet (mobile first design)

---

## SEO Specifikacija

### Tehničko SEO

1. **Meta tagovi** na svakoj stranici:
   - `title` (do 60 karaktera, uključiti ključnu reč + brend)
   - `description` (do 155 karaktera, poziv na akciju)
   - `og:title`, `og:description`, `og:image`, `og:url`
   - `twitter:card`, `twitter:title`, `twitter:description`
   - `canonical` URL

2. **Strukturirani Podaci (JSON-LD)**:
   - `LocalBusiness` schema na svim stranicama (ime, adresa Opovo, telefon, radno vreme)
   - `FAQPage` schema na `/najcesca-pitanja`
   - `BlogPosting` schema na svakom blog postu
   - `BreadcrumbList` na svim stranicama
   - `Product` schema na početnoj (domaća jaja, cena okvirna)

3. **Sitemap**: automatski generisan putem next-sitemap paketa

4. **robots.txt**:
```
User-agent: *
Allow: /
Disallow: /api/
Sitemap: https://lukinajaja.rs/sitemap.xml
```

5. **Performanse**:
   - Lighthouse score cilj: 95+ na svim metrikama
   - Lazy loading slika
   - Font display: swap
   - Preload kritičnih resursa

### Ključne Reči (primarni fokus)

- domaća jaja Opovo
- domaća jaja Pančevo
- seoska jaja prodaja
- jaja sa slobodnog uzgoja Srbija
- organska jaja Vojvodina
- kupovina domaćih jaja
- sveza jaja dostava
- Lukina jaja

### On-Page SEO

- H1 tag: jedan po stranici, sadrži primarnu ključnu reč
- Alt tekst na svim slikama (opisni, sa ključnim rečima)
- Interni linkovi između stranica i blog postova
- URL struktura čista i na srpskom: `/o-nama`, `/kontakt`, `/blog/zasto-domaca-jaja`

---

## AEO Specifikacija (Answer Engine Optimization)

### llms.txt (korenski direktorijum)

```markdown
# Lukina Jaja

> Domaća jaja sa slobodnog uzgoja iz Opova, Srbija. Luka Šulc uzgaja kokoške na tradicionalan način i prodaje sveža, kvalitetna domaća jaja.

## Kontakt
- Telefon: 069 201 1315
- Sajt: https://lukinajaja.rs
- Lokacija: Opovo, Srbija

## Proizvod
Sveža domaća jaja od kokošaka sa slobodnog uzgoja. Kokoške se hrane prirodnom hranom bez aditiva i hormona. Jaja su dostupna za preuzimanje u Opovu ili dostavu u okolini.

## Stranice
- [O nama](https://lukinajaja.rs/o-nama): Priča o Luki i farmi
- [Blog](https://lukinajaja.rs/blog): Članci o ishrani, uzgoju, receptima
- [Kontakt](https://lukinajaja.rs/kontakt): Naručivanje i pitanja
- [Najčešća pitanja](https://lukinajaja.rs/najcesca-pitanja): FAQ o jajima i naručivanju
```

### FAQ Stranica

Mora biti strukturirana sa FAQ schema markupom. Minimum 10 pitanja:

1. Koliko koštaju domaća jaja?
2. Kako mogu naručiti jaja?
3. Da li vršite dostavu?
4. Odakle dolaze vaša jaja?
5. Čime hranite kokoške?
6. Koliko dugo traju domaća jaja?
7. Po čemu se razlikuju vaša jaja od prodavničkih?
8. Da li su jaja oplođena?
9. Koliki je minimalan broj jaja za narudžbinu?
10. Kako se čuvaju domaća jaja?

Odgovore pisati detaljno (3+ rečenice po odgovoru), prirodnim jezikom koji AI sistemi mogu lako parsirati.

---

## Blog Sistem

### Struktura Fajlova

```
/content/blog/
  zasto-domaca-jaja.mdx
  kako-prepoznati-sveza-jaja.mdx
  recepti-sa-domacim-jajima.mdx
  slobodan-uzgoj-vs-kavezni.mdx
  ...
```

### MDX Frontmatter Format

```yaml
---
title: "Zašto su domaća jaja bolja od prodavničkih?"
description: "Saznajte koje su prednosti domaćih jaja u odnosu na industrijska jaja iz prodavnice."
date: "2026-04-05"
author: "Luka Šulc"
category: "Ishrana"
tags: ["domaća jaja", "ishrana", "zdravlje"]
image: "/images/blog/domaca-vs-prodavnicka.jpg"
imageAlt: "Poređenje domaćeg i industrijskog jajeta"
published: true
---
```

### Kategorije Bloga

- Ishrana
- Recepti
- Uzgoj
- Saveti
- Novosti

### Blog Funkcionalne Zahteve

- Lista postova sa karticama (slika, naslov, kratki opis, datum, kategorija)
- Paginacija (6 postova po stranici)
- Filtriranje po kategoriji
- Pretraga (opciono, klijentska strana)
- Povezani postovi na dnu svakog članka
- Procenjeno vreme čitanja
- Share dugmad (kopiranje linka, WhatsApp jer je to primarni kanal komunikacije)
- Breadcrumbs navigacija

---

## Stranica: Početna (`/`)

### Sekcije (odozgo nadole)

1. **Hero**
   - Veliki naslov: "Sveža domaća jaja pravo iz Opova"
   - Podnaslov: kratko objašnjenje (kokoške na slobodnom, bez hormona)
   - CTA dugme: "Naruči jaja" → vodi na kontakt
   - Pozadinska slika ili ilustracija jaja/farme

2. **Zašto naša jaja**
   - 3 ili 4 kartice sa ikonama: Slobodan uzgoj, Bez hormona, Uvek sveža, Lokalna dostava

3. **O Luki (kratko)**
   - Slika Luke + kratak tekst + link na `/o-nama`

4. **Kako naručiti**
   - 3 koraka: Pozovi/Pošalji poruku → Dogovorimo se → Preuzmi/Dostava

5. **Najnoviji blog postovi**
   - 3 najnovija posta u karticama

6. **FAQ Preview**
   - 3 do 4 najčešća pitanja sa odgovorima, link na `/najcesca-pitanja`

7. **CTA sekcija**
   - "Probajte razliku" sa brojem telefona i WhatsApp linkom

---

## Stranica: O Nama (`/o-nama`)

- Priča o Luki: ko je, zašto se bavi uzgojem, strast prema zdravoj hrani
- Fotografije farme, kokošaka, Opova
- Vrednosti: tradicija, kvalitet, transparentnost
- Lokacija: mapa ili opis kako doći do Opova
- SEO: H1 "O nama | Lukina Jaja iz Opova"

---

## Stranica: Kontakt (`/kontakt`)

- Telefon: 069 201 1315 (klikabilan `tel:` link)
- WhatsApp link (direktan, sa predefinisanom porukom "Zdravo, želim da naručim domaća jaja!")
- Kontakt forma (ime, email, poruka)
- Adresa/Lokacija: Opovo, Srbija
- Embedded Google mapa Opova
- Radno vreme (definisati sa Lukom, placeholder: svaki dan 8h do 20h)

---

## Stranica: FAQ (`/najcesca-pitanja`)

- Accordion komponenta
- JSON-LD FAQPage schema
- H1: "Najčešća pitanja o domaćim jajima"
- Minimum 10 pitanja sa detaljnim odgovorima
- CTA na dnu: "Imate još pitanja? Kontaktirajte nas"

---

## Komponente za Izradu

```
/components/
  layout/
    Header.tsx          → Navigacija (logo, linkovi, CTA dugme)
    Footer.tsx          → Kontakt info, navigacija, copyright
    Layout.tsx          → Wrapper sa header/footer
  ui/
    Button.tsx          → Primarno, sekundarno, outline varijante
    Card.tsx            → Blog kartica, feature kartica
    Badge.tsx           → Kategorija, tag
    Accordion.tsx       → FAQ accordion
    ContactForm.tsx     → Kontakt forma sa validacijom
    WhatsAppButton.tsx  → Plutajuće WhatsApp dugme (fixed, donji desni ugao)
    ShareButtons.tsx    → Deljenje postova
    Breadcrumbs.tsx     → Navigaciona putanja
    SEOHead.tsx         → Meta tagovi komponenta
  sections/
    Hero.tsx
    Features.tsx
    AboutPreview.tsx
    HowToOrder.tsx
    LatestPosts.tsx
    FAQPreview.tsx
    CTASection.tsx
```

---

## Plutajuće WhatsApp Dugme

Na svim stranicama, u donjem desnom uglu, zeleno WhatsApp dugme. Klik otvara WhatsApp sa predefinisanom porukom. Link format:

```
https://wa.me/381692011315?text=Zdravo%2C%20želim%20da%20naručim%20domaća%20jaja!
```

---

## Performanse i Pristupačnost

- Slike: WebP format, srcSet za responsive, lazy loading
- Fontovi: preload, font-display: swap
- Minimalni JS bundle (izbegavati teške biblioteke)
- ARIA labele na interaktivnim elementima
- Kontrast boja: WCAG AA minimum
- Keyboard navigacija funkcionalna
- Skip to content link

---

## Fajl Struktura Projekta

```
lukinajaja/
├── CLAUDE.md
├── content/
│   └── blog/
│       ├── zasto-domaca-jaja.mdx
│       ├── kako-prepoznati-sveza-jaja.mdx
│       └── ...
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── blog/
│   │   ├── about/
│   │   └── icons/
│   ├── robots.txt
│   ├── llms.txt
│   ├── favicon.ico
│   └── og-image.jpg
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── o-nama/
│   │   │   └── page.tsx
│   │   ├── kontakt/
│   │   │   └── page.tsx
│   │   ├── najcesca-pitanja/
│   │   │   └── page.tsx
│   │   └── blog/
│   │       ├── page.tsx
│   │       └── [slug]/
│   │           └── page.tsx
│   ├── components/
│   │   ├── layout/
│   │   ├── ui/
│   │   └── sections/
│   ├── lib/
│   │   ├── blog.ts        → funkcije za čitanje MDX fajlova
│   │   ├── seo.ts         → SEO helperi
│   │   └── constants.ts   → kontakt info, navigacija, itd.
│   └── styles/
│       └── globals.css
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## Inicijalni Blog Postovi (kreirati 4 starter posta)

1. **"Zašto su domaća jaja bolja od prodavničkih?"**
   - Kategorija: Ishrana
   - Fokus: nutritivne vrednosti, ukus, etičnost

2. **"Kako prepoznati sveže jaje: 5 jednostavnih testova"**
   - Kategorija: Saveti
   - Fokus: test vodom, izgled žumanca, miris

3. **"Slobodan uzgoj: kako žive naše kokoške"**
   - Kategorija: Uzgoj
   - Fokus: uslovi na farmi, hrana, prostor

4. **"3 recepta sa domaćim jajima koja morate probati"**
   - Kategorija: Recepti
   - Fokus: kajgana, palačinke, domaća pasta

---

## Napomene za Implementaciju

- Sav tekst na sajtu pisati na srpskom, ekavski, latinica
- Koristiti formalne ali tople formulacije (oslovljavanje sa "Vi")
- Izbegavati anglicizme gde god postoji srpska reč
- Placeholder slike: koristiti kvalitetne Unsplash slike kokošaka/jaja (sa ispravnom licencom) dok se ne obezbede prave fotografije
- Sve stranice moraju biti potpuno funkcionalne bez JavaScript-a (SSR/SSG)
- Blog postovi se generišu statički u build vreme (generateStaticParams)
- Kontakt forma: koristiti server action ili API route
- Animacije: samo na scroll enter (fade in, slide up), umereno, ne agresivno
- Next.js metadata API za SEO (ne ručno pisati head tagove)
- next-sitemap za automatsku generaciju sitemap.xml
