const input: number = Number(require('fs').readFileSync('/dev/stdin').toString().trim());

let str: string = ''

for (let i: number = 0; i < input; i++){
    for (let j: number = input - 1; j > i; j--){
        str += ' ';
    }
    for (let j: number = 0; j < i * 2 + 1; j++){
        str += '*';
    }
    str += '\n';
}
for (let i: number = input - 1; i > 0; i--){
    for (let j: number = i; j < input; j++){
        str += ' ';
    }
    for (let j: number = i * 2 - 1; j > 0; j--){
        str += '*';
    }
    str += '\n';
}

console.log(str);