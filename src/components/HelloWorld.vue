<script setup lang="ts">
import { ref } from 'vue'
import ProjectSearchCard from "./projects/ProjectSearchCard.vue";

defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
<ProjectSearchCard></ProjectSearchCard>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
