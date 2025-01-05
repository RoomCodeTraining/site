<template>
    <div class="group relative overflow-hidden bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500">
        <!-- Image container avec overlay -->
        <div class="relative overflow-hidden aspect-video">
            <img :src="props.realisation.main_image"
                 :alt="props.realisation.title"
                 class="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 ease-out">
            <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

            <!-- Type badge -->
            <span class="absolute top-4 left-4 px-3 py-1 text-sm font-medium text-white bg-green-500/80 backdrop-blur-sm rounded-full
                       shadow-lg transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                {{ props.realisation.type }}
            </span>
        </div>

        <!-- Content -->
        <div class="p-8 relative">
            <!-- Decorative line -->
            <div class="absolute top-0 inset-x-8 h-px bg-gradient-to-r from-transparent via-green-500/20 to-transparent"></div>

            <!-- Title -->
            <h3 class="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4 group-hover:from-green-600 group-hover:to-green-400 transition-all duration-500">
                {{ props.realisation.title }}
            </h3>

            <!-- Description -->
            <p class="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3" v-html="props.realisation.description"></p>

            <!-- Technologies -->
            <div class="space-y-3">
                <h4 class="text-sm font-medium text-gray-700 flex items-center gap-2">
                    <svg class="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"/>
                    </svg>
                    Technologies utilisées
                </h4>
                <div class="flex flex-wrap gap-2">
                    <span v-for="technology in props.realisation.technologies"
                          :key="technology"
                          class="px-3 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded-full
                                 hover:bg-green-50 hover:text-green-700 hover:scale-105 transform transition-all duration-300">
                        {{ technology }}
                    </span>
                </div>
            </div>

            <!-- Bottom gradient line -->
            <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-green-500 to-green-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Realisation } from '~/types/realisation'

const props = defineProps({
    realisation: {
        type: Object as () => Realisation,
        required: true
    },
})
</script>

<style scoped>
.aspect-video {
    aspect-ratio: 16 / 9;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>
