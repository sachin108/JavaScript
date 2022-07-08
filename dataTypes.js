// JS Datatypes are dynamic in nature

let x;
x=108; // x is a number
console.log(typeof(x));

x="Sachin"; // x is a string
console.log(typeof(x));

// JavaScript evaluates expressions from left to right:

x=16+"Volvo"
console.log(typeof(x));
console.log(x);

x=16+4+"Volvo" // 20Volvo
console.log(x);

x="Volvo"+16+4 // Volvo164
console.log(x);
