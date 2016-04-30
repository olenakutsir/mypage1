$(function() {
    $('#btn-send').click(function() {
        $.ajax({
            url: "https://formspree.io/YOUR-EMAIL-HERE", 
            method: "POST",
            data: {message: message.value},
            dataType: "json"
        })
        .done(function () {
            $('#form').html('<h1>Thank you!</h1>');
        })
        .fail(function (jqXHR, textStatus) {
            $('#form').html('<h1>Error!</h1><br>'+textStatus);
        });
    })
})