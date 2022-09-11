let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
let givenSeq = [], reverseSeq = [];
for (let i = 0; i<n; i++)
{
    givenSeq[i]= parseInt(readLine());
    reverseSeq[n-1-i]= givenSeq[i];
}
console.log(reverseSeq);