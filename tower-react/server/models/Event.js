import { Schema } from "mongoose";



export const EventSchema = new Schema({
    name: { type: String, required: true},
    description: { type: String, required: true, minLength: 10, maxLength: 1000},
    coverImg:  { type: String, required: true, maxLength: 5000},
    location: { type: String, required: true, maxLength: 100},
    capacity: { type: Number, required: true, min: 0, max: 20000},
    startDate: { type: Date, required: true},
    isCanceled: { type: Boolean, required: true, default: false},
    type: { type: String, required: true, minLength: 3, maxLength: 500, enum: ['concert', 'convention', 'sport', 'digital']},

    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true}
}, { timestamps: true, toJSON: { virtuals: true }})

EventSchema.virtual('creator', {
    ref: 'Account',
    localField: 'creatorId',
    foreignField: '_id',
    justOne: true
})

EventSchema.virtual('ticketCount', {
    localField: '_id',
    foreignField: 'eventId',
    count: true,
    ref: 'Ticket'
})