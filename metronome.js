$(document).ready(function() {
	var tick = new Audio('tick.mp3');
	var start = new Audio('start.mp3');
	var count = 0;

	$("#ts").keyup(function(event) {
	    //if(event.keyCode == 13){
	        timesig = parseInt($(this).val());
	    //}
	});

	$("#bpm").keyup(function(event) {
	    //if(event.keyCode == 13){
	        bpm = 60000 / parseInt($(this).val());
	        console.log(bpm);
	    //}
	});

	$("#start").click(function() {
		window.setInterval(function() {
			if (count % timesig === 0) {
				start.play()
			} else {
				tick.play()
			}
			count++;
			console.log(timesig);
		}, bpm)
	});
});