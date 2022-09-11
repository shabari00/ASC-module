let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
n = readLine().split("");
let num1 = parseInt(n[0]);
let num2 = parseInt(n[1]);
let result = num1+num2;
if (result<12)
{
    console.log(result);
}
else if (result>=12)
{
result = result-12;
}
console.log(result);