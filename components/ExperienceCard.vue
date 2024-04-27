<template>
<div class="w-full mx-auto  bg-white px-2 py-4 shadow-lg rounded-lg border-1 hover:border-2 hover:border-green-500">
    <h3 class="text-md lg:text-xl font-bold mb-2">{{ props.post }} chez  {{ props.company }}</h3>
    <p class="text-black mb-2 text-justify">
        {{ props.description }}
    </p>
    <div class="flex justify-between mt-4">
        <span class="text-gray-600 font-semibold float-rigth">{{ props.year }}</span>
    </div>
</div>
</template>
<script setup>
  const props = defineProps({
    year: String,
    post: String,
    description: String,
    company: String,
  })
</script>
