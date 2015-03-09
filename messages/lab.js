// Your JavaScript code here...

 function parse(){
	request = new XMLHttpRequest();
	request.open("GET", "data.json", true);

	request.onreadystatechange = parse_data; //parseData is function 
 	request.send();
 }


function parse_data(){
	if (request.readyState == 4) {
		messagesDiv = document.getElementById("messages");
		converted = JSON.parse(request.responseText);
		for (i = 0; i < converted.length; i++) {
			messages.innerHTML += "<p>" + converted[i]["content"];
		}
	}
}
