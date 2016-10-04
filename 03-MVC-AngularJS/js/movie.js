function Movie() {
    this.attributes = {};
}

Movie.prototype = {
    constructor: Movie,
    get: function(attr) {
        return this.attributes[attr];
    },

    set: function(attr, value) {
        this.attributes[attr] = value;
    },

    play: function() {
        console.log('playing');
    },

    stop: function() {
        console.log('stopped');
    }
};

module.exports = Movie;
