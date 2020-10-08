let choices = ["rock", "paper", "scissors"]
let playerChoice = ''
let computerChoice = ''

// // function startGame(){
// // choices = 
// }

function playerSelection(x){
if(x == 0 ){
  playerChoice = 'rock'
}
else if (x == 1){
  playerChoice = 'paper'
}
else {
  playerChoice = 'scissors'
}
}

function computerSelection(){
  let i = Math.floor(Math.random() * 3)
  if(i == 0){
    computerChoice = 'rock'
  }
  else if (i == 1){
    computerChoice = 'paper'
  }
   else {
    computerChoice = 'scissors'
  }
}

function play(){
  computerSelection()
  if(computerChoice == 'rock' && playerChoice == 'paper'){
  window.alert('rock')
  }
 else{
   playerChoice == computerChoice
   window.alert('tie')
 }
}