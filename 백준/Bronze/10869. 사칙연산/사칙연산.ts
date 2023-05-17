const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const a = Number(input[0]), b = Number(input[1]);
console.log(`${a+b}\n${a-b}\n${a*b}\n${(a-(a%b))/b}\n${a%b}`);