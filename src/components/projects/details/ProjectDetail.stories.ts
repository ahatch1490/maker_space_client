import { Meta, StoryFn } from '@storybook/vue3';
import ProjectDetail from "./ProjectDetail.vue";
import ProjectDetails from "../../../Types/ProjectDetails.ts";

export default {
    title: 'ProjectDetail',
    component: ProjectDetail,
} as Meta<typeof ProjectDetail>;

const Template: StoryFn<typeof ProjectDetail> = (args) => ({
    components: { ProjectDetail },
    setup() {
        return { args };
    },
    template: '<ProjectDetail v-bind="args" />',
});
export const Default = Template.bind({});
Default.args = { projectDetails: {
    "id": "12345",
    "title": "Cherry Table Top",
    "description": "Table made from cherry wood.",
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
} as ProjectDetails};