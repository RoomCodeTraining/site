<template>
    <section class="py-24 relative overflow-hidden" id="recommendations">
        <!-- Background decoration -->
        <div class="absolute inset-0 bg-gradient-to-br from-gray-50/80 to-white dark:from-gray-900/80 dark:to-gray-800 -z-10"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,197,94,0.05),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.05),transparent_50%)] -z-10"></div>

        <div class="container mx-auto px-4">
            <SectionHeader
                title="Témoignages"
                subtitle="Ce qu'ils disent de moi"
            />

            <div class="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <div v-for="recommendation in recommendations" :key="recommendation.id"
                     class="group relative">
                    <!-- Card -->
                    <div class="relative bg-white dark:bg-gray-800 rounded-2xl p-8
                               shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)] dark:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.3)]
                               transition-all duration-500 ease-out
                               hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.2)] dark:hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.4)]
                               border border-gray-100/50 dark:border-gray-700/50"
                         :class="[expandedCard === recommendation.id ? 'h-auto' : 'h-[460px]']">

                        <!-- Author info at the top -->
                        <div class="flex items-center space-x-4 mb-6">
                            <div class="relative flex-shrink-0">
                                <div class="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-500 rounded-full
                                          opacity-75 blur-md group-hover:opacity-100 transition-opacity duration-500"></div>
                                <img :src="recommendation.avatar" :alt="recommendation.name"
                                     class="relative w-16 h-16 rounded-full object-cover border-4 border-white dark:border-gray-800
                                            group-hover:scale-105 transition-transform duration-500">
                            </div>
                            <div>
                                <h4 class="font-semibold text-gray-900 dark:text-white text-lg">{{ recommendation.name }}</h4>
                                <p class="text-sm text-green-600 dark:text-green-400">{{ recommendation.position }}</p>
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
                            <p class="text-gray-600 dark:text-gray-300 leading-relaxed text-lg"
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
                                           dark:hover:text-green-300 transition-colors duration-300 flex items-center gap-1">
                                <span>Lire plus</span>
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                                </svg>
                            </button>
                            <button v-if="expandedCard === recommendation.id"
                                    @click="expandCard(null)"
                                    class="text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-700
                                           dark:hover:text-green-300 transition-colors duration-300 flex items-center gap-1">
                                <span>Réduire</span>
                                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
                                </svg>
                            </button>
                        </div>
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
        content: "Roger est un développeur talentueux avec une grande capacité d'adaptation. Sa maîtrise technique et sa passion pour le partage de connaissances en font un atout précieux pour toute équipe.",
        name: "Salomon Dion",
        position: "Manager DATA & Operations, ASACI TECHNOLOGIES",
        avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Salomon&backgroundColor=b6e3f4"
    },
    {
        id: 2,
        content: "Da Sie est un collaborateur exceptionnel qui travaille avec rigueur et professionnalisme. Travailleur archarné, toujours en quête de savoir et nouvelle connaissance, c'est un plaisir de mener des débats productifs en sa compagnie.",
        name: "Colombe Koffi EPSE Diokri",
        position: "Ingénieur Etude, GS2E",
        avatar: "https://api.dicebear.com/7.x/notionists/svg?seed=Colombe"
    },
    {
        id: 3,
        content: "Roger est un développeur qui ne cesse de progresser. L'une de ses plus belles qualités, que j'ai pu observer tout au long de son parcours professionnel, surtout lorsqu'il travaillait dans mon équipe sur divers projets, est sa capacité à se challenger pour répondre aux attentes des clients. Il apprenait constamment et se perfectionnait grâce à l'expérience. Pour lui, aucun projet n'était trop compliqué ou impossible. Si vous avez des projets, quels qu'ils soient, Roger est le développeur qu'il vous faut. Il fait partie des développeurs full-stack les plus complets. ",
        name: "Jacques Akaffou",
        position: "Chef projet",
        avatar: "https://api.dicebear.com/7.x/personas/svg?seed=Jacques&backgroundColor=b6e3f4"
    }
])
</script>
