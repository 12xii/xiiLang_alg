const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const value = ['black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

let result = value.indexOf(input[0]) * 10 + value.indexOf(input[1]);

result *= 10 ** value.indexOf(input[2]);

console.log(result);