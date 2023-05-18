const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let h: number = Number(input[0]);
let m: number = Number(input[1]);

m -= 45;

if (m < 0) {
    m += 60;
    h -= 1;
    if (h < 0) h += 24;
}

console.log(h, m);