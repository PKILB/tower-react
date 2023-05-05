import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { AppState } from "../AppState";
import { eventsService } from "../services/EventsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { useParams } from "react-router-dom";
import EventDetails from "../components/EventDetails.jsx";
import "./Styles/EventDetailsPage.scss";
import TicketEvent from "../components/Ticket.jsx";
import { ticketsService } from "../services/TicketsService";

function eventDetailsPage() {
    // let event = AppState.event;
    const { eventId } = useParams();
    const event = AppState.activeEvent;
    
    async function getEventById() {
        try {
            await eventsService.getEventById(eventId);
        } catch (error) {
            logger.log(error)
            Pop.error(error.message)
        }
    }

    async function getTicketsByEventId() {
        try {
            await ticketsService.getTicketsByEventId(eventId)
        } catch (error) {
            Pop.error(error.message)
        }
    }

    let tickets = (AppState.tickets.map(t => {
        return (
            <div className="col-11 m-auto" key={t.id}>
                <TicketEvent />
            </div>
        )
    }))
    useEffect(() => {
        getEventById(),
        getTicketsByEventId()
    }, [eventId]);

    return(
        <section>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-11 m-auto">
                        <div className="bg-image" style={{ backgroundImage: `url(${event.coverImg})`, backgroundSize: 'cover' }}>
                <EventDetails event={event} />
                        </div>
                    </div>
                {tickets}
                </div>
            </div>
        </section>
    );
}

export default observer(eventDetailsPage);