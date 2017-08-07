$(document).ready(function() {
	var tick = new Audio('tick.mp3');
	var start = new Audio('start.m4a');
	var count = 0;
	var formCurTop = "135";

	$(".ts").keyup(function(event) {
	    timesig = parseInt($(this).val());
	});

	$(".bars").keyup(function(event) {
		bars = parseInt($(this).val());
	});

	$(".bpm").keyup(function(event) {
	    bpm = 60000 / parseInt($(this).val());
	});

	$("#start").click(function() {
		window.setInterval(function() {
			if (count <= bars * timesig) {
				start.play();
			} else if (count % timesig === 0) {
				start.play()
			} else {
				tick.play()
			}
			count++;
		}, bpm);
		$(".ts").prop("disabled", true);
		$(".bars").prop("disabled", true);
		$(".bpm").prop("disabled", true);
		$("#start").css("pointer-events", "none");
		$("#start").prop("disabled", true);
	});

	$(".add").click(function() {
		alert("Coming soon");
	})
});
