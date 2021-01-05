function sendSMS(sms) {
    const { to, message } = sms 
    //TO-DO implement integration with SMS service
    console.log(`Fake send sms to ${to}`)
}

module.exports = { sendSMS }