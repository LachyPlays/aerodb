const sum_module = require('../../src/sum');

test('ensures 1 + 2 is, in fact, equal to 3', () => {
    expect(sum_module(1, 2)).toBe(3);
});