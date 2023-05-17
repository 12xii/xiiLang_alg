const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const a: number = Number(input[0]), b: number = Number(input[1]), c: number = Number(input[2]);

console.log(`${(a+b)%c}\n${((a%c) + (b%c)) % c}\n${(a*b)%c}\n${((a%c)*(b%c))%c}`)