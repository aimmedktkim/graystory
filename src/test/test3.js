// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const file = `5
0 2 4
1 6 1
2 4 4
3 8 10
4 5 2`

const input = file.trim().split('\n');
const size = parseInt(input.shift())
const arr = input.map(e => e.split(' ').map(Number))
let result = arr[0][2]


while (arr.length != 0) {

    const [x, time, price] = arr[0]
    const indexArr = [0]
    const arrSize = arr.length

    for (let i = 1; i < arrSize; i++) {

        const temp = arr[i]
        if (temp[0] === x && temp[1] === time) {
            price += temp[2]
            indexArr.push(temp)
        }

    }

    for (value of indexArr) {
        const index = arr.indexOf(value);
        if (index > -1) { // only splice array when item is found
            arr.splice(index, 1); // 2nd parameter means remove one item only
        }
    }

    // 최대값 판단
    if (price >= result) {
        result = price
    }

    console.log(arr)

}

console.log(result)