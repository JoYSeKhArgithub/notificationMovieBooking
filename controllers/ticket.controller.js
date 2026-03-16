import { errorResponseBody, successResponseBody } from "../utils/responseBody.js"
import { STATUS_CODES } from "../utils/ticketUtils.js";
import notificationService from '../services/notification.service.js'
export const createNotification = async(req,res)=>{
    try {
        const response = await notificationService.createNoty(req.body);
        successResponseBody.data = response;
        successResponseBody.message = "Notification created successfully";
        return res.status(STATUS_CODES.ok).json(successResponseBody);
    } catch (error) {
        errorResponseBody.error= error;
        if(error.error){
            errorResponseBody.error = error.error;
            return res.status(error.code).json(errorResponseBody)
        }
        return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(errorResponseBody)
    }
}

