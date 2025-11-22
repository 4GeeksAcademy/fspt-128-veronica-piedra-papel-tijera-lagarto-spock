const choices = ["rock", "paper", "scissors", "lizard", "spock"]
const rules = {
  rock: ['scissors', "lizard"],
  paper: ["rock", "spock"],
  scissors: ["paper", "lizard"],
  lizard: ["spock", "paper"],
  spock: ["scissors", "rock"]
}

//computer choise
function computerChoice() {
  let posicionChoices = Math.floor((Math.random() * choices.length));
  let eleccionComputer = choices[posicionChoices];
  return eleccionComputer;
}
//usuary choise
function UsuaryChoice() {
 let player= "lizard";
  return player;
}
let computer = computerChoice();
let player = UsuaryChoice();
console.log("el usuario ha escogido: ", player);
console.log("el pc ha escogido: ", computer);
if (computer === player) {
  console.log("que lastima es un triste empate");
} else if (rules[player].includes(computer)) {
  console.log("has ganado");
}
else {
  console.log("has perdido");
}