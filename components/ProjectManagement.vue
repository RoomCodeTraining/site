<template>
  <section class="py-16 lg:py-24 bg-white dark:bg-slate-950" id="gestion-projets">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-12 text-center">
        <span class="text-slate-400 text-xs font-semibold tracking-wider uppercase mb-3 block">
          Méthodologie et pratiques
        </span>
        <h2 class="text-4xl sm:text-5xl font-bold text-slate-900 dark:text-white relative inline-block font-display mb-4">
          Gestion de Projets & Exploitation
          <div class="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-orange-500 rounded-full"></div>
        </h2>
        <p class="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mt-6">
          Comment j'organise mon travail en tant que développeur et comment je gère l'exploitation de mes applications.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mt-12">
        <!-- Gestion de Projets -->
        <div class="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 bg-orange-500/10 dark:bg-orange-500/20 rounded-xl flex items-center justify-center">
              <span class="text-2xl">📋</span>
            </div>
            <h3 class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display">
              Gestion de Projets
            </h3>
          </div>
          
          <p class="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            En tant que développeur, j'adopte une approche structurée pour gérer mes projets, de la planification à la livraison.
          </p>

          <div class="space-y-4 mb-8">
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span class="text-white text-xs font-bold">1</span>
              </div>
              <div>
                <h4 class="font-semibold text-slate-900 dark:text-white mb-1">Planification & Roadmap</h4>
                <p class="text-sm text-slate-600 dark:text-slate-400">
                  Définition des objectifs, backlog priorisé et sprints organisés
                </p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span class="text-white text-xs font-bold">2</span>
              </div>
              <div>
                <h4 class="font-semibold text-slate-900 dark:text-white mb-1">Suivi & Communication</h4>
                <p class="text-sm text-slate-600 dark:text-slate-400">
                  Mises à jour régulières, documentation et collaboration en équipe
                </p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span class="text-white text-xs font-bold">3</span>
              </div>
              <div>
                <h4 class="font-semibold text-slate-900 dark:text-white mb-1">Qualité & Tests</h4>
                <p class="text-sm text-slate-600 dark:text-slate-400">
                  Code review, tests automatisés et validation continue
                </p>
              </div>
            </div>
          </div>

          <!-- Outils de gestion de projets -->
          <div>
            <h4 class="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span class="text-lg">🛠️</span>
              Outils utilisés
            </h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tool in projectTools"
                :key="tool"
                class="px-3 py-1.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg border border-slate-200 dark:border-slate-700"
              >
                {{ tool }}
              </span>
            </div>
          </div>
        </div>

        <!-- Gestion de l'Exploitation -->
        <div class="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800">
          <div class="flex items-center gap-3 mb-6">
            <div class="w-12 h-12 bg-orange-500/10 dark:bg-orange-500/20 rounded-xl flex items-center justify-center">
              <span class="text-2xl">🚀</span>
            </div>
            <h3 class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display">
              Exploitation
            </h3>
          </div>
          
          <p class="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
            Je m'assure que mes applications sont déployées, surveillées et maintenues de manière optimale en production.
          </p>

          <div class="space-y-4 mb-8">
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span class="text-white text-xs font-bold">1</span>
              </div>
              <div>
                <h4 class="font-semibold text-slate-900 dark:text-white mb-1">CI/CD & Déploiement</h4>
                <p class="text-sm text-slate-600 dark:text-slate-400">
                  Automatisation des déploiements et pipelines de livraison continue
                </p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span class="text-white text-xs font-bold">2</span>
              </div>
              <div>
                <h4 class="font-semibold text-slate-900 dark:text-white mb-1">Monitoring & Alertes</h4>
                <p class="text-sm text-slate-600 dark:text-slate-400">
                  Surveillance des performances, logs et alertes proactives
                </p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <div class="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span class="text-white text-xs font-bold">3</span>
              </div>
              <div>
                <h4 class="font-semibold text-slate-900 dark:text-white mb-1">Sécurité & Maintenance</h4>
                <p class="text-sm text-slate-600 dark:text-slate-400">
                  Mises à jour de sécurité, sauvegardes et plan de reprise
                </p>
              </div>
            </div>
          </div>

          <!-- Outils d'exploitation -->
          <div>
            <h4 class="font-semibold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
              <span class="text-lg">🛠️</span>
              Outils utilisés
            </h4>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tool in opsTools"
                :key="tool"
                class="px-3 py-1.5 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-medium rounded-lg border border-slate-200 dark:border-slate-700"
              >
                {{ tool }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projectTools = [
  'GitHub Projects',
  'Jira',
  'Notion',
  'Trello',
  'Linear',
  'Figma',
]

const opsTools = [
  'GitHub Actions',
  'Docker',
  'AWS',
  'Vercel',
  'Sentry',
  'Datadog',
]
</script>

<style scoped>
/* Animation d'entrée */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.grid > div {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

.grid > div:nth-child(1) {
  animation-delay: 0.1s;
}

.grid > div:nth-child(2) {
  animation-delay: 0.3s;
}
</style>
