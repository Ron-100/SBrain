import { TagResponse } from "../model/tagModel";
import { repositoryWrapper } from "../repository/repositoryWrapper";

class TagService {
    constructor() {
        // this.userData = userData;
    }

    async getAllTags(): Promise<TagResponse[]> {
        const tags = await repositoryWrapper.tagRepository.findAll();
        return tags;
    }

}
export default TagService;