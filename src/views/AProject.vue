<script setup lang="ts">
import Project from "../components/projects/details/Project.vue";
const details = { projectDetails: {
  "id": "12345",
      "title": "Cherry Table Top",
      "description": "this is a description",
      "imageUrls": [
    "https://makerstoragimages.blob.core.windows.net/makerimages/IMG_2208.webp",
    "https://makerstoragimages.blob.core.windows.net/makerimages/IMG_2207.webp",
    "https://makerstoragimages.blob.core.windows.net/makerimages/IMG_2227.webp",
    "https://makerstoragimages.blob.core.windows.net/makerimages/IMG_2235.webp"
  ],
      "tags": ["furniture", "cherry", "table"],
      "difficulty": 4,
      "startDate": "2023-01-01",
      "endDate": "2023-06-01",
      "materials": ["maple", "brass", "cherry"],
      "dimensions": "24\" x 48\"",
      "projectProgress": {
    projectId: "b1aca791-c041-4ed3-b041-265783908f05",
        status: "In Progress",
        completedDate: '',
        startDate: "2023-01-01",
        progression: 47,},
  otherProjects: [{
    "id": "12345",
    "title": "Oak Chair",
    "progression": 37,
    "difficulty": 5,
    "image_url": "../../../public/widget.webp",
  },
    {"id": "123456",
      "title": "Cedar box",
      "progression": 88,
      "difficulty": 1,
      "image_url": "../../../public/widget.webp",
    },
    {   "id": "1234567",
      "title": "night stand",
      "progression": 32,
      "difficulty": 3,
      "image_url": "../../../public/widget.webp"
    }
  ]

}};
</script>

<template>
<Project project-details="details"></Project>
</template>

<style scoped>

</style>