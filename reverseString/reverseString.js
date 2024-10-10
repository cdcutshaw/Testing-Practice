function reverseString (input) {
    if (typeof input !== 'string' || input == undefined) {
        throw new Error ('invalid input. please enter a string');
    }
    return input.split("").reverse().join("");
}

module.exports = reverseString;