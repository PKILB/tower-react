import { dbContext } from "../db/DbContext"
import { BadRequest, Forbidden } from "../utils/Errors"
import { eventsService } from "./EventsService"


class CommentsService {
    async createComment(commentData) {
        const event = await eventsService.getEventById(commentData.eventId)
        if(event.isCanceled) {
            throw new BadRequest('Event is Canceled')
        }
        const comment = await dbContext.Comments.create(commentData)
        await comment.populate('creator', 'name picture')
        return comment
    }

}

export const commentsService = new CommentsService()