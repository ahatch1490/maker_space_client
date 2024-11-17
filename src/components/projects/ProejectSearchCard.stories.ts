import { Meta, Story } from '@storybook/vue3';
import ProjectSearchCard from './ProjectSearchCard.vue';

export default {
    title: 'ProjectSearchCard',
    component: ProjectSearchCard,
} as Meta<typeof ProjectSearchCard>;

const Template: Story<typeof ProjectSearchCard> = (args) => ({
    components: { ProjectSearchCard },
    setup() {
        return { args };
    },
    template: '<ProjectSearchCard v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {title:"project title"};