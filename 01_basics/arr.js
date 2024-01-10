const arr = [0,1, 2, 3, 4, 5];
const arr1 = arr;
const var1 = 55;

// console.log(arr1);
// arr1[1] = 9;
// console.log(arr);
// console.log(arr1);

const newArr = new Array(3, 4, 6, 7, 3);
// console.log(newArr[3]);
// // newArr.push(9)
// // newArr.pop();
// // newArr.unshift(0, 6, 5, 7, 5, 9)
// console.log(newArr);
// // newArr.shift();
// console.log(newArr);
const arr3 = newArr.concat(arr);
// console.log(arr3);
// console.log(" a ", arr3);
const arr4 = arr3.slice(1, 4);
// console.log(arr3);
// console.log(arr4);
console.log(arr3);
const arr5 = arr3.splice(1, 3);
console.log(arr5);
console.log(arr3);