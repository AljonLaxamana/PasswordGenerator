let generatePassword = document.getElementById("btn-generate-password")
let generatedPassword1 = document.getElementById("generated-password1")
let generatedPassword2 = document.getElementById("generated-password2")
let toggleSymbol = document.getElementById("symbols")
let toggleNumber = document.getElementById("numbers")
let passwordLength = 12
let btnCharEl = Array.from(document.getElementsByClassName("btn-char"))

const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"]
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

let newArray = []

generatePassword.addEventListener('click', generateRandomPass)

function generateRandomPass(length) {
    let password1 = ""
    let password2 = ""

    btnCharEl.forEach(function (elem) { if (elem.classList.contains('active')) { passwordLength = elem.value } })

    if (toggleNumber.checked && toggleSymbol.checked) {
        newArray = characters.concat(symbols, numbers)
    }

    if (toggleSymbol.checked && !toggleNumber.checked) {
        newArray = characters.concat(symbols)
    }

    if (!toggleSymbol.checked && toggleNumber.checked) {
        newArray = characters.concat(numbers)
    }

    if (!toggleSymbol.checked && !toggleNumber.checked) {
        newArray = characters
    }

    for (let i = 0; i < passwordLength; i++) {
        let randomIndex1 = Math.floor(Math.random() * newArray.length)
        let randomIndex2 = Math.floor(Math.random() * newArray.length)
        password1 += newArray[randomIndex1]
        password2 += newArray[randomIndex2]
    }

    generatedPassword1.textContent = password1
    generatedPassword2.textContent = password2
}

btnCharEl.forEach(function (element) {

    element.addEventListener('click', function () {
        btnCharEl.forEach(function (elem) { elem.classList.remove('active') })

        element.classList.add('active')
        generatedPassword1.textContent = ""
        generatedPassword2.textContent = ""
    });
});

generatedPassword1.addEventListener('click', copytoClipboard)
generatedPassword2.addEventListener('click', copytoClipboard)

function copytoClipboard() {

    if (this.textContent) {
        navigator.clipboard.writeText(this.textContent);
        var x = document.getElementById("snackbar");
        x.className = "show";
        x.textContent = "Copy to clipboard: " + this.textContent
        setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
    }
}


