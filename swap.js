let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let test = readLine().split(" ");
let N = parseInt(test[0]);
let K = parseInt(test[1]);
let arr = readLine().split(" ").map(Number);
let temp;

temp = arr[K - 1];
arr[K - 1] = arr[arr.length - K];
arr[arr.length - K] = temp;

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}