# OPTIVOX GROUP — Base de Connaissances Erreurs & Solutions
# Ajouter toute erreur rencontree ICI avec sa solution.
# Format: ## [ERR-XXX] Titre | Symptome | Cause | Solution | Fichiers

---

## ERREURS CONNUES DU PROJET (pre-remplies depuis l'audit initial)

---

### ERR-001 — Polices non affichees (fallback Georgia/system)
- **Symptome** : Playfair Display et Inter ne se chargent pas. Le site affiche en Georgia.
- **Cause** : `--font-heading: 'Playfair Display'` declare dans index.css mais aucun `@import` ni `<link>` dans index.html.
- **Solution** :
  Ajouter dans `index.html` dans `<head>` :
  ```html
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet">
  ```
- **Fichiers** : `index.html`
- **Resolu le** : —

---

### ERR-002 — IntroLoader rejoue a chaque navigation de page
- **Symptome** : L'animation d'intro se rejoue en allant sur About et Contact.
- **Cause** : Chaque page (Home, About, Contact) a son propre `const [showIntro, setShowIntro] = useState(true)`. A chaque montage du composant, `showIntro` repart a `true`.
- **Solution** :
  Dans `IntroLoader.jsx`, ajouter au debut du useEffect :
  ```js
  if (sessionStorage.getItem('intro_played')) {
    setStage('done')
    if (onComplete) onComplete()
    return
  }
  // A la fin (onComplete):
  sessionStorage.setItem('intro_played', 'true')
  ```
- **Fichiers** : `src/components/IntroLoader.jsx`
- **Resolu le** : —

---

### ERR-003 — Math.random() dans Hero provoque un re-render aleatoire
- **Symptome** : Les particules changent de position a chaque re-render du composant Home.
- **Cause** : Les `Math.random()` dans le JSX de la section `.hero__particles` sont evalues a chaque render.
- **Solution** :
  Extraire les positions en dehors du composant :
  ```js
  const PARTICLES = Array.from({ length: 20 }, () => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: `${Math.random() * 5}s`,
    duration: `${3 + Math.random() * 4}s`,
  }))
  ```
  Puis dans le JSX : `PARTICLES.map((p, i) => <div key={i} style={{ left: p.left, ... }} />)`
- **Fichiers** : `src/pages/Home.jsx` (lignes 175-185)
- **Resolu le** : —

---

### ERR-004 — useInView duplique dans 4 fichiers, risque de desync
- **Symptome** : Modification du hook necessite 4 edits. Risque d'inconsistance.
- **Cause** : La fonction `useInView` est copiee-collee dans Home.jsx, About.jsx, Services.jsx, Industries.jsx.
- **Solution** :
  1. Creer `src/hooks/useInView.js` :
  ```js
  import { useRef, useState, useEffect } from 'react'
  export function useInView(options = {}) {
    const ref = useRef(null)
    const [inView, setInView] = useState(false)
    useEffect(() => {
      const el = ref.current
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setInView(true) },
        { threshold: 0.15, ...options }
      )
      obs.observe(el)
      return () => obs.disconnect()
    }, [])
    return [ref, inView]
  }
  ```
  2. Dans chaque page: remplacer la fonction locale par `import { useInView } from '../hooks/useInView'`
- **Fichiers** : `src/hooks/useInView.js` (nouveau), Home.jsx, About.jsx, Services.jsx, Industries.jsx
- **Resolu le** : —

---

### ERR-008 — @emailjs/browser non installe — erreur Vite import-analysis
- **Symptome** : `Failed to resolve import "@emailjs/browser"` au demarrage Vite
- **Cause** : Package utilise dans Contact.jsx/Careers.jsx mais absent de node_modules
- **Solution** : `npm install @emailjs/browser`
- **Resolu le** : 2026-06-13

---

