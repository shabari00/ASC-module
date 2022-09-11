let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let m=parseInt(readLine());
let d=0;
let p=1;
let temp=m;
if(m==0)
console.log(0);

while(m>0)
{
    d=m%10;
    p=p*d;
    m=Math.floor(m/10);
}
let di;
let sum=0;
while(temp>0)
{di=temp%10;
    sum=sum+di;
    temp=Math.floor(temp/10);
}
let r=0;
r=p-sum;
console.log(r);

