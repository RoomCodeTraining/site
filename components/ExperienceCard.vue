<template>
    <div class="w-full mx-auto bg-white p-6 shadow-lg rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-xl hover:border-green-300 group">
        <div class="flex flex-col h-full">
            <h3 class="text-lg lg:text-xl font-bold mb-3">
                <span class="bg-gradient-to-r from-green-700 to-green-900 bg-clip-text text-transparent">{{ props.experience.post }}</span>
                <span class="text-gray-700"> chez </span>
                <span class="font-extrabold text-gray-900">{{ props.experience.company }}</span>
            </h3>
            <p class="text-gray-600 mb-4 text-justify leading-relaxed flex-grow">
                {{ props.experience.description }}
            </p>
            <div class="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                <span class="text-sm font-medium px-3 py-1 bg-green-50 text-green-700 rounded-full group-hover:bg-green-100 transition-colors duration-300">
                    {{ props.experience.year }}
                </span>
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
