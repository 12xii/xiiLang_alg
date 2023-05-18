const input: number = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

let stat: number = 0;

if (!(input % 4)) {
    if (!(input % 100)) {
        if (!(input % 400)) stat = 1;
    }
    else stat = 1;
}

console.log(stat);