let userInput = { x: 0, y: 0 }
let lastUserInput = { x: 0, y: 0 }
window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastUserInput.y !== 0) break
            userInput = { x: 0, y: -1 }
            break
        case 'ArrowDown':
            if (lastUserInput.y !== 0) break
            userInput = { x: 0, y: 1 }
            break
        case 'ArrowLeft':
            if (lastUserInput.x !== 0) break
            userInput = { x: -1, y: 0 }
            break
        case 'ArrowRight':
            if (lastUserInput.x !== 0) break
            userInput = { x: 1, y: 0 }
            break
    }
})
export function getUserInput() {
    lastUserInput = userInput
    return userInput
}