let arr = [2, 1, 8, 9, 4];
let l1 = arr.push(5, 6);
console.log(arr);
console.log(l1);
let l2 = arr.unshift(21, 9);
console.log(arr);
console.log(l2);
let x = arr.shift();
console.log(arr);
console.log(x);
let a = arr.pop();
console.log(a);
console.log(arr);
//Splice
/*case 1*/
let y = arr.splice(1, 2);
console.log(arr);
console.log(y);
/*case 2*/
let z = arr.splice(3);
console.log(arr);
console.log(z);
let index = arr.indexOf(9);
console.log(index);
index = arr.indexOf(9, 2);
console.log(index);
index = arr.indexOf(9, 5);
console.log(index);
index = arr.indexOf(9, 0);
console.log(index);
index = arr.lastIndexOf(9);
console.log(index);
index = arr.lastIndexOf(9, 3);
console.log(index);
index = arr.lastIndexOf(9, 4);
console.log(index);