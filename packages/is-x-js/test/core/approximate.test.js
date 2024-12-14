const { is } = require('../../index'); // Import the `is` function from index.js

describe('Approximate Comparisons (via is object)', () => {
    let obj;

    beforeEach(() => {
        obj = is(20); 
        obj.setX(); 
    });

    describe('roughly', () => {
        test('should return true for values within 0.2 unit', () => {
            obj = is(19.9);
            expect(obj.roughly.isX()).toBe(true);

            obj = is(20.1);
            expect(obj.roughly.isX()).toBe(true);
        });

        test('should return false for values outside 0.2 unit', () => {
            obj = is(16);
            expect(obj.roughly.isX()).toBe(false);

            obj = is(24);
            expect(obj.roughly.isX()).toBe(false);
        });
    });

    describe('approximately', () => {
        test('should return true for values within 0.5 unit', () => {
            obj = is(19.5);
            expect(obj.approximately.isX()).toBe(true);

            obj = is(20.4);
            expect(obj.approximately.isX()).toBe(true);
        });

        test('should return false for values outside 0.5 unit', () => {
            obj = is(10);
            expect(obj.approximately.isX()).toBe(false);

            obj = is(30);
            expect(obj.approximately.isX()).toBe(false);
        });
    });

    describe('almostX', () => {
        test('should return true for values within 2 units', () => {
            obj = is(18);
            expect(obj.almostX()).toBe(true);

            obj = is(22);
            expect(obj.almostX()).toBe(true);
        });

        test('should return false for values beyond 2 units', () => {
            obj = is(17);
            expect(obj.almostX()).toBe(false);

            obj = is(23);
            expect(obj.almostX()).toBe(false);
        });
    });

    describe('within', () => {
        test('should return true for values within specified range using fluent interface', () => {
            obj = is(17);
            expect(obj.within(3).of.isX()).toBe(true);

            obj = is(23);
            expect(obj.within(3).of.isX()).toBe(true);
        });

        test('should return false for values outside specified range using fluent interface', () => {
            obj = is(16);
            expect(obj.within(3).of.isX()).toBe(false);

            obj = is(24);
            expect(obj.within(3).of.isX()).toBe(false);
        });
    });
});
