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

// Import des images Asa-Controller
import asaControllerMain from '~/assets/images/projects/asa-controller/asa.png'

// Import des images Payments
import paymentMain from '~/assets/images/projects/payments/pay.png'

// Import des images SMS
import smsMain from '~/assets/images/projects/sms/main.png'

// Import des images AMA
import amaMain from '~/assets/images/projects/ama/main.jpeg'

// Import des images Cantine
import cantineMain from '~/assets/images/projects/cantine/main.png'
import cantineCapture1 from '~/assets/images/projects/cantine/capture1.png'
import cantineCapture2 from '~/assets/images/projects/cantine/capture2.png'
import cantineCapture3 from '~/assets/images/projects/cantine/capture3.png'

// Import des images Ivoire Stock
import ivoireStockDashboard from '~/assets/images/projects/ivoirestock/dashboard.png'
import ivoireStockRegister from '~/assets/images/projects/ivoirestock/register.png'
import ivoireStockLogin from '~/assets/images/projects/ivoirestock/login.png'
import ivoireStockMouvement from '~/assets/images/projects/ivoirestock/mouvement.png'

// Images WELINK
const welinkImage = welinkLanding
const welinkImages = [
  welinkLanding,
  welinkDashboard,
  welinkCommerce,
  welinkCommerces,
  welinkPharmacies,
  welinkLogin,
]

// Images BAARO (Archives WeLink) - chargement dynamique de toutes les captures disponibles
const baaroImagesGlob = import.meta.glob('~/assets/images/projects/baaro/*.{png,jpg,jpeg}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const baaroImages = Object.values(baaroImagesGlob)
const baaroImage = baaroImages[0] ?? ''

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
  cantineCapture1,
  cantineCapture2,
  cantineCapture3
]

// Images Ivoire Stock
const ivoireStockImage = ivoireStockDashboard
const ivoireStockImages = [
  ivoireStockDashboard,
  ivoireStockRegister,
  ivoireStockLogin,
  ivoireStockMouvement,
]

const packageImage = '/images/package.jpg'
const amaImage = amaMain
const asaControllerImage = asaControllerMain
const letextoImage = smsMain
const paymentImage = paymentMain

// Projets récents (pour RecentProjects)
export const recentProjects: Realisation[] = [
  {
    id: 1,
    type: 'Entreprenariat',
    title: 'WELINK CI',
    description:
      "Plateforme B2B pour connecter les commerces et pharmacies, fluidifier les réservations et aider les propriétaires à piloter l'activité.",
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'TailwindCSS'],
    main_image: welinkImage,
    images: welinkImages,
    slug: 'welink-ci',
    application_link: 'https://welink-ci.com',
    isPublic: true
  },
  {
    id: 2,
    type: 'Entreprenariat',
    title: 'Baaro',
    description:
      "Archives & recherche documentaire avec assistant IA pour retrouver l'information plus vite et répondre plus efficacement.",
    technologies: ['Laravel', 'Vue.js', 'MySQL', 'TailwindCSS'],
    main_image: baaroImage,
    images: baaroImages,
    slug: 'baaro-archives',
    application_link: 'https://archive.welink-ci.com/',
    isPublic: true
  }
]

