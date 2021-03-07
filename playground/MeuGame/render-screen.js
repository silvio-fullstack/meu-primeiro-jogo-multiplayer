export default function renderizar(screen, game, requestAnimationFrame) {

    const context = screen.getContext('2d')
    context.fillStyle = 'white'
    context.clearRect(0, 0, 1300, 550)

    for(const playersId in game.objetos.players){
        const player = game.objetos.players[playersId]
        context.fillStyle = 'black'
        context.fillRect(player.x, player.y, 10, 10)
    }

    for(const fruitsId in game.objetos.fruits) {
        const fruit = game.objetos.fruits[fruitsId]
        context.fillStyle = 'red'
        context.fillRect(fruit.x, fruit.y, 10, 10)
    }

    requestAnimationFrame(() => {
        renderizar(screen, game, requestAnimationFrame)
    })
}