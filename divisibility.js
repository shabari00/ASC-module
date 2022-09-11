/*
Divisibility Test
Description
Given an array of positive integers of size N and an integer x. 
Count the number of elements in the array that are divisible by x.

Input format
First line contains two space separated positive integers n and x, 
where n denotes the number of elements in the array. Second line contains n space separated elements of array.

Output format
For the given array, print the count of numbers that are divisible by x.

Sample input-1
5 5
1 5 6 10 9
Sample output-1
2
Sample input-2
4 7
11 15 22 100
Sample output-2
0
*/
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let input = readLine().split(" ");
let n = parseInt(input[0]);
let x = parseInt(input[1]);
let count = 0;
let arr = readLine().split(" ");
for(let i=0; i<n; i++){
    arr[i]=parseInt(arr[i]);
    if((arr[i]%x)===0)
   count++;
}
  console.log(count);