//			  Powerd By 			
//		    ADiL HADDAOUI				
//		  www.adilhaddaoui.com			   
//		  h.adildev@gmail.com 			


var twitter = require("ntwitter");

var t = new twitter({
    consumer_key: '', // Your API key
    consumer_secret: '', // Your API Secret
    access_token_key: '', // Your Access Token Key
    access_token_secret: '' // You access Token Secret
});

var i = 0;

t.stream(
	'statuses/filter',
	{track : ["programmer","developer","nodejs"]}, //Write here the keywords you want to track ...
	function(data){
		data.on("data",function(tweets){
			i++;
			console.log("Tweet ",i," : ",tweets.text);
		});
	}
);