const reverseString = require('./reverseString');

test('returns string in reverse order', () => {
    expect(reverseString('abcdef')).toBe('fedcba');
})