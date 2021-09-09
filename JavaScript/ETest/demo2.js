
Promise.resolve()
.then(() => {
console.log(11); })
.then(() => { console.log(12);
})
.then(() => {
console.log(0);
return Promise.resolve(5); })
.then((r) => { console.log('🐻 ', r);
});
// 11 12 0 🐻 5


Promise.resolve()
.then(() => { console.log(1);
})
.then(() => {
console.log(2); })
.then(() => { console.log(3);
})
.then(() => {
console.log(4); })
.then(() => { console.log(6);
})
.then(() => {
console.log(7); })
.then(() => { console.log(8);
});
// 1 2 3 4 5 6 7 8