### ERR-005 — Formulaire soumis mais aucune donnee n'est envoyee
- **Symptome** : L'utilisateur voit "Message Dispatched!" mais aucun email n'arrive.
- **Cause** : `handleSubmit` dans Contact.jsx et Careers.jsx fait uniquement `setSubmitted(true)`. Pas de fetch/axios/emailjs.
- **Solution** :
  Utiliser EmailJS (solution zero-backend) :
  ```bash
  npm install @emailjs/browser
  ```
  ```js
  import emailjs from '@emailjs/browser'
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setSubmitted(true)
    } catch (err) {
      setError('Erreur lors de l\'envoi. Reessayez.')
    } finally {
      setIsLoading(false)
    }
  }
  ```
  Creer `.env.local` :
  ```
  VITE_EMAILJS_SERVICE_ID=service_xxxxx
  VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
  VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxx
  ```
  IMPORTANT: Ne jamais committer `.env.local`. Verifier que `.gitignore` l'exclut bien.
- **Fichiers** : `src/pages/Contact.jsx`, `src/pages/Careers.jsx`, `.env.local` (nouveau)
- **Resolu le** : —

---

### ERR-006 — Page blanche sur URL inconnue (pas de 404)
- **Symptome** : Une URL comme `/xyz` affiche une page completement vide (main vide).
- **Cause** : Aucune route catch-all dans App.jsx.
- **Solution** :
  Dans `src/App.jsx`, ajouter comme derniere route :
  ```jsx
  import NotFound from './pages/NotFound'
  // ...
  <Route path="*" element={<NotFound />} />
  ```
  Creer `src/pages/NotFound.jsx` avec lien de retour vers /
- **Fichiers** : `src/App.jsx`, `src/pages/NotFound.jsx` (nouveau)
- **Resolu le** : —

---

### ERR-007 — Couleurs de service hardcodees cassent le design system
- **Symptome** : Si on change la palette dans index.css, les couleurs de Services.jsx ne changent pas.
- **Cause** : Dans Services.jsx, chaque service a `color: '#4ade80'` etc. defini directement en JS.
- **Solution** :
  Ajouter des variables CSS dans index.css :
  ```css
  --color-it: #4ade80;
  --color-csr: #60a5fa;
  --color-interp: #f59e0b;
  --color-ai: #a78bfa;
  ```
  Dans Services.jsx, remplacer les valeurs hardcodees par les noms de variables.
  Ou passer via CSS custom property sur l'element : `style={{ '--accent-color': service.color }}`
  (Note: la 2e approche est deja partiellement en place avec `--accent-color`)
- **Fichiers** : `src/pages/Services.jsx`, `src/index.css`
- **Resolu le** : —

---

## ERREURS GENERIQUES REACT/VITE (references)

---

### ERR-G01 — Variables d'environnement Vite non accessibles
- **Symptome** : `import.meta.env.VITE_XXX` retourne `undefined`
- **Causes possibles** :
  1. Variable nommee sans prefixe `VITE_` (seules les vars VITE_ sont exposees au client)
  2. Fichier `.env.local` cree APRES le demarrage du serveur dev -> redemarrer `npm run dev`
  3. Faute de frappe dans le nom de la variable
- **Solution** : Toujours prefixer par `VITE_`, redemarrer le serveur apres creation du .env

---

### ERR-G02 — React Router: page ne scroll pas en haut a la navigation
- **Symptome** : Naviguer vers une nouvelle page laisse le scroll a sa position precedente.
- **Cause** : React Router ne gere pas le scroll automatiquement.
- **Solution** : `ScrollToTop` est deja implemente dans App.jsx (lignes 13-19). Ne pas le supprimer.

---

### ERR-G03 — Vite build echoue sur import d'image
- **Symptome** : `Error: Cannot find module './assets/hero.png'`
- **Cause** : Chemin relatif incorrect ou fichier manquant dans src/assets/
- **Solution** : Verifier le chemin. Pour les images dans /public, utiliser `/images/logo.png` (chemin absolu depuis public).

