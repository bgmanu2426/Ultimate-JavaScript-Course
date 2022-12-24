/***************************************Chapter-1 Variables and Data types *******************************************/

/* There are 2 types of data types they are :-
i) Primitive Data Type
    • Boolean
    • BigInt
    • Number
    • Null
    • String
    • Symbol
    • Undefined
    // Remembered as BBNNSSU
ii) Objects (Non-primitive data types) 
    */

let a = true; // or false
let b = BigInt(45);
let c = 454;
let d = null;
let e = "Hello there it is a string";
let f = Symbol(45);
let g;
console.log(a , b, c , d, e, f, g);
console.log(typeof(a), typeof(b), typeof(c), typeof(d), typeof(e), typeof(f), typeof(g));

/****************************************************************************************************/
let Objects1 = {
    name: "test",
    institute: "GPT hrr",
    reg_no: "170EC20027"
}
console.log(Objects1);
console.log(Objects1["name"]);
console.log(Objects1["institute"]);
console.log(Objects1["reg_no"]);

Objects1["name"] = "Manu BG";
console.log(Objects1);