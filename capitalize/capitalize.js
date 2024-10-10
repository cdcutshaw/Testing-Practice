function capitalize (input) {
    if (typeof input !== 'string' || input == undefined) {
        throw new Error ('invalid input. please enter a string');
    }
    return input.charAt(0).toUpperCase() + input.slice(1); 
}

module.exports = capitalize;