import { expect } from 'chai';
import FizBuzz from '../src/fizBuzz';

describe('Main', () => {
  it('should return Fizz when a number multple of 3', () => {
    expect(FizBuzz(3)).to.equal('Fizz');
  });

  it('Should return Buzz when a number multiple of 5', () => {
    expect(FizBuzz(5)).to.equal('Buzz');
  });

  it('Should return `FizzBuz` when a number multiple of 3 and 5', () =>{
    expect(FizBuzz(15)).to.equal('FizzBuzz');
  });

  it('Should return result if it not multiple of 3 or 5', () => {
    expect(FizBuzz(22)).to.be.equal(22);
  });
});

