<template>
    <div class="w-full bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:border-green-300 dark:hover:border-green-500 group">
        <div class="flex flex-col h-full">
            <!-- Header -->
            <div class="mb-4">
                <div class="flex items-start justify-between mb-3">
                    <h3 class="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                        {{ props.experience.post }}
                    </h3>
                    <!-- Year badge -->
                    <span class="text-sm font-medium px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-300 rounded-full border border-green-200 dark:border-green-800">
                        {{ props.experience.year }}
                    </span>
                </div>

                <!-- Company name -->
                <div class="flex items-center gap-2">
                    <div class="w-2 h-2 bg-green-500 rounded-full border border-green-600"></div>
                    <span class="font-semibold text-gray-700 dark:text-gray-300">{{ props.experience.company }}</span>
                </div>
            </div>

            <!-- Description -->
            <p class="text-gray-600 dark:text-gray-400 mb-4 text-justify leading-relaxed flex-grow">
                {{ props.experience.description }}
            </p>

            <!-- Footer -->
            <div class="mt-auto pt-4 border-t-2 border-gray-100 dark:border-gray-700">
                <div class="flex items-center justify-between">
                    <span class="text-sm text-gray-500 dark:text-gray-400">Expérience validée</span>
                    <button class="text-sm font-medium text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300 transition-colors duration-300 border-b border-transparent hover:border-green-600 dark:hover:border-green-400">
                        Voir détails →
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Experience } from '~/types/experience'

const props = defineProps({
    experience: {
        type: Object as () => Experience,
        required: true
    },
})
</script>

<style scoped>
@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

.animate-pulse {
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
