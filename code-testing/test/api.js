// assert is like assert, but with some extra functions.
const assert = require("assert");
const {
  sumOfSquares,
  openUrlsInOrder
} = require('../code/api.js');


// part 1: sumOfSquares
describe('sumOfSquares', function () {
  it("should throw an error if the input arg is not an array", function () {
    assert.throws(sumOfSquares, Error, "Error thrown");
  });
  it("should throw an error if the input array has any non-number elements", function (done) {
    assert.throws(function () {sumOfSquares([1, 'test'])}, Error, "Error thrown");
    done();
  });
});


// part 2:  openUrlsInOrder
describe('openUrlsInOrder()', function () {
  it('should open urls in order', async function () {

    const urls = ['url1', 'url2', 'url3', 'url4'];
    const expected = [
      ['url', 'url1'],
      ['url', 'url2'],
      ['url', 'url3'],
      ['url', 'url4'],
      ['done', true]
    ];
    var result = await openUrlsInOrder(urls);

    assert.deepEqual(result, expected);
  });
});
