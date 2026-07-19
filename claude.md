# OPTIVOX GROUP — Reference Map for Claude
# Lis ce fichier en premier. Ne relis les sources que si besoin de detail.

---
## REGLES DE DEV A RESPECTER

1. Toujours lire ce fichier avant de coder — evite de relire tous les .jsx
2. Mettre a jour `implementation.md` apres chaque tache completee
3. Consigner toute erreur dans `errors.md` avec sa solution
4. Ne pas dupliquer useInView — utiliser `src/hooks/useInView.js` (a creer)
5. Le design system est dans `index.css` — ne pas hardcoder des couleurs dans les .jsx
6. Pas de TypeScript pour l'instant — rester en .jsx/.js
7. Pas de tests automatises — tester visuellement via `npm run dev`


## STACK TECHNIQUE

| Couche        | Outil                          | Version  |
|---------------|--------------------------------|----------|
| Framework     | React (JSX, pas TypeScript)    | 19.2.6   |
| Bundler       | Vite                           | 8.0.12   |
| Routing       | React Router DOM               | 7.17.0   |
| Icones        | Lucide React                   | 1.18.0   |
| Styling       | CSS Custom Properties (maison) | —        |
| Backend       | AUCUN (tout simule)            | —        |
| TypeScript    | NON                            | —        |
| Tests         | AUCUN                          | —        |

---

## STRUCTURE DES FICHIERS (src/)

```
src/
  index.css           <- Design system global (variables, boutons, cartes, animations)
  App.css             <- Minimal (flex layout)
  App.jsx             <- Router, Navbar, Footer, ScrollToTop
  main.jsx            <- Entry point, BrowserRouter wrap

  components/
    Navbar.jsx / .css   <- Sticky, scroll-detect, mobile menu, active link
    Footer.jsx / .css   <- CTA banner, grid (brand/links/services/contact), bottom bar
    IntroLoader.jsx/.css <- Animation SVG helix + tagline (2.4s). PROBLEME: se rejoue sur chaque page
    SocialIcons.jsx     <- LinkedIn, Twitter, Facebook, Instagram SVG icons

  pages/
    Home.jsx / .css     <- Hero, Stats, Services preview, Why Us, Testimonials, Process
    About.jsx / .css    <- Hero, Mission/Vision, Story, Values, Timeline, Team, CTA
    Services.jsx / .css <- Hero, 4 service details (alternance L/R), CTA
    Industries.jsx/.css <- Hero, 6 industry cards, Compliance section, CTA
    Careers.jsx / .css  <- Hero, Benefits, Job listings + filter, Application form
    Contact.jsx / .css  <- Hero, Contact info cards, Contact form

  assets/
    hero.png            <- Image non utilisee en production
    react.svg, vite.svg <- Assets Vite par defaut (inutiles)

public/
  favicon.svg           <- PROBLEME: favicon Vite par defaut, pas logo Optivox
  icons.svg             <- Sprites SVG
  images/
    logo-dark.png       <- Logo principal (utilise partout)
    logo-light.png      <- Logo alternatif (non utilise dans le code actuel)
```

---

## ROUTES

