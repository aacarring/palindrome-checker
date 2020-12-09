const input = document.body.querySelector('section input');
const button = document.body.querySelector('section button');

function checkIfPalindrome() {
    let inputText = input.value;

    if (inputText === "") {
        alert("You need to type in the input field to check for a palindrome.");
    };

    if (inputText.replace(/[\W_]/g, "").toLowerCase() ===
    inputText
        .replace(/[\W_]/g, "")
        .toLowerCase()
        .split("")
        .reverse()
        .join("")) {
            alert("You're right! That is, indeed, a palindrome.");
        } else {
            alert("Whoops... that ain't a palindrome.");
        }
}

button.addEventListener('click', checkIfPalindrome);