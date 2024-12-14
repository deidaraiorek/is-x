const { is } = require('../../index');

describe('X Properties', () => {
   beforeAll(() => {
       is(20).setX();  
   });

   describe('isPerfectSquare', () => {
       test('should identify perfect squares', () => {
            expect(is.X.isPerfectSquare()).toBe(false); // 20 is not perfect square

           is(16).setX();
           expect(is.X.isPerfectSquare()).toBe(true);  // 16 is perfect square
       });
   });

   describe('isPrime', () => {
       test('should identify prime numbers', () => {
           expect(is.X.isPrime()).toBe(false);  // 20 is not prime

           is(17).setX();
           expect(is.X.isPrime()).toBe(true);   // 17 is prime
           
           is(1).setX();
           expect(is.X.isPrime()).toBe(false);  // 1 is not prime
       });
   });

   describe('isFibonacci', () => {
       test('should identify Fibonacci numbers', () => {
        is(20).setX();
        expect(is.X.isFibonacci()).toBe(false);  // 20 is not Fibonacci

           is(13).setX();
           expect(is.X.isFibonacci()).toBe(true);   // 13 is Fibonacci
                  });
   });

   describe('isEven/isOdd', () => {
       test('should identify even and odd numbers', () => {
            is(20).setX();
           expect(is.X.isEven()).toBe(true);
           expect(is.X.isOdd()).toBe(false);

           is(15).setX();
           expect(is.X.isEven()).toBe(false);
           expect(is.X.isOdd()).toBe(true);
       });
   });

   describe('isDivisibleBy', () => {
       test('should check divisibility', () => {
        is(20).setX();
           expect(is.X.isDivisibleBy(4)).toBe(true);   // 20 is divisible by 4
           expect(is.X.isDivisibleBy(3)).toBe(false);  // 20 is not divisible by 3
       });

       test('should throw error for zero divisor', () => {
           expect(() => is.X.isDivisibleBy(0)).toThrow('Cannot divide by zero');
       });
   });

   describe('hasFactors', () => {
       test('should return all factors', () => {
           is(12).setX();
           expect(is.X.hasFactors()).toEqual([1, 2, 3, 4, 6, 12]);
           
           is(7).setX();
           expect(is.X.hasFactors()).toEqual([1, 7]);  // Prime number
       });
   });

   describe('isMultipleOf', () => {
       test('should check if number is multiple', () => {
              is(20).setX();
           expect(is.X.isMultipleOf(4)).toBe(true);    // 20 is multiple of 4
           expect(is.X.isMultipleOf(3)).toBe(false);   // 20 is not multiple of 3
       });

       test('should throw error for zero', () => {
           expect(() => is.X.isMultipleOf(0)).toThrow('Cannot be multiple of zero');
       });
   });

   
});