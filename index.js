//strict
"use strict"

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
    let die1 = getRandomNumber(1,10);
    let die2 = getRandomNumber(1,10);

    //display number to the screen
    dieDisplay1.innerHTML = die1;

    //if the number matches 5, display the winning message
    if(die1 === die2){
        gameMessage.innerHTML = "Congrats! You win!";
    }else{
        gameMessage.innerHTML = "You lose. Try again.";
    }
}

//contact section
function valOnSubmit(e){
    //prevent default form submission
    e.preventDefault();
    let form = document.querySelector("#valOnSubmit");

    //all error spans for errors to be read
    let errorSpans = document.querySelectorAll("#valOnSubmit.message");

    //boolean (true/false) variable to track if the form is valid
    let isValid = true;

    // reset display of the error inputs before validating
    form.fName.classList.remove("errorInput");
    form.email.classList.remove("errorInput");
    form.phoneNumber.classList.remove("errorInput");

    //reset the display of the error message spans
    errorSpans.forEach(function(span){
        span.classList.remove("error");
    });

    // hide success area on page
    document.querySelector("#success").classList.remove("show");
    document.querySelector("#success").classList.add("hide");

    // reg expressions to validate the email and phone number
    let fNameRegex = /([a-z])/;
    let emailRegex = /\w+@/ ;
    let phoneRegex = /({0-9})/;

    //validate full name, should not be blank and should follow the fName regex
    if(form.fName.value === "" || !(fNameRegex.toLocaleString(form.fName.value))){
        //on error, add the error input class
        form.fName.classList.add("errorInput");

        //on error, add error class to the span with the input that has the message class
        errorSpans[0].classList.add("error");

        //set the form validation tracking variable to false
        isValid = false;
    }

    //validate email, should not be blank and should match regex for email
    if(form.email.value === "" || !(emailRegex.test(form.email.value))){
        // on error, add the errorInput class to the input itself
        form.email.classList.add("errorInput");

        // on error, add the error class to the span with this input that has the message class
        errorSpans[1].classList.add("error");

        //set the form validation tracking variable to false
        isValid = false;
    }

    // if the form is valid, submit it and reset
    if(isValid){

        //display the 'success' section to the user
        document.querySelector("#success").classList.remove("hide");
        document.querySelector("#success").classList.add("show");

        // display the users data (show on screen)
        document.getElementById("formSub").innerHTML =
        `Full Name: ${form.fName.value}
        <br>Email: ${form.email.value}`;

        // reset the form
        form.reset();

    }

}

//event listeners
document.getElementById("guessingGame").addEventListener("click", guessNumber);

document.getElementById("contactValidate").addEventListener("submit",valOnSubmit);