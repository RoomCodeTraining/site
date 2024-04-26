<template>
    <div class="py-6 mt-8 rounded-lg" id="experiences">
        <h2 class="text-xl lg:text-4xl font-bold mb-2">Mes Experiences professionnelles</h2>
        <div class="h-1 w-20 bg-green-500"></div>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 mt-8">
            <div class="w-auto h-auto bg-gray-100 p-6 rounded-lg shadow-lg text-center border-2">
                <div class="flex items-center justify-center mb-4">
                    <span class="text-7xl font-bold text-green-900 mr-2">5</span>
                    <span class="text-lg font-semibold">ans d'expérience</span>
                </div>
                <p class="text-lg text-gray-900 text-left lg:text-center">
                    Depuis 2019, j'ai eu l'opportunité de travailler sur plusieurs projets innovants et de participer à
                    la réalisation de projets de grande envergure.
                </p>
            </div>
            <ExperienceCard year='2021-maintenant' post="Technicien d'exploitation & Developpeur"
                description="En tant que technicien d'exploitation, je suis en charge de la maintenance des serveurs et des applications. En tant que développeur, je participe à la réalisation de projets innovants."
                company="ASACI TECHNOLOGIES" />
            <ExperienceCard year='2020-2021' post="Developpeur Fullstack"
                description="En tant que technicien d'exploitation, je suis en charge de la maintenance des serveurs et des applications. En tant que développeur, je participe à la réalisation de projets innovants."
                company="FuturAfric IA" />
            <ExperienceCard year='2019-2021' post="Developpeur Fullstack"
                description="En tant que technicien d'exploitation, je suis en charge de la maintenance des serveurs et des applications. En tant que développeur, je participe à la réalisation de projets innovants."
                company="Webturba" />
        </div>
    </div>
</template>

<script setup></script>
