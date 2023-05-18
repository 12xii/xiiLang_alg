const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr: string = '';

for (let i: number = 1; i <= Number(input[0]); i++){
    const a: number = Number(input[i].split(' ')[0]);
    const b: number = Number(input[i].split(' ')[1]);

    arr += `Case #${i}: ${a} + ${b} = ${a + b}\n`;
}

console.log(arr);