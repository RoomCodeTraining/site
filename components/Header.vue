<template>
    <nav :class="[
        'fixed w-full top-0 z-50 transition-all duration-500',
        scrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md',
        scrolled ? 'border-b border-gray-200/50 dark:border-gray-700/50' : ''
    ]">
        <div class="max-w-screen-xl flex items-center justify-between mx-auto p-4">
            <!-- Logo and Name with enhanced animations -->
            <a href="/" class="flex items-center space-x-3 group relative overflow-hidden">
                <div class="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-700 dark:from-white dark:to-gray-200 rounded-xl overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg group-hover:shadow-xl">
                    <span class="text-lg sm:text-xl font-bold text-white dark:text-gray-900 transition-all duration-300 group-hover:scale-110">DR</span>
                    <div class="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    <div class="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-all duration-700 animate-pulse"></div>
                </div>
                <span class="self-center text-lg sm:text-xl font-extrabold whitespace-nowrap dark:text-white transition-all duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:scale-105">
                    Da Sié Roger
                </span>
                <div class="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-500 group-hover:w-full group-hover:shadow-lg"></div>
                <!-- Ripple effect -->
                <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500 scale-0 group-hover:scale-100"></div>
            </a>

            <!-- Desktop Navigation -->
            <div class="hidden lg:flex items-center space-x-1">
                <template v-for="(item, index) in visibleNavItems" :key="item.title">
                    <div class="relative group">
                        <button
                            @click="scrollToSection(item.link)"
                            :class="[
                                'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative overflow-hidden group/nav',
                                getActiveSection(item.link) ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 shadow-md' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                            ]"
                        >
                            <span class="relative z-10 transition-all duration-300 group-hover/nav:scale-105">{{ item.title }}</span>
                            <!-- Background gradient on hover -->
                            <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform scale-x-0 group-hover/nav:scale-x-100 transition-transform duration-500 origin-left"></div>
                            <!-- Ripple effect -->
                            <div class="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover/nav:opacity-100 transition-all duration-700 scale-0 group-hover/nav:scale-100 rounded-lg"></div>
                            <!-- Shimmer effect -->
                            <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/nav:translate-x-full transition-transform duration-1000"></div>
                        </button>
                        <div :class="[
                            'absolute -bottom-1 left-1/2 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform -translate-x-1/2 transition-all duration-500 shadow-lg',
                            getActiveSection(item.link) ? 'w-full' : 'w-0 group-hover:w-full'
                        ]"></div>
                        <!-- Floating indicator -->
                        <div :class="[
                            'absolute -top-1 left-1/2 w-1 h-1 bg-blue-500 rounded-full transform -translate-x-1/2 transition-all duration-300 opacity-0',
                            getActiveSection(item.link) ? 'opacity-100 scale-150' : 'group-hover:opacity-100 group-hover:scale-150'
                        ]"></div>
                    </div>
                </template>
            </div>

            <div class="flex items-center gap-2 sm:gap-4">
                <!-- Enhanced Theme Toggle -->
                <button @click="toggleTheme" class="relative p-2 text-gray-500 rounded-xl hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 transition-all duration-300 group overflow-hidden">
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl"></div>
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-all duration-700 scale-0 group-hover:scale-100 rounded-xl"></div>
                    <svg v-if="isDark" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 relative z-10 transition-all duration-500 group-hover:rotate-12 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 relative z-10 transition-all duration-500 group-hover:-rotate-12 group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    <!-- Glow effect -->
                    <div class="absolute inset-0 bg-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm scale-0 group-hover:scale-100"></div>
                </button>

                <!-- Mobile Menu Button -->
                <button
                    @click="toggleMobileMenu"
                    class="lg:hidden relative p-2 text-gray-500 rounded-xl hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 transition-all duration-300 group overflow-hidden"
                >
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-xl"></div>
                    <div class="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-all duration-700 scale-0 group-hover:scale-100 rounded-xl"></div>
                    <div class="relative z-10 w-5 h-5 flex flex-col justify-center items-center">
                        <span :class="[
                            'block w-5 h-0.5 bg-current transition-all duration-500 transform origin-center',
                            mobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1 group-hover:scale-110'
                        ]"></span>
                        <span :class="[
                            'block w-5 h-0.5 bg-current transition-all duration-500 transform origin-center',
                            mobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100 group-hover:scale-110'
                        ]"></span>
                        <span :class="[
                            'block w-5 h-0.5 bg-current transition-all duration-500 transform origin-center',
                            mobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1 group-hover:scale-110'
                        ]"></span>
                    </div>
                    <!-- Glow effect -->
                    <div class="absolute inset-0 bg-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm scale-0 group-hover:scale-100"></div>
                </button>
            </div>
        </div>

        <!-- Mobile Menu Overlay -->
        <div :class="[
            'lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-500 z-40',
            mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        ]" @click="closeMobileMenu"></div>

        <!-- Mobile Menu -->
        <div :class="[
            'lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 shadow-2xl transform transition-all duration-500 z-50',
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        ]">
            <div class="flex flex-col h-full">
                <!-- Mobile Menu Header -->
                <div class="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400">Menu</h3>
                    <button @click="closeMobileMenu" class="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-all duration-300 group overflow-hidden rounded-lg">
                        <div class="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10 transform scale-0 group-hover:scale-100 transition-transform duration-300 rounded-lg"></div>
                        <svg class="w-5 h-5 relative z-10 transition-all duration-300 group-hover:rotate-90 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>

                <!-- Mobile Navigation Items -->
                <div class="flex-1 overflow-y-auto py-6">
                    <div class="space-y-2 px-6">
                        <template v-for="(item, index) in navItems" :key="item.title">
                            <button
                                @click="handleMobileNavClick(item.link)"
                                :class="[
                                    'w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 relative overflow-hidden group/mobile',
                                    getActiveSection(item.link) ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 shadow-md' : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                                ]"
                            >
                                <span class="relative z-10 transition-all duration-300 group-hover/mobile:scale-105 group-hover/mobile:translate-x-1">{{ item.title }}</span>
                                <!-- Background gradient on hover -->
                                <div class="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 transform scale-x-0 group-hover/mobile:scale-x-100 transition-transform duration-500 origin-left"></div>
                                <!-- Ripple effect -->
                                <div class="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover/mobile:opacity-100 transition-all duration-700 scale-0 group-hover/mobile:scale-100 rounded-lg"></div>
                                <!-- Shimmer effect -->
                                <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/mobile:translate-x-full transition-transform duration-1000"></div>
                                <!-- Active indicator -->
                                <div :class="[
                                    'absolute left-0 top-1/2 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-y-1/2 transition-all duration-300 rounded-r-full',
                                    getActiveSection(item.link) ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 group-hover/mobile:opacity-100 group-hover/mobile:scale-y-100'
                                ]"></div>
                            </button>
                        </template>
                    </div>
                </div>

                <!-- Mobile Menu Footer -->
                <div class="p-6 border-t border-gray-200 dark:border-gray-700">
                    <div class="text-center text-sm text-gray-500 dark:text-gray-400 transition-all duration-300 hover:text-blue-600 dark:hover:text-blue-400">
                        © 2024 Da Sié Roger
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <!-- Dynamic spacer -->
    <div :class="[
        'transition-all duration-500',
        scrolled ? 'h-16 sm:h-20' : 'h-0'
    ]"></div>
