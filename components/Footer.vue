<template>
<footer class="bg-white/80 dark:bg-slate-950/90 border-t border-slate-200 dark:border-slate-800 backdrop-blur">
  <div class="max-w-7xl mx-auto py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
    <div class="flex flex-col items-center space-y-6 sm:space-y-8">
      <!-- Contact Info -->
      <div class="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 md:gap-8">
        <a href="tel:+2250748650696" class="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-300 transition-all duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span class="text-xs sm:text-sm">+225 07 48 65 06 96</span>
        </a>
        <a href="mailto:julie.syntich@icloud.com" class="flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-rose-500 dark:hover:text-rose-300 transition-all duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 sm:h-5 sm:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
          </svg>
          <span class="text-xs sm:text-sm break-all">julie.syntich@icloud.com</span>
        </a>
      </div>

      <!-- Copyright -->
      <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">
        © {{ year }} Julie S. Haile
      </p>
    </div>
  </div>
</footer>

</template>

<script setup>
const year = new Date().getFullYear();
</script>
