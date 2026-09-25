export {};
function migratoryBirds(arr: number[]) {
  let unique = [...new Set(arr)];
  let count: { [key: string]: number } = {};
  unique.forEach((element) => {
    let same = arr.filter((val) => val === element);
    count[element] = same.length;
  });
  let large = Object.entries(count).sort(([, a], [, b]) => a - b);
  return large[0][0];
}
let arr: number[] = [2, 2, 1, 1, 3];

console.log(migratoryBirds(arr));
