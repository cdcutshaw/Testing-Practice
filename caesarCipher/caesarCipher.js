function caesarCipher (string, key) {
    let result  = '';

    for (let i = 0; i < string.length; i++) {
        let char = string[i];

        if (char >= 'A' && char <= 'Z') {
            let shiftedChar = String.fromCharCode(((char.charCodeAt(0) - 65 + key) % 26 + 26) % 26 + 65);
            result += shiftedChar;
      
        } else if (char >= 'a' && char <= 'z') {
            let shiftedChar = String.fromCharCode(((char.charCodeAt(0) - 97 + key) % 26 + 26) % 26 + 97);
            result += shiftedChar;
        } else {
            result += char;
        }
    
    }
    return result;
}

module.exports = caesarCipher;