<template>
    <nav class="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200 dark:bg-gray-900/80 dark:border-gray-700 transition-all duration-300">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <!-- Logo and Name -->
            <a href="/" class="flex items-center space-x-3 group">
                <div class="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gray-900 dark:bg-white rounded-lg overflow-hidden transition-transform group-hover:scale-110">
                    <span class="text-lg sm:text-xl font-bold text-white dark:text-gray-900">DR</span>
                </div>
                <span class="self-center text-lg sm:text-xl font-extrabold whitespace-nowrap dark:text-white">Da Sié Roger</span>
            </a>

            <!-- Navigation Menu -->
            <div :class="[
                'w-full md:w-auto md:flex md:items-center md:justify-center transition-all duration-300 ease-out order-3 md:order-2',
                isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 md:opacity-100 md:max-h-64'
            ]" class="overflow-hidden md:overflow-visible">
                <ul class="flex flex-col py-2 md:py-0 mt-3 md:mt-0 space-y-2 md:space-y-0 font-medium md:flex-row md:space-x-8">
                    <Navbar @click="closeMenu" link="#cursus" title="cursus" />
                    <Navbar @click="closeMenu" link="#experiences" title="experiences" />
                    <Navbar @click="closeMenu" link="#realisations" title="réalisations" />
                    <Navbar @click="closeMenu" link="#stack" title="stack" />
                    <Navbar @click="closeMenu" link="#recommendations" title="témoignages" />
                </ul>
            </div>

            <div class="flex items-center gap-2 sm:gap-4 order-2 md:order-3">
                <!-- Theme Toggle -->
                <button @click="toggleTheme" class="p-2 text-gray-500 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 transition-colors">
                    <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                </button>

                <!-- Mobile menu button -->
                <button @click="toggleMenu" type="button"
                    class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 transition-colors"
                    :aria-expanded="isMenuOpen">
                    <span class="sr-only">Menu principal</span>
                    <svg class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </nav>
    <!-- Spacer pour compenser le header fixed -->
    <div class="h-16 sm:h-20"></div>
</template>

<script setup>
import Navbar from './Navbar.vue'
import { ref, onMounted } from 'vue'

const isMenuOpen = ref(false)
const isDark = ref(false)

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
    // Prevent scrolling when menu is open on mobile
    document.body.style.overflow = isMenuOpen.value ? 'hidden' : ''
}

const closeMenu = () => {
    isMenuOpen.value = false
    document.body.style.overflow = ''
}

const toggleTheme = () => {
    isDark.value = !isDark.value
    if (isDark.value) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}

onMounted(() => {
    // Récupérer la préférence de thème
    const theme = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    isDark.value = theme === 'dark'
    if (isDark.value) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
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
