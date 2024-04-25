
import Cursus from '~/components/Cursus.vue';
<template>
    <Header />
    <Hero />
    <div class="container mx-auto px-8 py-12">
      <Cursus />

        <div class="bg-gradient-to-r from-green-400 to-green-200 text-white px-8 py-6 mt-8 rounded-lg">
            <h2 class="text-3xl font-bold mb-2">Projets personnels</h2>
            <div class="h-1 w-20 bg-white mb-6"></div>
            <!-- Votre contenu pour les projets personnels -->
        </div>

        <div class="bg-gradient-to-r from-green-400 to-green-200 text-white px-8 py-6 mt-8 rounded-lg">
            <h2 class="text-3xl font-bold mb-2">Expérience professionnelle</h2>
            <div class="h-1 w-20 bg-white mb-6"></div>
            <!-- Votre contenu pour l'expérience professionnelle -->
        </div>

        <!-- Ajoutez d'autres sections avec des titres stylisés au besoin -->
    </div>

</template>
