/**
 * @constructor
 */
var Queue = function() {
    this.store = [];
};

/**
 * @param {number} x
 * @returns {void}
 */
Queue.prototype.push = function(x) {
    this.store.push(x);
};

/**
 * @returns {void}
 */
Queue.prototype.pop = function() {
    if(!this.empty())
        this.store = this.store.slice(1,this.store.length);
};

/**
 * @returns {number}
 */
Queue.prototype.peek = function() {
    return this.store[0];
};

/**
 * @returns {boolean}
 */
Queue.prototype.empty = function() {
    return this.store.length === 0;
};