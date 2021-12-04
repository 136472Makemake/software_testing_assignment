import capitalize from '../src/capitalize'

describe("capitalize function", () => {
    test('Converts the first character of a string to upper case and the remaining to lower case.', () => {
        expect(capitalize("sTrawBerRy")).toBe("Strawberry");
    });

    test('Does not capitalize the first letter if the first character is not a letter', () => {
        expect(capitalize("3sTrawBerRy")).toBe("3strawberry");
    });
})