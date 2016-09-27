/*Base function: makes the child object inherits from the parent object.*/
function inheritPrototype(childObject, parentObject) {
    var copyOfParent = Object.create(parentObject.prototype);
    copyOfParent.constructor = childObject;
    childObject.prototype = copyOfParent;
};

/*Observable object. Parent object*/
function Observable() {
    this.subscribers = {};
}

Observable.prototype = {
    subscribe: function(event, callback) {
        if (this.subscribers[event] === undefined) {
            this.subscribers[event] = [callback];
        } else {
            this.subscribers[event].push(callback);
        }
    },

    notify: function(event) {
        console.log(event + ' was fired');/*6 - Log to console when each event is fired.*/
        if (this.subscribers[event] != undefined) {
            this.subscribers[event].forEach(function(callback) {
                callback();
            });
        }
    }
};
/*1 - Create a Movie object*/
/*I modified the Movie object as a child of Observable object*/

function Movie() {
    Observable.call(this);
    this.attributes = {};

}

inheritPrototype(Movie, Observable);


Movie.prototype.constructor = Movie;

Movie.prototype.get = function(attr) {
    return this.attributes[attr];
};

Movie.prototype.set = function(attr, value) {
    this.attributes[attr] = value;
};

Movie.prototype.play = function() {
    console.log('playing');
    this.notify('play'); /*4 - Publish "playing" event on Movie.play().*/
};

Movie.prototype.stop = function() {
    console.log('stopped');
    this.notify('stop');/*5 - Publish "stopped" event on Movie.stop().*/
};


/*2 - Instantiate some of your favorite movies and play with them in the console.*/

var mov1 = new Movie();

mov1.set('title', 'Terminator');

/*3 - Add a MovieObserver class that listens for "playing" and “stopped” events.*/

function MovieObserver(movie) {
    movie.subscribe('play', function() {
        console.log('Playing ' + movie.get('title'));
    });

    movie.subscribe('stop', function() {
        console.log('stopped ' + movie.get('title'));
    });
}

var mo = new MovieObserver(mov1);
