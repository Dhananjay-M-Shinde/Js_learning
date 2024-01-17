// here we will learn DOM querySelector

// for below query refer to one.html you can run these query in browser for one.html

// with the help of querySelector we can access any property in tag by using tagName, ClassName, idName or attributeName
// remember while using these selector we should use it like we use to apply css like for id we use "#" for class we use "."

// document.querySelector("h1") this will select first h1 tag
// <h1 id=​"heading" class=​"heading1">​learning DOM​</h1>​


// document.querySelector("#heading") selected using id
// <h1 id=​"heading" class=​"heading1">​learning DOM​</h1>​

// document.querySelector(".heading1") selected using class
// <h1 id=​"heading" class=​"heading1">​learning DOM​</h1>​

// document.querySelector("input")
// <input type=​"password" aria-label=​"input" placeholder=​"password">​

// document.querySelector("input[type='password']")  we can also select like this means tag and attribute
// <input type=​"password" aria-label=​"input" placeholder=​"password">​

// document.querySelector("#form") this will select the tag where id is form
// <div id=​"form" class=​"form">​<input type=​"email" aria-label=​"input" placeholder=​"email">​<input type=​"password" aria-label=​"input" placeholder=​"password">​</div>​

// document.querySelector("#form").style.backgroundColor = "grey" set the background color to grey
// 'grey'

// document.querySelector("input[placeholder='password']").style.marginTop = "5px" this will apply margin top to password field

// querySelectorAll  for below queries you should go to any wikipedia page and run these below queries in console
// querySelectorAll gives all tag which comes under given query so in result we get nodeCollection it is quite similer to array but little different
// you can conver it to array using Array.from("collection name")

// const allH2 = document.querySelectorAll("h2");
// in result you get nodeCollection. to iterate over it you can use forEach loop
// allH2.forEach((ele) =>{
//     ele.style.backgroundColor = "green"
// })

// you can also put some condition like if(ele === "summary"){
//     ele.backgroundColor = "red";
// }