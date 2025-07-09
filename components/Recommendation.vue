<template>
    <section class="py-24 relative overflow-hidden" id="recommendations">
        <!-- Background decoration -->
        <div class="absolute inset-0 bg-gradient-to-br from-gray-50/80 to-white dark:from-gray-900/80 dark:to-gray-800 -z-10"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.05),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.05),transparent_50%)] -z-10"></div>

        <!-- Floating elements -->
        <div class="absolute top-20 left-10 w-20 h-20 bg-green-400/10 rounded-full blur-xl animate-pulse"></div>
        <div class="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>

        <div class="container mx-auto px-4">
            <SectionHeader
                title="Témoignages"
                subtitle="Ce qu'ils disent de moi"
            />



            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div v-for="(recommendation, index) in recommendations" :key="recommendation.id"
                     class="group relative"
                     :style="{ animationDelay: `${index * 200}ms` }">
                    <!-- Card -->
                    <div class="relative bg-gradient-to-br from-white via-gray-50/50 to-white dark:from-gray-800 dark:via-gray-700/50 dark:to-gray-800 rounded-3xl p-8
                               shadow-[0_8px_32px_-8px_rgba(0,0,0,0.12)] dark:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.4)]
                               transition-all duration-700 ease-out
                               hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.25)] dark:hover:shadow-[0_20px_60px_-12px_rgba(0,0,0,0.5)]
                               border border-gray-200/60 dark:border-gray-600/60
                               hover:-translate-y-3 hover:scale-[1.03]
                               animate-fade-in-up
                               backdrop-blur-sm"
                         :class="[expandedCard === recommendation.id ? 'h-auto' : 'h-[480px]']">

                        <!-- Rating stars -->
                        <div class="flex items-center mb-4">
                            <div class="flex space-x-1">
                                <svg v-for="star in 5" :key="star"
                                     :class="star <= recommendation.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'"
                                     class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                </svg>
                            </div>
                            <span class="ml-2 text-sm text-gray-600 dark:text-gray-400">{{ recommendation.rating }}/5</span>
                        </div>

                        <!-- Author info at the top -->
                        <div class="flex items-center space-x-4 mb-6">
                            <div class="relative flex-shrink-0">
                                <div class="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-full
                                          opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-500"></div>
                                <img :src="recommendation.avatar" :alt="recommendation.name"
                                     class="relative w-16 h-16 rounded-full object-cover border-4 border-white dark:border-gray-800
                                            group-hover:scale-105 transition-transform duration-500">
                            </div>
                            <div class="flex-1">
                                <h4 class="font-semibold text-gray-900 dark:text-white text-lg">{{ recommendation.name }}</h4>
                                <p class="text-sm text-green-600 dark:text-green-400">{{ recommendation.position }}</p>
                                <p class="text-xs text-gray-500 dark:text-gray-400">{{ recommendation.company }}</p>
                            </div>
                        </div>

                        <!-- Quote decoration -->
                        <div class="absolute top-6 right-6">
                            <svg class="w-8 h-8 text-green-400/20 dark:text-green-500/20" fill="currentColor" viewBox="0 0 32 32">
                                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z"/>
                            </svg>
                        </div>

                        <!-- Content -->
                        <div class="relative">
                            <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-lg text-justify"
                               :class="[expandedCard === recommendation.id ? '' : 'line-clamp-[8]']">
                                {{ recommendation.content }}
                            </p>

                            <!-- Gradient overlay for truncated text -->
                            <div v-if="expandedCard !== recommendation.id && isTextTruncated(recommendation.content)"
                                 class="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-gray-800 to-transparent">
                            </div>
                        </div>

                        <!-- Action buttons -->
                        <div class="absolute bottom-6 right-6">
                            <button v-if="expandedCard !== recommendation.id && isTextTruncated(recommendation.content)"
                                    @click="expandCard(recommendation.id)"
                                    class="text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-700
                                           dark:hover:text-green-300 transition-colors duration-300 flex items-center gap-1
                                           hover:bg-green-50 dark:hover:bg-green-900/20 px-3 py-1 rounded-full">
                                <span>Lire plus</span>
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                                </svg>
                            </button>
                            <button v-if="expandedCard === recommendation.id"
                                    @click="expandCard(null)"
                                    class="text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-700
                                           dark:hover:text-green-300 transition-colors duration-300 flex items-center gap-1
                                           hover:bg-green-50 dark:hover:bg-green-900/20 px-3 py-1 rounded-full">
                                <span>Réduire</span>
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
                                </svg>
                            </button>
                        </div>

                        <!-- Hover effect overlay -->
                        <div class="absolute inset-0 bg-gradient-to-br from-green-400/10 via-blue-500/5 to-purple-400/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                        <!-- Border glow effect -->
                        <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-green-400/20 via-blue-500/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-xl"></div>

                        <!-- Corner accent -->
                        <div class="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400/20 to-blue-500/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import SectionHeader from './SectionHeader.vue'

const expandedCard = ref(null)

const expandCard = (id) => {
    expandedCard.value = id
}

const isTextTruncated = (text) => {
    return text.length > 320 // Approximativement 8 lignes de texte
}

const recommendations = ref([
    {
        id: 1,
        content: "Roger est un développeur talentueux avec une grande capacité d'adaptation. Sa maîtrise technique et sa passion pour le partage de connaissances en font un atout précieux pour toute équipe. Il excelle dans la résolution de problèmes complexes et apporte toujours des solutions innovantes.",
        name: "Salomon Dion",
        position: "Manager DATA & Operations",
        company: "ASACI TECHNOLOGIES",
        rating: 5,
        avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Salomon&backgroundColor=b6e3f4"
    },
    {
        id: 2,
        content: "Da Sie est un collaborateur exceptionnel qui travaille avec rigueur et professionnalisme. Travailleur acharné, toujours en quête de savoir et de nouvelles connaissances, c'est un plaisir de mener des débats productifs en sa compagnie. Sa capacité d'apprentissage rapide est remarquable.",
        name: "Colombe Koffi EPSE Diokri",
        position: "Ingénieur Etude",
        company: "GS2E",
        rating: 5,
        avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Colombe"
    },
    {
        id: 3,
        content: "Roger est un développeur qui ne cesse de progresser. L'une de ses plus belles qualités, que j'ai pu observer tout au long de son parcours professionnel, surtout lorsqu'il travaillait dans mon équipe sur divers projets, est sa capacité à se challenger pour répondre aux attentes des clients. Il apprenait constamment et se perfectionnait grâce à l'expérience. Pour lui, aucun projet n'était trop compliqué ou impossible. Si vous avez des projets, quels qu'ils soient, Roger est le développeur qu'il vous faut. Il fait partie des développeurs full-stack les plus complets.",
        name: "Jacques Akaffou",
        position: "Chef projet",
        company: "Freelance",
        rating: 5,
        avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Jacques&backgroundColor=b6e3f4"
    }
])
</script>

<style scoped>
@keyframes fade-in-up {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.animate-fade-in-up {
    animation: fade-in-up 0.6s ease-out forwards;
    opacity: 0;
}

.delay-1000 {
    animation-delay: 1s;
}
</style>
