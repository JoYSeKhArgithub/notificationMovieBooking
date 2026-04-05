import { errorResponseBody, successResponseBody } from "../utils/responseBody.js"
import { STATUS_CODES } from "../utils/ticketUtils.js";
import notificationService from '../services/notification.service.js'

export const createNotification = async(req,res)=>{
    try {
        const response = await notificationService.createNoty(req.body);
        successResponseBody.data = response;
        successResponseBody.message = "Notification created successfully";
        return res.status(STATUS_CODES.CREATED).json(successResponseBody);
    } catch (error) {
        errorResponseBody.error= error;
        if(error.error){
            errorResponseBody.error = error.error;
            return res.status(error.code).json(errorResponseBody)
        }
        return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(errorResponseBody)
    }
}

export const getAllNotification = async (req,res)=>{
    try {
       const data = await notificationService.getAllNotification();
       successResponseBody.data = data;
       successResponseBody.message = "get all notification";
       return res.status(STATUS_CODES.ok).json(successResponseBody)
    } catch (error) {
        console.log('the error is',error)
        errorResponseBody.error = error;
        return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(errorResponseBody)
    }
}

export const getNotificationById = async(req,res)=>{
    try {
        const data = await notificationService.getNotificationById(req.params.ticketId);
        successResponseBody.data = data;
        successResponseBody.message = "Notification data get by id successfully";
        return res.status(STATUS_CODES.ok).json(successResponseBody);
    } catch (error) {
        if(error.error){
            errorResponseBody = error.error
            return res.status(error.code).json(errorResponseBody)
        }
        errorResponseBody.error = error;
        return res.status(STATUS_CODES.INTERNAL_SERVER_ERROR).json(errorResponseBody)
    }
}


