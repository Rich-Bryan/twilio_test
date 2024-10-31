require('dotenv').config()
const twilio = require('twilio')(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN)


// need to get toll free to send sms, already send requrest to twilio waiting for  it to get approve
async function sendMessage(){
    const message = await twilio.messages.create({
        body: "hello this is to test you on SMS on nodejs",
        from: "+18337660561",
        to: process.env.PHONE_NUMBER
    })
    console.log(message)
}

async function makeCall(){
    const call = await twilio.calls.create({
        // url: "",
        // method: `get`,
        twiml: `
            <Response>
                <Say>Hello, this is a test from calling</Say>
                <Pause length='3'></Pause>
                <Say>Thank you for waiting</Say>
            </Response>
        `,
        from: "+18775373228",
        to: process.env.PHONE_NUMBER
    })
    console.log(call)
}

sendMessage()
// makeCall()