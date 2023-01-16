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
                // $("#chatbot-response").append(`<li>${response}</li>`);

                let newMessage = $('<div>', {
                    class: 'message'
                }).text(response.text);
                let removeButton = $('<button>', {
                    class: 'remove-button'
                }).text('Remove');
                newMessage.append(removeButton);
                newMessage.append(response);
                $('#chatbot-response').append(newMessage);

            }
        });
    });
}); 
// Detect Click Event on "remove-button". 
$(document).on('click', '.remove-button', function() {
    $(this).parent().remove();
});