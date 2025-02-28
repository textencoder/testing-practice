function caesarCipher(str, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let cipher = "";

  for (const char of str) {
    if (alphabet.includes(char)) {
      alphabet.indexOf(char) + shift > 25
        ? (cipher += alphabet[alphabet.indexOf(char) + shift - 26])
        : (cipher += alphabet[alphabet.indexOf(char) + shift]);
    } else if (alphabet.includes(char.toLowerCase())) {
      alphabet.indexOf(char) + shift > 25
        ? (cipher +=
            alphabet[
              alphabet.indexOf(char.toLowerCase()) + shift - 26
            ].toUpperCase())
        : (cipher +=
            alphabet[
              alphabet.indexOf(char.toLowerCase()) + shift
            ].toUpperCase());
    } else {
      cipher += char;
    }
  }
  return cipher;
}

module.exports = caesarCipher;
