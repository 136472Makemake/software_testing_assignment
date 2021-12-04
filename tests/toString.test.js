import toString from '../src/toString'

describe("toString function", () => {
    test('Converts null to an empty string', () => {
        expect(toString(null)).toBe("");
    });

    test('Converts undefined to an empty string', () => {
        expect(toString(undefined)).toBe("");
    });

    test('Converts a number to a string', () => {
        expect(toString(3.2)).toBe("3.2");
    });

    test('Converts an array to a string where the elements are comma divided', () => {
        expect(toString(["a", "b", 3])).toBe("a,b,3");
    });

    test('Return the same value if a string is given', () => {
        expect(toString("strawberry")).toBe("strawberry");
    });
})