<template>
<div>
      <div
        class="w-auto md:w-100  p-4 rounded-lg shadow-lg border-2 project-card hover:border-green-500 hover:-translate-y-1 hover:shadow-2xl">
        <span class="block font-bold text-green-500 mb-2">{{ props.type }}</span>
        <h1 class="text-xl font-bold mb-1">{{ props.title }}</h1>
        <p class="text-gray-700 text-justify">{{ props.description }}</p>
        <div class="flex justify-between mt-4">
          <span class="text-gray-600 font-semibold ">Technologies: </span>
          <span class="text-gray-600 font-semibold">JS</span>
        </div>
    </div>
</div>
</template>
<script setup>
  const props = defineProps({
    type: String,
    title: String,
    description: String,
    technologies: Array
  });

  onMounted(() => {
    console.log(props.technologies);
  });
</script>
<style>
    .project-card {
        transition: all 0.5s ease;
    }

    .project-card:hover {
        border-color: #4CAF50;
        transform: translateY(-12px);
        box-shadow: 0 12px 20px rgba(0, 0, 0, 0.3);
    }
</style>
