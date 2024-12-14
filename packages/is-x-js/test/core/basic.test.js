const { is } = require('../../index');  // Import the main is function

describe('isX Method from is Object', () => {
    beforeEach(() => {
        is(20).setX();
    });

    describe('isX', () => {
        test('should return true when currentValue equals targetX', () => {
            expect(is(20).isX()).toBe(true);
        });

        test('should return false when currentValue does not equal targetX', () => {
            expect(is(21).isX()).toBe(false);
        });
    });

    describe('isNot', () => {
        test('should return false when currentValue equals targetX', () => {
            expect(is(20).isNotX()).toBe(false);
        });

        test('should return true when currentValue does not equal targetX', () => {
            expect(is(21).isNotX()).toBe(true);
        });
    });
});