import readlineSync from 'readline-sync';
import { getRandomElement,startGame,getArray2, } from "./helpers.js";
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
    "milk",
    "witcher",
    "assasin",
    "main",
    "description",
];
startGame();
const randomElement = getRandomElement(words);
const charRandomElement = randomElement.split('');
let UserArray = [...charRandomElement];
let UserArray2 = getArray2(UserArray);
console.log(UserArray2);
const getArray = (UserArray,charRandomElement) => {
    let UserAnswer = readlineSync.question('Which letter is present in the word?\n');
    let middleIndex = charRandomElement.length/2;
    let leftArray = charRandomElement.slice(0,middleIndex);
    if(UserArray === charRandomElement){
        return UserArray.join('');
    }
    else{
        for(let i = 0; i < charRandomElement.length; i++) {
            for(let j = 0; j < UserArray.length; j++){
            if(charRandomElement[i] === UserAnswer){
                let CorrectChar = charRandomElement.indexOf(UserAnswer);
                let lastCorrectChar = charRandomElement.lastIndexOf(UserAnswer);
                console.log(CorrectChar);
                console.log(lastCorrectChar);
                UserArray.splice(CorrectChar,1,UserAnswer);
                UserArray.splice(lastCorrectChar,1,UserAnswer);
            }
    }
}
console.log(UserArray);
console.log(UserArray.join('|'));
console.log(charRandomElement);
return getArray(UserArray,charRandomElement); 
    }
}
console.log(getArray(UserArray2,charRandomElement));
