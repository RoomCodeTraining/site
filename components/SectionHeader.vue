<template>
    <div class="mb-12 group">
        <span class="text-green-500 dark:text-green-400 text-xs font-bold tracking-wider uppercase mb-2 block">{{ subtitle }}</span>
        <h2 class="text-4xl font-bold text-gray-800 dark:text-white relative inline-block">
            {{ title }}
            <div class="absolute -bottom-3 left-0 w-10 h-1 bg-gradient-to-r from-green-400 to-green-600 rounded-full group-hover:w-20 transition-all duration-500"></div>
        </h2>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true
    },
    subtitle: {
        type: String,
        required: true
    }
})
</script>
