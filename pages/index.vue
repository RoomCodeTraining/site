<template>
  <Header />
  <main class="pt-20">
    <!-- HERO -->
    <Section padded container="wide">
      <div class="relative">
        <!-- Background: subtle gradient -->
        <div
          class="pointer-events-none absolute -inset-x-6 -top-10 -bottom-10 rounded-[40px] bg-gradient-to-b from-orange-500/8 via-transparent to-transparent dark:from-orange-500/10"
        ></div>

        <div class="relative grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          <!-- Hero image (left) -->
          <div class="lg:col-span-4 order-1 flex justify-center lg:justify-start">
            <div class="relative">
              <div
                class="absolute -inset-6 rounded-[34px] bg-gradient-to-br from-orange-500/18 via-orange-500/6 to-transparent blur-2xl"
              ></div>

              <div
                class="relative rounded-full p-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm w-fit"
              >
                <div class="relative overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                  <NuxtImg
                    src="/images/hero.png"
                    width="560"
                    height="560"
                    fit="cover"
                    format="webp"
                    quality="80"
                    sizes="(max-width: 640px) 220px, (max-width: 1024px) 300px, 360px"
                    alt="Photo de profil"
                    class="w-[220px] sm:w-[280px] lg:w-[360px] aspect-square object-cover"
                    loading="eager"
                  />
                </div>

                <!-- subtle ring -->
                <div
                  class="pointer-events-none absolute inset-0 rounded-full ring-1 ring-orange-500/20 dark:ring-orange-400/20"
                ></div>
              </div>
            </div>
          </div>

          <!-- Copy (right) -->
          <div class="lg:col-span-8 order-2 text-center lg:text-left">
            <p class="text-xs font-semibold tracking-wider uppercase text-slate-500 dark:text-slate-400">
              Je construis et j’exploite des systèmes en production
            </p>

            <h1
              class="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white font-display leading-[1.08] max-w-3xl mx-auto lg:mx-0"
            >
              Tech Ops Lead
              <span class="text-slate-400 dark:text-slate-500 font-semibold">+</span>
              Fullstack Developer
              <span
                class="block mt-3 text-xl sm:text-2xl font-semibold text-slate-700 dark:text-slate-300"
              >
                Production-ready systems.
              </span>
            </h1>

            <p class="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0">
              Je livre des produits fiables et observables: CI/CD, monitoring, performance, coûts et runbooks.
            </p>

            <div class="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-md mx-auto lg:mx-0 lg:max-w-none lg:flex lg:flex-row lg:items-center">
              <Button variant="primary" to="#projects" size="lg" block>
                Voir les projets
                <template #right><span aria-hidden="true">→</span></template>
              </Button>
              <Button variant="ghost" to="#systems" size="lg" block>
                Voir les systèmes
              </Button>
            </div>

            <div
              class="mt-7 -mx-4 px-4 flex gap-2.5 overflow-x-auto whitespace-nowrap [scrollbar-width:none] [-ms-overflow-style:none] lg:mx-0 lg:px-0 lg:flex-wrap lg:overflow-visible"
            >
              <span class="sr-only">Stack</span>
              <Badge tone="brand" size="md">GitHub + Cleavr</Badge>
              <Badge tone="neutral" size="md">VPS / CPANEL</Badge>
              <Badge tone="neutral" size="md">MySQL + S3</Badge>
              <Badge tone="neutral" size="md">Tests: Pest</Badge>
            </div>

            <!-- (stats removed on purpose for a cleaner hero) -->
          </div>

        </div>
      </div>
    </Section>

    <!-- PRODUCTION SYSTEMS -->
    <Section
      id="systems"
      title="Production Systems"
      subtitle="Exemples de plateformes que je conçois, déploie et exploite. Objectif: disponibilité, performance, traçabilité."
      eyebrow="Operate"
      tone="muted"
      container="wide"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        <PlatformCard
          v-for="p in platforms"
          :key="p.name"
          :name="p.name"
          :description="p.description"
          :criticality="p.criticality"
          :uptime="p.kpi.uptime"
          :volume="p.kpi.volume"
        >
          <template #icon><span class="text-lg">{{ p.icon }}</span></template>
        </PlatformCard>
      </div>
    </Section>

    <!-- PROJECTS / CASE STUDIES -->
    <Section
      id="projects"
      title="Projects (Case studies)"
      subtitle="Du problème business au système en prod: décisions techniques, livraison et exploitation."
      eyebrow="Build"
      container="wide"
    >
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CaseStudyCard
          v-for="c in caseStudies"
          :key="c.title"
          v-bind="c"
        />
      </div>
    </Section>

    <!-- BAARO / IA -->
    <Section
      title="Baaro / IA"
      subtitle="Un assistant orienté production: accès aux données, indexation documentaire, et outillage pour opérer."
      eyebrow="Systems + AI"
      tone="muted"
      container="wide"
    >
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div class="lg:col-span-7">
          <Card class="h-full">
            <template #header>
              <div class="flex items-start justify-between gap-4">
                <div>
                  <h3 class="text-xl font-bold text-slate-900 dark:text-white font-display">Baaro</h3>
                  <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
                    Agent IA connecté à mes systèmes, conçu pour accélérer le support, le run, et l’accès à l’information.
                  </p>
                </div>
                <Badge tone="brand" size="md">MCP</Badge>
              </div>
            </template>

            <div class="space-y-4 text-sm text-slate-700 dark:text-slate-200">
              <div>
                <p class="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Accès outillé</p>
                <p>MCP pour déclencher des actions et requêtes contrôlées, avec traçabilité.</p>
              </div>
              <div>
                <p class="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Données</p>
                <p>MySQL pour la donnée métier + indexation documentaire pour la connaissance.</p>
              </div>
              <div>
                <p class="text-[11px] uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1">Cas d’usage</p>
                <p>Support L1/L2, analyse d’incident, génération de runbooks, recherche “prod-first”.</p>
              </div>
            </div>

            <div class="mt-6 flex flex-col sm:flex-row gap-3">
              <Button variant="primary" href="https://github.com" target="_blank" rel="noreferrer">
                Voir Baaro
                <template #right><span aria-hidden="true">→</span></template>
              </Button>
              <Button variant="ghost" to="#contact">Me contacter</Button>
            </div>
          </Card>
        </div>
        <div class="lg:col-span-5">
          <Card variant="subtle" class="h-full">
            <template #header>
              <p class="text-sm font-semibold text-slate-700 dark:text-slate-200">Stack IA (résumé)</p>
            </template>
            <div class="space-y-3">
              <div class="flex items-center justify-between">
                <span class="text-sm text-slate-600 dark:text-slate-400">MCP</span>
                <Badge tone="brand">actions contrôlées</Badge>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm text-slate-600 dark:text-slate-400">MySQL</span>
                <Badge tone="neutral">métier</Badge>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm text-slate-600 dark:text-slate-400">Indexation</span>
                <Badge tone="neutral">docs & KB</Badge>
              </div>
              <div class="flex items-center justify-between">
                <span class="text-sm text-slate-600 dark:text-slate-400">Observabilité</span>
                <Badge tone="success">prod-first</Badge>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Section>

    <!-- HOW I BUILD -->
    <Section
      title="How I build"
      subtitle="Un cycle complet: concevoir, livrer, déployer, opérer. Le run fait partie du produit."
      eyebrow="Workflow"
      container="wide"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <Card v-for="(s, i) in howIBuild" :key="s.title" class="h-full">
          <template #header>
            <div class="flex items-start justify-between">
              <div class="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold">
                {{ i + 1 }}
              </div>
              <div class="w-10 h-10 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-xl">
                {{ s.icon }}
              </div>
            </div>
            <h3 class="mt-5 text-lg font-bold text-slate-900 dark:text-white font-display">
              {{ s.title }}
            </h3>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-400">
              {{ s.subtitle }}
            </p>
          </template>
          <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-200">
            <li v-for="(item, idx) in s.points" :key="idx" class="flex gap-2">
              <span class="text-orange-500 mt-0.5">•</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </Card>
      </div>
    </Section>

    <!-- ABOUT -->
    <Section
      title="About"
      subtitle="Positionnement: je construis ET j’exploite. Je m’intéresse autant au delivery qu’au run."
      eyebrow="Profile"
      tone="muted"
      container="wide"
    >
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div class="lg:col-span-7">
          <Card>
            <template #header>
              <h3 class="text-xl font-bold text-slate-900 dark:text-white font-display">
                Construire des systèmes, tenir la prod, améliorer en continu.
              </h3>
              <p class="mt-3 text-sm text-slate-600 dark:text-slate-400">
                Je travaille à l’interface entre produit, engineering et opérations: architecture pragmatique,
                sécurité, CI/CD, monitoring, et optimisation des coûts/performances.
              </p>
            </template>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div class="rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-4">
                <p class="font-semibold text-slate-900 dark:text-white">Stack</p>
                <p class="mt-2 text-slate-600 dark:text-slate-400">
                  Laravel, Nuxt, MySQL, CI/CD, S3, VPS/CPANEL
                </p>
              </div>
              <div class="rounded-xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-4">
                <p class="font-semibold text-slate-900 dark:text-white">Ops mindset</p>
                <p class="mt-2 text-slate-600 dark:text-slate-400">
                  Runbooks, observabilité, incident response, SLO/SLA.
                </p>
              </div>
            </div>
          </Card>
        </div>
        <div class="lg:col-span-5">
          <Card variant="subtle">
            <template #header>
              <p class="text-sm font-semibold text-slate-700 dark:text-slate-200">Ce que tu peux attendre</p>
            </template>
            <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-200">
              <li class="flex gap-2"><span class="text-emerald-500 mt-0.5">✓</span><span>Livraison itérative + qualité</span></li>
              <li class="flex gap-2"><span class="text-emerald-500 mt-0.5">✓</span><span>Déploiements fiables</span></li>
              <li class="flex gap-2"><span class="text-emerald-500 mt-0.5">✓</span><span>Monitoring et alerting</span></li>
              <li class="flex gap-2"><span class="text-emerald-500 mt-0.5">✓</span><span>Coûts et performance sous contrôle</span></li>
            </ul>
          </Card>
        </div>
      </div>
    </Section>

    <!-- CONTACT -->
    <Section
      id="contact"
      title="Contact"
      subtitle="Le plus simple: un message et on voit comment je peux aider."
      eyebrow="Let’s talk"
      container="wide"
    >
      <div class="flex flex-col sm:flex-row gap-3">
        <Button variant="primary" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
          LinkedIn
        </Button>
        <Button variant="secondary" href="https://github.com" target="_blank" rel="noreferrer">
          GitHub
        </Button>
        <Button variant="ghost" href="https://wa.me/" target="_blank" rel="noreferrer">
          WhatsApp
        </Button>
      </div>
    </Section>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

