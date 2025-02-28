const caesarCipher = require("./caesarCipher");

test('xyz returns ciphered as abc', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('HeLLo returns ciphered as KhOOr', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('Hello, World! returns ciphered as Khoor, Zruog!', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})

