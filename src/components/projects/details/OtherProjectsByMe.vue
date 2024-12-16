<script setup lang="ts">
import {OtherProject} from "../../../Types/OtherProject.ts";

const props = defineProps<{otherProjects:OtherProject[]}>();
</script>

<template>
    <div class="flex flex-col">
      <div v-for="project in props.otherProjects" class="border-2 p-2 mb-2 w-20">
          <img class="rounded-lg max-w-16" alt="project image" v-bind:src=project.image_url />
          <div class=" max-w-16">
            <p class=" text-center text-xs">{{project.title}}</p>
          </div>
      </div>
    </div>
</template>

<style scoped>

</style>