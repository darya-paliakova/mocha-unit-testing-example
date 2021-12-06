const Calculator= require('../../app/calculator.js');
const chai = require('chai');
const spies = require('chai-spies');
const { expect } = require('chai').expect;
chai.use(spies);

describe('getAdd', () => {


    it('should return 23 when called with numbers 12 and 11', () => {
        expect(calculator.getAdd(12, 11)).to.equal(23);
    });

    it('should return -12 when called with numbers -12 and 0', function() {
        expect(calculator.getAdd(-12, 0)).to.equal(-12);
    });

    it('should throw an error if provided with not numbers', function() {
        let callWithError = () => calculator.getAdd('test', 12);
        expect(callWithError).to.throw(`Incorrect type of data!`);
    });
});