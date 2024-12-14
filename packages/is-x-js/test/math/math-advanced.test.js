const { is } = require('../../index');

describe('Advanced Math Operations', () => {
    beforeEach(() => {
        is(20).setX();  // Set target to 20
    });

    describe('squared', () => {
        test('should square the number and work with isX', () => {
            expect(is(4).squared().isX()).toBe(false);  // 4² = 16
            expect(is(5).squared().within(5).of.isX()).toBe(true);   // 5² = 25
        });
    });

    describe('squareRoot', () => {
        test('should calculate square root and work with isX', () => {
            expect(is(400).squareRoot().isX()).toBe(true);  // √400 = 20
            expect(is(100).squareRoot().isX()).toBe(false); // √100 = 10
        });

        test('should throw error for negative numbers', () => {
            expect(() => is(-4).squareRoot()).toThrow('Cannot calculate square root of negative number');
        });
    });

    describe('power', () => {
        test('should raise to power and work with isX', () => {
            expect(is(2).power(4).plus(4).isX()).toBe(true);  // 2⁴ + 4 = 20
        });
    });

    describe('root', () => {
        test('should calculate nth root and work with isX', () => {
            expect(is(8000).root(3).isX()).toBe(true);  // ∛8000 = 20
        });

        test('should throw error for invalid inputs', () => {
            expect(() => is(4).root(0)).toThrow('Root cannot be zero');
            expect(() => is(-4).root(2)).toThrow('Cannot calculate even root of negative number');
        });
    });

    describe('modulo', () => {
        test('should calculate modulo and work with isX', () => {
            expect(is(100).modulo(80).isX()).toBe(true);  // 100 % 80 = 20
        });

        test('should throw error when dividing by zero', () => {
            expect(() => is(4).modulo(0)).toThrow('Cannot divide by zero');
        });
    });

    describe('absolute', () => {
        test('should calculate absolute value and work with isX', () => {
            expect(is(-20).absolute().isX()).toBe(true);  // |-20| = 20
            expect(is(-15).absolute().isX()).toBe(false); // |-15| = 15
        });
    });

    describe('factorial', () => {
        test('should calculate factorial and work with isX', () => {
            is(6).setX();  // Set target to 6
            expect(is(3).factorial().isX()).toBe(true);  // 3! = 6
        });

        test('should throw error for invalid inputs', () => {
            expect(() => is(-4).factorial()).toThrow('Cannot calculate factorial of negative number');
            expect(() => is(3.5).factorial()).toThrow('Cannot calculate factorial of non-integer');
        });
    });

    describe('chaining', () => {
        test('should work with multiple advanced operations', () => {
            expect(
                is(2)           // 2
                .squared()      // 4
                .times(5)       // 20
                .isX()
            ).toBe(true);
        });
    });
});