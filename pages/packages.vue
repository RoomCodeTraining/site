<template>
  <Header />
  <main class="pt-20">
    <Section
      title="Packages"
      eyebrow="Open source"
      subtitle="Des packages PHP et Laravel réutilisables pour accélérer le dev, standardiser les intégrations et réduire le risque en prod."
      container="wide"
    >
      <Packages />
    </Section>
  </main>
  <Footer />
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import Packages from '~/components/Packages.vue'
import Footer from '~/components/Footer.vue'
import Section from '~/components/ui/Section.vue'
</script>
