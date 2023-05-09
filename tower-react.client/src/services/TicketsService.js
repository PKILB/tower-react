import { AppState } from "../AppState";
import { TicketEvent } from "../models/Event";
import { TicketProfile } from "../models/Ticket";
import { logger } from "../utils/Logger";
import { api } from "./AxiosService";



class TicketsService {
    async attendEvent(eventData) {
        const res = await api.post('api/tickets', eventData)
        logger.log(res.data, 'create ticket')
        AppState.tickets.push(new TicketProfile(res.data))
        AppState.myEvents.push(new TicketEvent(res.data))
    }
    async getTicketsByEventId(eventId) {
        AppState.tickets = []
        const res = await api.get(`api/events/${eventId}/tickets`)
        // const res = await api.get('account/tickets')
        console.log(res)
        AppState.tickets = res.data.map(t => new TicketProfile(t))
        console.log(AppState.tickets)
    }


}

export const ticketsService = new TicketsService();