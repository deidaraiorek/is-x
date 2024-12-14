const createFunNumberMethods = (getTargetX) => {
    const currentDate = new Date();
    
    return {
        isCurrentHour: () => getTargetX() === currentDate.getHours(),
        
        isCurrentYear: () => getTargetX() === currentDate.getFullYear(),
        
        isAnswerToLife: () => getTargetX() === 42,
        
        isUnlucky: () => getTargetX() === 13,
        
        isAgeInDogYears: () => {
            // Human age * 7 is roughly dog years
            const humanYears = getTargetX() / 7;
            return humanYears >= 0 && humanYears <= 20;  // Reasonable age range
        },
        
        isDiceRoll: () => {
            return Number.isInteger(getTargetX()) && 
                   getTargetX() >= 1 && 
                   getTargetX() <= 6;
        },
        
        isCardNumber: () => {
            // 1-13 for regular cards (Ace to King)
            return Number.isInteger(getTargetX()) && 
                   getTargetX() >= 1 && 
                   getTargetX() <= 13;
        },
        
        isHighScore: () => {
            return getTargetX() >= 1000;
        },
        
        isPokemonNumber: () => {
            // Valid Pokémon numbers (1-898 in latest gen)
            return Number.isInteger(getTargetX()) && 
                   getTargetX() >= 1 && 
                   getTargetX() <= 898;
        }
    };
};

module.exports = createFunNumberMethods;