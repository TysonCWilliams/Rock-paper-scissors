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

function alertWin() {
  window.alert('You Won!')
}

function alertLose() {
  window.alert('Sad Day')
}

function alertTie() {
  window.alert('You Tied')
}




function play() {
  setComputerSelection()
  switch (computerChoice) {
    case 'rock':
      if (playerChoice == 'rock') {
        alertTie()
      } else if (playerChoice == 'paper') {
        alertWin()
      } else {
        alertLose()
      }

      break;
    case 'paper':
      // code block
      break;
    case 'scissors':
    // code block
    default:
      break;
    // code block
  }
}
