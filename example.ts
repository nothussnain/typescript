export {};
function birthday(s: number[], d: number, m: number) {
  let count = 0;
  let sum = [];
  for (let i = 0; i < s.length; i++) {
    let l = s.slice(i, m + i).reduce((pre, next) => pre + next);
    sum.push(l);
    if (l === d) {
      count++;
    }
  }
  return sum;
}
let s: number[] = [2, 2, 1, 3, 2];
let d: number = 9;
let m: number = 2;
console.log(birthday(s, d, m));
