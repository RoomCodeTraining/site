<template>
    <li>
        <a :href="props.link"
            class="relative py-2 px-3 text-gray-900 text-base lg:text-lg font-medium rounded hover:text-green-600 md:hover:bg-transparent md:border-0 md:p-0 dark:text-white dark:hover:text-green-400 transition-all duration-300 ease-in-out">
            {{ capitalize(props.title) }}
            <span class="absolute left-0 bottom-0 w-0 h-0.5 bg-green-600 dark:bg-green-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
        </a>
    </li>
</template>
<script setup>
    const props = defineProps({
        title: String,
        link : String,
    });

    const capitalize = (str) => {
        if (!str) return ''
        return str.charAt(0).toUpperCase() + str.slice(1)
    }
</script>

<style scoped>
a:hover .absolute {
    width: 100%;
}
</style>
