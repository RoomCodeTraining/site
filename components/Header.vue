<template>
    <nav class="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-700 transition-all duration-300">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" class="flex items-center space-x-3 group">
                <div class="relative w-10 h-10 flex items-center justify-center bg-gray-900 dark:bg-white rounded-lg overflow-hidden transition-transform group-hover:scale-110">
                    <span class="text-xl font-bold text-white dark:text-gray-900">DR</span>
                </div>
                <span class="self-center text-xl font-extrabold whitespace-nowrap dark:text-white">Da Sié Roger</span>
            </a>

            <div class="flex items-center gap-4 md:order-last">
                <!-- Theme Toggle -->
                <button @click="toggleTheme" class="p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700">
                    <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                </button>

                <!-- Mobile menu button -->
                <button @click="isMenuOpen = !isMenuOpen" type="button"
                    class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700"
                    :aria-expanded="isMenuOpen">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            <!-- Navigation Menu -->
            <div :class="{'translate-y-0 opacity-100': isMenuOpen, '-translate-y-10 opacity-0 pointer-events-none': !isMenuOpen}"
                class="w-full md:translate-y-0 md:opacity-100 md:pointer-events-auto md:w-auto transition-all duration-300 ease-in-out">
                <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white/80 dark:bg-gray-900/80 md:bg-transparent">
                    <Navbar link="#cursus" title="cursus scolaire" />
                    <Navbar link="#experiences" title="experiences" />
                    <Navbar link="#realisations" title="réalisations" />
                    <Navbar link="#blog" title="blog" />
                    <Navbar link="#contact" title="contact" />
                </ul>
            </div>
        </div>
    </nav>
    <!-- Spacer pour compenser le header fixed -->
    <div class="h-20"></div>
</template>

<script setup>
import Navbar from './Navbar.vue'
import { ref, onMounted } from 'vue'

const isMenuOpen = ref(false)
const isDark = ref(false)

const toggleTheme = () => {
    isDark.value = !isDark.value
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
    // Récupérer la préférence de thème
    const theme = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    isDark.value = theme === 'dark'
    if (isDark.value) {
        document.documentElement.classList.add('dark')
    }
})
</script>

<style scoped>
@media (min-width: 768px) {
    .pointer-events-none {
        pointer-events: auto !important;
    }
    .-translate-y-10 {
        transform: translateY(0) !important;
    }
    .opacity-0 {
        opacity: 1 !important;
    }
}
</style>
