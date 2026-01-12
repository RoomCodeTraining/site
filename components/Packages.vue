<template>
    <section class="py-8 lg:py-12 bg-white dark:bg-slate-950" id="packages">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="mt-8">
                <!-- Filtres -->
                <div class="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12 justify-center">
                    <button
                        v-for="category in categories"
                        :key="category"
                        @click="activeCategory = category"
                        :class="[
                            'px-3 sm:px-4 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm md:text-base whitespace-nowrap',
                            activeCategory === category
                                ? 'bg-orange-500 text-white shadow-lg'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                        ]"
                    >
                        {{ category }}
                    </button>
                </div>

                <!-- Grille des packages -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                    <div
                        v-for="pkg in filteredPackages"
                        :key="pkg.id"
                        class="group bg-white dark:bg-slate-900 rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 dark:hover:border-orange-500/30"
                    >
                        <!-- Header du package -->
                        <div class="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-0 mb-4 sm:mb-6">
                            <div class="flex items-center gap-3 flex-1 min-w-0">
                                <div class="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500/10 to-orange-500/5 dark:from-orange-500/20 dark:to-orange-500/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                                    <span class="text-xl sm:text-2xl">{{ pkg.icon }}</span>
                                </div>
                                <div class="min-w-0 flex-1">
                                    <h3 class="font-bold text-slate-900 dark:text-white text-base sm:text-lg font-display truncate">{{ pkg.name }}</h3>
                                    <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400">{{ pkg.category }}</p>
                                </div>
                            </div>
                            <div class="flex items-center gap-2 flex-shrink-0">
                                <span 
                                    :class="[
                                        'text-xs font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg border whitespace-nowrap',
                                        pkg.status === 'stable' 
                                            ? 'bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800'
                                            : 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-800'
                                    ]"
                                >
                                    {{ pkg.status === 'stable' ? pkg.version : 'En développement' }}
                                </span>
                            </div>
                        </div>

                        <!-- Description -->
                        <p class="text-slate-600 dark:text-slate-400 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                            {{ pkg.description }}
                        </p>

                        <!-- Technologies -->
                        <div class="flex flex-wrap gap-2 mb-4 sm:mb-6">
                            <span
                                v-for="tech in pkg.technologies"
                                :key="tech"
                                class="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-lg"
                            >
                                {{ tech }}
                            </span>
                        </div>

                        <!-- Stats -->
                        <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 mb-4 sm:mb-6 text-sm border-t border-slate-200 dark:border-slate-800 pt-4">
                            <div class="flex items-center gap-3 sm:gap-4">
                                <div class="flex items-center gap-1.5">
                                    <svg class="w-4 h-4 text-yellow-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                    <span class="text-slate-600 dark:text-slate-400 font-medium text-xs sm:text-sm">{{ pkg.stars }}</span>
                                </div>
                                <div class="flex items-center gap-1.5">
                                    <svg class="w-4 h-4 text-orange-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"/>
                                    </svg>
                                    <span class="text-slate-600 dark:text-slate-400 font-medium text-xs sm:text-sm">{{ pkg.downloads }}</span>
                                </div>
                            </div>
                            <span class="text-xs text-slate-500 dark:text-slate-400">{{ pkg.lastUpdate }}</span>
                        </div>

                        <!-- Features -->
                        <div v-if="pkg.features" class="mb-4 sm:mb-6">
                            <div class="flex flex-wrap gap-1.5 sm:gap-2">
                                <span
                                    v-for="feature in pkg.features"
                                    :key="feature"
                                    class="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-xs rounded-full"
                                >
                                    {{ feature }}
                                </span>
                            </div>
                        </div>

                        <!-- Actions -->
                        <div class="flex flex-col sm:flex-row gap-2 sm:gap-3">
                            <a
                                :href="pkg.packagistUrl"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors duration-200 text-sm font-medium"
                            >
                                <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4zm-1.2 4.8v9.6h2.4V7.2h-2.4zm0-2.4h2.4v2.4h-2.4V4.8z"/>
                                </svg>
                                <span class="whitespace-nowrap">Packagist</span>
                            </a>
                            <a
                                :href="pkg.githubUrl"
                                target="_blank"
                                rel="noopener noreferrer"
                                class="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 sm:py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors duration-200 text-sm font-medium"
                            >
                                <svg class="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/>
                                </svg>
                                <span class="whitespace-nowrap">GitHub</span>
                            </a>
                        </div>
                    </div>
                </div>

                <!-- Call to action -->
                <div class="text-center mt-12 sm:mt-16">
                    <div class="bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 sm:p-8 md:p-12 text-white">
                        <h3 class="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 font-display">Besoin d'un package personnalisé ?</h3>
                        <p class="text-orange-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4">
                            Je crée des packages PHP et Laravel sur mesure pour optimiser votre workflow de développement.
                        </p>
                        <NuxtLink
                            to="/contact"
                            class="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-white text-orange-600 font-semibold rounded-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 text-sm sm:text-base"
                        >
                            <span>Me contacter</span>
                            <svg class="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                            </svg>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">

const activeCategory = ref('Tous')

const categories = ['Tous', 'Laravel', 'PHP', 'SMS', 'Payment']

const packages = [
    {
        id: 1,
        name: 'letexto-sms-package',
        description: 'Package PHP pour l\'envoi de SMS via l\'API Letexto. Support de l\'envoi simple et en masse, intégration Laravel native, gestion des erreurs et validation des numéros.',
        category: 'PHP',
        icon: '📱',
        version: 'v1.0.0',
        technologies: ['PHP 8.0+', 'Guzzle', 'Laravel'],
        stars: 2,
        downloads: '76',
        lastUpdate: '2025-06-26',
        packagistUrl: 'https://packagist.org/packages/room/letexto-sms-package',
        githubUrl: 'https://github.com/roomdada/package-sms',
        status: 'stable',
        features: ['Envoi simple', 'Envoi en masse', 'Intégration Laravel', 'Validation']
    },
    {
        id: 2,
        name: 'laravel-payment-gateways',
        description: 'Package Laravel réutilisable pour gérer plusieurs agrégateurs de paiement (Cinetpay, Bizao, Winipayer) avec failover automatique, webhooks intégrés et configuration dynamique.',
        category: 'Laravel',
        icon: '💳',
        version: 'dev-main',
        technologies: ['Laravel 9+', 'PHP 8.1+', 'Guzzle'],
        stars: 6,
        downloads: '3',
        lastUpdate: '2025-07-13',
        packagistUrl: 'https://packagist.org/packages/room/laravel-payment-gateways',
        githubUrl: 'https://github.com/roomdada/laravel-payment-gateways',
        status: 'development',
        features: ['Multi-gateways', 'Failover automatique', 'Webhooks', 'Logging']
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
