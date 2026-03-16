import express,{Router} from 'express'
import { createNotification } from '../controllers/ticket.controller.js';
import verifyTicketNotificationCreateRequest from '../middleware/ticket.middleware.js';

const router = Router();
router
.route('/')
.post(verifyTicketNotificationCreateRequest,
    createNotification)

export default router