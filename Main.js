"use strict";
// Que 24: More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more
// comparisons, write more tests. Have at least one True and one False result for each of the following:
Object.defineProperty(exports, "__esModule", { value: true });
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less 
//   than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
//   Test No 1:
// • Equality Test with strings 
console.log("Equality Test with strings:", "Apple" === "Apple"); // True
//   Test No 2:
// • Inequality Test with strings 
console.log("Inequality Test with strings:", "Apple" === "Orange"); // False
//   Test No 3:
// • Tests using the lower case function 
console.log("Lower Case Function Test:", "HELLO".toLowerCase() === "hello"); // True
//   Test No 4:
// • Numerical Test involving equality 
console.log("Equality Test with numbers:", 26 === 26); // True
//   Test No 5:
// • Numerical Test involving inequality
console.log("Inequality Test with numbers:", 26 != 35); // True
//   Test No 6:
// • Numerical Test involving greater than 
console.log("Greater than Test:", 10 > 5); // True
//   Test No 7:
// • Numerical Test involving less than
console.log("Less than Test:", 5 < 10); // True
//   Test No 8:
// • Numerical Test involving greater than or equal to
console.log("Greater than or equal to Test:", 10 >= 15); // False
//   Test No 9:
// • Numerical Test involving less than or equal to
console.log("Less than or equal to Test:", 5 <= 10); // True
//   Test No 10:
// • Tests using "and" operators
console.log("And Operator Test:", 5 === 5 && 10 < 5); // False
//   Test No 11:
// • Tests using "or" operators
console.log("Or Operator Test:", 5 === 5 || false); // True
//   Test No 12:
// • Test whether an item is in a array
const fruits = ['Banana', 'Mango', 'Orange'];
console.log("Test 'Mango' in the array:", fruits.includes('Mango') === true); // True
//   Test No 13:
// • Test whether an item is not in a array
console.log("Test 'Apple' in the array:", !fruits.includes('Apple') === true); // True
