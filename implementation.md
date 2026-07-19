# OPTIVOX GROUP — Journal d'Implementation
# Mettre a jour ce fichier apres chaque tache completee.
# Format: [DATE] [STATUT] Description + fichiers touches

---

## ETAT GLOBAL DU PROJET

```
Phase 1 (Corrections urgentes)    [x] 9/9 taches  (scaffolding pret pour les 3 restant bloquees client)
Phase 2 (UI/UX)                   [x] 6/8 taches  (2 en attente d'assets client)
Phase 3 (Fonctionnalites)         [x] 4/6 taches  (Analytics, sitemap/robots, CSP, Live Chat faits ; i18n et migration TS explicitement hors scope)
```

## ACTUELLEMENT EN COURS
Tache: Backlog code termine (session 2026-07-19). Reste uniquement le remplissage de valeurs reelles par le client.
Derniere session: 2026-07-19
Bloque par: assets/valeurs client — voir "BLOQUE CLIENT — ETAT ACTUEL" en bas de fichier

---

## PHASE 1 — CORRECTIONS URGENTES

### P1-01 — Importer Google Fonts
- **Statut** : DEJA FAIT (presente dans index.html)
- **Fichiers** : `index.html`
- **Action** : Ajouter `<link>` Google Fonts pour Playfair Display (400,700) + Inter (400,500,600)
- **Fait le** : —

### P1-02 — Connecter formulaire Contact a un service email
- **Statut** : DONE — EmailJS (dynamic import), loading state, form-error. Remplir .env.local avec les cles EmailJS.
- **Fichiers** : `src/pages/Contact.jsx`
- **Action** : Integrer EmailJS ou Resend. Remplacer handleSubmit simule.
- **Variables d'env a creer** : VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY
- **Fait le** : —

### P1-03 — Connecter formulaire Careers a un service email
- **Statut** : DONE — meme pattern que P1-02. Template distinct VITE_EMAILJS_CAREERS_TEMPLATE_ID.
- **Fichiers** : `src/pages/Careers.jsx`
- **Action** : Meme service qu'en P1-02. Template different pour les candidatures.
- **Fait le** : —

### P1-04 — Creer page 404
- **Statut** : DONE — NotFound.jsx + NotFound.css + route `path="*"` dans App.jsx
- **Fichiers** : `src/pages/NotFound.jsx`, `src/pages/NotFound.css`, `src/App.jsx`
- **Action** : Creer composant 404 + ajouter `<Route path="*" element={<NotFound />} />` dans App.jsx
- **Fait le** : —

### P1-05 — Corriger favicon
- **Statut** : DONE — favicon deja base sur logo-dark.png depuis une session precedente ; ajout de `apple-touch-icon` + suppression de `public/favicon.svg` (mort)
- **Fichiers** : `index.html`, `public/favicon.svg` (supprime)
- **Fait le** : 2026-07-19

### P1-06 — Corriger IntroLoader (sessionStorage)
- **Statut** : DONE — checker sessionStorage au montage, setItem apres onComplete
- **Fichiers** : `src/components/IntroLoader.jsx`, `src/pages/Home.jsx`, `src/pages/About.jsx`, `src/pages/Contact.jsx`
- **Action** :
  1. Dans IntroLoader: checker `sessionStorage.getItem('intro_played')` -> si true, passer directement a 'done'
  2. Au onComplete: `sessionStorage.setItem('intro_played', 'true')`
  3. Retirer la gestion `showIntro` locale de chaque page et centraliser
- **Fait le** : —

### P1-07 — Corriger liens sociaux
- **Statut** : SCAFFOLD PRET (attente URLs reelles du client) — config centralisee dans `src/config/site.js` (`SOCIAL_LINKS`), Footer/Contact ne rendent plus le lien tant que la valeur est vide (plus de `href="#"` visible en prod)
- **Fichiers** : `src/config/site.js` (nouveau), `src/components/Footer.jsx`, `src/pages/Contact.jsx`
- **Action restante** : remplir les 4 URLs dans `src/config/site.js`
- **Fait le** : 2026-07-19 (scaffold)

