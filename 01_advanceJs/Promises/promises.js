// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.
// we will see how promises work

const promise1 = new Promise((resolve, reject) =>{  // this is how we define the promise. It takes two parameter
    // do async task here                           // resolve and reject. 
    setTimeout(() => {
        console.log("async task completed");
        resolve(); // if this not called it will never know task is completed or not
    }, 1000);
});

promise1.then(() =>{  // .then is directly related to resolve
    console.log("promise resolve");
})

// above can also written as

new Promise((resolve, reject) =>{
    setTimeout(() => {
        console.log("into second async task");
        resolve();
    }, 1000);
}).then(() =>{
    console.log("promise 2 resolve");
})