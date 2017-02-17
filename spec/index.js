
const index = require('../index');
const expect = require('chai').expect;

describe('Util Spec', () => {

  const orderArray = [1, 10, 20, 40, 43, 60, 76];
  const randArray = [10, 43, 1, 20, 15, 60, 38, 76];

  it('fib', (done) => {
    const a = index.fib(5);
    const b = index.fib(10);
    expect(a).to.equal(5);
    expect(b).to.equal(55);
    done();
  });

  it('fibArray', (done) => {
    const a = index.fibArray(10);
    expect(a).to.have.deep.property('[0]', 0);
    expect(a).to.have.deep.property('[6]', 8);
    expect(a).to.have.length(10);
    done();
  });

  it('hashMakeList', (done) => {
    const hashlist = index.hashMakeList(orderArray);
    expect(hashlist).to.have.deep.property('43[0]', 4);
    done();
  });

  it('linearSearch', (done) => {
    const a = index.linearSearch(orderArray, 43);
    expect(a).to.equal(4);
    done();
  });

  it('binarySearch', (done) => {
    const a = index.binarySearch(randArray, 60, true);
    expect(a).to.equal(6);
    done();
  });

  it('hashSearch', (done) => {
    const a = index.hashSearch(randArray, 20);
    expect(a).to.have.deep.property('[0]', 3);
    done();
  });

  it('quickSort', (done) => {
    const a = index.quickSort(randArray);
    expect(a).to.have.deep.property('[0]', 1);
    done();
  });

  it('primeFactorization', (done) => {
    const a = index.primeFactorization(126);
    expect(a).to.eql([2, 3, 3, 7]);
    done();
  });

  it('isPrimeNum', (done) => {
    const a = index.isPrimeNum(7);
    expect(a).to.be.true;
    done();
  });
});
