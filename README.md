# Optivox Group — Site vitrine

React 19 (JSX) + Vite + React Router. Voir `implementation.md` pour l'etat du backlog et `errors.md` pour les erreurs deja rencontrees.

## Demarrage

```bash
npm install
npm run dev        # http://localhost:5173
npm run build       # -> ./dist
npm run lint
```

> Sur Windows, si `npm run` echoue avec une erreur de policy PowerShell, utiliser `npm.cmd run <script>`.

## Configurer les formulaires (EmailJS)

Les formulaires Contact et Careers utilisent [EmailJS](https://www.emailjs.com/) (aucun backend requis). Sans configuration, ils affichent un message clair invitant a contacter `contact@optivoxgroup.com` directement — ils n'echouent pas silencieusement.

Pour les activer :

1. Creer un compte sur [dashboard.emailjs.com](https://dashboard.emailjs.com/admin)
2. Connecter un service email (Gmail, Outlook, etc.) -> noter le **Service ID**
3. Creer **2 templates** : un pour Contact, un pour Careers (candidatures) -> noter les **Template ID**
   - Le template Careers doit accepter une piece jointe (`resume_attachment`, envoyee via `emailjs.sendForm`) — verifier la limite de taille du plan EmailJS utilise (voir `errors.md`, la limite cote client est fixee a 5MB)
4. Recuperer la **Public Key** dans Account > API Keys
5. Copier `.env.example` vers `.env.local` et remplir les 4 valeurs
6. Redemarrer `npm run dev` (les variables `VITE_*` ne sont lues qu'au demarrage)

## Contenu en attente du client

Voir `implementation.md` (section "bloque client") pour la liste a jour : URLs reseaux sociaux (`src/config/site.js`), textes juridiques (`src/pages/Privacy.jsx`, `Terms.jsx`, `CookiePolicy.jsx`), photos equipe et logos partenaires.
