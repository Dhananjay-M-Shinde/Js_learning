// Hoisting is JavaScript's default behavior of moving declarations to the top of the current scope.

/* Variables defined with let and const are hoisted to the top of the block, but not initialized.
Meaning: The block of code is aware of the variable, but it cannot be used until it has been declared.
Using a let variable before it is declared will result in a ReferenceError. */


// we can define a variable in three ways

// 1) with var keyword
console.log(name); // this will not give error but give undefine as a value because in js var is hoisted at the top
var name;
var sirName = "shinde"
name = "dhananjay";
console.log(name, sirName);

// with let keyword
// console.log(age); // can't write like this because let is not hoisted so before using it needs to be declare
let age;
let age1 = 23;
age = 22; // you can re-assign values to let variable
// let age = 44;  // can't do this because you can't re-declare let variable
console.log(age, age1);

// with const keyword
// const email; // can't write like this because you have to initialize at the time of declaration.
const email = "dmshinde@gmail.com";
// email = "dhanajay@gmail.com"; // also you can't re-assign value to const but you can still modify it.
console.log(email);

const userInfo = {
    name: "dhananjay",
    age: 22,
    email: "dhananjay@gmail.com"
}

userInfo.name = "mahesh"; // this is how you can modify const variable
console.log(userInfo.name);

// Scope of variable

// variables defined outside of function or block has global scope means it can be used in any block or function
// variable defined with var having global scope


// function scope

// var id = 3;
var marks = 10;
let marks1 = 10;
const marks2 = 50;
function number() {
    var id = 5; // we can use this id inside this function only because var also has function scope if you declare it inside a function you can't use it outside
    marks = 22;
    marks1 = 23;
    const marks2 = 24;  // we can't declare or re-assign values to const but here we are not getting any error because const having block scope
}
number();
console.log("age is ",marks); // here we can see that value of marks is updated with 22
console.log(marks1); // marks1 value not updated because let haves function or block scope
console.log(marks2); // same for this
// console.log(id); // it will give id is not defined

// block scope
// let and const have block scope

let str1 = "sh";
const str2 = "sh";
{
    var str = "shinde"
    str1 = "shinde";
    const str2 = "shinde"
}

console.log(str);
console.log(str1); // value of str1 is shinde because we can re-assign value to let so it get's updated
console.log(str2);
