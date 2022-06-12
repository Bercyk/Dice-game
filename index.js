const diceOneEl = document.getElementById("dice1")
const diceTwoEl = document.getElementById("dice2")
const rollDiceBtn = document.getElementById("rollDice")
const messageEl = document.getElementById("message")
const player1ScoreEl = document.getElementById("player1Score")
const player2ScoreEl = document.getElementById("player2Score")
const player1ScoreHistoryEl = document.getElementById("player1ScoreHistory")
const player2ScoreHistoryEl = document.getElementById("player2ScoreHistory")

const maxScore = 15;

let playerOneScore = 0
let playerTwoScore = 0
let isPlayerOneTurn = true
let isLastGame = false


rollDiceBtn.addEventListener("click", rollDice)

function rollDice() {
    console.log("playerOneScore " + playerOneScore + " " + "playerTwoScore " + playerTwoScore)
   
    if(playerOneScore >= maxScore) {
        if(isPlayerOneTurn) {
            messageEl.textContent = "Player ONE has won!"
            console.log(playerOneScore, playerTwoScore)
        }
        else{
            
            isLastGame = true
            countValues()
        }
    }
    else if(playerTwoScore >= maxScore){
        messageEl.textContent = "Player TWO has won!"
        console.log(playerOneScore, playerTwoScore)
    }
    else{
        countValues()
        if(playerOneScore>=maxScore){
            messageEl.textContent = "Player TWO last throw!"
        }
    }
    console.log("playerOneScore post " + playerOneScore + " " + "playerTwoScore post " + playerTwoScore)

}

function countValues(){
    const diceOneValue = Math.floor(Math.random() * 6 ) + 1
    const diceTwoValue = Math.floor(Math.random() * 6 ) + 1
    
    resetDicePosition()
    spinDice()
    diceOneEl.addEventListener("animationend",()=>{
        resetDicePosition()
        getDiceValue(diceOneValue, diceTwoValue)
    },{once: true})
    resetDicePosition()
    savePlayerScore(diceOneValue, diceTwoValue)
}


function savePlayerScore(diceOne, diceTwo){
    if(isPlayerOneTurn){
        playerOneScore += diceOne + diceTwo
        player1ScoreEl.textContent = playerOneScore
        player1ScoreHistoryEl.textContent += " (" + diceOne + " " + diceTwo+") +"
        console.log(isLastGame)
        if(!isLastGame){
        messageEl.textContent = "Player Two turn!"
        }
    }
    else{
        playerTwoScore += diceOne + diceTwo
        player2ScoreEl.innerHTML = playerTwoScore
        player2ScoreHistoryEl.textContent +=" (" + diceOne + " " + diceTwo+") +"

        messageEl.textContent = "Player One turn!"
        
    }

    isPlayerOneTurn = !isPlayerOneTurn
}

function spinDice(){
    diceOneEl.classList.add("is-spinning")
    diceTwoEl.classList.add("is-spinning")
}

function getDiceValue(diceOne, diceTwo){
    
    switch (diceOne) {
        case 1:
            diceOneEl.classList.add("is-one")
            break
        case 2:
            diceOneEl.classList.add("is-two")
            break
        case 3:
            diceOneEl.classList.add("is-three")
            break
        case 4:
            diceOneEl.classList.add("is-four")
            break
        case 5:
            diceOneEl.classList.add("is-five")
            break
        case 6:
            diceOneEl.classList.add("is-six")
            break
    }
    switch (diceTwo) {
        case 1:
            diceTwoEl.classList.add("is-one")
            break
        case 2:
            diceTwoEl.classList.add("is-two")
            break
        case 3:
            diceTwoEl.classList.add("is-three")
            break
        case 4:
            diceTwoEl.classList.add("is-four")
            break
        case 5:
            diceTwoEl.classList.add("is-five")
            break
        case 6:
            diceTwoEl.classList.add("is-six")
            break
    }
}

function resetDicePosition() {
    diceOneEl.classList = ""
    diceOneEl.classList.add("dice")
    diceTwoEl.classList = ""
    diceTwoEl.classList.add("dice")
}

function restoreDicePosition() {
    diceOneEl.classList.add("iso-a")
    diceTwoEl.classList.add("iso-b")
}