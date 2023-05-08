import { AppState } from "../AppState";
import { TicketProfile } from "../models/Ticket";
import { api } from "./AxiosService";



class TicketsService {
    async attendEvent(eventData) {
        const res = await api.post('api/tickets', eventData)
        AppState.tickets.push(new TicketProfile(res.data))
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