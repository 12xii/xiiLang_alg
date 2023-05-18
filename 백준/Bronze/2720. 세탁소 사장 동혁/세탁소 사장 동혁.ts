const input: string[] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const cases: number = Number(input[0]);

const quarter: number = 25, dime: number = 10,
    nickel: number = 5, penny: number = 1;

let arr: number[] = []

for (let i = 1; i <= cases; i++){
    let thisCase: number = Number(input[i]);

    arr.push((thisCase - (thisCase % quarter)) / quarter);
    thisCase = thisCase % quarter;
    arr.push((thisCase - (thisCase % dime)) / dime);
    thisCase = thisCase % dime;
    arr.push((thisCase - thisCase % nickel) / nickel);
    thisCase = thisCase % nickel;
    arr.push(thisCase / penny);
}

for (let i = 0; i < cases; i++){
    console.log(arr[i * 4], arr[i * 4 + 1], arr[i * 4 + 2], arr[i * 4 + 3]);
}