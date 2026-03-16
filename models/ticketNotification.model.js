import mongoose,{Schema} from "mongoose";
import { ticket } from "../utils/ticketUtils.js";

const ticketNotificationSchema = new Schema({
    subject:{
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    recepientEmails:{
        type: [String],
        required: true
    },
    status: {
        type: String,
        enum:{
            values: [ticket.SUCCESS,ticket.FAILED,ticket.PENDING],
            message: "Invalid ticket status"
        },
        required: true
    }
},{timestamps: true})

const TicketNotificationModel = mongoose.model('TicketNotification',ticketNotificationSchema)
export default TicketNotificationModel