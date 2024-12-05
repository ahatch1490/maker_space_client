<script setup lang="ts">
const props = defineProps<{imageUrls: string[]}>();
</script>

<template>
  <div class="max-w-32">
    <div  v-for="image in props.imageUrls" class="border-2" >
      <img class="rounded-lg max-w-32" alt="project image" v-bind:src=image />
    </div>
  </div>

</template>

<style scoped>

</style>