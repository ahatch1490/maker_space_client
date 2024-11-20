
interface Project {
    id: string; // The unique identifier of the project
    title: string; // The title of the project
    description: string; // A brief description of the project
    imageUrls: string[]; // An array of image URLs associated with the project
    tags: string[]; // An array of tags categorizing the project
}

export default Project;