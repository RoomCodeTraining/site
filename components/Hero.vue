<template>
<div class="min-h-[60vh] bg-[#fafafa] -mt-12 pt-16 sm:-mt-16 sm:pt-20 lg:-mt-16 lg:pt-24 relative overflow-hidden flex items-center">
  <!-- Formes SVG modernes -->
  <div class="absolute inset-0 overflow-hidden">
    <!-- Blobs animés -->
    <div class="absolute top-0 -left-4 w-72 h-72 bg-gradient-to-br from-[#4F46E5]/20 to-[#818CF8]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
    <div class="absolute top-0 -right-4 w-72 h-72 bg-gradient-to-br from-[#EC4899]/20 to-[#F472B6]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
    <div class="absolute -bottom-8 left-20 w-72 h-72 bg-gradient-to-br from-[#10B981]/20 to-[#34D399]/20 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

    <!-- Particules de nouvelle année -->
    <div class="particles-container">
      <div class="particle" v-for="n in 20" :key="n"></div>
    </div>

    <!-- Grille subtile -->
    <div class="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
  </div>

  <div class="relative isolate px-4 sm:px-6 lg:px-8 w-full py-8 sm:py-10">
    <div class="mx-auto max-w-3xl">
      <div class="text-center space-y-3 sm:space-y-4">
        <div class="relative">
          <div class="lg:hidden relative mx-auto mb-3 sm:mb-4">
            <div class="absolute -inset-1 bg-gradient-to-r from-[#4F46E5]/30 to-[#818CF8]/30 rounded-full blur-sm"></div>
            <img src="~/assets/images/61591337.jpg" class="relative rounded-full w-16 sm:w-20 mx-auto shadow-soft transition-all duration-300 hover:scale-105 border-2 border-white"/>
          </div>
          <div class="relative inline-block">
            <span class="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2 text-xl sm:text-2xl animate-bounce">✨</span>
            <h1 class="lg:hidden text-2xl sm:text-3xl font-bold tracking-tight text-[#2c3e50] animate-fade-in">
              <span class="bg-gradient-to-r from-[#4F46E5] via-[#818CF8] to-[#4F46E5] bg-clip-text text-transparent">
                Roger DA
              </span>
            </h1>
          </div>
          <h2 class="text-xl sm:text-2xl lg:text-4xl font-bold tracking-tight animate-fade-in text-[#1e293b] mt-2">
            Développeur Full Stack & Formateur
            <span class="inline-block animate-pulse-fast">🚀</span>
          </h2>
        </div>

        <p class="text-sm sm:text-base lg:text-lg leading-6 sm:leading-7 text-[#475569] max-w-2xl mx-auto animate-fade-in-up font-light px-2">
          Expert en développement web, je crée des solutions digitales innovantes et forme la nouvelle génération de développeurs avec passion.
          <span class="inline-block animate-spin-slow ml-1">💫</span>
        </p>

        <div class="flex items-center justify-center gap-x-2 sm:gap-x-3 animate-fade-in-up pt-2">
          <a href="https://www.linkedin.com/in/dasieroger/" target="_blank"
             class="group relative rounded-full px-5 py-2.5 text-sm font-semibold text-white overflow-hidden shine-effect">
            <span class="absolute inset-0 w-full h-full bg-[#0077B5] opacity-90 group-hover:opacity-100 transition-all duration-300"></span>
            <span class="relative flex items-center gap-2">
              <svg class="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              <span class="tracking-wide">LINKEDIN</span>
            </span>
          </a>
          <a href="https://github.com/roomdada" target="_blank"
             class="group relative rounded-full px-5 py-2.5 text-sm font-semibold text-white overflow-hidden shine-effect">
            <span class="absolute inset-0 w-full h-full bg-[#24292e] opacity-90 group-hover:opacity-100 transition-all duration-300"></span>
            <span class="relative flex items-center gap-2">
              <svg class="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
              </svg>
              <span class="tracking-wide">GITHUB</span>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<style scoped>
.bg-grid-pattern {
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px);
  background-size: 40px 40px;
}

.shadow-soft {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05),
              0 2px 4px -1px rgba(0, 0, 0, 0.03);
}

/* Animation des blobs */
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
  animation: blob 7s infinite;
}

/* Particules de nouvelle année */
.particles-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.particle {
  position: absolute;
  width: 6px;
  height: 6px;
  background: linear-gradient(135deg, #4F46E5, #818CF8);
  border-radius: 50%;
  animation: particle-fall 3s linear infinite;
}

@keyframes particle-fall {
  0% {
    transform: translateY(-10%) rotate(0deg);
    opacity: 1;
  }
  100% {
    transform: translateY(100%) rotate(360deg);
    opacity: 0;
  }
}

/* Effet de brillance sur les boutons */
.shine-effect::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    120deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: 0.5s;
}

.shine-effect:hover::before {
  left: 100%;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

.animate-pulse-fast {
  animation: pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

.animate-spin-slow {
  animation: spin 4s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.animate-fade-in {
  animation: fadeIn 1s cubic-bezier(0.4, 0, 0.2, 1);
}

.animate-fade-in-up {
  animation: fadeInUp 1s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.98);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

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

/* Génération aléatoire des positions des particules */
.particle:nth-child(3n) { left: 10%; animation-delay: 0s; }
.particle:nth-child(3n+1) { left: 50%; animation-delay: 1s; }
.particle:nth-child(3n+2) { left: 90%; animation-delay: 2s; }
.particle:nth-child(5n) { left: 30%; animation-delay: 0.5s; }
.particle:nth-child(5n+1) { left: 70%; animation-delay: 1.5s; }
</style>
