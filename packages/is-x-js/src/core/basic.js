const createBasicMethods = (getValue, getTargetX, obj) => {
    return {
        // Basic equality check
        isX: () =>  getValue() === getTargetX(),

        // Alias for isX
        equals: () =>  getValue() === getTargetX(),

        // Negative check
        isNotX: () =>  getValue() !== getTargetX(),

    };
};

module.exports = createBasicMethods;