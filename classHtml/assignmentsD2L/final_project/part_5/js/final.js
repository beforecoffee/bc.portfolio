 
 
 /*   // Create input element for testing
    var input = document.createElement('input');
     
    // Create the supports object
    var supports = {};
     
    supports.autofocus   = 'autofocus' in input;
    supports.required    = 'required' in input;
    supports.placeholder = 'placeholder' in input;
     
	// Fallback for autofocus attribute
    if(!supports.autofocus) {
		document.getElementById('submit').focus();
         
    }
     
    // Fallback for required attribute
    if(!supports.required) {
         
    }
 
    // Fallback for placeholder attribute
    if(!supports.placeholder) {
         
    }
	
	// Change text inside send button on submit
	var submit = document.getElementById('submit');
	if(submit) {
        submit.onclick = function () {
                this.innerHTML = '...Submitting';
        }
		
//	var reset = document.getElementById('reset');
	
	var bodyElm = document.body;
	bodyElm = addEventListener("load",loadFunction);
	
	function loadFunction() {
	
	var theForm = document.forms[0];
	theForm.addEventListener("submit",function(evt) {		
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

function loadFunction() {
	
	var theForm = document.forms[0];
	theForm.addEventListener("reset",function(evt) {		
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
}
 */
     



/*
document.getElementById("date_time").innerHTML = formatAMPM();

function formatAMPM() {
var d = new Date(),
    minutes = d.getMinutes().toString().length == 1 ? '0'+d.getMinutes() : d.getMinutes(),
    hours = d.getHours().toString().length == 1 ? '0'+d.getHours() : d.getHours(),
    ampm = d.getHours() >= 12 ? 'pm' : 'am',
    months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
return days[d.getDay()]+' '+months[d.getMonth()]+' '+d.getDate()+' '+d.getFullYear()+' '+hours+':'+minutes+ampm;
}
fuction formatTIMEDATE() {
	var current_date = new Date ( );

	var month_names = new Array ( );
	month_names[month_names.length] = "January";	
	month_names[month_names.length] = "February";
	month_names[month_names.length] = "March";
	month_names[month_names.length] = "April";
	month_names[month_names.length] = "May";
	month_names[month_names.length] = "June";
	month_names[month_names.length] = "July";
	month_names[month_names.length] = "August";
	month_names[month_names.length] = "September";
	month_names[month_names.length] = "October";
	month_names[month_names.length] = "November";
	month_names[month_names.length] = "December";

	var day_names = new Array ( );
	day_names[day_names.length] = "Sunday";	
	day_names[day_names.length] = "Monday";
	day_names[day_names.length] = "Tuesday";
	day_names[day_names.length] = "Wednesday";
	day_names[day_names.length] = "Thursday";
	day_names[day_names.length] = "Friday";
	day_names[day_names.length] = "Saturday";
	
	return ( day_names[current_date.getDay()] + ( ", " )
				+ ( month_names[current_date.getMonth()] ) 
				+ ( " " + current_date.getDate() ) + ( " " ) 
				+ ( " " + current_date.getFullYear() )	);

}
document.getElementById("datetime").innerHTML = formatDATETIME();


http://jsfiddle.net/2v973e8x/1/
http://www.w3schools.com/js/js_dates.asp
https://www.google.com/webhp?sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8#q=javascript+display+current+date+and+time

*/