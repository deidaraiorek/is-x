const createBasicMathMethods = (getValue, setValue, obj) => ({
    // Basic math operations
    plus: (n) => {
        setValue(getValue() + n);
        return obj;
    },
    minus: (n) => {
        setValue(getValue() - n);
        return obj;
    },
    times: (n) => {
        setValue(getValue() * n);
        return obj;
    },
    dividedBy: (n) => {
        if (n === 0) throw new Error('Cannot divide by zero');
        setValue(getValue() / n);
        return obj;
    }
});

module.exports = createBasicMathMethods;