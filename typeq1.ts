function sum(num: number[]) {
  let sum = num.reduce((pre: number, next: number) => pre + next);
  return sum;
}
let num: number[] = [12, 3, 5, 6, 1];
console.log(sum(num));
