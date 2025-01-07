<template>
    <div class="py-8" id="realisations">
        <div class="container mx-auto px-4 max-w-6xl relative">
            <!-- Éléments décoratifs d'arrière-plan -->
            <div class="absolute inset-0 overflow-hidden">
                <div class="absolute top-0 -left-4 w-72 h-72 bg-green-200 dark:bg-green-500/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 animate-blob"></div>
                <div class="absolute top-20 -right-4 w-72 h-72 bg-green-300 dark:bg-green-600/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
                <div class="absolute -bottom-8 left-20 w-72 h-72 bg-green-400 dark:bg-green-700/30 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <!-- Contenu principal -->
            <div class="relative">
                <SectionHeader
                    title="Réalisations"
                    subtitle="Mes top réalisations"
                />

                <section class="relative mt-16">
                    <!-- Grille des réalisations -->
                    <div class="grid grid-cols-1 gap-10 md:grid-cols-2 relative z-10">
                        <div v-for="(realisation, index) in realisations"
                             :key="realisation.id"
                             class="group"
                             :style="{ '--index': index }">
                            <NuxtLink :to="`/realisations/${realisation.slug}`"
                                     class="block transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl dark:hover:shadow-green-500/10 rounded-xl">
                                <RealisationCard :realisation="realisation" />
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- Pattern d'arrière-plan -->
                    <div class="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05] pointer-events-none"></div>
                </section>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'
import type { Realisation } from '~/types/realisation'

const realisations: Realisation[] = ref([])

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
.bg-grid-pattern {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
                      linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px);
    background-size: 40px 40px;
}

@keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
}

.animate-blob {
    animation: blob 7s infinite;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

.animation-delay-4000 {
    animation-delay: 4s;
}

.grid > div {
    opacity: 0;
    animation: fadeIn 0.8s ease-out forwards;
    animation-delay: calc(var(--index) * 0.2s);
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>
