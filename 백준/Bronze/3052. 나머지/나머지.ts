const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr: number[] = [];

for (let i: number = 0; i < 10; i++){
    const now: number = Number(input[i]) % 42

    if (!arr.includes(now)) arr.push(now);
}

console.log(arr.length);