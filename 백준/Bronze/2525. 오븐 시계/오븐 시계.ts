const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let a: number = Number(input[0].split(' ')[0]);
let b: number = Number(input[0].split(' ')[1]);
const c: number = Number(input[1]);

b += c;
if (b >= 60) {
    while(b >= 60){
        b -= 60;
        a++;
        if (a >= 24) a -= 24;
    }
}

console.log(a, b);