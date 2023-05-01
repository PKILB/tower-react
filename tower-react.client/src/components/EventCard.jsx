import { Event } from "../models/Event";
import React from "react";
import PropTypes from "prop-types";
import './styles/EventCard.scss';


/**@param {{event:Event}} props */
export default function EventCard({event}) {

    return (
        <div className="card event-card my-3 bg-dark elevation-5" >
            <img className="img-fluid" src={event.coverImg} alt=""/>
        </div>
    )
}

EventCard.propTypes = {
    event: PropTypes.instanceOf(Event)
}