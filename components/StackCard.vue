<template>
    <div class="px-4 border-2 py-4 ">
        <img :src="`~/assets/images/${image}`" alt="laravel" class="w-20 h-20 mx-auto object-contain" />
    </div>
</template>
<script setup>
  const props = defineProps({
    image: String,
  });
</script>
