import React from "react";
import { Event } from "../models/Event";
// import { TicketEvent } from "./models/Event";
import { TicketProfile } from "../models/Ticket";


/**@param {{ticket?:TicketProfile}} props */
// /**@param {{event:Event}} props */
export default function Ticket({ticket}) {
    // const ticket = new Ticket();

    return (
        <div className="row pt-4">
            <div className="col-11 m-auto">
                <h4>See who is attending</h4>
            </div>
            <div className="col-11 m-auto">
                <img src={ticket?.picture} alt="" />
            </div>
        </div>
    )
}