const analyzeArray = require("./analyzeArray");

test('returns average of array', () => {
    const result = { average: 7, min: 3, max: 11, length: 5 }
    expect(analyzeArray([5,7,9,11,3])).toMatchObject(result);
})