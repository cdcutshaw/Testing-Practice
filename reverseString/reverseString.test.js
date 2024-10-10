const reverseString = require ('./reverseString')

test('returns a reversed string', () => {
    expect(reverseString("test")).toBe("tset");
});

test('reverses string with capital letters', () => {
    expect(reverseString("TeSt")).toBe("tSeT");
});

test('returns reversed multi-word string', () => {
    expect(reverseString("this is a string containing multiple words")).toBe("sdrow elpitlum gniniatnoc gnirts a si siht")
})

test('throw error for empty input', () => {
    expect(() => reverseString()).toThrow('invalid input. please enter a string');
});

test('throw error for empty input', () => {
    expect(() => reverseString()).toThrow('invalid input. please enter a string');
});

test('throw error for number input', () => {
    expect(() => reverseString(123)).toThrow('invalid input. please enter a string');
});
