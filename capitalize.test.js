const capitalize = require("./capitalize");

test('returns string with first letter capitalized', () => {
    expect(capitalize('heyy')).toBe('Heyy');
})