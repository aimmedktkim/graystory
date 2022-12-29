// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const file = `5
0 2 4
1 6 1
2 4 4
3 8 10
4 5 2`;

const input = file.trim().split('\n');
const size = input.shift();
const arr = input.map(e => e.split(' ').map(Number));
let result = 0;
let maxTime = 0;
const checkSet = new Set();

// 맥스 시간 구하기
for (value of arr) {
    if (value[1] >= maxTime) {
        maxTime = value[1];
    }
}

for (let i = 0; i < size; i++) {
    // 가격 설정
    let price = arr[i][2];

    // 시간 설정
    let time = arr[i][1];

    // 좌표 설정
    let x = arr[i][0];

    // 셋 설정
    checkSet.add(i);

    if (size === 1) {
        result = price;
        break;
    }

    while (time <= maxTime) {
        // 시간증가
        time++;
        x++;

        // 시간이 증가할때마다 맞는 조건이 있는지 탐색하기
        for (let j = i + 1; j < size; j++) {
            if (!checkSet.has(j)) {
                const temp = arr[j];
                if (temp[0] === x && temp[1] === time) {
                    price += temp[2];
                    checkSet.add(j);
                }
            }
        }

        // 최대값 판단
        if (price >= result) {
            result = price;
        }
    }
}

console.log(result);
