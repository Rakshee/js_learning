//Immediately invoked function expression (IIFE)
//A function that runs as soon as it is defined

(function () {
  console.log("IIFE");
})();

//IIFE with parameters
(function (name) {
  console.log(`Hello, ${name}`);
})("John");

//IIFE with return value
const result = (function (a, b) {
  return a + b;
})(5, 10);

console.log(result); // Output: 15

//IIFE to create a private scope
const counter = (function () {
  let count = 0;
  return function () {
    count++;
    return count;
  };
})();

console.log(counter()); // Output: 1
console.log(counter()); // Output: 2    


//un name iife

((name)=>{
    console.log(`Db connected ${name}`);
})('Asit');