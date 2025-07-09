<template>
  <section class="relative min-h-[70vh] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden pt-20">
    <!-- Background Image with Gradient Overlay -->
    <div class="absolute inset-0">
      <!-- Background image with modern gradient overlay -->
      <img
        src="~/assets/images/61591337.jpg"
        alt="Roger DA Background"
        class="absolute inset-0 w-full h-full object-cover object-center opacity-15"
      />
      <div class="absolute inset-0 bg-gradient-to-br from-slate-900/85 via-purple-900/80 to-slate-900/85 z-10"></div>

      <!-- Additional gradient layers for depth -->
      <div class="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent z-20"></div>
      <div class="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-transparent to-purple-900/50 z-20"></div>
    </div>

    <!-- Animated Background Elements -->
    <div class="absolute inset-0 z-10">
      <!-- Floating geometric shapes -->
      <div class="absolute top-16 left-8 w-24 h-24 border border-blue-400/20 rounded-lg rotate-12 animate-float"></div>
      <div class="absolute top-32 right-16 w-20 h-20 border border-purple-400/20 rounded-full animate-float-delayed"></div>
      <div class="absolute bottom-32 left-16 w-32 h-32 border border-pink-400/20 rotate-45 animate-float-slow"></div>

      <!-- Gradient orbs with blur -->
      <div class="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

      <!-- Animated grid -->
      <div class="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] animate-grid"></div>

      <!-- Particle system -->
      <div class="particles-container">
        <div v-for="i in 30" :key="i" class="particle" :style="getParticleStyle(i)"></div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="relative z-20 flex items-center justify-center min-h-[70vh] px-4 sm:px-6 lg:px-8 py-16">
      <div class="max-w-4xl mx-auto text-center">

        <!-- Hero Badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-6 animate-fade-in-down">
          <div class="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
          <span class="text-xs text-white/80">Disponible pour de nouveaux projets</span>
        </div>

        <!-- Main Heading -->
        <div class="mb-6">
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-4 leading-tight">
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-purple-200 animate-gradient-x">
              Roger DA
            </span>
          </h1>

          <div class="relative">
            <h2 class="text-xl sm:text-2xl lg:text-3xl font-bold text-white/90 mb-3">
              Développeur Full Stack & Formateur
            </h2>
            <div class="absolute -top-1 -right-1 text-xl animate-bounce">🚀</div>
          </div>

          <p class="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Créateur d'expériences digitales et mentor passionné
          </p>
        </div>
        <!-- Compact stats -->
        <div class="flex flex-wrap justify-center gap-6 mb-8">
          <div class="text-center group">
            <div class="text-2xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">
              <span class="counter" data-target="50">0</span>+
            </div>
            <div class="text-white/60 text-xs">Projets</div>
          </div>
          <div class="text-center group">
            <div class="text-2xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">
              <span class="counter" data-target="5">0</span>+
            </div>
            <div class="text-white/60 text-xs">Années</div>
          </div>
          <div class="text-center group">
            <div class="text-2xl font-bold text-white mb-1 group-hover:scale-110 transition-transform duration-300">
              <span class="counter" data-target="100">0</span>+
            </div>
            <div class="text-white/60 text-xs">Étudiants</div>
          </div>
        </div>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a
            href="#formation"
            class="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <span class="relative z-10 flex items-center gap-2">
              <span class="text-lg">🎯</span>
              <span>Découvrir la Formation</span>
            </span>
            <div class="absolute inset-0 bg-gradient-to-r from-blue-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
          </a>

          <a
            href="#realisations"
            class="group px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transform hover:scale-105 hover:-translate-y-1 transition-all duration-300"
          >
            <span class="flex items-center gap-2">
              <span class="text-lg">💼</span>
              <span>Voir mes Projets</span>
            </span>
          </a>
        </div>

        <!-- Social Links -->
        <div class="flex items-center justify-center gap-4">
          <a
            href="https://www.linkedin.com/in/dasieroger/"
            target="_blank"
            class="group p-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl hover:bg-blue-600 hover:border-blue-500 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-blue-500/25"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>

          <a
            href="https://github.com/roomdada"
            target="_blank"
            class="group p-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl hover:bg-gray-800 hover:border-gray-700 transform hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-lg hover:shadow-gray-500/25"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
            </svg>
          </a>
        </div>

        <!-- Scroll indicator -->
        <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div class="flex flex-col items-center gap-1 text-white/60">
            <span class="text-xs font-medium">Scroll</span>
            <div class="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center relative">
              <div class="w-1 h-2 bg-white/60 rounded-full mt-1 animate-scroll-indicator"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'

// Particle generation
const getParticleStyle = (index) => {
  const size = Math.random() * 4 + 2
  const left = Math.random() * 100
  const animationDelay = Math.random() * 20
  const animationDuration = Math.random() * 10 + 10

  return {
    width: `${size}px`,
    height: `${size}px`,
    left: `${left}%`,
    animationDelay: `${animationDelay}s`,
    animationDuration: `${animationDuration}s`
  }
}

// Counter animation
onMounted(() => {
  const counters = document.querySelectorAll('.counter')

  counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'))
    const increment = target / 100

    const updateCounter = () => {
      const current = parseInt(counter.innerText)
      if (current < target) {
        counter.innerText = Math.ceil(current + increment)
        setTimeout(updateCounter, 20)
      } else {
        counter.innerText = target
      }
    }

    updateCounter()
  })
})
</script>

<style scoped>
/* Floating animations */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
}

@keyframes float-delayed {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-15px) rotate(-5deg); }
}

@keyframes float-slow {
  0%, 100% { transform: translateY(0px) rotate(45deg); }
  50% { transform: translateY(-25px) rotate(50deg); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float-delayed 8s ease-in-out infinite;
}

.animate-float-slow {
  animation: float-slow 10s ease-in-out infinite;
}

/* Grid animation */
@keyframes grid {
  0% { transform: translate(0, 0); }
  100% { transform: translate(50px, 50px); }
}

.animate-grid {
  animation: grid 20s linear infinite;
}

/* Particle system */
.particles-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.particle {
  position: absolute;
  background: linear-gradient(135deg, #60a5fa, #a78bfa, #f472b6);
  border-radius: 50%;
  opacity: 0.6;
  animation: particle-float linear infinite;
}

@keyframes particle-float {
  0% {
    transform: translateY(100vh) rotate(0deg);
    opacity: 0;
  }
  10% {
    opacity: 0.6;
  }
  90% {
    opacity: 0.6;
  }
  100% {
    transform: translateY(-100px) rotate(360deg);
    opacity: 0;
  }
}

/* Gradient text animation */
@keyframes gradient-x {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient-x {
  background-size: 200% 200%;
  animation: gradient-x 3s ease infinite;
}

/* Scroll indicator animation */
@keyframes scroll-indicator {
  0%, 100% { transform: translateY(0); opacity: 1; }
  50% { transform: translateY(10px); opacity: 0.5; }
}

.animate-scroll-indicator {
  animation: scroll-indicator 2s ease-in-out infinite;
}

/* Fade in animations */
@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-down {
  animation: fade-in-down 1s ease-out;
}

/* Enhanced hover effects */
.group:hover {
  transform: translateY(-2px);
}

/* Glassmorphism effect */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #60a5fa, #a78bfa);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
}
</style>
