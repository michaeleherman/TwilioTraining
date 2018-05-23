exports.handler = function(context, event, callback) {
	let twiml = new Twilio.twiml.VoiceResponse();
	var request = require('request');
	 var  lookupUrl = 'https://sandstorm-giraffe-4481.twil.io/dnislookup';

request.post({url: lookupUrl, form: {Called:'+16153986947'}}, function(err,httpResponse,body){
   var  response = JSON.parse(body);
     console.log('test test'+response.CLIENT_GREETING);
     twiml.play(response.CLIENT_GREETING);
     twiml.redirect({"method":"GET"},'https://sandstorm-giraffe-4481.twil.io/Team2.1')
     
 	callback(null, twiml);
});
};

