const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const cases: number = Number(input[0]);
let arr: string = ''

for (let i: number = 1; i <= cases; i++){
    const a: number = Number(input[i].split(' ')[0]);
    const b: number = Number(input[i].split(' ')[1]);

    arr += `${a + b}\n`;
}

console.log(arr);