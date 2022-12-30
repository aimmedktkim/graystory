// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const file = `5
0 2 4
1 6 1
2 4 4
3 8 10
4 5 200`;

const input = file.trim().split('\n');
const size = parseInt(input.shift());
const arr = input.map(e => e.split(' ').map(Number));
let result = arr[0][2];

const getResult = (array, x, time, price) => {
    console.log(array);

    while (array.length != 0) {
        x++;
        time++;

        const temp = array.shift();

        if (temp[0] === x && temp[1] === time) {
            price += temp[2];
        }

        // 최대값 판단
        if (price >= result) {
            result = price;
        }
    }
};

for (let i = 0; i < size - 1; i++) {
    const a = arr[i];
    getResult(arr.slice(i + 1), a[0], a[1], a[2]);
}

console.log(result);
