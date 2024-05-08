import ahio from '~/assets/images/ahio.png'
import daylivro from '~/assets/images/daylivro.png'
import cantine from '~/assets/images/cantine.png'
import realisation from '~/assets/images/realisation.png'
import controller from '~/assets/images/controller.png'
import asaci from '~/assets/images/asaci.png'
import larapass from '~/assets/images/larapass.png'
// import type { RealisationType } from '~/types/realisation'
import type { Realisation } from '~/types/realisation'

export const useRealisation = () => useState<Realisation[]>('realisations', () => [
{
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
            technologies: ['TALL', 'MySQL'],
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
]);
