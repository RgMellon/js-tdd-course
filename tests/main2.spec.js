const expect = require('chai').expect;

describe('Main', () => {
  let a;

  beforeEach(function(){
    a = [1, 8, 2, 3];
  });

  it('Should have a size of 4 in array', () => {
    expect(a).to.have.lengthOf('4');
  });

  it('Should remove value 3 of array', () => {
    expect(a.pop() == 3).to.be.true;
  });

  it('Should have a value equals 8', () => {
    expect(a).to.include(8);
  });

});
