<template>
    <section class="py-24" id="recommendations">
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
                        border border-gray-100/50 dark:border-gray-700/50 backdrop-blur-sm">

                <!-- Quote icon with dynamic styling -->
                <div class="relative mb-8">
                    <div class="absolute -top-4 -left-2 w-12 h-12 bg-gradient-to-br from-green-500/10 to-blue-500/10
                              rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                    <svg class="w-12 h-12 text-green-500/30 group-hover:text-green-500/40 transform group-hover:rotate-12
                              transition-all duration-500" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z"/>
                    </svg>
                </div>

                <!-- Content with enhanced typography -->
                <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-10 font-light">
                    <span class="text-4xl font-serif text-green-500/40 leading-3">"</span>
                    {{ recommendation.content }}
                    <span class="text-4xl font-serif text-green-500/40 leading-3">"</span>
                </p>

                <!-- Author info with modern layout -->
                <div class="flex items-center space-x-5">
                    <div class="relative">
                        <div class="absolute inset-0 bg-gradient-to-br from-green-500 to-blue-500 rounded-full blur-sm
                                  opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                        <img :src="recommendation.avatar" :alt="recommendation.name"
                             class="relative w-16 h-16 rounded-full object-cover ring-4 ring-white dark:ring-gray-800
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

const recommendations = ref([
    {
        id: 1,
        content: "Roger est un développeur talentueux avec une grande capacité d'adaptation. Sa maîtrise technique et sa passion pour le partage de connaissances en font un atout précieux pour toute équipe.",
        name: "David Kouakou",
        position: "CTO, TechInnov CI",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David"
    },
    {
        id: 2,
        content: "Un formateur exceptionnel qui sait transmettre ses connaissances avec clarté et patience. Sa maîtrise des technologies modernes est remarquable.",
        name: "Sarah Koné",
        position: "Lead Developer, WebSolutions",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
    },
    {
        id: 3,
        content: "Collaborer avec Roger a été une expérience enrichissante. Son professionnalisme et sa rigueur dans le travail sont exemplaires.",
        name: "Marc Diallo",
        position: "Product Manager, DigitalPlus",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marc"
    }
])
</script>
