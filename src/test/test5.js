// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const file = `5
0 2 4
1 6 1
2 4 4
3 8 10
4 5 2`

const input = file.trim().split('\n');
const size = parseInt(input.shift())
const arr = input.map(e => e.split(' ').map(Number)).map(e => { e[1] = e[1] - e[0]; return e })
let result = 0
const checkSet = new Set()
let index = 0

while (index < size) {

    while (checkSet.has(index)) {
        index++
    }

    // 초기값 설정
    let [_, time, price] = arr[index]
    checkSet.add(index)

    for (let j = index; j < size; j++) {

        if (checkSet.has(j)) {
            continue;
        }

        const [_, t, p] = arr[j]

        if (time <= t) {
            price += p
            time = t
            checkSet.add(j)
        }

        // 최대값 판단
        if (price >= result) {
            result = price
        }
    }
    index++
}

console.log(result)
