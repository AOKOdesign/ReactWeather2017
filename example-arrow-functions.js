// var names = ['Adam', 'Dave', 'Robbie'];
//
// names.forEach(function (name) {
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrow', name);
// });
//
// names.forEach((name) => console.log(name));


// var returnMe = (name) => name + '!';
// console.log(returnMe('Adam'));

// var person = {
//   name: 'Adam',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();

//Challenge are

function add (a, b) {
  return a + b;
}

// add statement
var addStatement = (a, b) => {
  return a + b;
}

// add expression
var addExpress = (a, b) => console.log(a + b);

console.log(add(1, 3));
console.log(add(9, 0));

console.log(addStatement(10, 5));
addExpress(12, 12);
