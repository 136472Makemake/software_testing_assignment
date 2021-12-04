import defaultTo from '../src/defaultTo'

describe("defaultTo function", () => {
    test('Returns the default value when the main value is null', () => {
        expect(defaultTo(null, 10)).toBe(10);
    });

    test('Returns the default value when the main value is NaN', () => {
        expect(defaultTo(NaN, 10)).toBe(10);
    });

    test('Returns the default value when the main value is undefined', () => {
        expect(defaultTo(undefined, 10)).toBe(10);
    });

    test('Returns the main value when it is a string', () => {
        expect(defaultTo("string", 10)).toBe("string");
    });

    test('Returns the main value when it is a number', () => {
        expect(defaultTo(2, 10)).toBe(2);
    });

    test('Returns the main value when it is an object', () => {
        const test_object = {
            test: "object"
        }
        expect(defaultTo(test_object, 10)).toBe(test_object);
    });

    test('Returns the main value when it is a number', () => {
        expect(defaultTo(2, 10)).toBe(2);
    });
})