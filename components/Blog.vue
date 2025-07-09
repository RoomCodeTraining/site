<template>
    <section class="py-16 bg-gradient-to-br from-orange-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-orange-900/20" id="blog">
        <div class="max-w-6xl mx-auto px-4">
            <SectionHeader
                title="Blog & Ressources"
                subtitle="Partage d'expérience et apprentissage"
            />

            <div class="mt-16">
                <!-- Filtres par catégorie -->
                <div class="flex flex-wrap gap-3 mb-12 justify-center">
                    <button
                        v-for="category in categories"
                        :key="category"
                        @click="activeCategory = category"
                        :class="[
                            'px-6 py-3 rounded-full font-medium transition-all duration-300',
                            activeCategory === category
                                ? 'bg-orange-600 text-white shadow-lg'
                                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700'
                        ]"
                    >
                        {{ category }}
                    </button>
                </div>

                <!-- Grille des articles -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <article
                        v-for="article in filteredArticles"
                        :key="article.id"
                        class="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                        <!-- Image de l'article -->
                        <div class="relative h-48 overflow-hidden">
                            <img
                                :src="article.image"
                                :alt="article.title"
                                class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                            <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                            <div class="absolute top-4 left-4">
                                <span class="px-3 py-1 bg-orange-600 text-white text-xs rounded-full font-medium">
                                    {{ article.category }}
                                </span>
                            </div>
                            <div class="absolute top-4 right-4">
                                <span class="px-3 py-1 bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-300 text-xs rounded-full">
                                    {{ article.readTime }} min
                                </span>
                            </div>
                        </div>

                        <!-- Contenu de l'article -->
                        <div class="p-6">
                            <div class="flex items-center gap-2 mb-3">
                                <span class="text-sm text-gray-500 dark:text-gray-400">{{ article.date }}</span>
                                <span class="w-1 h-1 bg-gray-300 dark:bg-gray-600 rounded-full"></span>
                                <span class="text-sm text-gray-500 dark:text-gray-400">{{ article.author }}</span>
                            </div>

                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-200">
                                {{ article.title }}
                            </h3>

                            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
                                {{ article.excerpt }}
                            </p>

                            <!-- Tags -->
                            <div class="flex flex-wrap gap-2 mb-6">
                                <span
                                    v-for="tag in article.tags"
                                    :key="tag"
                                    class="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full"
                                >
                                    #{{ tag }}
                                </span>
                            </div>

                            <!-- Actions -->
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                                    <div class="flex items-center gap-1">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                                        </svg>
                                        <span>{{ article.views }}</span>
                                    </div>
                                    <div class="flex items-center gap-1">
                                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                                        </svg>
                                        <span>{{ article.comments }}</span>
                                    </div>
                                </div>
                                <a
                                    :href="article.url"
                                    class="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 font-medium text-sm hover:gap-3 transition-all duration-200"
                                >
                                    Lire l'article
                                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                                    </svg>
                                </a>
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

const categories = ['Tous', 'Apprentissage', 'Méthodologie', 'Culture Dev', 'Tutoriels']

const articles = [
    {
        id: 1,
        title: "Maîtriser Vue 3 Composition API",
        excerpt: "Guide complet pour comprendre et utiliser efficacement la Composition API de Vue 3 dans vos projets.",
        category: 'Apprentissage',
        author: 'Roger DA',
        date: '15 Déc 2024',
        readTime: 8,
        views: '1.2k',
        comments: 23,
        tags: ['Vue3', 'Composition API', 'JavaScript'],
        image: '~/assets/images/vue.png',
        url: '/blog/vue3-composition-api'
    },
    {
        id: 2,
        title: "Bonnes pratiques Laravel en 2024",
        excerpt: "Les meilleures pratiques et patterns pour développer des applications Laravel robustes et maintenables.",
        category: 'Méthodologie',
        author: 'Roger DA',
        date: '10 Déc 2024',
        readTime: 12,
        views: '2.1k',
        comments: 45,
        tags: ['Laravel', 'PHP', 'Architecture'],
        image: '~/assets/images/laravel.png',
        url: '/blog/laravel-best-practices'
    },
    {
        id: 3,
        title: "Développer avec TypeScript et Nuxt 3",
        excerpt: "Comment tirer parti de TypeScript dans vos projets Nuxt 3 pour un code plus sûr et maintenable.",
        category: 'Tutoriels',
        author: 'Roger DA',
        date: '5 Déc 2024',
        readTime: 10,
        views: '1.8k',
        comments: 31,
        tags: ['Nuxt3', 'TypeScript', 'Vue3'],
        image: '~/assets/images/nuxt.png',
        url: '/blog/nuxt3-typescript'
    },
    {
        id: 4,
        title: "Optimisation des performances web",
        excerpt: "Techniques avancées pour améliorer les performances de vos applications web et l'expérience utilisateur.",
        category: 'Méthodologie',
        author: 'Roger DA',
        date: '1 Déc 2024',
        readTime: 15,
        views: '3.2k',
        comments: 67,
        tags: ['Performance', 'Optimisation', 'Web'],
        image: '~/assets/images/controller.png',
        url: '/blog/web-performance'
    },
    {
        id: 5,
        title: "Architecture des applications modernes",
        excerpt: "Principes et patterns d'architecture pour construire des applications scalables et évolutives.",
        category: 'Culture Dev',
        author: 'Roger DA',
        date: '28 Nov 2024',
        readTime: 6,
        views: '1.5k',
        comments: 28,
        tags: ['Architecture', 'Design Patterns', 'Scalabilité'],
        image: '~/assets/images/realisation.png',
        url: '/blog/modern-architecture'
    },
    {
        id: 6,
        title: "Sécurité dans le développement web",
        excerpt: "Les fondamentaux de la sécurité web et comment protéger vos applications contre les vulnérabilités courantes.",
        category: 'Tutoriels',
        author: 'Roger DA',
        date: '25 Nov 2024',
        readTime: 18,
        views: '2.7k',
        comments: 52,
        tags: ['Sécurité', 'Web', 'Protection'],
        image: '~/assets/images/larapass.png',
        url: '/blog/web-security'
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
</style>
