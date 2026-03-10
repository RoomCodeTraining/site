<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300 relative">
    <!-- Preloader -->
    <transition name="fade">
      <div
        v-if="loading"
        class="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-b from-rose-50 via-white to-rose-100 dark:from-slate-950 dark:via-slate-900 dark:to-rose-950"
      >
        <div class="flex flex-col items-center gap-3 sm:gap-4">
          <!-- Nom -->
          <p class="text-xs sm:text-sm tracking-[0.2em] uppercase text-rose-500 dark:text-rose-300 font-semibold">
            Julie S. Haile
          </p>
          <!-- Circle loader -->
          <div class="relative">
            <div class="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-rose-200 dark:border-rose-900/40 border-t-rose-500 dark:border-t-rose-400 animate-spin-slow"></div>
            <div class="absolute inset-2 rounded-full bg-white/80 dark:bg-slate-900/90 flex items-center justify-center shadow-md">
              <span class="w-2 h-2 rounded-full bg-rose-500"></span>
            </div>
          </div>
          <!-- Text -->
          <p class="text-sm sm:text-base font-medium text-slate-700 dark:text-slate-200 tracking-wide">
            Chargement du portfolio
          </p>
        </div>
      </div>
    </transition>

    <NuxtPage @vue:mounted="onMountedPage" />
  </div>
</template>

<script setup lang="ts">
const loading = ref(true)

const onMountedPage = () => {
  // petite pause pour l'effet chic
  setTimeout(() => {
    loading.value = false
  }, 600)
}
</script>

<style>
body {
  @apply bg-white dark:bg-slate-950;
  font-family: 'Plus Jakarta Sans', 'Outfit', sans-serif;
}

::selection {
  @apply bg-orange-500/20 dark:bg-orange-500/30;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.animate-spin-slow {
  animation: spin 1.2s linear infinite;
}
</style>
