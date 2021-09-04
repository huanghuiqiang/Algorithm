function myNew(ctor, ...args) {
    if (typeof ctor !== 'function') throw 'myNew function the first param must be a function'

    var newObj = Object.create(ctor.prototype);
    var ctorReturnResult = ctor.apply(newObj, args);
    var isObject = typeof ctorReturnResult === 'object' && ctorReturnResult !== null;
    var isFunction = typeof ctorReturnResult === 'function';
    if(isObject || isFunction) {
        return ctorReturnResult;
    }
    return newObj;
}