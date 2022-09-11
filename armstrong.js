let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let armstrong_num = readLine()
let split_num = armstrong_num.split("");
let sum_of_cubes = 0;
for(i=0; i<split_num.length; i++)
{
    let x = parseInt(split_num[i]);
    sum_of_cubes = x*x*x + sum_of_cubes;
}
if(parseInt(armstrong_num) === sum_of_cubes)
    console.log("Yes");
else
    console.log("No");