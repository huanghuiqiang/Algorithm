// ToPrimitive
// valueof 能不能找到值
// tostring 能不能得到原始值
// 装箱：把值转换成对应的引用类型
// 拆箱：把引用类型转成值类型

console.log({} + []);

let obj = {
    valueOf: function () {
        return {}
    },
    toString: function() {
        return 'xxxx'
    }
}
console.log(1 + obj);


{} + []; // 0 => +[] 块级作用域
console.log({} + []);
[] + {}; // "[object Object]"
{} + {}; // "[object Object][object Object]"

[] == false // false
'{} == false' // Uncaught SyntaxError: Unexpected token '=='

if([]) { // true
    console.log([] == false); // true
}

("b" + "a" + + "a" + "a").toLocaleLowerCase() // banana

0 == "0"; // true
NaN == 0 // false
NaN <= 0 // false
null <= 0 // true

1 + null // 1

var a = {value: 1}
var b = {value: 2}
a <= b // true



// ----
var x =+ obj.yideng?.name??'🐻' // NaN

var yideng = "一灯"
typeof yideng // string
yideng instanceof String // true

