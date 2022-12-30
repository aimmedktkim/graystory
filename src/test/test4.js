// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const file = `5
0 2 4
1 6 1
2 4 4
3 8 10
4 5 2`;

const input = file.trim().split('\n');
const size = parseInt(input.shift());
const arr = input.map(e => e.split(' ').map(Number));
const m = new Map();

for (let i = 0; i < size; i++) {
    const temp = arr[i];
    const check = temp[0];
    arr[i] = [temp[0] - check, temp[1] - check, temp[2]];
    const key = arr[i][1];
    const value = arr[i][2];
    if (m.has(key)) {
        m.set(key, m.get(key) + value);
    } else {
        m.set(key, value);
    }
}

console.log(Math.max(...[...m.values()]));
