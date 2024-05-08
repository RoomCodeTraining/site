<template>
    <div class="px-8 py-6  rounded-lg lg:mx-32" id="experiences">
        <h2 class="text-4xl lg:text-4xl font-bold mb-2">Experiences</h2>
        <div class="h-1 w-20 bg-green-500"></div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 mt-8">
            <div class="w-full h-auto bg-gray-100 p-6 rounded-lg shadow-lg text-center border-2">
                <div class="flex items-center justify-center mb-4">
                    <span
                        class="text-7xl font-bold text-green-900 mr-2 px-2 rounded-sm border-green-900">
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
                <ExperienceCard :year="experience.year" :post="experience.post" :company="experience.company"
                    :description="experience.description" />
            </div>
        </div>
    </div>
</template>

<script setup>
    const experiences = [{
            id: 1,
            year: '2021-maintenant',
            post: "Technicien d'exploitation & Developpeur",
            company: "ASACI TECHS",
            description: "En tant que technicien d'exploitation, je suis en charge de la maintenance des serveurs et des applications. En tant que développeur, je participe à la réalisation de projets innovants.",
        },
        {
            id: 2,
            year: '2020-2021',
            post: "Developpeur Fullstack",
            company: "FuturAfric IA",
            description: "En tant que developpeur fullstack, j'avais pour mission de participer à la réalisation de projets innovants. J'ai eu l'opportunité de travailler sur plusieurs projets innovants et de participer à la réalisation de projets de grande envergure."
        },
        {
            id: 3,
            year: '2019-2021',
            post: "Developpeur Fullstack",
            company: "Webturba",
            description: "En tant que développeur fullstack, j'ai été chargé de contribuer à la réalisation de projets novateurs. J'ai eu l'occasion de collaborer sur divers projets innovants et de prendre part à des initiatives d'envergure."
        }
    ];
</script>