import Section from '~/components/ui/Section.vue'
import Card from '~/components/ui/Card.vue'
import Badge from '~/components/ui/Badge.vue'
import Button from '~/components/ui/Button.vue'

import PlatformCard from '~/components/home/PlatformCard.vue'
import CaseStudyCard from '~/components/home/CaseStudyCard.vue'
import OpsStat from '~/components/home/OpsStat.vue'

type Platform = {
  name: string
  description: string
  criticality: 'Critical' | 'High' | 'Medium' | 'Low'
  icon: string
  kpi: { uptime: string; volume: string }
}

const platforms: Platform[] = [
  {
    name: 'Payments & Billing',
    description: 'Flux critiques, idempotence, logs et reprise sur incident.',
    criticality: 'Critical',
    icon: '💳',
    kpi: { uptime: '99.99%', volume: '120k tx/mo' },
  },
  {
    name: 'Core API',
    description: 'APIs métier, cache, performance et traçabilité des requêtes.',
    criticality: 'High',
    icon: '🧠',
    kpi: { uptime: '99.98%', volume: '2.4M req/mo' },
  },
  {
    name: 'Async & Jobs',
    description: 'Queues, retries, DLQ, observabilité et runbooks.',
    criticality: 'High',
    icon: '⚙️',
    kpi: { uptime: '99.93%', volume: '680k jobs/mo' },
  },
  {
    name: 'Storage Layer',
    description: 'Stockage S3, lifecycle, URLs signées, quotas.',
    criticality: 'Medium',
    icon: '🗄️',
    kpi: { uptime: '99.95%', volume: '4.2TB' },
  },
  {
    name: 'Deployments',
    description: 'GitHub + Cleavr, VPS/CPANEL, déploiement reproductible.',
    criticality: 'Medium',
    icon: '🚀',
    kpi: { uptime: 'N/A', volume: '38 deploys/30j' },
  },
  {
    name: 'Observability',
    description: 'KPIs, logs, alerting, postmortems et boucles d’amélioration.',
    criticality: 'Low',
    icon: '📈',
    kpi: { uptime: 'N/A', volume: 'SLO/SLA' },
  },
]

