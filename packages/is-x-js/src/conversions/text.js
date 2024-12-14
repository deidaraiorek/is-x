const wordsToNumbers = require('words-to-numbers').wordsToNumbers;

const createTextMethods = (getValue, getTargetX, obj) => {
   const morseCode = {
       '0': '-----', '1': '.----', '2': '..---',
       '3': '...--', '4': '....-', '5': '.....',
       '6': '-....', '7': '--...', '8': '---..',
       '9': '----.'
   };

   const romanNumerals = {
       'I': 1, 'IV': 4, 'V': 5, 'IX': 9, 'X': 10,
       'XL': 40, 'L': 50, 'XC': 90, 'C': 100,
       'CD': 400, 'D': 500, 'CM': 900, 'M': 1000
   };

   const leetMap = {
       'A': '4', 'E': '3', 'G': '6', 'I': '1', 
       'O': '0', 'S': '5', 'T': '7', 'Z': '2'
   };

   // Helper functions
   const isValidRoman = (str) => {
    // Valid Roman numeral pattern
    const pattern = /^M{0,3}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    return pattern.test(str.toUpperCase());
};

const fromRoman = (str) => {
    if (!isValidRoman(str)) {
        return null;
    }

    let result = 0;
    str = str.toUpperCase();
    for (let i = 0; i < str.length; i++) {
        const current = romanNumerals[str[i]];
        const next = romanNumerals[str[i + 1]];
        if (next > current) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }
    return result;
};

   const fromLeetSpeak = (str) => {
       str = str.toUpperCase();
       for (const [letter, num] of Object.entries(leetMap)) {
           str = str.replace(new RegExp(letter, 'g'), num);
       }
       return parseInt(str);
   };

   return {
       inWords: {
           of: {
               isX: () => {
                   try {
                       const input = getValue().toString().toLowerCase();
                       const number = wordsToNumbers(input);
                       return number === getTargetX();
                   } catch (error) {
                       return false;
                   }
               }
           }
       },

       inMorse: {
           of: {
               isX: () => {
                   const morse = getValue().toString();
                   for (let [num, code] of Object.entries(morseCode)) {
                       if (code === morse && parseInt(num) === getTargetX()) {
                           return true;
                       }
                   }
                   return false;
               }
           }
       },

       inRoman: {
           of: {
               isX: () => {
                   try {
                       const value = fromRoman(getValue().toString());
                       return value === getTargetX();
                   } catch (error) {
                       return false;
                   }
               }
           }
       },

       inLeetSpeak: {
           of: {
               isX: () => {
                   try {
                       const value = fromLeetSpeak(getValue().toString());
                       return value === getTargetX();
                   } catch (error) {
                       return false;
                   }
               }
           }
       }
   };
};

module.exports = createTextMethods;