<svelte:head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
  <link href="https://fonts.googleapis.com/css2?family=Bangers&family=Barlow+Condensed:wght@400;700;900&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
</svelte:head>

<script>
  import { onMount } from 'svelte'
  import perfil from './lib/perfil.jpg'

  let menuOpen = false

  const navItems = [
    { href: '#sobre', label: 'Sobre' },
    { href: '#habilidades', label: 'Skills' },
    { href: '#projetos', label: 'Projetos' },
    { href: '#sites', label: 'Sites' },
    { href: '#interesses', label: 'Interesses' },
    { href: '#contato', label: 'Contato' },
  ]

  const competencias = [
    'Organização de código e versionamento com Git/GitHub',
    'Modelagem e consultas em banco de dados relacional',
    'Lógica de programação, estruturas de dados e POO',
    'Noções de ciência de dados e estatística aplicada',
    'Colaboração em projetos acadêmicos e de extensão',
  ]

  const interesses = [
    'Engenharia de Software aplicada a projetos reais',
    'Análise de Dados e estatística',
    'Desenvolvimento Web (Front-end e Back-end)',
    'Banco de Dados e modelagem relacional',
    'Estruturas de dados e lógica de programação',
    'Automação e produtividade no Linux',
  ]

  const techTags = [
    { label: 'Python', color: 'text-neon-cyan border-neon-cyan' },
    { label: 'Linux', color: 'text-neon-yellow border-neon-yellow' },
    { label: 'SQL', color: 'text-neon-purple border-neon-purple' },
    { label: 'C++', color: 'text-neon-pink border-neon-pink' },
    { label: 'Git / GitHub', color: 'text-neon-green border-neon-green' },
    { label: 'Docker', color: 'text-neon-cyan border-neon-cyan' },
    { label: 'POO / SOLID', color: 'text-neon-purple border-neon-purple' },
    { label: 'HTML / CSS / JS', color: 'text-neon-pink border-neon-pink' },
    { label: 'Svelte', color: 'text-neon-pink border-neon-pink' },
    { label: 'Tailwind', color: 'text-neon-cyan border-neon-cyan' },
  ]

  const skills = [
    { name: 'Python', level: 65, color: 'bg-neon-cyan' },
    { name: 'SQL e Modelagem', level: 30, color: 'bg-neon-purple' },
    { name: 'HTML / CSS / JS', level: 65, color: 'bg-neon-pink' },
    { name: 'Git / GitHub / Linux', level: 60, color: 'bg-neon-green' },
    { name: 'Dados e Estatística', level: 30, color: 'bg-neon-yellow' },
  ]

  const projects = [
    {
      title: 'Trabalho Eng. Software',
      desc: 'Projeto web acadêmico com estrutura maior de código e organização por módulos.',
      tags: ['TypeScript', 'JavaScript'],
      icon: 'fa-diagram-project',
      color: 'neon-cyan',
      repo: 'https://github.com/joaopbrites/Trabalho-Engenharia-software',
    },
    {
      title: 'Provação dos Padawans',
      desc: 'Jogo web desenvolvido em disciplina, foco em lógica e experiência visual.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      icon: 'fa-gamepad',
      color: 'neon-pink',
      repo: 'https://github.com/joaopbrites/a-provacao-dos-padawans',
    },
    {
      title: 'GeoNetCast (ShowCast/TerraCast)',
      desc: 'Remodelagem e adaptação de fluxo para conversão de dados de satélite em páginas HTML para visualização rápida.',
      tags: ['Python', 'Automação'],
      icon: 'fa-satellite-dish',
      color: 'neon-green',
      repo: '#contato',
      repoLabel: 'Info no contato',
    },
  ]

  const sites = [
    {
      title: 'joaopbrites.dev',
      desc: 'Site profissional com portfólio e currículo interativo.',
      status: 'Em construção',
      url: 'https://joaopbrites.dev',
      icon: 'fa-briefcase',
      color: 'neon-cyan',
    },
    {
      title: 'oqcefez.com',
      desc: 'Blog underground com anotações, experimentos e projetos alternativos.',
      status: 'Em construção',
      url: 'https://oqcefez.com',
      icon: 'fa-newspaper',
      color: 'neon-pink',
    },
  ]

  function setupReveal() {
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      }),
      { threshold: 0.1 }
    )
    els.forEach((el) => io.observe(el))
  }

  onMount(() => {
    document.documentElement.classList.add('dark')
    document.body.classList.add('dark')
    setupReveal()
    setTimeout(() => {
      document.querySelectorAll('.progress-fill').forEach((el) => {
        el.style.width = el.dataset.width
      })
    }, 350)
  })
