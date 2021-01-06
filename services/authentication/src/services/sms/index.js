function sendSMS(sms) {
    const { to, text } = sms 
    //TO-DO implement integration with SMS service
    console.log(`Fake send sms to ${to} - ${text}`)
}

module.exports = { sendSMS }