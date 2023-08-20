// Assignment code here

// Variables
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var numbericalChar = "0123456789";
// var specialChar = " !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
// Generate password

function generatePassword() {
  console.log("Button clicked");
  let passwordLength = prompt("Please enter desired password length");
    if (isNaN(passwordLength)) {
      return ("That is not a number.");
    
}
// Prompt for password criteria
  // Length 8 - 128
  // Lowercase, uppercase, numbers, special characters
// Validate input
// Generate password

// Display password to page
  return ("Here's the password!");
}

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
