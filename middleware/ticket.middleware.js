import { errorResponseBody } from "../utils/responseBody.js"
import { STATUS_CODES } from "../utils/ticketUtils.js"

const verifyTicketNotificationCreateRequest = (req,res,next)=>{
    if(!req.body.subject){
        errorResponseBody.error = "Subject is required for response body"
        return res.status(STATUS_CODES.BAD_REQUEST).json(errorResponseBody)
    }
    if (!req.body.content){
        errorResponseBody.error = "No Content given for the email"
        return res.status(STATUS_CODES.BAD_REQUEST).json(errorResponseBody)
    }
    if (!req.body.recepientEmails || !Array.isArray(req.body.recepientEmails) || req.body.recepientEmails.length <= 0){
        errorResponseBody.error = "No recipent emails given"
        return res.status(STATUS_CODES.BAD_REQUEST).json(errorResponseBody)
    } 
    next();
}

export default verifyTicketNotificationCreateRequest