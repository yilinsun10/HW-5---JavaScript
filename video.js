var video;

window.addEventListener("load", function () {
	console.log("Good job opening the window")
	video = this.document.querySelector("#player1");

	video.controls = true;
	/*Play and Pause*/
	this.document.getElementById("play").addEventListener("click", function () {
		video.play();
		console.log("Play Video");
		document.getElementById("volume").innerText = (video.volume * 100) + "%";
	});
	this.document.getElementById("pause").addEventListener("click", function () {
		video.pause();
		console.log("Pause Video");
	});
	/*slower and faster*/
	this.document.getElementById("slower").addEventListener("click", function () {
		video.playbackRate *= (1-0.1);
		console.log("Current speed: ", video.playbackRate.toFixed(5));
	});
	this.document.getElementById("faster").addEventListener("click", function () {
		video.playbackRate *= (1+0.1);
		console.log("Current speed: ", video.playbackRate.toFixed(5));
	});
	/*skip ahead*/
	this.document.getElementById("skip").addEventListener("click", function () {
		if (video.currentTime + 10 >= video.duration) {
			video.currentTime = 0;
		} else {
			video.currentTime += 10;
		}
		console.log("Current location: ", video.currentTime.toFixed(2));
	});
	/*mute and unmute*/
	this.document.getElementById("mute").addEventListener("click", function() {
			video.muted = !video.muted;
			this.textContent = video.muted ? "Unmute" : "Mute";
			console.log(video.muted ? "Muted" : "Unmuted");
	});

	/*volume slider*/
	this.document.getElementById("slider").addEventListener("input", function() {
        video.volume = this.value / 100;
        document.getElementById("volume").innerText = this.value + "%";
	});

	/*two style changes*/
	this.document.getElementById("vintage").addEventListener("click", function(){
		video.classList.add("oldSchool");
		console.log("Applied Old School style");
	});
	this.document.getElementById("orig").addEventListener("click", function(){
		video.classList.remove("oldSchool");
		console.log("Applied Original style");
	});

});
