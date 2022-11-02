let generatePassword = document.getElementById("btn-generate-password")
let generatedPassword1 = document.getElementById("generated-password1")
let generatedPassword2 = document.getElementById("generated-password2")


const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];


generatePassword.addEventListener('click', function () {


    let password1 = ""
    let password2 = ""
    // generatedPassword1.textContent += characters[randomIndex1]

    for (let i = 0; i < 8; i++) {
        let randomIndex1 = Math.floor(Math.random() * characters.length)
        let randomIndex2 = Math.floor(Math.random() * characters.length)
        password1 += characters[randomIndex1]
        password2 += characters[randomIndex2]
    }

    generatedPassword1.textContent = password1
    generatedPassword2.textContent = password2
})

function generateRandomIndex(index) {
    return Math.floor(Math.random() * characters.length)
} 