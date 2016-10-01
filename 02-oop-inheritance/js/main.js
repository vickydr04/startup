/*Base function: makes the child object inherits from the parent object.*/
/*function inheritPrototype(childObject, parentObject) {
    var copyOfParent = Object.create(parentObject.prototype);
    copyOfParent.constructor = childObject;
    childObject.prototype = copyOfParent;
};*/
function extend(ChildClass, ParentClass) {
    ChildClass.prototype = new ParentClass();
    ChildClass.prototype.constructor = ChildClass;
}

/*Observable object. Parent object*/

//Because of the module refactor, i couldn't make this to work, so, I added to Movie.
//This is why now the Observable and inheritPrototype are commented.
/*function Observable() {
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
        console.log(event + ' was fired');//6 - Log to console when each event is fired.
        if (this.subscribers[event] != undefined) {
            this.subscribers[event].forEach(function(callback) {
                callback();
            });
        }
    }
};*/




/*7 - Refactor Movie class as a Module keeping your previous code for reference.*/


var Movie = (function() {
    {
        Movie.attributes = {};
        Movie.subscribers = {};
    }



    Movie.set = function(attr, value) {
        Movie.attributes[attr] = value;
    }
    Movie.get = function(attr) {
        return Movie.attributes[attr];
    }

    Movie.play = function() {
            console.log('playing');
            this.notify('play');
        },

        Movie.stop = function() {
            console.log('stopped');
            this.notify('stop');
        }
    Movie.subscribe = function(event, callback) {
            if (this.subscribers[event] === undefined) {
                this.subscribers[event] = [callback];
            } else {
                this.subscribers[event].push(callback);
            }
        },

        Movie.notify = function(event) {
            console.log(event + ' was fired');
            if (this.subscribers[event] != undefined) {
                this.subscribers[event].forEach(function(callback) {
                    callback();
                });
            }
        }

    return Movie;

});

/*8 - Create a DownloadableMovie that extends from Movie adding a download method.*/
var DownloadableMovie = function() {
    this.download = function() {
        console.log('downloading');
    }
};
extend(DownloadableMovie, Movie);

/*9 - Create a mixin object called Social with the methods: share(friendName) and like().*/
var Social = function() {
    this.share = function(friendName) {
            console.log('Sharing ' + this.get('title') + ' with ' + friendName);
        },
        this.like = function() {
            console.log('I like ' + this.get('title'));
        }
    return this;

};


Social.call(Movie);

/*11 - Create an Actor class and create some actors from one of your favorite movies*/
function Actor() {
    this.actorName = ['Jack Nicholson', 'Ralph Fiennes', 'Robert De Niro', 'Al Pacino'];
}


/*1 - Create a Movie object*/
/*I modified the Movie object as a child of Observable object*/

/*function Movie() {
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
    this.notify('play'); //4 - Publish "playing" event on Movie.play().
};

Movie.prototype.stop = function() {
    console.log('stopped');
    this.notify('stop');//5 - Publish "stopped" event on Movie.stop().
};*/




/*2 - Instantiate some of your favorite movies and play with them in the console.*/

var mov1 = new Movie();
var mov2 = new Movie();
var mov3 = new Movie();

mov1.set('title', 'Terminator');
mov2.set('title', 'Jurassic Park');
mov3.set('title', 'Back to the Future');

/*10 - Apply the mixin to Movie object and play with the console output. */

mov1.share('Vicky');

/*12 - Show how you would add an array of actors to a Movie object.*/

var actors = new Actor();

mov1.set('Actors', actors.actorName);
console.log(mov1.get('Actors'));

//If we would like to add or remove items from the array, we just have to use the push() and pop() array functions

actors.actorName.push('Tom Hanks');
console.log(mov1.get('Actors'));

actors.actorName.pop();
console.log(mov1.get('Actors'));

/*3 - Add a MovieObserver class that listens for "playing" and “stopped” events.*/

function MovieObserver(movie) {
    movie.subscribe('play', function() {
        console.log('Playing: ' + movie.get('title') + ' movie');
    });

    movie.subscribe('stop', function() {
        console.log('stopped ' + movie.get('title') + ' movie');
    });
}

var mo = new MovieObserver(mov1);
