import { Meta, StoryFn } from '@storybook/vue3';
import OtherProjectsByMe from "./OtherProjectsByMe.vue";

export default {
    title: 'OtherProjectsByMe',
    component: OtherProjectsByMe,
} as Meta<typeof OtherProjectsByMe>;

const Template: StoryFn<typeof OtherProjectsByMe> = (args) => ({
    components: { OtherProjectsByMe },
    setup() {
        return { args };
    },
    template: '<OtherProjectsByMe v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = { otherProjects: [{
    "id": "12345",
    "title": "Oak Chair",
    "image_url": "../../../public/widget.webp",
    },
    {"id": "123456",
    "title": "Oak Chair",
    "image_url": "../../../public/widget.webp",
    },
    {"id": "1234567",
    "title": "Oak Chair",
    "image_url": "../../../public/widget.webp"
    }
    ]};