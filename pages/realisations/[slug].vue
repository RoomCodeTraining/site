<template>
    <Header />
    <div class="container mx-auto">
        <div class="bg-white p-4 rounded-lg mt-4 mx-16 text-md">
            <NuxtLink to="/" class="text-black font-medium hover:text-green-900">Accueil</NuxtLink> / <span
                class="text-black font-semibold">Realisations</span> / <span
                class="text-gray-500">{{ realisation . title }}</span>
        </div>
    </div>
    <div class="container mx-auto py-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mx-16">
            <div class="w-full border-2">
                <img :src="realisation.main_image" alt="realisation"
                    class="w-full h-72 object-cover rounded-lg shadow-md">
            </div>
            <div class="w-full">
                <h1 class="text-2xl font-bold mb-2">{{ realisation.title }}</h1>
                <p class="text-gray-700 text-justify mt-5" v-html="realisation.description"></p>
            </div>
        </div>
        <h3 class="text-3xl font-bold mt-8  mx-16">Autres images</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mx-16 mt-4">
            <div v-for="image in realisation.images" :key="image.image" class="w-full border-2">
                <img :src="image" alt="realisation" class="w-full h-72 object-cover rounded-lg">
            </div>
        </div>
    </div>
    <Footer />
</template>
<script lang="ts" setup>
    const route = useRoute()
    const realisation = ref({})
    onMounted(async () => {
        const response = await fetch(`https://mebackend.roomcodetraining.com/api/realisations/${route.params.slug}`)
            .then((response) => response.json())
            .catch((e) => {
                console.log(e)
            });
        realisation.value = response.data
    })
</script>
<style>
    body {
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-style: normal;
    }
</style>
