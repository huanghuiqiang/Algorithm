

// 代码实现： 实现Array.prototype.reduce方法

const numbers = [1,2,3];

const sumReducer = (initialValue, current) => initialValue + current;

const myReduce = (reducer, initialValue, array) => {
    let value = initialValue;

    for (let i = 0, len = array.length; i < len; i++) {
        let current = array[i];
        value = reducer(value, current);
    }

    return value;
}

const sumOfNumbersCoustom = myReduce(sumReducer, 1, numbers);

console.log("sumOfNumbersCoustom", sumOfNumbersCoustom);