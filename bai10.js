function tinhS(n) {
    let Sum = 0;
    for(let i = 1;i<=n;i++){
        Sum += 1/Math.pow(i,3);


    }
    document.write(Sum.toFixed(5));

}
tinhS(6)