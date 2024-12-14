const createNumberSystemMethods = (getValue, getTargetX, obj) => {
    return {
        inBinary: () => ({
            of: {
                isX: () => {
                    const binaryValue = parseInt(getValue().toString(), 2);
                    return binaryValue === getTargetX();
                }
            }
        }),

        inHex: () => ({
            of: {
                isX: () => {
                    const hexValue = parseInt(getValue().toString(), 16);
                    return hexValue === getTargetX();
                }
            }
        }),

        inOctal: () => ({
            of: {
                isX: () => {
                    const octalValue = parseInt(getValue().toString(), 8);
                    return octalValue === getTargetX();
                }
            }
        }),

        inScientificNotation: () => ({
            of: {
                isX: () => {
                    // Handle scientific notation like "1e2" (100)
                    const notationValue = Number(getValue().toString());
                    return notationValue === getTargetX();
                }
            }
        })
    };
};

module.exports = createNumberSystemMethods;