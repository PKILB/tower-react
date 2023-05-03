import React, { useEffect } from "react";
import { observer } from "mobx-react";
import { AppState } from "../AppState";
import { eventsService } from "../services/EventsService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { useParams } from "react-router-dom";
import EventDetails from "../components/EventDetails";

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
    useEffect(() => {
        getEventById()
    }, [eventId]);

    return(
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                <EventDetails event={event} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default observer(eventDetailsPage);