---

### ERR-G04 — Hydration mismatch avec Math.random() ou Date
- **Symptome** : Warning console "Text content did not match"
- **Cause** : Valeurs non-deterministes evaluees differemment serveur/client
- **Solution** : Calculer ces valeurs EN DEHORS des composants ou dans useEffect

---

### ERR-G05 — useEffect dependency array warning ESLint
- **Symptome** : "React Hook useEffect has missing dependency: 'options'"
- **Cause** : Dans useInView, `options` est dans le corps mais pas dans le dep array
- **Note** : Intentionnel pour cet usage. Ignorer ou ajouter `// eslint-disable-next-line` avec commentaire explicatif.

---

## MODELE D'ENTREE (copier pour chaque nouvelle erreur)

### ERR-2026-06-14-01 - Patch bloque par des commentaires mal encodes
- **Symptome** : Le patch initial ne retrouvait pas les lignes JSX/CSS contenant des caracteres de separation corrompus.
- **Cause** : Les commentaires existants contenaient des sequences UTF-8 affichees avec le mauvais encodage.
- **Solution** : Remplacer les deux petits composants concernes avec des commentaires ASCII, puis appliquer les autres changements par contexte stable.
- **Fichiers** : `src/components/InteractiveLogoAperture.jsx`, `src/components/InteractiveLogoAperture.css`
- **Resolu le** : 2026-06-14

### ERR-2026-06-14-02 - npm.ps1 bloque par PowerShell
- **Symptome** : `npm run build` et `npm run lint` echouent avant execution avec `PSSecurityException`.
- **Cause** : La politique PowerShell locale interdit l'execution du wrapper `npm.ps1`.
- **Solution** : Utiliser `npm.cmd run build`, `npm.cmd run lint` et `npm.cmd run dev`.
- **Fichiers** : Aucun fichier applicatif.
- **Resolu le** : 2026-06-14

### ERR-2026-06-14-03 - Lint global bloque par dette existante
- **Symptome** : `npm.cmd run lint` signale 12 erreurs hors des fichiers de l'animation.
- **Cause** : Imports inutilises, export de contexte et setState dans un effet deja presents dans Navbar, OptivoxLogo, SocialIcons, ThemeContext et plusieurs pages.
- **Solution** : L'animation ne cree aucune nouvelle erreur; traiter ces 12 erreurs dans une tache de nettoyage ESLint separee pour ne pas elargir cette modification.
- **Fichiers** : `Navbar.jsx`, `OptivoxLogo.jsx`, `SocialIcons.jsx`, `ThemeContext.jsx`, `About.jsx`, `Careers.jsx`, `Contact.jsx`, `Industries.jsx`
- **Resolu le** : En attente d'une tache de nettoyage dediee.

### ERR-2026-06-14-04 - Creation des assets refusee dans le sandbox
- **Symptome** : La creation de `public/images/logo-parts` echoue avec `UnauthorizedAccessException`.
- **Cause** : Le processus GDI+ lance dans le shell sandboxe ne pouvait pas creer le nouveau dossier binaire.
- **Solution** : Relancer uniquement la generation deterministe des PNG avec l'autorisation d'ecriture requise.
- **Fichiers** : `public/images/logo-parts/*`
- **Resolu le** : 2026-06-14

### ERR-2026-06-14-05 - Halo blanc dans les assets du theme clair
- **Symptome** : La premiere extraction claire conservait un rectangle blanc legerement transparent.
- **Cause** : Le fond source est `rgb(254,254,254)`, pas `rgb(255,255,255)`.
- **Solution** : Echantillonner la couleur du pixel de fond du PNG et calculer l'alpha par distance a cette couleur exacte.
- **Fichiers** : `public/images/logo-parts/*-light.png`
- **Resolu le** : 2026-06-14

---

