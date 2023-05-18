const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const total: number = Number(input[0]);
const items: number = Number(input[1]);

let currentTotal: number = 0;

for (let i: number = 2; i < items + 2; i++){
    const price = Number(input[i].split(' ')[0]);
    const quantity = Number(input[i].split(' ')[1]);

    currentTotal += price * quantity;
}

console.log(currentTotal == total ? 'Yes' : 'No');