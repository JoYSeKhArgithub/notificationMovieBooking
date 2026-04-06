import nodemailer from 'nodemailer';

const mailer = (userId,password)=>{
    return nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: userId,
            pass: password,
        },
    })
}


export default mailer