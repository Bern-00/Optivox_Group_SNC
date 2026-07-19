# OPTIVOX GROUP — Journal d'Implementation
# Mettre a jour ce fichier apres chaque tache completee.
# Format: [DATE] [STATUT] Description + fichiers touches

---

## ETAT GLOBAL DU PROJET

```
Phase 1 (Corrections urgentes)    [x] 6/9 taches  (3 bloquees client)
Phase 2 (UI/UX)                   [x] 3/8 taches
Phase 3 (Fonctionnalites)         [ ] 0/6 taches
```

## ACTUELLEMENT EN COURS
Tache: Phase 2 suite — photos equipe, logos partenaires
Derniere session: 2026-06-13
Bloque par: assets client (photos, logos, URLs sociales, contenu legal)

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
- **Statut** : A FAIRE
- **Fichiers** : `public/favicon.svg`, `index.html`
- **Action** : Remplacer favicon.svg par le logo Optivox. Ajouter meta apple-touch-icon.
- **Fait le** : —

### P1-06 — Corriger IntroLoader (sessionStorage)
- **Statut** : DONE — checker sessionStorage au montage, setItem apres onComplete
- **Fichiers** : `src/components/IntroLoader.jsx`, `src/pages/Home.jsx`, `src/pages/About.jsx`, `src/pages/Contact.jsx`
- **Action** :
  1. Dans IntroLoader: checker `sessionStorage.getItem('intro_played')` -> si true, passer directement a 'done'
  2. Au onComplete: `sessionStorage.setItem('intro_played', 'true')`
  3. Retirer la gestion `showIntro` locale de chaque page et centraliser
- **Fait le** : —

### P1-07 — Corriger liens sociaux
- **Statut** : A FAIRE (attente URLs reelles du client)
- **Fichiers** : `src/components/Footer.jsx`, `src/pages/Contact.jsx`
- **Action** : Remplacer `href="#"` par les vraies URLs LinkedIn/Twitter/Facebook/Instagram
- **Fait le** : —

### P1-08 — Ajouter balises SEO meta
- **Statut** : DONE — og:*, twitter:card, robots dans index.html
- **Fichiers** : `index.html` (meta globaux), `src/App.jsx` ou pages (meta par page)
- **Action** :
  1. Ajouter dans index.html: meta description, og:title, og:description, og:image, twitter:card
  2. Optionnel: react-helmet-async pour meta dynamiques par page
- **Fait le** : —

### P1-09 — Creer pages Privacy Policy et Terms of Service
- **Statut** : A FAIRE (attente contenu juridique du client)
- **Fichiers** : `src/pages/Privacy.jsx`, `src/pages/Terms.jsx`, `src/App.jsx`, `src/components/Footer.jsx`
- **Action** : Creer pages statiques + routes + corriger liens Footer
- **Fait le** : —

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
- **Statut** : EN ATTENTE (assets client)
- **Fichiers** : `src/pages/About.jsx`, `src/pages/Home.jsx`
- **Fait le** : —

### P2-05 — Remplacer "Trusted By" texte par logos reels
- **Statut** : EN ATTENTE (assets client)
- **Fichiers** : `src/pages/Home.jsx`
- **Fait le** : —

### P2-06 — Ajouter animation scroll-reveal sur Process Steps
- **Statut** : DONE — processRef + processInView + CSS cascade avec transition-delay
- **Fichiers** : `src/pages/Home.jsx`
- **Action** : Ajouter ref + useInView sur la section process-steps
- **Fait le** : —

### P2-07 — Pre-remplissage formulaire Careers depuis offre d'emploi
- **Statut** : A FAIRE
- **Fichiers** : `src/pages/Careers.jsx`
- **Action** : Passer la categorie du poste en param via ancre (#apply-form?role=IT) ou state React Router
- **Fait le** : —

### P2-08 — Ajouter upload fichier CV (remplacement URL)
- **Statut** : A FAIRE
- **Fichiers** : `src/pages/Careers.jsx`
- **Action** : Remplacer input[type=url] par input[type=file] accept=".pdf,.doc,.docx" max 5MB + validation taille
- **Fait le** : —

---

## PHASE 3 — FONCTIONNALITES AVANCEES

### P3-01 — Analytics (Google Analytics 4 ou Plausible)
- **Statut** : A FAIRE
- **Fichiers** : `index.html`
- **Fait le** : —

### P3-02 — Sitemap.xml + robots.txt
- **Statut** : A FAIRE
- **Fichiers** : `public/sitemap.xml`, `public/robots.txt`
- **Fait le** : —

### P3-03 — Multilingue (react-i18next)
- **Statut** : EN ATTENTE (decision client)
- **Langues cibles** : FR, ES, AR
- **Fait le** : —

### P3-04 — CSP Header
- **Statut** : A FAIRE (a configurer cote serveur / hosting)
- **Fait le** : —

### P3-05 — Live Chat
- **Statut** : EN ATTENTE (choix outil: Crisp / Intercom / Tidio)
- **Fait le** : —

### P3-06 — Migration TypeScript
- **Statut** : EN ATTENTE (decision client)
- **Fait le** : —

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
```

---

## COMMANDES UTILES

```bash
npm run dev        # Lancer le serveur de dev (port 5173 par defaut)
npm run build      # Build de production -> ./dist
npm run preview    # Previsualiser le build
npm run lint       # ESLint sur tout le projet
```
