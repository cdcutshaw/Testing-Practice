const caesarCipher = require("./caesarCipher");

describe('Caesar Cipher', () => {

    test('should shift letters by the key', () => {
        expect(caesarCipher('abc', 1)).toBe('bcd');
    });

    test('should wrap from Z to A', () => {
        expect(caesarCipher('xyz', 3)).toBe('abc');
    });

    test('should work for lowercase and uppercase letters', () => {
        expect(caesarCipher('Hello', 5)).toBe('Mjqqt');
    });

    test('should keep non-letter chars unchanged', () => {
        expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!')
    })
})