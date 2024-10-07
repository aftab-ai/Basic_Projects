const max = prompt("Enter the max range number:");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt(`Guess the number betwenen 1 to ${max} :`);

while (true) {
    if (guess == "quit") {
        console.log("You quit the game!");
        break;
    }

    if (guess == random) {
        guess = prompt("Congrets!!! your guess is right.");
        break;
    }   else if (guess < random) {
        guess = prompt("Hint : Your guess is small, try some big guess.");
    }   else {
        guess = prompt("Hint : Your guess is large, try some small guess.");
    }   
}