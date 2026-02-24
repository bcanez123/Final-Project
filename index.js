//game section
//random number function
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function guessNumber(){
//span where the number will display, and one for the message.
    let dieDisplay1 = document.getElementById("random1");
    let gameMessage = document.getElementById("gameMsg");
    //generate one random number between 1 and 5.
    let die1 = getRandomNumber(1,5);

    //display number to the screen
    dieDisplay1.innerHTML = die1;

    //if the number matches 5, display the winning message
    if(die1 === 5){
        gameMessage.innerHTML = "Congrats! You win!";
    }else{
        gameMessage.innerHTML = "You lose. Try again.";
    }
}

//event listeners
document.getElementById("guessingGame").addEventListener("click", guessNumber);