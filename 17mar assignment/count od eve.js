let arr = [3,6,8,7,13,98,76];
let ar1=[]
let ar2=[]
for(let i=0;i<arr.length;i++ ){
    if (arr[i]%2==0){
        ar1.push(arr[i])
    }
    else {
        ar2.push(arr[i])
    }

}
 
console.log("Odd_number = ",ar1.length)
console.log("even_number = ",ar2.length)
