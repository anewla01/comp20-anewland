// Your JavaScript code here...

 function parse(){
	request = new XMLHttpRequest();
	request.open("GET", "data.json", true);

	//function called three times 
	console.log("hello");
	request.onreadystatechange = parse_data; //parseData is function 
 	request.send();
 }


function parse_data(){
	if (request.readyState == 4) {
		messagesDiv = document.getElementById("messages");
		converted JSON.parse(request.responseText);
		// for(int i = 0; i < converted.length; i++) {
		// 	// messageDiv.innerHTML += "<p>" + converted[i]["content"];
		// }
	}
}


