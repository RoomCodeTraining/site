<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-green-900/20">
    <Header />

    <div class="pt-20 pb-16">
      <div class="max-w-6xl mx-auto px-4">
        <!-- Header de la page -->
        <div class="text-center mb-16">
          <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            À propos de
            <span class="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              Roger DA
            </span>
          </h1>
          <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Développeur passionné, formateur engagé et créateur de contenu dédié à l'apprentissage du développement web.
          </p>
        </div>

        <!-- Section Histoire -->
        <section class="mb-20">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div class="space-y-6">
              <h2 class="text-3xl font-bold text-gray-900 dark:text-white">
                Mon parcours
              </h2>
              <div class="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Tout a commencé en 2020, quand j'ai découvert ma passion pour le développement web.
                  Ce qui n'était qu'un simple intérêt est rapidement devenu une vocation.
                </p>
                <p>
                  Après avoir travaillé sur plusieurs projets innovants et participé à la réalisation
                  d'applications de grande envergure, j'ai réalisé que ma plus grande satisfaction
                  venait de partager mes connaissances avec d'autres.
                </p>
                <p>
                  Aujourd'hui, je combine développement et formation pour aider la nouvelle génération
                  de développeurs à réaliser leurs rêves dans le monde du numérique.
                </p>
              </div>

              <!-- Statistiques -->
              <div class="grid grid-cols-3 gap-6 pt-6">
                <div class="text-center">
                  <div class="text-3xl font-bold text-green-600 dark:text-green-400">4+</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">Années d'expérience</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">Projets réalisés</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-bold text-purple-600 dark:text-purple-400">20+</div>
                  <div class="text-sm text-gray-600 dark:text-gray-400">Étudiants formés</div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="bg-gradient-to-br from-green-400 to-blue-500 rounded-2xl p-8 text-white">
                <div class="space-y-6">
                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <span class="text-2xl">🎯</span>
                    </div>
                    <div>
                      <h3 class="text-xl font-bold">Ma mission</h3>
                      <p class="text-green-100">Rendre le développement web accessible à tous</p>
                    </div>
                  </div>

                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <span class="text-2xl">💡</span>
                    </div>
                    <div>
                      <h3 class="text-xl font-bold">Ma vision</h3>
                      <p class="text-green-100">Former la prochaine génération de développeurs</p>
                    </div>
                  </div>

                  <div class="flex items-center gap-3">
                    <div class="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <span class="text-2xl">🚀</span>
                    </div>
                    <div>
                      <h3 class="text-xl font-bold">Mon objectif</h3>
                      <p class="text-green-100">Créer des solutions qui impactent positivement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <!-- Section Pédagogie -->
        <section class="mb-20">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Ma pédagogie
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Une approche personnalisée et pratique pour un apprentissage efficace et durable.
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div class="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <span class="text-2xl">🎯</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Apprentissage par projet
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Chaque concept est appris à travers des projets concrets et réels,
                permettant une compréhension profonde et pratique.
              </p>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div class="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                <span class="text-2xl">👥</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Accompagnement personnalisé
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Un suivi individuel adapté au rythme et aux objectifs de chaque apprenant,
                avec un support continu et des ressources personnalisées.
              </p>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div class="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <span class="text-2xl">🔄</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Méthode itérative
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Une approche progressive qui construit les compétences étape par étape,
                avec des retours réguliers et des ajustements continus.
              </p>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div class="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                <span class="text-2xl">💻</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Technologies modernes
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Focus sur les technologies actuelles et les bonnes pratiques du marché,
                pour une formation alignée avec les besoins des entreprises.
              </p>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div class="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
                <span class="text-2xl">🎨</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Créativité et innovation
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Encourager la créativité et l'innovation dans le développement,
                pour créer des solutions uniques et impactantes.
              </p>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div class="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
                <span class="text-2xl">🌱</span>
              </div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                Développement continu
              </h3>
              <p class="text-gray-600 dark:text-gray-300">
                Inculquer l'importance de l'apprentissage continu et de l'adaptation
                aux nouvelles technologies et méthodologies.
              </p>
            </div>
          </div>
        </section>

        <!-- Section Valeurs -->
        <section class="mb-20">
          <div class="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <div class="text-center mb-8">
              <h2 class="text-3xl font-bold mb-4">Mes valeurs</h2>
              <p class="text-green-100 max-w-2xl mx-auto">
                Les principes qui guident mon travail et ma relation avec mes étudiants.
              </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div class="text-center">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl">🤝</span>
                </div>
                <h3 class="text-lg font-semibold mb-2">Collaboration</h3>
                <p class="text-green-100 text-sm">
                  Travailler ensemble pour atteindre des objectifs communs
                </p>
              </div>

              <div class="text-center">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl">🎯</span>
                </div>
                <h3 class="text-lg font-semibold mb-2">Excellence</h3>
                <p class="text-green-100 text-sm">
                  Viser la qualité dans chaque projet et formation
                </p>
              </div>

              <div class="text-center">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl">💡</span>
                </div>
                <h3 class="text-lg font-semibold mb-2">Innovation</h3>
                <p class="text-green-100 text-sm">
                  Explorer de nouvelles approches et technologies
                </p>
              </div>

              <div class="text-center">
                <div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span class="text-2xl">🌱</span>
                </div>
                <h3 class="text-lg font-semibold mb-2">Croissance</h3>
                <p class="text-green-100 text-sm">
                  Encourager le développement personnel et professionnel
                </p>
              </div>
            </div>
          </div>
        </section>

        <!-- Section Call to action -->
        <section class="text-center">
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
            <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Prêt à commencer votre aventure ?
            </h2>
            <p class="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Que ce soit pour une formation, un projet ou simplement échanger,
              je suis là pour vous accompagner dans votre parcours de développeur.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact"
                 class="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-lg hover:from-green-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300">
                <span>Me contacter</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </a>
              <a href="#formation"
                 class="inline-flex items-center gap-3 px-8 py-4 border-2 border-green-600 text-green-600 dark:text-green-400 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300">
                <span>Découvrir la formation</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
</script>

<style scoped>
/* Animations d'entrée */
section {
  opacity: 0;
  animation: fadeInUp 0.8s ease-out forwards;
}

section:nth-child(1) { animation-delay: 0.1s; }
section:nth-child(2) { animation-delay: 0.2s; }
section:nth-child(3) { animation-delay: 0.3s; }
section:nth-child(4) { animation-delay: 0.4s; }

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
</style>
