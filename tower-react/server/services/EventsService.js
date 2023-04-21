import { dbContext } from "../db/DbContext"
import { BadRequest, Forbidden } from "../utils/Errors"



class EventsService {
    async cancelEvent(eventId, userId) {
        const event = await this.getEventById(eventId)
        if (event.creatorId.toString() != userId) {
            throw new Forbidden('You are not allowed to perform this action.')
        }
        event.isCanceled = true
        await event.save()
        return event
    }
    async editEvent(updateData, eventId, userId) {
        const event = await this.getEventById(eventId)
        if (event.isCanceled == true) {
            throw new BadRequest('This Event is Cancelled!')
        }
        if (event.creatorId.toString() != userId) {
            throw new Forbidden('You Are Not The Event Owner')
        }
        if (!event) {
            throw new BadRequest('Event Not Found')
        }
            event.name = updateData.name || event.name
            event.description = updateData.description || event.description
        await event.save()
        return event
    }
    async getEventById(eventId) {
        const event = await dbContext.Events.findById(eventId).populate('creator', 'name picture')

        if (!event) {
            throw new BadRequest('Invalid Event Id')
        }
        return event
    }
    async createEvent(eventData) {
        const event = await dbContext.Events.create(eventData)
        await event.populate('creator ticketCount', 'name picture')
        return event
    }
    async getAllEvents() {
        const events = await dbContext.Events.find()
        .populate('creator', 'name picture')
        return events
    }

}

export const eventsService = new EventsService()