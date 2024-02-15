/*
    A super simple cipher, just to try it out, it would apply a shift of 7 to the msg
    to encipher it, then the decryption would be to apply a -7 shift to get the original msg
*/

const encipher = (msg) => {

    let encryptedText = "";
    for (let i = 0; i < msg.length; i++) {
        let shift = 7
        let encryptedChar = String.fromCharCode(((msg.charCodeAt(i) + shift))) 
        encryptedText += encryptedChar;
    }

    console.log(encryptedText)
    return encryptedText;
}

const decrypt = (encryptedText) => {
    let decryptedText = "";
    for (let i = 0; i < encryptedText.length; i++) {
        let shift = 7

        let decryptedChar = String.fromCharCode(((encryptedText.charCodeAt(i) - shift)))
        decryptedText += decryptedChar;
    }
    return decryptedText;
}

let ciphered = encipher('I love cryptography!')
console.log(decrypt(ciphered))