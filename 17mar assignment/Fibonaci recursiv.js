//UNABLE TO SOLVE FIBONACCI WITH RECURSION

function fibo(n){
    if (n<=1){
        return n
    }
    return fibo(n-1) + fibo(n-2)

}



let n = 10
for (i=0;i<n;i++){
    var x =fibo(n)
    console.log(x)
}


// let n = 8;
// let num =0;
// let n1=0;
// let n2=1;

// function fibo(n1,n2){
//         return fibo(n1+n2)
//       }



// if (n<=0)
// {
//     console.log(n1)

// }
// else if(n==1)
// {
//     console.log(n2)
// }


// for (i=0;i<n;i++){
//     console.log(n1)
//     n1=n2
//     n2=fibo(n1,n2)
    
// }



