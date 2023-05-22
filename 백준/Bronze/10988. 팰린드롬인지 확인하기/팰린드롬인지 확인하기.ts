const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

const revInput: string[] = Array.from(input).reverse();

let answer: string = '1';

for (let i = 0; i < input.length; i++){
    if (input[i] != revInput[i]) {
        answer = '0';
        break;
    }
}

console.log(answer);