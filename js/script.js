$(function() {
    $('#btn-send').click(function() {
        $.ajax({
            url: "https://formspree.io/olena.kutsir@gmail.com", 
            method: "POST",
            data: {
                name: name.value,
                email: email.value,
                message: message.value},
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


function scrollToId(whereToScroll) {
    $('html, body').animate({
        scrollTop: $(whereToScroll).offset().top
    }, 800);
    return true;
}

$(function() {
    'use strict';
    console.log("ready!");
    var currentSection = "";

    changeContentSectionTo("#about_me");

    $('#nav-home, #nav-about, #nav-edex, #nav-skills, #nav-contact').click(function(event) {
        var contentID = event.target.id.replace("menu-", "#");
        changeContentSectionTo(contentID, 700);
    });

    function changeContentSectionTo(sectionName, animationDuration) {
        if (currentSection !== sectionName) {
            $("#content").children().hide();
            $(sectionName).show(animationDuration ? animationDuration : 0, "linear");
            currentSection = sectionName;
        }
    }
});
