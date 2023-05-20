const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N: number = Number(input[0]);
const list: string[] = input[1].split(' ');

let min: number = 1000000, max: number = -1000000;

for (let i: number = 0; i < N; i++){
    let inThis: number = Number(list[i])

    min = min > inThis ? inThis : min;
    max = max < inThis ? inThis : max;
}

console.log(min, max);