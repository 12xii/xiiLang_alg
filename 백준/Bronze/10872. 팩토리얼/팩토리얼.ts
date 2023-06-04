const input: string = require('fs').readFileSync('/dev/stdin').toString().trim();

const num: number = Number(input);
let answer = 1;

for (let i = 1; i <= num; i++){
    answer *= i;
}

console.log(answer);