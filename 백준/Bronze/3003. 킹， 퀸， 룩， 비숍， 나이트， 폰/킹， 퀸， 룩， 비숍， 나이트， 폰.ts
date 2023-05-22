const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let newInput: number[] = input.map((x) => { return Number(x) });
const original: number[] = [1, 1, 2, 2, 2, 8];

for (let i = 0; i < 6; i++) newInput[i] = original[i] - newInput[i];

console.log(newInput.join(' '));