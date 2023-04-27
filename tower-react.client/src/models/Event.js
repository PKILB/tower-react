export class Event {
    constructor(data = {} ){
        this.id = data.id;
        this.name = data.name;
        this.description = data.description;
        this.coverImg = data.coverImg;
        this.location = data.location;
        this.capacity = data.capacity;
        this.startDate = new Date(data.startDate).toLocaleDateString();
        this.isCanceled = data.description;
        this.type = data.type;
        this.creator = data.creator;
    }
}