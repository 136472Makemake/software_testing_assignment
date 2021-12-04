import upperFirst from '../src/upperFirst'

describe("upperFirst function", () => {
    test('Converts the first character of a string to upper case', () => {
        expect(upperFirst("sTrawBerRy")).toBe("STrawBerRy");
    });

    test('Does not capitalize the first letter if the first character is not a letter', () => {
        expect(upperFirst("3sTrawBerRy")).toBe("3sTrawBerRy");
    });
})