# 🚀 Portfolio — Data Engineer & IA

Portfolio personnel construit avec **React + TailwindCSS**, déployé sur **Vercel**.

## Stack technique

- **React 18** + **Vite** (bundler rapide)
- **TailwindCSS** (styling utilitaire)
- **Framer Motion** (animations)
- **EmailJS** (formulaire de contact sans backend)
- **React Icons** (icônes)

## Lancer en local

```bash
# 1. Cloner le repo
git clone https://github.com/tonpseudo/portfolio.git
cd portfolio

# 2. Installer les dépendances
npm install

# 3. Lancer en développement
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## Personnalisation

Tout le contenu est centralisé dans **`src/data.js`** :
- Nom, titre, localisation, email
- Liens GitHub et LinkedIn
- Compétences avec niveaux
- Projets (titre, description, tags, liens)
- Parcours / expériences

## Déploiement Vercel

```bash
# Build de production
npm run build

# Ou déployer directement via Vercel CLI
npm install -g vercel
vercel --prod
```

## Configuration EmailJS

1. Créer un compte sur [emailjs.com](https://emailjs.com) (gratuit)
2. Créer un service email et un template
3. Remplacer les clés dans `src/components/Contact.jsx`

## Structure du projet

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── data.js          ← Tout le contenu ici
├── App.jsx
├── main.jsx
└── index.css
public/
├── cv.pdf           ← Ton CV
└── photo.jpg        ← Ta photo
```
