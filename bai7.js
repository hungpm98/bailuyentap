let n = +prompt('nhap vao n');

function checkSNT(n){
    let i = 2;
    while (i<n){
        if(n%i==0){
            return false;
        }
        i++;
    }
    return true;


}
let i=2 ;
while (i<=n){
    if (checkSNT(i)){
        document.write(+i+" ")
    }
    i++;
}