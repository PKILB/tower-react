import { Profile } from "./Account";
export class TicketProfile extends Profile {
    constructor(data) {
        super(data.profile)
        this.ticketId = data.id
    }
}