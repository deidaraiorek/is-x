const createAdvancedMathMethods = (getValue, setValue, obj) => {
    return {
        // Square the current value
        squared: () => {
            setValue(getValue() * getValue());
            return obj;
        },

        // Square root of current value
        squareRoot: () => {
            if (getValue() < 0) {
                throw new Error('Cannot calculate square root of negative number');
            }
            setValue(Math.sqrt(getValue()));
            return obj;
        },

        // Raise to a power
        power: (n) => {
            setValue(Math.pow(getValue(), n));
            return obj;
        },

        // Take nth root
        root: (n) => {
            if (n === 0) {
                throw new Error('Root cannot be zero');
            }
            if (n % 2 === 0 && getValue() < 0) {
                throw new Error('Cannot calculate even root of negative number');
            }
            const result = Math.pow(getValue(), 1/n);
            setValue(Math.round(result * 100) / 100); 
            return obj;
        },

        // Modulo operation
        modulo: (n) => {
            if (n === 0) {
                throw new Error('Cannot divide by zero');
            }
            setValue(getValue() % n);
            return obj;
        },

        // Absolute value
        absolute: () => {
            setValue(Math.abs(getValue()));
            return obj;
        },

        // Factorial
        factorial: () => {
            const num = getValue();
            if (num < 0) {
                throw new Error('Cannot calculate factorial of negative number');
            }
            if (!Number.isInteger(num)) {
                throw new Error('Cannot calculate factorial of non-integer');
            }
            let result = 1;
            for (let i = 2; i <= num; i++) {
                result *= i;
            }
            setValue(result);
            return obj;
        }
    };
};

module.exports = createAdvancedMathMethods;