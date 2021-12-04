import words from '../src/words'

describe("words function", () => {
    test('Returns the words in a string composed of alphanumerical characters if no pattern is provided', () => {
        expect(words("fred, barney, & 3 pebbles")).toStrictEqual(['fred', 'barney', '3', 'pebbles']);
    });

    test('Returns the words in a string that match the pattern provided', () => {
        expect(words("fred, barney, & 3 pebbles", /[^, ]+/g)).toStrictEqual(['fred', 'barney', '&', '3', 'pebbles']);
    });
})