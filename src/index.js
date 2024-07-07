var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}
var randomNumber1 = getRandomInt(1, 774);
var randomNumber2 = getRandomInt(1, 774);
while (randomNumber1 === randomNumber2) {
    randomNumber2 = getRandomInt(1, 774);
}
function appendLeading(num) {
    if (num < 10)
        return "00" + num;
    else if (num < 100)
        return "0" + num;
    else
        return String(num);
}
var image1 = appendLeading(randomNumber1);
var image2 = appendLeading(randomNumber2);
var url = "http://localhost:8080/pokemon/";
var getPokemonImage = function (imageNumber, cardNumber) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            fetch(new URL(url + "img/" + imageNumber + ".png"), {
                method: 'GET',
                headers: {
                    "Content-Type": "blob"
                }
            }).then(function (response) { return response.blob(); }).then(function (response) {
                var card = document.getElementById("card" + cardNumber);
                var imageElement = document.createElement('img');
                imageElement.src = URL.createObjectURL(response);
                card.appendChild(imageElement);
            });
            return [2 /*return*/];
        });
    });
};
getPokemonImage(image1, 1);
getPokemonImage(image2, 2);
var pokemon1;
var pokemon2;
var getPokemonData = function (imageNumber, cardNumber) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            fetch(new URL(url + imageNumber), {
                method: 'GET',
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(function (response) { return response.json(); }).then(function (pokemon) {
                displayData(pokemon, cardNumber);
                if (cardNumber === 1)
                    pokemon1 = pokemon;
                else
                    pokemon2 = pokemon;
            });
            return [2 /*return*/];
        });
    });
};
getPokemonData(String(randomNumber1), 1);
getPokemonData(String(randomNumber2), 2);
var displayData = function (pokemon, cardNumber) {
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
    name === null || name === void 0 ? void 0 : name.appendChild(document.createTextNode(String(pokemon["name"]["english"])));
    type === null || type === void 0 ? void 0 : type.appendChild(document.createTextNode(String(pokemon["type"])));
    hp === null || hp === void 0 ? void 0 : hp.appendChild(document.createTextNode(String(pokemon["base"]["HP"])));
    attack === null || attack === void 0 ? void 0 : attack.appendChild(document.createTextNode(String(pokemon["base"]["Attack"])));
    defense === null || defense === void 0 ? void 0 : defense.appendChild(document.createTextNode(String(pokemon["base"]["Defense"])));
    spAttack === null || spAttack === void 0 ? void 0 : spAttack.appendChild(document.createTextNode(String(pokemon["base"]["Sp. Attack"])));
    specialDefense === null || specialDefense === void 0 ? void 0 : specialDefense.appendChild(document.createTextNode(String(pokemon["base"]["Sp. Defense"])));
    speed === null || speed === void 0 ? void 0 : speed.appendChild(document.createTextNode(String(pokemon["base"]["Speed"])));
};
var simulateFight = function () {
    var damage = 0;
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
};
var types = [0.5, 1, 2];
var generateDamage = function (order) {
    if (order === 0) {
        var inner = (((((2 * getRandomInt(1, 20) * getRandomInt(1, 2)) / 5) + 2) * getRandomInt(1, 25) * (pokemon1["base"]["Attack"] / pokemon2["base"]["Defense"])) / 50) + 2;
        var outer = types[getRandomInt(0, 2)] * types[getRandomInt(0, 2)] * (getRandomInt(217, 255) / 255);
        console.log(inner);
        console.log(outer);
        return inner * outer;
    }
    else {
        var inner = (((((2 * getRandomInt(1, 20) * getRandomInt(1, 2)) / 5) + 2) * getRandomInt(1, 25) * (pokemon2["base"]["Attack"] / pokemon1["base"]["Defense"])) / 50) + 2;
        var outer = types[getRandomInt(0, 2)] * types[getRandomInt(0, 2)] * (getRandomInt(217, 255) / 255);
        return inner * outer;
    }
};
var simulateButton = document.getElementById("simulateButton");
if (simulateButton) {
    simulateButton.addEventListener("click", simulateFight, false);
}
