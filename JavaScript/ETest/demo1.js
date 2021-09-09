console.log({} + []); // 0

{} + []; // 0
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

