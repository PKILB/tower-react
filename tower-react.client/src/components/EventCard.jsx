import { Event } from "../models/Event";
import React from "react";
import PropTypes from "prop-types";
import './styles/EventCard.scss';


/**@param {{event:Event}} props */
export default function EventCard({event}) {

    return (
        <div className="card event-card" >
            <img className="img-fluid" src={event.coverImg} alt=""/>
        </div>
    )
}

EventCard.propTypes = {
    event: PropTypes.instanceOf(Event)
}