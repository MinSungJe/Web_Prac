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

// class Car {
//     model: string
//     price: number
//     constructor(model: string, price: number) {
//         this.model = model
//         this.price = price
//     }
//     tax(): number {
//         return this.price * 0.1
//     }
// }

// let car1 = new Car('소나타', 3000)
// console.log(car1) //콘솔창 출력결과는 { model : '소나타', price : 3000 }
// console.log(car1.tax()) //콘솔창 출력결과는 300

// class Word {
//     num: number[]
//     str: string[]
//     constructor(...para: (number|string)[]) {
//         this.num = []
//         this.str = []
//         para.map((element) => {
//             if (typeof element === 'number') this.num.push(element)
//             if (typeof element === 'string') this.str.push(element)
//         })
//     }
// }
// let obj = new Word('kim', 3, 5, 'park');
// console.log(obj.num) //[3,5]
// console.log(obj.str) //['kim', 'park']

// interface Square {
//     color: string,
//     width: number
// }
// let 네모: Square = { color: 'red', width: 100 }

// interface Student {
//     name: string
// }
// interface Teacher extends Student {
//     age: number
// }

// let 학생: Student = { name: 'Min' }
// let 선생: Teacher = { name: 'Min', age: 20 }

// type Animal = { name: string }
// type Cat = { age: number } & Animal

// interface Stuff {
//     brand: string,
//     serialNumber: number,
//     model: string[]
// }

// let 상품: Stuff = { brand : 'Samsung', serialNumber : 1360, model : ['TV', 'phone'] }

// interface Bag {
//     product: string,
//     price: number
// }
// interface UpgradeBag extends Bag {
//     card: boolean
// }

// interface 숙제4타입 {
//     plus: (a: number, b: number) => number,
//     minus: (a: number, b: number) => number
// }
// let 숙제4: 숙제4타입 = {
//     plus: (a, b) => {
//         return a+b
//     },
//     minus: (a, b) => {
//         return a-b
//     }
// }
// function 함수(...a: (number | string)[]) {
//     console.log(a)
// }
// 함수(1, 2, 3, 4, 5, 6, '히히')

// let 오브젝트 = {student: true, age: 20}

// function 함수({student, age}: {student: boolean, age: number}) {
//     console.log(student, age)
// }
// 함수(오브젝트)

// function 최댓값(...numbers: number[]): number {
//     let result = 0

//     numbers.forEach((num)=>{
//         if (num > result) result = num
//     })
//     return result
// }

// type UserType = {user: string, comment: number[], admin: boolean}

// function 함수2({user, comment, admin}: UserType): void {
//     console.log(user, comment, admin)
// }

// 함수2( { user : 'kim', comment : [3,5,4], admin : false } )

// function 함수3([a,b,c]: (number|string|boolean)[]) {
//     console.log(a, b, c)
// }

// 함수3( [40, 'wine', false, 1] )

// type Fish = {swim: string}
// type Bird = {fly: string}

// function 함수(animal: Fish|Bird) {
//     if ('swim' in animal) { // Fish라고 Narrowing 됨
//         let 변수 = animal.swim
//     }
// }

// let 날짜 = new Date()
// if (날짜 instanceof Date) {
//     // Date의 인스턴스일때 실행됨
// }

// type Car = {
//     wheel: '4개',
//     color: string
// }

// type Bike = {
//     wheel: '2개'
//     color: string
// }

// function 함수(x: Car|Bike) {
//     if (x.wheel === '4개') {
//         // 리터럴 타입을 이용해 Car타입만 통과되도록 Narrowing
//     }
// }

// class User {
//     name: string
//     familyName: string = 'Min'
//     constructor(name: string) {
//         this.name = name + this.familyName
//     }
// }
// let 유저1 = new User('SungJe')

// class Person {
//     constructor(public name: string) {
//     }
// }

// let 유저 = new Person('Min')
// console.log(유저)


// class User {
//     private static x = 10;
//     public static y = 20;

//     static addOne = (num: number) => {
//         User.x += num
//     }

//     static printX() {
//         console.log(User.x)
//     }
// }

// User.addOne(3) //이렇게 하면 x가 3 더해져야함
// User.addOne(4) //이렇게 하면 x가 4 더해져야함
// User.printX()  //이렇게 하면 콘솔창에 x값이 출력되어야함

// class Square {
//     x: number
//     y: number
//     color: string
//     constructor(x: number, y: number, color: string) {
//         this.x = x
//         this.y = y
//         this.color = color
//     }

