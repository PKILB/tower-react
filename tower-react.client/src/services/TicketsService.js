import { AppState } from "../AppState";
import { TicketProfile } from "../models/Ticket";
import { api } from "./AxiosService";



class TicketsService {
    async getTicketsByEventId(eventId) {
        AppState.tickets = []
        const res = await api.get('api/events/' + eventId + '/tickets')
        AppState.tickets = res.data.map(t => new TicketProfile(t))
    }


}

export const ticketsService = new TicketsService();