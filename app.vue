<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
     <NuxtPage />
  </div>
</template>

<style>
body {
  @apply bg-white dark:bg-slate-950;
  font-family: 'Plus Jakarta Sans', 'Outfit', sans-serif;
}

::selection {
  @apply bg-orange-500/20 dark:bg-orange-500/30;
}
</style>
