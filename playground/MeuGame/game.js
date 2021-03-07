export default function createGame() {

    const objetos = {
        players:{},
        fruits: {},
        screen: {
            height: 550,
            width: 1300
        }
                 
    }
    
    function addPlayer(command) {
        const playerId = command.playerId
        const playerx = command.playerx
        const playery = command.playery

        objetos.players[playerId] = {
            x: playerx,
            y: playery
        }
    }

    function deletePlayer(command) {
        const playerId = command.playerId

        delete objetos.players[playerId]
    }

    function addFruits(command) {
        const fruitId = command.fruitId
        const fruitx = command.fruitx
        const fruity = command.fruity

        objetos.fruits[fruitId] = {
            x: fruitx,
            y: fruity
        }
    }

    function deletefruit(command) {
        const fruitId = command.fruitId

        delete objetos.fruits[fruitId]
    }

    function movePlayer(command) {
                
        const acceptMove = {
            ArrowUp(player) {
                if (player.y > 0) {
                    player.y = player.y - 10
                    return
                }
            },
            ArrowDown(player) {
                if (player.y < objetos.screen.height - 10){
                    player.y = player.y + 10
                    return
                }
            },
            ArrowLeft(player) {
                if (player.x > 0) {
                    player.x = player.x - 10
                    return
                }
            },
            ArrowRight(player) {
                if (player.x < objetos.screen.width - 10) {
                    player.x = player.x + 10
                    return
                }
            }
        }

        const keyPressed = command.teclado
        const player = objetos.players[command.playerId]
        const moveFunction = acceptMove[keyPressed]

        if(player && moveFunction){
            moveFunction(player)
            checkForFruitsColision()
        }
        
    }

    function checkForFruitsColision() {
        for(const playerId in objetos.players){
            const player = objetos.players[playerId]
            
            for(const fruitId in objetos.fruits) {
                const fruit = objetos.fruits[fruitId]
                console.log(`Cheking ${playerId} and ${fruitId}`)

                if(player.x === fruit.x && player.y === fruit.y){
                    console.log(`Colision by ${playerId} and ${fruitId}`)
                    deletefruit({fruitId: fruitId})
                }
            }
        }
    }

    return {
        movePlayer,
        objetos,
        addPlayer,
        deletePlayer,
        addFruits,
        deletefruit
    }
}
