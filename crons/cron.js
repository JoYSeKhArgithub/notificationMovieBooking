import corn from 'node-cron';
import TicketNotificationModel from '../models/ticketNotification.model.js';
import { ticket } from '../utils/ticketUtils.js';
import mailer from '../services/email.service.js';


const mailerCron = ()=>{
    const Mailer = mailer(process.env.EMAIL, process.env.EMAIL_PASSWORD)

    corn.schedule('*/2 * * * *', async () => {
        const notifications = await TicketNotificationModel.find({
            status: ticket.PENDING
        })

        notifications.forEach((notification) => {
            const mailData = {
                from: 'freeh3961@gmail.com',
                to: notification.recepientEmails,
                subject: notification.subject,
                text: notification.content
            };
            Mailer.sendMail(mailData, async (err, data) => {
                if (err) {
                    console.log(err);
                }
                else {
                    console.log(data);
                    const saveNotification = await TicketNotificationModel.findOne({
                        _id: notification._id
                    });
                    saveNotification.status = ticket.SUCCESS;
                    await saveNotification.save()
                }
            })
        })
    })
}


export default mailerCron;
