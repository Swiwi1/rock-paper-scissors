const rockEl = document.getElementById("rock-el")
const paperEl = document.getElementById("paper-el")
const scissorsEl = document.getElementById("scissors-el")
let messageEl = document.getElementById("message-el")

let message = ""


rockEl.addEventListener("click", function rockGame(){
    let randomNum = Math.floor( Math.random()*3 ) + 1
    if (randomNum === 1) {
        message = "Your Opponent Picked Rock! Its a Draw!"
    } else if (randomNum === 2) {
        message = "Your Opponent Picked Paper! You Lose"
    } else {
        message = "Your Opponent Picked Scissors! You Win!!"
    }
    messageEl.textContent = message
})

paperEl.addEventListener("click", function paperGame(){
    let randomNum = Math.floor( Math.random()*3 ) + 1
    if (randomNum === 1) {
        message = "Your Opponent Picked Rock! You Win!!"
    } else if (randomNum === 2) {
        message = "Your Opponent Picked Paper! Its a Draw!"
    } else {
        message = "Your Opponent Picked Scissors! You Lose"
    }
    messageEl.textContent = message
})

scissorsEl.addEventListener("click", function scissorsGame(){
    let randomNum = Math.floor( Math.random()*3 ) + 1
    if (randomNum === 1) {
        message = "Your Opponent Picked Rock! You Lose"
    } else if (randomNum === 2) {
        message = "Your Opponent Picked Paper! You Win!!"
    } else {
        message = "Your Opponent Picked Scissors! Its a Draw!"
    }
    messageEl.textContent = message
})