const caseStudies = [
  {
    title: 'Stabilisation d’une plateforme de vente',
    domain: 'E-commerce',
    summary: 'Objectif: réduire les incidents et améliorer la performance côté prod.',
    problem: 'Pics de charge, erreurs intermittentes et manque de visibilité sur les causes.',
    solution:
      'Mise en place d’observabilité, optimisation des hotspots, et process de déploiement sécurisé.',
    stack: ['Laravel', 'MySQL', 'Queues', 'GitHub', 'Cleavr', 'S3'],
    results: 'p95 -18%, 0 incident critique sur 30j, déploiements plus fréquents.',
    ctaLabel: 'Voir un exemple',
    ctaHref: 'https://github.com',
  },
  {
    title: 'Pipeline documentaire orienté support',
    domain: 'Ops',
    summary: 'Accès rapide à la connaissance (docs, procédures) pour accélérer le run.',
    problem: 'Docs dispersées, temps de résolution trop long, difficulté à standardiser.',
    solution:
      'Indexation documentaire + patterns de runbooks + assistant IA pour la recherche prod-first.',
    stack: ['Nuxt', 'MCP', 'MySQL', 'Indexation', 'S3'],
    results: 'Temps de recherche réduit, meilleure cohérence, support plus rapide.',
    ctaLabel: 'Découvrir Baaro',
    ctaHref: 'https://github.com',
  },
]

const howIBuild = [
  {
    icon: '🧩',
    title: 'Design',
    subtitle: 'Comprendre, cadrer, décider.',
    points: ['User stories', 'Architecture pragmatique', 'Trade-offs & risques'],
  },
  {
    icon: '🛠️',
    title: 'Build',
    subtitle: 'Livrer, tester, documenter.',
    points: ['Code review', 'Tests (Pest / Laravel)', 'DX & conventions'],
  },
  {
    icon: '🚢',
    title: 'Deploy',
    subtitle: 'Reproductible, sécurisé.',
    points: ['GitHub + Cleavr', 'VPS/CPANEL', 'Rollback & migrations'],
  },
  {
    icon: '🧯',
    title: 'Operate',
    subtitle: 'Observer, réagir, améliorer.',
    points: ['Monitoring', 'Runbooks', 'Postmortems & amélioration continue'],
  },
]
</script>

