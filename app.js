let choices = ["rock", "paper", "scissors"]
let playerChoice = ''
let computerChoice = ''

// // function startGame(){
// // choices = 
// }

function playerSelection(x) {
  playerChoice = choices[1]
}

function setComputerSelection() {
  let i = Math.floor(Math.random() * 3)
  computerChoice = choices[1]
}
function play() {
  setComputerSelection()
}
