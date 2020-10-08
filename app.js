let choices = ["rock", "paper", "scissors"]
let playerChoice = ''
let computerChoice = ''



function setPlayerSelection(x) {
  playerChoice = choices[x]
}

function setComputerSelection() {
  let i = Math.floor(Math.random() * 3)
  computerChoice = choices[i]
}

function alertPlayerWin() {
  window.alert('You Won!')
}

function alertPlayerLose() {
  window.alert('Sad Day')
}

function alertTie() {
  window.alert('You Tied')
}




function play(playerChoiceIndex) {
  setPlayerSelection(playerChoiceIndex)
  setComputerSelection()

  console.log('Player Chose: ' + playerChoice )
  console.log('Computer Chose: ' + computerChoice )
  switch (computerChoice) {
    case 'rock':
      if (playerChoice == 'rock') {
        alertTie()
      } else if (playerChoice == 'paper') {
        alertPlayerWin()
      } else {
        alertPlayerLose()
      }
      break;
    case 'paper':
      if (playerChoice == 'paper') {
        alertTie()
      } else if (playerChoice == 'scissors') {
        alertPlayerWin()
      } else {
        alertPlayerLose()
      }
      break;
    case 'scissors':
      if (playerChoice == 'scissors') {
        alertTie()
      } else if (playerChoice == 'rock') {
        alertPlayerWin()
      } else {
        alertPlayerLose()
      }
      break;
    default:
      break;
    // code block
  }
}
