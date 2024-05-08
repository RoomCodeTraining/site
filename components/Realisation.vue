<template>
    <div class="px-8 py-6 rounded-lg lg:mx-32" id="realisations">
        <h2 class="text-4xl font-bold mb-2">Mon portefolio</h2>
        <div class="h-1 w-20 bg-green-500"></div>
        <section class="relative bg-white">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div v-for="realisation in realisations" :key="realisation.id">
                    <RealisationCard :type="realisation.type" :title="realisation.title"
                        :description="realisation.description" :technologies="realisation.technologies"
                        :image="realisation.image" />
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
import ahio from '~/assets/images/ahio.png'
import daylivro from '~/assets/images/daylivro.png'
import cantine from '~/assets/images/cantine.png'
import realisation from '~/assets/images/realisation.png'
import controller from '~/assets/images/controller.png'
import asaci from '~/assets/images/asaci.png'
import larapass from '~/assets/images/larapass.png'

    const realisations = [{
            id: 1,
            type: "Backend",
            title: "Ahio",
            description: "Mise en place d'une API RESTful pour la gestion des residences et biens. Application de gestion des biens immobiliers.",
            technologies: ['Laravel', 'MySQL'],
            image: ahio
        },
        {
            id: 2,
            type: "Fullstack",
            title: "Daylivro",
            description: "Application de gestions des etablissements(restaurants, gloceries, supermarchés, etc.)",
            technologies: ['Laravel', 'MySQL'],
            image: daylivro
        },
        {
            id: 3,
            type: "Frontend",
            title: "Site du cabinet YOBSAJ",
            description: "Réalisation du site web du cabinet YOBSAJ, cabinet d'expertise juridique en cote d'ivoire'.",
            technologies: ['HTML', 'CSS', 'JS'],
            image: realisation
        },
        {
            id: 4,
            type: "Fullstack",
            title: "Cantine Management",
            description: "Application de gestion de cantine pour entreprise. Cette application permet de gerer les repas des employés d'une entreprise, la facturation et la gestion des commandes.",
            technologies: ['Laravel', 'MySQL', 'JS'],
            image: cantine
        },
        {
            id: 5,
            type: "Fullstack",
            title: "Asa-controller",
            description: "Asa-controller est une plateforme de gestion des verifications de la validité des assurances automobiles en Cote d'Ivoire.",
            technologies: ['Laravel', 'MySQL', 'JS'],
            image: controller
        },
        {
            id: 6,
            type: "frontend",
            title: "Site ASACI",
            description: 'Réalisation de la refonte du site de l\'Association des Sociétés d\'Assurances de Côte d\'Ivoire(ASACI)',
            technologies: ['HTML', 'TailwindCss'],
            image: asaci
        },
        {
            id: 7,
            type: "Backend",
            title: "NodeJs API",
            description: "Petite application nodeJS pour la creation de ticket",
            technologies: ['NodeJS', 'MySQL'],
            image: ahio
        },
        {
            id: 8,
            type: "Frontend",
            title: "Module de commentaire",
            description: "Mise en place d'un module de commentaire pour un blog",
            technologies: ['JS', 'VueJs', 'TailwindCss'],
            image: ahio
        },
        {
            id: 9,
            type: "Fullstack",
            title: "Larapass",
            description: "Création d'un clone de Samapass, une application de billerterie en ligne",
            technologies: ['Laravel', 'MySQL', 'JS'],
            image: larapass
        }
    ];
</script>
