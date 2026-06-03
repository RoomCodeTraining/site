<template>
  <Header />
  <main class="pt-20">
    <!-- Hero -->
    <section class="relative overflow-hidden">
      <div
        class="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(249,115,22,0.11),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(249,115,22,0.07),transparent)]"
        aria-hidden="true"
      />
      <div
        class="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.2] bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_55%,transparent_100%)]"
        aria-hidden="true"
      />

      <div class="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div class="order-2 lg:order-1 text-center lg:text-left">
            <p
              class="inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-orange-700 dark:text-orange-300 bg-orange-500/10 border border-orange-500/15"
            >
              <span class="h-1.5 w-1.5 rounded-full bg-orange-500" aria-hidden="true" />
              Tech Ops · Fullstack
            </p>

            <h1
              class="mt-6 text-[2rem] sm:text-4xl lg:text-[2.65rem] xl:text-[3.25rem] font-bold text-slate-900 dark:text-white font-display leading-[1.08] tracking-tight"
            >
              Je construis et j’exploite
              <span class="text-orange-500 dark:text-orange-400"> des systèmes en production</span>
            </h1>

            <p class="mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Da Sié Roger — du delivery au run : apps fiables, déploiements maîtrisés, prod observable.
            </p>

            <div class="mt-9 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <Button variant="primary" to="/realisations" size="lg">
                Voir les projets
                <template #right><span aria-hidden="true">→</span></template>
              </Button>
              <Button variant="ghost" to="/contact" size="lg">
                Me contacter
              </Button>
            </div>

            <div
              class="mt-10 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap justify-center lg:justify-start gap-x-5 gap-y-2 text-xs font-medium text-slate-500 dark:text-slate-400"
            >
              <span v-for="tag in stack" :key="tag">{{ tag }}</span>
            </div>
          </div>

          <div class="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div class="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px]">
              <div
                class="absolute inset-0 rounded-full bg-gradient-to-br from-orange-400/20 to-transparent blur-3xl scale-110"
                aria-hidden="true"
              />
              <div
                class="relative aspect-square rounded-full overflow-hidden ring-1 ring-slate-200/90 dark:ring-slate-700/90 shadow-xl shadow-slate-900/5 dark:shadow-black/30"
              >
                <NuxtImg
                  src="/images/hero.png"
                  width="720"
                  height="720"
                  fit="cover"
                  format="webp"
                  quality="85"
                  sizes="(max-width: 640px) 280px, (max-width: 1024px) 320px, 360px"
                  alt="Da Sié Roger"
                  class="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Expertise -->
    <section class="border-t border-slate-200/80 dark:border-slate-800/80">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <header class="max-w-2xl">
          <p class="text-[11px] font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400">
            Expertise
          </p>
          <h2 class="mt-3 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display tracking-tight">
            Concevoir, livrer, opérer
          </h2>
          <p class="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">
            Une boucle unique — le run fait partie du produit dès le départ.
          </p>
        </header>

        <div class="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          <article
            v-for="cap in capabilities"
            :key="cap.title"
            class="group rounded-2xl border border-slate-200/90 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm p-6 sm:p-7 transition-all duration-300 hover:border-orange-500/35 hover:shadow-lg hover:shadow-orange-500/5 hover:-translate-y-0.5"
          >
            <div
              class="h-9 w-9 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center text-sm font-bold font-display"
            >
              {{ cap.step }}
            </div>
            <h3 class="mt-5 text-lg font-bold text-slate-900 dark:text-white font-display">
              {{ cap.title }}
            </h3>
            <p class="mt-2 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {{ cap.description }}
            </p>
          </article>
        </div>
      </div>
    </section>

    <!-- Projets -->
    <section
      id="work"
      class="border-t border-slate-200/80 dark:border-slate-800/80 bg-slate-50/50 dark:bg-slate-950/30"
    >
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <header class="max-w-2xl">
            <p class="text-[11px] font-semibold tracking-widest uppercase text-slate-500 dark:text-slate-400">
              Projets
            </p>
            <h2 class="mt-3 text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display tracking-tight">
              Réalisations récentes
            </h2>
            <p class="mt-3 text-slate-600 dark:text-slate-400 text-sm sm:text-base">
              Produits livrés et tenus en production.
            </p>
          </header>
          <NuxtLink
            to="/realisations"
            class="inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 dark:text-orange-400 hover:gap-2.5 transition-all shrink-0"
          >
            Tout voir
            <span aria-hidden="true">→</span>
          </NuxtLink>
        </div>

        <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          <NuxtLink
            v-for="p in featuredProjects"
            :key="p.slug"
            :to="`/realisations/${p.slug}`"
            class="group block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-50 dark:focus-visible:ring-offset-slate-950 rounded-2xl"
          >
            <ProjectPreviewCard :realisation="p" />
          </NuxtLink>
        </div>

        <div class="mt-10 flex justify-center sm:justify-start">
          <Button variant="ghost" to="/realisations" size="md">
            Voir toutes les réalisations
            <template #right><span aria-hidden="true">→</span></template>
          </Button>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section id="contact" class="border-t border-slate-200/80 dark:border-slate-800/80">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div
          class="relative overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-orange-500 to-orange-600 px-6 sm:px-12 py-12 sm:py-14"
        >
          <div
            class="pointer-events-none absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.35),transparent_50%)]"
            aria-hidden="true"
          />

          <div class="relative max-w-xl">
            <h2 class="text-2xl sm:text-3xl font-bold text-white font-display tracking-tight">
              Un projet en tête ?
            </h2>
            <p class="mt-3 text-orange-50/90 text-sm sm:text-base leading-relaxed">
              Discutons produit, plateforme ou run — réponse sous 24h en semaine.
            </p>

            <div class="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                :href="linkedinUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex h-11 items-center justify-center px-5 text-sm font-semibold rounded-xl bg-white text-orange-600 hover:bg-orange-50 transition-colors"
              >
                LinkedIn
              </a>
              <a
                :href="whatsappUrl"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex h-11 items-center justify-center px-5 text-sm font-semibold rounded-xl bg-white text-orange-600 hover:bg-orange-50 transition-colors"
              >
                WhatsApp
              </a>
              <NuxtLink
                to="/contact"
                class="inline-flex h-11 items-center justify-center px-5 text-sm font-semibold rounded-xl text-white ring-1 ring-inset ring-white/40 hover:bg-white/10 transition-colors"
              >
                Coordonnées complètes
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Button from '~/components/ui/Button.vue'
import ProjectPreviewCard from '~/components/home/ProjectPreviewCard.vue'
import { allRealisations } from '~/data/realisations'

const linkedinUrl = 'https://www.linkedin.com/in/dasieroger/'
const whatsappUrl = 'https://wa.me/225767476595'

const stack = ['Laravel', 'Nuxt', 'MySQL', 'GitHub · Cleavr', 'Pest', 'S3']

const capabilities = [
  {
    step: '01',
    title: 'Concevoir',
    description: 'Architecture pragmatique, risques identifiés, scope clair avant de coder.',
  },
  {
    step: '02',
    title: 'Livrer',
    description: 'Fullstack, tests Pest, CI/CD et déploiements reproductibles sur VPS ou CPANEL.',
  },
  {
    step: '03',
    title: 'Opérer',
    description: 'Monitoring, incidents, runbooks — la prod reste stable et compréhensible.',
  },
]

const featuredProjects = computed(() => {
  const priority = ['delyo', 'food-pro', 'welink-ci', 'baaro-archives', 'ivoire-stock']
  const picked = priority
    .map(slug => allRealisations.find(p => p.slug === slug))
    .filter(Boolean)
  const rest = allRealisations.filter(p => !priority.includes(p.slug))
  return [...picked, ...rest].slice(0, 6) as typeof allRealisations
})
</script>
