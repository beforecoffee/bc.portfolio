var bodyElm = document.body;
	bodyElm = addEventListener("load",loadFunction);
	
var theForm = document.forms[0];
	theForm.addEventListener("v",function(evt) {		
		var finalReturn = formHandler(evt);
		if (finalReturn === false) {
			if (!evt.preventDefault) {
				evt.preventDefault = function() {
   					window.event.returnValue = false;
				};
			} else {
				evt.preventDefault();
			}
		}
		return finalReturn;
	});

}  // end function loadFunction

function formHandler(evt) {
	console.log(evt);
	
	function circum() {
	
	var radius = document.getElementById("textInput");
	var circumference = 2 * Math.PI * radius;
  
	radius.innerHTML = ("The circumference is "+circumference+".")
	}
}