// Réalisations organisées par catégories
export const realisationsByCategory = {
  'Entreprenariat': [
    {
      id: 1,
      type: 'Entreprenariat',
      title: 'WELINK CI',
      description:
        "Annuaire géolocalisé + mise en relation B2B : on réduit la friction côté client et on donne aux propriétaires une visibilité claire sur l'activité.",
      problem: [
        "Les clients perdent du temps à chercher l'information et à comprendre où réserver/commander.",
        "Les demandes ne sont pas assez fluides : suivi, qualification et finalisation restent difficiles.",
        "Les propriétaires manquent de visibilité pour piloter les conversions et prioriser les améliorations."
      ],
      solution: [
        "Annuaire géolocalisé avec recherche avancée (catégorie + localisation).",
        "Fiches entreprises complètes (horaires, services) + avis et notations.",
        "Système de réservation/commande et dashboard propriétaire avec analytics."
      ],
      benefit: [
        "Parcours plus direct : moins de friction, plus de chances de conversion.",
        "Réservations/commandes mieux orchestrées : moins d'allers-retours côté client et équipes.",
        "Décisions basées sur des données : KPI, tendances et points d'amélioration concrets."
      ],
      kpis: [
        "KPI suivis : réservations/commandes, conversion par zone/catégorie, activité des fiches, avis & notations."
      ],
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'TailwindCSS'],
      main_image: welinkImage,
      images: welinkImages,
      slug: 'welink-ci',
      application_link: 'https://welink-ci.com',
      isPublic: true
    },
    {
      id: 2,
      type: 'Entreprenariat',
      title: 'Baaro',
      description:
        "Archives & gestion documentaire : on transforme les fichiers en connaissance retrouvable et exploitable, via un assistant IA.",
      problem: [
        "Les documents sont dispersés (Word/PDF/images) : temps perdu pour retrouver la bonne version.",
        "Il est difficile de retrouver une information précise sans relire plusieurs fichiers.",
        "Réponses lentes et dépendance à quelques personnes qui savent où chercher."
      ],
      solution: [
        "Organisation par tags et métadonnées pour retrouver vite et bien classer.",
        "Tableau de bord et navigation claire dans les documents.",
        "Assistant IA spécialisé pour interroger les contenus importés (trouver une réponse, pas seulement un fichier)."
      ],
      benefit: [
        "Recherche accélérée : moins de temps passé à fouiller, plus de temps à exécuter.",
        "Moins d'erreurs grâce à la traçabilité et la structure des contenus.",
        "Réponses plus rapides pour les équipes : autonomie renforcée."
      ],
      kpis: [
        "KPI suivis : temps de recherche, volume de requêtes IA, taux de résolution, satisfaction interne."
      ],
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'TailwindCSS'],
      main_image: baaroImage,
      images: baaroImages,
      slug: 'baaro-archives',
      application_link: 'https://archive.welink-ci.com/',
      isPublic: true
    },
    {
      id: 3,
      type: 'SaaS',
      title: 'Ivoire Stock',
      description:
        "Inventaire multi-entrepôts : plus de visibilité, moins de ruptures, et des rapports actionnables pour décider vite.",
      problem: [
        "Stocks peu lisibles en multi-entrepôts : ruptures, surstocks et décisions tardives.",
        "Traçabilité des mouvements insuffisante (entrées, sorties, transferts).",
        "Rapports difficiles à exploiter côté opérationnel."
      ],
      solution: [
        "Suivi des produits par entrepôt/site avec structure par catégorie et emplacement.",
        "Traçabilité des mouvements (entrées, sorties, transferts) pensée pour les équipes terrain.",
        "Tableaux de bord (actifs, alertes stock bas, tendances, capacité) + exports."
      ],
      benefit: [
        "Visibilité temps réel pour mieux planifier et arbitrer.",
        "Réduction des ruptures grâce aux alertes de stock bas et aux écarts suivis.",
        "Efficacité opérationnelle : saisie simplifiée et données plus fiables."
      ],
      kpis: [
        "KPI suivis : alertes stock bas, écarts stock théorique vs réel, rotation, volume de mouvements."
      ],
      technologies: ['Laravel', 'Vue.js', 'TailwindCSS', 'MySQL'],
      main_image: ivoireStockImage,
      images: ivoireStockImages,
      slug: 'ivoire-stock',
      application_link: 'http://stock.welink-ci.com',
      isPublic: true
    }
  ],
  'FuturAfric': [
    {
      id: 3,
      type: 'Fullstack',
      title: 'Cantine Management',
      description: 'Solution complète de gestion de restauration d\'entreprise développée pour FuturAfric. L\'application digitalise tout le processus de cantine : inscription des employés avec badges QR, planification des menus hebdomadaires, système de réservation de repas à l\'avance, suivi des consommations en temps réel, et facturation automatisée par département. Le dashboard administrateur offre des statistiques détaillées sur la fréquentation, les préférences alimentaires et les coûts. Intégration avec le système RH pour la gestion des droits et subventions repas.',
      technologies: ['Laravel', 'MySQL', 'JavaScript'],
      main_image: cantineImage,
      images: cantineImages,
      slug: 'cantine-management',
      application_link: '',
      isPublic: false
    }
  ],
  'ASACI TECHNOLOGIES': [
    {
      id: 4,
      type: 'Frontend',
      title: 'Site ASACI',
      description: 'Refonte complète du site institutionnel de l\'Association des Sociétés d\'Assurances de Côte d\'Ivoire (ASACI), regroupant toutes les compagnies d\'assurance du pays. Le nouveau site présente une interface moderne et professionnelle avec : présentation des 28 sociétés membres, actualités du secteur assurantiel, statistiques du marché, espace documentaire (rapports annuels, études), annuaire des assureurs, et informations réglementaires. Design responsive optimisé pour une navigation fluide sur tous les appareils.',
      technologies: ['HTML', 'TailwindCSS', 'JavaScript'],
      main_image: siteAsaciImage,
      images: siteAsaciImages,
      slug: 'site-asaci',
      application_link: 'https://asaci.net',
      isPublic: true
    },
    {
      id: 5,
      type: 'Mobile',
      title: 'AMA - Application Mobile de L\'assuré',
      description: 'Application mobile native destinée aux assurés ivoiriens pour gérer leur vie assurantielle au quotidien. Fonctionnalités principales : consultation de tous les contrats d\'assurance (auto, santé, vie, habitation), téléchargement des attestations et cartes vertes, déclaration de sinistres avec photos et géolocalisation, suivi en temps réel de l\'état des dossiers, chat avec les gestionnaires, notifications push pour les échéances et remboursements. L\'app communique avec les systèmes de toutes les compagnies membres de l\'ASACI via une API centralisée.',
      technologies: ['React Native', 'Laravel', 'MySQL'],
      main_image: amaImage,
      slug: 'ama-application-mobile',
      application_link: '',
      isPublic: false
    },
    {
      id: 6,
      type: 'Fullstack',
      title: 'Asa-Controller',
      description: 'Plateforme de contrôle et vérification des assurances automobiles en Côte d\'Ivoire, utilisée par les forces de l\'ordre et les agents de contrôle routier. Le système permet de scanner ou saisir un numéro d\'immatriculation pour vérifier instantanément la validité de l\'assurance du véhicule. Fonctionnalités : base de données centralisée de tous les contrats auto du pays, API de vérification en temps réel, historique des contrôles, génération de rapports statistiques, alertes pour les véhicules non assurés. Contribution majeure à la lutte contre la circulation sans assurance.',
      technologies: ['Laravel', 'MySQL', 'JavaScript'],
      main_image: asaControllerImage,
      slug: 'asa-controller',
      application_link: '',
      isPublic: false
    }
  ],
  'Open Source': [
    {
      id: 7,
      type: 'PHP',
      title: 'letexto-sms-package',
      description: 'Package PHP open source pour l\'intégration de l\'API SMS Letexto, un fournisseur majeur en Afrique de l\'Ouest. Le package offre : envoi de SMS unitaires et en masse (bulk), gestion des contacts et groupes, templates de messages personnalisables, validation automatique des numéros ivoiriens, gestion des erreurs et retry automatique, logs détaillés des envois. Intégration Laravel native avec façade, config publishable et commandes artisan. Plus de 500 installations sur Packagist.',
      technologies: ['PHP 8.0+', 'Guzzle', 'Laravel'],
      main_image: letextoImage,
      slug: 'letexto-sms-package',
      application_link: 'https://packagist.org/packages/room/letexto-sms-package',
      isPublic: true
    },
    {
      id: 8,
      type: 'Laravel',
      title: 'laravel-payment-gateways',
      description: 'Package Laravel unifiant plusieurs passerelles de paiement africaines sous une interface unique. Agrégateurs supportés : Cinetpay, Bizao, Winipayer, avec architecture extensible pour ajouter d\'autres providers. Fonctionnalités avancées : failover automatique (bascule sur un autre provider en cas d\'échec), webhooks unifiés avec signature de sécurité, configuration dynamique par tenant, support multi-devises (XOF, XAF, EUR), logs et monitoring des transactions, mode sandbox pour les tests. Documentation complète et tests unitaires inclus.',
      technologies: ['Laravel 9+', 'PHP 8.1+', 'Guzzle'],
      main_image: paymentImage,
      slug: 'laravel-payment-gateways',
      application_link: 'https://packagist.org/packages/room/laravel-payment-gateways',
      isPublic: true
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
