// function 숙제1(x?: string): void {
//     if (x) console.log('안녕하세요', x)
//     else console.log('이름이 없습니다')
// }
function 함수(a) {
    return a.length;
}
console.log(함수('hello'));
console.log(함수(['kim', 'park']));
function 함수2(data) {
    return JSON.parse(data);
}
var data = '{"name" : "dog", "age" : 1 }';
var Person = /** @class */ (function () {
    function Person(a) {
        this.name = a;
    }
    return Person;
}());
var a = new Person('어쩌구');
var b = a.name;
