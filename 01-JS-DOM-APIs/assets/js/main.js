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
                    $('.hidden').css('background-color', 'green');
                }
            },
            error: function(data) {
                $('.hidden').css('background-color', 'red');
            }
        });
    });
    spotifySearch();
});


function spotifySearch() {
    var data = {
        q: 'Rolling Stones',
        type: 'album'
    }
    $('#albums').append('<h1> Listen to the songs of ' + data.q + '</h1>');
    $.ajax({
        method: 'GET',
        url: 'https://api.spotify.com/v1/search',
        contentType: 'application/json; charset=utf-8',
        data: $.param(data),
        success: function(data) {
            console.log(data.q);

            $.each(data.albums.items, function(i, album) {

                showAlbum(album);

            });
        },
        error: function(data) {

        }
    });
}

function showAlbum(album) {
    $('#albums').append('<article><img src="' + album.images["0"].url + '"/>' +
        '<p> Name: ' + album.name + '</p>' +
        '<p>Type: ' + album.type + '</p>' +
        '<a href="' + album.external_urls.spotify + '">URL</a></article>');
}
