import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController";
import { commentsService } from "../services/CommentsService";



export class CommentsController extends BaseController {
    constructor() {
        super('api/comments')
        this.router
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.createComment)
        .delete('/:commentId', this.deleteComment)
    }
    async deleteComment(req, res, next) {
        try {
            const commentId = req.params.commentId
            const requestorId = req.userInfo.id
            const message = await commentsService.deleteComment(commentId, requestorId)
            return res.send(message)
        } catch (error) {
            next(error)
        }
    }
    async createComment(req, res, next) {
        try {
            const commentData = req.body
            commentData.creatorId = req.userInfo.id
            const comment = await commentsService.createComment(commentData)
            return res.send(comment)
        } catch (error) {
            next(error)
        }
    }

    
}