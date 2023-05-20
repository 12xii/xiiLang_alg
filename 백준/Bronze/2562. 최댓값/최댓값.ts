const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let list: number[] = [];

for (let i: number = 0; i < input.length; i++){
    list.push(Number(input[i]));
}

let max: number = 0;

for (let i: number = 0; i < list.length; i++) {
    max = max < list[i] ? list[i] : max;
}

console.log(`${max}\n${list.indexOf(max) + 1}`)