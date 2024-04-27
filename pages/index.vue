<template>
    <Header />
    <Hero />
    <div class="container mx-auto px-8 py-12">
        <div class="px-8 py-6 mt-8 rounded-lg lg:mx-32"  id="cursus">
            <h2 class="text-4xl font-bold mb-2">Mon Cursus scolaire</h2>
            <div class="h-1 w-20 bg-green-500"></div>
            <Cursus />
        </div>
        <Experience />
        <Realisation />
    </div>
</template>
<style>
    body {
       font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-style: normal;
    }
</style>
