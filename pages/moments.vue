<template>
  <Header />
  <div class="min-h-screen bg-white dark:bg-slate-950 pt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <!-- Header -->
      <div class="text-center mb-12 sm:mb-16">
        <h1
          class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6 font-display"
        >
          Moments
          <span class="text-orange-500 dark:text-orange-400">Forts</span>
        </h1>
        <p
          class="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto px-4"
        >
          Quelques instants marquants de mon parcours professionnel et
          personnel.
        </p>
      </div>

      <!-- Galerie d'images -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
      >
        <div
          v-for="(moment, index) in moments"
          :key="index"
          class="group relative overflow-hidden rounded-xl sm:rounded-2xl bg-slate-100 dark:bg-slate-900 aspect-square cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300"
          @click="openLightbox(index)"
        >
          <img
            :src="moment.image"
            :alt="moment.title"
            class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            loading="lazy"
          />
          <!-- Overlay au hover -->
          <div
            class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
          >
            <div
              class="p-4 sm:p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-full"
            >
              <h3
                class="text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 font-display"
              >
                {{ moment.title }}
              </h3>
              <p
                v-if="moment.description"
                class="text-xs sm:text-sm md:text-base text-slate-200 mb-1 sm:mb-2"
              >
                {{ moment.description }}
              </p>
              <p v-if="moment.date" class="text-xs sm:text-sm text-slate-300">
                {{ moment.date }}
              </p>
            </div>
          </div>
          <!-- Icône zoom au hover -->
          <div
            class="absolute top-4 right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 dark:bg-slate-900/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <svg
              class="w-5 h-5 sm:w-6 sm:h-6 text-slate-900 dark:text-white"
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

      <!-- Message si aucune image -->
      <div v-if="moments.length === 0" class="text-center py-16 sm:py-24">
        <div class="text-slate-400 mb-4">
          <svg
            class="w-16 h-16 sm:w-20 sm:h-20 mx-auto"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </div>
        <h3
          class="text-lg sm:text-xl font-semibold text-slate-600 dark:text-slate-400 mb-2"
        >
          Aucun moment pour le moment
        </h3>
        <p class="text-sm sm:text-base text-slate-500 dark:text-slate-500">
          Les moments forts seront ajoutés prochainement
        </p>
      </div>
    </div>
  </div>

  <!-- Lightbox Modal -->
  <div
    v-if="lightboxOpen"
    class="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
    @click="closeLightbox"
  >
    <button
      @click="closeLightbox"
      class="absolute top-4 right-4 text-white hover:text-orange-500 transition-colors duration-200 p-2 z-10"
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
      v-if="moments.length > 0 && currentImageIndex > 0"
      @click.stop="previousImage"
      class="absolute left-4 text-white hover:text-orange-500 transition-colors duration-200 p-2 z-10"
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
      v-if="moments.length > 0 && currentImageIndex < moments.length - 1"
      @click.stop="nextImage"
      class="absolute right-4 text-white hover:text-orange-500 transition-colors duration-200 p-2 z-10"
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
      <div class="relative max-w-full max-h-full">
        <img
          v-if="moments.length > 0"
          :src="moments[currentImageIndex].image"
          :alt="moments[currentImageIndex].title"
          class="max-w-full max-h-[90vh] object-contain rounded-lg"
        />
        <div
          v-if="moments.length > 0"
          class="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-lg text-sm"
        >
          {{ currentImageIndex + 1 }} / {{ moments.length }}
        </div>
      </div>
    </div>
  </div>

  <Footer />
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

// Import des images
import graduation from '~/assets/images/moments/graduation.jpeg'
import firstWork1 from '~/assets/images/moments/first_work_1.jpeg'
import firstWork from '~/assets/images/moments/first_work.jpeg'
import currentWork1 from '~/assets/images/moments/current_work_1.jpeg'
import currentWork2 from '~/assets/images/moments/current_work_2.jpeg'
import currentWork3 from '~/assets/images/moments/current_work_3.jpeg'
import currentWorkSession1 from '~/assets/images/moments/current_work_session_work1.jpeg'
import currentWorkSession2 from '~/assets/images/moments/current_work_session_work2.jpeg'
import hackathon2021 from '~/assets/images/moments/hackathon_2021.jpg'
import hackathonPrix from '~/assets/images/moments/hackathon_prix.jpg'
import teamHackathon from '~/assets/images/moments/team_hackathon.jpg'
import prix from '~/assets/images/moments/prix.jpg'
import selfieFuturafric from '~/assets/images/moments/selfie_with_futurafric_ceo.jpg'
import myavatar from '~/assets/images/moments/myavatar.jpeg'
import moment1747830225745 from '~/assets/images/moments/1747830225745.jpeg'

