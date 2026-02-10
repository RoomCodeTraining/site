<template>
  <Header />
  <div class="min-h-screen bg-white dark:bg-slate-950 pt-20">
    <Blog />
  </div>
  <Footer />
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import Blog from '~/components/Blog.vue'
import Footer from '~/components/Footer.vue'
</script>

<style scoped>
body {
  font-family: 'Plus Jakarta Sans', 'Outfit', sans-serif;
  font-weight: 400;
  font-style: normal;
}
</style>
