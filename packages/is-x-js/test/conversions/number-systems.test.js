const { is } = require('../../index');

describe('Number System Conversions', () => {
    beforeEach(() => {
        is(20).setX();  // Set target to 20
    });

    describe('inBinary', () => {
        test('should convert binary to decimal and compare with X', () => {
            expect(is('10100').inBinary().of.isX()).toBe(true);   // 10100 binary = 20 decimal
            expect(is('10101').inBinary().of.isX()).toBe(false);  // 10101 binary ≠ 20 decimal
        });
    });

    describe('inHex', () => {
        test('should convert hex to decimal and compare with X', () => {
            expect(is('14').inHex().of.isX()).toBe(true);    // 14 hex = 20 decimal
            expect(is('15').inHex().of.isX()).toBe(false);   // 15 hex ≠ 20 decimal
        });
    });

    describe('inOctal', () => {
        test('should convert octal to decimal and compare with X', () => {
            expect(is('24').inOctal().of.isX()).toBe(true);   // 24 octal = 20 decimal
            expect(is('25').inOctal().of.isX()).toBe(false);  // 25 octal ≠ 20 decimal
        });
    });

    describe('inScientificNotation', () => {
        test('should convert scientific notation to decimal and compare with X', () => {
            expect(is('2e1').inScientificNotation().of.isX()).toBe(true);   // 2e1 = 20
            expect(is('2.5e1').inScientificNotation().of.isX()).toBe(false); // 2.5e1 = 25
        });
    });
});