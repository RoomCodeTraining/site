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

        <!-- Workflow Timeline Premium -->
        <div class="relative">
          <!-- Animated Background Glow -->
          <div class="absolute inset-0 bg-gradient-to-r from-orange-500/5 via-transparent to-orange-500/5 dark:from-orange-500/10 dark:via-transparent dark:to-orange-500/10 rounded-3xl blur-3xl -z-10 workflow-glow"></div>
          
          <!-- Connection Line with Animation (Desktop) -->
          <div class="hidden lg:block absolute top-32 left-0 right-0 h-1 workflow-line" style="margin: 0 6%">
            <div class="h-full bg-gradient-to-r from-transparent via-orange-500/30 to-transparent dark:via-orange-400/30 relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-r from-transparent via-orange-500 to-transparent dark:via-orange-400 workflow-line-glow"></div>
            </div>
          </div>

          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10"
          >
            <div
              v-for="(step, index) in workflowSteps"
              :key="index"
              class="group relative workflow-step"
              :style="{ '--step-index': index }"
            >
              <!-- Connection Node (Desktop) -->
              <div class="hidden lg:block absolute top-32 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 z-30">
                <div class="w-full h-full bg-gradient-to-br from-orange-500 to-orange-600 dark:from-orange-400 dark:to-orange-500 rounded-full shadow-lg shadow-orange-500/50 dark:shadow-orange-400/50 workflow-node">
                  <div class="absolute inset-0 bg-orange-500 dark:bg-orange-400 rounded-full animate-ping opacity-75"></div>
                </div>
              </div>
              
              <!-- Step Card with Glassmorphism -->
              <div
                class="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 sm:p-10 border border-slate-200/50 dark:border-slate-800/50 hover:border-orange-500/50 dark:hover:border-orange-500/30 transition-all duration-700 hover:shadow-2xl hover:shadow-orange-500/20 dark:hover:shadow-orange-500/10 hover:-translate-y-4 overflow-hidden workflow-card"
                :style="{ '--index': index }"
              >
                <!-- Animated Gradient Background -->
                <div class="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/0 group-hover:from-orange-500/10 group-hover:via-orange-500/5 group-hover:to-orange-500/0 dark:group-hover:from-orange-500/20 dark:group-hover:via-orange-500/10 dark:group-hover:to-orange-500/0 transition-all duration-700 rounded-3xl workflow-bg-gradient"></div>
                
                <!-- Animated Light Effect -->
                <div class="absolute -inset-1 bg-gradient-to-r from-orange-500/0 via-orange-500/20 to-orange-500/0 dark:via-orange-400/20 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 workflow-light"></div>
                
                <!-- Content -->
                <div class="relative z-10">
                  <!-- Step Number Badge Premium -->
                  <div class="absolute -top-5 -right-5 w-16 h-16 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 dark:from-orange-400 dark:via-orange-500 dark:to-orange-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-2xl shadow-orange-500/50 dark:shadow-orange-400/50 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 workflow-badge">
                    <div class="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
                    <span class="relative z-10">{{ index + 1 }}</span>
                  </div>
                  
                  <!-- Icon Container Premium -->
                  <div
                    class="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-orange-500/15 via-orange-500/10 to-orange-500/5 dark:from-orange-500/25 dark:via-orange-500/15 dark:to-orange-500/10 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 relative overflow-hidden workflow-icon-container"
                  >
                    <!-- Animated Gradient Ring -->
                    <div class="absolute inset-0 rounded-3xl border-2 border-orange-500/20 dark:border-orange-400/20 group-hover:border-orange-500/50 dark:group-hover:border-orange-400/50 transition-all duration-700"></div>
                    
                    <!-- Pulsing Background -->
                    <div class="absolute inset-0 bg-gradient-to-br from-orange-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl workflow-icon-bg"></div>
                    
                    <!-- Icon with Glow -->
                    <span class="text-5xl sm:text-6xl relative z-10 group-hover:scale-110 group-hover:drop-shadow-[0_0_20px_rgba(249,115,22,0.5)] transition-all duration-700 workflow-icon">{{ step.icon }}</span>
                  </div>
                  
                  <!-- Title with Gradient -->
                  <h3
                    class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4 font-display group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-orange-600 dark:group-hover:from-orange-400 dark:group-hover:to-orange-500 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500 workflow-title"
                  >
                    {{ step.title }}
                  </h3>
                  
                  <!-- Description -->
                  <p
                    class="text-slate-600 dark:text-slate-400 text-base sm:text-lg leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors duration-500 workflow-description"
                  >
                    {{ step.description }}
                  </p>
                </div>
                
                <!-- Decorative Elements -->
                <div class="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-orange-500/10 via-orange-500/5 to-transparent dark:from-orange-500/20 dark:via-orange-500/10 dark:to-transparent rounded-tl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 workflow-corner"></div>
                
                <!-- Top Left Accent -->
                <div class="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-orange-500/5 to-transparent rounded-br-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              
              <!-- Arrow Connector Premium (Desktop) -->
              <div
                v-if="index < workflowSteps.length - 1"
                class="hidden lg:block absolute top-32 -right-6 w-12 h-12 z-20 workflow-arrow"
                style="transform: translateX(50%)"
              >
                <div class="relative w-full h-full">
                  <svg class="w-full h-full text-orange-500/40 dark:text-orange-400/40 group-hover:text-orange-500 dark:group-hover:text-orange-400 transition-all duration-500 drop-shadow-lg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
                  </svg>
                  <div class="absolute inset-0 bg-orange-500/20 dark:bg-orange-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
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
  0%, 100% {
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
  0%, 100% {
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
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* Animation du glow de fond */
.workflow-glow {
  animation: glowPulse 4s ease-in-out infinite;
}

/* Animation de la ligne de connexion */
.workflow-line {
  animation: slideInLine 1.5s ease-out 0.6s forwards;
  width: 0;
  opacity: 0;
}

.workflow-line-glow {
  animation: lineFlow 3s ease-in-out infinite;
  width: 30%;
  height: 100%;
}

/* Animation des nœuds de connexion */
.workflow-node {
  animation: nodePulse 2s ease-in-out infinite;
  animation-delay: calc(var(--step-index) * 0.2s);
}

/* Animation des cartes */
.workflow-step {
  animation: fadeInUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
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

/* Animation des cartes au survol */
.workflow-card {
  position: relative;
}

.workflow-card::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 1.5rem;
  padding: 2px;
  background: linear-gradient(45deg, transparent, rgba(249, 115, 22, 0.5), transparent);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
  opacity: 0;
  transition: opacity 0.5s;
}

.workflow-card:hover::before {
  opacity: 1;
  animation: shimmer 2s linear infinite;
}

/* Animation du badge */
.workflow-badge {
  background-size: 200% 200%;
  background-image: linear-gradient(45deg, #f97316, #ea580c, #f97316);
  background-position: 0% 50%;
}

.group:hover .workflow-badge {
  animation: shimmer 2s ease-in-out infinite;
  background-position: 100% 50%;
}

/* Animation de l'icône */
.workflow-icon-container {
  position: relative;
}

.workflow-icon-bg {
  animation: float 3s ease-in-out infinite;
  animation-delay: calc(var(--index) * 0.2s);
}

.group:hover .workflow-icon {
  filter: drop-shadow(0 0 20px rgba(249, 115, 22, 0.6));
}

/* Animation du titre */
.workflow-title {
  position: relative;
}

/* Animation de la flèche */
.workflow-arrow {
  transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
}

.group:hover .workflow-arrow {
  transform: translateX(50%) translateX(4px);
}

/* Animation du coin décoratif */
.workflow-corner {
  animation: float 4s ease-in-out infinite;
  animation-delay: calc(var(--index) * 0.3s);
}

/* Effets de profondeur */
.workflow-card {
  transform-style: preserve-3d;
  perspective: 1000px;
}

.group:hover .workflow-card {
  transform: translateY(-16px) rotateX(2deg);
}

/* Amélioration des transitions */
.workflow-bg-gradient {
  transition: all 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

.workflow-light {
  transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1);
}

/* Responsive adjustments */
@media (max-width: 1024px) {
  .workflow-line,
  .workflow-node,
  .workflow-arrow {
    display: none;
  }
}

/* Amélioration de l'accessibilité */
@media (prefers-reduced-motion: reduce) {
  .workflow-step,
  .workflow-line,
  .workflow-node,
  .workflow-glow,
  .workflow-line-glow,
  .workflow-icon-bg,
  .workflow-corner {
    animation: none;
  }
  
  .group:hover .workflow-card {
    transform: translateY(-8px);
  }
}
</style>
