const { describe, it } = require('mocha');
const { expect } = require('chai');
const Calculator = require('../../app/calculator');

describe('getAdd', () => {
    const calculator = new Calculator();

    it('should return 23 when called with numbers 12 and 11', () => {
        expect(calculator.getAdd(12, 11)).to.be.equal(23);
    });

    it('should return -12 when called with numbers -12 and 0', () => {
        expect(calculator.getAdd(-12, 0)).to.equal(-12);
    });

    it('should throw an error if provided with not numbers', () => {
        expect(calculator.getAdd('test', 12)).to.throw(Error);
    });
});
