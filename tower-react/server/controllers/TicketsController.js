import { ticketsService } from "../services/TicketsService";
import BaseController from "../utils/BaseController";
import { Auth0Provider } from "@bcwdev/auth0provider";



export class TicketsController extends BaseController {

    constructor() {
        super('api/tickets')
        this.router
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.createTicket)
        // .delete('', this.deleteTicket)
    }
    
    async createTicket(req, res, next) {
        try {
            const ticketData = req.body
            ticketData.accountId = req.userInfo.id
            const ticket = await ticketsService.createEvent(ticketData)
            return res.send(ticket)
        } catch (error) {
            next(error)
        }
    }

    // async deleteTicket(req, res, next) {
    //     try {
    //         const ticketId = req.
    //     } catch (error) {
    //         next(error)
    //     }
    // }
}