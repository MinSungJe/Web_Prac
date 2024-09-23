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
    }
}

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
    }
}

var timer = 0
var cactusArray = []

function 프레임마다실행할거() {
    requestAnimationFrame(프레임마다실행할거)
    timer++

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (timer % 120 === 0) {
        var cactus = new Cactus()
        cactusArray.push(cactus)
    }

    cactusArray.forEach((cactus)=>{
        cactus.draw()
    })
    dino.draw()
}

프레임마다실행할거()