const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const a: number = Number(input[0]), b: number = Number(input[1]);

console.log(Math.abs(a - b));