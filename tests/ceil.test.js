import ceil from '../src/ceil'

describe("ceil function", () => {
    test('Rounds up to the nearest integer when no precision is given', () => {
        expect(ceil(4.006)).toBe(5);
    });

    test('Rounds up to the precision given', () => {
        expect(ceil(6.004, 2)).toBe(6.01);
    });

    test('Rounds up to a negative precision', () => {
        expect(ceil(6040, -2)).toBe(6100);
    });

    
})