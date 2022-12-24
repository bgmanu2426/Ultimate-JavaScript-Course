/***************************************Chapter-1 Variables and Data types *******************************************/

// var is globally scoped, it can be re-declared and also be updated
var a = "Manu BG";
console.log(a);
{
    var a = 2580;  // re-declared in the block
    console.log(a);
}
console.log(a); // the variabled updated globally
var a = "Changed"; // re-declared and updated
console.log(a);

// let is block scoped, it cannot be re-declared but can be updated
let b = 25847;
console.log(b);
{
    let b = "In the block"; //redeclared and can be updated in the block
    console.log(b);
}
console.log(b);
/* let b = "Not changed" // cannot be redeclared
console.log(b); */
b = "Updated"; // can be updated
console.log(b);

// const is block scoped, it cannot be re-declared and updated
const c = "This cannot be changed or updated";
console.log(c);
{
    const c = "Changed";  //redeclared and can be updated in the block
    console.log(c);
}
console.log(c);
/* let c = 45841; // const cannot be redeclared
console.log(c); */
/* c = null; // cannot be updated
console.log(c); */