<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
     <NuxtPage />
  </div>
</template>

<style>
body {
  @apply bg-white dark:bg-gray-900;
}

::selection {
  @apply bg-green-500/20 dark:bg-green-500/30;
}
</style>
