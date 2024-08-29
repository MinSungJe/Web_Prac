function 숙제1(x) {
    if (x)
        console.log('안녕하세요', x);
    else
        console.log('이름이 없습니다');
}
function 숙제2(x) {
    return x.toString().length;
}
function 숙제3(money, house, charm) {
    var score = 0;
    score += money;
    if (house)
        score += 500;
    if (charm == '상')
        score += 100;
    if (score >= 600)
        return '결혼가능';
}
