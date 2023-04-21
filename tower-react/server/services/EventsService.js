import { dbContext } from "../db/DbContext"



class EventsService {
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