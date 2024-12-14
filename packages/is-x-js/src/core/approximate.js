const createApproximateMethods = (getValue, getTargetX, obj) => {
    const ROUGH_TOLERANCE = 0.2;     
    const APPROX_TOLERANCE = 0.5;    
    const ALMOST_TOLERANCE = 2;    

    // Helper function to check if value is within tolerance of target
    const isWithinTolerance = (tolerance) => {
        return Math.abs(getValue() - getTargetX()) <= tolerance;
    };

    return {
        // Roughly equal 
        roughly: {
            isX: () => isWithinTolerance(ROUGH_TOLERANCE)
        },

        // Approximately equal 
        approximately: {
            isX: () => isWithinTolerance(APPROX_TOLERANCE)
        },

        // Almost equal 
        almostX: () => isWithinTolerance(ALMOST_TOLERANCE),

        // Within custom range
        within: (range) => ({
            of: {
                isX: () => isWithinTolerance(range)
            }
        })
    };
};

module.exports = createApproximateMethods;