### P1-08 — Ajouter balises SEO meta
- **Statut** : DONE — og:*, twitter:card, robots dans index.html
- **Fichiers** : `index.html` (meta globaux), `src/App.jsx` ou pages (meta par page)
- **Action** :
  1. Ajouter dans index.html: meta description, og:title, og:description, og:image, twitter:card
  2. Optionnel: react-helmet-async pour meta dynamiques par page
- **Fait le** : —

### P1-09 — Creer pages Privacy Policy, Terms of Service et Cookie Policy
- **Statut** : SCAFFOLD PRET (attente contenu juridique du client) — 3 pages placeholder creees avec routes actives et liens Footer corriges (plus de `href="#"`)
- **Fichiers** : `src/pages/Privacy.jsx`, `src/pages/Terms.jsx`, `src/pages/CookiePolicy.jsx`, `src/pages/Legal.css` (nouveaux), `src/App.jsx`, `src/components/Footer.jsx`
- **Action restante** : remplacer le texte placeholder par le contenu juridique reel (`/privacy`, `/terms`, `/cookie-policy`)
- **Fait le** : 2026-07-19 (scaffold)

---

## PHASE 2 — AMELIORATIONS UI/UX

### P2-01 — Extraire useInView en hook partage
- **Statut** : DONE — src/hooks/useInView.js cree. Importe dans Home, About, Services, Industries.
- **Fichiers** : `src/hooks/useInView.js` (a creer), puis supprimer la fonction dupliquee dans Home.jsx, About.jsx, Services.jsx, Industries.jsx
- **Fait le** : —

### P2-02 — Fixer Math.random() dans Hero particles
- **Statut** : DONE — const PARTICLES precalcule hors composant dans Home.jsx
- **Fichiers** : `src/pages/Home.jsx`
- **Action** : Remplacer Math.random() par des valeurs precalculees en dehors du composant (const PARTICLES = [...])
- **Fait le** : —

### P2-03 — Ajouter loading state sur boutons submit
- **Statut** : DONE — isLoading state + disabled + texte dynamique sur Contact et Careers
- **Fichiers** : `src/pages/Contact.jsx`, `src/pages/Careers.jsx`
- **Action** : Ajouter `isLoading` state, desactiver bouton et afficher spinner pendant la soumission
- **Fait le** : —

### P2-04 — Ajouter photos/avatars equipe et temoignages
- **Statut** : SCAFFOLD PRET (assets client) — champ `photo` ajoute a `team[]` (About.jsx) et `testimonials[]` (Home.jsx) ; fallback automatique sur l'initiale si vide ; CSS des avatars pret a recevoir une image (`overflow:hidden` + `object-fit:cover`)
- **Fichiers** : `src/pages/About.jsx`, `src/pages/About.css`, `src/pages/Home.jsx`, `src/pages/Home.css`
- **Action restante** : renseigner `photo: '/images/...'` par membre/temoignage une fois les fichiers fournis
- **Fait le** : 2026-07-19 (scaffold)

### P2-05 — Remplacer "Trusted By" texte par logos reels
- **Statut** : SCAFFOLD PRET (assets client) — `trustedLogos[]` accepte desormais `{ name, logo }`, fallback sur le nom texte si `logo` vide
- **Fichiers** : `src/pages/Home.jsx`, `src/pages/Home.css`
- **Action restante** : renseigner `logo: '/images/...'` par partenaire une fois les fichiers fournis
- **Fait le** : 2026-07-19 (scaffold)

### P2-06 — Ajouter animation scroll-reveal sur Process Steps
- **Statut** : DONE — processRef + processInView + CSS cascade avec transition-delay
- **Fichiers** : `src/pages/Home.jsx`
- **Action** : Ajouter ref + useInView sur la section process-steps
- **Fait le** : —

### P2-07 — Pre-remplissage formulaire Careers depuis offre d'emploi
- **Statut** : DONE — le bouton "Apply Now" de chaque offre met a jour `formData.role` (state local) avant le scroll vers `#apply-form`, pas besoin de React Router state (form + liste sur la meme page)
- **Fichiers** : `src/pages/Careers.jsx`
- **Fait le** : 2026-07-19

