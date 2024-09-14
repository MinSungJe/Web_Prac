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
// type cutZeroType = (a: string) => string
// let cutZero: cutZeroType = (letter) => {
//     let result = letter.replace(/^0+/, "");
//     return result
// }
// console.log(cutZero('00안녕'))
// console.log(cutZero('안녕'))
// type removeDashType = (a: string) => number
// let removeDash: removeDashType = (letter) => {
//     let result = letter.replace(/-/g, "");
//     return parseFloat(result)
// }
// console.log(removeDash('010-5029-4914'))
// type 숙제3타입 = (a: string, b: cutZeroType, c: removeDashType) => void
// let 숙제3: 숙제3타입 = (letter, cutZero, removeDash) => {
//     let result = removeDash(cutZero(letter))
//     console.log(result)
// }
// 숙제3('010-1111-2222', cutZero, removeDash)
// let 제목 = document.querySelector('#title')
// if (제목?.innerHTML != undefined) {
//     제목.innerHTML = '진짜 연습장임'
// }
// let 링크 = document.querySelector('.link')
// if (링크 instanceof HTMLAnchorElement) {
//     링크.href = 'https://kakao.com'
// }
// let 버튼 = document.querySelector('#button')
// 버튼?.addEventListener('click', () => {
// })
// let 이미지 = document.querySelector('#image')
// if (이미지 instanceof HTMLImageElement) {
//     이미지.src = 'new.jpg'
// }
// let 링크들 = document.querySelectorAll('.naver')
// 링크들.forEach((a)=>{
//     if (a instanceof HTMLAnchorElement) {
//         a.href = 'https://kakao.com'
//     }
// })
// class Person {
//     data: number = 0 // 필드 타입 지정 가능
//     name: string; // 필드값에 미리 선언해둬야 constructor 사용 가능
//     constructor(파라미터: string) { // 파라미터에도 타입지정 가능
//         this.name = 파라미터
//     }
//     함수(a: string): void {
//         console.log('프로토타입 함수임: '+a)
//     }
// }
// let 사람1 = new Person('Min')
// let 사람2 = new Person('Sung')
// 사람1.함수('테스트')
var Car = /** @class */ (function () {
    function Car(model, price) {
        this.model = model;
        this.price = price;
    }
    Car.prototype.tax = function () {
        return this.price * 0.1;
    };
    return Car;
}());
var car1 = new Car('소나타', 3000);
console.log(car1); //콘솔창 출력결과는 { model : '소나타', price : 3000 }
console.log(car1.tax()); //콘솔창 출력결과는 300
var Word = /** @class */ (function () {
    function Word() {
        var para = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            para[_i] = arguments[_i];
        }
        var _this = this;
        this.num = [];
        this.str = [];
        para.map(function (element) {
            if (typeof element === 'number')
                _this.num.push(element);
            if (typeof element === 'string')
                _this.str.push(element);
        });
    }
    return Word;
}());
var obj = new Word('kim', 3, 5, 'park');
console.log(obj.num); //[3,5]
console.log(obj.str); //['kim', 'park']
