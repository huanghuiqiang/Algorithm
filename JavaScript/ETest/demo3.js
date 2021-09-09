function fn(){ console.log(this.length);
}
var yideng = {
length:5, method:function(){
"use strict"; fn();
arguments[0]() }
}
const result = yideng.method.bind(null); result(fn,1);



function bar() { console.log(myName)
}
function foo() {
var myName = "老袁"
bar() }
var myName = "京程一灯" 
foo()


// 4.请问变量a会被GC回收么，为什么呢?(12分)
function test(){
var a = "yideng"; return function(){
eval(""); }
} test()();



Object.prototype.a = 'a';
Function.prototype.a = 'a1';
function Person(){};
var yideng = new Person();
console.log(Person.a);
console.log(yideng.a);
console.log(1..a);
// console.log(1.a);
console.log(yideng.__proto__.__proto__.constructor.constructor.constructor); 
// Object.prototype 和 Function.prototype 打印的内容差距很大原因是什么呢?


var a={}, b={key:'b'},
c={key:'c'}; a[b]=123;
a[c]=456;
a[true] = 789;
console.log(a[b]); console.log(Symbol(b) == Symbol(b));


// - 【请手动实现一个Symbol】🚦



// 提示💡 如下代码会报错 Uncaught TypeError: yideng is not iterable.请问如何修复呢? 
var yideng = {
    a:2,
    b:3 }
    for(var v of yideng){console.log(v); }


let a = 0;
let yideng = async () => {
a = a + await 10;
console.log(a) }
yideng(); console.log(++a);
// - 加强一下
async function async1(){ console.log(1)
await async2();
console.log(3) }
async function async2(){ console.log(2)
}
async1(); console.log(4)


// 9.请问点击<buttion id=“test”></button>会有反应么?为什么?能解决么?(5分)
$('#test').click(function(argument) { console.log(1);
}); setTimeout(function() {
console.log(2); }, 0);
while (true) { console.log(Math.random());
}


// 10.请先书写如下代码执行结果，并用ES5实现ES6 Promise A+规范的代码，同时你 能解释下如何使用Promise完成事物的操作么?(10分)
// - 答:
const pro = new Promise((resolve, reject) => {
const innerpro = new Promise((resolve, reject) => {
setTimeout(() => { resolve(1);
}) 
console.log(2);
resolve(3); })
innerpro.then(res => console.log(res)); resolve(4);
console.log("yideng");
})
pro.then(res => console.log(res)); console.log("end");


var s = [];
var arr = s;
for (var i = 0; i < 3; i++) {
var pusher = {
value: "item"+i
},tmp; if (i !== 2) { tmp = []
pusher.children = tmp }
arr.push(pusher);
arr = tmp; }
console.log(s[0]);