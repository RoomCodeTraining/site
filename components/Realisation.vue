<template>
    <div class="px-8 py-6 rounded-lg lg:mx-32" id="realisations">
        <h2 class="mb-2 text-4xl font-bold">Top réalisations</h2>
        <div class="w-20 h-1 bg-green-500"></div>
        <section class="relative bg-white">
            <div class="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2">
                <div v-for="realisation in realisations" :key="realisation.id">
                    <NuxtLink :to="`/realisations/${realisation.slug}`">
                        <RealisationCard :realisation="realisation" />
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>
<script setup lang="ts">

import type { Realisation } from '~/types/realisation'
    const realisations: Realisation[] = ref([])
     onMounted(async () => {
        const response = await fetch("https://mebackend.roomcodetraining.com/api/realisations")
            .then((response) => response.json())
            .catch((e) => {
                console.log(e)
            });
        console.log(response.data)
        realisations.value = response.data
    })
</script>
<style scoped>
    .fade-out {
        animation: fadeOut 0.5s forwards;
    }

    @keyframes fadeOut {
        to {
            opacity: 0;
            transform: scale(0.9);
        }
    }
</style>
