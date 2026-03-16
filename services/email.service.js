import nodemailer from 'nodemailer';

const sendEmail = (userId,password)=>{
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: userId,
            pass: password,
        },
    })


    

    transporter.sendMail({
        from: "freeh3961@gmail.com",
        to: "bjoysekhar@gmail.com",
        subject: 'Test email from nodemailer',
        text: "Hei this is test email"
    })

}


export default sendEmail