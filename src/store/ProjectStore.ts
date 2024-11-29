import {defineStore} from "pinia";
import {computed, ref} from "vue";


// export const useProjectStore = defineStore('project', {
//     state: () => ({
//         count: 0,
//     }),
//
//     searchProjects: async (searchText: string) => {
//         return json;
//     }
//     return {searchProjects};
// });
export const useProjectStore = defineStore('project', () => {
        async function searchProjects (searchText: string) {
            console.log(searchText)
        return json;
    }
    return {searchProjects}

})


export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const name = ref('Eduardo')
    const doubleCount = computed(() => count.value * 2)
    function increment() {
        count.value++
    }

    return { count, name, doubleCount, increment }
})

const json = {projects:[{
        id: "b1aca791-c041-4ed3-b041-265783908f05",
        title: "FoobarBaz", // The title of the project
        description: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque" +
            "quas!", // A brief description of the project
        imageUrls: ["../../../public/widget.webp"], // An array of image URLs associated with the project
        tags: ["tag1","tag2"]
    }, {
        id: "b1aca791-c041-4ed3-b041-265783908f05",
        title: "FoobarBazBuzz", // The title of the project
        description: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque" +
            "quas!", // A brief description of the project
        imageUrls: ["../../../public/widget.webp"], // An array of image URLs associated with the project
        tags: ["tag1","tag3"]
    }]};