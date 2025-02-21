<script setup lang="ts">
import {ClientOnlyProfileService} from "../services/ClientOnlyProfileService.ts";
import Project from "../components/projects/details/Project.vue";
import {onMounted, ref} from "vue";
const id = defineProps(['id']);
let details = ref(null); // Declare a reactive variable

onMounted(async () => {
  let service = new ClientOnlyProfileService();
  details.value = await service.fetchProjectDetails(id.toString());
});

</script>

<template>
  <div class="m-5">
    <div v-if="details">
      <Project :projectDetails="details"></Project>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<style scoped>

</style>