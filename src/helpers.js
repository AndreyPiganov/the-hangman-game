import readlineSync from 'readline-sync';
const UserHello = () => {
    let name = readlineSync.question('May I have your name? ');
    let Hello = `Hello, ${name}!`;
    return Hello;
};
const startGame = () => {
    console.log('Welcome to the the hangman game!');
    console.log(UserHello());
    console.log('The game continues until the word is fully guessed.');
    console.log('Lets start the game');
}
const getRandomElement = (answers) =>{
    const getRandomElement=(min,max,arr)=>arr[Math.floor(Math.random()*(max-min+1))+min]
    return getRandomElement(0,answers.length-1,answers);
};
export { getRandomElement,startGame };