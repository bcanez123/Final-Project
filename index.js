//strict
"use strict"

//night mode
//dark mode
function darkMode(){
    document.body.classList.toggle("dark");
  }

//product section
function berry(){
    let berryImg = document.querySelector("#products img");
    berryImg.src = "BerryBlast_wBackground.jpg";

    document.querySelector("#products p").textContent = "For all the berry lovers, we have a flavor just for you. Berry Blast Peak Fuel is a nice mixture of tangy and sweet. It makes for a delicious drink and is perfect for your workout. It is rich in essential nutrients and minerals, including sodium, potassium, chloride, magnesium, and phosphate. These powerhouses help keep your blood pressure steady and your muscles cramp-free. Enjoy a drink that is as delicious as it is nourishing. ";
    document.querySelector("#products h3").textContent = "Berry Blast";
}

function minty(){
    let mintyImg = document.querySelector("#products img");
    mintyImg.src = "MintyFresh_wBackground.jpg";

    document.querySelector("#products p").textContent = "Looking for a cool, minty twist? Meet Minty Fresh, the latest Peak Fuel flavor designed to keep you feeling energized and refreshed. Whether you are tackling yard work under the sun or lifting weights at the gym, this invigorating drink delivers the minerals and nutrients your body craves. Packed with sodium, potassium, chloride, magnesium, and phosphate, it helps maintain steady blood pressure and prevents muscle cramps. Enjoy a drink that is as revitalizing as it is delicious.";
  
    document.querySelector("#products h3").textContent = "Minty Fresh";
}

function lemmon(){
    let lemmonImg = document.querySelector("#products img");
    lemmonImg.src = "LemonVibe_wBackground.jpg";

    document.querySelector("#products p").textContent = "Energize every workout with our refreshing Lemmon Vibe Peak Fuel drink. From seasoned athletes to boxing enthusiasts, everyone needs electrolytes to perform at their best. Savor the bold, tangy-sweet taste of Lemon Vible, bursting with essential nutrients and minerals like sodium, potassium, chloride, magnesium, and phosphate. These powerhouses help keep your blood pressure steady and your muscles cramp-free. Enjoy a drink that is as delicious as it is nourishing.";
    document.querySelector("#products h3").textContent = "Lemmon Vibe";
}


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


//radio button section

// variables for the radio buttons(phone or email)
let prefPhone = document.getElementById("prefPhone");
let prefEmail = document.getElementById("prefEmail");

// span where we will show what the user prefered phone or email
let preferSpan = document.getElementById("prefer");

//function for how the radios are displayed
function displayPrefer(){
    if(prefPhone.checked) {
        preferSpan.textContent = "You prefer to be called."
    }

    if(prefEmail.checked) {
        preferSpan.textContent = "You prefer to be emailed."
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
    let fNameRegex = /([a-z])/i;
    let emailRegex = /\w+@/ ;
    let phoneNumberRegex = /[(][0-9]{3}[)][0-9]{3}[-][0-9]{4}/;

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

    //validate phone number and should follow regex
    if(form.phoneNumber.value === "" || (!phoneNumberRegex.toLocaleString(form.phoneNumber.value))){
        // on error, add the errorInput class to the input
        form.phoneNumber.classList.add("errorInput");

        //on error, add the error lass to the span with this input that has the message class
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
        <br>Email: ${form.email.value} <br>Phone: ${form.phoneNumber.value}`;

        // reset the form
        form.reset();

    }

}

//event listeners
document.getElementById("nightMode").addEventListener("click",darkMode);

document.getElementById("berryBlast").addEventListener("click", berry);

document.getElementById("mintyFresh").addEventListener("click", minty);

document.getElementById("lemmonVibe").addEventListener("click", lemmon);

document.getElementById("guessingGame").addEventListener("click", guessNumber);

document.getElementById("contactValidate").addEventListener("submit",valOnSubmit);

//event listeners for radio buttons

let preferRadios = document.querySelectorAll("input[type=\"radio\"]");
for (let radio of preferRadios){
	radio.addEventListener("change", displayPrefer);
}