import { Meta, StoryFn } from '@storybook/vue3';
import ProjectSearchCard from './ProjectSearchCard.vue';

export default {
    title: 'ProjectSearchCard',
    component: ProjectSearchCard,
} as Meta<typeof ProjectSearchCard>;

const Template: StoryFn<typeof ProjectSearchCard> = (args) => ({
    components: { ProjectSearchCard },
    setup() {
        return { args };
    },
    template: '<ProjectSearchCard v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = { item: {
        id: "b1aca791-c041-4ed3-b041-265783908f05",
        title: "FoobarBaz", // The title of the project
        description: "  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque" +
            "quas!", // A brief description of the project
        imageUrls: ["../../../public/widget.webp"], // An array of image URLs associated with the project
        tags: ["tag1", "tag2"]
    }
};

