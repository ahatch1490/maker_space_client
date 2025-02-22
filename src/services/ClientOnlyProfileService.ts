import {IProjectService} from "../Types/IProjectService.ts";
import Project from "../Types/Project.ts";
import data from "../data/data.json" assert {type: 'json'};

export class ClientOnlyProfileService implements IProjectService{
    public fetchProjectSearch(search: string): Promise<Project[]> {
        return  data;
    }
    public fetchProjectDetails(id: string): Promise<Project>  {
        let value = data["projectDetails"].find((project: Project) => project.id === id);
        return value as Project;
    }
}