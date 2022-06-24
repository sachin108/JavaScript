// let and const bothe define block scope variables
{
    let x="let variable is block scope";
    console.log(x);
}
// x can't be used here

{
    var y="is not block scope";
    console.log(y);
}
// y can be used here
console.log(y);

