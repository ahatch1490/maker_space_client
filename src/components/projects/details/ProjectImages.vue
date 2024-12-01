<script setup lang="ts">
const props = defineProps<{imageUrls: string[]}>();
</script>

<template>
  <div class="grid grid-cols-1 gap-1">
    <div  v-for="image in props.imageUrls"  >
      <img class="rounded-lg max-w-44" alt="project image" v-bind:src=image />
    </div>
  </div>

</template>

<style scoped>

</style>