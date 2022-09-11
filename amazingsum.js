let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
let num = []; // creating an array to store number
let adj = []; // creating for store the sum
let max = 0; //simple variable to store a value
let check = false; //checking a data
for (let i = 0; i < n; i++) { //0,1,2,3,4
    num[i] = parseInt(readLine()); //['0''1''2''3''4']
}
for (let i = 0; i <n; i++) { //['0''1''2''3''4']
    adj[i] = (num[i] + num[i + 1]);//['0+1''1+2''2+3''3+4']
    // console.log(adj);
    if (adj[i] > max) { //[01==max,12==max]
        max = adj[i]; //[01==max,12==max]
    }
}
if (max > 100) {
    check = true;
}
console.log(check);