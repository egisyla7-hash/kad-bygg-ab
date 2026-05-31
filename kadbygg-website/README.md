# KAD Bygg AB – webbplats

En modern, responsiv och SEO-optimerad webbplats för KAD Bygg AB, byggd med
**Next.js 15**, **TypeScript** och **Tailwind CSS**.

## Kom igång

Du behöver [Node.js](https://nodejs.org) 18.18 eller senare.

```bash
# 1. Installera beroenden
npm install

# 2. Starta utvecklingsserver
npm run dev
# Öppna http://localhost:3000

# 3. Bygg för produktion
npm run build
npm run start
```

## Projektstruktur

```
src/
  app/                 # Sidor (App Router)
    page.tsx           # Startsida
    om-oss/            # Om oss
    tjanster/          # Tjänster + dynamiska undersidor [slug]
    projekt/           # Projektgalleri med filter & lightbox
    omdomen/           # Omdömen
    kontakt/           # Kontakt med formulär & karta
    layout.tsx         # Gemensam layout, fonts, metadata, schema
    sitemap.ts         # Dynamisk sitemap
    robots.ts          # robots.txt
    manifest.ts        # PWA-manifest
  components/          # Återanvändbara komponenter
  lib/
    site.ts            # ⭐ All företagsdata, tjänster & projekt (en plats)
public/
  images/              # Bilder (hero, projekt m.m.)
```

## Anpassa innehåll

Nästan allt innehåll styrs från **`src/lib/site.ts`**:

- **Företagsuppgifter** – `company` (telefon, e-post, adress, org.nr m.m.)
- **Tjänster** – `services` (rubrik, beskrivning, bild, punktlista)
- **Projekt** – `projects` (titel, kategori, bild, beskrivning)
- **Varför välja oss / process** – `reasons`, `processSteps`

Byt bilder genom att lägga nya filer i `public/images/` och uppdatera
sökvägarna i `site.ts`.

## Att göra senare

- **Omdömen:** Sidan `/omdomen` är förberedd med en uppmaning att lämna omdöme.
  När riktiga omdömen finns, ersätt platshållarblocket (markerat med `TODO` i
  `src/app/omdomen/page.tsx`) med en lista av kundcitat.
- **Kontaktformulär:** Formuläret öppnar e-postklienten (mailto) med ifyllda
  uppgifter. Vill ni ta emot förfrågningar direkt på servern kan formuläret
  kopplas till en e-posttjänst (t.ex. Resend, Formspree eller en API-route).
- **Domän & analys:** Uppdatera `company.url` i `site.ts` till er riktiga domän
  innan ni driftsätter, så blir sitemap, schema och Open Graph korrekta.

## Teknik

- Next.js 15 (App Router, React 19)
- TypeScript
- Tailwind CSS 3.4
- Framer Motion (animationer, respekterar reducerad rörelse)
- Strukturerad data (JSON-LD, `GeneralContractor`) för lokal SEO

## Driftsättning

Webbplatsen kan driftsättas på valfri Node-plattform. Enklast är
[Vercel](https://vercel.com): koppla repot, välj Next.js, klart.