### ERR-009 — Limite de taille des pieces jointes EmailJS (upload CV)
- **Symptome** : Le CV ne part pas / l'email arrive tronque quand le fichier est trop volumineux.
- **Cause** : EmailJS transmet les pieces jointes en base64 dans le corps de la requete ; le plan gratuit limite la taille totale de la requete (verifier la limite exacte du plan utilise sur dashboard.emailjs.com, generalement de l'ordre de quelques Mo). Une validation cote client a 5MB (`MAX_RESUME_SIZE` dans `Careers.jsx`) evite les echecs silencieux mais ne garantit pas que 5MB passe sur tous les plans.
- **Solution** :
  1. `emailjs.sendForm()` (pas `emailjs.send()`) est requis pour transmettre un `<input type="file">` — verifier que le template EmailJS cible a bien un champ piece-jointe configure pour `resume_attachment`.
  2. Si le plan EmailJS actuel refuse au-dela d'une certaine taille, abaisser `MAX_RESUME_SIZE` en consequence dans `Careers.jsx`.
- **Fichiers** : `src/pages/Careers.jsx`
- **Resolu le** : 2026-07-19 (scaffold — a valider avec un vrai compte EmailJS + template)

---

### ERR-010 — react-refresh/only-export-components sur ThemeContext.jsx
- **Symptome** : `Fast refresh only works when a file only exports components` sur le fichier exportant a la fois le composant `ThemeProvider` et le hook `useTheme`.
- **Cause** : Le plugin `eslint-plugin-react-refresh` (config `reactRefresh.configs.vite`) interdit qu'un fichier de composant exporte autre chose qu'un composant — y compris un hook ou l'objet `Context` lui-meme (deplacer seulement le hook ne suffit pas si le fichier du Provider exporte encore l'objet `createContext(...)`).
- **Solution** : Isoler l'objet Context dans son propre fichier non-JSX :
  1. `src/context/theme-context.js` -> `export const ThemeContext = createContext(null)`
  2. `src/context/ThemeContext.jsx` -> importe `ThemeContext` depuis ce fichier, n'exporte plus que `ThemeProvider`
  3. `src/context/useTheme.js` -> `export function useTheme() { return useContext(ThemeContext) }`, importe depuis `theme-context.js`
  4. Mettre a jour tous les `import { useTheme } from '../context/ThemeContext'` vers `'../context/useTheme'`
- **Fichiers** : `src/context/theme-context.js` (nouveau), `src/context/useTheme.js` (nouveau), `src/context/ThemeContext.jsx`, + 5 consommateurs (`About.jsx`, `Footer.jsx`, `InteractiveLogoAperture.jsx`, `Navbar.jsx`, `ThemeTransition.jsx`)
- **Resolu le** : 2026-07-19

---

### ERR-011 — react-hooks/set-state-in-effect dans Navbar.jsx
- **Symptome** : `Avoid calling setState() directly within an effect` sur `setMobileOpen(false)` dans un `useEffect([location])` destine a fermer le menu mobile a chaque changement de route.
- **Cause** : Appeler `setState` sans condition dans un effet declenche un render supplementaire evitable ; React recommande d'ajuster le state pendant le render plutot que dans un effet quand c'est un changement derive d'une prop/valeur externe (ici `location`).
- **Solution** : Remplacer l'effet par un ajustement pendant le render (pattern officiel React "Adjusting state when a prop changes") :
  ```js
  const [lastPathname, setLastPathname] = useState(null)
  if (location.pathname !== lastPathname) {
    setLastPathname(location.pathname)
    setMobileOpen(false)
  }
  ```
- **Fichiers** : `src/components/Navbar.jsx`
- **Resolu le** : 2026-07-19

```
### ERR-XXX — Titre court
- **Symptome** : Ce que l'on observe
- **Cause** : Pourquoi ca arrive
- **Solution** : Code ou etapes pour resoudre
- **Fichiers** : Fichiers concernes
- **Resolu le** : [DATE]
```
