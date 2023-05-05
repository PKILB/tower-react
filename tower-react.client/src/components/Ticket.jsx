import React from "react";
import { Event } from "../models/Event";
// import { TicketEvent } from "./models/Event";
import { TicketProfile } from "../models/Ticket";


/**@param {{ticket?:TicketProfile}} props */
export default function Ticket({ticket}) {
    // const ticket = new Ticket();

    return (
            <div className="col-11 m-auto">
                <img src={ticket?.picture} alt="" />
            </div>
    )
}