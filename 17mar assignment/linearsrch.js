let arr = [10, 20, 80, 30, 60, 50, 110, 100, 130, 170];
let x = 50;
let n = arr.length;

function search(arr,x,n)
{
   for(var i=0;i<n;i++)
   {
      if(arr[i]==x)
      {
        return i;
      }
      
      return -1;
      
    }
}


let target = search (arr,x,n)
// console.log(target)


if(target==-1){
    console.log("element is Not here")

}
else{
    console.log("target is here at",i)
}

