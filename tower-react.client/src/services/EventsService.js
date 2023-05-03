import { AppState } from "../AppState";
import { api } from "./AxiosService";
import { Event } from "../models/Event";




class EventsService {
    async getEventById(eventId) {
        // AppState.activeEvent = null 
        const res = await api.get('api/events/' + eventId);
        AppState.activeEvent = new Event(res.data);
    }
    async getEvents() {
        AppState.events = []
        const res = await api.get("api/events");
        const events = res.data.map((event) => new Event(event));
        AppState.events = events

    }

}

export const eventsService = new EventsService();