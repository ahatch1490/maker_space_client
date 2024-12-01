import { Meta, StoryFn } from '@storybook/vue3';
import ProjectImages from "./ProjectImages.vue";

export default {
    title: 'ProjectImages',
    component: ProjectImages,
} as Meta<typeof ProjectImages>;

const Template: StoryFn<typeof ProjectImages> = (args) => ({
    components: { ProjectImages },
    setup() {
        return { args };
    },
    template: '<ProjectImages v-bind="args" />',
});
export const Default = Template.bind({});
Default.args = {"imageUrls": [
    "../../../public/widget.webp",
    "../../../public/widget.webp",
    "../../../public/widget.webp",
    "../../../public/widget.webp"
]};// An array of image URLs associated with the project