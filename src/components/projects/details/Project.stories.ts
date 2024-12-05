import { Meta, StoryFn } from '@storybook/vue3';
import Project from "./Project.vue";
import ProjectDetails from "../../../Types/ProjectDetails.ts";

export default {
    title: 'Project',
    component: Project,
} as Meta<typeof Project>;

const Template: StoryFn<typeof Project> = (args) => ({
    components: { Project },
    setup() {
        return { args };
    },
    template: '<Project v-bind="args" />',
});
export const Default = Template.bind({});
Default.args = { projectDetails: {
        "id": "12345",
        "title": "Cherry Table Top",
        "description": "this is a description",
        "imageUrls": [
            "../../../public/widget.webp",
            "../../../public/widget.webp",
            "../../../public/widget.webp",
            "../../../public/widget.webp"
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
            progression: 47,
}} as ProjectDetails};