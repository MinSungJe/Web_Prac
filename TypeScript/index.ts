// function 숙제1(x?: string): void {
//     if (x) console.log('안녕하세요', x)
//     else console.log('이름이 없습니다')
// }

// function 숙제2(x: number|string): number {
//     return x.toString().length
// }

// function 숙제3(money: number, house: boolean, charm: string): string|void {
//     let score: number = 0
//     score += money
//     if (house) score += 500
//     if (charm == '상') score += 100

//     if (score >= 600) return '결혼가능'
// }

// function 클리닝함수(arr: (number|string)[]): number[] {
//     let result: number[] = []
//     arr.forEach((a) => {
//         if (typeof a === 'string') {
//             result.push(parseInt(a))
//         } else {
//             result.push(a)
//         }
//     })

//     return result
// }

// console.log(클리닝함수(['1', 2, '3']))

// let 철수쌤 = { subject : 'math' }
// let 영희쌤 = { subject : ['science', 'english'] }
// let 민수쌤 = { subject : ['science', 'art', 'korean'] }

// function 만들함수(subject: {subject:string|string[]}) {
//     if (typeof subject.subject === 'string') {
//         return subject.subject
//     } else {
//         return subject.subject[subject.subject.length-1]
//     }
// }

// console.log(만들함수( { subject : 'math' }))  //이 경우 'math'를 return
// console.log(만들함수( { subject : ['science', 'art', 'korean'] })) //이 경우 'korean'을 return

// type 숙제2 = {
//     color?: string,
//     size: number,
//     readonly position: number[]
// }

// type 숙제3 = {
//     name: string,
//     phone: number,
//     email?: string
// }

// type 숙제3_5 = {
//     adult: boolean
// }

// type 숙제4 = 숙제3 & 숙제3_5

// let 회원가입정보 :숙제4 = {
//     name : 'kim',
//     adult : false,
//     phone : 1234
//   }

// type 가위바위보 = '가위'|'바위'|'보'
// function 함수(a: 가위바위보): 가위바위보[] {
//     return ['가위', '가위', '보']
// }

// var 자료 = {
//     name: 'Min'
// } as const
// function 내함수(a: 'Min') {

// }
// 내함수(자료.name)

// type 회원정보타입 = {
//     name: string,
//     age: number,
//     plusOne: (x: number) => number,
//     changeName: () => void
// }


// let 회원정보: 회원정보타입 = {
//     name: 'kim',
//     age: 30,
//     plusOne(x) {
//         return x + 1
//     },
//     changeName: () => {
//         console.log('안녕')
//     }
// }

type cutZeroType = (a: string) => string

let cutZero: cutZeroType = (letter) => {
    let result = letter.replace(/^0+/, "");
    return result
}

console.log(cutZero('00안녕'))
console.log(cutZero('안녕'))

type removeDashType = (a: string) => number

let removeDash: removeDashType = (letter) => {
    let result = letter.replace(/-/g, "");
    return parseFloat(result)
}

console.log(removeDash('010-5029-4914'))

type 숙제3타입 = (a: string, b: cutZeroType, c: removeDashType) => void

let 숙제3: 숙제3타입 = (letter, cutZero, removeDash) => {
    let result = removeDash(cutZero(letter))
    console.log(result)
}

숙제3('010-1111-2222', cutZero, removeDash)