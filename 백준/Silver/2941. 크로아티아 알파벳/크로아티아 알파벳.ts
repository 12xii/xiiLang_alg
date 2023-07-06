const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

let leng = input.length;

for (let i = 0; i < input.length; i++) {
    if (input[i] == 'c') {
        if (input[i + 1] == '=' || input[i+1] == '-') leng--;
    }
    if (input[i] == 'd') {
        if (input[i + 1] == '-') leng--;
        if (input[i + 1] == 'z' && input[i + 2] == '=') leng--;
    }
    if (input[i] == 'j') {
        if (input[i - 1] == 'l' || input[i - 1] == 'n') leng--;
    }
    if (input[i] == '=') {
        if (input[i - 1] == 's' || input[i - 1] == 'z') leng--;
    }
}

console.log(leng);