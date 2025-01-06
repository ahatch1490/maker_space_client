<script setup lang="ts">
const props = defineProps<{imageUrls: string[]}>();
import { ref, onMounted } from "vue";
const activeIndex = ref(0);
const responsiveOptions = ref([
  {
    breakpoint: '1024px',
    numVisible: 5
  },
  {
    breakpoint: '768px',
    numVisible: 3
  },
  {
    breakpoint: '560px',
    numVisible: 1
  }
]);
const displayCustom = ref(false);
const imageClick = (index) => {
  activeIndex.value = index;
  displayCustom.value = true;
};
</script>

<template>
<!--  <div class="max-w-32">-->
<!--    <div  v-for="image in props.imageUrls" class="border-2" >-->
<!--      <img class="rounded-lg max-w-32" alt="project image" v-bind:src=image />-->
<!--    </div>-->
<!--  </div>-->
<!--  <Galleria :value="props.imageUrls" :numVisible="5" containerStyle="max-width: 640px"-->
<!--            :showThumbnails="false" :showIndicators="true">-->
<!--    <template #item="url">-->
<!--      <img class="rounded-lg max-w-52" alt="project image" v-bind:src=url.item />-->
<!--    </template>-->
<!--  </Galleria>-->
<!--      <div class="card">-->
<!--        <Carousel :value="props.imageUrls" :numVisible="1" :numScroll="1" orientation="vertical" containerClass="flex items-center">-->
<!--          <template #item="url">-->
<!--                <div class="border-2" >-->
<!--                  <img class="rounded-lg max-w-48" alt="project image" v-bind:src=url.data />-->
<!--                </div>-->
<!--          </template>-->
<!--        </Carousel>-->
<!--      </div>-->

  <div class="card flex justify-center">
    <Galleria v-model:activeIndex="activeIndex" v-model:visible="displayCustom" :value="props.imageUrls" :responsiveOptions="responsiveOptions" :numVisible="7"
              containerStyle="max-width: 850px" :circular="true" :fullScreen="true" :showItemNavigators="true" :showThumbnails="false">
      <template #item="slotProps">
        <img class="rounded-lg" :src="slotProps.item" alt="image" style="width: 100%; display: block" />
      </template>
      <template #thumbnail="slotProps">
        <img :src="slotProps.item" :alt="thumb" style="display: block" />
      </template>
    </Galleria>

    <div v-if="props.imageUrls" class="grid grid-cols-12 gap-4" style="max-width: 400px">
      <div v-for="(image, index) of props.imageUrls" :key="index" class="col-span-4">
        <img :src="image" alt="foobar" class="rounded-lg" style="cursor: pointer" @click="imageClick(index)" />
      </div>
    </div>
  </div>
  </template>
<style scoped>

</style>