<template>
  <Header />
  <div class="min-h-screen bg-white dark:bg-slate-950 pt-20">
    <article v-if="post" class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <!-- Breadcrumb -->
      <nav class="mb-8" aria-label="Fil d'Ariane">
        <ol class="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <li>
            <NuxtLink to="/" class="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">Accueil</NuxtLink>
          </li>
          <li>/</li>
          <li>
            <NuxtLink to="/blog" class="hover:text-orange-500 dark:hover:text-orange-400 transition-colors">Blog</NuxtLink>
          </li>
          <li>/</li>
          <li class="text-slate-900 dark:text-white font-medium">{{ post.title }}</li>
        </ol>
      </nav>

      <!-- En-tête -->
      <header class="mb-10 sm:mb-12">
        <div class="flex flex-wrap gap-2 mb-4">
          <span class="px-3 py-1 bg-orange-500/10 dark:bg-orange-400/10 text-orange-600 dark:text-orange-400 text-sm font-medium rounded-lg">
            {{ post.category }}
          </span>
          <span class="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-sm rounded-lg">
            {{ post.readTime }} min de lecture
          </span>
        </div>
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white font-display leading-tight mb-4">
          {{ post.title }}
        </h1>
        <p class="text-lg text-slate-600 dark:text-slate-300 mb-4">
          {{ post.excerpt }}
        </p>
        <div class="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
          <span>{{ post.author }}</span>
          <span>{{ post.date }}</span>
        </div>
      </header>

      <!-- Contenu -->
      <div class="prose prose-slate dark:prose-invert prose-lg max-w-none">
        <div
          v-for="(block, i) in post.blocks"
          :key="i"
          class="mb-8"
        >
          <h2 v-if="block.title" class="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mt-10 mb-4 first:mt-0">
            {{ block.title }}
          </h2>
          <div class="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
            <p v-for="(para, j) in block.paragraphs" :key="j">
              {{ para }}
            </p>
          </div>
          <ul v-if="block.list" class="list-disc pl-6 space-y-2 my-4 text-slate-600 dark:text-slate-300">
            <li v-for="(item, k) in block.list" :key="k">{{ item }}</li>
          </ul>
        </div>
      </div>

      <!-- Retour -->
      <div class="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800">
        <NuxtLink
          to="/blog"
          class="inline-flex items-center gap-2 text-orange-500 dark:text-orange-400 font-medium hover:underline"
        >
          ← Retour au blog
        </NuxtLink>
      </div>
    </article>

    <!-- 404 si article inconnu -->
    <div v-else class="max-w-2xl mx-auto px-4 py-24 text-center">
      <h1 class="text-2xl font-bold text-slate-900 dark:text-white mb-4">Article introuvable</h1>
      <NuxtLink to="/blog" class="text-orange-500 dark:text-orange-400 font-medium hover:underline">
        Retour au blog
      </NuxtLink>
    </div>
  </div>
  <Footer />
</template>

<script setup lang="ts">
const route = useRoute()
const slug = computed(() => {
  const p = route.params.slug
  if (Array.isArray(p)) return p[0] || ''
  return (p as string) || ''
})

interface Block {
  title?: string
  paragraphs: string[]
  list?: string[]
}

interface Post {
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: number
  blocks: Block[]
}

