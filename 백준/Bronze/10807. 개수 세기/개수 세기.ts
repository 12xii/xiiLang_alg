const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N: number = Number(input[0]);
const list: string[] = input[1].split(' ');
const V: string = input[2];

let count: number = 0;

for (let i: number = 0; i < N; i++){
    if (list[i] == V) count++; 
}

console.log(count);