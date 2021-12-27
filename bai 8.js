let n = +prompt('nhap so n')
function inFibo(n){
    let a = 0;
    let b = 1;
    let c = a+b;
    for(let i = 0 ; i <n ; i++){
        document.write( +b + " ")
        c= a +b;
        a=b;
        b=c;

    }

}
inFibo(n);