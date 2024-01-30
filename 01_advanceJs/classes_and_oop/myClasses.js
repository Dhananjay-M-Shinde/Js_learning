// // to define class

// class User{
//     constructor(username, email, age){
//         this.username = username;
//         this.email = email;
//         this.age = age;
//     }

//     userInfo(){   // this is function
//         return `name is ${this.username} and age is ${this.age}`
//     }

//     nameInUpper(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user1 = new User("dhananjay", "dms@gmail.com", 23);  // creating object

// console.log(user1.userInfo());
// console.log(user1.nameInUpper());

// In javaScript using classes is not necessary but it made available in javascript to enable coder to switch from other language to javascript 
// it is actually a syntacticle suger

// if we not used class we could have wriiten code as below

function User(username, email, age){
    this.username = username;
    this.email = email;
    this.age = age;
}

User.prototype.userInfo = function(){
    return `username is ${this.username} and age is ${this.age}`
}

User.prototype.nameInUpper = function(){
    return `${this.username.toUpperCase()}`
}

const user2 = new User("dipak", "dipak@gmail.com", 23);

console.log(user2.userInfo());
console.log(user2.nameInUpper());