</template>

<script setup>
import Navbar from './Navbar.vue'
import { ref, onMounted, onUnmounted, computed } from 'vue'

const isDark = ref(false)
const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const activeSection = ref('')

// Navigation items with smart visibility
const navItems = [
    { title: 'À propos', link: '/about', type: 'page' },
    { title: 'Contact', link: '/contact', type: 'page' },
    { title: 'Cursus', link: '#cursus', type: 'section' },
    { title: 'Expériences', link: '#experiences', type: 'section' },
    { title: 'Réalisations', link: '#realisations', type: 'section' },
    { title: 'Formation', link: '#formation', type: 'section' },
    { title: 'Packages', link: '#packages', type: 'section' },
    { title: 'Blog', link: '#blog', type: 'section' },
    { title: 'Stack', link: '#stack', type: 'section' },
    { title: 'Témoignages', link: '#recommendations', type: 'section' }
]

// Smart navigation - only show most important items on desktop
const visibleNavItems = computed(() => {
    return navItems.filter(item => item.type === 'page' || ['cursus', 'experiences', 'realisations'].includes(item.link.replace('#', '')))
})

const getActiveSection = (link) => {
    if (link.startsWith('#')) {
        return activeSection.value === link.replace('#', '')
    }
    return false
}

const scrollToSection = (link) => {
    if (link.startsWith('#')) {
        const element = document.querySelector(link)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
    } else {
        window.location.href = link
    }
}

