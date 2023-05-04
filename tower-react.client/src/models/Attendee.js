import { Profile } from "./Account";
export class AttendingProfile extends Profile {
    constructor(data) {
        super(data.profile)
        this.attendeeId = data.id
    }
}