<template>
    <div class="group relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 rounded-[2rem] shadow-2xl hover:shadow-3xl dark:hover:shadow-green-500/30 transition-all duration-1000 ease-out border border-gray-200/30 dark:border-gray-700/30 transform hover:-translate-y-2 hover:scale-[1.02] perspective-1000 h-full flex flex-col">
        <!-- Effet de profondeur 3D -->
        <div class="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent dark:via-white/5 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

        <!-- Image container avec effets avancés - hauteur fixe -->
        <div class="relative overflow-hidden aspect-video rounded-t-[2rem] flex-shrink-0">
            <!-- Indicateur de chargement -->
            <div v-if="!imageLoad && !imageError" class="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                <div class="text-center">
                    <div class="w-8 h-8 border-4 border-green-500 border-t-transparent rounded-full animate-spin mx-auto mb-2"></div>
                    <p class="text-gray-500 dark:text-gray-400 text-sm">Chargement...</p>
                </div>
            </div>

            <img :src="props.realisation.main_image"
                 :alt="props.realisation.title"
                 class="object-cover w-full h-full transform group-hover:scale-110 group-hover:rotate-1 transition-all duration-1000 ease-out"
                 @error="handleImageError"
                 @load="handleImageLoad">

            <!-- Fallback si l'image ne se charge pas -->
            <div v-if="imageError" class="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                <div class="text-center">
                    <svg class="w-16 h-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                    </svg>
                    <p class="text-gray-500 dark:text-gray-400 text-sm font-medium">Image non disponible</p>
                </div>
            </div>

            <!-- Overlay gradient multi-couches -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
            <div class="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-purple-500/20 opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>

            <!-- Pattern overlay animé -->
            <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pattern-grid"></div>

            <!-- Type badge ultra-moderne -->
            <div class="absolute top-6 left-6 transform -translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 ease-out">
                <div class="relative">
                    <span class="inline-flex items-center px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl shadow-2xl backdrop-blur-md border border-white/30 relative overflow-hidden">
                        <div class="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer"></div>
                        <div class="w-2 h-2 bg-white rounded-full mr-2 animate-pulse shadow-lg"></div>
                        {{ props.realisation.type }}
                    </span>
                    <div class="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity duration-1000"></div>
                </div>
            </div>

            <!-- Bouton de visualisation flottant -->
            <div class="absolute top-6 right-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 ease-out">
                <div class="relative group/btn">
                    <div class="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur opacity-0 group-hover/btn:opacity-50 transition-opacity duration-300"></div>
                    <div class="relative inline-flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-md rounded-full border border-white/30 hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-xl">
                        <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                        </svg>
                    </div>
                </div>
            </div>

            <!-- Indicateur de statut -->
            <div class="absolute bottom-4 left-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 ease-out">
                <div class="flex items-center gap-2 px-3 py-1.5 bg-black/50 backdrop-blur-sm rounded-full border border-white/20">
                    <div class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span class="text-xs font-medium text-white">Projet actif</span>
                </div>
            </div>
        </div>

        <!-- Content avec design ultra-moderne - flex-grow pour occuper l'espace restant -->
        <div class="p-8 relative flex-grow flex flex-col">
            <!-- Ligne décorative animée -->
            <div class="absolute top-0 inset-x-8 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 scale-x-0 group-hover:scale-x-100 origin-left"></div>

            <!-- Title avec effet de gradient avancé -->
            <h3 class="text-2xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 dark:from-white dark:via-gray-100 dark:to-gray-200 bg-clip-text text-transparent mb-4 group-hover:from-green-600 group-hover:via-emerald-500 group-hover:to-teal-400 transition-all duration-1000 leading-tight relative">
                {{ props.realisation.title }}
                <div class="absolute inset-0 bg-gradient-to-r from-green-600 via-emerald-500 to-teal-400 bg-clip-text text-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 blur-sm"></div>
            </h3>

            <!-- Description avec effet de révélation - hauteur fixe -->
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors duration-500 relative flex-grow">
                <span v-html="props.realisation.description"></span>
                <div class="absolute inset-0 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg -m-2"></div>
            </p>

            <!-- Technologies section ultra-moderne - en bas -->
            <div class="space-y-5 mt-auto">
                <h4 class="text-sm font-bold text-gray-700 dark:text-gray-200 flex items-center gap-3">
                    <div class="relative">
                        <div class="w-8 h-8 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                            <svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"/>
                            </svg>
                        </div>
                        <div class="absolute -inset-1 bg-gradient-to-r from-green-400 to-emerald-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-1000"></div>
                    </div>
                    Technologies utilisées
                </h4>
                <div class="flex flex-wrap gap-3">
                    <span v-for="(technology, index) in props.realisation.technologies"
                          :key="technology"
                          class="px-4 py-2 text-xs font-semibold text-gray-700 dark:text-gray-200 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-xl border border-gray-200/50 dark:border-gray-600/50 shadow-sm
                                 hover:from-green-100 hover:via-emerald-50 hover:to-teal-100 hover:text-green-700 dark:hover:from-green-900/40 dark:hover:via-emerald-900/40 dark:hover:to-teal-900/40 dark:hover:text-green-300 hover:scale-110 hover:shadow-lg hover:-translate-y-1 transform transition-all duration-500 ease-out"
                          :style="{ 'animation-delay': `${index * 150}ms` }">
                        {{ technology }}
                    </span>
                </div>
            </div>

            <!-- Barre de progression animée -->
            <div class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-1000 ease-out shadow-lg"></div>

            <!-- Accent de coin avec animation -->
            <div class="absolute top-4 right-4 w-10 h-10 border-t-2 border-r-2 border-green-400 opacity-0 group-hover:opacity-100 transition-all duration-1000 transform rotate-0 group-hover:rotate-12"></div>
        </div>

        <!-- Effet de lueur globale -->
        <div class="absolute inset-0 bg-gradient-to-r from-green-400/0 via-green-400/10 to-emerald-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 rounded-[2rem]"></div>

        <!-- Particules flottantes -->
        <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
            <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-green-400 rounded-full animate-float"></div>
            <div class="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-emerald-400 rounded-full animate-float-delayed"></div>
            <div class="absolute bottom-1/4 left-1/3 w-1 h-1 bg-teal-400 rounded-full animate-float-slow"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
