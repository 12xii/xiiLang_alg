const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N: number = Number(input[0].split(' ')[0]);
const X: number = Number(input[0].split(' ')[1]);

const list: string[] = input[1].split(' ');

let arr: string = '';

for (let i: number = 0; i < N; i++){
    if (Number(list[i]) < X) arr += `${list[i]} `;
}

console.log(arr);