const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let Hap: number = Number(input[0]) - Number(input[1]);
const V: number = Number(input[2]) - Number(input[0]);

let i: number = 1;

i = Math.ceil(V / Hap)

console.log(i + 1);
