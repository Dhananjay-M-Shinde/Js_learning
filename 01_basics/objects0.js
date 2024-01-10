// this way of defining object is called singleton object
const obj1 = new Object();
obj1.name = "sumit";
console.log(obj1["name"]);

// this is how we define symbols

/* Symbol is a built-in object
 whose constructor returns a symbol primitive
 — also called a Symbol value or just a Symbol
 — that's guaranteed to be unique. Symbols are
  often used to add unique property keys to an object
  that won't collide with keys any other code might add
 to the object, and which are hidden from any mechanisms
 other code will typically use to access the object.
  That enables a form of weak encapsulation,
   or a weak form of information hiding. */

const sym = Symbol('key1')  // symbol defination 

// this way of defining object is called object literals
const user = {
    name: "dhananjay",
    age: 23,
    [sym]: "dms",  //how to use symbol in object
    location: "pune",
    email: "dhananjay.shinde01@infosys.com"
}

const user2 = {
    firstName: "mahesh",
    lastName: "dande"
}

console.log(user.name);  // way to call properties of objects
console.log(user["email"]); // another way
console.log(typeof user[sym]); // to call symbol 
// console.log(sym);
// console.log(user);

const user3 = { user, user2 }; // this will concat but it is like object inside object
const user4 = { ...user, ...user2 } // spred operator to concat to object right way to concat object same we use for array with sqaure braces

console.log(user3);
console.log(user4);

console.log(Object.keys(user)); // to get all keys in object
console.log(Object.values(user)); // to get all values in object
console.log(Object.entries(user)); // gives key value in form of array

console.log(user.hasOwnProperty('location')); // to check given key present or not
