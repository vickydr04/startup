var Movie = require('./movie.js');
var Director = require('./director.js');
var $ = require('jquery');


var alien = new Movie();
var ridleyScott = new Director('Ridley Scott');
ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']);
alien.set('director', ridleyScott);
console.log(alien.get('director').speak());


var arr = ridleyScott.get('quotes');

$.each(arr, function(i, album) {
    $('#show').show(function() {
        $(this).append('<div>' + arr[i] + '</div>');
    });
});