const handleMobileNavClick = (link) => {
    scrollToSection(link)
    closeMobileMenu()
}

const toggleMobileMenu = () => {
    mobileMenuOpen.value = !mobileMenuOpen.value
    // Prevent body scroll when menu is open
    if (mobileMenuOpen.value) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = ''
    }
}

const closeMobileMenu = () => {
    mobileMenuOpen.value = false
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

const handleScroll = () => {
    scrolled.value = window.scrollY > 50

    // Update active section based on scroll position
    const sections = navItems.filter(item => item.link.startsWith('#'))
    const scrollPosition = window.scrollY + 100 // Offset for better detection

    for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        const element = document.querySelector(section.link)
        if (element) {
            const elementTop = element.offsetTop
            const elementHeight = element.offsetHeight

            if (scrollPosition >= elementTop && scrollPosition < elementTop + elementHeight) {
                activeSection.value = section.link.replace('#', '')
                break
            }
        }
    }
}

onMounted(() => {
    // Theme initialization
    const theme = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
    isDark.value = theme === 'dark'
    if (isDark.value) {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }

    // Event listeners
    window.addEventListener('scroll', handleScroll)

    // Initial scroll check
    handleScroll()
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
    document.body.style.overflow = ''
})
</script>

<style scoped>
/* Clean transitions */
.transition-all {
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Glass morphism effect */
.backdrop-blur-sm {
    backdrop-filter: blur(8px);
}

/* Enhanced hover effects */
.group:hover .group-hover\:scale-110 {
    transform: scale(1.1);
}

.group:hover .group-hover\:rotate-12 {
    transform: rotate(12deg);
}

.group:hover .group-hover\:-rotate-12 {
    transform: rotate(-12deg);
}

/* Advanced hover animations */
.group:hover .group-hover\:scale-105 {
    transform: scale(1.05);
}

.group:hover .group-hover\:translate-x-1 {
    transform: translateX(0.25rem);
}

/* Shimmer animation */
@keyframes shimmer {
    0% {
        transform: translateX(-100%);
    }
    100% {
        transform: translateX(100%);
    }
}

/* Pulse animation for logo */
@keyframes pulse-glow {
    0%, 100% {
        opacity: 0.2;
        transform: scale(1);
    }
    50% {
        opacity: 0.4;
        transform: scale(1.05);
    }
}

.animate-pulse {
    animation: pulse-glow 2s ease-in-out infinite;
}

/* Floating animation for indicators */
@keyframes float {
    0%, 100% {
        transform: translateY(0px) scale(1);
    }
    50% {
        transform: translateY(-2px) scale(1.1);
    }
}

/* Ripple effect */
@keyframes ripple {
    0% {
        transform: scale(0);
        opacity: 1;
    }
    100% {
        transform: scale(4);
        opacity: 0;
    }
}

/* Glow effect */
@keyframes glow {
    0%, 100% {
        box-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
    }
    50% {
        box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
    }
}

/* Enhanced button hover states */
.group:hover .group-hover\:shadow-xl {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Mobile menu animations */
@keyframes slideIn {
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
}

@keyframes slideOut {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(100%);
    }
}

/* Custom scrollbar */
::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, #3b82f6, #8b5cf6);
    border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, #2563eb, #7c3aed);
}

