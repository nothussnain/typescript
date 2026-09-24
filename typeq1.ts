export {};
function sum(num: number[]) {
  let max = Math.max(...num);
  let sum = num
    .filter((val) => val < max)
    .reduce((pre: number, next: number) => pre + next);
  return sum;
}
let num: number[] = [12, 3, 6, 1];
console.log(sum(num));
