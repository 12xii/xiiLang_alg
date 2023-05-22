const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

let temp: string;
let N: string[] = input[0].split(''), M: string[] = input[1].split('');

temp = N[0], N[0] = N[2], N[2] = temp;
temp = M[0], M[0] = M[2], M[2] = temp;

let revN: number = Number(N.join('')), revM: number = Number(M.join(''));
console.log(revN > revM ? revN : revM);