/* Mobile menu scrollbar */
.lg\:hidden .overflow-y-auto::-webkit-scrollbar {
    width: 4px;
}

.lg\:hidden .overflow-y-auto::-webkit-scrollbar-thumb {
    background: rgba(156, 163, 175, 0.5);
    border-radius: 2px;
}

.lg\:hidden .overflow-y-auto::-webkit-scrollbar-thumb:hover {
    background: rgba(156, 163, 175, 0.7);
}

/* Enhanced focus states for accessibility */
button:focus-visible,
a:focus-visible {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
    border-radius: 0.5rem;
}

/* Smooth transitions for all interactive elements */
* {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 300ms;
}

/* Special hover effects for navigation items */
.group\/nav:hover {
    transform: translateY(-1px);
}

.group\/mobile:hover {
    transform: translateX(2px);
}

/* Gradient text effect on hover */
.group:hover .group-hover\:text-blue-600 {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Enhanced shadow effects */
.shadow-lg {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.shadow-xl {
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Floating animation for active indicators */
.group:hover .group-hover\:scale-150 {
    animation: float 2s ease-in-out infinite;
}

/* Enhanced backdrop blur */
.backdrop-blur-md {
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
}

/* Smooth color transitions */
.text-gray-700 {
    transition: color 0.3s ease;
}

.text-gray-300 {
    transition: color 0.3s ease;
}

/* Enhanced mobile menu transitions */
.lg\:hidden.fixed {
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Button press effect */
button:active {
    transform: scale(0.95);
}

/* Enhanced focus ring */
.focus\:ring-2:focus {
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.5);
}

/* Smooth opacity transitions */
.opacity-0 {
    transition: opacity 0.3s ease;
}

.opacity-100 {
    transition: opacity 0.3s ease;
}

/* Enhanced scale transitions */
.scale-0 {
    transition: transform 0.3s ease;
}

.scale-100 {
    transition: transform 0.3s ease;
}

/* Gradient border animation */
@keyframes gradient-border {
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
}

.bg-gradient-to-r {
    background-size: 200% 200%;
    animation: gradient-border 3s ease infinite;
}

/* Enhanced mobile menu button animation */
.group:hover .group-hover\:scale-110 {
    transform: scale(1.1) rotate(2deg);
}

/* Smooth transform transitions */
.transform {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced shadow on scroll */
.shadow-lg {
    transition: box-shadow 0.3s ease;
}

/* Glow effect on hover */
.group:hover .blur-sm {
    filter: blur(4px);
}

/* Enhanced mobile menu item hover */
.group\/mobile:hover {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(139, 92, 246, 0.1));
}

/* Smooth color transitions for dark mode */
.dark .text-gray-300 {
    transition: color 0.3s ease;
}

.dark .text-gray-400 {
    transition: color 0.3s ease;
}

/* Enhanced button states */
button:hover {
    transform: translateY(-1px);
}

button:active {
    transform: translateY(0);
}

/* Smooth background transitions */
.bg-transparent {
    transition: background-color 0.3s ease;
}

/* Enhanced mobile menu overlay */
.bg-black\/50 {
    transition: opacity 0.5s ease;
}

/* Floating animation for active section indicator */
.group:hover .group-hover\:scale-150 {
    animation: float 1.5s ease-in-out infinite;
}

/* Enhanced text shadow on hover */
.group:hover .group-hover\:text-blue-600 {
    text-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
}

/* Smooth border transitions */
.border-gray-200\/50 {
    transition: border-color 0.3s ease;
}

.dark .border-gray-700\/50 {
    transition: border-color 0.3s ease;
}
</style>
