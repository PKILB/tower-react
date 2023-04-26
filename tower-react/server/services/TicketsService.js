import { dbContext } from "../db/DbContext"
import { Forbidden } from "../utils/Errors"
import { eventsService } from "./EventsService"



class TicketsService {
    async getTicketsByEventId(eventId) {
        const tickets = await dbContext.Tickets.find({eventId})
        .populate('profile', 'name picture')
        return tickets
    }
    async getTicketsForEventsIAmAttending(accountId) {
        const tickets = await dbContext.Tickets.find({accountId})
        .populate({
            path: 'event',
            populate: {
                path: 'creator ticketCount',
                select: 'name picture'
            }
        })
        return tickets
    }
    async createEvent(ticketData) {
        const event = await eventsService.getEventById(ticketData.eventId)
        if (event.isCanceled) {
            throw new Forbidden('Event is canceled!')
        }
        const ticket = await dbContext.Tickets.create(ticketData)
        await ticket.populate('profile', 'name picture')
        await ticket.populate({
            path: 'event',
            populate: {
                path: 'creator ticketCount',
                select: 'name picture'
            }
        })
        event.capacity--
        await event.save()
        return ticket
    }

}

export const ticketsService = new TicketsService()