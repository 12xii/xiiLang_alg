const input: number = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

let arr: string = '';

for (let i: number = 0; i < input; i++){
    for (let j: number = 0; j <= i; j++){
        arr += '*';
    }
    arr += '\n';
}

console.log(arr);