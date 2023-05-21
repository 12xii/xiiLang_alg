const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N: number = Number(input[0]);

let arr: number[] = [];
let max: number = 0;

for (let i: number = 0; i < N; i++){
    const now: number = Number(input[1].split(' ')[i]);
    
    max = max < now ? now : max;

    arr.push(now);
}

arr = arr.map((x) => { return x / max * 100 });
let total: number = 0;

for (let i: number = 0; i < N; i++) total += arr[i];

console.log(total / arr.length);