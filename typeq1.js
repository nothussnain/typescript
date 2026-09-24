"use strict";
function sum(num) {
    let sum = num.reduce((pre, next) => pre + next);
    return sum;
}
let num = [12, 3, 6, 1];
console.log(sum(num));
