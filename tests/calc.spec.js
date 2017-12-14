import { expect } from 'chai';
import { sum, mult, sub, div } from '../src/calc';

describe('calc', () => {

  describe('smoke tests', () => {


    it('Should exists sum function', () => {
      expect(sum).to.exist;
      expect(sum).to.be.a('function');
    });

    it('Should exists method `sub`', () => {
      expect(sub).to.exist;
      expect(sub).to.be.a('function');
    });

    it('Shoul exists method `mult`', () => {
      expect(mult).to.exist;
      expect(mult).to.be.a('function');
    });

    it('Shoul exists method `div`', () => {
      expect(div).to.exist;
      expect(div).to.be.a('function');
    });

  });

  describe('sum', () => {
    it('Should return 4 when sum (2, 2)', () => {
      expect(sum(2, 2)).to.be.equal(4);
    });
  });
  describe('sub', () => {
    it('Should return 2 when sub (4, 2)', () => {
      expect(sub(4,2)).to.be.equal(2);
    });
  });
  describe('mult', () => {
    it('Should return 2 when sub (1, 2)', () => {
      expect(mult(1,2)).to.be.equal(2);
    });
  });

   describe('div', () => {
    it('Should return 2 when sub (4, 2)', () => {
      expect(div(4, 2)).to.be.equal(2);
    });

    it('Should by return `Não existe div por 0`', () => {
      expect(div(4, 0)).to.be.equal('Não existe div por 0');
    });
  });
});
