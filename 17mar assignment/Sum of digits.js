// sum of digits of a number

// input 12345
// output 15


function summ(n){

    if (n==0){
        return 0
    }
    return n%10 + summ(parseInt(n/10));
}

let x = summ(12345);
console.log(x)
