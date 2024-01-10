// Object destructuring

const userInfo = {
    name : "dhananjay",
    age : 23,
    email : "dmshinde2212@gmail.com"
}

// to destructure the object 1st way
const {name, age, email} = userInfo; 
console.log(`${name} age: ${age} email: ${email}`);

// we can also write single value like {age} = userInfo it will give age from userInfo

const userInfo1 = {
    name1 : "mahesh",
    age1 : 23,
    email1 : "mahesh@gmail.com"
}

// object destructuring by giving alises
const {name1: nam, age1: umar} = userInfo1;
console.log(`name is ${nam} and age is ${umar}`);