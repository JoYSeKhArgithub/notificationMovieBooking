import TicketNotificationModel from "../models/ticketNotification.model.js"
import { STATUS_CODES } from "../utils/ticketUtils.js";

const createNoty = async(data)=>{
    try {
        const ticket = await TicketNotificationModel.create(data);
        return ticket;
    } catch (error) {
        if (error.name === 'ValidationError') {
            let err = {};
            Object.keys(error.errors).forEach((key) => {
                err[key] = error.errors[key].message;
            })
            throw { error: err, code: STATUS_CODES.UNPROCESSABLE_ENTITY };
        }
        throw error
    }
}

export default { createNoty }