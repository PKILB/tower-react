import { dbContext } from "../db/DbContext"
import { BadRequest } from "../utils/Errors"



class EventsService {
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