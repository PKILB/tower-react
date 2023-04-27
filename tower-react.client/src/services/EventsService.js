import { AppState } from "../AppState";
import { api } from "./AxiosService";
import { Event } from "../models/Event";




class EventsService {
    async getEvents() {
        const res = await api.get("api/events");
        const events = res.data.events.map((event) => new Event(event));
        AppState.events = events

    }

}

export const eventsService = new EventsService();