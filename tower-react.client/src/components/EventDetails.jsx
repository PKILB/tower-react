import  PropTypes  from "prop-types";
import React from "react";
import "./styles/EventDetails.scss";
import { AppState } from "../AppState";
import { ticketsService } from "../services/TicketsService";
import Pop from "../utils/Pop";
import { useParams } from "react-router-dom";
// import { Event } from "../models/Event";

// /**@param {{event:Event}} */
export default function EventDetails({event}) {

    // const { eventId } = useParams();
    async function attendEvent() {
        try {
            if(AppState.account?.id) {
                await ticketsService.attendEvent(AppState.activeEvent.id);
                AppState.activeEvent.capacity--;
            }
        } catch (error) {
            Pop.error(error.message)
        }
    }

    return (
        <div className="row py-5 pe-5">
                <div className="col-4 d-flex justify-content-center">
                    <img src={event.coverImg} alt="" className="img-fluid image-size"/>
                </div>
                <div className="col-8 d-flex flex-column justify-column-between">
                    <div className="row pb-4">
                        <div className="col-8">
                    <h2 className="pb-4">{event.name}</h2>
                        </div>
                        <div className="col-4 d-flex justify-content-end">
                            <h2>{event.startDate}</h2>
                        </div>
                    <h2>{event.location}</h2>
                    </div>
                    <div className="row">
                    <p>{event.description}</p>
                    </div>
                    <div className="row">
                        <div className="col-8">
                        <h3>{event.capacity} spots left</h3>
                        </div>
                        <div className="col-4 d-flex justify-content-end">
                        <button onClick={attendEvent} className="btn btn-warning d-flex justify-content-end">Attend</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

EventDetails.propTypes = {
    event: PropTypes.object.isRequired
}