//     draw(): void {
//         let canvas = document.getElementById('squareCanvas')
//         if (!(canvas instanceof HTMLCanvasElement)) return
//         let ctx = canvas.getContext('2d')
//         if (!(ctx instanceof CanvasRenderingContext2D)) return
//         ctx.fillStyle = this.color
//         ctx.fillRect(Math.random() * 400, Math.random() * 400, this.x, this.y)
//     }
// }

// let 네모 = new Square(30, 30, 'red');
// 네모.draw()
// 네모.draw()
// 네모.draw()
// 네모.draw()

// import {Car, Bike, 함수타입} from './a'

// let car1: Car = {
//     wheel: 4,
//     model: 'Audi'
// }

// let bike1: Bike = {
//     wheel: 2,
//     model: 'good'
// }

// let 함수: 함수타입 = (bike1) => {

// }

// namespace 네임스페이스 {
//     export type Dog = string;
// }
// interface Dog { name : string };

// let dog1 :네임스페이스.Dog = 'bark';
// let dog2 :Dog = { name : 'paw' }

// interface LengthCheck {
//     length: number
// }

// function 함수<MyType extends LengthCheck>(x: MyType) {
//     return x.length
// }

// let a = 함수<string[]>(['100'])

// interface LengthCheck {
//     length: number
// }

// function 함수<T extends LengthCheck>(a: T) {
//     return a.length
// }
// console.log(함수<string>('hello'))
// console.log(함수<string[]>(['kim', 'park']))

// interface Animal {
//     name: string;
//     age: number
// }

// function 함수2<T>(data: string): T {
//     return JSON.parse(data)
// }

// let data = '{"name" : "dog", "age" : 1 }'

// class Person<T> {
//     name: T;
//     constructor(a) {
//         this.name = a;
//     }
// }
// let a = new Person<string>('어쩌구');
// let b = a.name

// function 함수(...x: [number, string]) {

// }
// 함수(1, '2')

// let 최근에먹은음식: [string, number, boolean] = ['햄버거', 10000, true]
// let arr: [string, number, ...boolean[]] = ['동서녹차', 4000, true, false, true, true, false, true]
// type 함수파라미터용 = [string, boolean, ...(number|string)[]]
// function 함수(...x: 함수파라미터용){
//     console.log(x)
// }
// 함수('안녕', true, 10, '안녕', '히히')

// function 분류기(...x: [...(string|number)[]]): [string[], number[]] {
//     let strings: string[] = []
//     let numbers: number[] = []

//     x.forEach((a)=>{
//         if (typeof a === 'string') strings.push(a)
//         if (typeof a === 'number') numbers.push(a)
//     })

//     return [strings, numbers]
// }
// console.log(a + 1)

// import { Age } from "./test";

// let age: Age

// interface CarType {
//     model : string,
//     tax : (price :number) => number;
// }

// class Car implements CarType {
//     model;   ///any 타입됨
//     tax (a){   ///a 파라미터는 any 타입됨 
//         return a * 0.1
//     }
// }
// interface MyType {
//     'font-size': MyType | number
// }

// let css: MyType = {
//     'font-size': {
//         'font-size': {
//             'font-size': 14
//         }
//     }
// }

// interface 숙제1타입 {
//     [key:string] : string|number
// }

// let obj: 숙제1타입 = {
//     model: 'k5',
//     brand: 'kia',
//     price: 6000,
//     year: 2030,
//     date: '6월',
//     percent: '5%',
//     dealer: '김차장',
// }

// interface 숙제2타입 {
//     'font-size': number
//     [key: string]: 숙제2타입 | number
// }

// let obj2: 숙제2타입 = {
//     'font-size' : 10,
//     'secondary' : {
//       'font-size' : 12,
//       'third' : {
//         'font-size' : 14
//       }
//     }
//   }

// interface Person {
//     [key: string]: number
// }

// let obj = {name: 'Min', age: 25}
// Object.keys(obj)

// type PersonKeys = keyof Person
// let k: PersonKeys = 'age'

// type Car = {
//     color: boolean,
//     model: boolean,
//     price: boolean|number
// }

// type TypeChanger<MyType> = {
//     [key in keyof MyType]: string|number
// }

// type 새로운타입 = TypeChanger<Car>

// type Bus = {
//     color: string,
//     model: boolean,
//     price: number
// }

// type 숙제1Changer<T, name> = {
//     [key in keyof T]: name
// }

// type NewType = 숙제1Changer<Bus, number>

type Age<T> = T extends [string, ...any] ? string : unknown
let age1: Age<[string, number]>;
let age2: Age<[boolean, number]>; 

type 타입뽑기<T> = T extends ((x: infer R) => void) ? R : unknown
let type1: 타입뽑기<(x :number) => void> //이러면 number가 이 자리에 남음
let type2: 타입뽑기<(x :string) => void> //이러면 string이 이 자리에 남음