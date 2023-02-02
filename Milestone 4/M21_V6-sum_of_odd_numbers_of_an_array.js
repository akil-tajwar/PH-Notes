var ar=[21, 43, 16, 34, 9];
sum=0;
for(var i=0; i<ar.length; i++){
    if(ar[i]%2!=0){
        sum=sum+ar[i];
    }
}
console.log(sum);