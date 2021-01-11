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
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


// function to determine length of password
function getLength() {
  let entry = '';
  entry = window.prompt ("How long will your password be?");
  entry = parseInt(entry);
  if (entry >= 8 && entry <= 128) {
    return entry;
  } else {
    window.alert("Try again. Please enter a number between 8 and 128");
  }
  getLength();
}

// User makes choices
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
    window.alert("You shall not pass! Please make at least one character selection.")
  }
  gatherChoices();
}

function randomize(length, answers, characters, validChar) {
  return Object.values();
}

function generatePassword() {
  var length = getLength();
  var answers = gatherChoices();
  var characters = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "1234567890",
    specialChar: "!@#$%^&*?+-="
  };
  let validChar = "";

//  return randomize(length, answers, characters, validCharacters);
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
