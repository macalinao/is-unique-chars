var expect = require('chai').expect;
var isUniqueChars = require('./');

describe('isUniqueChars', function() {
  it('should test for unique characters', function() {
    expect(isUniqueChars('test')).to.be.false;
    expect(isUniqueChars('tes')).to.be.true;
    expect(isUniqueChars('asdfghjkl')).to.be.true;
  });
});
