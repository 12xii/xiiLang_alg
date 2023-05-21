const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

let arr: string[] = [];
for (let i: number = 0; i < 26; i++){
    arr.push(String.fromCharCode(97 + i));
}

let newarr: number[] = Array(26).fill(-1);

for (let i: number = 0; i < 26; i++){
    for (let j: number = 0; j < input.length; j++){
        if (arr.indexOf(input[j]) != -1) {
            newarr[i] = input.indexOf(arr[i]);
        }
    }
}

console.log(newarr.join(' '));