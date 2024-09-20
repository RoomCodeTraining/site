<template>
<div class="">
    <div class="w-full h-auto p-4 border-2 rounded-lg shadow-lg project-card hover:border-green-500 hover:-translate-y-2 hover:shadow-2xl">
    <span class="block mb-2 font-bold text-green-500">{{ props.realisation.type }}</span>
     <img :src="props.realisation.main_image" alt="realisation" class="object-cover w-full h-48 rounded-lg">
    <h1 class="mt-2 mb-1 text-xl font-bold">{{ props.realisation.title }}</h1>
    <p class="text-justify text-gray-700" v-html="props.realisation.description"></p>
    <div class="flex justify-between mt-4">
        <span class="font-semibold text-gray-600">Stack: </span>
        <div class="space-x-1">
            <span v-for="technology in props.realisation.technologies" :key="technology"
               class="px-1 font-semibold text-gray-600 border-2 border-gray-500 rounded-md">{{ technology }}</span>
        </div>
    </div>
    <div class='mt-4 hover:block'>
      <!-- <button class='w-full p-2 font-extrabold text-center text-white capitalize bg-green-700 rounded-sm'>Decouvrir</button> -->
    </div>
</div>
</div>
</template>
<script setup lang="ts">
import type { Realisation } from '~/types/realisation'

 const props = defineProps({
    realisation: {
       type :Object as () => Realisation,
        required: true
    },
  })
</script>
<style scoped>
.project-card {
  transition: all 0.5s ease;
}

.project-card:hover {
  border-color: #4caf50;
  transform: translateY(-12px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
}
</style>
