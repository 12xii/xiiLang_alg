const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

let total: number = 2 * input.length;

for (let i: number = 0; i < input.length; i++){
    if (input[i].charCodeAt(0) >= 65 && input[i].charCodeAt(0) <= 67) total += 1;
    else if (input[i].charCodeAt(0) >= 68 && input[i].charCodeAt(0) <= 70) total += 2;
    else if (input[i].charCodeAt(0) >= 71 && input[i].charCodeAt(0) <= 73) total += 3;
    else if (input[i].charCodeAt(0) >= 74 && input[i].charCodeAt(0) <= 76) total += 4;
    else if (input[i].charCodeAt(0) >= 77 && input[i].charCodeAt(0) <= 79) total += 5;
    else if (input[i].charCodeAt(0) >= 80 && input[i].charCodeAt(0) <= 83) total += 6;
    else if (input[i].charCodeAt(0) >= 84 && input[i].charCodeAt(0) <= 86) total += 7;
    else if (input[i].charCodeAt(0) >= 87 && input[i].charCodeAt(0) <= 90) total += 8;
}

console.log(total);