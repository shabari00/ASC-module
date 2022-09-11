/*
Matrix Diagonal
Write a function which takes a 2 dimentional array of size nxn where n > 0 and 
changes its diagonal according to the following conditions

if an element e < 0 replace it with 0
If element e >= 0 replace it with 1
Input
The first line contains n, denoting the number of lists.

This is followed by n lines. Each line contains n integers separated by a space

Output
n lines, each line representing a list of numbers separated by a space.

Example
Input:

4

2 0 1 4

0 -1 1 10

0 0 0 0

1 2 3 4

Output:

1 0 1 4

0 0 1 10

0 0 1 0

1 2 3 1
*/
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
let arr = [];
for (let i = 0; i < n; i++) {
  arr[i] = readLine().split(" ");
  for (let j = 0; j < n; j++) {
    arr[i][j] = parseInt(arr[i][j]);
  }
}
for (let i = 0; i < arr.length; i++) {
  for (j = 0; j < arr.length; j++) {
    if (i === j && arr[i][j] >= 0) {
      arr[i][j] = 1;
    } else if (i === j && arr[i][j] < 0) {
      arr[i][j] = 0;
    }
  }
}
// for (let i = 0; i < arr.length; i++) arr[i] = [];
// {
// }
for (let i = 0; i < n; i++) {
  console.log(...arr[i]);
}