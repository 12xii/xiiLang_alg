const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const N: number = Number(input[0].split(' ')[0]);
const M: number = Number(input[0].split(' ')[1]);

let list: number[] = [];
for (let i: number = 0; i < N; i++) {
    list.push(i + 1);
}

for (let i: number = 1; i <= M; i++) {
    const start: number = Number(input[i].split(' ')[0]);
    const stop: number = Number(input[i].split(' ')[1]);

    let newarr: number[] = [];
    for (let j: number = start; j <= stop; j++){
        newarr.unshift(list[j - 1]);
    }

    for (let j: number = start; j <= stop; j++) {
        list[j - 1] = newarr[j - start];
    }
}

console.log(list.join(' '));