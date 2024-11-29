import { Meta, StoryFn } from '@storybook/vue3';
import ProjectSearch from "./ProjectSearch.vue";
//import { useProjectStore } from "../../store/ProjectStore.ts";
import {setActivePinia} from "pinia";
import {createTestingPinia} from "@pinia/testing";
import { fn } from '@vitest/spy'
export default {
    title: 'ProjectSearch',
    component: ProjectSearch,
} as Meta<typeof ProjectSearch>;

const Template: StoryFn<typeof ProjectSearch> = (args) => ({
    components: { ProjectSearch },
    decorators: [
        (story:any) => {
            const pinia = createTestingPinia({
                createSpy: fn,
                stubActions: false, // Stub actions or let them execute
            });
            setActivePinia(pinia); // Activate Pinia for the mock context
            //const store = useProjectStore(); // Access the store

            return {
                components: { story },
                template: '<story />',
                pinia,
            };
        },
    ],

        setup() {
        return { args };
    },
    template: '<ProjectSearch  />',
});
export const Default = Template.bind({});