### P2-08 — Ajouter upload fichier CV (remplacement URL)
- **Statut** : DONE — `input[type=file] accept=".pdf,.doc,.docx"`, validation 5MB cote client (`MAX_RESUME_SIZE`), envoi via `emailjs.sendForm` (pas `emailjs.send`) pour transmettre la piece jointe
- **Fichiers** : `src/pages/Careers.jsx`, `src/index.css` (`.form-file-name`)
- **Note** : la limite reelle d'attachement depend du plan EmailJS utilise, voir `errors.md` ERR-009
- **Fait le** : 2026-07-19

---

## PHASE 3 — FONCTIONNALITES AVANCEES

### P3-01 — Analytics (Plausible)
- **Statut** : DONE — script Plausible ajoute dans `index.html` (`data-domain="optivoxgroup.com"`)
- **Fichiers** : `index.html`
- **Action restante** : confirmer le domaine final de production avec le client avant deploiement
- **Fait le** : 2026-07-19

### P3-02 — Sitemap.xml + robots.txt
- **Statut** : DONE — 6 routes publiques listees, domaine `optivoxgroup.com` a confirmer
- **Fichiers** : `public/sitemap.xml`, `public/robots.txt`
- **Fait le** : 2026-07-19

### P3-03 — Multilingue (react-i18next)
- **Statut** : HORS SCOPE (decision explicite : chantier separe, pas une finition — structure de traduction + RTL arabe = projet dedie)
- **Langues cibles** : FR, ES, AR
- **Fait le** : —

### P3-04 — CSP Header
- **Statut** : DONE (config prete pour Vercel et Netlify, hosting cible non fixe) — `vercel.json` + `public/_headers`, policy couvrant self + Google Fonts + Plausible + Crisp + EmailJS
- **Fichiers** : `vercel.json`, `public/_headers`
- **Action restante** : affiner la policy une fois le domaine et l'hebergeur final connus
- **Fait le** : 2026-07-19

### P3-05 — Live Chat (Crisp)
- **Statut** : SCAFFOLD PRET — composant `CrispChat.jsx` monte dans `App.jsx`, ne charge le script que si `VITE_CRISP_WEBSITE_ID` est defini
- **Fichiers** : `src/components/CrispChat.jsx` (nouveau), `src/App.jsx`, `.env.example`
- **Action restante** : creer le compte Crisp, renseigner `VITE_CRISP_WEBSITE_ID` dans `.env.local`
- **Fait le** : 2026-07-19 (scaffold)

