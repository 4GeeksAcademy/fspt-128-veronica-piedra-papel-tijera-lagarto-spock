const choices = ["rock", "paper", "scissors", "lizard", "spock"]
const rules = {
  rock: ['scissors', "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"]
}

//computer choise
function computerChoise() {
  let posicionChoises = Math.floor((Math.random() * choices.length()));
  let eleccionComputer = choices[posicionChoices];
  return eleccionComputer;
}
//usuary choise
function UsuaryChoise() {
  console.log();
  
  
}
let computer = computerChoise();
let player = UsuaryChoise();
if (computer=player) {
  console.log("que lastima es un triste empate");
} else if (player.includes()computer) {
  console.log("has ganado");
}
else{console.log("has perdido");
}