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
function 클리닝함수(arr) {
    var result = [];
    arr.forEach(function (a) {
        if (typeof a === 'string') {
            result.push(parseInt(a));
        }
        else {
            result.push(a);
        }
    });
    return result;
}
console.log(클리닝함수(['1', 2, '3']));
var 철수쌤 = { subject: 'math' };
var 영희쌤 = { subject: ['science', 'english'] };
var 민수쌤 = { subject: ['science', 'art', 'korean'] };
function 만들함수(subject) {
    if (typeof subject.subject === 'string') {
        return subject.subject;
    }
    else {
        return subject.subject[subject.subject.length - 1];
    }
}
console.log(만들함수({ subject: 'math' })); //이 경우 'math'를 return
console.log(만들함수({ subject: ['science', 'art', 'korean'] })); //이 경우 'korean'을 return
