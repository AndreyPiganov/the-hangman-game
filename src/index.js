import readlineSync from 'readline-sync';
import { getRandomElement, startGame, getArray } from './helpers.js';

const words = [
  'mister',
  'tank',
  'master',
  'minecraft',
  'laptop',
  'mouse',
  'school',
  'friend',
  'phone',
  'pen',
  'clock',
  'book',
  'pirate',
  'teacher',
  'team',
  'bus',
  'stadion',
  'dog',
  'moon',
  'bunny',
  'cake',
  'travel',
  'paper',
  'mathematics',
  'count',
  'menu',
  'table',
  'piramide',
  'number',
  'chair',
  'professional',
  'music',
  'geography',
  'history',
  'game',
  'magic',
  'animal',
  'computer',
  'atlas',
  'sea',
  'country',
  'flower',
  'milk',
  'witcher',
  'assasin',
  'main',
  'description',
];
startGame();
const randomElement = getRandomElement(words);
const RandomElement = randomElement.split('');
const CorrectArray = [...RandomElement];
const UserArray2 = getArray(CorrectArray);
const cnt = 0;
const LogicGame = (IncorrectArray, charRandomElement, counter) => {
  const UserArray = IncorrectArray;
  console.log(UserArray.join('|'));
  let count = counter;
  const UserAnswer = readlineSync.question('Which letter is present in the word or try to guess the word\n');
  if (UserAnswer === charRandomElement.join('')) {
    return `${charRandomElement.join('')}-correct-word\nYou're right, it's the mystery word.\nCongratulations on your victory!!!`;
  }
  if (count === -4) {
    return `You lost, but don't feel bad you can try again at any time!\nHere's the word that was puzzled - ${charRandomElement.join('')}`;
  }

  for (let i = 0; i < charRandomElement.length; i += 1) {
    if (charRandomElement[i] === UserAnswer && UserArray[i] === '..') {
      UserArray[i] = UserAnswer;
      console.log('You guessed the letter!');
    }
  }
  count -= 1;
  return LogicGame(UserArray, charRandomElement, count);
};
export default function GameData() {
  console.log(LogicGame(UserArray2, RandomElement, cnt));
}
