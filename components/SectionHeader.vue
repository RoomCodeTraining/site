<template>
    <div class="mb-8 sm:mb-12 group">
        <span class="text-slate-500 dark:text-slate-400 text-xs font-semibold tracking-wider uppercase mb-2 sm:mb-3 block">{{ subtitle }}</span>
        <h2 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white relative inline-block">
            {{ title }}
            <div class="absolute -bottom-1 sm:-bottom-2 left-0 w-8 sm:w-12 h-0.5 bg-slate-900 dark:bg-white rounded-full group-hover:w-16 sm:group-hover:w-20 transition-all duration-300"></div>
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
