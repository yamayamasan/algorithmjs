
const index = require('../index');
const expect = require('chai').expect;

describe('Util Spec', () => {

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
    const array = [1, 10, 20, 40, 43, 60, 76];
    const hashlist = index.hashMakeList(array);
    expect(hashlist).to.have.deep.property('43[0]', 4);
    done();
  });

  it('linearSearch', (done) => {
    const array = [1, 10, 20, 40, 43, 60, 76];
    const a = index.linearSearch(array, 43);
    expect(a).to.equal(4);
    done();
  });

  it('binarySearch', (done) => {
    const array = [10, 43, 1, 20, 15, 60, 38, 76];
    const a = index.binarySearch(array, 60, true);
    expect(a).to.equal(6);
    done();
  });

  it('hashSearch', (done) => {
    const array = [10, 43, 1, 20, 15, 60, 38, 76];
    const a = index.hashSearch(array, 20);
    expect(a).to.have.deep.property('[0]', 3);
    done();
  });
});
