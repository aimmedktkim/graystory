// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const file = `8
1 1
2 1
1 1
4 1
3 0
5 1
4 0
1 0`;

const input = file.trim().split('\n');
const size = parseInt(input.shift());
const arr = input.map(e => e.split(' ').map(Number));
let result = 0;
const map = new Map();

for (value of arr) {
    const number = value[0];
    const check = value[1] === 0 ? -1 : value[1];
    if (map.has(number)) {
        map.set(number, map.get(number) + check);
    } else {
        map.set(number, check);
}

for (value of map) {
    if (value[1] !== 0) {
        result += Math.abs(value[1]);
    }
}

console.log(result);