| Path          | Composant     | Notes                          |
|---------------|---------------|--------------------------------|
| /             | Home          | IntroLoader actif              |
| /about        | About         | IntroLoader actif — BUG        |
| /services     | Services      | Pas d'IntroLoader              |
| /industries   | Industries    | Pas d'IntroLoader              |
| /careers      | Careers       | Pas d'IntroLoader              |
| /contact      | Contact       | IntroLoader actif — BUG        |
| /*            | (vide)        | MANQUANT — pas de page 404     |

---

## DESIGN SYSTEM (index.css)

### Palette or (extrait du logo)
- `--gold-500` : #d4912a  (reference)
- `--text-gold` : #c8a44e
- `--gradient-gold` : 135deg, #c8a44e -> #e8d48b -> #d4a843
- `--gradient-gold-text` : pour les titres gold (background-clip: text)

### Couleurs de fond
- `--bg-primary` : #0a0a0a  (fond principal)
- `--bg-card`    : rgba(20,20,20,0.8)
- Mode clair : ABSENT

### Typographies (ATTENTION: non importees)
- `--font-heading` : 'Playfair Display', Georgia, serif
- `--font-body`    : 'Inter', -apple-system, sans-serif
- PROBLEME : aucun @import Google Fonts, ni <link> dans index.html

### Classes globales cles
- `.btn .btn-primary .btn-secondary .btn-large` — boutons
- `.card .card-icon .card-title .card-description` — cartes
- `.section .section-header .section-label .section-title .section-subtitle`
- `.container` (max 1200px) / `.container-wide` (max 1400px)
- `.text-gold` — gradient text or
- `.grid-2 .grid-3 .grid-4` — grilles responsive

---

## COMPOSANTS CLES — COMPORTEMENTS

### Navbar
- Scroll > 50px -> classe `navbar--scrolled`
- Mobile: toggle `mobileOpen` state, ferme auto au changement de route
- CTA: lien /contact "Get Started"

### IntroLoader
- States: initial -> spinning (100ms) -> fadeout (1800ms) -> done (2400ms)
- PROBLEME: chaque page qui l'importe a son propre `showIntro = useState(true)`
- SOLUTION PREVUE: utiliser sessionStorage pour ne jouer qu'une fois par session

### Formulaires (Contact + Careers)
- Etat local `formData` + `submitted`
- handleSubmit: e.preventDefault() + setSubmitted(true) SEULEMENT
- AUCUN envoi reel de donnees

### useInView (hook)
- DUPLIQUE dans: Home.jsx, About.jsx, Services.jsx, Industries.jsx
- SOLUTION PREVUE: extraire en `src/hooks/useInView.js`

### Counter (Home.jsx seulement)
- Anime de 0 -> `end` via setInterval(16ms)
- Declenche par useInView (threshold 0.15)

---

## DONNEES STATIQUES (hardcodees dans les composants)

### Home.jsx
- `services[]` — 4 items (IT, CSR, Interpretation, AI)
- `stats[]` — 4 items (500+, 98%, 30+, 24/7)
- `whyUs[]` — 6 items
- `testimonials[]` — 3 items (NOM: Sarah Mitchell, David Chen, Maria Santos)
- `trustedLogos[]` — 6 noms texte (pas de vraies images)
- `process steps` — 4 etapes inline (non extrait en const)

### Services.jsx
- `services[]` — 4 items avec couleurs hardcodees (#4ade80, #60a5fa, #f59e0b, #a78bfa)

### About.jsx
- `values[]` — 6 items
- `team[]` — 4 membres (initiales seulement, pas de photos)
- `milestones[]` — 6 milestones (2019-2024)

### Industries.jsx
- `industries[]` — 6 items avec caseStudy

### Careers.jsx
- `openPositions[]` — 4 postes avec salaires
- `benefits[]` — 4 items
- `categories[]` — 5 categories pour le filtre

---

## PROBLEMES CONNUS (resume)

| ID  | Severite | Probleme                                          | Statut    |
|-----|----------|---------------------------------------------------|-----------|
| P01 | CRITIQUE | Polices Google Fonts non importees                | RESOLU    |
| P02 | CRITIQUE | Formulaires ne soumettent rien (pas de backend)   | RESOLU*   |
| P03 | CRITIQUE | Pas de page 404                                   | RESOLU    |
| P04 | CRITIQUE | Privacy Policy / ToS = href="#"                   | BLOQUE CLIENT|
| P05 | ELEVE    | IntroLoader rejoue sur chaque page                | RESOLU    |
| P06 | ELEVE    | Liens sociaux vides (href="#")                    | BLOQUE CLIENT|
| P07 | ELEVE    | Favicon = defaut Vite                             | RESOLU    |
| P08 | ELEVE    | Pas de balises SEO meta (OG/Twitter manquants)    | RESOLU    |
| P09 | MOYEN    | useInView duplique dans 4 fichiers                | RESOLU    |
| P10 | MOYEN    | Math.random() dans Hero particles (re-render)     | RESOLU    |
| P11 | MOYEN    | Couleurs hardcodees dans Services.jsx             | Refactor  |
| P12 | MOYEN    | Pas de loading state sur boutons submit           | RESOLU    |
| P13 | INFO     | logo-light.png importe mais jamais utilise        | Nettoyer  |
| P14 | INFO     | assets/hero.png, react.svg, vite.svg inutiles     | Nettoyer  |

---

## CONTACTS / DONNEES EN DUR

- Email:    contact@optivoxgroup.com
- Tel:      +1 (234) 567-890  (FACTICE)
- Adresse:  "Global Operations" (vague)
- Slogan:   "Connecting Talent. Powering Future."
- Fond:     2019 | 500+ agents | 30+ pays | 98% satisfaction

---
