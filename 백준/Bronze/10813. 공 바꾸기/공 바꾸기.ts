const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N: number = Number(input[0].split(' ')[0]);
const M: number = Number(input[0].split(' ')[1]);

let basket: number[] = [];

for (let i: number = 0; i < N; i++) basket.push(i + 1);

let temp: number = 0;

for (let i: number = 1; i <= M; i++){
    const fir: number = Number(input[i].split(' ')[0]) - 1;
    const sec: number = Number(input[i].split(' ')[1]) - 1;

    temp = basket[fir];
    basket[fir] = basket[sec];
    basket[sec] = temp;
}

console.log(basket.join(' '));