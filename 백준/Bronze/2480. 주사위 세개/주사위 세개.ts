const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

const a: number = Number(input[0]);
const b: number = Number(input[1]);
const c: number = Number(input[2]);

let gold: number = 0;

if (a == b && b == c) {
    gold = 10000 + 1000 * a;
} else if (a == b || b == c) {
    gold = 1000 + 100 * b;
} else if (a == c) {
    gold = 1000 + 100 * a;
} else {
    if (a > c && a > b) gold = 100 * a;
    else if (b > c && b > a) gold = 100 * b;
    else if (c > a && c > b) gold = 100 * c;
}

console.log(gold);