var x;
document.write(x); //not an error,  display undefined 
x=108;
document.write(x); //display value of x 
var x="xyz"; // x="xyz" is also OK
document.write(x); //display value of x 
console.log(typeof x);
// typeof tell us about the data type of variable

//  y; // an error (variable not defined)
y="Practice, Practice, Practice!!!";
document.write("\n"+y);

/**
 *Variables defined with let have Block Scope
 */
let a="We bare bears";
document.write(a);
console.log(a);
// let a="hello";  can't be re-declare like var
a=109; // but can be re initialize
console.log(a);

const pi=3.14; // constant read only
console.log(pi);
//if a constant is an object or array its properties or items 
//can be updated or removed.


/**
4 Ways to Declare a JavaScript Variable:
    Using var
    Using let
    Using const
    Using nothing
 */