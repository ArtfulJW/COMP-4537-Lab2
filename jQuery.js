// Must place jQuery on the top of HTML 
$(document).ready(function() {
	$('#chatbot-form').submit(function(event) {
	event.preventDefault();
	// Handle form submission  
	const message = $('#chatbot-input').val();
		$.ajax({
			type: 'POST',
			url: 'http://localhost:8000/chatbot',
			data: {
				message: message
			},
			success: function(response) {
				// alert("Success: " + response);
				$("#chatbot-response").append(`<li>${response}</li>`);
			}
		});
	});
}); 