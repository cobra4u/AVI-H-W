//check is the number is armstrong
//input - 371
//out - yes
//////////////////////



let num = 371;
let n = 0;
let check = num;

//RECURSION
// function fact(num){
//     while (num>0){
        
//         return (num%10)**3+fact(parseInt(num/10))
//     }
// }

// var x=fact()
// console.log(x)


//USINGH WHILE LOOP
while (num>0) {
         n+=(num%10)**3 
         num=parseInt(num/10)
    }

if (check == n){
    console.log('yes')

}
else{
    console.log('no')
}
