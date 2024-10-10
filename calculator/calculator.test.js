const calculator = require("./calculator")

test ('add', () => {
    expect(new calculator().add(2, 3)).toEqual(5);
});

test ('subtract', () => {
    expect(new calculator().subtract(10,7)).toEqual(3)
});

test ('multiply', () => {
    expect(new calculator().multiply(10,6)).toEqual(60)
});

test ('divide', () => {
    expect(new calculator().divide(100,4)).toEqual(25)
})