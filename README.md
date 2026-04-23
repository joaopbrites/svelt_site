# Portfolio Pessoal - Svelte + Tailwind

Página pessoal desenvolvida com Svelte e Tailwind CSS para a disciplina de Programação Web.

## 🚀 Tecnologias

- Svelte 4
- Vite 5
- Tailwind CSS 3
- Font Awesome 6.5.0

## 📦 Instalação

```bash
npm install
```

## 🔧 Desenvolvimento

```bash
npm run dev
```

## 🏗️ Build

```bash
npm run build
```

Os arquivos estáticos serão gerados na pasta `dist/`.

## 🌐 Deploy

Esta página está publicada via GitHub Pages a partir da pasta `dist/`.

## 👤 Autor

João Pedro Brites - Sistemas de Informação - UFLA
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## 📁 Estrutura de arquivos

```
portfolio-svelte/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── src/
    ├── main.js
    ├── app.css
    └── App.svelte
```

## 📚 Disciplina

**GAC116 — Programação Web — UFLA / 2026-1**  
Atividade Prática 2 — Desenvolvimento de Página Pessoal