interface Moment {
  image: string
  title: string
  description?: string
  date?: string
}

const moments = ref<Moment[]>([])

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
  if (
    moments.value.length > 0 &&
    currentImageIndex.value < moments.value.length - 1
  ) {
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

// Initialisation des moments forts avec les images importées
moments.value = [
  {
    image: graduation,
    title: 'Cérémonie de remise de diplôme',
    description: 'Un moment marquant de mon parcours académique',
    date: '2023',
  },
  {
    image: firstWork1,
    title: 'Premier projet professionnel',
    description: 'Le début de mon aventure dans le développement',
    date: '2020',
  },
  {
    image: firstWork,
    title: 'Premiers pas',
    description: 'Mes débuts dans le monde professionnel',
    date: '2020',
  },
  {
    image: currentWork1,
    title: 'Projet en cours',
    description: 'Travail sur un projet innovant',
    date: '2024',
  },
  {
    image: currentWork2,
    title: 'Développement actif',
    description: 'Au cœur du développement',
    date: '2024',
  },
  {
    image: currentWork3,
    title: 'Innovation continue',
    description: 'Création de solutions modernes',
    date: '2024',
  },
  {
    image: currentWorkSession1,
    title: 'Session de travail',
    description: 'Concentration et productivité',
    date: '2024',
  },
  {
    image: currentWorkSession2,
    title: 'En équipe',
    description: 'Collaboration et échange',
    date: '2024',
  },
  {
    image: hackathon2021,
    title: 'Hackathon 2021',
    description: 'Participation à un hackathon stimulant',
    date: '2021',
  },
  {
    image: hackathonPrix,
    title: 'Prix du Hackathon',
    description: "Reconnaissance de notre travail d'équipe",
    date: '2021',
  },
  {
    image: teamHackathon,
    title: 'Équipe Hackathon',
    description: "Collaboration et esprit d'équipe",
    date: '2021',
  },
  {
    image: prix,
    title: 'Prix et Récompense',
    description: 'Un moment de fierté et de reconnaissance',
    date: '2021',
  },
  {
    image: selfieFuturafric,
    title: 'Rencontre avec le CEO de Futurafric',
    description: 'Un moment privilégié avec un leader inspirant',
    date: '2024',
  },
  {
    image: myavatar,
    title: 'Portrait',
    description: 'Un instant personnel',
    date: '2024',
  },
  {
    image: moment1747830225745,
    title: 'Moment fort',
    description: 'Un instant mémorable',
    date: '2024',
  },
]

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
  document.body.style.overflow = ''
})
</script>

<style scoped>
/* Animation d'entrée pour les images */
.grid > div {
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

.grid > div:nth-child(1) {
  animation-delay: 0.1s;
}
.grid > div:nth-child(2) {
  animation-delay: 0.2s;
}
.grid > div:nth-child(3) {
  animation-delay: 0.3s;
}
.grid > div:nth-child(4) {
  animation-delay: 0.4s;
}
.grid > div:nth-child(5) {
  animation-delay: 0.5s;
}
.grid > div:nth-child(6) {
  animation-delay: 0.6s;
}
.grid > div:nth-child(7) {
  animation-delay: 0.7s;
}
.grid > div:nth-child(8) {
  animation-delay: 0.8s;
}
.grid > div:nth-child(9) {
  animation-delay: 0.9s;
}
.grid > div:nth-child(10) {
  animation-delay: 1s;
}
.grid > div:nth-child(11) {
  animation-delay: 1.1s;
}
.grid > div:nth-child(12) {
  animation-delay: 1.2s;
}
.grid > div:nth-child(13) {
  animation-delay: 1.3s;
}
.grid > div:nth-child(14) {
  animation-delay: 1.4s;
}
.grid > div:nth-child(15) {
  animation-delay: 1.5s;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
