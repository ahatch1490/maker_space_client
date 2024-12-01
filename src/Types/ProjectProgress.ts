interface ProjectProgress {
    projectId: string; // The unique identifier of the project
    status: string;
    startDate: string;
    completedDate: string;
    progression: number;
}
export default ProjectProgress;