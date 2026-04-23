# 🧑‍💻 Portfólio — João Pedro Brites

Página pessoal desenvolvida com **Svelte + Tailwind CSS** para a disciplina GAC116 — Programação Web (2026/1).

## ✨ Versões

| Versão | Framework CSS | Branch/Pasta |
|--------|--------------|-------------|
| **v1** | Bootstrap 5 | `bootstrap/` |
| **v2** | **Tailwind CSS + Svelte** | `svelte-tailwind/` (este) |

## 🚀 Funcionalidades

- ✅ Layout totalmente responsivo (mobile-first)
- ✅ Tema claro / escuro com toggle (armazenado em `localStorage`)
- ✅ Animação de typewriter na headline
- ✅ Scroll reveal (Intersection Observer)
- ✅ Barras de progresso animadas
- ✅ Timeline de experiência profissional
- ✅ Navegação com menu colapsável em mobile

## 🛠️ Como rodar localmente

```bash
npm install
npm run dev
```

Acesse: http://localhost:5173

## 📦 Build para produção (GitHub Pages)

```bash
npm run build
```

Os arquivos finais ficam em `dist/`.

### Deploy no GitHub Pages

1. Faça o push do repositório no GitHub
2. Vá em **Settings → Pages**
3. Escolha a branch `gh-pages` ou configure uma GitHub Action

**Exemplo de GitHub Action** (`.github/workflows/deploy.yml`):

```yaml
name: Deploy to GitHub Pages
on:
  push:
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
