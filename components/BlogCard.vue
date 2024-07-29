<template>
    <div class="">
        <div
            class="w-full  rounded-lg shadow-lg border-b-4 project-card hover:border-green-500 hover:-translate-y-2 hover:shadow-2xl">
            <div>
                <img :src="article.image" alt="realisation" class="w-full h-72 object-cover rounded-lg  relative">
            </div>
            <div class="mt-8 mx-4 mb-2">
                <span class="text-md font-bold mb-4">{{ article.category }}</span>
                <p class="text-gray-700 text-justify mt-5">
                    {{ article.title }}
                </p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    const props = defineProps({
        article: {
            type: Object,
            required: true
        },
    })
</script>
<style scoped>
    .project-card {
        transition: all 0.5s ease;
    }

    .project-card:hover {
        border-color: #4caf50;
        transform: translateY(-12px);
        box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
    }
</style>
