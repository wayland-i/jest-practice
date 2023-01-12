const subtract = require('./subract');

test('properly subtracts two numbers', () => {
    expect(subtract(1, 2)).toBe(-1);
});