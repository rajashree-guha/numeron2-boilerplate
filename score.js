// Iteration 8: Making scoreboard functional

let params = new URLSearchParams(window.location.search)
let score = params.get("score")

let scoreBoard = document.getElementById("score-board")
scoreBoard.textContent = score

let playAgain = document.getElementById("play-again-button")
playAgain.onclick = () =>{
    window.location.href="./game.html"
}