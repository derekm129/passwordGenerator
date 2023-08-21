// Assignment code here

// Variables
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var numericalChar = "0123456789";
var specialChar =  "!#$%&()*+,-./:;<=>?@[\]^_{|}";
let password = "";

// Generate password
function generatePassword() {
  if (checkLength()) {
    let numbers = checkNumbers();
    let uppers = checkUpper();
    let lowers = checkLower();
    let specials = checkSpecial();
  }else {
    return "Password must be between 8 and 128 characters.";
  } 
}

  
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

// Numbers 
  function checkNumbers() {
    let numResponse = confirm("Would you like numbers?"); 
      if (numResponse === true) {
        console.log("Your password will have numbers.");
        return true;
    } else {
        console.log("Your password will not have numbers.")
        return false;
     }
   }
  
  // Upper Case
  function checkUpper() {
    let upperResponse = confirm("Would you like uppercase characters?"); 
      if (upperResponse === true) {
        console.log("Your password will have uppercase characters.");
        return true;
    } else {
        console.log("Your password will not have uppercase characters.")
        return false;
     }
   }
  
  // Lower case
  function checkLower() {
    let lowerResponse = confirm("Would you like lowercase characters?"); 
      if (lowerResponse === true) {
        console.log("Your password will have lowercase characters.");
        return true;
    } else {
        console.log("Your password will not have lowercase characters.")
        return false;
     }
   }


  // Special characters
  function checkSpecial() {
    let specialResponse = confirm("Would you like special characters?"); 
      if (specialResponse === true) {
        console.log("Your password will have special characters.");
        return true;
    } else {
        console.log("Your password will not have special characters.")
        return false;
     }
   }


// if (checkLength()) {
//   let numbers = checkNumber();
//   let lowers = checkLower();

// at the end you're going to use these to create the final return
//    return password;
// }



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
