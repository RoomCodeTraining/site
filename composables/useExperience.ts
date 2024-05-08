// import type { RealisationType } from '~/types/realisation'
import type { Experience } from '~/types/experience'

export const useExperience = () => useState<Experience[]>('experiences', () => [
  {
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
]);
