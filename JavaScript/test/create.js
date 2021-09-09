var obj = Object.create(null, {
    a: {
        writable: true,
        configurable: true,
        value: '1'
    }}
)


var obj = Object.create({},{
    a: {
    writable: true,
    configurable: true,
    value: '1'
    }}
)

var obj = Object.create(Object.prototype, {
    a: {
        writable: true,
        configurable: true,
        value: '1'
    }
})