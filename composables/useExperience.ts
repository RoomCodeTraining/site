// import type { RealisationType } from '~/types/realisation'
import type { Experience } from '~/types/experience'

export const useExperience = () => useState<Experience[]>('experiences', () => [
  {
            id: 1,
            year: '2026-maintenant',
            post: "Chef Equipe Exploitation",
            company: "ASACI TECHNOLOGIES",
            description: "Promotion au poste de Chef d'équipe d'exploitation. Je suis maintenant responsable de la supervision et de la coordination de l'équipe technique. Je gère la maintenance des serveurs et des applications, tout en continuant à participer au développement de projets innovants.",
        },
        {
            id: 2,
            year: '2021-2025',
            post: "Technicien d'exploitation & Développeur",
            company: "ASACI TECHNOLOGIES",
            description: "En tant que technicien d'exploitation, j'étais en charge de la maintenance des serveurs et des applications. En tant que développeur, je participais à la réalisation de projets innovants. Cette expérience m'a permis d'évoluer vers un poste de chef d'équipe.",
        },
        {
            id: 3,
            year: '2020-2021',
            post: "Developpeur Fullstack",
            company: "FuturAfric IA",
            description: "En tant que developpeur fullstack, j'avais pour mission de participer à la réalisation de projets innovants. J'ai eu l'opportunité de travailler sur plusieurs projets innovants et de participer à la réalisation de projets de grande envergure."
        },
        {
            id: 4,
            year: '2019-2021',
            post: "Developpeur Fullstack",
            company: "Webturba",
            description: "En tant que développeur fullstack, j'ai été chargé de contribuer à la réalisation de projets novateurs. J'ai eu l'occasion de collaborer sur divers projets innovants et de prendre part à des initiatives d'envergure."
        }
]);
