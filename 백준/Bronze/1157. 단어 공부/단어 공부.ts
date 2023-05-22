const input: string = require('fs').readFileSync('/dev/stdin').toString().trim();
const list: string[] = input.toUpperCase().split('');

let alphaArr: number[] = new Array(26).fill(0);
let max: number = 0;
let answer: string = '';

for (let i: number = 0; i < input.length; i++){
    alphaArr[list[i].charCodeAt(0) - 65] += 1;
}

for (let i: number = 0; i < 26; i++){
    if (max < alphaArr[i]) {
        max = alphaArr[i];
        answer = '';
    }
    else if (max > alphaArr[i]) {
        continue;
    }
    else {
        answer = '?'
    }
}

if (answer != '?') {
    answer = String.fromCharCode(alphaArr.indexOf(max) + 65);
}

console.log(answer);