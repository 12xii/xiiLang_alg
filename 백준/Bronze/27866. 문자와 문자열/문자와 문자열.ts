const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const str: string[] = input[0].split('');
const i: number = Number(input[1]);

console.log(str[i - 1]);