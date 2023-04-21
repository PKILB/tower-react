import { Auth0Provider } from "@bcwdev/auth0provider";
import { eventsService } from "../services/EventsService";
import BaseController from "../utils/BaseController";



export class EventsController extends BaseController {

    constructor() {
        super('api/events')
        this.router
        .get('', this.getAllEvents)
        .get('/:eventId', this.getEventById)
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.createEvent)
        .put('/:eventId', this.editEvent)
        .delete('/:eventId', this.cancelEvent)
    }
    async cancelEvent(req, res, next) {
        try {
            const eventId = req.params.eventId
            const userId = req.userInfo.id
            const event = await eventsService.cancelEvent(eventId, userId)
            return res.send(event)
        } catch (error) {
            next(error)
        }
    }
    async getEventById(req, res, next) {
        try {
            const eventId = req.params.eventId
            const event = await eventsService.getEventById(eventId)
            return res.send(event)
        } catch (error) {
            next(error)
        }
    }


    async getAllEvents(req, res, next) {
        try {
            const events = await eventsService.getAllEvents()
            res.send(events)
        } catch (error) {
            next(error)
        }
    }

    async createEvent(req, res, next) {
        try {
            const eventData = req.body
            eventData.creatorId = req.userInfo.id
            const event = await eventsService.createEvent(eventData)
            return res.send(event)
        } catch (error) {
            next(error)
        }
    }

    async editEvent(req, res, next) {
        try {
            const eventId = req.params.eventId
            const updateData = req.body
            const userId = req.userInfo.id
            const updatedEvent = await eventsService.editEvent(updateData, eventId, userId)
            return res.send(updatedEvent)
        } catch (error) {
            next(error)
        }
    }


}