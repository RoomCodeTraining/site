<template>
  <Header />
  <div class="min-h-screen bg-white dark:bg-slate-950 pt-20">
      <!-- Hero Section avec image principale -->
      <div class="relative">
        <div
          class="relative h-[40vh] sm:h-[50vh] md:h-[60vh] min-h-[300px] sm:min-h-[400px] md:min-h-[500px] max-h-[700px] overflow-hidden"
        >
          <img
            :src="realisation.main_image"
            :alt="realisation.title"
            class="w-full h-full object-cover"
            loading="eager"
          />
          <!-- Overlay gradient -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-white dark:from-slate-950 via-white/80 dark:via-slate-950/80 to-transparent"
          ></div>
          <!-- Badge type -->
          <div
            v-if="realisation.type"
            class="absolute top-4 left-4 sm:top-8 sm:left-8 px-3 py-1.5 sm:px-5 sm:py-2.5 bg-orange-500 text-white text-xs sm:text-sm font-bold rounded-full backdrop-blur-sm"
          >
            {{ realisation.type }}
          </div>
        </div>

        <!-- Contenu hero -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 sm:-mt-24 md:-mt-32 relative z-10">
          <div class="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-slate-200 dark:border-slate-800">
          <!-- Breadcrumb -->
          <nav class="mb-6" aria-label="Breadcrumb">
            <ol class="flex items-center space-x-2 text-sm">
              <li>
                <NuxtLink
                  to="/"
                  class="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                >
                  Accueil
                </NuxtLink>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-4 h-4 text-slate-400 mx-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <NuxtLink
                  to="/#realisations"
                  class="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors duration-200"
                >
                  Réalisations
                </NuxtLink>
              </li>
              <li class="flex items-center">
                <svg
                  class="w-4 h-4 text-slate-400 mx-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span class="text-slate-900 dark:text-white font-medium">
                  {{ realisation.title }}
                </span>
              </li>
            </ol>
          </nav>

          <!-- Titre -->
          <h1
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 font-display leading-tight"
          >
            {{ realisation.title }}
          </h1>
        </div>
      </div>
    </div>

    <!-- Contenu principal -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12">
        <!-- Colonne principale (2/3) -->
        <div class="lg:col-span-2 space-y-12">
          <!-- Description -->
          <div
            class="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 leading-relaxed"
            v-html="realisation.description"
          ></div>

          <!-- Galerie d'images -->
          <div v-if="realisation.images && realisation.images.length > 0">
            <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4 mb-6 sm:mb-8">
              <h2
                class="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-display"
              >
                Galerie
              </h2>
              <span
                class="text-xs sm:text-sm text-slate-500 dark:text-slate-400"
              >
                {{ realisation.images.length }} image{{ realisation.images.length > 1 ? 's' : '' }}
              </span>
            </div>
            <div
              class="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
            >
              <div
                v-for="(image, index) in realisation.images"
                :key="index"
                class="group relative overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 cursor-pointer"
                @click="openLightbox(index)"
              >
                <div class="aspect-[4/3] overflow-hidden">
                  <img
                    :src="image"
                    :alt="`${realisation.title} - Image ${index + 1}`"
                    class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
                <!-- Overlay au hover -->
                <div
                  class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center"
                >
                  <div
                    class="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    <svg
                      class="w-12 h-12 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Sidebar (1/3) -->
        <div class="lg:col-span-1">
          <div
            class="lg:sticky lg:top-24 space-y-6 sm:space-y-8"
          >
            <!-- Technologies -->
            <div
              v-if="realisation.technologies && realisation.technologies.length > 0"
              class="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800"
            >
              <h3
                class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 font-display"
              >
                Technologies
              </h3>
              <div class="flex flex-wrap gap-2 sm:gap-3">
                <span
                  v-for="tech in realisation.technologies"
                  :key="tech"
                  class="px-3 sm:px-4 py-1.5 sm:py-2.5 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs sm:text-sm font-medium rounded-lg sm:rounded-xl border border-slate-200 dark:border-slate-700 hover:border-orange-500/50 dark:hover:border-orange-500/30 hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-all duration-200"
                >
                  {{ tech }}
                </span>
              </div>
            </div>

            <!-- Actions -->
            <div
              class="bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 space-y-3 sm:space-y-4"
            >
              <!-- Lien vers l'application -->
              <a
                v-if="realisation.application_link"
                :href="realisation.application_link"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center w-full gap-2 px-6 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-1 group"
              >
                <span>Voir le projet</span>
                <svg
                  class="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>

              <!-- Bouton retour -->
              <NuxtLink
                to="/#realisations"
                class="inline-flex items-center justify-center w-full gap-2 px-6 py-4 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white font-semibold rounded-xl transition-all duration-200 group"
              >
                <svg
                  class="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span>Retour aux projets</span>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Lightbox Modal -->
  <div
    v-if="lightboxOpen"
    class="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
    @click="closeLightbox"
  >
    <button
      @click="closeLightbox"
      class="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors duration-200 p-2"
      aria-label="Fermer"
    >
      <svg
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
    <button
      v-if="realisation.images && currentImageIndex > 0"
      @click.stop="previousImage"
      class="absolute left-4 text-white hover:text-orange-500 transition-colors duration-200 p-2"
      aria-label="Image précédente"
    >
      <svg
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
    <button
      v-if="realisation.images && currentImageIndex < realisation.images.length - 1"
      @click.stop="nextImage"
      class="absolute right-4 text-white hover:text-orange-500 transition-colors duration-200 p-2"
      aria-label="Image suivante"
    >
      <svg
        class="w-8 h-8"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
    <div
      class="max-w-7xl w-full h-full flex items-center justify-center"
      @click.stop
    >
      <img
        v-if="realisation.images"
        :src="realisation.images[currentImageIndex]"
        :alt="`${realisation.title} - Image ${currentImageIndex + 1}`"
        class="max-w-full max-h-full object-contain rounded-lg"
      />
    </div>
    <div
      v-if="realisation.images"
      class="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-sm"
    >
      {{ currentImageIndex + 1 }} / {{ realisation.images.length }}
    </div>
  </div>

  <Footer />
