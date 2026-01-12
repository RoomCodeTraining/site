<template>
  <section class="py-16 lg:py-24 bg-slate-900 dark:bg-slate-950 text-white relative" id="backstage">
    <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-12">
        <span class="text-slate-400 text-xs font-semibold tracking-wider uppercase mb-3 block">
          Mon processus et mon setup
        </span>
        <h2 class="text-4xl sm:text-5xl font-bold text-white relative inline-block font-display">
          Backstage
          <div class="absolute -bottom-2 left-0 w-12 h-0.5 bg-white rounded-full"></div>
        </h2>
      </div>

      <div class="mt-12">
        <!-- Workflow simplifié -->
        <div class="mb-16">
          <h3
            class="text-xl sm:text-2xl font-bold mb-8 text-center font-display"
          >
            Mon workflow de développement
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div
              v-for="(step, index) in workflowSteps"
              :key="index"
              class="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-orange-500/50 transition-all duration-200 hover:-translate-y-1"
            >
              <div
                class="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center mb-4"
              >
                <span class="text-2xl">{{ step.icon }}</span>
              </div>
              <h4 class="text-lg font-semibold mb-2 font-display">
                {{ step.title }}
              </h4>
              <p class="text-slate-300 text-sm">{{ step.description }}</p>
            </div>
          </div>
        </div>

        <!-- Setup technique simplifié -->
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <!-- Hardware -->
          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h3 class="text-xl font-bold mb-6 flex items-center gap-3 font-display">
              <span class="text-2xl">💻</span>
              Hardware
            </h3>
            <div class="space-y-3">
              <div
                v-for="item in hardware"
                :key="item.name"
                class="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg"
              >
                <div>
                  <h4 class="font-semibold text-sm">{{ item.name }}</h4>
                  <p class="text-slate-400 text-xs">{{ item.spec }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Software -->
          <div class="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h3 class="text-xl font-bold mb-6 flex items-center gap-3 font-display">
              <span class="text-2xl">🛠️</span>
              Software
            </h3>
            <div class="space-y-3">
              <div
                v-for="item in software"
                :key="item.name"
                class="flex items-center justify-between p-3 bg-slate-700/30 rounded-lg"
              >
                <div>
                  <h4 class="font-semibold text-sm">{{ item.name }}</h4>
                  <p class="text-slate-400 text-xs">{{ item.description }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const workflowSteps = [
  {
    icon: '💡',
    title: 'Conception',
    description: 'Analyse des besoins et architecture',
  },
  {
    icon: '⚡',
    title: 'Développement',
    description: 'Code propre et bonnes pratiques',
  },
  {
    icon: '🔍',
    title: 'Test & Debug',
    description: 'Tests et optimisation',
  },
  {
    icon: '🚀',
    title: 'Déploiement',
    description: 'CI/CD et monitoring',
  },
]

const hardware = [
  { name: 'Ordinateur', spec: 'MacBook Pro M2' },
  { name: 'Écrans', spec: 'Dual 27" 4K' },
  { name: 'Clavier', spec: 'Logitech MX Keys' },
  { name: 'Souris', spec: 'Logitech MX Master 3' },
]

const software = [
  { name: 'Éditeur', description: 'VS Code + Extensions' },
  { name: 'Terminal', description: 'iTerm2 + Oh My Zsh' },
  { name: 'Design', description: 'Figma + Adobe Suite' },
  { name: 'Productivité', description: 'Notion + Trello' },
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
  animation-delay: 0.2s;
}
.grid > div:nth-child(3) {
  animation-delay: 0.3s;
}
.grid > div:nth-child(4) {
  animation-delay: 0.4s;
}
</style>
