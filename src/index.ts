function getRandomInt(min: number, max: number): number {
  return Math.round(Math.random() * (max - min) + min);
}

var randomNumber1 = getRandomInt(1, 774);
var randomNumber2 = getRandomInt(1, 774);

while (randomNumber1 === randomNumber2) {
  randomNumber2 = getRandomInt(1, 774);

}

function appendLeading(num: number): string {
  if (num < 10) return "00" + num;
  else if (num < 100) return "0" + num;
  else return String(num);
}


var image1 = appendLeading(randomNumber1);
var image2 = appendLeading(randomNumber2);

const url = "http://localhost:8080/pokemon/";

const getPokemonImage = async function (imageNumber: String, cardNumber: number) {
  fetch(new URL(url + "img/" + imageNumber + ".png"), {
    method: 'GET',
    headers: {
      "Content-Type": "blob"
    }
  }).then(response => { return response.blob(); }).then(response => {
    var card = document.getElementById("card" + cardNumber);

    var imageElement = document.createElement('img');
    imageElement.src = URL.createObjectURL(response);

    card!.appendChild(imageElement);

  })
}

getPokemonImage(image1, 1);
getPokemonImage(image2, 2);


var pokemon1: Pokemon;
var pokemon2: Pokemon;
const getPokemonData = async function (imageNumber: String, cardNumber: number) {
  fetch(new URL(url + imageNumber), {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  }).then(response => { return response.json() }).then((pokemon: Pokemon) => {
    displayData(pokemon, cardNumber);
    if (cardNumber === 1)
      pokemon1 = pokemon;
    else
      pokemon2 = pokemon;
  });
}

getPokemonData(String(randomNumber1), 1);
getPokemonData(String(randomNumber2), 2);

const displayData = function (pokemon: Pokemon, cardNumber: number) {

  var name = document.getElementById("name" + cardNumber);
  var type = document.getElementById("type" + cardNumber);
  var hp = document.getElementById("hp" + cardNumber);
  var attack = document.getElementById("attack" + cardNumber);
  var defense = document.getElementById("defense" + cardNumber);
  var spAttack = document.getElementById("specialAttack" + cardNumber);
  var specialDefense = document.getElementById("specialDefense" + cardNumber);
  var speed = document.getElementById("speed" + cardNumber);
  //var str = "";
  //Object.keys(pokemon).forEach(key => str += key + ": " + pokemon[key] + "\n");
  name?.appendChild(document.createTextNode(String(pokemon["name"]["english"])));
  type?.appendChild(document.createTextNode(String(pokemon["type"])));
  hp?.appendChild(document.createTextNode(String(pokemon["base"]["HP"])));
  attack?.appendChild(document.createTextNode(String(pokemon["base"]["Attack"])));
  defense?.appendChild(document.createTextNode(String(pokemon["base"]["Defense"])));
  spAttack?.appendChild(document.createTextNode(String(pokemon["base"]["Sp. Attack"])));
  specialDefense?.appendChild(document.createTextNode(String(pokemon["base"]["Sp. Defense"])));
  speed?.appendChild(document.createTextNode(String(pokemon["base"]["Speed"])));
}

const simulateFight = function () {
  var damage: number = 0;
  console.log("Simulating fight!");
  var hp1 = pokemon1["base"]["HP"], hp2 = pokemon2["base"]["HP"];
  while (hp1 > 0 && hp2 > 0) {
    damage = generateDamage(0);
    console.log("Pokemon 1 dealing " + damage + " to Pokemon 2");
    hp2 = hp2 - damage;

    damage = generateDamage(1);
    hp1 = hp1 - damage;
    console.log("Pokemon 2 dealing " + damage + " to Pokemon 1");
  }
  if (hp1 <= 0)
    alert("Pokemon 2 won the battle!");
  else
    alert("Pokemon 1 won the battle!");
}

var types = [0.5, 1, 2];

const generateDamage = function (order: number): number {
  if (order === 0) {
    var inner = (((((2 * getRandomInt(1, 20) * getRandomInt(1, 2)) / 5) + 2) * getRandomInt(1, 25) * (pokemon1["base"]["Attack"] / pokemon2["base"]["Defense"])) / 50) + 2;
    var outer = types[getRandomInt(0, 2)] * types[getRandomInt(0, 2)] * (getRandomInt(217, 255) / 255)
    console.log(inner);
    console.log(outer);
    return inner * outer;
  } else {
    var inner = (((((2 * getRandomInt(1, 20) * getRandomInt(1, 2)) / 5) + 2) * getRandomInt(1, 25) * (pokemon2["base"]["Attack"] / pokemon1["base"]["Defense"])) / 50) + 2;
    var outer = types[getRandomInt(0, 2)] * types[getRandomInt(0, 2)] * (getRandomInt(217, 255) / 255)
    return inner * outer;
  }
}

var simulateButton = document.getElementById("simulateButton");
if (simulateButton) {
  simulateButton.addEventListener("click", simulateFight, false);
}

interface Pokemon {
  id: number,
  name: {
    english: string,
    japanese: string,
    chinese: string,
    french: string,
  },
  type: string[],
  base: {
    HP: number,
    Attack: number,
    Defense: number,
    'Sp. Attack': number,
    'Sp. Defense': number,
    Speed: number,
  }
}
