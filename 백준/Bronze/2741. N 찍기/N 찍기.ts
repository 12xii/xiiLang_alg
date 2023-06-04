const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim();

const num: number = Number(input);
let str: string = '';

for (let i = 1; i <= num; i++){
    str += i + '\n';
}

console.log(str);