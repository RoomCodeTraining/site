<template>
  <div
    class="min-h-screen bg-gradient-to-b from-rose-50 via-white to-rose-100 dark:from-slate-950 dark:via-slate-900 dark:to-rose-950 text-slate-900 dark:text-slate-50"
  >
    <main class="pt-10 sm:pt-16 pb-12 sm:pb-16">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-14">
        <!-- Hero -->
        <section
          class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 items-start"
        >
          <!-- Identité -->
          <div class="md:col-span-2 space-y-4">
            <p
              class="text-sm uppercase tracking-[0.2em] text-rose-500 dark:text-rose-300 font-semibold"
            >
              Portfolio
            </p>
            <h1
              class="text-3xl sm:text-4xl md:text-5xl font-bold font-display leading-tight"
            >
              <span class="block">EKLOU</span>
              <span class="block text-rose-500 dark:text-rose-300"
                >JULIE SYNTICH HAILE</span
              >
            </h1>
            <p
              class="text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-2xl"
            >
              Souhaitant mettre mes compétences au service d’une entreprise
              dynamique et contribuer activement à son développement, tout en
              développant mes compétences et en apportant une réelle valeur
              ajoutée à l’organisation.
            </p>
            <p class="text-sm sm:text-base text-slate-500 dark:text-slate-400">
              Abidjan, Côte d’Ivoire
            </p>
          </div>

          <!-- Photo + Contact -->
          <aside class="w-full md:justify-self-end">
            <div class="flex flex-col items-center md:items-end gap-4">
              <!-- Photo -->
              <div
                class="relative w-36 h-36 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-2xl overflow-hidden shadow-xl ring-4 ring-rose-100 dark:ring-rose-900/60"
              >
                <img
                  :src="juliePhoto"
                  alt="Portrait de Julie EKLOU SYNTICH HAILE"
                  class="w-full h-full object-cover"
                />
                <div
                  class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"
                ></div>
              </div>

              <!-- Carte contact -->
              <div
                class="w-full bg-white/80 dark:bg-slate-900/90 backdrop-blur rounded-2xl p-5 sm:p-6 border border-rose-100 dark:border-rose-900/40 shadow-sm space-y-4"
              >
                <h2
                  class="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-wide"
                >
                  Contact
                </h2>
                <div class="space-y-2 text-sm">
                  <a
                    href="tel:+2250748650696"
                    class="flex items-center gap-2 hover:text-rose-500 dark:hover:text-rose-300 transition-colors"
                  >
                    <span
                      class="text-xs font-medium text-slate-500 dark:text-slate-400"
                      >Tél.</span
                    >
                    <span>+225 07 48 65 06 96</span>
                  </a>
                  <a
                    href="tel:+2250707646021"
                    class="flex items-center gap-2 hover:text-rose-500 dark:hover:text-rose-300 transition-colors"
                  >
                    <span
                      class="text-xs font-medium text-slate-500 dark:text-slate-400"
                      >Tél.</span
                    >
                    <span>07 07 64 60 21</span>
                  </a>
                  <a
                    href="mailto:julie.syntich@icloud.com"
                    class="flex items-center gap-2 hover:text-rose-500 dark:hover:text-rose-300 transition-colors break-all"
                  >
                    <span
                      class="text-xs font-medium text-slate-500 dark:text-slate-400"
                      >Email</span
                    >
                    <span>julie.syntich@icloud.com</span>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </section>

        <!-- Contenu principal -->
        <section class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
          <!-- Colonne gauche : Compétences & Qualités -->
          <div class="space-y-6 sm:space-y-8">
            <!-- Compétences -->
            <div
              class="bg-white/80 dark:bg-slate-900/90 backdrop-blur rounded-2xl p-5 sm:p-6 border border-slate-100 dark:border-slate-800"
            >
              <h2
                class="text-base sm:text-lg font-semibold mb-4 flex items-center gap-2"
              >
                <span class="w-1.5 h-6 bg-rose-500 rounded-full"></span>
                Compétences
              </h2>
              <ul
                class="space-y-2 text-sm sm:text-base text-slate-700 dark:text-slate-300"
              >
                <li>Accueil</li>
                <li>Gestion administrative</li>
                <li>Marketing de communication</li>
                <li>Management de la communication</li>
                <li>Gestion des ressources humaines</li>
              </ul>
            </div>

            <!-- Qualités -->
            <div
              class="bg-white/80 dark:bg-slate-900/90 backdrop-blur rounded-2xl p-5 sm:p-6 border border-slate-100 dark:border-slate-800"
            >
              <h2
                class="text-base sm:text-lg font-semibold mb-4 flex items-center gap-2"
              >
                <span class="w-1.5 h-6 bg-rose-500 rounded-full"></span>
                Qualités
              </h2>
              <ul
                class="space-y-2 text-sm sm:text-base text-slate-700 dark:text-slate-300"
              >
                <li>Excellentes compétences en communication et relationnelle</li>
                <li>Leadership fort et dynamique</li>
                <li>Grande conscience professionnelle</li>
                <li>Capable de travailler sous pression</li>
              </ul>
            </div>

            <!-- Atouts personnels -->
            <div
              class="bg-white/80 dark:bg-slate-900/90 backdrop-blur rounded-2xl p-5 sm:p-6 border border-slate-100 dark:border-slate-800"
            >
              <h2
                class="text-base sm:text-lg font-semibold mb-4 flex items-center gap-2"
              >
                <span class="w-1.5 h-6 bg-rose-500 rounded-full"></span>
                Atouts personnels
              </h2>
              <ul
                class="space-y-2 text-sm sm:text-base text-slate-700 dark:text-slate-300"
              >
                <li>Français : niveau excellent</li>
                <li>Anglais : niveau moyen</li>
                <li>Informatique : Word &amp; Excel (niveau excellent)</li>
                <li>Centres d’intérêt : lecture, musique, voyage, sport</li>
              </ul>
            </div>
          </div>

          <!-- Colonne droite : Expériences & Formations -->
          <div class="md:col-span-2 space-y-8">
            <!-- Expériences professionnelles -->
            <div
              class="bg-white/80 dark:bg-slate-900/90 backdrop-blur rounded-2xl p-5 sm:p-6 border border-slate-100 dark:border-slate-800"
            >
              <h2
                class="text-base sm:text-lg font-semibold mb-4 flex items-center gap-2"
              >
                <span class="w-1.5 h-6 bg-rose-500 rounded-full"></span>
                Expériences professionnelles
              </h2>
              <div class="relative pl-4 sm:pl-6 border-l-2 border-rose-100 dark:border-rose-900/40 space-y-5">
                <div
                  v-for="(exp, index) in experiences"
                  :key="exp.id"
                  class="relative pl-4 sm:pl-6"
                >
                  <!-- Point -->
                  <div
                    class="absolute -left-2.5 sm:-left-3 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border-2 border-white dark:border-slate-900 bg-rose-500 shadow-md"
                  ></div>
                  <p class="text-xs sm:text-sm text-rose-500 font-medium">
                    {{ exp.period }}
                  </p>
                  <p class="font-semibold">
                    {{ exp.company }}
                  </p>
                  <p class="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
                    {{ exp.role }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Formations -->
            <div
              class="bg-white/80 dark:bg-slate-900/90 backdrop-blur rounded-2xl p-5 sm:p-6 border border-slate-100 dark:border-slate-800"
            >
              <h2
                class="text-base sm:text-lg font-semibold mb-4 flex items-center gap-2"
              >
                <span class="w-1.5 h-6 bg-rose-500 rounded-full"></span>
                Formations &amp; diplômes
              </h2>
              <div class="relative pl-4 sm:pl-6 border-l-2 border-rose-100 dark:border-rose-900/40 space-y-5">
                <div
                  v-for="(edu, index) in formations"
                  :key="edu.id"
                  class="relative pl-4 sm:pl-6"
                >
                  <!-- Point -->
                  <div
                    class="absolute -left-2.5 sm:-left-3 w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border-2 border-white dark:border-slate-900 bg-rose-500 shadow-md"
                  ></div>
                  <p class="text-xs sm:text-sm text-rose-500 font-medium">
                    {{ edu.period }}
                  </p>
                  <p class="font-semibold">
                    {{ edu.title }}
                  </p>
                  <p class="text-slate-500 dark:text-slate-400 text-sm sm:text-base">
                    {{ edu.school }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '~/components/Footer.vue'
import juliePhoto from '~/assets/images/julie.jpeg'

const experiences = [
  {
    id: 1,
    period: 'Depuis juin 2023',
    company: 'MAIRIE D’ABENGOUROU',
    role: 'Assistante du Directeur Administratif',
  },
  {
    id: 2,
    period: 'Mars 2024 – Décembre 2025',
    company: 'SERVAIR Abidjan – Aéroport FHB',
    role: 'Hôte de restauration',
  },
  {
    id: 3,
    period: 'Janvier 2023 – Mars 2023',
    company: 'Cabinet Embouchure Invest',
    role: 'Secrétaire',
  },
  {
    id: 4,
    period: 'Juin 2019 – Septembre 2019',
    company: 'Moov Africa',
    role: 'Agent commercial',
  },
  {
    id: 5,
    period: 'Juin 2018 – Septembre 2018',
    company: 'Orange CI',
    role: 'Agent commercial',
  },
]

const formations = [
  {
    id: 1,
    period: '2021 – 2022',
    title:
      'Brevet de Technicien Supérieur – Ressources Humaines et Communication',
    school: 'Groupe Loko ISFOP, Marcory Zone 4',
  },
  {
    id: 2,
    period: '2019 – 2020',
    title: 'Baccalauréat série A2',
    school: 'Lycée Départemental d’Abengourou',
  },
  {
    id: 3,
    period: '2013 – 2014',
    title: 'Brevet d’Études du Premier Cycle (BEPC)',
    school: 'Collège Moderne d’Abengourou',
  },
]
</script>

<style>
body {
  font-family: 'Plus Jakarta Sans', 'Outfit', sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
