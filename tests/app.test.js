// tests/app.test.js

const { add, multiply } = require('../src/app.js');  // Import functions from app.js

describe('Math functions', () => {
    test('adds two numbers correctly', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('multiplies two numbers correctly', () => {
        expect(multiply(4, 5)).toBe(20);
    });

    test('handles negative numbers', () => {
        expect(add(-1, -2)).toBe(-3);
        expect(multiply(-2, 3)).toBe(-6);
    });
});
