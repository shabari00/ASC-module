/*
Count negative numbers
Description
Given an array of integers of size N, find the number of negative elements in the array.

Input format
First line contains a positive integer n denoting the number of elements in the array and second line contains n space separated elements of array.

Output format
For the given array, print the count of negative numbers in the array.

Sample input-1
5
1 -5 -4 3 0
Sample output-1
2
Explanation-1
There are two negative numbers in the array, that are -5 and -4.
Sample input-2
5
1 5 3 7 11
Sample output-2
0
Explanation-2
There are no negative elements in the array.
*/
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n=parseInt(readLine())//5
let arr=readLine().split(' ');//
let count=0;
for(let i=0;i<n;i++){
arr[i]=parseInt(arr[i]);
}
//console.log(arr);
for(let i=0;i<n;i++)
{
    if(arr[i]<0)
    {
    count++;
    }
}
console.log(count);