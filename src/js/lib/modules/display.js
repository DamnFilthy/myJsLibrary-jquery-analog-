import s from '../core';

s.prototype.show = function () {
    this.each( (item) => {
        if (item.style) item.style.display = ""
    })
    return this;
};

s.prototype.hide = function () {
    this.each( (item) => {
        if (item.style) item.style.display = "none"
    })
    return this;
};

s.prototype.toggle = function () {
    this.each( (item) => {
        if (item.style) {
            if(item.style.display === "none"){
                item.style.display = ""
            } else {
                item.style.display = "none"
            }
        }
    })
    return this;
};