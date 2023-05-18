const input: number = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

let arr: string = '';

for (let i = 0; i < input / 4; i++){
    arr += 'long ';
}

console.log(`${arr}int`);