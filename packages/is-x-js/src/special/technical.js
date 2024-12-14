const createTechnicalMethods = (getTargetX) => {
    return {
        isPort: () => {
            return Number.isInteger(getTargetX()) && 
                   getTargetX() >= 0 && 
                   getTargetX() <= 65535;
        },
        
        isHttpStatus: () => {
            const validStatusCodes = [
                // 1xx informational
                100, 101, 102, 103,
                // 2xx success
                200, 201, 202, 203, 204, 205, 206, 207, 226,
                // 3xx redirection
                300, 301, 302, 303, 304, 305, 307, 308,
                // 4xx client errors
                400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410,
                411, 412, 413, 414, 415, 416, 417, 418, 421, 422, 423,
                424, 425, 426, 428, 429, 431, 451,
                // 5xx server errors
                500, 501, 502, 503, 504, 505, 506, 507, 508, 510, 511
            ];
            return validStatusCodes.includes(getTargetX());
        },
        
        isRGBValue: () => {
            return Number.isInteger(getTargetX()) && 
                   getTargetX() >= 0 && 
                   getTargetX() <= 255;
        },
        
        isVersion: () => {
            // Checks if number could be part of semantic versioning
            return Number.isInteger(getTargetX()) && 
                   getTargetX() >= 0;
        },
        
        isPhoneNumber: () => {
            // Basic check for reasonable phone number length
            const str = getTargetX().toString();
            return /^\d{10,15}$/.test(str);
        }
    };
};

module.exports = createTechnicalMethods;