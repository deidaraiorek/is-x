const { is } = require('../../index');

describe('Fun Number Properties', () => {
    describe('Current Date/Time', () => {
        test('isCurrentHour should match current hour', () => {
            const currentHour = new Date().getHours();
            is(currentHour).setX();
            expect(is.X.isCurrentHour()).toBe(true);
        });

        test('isCurrentYear should match current year', () => {
            const currentYear = new Date().getFullYear();
            is(currentYear).setX();
            expect(is.X.isCurrentYear()).toBe(true);
        });
    });

    describe('Special Numbers', () => {
        test('should identify answer to life', () => {
            is(42).setX();
            expect(is.X.isAnswerToLife()).toBe(true);
            is(41).setX();
            expect(is.X.isAnswerToLife()).toBe(false);
        });

        test('should identify unlucky number', () => {
            is(13).setX();
            expect(is.X.isUnlucky()).toBe(true);
            is(7).setX();
            expect(is.X.isUnlucky()).toBe(false);
        });
    });

    describe('Game Numbers', () => {
        test('should validate dice rolls', () => {
            is(6).setX();
            expect(is.X.isDiceRoll()).toBe(true);
            is(7).setX();
            expect(is.X.isDiceRoll()).toBe(false);
        });

        test('should validate card numbers', () => {
            is(1).setX();  // Ace
            expect(is.X.isCardNumber()).toBe(true);
            is(13).setX(); // King
            expect(is.X.isCardNumber()).toBe(true);
            is(14).setX();
            expect(is.X.isCardNumber()).toBe(false);
        });

        test('should validate Pokémon numbers', () => {
            is(1).setX();   // Bulbasaur
            expect(is.X.isPokemonNumber()).toBe(true);
            is(898).setX(); // Calyrex
            expect(is.X.isPokemonNumber()).toBe(true);
            is(899).setX();
            expect(is.X.isPokemonNumber()).toBe(false);
        });
    });
});