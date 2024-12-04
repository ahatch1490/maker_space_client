interface ProjectDetails {
    id: string; // The unique identifier of the project
    title: string; // The title of the project
    description: string; // A brief description of the project
    imageUrls: string[]; // An array of image URLs associated with the project
    tags: string[]; // An array of tags categorizing the project
    difficulty: number; // The difficulty level of the project
    startDate: string; // The date the project started
    endDate: string; // The date the project ended
    githubUrl: string; // The URL to the project's GitHub repository
    websiteUrl: string; // The URL to the project's website
    materials: string[]; // An array of materials used in the projec
    plansAvailable : boolean; // A boolean indicating if plans are available for the project
    dimensions: string; // The dimensions of the project
}

export default ProjectDetails;
