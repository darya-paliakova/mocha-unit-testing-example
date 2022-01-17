const { describe, it } = require('mocha');
const { expect } = require('chai');
const calculator = require('../app/calculator.js');

describe('getMultiply', () => {

    it('should return 6 when called with numbers 2 and 3', () => {
        expect(calculator.getMultiply(2, 3)).to.equal(23);
    });

    it('should return -6 when called with numbers -2 and 3', function() {
        expect(calculator.getMultiply(-2, 3)).to.equal(-6);
    });

    it('should return 6 when called with numbers -2 and -3', function() {
        expect(calculator.getMultiply(-2, -3)).to.equal(6);
    });

    it('should return 0 when called with numbers 6 and 0', function() {
        expect(calculator.getMultiply(6, 0)).to.equal(0);
    });

    it('should throw an error if provided with not numbers', function() {
        expect(calculator.getMultiply('test', 12)).to.throw(`Incorrect type of data!`);
    });
});