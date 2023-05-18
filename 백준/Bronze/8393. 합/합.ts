const input: number = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

let total: number = 0;

for (let i = 0; i <= input; i++){
    total += i;
}

console.log(total);