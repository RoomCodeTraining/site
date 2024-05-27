<template>
    <div class="px-8 py-6 rounded-lg lg:mx-32 bg-scribble" id="realisations">
        <h2 class="text-4xl font-bold mb-2">Blog</h2>
        <div class="h-1 w-20 bg-green-500"></div>
        <section class="relative bg-white">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <a href="#">
                    <BlogCard />
                </a>
                <a href="#">
                    <BlogCard />
                </a>
                <a href="#">
                    <BlogCard />
                </a>
            </div>
        </section>
    </div>
</template>
<style>

</style>
<script setup>
    const realisations = useRealisation()
</script>
