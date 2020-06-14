var array = [2,2,4,1];
var n=array.length;
var leftArr=[];
var RightArr=[];
var Product=[];
leftArr[0]=1;
RightArr[n-1]=1;
for(let i=1;i<n;i++)
    leftArr[i]=array[i-1]*leftArr[i-1];
for(let j=n-2;j>=0;j--)
    RightArr[j]=array[j+1]*RightArr[j+1];
for(let k=0;k<n;k++)
{
    Product[k]=leftArr[k]*RightArr[k];
}    
console.log(Product)

