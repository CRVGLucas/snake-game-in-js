var canvas = document.getElementById('snake')
var context = canvas.getContext('2d')
var cobra = []
var box = 32

cobra[0] = {
    x: 8 * box,
    y: 8 * box
}

var direction = 'right'

function criarBackground() {
    context.fillRect( 0 , 0, 16 * box, 16 * box )
    context.fillStyle = 'lightgreen'
}

function criarCobra() {
    for( i = 0; i < snake.length; i++ ) {
        context.fillRect(snake[i].x, snake[i].y, box, box)
        context.fillStyle = 'green'
    }
}

function iniciarJogo() {
    criarBackground()
    criarCobra()

    let cobraX = cobra[0].x
    let cobraY = cobra[0].y

    if( direction == 'right' ) {
        cobraX += box
    } 
    if ( direction == 'left' ) {
        cobraX -= box
    }
    if( direction == 'up' ) {
        cobraY -= box
    }
    if( direction == 'down' ) {
        cobraY += box
    }
    cobra.pop()
    
    let novaCabeca = {
        x: cobraX,
        y: cobraY
    }

    cobra.unshift(novaCabeca)
}

let jogo = setInterval(iniciarJogo, 100)

