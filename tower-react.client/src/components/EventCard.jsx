import { Event } from "../models/Event";
import React from "react";
import PropTypes from "prop-types";
import './styles/EventCard.scss';


/**@param {{event:Event}} props */
export default function EventCard({event}) {

    return (
        <div className="card event-card my-3 bg-dark elevation-5" >
            <img className="img-fluid" src={event.coverImg} alt=""/>
            <div className="card-img-overlay row">
                <div>
                    <h5>{event.name}</h5>
                    <h6>{event.location}</h6>
                    <p>{event.capacity} spots left</p>
                </div>
            </div>
        </div>
    )
}

EventCard.propTypes = {
    event: PropTypes.instanceOf(Event)
}