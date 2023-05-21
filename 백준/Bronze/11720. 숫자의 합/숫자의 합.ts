const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N: number = Number(input[0]);
let answer: number = 0;

let list: number[] = (input[1].split('')).map((x) => { return Number(x) });
for (let i: number = 0; i < list.length; i++){
    answer += list[i];
}

console.log(answer);