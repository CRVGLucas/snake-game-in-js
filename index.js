var canvas = document.getElementById('snake')
var context = canvas.getContext('2d')
var cobra = []
var box = 32

cobra[0] = {
    x: 8 * box,
    y: 8 * box
}

var direction = 'right'
var food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBackground() {
    context.fillStyle = 'lightgreen'
    context.fillRect( 0 , 0, 16 * box, 16 * box )
}

function criarCobra() {
    for(var i = 0; i < cobra.length; i++ ) {
        context.fillStyle = 'green'
        context.fillRect(cobra[i].x, cobra[i].y, box, box)
    }
}

function drawFood() {
    context.fillStyle = 'red'
    context.fillRect(food.x, food.y, box, box)
}

document.addEventListener('keydown', update)

function update( event ) {
    if( event.keyCode == 37 && direction !== 'right') {
        direction = 'left'
    }

    if( event.keyCode == 38 && direction !== 'down') {
        direction = 'up'
    }

    if( event.keyCode == 39 && direction !== 'left') {
        direction = 'right'
    } 

    if( event.keyCode == 40 && direction !== 'up') {
        direction = 'down'
    }
}

function iniciarJogo() {
    for (var i = 1; i < cobra.length; i++) {
        if ( cobra[0].x == cobra[i].x && cobra[0].y == cobra[i].y) {
            clearInterval(jogo)
            alert('Game over :c')
        }
    }
    
    if( cobra[0].x > 15 * box && direction == 'right') {
        cobra[0].x = 0
    }

    if( cobra[0].x < 0 && direction == 'left') {
        cobra[0].x = 16 * box
    }

    if( cobra[0].y > 15 * box && direction == 'down' ) {
        cobra[0].y = 0
    }

    if( cobra[0].y < 0 && direction == 'up' ) {
        cobra[0].y = 16 * box
    }

    criarBackground()
    criarCobra()
    drawFood()

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

    if (cobraX !== food.x || cobraY !== food.y) {
        cobra.pop()
    } else {
        food.x = Math.floor(Math.random() * 15 + 1) * box,
        food.y = Math.floor(Math.random() * 15 + 1) * box
    }

    
    let novaCabeca = {
        x: cobraX,
        y: cobraY
    }

    cobra.unshift(novaCabeca)
}

var jogo = setInterval(iniciarJogo, 100)

