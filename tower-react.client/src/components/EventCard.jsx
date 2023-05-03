import { Event } from "../models/Event";
import React from "react";
import PropTypes from "prop-types";
import './styles/EventCard.scss';
import { Link } from "react-router-dom";


/**@param {{event:Event}} props */
export default function EventCard({event}) {

    return (
            <Link to={`event/${event.id}`}>
        <div className="card event-card my-3 bg-dark elevation-5 border-color" >
            <img className="img-fluid" src={event.coverImg} alt=""/>
            <div className="card-img-overlay event-card-content row d-flex align-content-end">
                <div className="">
                    <h5>{event.name}</h5>
                    <h6 className="text-grey">{event.location}</h6>
                    <p className="d-flex justify-content-end text-grey">{event.capacity} spots left</p>
                </div>
            </div>
        </div>
            </Link>
    )
}

EventCard.propTypes = {
    event: PropTypes.object.isRequired
}