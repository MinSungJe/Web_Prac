var canvas = document.getElementById('canvas')
var ctx = canvas.getContext('2d')

canvas.width = window.innerWidth - 100
canvas.height = window.innerHeight - 100

var dino = {
    x: 10,
    y: 120,
    width: 50,
    height: 50,
    draw() {
        ctx.fillStyle = 'green'
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(img2, this.x, this.y)
    }
}

var img1 = new Image()
img1.src = 'cactus.png'
var img2 = new Image()
img2.src = 'dinosaur.png'

class Cactus {
    constructor() {
        this.x = 500
        this.y = 120
        this.width = 50
        this.height = 50
    }
    draw() {
        ctx.fillStyle = 'red'
        ctx.fillRect(this.x, this.y, this.width, this.height)
        ctx.drawImage(img1, this.x, this.y)
    }
}

var timer = 0
var cactusArray = []
var 점프timer = 0
var animation

function 프레임마다실행할거() {
    animation = requestAnimationFrame(프레임마다실행할거)
    timer++

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (timer % 240 === 0) {
        var cactus = new Cactus()
        cactusArray.push(cactus)
    }

    cactusArray.forEach((element, i, o)=>{
        // x좌표가 0 미만이면 제거
        if (element.x < 0) {
            o.splice(i, 1)
        }
        

        충돌하냐(dino, element)

        element.x--
        element.draw()
    })
    if (점프중 == false) {
        if (dino.y < 120) {
            dino.y++
        }
    }
    if (점프중 == true) {
        dino.y--
        점프timer++
    }
    if (점프timer > 100) {
        점프중 = false
        점프timer = 0
    }    
    dino.draw()
}

프레임마다실행할거()

// 충돌 확인
function 충돌하냐(dino, cactus) {
    var xGap = cactus.x - (dino.x+dino.width)
    var yGap = cactus.y - (dino.y+dino.height)
    if (xGap < 0 && yGap < 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        cancelAnimationFrame(animation)

    }
}


var 점프중 = false
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        점프중 = true
    }
})