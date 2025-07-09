<template>
    <Header />
    <Hero />
    <div class="max-w-6xl mx-auto px-4 py-4">
        <Cursus />
        <Experience />
        <Realisation />
        <!-- <Formation /> -->
        <!-- <Packages /> -->
        <Blog />
        <Stack />
        <Recommendation />
    </div>
    <Backstage />
    <Footer />
</template>

<script setup>
import Header from '~/components/Header.vue'
import Hero from '~/components/Hero.vue'
import Cursus from '~/components/Cursus.vue'
import Experience from '~/components/Experience.vue'
import Realisation from '~/components/Realisation.vue'
import Formation from '~/components/Formation.vue'
import Packages from '~/components/Packages.vue'
import Blog from '~/components/Blog.vue'
import Stack from '~/components/Stack.vue'
import Recommendation from '~/components/Recommendation.vue'
import Backstage from '~/components/Backstage.vue'
import Footer from '~/components/Footer.vue'
</script>

<style>
    body {
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-style: normal;
    }
</style>
