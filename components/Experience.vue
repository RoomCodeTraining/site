<template>
    <section class="py-8" id="experiences">
        <SectionHeader
            title="Experiences"
            subtitle="Mes expériences professionnelles"
        />

        <!-- Enhanced Controls Section -->
        <div class="mt-12 mb-8">
            <div class="flex flex-col lg:flex-row gap-6 items-center justify-between">
                <!-- Year Filter with enhanced design -->
                <div class="flex flex-wrap gap-3">
                    <button
                        @click="selectedYear = 'all'"
                        :class="[
                            'px-6 py-3 rounded-xl font-semibold transition-all duration-500 transform hover:scale-105 border-2',
                            selectedYear === 'all'
                                ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg shadow-green-500/25 border-green-600'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20 border-gray-200 dark:border-gray-600 hover:border-green-300 dark:hover:border-green-500'
                        ]"
                    >
                        <span class="flex items-center gap-2">
                            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                            </svg>
                            Toutes les années
                        </span>
                    </button>
                    <button
                        v-for="year in uniqueYears"
                        :key="year"
                        @click="selectedYear = year"
                        :class="[
                            'px-6 py-3 rounded-xl font-semibold transition-all duration-500 transform hover:scale-105 border-2',
                            selectedYear === year
                                ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-lg shadow-green-500/25 border-green-600'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-green-900/20 border-gray-200 dark:border-gray-600 hover:border-green-300 dark:hover:border-green-500'
                        ]"
                    >
                        {{ year }}
                    </button>
                </div>

                <!-- Enhanced View Toggle -->
                <div class="flex items-center gap-3 bg-white dark:bg-gray-800 rounded-xl p-2 border-2 border-gray-200 dark:border-gray-600 shadow-sm">
                    <span class="text-sm font-medium text-gray-600 dark:text-gray-400 px-3">Vue:</span>
                    <button
                        @click="viewMode = 'grid'"
                        :class="[
                            'p-3 rounded-lg transition-all duration-300 transform hover:scale-105 border-2',
                            viewMode === 'grid'
                                ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-md border-green-600'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 border-transparent hover:border-gray-300 dark:hover:border-gray-500'
                        ]"
                    >
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                    </button>
                    <button
                        @click="viewMode = 'list'"
                        :class="[
                            'p-3 rounded-lg transition-all duration-300 transform hover:scale-105 border-2',
                            viewMode === 'list'
                                ? 'bg-gradient-to-r from-green-600 to-green-700 text-white shadow-md border-green-600'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 border-transparent hover:border-gray-300 dark:hover:border-gray-500'
                        ]"
                    >
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <!-- Simplified Layout -->
        <div class="mt-8">
            <!-- No results message -->
            <div v-if="filteredExperiences.length === 0" class="text-center py-16">
                <div class="text-gray-400 mb-6">
                    <svg class="w-20 h-20 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
                    </svg>
                </div>
                <h3 class="text-xl font-semibold text-gray-600 mb-3">Aucune expérience trouvée</h3>
                <p class="text-gray-500">Essayez de sélectionner une autre année</p>
            </div>

            <!-- Grid View -->
            <div v-else-if="viewMode === 'grid'" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <TransitionGroup
                    name="list"
                    tag="div"
                    class="contents"
                >
                    <div v-for="(experience, index) in filteredExperiences" :key="experience.id"
                         :style="{ animationDelay: `${index * 0.15}s` }"
                         class="animate-fade-in-up">
                        <ExperienceCard :experience='experience' />
                    </div>
                </TransitionGroup>
            </div>

            <!-- List View -->
            <div v-else class="space-y-6">
                <TransitionGroup
                    name="list"
                    tag="div"
                    class="space-y-6"
                >
                    <div v-for="(experience, index) in filteredExperiences" :key="experience.id"
                         :style="{ animationDelay: `${index * 0.15}s` }"
                         class="animate-fade-in-up">
                        <ExperienceCard :experience='experience' />
                    </div>
                </TransitionGroup>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const experiences = useExperience()

// Reactive state
const selectedYear = ref('all')
const viewMode = ref<'grid' | 'list'>('grid')

// Computed properties
const uniqueYears = computed(() => {
    const years = [...new Set(experiences.value.map(exp => exp.year))]
    return years.sort((a, b) => parseInt(b) - parseInt(a))
})

const filteredExperiences = computed(() => {
    let filtered = experiences.value

    // Filter by year
    if (selectedYear.value !== 'all') {
        filtered = filtered.filter(exp => exp.year === selectedYear.value)
    }

    return filtered
})
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
    transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}
.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px) scale(0.95);
}

.list-move {
    transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

@keyframes fade-in-up {
    0% {
        opacity: 0;
        transform: translateY(30px) scale(0.95);
    }
    100% {
        opacity: 1;
        transform: translateY(0) scale(1);
    }
}

.animate-fade-in-up {
    animation: fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
}
</style>
