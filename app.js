// Event listeners

window.addEventListener('load', logoMove);
document.getElementById('projects-button').addEventListener('click', autoScroll);

// Pick color for the dvd logo (by randomly changing Hue)
function pickColor() {
	const logo = document.getElementById("logo");
	logo.style.filter = `hue-rotate(${Math.floor(Math.random() * (360 - 0 + 1) + 0)}deg)`;
}

// Animate the logo to float in background 

function logoMove() {

	// Get DVD logo 
	const logo = document.getElementById("logo");

	// Define initial variable for logo placement and movement

	let x = 200, /* Logo starting width  */
		y = 100, /* Logo starting height */
		w = window.innerWidth, /* window width*/
		h = window.innerHeight, /* window height*/
		xspeed = 1,  /* logo left to right speed */
		yspeed = 1; /* logo up to and down speed */

	// Create animation interval

	setInterval(frame, 8);

	// Define function to take place each interval a.k.a. frame

	function frame() {

		// X and Y Both move at the speed define above

		x = x + xspeed
		y = y + yspeed

		logo.style.top = x + "px";
		logo.style.left = y + "px";

		// If the logo reaches the end of the window, change direction(reverse the speed) and pick new color

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


// Projects Button Auto scroll 

// function autoScroll() {
// 	alert('wiping butt');
// }