const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr: string = '';

for (let i = 0; i < input.length ; i++){
    const a: number = Number(input[i].split(' ')[0]);
    const b: number = Number(input[i].split(' ')[1]);

    arr += `${a + b}\n`;
}

console.log(arr);