<template>
<div class="w-full mx-auto  bg-white px-2 py-4 shadow-lg rounded-lg border-1 hover:border-2 hover:border-green-500">
    <h3 class="text-md lg:text-xl font-bold mb-2 text-green-900">{{ props.experience.post }} chez  <span class=" text-black font-bold">{{ props.experience.company }}</span></h3>
    <p class="text-black mb-2 text-justify">
        {{ props.experience.description }}
    </p>
    <div class="flex justify-between mt-4">
        <span class="text-gray-600 font-semibold float-rigth">{{ props.experience.year }}</span>
    </div>
</div>
</template>
<script setup lang="ts">
import type { Experience } from '~/types/experience'

 const props = defineProps({
    experience: {
       type :Object as () => Experience,
       required: true
    },
  })
</script>
