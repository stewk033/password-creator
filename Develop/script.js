// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page

// Assignment code here
function getLength() {
  let entry = '';
  entry = window.prompt ("How long will your password be?");
  entry = parseInt(entry);
  if (entry > 8 && entry < 128) {
    return entry;
  } else {
    window.alert("Please enter a number between 8 and 128");
  }
}
// length();
// Prompts needed to enter selections:
  // - Lowercase
  // - Uppercase
  // - Numberic
  // - Special Characters

// store user choices
function gatherChoices() {
  const answers = {
    lowercase: confirm("Will you be using lowercase letters?"),
    uppercase: confirm("How about uppercase letters?"),
    numbers: confirm("Numbers?"),
    specialChar: confirm("Maybe some special characters?")
  };
  if (answers.lowercase || answers.uppercase || answers.numbers || answers.specialChar) {
    return answers;
  } else {
    window.alert("You shall not pass! Please make at least one selection.")
  };
};

function generatePassword() {
  let length = getLength();
  let answers = gatherchoices();

  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numbers = "1234567890"
  var specialChar = "!@#$%^&*?+-="

}

// need a way to determine parameters of user selections:
  //  - min and max of password length (8, 128)

// alter user when invalid selection has been made
  // - must select at least one of the choices (uppercase, lowercase, numbers, special characters)
  // - cannot select a length < 8 or > 128

// display generated password in the browser window

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  generatePassword();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
