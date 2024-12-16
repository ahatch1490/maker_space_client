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



let str = "Creating a dining room table from maple and cherry wood is a blend of craftsmanship, precision, and the natural beauty of contrasting wood grains. Here’s a step-by-step description of the process:<br/>" +
    "<br/>" +
    "1. Concept and Design<br/>" +
    "<br/>" +
    "The process begins with envisioning the table’s design:<br/>" +
    "<br/>" +
    "\t•\tStyle: Decide on a modern, rustic, or traditional aesthetic.<br/>" +
    "\t•\tDimensions: Determine the table’s size based on seating capacity and the dining room layout (e.g., 6-8 people).<br/>" +
    "\t•\tMaterials: Use maple for its light tone and smooth grain, and cherry for its rich reddish-brown hue that darkens beautifully over time.<br/>" +
    "<br/>" +
    "The design often includes:<br/>" +
    "<br/>" +
    "\t•\tA maple top for a clean, bright appearance.<br/>" +
    "\t•\tCherry legs or accents, providing a striking contrast.<br/>" +
    "<br/>" +
    "2. Selecting and Preparing the Wood<br/>" +
    "<br/>" +
    "High-quality wood is selected for durability and aesthetics:<br/>" +
    "<br/>" +
    "\t•\tMaple: Hard maple is chosen for its strength and fine grain.<br/>" +
    "\t•\tCherry: Boards with uniform color and minimal knots are ideal.<br/>" +
    "<br/>" +
    "The wood is:<br/>" +
    "<br/>" +
    "\t•\tInspected for imperfections.<br/>" +
    "\t•\tCut to rough dimensions.<br/>" +
    "\t•\tDried or acclimated to the workshop environment to prevent warping.<br/>" +
    "<br/>" +
    "3. Cutting and Shaping<br/>" +
    "<br/>" +
    "Using precise measurements, the boards are cut and shaped:<br/>" +
    "<br/>" +
    "\t•\tTabletop: Maple boards are jointed and glued edge-to-edge to form a smooth, seamless surface.<br/>" +
    "\t•\tLegs and Frame: Cherry is cut for the legs and apron. The legs may be tapered, turned, or square depending on the design.<br/>" +
    "<br/>" +
    "4. Joinery<br/>" +
    "<br/>" +
    "Strong, durable joints are crafted to hold the table together:<br/>" +
    "<br/>" +
    "\t•\tMortise and Tenon: Used to attach the legs to the apron for a clean, sturdy connection.<br/>" +
    "\t•\tDowels or Biscuits: Reinforce the tabletop to keep it flat and aligned.<br/>" +
    "\t•\tFloating Tenon: May be used for decorative inlays between maple and cherry sections.<br/>" +
    "<br/>" +
    "5. Sanding and Detailing<br/>" +
    "<br/>" +
    "Each piece is sanded thoroughly to ensure a smooth finish:<br/>" +
    "<br/>" +
    "\t•\tStart with coarse-grit sandpaper and progress to fine-grit for a polished surface.<br/>" +
    "\t•\tEdges are rounded or chamfered for a comfortable feel.<br/>" +
    "<br/>" +
    "Decorative details, such as a cherry inlay on the maple top or carved accents on the legs, add elegance.<br/>" +
    "<br/>" +
    "6. Assembly<br/>" +
    "<br/>" +
    "The table is assembled carefully:<br/>" +
    "<br/>" +
    "\t•\tLegs and aprons are attached using clamps and wood glue for a secure fit.<br/>" +
    "\t•\tThe tabletop is mounted to the frame using hidden fasteners to allow for wood expansion and contraction.<br/>" +
    "<br/>" +
    "7. Finishing<br/>" +
    "<br/>" +
    "A protective finish enhances the natural beauty of the wood:" +
    "<br/>" +
    "\t•\tStain or Natural Finish: Maple may be left natural or lightly stained, while cherry is usually left unstained to highlight its rich color.<br/>" +
    "\t•\tTopcoat: Several layers of polyurethane, lacquer, or oil-based finishes are applied for durability and a soft sheen.<br/>" +
    "\t•\tBuffing between coats ensures a smooth, professional finish.<br/>" +
    "<br/>" +
    "8. Final Touches<br/>" +
    "<br/>" +
    "\t•\tFelt pads or rubber feet are added to protect flooring.<br/>" +
    "\t•\tThe table is inspected for imperfections, ensuring every joint is tight, and the surface is flawless.<br/>" +
    "<br/>" +
    "Result<br/>" +
    "<br/>" +
    "<p>The completed table is a timeless piece, showcasing the light, creamy tones of maple and the warm, vibrant hues of cherry. The contrasting woods complement each other, creating a functional yet elegant centerpiece for the dining room. It’s a testament to fine craftsmanship and the beauty of natural materials.</p>"

export const Default = Template.bind({});
Default.args = { projectDetails: {
        "id": "12345",
        "title": "Cherry Table Top",
        "description": str,
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
        "materials": ["maple", "brass", "cherry","maple", "brass", "cherry", "maple", "brass", "cherry","maple", "brass", "cherry"],
        "dimensions": "24\" x 48\"",
    } as ProjectDetails};