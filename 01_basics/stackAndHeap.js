// stack vs heap  have a look to excalidraw file for more understanding

// Premitive (Stack)   non-premitive (Heap)
// all premitive values store into Stack whereas all non-premitive values stored into Heap memory

/*  If we are storing values into stack and if that value assign to another variable then we actually sharing
copy of that variable so even both variable haves same values still they are pointing to different values
and if we made changes in one value it will not change anything for another value */

// example of stack

let name1 = "dhananjay";
let name2 = name1;
console.log(name1, name2);
name2 = "shinde";
console.log(name1, name2);  // output dhananjay shinde
// above we made changes in name2 but we can't see any changes in name1 value. this is how stack behaves 

/* if we are storing non-premitive values then it get store into Heap memory. and If assign that value to
another variable that time we are actually sharing reference of that value and not copy, So whenever we made
changes in in one either in first or second variable it will make changes in both variables as both variables
are pointing to same value. */

// example of heap

const info1 = {
    name: "dhananjay",
    age: 22,
    email: "dhananjay@gmail.com"
}

const info2 = info1;

console.log(`name1 is ${info1.name} age1 is ${info1.age} name2 is ${info2.name} and age2 is ${info2.age}`);

info2.name = "mahesh"; 
info1.age = 23;

console.log(`name1 is ${info1.name} age1 is ${info1.age} name2 is ${info2.name} and age2 is ${info2.age}`);
/* above we made changes in info2 name but it got reflected in info1 and same happen with age made changes in
info1 age it got reflected in info2 age, So this is how Heap works. */
