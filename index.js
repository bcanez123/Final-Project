//strict
"use strict"

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
// Return a random number between min and max (inclusive).
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//validate form
function validateForm(e){

 // prevent default form submission
 e.preventDefault();
 
 // get the input on the page and store it in a variable
 let num1 = document.getElementById("num1");
 
 // the span where we'll display error messages
 let errorSpan = num1.previousElementSibling;
 
 // the paragraph where we'll display a message to the user
 let outputP = document.getElementById("defaultOutput");
 
 // clear out any past error messages and output
 errorSpan.innerHTML = "";
 outputP.innerHTML = "";
 
 // if the input is blank, display an error message to the user
 if(num1.value === ""){
   errorSpan.innerHTML = "Please enter one digit 1-10";
 }else{
   //if the input is not blank, display the message greeting the user
   outputP.innerHTML = "You selected number " + num1.value +  ".";
   // clear out the input
   num1.value = "";
 }
 
 //display random
 let display=document.getElementById("random");
 
 let die1 = getRandomNumber(1, 10);
 
 //display those numbers to the screen
 display.innerHTML = "Random: " + die1;
 
 //see if they match, then display winning message
 if (num1 === die1){
   gameMsg.innerHTML = "You Win!";
 }else{
   gameMsg.innerHTML = "You Lose. Try again.";
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

//global variables
let contactIsValid = false;

// the two radios
let preferPhone = document.getElementById("prefPhone");
let preferEmail = document.getElementById("prefEmail");

// the span where we need to display the contact
let contactSpan = document.getElementById("prefContact");

//function for validating the form
function validateOnSubmit(e){
    // prevent default form submission
    e.preventDefault();
    
    // access the form itself and save in a variable
    let myForm = document.querySelector("#valOnSubmit");
    
    // access all of the error spans to be used as error message holders
    let errorSpans = document.querySelectorAll("#valOnSubmit .message");
    
    // boolean variable used to track form validity
    let isValid = true;
    
     // reset display of the error inputs before validating
    myForm.fName.classList.remove("errorInput");
    myForm.emailAddress.classList.remove("errorInput");
    myForm.phoneNumber.classList.remove("errorInput");
    
    // reset the display of the error message spans
    errorSpans.forEach(function(span){
      span.classList.remove("error");
    });
    
    // hide the success area on the page - this is what shows the user what they submitted in the form when submission is successful
    document.querySelector("#success").classList.remove("show");
    document.querySelector("#success").classList.add("hide");
    
    // regular expressions to validate the name, email and phone number
      let fNameRegex = /([a-z])/i;
      let emailRegex = /\w+@/ ;
      let phoneNumberRegex = /[(][0-9]{3}[)][0-9]{3}[-][0-9]{4}/;
    
    // validate full name, it should not be blank and should match the fName regex
    if(myForm.fName.value === "" || !(fNameRegex.test(myForm.fName.value))){
    
      // on error, add the errorInput class to the input itself
      myForm.fName.classList.add("errorInput");
      
      // on error, add the error class to the span associated with this input that has the message class
      errorSpans[0].classList.add("error");
      
      // set the form validation tracking variable to false
      isValid = false;
    }
    // validate email, it should not be blank and should match the email regex
    if(myForm.emailAddress.value === "" || !(emailRegex.test(myForm.emailAddress.value))){
      
      // on error, add the errorInput class to the input itself
      myForm.emailAddress.classList.add("errorInput");
      // on error, add the error class to the span associated with this input that has the message class
      errorSpans[1].classList.add("error");
          
      // set the form validation tracking variable to false
      isValid = false;
    }
    // validate phone number, it should not be blank
    if(myForm.phoneNumber.value === ""){
      // on error, add the errorInput class to the input itself
      myForm.phoneNumber.classList.add("errorInput");
      
      // on error, add the error class to the span associated with this input that has the message class
      errorSpans[2].classList.add("error");
      
      // set the form validation tracking variable to false
      isValid = false;
    }
    
    // if the form is valid, submit it and reset
    if(isValid){
      
      //display the 'success' section to the user
           document.querySelector("#success").classList.remove("hide");
      
  document.querySelector("#success").classList.add("show");
      
      // display the user's input data (to show what they are sending to the server)
      document.getElementById("formSub").innerHTML = `<strong>Full Name: </strong>${myForm.fName.value}<br><strong>Email: </strong>${myForm.emailAddress.value}<br><strong>Phone number: </strong>${myForm.phoneNumber.value}<br><strong>Comment: </stong>${myForm.text.value}`;
      
      // reset the form
          myForm.reset();
    }
  }

  //radio buttons function
function displayContact(){
  // determine which radio is selected and display the correct contact in the span based on that choice.
  if(preferPhone.checked){
		contactSpan.textContent = "You have chosen to be contacted by phone";
		contactIsValid = preferPhone.checked;
}
  if(preferEmail.checked){
		contactSpan.textContent = "You have chosen to be contacted by email";
		contactIsValid = preferEmail.checked;
  }
}

//event listeners
document.getElementById("nightMode").addEventListener("click",darkMode);

document.getElementById("berryBlast").addEventListener("click", berry);

document.getElementById("mintyFresh").addEventListener("click", minty);

document.getElementById("lemmonVibe").addEventListener("click", lemmon);

// for our validateForm function and game
document.getElementById("gamePlay").addEventListener("click", validateForm);

document.getElementById("submit").addEventListener("click", validateOnSubmit);

// radio buttons
let contactRadios = document.querySelectorAll("input[type=\"radio\"]");
for (let radio of contactRadios){
	radio.addEventListener("change", displayContact);
}