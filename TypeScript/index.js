// function 숙제1(x?: string): void {
//     if (x) console.log('안녕하세요', x)
//     else console.log('이름이 없습니다')
// }
var cutZero = function (letter) {
    var result = letter.replace(/^0+/, "");
    return result;
};
console.log(cutZero('00안녕'));
console.log(cutZero('안녕'));
var removeDash = function (letter) {
    var result = letter.replace(/-/g, "");
    return parseFloat(result);
};
console.log(removeDash('010-5029-4914'));
var 숙제3 = function (letter, cutZero, removeDash) {
    var result = removeDash(cutZero(letter));
    console.log(result);
};
숙제3('010-1111-2222', cutZero, removeDash);
