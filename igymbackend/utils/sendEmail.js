import { text } from "express";
import nodemailer from "nodemailer";

export const sendEmail = async(Options)=>{
   const transporte =nodemailer.createTransport({
    host:process.env.SMTP_HOST,
    port:process.env.SMTP_POST,
    service:process.env.SMTP_RERVICE,
    auth:{
        user:process.env.SMTP_MAIL,
        pass:process.env.SMTP_PASSWORD,
    },
   });
   
   const mailOption = {
    from:process.env.SMTP_MAIL,
    to:Options.email,
    subject:Options.subject,
    text:`${Options.message} \n\n Email of User Who Sent Thse Message:${Options.userEmail}`
   }

   await transporte.sendMail(mailOption);
}