<template>
    <div class="px-8 py-6 rounded-lg lg:mx-32" id="realisations">
        <h2 class="text-4xl font-bold mb-2">Mon portefolio</h2>
        <div class="h-1 w-20 bg-green-500"></div>
        <section class="relative bg-white">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div v-for="realisation in realisations" :key="realisation.id">
                    <RealisationCard :type="realisation.type" :title="realisation.title" :description="realisation.description"  />
                </div>
            </div>
        </section>
    </div>
</template>
<script setup>
 const realisations = [
    {
      id: 1,
      type: "Backend",
      title: "Ahio",
      description: "Mise en place d'une API RESTful pour la gestion des residences et biens. Application de gestion des biens immobiliers.",
      technologies : ['PHP', 'Laravel', 'MySQL', 'JS']
    },
    {
      id: 2,
      type: "Fullstack",
      title: "Daylivro",
      description: "Application de gestions des etablissements(restaurants, gloceries, supermarchés, etc.)",
      technologies : ['PHP', 'Laravel', 'MySQL', 'JS', 'TailwindCSS', 'AlpineJS', 'Livewire']
    },
    {
      id: 3,
      type: "Frontend",
      title: "Site du cabinet YOBSAJ",
      description: "Réalisation du site web du cabinet YOBSAJ, cabinet d'expertise juridique en cote d'ivoire'.",
      technologies : ['HTML', 'CSS', 'JS', 'TailwindCSS']
    },

  ];
</script>
