const input = document.body.querySelector('section input');
const button = document.body.querySelector('section button');

function checkIfPalindrome() {
    let inputText = input.value;
    if (inputText === "") {
        alert("You need to type in the input field to check for a palindrome.");
    };

}

button.addEventListener('click', checkIfPalindrome);