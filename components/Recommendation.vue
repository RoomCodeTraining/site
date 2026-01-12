<template>
  <section class="py-12 sm:py-16 lg:py-24 bg-white dark:bg-slate-950" id="recommendations">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Header simplifié -->
      <div class="mb-8 sm:mb-12 text-center">
        <span
          class="text-slate-500 text-xs font-semibold tracking-wider uppercase mb-2 sm:mb-3 block"
        >
          Ce qu'ils disent de moi
        </span>
        <h2
          class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 font-display"
        >
          Témoignages
        </h2>
        <p
          class="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto px-4"
        >
          Des retours authentiques de collaborateurs et clients avec qui j'ai
          travaillé.
        </p>
      </div>

      <!-- Grille des témoignages -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div
          v-for="(recommendation, index) in recommendations"
          :key="recommendation.id"
          class="group"
          :style="{ '--index': index }"
        >
          <!-- Carte moderne -->
          <div
            class="relative h-full flex flex-col bg-white dark:bg-slate-900 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800 hover:border-orange-500/50 dark:hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
          >
            <!-- Icône de citation en haut -->
            <div class="absolute top-4 right-4 sm:top-6 sm:right-6">
              <svg
                class="w-8 h-8 sm:w-10 sm:h-10 text-slate-200 dark:text-slate-700 group-hover:text-orange-500/20 dark:group-hover:text-orange-500/10 transition-colors duration-300"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path
                  d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z"
                />
              </svg>
            </div>

            <!-- Note avec étoiles -->
            <div class="flex items-center gap-2 mb-4 sm:mb-6">
              <div class="flex space-x-0.5">
                <svg
                  v-for="star in 5"
                  :key="star"
                  :class="
                    star <= recommendation.rating
                      ? 'text-orange-500'
                      : 'text-slate-300 dark:text-slate-600'
                  "
                  class="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
              <span
                class="text-xs sm:text-sm font-semibold text-slate-600 dark:text-slate-400"
              >
                {{ recommendation.rating }}/5
              </span>
            </div>

            <!-- Contenu du témoignage -->
            <div class="flex-1 mb-4 sm:mb-6">
              <p
                class="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base"
                :class="[
                  expandedCard === recommendation.id
                    ? ''
                    : 'line-clamp-[6]',
                ]"
              >
                {{ recommendation.content }}
              </p>

              <!-- Overlay gradient pour texte tronqué -->
              <div
                v-if="
                  expandedCard !== recommendation.id &&
                  isTextTruncated(recommendation.content)
                "
                class="absolute bottom-16 sm:bottom-20 left-6 right-6 sm:left-8 sm:right-8 h-12 sm:h-16 bg-gradient-to-t from-white dark:from-slate-900 to-transparent pointer-events-none"
              ></div>
            </div>

            <!-- Auteur -->
            <div class="flex items-center gap-3 sm:gap-4 pt-4 sm:pt-6 border-t border-slate-200 dark:border-slate-800">
              <div class="relative flex-shrink-0">
                <img
                  :src="recommendation.avatar"
                  :alt="recommendation.name"
                  class="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-slate-200 dark:border-slate-700 group-hover:border-orange-500/50 transition-colors duration-300"
                />
              </div>
              <div class="flex-1 min-w-0">
                <h4
                  class="font-bold text-slate-900 dark:text-white text-sm sm:text-base font-display truncate"
                >
                  {{ recommendation.name }}
                </h4>
                <p
                  class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 truncate"
                >
                  {{ recommendation.position }}
                </p>
                <p
                  class="text-xs text-slate-500 dark:text-slate-500 truncate"
                >
                  {{ recommendation.company }}
                </p>
              </div>
            </div>

            <!-- Bouton Lire plus/Réduire -->
            <div
              v-if="isTextTruncated(recommendation.content)"
              class="mt-4 flex justify-center"
            >
              <button
                @click="toggleExpand(recommendation.id)"
                class="inline-flex items-center gap-2 text-sm font-medium text-orange-500 dark:text-orange-400 hover:text-orange-600 dark:hover:text-orange-300 transition-colors duration-200"
              >
                <span>{{
                  expandedCard === recommendation.id ? 'Réduire' : 'Lire plus'
                }}</span>
                <svg
                  :class="
                    expandedCard === recommendation.id
                      ? 'rotate-180'
                      : ''
                  "
                  class="w-4 h-4 transition-transform duration-200"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
            </div>

            <!-- Effet de brillance au hover -->
            <div
              class="absolute inset-0 rounded-3xl bg-gradient-to-r from-transparent via-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const expandedCard = ref<number | null>(null)

const toggleExpand = (id: number) => {
  expandedCard.value = expandedCard.value === id ? null : id
}

const isTextTruncated = (text: string): boolean => {
  return text.length > 300
}

const recommendations = ref([
  {
    id: 1,
    content:
      "Roger est un développeur talentueux avec une grande capacité d'adaptation. Sa maîtrise technique et sa passion pour le partage de connaissances en font un atout précieux pour toute équipe. Il excelle dans la résolution de problèmes complexes et apporte toujours des solutions innovantes.",
    name: 'Salomon Dion',
    position: 'Manager DATA & Operations',
    company: 'ASACI TECHNOLOGIES',
    rating: 5,
    avatar:
      'https://api.dicebear.com/7.x/personas/svg?seed=Salomon&backgroundColor=b6e3f4',
  },
  {
    id: 2,
    content:
      "Da Sie est un collaborateur exceptionnel qui travaille avec rigueur et professionnalisme. Travailleur acharné, toujours en quête de savoir et de nouvelles connaissances, c'est un plaisir de mener des débats productifs en sa compagnie. Sa capacité d'apprentissage rapide est remarquable.",
    name: 'Colombe Koffi EPSE Diokri',
    position: "Ingénieur d'Etude",
    company: 'GS2E',
    rating: 5,
    avatar: 'https://api.dicebear.com/7.x/notionists/svg?seed=Colombe',
  },
  {
    id: 3,
    content:
      "Roger est un développeur qui ne cesse de progresser. L'une de ses plus belles qualités, que j'ai pu observer tout au long de son parcours professionnel, surtout lorsqu'il travaillait dans mon équipe sur divers projets, est sa capacité à se challenger pour répondre aux attentes des clients. Il apprenait constamment et se perfectionnait grâce à l'expérience. Pour lui, aucun projet n'était trop compliqué ou impossible. Si vous avez des projets, quels qu'ils soient, Roger est le développeur qu'il vous faut. Il fait partie des développeurs full-stack les plus complets.",
    name: 'Jacques Akaffou',
    position: 'Chef projet',
    company: 'Freelance',
    rating: 5,
    avatar:
      'https://api.dicebear.com/7.x/personas/svg?seed=Jacques&backgroundColor=b6e3f4',
  },
])
</script>

<style scoped>
.grid > div {
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
  animation-delay: calc(var(--index) * 0.15s);
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

.line-clamp-[6] {
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
