/*jshint esversion: 6 */
const fib = function(num) {

  console.log('inside', num);

  if (num === 1) {
    return 0;
  }

  if (num === 2) {
    return 1;
  }

  return fib(num-1) + fib(num-2);

};

// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));
console.log(fib(5));
// console.log(fib(60));
