import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser';
import connectDB from './db/index.js';
import sendEmail from './services/email.service.js';
import NotificationRoute from './router/ticket.route.js'

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
})
.catch((err)=>{
    console.log("Failed to connect to DB", err);
})


