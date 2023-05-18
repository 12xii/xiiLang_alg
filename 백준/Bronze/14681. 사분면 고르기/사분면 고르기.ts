const input: string[] = require('fs').readFileSync(0).toString().trim().split('\n');

const x: number = Number(input[0]);
const y: number = Number(input[1]);

let stat: number = 0;

if (x > 0) {
    if (y > 0) stat = 1;
    else stat = 4;
}
else {
    if (y > 0) stat = 2;
    else stat = 3;
}

console.log(stat);