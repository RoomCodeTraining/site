<template>
    <div class="px-8 py-6 rounded-lg lg:mx-32 bg-scribble" id="realisations">
        <h2 class="text-4xl font-bold mb-2">Blog</h2>
        <div class="h-1 w-20 bg-green-500"></div>
        <section class="relative bg-white">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div v-for='article in articles' :key="article.id">
                   <NuxtLink :to="`/articles/${article.slug}`">
                        <BlogCard :article="article"/>
                    </NuxtLink>
                </div>
            </div>
        </section>
    </div>
</template>
<style>

</style>
<script setup lang="ts">
    const articles: any[] = ref([])
    onMounted(async () => {
        const response = await fetch("https://mebackend.roomcodetraining.com/api/blogs")
            .then((response) => response.json())
            .catch((e) => {
                console.log(e)
            });
        articles.value = response.data
    })
</script>
