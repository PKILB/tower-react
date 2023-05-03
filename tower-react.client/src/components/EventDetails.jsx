import  PropTypes  from "prop-types";
import React from "react";
import "./styles/EventDetails.scss";

// /**@param {{event:Event}} */
export default function EventDetails({event}) {
    return (
        <div className="row py-5 pe-5">
                <div className="col-4 d-flex justify-content-center">
                    <img src={event.coverImg} alt="" className="img-fluid image-size"/>
                </div>
                <div className="col-8">
                    <div className="row pb-4">
                        <div className="col-8">
                    <h2 className="pb-4">{event.name}</h2>
                        </div>
                        <div className="col-4 d-flex justify-content-end">
                            <h2>{event.startDate}</h2>
                        </div>
                    <h2>{event.location}</h2>
                    </div>

                    <p>{event.description}</p>
                    <div className="row">
                        <div className="col-8 d-flex align-content-between">
                        <h3>{event.capacity} spots left</h3>
                        </div>
                    </div>
                </div>
            </div>
    )
}

EventDetails.propTypes = {
    event: PropTypes.object.isRequired
}