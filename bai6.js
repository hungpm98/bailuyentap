let n = +prompt('nhap vao so ');
for (let i =2 ; i<=n ; i++){
    if (checkSNT(i)){
        document.write(i+ " ")
    }
}
function  checkSNT(n){
    for (let i = 2; i<n ; i++){
        if (n % i == 0){
            return false;
        }
    }
    return true;
}
