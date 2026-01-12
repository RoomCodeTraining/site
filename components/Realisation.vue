<template>
    <div class="py-12 sm:py-16 lg:py-24 bg-white dark:bg-slate-950" id="realisations">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative">
            <!-- Arrière-plan minimaliste -->
            <div class="absolute inset-0 overflow-hidden" aria-hidden="true">
                <div class="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
            </div>

            <!-- Contenu principal -->
            <div class="relative">
                <SectionHeader
                    title="Réalisations"
                    subtitle="Découvrez mes projets les plus marquants"
                />

                <section class="relative mt-8 sm:mt-12">
                    <!-- Grille des réalisations avec nouveau design -->
                    <div class="grid grid-cols-1 gap-6 sm:gap-8 lg:gap-10 xl:grid-cols-2 relative z-10">
                        <div
                          v-for="(realisation, index) in realisations"
                          :key="realisation.id"
                          class="group"
                          :style="{ '--index': index }"
                        >
                          <NuxtLink
                            :to="`/realisations/${realisation.slug}`"
                            class="block h-full relative overflow-hidden rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 dark:hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                          >
                            <RealisationCard :realisation="realisation" />

                            <!-- Effet de brillance au hover -->
                            <div
                              class="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                            ></div>
                          </NuxtLink>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'
import type { Realisation } from '~/types/realisation'

const realisations = ref<Realisation[]>([])

onMounted(async () => {
    try {
        const response = await fetch("https://mebackend.roomcodetraining.com/api/realisations")
        const data = await response.json()
        realisations.value = data.data
    } catch (error) {
        console.error("Erreur lors du chargement des réalisations:", error)
    }
})
</script>

<style scoped>
.grid > div {
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
    animation-delay: calc(var(--index) * 0.1s);
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
