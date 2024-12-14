const createXProperties = (getTargetX) => ({
    isPerfectSquare: () => {
        const num = getTargetX();
        return Math.sqrt(num) % 1 === 0;
    },
 
    isPrime: () => {
        const num = getTargetX();
        if (num <= 1) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    },
 
    isFibonacci: () => {

        const num = getTargetX();
        const isPerfectSquare = n => Math.sqrt(n) % 1 === 0;
        return isPerfectSquare(5 * num * num + 4) || 
               isPerfectSquare(5 * num * num - 4);
    },
 
    isEven: () => getTargetX() % 2 === 0,
    
    isOdd: () => getTargetX() % 2 !== 0,
    
    isDivisibleBy: (n) => {
        if (n === 0) throw new Error('Cannot divide by zero');
        return getTargetX() % n === 0;
    },
 
    hasFactors: () => {
        const num = getTargetX();
        const factors = [];
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) {
                factors.push(i);
            }
        }
        return factors;
    },
 
    isMultipleOf: (n) => {
        if (n === 0) throw new Error('Cannot be multiple of zero');
        return getTargetX() % n === 0;
    },
 
    isFactor: (n) => {
        const num = getTargetX();
        return n !== 0 && num % n === 0;
    }
 });
 
 module.exports = createXProperties;