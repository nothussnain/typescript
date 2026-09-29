function identity(val) {
    console.log(val.length);
    return val.length;
}
let val = identity([1, 2, 4, 5]);
console.log(val);
export {};
