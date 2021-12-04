import toInteger from "../src/toInteger";

describe("toInteger function", () => {
    test('Converts decimal number to integer', () => {
        expect(toInteger(3.2)).toBe(3);
    });

    test('Converts Javascript\'s minimum value to 0', () => {
        expect(toInteger(Number.MIN_VALUE)).toBe(0);
    });

    test('Converts string of a decimal number to integer', () => {
        expect(toInteger('3.2')).toBe(3);
    });
})