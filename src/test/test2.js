console.time('26247')
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const file = `5
0 2 4
1 6 1
2 4 4
3 8 10
4 5 200`


const input = file.trim().split('\n');
const size = parseInt(input.shift())
const arr = input.map(e => e.split(' ').map(Number))
let result = arr[0][2]
const checkSet = new Set()
let index = 0

while (checkSet.size < size) {

    if (!checkSet.has(index)) {
        // 초기값 설정
        let [x, time, price] = arr[index]
        checkSet.add(index)

        for (let j = index + 1; j < size; j++) {

            // 시간증가
            time++
            x++

            if (!checkSet.has(j)) {
                const [tempX, tempTime, tempPrice] = arr[j]
                if (tempX === x && tempTime === time) {
                    price += tempPrice
                    checkSet.add(j)
                }
            }

            // 최대값 판단
            if (price >= result) {
                result = price
            }
        }
    }

    index++
}

console.log(result)
console.timeEnd('26247')