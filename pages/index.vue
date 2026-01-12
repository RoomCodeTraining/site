<template>
  <Header />
  <Hero />
  <!-- Projets récents - Juste après le Hero -->
  <RecentProjects />
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
    <Cursus />
    <Experience />
    <Realisation />
    <!-- <Formation /> -->
    <ProjectManagement />
    <Recommendation />
  </div>
  <Footer />
</template>

<script setup>
import Header from '~/components/Header.vue'
import Hero from '~/components/Hero.vue'
import RecentProjects from '~/components/RecentProjects.vue'
import Cursus from '~/components/Cursus.vue'
import Experience from '~/components/Experience.vue'
import Realisation from '~/components/Realisation.vue'
import Formation from '~/components/Formation.vue'
import ProjectManagement from '~/components/ProjectManagement.vue'
import Recommendation from '~/components/Recommendation.vue'
import Footer from '~/components/Footer.vue'
</script>

<style>
body {
  font-family: 'Plus Jakarta Sans', 'Outfit', sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
