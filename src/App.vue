<script setup lang="ts">

import ProjectSearch from "./components/projects/ProjectSearch.vue";
</script>

<template>
  <div>
    <nav>
      <router-link to="/">Search</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>

</style>
