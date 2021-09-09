// 用两个栈来实现一个队列，完成队列的push 和 pop操作。
// 队列中的元素为int 类型
// 拓展思考：用两个队列实现一个栈

// 栈的特性是先入后出 push, pop
// 队列的特效是先入先出 push, shift

let MyQueue = function () {
    this.inStack = [];
    this.outStack = [];
}

MyQueue.prototype.push = function(value) {
    this.instack.push(value);
}

MyQueue.prototype.pop = function(value) {
    const {instack, outStack} = this;
    if (outStack.length) {
        return outStack.pop();
    } else {
        while(instack.length) {
            outStack.push(instack.pop())
        }
        return outStack.length ? outStack.pop() : -1
    }
}


// 拓展思考：用两个队列实现一个栈
// A和B两个队列
// 入栈：A 为空，数据放入B中。反之，B为空，放到A中。都为空，默认放入A中。
// 出栈：A 为空，B中依次取出数据放入A中，返回最后一个。反之，B为空，A中数据依次取出放入B中返回最后一个

let CQueue = function () {
    this.Stack_A = [];
    this.Stack_B = [];
}

CQueue.prototype.push = function (value) {
    const {Stack_A, Stack_B} = this;
    
    if (Stack_A.length === 0 && Stack_B.length === 0) {
        Stack_A.push(value)
    }
    if (Stack_A.length === 0) {
        Stack_B.push(value)
    }
    if (Stack_B.length === 0) {
        Stack_A.push(value)
    }
}

CQueue.prototype.pop = function () {
    const {Stack_A, Stack_B } = this;
    if (Stack_A.length === 0 && Stack_B.length === 0) return -1;
    if (Stack_A.length === 0) {
        while(Stack_B.length - 1) {
            Stack_A.push(Stack_B.shift())
        }
        return Stack_B.shift()
    }
    if (Stack_B.length === 0) {
        while(Stack_A.length - 1) {
            Stack_B.push(Stack_A.shift())
        }
        return Stack_A.shift()
    }
}

const newStack = new CQueue();

newStack.push(1);
newStack.push(2);
newStack.push(3);

console.log(newStack.pop());