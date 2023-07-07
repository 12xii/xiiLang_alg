const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const list: string[] = input[1].split(' ');
list.sort((x: string, y: string): number => Number(x) - Number(y))

if (Number(input[0]) % 2) {
    console.log(Number(list[(list.length - 1) / 2]) ** 2)
}

else console.log(Number(list[0]) * Number(list[list.length - 1]))