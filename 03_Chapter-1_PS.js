/***************************************Chapter-1 Variables and Data types *******************************************/

// Quick quiz
let student = {
    name: "test123",
    phone_number: 1234567890,
    marks: 45
}
console.log(student["name"]);
console.log(student["phone_number"]);
console.log(student["marks"]);

// Practise Question 1
let str = "string";
let num = 45;
let new1 = str + num;
console.log(new1);

// Practise Question 2
console.log(typeof(str));
console.log(typeof(num));
console.log(typeof(new1));

// Practise Question 3
const student1 = {
    name: "test123",
    phone_number: 1472583690,
}
console.log(student1);
student1["name"] = 'test123456';
console.log(student1); //Yes, we can change it to hold a number later on

// Practise Question 4
student1["marks"] = 454; // Yes i was able vto add a newvkey to it
console.log(student1);

// Practise Question 5
const dictnoary = {
    assets: "a person or thing useful to someone",
    specify: " to say or explain in detail",
    hues: "a particular shade of colour",
    versatile: "used for the diffrent purposes",
    pursuit: 'the action of trying to achive or get something'
}
console.log(dictnoary['assets']);
console.log(dictnoary['pursuit']);