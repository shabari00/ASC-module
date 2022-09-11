/*
Max Dial
Description
Imagine a series of n dials. They are all set to zero initially. An input i arrives. 
The i-th dial is incremented by 1. An input j arrives. The j-th dial is incremented by 1. You are also given a max value. 
Given a sequence of such inputs, find which dial reaches the max value first.

Input format
First line contains n, n >= 0, denoting the number of dials. Second line contains max, max > 0, 
denoting the max limit for the dial. Third line contains m, m >= 0, denoting the number of inputs. 
This is followed by m lines each containing a positive integer i, 1 <= i <= n.

Output format
A positive integer i, denoting that ith dial reaches maximum first. If none reaches maximum limit, 
then output should be 0.

Sample input
3
2
4
1
2
1
3
Sample output
1
Explanation
First line is 3, i.e. 3 dials. Second line is 2, i.e. max dial limit is 2. 
Third line is 4, i.e. 4 inputs arriving. 1,2,1,3 are the inputs. The dial 1 reaches 2 first. 
So output is 1.
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
let max = parseInt(readLine());
let arr = [];
for(let i = 1; i<=n; i++){
  arr[i] = 0;
}
let maxDial = 0;
let m = parseInt(readLine());
for(let i = 0; i<m; i++){
  let val = parseInt(readLine());
  arr[val]++;
  if(arr[val] === max){
    maxDial = val;
    break;
  }
}
console.log(maxDial);