const s = function (selector) {
    return new s.prototype.init(selector);
};

s.prototype.init = function (selector) {
    if (!selector){
        return this; // {}
    }
    if (selector.tagName){
        this[0] = selector;
        this.length = 1;
        return this;
    }
    Object.assign(this, document.querySelectorAll(selector));
    this.length = document.querySelectorAll(selector).length;
    return this;
};

s.prototype.init.prototype = s.prototype;

window.s = s;

export default s;