<template>
  <section class="py-12 sm:py-16 lg:py-24 bg-white dark:bg-slate-950">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader
        title="Je peux vous aider à"
        subtitle="Des résultats concrets pour vos équipes et vos clients"
      />

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div
          v-for="(service, idx) in services"
          :key="idx"
          class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-7 hover:border-orange-500/50 dark:hover:border-orange-500/30 transition-all duration-300 hover:shadow-2xl"
        >
          <div class="flex items-start gap-4">
            <div
              class="w-12 h-12 rounded-2xl bg-orange-500/10 dark:bg-orange-500/15 border border-orange-500/30 flex items-center justify-center flex-shrink-0"
            >
              <span class="text-2xl">{{ service.icon }}</span>
            </div>

            <div class="min-w-0">
              <h3 class="text-xl font-bold text-slate-900 dark:text-white font-display">
                {{ service.title }}
              </h3>
              <p class="mt-2 text-slate-600 dark:text-slate-300 leading-relaxed">
                {{ service.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <p class="text-slate-600 dark:text-slate-300">
          Vous avez un objectif (plus de ventes, moins de pertes, meilleure exécution) ? Je vous aide à cadrer la solution et à mesurer l’impact.
        </p>
        <div class="flex items-center gap-3">
          <a
            :href="whatsappLink"
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
            aria-label="Contacter via WhatsApp"
          >
            WhatsApp
          </a>
          <NuxtLink
            to="/contact"
            class="inline-flex items-center justify-center px-6 py-3 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-semibold rounded-xl transition-all duration-200 hover:border-orange-500 dark:hover:border-orange-400 hover:text-orange-500 dark:hover:text-orange-400"
            aria-label="Ouvrir le formulaire"
          >
            Formulaire
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import SectionHeader from './SectionHeader.vue'

const whatsappLink = 'https://wa.me/225767476595'

const services = [
  {
    icon: '⚡',
    title: 'Convertir plus',
    description:
      'Parcours clients plus clairs et pages/flows qui mènent à l’action : demandes, réservations, commandes.',
  },
  {
    icon: '⏱️',
    title: 'Réduire les pertes de temps',
    description:
      'Digitaliser ce qui est répétitif : documents, saisie, demandes terrain… pour gagner en vitesse et en précision.',
  },
  {
    icon: '🏗️',
    title: 'Structurer l’opérationnel',
    description:
      'Workflows adaptés à vos équipes (terrain/ops/admin) pour moins d’allers-retours et plus d’autonomie.',
  },
  {
    icon: '📊',
    title: 'Piloter avec des KPI utiles',
    description:
      'Tableaux de bord + alertes pour décider vite : conversions, ruptures, activité, qualité de la donnée.',
  },
  {
    icon: '🧩',
    title: 'Intégrer sans douleur',
    description:
      'Connexion avec vos outils existants (CRM, stockage, outils internes) pour éviter les doubles saisies et sécuriser le flux.',
  },
  {
    icon: '🚀',
    title: 'Mettre en production et faire évoluer',
    description:
      'Une livraison propre, une maintenance suivie et des améliorations basées sur l’usage réel.',
  },
]
</script>

