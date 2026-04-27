<template>
  <div id="packages">
    <!-- Filtres -->
    <div class="flex flex-wrap gap-2 sm:gap-3 mb-10 justify-center">
      <button
        v-for="category in categories"
        :key="category"
        type="button"
        @click="activeCategory = category"
        :class="[
          'px-3 sm:px-4 py-2 rounded-xl font-semibold transition-all duration-300 text-xs sm:text-sm whitespace-nowrap border',
          activeCategory === category
            ? 'bg-orange-500 text-white border-orange-500 shadow-sm'
            : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
        ]"
      >
        {{ category }}
      </button>
    </div>

    <!-- Grille des packages -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
      <Card
        v-for="pkg in filteredPackages"
        :key="pkg.id"
        class="p-0 overflow-hidden"
      >
        <div class="p-6 sm:p-7">
          <div class="flex items-start justify-between gap-4">
            <div class="flex items-start gap-3 min-w-0">
              <div class="w-11 h-11 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center flex-shrink-0">
                <span class="text-xl">{{ pkg.icon }}</span>
              </div>
              <div class="min-w-0">
                <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white font-display truncate">
                  {{ pkg.name }}
                </h3>
                <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {{ pkg.category }}
                </p>
              </div>
            </div>

            <Badge :tone="pkg.status === 'stable' ? 'success' : 'warning'" size="md">
              {{ pkg.status === 'stable' ? pkg.version : 'En développement' }}
            </Badge>
          </div>

          <p class="mt-4 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            {{ pkg.description }}
          </p>

          <div class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="tech in pkg.technologies"
              :key="tech"
              class="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-lg"
            >
              {{ tech }}
            </span>
          </div>

          <div v-if="pkg.features?.length" class="mt-5 flex flex-wrap gap-2">
            <Badge
              v-for="feature in pkg.features"
              :key="feature"
              tone="brand"
            >
              {{ feature }}
            </Badge>
          </div>
        </div>

        <div class="px-6 sm:px-7 py-4 border-t border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
          <div class="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
            <span class="inline-flex items-center gap-1.5">
              <span aria-hidden="true">★</span> {{ pkg.stars }}
            </span>
            <span class="inline-flex items-center gap-1.5">
              <span aria-hidden="true">⇩</span> {{ pkg.downloads }}
            </span>
            <span class="hidden sm:inline-flex items-center gap-1.5">
              <span aria-hidden="true">↻</span> {{ pkg.lastUpdate }}
            </span>
          </div>

          <div class="flex gap-2">
            <Button variant="primary" size="sm" :href="pkg.packagistUrl" target="_blank" rel="noopener noreferrer">
              Packagist
            </Button>
            <Button variant="secondary" size="sm" :href="pkg.githubUrl" target="_blank" rel="noopener noreferrer">
              GitHub
            </Button>
          </div>
        </div>
      </Card>
    </div>

    <!-- Call to action -->
    <div class="mt-14">
      <Card class="p-0 overflow-hidden" :hover="false">
        <div class="p-8 sm:p-10 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <h3 class="text-xl sm:text-2xl font-bold font-display">
            Besoin d'un package personnalisé ?
          </h3>
          <p class="mt-3 text-orange-100 max-w-2xl text-sm sm:text-base">
            Je crée des packages PHP/Laravel sur mesure pour fiabiliser vos intégrations et accélérer votre delivery.
          </p>
          <div class="mt-6">
            <Button variant="secondary" size="md" to="/contact">
              Me contacter
              <template #right><span aria-hidden="true">→</span></template>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import Card from '~/components/ui/Card.vue'
import Badge from '~/components/ui/Badge.vue'
import Button from '~/components/ui/Button.vue'

const activeCategory = ref('Tous')

const categories = ['Tous', 'Laravel', 'PHP', 'SMS', 'Payment']

const packages = [
    {
        id: 1,
        name: 'letexto-sms-package',
        description: 'Package PHP pour l\'envoi de SMS via l\'API Letexto. Support de l\'envoi simple et en masse, intégration Laravel native, gestion des erreurs et validation des numéros.',
        category: 'PHP',
        icon: '📱',
        version: 'v1.0.0',
        technologies: ['PHP 8.0+', 'Guzzle', 'Laravel'],
        stars: 2,
        downloads: '76',
        lastUpdate: '2025-06-26',
        packagistUrl: 'https://packagist.org/packages/room/letexto-sms-package',
        githubUrl: 'https://github.com/roomdada/package-sms',
        status: 'stable',
        features: ['Envoi simple', 'Envoi en masse', 'Intégration Laravel', 'Validation']
    },
    {
        id: 2,
        name: 'laravel-payment-gateways',
        description: 'Package Laravel réutilisable pour gérer plusieurs agrégateurs de paiement (Cinetpay, Bizao, Winipayer) avec failover automatique, webhooks intégrés et configuration dynamique.',
        category: 'Laravel',
        icon: '💳',
        version: 'dev-main',
        technologies: ['Laravel 9+', 'PHP 8.1+', 'Guzzle'],
        stars: 6,
        downloads: '3',
        lastUpdate: '2025-07-13',
        packagistUrl: 'https://packagist.org/packages/room/laravel-payment-gateways',
        githubUrl: 'https://github.com/roomdada/laravel-payment-gateways',
        status: 'development',
        features: ['Multi-gateways', 'Failover automatique', 'Webhooks', 'Logging']
    }
]

const filteredPackages = computed(() => {
    if (activeCategory.value === 'Tous') {
        return packages
    }
    return packages.filter(pkg => pkg.category === activeCategory.value)
})
</script>

<style scoped>
.grid > :deep(*) {
  min-width: 0;
}
</style>
