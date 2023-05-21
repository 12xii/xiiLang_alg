const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const cases: number = Number(input[0]);

let str: string = '';

for (let i: number = 1; i <= cases; i++){
    const thisLength: number = Number(input[i].split(' ')[0]);
    const thisList: string[] = input[i].split(' ')[1].split('');

    for (let j: number = 0; j < thisList.length; j++){
        for (let k: number = 0; k < thisLength; k++) str += thisList[j]
    }

    str += '\n';
}

console.log(str);