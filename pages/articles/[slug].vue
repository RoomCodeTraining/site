<template>
    <Header />
    <div class="container mx-auto">
        <div class="bg-white p-4 rounded-lg mt-4 mx-16 text-md">
            <NuxtLink to="/" class="text-black font-medium hover:text-green-900">Accueil</NuxtLink> / <span class="text-black font-semibold">Article</span> / <span class="text-gray-500">{{ article.title }}</span>
        </div>
    </div>
    <div class="container mx-auto py-4">
        <div class="grid grid-cols-1 md:grid-cols-1 gap-4 mx-12">
            <div class="w-full border-2">
                <img :src="article.image" alt="realisation" class="w-full h-72 object-cover rounded-lg">
            </div>
            <div class="w-full">
                <h1 class="text-2xl font-bold mb-2">{{ article.title }}</h1>
                <p class="text-gray-700 text-justify mt-5" v-html="article.description"></p>
            </div>
        </div>
    </div>
    <Footer />
</template>
<script lang="ts" setup>
    const route = useRoute()
    const article = ref({})

    onMounted(async () => {
        const response = await fetch(`https://mebackend.roomcodetraining.com/api/blogs/${route.params.slug}`)
            .then((response) => response.json())
            .catch((e) => {
                console.log(e)
            });
        article.value = response.data
    })
</script>
<style>
    body {
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-style: normal;
    }
</style>
