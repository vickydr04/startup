var Movie = require('./movie.js');
var Director = require('./director.js');

//1 - Add jQuery as a module.
var $ = require('jquery');

//7 - Add a Director to a Movie. Implement the following API:
var alien = new Movie();
var ridleyScott = new Director('Ridley Scott');
ridleyScott.set('quotes', ['Cast is everything.', 'Do what ...']);
alien.set('director', ridleyScott);
console.log(alien.get('director').speak());

//2 - Using jQuery show Director quotes.
var arr = ridleyScott.get('quotes');

$.each(arr, function(i, album) {
    $('#show').show(function() {
        $(this).append('<div>' + arr[i] + '</div>');
    });
});
