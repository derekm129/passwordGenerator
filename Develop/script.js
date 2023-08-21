// Assignment code here

// Variables
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var numericalChar = "0123456789";
// var specialChar = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// Generate password
function generatePassword() {
  let check = checkLength();
  if (checkLength()) {
    prompt("Would you like numbers in your password?");
  }
  if (checkNumbers()) {
    prompt("Would you like upper case letters?");
  }
}  
  
  // let numbers = prompt("would you like numbers?")
function checkNumbers() {
  const response = confirm("Would you like numbers?"); 
    if (response) {
      console.log("Your password will have numbers.");
    } else {
      console.log("Your password will not have numbers.")
    }
  }
  

  // let lowerCase = prompt("Would you like lower case letters?")
function lowerCase() {
  const response = confirm("Would you like lowercase numbers.")
}
  // let upperCase = prompt("Would you like upper case letters?")

  // let special = prompt("Would you like special characters?")
 
  

 


// Check password length
function checkLength() {
  let passwordLength = prompt("Please enter password length between 8 and 128 characters.");
    if (isNaN(passwordLength)) {
      console.log("That is not a number.");
      return false;
  } else if (passwordLength < 8 || passwordLength > 128) {
      console.log("Password must be between 8 and 128 characters.");
      return false;
    } return true;
}


if (checkLength()) {
  let numbers = checkNumber();
  let lowers = checkLower();

//at the end you're going to use these to create the final return
  // return password;
}



// 
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
