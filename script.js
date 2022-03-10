document.addEventListener("contextmenu", (event) => event.preventDefault());

var started = false;

var audio = new Audio("assets/sometunes.mp3");
function play() {
	started = !started;
	if (started) {
		audio.volume = 0.1;
		audio.play();
		document.getElementById("playbutton").style.display = "none";
		document.getElementById("pausebutton").style.display = "block";
	} else {
		audio.pause();
		document.getElementById("playbutton").style.display = "block";
		document.getElementById("pausebutton").style.display = "none";
	}
}
