import readlineSync from 'readline-sync';

const UserHello = () => {
  const name = readlineSync.question('May I have your name? ');
  const Hello = `Hello, ${name}!`;
  return Hello;
};
const startGame = () => {
  console.log('Welcome to the the hangman game!');
  console.log(UserHello());
  console.log('The game lasts up to 5 tries');
  console.log('Lets start the game');
};
const getArray = (array) => {
  const UserArray = array;
  for (let j = 0; j < UserArray.length; j += 1) {
    UserArray[j] = '..';
  }
  return UserArray;
};
const getRandomElement = (answers) => {
  const getRandomAnswers = (min, ma, arr) => arr[Math.floor(Math.random() * (ma - min + 1)) + min];
  return getRandomAnswers(0, answers.length - 1, answers);
};

export { getRandomElement, startGame, getArray };
