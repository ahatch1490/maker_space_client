import { Meta, StoryFn } from '@storybook/vue3';
import ProjectProgress from "./ProjectProgress.vue";

export default {
    title: 'ProjectProgress',
    component: ProjectProgress,
} as Meta<typeof ProjectProgress>;

const Completed: StoryFn<typeof ProjectProgress> = (args) => ({
    components: { ProjectProgress },
    setup() {
        return { args };
    },
    template: '<ProjectProgress v-bind="args" />',
});
export const Default = Completed.bind({});
Default.args = {progress: {
    projectId: "b1aca791-c041-4ed3-b041-265783908f05", // The unique identifier of the project
    status: "Completed",
    completedDate: "2023-06-01",
    startDate: "2023-01-01",
    progression: 100,
    }
    };// An array of image URLs associated with the project


const Incomplete: StoryFn<typeof ProjectProgress> = (args) => ({
    components: { ProjectProgress },
    setup() {
        return { args };
    },
    template: '<ProjectProgress v-bind="args" />',
});
export const incomplete = Incomplete.bind({});
incomplete.args = {progress: {
        projectId: "b1aca791-c041-4ed3-b041-265783908f05", // The unique identifier of the project
        status: "In Progress",
        completedDate: '',
        startDate: "2023-01-01",
        progression: 47,
    }
};