</script>

<nav class="sticky top-0 z-50 border-b-2 border-neon-cyan/30 bg-dark-bg/95 backdrop-blur-md">
  <div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
    <a href="#top" class="group flex items-center gap-2 font-mono text-sm font-bold uppercase tracking-wider">
      <span class="border-2 border-neon-pink bg-neon-pink px-2 py-0.5 text-xs font-black text-paper">&gt;_</span>
      <span class="font-graffiti text-paper group-hover:animate-glitch">J.P.BRITES</span>
    </a>
    <ul class="hidden items-center gap-6 md:flex">
      {#each navItems as item}
        <li><a href={item.href} class="nav-link">[{item.label}]</a></li>
      {/each}
    </ul>
    <button class="flex h-8 w-8 items-center justify-center border-2 border-neon-pink text-neon-pink transition-all hover:bg-neon-pink hover:text-paper md:hidden" on:click={() => (menuOpen = !menuOpen)}>
      <i class="fa-solid {menuOpen ? 'fa-xmark' : 'fa-bars'} text-xs"></i>
    </button>
  </div>
  {#if menuOpen}
    <div class="border-t-2 border-neon-cyan/30 bg-dark-surface px-4 py-3">
      {#each navItems as item}
        <a href={item.href} class="block py-2 font-mono text-sm uppercase text-neon-cyan hover:text-neon-pink" on:click={() => (menuOpen = false)}>[{item.label}]</a>
      {/each}
    </div>
  {/if}
</nav>

<header id="top" class="relative overflow-hidden bg-dark-bg py-20">
  <div class="pointer-events-none absolute inset-0" style="background-image: repeating-linear-gradient(45deg, rgba(197,187,160,0.04) 0px, rgba(197,187,160,0.04) 1px, transparent 1px, transparent 10px); background-size: 14px 14px;"></div>
  <div class="relative mx-auto max-w-6xl px-4">
    <div class="flex flex-col items-center gap-10 lg:flex-row lg:items-start">
      <div class="flex-shrink-0 text-center">
        <div class="group relative mx-auto h-40 w-40 lg:h-48 lg:w-48">
          <img src={perfil} alt="João Pedro Brites" class="relative h-full w-full border-[3px] border-paper/30 object-cover" style="box-shadow: 6px 6px 0 rgba(0,0,0,0.75);" />
        </div>
        <div class="mt-4 flex flex-wrap justify-center gap-2">
          <span class="tag text-neon-cyan border-neon-cyan">SI / UFLA</span>
          <span class="tag text-neon-pink border-neon-pink">DEVELOPER</span>
        </div>
      </div>
      <div class="flex-1 text-center lg:text-left">
        <p class="mb-2 font-mono text-xs text-gray-500">
          <span class="text-neon-green">➜</span> <span class="text-neon-cyan">~/underground</span> <span class="text-gray-600">git:(main)</span> <span class="animate-blink text-neon-yellow">▊</span>
        </p>
        <h1 class="mb-3 font-graffiti text-5xl font-black uppercase tracking-tight lg:text-6xl" style="text-shadow: 3px 3px 0 rgba(0,0,0,0.9);">
          <span class="text-neon-cyan">João Pedro</span><br />
          <span class="text-neon-pink">Brites</span>
        </h1>
        <p class="mb-6 max-w-2xl font-mono text-sm leading-relaxed text-gray-400">
          <span class="text-neon-cyan">//</span> Bacharelando SI na UFLA.<br />
          <span class="text-neon-pink">//</span> Interesse em eng. software, dados e dev web.<br />
          <span class="text-neon-green">//</span> Aprender fazendo. Construir. Evoluir.
        </p>
        <div class="flex flex-wrap justify-center gap-3 lg:justify-start">
          <a href="#projetos" class="btn-primary"><i class="fa-solid fa-code"></i> PROJETOS</a>
          <a href="#contato" class="btn-outline"><i class="fa-solid fa-envelope"></i> CONTATO</a>
          <a href="https://github.com/joaopbrites" target="_blank" rel="noreferrer" class="btn-outline"><i class="fa-brands fa-github"></i> GITHUB</a>
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" class="btn-outline"><i class="fa-brands fa-linkedin"></i> LINKEDIN</a>
        </div>
      </div>
    </div>
  </div>
</header>

<main class="bg-dark-bg pb-20">
  <section id="sobre" class="py-16">
    <div class="mx-auto max-w-6xl px-4">
      <div class="reveal mb-8">
        <p class="mb-1 font-mono text-xs uppercase tracking-widest text-neon-cyan">[01_SOBRE]</p>
        <h2 class="neon-heading font-graffiti text-3xl font-black uppercase text-neon-pink">Quem sou</h2>
      </div>
      <div class="reveal grid gap-6 lg:grid-cols-2">
        <div class="section-card">
          <p class="mb-3 font-mono text-sm leading-relaxed text-gray-300">
            Sou de Bom Sucesso-MG, atualmente moro entre Bom Sucesso e Lavras por causa da graduação. Base boa em programação, banco de dados e resolução de problemas, construída em aula e projetos práticos.
          </p>
          <p class="font-mono text-sm text-gray-400">
            Minha proposta aqui é apresentar de forma objetiva minha trajetória, projetos e temas que estou estudando.
          </p>
        </div>
        <div class="section-card">
          <ul class="space-y-3 font-mono text-sm">
            <li class="flex items-start gap-3">
              <i class="fa-solid fa-location-dot mt-0.5 text-neon-cyan"></i>
              <div><span class="text-xs uppercase text-gray-500">LOCAL</span><p class="text-gray-300">Bom Sucesso - MG (disponível para Lavras)</p></div>
            </li>
            <li class="flex items-start gap-3">
              <i class="fa-solid fa-graduation-cap mt-0.5 text-neon-pink"></i>
              <div><span class="text-xs uppercase text-gray-500">FORMAÇÃO</span><p class="text-gray-300">SI - UFLA (2027)</p></div>
            </li>
            <li class="flex items-start gap-3">
              <i class="fa-solid fa-language mt-0.5 text-neon-yellow"></i>
              <div><span class="text-xs uppercase text-gray-500">IDIOMAS</span><p class="text-gray-300">Português (nativo) · Inglês (A2)</p></div>
            </li>
            <li class="flex items-start gap-3">
              <i class="fa-solid fa-laptop-code mt-0.5 text-neon-green"></i>
              <div><span class="text-xs uppercase text-gray-500">FOCO</span><p class="text-gray-300">Software & Dados</p></div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <section id="habilidades" class="py-16">
    <div class="mx-auto max-w-6xl px-4">
      <div class="reveal mb-8">
        <p class="mb-1 font-mono text-xs uppercase tracking-widest text-neon-pink">[02_SKILLS]</p>
        <h2 class="neon-heading font-graffiti text-3xl font-black uppercase text-neon-cyan">Stack Técnica</h2>
      </div>
      <div class="reveal grid gap-6 lg:grid-cols-2">
        <div class="section-card">
          <h3 class="mb-4 font-mono text-sm font-bold uppercase tracking-wider text-neon-cyan">$ ls ./tech/</h3>
          <div class="flex flex-wrap gap-2 mb-5">
            {#each techTags as t}
              <span class="tag {t.color}">{t.label}</span>
            {/each}
          </div>
          <div class="border-t border-dark-border pt-4">
            <h3 class="mb-3 font-mono text-xs font-bold uppercase tracking-wider text-paper/50">$ cat competencias.txt</h3>
            <ul class="space-y-2">
              {#each competencias as c}
                <li class="flex items-start gap-2 font-mono text-xs text-gray-400">
                  <i class="fa-solid fa-check mt-0.5 text-neon-green" style="font-size: 10px;"></i>
                  {c}
                </li>
              {/each}
            </ul>
          </div>
        </div>
        <div class="section-card">
          <h3 class="mb-4 font-mono text-sm font-bold uppercase tracking-wider text-neon-pink">$ cat levels.json</h3>
          <div class="space-y-4">
            {#each skills as s}
              <div>
                <div class="mb-1.5 flex justify-between font-mono text-xs">
                  <span class="uppercase text-gray-300">{s.name}</span>
                  <span class="text-gray-500">{s.level}%</span>
                </div>
                <div class="h-2 w-full overflow-hidden rounded-full bg-dark-elevated">
                  <div class="progress-fill h-full rounded-full transition-all duration-1000 {s.color}" style="width: 0%" data-width="{s.level}%"></div>
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
        <p class="mb-1 font-mono text-xs uppercase tracking-widest text-neon-green">[03_PROJETOS]</p>
        <h2 class="neon-heading font-graffiti text-3xl font-black uppercase text-neon-pink">Trabalhos</h2>
      </div>
      <div class="reveal grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {#each projects as p}
          <div class="group section-card flex flex-col transition-all duration-300 hover:-translate-y-2">
            <div class="mb-4 flex items-center justify-between">
              <div class="flex h-12 w-12 items-center justify-center rounded border-2 border-{p.color} bg-{p.color}/10 text-{p.color}">
                <i class="fa-solid {p.icon} text-lg"></i>
              </div>
              <span class="font-mono text-xs uppercase text-gray-500">#{p.tags[0]}</span>
            </div>
            <h3 class="mb-2 font-mono text-sm font-bold uppercase text-neon-cyan">{p.title}</h3>
            <p class="mb-4 flex-1 font-mono text-xs leading-relaxed text-gray-400">{p.desc}</p>
            <div class="mb-4 flex flex-wrap gap-1.5">
              {#each p.tags as tag}
                <span class="rounded border border-dark-border bg-dark-elevated px-2 py-0.5 font-mono text-xs text-gray-500">{tag}</span>
              {/each}
            </div>
            <a href={p.repo} target={p.repo.startsWith('http') ? '_blank' : undefined} rel="noreferrer" class="rounded border-2 border-neon-cyan bg-transparent px-3 py-1.5 text-center font-mono text-xs font-bold uppercase text-neon-cyan transition-all hover:bg-neon-cyan hover:text-black">
              {p.repoLabel || 'REPO →'}
            </a>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section id="sites" class="py-16">
    <div class="mx-auto max-w-6xl px-4">
      <div class="reveal mb-8">
        <p class="mb-1 font-mono text-xs uppercase tracking-widest text-neon-purple">[04_SITES]</p>
        <h2 class="neon-heading font-graffiti text-3xl font-black uppercase text-neon-green">Web Presence</h2>
      </div>
      <div class="reveal grid gap-6 lg:grid-cols-2">
        {#each sites as site}
          <div class="group section-card transition-all duration-300 hover:border-{site.color}/60">
            <div class="mb-4 flex items-center justify-between">
              <div class="flex h-14 w-14 items-center justify-center rounded-lg border-2 border-{site.color} bg-{site.color}/10">
                <i class="fa-solid {site.icon} text-2xl text-{site.color}"></i>
              </div>
              <span class="animate-neon-pulse rounded border border-{site.color} px-2 py-1 font-mono text-xs font-bold uppercase text-{site.color}">{site.status}</span>
            </div>
            <h3 class="mb-2 font-mono text-xl font-black uppercase text-{site.color}">{site.title}</h3>
            <p class="mb-4 font-mono text-sm leading-relaxed text-gray-400">{site.desc}</p>
            <a href={site.url} target="_blank" rel="noreferrer" class="inline-flex items-center gap-2 font-mono text-sm font-bold uppercase text-{site.color} transition-all hover:gap-3">
              ACESSAR <i class="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        {/each}
      </div>
    </div>
  </section>

  <section id="interesses" class="py-16">
    <div class="mx-auto max-w-6xl px-4">
      <div class="reveal mb-8">
        <p class="mb-1 font-mono text-xs uppercase tracking-widest text-neon-yellow">[05_INTERESSES]</p>
        <h2 class="neon-heading font-graffiti text-3xl font-black uppercase text-neon-cyan">Interesses</h2>
      </div>
      <div class="reveal grid gap-6 lg:grid-cols-2">
        <div class="section-card">
          <ul class="space-y-2">
            {#each interesses as item}
              <li class="flex items-start gap-2 font-mono text-sm text-gray-300">
                <i class="fa-solid fa-caret-right mt-0.5 text-neon-pink" style="font-size: 11px;"></i>
                {item}
              </li>
            {/each}
          </ul>
        </div>
        <div class="section-card">
          <h3 class="mb-3 font-mono text-sm font-bold uppercase tracking-wider text-neon-cyan">Atividades</h3>
          <p class="mb-4 font-mono text-sm text-gray-400">
            Curso Sistemas de Informação na UFLA e participo de projeto de extensão com foco em refatoração de software e melhoria de processos.
          </p>
          <div class="flex flex-wrap gap-2">
            <span class="tag text-paper/60 border-paper/30"><i class="fa-solid fa-book mr-1"></i>Estudos contínuos</span>
            <span class="tag text-paper/60 border-paper/30"><i class="fa-solid fa-people-group mr-1"></i>Colaboração</span>
            <span class="tag text-paper/60 border-paper/30"><i class="fa-solid fa-terminal mr-1"></i>Proj. extensão</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="contato" class="py-16">
    <div class="mx-auto max-w-6xl px-4">
      <div class="reveal mb-8">
        <p class="mb-1 font-mono text-xs uppercase tracking-widest text-neon-yellow">[06_CONTATO]</p>
        <h2 class="neon-heading font-graffiti text-3xl font-black uppercase text-neon-cyan">Get in Touch</h2>
      </div>
      <div class="reveal grid gap-6 lg:grid-cols-2">
        <div class="section-card">
          <h3 class="mb-4 font-mono text-sm font-bold uppercase tracking-wider text-neon-pink">$ whoami</h3>
          <ul class="space-y-4 font-mono">
            <li class="flex items-center gap-3">
              <span class="flex h-10 w-10 items-center justify-center rounded border-2 border-neon-cyan bg-neon-cyan/10">
                <i class="fa-solid fa-envelope text-neon-cyan"></i>
              </span>
              <div class="text-xs">
                <p class="uppercase text-gray-500">EMAIL</p>
                <a href="mailto:Brites.joaop@gmail.com" class="text-neon-cyan hover:underline">Brites.joaop@gmail.com</a>
              </div>
            </li>
            <li class="flex items-center gap-3">
              <span class="flex h-10 w-10 items-center justify-center rounded border-2 border-neon-green bg-neon-green/10">
                <i class="fa-solid fa-phone text-neon-green"></i>
              </span>
              <div class="text-xs">
                <p class="uppercase text-gray-500">PHONE</p>
                <p class="text-gray-300">(35) 99946-5270</p>
              </div>
            </li>
            <li class="flex items-center gap-3">
              <span class="flex h-10 w-10 items-center justify-center rounded border-2 border-neon-pink bg-neon-pink/10">
                <i class="fa-brands fa-github text-neon-pink"></i>
              </span>
              <div class="text-xs">
                <p class="uppercase text-gray-500">GITHUB</p>
                <a href="https://github.com/joaopbrites" target="_blank" rel="noreferrer" class="text-neon-pink hover:underline">github.com/joaopbrites</a>
              </div>
            </li>
            <li class="flex items-center gap-3">
              <span class="flex h-10 w-10 items-center justify-center rounded border-2 border-neon-purple bg-neon-purple/10">
                <i class="fa-brands fa-linkedin text-neon-purple"></i>
              </span>
              <div class="text-xs">
                <p class="uppercase text-gray-500">LINKEDIN</p>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" class="text-neon-purple hover:underline">linkedin.com</a>
              </div>
            </li>
          </ul>
        </div>
        <div class="section-card">
          <h3 class="mb-4 font-mono text-sm font-bold uppercase tracking-wider text-neon-cyan">$ info --extra</h3>
          <ul class="space-y-3 font-mono text-xs text-gray-400">
            <li class="flex items-start gap-2">
              <i class="fa-solid fa-map-pin mt-0.5 text-neon-cyan"></i>
              Bom Sucesso - MG (disponível para Lavras)
            </li>
            <li class="flex items-start gap-2">
              <i class="fa-solid fa-user-tie mt-0.5 text-neon-pink"></i>
              Conselheiro Fiscal (atividade voluntária)
            </li>
            <li class="flex items-start gap-2">
              <i class="fa-solid fa-briefcase mt-0.5 text-neon-green"></i>
              Projeto de Extensão UFLA (2025 - atual)
            </li>
            <li class="flex items-start gap-2">
              <i class="fa-solid fa-graduation-cap mt-0.5 text-neon-yellow"></i>
              Curso CDPO/USP - Estatística e Otimização (2025)
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</main>

<footer class="border-t-2 border-neon-cyan/30 bg-dark-surface py-6">
  <div class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-center md:flex-row">
    <p class="font-mono text-xs text-gray-500"><span class="text-neon-cyan">©</span> {new Date().getFullYear()} <span class="text-neon-pink">João Pedro Brites</span></p>
    <p class="font-mono text-xs text-gray-500">Made with <span class="text-neon-pink">Svelte</span> + <span class="text-neon-cyan">Tailwind CSS</span></p>
  </div>
</footer>
