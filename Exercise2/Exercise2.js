/**
 *  Simple Menu Template
 * 
 *  This Function builds a simple IVR menu. Learn more about <Gather> at:
 *  https://www.twilio.com/docs/api/twiml/gather
    */
exports.handler = function (context, event, callback) {
    let twiml = new Twilio.twiml.VoiceResponse()

    var request = require("request");
    const gather = twiml.gather({})

    if (event.Digits) {
        // dial.number( event.Digits); 
        var digits = event.Digits;
        var callID = event.CallSid;
        var url = 'https://4sf58y0og6.execute-api.us-east-1.amazonaws.com/dev/mdnlookup?MDN=' + digits + '&CallId=' + callID;

        request(url, function (response, error, body) {

            if ("error") {
                console.log(error)
                twiml.say('we couldnt find an account please hold for an agent ')
                twiml.dial('615-473-7793')
                callback(null, twiml)

            } else {
                var httpResult = JSON.parse(body);
                twiml.say('we found your Phone number ' + httpResult.FIRST_NAME)
                twiml.say('Thank you will transfer you to an aggent')
                twiml.dial('615-473-7793')

                callback(null, twiml)
            }
        });
    } else {
        console.log('test twiml');
        gather.play('https://sandstorm-giraffe-4481.twil.io/assets/HZNSPRINT_GREETING.wav');
        gather.play('https://sandstorm-giraffe-4481.twil.io/assets/HZNSPRINT_PCC.wav');
        gather.say('Please Enter Your Phone Number');
        callback(null, twiml)
    }
}