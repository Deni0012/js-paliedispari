const userInput = prompt("Inserisci la tua parola").toLowerCase();

const isPalindrome = userInput === isWordPalindrome(userInput);

if (isPalindrome) {
    console.log(`${userInput} è una parola palindroma`);
} else {
    console.log(`${userInput} NON è una parola palindroma`);
}

function isWordPalindrome(userInput) {
    let reversedString = "";

    for (let i = userInput.length - 1; i >= 0; i--) {
        reversedString += userInput[i];
    }

    return reversedString;
}