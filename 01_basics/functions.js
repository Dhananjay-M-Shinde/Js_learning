// to define function
function add(number1, number2){  // we accept parameters
    console.log((number1+number2));
    return (number1 + number2); // this is how functions return value
}

// to call function
add(4, 6); // we pass the values called argument


// function can also assign to any variable 
// if function returns anything it will be store in variable
const addition = add(6, 7);
console.log(addition);


// we can also give default values to parameter
// but we should give default values from end only
// means if we are passing default values to only one parameter then it should be last one
// because while calling function if you pass one argument only then it assign to first parameter
function add1(number1=2, number2=4){
    return number1+number2;
}

console.log(add1(3)); // it will print 7
console.log(add1(8, 6)); // it will give 14


// if you don't know how many argument are going to pass you can use spread or rest operator
function sub(...numbers){
    return numbers;
}

console.log(sub(3, 7, 4, 2));

// we can also pass the function as a argument to other function
function print(addo){ // this addo actually accepting function
    console.log(addo()); // here we are calling this function
}

console.log(print(add1)); // here we are passing funciton as argument