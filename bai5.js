let n = + prompt('nhap so n')
function daonguoc(n){
    let str = n.toString().split("").reverse().join("");
    let number = parseInt(str);
    document.write(number);

}
daonguoc(n);

