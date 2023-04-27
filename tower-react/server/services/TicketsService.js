import { dbContext } from "../db/DbContext"
import { BadRequest, Forbidden } from "../utils/Errors"
import { eventsService } from "./EventsService"



class TicketsService {
    async deleteTicket(ticketId, requestorId) {
        const ticket = await dbContext.Tickets.findById(ticketId)
        //@ts-ignore
        const event = await eventsService.getEventById(ticket.eventId)
        if(!ticket) {
            throw new BadRequest('Invalid Id')
        }
        if(ticket.accountId.toString() !== requestorId) {
            throw new Forbidden("I'm Onto You")
        }

        await ticket.remove()
        event.capacity++
        await event.save()
        return 'You are no longer attending this event!'
    }
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
    async createTicket(ticketData) {
        const event = await eventsService.getEventById(ticketData.eventId)
        if (event.isCanceled) {
            throw new Forbidden('Event is canceled!')
        }
        if (event.capacity == 0) {
            throw new BadRequest('This Event Is Full!')
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