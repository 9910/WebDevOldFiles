var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout, null);
var num1, num2;

rl.question("Enter a number: ", function(x) {
  rl.question("Enter another number: ", function(y) {
    z = parseInt(x) + parseInt(y);
    console.log(z);
  });
});
