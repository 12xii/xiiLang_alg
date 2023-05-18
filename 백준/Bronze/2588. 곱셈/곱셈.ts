const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const a: number = Number(input[0]);
const b: number = Number(input[1]);
const b0: number = Number(input[1].split('')[0]);
const b1: number = Number(input[1].split('')[1]);
const b2: number = Number(input[1].split('')[2]);

console.log(a * b2);
console.log(a * b1);
console.log(a * b0);
console.log(a * b);