### P3-06 — Migration TypeScript
- **Statut** : HORS SCOPE (decision explicite : decision d'architecture, pas une finition)
- **Fait le** : —

### P11 — Couleurs hardcodees dans Services.jsx
- **Statut** : DONE — `--color-it/-csr/-interp/-ai` ajoutees dans `src/index.css`, `services[].color` reference les variables
- **Fichiers** : `src/index.css`, `src/pages/Services.jsx`
- **Fait le** : 2026-07-19

### P13/P14 — Assets morts
- **Statut** : DONE — `public/favicon.svg`, `src/assets/hero.png`, `react.svg`, `vite.svg` supprimes (confirmes non references)
- **Fait le** : 2026-07-19

### ERR-2026-06-14-03 — Nettoyage lint (12 erreurs)
- **Statut** : DONE — 0 erreur ESLint. Imports inutilises retires (About/Careers/Contact/Industries/SocialIcons), `setState` deplace hors de l'effet dans Navbar.jsx (pattern render-time state adjustment), `centerFill`/`holeFill` mort retire d'OptivoxLogo.jsx, `ThemeContext` scinde en `theme-context.js` (objet Context) + `useTheme.js` (hook) pour respecter `react-refresh/only-export-components`
- **Fichiers** : voir detail dans `errors.md`
- **Fait le** : 2026-07-19

---

## JOURNAL DES MODIFICATIONS

```
[2026-06-14] FIX     Architecture logo corrigee apres revue visuelle: suppression des PNG complets superposes, des masks et de mix-blend-mode; creation de 8 assets transparents non chevauchants depuis les pixels originaux; un seul O helicoidal anime; validation dark/light | InteractiveLogoAperture.jsx/.css, IntroLoader.css, Home.css, public/images/logo-parts/*
[2026-06-14] DONE    Animation premium du logo: O helicoidal extrait du PNG original et rotation sans deformation; OPTIV/X glissent derriere le O; statistiques revelees; loader synchronise | InteractiveLogoAperture.jsx/.css, IntroLoader.jsx
[2026-06-13] INIT    Audit initial complet. Rapport genere. Fichiers claude.md, implementation.md, errors.md crees.
[2026-06-13] DONE    P2-01 Hook useInView extrait -> src/hooks/useInView.js | Home.jsx, About.jsx, Services.jsx, Industries.jsx
[2026-06-13] DONE    P2-02 Math.random() remplace par PARTICLES[] precalcule | Home.jsx
[2026-06-13] DONE    P2-06 Scroll-reveal ajoute sur Process Steps | Home.jsx, Home.css
[2026-06-13] DONE    P1-04 Page 404 creee + route catch-all | NotFound.jsx, NotFound.css, App.jsx
[2026-06-13] DONE    P1-05 IntroLoader joue 1 seule fois (sessionStorage) | IntroLoader.jsx
[2026-06-13] DONE    P1-08 OG/Twitter meta tags + robots | index.html
[2026-06-13] DONE    P1-02/P1-03 EmailJS setup (dynamic import) + loading state + form-error | Contact.jsx, Careers.jsx, index.css, .env.example
[2026-06-13] INFO    P01 (Fonts) et P07 (Favicon) etaient deja resolus dans index.html
[2026-06-13] BLOQUE  P04 Privacy/ToS, P06 Liens sociaux — attente URLs/contenu client
[2026-07-19] INIT    Initialisation git (aucun VCS avant cette session) — commit baseline
[2026-07-19] DONE    Lot 1 (dette technique) : 12 erreurs ESLint corrigees, assets morts supprimes, apple-touch-icon ajoute, couleurs Services.jsx en variables CSS, pre-remplissage + upload CV sur Careers | voir P11-P14, ERR-2026-06-14-03, P2-07, P2-08
[2026-07-19] DONE    Lot 2 (scaffold bloque-client) : SOCIAL_LINKS centralise, pages Privacy/Terms/CookiePolicy, doc EmailJS + garde-fou si .env manquant, support photo dans About/Home | voir P1-07, P1-09, P2-04, P2-05
[2026-07-19] DONE    Lot 3 (Phase 3) : Plausible, sitemap.xml/robots.txt, CSP (vercel.json + _headers), Crisp Live Chat | voir P3-01, P3-02, P3-04, P3-05
[2026-07-19] DECISION i18n (P3-03) et migration TypeScript (P3-06) exclues du perimetre — chantiers separes, pas des finitions
```

---

## BLOQUE CLIENT — ETAT ACTUEL (2026-07-19)

Le code est pret partout ; seules des valeurs reelles manquent :

| Quoi | Ou remplir | Fichier |
|---|---|---|
| URLs LinkedIn/Twitter/Facebook/Instagram | `SOCIAL_LINKS` | `src/config/site.js` |
| Texte juridique Privacy/Terms/Cookie Policy | contenu de la page | `src/pages/Privacy.jsx`, `Terms.jsx`, `CookiePolicy.jsx` |
| Cles EmailJS (service, templates, public key) | variables d'env | `.env.local` (voir `README.md`) |
| `VITE_CRISP_WEBSITE_ID` | variable d'env | `.env.local` |
| Photos equipe / temoignages | champ `photo` | `src/pages/About.jsx` (`team[]`), `src/pages/Home.jsx` (`testimonials[]`) |
| Logos partenaires | champ `logo` | `src/pages/Home.jsx` (`trustedLogos[]`) |
| Domaine final de production | `data-domain` Plausible, sitemap, robots.txt, CSP | `index.html`, `public/sitemap.xml`, `public/robots.txt`, `vercel.json`, `public/_headers` |

---

## COMMANDES UTILES

```bash
npm run dev        # Lancer le serveur de dev (port 5173 par defaut)
npm run build      # Build de production -> ./dist
npm run preview    # Previsualiser le build
npm run lint       # ESLint sur tout le projet
# Windows : si npm run echoue (policy PowerShell), utiliser npm.cmd run <script>
```
