const rock = document.querySelector("#rock")
const paper = document.querySelector("#paper")
const scissors = document.querySelector("#scissors")

const result = document.querySelector(".result")
const humanScore = document.querySelector("#my-score")
const machineScore = document.querySelector("#alexa-score")


let humanScoreNumber = 0
let machineScoreNumber = 0


// ENUMS
const GAME_OPTIONS = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors"
}

const playHuman = (humanChoice) => {
    playTheGame(humanChoice, playMachine())
}

const playMachine = () => {
    const choices = [GAME_OPTIONS.ROCK, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
    const randomNumber = Math.floor(Math.random() * 3)
    return choices[randomNumber]
}

const playTheGame = (human, machine) => {

    if (human === machine) {
        result.innerHTML = "Deu Empate 😑"
    } else if (
        (human === "rock" && machine === "scissors") ||
        (human === "scissors" && machine === "paper") ||
        (human === "paper" && machine === "rock")
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você marcou ponto! 🥳"
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Alexa marcou ponto! 🤖"
    }

    if (humanScoreNumber >= 10) {
        result.innerHTML = "🎉 VOCÊ GANHOU O JOGO! 🎉"
        resetGame()
    }

    if (machineScoreNumber >= 10) {
        result.innerHTML = "🤖 ALEXA GANHOU O JOGO! 🤖"
        resetGame()
    }
}

const resetGame = () => {
    setTimeout(() => {
        humanScoreNumber = 0
        machineScoreNumber = 0
        humanScore.innerHTML = humanScoreNumber
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Nova partida!"
    }, 2000);
}







