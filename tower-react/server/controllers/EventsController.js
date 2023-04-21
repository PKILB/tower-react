import { Auth0Provider } from "@bcwdev/auth0provider";
import { eventsService } from "../services/EventsService";
import BaseController from "../utils/BaseController";



export class EventsController extends BaseController {

    constructor() {
        super('api/events')
        this.router
        .get('', this.getAllEvents)
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.createEvent)
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
}