</template>

<script setup lang="ts">
import type { Realisation } from '~/types/realisation'

const route = useRoute()
const realisation = ref<Realisation>({
  id: 0,
  type: '',
  title: '',
  description: '',
  main_image: '',
  images: [],
  technologies: [],
  slug: '',
})

const lightboxOpen = ref(false)
const currentImageIndex = ref(0)

const openLightbox = (index: number) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}

const nextImage = () => {
  if (realisation.value.images && currentImageIndex.value < realisation.value.images.length - 1) {
    currentImageIndex.value++
  }
}

const previousImage = () => {
  if (currentImageIndex.value > 0) {
    currentImageIndex.value--
  }
}

// Gestion du clavier pour le lightbox
const handleKeydown = (e: KeyboardEvent) => {
  if (!lightboxOpen.value) return
  if (e.key === 'Escape') closeLightbox()
  if (e.key === 'ArrowRight') nextImage()
  if (e.key === 'ArrowLeft') previousImage()
}

onMounted(async () => {
  try {
    const response = await fetch(
      `https://mebackend.roomcodetraining.com/api/realisations/${route.params.slug}`
    )
    const data = await response.json()
    realisation.value = data.data
  } catch (error) {
    console.error('Erreur lors du chargement du projet:', error)
  }

  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
.prose {
  color: inherit;
}

.prose :deep(p) {
  margin-bottom: 1.5em;
  font-size: 1.125rem;
  line-height: 1.75;
}

.prose :deep(strong) {
  font-weight: 600;
  color: inherit;
}

.prose :deep(a) {
  color: #f97316;
  text-decoration: underline;
  text-decoration-color: rgba(249, 115, 22, 0.3);
  transition: all 0.2s;
}

.prose :deep(a:hover) {
  text-decoration-color: #f97316;
}

.prose :deep(ul),
.prose :deep(ol) {
  margin: 1.5em 0;
  padding-left: 1.75em;
}

.prose :deep(li) {
  margin: 0.75em 0;
}

.prose :deep(h1),
.prose :deep(h2),
.prose :deep(h3),
.prose :deep(h4) {
  font-weight: 700;
  margin-top: 2em;
  margin-bottom: 1em;
  color: inherit;
  font-family: 'Outfit', 'Plus Jakarta Sans', sans-serif;
}

.prose :deep(h1) {
  font-size: 2.5em;
}

.prose :deep(h2) {
  font-size: 2em;
}

.prose :deep(h3) {
  font-size: 1.5em;
}

.prose :deep(code) {
  background-color: rgba(15, 23, 42, 0.1);
  padding: 0.125em 0.375em;
  border-radius: 0.375rem;
  font-size: 0.875em;
  font-family: 'Monaco', 'Courier New', monospace;
}

.dark .prose :deep(code) {
  background-color: rgba(255, 255, 255, 0.1);
}

/* Animation d'entrée pour le contenu */
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

.prose {
  animation: fadeInUp 0.6s ease-out;
}

/* Animation pour le lightbox */
.fixed {
  animation: fadeIn 0.3s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
