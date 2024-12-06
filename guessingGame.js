// Number Guessing Game
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

console.log("Welcome to the Number Guessing Game!");
console.log("Guess a number between 2 and 100.");

function askQuestion() {
    rl.question("Enter your guess: ", (answer) => {
        const guess = parseInt(answer, 10);
        attempts++;

        if (isNaN(guess)) {
            console.log("Please enter a valid number.");
        } else if (guess < randomNumber) {
            console.log("Too low! Try again.");
        } else if (guess > randomNumber) {
            console.log("Too high! Try again.");
        } else {
            console.log(`Congratulations! You've guessed the number in ${attempts} attempts.`);
            rl.close();
            return;
        }

        askQuestion();
    });
}

askQuestion();

