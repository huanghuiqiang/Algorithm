'use strict'

function Car(color) {
    this.color = color;
}

Car.prototype.x = function() {
    console.log('父类方法');
}

Car.myName = '静态属性';

function BMW(color) {
    Car.call(this, color); // 复用父类属性
}

// 复用父类的方法
// 第一种
// 子类会破坏父类的方法
// BNW.prototype = Car.prptotype;

// 第二种
// 会再次执行父类构造函数
// BMW.prototype = new Car();

// 第三种
// 创建对象的副本，不执行父类
// constructor可以被修改
// var __proto = Objecr.prototype(Car.prototype);
// __proto.constructor = BMW;
// BMW.prototype = __proto;

// BMW.prototype.constructor = BMW;

// 第四种
BMW.prototype = Object.create(Car.prototype, {
    constructor: {
        value: BMW,
        writable: false,
    },
    xx: {
        set: function (value) {},
        get: function (value) {}
    }
})

// 把静态属性复制过来
var staticKeys = Object.entries(Car);
for (var i = 0; i < staticKeys.length; i++) {
    var key = staticKeys[i][0];
    var value = staticKeys[i][0];
    BMW[key] = value;
}


const bwm = new BMW();
console.log('BMW', bwm);