import type { Realisation } from '~/types/realisation'

// Import des images WELINK
import welinkLanding from '~/assets/images/projects/welink/landing.png'
import welinkDashboard from '~/assets/images/projects/welink/dashboard.png'
import welinkCommerce from '~/assets/images/projects/welink/commerce.png'
import welinkCommerces from '~/assets/images/projects/welink/commerces.png'
import welinkPharmacies from '~/assets/images/projects/welink/pharmacies.png'
import welinkLogin from '~/assets/images/projects/welink/login.png'

// Import des images ASACI
import asaciMain from '~/assets/images/projects/asaci/main.png'
import asaciCapture from '~/assets/images/projects/asaci/capture.png'
import asaciCapture2 from '~/assets/images/projects/asaci/capture2.png'

// Import des images Cantine
import cantineMain from '~/assets/images/projects/cantine/main.png'

// Images WELINK
const welinkImage = welinkLanding
const welinkImages = [
  welinkLanding,
  welinkDashboard,
  welinkCommerce,
  welinkCommerces,
  welinkPharmacies,
  welinkLogin
]

// Images ASACI
const siteAsaciImage = asaciMain
const siteAsaciImages = [
  asaciMain,
  asaciCapture,
  asaciCapture2
]

// Images Cantine
const cantineImage = cantineMain
const cantineImages = [
  cantineMain
]

const packageImage = '/images/package.jpg'
const amaImage = '/images/ama.jpg'
const asaControllerImage = '/images/controller.png'
const letextoImage = '/images/letexto.jpg'
const paymentImage = '/images/payment.jpg'

// Projets récents (pour RecentProjects)
export const recentProjects: Realisation[] = [
  {
    id: 1,
    type: 'Entreprenariat',
    title: 'WELINK CI',
    description: 'Plateforme de gestion et de connexion pour les entreprises en Côte d\'Ivoire. Solution complète pour faciliter les échanges et la collaboration entre entreprises.',
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'TailwindCSS'],
    main_image: welinkImage,
    images: welinkImages,
    slug: 'welink-ci',
    application_link: 'https://welink.ci'
  },
  {
    id: 2,
    type: 'Open Source',
    title: 'Laravel Payment Gateways',
    description: 'Package Laravel réutilisable pour gérer plusieurs agrégateurs de paiement (Cinetpay, Bizao, Winipayer) avec failover automatique, webhooks intégrés et configuration dynamique.',
    technologies: ['Laravel', 'PHP', 'Guzzle'],
    main_image: paymentImage,
    slug: 'laravel-payment-gateways',
    application_link: 'https://packagist.org/packages/room/laravel-payment-gateways'
  }
]

// Réalisations organisées par catégories
export const realisationsByCategory = {
  'Entreprenariat': [
    {
      id: 1,
      type: 'Entreprenariat',
      title: 'WELINK CI',
      description: 'Plateforme de gestion et de connexion pour les entreprises en Côte d\'Ivoire. Solution complète pour faciliter les échanges et la collaboration entre entreprises.',
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'TailwindCSS'],
      main_image: welinkImage,
      images: welinkImages,
      slug: 'welink-ci',
      application_link: 'https://welink.ci'
    }
  ],
  'FuturAfric': [
    {
      id: 3,
      type: 'Fullstack',
      title: 'Cantine Management',
      description: 'Application de gestion de cantine pour entreprise. Cette application permet de gérer les repas des employés d\'une entreprise, la facturation et la gestion des commandes.',
      technologies: ['Laravel', 'MySQL', 'JavaScript'],
      main_image: cantineImage,
      images: cantineImages,
      slug: 'cantine-management',
      application_link: ''
    }
  ],
  'ASACI TECHNOLOGIES': [
    {
      id: 4,
      type: 'Frontend',
      title: 'Site ASACI',
      description: 'Réalisation de la refonte du site de l\'Association des Sociétés d\'Assurances de Côte d\'Ivoire (ASACI). Interface moderne et responsive pour présenter les activités de l\'association.',
      technologies: ['HTML', 'TailwindCSS', 'JavaScript'],
      main_image: siteAsaciImage,
      images: siteAsaciImages,
      slug: 'site-asaci',
      application_link: ''
    },
    {
      id: 5,
      type: 'Mobile',
      title: 'AMA - Application Mobile de L\'assuré',
      description: 'Application mobile permettant aux assurés de gérer leurs contrats d\'assurance, consulter leurs documents, effectuer des déclarations de sinistres et suivre leurs dossiers en temps réel.',
      technologies: ['React Native', 'Laravel', 'MySQL'],
      main_image: amaImage,
      slug: 'ama-application-mobile',
      application_link: ''
    },
    {
      id: 6,
      type: 'Fullstack',
      title: 'Asa-Controller',
      description: 'Plateforme de gestion des vérifications de la validité des assurances automobiles en Côte d\'Ivoire. Système permettant de contrôler et valider les polices d\'assurance automobile.',
      technologies: ['Laravel', 'MySQL', 'JavaScript'],
      main_image: asaControllerImage,
      slug: 'asa-controller',
      application_link: ''
    }
  ],
  'Open Source': [
    {
      id: 7,
      type: 'PHP',
      title: 'letexto-sms-package',
      description: 'Package PHP pour l\'envoi de SMS via l\'API Letexto. Support de l\'envoi simple et en masse, intégration Laravel native, gestion des erreurs et validation des numéros.',
      technologies: ['PHP 8.0+', 'Guzzle', 'Laravel'],
      main_image: letextoImage,
      slug: 'letexto-sms-package',
      application_link: 'https://packagist.org/packages/room/letexto-sms-package'
    },
    {
      id: 8,
      type: 'Laravel',
      title: 'laravel-payment-gateways',
      description: 'Package Laravel réutilisable pour gérer plusieurs agrégateurs de paiement (Cinetpay, Bizao, Winipayer) avec failover automatique, webhooks intégrés et configuration dynamique.',
      technologies: ['Laravel 9+', 'PHP 8.1+', 'Guzzle'],
      main_image: paymentImage,
      slug: 'laravel-payment-gateways',
      application_link: 'https://packagist.org/packages/room/laravel-payment-gateways'
    }
  ]
}

// Toutes les réalisations (pour la page de détail)
export const allRealisations: Realisation[] = [
  ...realisationsByCategory['Entreprenariat'],
  ...realisationsByCategory['FuturAfric'],
  ...realisationsByCategory['ASACI TECHNOLOGIES'],
  ...realisationsByCategory['Open Source']
]
