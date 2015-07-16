$(document).ready(function() {

	$( "#verify-button" ).click(function() {

		data = decodeURIComponent($(this).attr("value"));

		$.post( "/verify", data, function( res ) {
			console.log(res);
		});

		$("#progress-msg").Loadingdotdotdot({
			    "speed": 400,
			    "maxDots": 4,
			    "word": "Verifying signature"
			});

		 setTimeout(
		  function(){
		  	$("#progress-msg").Loadingdotdotdot("Stop");
			$("#verified-icon").show()
			$("#progress-msg").html('Verified.')
		    }, 3000);

	});
});
