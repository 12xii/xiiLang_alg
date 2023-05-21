const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N: number = Number(input[0].split(' ')[0]);
const M: number = Number(input[0].split(' ')[1]);

let basket: number[] = []

for (let i: number = 0; i < N; i++) basket.push(0);

for (let i: number = 1; i <= M; i++){
    const start: number = Number(input[i].split(' ')[0])
    const stop: number = Number(input[i].split(' ')[1])
    const num: number = Number(input[i].split(' ')[2])

    for (let j: number = start - 1; j < stop; j++) basket[j] = num;
}

console.log(basket.join(' '))