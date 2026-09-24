function sum(num) {
    let max = Math.max(...num);
    let sum = num
        .filter((val) => val < max)
        .reduce((pre, next) => pre + next);
    return sum;
}
let num = [12, 3, 6, 1];
console.log(sum(num));
export {};
