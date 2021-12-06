class Calculator{

    getAdd(firstNumber, secondNumber){
        if((typeof firstNumber) !== 'number' || (typeof secondNumber) !== 'number'){
            throw new Error(`[${firstNumber}] OR [${secondNumber}] are not numbers.`);
        } else {
            return firstNumber + secondNumber;
        }
    }

    getMultiply(firstNumber, secondNumber){
        if((typeof firstNumber) !== 'number' || (typeof secondNumber) !== 'number'){
            throw new Error(`[${firstNumber}] OR [${secondNumber}] are not numbers.`);
        } else {
            return firstNumber * secondNumber;
        }
    }
};

module.exports = Calculator;