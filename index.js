var canvas = document.getElementById('snake')
var context = canvas.getContext('2d')
var box = 32
var snake = []
snake[0] = {
    x: 8 * box,
    y: 8 * box
}

function criarBackground() {
    context.fillStyle = 'lightgreen'
    context.fillRect( 0 , 0, 16 * box, 16 * box )
}

function criarCobra() {
    for(i = 0; i < snake.length; i++) {
        context.fillStyle = 'green'
        context.fillRect(snake[i].x, snake[i].y, box, box)
    }
}

criarBackground()
criarCobra()