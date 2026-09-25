export {};
function divisibleSumPair(ar: number[], k: number): number[][] {
  let count = [];
  for (let i = 0; i < ar.length; i++) {
    for (let j = 0; j < ar.length; j++) {
      if (i < j && (ar[i] + ar[j]) % k === 0) {
        count.push([ar[i], ar[j]]);
      }
    }
  }
  return count;
}
let ar: number[] = [1, 3, 2, 6, 1, 2];
let k: number = 3;
console.log(divisibleSumPair(ar, k));
interface Number {
  [key: string]: number;
}
let user: Number = {
  name: 2,
  hussain: 3,
};
console.log(user.hussain);
