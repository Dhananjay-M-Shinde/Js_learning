// this keyword and arrow functions

function add(num1, num2){
    console.log(num1+num2);
    console.log(this);
}

// add(2, 6);

const info = {
    name: "dhananjay",
    age: 23,
    userInfo: function userInf() {
        console.log(`name is ${info.name} and age is ${info.age}`);
        console.log(this);  // here this refers to current object context so it will print complete object
    }
}

// info.userInfo();  //name is dhananjay and age is 23  { name: 'dhananjay', age: 23, userInfo: [Function: userInf] }

// but if same you write but instead of regular function you used arrow function then this will not give you current object context
// instead it will give you emty curly braces

const info1 = {
    name: "dhananjay",
    age: 23,
    userInfo: function userInf() {
        const tryingThis = () =>{
            console.log("into arrow function");
            console.log(this);   // here it will give current object context because here this refers to the value of this before this arrow function created 
        }
        console.log(tryingThis());
        console.log(`name is ${info.name} and age is ${info.age}`);
        console.log(this);  // here this refers to current object context so it will print complete object
    }
}

info1.userInfo();


// difference between regular function and arrow function FOllow below reference

// https://www.freecodecamp.org/news/the-difference-between-arrow-functions-and-normal-functions/


// Immedielty invoke function expression

// if you place function inside round braces and also put round brances after function it will get automatically execute
// (function add() { log("df")}) ()

//below function get execute automatically 
// same can use with arrow function also
(function user() {
    console.log("name is dhananjay");
}) ();  // don't forget to put semicolon after IIFE function