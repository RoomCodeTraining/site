<template>
    <section class="py-12 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800" id="stack">
        <div class="container mx-auto px-4">
            <SectionHeader
                title="Stack Technologique"
                subtitle="Technologies & Outils"
            />

            <!-- Section principale - Laravel -->
            <div class="mt-12 mb-12">
                <div class="max-w-4xl mx-auto">
                    <div class="relative group">
                        <!-- Effet de fond subtil -->
                        <div class="absolute -inset-4 bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                        <!-- Carte principale -->
                        <div class="relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden">
                            <div class="flex flex-col lg:flex-row items-center">
                                <!-- Image Laravel -->
                                <div class="lg:w-1/3 p-6 lg:p-8">
                                    <div class="relative">
                                        <div class="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-xl"></div>
                                        <img
                                            src="~/assets/images/laravel.png"
                                            alt="Laravel"
                                            class="relative w-40 h-40 mx-auto object-contain transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                </div>

                                <!-- Contenu -->
                                <div class="lg:w-2/3 p-6 lg:p-8 lg:border-l border-gray-100 dark:border-gray-700">
                                    <div class="space-y-4">
                                        <div>
                                            <h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                                                Framework Principal
                                            </h3>
                                            <p class="text-lg text-red-600 dark:text-red-400 font-semibold">
                                                Laravel
                                            </p>
                                        </div>

                                        <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                                            Mon expertise principale en développement backend. Laravel me permet de créer
                                            des applications robustes, sécurisées et maintenables avec une architecture
                                            élégante et des performances optimales.
                                        </p>

                                        <div class="flex flex-wrap gap-2">
                                            <span class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-xs font-medium">
                                                API REST
                                            </span>
                                            <span class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-xs font-medium">
                                                Architecture MVC
                                            </span>
                                            <span class="px-3 py-1 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 rounded-full text-xs font-medium">
                                                Eloquent ORM
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <!-- Grille des technologies -->
            <div class="max-w-6xl mx-auto">
                <div class="text-center mb-6">
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-1">
                        Autres Technologies
                    </h3>
                    <p class="text-gray-600 dark:text-gray-400 text-xs">
                        Stack complet pour le développement web moderne
                    </p>
                </div>

                <!-- Grille compacte des technologies -->
                <div class="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 p-6">
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                        <!-- Backend -->
                        <div class="tech-section">
                            <div class="flex items-center mb-3 pb-2 border-b border-gray-100 dark:border-gray-700">
                                <div class="w-5 h-5 bg-blue-100 dark:bg-blue-900/30 rounded flex items-center justify-center mr-2">
                                    <svg class="w-3 h-3 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                    </svg>
                                </div>
                                <h4 class="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                                    Backend
                                </h4>
                            </div>
                            <div class="space-y-2">
                                <TechCard
                                    name="Symfony"
                                    image="symfony.png"
                                    category="backend"
                                />
                                <TechCard
                                    name="AdonisJS"
                                    image="adonis.png"
                                    category="backend"
                                />
                                <TechCard
                                    name="NestJS"
                                    image="nest.png"
                                    category="backend"
                                />
                            </div>
                        </div>

                        <!-- Frontend -->
                        <div class="tech-section">
                            <div class="flex items-center mb-3 pb-2 border-b border-gray-100 dark:border-gray-700">
                                <div class="w-5 h-5 bg-green-100 dark:bg-green-900/30 rounded flex items-center justify-center mr-2">
                                    <svg class="w-3 h-3 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <h4 class="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                                    Frontend
                                </h4>
                            </div>
                            <div class="space-y-2">
                                <TechCard
                                    name="Vue.js"
                                    image="vue.png"
                                    category="frontend"
                                />
                                <TechCard
                                    name="React"
                                    image="react.png"
                                    category="frontend"
                                />
                                <TechCard
                                    name="Nuxt"
                                    image="nuxt.png"
                                    category="frontend"
                                />
                                <TechCard
                                    name="Alpine.js"
                                    image="alpinejs.jpg"
                                    category="frontend"
                                />
                                <TechCard
                                    name="Livewire"
                                    image="livewire.png"
                                    category="frontend"
                                />
                            </div>
                        </div>

                        <!-- Base de données -->
                        <div class="tech-section">
                            <div class="flex items-center mb-3 pb-2 border-b border-gray-100 dark:border-gray-700">
                                <div class="w-5 h-5 bg-purple-100 dark:bg-purple-900/30 rounded flex items-center justify-center mr-2">
                                    <svg class="w-3 h-3 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
                                    </svg>
                                </div>
                                <h4 class="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                                    Base de données
                                </h4>
                            </div>
                            <div class="space-y-2">
                                <TechCard
                                    name="MySQL"
                                    image="mysql.png"
                                    category="database"
                                />
                            </div>
                        </div>

                        <!-- DevOps -->
                        <div class="tech-section">
                            <div class="flex items-center mb-3 pb-2 border-b border-gray-100 dark:border-gray-700">
                                <div class="w-5 h-5 bg-orange-100 dark:bg-orange-900/30 rounded flex items-center justify-center mr-2">
                                    <svg class="w-3 h-3 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <h4 class="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                                    DevOps
                                </h4>
                            </div>
                            <div class="space-y-2">
                                <TechCard
                                    name="Cleavr"
                                    image="cleavr.png"
                                    category="devops"
                                />
                            </div>
                        </div>

                        <!-- Outils -->
                        <div class="tech-section">
                            <div class="flex items-center mb-3 pb-2 border-b border-gray-100 dark:border-gray-700">
                                <div class="w-5 h-5 bg-gray-100 dark:bg-gray-700 rounded flex items-center justify-center mr-2">
                                    <svg class="w-3 h-3 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </div>
                                <h4 class="text-xs font-bold text-gray-900 dark:text-white uppercase tracking-wider">
                                    Outils
                                </h4>
                            </div>
                            <div class="space-y-2">
                                <TechCard
                                    name="Git"
                                    image="git.webp"
                                    category="tools"
                                />
                                <TechCard
                                    name="GitHub"
                                    image="github.png"
                                    category="tools"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Call to action -->
            <div class="max-w-4xl mx-auto mt-8 text-center">
                <div class="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-900/20 dark:to-green-900/20 rounded-xl p-4 border border-blue-100 dark:border-blue-800">
                    <h4 class="text-base font-semibold text-gray-900 dark:text-white mb-1">
                        Prêt à collaborer ?
                    </h4>
                    <p class="text-gray-600 dark:text-gray-400 text-xs mb-3">
                        Découvrez comment je peux vous aider à réaliser votre projet avec ces technologies
                    </p>
                    <a href="#contact" class="inline-flex items-center px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium rounded-lg transition-colors duration-300">
                        Discutons de votre projet
                        <svg class="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import SectionHeader from './SectionHeader.vue'
import TechCard from './TechCard.vue'
</script>

<style scoped>
.tech-section {
    @apply flex flex-col;
}

/* Animation subtile pour les sections */
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.tech-section {
    animation: fadeInUp 0.6s ease-out forwards;
}

.tech-section:nth-child(1) { animation-delay: 0.1s; }
.tech-section:nth-child(2) { animation-delay: 0.2s; }
.tech-section:nth-child(3) { animation-delay: 0.3s; }
.tech-section:nth-child(4) { animation-delay: 0.4s; }
.tech-section:nth-child(5) { animation-delay: 0.5s; }
</style>
