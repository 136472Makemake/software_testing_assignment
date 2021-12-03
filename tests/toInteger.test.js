import toInteger from "../src/toInteger";

describe("Check if value is integer", () => {
    test('Decimal value is converted to integer.', () => {
        expect(toInteger(3.2)).toBe(3);
    });

    test('Is converted to value zero.', () => {
        expect(toInteger(Number.MIN_VALUE)).toBe(0);
    });

    test('String to integer.', () => {
        expect(toInteger('3.2')).toBe(3);
    });
})