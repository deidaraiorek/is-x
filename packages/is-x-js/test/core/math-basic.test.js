// test/core/math-basic.test.js
const { is } = require('../../index');

describe('Basic Math Operations', () => {
   beforeEach(() => {
       // Set target to 20 before each test
       is(20).setX();
   });

   describe('plus', () => {
       test('should add number and work with isX', () => {
           expect(is(15).plus(5).isX()).toBe(true);    // 15 + 5 = 20
           expect(is(15).plus(6).isX()).toBe(false);   // 15 + 6 ≠ 20
       });
   });

   describe('minus', () => {
       test('should subtract number and work with isX', () => {
           expect(is(25).minus(5).isX()).toBe(true);    // 25 - 5 = 20
           expect(is(25).minus(4).isX()).toBe(false);   // 25 - 4 ≠ 20
       });
   });

   describe('times', () => {
       test('should multiply by number and work with isX', () => {
           expect(is(10).times(2).isX()).toBe(true);    // 10 * 2 = 20
           expect(is(10).times(3).isX()).toBe(false);   // 10 * 3 ≠ 20
       });
   });

   describe('dividedBy', () => {
       test('should divide by number and work with isX', () => {
           expect(is(40).dividedBy(2).isX()).toBe(true);    // 40 / 2 = 20
           expect(is(40).dividedBy(3).isX()).toBe(false);   // 40 / 3 ≠ 20
       });

       test('should throw error when dividing by zero', () => {
           expect(() => is(40).dividedBy(0)).toThrow('Cannot divide by zero');
       });
   });

   describe('chaining operations', () => {
       test('should handle multiple operations in sequence', () => {
           expect(
               is(10)      // 10
               .plus(5)    // 15
               .times(2)   // 30
               .minus(10)  // 20
               .isX()
           ).toBe(true);

           expect(
               is(10)      // 10
               .times(2)   // 20
               .plus(10)   // 30
               .dividedBy(2) // 15
               .isX()
           ).toBe(false);
       });
   });
});