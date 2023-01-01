/**************************************Chapter-2 Expressions & Conditions *******************************************/
/*

 The types of operators in JS are : -
 • Arithmatic Operator
 • Assignment Operators
 • Comparison Operators
 • Logical Operators
 • Conditional Operators
 • Bitwise Operators

*/

//***************** Arithmatic Operators
let a = 2;
let b = 6;

console.log("The value of a + b is = ", a + b); //sum 8
console.log("The value of a - b is = ", a - b); // diffrence -4
console.log("The value of a * b is = ", a * b); // product 12
console.log("The value of a / b is = ", a / b); // quotient 0.33333334
console.log("The value of a % b is = ", a % b); // modulus is 2
console.log("The value of a ** b is = ", a ** b); // square is 64
console.log("The value of a++ is = ", a++); //print and increment 2
console.log("The value of ++a is = ", ++a); // increment and print 4
console.log("The value of a-- is = ", a--); // print and decrement 4
console.log("The value of --a is = ", --a); // decrement and print 2

//******************* Assignment Operators
let x = 4;
let y = 8;

// console.log("If x = y is = ", x = y);
// console.log("If x += y is = ", x += y);
// console.log("If x -= y is = ", x -= y);
// console.log("If x *= y is = ", x *= y);
// console.log("If x /= y is = ", x /= y);
// console.log("If x %= y is = ", x %= y);
// console.log("If x **= y is = ", x **= y);

//*************** Comparison Operators
let p = 6;
let q = 2;
let r = '2';

console.log("p == q is : ", p == q); //false
console.log("p != q is : ", p != q); // true
console.log("p === r is : ", p === r);  //false
console.log("p !== r is : ", p !== r); //true
console.log("p > q is : ", p > q); //true
console.log("p < q is : ", p < q); //false
console.log("p >= q is : ", p >= q); // true
console.log("p <= q is : ", p <= q); // false

//******************** Logical Operators
let d = true;
let e = false;

console.log("Logical AND is : ", d && e);
console.log("Logical OR is :", d || e);
console.log("Logical NOT is :", !d);

//**************************Conditional Operators
let age = 25;
console.log(typeof age);
console.log(age < 18 ? "Not able to vote" : "Eligible to vote");
// (condition) ? true : false

//******************** Bitwise Operators
let m = 5;
let n = 1;

console.log("Bitwise AND is :", m & n); // 0101 & 0001
console.log("Bitwise OR is :", m | n); // 0101 & 0001
console.log("Bitwise NOT is :", ~m); // it prints -6 as JS uses 32-bit signed numbers (ex:- 11111111111111111111111111111010)
console.log("Bitwise XOR is :", m ^ n); // 0100
console.log("Bitwise left shift is :", m << n); // bits are shifted to left adding 0 on right
console.log("Bitwise right shift is :", 1010 >> 0010); // bits are shifted to right adding 0 on left
