<template>
  <nav
    :class="[
      'fixed w-full top-0 z-50 transition-all duration-500',
      scrolled
        ? 'bg-white/95 dark:bg-slate-950/95 backdrop-blur-md shadow-sm'
        : 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md',
      scrolled ? 'border-b border-slate-200/50 dark:border-slate-800/50' : '',
      mobileMenuOpen ? '' : '',
    ]"
  >
    <div
      class="max-w-screen-xl flex items-center justify-between mx-auto p-3 sm:p-4"
    >
      <!-- Logo and Name with enhanced animations -->
      <a
        href="/"
        class="flex items-center space-x-2 sm:space-x-3 group relative overflow-hidden"
      >
        <div
          class="relative w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center bg-slate-900 dark:bg-white rounded-lg overflow-hidden transition-all duration-200 group-hover:scale-105 shadow-sm"
        >
          <img
            :src="avatarImage"
            alt="Da Sié Roger"
            class="w-full h-full object-cover"
          />
        </div>
        <span
          class="hidden sm:inline self-center text-base sm:text-lg md:text-xl font-bold whitespace-nowrap text-slate-900 dark:text-white"
        >
          Da Sié Roger
        </span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden lg:flex items-center space-x-1">
        <template v-for="item in visibleNavItems" :key="item.title">
          <div class="relative group">
            <button
              @click="scrollToSection(item.link)"
              :class="[
                'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative overflow-hidden group/nav',
                getActiveSection(item.link)
                  ? 'text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50',
              ]"
            >
              <span class="relative z-10">{{ item.title }}</span>
            </button>
            <div
              :class="[
                'absolute -bottom-1 left-1/2 h-0.5 bg-slate-900 dark:bg-white transform -translate-x-1/2 transition-all duration-200',
                getActiveSection(item.link)
                  ? 'w-full'
                  : 'w-0 group-hover:w-full',
              ]"
            ></div>
          </div>
        </template>
      </div>

      <div class="flex items-center gap-2 sm:gap-4">
        <!-- Contact Button -->
        <NuxtLink
          to="/contact"
          class="hidden lg:inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-200"
        >
          <span>Me contacter</span>
        </NuxtLink>

        <!-- Theme Toggle -->
        <button
          @click="toggleTheme"
          class="p-2 text-slate-600 dark:text-slate-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
        >
          <svg
            v-if="isDark"
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </button>

        <!-- Mobile Menu Button -->
        <button
          @click="toggleMobileMenu"
          class="lg:hidden p-2 text-slate-600 dark:text-slate-400 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200"
        >
          <div class="w-5 h-5 flex flex-col justify-center items-center">
            <span
              :class="[
                'block w-5 h-0.5 bg-current transition-all duration-200 transform origin-center',
                mobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1',
              ]"
            ></span>
            <span
              :class="[
                'block w-5 h-0.5 bg-current transition-all duration-200 transform origin-center',
                mobileMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100',
              ]"
            ></span>
            <span
              :class="[
                'block w-5 h-0.5 bg-current transition-all duration-200 transform origin-center',
                mobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1',
              ]"
            ></span>
          </div>
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile Menu Overlay - Outside nav for proper z-index -->
  <div
    v-if="mobileMenuOpen"
    class="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm transition-all duration-500 z-[9998]"
    @click="closeMobileMenu"
  ></div>

  <!-- Mobile Menu - Outside nav for proper z-index -->
  <div
    :class="[
      'lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-slate-950 shadow-2xl transform transition-all duration-300 z-[9999]',
      mobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
    ]"
  >
    <div class="flex flex-col h-full">
      <!-- Mobile Menu Header -->
      <div
        class="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-800"
      >
        <h3 class="text-lg font-semibold text-slate-900 dark:text-white">
          Menu
        </h3>
        <button
          @click="closeMobileMenu"
          class="p-2 text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-all duration-200 rounded-lg"
        >
          <svg
            class="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation Items -->
      <div class="flex-1 overflow-y-auto py-6">
        <div class="space-y-2 px-6">
          <template v-for="item in navItems" :key="item.title">
            <button
              @click="handleMobileNavClick(item.link)"
              :class="[
                'w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 relative overflow-hidden group/mobile',
                getActiveSection(item.link)
                  ? 'text-slate-900 dark:text-white bg-slate-100 dark:bg-slate-800'
                  : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-800/50',
              ]"
            >
              <span class="relative z-10">{{ item.title }}</span>
              <!-- Active indicator -->
              <div
                :class="[
                  'absolute left-0 top-1/2 w-0.5 h-6 bg-slate-900 dark:bg-white transform -translate-y-1/2 transition-all duration-200 rounded-r-full',
                  getActiveSection(item.link)
                    ? 'opacity-100 scale-y-100'
                    : 'opacity-0 scale-y-0 group-hover/mobile:opacity-100 group-hover/mobile:scale-y-100',
                ]"
              ></div>
            </button>
          </template>
        </div>
      </div>

      <!-- Mobile Menu Footer -->
      <div
        class="p-6 border-t border-slate-200 dark:border-slate-800 space-y-4"
      >
        <NuxtLink
          to="/contact"
          class="inline-flex items-center justify-center w-full gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-200"
          @click="closeMobileMenu"
        >
          <span>Me contacter</span>
        </NuxtLink>
        <div class="text-center text-sm text-slate-500 dark:text-slate-400">
          © 2024 Da Sié Roger
        </div>
      </div>
    </div>
  </div>

  <!-- Dynamic spacer -->
  <div
    :class="['transition-all duration-500', scrolled ? 'h-16 sm:h-20' : 'h-0']"
  ></div>
