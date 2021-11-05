import s from "../core";

s.prototype.on = function (eventName, callback) {
    if (eventName || callback) {
        this.each( item => {
            item.addEventListener(eventName, callback);
        })
    }
    return this;
}

s.prototype.off = function (eventName, callback) {
    if (eventName || callback){
        this.each( item => {
            item.removeEventListener(eventName, callback);
        })
    }
    return this;
}

s.prototype.click = function (handler) {
    this.each( item => {
        if (handler){
            item.addEventListener('click', handler);
        } else {
            item.click()
        }
    })
    return this;
}