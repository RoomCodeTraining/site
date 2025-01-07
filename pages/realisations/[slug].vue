<template>
    <Header />
    <div class="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div class="container mx-auto px-4 py-8">
            <!-- Breadcrumb avec effet glassmorphism -->
            <div class="relative mb-20">
                <div class="absolute inset-x-0 h-40 bg-gradient-to-b from-green-500/5 to-blue-500/5 dark:from-green-500/10 dark:to-blue-500/10 blur-3xl -z-10"></div>
                <nav class="bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-6 rounded-3xl shadow-lg border border-gray-200/50 dark:border-gray-700/50 relative">
                    <ol class="flex items-center space-x-4">
                        <li class="flex items-center">
                            <NuxtLink to="/"
                                class="flex items-center text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                                </svg>
                                <span class="ml-2 text-sm font-medium">Accueil</span>
                            </NuxtLink>
                        </li>

                        <li class="flex items-center space-x-4">
                            <svg class="h-5 w-5 text-gray-400 dark:text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                            <NuxtLink to="/#realisations"
                                class="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300">
                                Réalisations
                            </NuxtLink>
                        </li>

                        <li class="flex items-center space-x-4">
                            <svg class="h-5 w-5 text-gray-400 dark:text-gray-600" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                            <span class="text-sm font-medium bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
                                {{ realisation.title }}
                            </span>
                        </li>
                    </ol>
                </nav>
            </div>

            <!-- Section principale -->
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <!-- Image principale avec overlay -->
                <div class="relative group">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                    <div class="overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-800 shadow-2xl ring-1 ring-gray-900/5 dark:ring-gray-100/5">
                        <img :src="realisation.main_image" alt="realisation"
                            class="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105">
                    </div>
                </div>

                <!-- Contenu -->
                <div class="space-y-8">
                    <div class="space-y-6">
                        <h1 class="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
                            {{ realisation.title }}
                        </h1>
                        <div class="prose prose-lg dark:prose-invert max-w-none">
                            <p class="text-gray-700 dark:text-gray-300 leading-relaxed" v-html="realisation.description"></p>
                        </div>
                    </div>

                    <!-- Technologies -->
                    <div v-if="realisation.technologies" class="space-y-4">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Technologies utilisées</h3>
                        <div class="flex flex-wrap gap-3">
                            <span v-for="tech in realisation.technologies" :key="tech"
                                class="px-4 py-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 dark:from-green-500/20 dark:to-blue-500/20
                                       text-gray-800 dark:text-gray-200 rounded-xl text-sm font-medium
                                       border border-gray-200/50 dark:border-gray-700/50
                                       shadow-sm hover:shadow-md transition-all duration-300">
                                {{ tech }}
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Galerie -->
            <div class="space-y-8">
                <h3 class="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-400 bg-clip-text text-transparent">
                    Galerie du projet
                </h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div v-for="image in realisation.images" :key="image"
                        class="group relative overflow-hidden rounded-2xl bg-gray-100 dark:bg-gray-800 shadow-xl ring-1 ring-gray-900/5 dark:ring-gray-100/5">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <img :src="image" alt="realisation"
                            class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105">
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer />
</template>

<script lang="ts" setup>
interface Realisation {
    title: string;
    description: string;
    main_image: string;
    images: string[];
    technologies?: string[];
}

const route = useRoute();
const realisation = ref<Realisation>({
    title: '',
    description: '',
    main_image: '',
    images: [],
    technologies: []
});

onMounted(async () => {
    try {
        const response = await fetch(`https://mebackend.roomcodetraining.com/api/realisations/${route.params.slug}`);
        const data = await response.json();
        realisation.value = data.data;
    } catch (error) {
        console.error('Erreur lors du chargement du projet:', error);
    }
});
</script>

<style>
body {
    font-family: "Roboto", sans-serif;
    font-weight: 300;
    font-style: normal;
}

/* Animation de fade-in pour les éléments */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
}

.prose {
    animation: fadeIn 0.6s ease-out forwards;
}
</style>
