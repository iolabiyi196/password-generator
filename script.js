// Assignment code here

// declare all possible characters
var allPossibleCharacters = "";
var length = 0;
var characters = {
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvwxyz",
    numeric: "0123456789",
    symbol: "!@#$%&'()*+,-./:;<=>'",
};

// ask users which characters they would like to include in their password and how long they want it to be
var prompts = function() {

    length = prompt("How long do you want your password to be?")

    // add a condition to check if the value entered is a numerical character between 8 and 128
    while (isNaN(length) || length === "" || length < 8 || length > 128) {
        length = prompt("Please enter a numeric value between 8 and 128: ");
    }

    // write a function to confirm which characters the users wants to include in their password
    var confirmSelections = function() {
        var upperConfirm = confirm("Include Upper Case Characters?")
        var lowerConfirm = confirm("Include Lower Case Characters?")
        var numConfirm = confirm("Include Numeric Characters?")
        var symConfirm = confirm("Include Symbol Characters?")

        allPossibleCharacters = "";
        // put all user's choice characters into one string depending on their choice of characters
        if (upperConfirm) {
            allPossibleCharacters += characters.upper;
        }
        if (lowerConfirm) {
            allPossibleCharacters += characters.lower;
        }
        if (numConfirm) {
            allPossibleCharacters += characters.numeric;
        }
        if (symConfirm) {
            allPossibleCharacters += characters.symbol;
        }
        if (!upperConfirm && !lowerConfirm && !numConfirm && !symConfirm) {
            alert("You have to select at least one character type")
            confirmSelections();
        }
    }
    confirmSelections();
}

// write a function to randomize characters into an array of characters
var generatePassword = function() {
    prompts()

    // clear out the finalPassword before the loop starts all over
    finalPassword = "";

    // write a for loop to select random characters based on the number of characters the user wants
    for (let i = 0; i < length; i++) {
        var char = allPossibleCharacters.charAt(Math.floor(Math.random() * allPossibleCharacters.length));

        // put the random characters together
        finalPassword += char;
    }

    console.log(finalPassword);

    console.log(allPossibleCharacters)
}

generatePassword();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = finalPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);