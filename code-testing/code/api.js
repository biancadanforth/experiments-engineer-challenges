/**
 * Squares each element in array 'a' and returns the sum of all of the squares.
 * Throws an error if the argument is not an array, or if any of the elements
 * in the array are not of type 'number'. Returns 0 if 'a' is an empty array.
 * 
 * @param {Array.number} a - An array of numbers
 * @return {number} - The sum of the squares of the elements in 'a'
 */
function sumOfSquares(arrA) {
  // check that it's an array
  if(!(arrA instanceof Array)) {
    throw new Error(`Argument is not an array.`);
  }

  // check if all elements in 'a' are numbers
  for (const ele of arrA) {
    if (typeof ele !== 'number') {
      throw new Error(`At least one element in the array is not a number.`);
    }
  }

  // Square each element in arrA and store it at the same index in arrB
  var arrB = arrA.map(function(el) {
    return el * el;
  });

  // return a single value that is the sum of all the elements in arrB
  return arrB.reduce(function(sum, el) {
    return sum + el;
    // sum is initialized to 0
  }, 0);
}

// Part 2:  openTabsInOrder

// promised timeout.
const waitFor = (ms) => new Promise(r=>setTimeout(r,ms));

// Simulate a tabOpening with random loading time.
async function fakeOpenUrl (url, loadingTime=3*Math.random()) {
  return waitFor(loadingTime).then(()=>console.log(`${url} opened after ${loadingTime}`));
}

/** opensTabsInOrder
  *
  * @returns workDo
  */
async function openUrlsInOrder (urlsArray) {
  const result = [];
  // async doesn't work in forEach loops
  for (const url of urlsArray) {
    await fakeOpenUrl(url);
    result.push(['url', url]);
  }
  result.push(['done', true]);
  return result;
}

module.exports = {
  sumOfSquares,
  openUrlsInOrder,
};
