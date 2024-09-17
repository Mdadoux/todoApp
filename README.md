# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Après linstallation avec vite 
````
npm run dev
````

# Process de creation du projet

### installer tailwind postcss autiprifixer
````
npm install -D tailwindcss postcss autoprefixer
````
Après cela il faut lancer la commande :
````
npx tailwindcss init -p
````
Cela genère un fichier ``postcss.config.js`` et ``tailwind.config.js``
La configuration se fait sur ce denier fichier 
