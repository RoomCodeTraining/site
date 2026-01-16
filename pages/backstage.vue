<template>
  <Header />
  <div class="min-h-screen bg-white dark:bg-slate-950 pt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <!-- Hero Section -->
      <div class="text-center mb-12 sm:mb-16">
        <h1
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 font-display"
        >
          Back
          <span class="text-orange-500 dark:text-orange-400">stage</span>
        </h1>
        <p
          class="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto px-4"
        >
          Découvrez mon processus de développement, mon workflow et les outils
          que j'utilise au quotidien.
        </p>
      </div>

      <!-- Workflow Section -->
      <div class="mb-16 sm:mb-20">
        <div class="text-center mb-12 sm:mb-16">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 font-display"
          >
            Mon workflow de développement
          </h2>
          <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Les étapes que je suis pour transformer une idée en produit
            fonctionnel
          </p>
        </div>

        <!-- Workflow Timeline -->
        <div class="relative">
          <!-- Desktop: Horizontal Timeline -->
          <div class="hidden lg:block relative">
            <!-- Connection Line (Desktop) -->
            <div
              class="absolute top-20 left-0 right-0 h-0.5 bg-slate-200 dark:bg-slate-800"
              style="margin: 0 8%"
            ></div>

            <div class="grid grid-cols-4 gap-6 sm:gap-8 relative z-10">
              <div
                v-for="(step, index) in workflowSteps"
                :key="index"
                class="group relative workflow-step"
                :style="{ '--step-index': index }"
              >
                <!-- Connection Node (Desktop) -->
                <div
                  class="absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-orange-500 dark:bg-orange-400 rounded-full z-30"
                ></div>

                <!-- Step Card -->
                <div
                  class="relative bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 dark:hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 workflow-card mt-16 h-full flex flex-col"
                  :style="{ '--index': index }"
                >
                  <!-- Content -->
                  <div class="relative z-10 flex flex-col h-full">
                    <!-- Header with Number and Icon -->
                    <div class="flex items-start justify-between mb-6">
                      <!-- Step Number Badge -->
                      <div
                        class="w-10 h-10 bg-orange-500 text-white rounded-xl flex items-center justify-center text-lg font-bold shadow-sm"
                      >
                        {{ index + 1 }}
                      </div>

                      <!-- Icon -->
                      <div
                        class="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-3xl"
                      >
                        {{ step.icon }}
                      </div>
                    </div>

                    <!-- Title -->
                    <h3
                      class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 font-display group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300"
                    >
                      {{ step.title }}
                    </h3>

                    <!-- Description -->
                    <p
                      class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow"
                    >
                      {{ step.description }}
                    </p>

                    <!-- Details List -->
                    <div class="mb-4 space-y-2">
                      <div
                        v-for="(detail, detailIndex) in step.details"
                        :key="detailIndex"
                        class="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400"
                      >
                        <span
                          class="text-orange-500 dark:text-orange-400 mt-0.5 flex-shrink-0"
                          >•</span
                        >
                        <span>{{ detail }}</span>
                      </div>
                    </div>

                    <!-- Tools & Duration -->
                    <div
                      class="pt-4 border-t border-slate-200 dark:border-slate-800 mt-auto"
                    >
                      <div class="flex flex-wrap gap-2 mb-3">
                        <span
                          v-for="(tool, toolIndex) in step.tools"
                          :key="toolIndex"
                          class="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-md"
                        >
                          {{ tool }}
                        </span>
                      </div>
                      <div
                        class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400"
                      >
                        <span class="text-orange-500 dark:text-orange-400"
                          >⏱</span
                        >
                        <span>{{ step.duration }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <!-- Arrow Connector (Desktop) -->
                <div
                  v-if="index < workflowSteps.length - 1"
                  class="absolute top-20 -right-3 w-6 h-6 z-20"
                  style="transform: translateX(50%)"
                >
                  <svg
                    class="w-full h-full text-slate-300 dark:text-slate-700"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <!-- Mobile/Tablet: Vertical Timeline -->
          <div class="lg:hidden relative">
            <!-- Vertical Timeline Line -->
            <div
              class="absolute left-6 sm:left-8 top-0 bottom-0 w-0.5 bg-slate-200 dark:bg-slate-800 timeline-vertical-line"
            ></div>

            <div class="space-y-8 sm:space-y-12 relative z-10">
              <div
                v-for="(step, index) in workflowSteps"
                :key="index"
                class="group relative workflow-step-mobile"
                :style="{ '--step-index': index }"
              >
                <!-- Timeline Node -->
                <div
                  class="absolute left-6 sm:left-8 -translate-x-1/2 top-8 w-3 h-3 bg-orange-500 dark:bg-orange-400 rounded-full z-30"
                ></div>

                <!-- Step Card -->
                <div
                  class="ml-12 sm:ml-16 relative bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 dark:hover:border-orange-500/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 workflow-card h-full flex flex-col"
                  :style="{ '--index': index }"
                >
                  <!-- Content -->
                  <div class="relative z-10 flex flex-col h-full">
                    <!-- Header with Number and Icon -->
                    <div class="flex items-start justify-between mb-6">
                      <!-- Step Number Badge -->
                      <div
                        class="w-10 h-10 bg-orange-500 text-white rounded-xl flex items-center justify-center text-lg font-bold shadow-sm"
                      >
                        {{ index + 1 }}
                      </div>

                      <!-- Icon -->
                      <div
                        class="w-14 h-14 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center text-3xl"
                      >
                        {{ step.icon }}
                      </div>
                    </div>

                    <!-- Title -->
                    <h3
                      class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 font-display group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-colors duration-300"
                    >
                      {{ step.title }}
                    </h3>

                    <!-- Description -->
                    <p
                      class="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4 flex-grow"
                    >
                      {{ step.description }}
                    </p>

                    <!-- Details List -->
                    <div class="mb-4 space-y-2">
                      <div
                        v-for="(detail, detailIndex) in step.details"
                        :key="detailIndex"
                        class="flex items-start gap-2 text-xs text-slate-500 dark:text-slate-400"
                      >
                        <span
                          class="text-orange-500 dark:text-orange-400 mt-0.5 flex-shrink-0"
                          >•</span
                        >
                        <span>{{ detail }}</span>
                      </div>
                    </div>

                    <!-- Tools & Duration -->
                    <div
                      class="pt-4 border-t border-slate-200 dark:border-slate-800 mt-auto"
                    >
                      <div class="flex flex-wrap gap-2 mb-3">
                        <span
                          v-for="(tool, toolIndex) in step.tools"
                          :key="toolIndex"
                          class="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-md"
                        >
                          {{ tool }}
                        </span>
                      </div>
                      <div
                        class="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400"
                      >
                        <span class="text-orange-500 dark:text-orange-400"
                          >⏱</span
                        >
                        <span>{{ step.duration }}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Setup Section -->
      <div class="mb-12 sm:mb-16">
        <div class="text-center mb-8 sm:mb-12">
          <h2
            class="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 font-display"
          >
            Mon setup technique
          </h2>
          <p class="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            L'équipement et les outils que j'utilise pour créer et développer
          </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          <!-- Hardware -->
          <div
            class="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 dark:hover:border-orange-500/30 transition-all duration-300 hover:shadow-xl"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-12 h-12 bg-gradient-to-br from-orange-500/10 to-orange-500/5 dark:from-orange-500/20 dark:to-orange-500/10 rounded-xl flex items-center justify-center"
              >
                <span class="text-2xl">💻</span>
              </div>
              <h3
                class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display"
              >
                Hardware
              </h3>
            </div>
            <div class="space-y-3">
              <div
                v-for="item in hardware"
                :key="item.name"
                class="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
              >
                <div>
                  <h4
                    class="font-semibold text-slate-900 dark:text-white text-sm sm:text-base"
                  >
                    {{ item.name }}
                  </h4>
                  <p
                    class="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1"
                  >
                    {{ item.spec }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Software -->
          <div
            class="bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 dark:hover:border-orange-500/30 transition-all duration-300 hover:shadow-xl"
          >
            <div class="flex items-center gap-3 mb-6">
              <div
                class="w-12 h-12 bg-gradient-to-br from-orange-500/10 to-orange-500/5 dark:from-orange-500/20 dark:to-orange-500/10 rounded-xl flex items-center justify-center"
              >
                <span class="text-2xl">🛠️</span>
              </div>
              <h3
                class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display"
              >
                Software
              </h3>
            </div>
            <div class="space-y-3">
              <div
                v-for="item in software"
                :key="item.name"
                class="flex items-center justify-between p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors duration-200"
              >
                <div>
                  <h4
                    class="font-semibold text-slate-900 dark:text-white text-sm sm:text-base"
                  >
                    {{ item.name }}
                  </h4>
                  <p
                    class="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-1"
                  >
                    {{ item.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

const workflowSteps = [
  {
    icon: '💡',
    title: 'Conception',
    description:
      "Analyse approfondie des besoins utilisateurs et définition de l'architecture technique",
    details: [
      'Analyse des besoins et user stories',
      'Architecture technique et choix technologiques',
      'Wireframes et maquettes fonctionnelles',
      'Planification du projet et estimation',
    ],
    tools: ['Figma', 'Notion', 'Miro', 'Draw.io'],
    duration: '1-2 semaines',
  },
  {
    icon: '⚡',
    title: 'Développement',
    description:
      'Implémentation avec code propre, bonnes pratiques et architecture scalable',
    details: [
      "Setup de l'environnement de développement",
      'Développement itératif avec code review',
      'Respect des standards et conventions',
      'Documentation du code en temps réel',
    ],
    tools: ['VS Code', 'Cursor', 'Git', 'ESLint', 'Prettier'],
    duration: '2-8 semaines',
  },
  {
    icon: '🔍',
    title: 'Test & Debug',
    description:
      'Tests automatisés avec Pest, optimisation des performances et correction des bugs',
    details: [
      "Tests unitaires et d'intégration avec Pest",
      'Tests de fonctionnalités Laravel',
      'Optimisation des performances',
      'Debug avec Laravel Telescope et Debugbar',
    ],
    tools: [
      'Pest',
      'PHPUnit',
      'Laravel Dusk',
      'Laravel Telescope',
      'Laravel Debugbar',
    ],
    duration: '1-2 semaines',
  },
  {
    icon: '🚀',
    title: 'Déploiement',
    description:
      'Mise en production avec GitHub, Cleavr, gestion des serveurs CPANEL/VPS et stockage S3',
    details: [
      'Intégration GitHub pour le versioning',
      'Déploiement automatisé via Cleavr',
      'Gestion des serveurs CPANEL et VPS',
      'Stockage de fichiers avec AWS S3',
      'Monitoring et maintenance continue',
    ],
    tools: ['GitHub', 'Cleavr', 'CPANEL', 'VPS', 'S3'],
    duration: 'Continue',
  },
]

const hardware = [
  { name: 'Ordinateur', spec: 'MacBook M3' },
  { name: 'Écrans', spec: 'Dual 27" 4K' },
  { name: 'Clavier', spec: 'Logitech MX Keys' },
  { name: 'Souris', spec: 'Logitech MX Master 3' },
]

const software = [
  { name: 'Éditeur', description: 'VS Code + Cursor' },
  { name: 'Terminal', description: 'iTerm2 + Oh My Zsh' },
  { name: 'Design', description: 'Figma + Adobe Suite' },
  { name: 'Productivité', description: 'Notion + Trello' },
]
</script>

<style scoped>
/* Animations d'entrée premium */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(40px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes slideInLine {
  from {
    width: 0;
    opacity: 0;
  }
  to {
    width: 100%;
    opacity: 1;
  }
}

@keyframes glowPulse {
  0%,
  100% {
    opacity: 0.3;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.05);
  }
}

@keyframes lineFlow {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 0;
  }
}

@keyframes nodePulse {
  0%,
  100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.8;
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Animation des cartes */
.workflow-step {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

.workflow-step:nth-child(1) {
  animation-delay: 0.1s;
}
.workflow-step:nth-child(2) {
  animation-delay: 0.2s;
}
.workflow-step:nth-child(3) {
  animation-delay: 0.3s;
}
.workflow-step:nth-child(4) {
  animation-delay: 0.4s;
}

/* Timeline verticale mobile */
.workflow-step-mobile {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
}

.workflow-step-mobile:nth-child(1) {
  animation-delay: 0.1s;
}
.workflow-step-mobile:nth-child(2) {
  animation-delay: 0.2s;
}
.workflow-step-mobile:nth-child(3) {
  animation-delay: 0.3s;
}
.workflow-step-mobile:nth-child(4) {
  animation-delay: 0.4s;
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .workflow-line,
  .workflow-arrow {
    display: none;
  }
}

/* Amélioration de l'accessibilité */
@media (prefers-reduced-motion: reduce) {
  .workflow-step,
  .workflow-step-mobile {
    animation: none;
    opacity: 1;
  }
}
</style>
