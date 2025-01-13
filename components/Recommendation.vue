<template>
    <section class="py-8" id="recommendations">
        <SectionHeader
            title="Témoignages"
            subtitle="Ce qu'ils disent de moi"
        />

        <div class="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="recommendation in recommendations" :key="recommendation.id"
                 class="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900
                        p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500
                        before:absolute before:inset-0 before:bg-gradient-to-br before:from-green-500/5 before:to-blue-500/5
                        before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100
                        border border-gray-100/50 dark:border-gray-700/50 backdrop-blur-sm"
                 :class="[expandedCard === recommendation.id ? 'h-auto' : 'h-[400px]']">

                <!-- Quote icon with dynamic styling -->
                <div class="relative mb-6">
                    <div class="absolute -top-4 -left-2 w-12 h-12 bg-gradient-to-br from-green-500/10 to-blue-500/10
                              rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                    <svg class="w-10 h-10 text-green-500/30 group-hover:text-green-500/40 transform group-hover:rotate-12
                              transition-all duration-500" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z"/>
                    </svg>
                </div>

                <!-- Content with enhanced typography -->
                <div class="flex-1 overflow-hidden relative">
                    <p class="text-gray-600 dark:text-gray-300 leading-relaxed font-light"
                       :class="[expandedCard === recommendation.id ? '' : 'line-clamp-6']">
                        <span class="text-4xl font-serif text-green-500/40 dark:text-green-400/40 leading-3">"</span>
                        {{ recommendation.content }}
                        <span class="text-4xl font-serif text-green-500/40 dark:text-green-400/40 leading-3">"</span>
                    </p>
                    <button v-if="expandedCard !== recommendation.id && isTextTruncated(recommendation.content)"
                            @click="expandCard(recommendation.id)"
                            class="absolute bottom-0 right-0 px-3 py-1 text-sm text-green-600 dark:text-green-400
                                   bg-gradient-to-l from-white dark:from-gray-800 via-white dark:via-gray-800">
                        Lire plus
                    </button>
                    <button v-if="expandedCard === recommendation.id"
                            @click="expandCard(null)"
                            class="mt-2 text-sm text-green-600 dark:text-green-400">
                        Réduire
                    </button>
                </div>

                <!-- Author info with modern layout -->
                <div class="flex items-center space-x-5 mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                    <div class="relative">
                        <div class="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-500 rounded-full blur-sm
                                  opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                        <img :src="recommendation.avatar" :alt="recommendation.name"
                             class="relative w-14 h-14 rounded-full object-cover ring-4 ring-white dark:ring-gray-800
                                    group-hover:scale-105 transition-transform duration-500">
                    </div>
                    <div class="transform group-hover:translate-x-2 transition-transform duration-500">
                        <h4 class="font-semibold text-gray-900 dark:text-white text-lg mb-1">{{ recommendation.name }}</h4>
                        <p class="text-sm text-green-600 dark:text-green-400 font-medium">{{ recommendation.position }}</p>
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
    return text.length > 280 // Approximativement 6 lignes de texte
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
