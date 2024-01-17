// document object has some document properties which help us to interact with DOM structure

// you can try below queries in browser by opening one.html page

// document.getElementById("heading")  this will give the tag in which given id is present
// <h1 id=​"heading" class=​"heading1">​learning DOM​</h1>​


// document.getElementById("heading").id this will give the id present in given tag
// 'heading'

// document.getElementById("heading").class we don't use class instead we use className
// undefined

// document.getElementById("heading").className  this will give the class present in given tag
// 'heading1'

// document.getElementById("heading").getAttribute("id")  this will give you provided attribute
// 'heading'

// document.getElementById("heading").getAttribute("class") 
// 'heading1'

// document.getElementById("bd").getAttribute("style") 
// 'background-color: black; color: white;'

// document.getElementById("heading").setAttribute("class", "head2") this is use to set attribute but remember it override the previous attribute
// so if you have to keep previous attribute you can use .setAttribute("class", "head1 head2")

// document.getElementById("bd").setAttribute("style", "background-color: black; color: red;") this will change text color to red

// const heading = document.getElementById("heading") you can also store it into variable and then use accordinglly
// heading.style.color = "green"  it will set text color of tag where id is heading to green
// you can use .style.margin, .style.padding, .style.borderRadius

// heading.id = "heading h11" this will set id as "id" = "heading h11"

// const tags = document.getElementsByTagName("p") here we store tag p
// always remember when you use elementbytagName or elementByClassName then it always return collection
// to use this collection you can access it using index like tags[0] or you can use forEach loop
// tags[0].style.backgroundColor = "white"  this will set background color of p tag to white 

// heading.textContent  this will give content inside the tag
// heading.innertext    this work same as above
// heading.innerHTML    this work same

// the difference between above three properties are
// if you use style.display = "none" then the that text will not come in heading.innerText but will come in heading.textContent
// for innerHTML if tag is present inside that tag then it in output we get content with tag but for above both we get text only
