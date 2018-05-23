exports.handler = function(context, event, callback) {
	let twiml = new Twilio.twiml.VoiceResponse();
	// twiml.say("Hello World");
	var responseData = {};
	 console.log(event);
	switch(event.Called) {
	   
	    case "" :
	        responseData.CLIENT = "ATT";
	        responseData.LANGUAGE ="ENGLISH";
	        responseData.CLIENT_GREETING="https://sandstorm-giraffe-4481.twil.io/assets/BMI_GREETING.wav";
	        responseData.WORKFLOW_SID='WW8a614c7845926979068bb3015c5f8234'
	        break;
	    case "+16153986947" :
	        responseData.CLIENT = "VERIZON";
	        responseData.LANGUAGE ="SPANISH";
	        responseData.CLIENT_GREETING="https://sandstorm-giraffe-4481.twil.io/assets/VERIZON_GREETING.wav";
	        responseData.WORKFLOW_SID=''
	        break;
	    case "615" :
	        responseData.CLIENT = "T-Mobile";
	        responseData.LANGUAGE ="SPANISH";
	        responseData.CLIENT_GREETING="https://sandstorm-giraffe-4481.twil.io/assets/55053_T-Mobile_Greeting.wav";
	        responseData.WORKFLOW_SID=''
	        break;
	    case "default" :
	        responseData.CLIENT = "VERIZON";
	        responseData.LANGUAGE ="ENGLISH";
            responseData.CLIENT_GREETING="https://sandstorm-giraffe-4481.twil.io/assets/VERIZON_GREETING.wav";
	        responseData.WORKFLOW_SID=''
	        break;
	}
	console.log(responseData);
	callback(null, responseData);
};