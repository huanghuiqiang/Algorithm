var num = 1;
function yideng() {
    "use strict"
    console.log(this.num++);
}
function yideng2() {
    "use strict"
    yideng2();
}

(function() {
    "use strict"
    yideng2()
})()

yideng()