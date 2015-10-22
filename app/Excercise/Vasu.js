//"use strict";

(function(doc) {
	
function setMessage()
	{
    var msgText = doc.getElementById("InputMsg").value;
		greetingMessage.setGreetingMsg(msgText);
   } 
	
function DisplayMsg()
	{
		var msgText = doc.getElementById("DisplayName").value;
		console.log(msgText+" : "+greetingMessage.getGreetingMsg());
		
	}
		
var greetingMessage = function () {
	var msgTxt =" Why do you expect to be greeted, when you dont greet!!! ";
	return {
		
		getGreetingMsg : function () {//Get what you set 
			return msgTxt;
			},
		setGreetingMsg : function (newmsgTxt) {//used closure here to set the Greeting message
			msgTxt = newmsgTxt;
			console.log ("Message Set : "+msgTxt);
			}
		};
	}();
	doc.getElementById("button_setMsg").addEventListener("click", setMessage);
	doc.getElementById("button_displayMsg").addEventListener("click", DisplayMsg);
}(window.document));
