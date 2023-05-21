const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let i = 0;

if (input[0] == '') i = 1;

console.log(input.length - i);