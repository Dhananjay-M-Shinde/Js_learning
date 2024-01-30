const user = {
    username: "dhananjay",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log(username); // this will give error because browswer don't know which username you are looking for
        // console.log(this.username);
        console.log(this);  // this basically tell about the current context
    }
}

console.log(user.username);
console.log(user.getUserDetails());