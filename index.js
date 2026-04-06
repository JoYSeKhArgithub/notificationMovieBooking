import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import connectDB from './db/index.js';
import NotificationRoute from './router/ticket.route.js';
import mailerCron from './crons/cron.js';

dotenv.config()
const port = process.env.PORT;

const app = express();


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use('/notiService/api/v1/notification',NotificationRoute)

connectDB()
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
        // sendEmail(process.env.EMAIL, process.env.EMAIL_PASSWORD)
    })
    mailerCron()
})
.catch((err)=>{
    console.log("Failed to connect to DB", err);
})


