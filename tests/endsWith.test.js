import endsWith from '../src/endsWith'

describe("endsWith function", () => {
    test('Returns true when a string ends with the given character and no position is given', () => {
        expect(endsWith("strawberry", "y")).toBe(true);
    });

    test('Returns false when a string does not end with the given character and no position is given', () => {
        expect(endsWith("strawberry", "r")).toBe(false);
    });

    test('Returns true when a string contains the given character at the given position', () => {
        expect(endsWith("strawberry", "r",9)).toBe(true);
    });

    test('Returns false when a string doesn not contain the given character at the given position', () => {
        expect(endsWith("strawberry", "t",10)).toBe(false);
    });

    test('Checks the end of the string if the position is larger than the string\'s length', () => {
        expect(endsWith("strawberry", "y",15)).toBe(true);
    });
})