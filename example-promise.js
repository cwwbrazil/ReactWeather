
//Challenge

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    if (typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    } else {
      reject("A & b need to be numbers");
    }
  });
}

addPromise(2, 'a').then(function (sum) {
  console.log('Sum is ',sum);
}, function (err) {
  console.log('Error:',err);
});
