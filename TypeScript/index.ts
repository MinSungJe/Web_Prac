function 숙제1(x?: string): void {
    if (x) console.log('안녕하세요', x)
    else console.log('이름이 없습니다')
}

function 숙제2(x: number|string): number {
    return x.toString().length
}

function 숙제3(money: number, house: boolean, charm: string): string|void {
    let score: number = 0
    score += money
    if (house) score += 500
    if (charm == '상') score += 100

    if (score >= 600) return '결혼가능'
}