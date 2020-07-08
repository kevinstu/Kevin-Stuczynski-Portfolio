window.addEventListener('load', logoMove);

var x = 200;
var y = 100;
var w = window.innerWidth;
var h = window.innerHeight;
var xspeed = 1;
var yspeed = 1;




function pickColor() {


	var logo = document.getElementById("logo");
	logo.style.filter = `hue-rotate(${Math.floor(Math.random() * (360 - 0 + 1) + 0)}deg)`;

}




function logoMove() {

	var logo = document.getElementById("logo");

	var id = setInterval(frame, 8);
	function frame() {


		x = x + xspeed
		y = y + yspeed

		logo.style.top = x + "px";
		logo.style.left = y + "px";

		if (x + 100 == window.innerHeight || x == 0) {
			xspeed = -xspeed
			pickColor();
		}

		if (y + 193 == window.innerWidth || y == 0) {
			yspeed = -yspeed
			pickColor();
		}

	}
}