import AuthService from "./authService";
import ContentService from "./contentService";
import TagService from "./tagService";

const authService = new AuthService();
const contentService = new ContentService();
const tagService = new TagService();

export {
    authService,
    contentService,
    tagService
}