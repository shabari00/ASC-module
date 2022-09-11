/*
Alternate 101
You have been given an array of size N. You need to find the sum of alternate values in the given array, starting from the first element.

Input
One integer, denoting N, the size of the array. The next line contains N space seperated integers, denoting the elements of the given array.

Output
One Integer, denoting the required sum.

Example
Input1:
7
1 4 6 8 9 0 -34
Output1:
-18
Explanation:
1 + 6 + 9 - 34 = -18
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
 arr = readLine().split(" ");
 let sum = 0;
 for (i=0;i<n;i+=2)
  {
    let num = parseInt(arr[i]);
    sum = sum+num;
  }
console.log(sum);