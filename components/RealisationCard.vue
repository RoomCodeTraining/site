<template>
<div class="">
    <div class="w-full h-auto p-4 rounded-lg shadow-lg border-2 project-card hover:border-green-500 hover:-translate-y-2 hover:shadow-2xl">
    <span class="block font-bold text-green-500 mb-2">{{ props.realisation.type }}</span>
     <img :src="props.realisation.image" alt="realisation" class="w-full h-48 object-cover rounded-lg">
    <h1 class="text-xl font-bold mb-1">{{ props.realisation.title }}</h1>
    <p class="text-gray-700 text-justify">{{ props.realisation.description }}</p>
    <div class="flex justify-between mt-4">
        <span class="text-gray-600 font-semibold">Stack: </span>
        <div class="space-x-1">
            <span v-for="technology in props.realisation.technologies" :key="technology"
               class="text-gray-600 font-semibold rounded-md  border-2 border-gray-500 px-1">{{ technology }}</span>
        </div>
    </div>
    <!-- <div class='mt-4 hover:block'>
      <button class='bg-green-300 w-full p-2 rounded-sm text-center text-white uppercase font-extrabold'>Consulter</button>
    </div> -->
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
