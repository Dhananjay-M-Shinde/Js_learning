console.log((Math.floor(Math.random()*10))+1);
const min = 40;
const max = 77;

console.log(Math.floor((Math.random() * (max-min) + 1) + min));
let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
const date = new Date(2024, 0, 9);
console.log(date.toLocaleDateString());
let timeStamp = Date.now();
console.log(timeStamp);
console.log(myDate.getTime());
console.log(Math.floor(Date.now()/1000));
console.log(myDate.getDay());
console.log(myDate.toLocaleString('default', {
    weekday:"long"
}));