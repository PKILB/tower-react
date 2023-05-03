import  PropTypes  from "prop-types";
import React from "react";
import "./styles/EventDetails.scss";

// /**@param {{event:Event}} */
export default function EventDetails({event}) {
    return (
        <div className="row py-5">
                <div className="col-4 d-flex justify-content-center">
                    <img src={event.coverImg} alt="" className="img-fluid image-size"/>
                </div>
                <div className="col-8">
                    
                    <h2 className="pb-4">{event.name}</h2>
                    <h2>{event.location}</h2>
                    <h4>{event.description}</h4>
                </div>
            </div>
    )
}

EventDetails.propTypes = {
    event: PropTypes.object.isRequired
}