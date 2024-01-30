// inheritance in Js

class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        return `username is ${this.username}`
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username); // super keword refers to parent class variable
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const teacher1 = new Teacher("mahesh", "md3212@gmail.com", 'md@3212');

console.log(teacher1.addCourse());

const user1 = new User('dipak');

// console.log(user1.addCourse()); // parent class don't have access to child properties because it doesn't know about it

console.log(user1.logMe());
console.log(teacher1.logMe());  // child does have access to parent properties

console.log(user1 === teacher1);

console.log(teacher1 instanceof User);
console.log(user1 instanceof Teacher);