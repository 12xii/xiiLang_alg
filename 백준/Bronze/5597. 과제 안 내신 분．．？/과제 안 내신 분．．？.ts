const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr: string[] = [];
for (let i: number = 0; i < 30; i++){
    arr.push((i + 1).toString());
}

let answer: string[] = []
for (let i: number = 0; i < 30; i++){
    if (!input.includes(arr[i])) {
        answer.push(arr[i]);
    }
}

answer.sort(function (a, b): number {
    return Number(a) - Number(b)
})

console.log(answer.join('\n'));