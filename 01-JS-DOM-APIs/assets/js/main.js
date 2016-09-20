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

    $('#band').on('change', (function() {
        value = $('#band').val();
        if (value == ' ') { // verifica que no haya valores, si no hay, ejecuta la funcion
            spotifySearch(value);
        } else { //si hay elimina lo anterior e invoca la funcion
            $('article').remove();
            spotifySearch(value);
        }
    }));
});


function spotifySearch(value) {
    var data = {
        q: value,
        type: 'album'
    }
    $('h1').remove(); //elimina el titulo para actualizarlo
    $('#albums').append('<h1> Check the albums of ' + data.q + '</h1>');
    $.ajax({
        method: 'GET',
        url: 'https://api.spotify.com/v1/search',
        contentType: 'application/json; charset=utf-8',
        data: $.param(data),
        success: function(data) {
            $.each(data.albums.items, function(i, album) {
                showAlbum(album);
            });
        },
        error: function(data) {
            alert("Something went wrong, please contact support");
        }
    });
}

function showAlbum(album) {
    $('#albums').append('<article><img src="' + album.images["0"].url + '"/>' +
        '<p> Name: ' + album.name + '</p>' +
        '<p>Type: ' + album.type + '</p>' +
        '<a href="' + album.external_urls.spotify + '">URL</a></article>');
}
