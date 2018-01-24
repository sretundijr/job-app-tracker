const chai = require('chai');

const should = chai.should();

const add = require('../src/validation');

describe('it should return true', function () {
    it('does it work', function () {
        const answer = add();
        answer.should.be.true;
    })
})