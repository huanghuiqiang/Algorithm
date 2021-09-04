Function.prototype.myCall = function(context, ...args) {
    let cxt = context || window;

    let func = Symbol();

    cxt[func] = this;
    args = args ? args : [];

    const res = args.length > 0 ? cxt[func](...args) : cxt[func]();

    delete cxt[func];
    return res;
}