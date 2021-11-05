import s from '../core';

s.prototype.addClass = function (...classNames) {
    this.each((item, index) => {
        if (item.classList){
            if (!item.classList.contains(classNames[index])){
                item.classList.add(...classNames);
            }
        }
    })
    return this;
}

s.prototype.removeClass = function (...classNames) {
    this.each((item) => {
        if (item.classList){
            item.classList.remove(...classNames);
        }
    })
    return this;
}

s.prototype.toggleClass = function (className) {
    this.each((item) => {
        if (item.classList){
            if(item.classList.contains(className)){
                item.classList.remove(className);
            } else {
                item.classList.add(className);
            }
        }
    })
    return this;
}