<template>
    <div class="px-8 py-6  rounded-lg lg:mx-32" id="experiences">
        <h2 class="text-4xl lg:text-4xl font-bold mb-2">Experiences</h2>
        <div class="h-1 w-20 bg-green-500"></div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 mt-8">
            <div class="w-full h-auto bg-gray-100 p-6 rounded-lg shadow-lg text-center border-2">
                <div class="flex items-center justify-center mb-4">
                    <span class="text-7xl font-bold text-green-900 mr-2 px-2 rounded-sm border-green-900">
                        4
                    </span>
                    <span class="text-lg font-semibold">ans d'expérience</span>
                </div>
                <p class="text-lg text-gray-900 text-left lg:text-center">
                    Depuis 2019, j'ai eu l'opportunité de travailler sur plusieurs projets innovants et de participer à
                    la réalisation de projets de grande envergure.
                </p>
            </div>
            <div v-for="experience in experiences" :key="experience.id">
                <ExperienceCard :experience='experience' />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    const experiences = useExperience()
</script>
