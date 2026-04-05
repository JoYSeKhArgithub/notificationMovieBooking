import express,{Router} from 'express'
import { createNotification, getAllNotification, getNotificationById } from '../controllers/ticket.controller.js';
import verifyTicketNotificationCreateRequest from '../middleware/ticket.middleware.js';

const router = Router();

router
    .route('/')
    .post(verifyTicketNotificationCreateRequest,
        createNotification)

router
    .route('/')
    .get(getAllNotification)

router
    .route('/:ticketId')
    .get(getNotificationById)

export default router