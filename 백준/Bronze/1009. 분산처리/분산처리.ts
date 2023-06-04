const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const T: number = Number(input[0]);
let str: string = '';

for (let i: number = 1; i <= T; i++){
    const a: number = Number(input[i].split(' ')[0]);
    const b: number = Number(input[i].split(' ')[1]);

    let data: number = a;

    for (let j: number = 1; j < b; j++){
        data *= a;
        data %= 10;
    }

    data %= 10;

    if (data == 0) data += 10;

    str += String(data) + '\n'
}

console.log(str)