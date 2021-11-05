import s from '../core';

s.prototype.each = function (callback) {
    if (this.length){
        for (let i = 0; i < this.length; i++) {
            callback(this[i], i, this);
        }
    }
    return this;
}