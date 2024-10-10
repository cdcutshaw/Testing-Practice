const capitalize = require('./capitalize');

test('Single word string, lowercase', () => {
    expect(capitalize("hello")).toBe("Hello");
});

test('Single word string, uppercase', () => {
    expect(capitalize("Hello")).toBe("Hello");
});

test('Single word string, all caps', () => {
    expect(capitalize("HELLO")).toBe("HELLO");
});

test('multi-word string, lowercase', () => {
    expect(capitalize("hello. how are you?")).toBe("Hello. how are you?");
});

test('throw error for empty input', () => {
    expect(() => capitalize()).toThrow('invalid input. please enter a string');
});

test('throw error for number input', () => {
    expect(() => capitalize(4546)).toThrow(Error);
});

