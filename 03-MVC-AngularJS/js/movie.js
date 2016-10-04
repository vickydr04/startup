
// 3 - Create the same Movie class as in the previous practice, but inside a CommonJS module.
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
