import { Meta, StoryFn } from '@storybook/vue3';
import ProjectSearch from "./ProjectSearch.vue";

export default {
    title: 'ProjectSearch',
    component: ProjectSearch,
} as Meta<typeof ProjectSearch>;

const Template: StoryFn<typeof ProjectSearch> = (args) => ({
    components: { ProjectSearch },
    setup() {
        return { args };
    },
    template: '<ProjectSearch  />',
});
export const Default = Template.bind({});