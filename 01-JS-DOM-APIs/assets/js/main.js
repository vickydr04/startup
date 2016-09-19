$(document).ready(function() {
    $(".hidden").fadeIn(600, function() {
        $(".alias").focus();
    })
    $("button").click(function() {
        $.ajax({
            url: "http://api.icndb.com/jokes/random",
            success: function(data) {
                if (data.type == 'success') {
                    $('.hidden').html('<p>' + data.value.joke + '</p>');
                }
            },
            error: function(data) {
                $('.hidden').css('background-color', 'red');
            }
        });
    });
});
