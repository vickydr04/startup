//4 - Create a Director class inside a module and set it as a dependency on the Movie module

function Director(name) {
    this.name = name;
    this.attributes = {};
}

Director.prototype = {
    constructor: Director,
    get: function(attr) {
        return this.attributes[attr];
    },

    set: function(attr, value) {
        this.attributes[attr] = value;
    },
//6 - Add name:string, a quotes:array properties, and a speak() method to Director; calling speak() will return director’s quotes.
    speak: function() {
      return this.name +' says: '+ this.attributes['quotes'];
    },
};

module.exports = Director;
