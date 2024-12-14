const { is } = require('../../index');

describe('Text Conversions', () => {
   describe('inWords', () => {
       test('should convert word numbers to numeric values', () => {
           is(20).setX();
           expect(is('twenty').inWords.of.isX()).toBe(true);
           expect(is('nineteen').inWords.of.isX()).toBe(false);
       });

       test('should handle complex numbers', () => {
           is(123).setX();
           expect(is('one hundred twenty three').inWords.of.isX()).toBe(true);
           expect(is('one hundred twenty four').inWords.of.isX()).toBe(false);
       });

       test('should handle invalid inputs', () => {
           is(20).setX();
           expect(is('invalid text').inWords.of.isX()).toBe(false);
       });
   });

   describe('inMorse', () => {
       test('should convert morse code to numbers', () => {
           is(2).setX();
           expect(is('..---').inMorse.of.isX()).toBe(true);
           expect(is('...--').inMorse.of.isX()).toBe(false);
       });

       test('should handle invalid morse code', () => {
           is(2).setX();
           expect(is('....').inMorse.of.isX()).toBe(false);
       });
   });

   describe('inRoman', () => {
       test('should convert roman numerals to numbers', () => {
           is(20).setX();
           expect(is('XX').inRoman.of.isX()).toBe(true);
           expect(is('XXI').inRoman.of.isX()).toBe(false);
       });

       test('should handle complex roman numerals', () => {
           is(4).setX();
           expect(is('IV').inRoman.of.isX()).toBe(true);
           expect(is('IIII').inRoman.of.isX()).toBe(false);
       });
   });

   describe('inLeetSpeak', () => {
       test('should convert leetspeak to numbers', () => {
           is(420).setX();
           expect(is('42O').inLeetSpeak.of.isX()).toBe(true);
           expect(is('421').inLeetSpeak.of.isX()).toBe(false);
       });

       test('should handle invalid leetspeak', () => {
           is(420).setX();
           expect(is('INVALID').inLeetSpeak.of.isX()).toBe(false);
       });
   });
});