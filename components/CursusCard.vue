<template>
    <div class="group p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 border border-gray-100 hover:border-green-200 relative overflow-hidden">
        <div class="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-green-400 to-green-600 transform origin-left group-hover:scale-x-[3] transition-transform duration-500"></div>
        <div class="relative">
            <div class="flex items-center gap-3 mb-3">
                <span class="text-green-500 text-xs font-semibold">{{ period }}</span>
                <div class="flex-grow h-0.5 bg-gray-100 group-hover:bg-green-100 transition-colors duration-500"></div>
            </div>
            <h3 class="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">{{ title }}</h3>
            <p class="text-gray-600 leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-500">
                {{ description }}
            </p>
        </div>
    </div>
</template>

<script setup>
defineProps({
    period: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
</script>
