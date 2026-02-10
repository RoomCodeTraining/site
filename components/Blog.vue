<template>
    <section class="py-12 sm:py-16 lg:py-24 bg-white dark:bg-slate-950" id="blog">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader
                title="Blog & Ressources"
                subtitle="Partage d'expérience et apprentissage"
            />

            <div class="mt-12 sm:mt-16">
                <!-- Filtres par catégorie -->
                <div class="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12 justify-center">
                    <button
                        v-for="category in categories"
                        :key="category"
                        @click="activeCategory = category"
                        :class="[
                            'px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-200',
                            activeCategory === category
                                ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900'
                                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                        ]"
                    >
                        {{ category }}
                    </button>
                </div>

                <!-- Grille des articles -->
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    <article
                        v-for="article in filteredArticles"
                        :key="article.id"
                        class="group flex flex-col h-full bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1"
                    >
                        <!-- Image de l'article -->
                        <div class="relative h-48 flex-shrink-0 overflow-hidden">
                            <img
                                :src="article.image"
                                :alt="article.title"
                                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <div class="absolute top-3 left-3 flex items-center gap-2">
                                <span class="px-2.5 py-1 rounded-md bg-white/95 dark:bg-slate-900/95 text-slate-700 dark:text-slate-200 text-xs font-medium backdrop-blur-sm">
                                    {{ article.category }}
                                </span>
                                <span class="px-2.5 py-1 rounded-md bg-white/95 dark:bg-slate-900/95 text-slate-600 dark:text-slate-400 text-xs font-medium backdrop-blur-sm">
                                    {{ article.readTime }} min
                                </span>
                            </div>
                        </div>

                        <!-- Contenu de l'article -->
                        <div class="p-4 sm:p-6 flex flex-col flex-1 min-h-0">
                            <div class="flex items-center gap-2 mb-2 sm:mb-3 flex-wrap flex-shrink-0">
                                <span class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{{ article.date }}</span>
                                <span class="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></span>
                                <span class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">{{ article.author }}</span>
                            </div>

                            <h3 class="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 line-clamp-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-200 flex-shrink-0">
                                {{ article.title }}
                            </h3>

                            <p class="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-3 leading-relaxed flex-shrink-0">
                                {{ article.excerpt }}
                            </p>

                            <!-- Tags -->
                            <div class="flex flex-wrap gap-1.5 sm:gap-2 mb-4 sm:mb-6 tags-wrap flex-shrink-0">
                                <span
                                    v-for="tag in article.tags"
                                    :key="tag"
                                    class="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-xs font-medium"
                                >
                                    {{ tag }}
                                </span>
                            </div>

                            <!-- Actions (toujours en bas du cadre) -->
                            <div class="mt-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 pt-2 border-t border-slate-100 dark:border-slate-800">
                                <div class="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                                    <div class="flex items-center gap-1">
                                        <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                        </svg>
                                        <span>{{ article.views }}</span>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                                        </svg>
                                        <span>{{ article.comments }}</span>
                                    </div>
                                </div>
                                <NuxtLink
                                    :to="article.url"
                                    class="inline-flex items-center gap-1.5 sm:gap-2 text-orange-600 dark:text-orange-400 font-medium text-xs sm:text-sm hover:gap-2 sm:hover:gap-3 transition-all duration-200"
                                >
                                    Lire l'article
                                    <svg class="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                                    </svg>
                                </NuxtLink>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'

const activeCategory = ref('Tous')

const categories = ['Tous', 'Méthodologie', 'Tutoriels']

const articles = [
    {
        id: 1,
        title: "Clean Code : écrire du code lisible et maintenable",
        excerpt: "Principes et pratiques pour produire un code propre, facile à lire et à faire évoluer.",
        category: 'Méthodologie',
        author: 'Roger DA',
        date: '10 Fév 2026',
        readTime: 10,
        views: '1.1k',
        comments: 18,
        tags: ['Clean Code', 'Qualité', 'Maintenabilité'],
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80',
        url: '/blog/clean-code'
    },
    {
        id: 2,
        title: "Cursor pour vos scripts Python",
        excerpt: "Utiliser Cursor comme IDE pour écrire, déboguer et maintenir vos scripts Python au quotidien.",
        category: 'Tutoriels',
        author: 'Roger DA',
        date: '10 Fév 2026',
        readTime: 8,
        views: '890',
        comments: 12,
        tags: ['Cursor', 'Python', 'Productivité'],
        image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&q=80',
        url: '/blog/cursor-python'
    },
    {
        id: 3,
        title: "Types d'ID en base : performance et bonne approche",
        excerpt: "Choix des types d'identifiants (entier, UUID, ULID) en base de données : impact performance et bonnes pratiques.",
        category: 'Méthodologie',
        author: 'Roger DA',
        date: '10 Fév 2026',
        readTime: 10,
        views: '950',
        comments: 15,
        tags: ['Base de données', 'Performance', 'UUID', 'ULID'],
        image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=600&q=80',
        url: '/blog/types-id-base'
    },
    {
        id: 4,
        title: "DDEV pour un environnement Docker propre",
        excerpt: "Environnement Docker propre et reproductible avec DDEV. Comparaison avec Laravel Sail.",
        category: 'Tutoriels',
        author: 'Roger DA',
        date: '10 Fév 2026',
        readTime: 11,
        views: '820',
        comments: 11,
        tags: ['DDEV', 'Sail', 'Docker', 'Laravel', 'Dev local'],
        image: 'https://images.unsplash.com/photo-1618477388954-7852f32655ec?w=600&q=80',
        url: '/blog/ddev-environnement-docker'
    },
    {
        id: 5,
        title: "Laravel Scribe : documenter vos APIs simplement",
        excerpt: "Générer une documentation d'API claire et à jour pour vos projets Laravel avec Scribe.",
        category: 'Tutoriels',
        author: 'Roger DA',
        date: '10 Fév 2026',
        readTime: 9,
        views: '760',
        comments: 9,
        tags: ['Laravel', 'Scribe', 'API', 'Documentation'],
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
        url: '/blog/laravel-scribe'
    },
    {
        id: 6,
        title: "Solutions de paiement en Afrique : intégration et défis",
        excerpt: "Intégrer les paiements (mobile money, cartes, passerelles) en Afrique : acteurs, techniques et pièges à éviter.",
        category: 'Méthodologie',
        author: 'Roger DA',
        date: '10 Fév 2026',
        readTime: 12,
        views: '1.2k',
        comments: 22,
        tags: ['Paiement', 'Afrique', 'Mobile Money', 'Intégration'],
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
        url: '/blog/paiement-afrique'
    }
]

const filteredArticles = computed(() => {
    if (activeCategory.value === 'Tous') {
        return articles
    }
    return articles.filter(article => article.category === activeCategory.value)
})
</script>

<style scoped>
/* Animation d'entrée pour les articles */
.grid > article {
    opacity: 0;
    animation: fadeInUp 0.6s ease-out forwards;
}

.grid > article:nth-child(1) { animation-delay: 0.1s; }
.grid > article:nth-child(2) { animation-delay: 0.2s; }
.grid > article:nth-child(3) { animation-delay: 0.3s; }
.grid > article:nth-child(4) { animation-delay: 0.4s; }
.grid > article:nth-child(5) { animation-delay: 0.5s; }
.grid > article:nth-child(6) { animation-delay: 0.6s; }

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Line clamp pour le texte */
.line-clamp-2 {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

/* Zone tags : hauteur max pour garder les cadres alignés */
.tags-wrap {
    min-height: 2.5rem;
    max-height: 3.5rem;
    overflow: hidden;
}
</style>
