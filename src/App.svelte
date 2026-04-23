<script>
  import { onMount } from 'svelte'
  import perfil from './lib/perfil.jpg'

  let dark = false
  let menuOpen = false

  const navItems = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#habilidades', label: 'Habilidades' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#interesses', label: 'Interesses' },
    { href: '#contato', label: 'Contato' },
  ]

  const techTags = [
    { label: 'Python', color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300' },
    { label: 'Linux', color: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300' },
    { label: 'SQL', color: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300' },
    { label: 'C++', color: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300' },
    { label: 'Git / GitHub', color: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300' },
    { label: 'Docker', color: 'bg-rose-100 text-rose-800 dark:bg-rose-900/40 dark:text-rose-300' },
    { label: 'POO / SOLID', color: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300' },
    { label: 'HTML / CSS / JS', color: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-300' },
    { label: 'Bootstrap', color: 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300' },
    { label: 'Tailwind CSS', color: 'bg-sky-100 text-sky-800 dark:bg-sky-900/40 dark:text-sky-300' },
  ]

  const competencies = [
    'Organização de código e versionamento com Git/GitHub',
    'Modelagem e consultas em banco de dados relacional',
    'Lógica de programação, estruturas de dados e POO',
    'Noções de ciência de dados e estatística aplicada',
    'Colaboração em projetos acadêmicos e de extensão',
  ]

  const skills = [
    { name: 'Python', level: 65, label: 'Intermediário' },
    { name: 'SQL e Modelagem Relacional', level: 30, label: 'Em evolução' },
    { name: 'HTML / CSS / JavaScript', level: 65, label: 'Intermediário' },
    { name: 'Git / GitHub / Linux', level: 60, label: 'Intermediário' },
    { name: 'Dados e Estatística', level: 30, label: 'Em evolução' },
  ]

  const projects = [
    {
      title: 'Trabalho Engenharia de Software',
      desc: 'Projeto web acadêmico com estrutura maior de código e organização por módulos.',
      tags: ['TypeScript', 'JavaScript', 'HTML/CSS'],
      icon: 'fa-diagram-project',
      repo: 'https://github.com/joaopbrites/Trabalho-Engenharia-software',
    },
    {
      title: 'A Provação dos Padawans',
      desc: 'Jogo web desenvolvido em disciplina, com foco em lógica e experiência visual.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      icon: 'fa-gamepad',
      repo: 'https://github.com/joaopbrites/a-provacao-dos-padawans',
    },
    {
      title: 'GeoNetCast (ShowCast/TerraCast)',
      desc: 'Atuação em remodelagem e adaptação de fluxo para conversão de dados de satélite em páginas HTML para visualização rápida.',
      tags: ['Python', 'Automação', 'HTML'],
      icon: 'fa-satellite-dish',
      repo: '#contato',
      repoLabel: 'Detalhes no contato',
    },
  ]

  function toggleTheme() {
    dark = !dark
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }

  function setupReveal() {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    els.forEach((el) => io.observe(el))
  }

  onMount(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      dark = true
      document.documentElement.classList.add('dark')
    }

    setupReveal()

    setTimeout(() => {
      document.querySelectorAll('.progress-fill').forEach((el) => {
        el.style.width = el.dataset.width
      })
    }, 350)
  })
</script>

<nav class="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-border dark:bg-surface/80">
  <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
    <a href="#top" class="flex items-center gap-2 font-mono text-sm font-semibold text-gray-900 dark:text-accent">
      <span class="rounded bg-gray-900 px-1.5 py-0.5 text-xs text-white dark:bg-accent dark:text-surface">&gt;_</span>
      Meu Portfólio
    </a>

    <ul class="hidden items-center gap-6 md:flex">
      {#each navItems as item}
        <li><a href={item.href} class="nav-link">{item.label}</a></li>
      {/each}
    </ul>

    <div class="flex items-center gap-2">
      <button
        on:click={toggleTheme}
        class="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-600 transition hover:border-gray-400 dark:border-border dark:text-gray-400 dark:hover:text-accent"
        aria-label="Alternar tema"
      >
        {#if dark}
          <i class="fa-solid fa-sun text-xs"></i>
        {:else}
          <i class="fa-solid fa-moon text-xs"></i>
        {/if}
      </button>

      <button
        class="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-600 md:hidden dark:border-border dark:text-gray-400"
        on:click={() => (menuOpen = !menuOpen)}
        aria-label="Menu"
      >
        <i class="fa-solid {menuOpen ? 'fa-xmark' : 'fa-bars'} text-xs"></i>
      </button>
    </div>
  </div>

  {#if menuOpen}
    <div class="border-t border-gray-200 bg-white px-4 py-3 dark:border-border dark:bg-surface-2">
      {#each navItems as item}
        <a
          href={item.href}
          class="block py-2 font-mono text-sm text-gray-600 dark:text-gray-300"
          on:click={() => (menuOpen = false)}
        >{item.label}</a>
      {/each}
    </div>
  {/if}
</nav>

<header id="top" class="relative overflow-hidden bg-white py-20 dark:bg-surface">
  <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:40px_40px] opacity-40 dark:bg-[linear-gradient(to_right,#30363d_1px,transparent_1px),linear-gradient(to_bottom,#30363d_1px,transparent_1px)] dark:opacity-30"></div>
  <div class="pointer-events-none absolute -top-32 left-1/2 h-64 w-96 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl dark:bg-accent/10"></div>

  <div class="relative mx-auto max-w-6xl px-4">
    <div class="flex flex-col items-center gap-10 lg:flex-row lg:items-start">
      <div class="flex-shrink-0 text-center">
        <img src={perfil} alt="Foto de perfil" class="mx-auto h-36 w-36 rounded-2xl border-2 border-gray-200 object-cover shadow-lg dark:border-border lg:h-44 lg:w-44" />

        <div class="mt-3 flex flex-wrap justify-center gap-2">
          <span class="tag bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
            Sistemas de Informação
          </span>
          <span class="tag bg-gray-100 text-gray-600 dark:bg-surface-3 dark:text-gray-400">
            UFLA
          </span>
        </div>
      </div>

      <div class="text-center lg:text-left">
        <p class="mb-2 font-mono text-xs text-gray-400 dark:text-gray-500">
          <span class="text-emerald-500">➜</span>
          <span class="text-blue-500 dark:text-blue-400"> ~/portfolio</span>
          <span class="text-gray-400"> git:(main)</span>
        </p>

        <h1 class="mb-1 font-display text-4xl font-bold tracking-tight text-gray-900 dark:text-white lg:text-5xl">
          João Pedro <span class="text-emerald-600 dark:text-accent">Brites</span>
        </h1>

        <p class="mb-6 max-w-xl text-gray-600 dark:text-gray-400">
          Bacharelando em Sistemas de Informação na UFLA, com interesse em engenharia de software,
          dados e desenvolvimento web. Gosto de aprender na prática, construir projetos e evoluir
          com consistência.
        </p>

        <div class="flex flex-wrap justify-center gap-3 lg:justify-start">
          <a href="#projetos" class="btn-primary">
            <i class="fa-solid fa-diagram-project text-xs"></i>
            Ver projetos
          </a>
          <a href="#contato" class="btn-outline">
            <i class="fa-solid fa-envelope text-xs"></i>
            Contato
          </a>
          <a href="https://github.com/joaopbrites" target="_blank" rel="noreferrer" class="btn-outline">
            <i class="fa-brands fa-github text-xs"></i>
            GitHub
          </a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" class="btn-outline">
            <i class="fa-brands fa-linkedin text-xs"></i>
            LinkedIn
          </a>
        </div>

        <div class="mt-8 grid gap-4 sm:grid-cols-2">
          <div class="section-card p-4">
            <p class="mb-1 text-xs font-mono text-gray-400">curso</p>
            <p class="text-sm text-gray-700 dark:text-gray-300">Bacharelado em Sistemas de Informação - UFLA, previsão de conclusão em 2027.</p>
          </div>
          <div class="section-card p-4">
            <p class="mb-1 text-xs font-mono text-gray-400">objetivo</p>
            <p class="text-sm text-gray-700 dark:text-gray-300">Atuar com desenvolvimento de software e aprofundar atuação em engenharia e análise de dados.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</header>

<main class="bg-gray-50 pb-20 dark:bg-[#0a0e14]">
  <section id="sobre" class="py-16">
    <div class="mx-auto max-w-6xl px-4">
      <div class="reveal mb-8">
        <h2 class="font-display text-2xl font-bold text-gray-900 dark:text-white">Sobre</h2>
        <p class="text-sm text-gray-500 dark:text-gray-400">Uma breve descrição do estudante e trajetória.</p>
      </div>

      <div class="reveal grid gap-6 lg:grid-cols-2">
        <div class="section-card">
          <p class="mb-3 text-gray-700 dark:text-gray-300">
            Sou de Bom Sucesso-MG e atualmente moro entre Bom Sucesso e Lavras por causa da
            graduação. Tenho uma base boa em programação, banco de dados e resolução de problemas,
            construída em aula e em projetos práticos.
          </p>
          <p class="text-gray-600 dark:text-gray-400">
            Minha proposta com esta página é apresentar, de forma objetiva, minha trajetória,
            os projetos que desenvolvi e os temas que estou estudando no momento.
          </p>
        </div>

        <div class="section-card">
          <ul class="space-y-3">
            <li class="flex items-start gap-3">
              <i class="fa-solid fa-location-dot mt-0.5 text-emerald-500 dark:text-accent"></i>
              <div>
                <span class="text-xs font-mono text-gray-400">cidade</span>
                <p class="text-sm text-gray-800 dark:text-gray-200">Bom Sucesso - MG (disponível para Lavras)</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <i class="fa-solid fa-language mt-0.5 text-emerald-500 dark:text-accent"></i>
              <div>
                <span class="text-xs font-mono text-gray-400">idiomas</span>
                <p class="text-sm text-gray-800 dark:text-gray-200">Português (nativo), Inglês (A2)</p>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <i class="fa-solid fa-laptop-code mt-0.5 text-emerald-500 dark:text-accent"></i>
              <div>
                <span class="text-xs font-mono text-gray-400">foco atual</span>
                <p class="text-sm text-gray-800 dark:text-gray-200">Desenvolvimento de software e dados</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="habilidades" class="py-16">
    <div class="mx-auto max-w-6xl px-4">
      <div class="reveal mb-8">
        <p class="mb-1 font-mono text-xs text-emerald-600 dark:text-accent">// 02</p>
        <h2 class="font-display text-2xl font-bold text-gray-900 dark:text-white">Habilidades</h2>
        <p class="text-sm text-gray-500 dark:text-gray-400">Tecnologias e competências.</p>
      </div>

      <div class="reveal grid gap-6 lg:grid-cols-2">
        <div class="section-card">
          <h3 class="mb-4 font-mono text-sm font-semibold text-gray-500 dark:text-gray-400">$ ls ./tecnologias/</h3>
          <div class="flex flex-wrap gap-2">
            {#each techTags as t}
              <span class="tag {t.color}">{t.label}</span>
            {/each}
          </div>
          <hr class="my-4 border-gray-200 dark:border-border" />
          <h3 class="mb-3 font-mono text-sm font-semibold text-gray-500 dark:text-gray-400">$ cat competencias.txt</h3>
          <ul class="space-y-1.5 text-sm text-gray-700 dark:text-gray-300">
            {#each competencies as item}
              <li class="flex items-center gap-2"><i class="fa-solid fa-check text-emerald-500 text-xs"></i>{item}</li>
            {/each}
          </ul>
        </div>

        <div class="section-card">
          <h3 class="mb-4 font-mono text-sm font-semibold text-gray-500 dark:text-gray-400">$ skills --level</h3>
          <div class="space-y-4">
            {#each skills as s}
              <div>
                <div class="mb-1 flex justify-between">
                  <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{s.name}</span>
                  <span class="font-mono text-xs text-gray-400">{s.label}</span>
                </div>
                <div class="h-1.5 w-full overflow-hidden rounded-full bg-gray-200 dark:bg-surface-3">
                  <div
                    class="progress-fill h-full rounded-full bg-emerald-500 dark:bg-accent"
                    style="width: 0%"
                    data-width="{s.level}%"
                  ></div>
                </div>
              </div>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="projetos" class="py-16">
    <div class="mx-auto max-w-6xl px-4">
      <div class="reveal mb-8">
        <p class="mb-1 font-mono text-xs text-emerald-600 dark:text-accent">// 03</p>
        <h2 class="font-display text-2xl font-bold text-gray-900 dark:text-white">Projetos</h2>
        <p class="text-sm text-gray-500 dark:text-gray-400">Alguns trabalhos já desenvolvidos.</p>
      </div>

      <div class="reveal grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each projects as p}
          <div class="section-card group flex flex-column hover:-translate-y-1 hover:shadow-md transition-all duration-200">
            <div class="mb-4 flex items-center gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-accent">
                <i class="fa-solid {p.icon}"></i>
              </div>
              <h3 class="font-display font-semibold text-gray-900 dark:text-white">{p.title}</h3>
            </div>
            <p class="mb-4 flex-1 text-sm text-gray-600 dark:text-gray-400">{p.desc}</p>
            <div class="mb-4 flex flex-wrap gap-1.5">
              {#each p.tags as tag}
                <span class="tag bg-gray-100 text-gray-600 dark:bg-surface-3 dark:text-gray-400">{tag}</span>
              {/each}
            </div>
            <div class="flex gap-2">
              <a href={p.repo} target={p.repo.startsWith('http') ? '_blank' : undefined} rel="noreferrer" class="btn-outline text-xs px-3 py-1.5">
                <i class="fa-solid {p.repoLabel ? 'fa-circle-info' : 'fa-github'} text-xs"></i> {p.repoLabel || 'Repositório'}
              </a>
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section id="interesses" class="py-16">
    <div class="mx-auto max-w-6xl px-4">
      <div class="reveal mb-8">
        <p class="mb-1 font-mono text-xs text-emerald-600 dark:text-accent">// 04</p>
        <h2 class="font-display text-2xl font-bold text-gray-900 dark:text-white">Interesses</h2>
        <p class="text-sm text-gray-500 dark:text-gray-400">Áreas que eu gosto de estudar/pesquisar.</p>
      </div>

      <div class="reveal grid gap-6 lg:grid-cols-2">
        <div class="section-card">
          <ul class="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <li>Engenharia de Software aplicada a projetos reais</li>
            <li>Análise de Dados e estatística</li>
            <li>Desenvolvimento Web (Front-end e Back-end)</li>
            <li>Banco de Dados e modelagem relacional</li>
            <li>Estruturas de dados e lógica de programação</li>
            <li>Automação e produtividade no Linux</li>
          </ul>
        </div>
        <div class="section-card">
          <h3 class="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Atividades</h3>
          <p class="mb-4 text-sm text-gray-600 dark:text-gray-400">
            Curso Sistemas de Informação na UFLA e participo de projeto de extensão com
            foco em refatoração de software e melhoria de processos.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="tag bg-gray-100 text-gray-700 dark:bg-surface-3 dark:text-gray-300">
              <i class="fa-solid fa-book mr-1 text-xs"></i>Estudos contínuos
            </span>
            <span class="tag bg-gray-100 text-gray-700 dark:bg-surface-3 dark:text-gray-300">
              <i class="fa-solid fa-people-group mr-1 text-xs"></i>Colaboração em equipe
            </span>
            <span class="tag bg-gray-100 text-gray-700 dark:bg-surface-3 dark:text-gray-300">
              <i class="fa-solid fa-terminal mr-1 text-xs"></i>Projeto de extensão
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="contato" class="py-16">
    <div class="mx-auto max-w-6xl px-4">
      <div class="reveal mb-8">
        <p class="mb-1 font-mono text-xs text-emerald-600 dark:text-accent">// 05</p>
        <h2 class="font-display text-2xl font-bold text-gray-900 dark:text-white">Contato</h2>
        <p class="text-sm text-gray-500 dark:text-gray-400">Como falar comigo.</p>
      </div>

      <div class="reveal grid gap-6 lg:grid-cols-2">
        <div class="section-card">
          <h3 class="mb-4 font-mono text-sm font-semibold text-gray-500 dark:text-gray-400">$ contact --info</h3>
          <ul class="space-y-4">
            <li class="flex items-center gap-3">
              <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 dark:bg-surface-3">
                <i class="fa-solid fa-envelope text-emerald-500 dark:text-accent"></i>
              </span>
              <div>
                <p class="text-xs text-gray-400">email</p>
                <a href="mailto:Brites.joaop@gmail.com" class="text-sm font-medium text-gray-800 hover:text-emerald-600 dark:text-gray-200 dark:hover:text-accent">
                  Brites.joaop@gmail.com
                </a>
              </div>
            </li>
            <li class="flex items-center gap-3">
              <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 dark:bg-surface-3">
                <i class="fa-solid fa-phone text-emerald-500 dark:text-accent"></i>
              </span>
              <div>
                <p class="text-xs text-gray-400">telefone</p>
                <p class="text-sm font-medium text-gray-800 dark:text-gray-200">(35) 99946-5270</p>
              </div>
            </li>
            <li class="flex items-center gap-3">
              <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 dark:bg-surface-3">
                <i class="fa-brands fa-github text-emerald-500 dark:text-accent"></i>
              </span>
              <div>
                <p class="text-xs text-gray-400">github</p>
                <a href="https://github.com/joaopbrites" target="_blank" rel="noreferrer" class="text-sm font-medium text-gray-800 hover:text-emerald-600 dark:text-gray-200 dark:hover:text-accent">
                  github.com/joaopbrites
                </a>
              </div>
            </li>
            <li class="flex items-center gap-3">
              <span class="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-100 dark:bg-surface-3">
                <i class="fa-brands fa-linkedin text-emerald-500 dark:text-accent"></i>
              </span>
              <div>
                <p class="text-xs text-gray-400">linkedin</p>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" class="text-sm font-medium text-gray-800 hover:text-emerald-600 dark:text-gray-200 dark:hover:text-accent">
                  linkedin.com
                </a>
              </div>
            </li>
          </ul>
        </div>

        <div class="section-card">
          <ul class="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-map-pin text-emerald-500 dark:text-accent"></i>
              Bom Sucesso - MG (disponível para Lavras)
            </li>
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-user-tie text-emerald-500 dark:text-accent"></i>
              Conselheiro Fiscal (atividade voluntária)
            </li>
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-briefcase text-emerald-500 dark:text-accent"></i>
              Projeto de Extensão UFLA (2025 - atual)
            </li>
            <li class="flex items-center gap-2">
              <i class="fa-solid fa-graduation-cap text-emerald-500 dark:text-accent"></i>
              Curso CDPO/USP - Estatística e Otimização (2025)
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</main>

<footer class="border-t border-gray-200 bg-white py-6 dark:border-border dark:bg-surface">
  <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-center md:flex-row">
    <p class="font-mono text-xs text-gray-400">
      © {new Date().getFullYear()} Página Pessoal - João Pedro Brites
    </p>
    <p class="font-mono text-xs text-gray-400">
      Feito com Svelte + Tailwind CSS
    </p>
  </div>
</footer>