</template>

<script setup>
import Navbar from './Navbar.vue'
import { ref, onMounted, onUnmounted, computed } from 'vue'
import avatarImage from '~/assets/images/moments/myavatar.jpeg'

const isDark = ref(false)
const scrolled = ref(false)
const mobileMenuOpen = ref(false)
const activeSection = ref('')

// Navigation items - simplified according to mockup
const navItems = [
  { title: 'Réalisations', link: '/realisations', type: 'page' },
  { title: 'Blog', link: '/blog', type: 'page' },
  { title: 'Moments', link: '/moments', type: 'page' },
  { title: 'Packages', link: '/packages', type: 'page' },
]

// All items visible on desktop
const visibleNavItems = computed(() => {
  return navItems
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
  const sections = navItems.filter((item) => item.link.startsWith('#'))
  const scrollPosition = window.scrollY + 100 // Offset for better detection

  for (let i = sections.length - 1; i >= 0; i--) {
    const section = sections[i]
    const element = document.querySelector(section.link)
    if (element) {
      const elementTop = element.offsetTop
      const elementHeight = element.offsetHeight

      if (
        scrollPosition >= elementTop &&
        scrollPosition < elementTop + elementHeight
      ) {
        activeSection.value = section.link.replace('#', '')
        break
      }
    }
  }
}

onMounted(() => {
  // Theme initialization
  const theme =
    localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light')
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
  transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Glass morphism effect */
.backdrop-blur-sm {
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 3px;
}

.dark ::-webkit-scrollbar-thumb {
  background: #475569;
}

::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}

.dark ::-webkit-scrollbar-thumb:hover {
  background: #64748b;
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
  outline: 2px solid #0f172a;
  outline-offset: 2px;
  border-radius: 0.5rem;
}

.dark button:focus-visible,
.dark a:focus-visible {
  outline-color: #f1f5f9;
}

/* Smooth transitions for all interactive elements */
* {
  transition-property: color, background-color, border-color,
    text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter,
    backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

/* Enhanced mobile menu transitions */
.lg\:hidden.fixed {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Enhanced focus ring */
.focus\:ring-2:focus {
  box-shadow: 0 0 0 3px rgba(15, 23, 42, 0.2);
}

.dark .focus\:ring-2:focus {
  box-shadow: 0 0 0 3px rgba(241, 245, 249, 0.2);
}

/* Enhanced mobile menu overlay */
.bg-black\/50 {
  transition: opacity 0.3s ease;
}

/* Mobile menu visibility */
.lg\:hidden.fixed {
  will-change: transform;
}

/* Ensure mobile menu is always visible when open */
.lg\:hidden.fixed[class*='translate-x-0'] {
  visibility: visible !important;
  opacity: 1 !important;
}
</style>
