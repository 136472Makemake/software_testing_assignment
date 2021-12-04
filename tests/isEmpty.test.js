import isEmpty from '../src/isEmpty'

describe("isEmpty function", () => {
    test('returns true when given an empty string', () => {
        expect(isEmpty("")).toBe(true);
    });

    test('returns false when given an non-empty string', () => {
        expect(isEmpty("strawberry")).toBe(false);
    });

    test('returns true when given an empty array', () => {
        expect(isEmpty([])).toBe(true);
    });

    test('returns false when given an non-empty array', () => {
        expect(isEmpty([3, 5])).toBe(false);
    });

    test('returns true when given an empty object', () => {
        expect(isEmpty({})).toBe(true);
    });

    test('returns false when given an non-empty object', () => {
        expect(isEmpty({ test_object: "test_object"})).toBe(false);
    });
})