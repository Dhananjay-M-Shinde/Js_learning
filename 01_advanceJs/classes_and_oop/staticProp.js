class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
    }

    static createId(){  // it cannot be access by instances of this class
        return '123'
    }
}

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const ds = new User("dhananjay");
// console.log(ds.createId()); // cannot access static method of class with instances
console.log(User.createId()); // but can access it with class name itself

const teacher1 = new Teacher('mahesh', "md@gmail.com")
teacher1.logMe();
console.log(teacher1.createId()); // child also can't access it