import type { Realisation } from '~/types/realisation'

const props = defineProps({
    realisation: {
        type: Object as () => Realisation,
        required: true
    },
})

const imageError = ref(false)
const imageLoad = ref(false)

const handleImageError = () => {
    imageError.value = true
}

const handleImageLoad = () => {
    imageLoad.value = true
}
</script>

<style scoped>
.aspect-video {
    aspect-ratio: 16 / 9;
}

.line-clamp-3 {
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.pattern-grid {
    background-image:
        linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
    animation: grid-move 20s linear infinite;
}

@keyframes grid-move {
    0% { transform: translate(0, 0); }
    100% { transform: translate(20px, 20px); }
}

@keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
}

.animate-shimmer {
    animation: shimmer 2s infinite;
}

@keyframes float {
    0%, 100% { transform: translateY(0px) rotate(0deg); }
    50% { transform: translateY(-10px) rotate(180deg); }
}

.animate-float {
    animation: float 3s ease-in-out infinite;
}

.animate-float-delayed {
    animation: float 3s ease-in-out infinite 1s;
}

.animate-float-slow {
    animation: float 4s ease-in-out infinite 2s;
}

/* Animation pour les technologies */
span {
    animation: fadeInUp 0.8s ease-out forwards;
    opacity: 0;
    transform: translateY(20px);
}

@keyframes fadeInUp {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Effet de brillance au hover */
.group:hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.8s;
    z-index: 1;
}

.group:hover::before {
    left: 100%;
}

/* Effet de perspective 3D */
.perspective-1000 {
    perspective: 1000px;
}

/* Ombres personnalisées */
.shadow-3xl {
    box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
}
</style>
