var names = ['Caleb', 'John', 'Peter', 'Sarah'];

// names.forEach(function (name) {
//   console.log('foreach', name);
// });
//
// names.forEach((name) => console.log('arrowFunc', name));
//
// var returnMe = (name) => name + '!';
//
// console.log(returnMe('Caleb'));

// var person = {
//   name: 'Caleb',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();

function add (a, b) {
  return a + b;
};
//addStatement
var addStatement = (a, b) => {
  return a + b;
}
console.log(addStatement(7,3));
//addExpression
var addExpression = (a, b) => console.log((a +b));
addExpression(10,4);
console.log(add(1,3));
console.log(add(6,3));
