const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const cases: number = Number(input[0]);

let arr: string[] = [];

for (let i: number = 1; i <= cases; i++){
    const now: string[] = input[i].split('');
    arr.push(now[0] + now[now.length - 1]);
}

console.log(arr.join('\n'));