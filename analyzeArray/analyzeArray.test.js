const analyzeArray = require("./analyzeArray");

describe('analyzeArray', () => {
    test('should return correct avaerage, min, max, and length for a simple array', () => {
        const result = analyzeArray([1, 8, 3, 4, 2, 6]);
        expect(result).toEqual({
            average: 4, 
            min: 1, 
            max: 8,
            length: 6
        });
    });

    test('should handle a single-element array', () => {
        const result = analyzeArray([5]);
        expect(result).toEqual({
            average: 5, 
            min: 5, 
            max: 5, 
            length: 1
        });
    });

    test('should handle an empty array', () => {
        const result = analyzeArray([]);
        expect(result).toEqual({
            average: null, 
            min: null, 
            max: null, 
            length: 0
        });
    });

    test('should handle arrays w/ pos, neg, and 0 values ', () => {
        const result = analyzeArray([3, -1, 0, 7, 4]);
        expect(result).toEqual({
            average: 2.6,
            min: -1, 
            max: 7, 
            length: 5
        });
    });
});