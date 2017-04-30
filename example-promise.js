// function getTempCallback (location, callback) {
//   callback(undefined, 78);
//   callback('City not found');
// }
//
// getTempCallback('Ottawa', function (err, temp) {
//   if (err) {
//     console.log('error', err);
//   } else {
//     console.log('success', temp);
//   }
// });
//
// function getTempPromise (location) {
//   return new Promise(function (resolve, reject) {
//     setTimeout(function () {
//       resolve(79);
//       reject('Location not found');
//     }, 1000);
//   });
// }
// getTempPromise('Ottawa').then(function (temp) {
//   console.log('promise success', temp);
// }, function (err) {
//   console.log('promise error', err);
// });

function addPromise (a, b) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (typeof a  === 'number' && typeof b  === 'number' ) {
        resolve(a + b);
      } else {
        reject('One or more variables are not numbers');
      }
    }, 1000);
  });
}


addPromise(1, 'string').then(function (sum) {
  console.log('success', sum);
}, function (err) {
  console.log('error', err);
});
addPromise(1, 2).then(function (sum) {
  console.log('success', sum);
}, function (err) {
  console.log('error', err);
});
