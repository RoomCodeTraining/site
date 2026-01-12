<template>
  <Header />
  <div class="min-h-screen bg-white dark:bg-slate-950 pt-16 sm:pt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
      <!-- Hero Section -->
      <div class="text-center mb-8 sm:mb-12 md:mb-16">
        <h1
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 md:mb-6 font-display"
        >
          Mes
          <span class="text-orange-500 dark:text-orange-400">Packages</span>
        </h1>
        <p
          class="text-sm sm:text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto px-4"
        >
          Des packages PHP et Laravel réutilisables pour simplifier le développement et accélérer vos projets.
        </p>
      </div>

      <!-- Packages Component -->
      <Packages />
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Header from '~/components/Header.vue'
import Packages from '~/components/Packages.vue'
import Footer from '~/components/Footer.vue'
</script>
