import { Profile } from "./Account";
export class Attendee extends Profile {
    constructor(data) {
        super(data.profile)
        this.attendeeId = data.id
    }
}