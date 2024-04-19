var 출석부 = ['흥민', '영희', '철수', '재석'];

function 이름찾기(name) {
    let idx = 출석부.findIndex((a)=> a == name)

    if (idx != -1) console.log('있어요')
}

function 구구단() {
    for (let i=2;i<10;i++) {
        for (let j=1;j<10;j++) {
            console.log(i*j)
        }
    }
}

function 함수(arr, score) {
    let temp = 0
    for (let i=0;i<arr.length;i++) {
        temp += arr[i]
    }

    let average = temp / arr.length

    if (score >= average) console.log(`평균보다 ${score-average}점이 올랐네요`)
    else console.log(`평균보다 ${average-score}점이 떨어졌네요 재수추천`)
}   