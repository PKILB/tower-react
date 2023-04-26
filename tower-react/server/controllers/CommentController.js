import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController";



export class CommentsController extends BaseController {
    constructor() {
        super('api/comments')
        this.router
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.createComment)
    }
    createComment(arg0, createComment) {
        throw new Error("Method not implemented.");
    }

    
}