const POSTS: Record<string, Post> = {
  'clean-code': {
    title: "Clean Code : écrire du code lisible et maintenable",
    excerpt: "Principes et pratiques pour produire un code propre, facile à lire et à faire évoluer.",
    category: "Méthodologie",
    author: "Roger DA",
    date: "10 Fév 2026",
    readTime: 10,
    blocks: [
      {
        title: "Pourquoi le Clean Code ?",
        paragraphs: [
          "Le Clean Code n'est pas une mode : c'est une discipline qui rend le code plus facile à lire, à modifier et à faire évoluer. Un code propre réduit les bugs, accélère les revues et permet à toute l'équipe de contribuer sereinement.",
          "Robert C. Martin (Uncle Bob) résume l'idée : « Le code est lu bien plus souvent qu'il n'est écrit. » Optimiser pour la lecture, c'est optimiser pour le long terme."
        ]
      },
      {
        title: "Nommage et intention",
        paragraphs: [
          "Des noms de variables, de fonctions et de classes explicites évitent les commentaires superflus. Préférez des noms qui révèlent l'intention : getUserById, isOrderPaid, calculateTotalWithTax.",
          "Évitez les abréviations sauf si elles sont universelles (id, url). Un nom long mais clair vaut mieux qu'un nom court et obscur."
        ]
      },
      {
        title: "Fonctions courtes et responsabilité unique",
        paragraphs: [
          "Une fonction devrait faire une seule chose et la faire bien. Si vous pouvez extraire une sous-fonction avec un nom explicite, faites-le. Une fonction de 20 à 30 lignes est souvent un bon maximum.",
          "Les paramètres : moins il y en a, mieux c'est. Au-delà de 2 ou 3, envisagez un objet de paramètres ou une structure dédiée."
        ]
      },
      {
        title: "Commentaires utiles",
        paragraphs: [
          "Le meilleur commentaire est souvent du code qui se passe de commentaire. Commentez le « pourquoi » plutôt que le « quoi ». Évitez les commentaires obsolètes : ils trompent plus qu'ils n'aident.",
          "Les TODO et FIXME ont leur place à condition d'être traqués et résolus. Un TODO oublié depuis des mois n'a plus de valeur."
        ]
      },
      {
        title: "Gestion des erreurs et tests",
        paragraphs: [
          "Utilisez les exceptions (ou les types Result/Option selon le langage) plutôt que des codes d'erreur magiques. Ne laissez pas les erreurs silencieuses : logger ou remonter.",
          "Un code propre va de pair avec des tests. Des tests unitaires ciblés permettent de refactorer en confiance et servent de documentation vivante."
        ]
      }
    ]
  },
  'cursor-python': {
    title: "Cursor pour vos scripts Python",
    excerpt: "Utiliser Cursor comme IDE pour écrire, déboguer et maintenir vos scripts Python au quotidien.",
    category: "Tutoriels",
    author: "Roger DA",
    date: "10 Fév 2026",
    readTime: 8,
    blocks: [
      {
        title: "Pourquoi Cursor pour du Python ?",
        paragraphs: [
          "Cursor est un éditeur basé sur VS Code, optimisé pour l'IA. Pour les scripts Python — automatisation, data, petits outils — il apporte l'autocomplétion, la génération de code et le refactoring assistés par l'IA directement dans l'éditeur.",
          "Vous gardez la même ergonomie que VS Code (extensions, terminal intégré, Git) avec en plus un assistant qui comprend le contexte de votre projet."
        ]
      },
      {
        title: "Configurer l'environnement Python",
        paragraphs: [
          "Installez l'extension Python officielle dans Cursor. Sélectionnez l'interpréteur (venv, conda, pyenv) via la palette de commandes (Ctrl/Cmd + Shift + P) : « Python: Select Interpreter ».",
          "Pour des scripts avec dépendances, utilisez un environnement virtuel (python -m venv .venv) et enregistrez-le dans le workspace. Cursor utilisera alors le bon interpréteur et les bons packages pour l'analyse et les suggestions."
        ]
      },
      {
        title: "Écrire et modifier des scripts avec l'IA",
        paragraphs: [
          "Ouvrez un fichier .py et utilisez le chat Cursor (Ctrl/Cmd + L) pour demander : « Génère une fonction qui lit ce CSV et filtre les lignes où status == 'active' », ou « Refactorise cette boucle en compréhension de liste ».",
          "L'IA peut aussi compléter des fonctions, proposer des noms de variables, ou générer des docstrings et des tests basiques. Inline Edit (surligner du code puis demander une modif) est pratique pour des changements ciblés."
        ]
      },
      {
        title: "Débogage et exécution",
        paragraphs: [
          "Utilisez le débogueur intégré : posez des breakpoints, lancez « Debug Python File » ou une config de lancement personnalisée. Les variables et la pile d'appels sont visibles comme dans VS Code.",
          "Pour exécuter rapidement un script sans déboguer : terminal intégré (Ctrl/Cmd + `) puis python script.py, ou utilisez le bouton Run au-dessus de la définition main ou du bloc if __name__ == '__main__'."
        ]
      },
      {
        title: "Bonnes pratiques",
        paragraphs: [
          "Gardez vos scripts bien structurés (fonctions, modules) : l'IA comprend mieux un code découpé. Ajoutez des type hints quand c'est possible ; Cursor s'en sert pour des suggestions plus précises.",
          "Pour des projets avec plusieurs scripts, un README ou un fichier de config (pyproject.toml, requirements.txt) aide Cursor à proposer des commandes et des chemins cohérents."
        ]
      }
    ]
  },
  'types-id-base': {
    title: "Types d'ID en base : performance et bonne approche",
    excerpt: "Choix des types d'identifiants (entier, UUID, ULID) en base de données : impact performance et bonnes pratiques.",
    category: "Méthodologie",
    author: "Roger DA",
    date: "10 Fév 2026",
    readTime: 10,
    blocks: [
      {
        title: "Contexte : le choix de la clé primaire",
        paragraphs: [
          "Le choix du type de clé primaire (ID) influence les perfs, la scalabilité et la sécurité de vos APIs. MySQL, MariaDB ou PostgreSQL : les mêmes enjeux s’appliquent.",
          "Trois options courantes : l’entier auto-incrémenté (classique), l’UUID, et l’ULID. Chacune a des avantages et des inconvénients selon le contexte."
        ]
      },
      {
        title: "Entier auto-incrémenté (AUTO_INCREMENT)",
        paragraphs: [
          "C’est le plus simple et le plus performant pour le stockage et les index : 4 ou 8 octets, index B-Tree très efficaces, pas de calcul à l’insertion.",
          "Inconvénients : prévisibilité des IDs (énumération possible), et en environnement distribué ou multi-base, la génération d’IDs uniques sans coordination est délicate. À réserver aux apps monolithiques ou quand la simplicité prime."
        ],
        list: [
          "Index petits et rapides",
          "Pas de collision, séquence déterministe",
          "Idéal pour les jointures et les clés étrangères"
        ]
      },
      {
        title: "UUID (Universally Unique Identifier)",
        paragraphs: [
          "Un UUID (v4) est un identifiant 128 bits (16 octets), généré côté application, unique sans coordination entre serveurs. Pratique pour les APIs publiques, les fusions de bases ou les systèmes distribués.",
          "En base : stockez en BINARY(16) ou en CHAR(36). BINARY(16) est plus performant (moins d’espace, index plus compacts). En MySQL/MariaDB 8.0+, un type dédié ou BINARY(16) avec conversion à l’insertion est recommandé."
        ],
        list: [
          "Pas d’énumération : les IDs ne se devinent pas",
          "Génération décentralisée, adapté au multi-région",
          "Coût : stockage et index plus gros, insertion un peu plus coûteuse"
        ]
      },
      {
        title: "ULID (Universally Unique Lexicographically Sortable Identifier)",
        paragraphs: [
          "L’ULID combine les avantages de l’UUID (unicité) avec un ordre temporel : les 48 premiers bits sont un timestamp, les 80 restants sont aléatoires. Triés par ordre de création, index B-Tree amis (moins de réorganisation qu’avec des UUID v4 aléatoires).",
          "Même taille que l’UUID (16 octets). En base, stockez aussi en BINARY(16) pour la performance. Très adapté quand vous voulez à la fois des IDs non prévisibles et un tri naturel par date de création."
        ]
      },
      {
        title: "Recommandations pratiques",
        paragraphs: [
          "Pour une app classique (admin, back-office, monolite) : restez sur des entiers auto-incrémentés. Simple, rapide, facile à déboguer.",
          "Pour une API publique, des microservices ou une forte sensibilité à l’énumération : passez à UUID (ou ULID) en BINARY(16), et générez les IDs dans l’application avant l’insertion.",
          "Gardez la même stack et le même choix de type d’ID entre dev et production pour éviter les mauvaises surprises."
        ]
      }
    ]
  },
  'ddev-environnement-docker': {
    title: "DDEV pour un environnement Docker propre",
    excerpt: "Mettre en place un environnement de développement local propre et reproductible avec DDEV et Docker. Comparaison avec Laravel Sail.",
    category: "Tutoriels",
    author: "Roger DA",
    date: "10 Fév 2026",
    readTime: 11,
    blocks: [
      {
        title: "Pourquoi un environnement Docker propre ?",
        paragraphs: [
          "Un environnement de dev local reproductible évite les « ça marche sur ma machine ». Avec Docker, on isole les services (PHP, MySQL, Redis, etc.) et on partage la même config pour toute l’équipe.",
          "DDEV s’appuie sur Docker pour fournir des stacks prêtes à l’emploi (Laravel, Symfony, WordPress, etc.) sans avoir à écrire les Dockerfiles à la main. Résultat : un environnement propre, versionné et rapide à démarrer."
        ]
      },
      {
        title: "Installer et démarrer DDEV",
        paragraphs: [
          "Après avoir installé Docker Desktop (ou Docker + Docker Compose), installez DDEV (voir ddev.com). Dans le répertoire de votre projet : ddev config pour créer le fichier .ddev/config.yaml, puis ddev start.",
          "DDEV crée des conteneurs pour le web, la base de données, et éventuellement MailHog, Redis, etc. Chaque projet a son propre réseau Docker, isolé des autres. Les commandes ddev restart, ddev stop, ddev poweroff permettent de maîtriser le cycle de vie."
        ]
      },
      {
        title: "Structure propre et reproductible",
        paragraphs: [
          "Le dossier .ddev/ (à commiter) contient la config du projet : type de projet, version de PHP, bases de données, services additionnels. Ainsi, un simple ddev start après un git clone recrée le même environnement partout.",
          "Évitez d’installer des outils globaux « à la main » sur la machine : utilisez ddev exec pour lancer des commandes à l’intérieur du conteneur (composer, php, artisan). Les dépendances restent dans le conteneur, pas sur l’hôte."
        ]
      },
      {
        title: "DDEV vs Laravel Sail : comparaison",
        paragraphs: [
          "Laravel Sail est la solution officielle Laravel pour Docker : un script bash et des docker-compose livrés avec le framework. Sail est intégré au projet (./vendor/bin/sail up) et ciblé à 100 % Laravel. Idéal si toute l’équipe ne travaille que sur Laravel et que vous voulez zéro config.",
          "DDEV, lui, est framework-agnostique : un même outil pour Laravel, Symfony, WordPress, Drupal, ou un projet PHP custom. La config est centralisée dans .ddev/, les commandes sont les mêmes partout (ddev start, ddev exec, ddev ssh). Utile si vous enchaînez plusieurs types de projets ou si vous voulez une base commune avec d’autres écosystèmes."
        ],
        list: [
          "Sail : natif Laravel, php artisan sail:install, ./vendor/bin/sail up ; DDEV : ddev config puis ddev start, fonctionne avec Laravel et bien d’autres.",
          "Sail : stack définie par Laravel (PHP, MySQL/PostgreSQL, Redis, Mailpit, etc.) ; DDEV : vous choisissez PHP, BDD, et ajoutez des services via .ddev/config.yaml ou des add-ons.",
          "Sail : chaque projet a son propre docker-compose dans le repo ; DDEV : même principe avec .ddev/, mais interface unifiée (ddev) pour tous les projets.",
          "Sail : idéal pour des équipes 100 % Laravel ; DDEV : idéal pour des équipes multi-stack ou qui veulent une seule façon de faire Docker pour tout."
        ]
      },
      {
        title: "Bases de données et imports",
        paragraphs: [
          "DDEV expose MySQL/MariaDB ou PostgreSQL. Les identifiants par défaut sont documentés (db, db, db). Pour un dump propre : ddev export-db > backup.sql, puis sur une autre machine ddev import-db < backup.sql.",
          "Pour des jeux de données partagés, versionnez des dumps légers ou des seeders. Ainsi, tout le monde travaille sur la même structure et des données cohérentes."
        ]
      },
      {
        title: "Bonnes pratiques au quotidien",
        paragraphs: [
          "Un environnement Docker propre, c’est aussi : ne pas monter des volumes inutiles, limiter les services au strict nécessaire, et garder les images à jour (ddev get pour les add-ons).",
          "En cas de conflit de ports, configurez-le dans .ddev/config.yaml. Pour déboguer, ddev logs -f ou ddev ssh vous donnent accès aux logs et au shell du conteneur. Avec ces habitudes, DDEV reste un environnement Docker propre et prévisible pour toute l’équipe."
        ]
      }
    ]
  },
  'laravel-scribe': {
    title: "Laravel Scribe : documenter vos APIs simplement",
    excerpt: "Générer une documentation d'API claire et à jour pour vos projets Laravel avec Scribe.",
    category: "Tutoriels",
    author: "Roger DA",
    date: "10 Fév 2026",
    readTime: 9,
    blocks: [
      {
        title: "Pourquoi documenter son API ?",
        paragraphs: [
          "Une API sans documentation claire freine les intégrateurs et les équipes front ou mobiles. Manuellement, les doc se dégradent : les exemples datent, les paramètres changent, les réponses ne correspondent plus. Laravel Scribe génère la doc à partir de votre code et de vos routes, pour qu’elle reste alignée avec l’application.",
          "Scribe scanne vos contrôleurs, déduit les paramètres, les réponses et les exemples, et produit une doc HTML (ou Markdown) prête à être hébergée ou intégrée à votre projet."
        ]
      },
      {
        title: "Installation et configuration",
        paragraphs: [
          "Installez Scribe via Composer : composer require knuckleswtf/scribe. Puis publiez la config : php artisan vendor:publish --tag=scribe-config. Le fichier config/scribe.php permet de définir les routes à documenter, le titre, la base URL, l’authentification (Bearer, API Key, etc.) et le chemin de sortie (public/docs par défaut).",
          "Vous pouvez exclure certaines routes, grouper les endpoints par tag, et personnaliser les exemples de requêtes. Un fichier de stratégie (Strategies) permet d’enrichir la doc avec des descriptions ou des exemples personnalisés pour des champs spécifiques."
        ]
      },
      {
        title: "Annotations et métadonnées",
        paragraphs: [
          "Scribe s’appuie sur les noms de routes, les paramètres de contrôleur et les réponses. Pour affiner la doc, utilisez les annotations en commentaires : @group pour regrouper, @bodyParam et @queryParam pour décrire les paramètres, @response pour des exemples de réponses, @authenticated pour indiquer qu’une route nécessite une authentification.",
          "Ces annotations sont lues au moment de la génération (php artisan scribe:generate). Une fois la config et les annotations en place, un seul artisan command met à jour toute la doc."
        ]
      },
      {
        title: "Bonnes pratiques",
        paragraphs: [
          "Documentez les cas d’erreur (4xx, 5xx) quand c’est pertinent. Gardez les exemples réalistes (données de test cohérentes). Si votre API évolue souvent, lancez scribe:generate en CI ou avant chaque release pour éviter une doc obsolète.",
          "Pour des APIs très spécifiques, combinez Scribe avec des fichiers Markdown personnalisés (intro, auth, glossaire) pour une doc complète et professionnelle sans effort démesuré."
        ]
      }
    ]
  },
  'paiement-afrique': {
    title: "Solutions de paiement en Afrique : intégration et défis",
    excerpt: "Intégrer les paiements (mobile money, cartes, passerelles) en Afrique : acteurs, techniques et pièges à éviter.",
    category: "Méthodologie",
    author: "Roger DA",
    date: "10 Fév 2026",
    readTime: 12,
    blocks: [
      {
        title: "Contexte des paiements en Afrique",
        paragraphs: [
          "En Afrique, le paysage des paiements est marqué par la prédominance du mobile money (Orange Money, MTN MoMo, Wave, etc.), l’usage limité des cartes bancaires dans beaucoup de pays, et une réglementation qui varie d’un pays à l’autre. Intégrer le paiement pour une app ou un site, c’est souvent devoir gérer plusieurs canaux : mobile money, cartes (Visa/Mastercard via des passerelles), et parfois paiement à la livraison ou virement.",
          "Les défis sont techniques (APIs différentes par opérateur, webhooks, réconciliation) mais aussi opérationnels : coûts des transactions, délais de settlement, gestion des échecs et des litiges, et conformité (KYC, anti-fraude)."
        ]
      },
      {
        title: "Acteurs et agrégateurs",
        paragraphs: [
          "Plutôt que d’intégrer chaque opérateur de mobile money séparément, on passe souvent par des agrégateurs ou des passerelles panafricaines : Paystack, Flutterwave, CinetPay, DPO, etc. Ces acteurs exposent une API unifiée (ou plusieurs) pour déclencher des paiements, gérer les webhooks de confirmation, et parfois les cartes et le mobile money dans une même interface.",
          "Le choix dépend du pays cible, des moyens de paiement requis (mobile money uniquement, cartes, USSD) et des coûts (frais par transaction, délais de versement). Certains agrégateurs couvrent surtout l’Afrique de l’Ouest, d’autres l’Est ou le continent entier ; vérifier la couverture pays et les limites par opérateur."
        ]
      },
      {
        title: "Intégration technique : points d’attention",
        paragraphs: [
          "Les APIs de paiement sont souvent REST avec authentification par clé (API key) ou OAuth. Le flux typique : créer une transaction côté backend, obtenir une URL ou un code de paiement, rediriger l’utilisateur (ou ouvrir une page hébergée), puis recevoir un webhook de succès/échec pour mettre à jour votre base et libérer la commande.",
          "Implémentez toujours la vérification côté serveur (ne jamais se fier uniquement au redirect ou au front) : validez le webhook avec la signature fournie par la passerelle, vérifiez le montant et le statut, puis mettez à jour l’état de la transaction. Idempotence et logs détaillés sont essentiels pour le débogage et la réconciliation."
        ],
        list: [
          "Vérifier les webhooks avec la signature (HMAC ou clé fournie par la doc).",
          "Gérer les timeouts et les doublons (idempotence des traitements).",
          "Logger les requêtes/réponses (sans stocker les données sensibles en clair)."
        ]
      },
      {
        title: "Défis courants",
        paragraphs: [
          "Les délais de confirmation varient : mobile money peut être instantané ou prendre plusieurs minutes ; les webhooks peuvent arriver en retard ou être renvoyés. Prévoir des statuts intermédiaires (en attente, en cours) et éventuellement un job de réconciliation qui interroge la passerelle pour les transactions non finalisées.",
          "La réglementation et la conformité (KYC, lutte contre la fraude) imposent souvent des vérifications côté passerelle ou côté vous. Les coûts par transaction et les seuils minimaux peuvent rendre certains moyens de paiement peu rentables pour les petits montants ; adapter l’offre (montant minimum, moyens proposés) en fonction du marché cible."
        ]
      },
      {
        title: "En résumé",
        paragraphs: [
          "Choisir un agrégateur adapté à la zone géographique et aux moyens de paiement visés. Sécuriser l’intégration (webhooks signés, vérification serveur, idempotence). Prévoir la réconciliation et la gestion des échecs. En gardant ces principes en tête, l’intégration des solutions de paiement en Afrique reste exigeante mais réalisable, avec une doc et un support fournis par les acteurs actuels."
        ]
      }
    ]
  }
}

const post = computed(() => POSTS[slug.value] || null)

useHead({
  title: () => post.value ? `${post.value.title} | Blog - Roger DA` : 'Article | Blog - Roger DA',
  meta: [
    {
      name: 'description',
      content: () => post.value?.excerpt ?? 'Article du blog de Roger DA',
    },
  ],
})
</script>
