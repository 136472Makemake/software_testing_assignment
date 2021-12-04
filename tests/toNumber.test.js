import toNumber from '../src/toNumber'

describe("toNumber function", () => {
    test('Converts string of a number to the number', () => {
        expect(toNumber("3.2")).toBe(3.2);
    });
})