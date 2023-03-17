let n = 8;
let num =0;
let n1=0
let n2=1
let count = 0
if (n<=0){
    console.log(n1)

}
else if(n==1){
    console.log(n2)
}
else{
   while(count<n)
   {
      console.log(n1)
      num = n1+n2
      n1=n2
      n2=num
      count+=1
   }
}



