import readlineSync from 'readline-sync';
import { getRandomElement,startGame } from "./helpers.js";
let words = [
    "mister",
    "tank",
    "master",
    "minecraft",
    "laptop",
    "mouse",
    "school",
    "friend",
    "phone",
    "pen",
    "clock",
    "book",
    "pirate",
    "teacher",
    "team",
    "bus",
    "stadion",
    "dog",
    "moon",
    "bunny",
    "cake",
    "travel",
    "paper",
    "mathematics",
    "count",
    "menu",
    "table",
    "piramide",
    "number",
    "chair",
    "professional",
    "music",
    "geography",
    "history",
    "game",
    "magic",
    "animal",
    "computer",
    "atlas",
    "sea",
    "country",
    "flower",
    "milc",
    "witcher",
    "assasin",
    "main",
    "description",
];
startGame();
const randomElement = getRandomElement(words);
const charRandomElement = randomElement.split('');
let UserArray = [];
const getArray = (UserArray,charRandomElement) => {
    let UserAnswer = readlineSync.question('Which letter is present in the word?\n');
    if(UserArray.length === charRandomElement.length){
        return UserArray.join('');
    }
    else{
        for(let i = 0; i < charRandomElement.length; i++) {
            if(charRandomElement[i] === UserAnswer){
                UserArray.push(UserAnswer);
                UserArray.sort((a, b) => charRandomElement.indexOf(a) - charRandomElement.indexOf(b));
            }
        }
        console.log(UserArray.join('|'));
        console.log(charRandomElement);
        return getArray(UserArray,charRandomElement); 
    }
}
console.log(getArray(UserArray,charRandomElement));
