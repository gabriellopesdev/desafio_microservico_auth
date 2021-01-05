const nodemailer = require('nodemailer')

const mail = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_LOGIN,
      pass: process.env.EMAIL_PWD, 
    },
    tls: {
        rejectUnauthorized: false
    },
  })

async function sendMail(email) {
    const { to, subject, text } = email
    try {
        const result = await mail.sendMail({
            from: '"GPTW - Authenticate Service" <' + process.env.EMAIL_LOGIN +'>', 
            to,
            subject,
            text       
        })
        return result
        
    } catch (error) {
        return { 
            message: 'Failed on send mail to: ' + email.to
        }
    }

}

module.exports = { sendMail }