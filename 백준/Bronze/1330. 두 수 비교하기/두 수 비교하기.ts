const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const a: number = Number(input[0]);
const b: number = Number(input[1]);

if (a > b) console.log('>');
else if (a < b) console.log('<');
else console.log('==');