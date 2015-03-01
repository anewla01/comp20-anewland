function init(){
// 	console.log("up and running");
	var img = new Image();
	img.src = "pacman10-hp-sprite.png";
	img.addEventListener("load", function() {
		var ctx = document.getElementById("game_canvas").getContext("2d");
		ctx.drawImage(img, -320, 0);
		ctx.drawImage(img, 80, 20, 19, 20, 10, 5, 20, 19);
	}, false);

}