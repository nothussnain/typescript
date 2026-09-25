function divisibleSumPair(ar, k) {
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
let ar = [1, 3, 2, 6, 1, 2];
let k = 3;
console.log(divisibleSumPair(ar, k));
let user = {
    name: 2,
    hussain: 3,
};
console.log(user.hussain);
export {};
