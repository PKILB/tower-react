import { Schema } from "mongoose";




export const CommentSchema = new Schema({
    eventId: { type: Schema.Types.ObjectId, ref: 'Event', required: true},
    creatorId: { type: Schema.Types.ObjectId, ref: 'Account', required: true},
    body: { type: String, required: true } 
}, { timestamps: true, toJSON: { virtuals: true }})

CommentSchema.virtual('creator', {
    ref: 'Account',
    localField: 'creatorId',
    foreignField: '_id',
    justOne: true
})