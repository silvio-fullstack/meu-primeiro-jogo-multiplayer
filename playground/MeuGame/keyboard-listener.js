export default function createKeyboardLitener(){
            document.addEventListener('keydown', handleKeydown)

            const state = {
                observers: []
            }

            function subscribe(observerFunction){
                state.observers.push(observerFunction)
            }

            function notifyAll(command){
                console.log(`Notifying ${state.observers.length} observers`)
                for(const observerFunction of state.observers){
                    observerFunction(command)
                }
            }

            function handleKeydown(event) {
                const teclado = event.key
                const command = {
                    playerId: 'player1',
                    teclado
                }

                notifyAll(command)
            }

            return {
                subscribe
            }
        }