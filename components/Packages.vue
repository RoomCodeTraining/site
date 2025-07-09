<template>
    <section class="py-16 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20" id="packages">
        <div class="max-w-6xl mx-auto px-4">
            <SectionHeader
                title="Packages & Ressources"
                subtitle="Mes outils et snippets pour développeurs"
            />

            <div class="mt-16">
                <!-- Filtres -->
                <div class="flex flex-wrap gap-3 mb-12 justify-center">
                    <button
                        v-for="category in categories"
                        :key="category"
                        @click="activeCategory = category"
                        :class="[
                            'px-6 py-3 rounded-full font-medium transition-all duration-300',
                            activeCategory === category
                                ? 'bg-purple-600 text-white shadow-lg'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-gray-700'
                        ]"
                    >
                        {{ category }}
                    </button>
                </div>

                <!-- Grille des packages -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div
                        v-for="pkg in filteredPackages"
                        :key="pkg.id"
                        class="group bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
                    >
                        <!-- Header du package -->
                        <div class="flex items-start justify-between mb-4">
                            <div class="flex items-center gap-3">
                                <div class="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                                    <span class="text-white text-xl">{{ pkg.icon }}</span>
                                </div>
                                <div>
                                    <h3 class="font-semibold text-gray-900 dark:text-white">{{ pkg.name }}</h3>
                                    <p class="text-sm text-gray-500 dark:text-gray-400">{{ pkg.category }}</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-2">
                                <span class="text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 px-2 py-1 rounded-full">
                                    {{ pkg.version }}
                                </span>
                            </div>
                        </div>

                        <!-- Description -->
                        <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                            {{ pkg.description }}
                        </p>

                        <!-- Technologies -->
                        <div class="flex flex-wrap gap-2 mb-6">
                            <span
                                v-for="tech in pkg.technologies"
                                :key="tech"
                                class="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                            >
                                {{ tech }}
                            </span>
                        </div>

                        <!-- Stats -->
                        <div class="flex items-center justify-between mb-6 text-sm">
                            <div class="flex items-center gap-4">
                                <div class="flex items-center gap-1">
                                    <svg class="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                    <span class="text-gray-600 dark:text-gray-400">{{ pkg.stars }}</span>
                                </div>
                                <div class="flex items-center gap-1">
                                    <svg class="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
                                    </svg>
                                    <span class="text-gray-600 dark:text-gray-400">{{ pkg.downloads }}</span>
                                </div>
                            </div>
                            <span class="text-xs text-gray-500 dark:text-gray-400">{{ pkg.lastUpdate }}</span>
                        </div>

                        <!-- Actions -->
                        <div class="flex gap-3">
                            <a
                                :href="pkg.githubUrl"
                                target="_blank"
                                class="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 text-sm font-medium"
                            >
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
                                </svg>
                                Code
                            </a>
                            <a
                                v-if="pkg.demoUrl"
                                :href="pkg.demoUrl"
                                target="_blank"
                                class="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-200 text-sm font-medium"
                            >
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                                </svg>
                                Demo
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Call to action -->
                <div class="text-center mt-16">
                    <div class="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
                        <h3 class="text-2xl font-bold mb-4">Besoin d'un package personnalisé ?</h3>
                        <p class="text-purple-100 mb-6 max-w-2xl mx-auto">
                            Je crée des packages et snippets sur mesure pour optimiser votre workflow de développement.
                        </p>
                        <a
                            href="#contact"
                            class="inline-flex items-center gap-3 px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300"
                        >
                            <span>Demander un package</span>
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'

const activeCategory = ref('Tous')

const categories = ['Tous', 'Vue.js', 'Laravel', 'Utilities', 'UI Components']

const packages = [
    {
        id: 1,
        name: 'Vue Form Builder',
        description: 'Générateur de formulaires dynamiques pour Vue 3 avec validation intégrée et design moderne.',
        category: 'Vue.js',
        icon: '📝',
        version: 'v2.1.0',
        technologies: ['Vue 3', 'TypeScript', 'Tailwind CSS'],
        stars: 156,
        downloads: '2.3k',
        lastUpdate: 'Il y a 2 semaines',
        githubUrl: 'https://github.com/roomdada/vue-form-builder',
        demoUrl: 'https://vue-form-builder-demo.vercel.app'
    },
    {
        id: 2,
        name: 'Laravel API Helper',
        description: 'Collection de helpers pour simplifier le développement d\'APIs avec Laravel.',
        category: 'Laravel',
        icon: '🔧',
        version: 'v1.5.2',
        technologies: ['Laravel', 'PHP', 'API'],
        stars: 89,
        downloads: '1.1k',
        lastUpdate: 'Il y a 1 mois',
        githubUrl: 'https://github.com/roomdada/laravel-api-helper',
        demoUrl: null
    },
    {
        id: 3,
        name: 'Tailwind Components',
        description: 'Bibliothèque de composants UI réutilisables basés sur Tailwind CSS.',
        category: 'UI Components',
        icon: '🎨',
        version: 'v1.0.0',
        technologies: ['Tailwind CSS', 'Vue 3', 'JavaScript'],
        stars: 234,
        downloads: '3.7k',
        lastUpdate: 'Il y a 3 jours',
        githubUrl: 'https://github.com/roomdada/tailwind-components',
        demoUrl: 'https://tailwind-components-demo.vercel.app'
    },
    {
        id: 4,
        name: 'Date Utils',
        description: 'Utilitaires pour la manipulation de dates en JavaScript avec support multilingue.',
        category: 'Utilities',
        icon: '📅',
        version: 'v1.2.1',
        technologies: ['JavaScript', 'Date-fns', 'i18n'],
        stars: 67,
        downloads: '890',
        lastUpdate: 'Il y a 2 semaines',
        githubUrl: 'https://github.com/roomdada/date-utils',
        demoUrl: null
    },
    {
        id: 5,
        name: 'Vue State Manager',
        description: 'Gestionnaire d\'état léger et performant pour Vue 3 avec devtools intégrées.',
        category: 'Vue.js',
        icon: '🗃️',
        version: 'v1.8.0',
        technologies: ['Vue 3', 'TypeScript', 'Composition API'],
        stars: 198,
        downloads: '2.8k',
        lastUpdate: 'Il y a 1 semaine',
        githubUrl: 'https://github.com/roomdada/vue-state-manager',
        demoUrl: 'https://vue-state-manager-demo.vercel.app'
    },
    {
        id: 6,
        name: 'Laravel Blade Components',
        description: 'Composants Blade réutilisables pour accélérer le développement frontend avec Laravel.',
        category: 'Laravel',
        icon: '⚡',
        version: 'v1.3.0',
        technologies: ['Laravel', 'Blade', 'Alpine.js'],
        stars: 123,
        downloads: '1.6k',
        lastUpdate: 'Il y a 3 semaines',
        githubUrl: 'https://github.com/roomdada/laravel-blade-components',
        demoUrl: null
    }
]

const filteredPackages = computed(() => {
    if (activeCategory.value === 'Tous') {
        return packages
    }
    return packages.filter(pkg => pkg.category === activeCategory.value)
})
</script>

<style scoped>
/* Animation d'entrée pour les cartes */
.grid > div {
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
}

.grid > div:nth-child(1) { animation-delay: 0.1s; }
.grid > div:nth-child(2) { animation-delay: 0.2s; }
.grid > div:nth-child(3) { animation-delay: 0.3s; }
.grid > div:nth-child(4) { animation-delay: 0.4s; }
.grid > div:nth-child(5) { animation-delay: 0.5s; }
.grid > div:nth-child(6) { animation-delay: 0.6s; }

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
