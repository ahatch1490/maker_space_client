import Project from "./Project.ts";

export interface IProjectService {
     fetchProjectSearch(search: string): Promise<Project[]>;
     fetchProjectDetails(id: string): Promise<Project>;
}