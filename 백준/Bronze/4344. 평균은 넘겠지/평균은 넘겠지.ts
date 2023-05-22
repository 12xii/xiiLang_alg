const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const cases: number = Number(input[0]);
let str: string = '';

for (let i: number = 1; i <= cases; i++) {
    const students: number = Number(input[i].split(' ')[0]);
    const exam: string[] = input[i].split(' ');
    let total: number = 0, avg: number = 0, count: number = 0;

    for (let j: number = 1; j <= students; j++){
        total += Number(exam[j]);
    }

    avg = total / students;

    for (let j: number = 1; j <= students; j++){
        if (Number(exam[j]) > avg) {
            count++;
        }
    }

    str += (count / students * 100).toFixed(3).toString() + '%\n';
}

console.log(str)