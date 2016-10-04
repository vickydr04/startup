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

    speak: function() {
      return this.name +' says: '+ this.attributes['quotes'];
    },
};

module.exports = Director;
