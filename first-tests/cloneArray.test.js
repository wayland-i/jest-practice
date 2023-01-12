const cloneArray = require('./cloneArray');

test('returns a new array with the same elements', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).toStrictEqual(array);
    expect(cloneArray(array)).not.toBe(array);
})