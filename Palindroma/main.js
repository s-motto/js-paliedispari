
let userInput = prompt('Inserisci una parola');



function palindrome(word) {
    let reverseWord = word.split('').reverse().join('');
    return word === reverseWord
};

if (palindrome(userInput.toLowerCase())) {
    console.log('Questa è una parola palindroma');
} else {
    console.log('Questa non è una parola palindroma')
};




