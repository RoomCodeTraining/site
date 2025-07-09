<template>
    <div class="py-16 lg:py-24 bg-gradient-to-br from-gray-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900/20" id="realisations">
        <div class="container mx-auto px-4 max-w-7xl relative">
            <!-- Éléments décoratifs d'arrière-plan améliorés -->
            <div class="absolute inset-0 overflow-hidden">
                <div class="absolute top-10 -left-20 w-96 h-96 bg-gradient-to-r from-green-400 to-emerald-400 dark:from-green-500/40 dark:to-emerald-500/40 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 animate-blob"></div>
                <div class="absolute top-32 -right-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-cyan-400 dark:from-blue-500/40 dark:to-cyan-500/40 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
                <div class="absolute -bottom-20 left-1/3 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 dark:from-purple-500/40 dark:to-pink-500/40 rounded-full mix-blend-multiply dark:mix-blend-normal filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
            </div>

            <!-- Contenu principal -->
            <div class="relative">
                <SectionHeader
                    title="Réalisations"
                    subtitle="Découvrez mes projets les plus marquants"
                />

                <section class="relative mt-20">
                    <!-- Grille des réalisations améliorée -->
                    <div class="grid grid-cols-1 gap-8 lg:gap-12 xl:grid-cols-2 relative z-10 items-stretch">
                        <div v-for="(realisation, index) in realisations"
                             :key="realisation.id"
                             class="group h-full"
                             :style="{ '--index': index }">
                            <NuxtLink :to="`/realisations/${realisation.slug}`"
                                     class="block h-full transform hover:-translate-y-4 hover:scale-[1.02] transition-all duration-500 ease-out hover:shadow-2xl dark:hover:shadow-green-500/20 rounded-2xl overflow-hidden bg-white dark:bg-gray-800/50 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                                <RealisationCard :realisation="realisation" />
                            </NuxtLink>
                        </div>
                    </div>

                    <!-- Pattern d'arrière-plan amélioré -->
                    <div class="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.03] pointer-events-none"></div>

                    <!-- Éléments décoratifs supplémentaires -->
                    <div class="absolute top-1/2 left-0 w-32 h-32 bg-gradient-to-r from-green-400/20 to-transparent rounded-full blur-3xl"></div>
                    <div class="absolute bottom-0 right-0 w-48 h-48 bg-gradient-to-l from-blue-400/20 to-transparent rounded-full blur-3xl"></div>
                </section>

                <!-- Call to action -->
                <div class="text-center mt-16">
                    <p class="text-gray-600 dark:text-gray-400 text-lg mb-6">
                        Chaque projet raconte une histoire d'innovation et de créativité
                    </p>
                    <div class="flex flex-wrap justify-center gap-4">
                        <div class="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                            <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            <span class="text-sm text-green-700 dark:text-green-300">Projets récents</span>
                        </div>
                        <div class="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                            <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                            <span class="text-sm text-blue-700 dark:text-blue-300">Technologies modernes</span>
                        </div>
                        <div class="flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                            <div class="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                            <span class="text-sm text-purple-700 dark:text-purple-300">Design responsive</span>
                        </div>
                    </div>
                </div>
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
.bg-grid-pattern {
    background-image:
        radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.1) 1px, transparent 0),
        linear-gradient(to right, rgba(0, 0, 0, 0.02) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px);
    background-size: 20px 20px, 40px 40px, 40px 40px;
}

@keyframes blob {
    0% {
        transform: translate(0px, 0px) scale(1) rotate(0deg);
    }
    33% {
        transform: translate(30px, -50px) scale(1.1) rotate(120deg);
    }
    66% {
        transform: translate(-20px, 20px) scale(0.9) rotate(240deg);
    }
    100% {
        transform: translate(0px, 0px) scale(1) rotate(360deg);
    }
}

.animate-blob {
    animation: blob 12s infinite ease-in-out;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

.animation-delay-4000 {
    animation-delay: 4s;
}

.grid > div {
    opacity: 0;
    animation: fadeInUp 1s ease-out forwards;
    animation-delay: calc(var(--index) * 0.15s);
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(40px) scale(0.95);
    }
    to {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

/* Effet de hover amélioré */
.group:hover .group-hover\:scale-\[1\.02\] {
    transform: scale(1.02);
}

/* Animation des badges */
@keyframes pulse {
    0%, 100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.7;
        transform: scale(1.1);
    }
}

.animate-pulse {
    animation: pulse 2s infinite;
}
</style>
