import {IProjectService} from "../Types/IProjectService.ts";
import Project from "../Types/Project.ts";
import data from "../data/data.json" assert {type: 'json'};

export class ClientOnlyProfileService implements IProjectService{
    public fetchProjectSearch(search: string): Promise<Project[]> {
       console.log(search);
        const filteredProjects = (data["projectDetails"] as Project[]).filter((project: Project) => {
            console.log( project.title.toLowerCase().includes(search.toLowerCase()));
            console.log(project.tags.filter(tag => tag.toLowerCase().includes(search.toLowerCase())));

            return project.title.toLowerCase().includes(search.toLowerCase()) ||
            project.tags.filter(tag => tag.toLowerCase().includes(search.toLowerCase())).length > 0 //||
            // project.description.toLowerCase().includes(search.toLowerCase())
        });



        if (filteredProjects) {
            return Promise.resolve(filteredProjects);
        }
        return Promise.resolve([]);
    }
    public fetchProjectDetails(id: string): Promise<Project>  {
        let value = data["projectDetails"].find((project: Project) => project.id === id);
        return Promise.resolve(value as Project);
    }
}