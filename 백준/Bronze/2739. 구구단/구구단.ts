const input: number = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

let arr: string = ''

for (let i: number = 1; i <= 9; i++){
    arr += `${input} * ${i} = ${input * i}\n`;
}

console.log(arr);