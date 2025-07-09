<template>
    <section class="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900/20" id="formation">
        <div class="max-w-6xl mx-auto px-4">
            <SectionHeader
                title="Formation & Coaching"
                subtitle="Accompagnement personnalisé sur 6 mois"
            />

            <div class="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <!-- Contenu principal -->
                <div class="space-y-8">
                    <div class="space-y-6">
                        <div class="inline-flex items-center gap-3 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                            <span class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                            Formation limitée à 2 personnes
                        </div>

                        <h3 class="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
                            Devenez un développeur
                            <span class="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                Full Stack confirmé
                            </span>
                        </h3>

                        <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                            Un accompagnement personnalisé sur 6 mois pour maîtriser le développement web moderne
                            et construire votre carrière de développeur.
                        </p>
                    </div>

                    <!-- Méthode et outils -->
                    <div class="space-y-6">
                        <h4 class="text-xl font-semibold text-gray-900 dark:text-white">Ma méthode</h4>
                        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div class="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span class="text-blue-600 dark:text-blue-400 text-lg">🎯</span>
                                </div>
                                <div>
                                    <h5 class="font-medium text-gray-900 dark:text-white">Projets réels</h5>
                                    <p class="text-sm text-gray-600 dark:text-gray-400">Apprentissage par la pratique</p>
                                </div>
                            </div>

                            <div class="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <div class="w-8 h-8 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span class="text-green-600 dark:text-green-400 text-lg">📚</span>
                                </div>
                                <div>
                                    <h5 class="font-medium text-gray-900 dark:text-white">Ressources exclusives</h5>
                                    <p class="text-sm text-gray-600 dark:text-gray-400">Packages et snippets personnalisés</p>
                                </div>
                            </div>

                            <div class="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <div class="w-8 h-8 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span class="text-purple-600 dark:text-purple-400 text-lg">💬</span>
                                </div>
                                <div>
                                    <h5 class="font-medium text-gray-900 dark:text-white">Support continu</h5>
                                    <p class="text-sm text-gray-600 dark:text-gray-400">Accompagnement personnalisé</p>
                                </div>
                            </div>

                            <div class="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <div class="w-8 h-8 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <span class="text-orange-600 dark:text-orange-400 text-lg">🚀</span>
                                </div>
                                <div>
                                    <h5 class="font-medium text-gray-900 dark:text-white">Portfolio professionnel</h5>
                                    <p class="text-sm text-gray-600 dark:text-gray-400">Projets pour votre CV</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Call to action -->
                    <div class="space-y-4">
                        <a href="#contact"
                           class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                            <span>Postuler à la formation</span>
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                            </svg>
                        </a>
                        <p class="text-sm text-gray-500 dark:text-gray-400">
                            ⏰ Prochaine session : Janvier 2024 • 2 places disponibles
                        </p>
                    </div>
                </div>

                <!-- Timeline de formation -->
                <div class="relative">
                    <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
                        <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">Programme sur 6 mois</h4>

                        <div class="space-y-6">
                            <div v-for="(phase, index) in phases" :key="index"
                                 class="flex gap-4 relative">
                                <!-- Timeline line -->
                                <div class="flex flex-col items-center">
                                    <div class="w-4 h-4 bg-blue-500 rounded-full z-10 relative"></div>
                                    <div v-if="index < phases.length - 1"
                                         class="w-0.5 h-16 bg-blue-200 dark:bg-blue-800 mt-2"></div>
                                </div>

                                <!-- Content -->
                                <div class="flex-1 pb-6">
                                    <div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
                                        <div class="flex items-center justify-between mb-2">
                                            <h5 class="font-semibold text-gray-900 dark:text-white">
                                                {{ phase.title }}
                                            </h5>
                                            <span class="text-sm text-blue-600 dark:text-blue-400 font-medium">
                                                Mois {{ index + 1 }}
                                            </span>
                                        </div>
                                        <p class="text-sm text-gray-600 dark:text-gray-300">
                                            {{ phase.description }}
                                        </p>
                                        <div class="flex flex-wrap gap-2 mt-3">
                                            <span v-for="tech in phase.technologies" :key="tech"
                                                  class="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full">
                                                {{ tech }}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'

const phases = [
    {
        title: "Fondations Web",
        description: "HTML, CSS, JavaScript moderne et concepts fondamentaux du développement web.",
        technologies: ["HTML5", "CSS3", "JavaScript", "Git"]
    },
    {
        title: "Frontend Avancé",
        description: "Frameworks modernes, gestion d'état et interfaces utilisateur réactives.",
        technologies: ["Vue.js", "React", "Tailwind CSS", "TypeScript"]
    },
    {
        title: "Backend & API",
        description: "Développement côté serveur, bases de données et architecture d'API.",
        technologies: ["Node.js", "Express", "MySQL", "REST API"]
    },
    {
        title: "Frameworks Full Stack",
        description: "Frameworks modernes pour le développement complet d'applications.",
        technologies: ["Laravel", "Nuxt.js", "Vue 3", "Composition API"]
    },
    {
        title: "DevOps & Déploiement",
        description: "Déploiement, CI/CD et bonnes pratiques de production.",
        technologies: ["Docker", "Vercel", "GitHub Actions", "AWS"]
    },
    {
        title: "Projet Final",
        description: "Développement d'une application complète pour votre portfolio.",
        technologies: ["Full Stack", "Portfolio", "Déploiement", "Présentation"]
    }
]
</script>

<style scoped>
/* Animations pour les phases */
.space-y-6 > div {
    opacity: 0;
    animation: slideInUp 0.6s ease-out forwards;
}

.space-y-6 > div:nth-child(1) { animation-delay: 0.1s; }
.space-y-6 > div:nth-child(2) { animation-delay: 0.2s; }
.space-y-6 > div:nth-child(3) { animation-delay: 0.3s; }
.space-y-6 > div:nth-child(4) { animation-delay: 0.4s; }
.space-y-6 > div:nth-child(5) { animation-delay: 0.5s; }
.space-y-6 > div:nth-child(6) { animation-delay: 0.6s; }

@keyframes slideInUp {
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
